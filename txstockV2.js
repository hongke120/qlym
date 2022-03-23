/*
腾讯自选股V2

更新了一下脚本，精简了需要的CK，多账户用换行(\n)或者@或者#隔开，尽量用换行隔开因为我没测试其他
一天跑两次就够了，10点到13点之间运行一次猜涨跌做任务，16点半之后运行一次领猜涨跌奖励
提现设置：默认提现5元，需要改的话自己设置TxStockCash变量，0代表不提现，1代表提现1元，5代表提现5元
新手任务设置：默认不做新手任务，需要做的话设置TxStockNewbie为1
分享任务设置：默认会做互助任务，需要多账号，黑号也能完成分享任务。不想做的话设置TxStockHelp为0
可以设置某些号只助力别的号不做任务(没资格的小号可以助力大号)，在对应的ck后面加&task=0
没有捉到微信CK的也可以跑脚本，删掉wzq_qlskey和wzq_qluin就行，会尝试用APP的CK去完成微信任务，出现做任务失败是正常现象

青龙捉包，需要捉APP和公众号里面的小程序
1. 打开APP，捉wzq.tenpay.com包，把url里的openid和fskey用&连起来填到TxStockCookie
2. 公众号 腾讯自选股微信版->右下角好福利->福利中心，捉wzq.tenpay.com包，把Cookie里的wzq_qlskey和wzq_qluin用&连起来填到TxStockCookie
格式如下：
export TxStockCookie='openid=xx&fskey=yy&wzq_qlskey=zz&wzq_qluin=aa'

V2P，圈X重写：
打开APP和小程序自动获取
小程序入口：公众号 腾讯自选股微信版->右下角好福利->福利中心
[task_local]
#腾讯自选股
35 11,16 * * * https://raw.githubusercontent.com/leafxcy/JavaScript/main/txstockV2.js, tag=腾讯自选股, enabled=true
[rewrite_local]
https://wzq.tenpay.com/cgi-bin/.*user.*.fcgi url script-request-header https://raw.githubusercontent.com/leafxcy/JavaScript/main/txstockV2.js
[MITM]
hostname = wzq.tenpay.com
*/
const jsname = '腾讯自选股V2'
const $ = new Env(jsname);

const notifyFlag = 1; //0为关闭通知，1为打开通知,默认为1
let notifyStr = ''

let envSplitor = ['\n','@','#']
let httpResult //global buffer

let withdrawCash = ($.isNode() ? (process.env.TxStockCash) : ($.getval('TxStockCash'))) || 5; //0为不自动提现,1为自动提现1元,5为自动提现5元
let helpFlag = ($.isNode() ? (process.env.TxStockHelp) : ($.getval('TxStockHelp'))) || 1; //0为不做分享助力任务，1为多用户互相分享助力
let newbieFlag = ($.isNode() ? (process.env.TxStockNewbie) : ($.getval('TxStockNewbie'))) || 0; //0为不做新手任务，1为自动做新手任务
let userCookie = ($.isNode() ? process.env.TxStockCookie : $.getdata('TxStockCookie')) || '';
let userList = []

let userIdx = 0
let userCount = 0

let TASK_WAITTIME = 100
let BULL_WAITTIME = 5000

let test_taskList = []
let todayDate = formatDateTime();
let SCI_code = '000001' //上证指数
let marketCode = {'sz':0, 'sh':1, 'hk':2, }
let signType = {task:'home', sign:'signdone', award:'award'}

let taskList = {
    app: {
        daily: [1105, 1101, 1111, 1113],
        newbie: [1023, 1033],
        dailyShare: ["news_share", "task_50_1101", "task_51_1101", "task_50_1111", "task_51_1111", "task_51_1113", "task_72_1113", "task_74_1113", "task_75_1113", "task_76_1113"],
        newbieShare: [],
    },
    wx: {
        daily: [1100, 1110, 1112],
        newbie: [1032],
        dailyShare: ["task_50_1100", "task_51_1100", "task_50_1110", "task_51_1110", "task_66_1110", "task_51_1112", "task_75_1112"],
        newbieShare: ["task_50_1032", "task_51_1032", "task_50_1033", "task_51_1033"],
    },
}

let bullTaskArray = { 
    "rock_bullish":{"taskName":"戳牛任务", "action":"rock_bullish", "actid":1105}, 
    "open_box":{"taskName":"开宝箱", "action":"open_box", "actid":1105}, 
    "open_blindbox":{"taskName":"开盲盒", "action":"open_blindbox", "actid":1105}, 
    "query_blindbox":{"taskName":"查询皮肤数量", "action":"query_blindbox", "actid":1105},
    "sell_skin":{"taskName":"卖皮肤", "action":"sell_skin", "actid":1105},
    "feed":{"taskName":"喂长牛", "action":"feed", "actid":1105},
}

///////////////////////////////////////////////////////////////////
class UserInfo {
    constructor(str) {
        this.index = ++userIdx
        this.name = this.index
        this.canRun = true
        this.hasWxCookie = true
        this.valid = false
        this.coin = -1
        this.shareCodes = {task:{}, newbie:{}, bull:{}, guess:{}}
        this.bullStatusFlag = false
        
        let info = str2json(str)
        this.openid = info['openid'] || ''
        this.fskey = info['fskey'] || ''
        this.wzq_qlskey = info['wzq_qlskey'] || ''
        this.wzq_qluin = info['wzq_qluin'] || ''
        this.task = info['task'] || 1
        this.cookie = `wzq_qlskey=${this.wzq_qlskey}; wzq_qluin=${this.wzq_qluin}; zxg_openid=${this.openid};`
        
        let checkParam = ['openid','fskey','wzq_qlskey','wzq_qluin']
        let missEnv = []
        for(let param of checkParam) {
            if(!this[param]) missEnv.push(param);
        }
        if(missEnv.length > 0) {
            let missStr = missEnv.join(', ')
            let notiStr = `账号[${this.index}]缺少参数：${missStr}`
            if(missStr.indexOf('openid') > -1 || missStr.indexOf('fskey') > -1 ) {
                notiStr += '，无法运行脚本'
                this.canRun = false
            } else if(missStr.indexOf('wzq_qlskey') > -1 || missStr.indexOf('wzq_qluin') > -1) {
                notiStr += '，尝试用APP的CK去完成微信任务和助力，可能出现失败情况'
                this.hasWxCookie = false
            }
            console.log(notiStr)
        }
    }
    
    async getUserName() {
        try {
            let url = `https://proxy.finance.qq.com/group/newstockgroup/RssService/getSightByUser2?g_openid=${this.openid}&openid=${this.openid}&fskey=${this.fskey}`
            let body = `g_openid=${this.openid}&search_openid=${this.openid}`
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.code==0) {
                this.name = result.data.user_name
            } else {
                console.log(`账号[${this.name}]查询账户昵称失败: ${result.msg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async getUserInfo(isWithdraw=false) {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/shop.fcgi?action=home_v2&type=2&openid=${this.openid}&fskey=${this.fskey}&channel=1`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                this.valid = true
                let lastCoin = this.coin
                this.coin = result.shop_asset ? result.shop_asset.amount : 0
                if(lastCoin > -1) {
                    logAndNotify(`账号[${this.name}]金币余额：${this.coin}，本次运行共获得${this.coin-lastCoin}金币`)
                } else {
                    console.log(`账号[${this.name}]金币余额：${this.coin}`)
                }
                
                if(isWithdraw && withdrawCash > 0) {
                    if(result.cash && result.cash.length > 0) {
                        let cashStr = `${withdrawCash}元现金`
                        for(let cashItem of result.cash) {
                            if(cashItem.item_desc == cashStr){
                                if(parseInt(this.coin) >= parseInt(cashItem.coins)){
                                    logAndNotify(`账号[${this.name}]金币余额多于${cashItem.coins}，开始提现${cashStr}`);
                                    await $.wait(TASK_WAITTIME);
                                    await this.getWithdrawTicket(cashItem.item_id);
                                } else {
                                    console.log(`账号[${this.name}]金币余额不足${cashItem.coins}，不提现`);
                                }
                                break;
                            }
                        }
                    }
                }
            } else {
                console.log(`账号[${this.name}]查询账户余额失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async signTask(actid,action,ticket='') {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity_sign_task.fcgi?actid=${actid}&channel=1&action=${action}&openid=${this.openid}&fskey=${this.fskey}`
            if(action == signType.task) {
                url += `&type=welfare_sign`
            } else if(action == signType.sign) {
                url += `&date=${todayDate}`
            } else if (action == signType.award) {
                url += `&reward_ticket=${ticket}`
            }
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(result.forbidden_code) {
                    console.log(`查询签到任务失败，可能已黑号: ${result.forbidden_reason}`)
                } else {
                    if(action == signType.task) {
                        console.log(`已连续签到${result.task_pkg.continue_sign_days}天，总签到天数${result.task_pkg.total_sign_days}天`)
                        for(let item of result.task_pkg.tasks) {
                            if(item.date == todayDate){
                                if(item.status == 0){
                                    //今天未签到，去签到
                                    await $.wait(TASK_WAITTIME);
                                    await this.signTask(actid,signType.sign);
                                } else {
                                    //今天已签到
                                    console.log(`今天已签到`);
                                }
                            }
                        }
                        if(result.lotto_chance > 0 && result.lotto_ticket) {
                            await $.wait(TASK_WAITTIME);
                            await this.signTask(actid,signType.award,result.lotto_ticket);
                        }
                    } else if(action == signType.sign) {
                        console.log(`签到获得${result.reward_desc}`);
                    } else if(action == signType.award) {
                        console.log(`领取连续签到奖励获得${result.reward_desc}`);
                    }
                }
            } else {
                console.log(`查询签到任务失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async guessHome() {
        try {
            let url = `https://zqact.tenpay.com/cgi-bin/guess_home.fcgi?channel=1&source=2&new_version=3&openid=${this.openid}&fskey=${this.fskey}`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                let curTime = new Date()
                let currentHour = curTime.getHours()
                let currentDay = curTime.getDay()
                let isGuessTime = ((currentHour < 13) && (currentHour > 9) && (currentDay < 6) && (currentDay > 0)) ? 1 : 0
                
                //上期猜上证指数奖励
                if(result.notice_info && result.notice_info[0]) {
                    if(result.notice_info[0].answer_status == 1) {
                        console.log(`上期猜上证指数涨跌回答正确，准备领取奖励...`)
                        await $.wait(TASK_WAITTIME);
                        await this.getGuessAward(result.notice_info[0].date)
                    } else {
                        console.log(`上期猜上证指数涨跌回答错误`)
                    }
                }
                
                //上期猜个股奖励
                if(result.stock_notice_info && result.stock_notice_info[0]) {
                    if(result.stock_notice_info[0].guess_correct == 1) {
                        console.log(`上期猜个股涨跌回答正确，准备领取奖励...`)
                        await $.wait(TASK_WAITTIME);
                        await this.getGuessStockAward(result.stock_notice_info[0].date)
                    } else {
                        console.log(`上期猜个股涨跌回答错误`)
                    }
                }
                
                if(isGuessTime) {
                    //猜上证指数
                    if((result.T_info && result.T_info[0] && result.T_info[0].user_answer == 0) || 
                       (result.T1_info && result.T1_info[0] && result.T1_info[0].user_answer == 0)) {
                        if(result.date_list) {
                            for(let item of result.date_list) {
                                if(item.status == 3 && item.date == todayDate) {
                                    await $.wait(TASK_WAITTIME);
                                    await this.getStockInfo(SCI_code,marketCode['sh'])
                                    await $.wait(TASK_WAITTIME);
                                    await this.guessRiseFall(this.guessOption)
                                }
                            }
                        }
                    } else {
                        console.log(`已竞猜当期上证指数涨跌`)
                    }
                    
                    //猜个股
                    if(result.recommend && result.recommend.length > 0) {
                        this.guessStockFlag = true
                        for(let item of result.recommend.sort(function(a,b){return Math.abs(b["zdf"])-Math.abs(a["zdf"])})) {
                            await $.wait(TASK_WAITTIME);
                            await this.guessStockStatus(item)
                            if(this.guessStockFlag==false) break;
                        }
                    }
                } else {
                    console.log(`脚本只会在10点到13点之间进行竞猜，当前为非竞猜时段`)
                }
                
                if(result.invite_info) {
                    this.shareCodes.guess = result.invite_info
                    console.log(`猜涨跌互助码获取成功`)
                }
            } else {
                console.log(`进入猜涨跌页面失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async getGuessAward(guessDate) {
        try {
            let url = `https://zqact.tenpay.com/cgi-bin/activity.fcgi?channel=1&activity=guess_new&guess_act_id=3&guess_date=${guessDate}&guess_reward_type=1&openid=${this.openid}&fskey=${this.fskey}`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                console.log(`猜中上证指数涨跌获得${result.reward_value}金币`);
            } else {
                console.log(`领取猜上证指数奖励失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async getGuessStockAward(guessDate) {
        try {
            let url = `https://zqact.tenpay.com/cgi-bin/activity/activity.fcgi?activity=guess_new&action=guess_stock_reward&guess_date=${guessDate}&channel=1&openid=${this.openid}&fskey=${this.fskey}`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(result.stock_rewards && result.stock_rewards.length > 0) {
                    for(let item of result.stock_rewards) {
                        console.log(`猜中个股[${item.stock_name}]涨跌获得${item.reward_desc}`);
                    }
                }
                console.log(`猜中个股涨跌总奖励${result.stock_reward_desc}`);
            } else {
                console.log(`领取猜个股奖励失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async getStockInfo(scode,markets) {
        try {
            let url = `https://zqact.tenpay.com/cgi-bin/open_stockinfo.fcgi?scode=${scode}&markets=${markets}&needfive=0&needquote=1&needfollow=0&type=0&channel=1&openid=${this.openid}&fskey=${this.fskey}`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.body) {
                result = JSON.parse(result.body.replace(/\\x/g,''))
            }
            if(result.retcode==0) {
                let stockName = result.secu_info.secu_name || ''
                if(stockName) {
                    let dqj = result.secu_quote.dqj || 0
                    let zsj = result.secu_quote.zsj || 0
                    let raise = dqj - zsj
                    let ratio = raise/zsj*100
                    let guessStr = (raise < 0) ? '跌' : '涨'
                    this.guessOption = (raise < 0) ? 2 : 1
                    console.log(`${stockName}：当前价格${dqj}，前天收市价${zsj}，涨幅${Math.floor(ratio*100)/100}% (${Math.floor(raise*100)/100})，猜${guessStr}`);
                }
            } else {
                console.log(`获取股票涨跌信息失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async guessRiseFall(answer) {
        try {
            let url = `https://zqact.tenpay.com/cgi-bin/guess_op.fcgi?action=2&act_id=3&user_answer=${answer}&date=${todayDate}&channel=1&openid=${this.openid}&fskey=${this.fskey}`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            let guessStr = (answer==1) ? "猜涨" : "猜跌"
            if(result.retcode==0) {
                console.log(`竞猜上证指数${guessStr}成功`)
            } else {
                console.log(`竞猜上证指数${guessStr}失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async guessStockRiseFall(stockItem,answer) {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/guess_op.fcgi?openid=${this.openid}&fskey=${this.fskey}&check=11`
            let body = `source=3&channel=1&outer_src=0&new_version=3&symbol=${stockItem.symbol}&date=${todayDate}&action=2&user_answer=${answer}&openid=${this.openid}&fskey=${this.fskey}&check=11`
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            let guessStr = (answer==1) ? "猜涨" : "猜跌"
            if(result.retcode==0) {
                console.log(`竞猜个股${guessStr}成功`)
            } else {
                console.log(`竞猜个股${guessStr}失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async guessStockStatus(stockItem) {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/guess_home.fcgi?openid=${this.openid}&fskey=${this.fskey}&check=11&source=3&channel=1&symbol=${stockItem.symbol}&new_version=3`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                console.log(`剩余猜个股涨跌次数：${result.guess_times_left}`);
                if(result.guess_times_left > 0) {
                    if(result.T_info.user_answer > 0) {
                        console.log(`已竞猜：${stockItem.stockname}`);
                    } else {
                        let guessStr = (stockItem.zdf < 0) ? '跌' : '涨'
                        let answer = (stockItem.zdf < 0) ? 2 : 1
                        console.log(`${stockItem.stockname}今天涨幅为${stockItem.zdf}%，猜${guessStr}`)
                        await $.wait(TASK_WAITTIME);
                        await this.guessStockRiseFall(stockItem,answer)
                    }
                } else {
                    console.log(`竞猜个股次数已用完`);
                    this.guessStockFlag = false
                }
            } else {
                console.log(`获取竞猜个股次数失败: ${result.retmsg}`)
                this.guessStockFlag = false
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async queryTaskList(taskItem) {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity_${taskItem.activity}.fcgi?action=home&type=${taskItem.type}&actid=${taskItem.actid}&invite_code=&openid=${this.openid}&fskey=${this.fskey}&channel=1`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(result.task_pkg && result.task_pkg.length > 0){
                    console.log(`[${taskItem.actid}]有${result.task_pkg.length}个任务`)
                    test_taskList.push(taskItem.actid)
                }
            } else {
                //console.log(`查询[${taskItem.actid}]列表失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async getNewbieAward(actid,ticket) {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=award&channel=1&actid=${actid}&reward_ticket=${ticket}&openid=${this.openid}&fskey=${this.fskey}&channel=1`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                console.log(`获得新手任务[actid:${actid}]阶段奖励: ${result.reward_desc}`);
            } else {
                console.log(`新手任务[actid:${actid}]阶段未完成：${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async appGetTaskList(taskItem) {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity_${taskItem.activity}.fcgi?action=home&type=${taskItem.type}&actid=${taskItem.actid}&invite_code=&openid=${this.openid}&fskey=${this.fskey}&channel=1`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(result.forbidden_code) {
                    console.log(`获取${taskItem.taskName}[${taskItem.actid}]列表失败: ${result.forbidden_reason}`)
                } else {
                    if(result.task_pkg && result.task_pkg.length > 0){
                        for(let item of result.task_pkg) {
                            if(item.lotto_ticket) {
                                //可领取新手奖励
                                await this.getNewbieAward(taskItem.actid,item.lotto_ticket)
                                continue;
                            }
                            if(item.reward_type > 0) {
                                //已领取过新手奖励
                                continue;
                            }
                            if(item.tasks && item.tasks.length > 0) {
                                for(let task of item.tasks) {
                                    await $.wait(TASK_WAITTIME);
                                    await this.appGetTaskStatus(taskItem,task.id,task.tid);
                                }
                            }
                        }
                    }
                }
            } else {
                console.log(`获取${taskItem.taskName}[${taskItem.actid}]列表失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async appGetTaskStatus(taskItem,id,tid) {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?id=${id}&tid=${tid}&actid=${taskItem.actid}&channel=1&action=taskstatus&openid=${this.openid}&fskey=${this.fskey}`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(result.done == 0) {
                    await $.wait(TASK_WAITTIME);
                    await this.appGetTaskTicket(taskItem,id,tid);
                    
                } else {
                    console.log(`${taskItem.taskName}[${taskItem.actid}-${id}-${tid}]已完成`);
                }
            } else {
                console.log(`查询[${taskItem.actid}-${id}-${tid}]状态失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async appGetTaskTicket(taskItem,id,tid) {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskticket&channel=1&actid=${taskItem.actid}&openid=${this.openid}&fskey=${this.fskey}&channel=1`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                await $.wait(TASK_WAITTIME);
                await this.appTaskDone(taskItem,result.task_ticket,id,tid);
            } else {
                console.log(`申请任务票据失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async appTaskDone(taskItem,ticket,id,tid) {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=${taskItem.actid}&id=${id}&tid=${tid}&task_ticket=${ticket}&openid=${this.openid}&fskey=${this.fskey}&channel=1`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                console.log(`完成${taskItem.taskName}[${taskItem.actid}-${id}-${tid}]:获得 ${result.reward_desc}`);
            } else {
                console.log(`${taskItem.taskName}[${taskItem.actid}-${id}-${tid}]未完成：${result.retmsg}`);
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async wxGetTaskList(taskItem) {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity_${taskItem.activity}.fcgi?action=home&type=${taskItem.type}&actid=${taskItem.actid}&invite_code=`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(result.forbidden_code) {
                    console.log(`获取${taskItem.taskName}[${taskItem.actid}]列表失败: ${result.forbidden_reason}`)
                } else {
                    if(result.task_pkg && result.task_pkg.length > 0){
                        for(let item of result.task_pkg) {
                            if(item.lotto_ticket) {
                                //可领取新手奖励
                                await this.getNewbieAward(taskItem.actid,item.lotto_ticket)
                                continue;
                            }
                            if(item.reward_type > 0) {
                                //已领取过新手奖励
                                continue;
                            }
                            if(item.tasks && item.tasks.length > 0) {
                                for(let task of item.tasks) {
                                    await $.wait(TASK_WAITTIME);
                                    await this.wxGetTaskStatus(taskItem,task.id,task.tid);
                                }
                            }
                        }
                    }
                }
            } else {
                console.log(`获取${taskItem.taskName}[${taskItem.actid}]列表失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async wxGetTaskStatus(taskItem,id,tid,task_ticket='') {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi`
            let body = `actid=${taskItem.actid}&id=${id}&tid=${tid}&action=taskstatus`
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(result.done == 0) {
                    await $.wait(TASK_WAITTIME);
                    await this.wxGetTaskTicket(taskItem,id,tid);
                } else {
                    console.log(`${taskItem.taskName}[${taskItem.actid}-${id}-${tid}]已完成`);
                }
            } else {
                console.log(`查询[${taskItem.actid}-${id}-${tid}]状态失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async wxGetTaskTicket(taskItem,id,tid) {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi`
            let body = `actid=${taskItem.actid}&action=taskticket`
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                await $.wait(TASK_WAITTIME);
                await this.wxTaskDone(taskItem,result.task_ticket,id,tid);
            } else {
                console.log(`申请任务票据失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async wxTaskDone(taskItem,ticket,id,tid) {
        try {
            
            let url = `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi`
            let body = `actid=${taskItem.actid}&id=${id}&tid=${tid}&action=taskdone&task_ticket=${ticket}`
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                console.log(`完成${taskItem.taskName}[${taskItem.actid}-${id}-${tid}]:获得 ${result.reward_desc}`);
            } else {
                console.log(`${taskItem.taskName}[${taskItem.actid}-${id}-${tid}]未完成：${result.retmsg}`);
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async getWithdrawTicket(item_id) {
        try {
            let url = `https://zqact03.tenpay.com/cgi-bin/shop.fcgi?action=order_ticket&type=2&openid=${this.openid}&fskey=${this.fskey}&channel=1`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(result.ticket) {
                    await $.wait(TASK_WAITTIME);
                    await this.withdraw(result.ticket,item_id);
                } else {
                    console.log(`申请提现票据失败`);
                }
            } else {
                console.log(`申请提现票据失败: ${result.retmsg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async withdraw(ticket,item_id) {
        try {
            let url = `https://zqact03.tenpay.com/cgi-bin/shop.fcgi?action=order&type=2&ticket=${ticket}&item_id=${item_id}&openid=${this.openid}&fskey=${this.fskey}&channel=1`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                logAndNotify(`提现结果：${result.retmsg}`);
            } else {
                logAndNotify(`提现失败：${result.retmsg}`);
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async bullStatus() {
        try {
            let url = `https://zqact03.tenpay.com/cgi-bin/activity_year_party.fcgi?invite_code=&help_code=&share_date=&type=bullish&action=home&actid=1105&openid=${this.openid}&fskey=${this.fskey}&channel=1`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(result.forbidden_code) {
                    console.log(`长牛可能已黑号：${result.forbidden_reason}`);
                } else {
                    this.bullStatusFlag = true
                    this.shareCodes.bull.invite = result.invite_code || ''
                    this.shareCodes.bull.help = result.help_code || ''
                    console.log(`长牛状态：`)
                    console.log(`等级: ${result.bullish_info.level}`)
                    console.log(`下一级需要经验: ${result.bullish_info.next_level_exp}`)
                    console.log(`现有经验: ${result.bullish_info.exp_value}`)
                    console.log(`现有牛气: ${result.bullish_info.bullish_value}`)
                }
            } else {
                console.log(`查询长牛状态失败：${result.retmsg}`);
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async bullTaskDone(taskItem,extra='') {
        try {
            let url = `https://zqact03.tenpay.com/cgi-bin/activity_year_party.fcgi?type=bullish&action=${taskItem.action}&actid=${taskItem.actid}${extra}&openid=${this.openid}&fskey=${this.fskey}&channel=1`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(result.forbidden_code > 0) {
                    console.log(`结束${taskItem.taskName}：${result.forbidden_reason}`);
                } else if(result.reward_info) {
                    console.log(`${taskItem.taskName}获得: ${result.reward_info[0].reward_desc}`);
                    await $.wait(BULL_WAITTIME);
                    await this.bullTaskDone(taskItem)
                } else if(result.award_desc) {
                    console.log(`${taskItem.taskName}获得: ${result.award_desc}`);
                    await $.wait(BULL_WAITTIME);
                    await this.bullTaskDone(taskItem,extra)
                } else if(result.skin_info) {
                    console.log(`${taskItem.taskName}获得: ${result.skin_info.skin_desc}`);
                    await $.wait(BULL_WAITTIME);
                    await this.bullTaskDone(taskItem)
                } else if(result.skin_list && result.skin_list.length > 0) {
                    for(let skinItem of result.skin_list) {
                        if(skinItem.skin_num > 1) {
                            await $.wait(BULL_WAITTIME);
                            await this.bullTaskDone(bullTaskArray["sell_skin"],`&skin_type=${skinItem.skin_type}`)
                        }
                    }
                } else if(result.feed_reward_info) {
                    console.log(`${taskItem.taskName}获得: ${result.feed_reward_info.reward_desc}`);
                    if(result.level_up_status == 1) {
                        console.log(`长牛升级到等级${result.update_new_level}，获得: ${result.level_reward_info.reward_desc}`);
                    }
                    await $.wait(BULL_WAITTIME);
                    await this.bullTaskDone(taskItem)
                } else {
                    console.log(result)
                } 
            } else {
                console.log(`${taskItem.taskName}失败：${result.retmsg}`);
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async userBullTask() {
        try {
            await this.bullStatus();
            if(!this.bullStatusFlag) return;
            await $.wait(TASK_WAITTIME);
            await this.bullTaskDone(bullTaskArray["rock_bullish"])
            await $.wait(TASK_WAITTIME);
            for(let i=0; i<10; i++){
                await this.bullTaskDone(bullTaskArray["open_box"])
                if(i < 9) await $.wait(BULL_WAITTIME)
            }
            await $.wait(TASK_WAITTIME);
            await this.bullTaskDone(bullTaskArray["open_blindbox"])
            await $.wait(TASK_WAITTIME);
            await this.bullTaskDone(bullTaskArray["query_blindbox"])
            await $.wait(TASK_WAITTIME);
            await this.bullTaskDone(bullTaskArray["feed"])
            await $.wait(TASK_WAITTIME);
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async appGetShareCode(share_type,type='daily') {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi?channel=1&action=query_share_code&share_type=${share_type}&openid=${this.openid}&fskey=${this.fskey}&buildType=store&check=11&_idfa=&lang=zh_CN`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(type == 'newbie') {
                    this.shareCodes.newbie[share_type] = result.share_code
                    console.log(`获取新手任务[${share_type}]互助码：${result.share_code}`)
                } else {
                    this.shareCodes.task[share_type] = result.share_code
                    console.log(`获取日常任务[${share_type}]互助码：${result.share_code}`)
                }
            } else {
                console.log(`获取[${share_type}]互助码失败：${result.retmsg}`);
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async wxGetShareCode(share_type,type='daily') {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity_share.fcgi`
            let body = `action=query_share_code&share_type=${share_type}`
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(type == 'newbie') {
                    this.shareCodes.newbie[share_type] = result.share_code
                    console.log(`获取新手任务[${share_type}]互助码：${result.share_code}`)
                } else {
                    this.shareCodes.task[share_type] = result.share_code
                    console.log(`获取日常任务[${share_type}]互助码：${result.share_code}`)
                }
            } else {
                console.log(`获取[${share_type}]互助码失败：${result.retmsg}`);
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async appDoShare(share_type,share_code) {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity_share.fcgi?action=share_code_info&share_type=${share_type}&share_code=${share_code}&openid=${this.openid}&fskey=${this.fskey}&channel=1`
            let body = ``
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(result.share_code_info && result.share_code_info.status == 1) {
                    console.log(`[${share_type}]助力成功，对方昵称：[${result.share_code_info.nickname}]`);
                } else if(result.retmsg == "OK") {
                    console.log(`[${share_type}]已经助力过了`);
                } else {
                    console.log(result)
                }
            } else {
                console.log(`[${share_type}]助力失败：${result.retmsg}`);
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async wxDoShare(share_type,share_code) {
        try {
            let url = `https://wzq.tenpay.com/cgi-bin/activity_share.fcgi`
            let body = `action=share_code_info&share_type=${share_type}&share_code=${share_code}`
            let urlObject = populateUrlObject(url,this.cookie,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.retcode==0) {
                if(result.share_code_info && result.share_code_info.status == 1) {
                    console.log(`[${share_type}]助力成功，对方昵称：[${result.share_code_info.nickname}]`);
                } else if(result.retmsg == "OK") {
                    console.log(`[${share_type}]已经助力过了`);
                } else {
                    console.log(result)
                }
            } else {
                console.log(`[${share_type}]助力失败：${result.retmsg}`);
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
}

!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite()
    }else {
        console.log('\n变量填写格式，多账号用换行(\\n)或者@或者#隔开:\nopenid=xx&fskey=yy&wzq_qlskey=zz&wzq_qluin=aa\n')
        if(!(await checkEnv())) return;
        
        console.log('\n=================== 用户信息 ===================')
        for(let user of userList.filter(x => x.canRun)) {
            await user.getUserName();
            await $.wait(TASK_WAITTIME);
            await user.getUserInfo(); 
            await $.wait(TASK_WAITTIME);
        }
        
        let validUserList = userList.filter(x => x.valid)
        if(validUserList.length == 0) return;
        let validUserCount = validUserList.length;
        
        console.log('\n=================== 互助设置 ===================')
        let doHelp = false;
        if(helpFlag) {
            if(validUserCount < 2) {
                console.log('有效用户少于2个，不做互助任务')
            } else {
                console.log('有效用户大于等于2个，且设置了互助开关，开启互助')
                doHelp = true;
            }
        } else {
            console.log('当前设置为不互助，要做互助任务请设置TxStockHelp为1')
        }
        
        for(let user of validUserList) {
            if(user.task == 1) {
                console.log(`\n----------- 账号${user.index}[${user.name}] -----------`)
                await user.signTask(2002,signType.task); 
                await $.wait(TASK_WAITTIME);
                await user.guessHome(); 
                await $.wait(TASK_WAITTIME);
                for(let id of taskList.app.daily) {
                    let taskItem = {"taskName":"APP任务","activity":"task_daily","type":"routine","actid":id}
                    await user.appGetTaskList(taskItem); 
                    await $.wait(TASK_WAITTIME);
                }
                for(let id of taskList.wx.daily) {
                    let taskItem = {"taskName":"微信任务","activity":"task_daily","type":"routine","actid":id}
                    if(user.hasWxCookie) {
                        await user.wxGetTaskList(taskItem); 
                    } else {
                        await user.appGetTaskList(taskItem); 
                    }
                    await $.wait(TASK_WAITTIME);
                }
                if(doHelp) {
                    for(let task of taskList.app.dailyShare) {
                        await user.appGetShareCode(task); 
                        await $.wait(TASK_WAITTIME);
                    }
                    for(let task of taskList.wx.dailyShare) {
                        if(user.hasWxCookie) {
                            await user.wxGetShareCode(task); 
                        } else {
                            await user.appGetShareCode(task); 
                        }
                        await $.wait(TASK_WAITTIME);
                    }
                }
            }
        }
        
        console.log('\n=================== 新手任务 ===================')
        if(newbieFlag) {
            for(let user of validUserList) {
                if(user.task == 1) {
                    console.log(`\n----------- 账号${user.index}[${user.name}] -----------`)
                    for(let id of taskList.app.newbie) {
                        let taskItem = {"taskName":"APP新手任务","activity":"task_continue","type":"app_new_user","actid":id}
                        await user.appGetTaskList(taskItem); 
                        await $.wait(TASK_WAITTIME);
                    }
                    for(let id of taskList.wx.newbie) {
                        let taskItem = {"taskName":"微信新手任务","activity":"task_continue","type":"wzq_welfare_growth","actid":id}
                        if(user.hasWxCookie) {
                            await user.wxGetTaskList(taskItem); 
                        } else {
                            await user.appGetTaskList(taskItem); 
                        }
                        await $.wait(TASK_WAITTIME);
                    }
                }
            }
            
            console.log('\n=================== 新手互助任务 ===================')
            if(validUserCount > 1) {
                for(let user of validUserList) {
                    if(user.task == 1) {
                        console.log(`\n----------- 账号${user.index}[${user.name}] -----------`)
                        for(let task of taskList.wx.newbieShare) {
                            if(user.hasWxCookie) {
                                await user.wxGetShareCode(task,'newbie'); 
                            } else {
                                await user.appGetShareCode(task,'newbie'); 
                            }
                            await $.wait(TASK_WAITTIME);
                        }
                    }
                }
                for(let idx=0; idx < validUserCount; idx++) {
                    let helper = validUserList[idx]
                    let helpee = validUserList[(idx+1)%validUserCount]
                    console.log(`\n--> 账号${helper.index}[${helper.name}] 去助力 账号${helpee.index}[${helpee.name}]:`)
                    for(let type in helpee.shareCodes.newbie) {
                        if(helper.hasWxCookie) {
                            await helper.wxDoShare(type,helpee.shareCodes.newbie[type]); 
                        } else {
                            await helper.appDoShare(type,helpee.shareCodes.newbie[type]); 
                        }
                        await $.wait(TASK_WAITTIME);
                    }
                }
            } else {
                console.log('有效用户少于2个，无法完成新手互助任务')
            }
            
            
        } else {
            console.log('当前设置为不做新手任务，要做新手任务请设置TxStockNewbie为1')
        }
        
        
        if(doHelp) {
            console.log('\n=================== 互助 ===================')
            for(let idx=0; idx < validUserCount; idx++) {
                let helper = validUserList[idx]
                for(let helpIdx=1; helpIdx < validUserCount; helpIdx++) {
                    let helpee = validUserList[(helpIdx+idx)%validUserCount]
                    if(helpee.task == 0) continue;
                    console.log(`\n--> 账号${helper.index}[${helper.name}] 去助力 账号${helpee.index}[${helpee.name}]:`)
                    for(let type in helpee.shareCodes.task) {
                        if(helper.hasWxCookie) {
                            await helper.wxDoShare(type,helpee.shareCodes.task[type]); 
                        } else {
                            await helper.appDoShare(type,helpee.shareCodes.task[type]); 
                        }
                        await $.wait(TASK_WAITTIME);
                    }
                }
            }
        }
        
        console.log('\n=================== 长牛 ===================')
        for(let user of validUserList) {
            if(user.task == 1) {
                console.log(`\n----------- 账号${user.index}[${user.name}] -----------`)
                await user.userBullTask(); 
                await $.wait(TASK_WAITTIME);
            }
        }
        
        console.log('\n=================== 提现 ===================')
        for(let user of validUserList) {
            if(user.task == 1) {
                await user.getUserInfo(true); 
                await $.wait(TASK_WAITTIME);
            }
        }
        
        await showmsg();
    }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

///////////////////////////////////////////////////////////////////
async function GetRewrite() {
    if($request.url.indexOf(`cgi-bin/userinfo.fcgi`) > -1 && $request.headers.Cookie) {
        let openid = $request.headers.Cookie.match(/zxg_(openid=[\w\-]+)/)[1]
        if(openid == 'openid=anonymous') return;
        let fskey = 'fskey='
        let qlskey = $request.headers.Cookie.match(/(wzq_qlskey=[\w\-]+)/)[1]
        let qluin = $request.headers.Cookie.match(/(wzq_qluin=[\w\-]+)/)[1]
        let ck = `${openid}&${fskey}&${qlskey}&${qluin}`
        
        if(userCookie) {
            if(userCookie.indexOf(openid) == -1) {
                userCookie = userCookie + '\n' + ck
                $.setdata(userCookie, 'TxStockCookie');
                let ckList = userCookie.split('\n')
                $.msg(jsname+` 获取第${ckList.length}个ck成功: ${ck}`)
            } else {
                if(userCookie.indexOf(openid) > -1 && userCookie.indexOf(qlskey) > -1 && userCookie.indexOf(qluin) > -1) return;
                let ckList = userCookie.split('\n')
                let idx = 0
                for(idx in ckList) {
                    if(ckList[idx].indexOf(openid) > -1) {
                        fskey = ckList[idx].match(/(fskey=[\w-]*)/)[1] 
                        ck = `${openid}&${fskey}&${qlskey}&${qluin}`
                        ckList[idx] = ck
                        break;
                    }
                }
                userCookie = ckList.join('\n')
                $.setdata(userCookie, 'TxStockCookie');
                $.msg(jsname+` 更新第${parseInt(idx)+1}个ck成功: ${ck}`)
            }
        } else {
            $.setdata(ck, 'TxStockCookie');
            $.msg(jsname+` 获取第1个ck成功: ${ck}`)
        }
    } else if($request.url.indexOf(`cgi-bin/activity_usercenter.fcgi`) > -1) {
        let openid = $request.url.match(/(openid=[\w\-]*)/)[1]
        if(openid == 'openid=anonymous') return;
        let fskey = $request.url.match(/(fskey=[\w\-]*)/)[1]
        let qlskey = 'wzq_qlskey='
        let qluin = 'wzq_qluin='
        let ck = `${openid}&${fskey}&${qlskey}&${qluin}`
        
        if(userCookie) {
            if(userCookie.indexOf(openid) == -1) {
                userCookie = userCookie + '\n' + ck
                $.setdata(userCookie, 'TxStockCookie');
                let ckList = userCookie.split('\n')
                $.msg(jsname+` 获取第${ckList.length}个ck成功: ${ck}`)
            } else {
                if(userCookie.indexOf(openid) > -1 && userCookie.indexOf(fskey) > -1) return;
                let ckList = userCookie.split('\n')
                let idx = 0
                for(idx in ckList) {
                    if(ckList[idx].indexOf(openid) > -1) {
                        qlskey = ckList[idx].match(/(wzq_qlskey=[\w-]*)/)[1]
                        qluin = ckList[idx].match(/(wzq_qluin=[\w-]*)/)[1]
                        ck = `${openid}&${fskey}&${qlskey}&${qluin}`
                        ckList[idx] = ck
                        break;
                    }
                }
                userCookie = ckList.join('\n')
                $.setdata(userCookie, 'TxStockCookie');
                $.msg(jsname+` 更新第${parseInt(idx)+1}个ck成功: ${ck}`)
            }
        } else {
            $.setdata(ck, 'TxStockCookie');
            $.msg(jsname+` 获取第1个ck成功: ${ck}`)
        }
    }
}

async function checkEnv() {
    if(userCookie) {
        let splitor = envSplitor[0];
        for(let sp of envSplitor) {
            if(userCookie.indexOf(sp) > -1) {
                splitor = sp;
                break;
            }
        }
        for(let userCookies of userCookie.split(splitor)) {
            if(userCookies) userList.push(new UserInfo(userCookies))
        }
        userCount = userList.filter(x => x.canRun).length
    } else {
        console.log('未找到CK')
        return;
    }
    
    console.log(`共找到${userCount}个有效账号`)
    return true
}

//通知
async function showmsg() {
    if(!notifyStr) return;
    notifyBody = jsname + "运行通知\n\n" + notifyStr
    if (notifyFlag > 0) {
        if($.isNode()){
            var notify = require('./sendNotify');
            await notify.sendNotify($.name, notifyBody );
        } else {
            $.msg(notifyBody);
        }
    } else {
        console.log('\n'+notifyBody);
    }
}

function formatDateTime() {
    var date = new Date();
    var y = date.getFullYear();
    var m = padStr(date.getMonth()+1,2);
    var d = padStr(date.getDate(),2);
    return `${y}${m}${d}`;
};

function logAndNotify(str) {
    console.log(str)
    notifyStr += str
    notifyStr += '\n'
}

//pushDear
async function pushDear(str) {
    if(!PushDearKey) return;
    if(!str) return;
    
    console.log('\n============= PushDear 通知 =============\n')
    console.log(str)
    let urlObject = {
        url: `https://api2.pushdeer.com/message/push?pushkey=${PushDearKey}&text=${encodeURIComponent(str)}`,
        headers: {},
    };
    await httpRequest('get',urlObject)
    let result = httpResult;
    let retStr = result.content.result==false ? '失败' : '成功'
    console.log(`\n========== PushDear 通知发送${retStr} ==========\n`)
}
////////////////////////////////////////////////////////////////////
function populateUrlObject(url,cookie,body=''){
    let host = url.replace('//','/').split('/')[1]
    let urlObject = {
        url: url,
        headers: {
            'Host': host,
            'Cookie': cookie,
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001028) NetType/WIFI Language/zh_CN',
            'Connection': 'keep-alive',
        },
    }
    if(body) {
        urlObject.body = body
        urlObject.headers['Content-Type'] =  'application/x-www-form-urlencoded'
        urlObject.headers['Content-Length'] = urlObject.body ? urlObject.body.length : 0
    }
    return urlObject;
}

async function httpRequest(method,url,timeout=5000) {
    httpResult = null
    return new Promise((resolve) => {
        $[method](url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${method}请求失败`);
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        httpResult = JSON.parse(data);
                    } else {
                        httpResult = resp;
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        },timeout);
    });
}

function safeGet(data) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        } else {
            console.log(data)
            return false;
        }
    } catch (e) {
        //console.log(e);
        //console.log(`服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
}

function getMin(a,b){
    return ((a<b) ? a : b)
}

function getMax(a,b){
    return ((a<b) ? b : a)
}

function padStr(num,length,padding='0') {
    let numStr = String(num)
    let numPad = (length>numStr.length) ? (length-numStr.length) : 0
    let retStr = ''
    for(let i=0; i<numPad; i++) {
        retStr += padding
    }
    retStr += numStr
    return retStr;
}

function json2str(obj,encodeUrl=false) {
    let ret = []
    for(let keys of Object.keys(obj).sort()) {
        let v = obj[keys]
        if(v && encodeUrl) v = encodeURIComponent(v)
        ret.push(keys+'='+v)
    }
    return ret.join('&');
}

function str2json(str,decodeUrl=false) {
    let ret = {}
    for(let item of str.split('&')) {
        if(!item) continue;
        let kv = item.split('=')
        if(kv.length < 2) continue;
        if(decodeUrl) {
            ret[kv[0]] = decodeURIComponent(kv[1])
        } else {
            ret[kv[0]] = kv[1]
        }
    }
    return ret;
}

function randomString(len=12) {
    let chars = 'abcdef0123456789';
    let maxLen = chars.length;
    let str = '';
    for (i = 0; i < len; i++) {
        str += chars.charAt(Math.floor(Math.random()*maxLen));
    }
    return str;
}

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

function MD5Encrypt(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()}

function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),"PUT"===e&&(s=this.put),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}put(t){return this.send.call(this.env,t,"PUT")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}put(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.put(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="PUT",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.put(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
