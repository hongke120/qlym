/*
IOS/安卓：都爱玩

炒个冷饭，之前有几位大佬已经写过了
现在支持了苹果和安卓双端的任务，两边账户分红币独立，理论上收益可以翻倍，每天2块多到3块的样子，不过提现次数似乎两边共用
支持多账户，可以并发看视频广告，减少运行时间，V2P跑有时会有code=400错误信息，忽略就好
重写捉包只需要捉其中一端的账号即可，ck通用
脚本内置了自动提现，默认提现到微信
在【我的】页面可以花0.1购买普通会员，马上返1元可提现。会员每日可以积分兑换0.1-0.2的红包，聊胜于无吧，建议购买
建议每天多跑几次，池子有额度就能投进去分红

青龙：
捉取https://v3.sdk.haowusong.com/api/box/wallet/info的包里的token，写到环境变量dawToken里，多账户用@隔开
export dawToken='account1@account2@account3'

V2P重写：打开APP即可获取CK，没有的话点一下下面分红币页面，可以直接捉多账号
[task_local]
#都爱玩
15 0,1,8,15,20 * * * https://raw.githubusercontent.com/leafxcy/JavaScript/main/daw.js, tag=都爱玩, enabled=true
[rewrite_local]
https://v3.sdk.haowusong.com/api/box/wallet/info url script-request-header https://raw.githubusercontent.com/leafxcy/JavaScript/main/daw.js
[MITM]
hostname = v3.sdk.haowusong.com
*/

const jsname = '都爱玩 by leaf '
const $ = Env(jsname)

const logDebug = 0

//0为关闭通知，1为打开通知，默认为1，可以在环境变量设置
let notifyFlag = ($.isNode() ? process.env.dawNotify : $.getdata('dawNotify')) || 1;
let notifyStr = ''
const notify = $.isNode() ? require('./sendNotify') : '';

let rndtime = "" //毫秒
let httpResult //global buffer

let userToken = ''
let userIdx = 0
let numBoxbody = 0
let coinStatus = []

let maxTryNum = 12
let waitTime = 0
let allCompFlag = 0

let channelIdx = 0
let channel = ['dawbox','dawbox-android']
let channelStr = ['苹果端','安卓端']
let withdrawList = []
let withdrawMethod = []

let dawToken = ($.isNode() ? process.env.dawToken : $.getdata('dawToken')) || '';
let dawTokenArr = []

let userName = ''
let isVip = 0
let vipLevel = 0

///////////////////////////////////////////////////////////////////

!(async () => {

    if(typeof $request !== "undefined")
    {
        await GetRewrite()
    }
    else
    {
        await CheckEnv()
        
        numBoxbody = dawTokenArr.length
        console.log(`找到${numBoxbody}个账户，脚本会同时做IOS和安卓端任务\n`)
        
        for(channelIdx=0; channelIdx<channel.length; channelIdx++) {
            for(userIdx=0; userIdx<numBoxbody; userIdx++) {
                if(await QueryVipInfo()) {
                    if(!coinStatus[channelIdx*numBoxbody+userIdx]) coinStatus.push(1)
                    await $.wait(100)
                    await QueryWarehouse() //查询现有币和仓库容量
                }
            }
        }
        
        for(channelIdx=0; channelIdx<channel.length; channelIdx++) {
            console.log(`\n先每个账号并发看广告和抽奖，开始${channelStr[channelIdx]}任务`)
            for(let i=0; i<maxTryNum; i++) {
                console.log(`\n======== 第${i+1}轮看视频抽奖 ========`)
                allCompFlag = 1
                waitTime = 65*1000
                
                for(userIdx=0; userIdx<numBoxbody; userIdx++) {
                    if(coinStatus[channelIdx*numBoxbody+userIdx] == 1) {
                        if(await QueryVipInfo()) {
                            console.log(`账户${userIdx+1}${channelStr[channelIdx]} ${userName}：`)
                            await QueryCoinInfo(1) //做领币任务
                        }
                    } else {
                        console.log(`账户${userIdx+1}${channelStr[channelIdx]} ${userName}：DAB已满且暂时无法投入分红池，暂停做任务`)
                    }
                }
                
                if(allCompFlag) {
                    console.log(`所有账号已完成看广告和抽奖任务`)
                    break
                } else if (i < maxTryNum-1){
                    if(waitTime > 0) {
                        console.log(`等待${waitTime}ms 进行下一轮看视频抽奖\n`)
                        await $.wait(waitTime)
                    }
                }
            }
        }
        
        console.log(`\n开始签到，领取任务奖励，兑换红包和提现`)
        for(channelIdx=0; channelIdx<channel.length; channelIdx++) {
            for(userIdx=0; userIdx<numBoxbody; userIdx++) {
                if(await QueryVipInfo()) {
                    console.log(`\n账户${userIdx+1}${channelStr[channelIdx]}： ${userName}`)
                    notifyStr += `\n账户${userIdx+1}${channelStr[channelIdx]}： ${userName}\n`
                    
                    await $.wait(100)
                    await QueryCoinInfo(0) //投入瓜分池
                    
                    await $.wait(100)
                    await QuerySignList() //签到
                    
                    await $.wait(100)
                    await QueryTaskList() //做积分任务
                    
                    await $.wait(100)
                    await QueryMallExchange(0) //兑换积分红包
                }
            }
        }
        
        console.log(`\n======== 查询余额 ========`)
        for(userIdx=0; userIdx<numBoxbody; userIdx++) {
            for(channelIdx=0; channelIdx<channel.length; channelIdx++) {
                if(await QueryVipInfo()) {
                    await QueryWithdrawIntegral(1)
                    await QueryWithdrawBox(1)
                }
            }
        }
        
        console.log(`\n======== 开始提现 ========`)
        for(userIdx=0; userIdx<numBoxbody; userIdx++) {
            await Withdraw()
        }
        
        for(channelIdx=0; channelIdx<channel.length; channelIdx++) {
            for(userIdx=0; userIdx<numBoxbody; userIdx++) {
                if(await QueryVipInfo()) {
                    console.log(`\n======== 账户${userIdx+1}${channelStr[channelIdx]}： ${userName} ========`)
                    notifyStr += `\n账户${userIdx+1}${channelStr[channelIdx]}： ${userName}\n`
                    
                    await QueryWalletInfo(0)
                    
                    await QueryCoinInfo(2)
                }
            }
        }
        
        await Showmsg()
    }
  

})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

//通知
async function Showmsg() {
    
    notifyBody = '\n' + jsname + "运行通知\n\n" + notifyStr
    
    if (notifyFlag != 1) {
        console.log(notifyBody);
    }

    if (notifyFlag == 1) {
        $.msg(notifyBody);
        if ($.isNode()){await notify.sendNotify($.name, notifyBody );}
    }
}

async function GetRewrite() {
    
    if($request.url.indexOf('api/box/wallet/info') > -1) {
        let headers = $request.headers
        let token = headers['token'] ? headers['token'] : ''
        
        if(!token) return;
        
        if(dawToken) {
            if(dawToken.indexOf(token) > -1) {
                $.msg(jsname+` 此dawToken已存在`)
            } else {
                dawToken = dawToken + '@' + token
                $.setdata(dawToken, 'dawToken');
                ckList = dawToken.split('@')
                $.msg(jsname+` 获取第${ckList.length}个dawToken成功`)
            }
        } else {
            $.setdata(token, 'dawToken');
            $.msg(jsname+` 获取第1个dawToken成功`)
        }
    }
}

async function CheckEnv() {
    if(dawToken) {
        if(dawToken.indexOf('@') > -1) {
            let dawTokens = dawToken.split('@')
            for(let i=0; i<dawTokens.length; i++) {
                dawTokenArr.push(dawTokens[i])
                withdrawList.push([])
                withdrawMethod.push({wechat:0,alipay:0})
            }
        } else {
            dawTokenArr.push(dawToken)
            withdrawList.push([])
            withdrawMethod.push({wechat:0,alipay:0})
        }
    }
}

///////////////////////////////////////////////////////////////////

//用户名，VIP等级查询
async function QueryVipInfo() {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/vip/v2`
    let urlObject = PopulateGetUrl(url)
    await HttpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return false
    
    if(result.code == 200) {
        userName = result.data.nickname ? result.data.nickname : ''
        isVip = result.data.is_vip ? result.data.is_vip : 0
        vipLevel = result.data.vip_level ? result.data.vip_level : 0
    } else {
        console.log(`\n账户查询失败：${result.error}`)
        return false
    }
    
    return true
}

//仓库容量查询
async function QueryWarehouse() {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/channel/integral/warehouse?channel=${channel[channelIdx]}`
    let urlObject = PopulateGetUrl(url)
    await HttpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        let integral_num = result.data.info.integral_num ? result.data.info.integral_num : 0
        let warehouse_num = result.data.info.warehouse_num ? result.data.info.warehouse_num : 0
        console.log(`账户${userIdx+1}${channelStr[channelIdx]} ${userName}：现在有${integral_num}币，仓库容量${warehouse_num}币`)
        if(result.data.tasks && Array.isArray(result.data.tasks)) {
            for(let i=0; i<result.data.tasks.length; i++) {
                let taskItem = result.data.tasks[i]
                if(taskItem.status == 1) {
                    await $.wait(100)
                    await ReceiveWarehouse(taskItem)
                }
            }
        }
    } else {
        console.log(`账户${userIdx+1}${channelStr[channelIdx]} ${userName}：查询仓库容量失败：${result.error}`)
    }
}

//仓库容量领取
async function ReceiveWarehouse(taskItem) {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/channel/integral/warehouse/receive?channel=${channel[channelIdx]}&task_id=${taskItem.task_id}`
    let urlObject = PopulateGetUrl(url)
    await HttpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return false
    
    if(result.code == 200) {
        console.log(`--领取任务【${taskItem.title}】奖励成功，获得${taskItem.warehouse_num}仓库容量`)
    } else {
        console.log(`--领取任务【${taskItem.title}】奖励失败：${result.error}`)
    }
}

//积分和红包余额查询
async function QueryWalletInfo() {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/box/wallet/info`
    let urlObject = PopulateGetUrl(url)
    await HttpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        let box_credit_num = result.data.box_credit_num ? result.data.box_credit_num : 0
        let box_platform_money = result.data.box_platform_money ? result.data.box_platform_money : 0
        console.log(`账户信息：`)
        console.log(`【积分】：${box_credit_num}`)
        console.log(`【红包余额】：${box_platform_money}`)
        notifyStr += `账户信息：\n`
        notifyStr += `【积分】：${box_credit_num}\n`
        notifyStr += `【红包余额】：${box_platform_money}\n`
    } else {
        console.log(`查询积分和红包余额失败：${result.error}`)
    }
}

//领币和瓜分池查询
//type -- 0: 投入瓜分池，1：做领币任务，2：查询余额
async function QueryCoinInfo(type) {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/channel/integral/pool?channel=${channel[channelIdx]}`
    let urlObject = PopulateGetUrl(url)
    await HttpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        if(type == 0) {
            let integral_num = result.data.player.integral_num ? result.data.player.integral_num : 0
            let can_num = result.data.player.can_num ? result.data.player.can_num : 0
            let use_integral_num = result.data.player.use_integral_num ? result.data.player.use_integral_num : 0
            let integral_min_put_num = result.data.pool.integral_min_put_num ? result.data.pool.integral_min_put_num : 0
            let can_put_num = result.data.pool.can_put_num ? result.data.pool.can_put_num : 0
            console.log(`现在有${integral_num}币，已投入${use_integral_num}币，今日可投入次数为${can_num}，当前池子可投入${can_put_num}币`)
            if(can_num > 0) {
                if(integral_num >= integral_min_put_num && can_put_num >= integral_min_put_num) {
                    let putNum = (integral_num>can_put_num) ? can_put_num : integral_num
                    await $.wait(100)
                    await PutInPool(putNum,1)
                }
            }
        } else if(type == 1) {
            if(result.data.tasks.vedio_task && Array.isArray(result.data.tasks.vedio_task)) {
                for(let i=0; i<result.data.tasks.vedio_task.length; i++) {
                    let taskItem = result.data.tasks.vedio_task[i]
                    if(taskItem.title.indexOf('看广告') > -1) {
                        if(taskItem.complete_num < taskItem.contribution_num) {
                            allCompFlag = 0
                            await $.wait(100)
                            waitTime -= 100
                            await ReceiveCoin(taskItem)
                        }
                    }
                }
            }
            if(result.data.tasks.game_task && Array.isArray(result.data.tasks.game_task)) {
                for(let i=0; i<result.data.tasks.game_task.length; i++) {
                    let taskItem = result.data.tasks.game_task[i]
                    if(taskItem.title.indexOf('转盘游戏') > -1) {
                        if(taskItem.complete_num < taskItem.contribution_num) {
                            allCompFlag = 0
                            await $.wait(100)
                            waitTime -= 100
                            await QueryTurntable(taskItem)
                        }
                    }
                }
            }
        } else if(type == 2) {
            let integral_num = result.data.player.integral_num ? result.data.player.integral_num : 0
            let use_integral_num = result.data.player.use_integral_num ? result.data.player.use_integral_num : 0
            let money = result.data.player.money ? result.data.player.money : 0
            console.log(`【DAB币】：${integral_num}`)
            console.log(`【今日已投】：${use_integral_num}`)
            console.log(`【分红余额】：${money}`)
            notifyStr += `【DAB币】：${integral_num}\n`
            notifyStr += `【今日已投】：${use_integral_num}\n`
            notifyStr += `【分红余额】：${money}\n`
        }
    } else {
        console.log(`\n查询信息失败：${result.error}`)
    }
}

//领币任务奖励
async function ReceiveCoin(taskItem) {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/channel/integral/task/receive`
    let reqBody = `{"task_id":${taskItem.task_id},"channel":"${channel[channelIdx]}"}`
    let urlObject = PopulatePostUrl(url,reqBody)
    await HttpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        console.log(`完成任务【${taskItem.title}】，领取DAB币成功`)
    } else {
        console.log(`完成任务【${taskItem.title}】失败：${result.error}`)
        if(result.error.indexOf('当前仓库已存满') > -1) {
            let idx = channelIdx*numBoxbody+userIdx
            if(coinStatus[idx] == 1) {
                console.log(`仓库已存满，尝试先投入分红池`)
                coinStatus[idx] = 2
                await $.wait(100)
                await QueryCoinInfo(0)
            } else if(coinStatus[idx] == 2) {
                console.log(`仓库已存满，且无法投入分红池，此用户暂时不再做任务`)
            }
        }
    }
}

//转盘次数查询
async function QueryTurntable(taskItem) {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/channel/integral/turntable/config?channel=${channel[channelIdx]}&task_id=${taskItem.task_id}`
    let urlObject = PopulateGetUrl(url)
    await HttpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return false
    
    if(result.code == 200) {
        let can_video_num = result.data.lottery_num.can_video_num ? result.data.lottery_num.can_video_num : 0
        let max_video_num = result.data.lottery_num.max_video_num ? result.data.lottery_num.max_video_num : 0
        let can_lottery_num = result.data.lottery_num.can_lottery_num ? result.data.lottery_num.can_lottery_num : 0
        let max_lottery_num = result.data.lottery_num.max_lottery_num ? result.data.lottery_num.max_lottery_num : 0
        if(can_video_num < max_video_num) {
            //先看视频领次数
            await $.wait(100)
            waitTime -= 100
            await ReceiveVideoReward(taskItem)
        } else if(can_lottery_num < max_lottery_num) {
            //已看完视频，直接抽奖
            await $.wait(100)
            waitTime -= 100
            await Turntable(taskItem)
        }
    } else {
        console.log(`获取转盘次数失败：${result.error}`)
        return false
    }
    
    return true
}

//看视频领抽奖次数
async function ReceiveVideoReward(taskItem) {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/channel/integral/turntable/video/receive`
    let reqBody = `{"channel":"${channel[channelIdx]}","task_id":"${taskItem.task_id}"}`
    let urlObject = PopulatePostUrl(url,reqBody)
    await HttpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        console.log(`看视频获得了一次抽奖机会`)
        await $.wait(100)
        waitTime -= 100
        await Turntable(taskItem)
    } else {
        console.log(`看视频得抽奖机会失败：${result.error}`)
    }
}

//转盘抽奖
async function Turntable(taskItem) {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/channel/integral/turntable/result`
    let reqBody = `{"channel":"${channel[channelIdx]}","task_id":"${taskItem.task_id}"}`
    let urlObject = PopulatePostUrl(url,reqBody)
    await HttpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        let reward = result.data.title ? result.data.title : '【？】'
        console.log(`抽奖成功，获得了${reward}`)
        await $.wait(100)
        waitTime -= 100
        await ReceiveTurntable(taskItem)
    } else {
        console.log(`抽奖失败：${result.error}`)
    }
}

//转盘抽奖奖励翻倍领取
async function ReceiveTurntable(taskItem) {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/channel/integral/turntable/receive`
    let reqBody = `{"channel":"${channel[channelIdx]}","task_id":"${taskItem.task_id}","type":1}`
    let urlObject = PopulatePostUrl(url,reqBody)
    await HttpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        console.log(`看视频获得抽奖翻倍奖励成功`)
    } else {
        console.log(`看视频获得抽奖翻倍奖励失败：${result.error}`)
        if(result.error.indexOf('当前仓库已存满') > -1) {
            let idx = channelIdx*numBoxbody+userIdx
            if(coinStatus[idx] == 1) {
                console.log(`仓库已存满，尝试先投入分红池`)
                coinStatus[idx] = 2
                await $.wait(100)
                await QueryCoinInfo(0)
            } else if(coinStatus[idx] == 2) {
                console.log(`仓库已存满，且无法投入分红池，此用户暂时不再做任务`)
            }
        }
    }
}

//瓜分池投入
async function PutInPool(num,pool_lv) {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/channel/integral/put?channel=${channel[channelIdx]}&num=${num}&pool_lv=${pool_lv}`
    let urlObject = PopulateGetUrl(url)
    await HttpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return false
    
    if(result.code == 200) {
        console.log(`投入瓜分池${num}币成功`)
        notifyStr += `投入瓜分池${num}币成功\n`
        coinStatus[channelIdx*numBoxbody+userIdx] = 1
    } else {
        console.log(`投入瓜分池${num}币失败：${result.error}`)
    }
}

//签到信息查询
async function QuerySignList() {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/box/sign/list`
    let urlObject = PopulateGetUrl(url)
    await HttpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        if(result.data.today_sign_status == 0) {
            await $.wait(100)
            await SignToday()
        } else {
            console.log(`今日已签到`)
        }   
    } else {
        console.log(`获取签到信息失败：${result.error}`)
    }
}

//签到
async function SignToday() {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/box/sign/post`
    let urlObject = PopulateGetUrl(url)
    await HttpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        console.log(`签到成功，获得${result.data.total_credit_num}积分`)
    } else {
        console.log(`签到失败：${result.error}`)
    }
}

//积分任务列表查询
async function QueryTaskList() {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/box/task/list`
    let urlObject = PopulateGetUrl(url)
    await HttpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return false
    
    if(result.code == 200) {
        if(result.data && Array.isArray(result.data)) {
            for(let i=0; i<result.data.length; i++) {
                let taskItem = result.data[i]
                if(taskItem.status == 1) {
                    await $.wait(100)
                    await TaskReceiveReward(taskItem)
                }
            }
        }
    } else {
        console.log(`获取积分任务列表失败：${result.error}`)
        return false
    }
    
    return true
}

//积分任务奖励
async function TaskReceiveReward(taskItem) {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/box/task/receive`
    let reqBody = `{"task_id":${taskItem.id}}`
    let urlObject = PopulatePostUrl(url,reqBody)
    await HttpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        let credit_num = result.data.credit_num ? `获得${result.data.credit_num}积分` : ''
        console.log(`完成任务【${taskItem.title}】成功 ${credit_num}`)
        return true
    } else {
        console.log(`完成任务【${taskItem.title}】失败：${result.error}`)
    }
}

//积分红包兑换列表查询
async function QueryMallExchange(page) {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/box/mall/list?shopType=2&page=${page}`
    let urlObject = PopulateGetUrl(url)
    await HttpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        if(result.data && Array.isArray(result.data)) {
            for(let i=0; i<result.data.length; i++) {
                let exchangeItem = result.data[i]
                if(exchangeItem.today_ex_num > 0 && vipLevel >= exchangeItem.vip_level) {
                    await $.wait(100)
                    await MallExchange(exchangeItem,exchangeItem.today_ex_num)
                }
            }
        }
    } else {
        console.log(`获取积分红包兑换列表失败：${result.error}`)
    }
}

//积分红包兑换
async function MallExchange(exchangeItem,num) {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/box/mall/exchange`
    let reqBody = `{"mall_id":${exchangeItem.id},"num":${num}}`
    let urlObject = PopulatePostUrl(url,reqBody)
    await HttpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        console.log(`兑换【${exchangeItem.title}】成功`)
    } else {
        console.log(`兑换【${exchangeItem.title}】失败：${result.error}`)
    }
}

//积分红包提现列表查询
async function QueryWithdrawBox(page) {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/box/withdraw/platform/config?channel=${channel[channelIdx]}&page=${page}&page_count=10`
    let urlObject = PopulateGetUrl(url)
    await HttpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        let money = result.data.money ? result.data.money : 0
        withdrawMethod[userIdx].alipay = result.data.is_bind_alipay ? result.data.is_bind_alipay : 0
        withdrawMethod[userIdx].wechat = result.data.is_bind_wechat ? result.data.is_bind_wechat : 0
        let payType = ''
        if(result.data.is_bind_wechat==1) payType += ' 微信'
        if(result.data.is_bind_alipay==1) payType += ' 支付宝'
        if(!payType) payType += '无'
        console.log(`积分红包余额：${result.data.money}`)
        console.log(`已绑定支付方式：${payType}`)
        if(result.data.withdraw_config && Array.isArray(result.data.withdraw_config)) {
            for(let i=0; i<result.data.withdraw_config.length; i++) {
                let withItem = result.data.withdraw_config[i]
                if(money >= withItem.money) {
                    withdrawList[userIdx].push({type:'box',channel:channelIdx,item:withItem})
                }
            }
        } else {
            console.log(`账号${userIdx+1}${channelStr[channelIdx]}获取积分红包提现列表失败`)
        }
    } else {
        console.log(`账号${userIdx+1}${channelStr[channelIdx]}获取积分红包提现列表失败：${result.error}`)
    }
}

//分红提现列表查询
async function QueryWithdrawIntegral(page) {
    let caller = PrintCaller()
    let url = `https://v3.sdk.haowusong.com/api/channel/integral/withdraw/config?channel=${channel[channelIdx]}&page=${page}&page_count=10`
    let urlObject = PopulateGetUrl(url)
    await HttpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        let money = result.data.money ? result.data.money : 0
        console.log(`\n账号${userIdx+1}${channelStr[channelIdx]}:`)
        console.log(`分红余额：${result.data.money}`)
        if(result.data.withdraw_config && Array.isArray(result.data.withdraw_config)) {
            for(let i=0; i<result.data.withdraw_config.length; i++) {
                let withItem = result.data.withdraw_config[i]
                if(money >= withItem.money) {
                    withdrawList[userIdx].push({type:'integral',channel:channelIdx,item:withItem})
                }
            }
        } else {
            console.log(`\n账号${userIdx+1}${channelStr[channelIdx]}获取分红余额提现列表失败`)
        }
    } else {
        console.log(`\n账号${userIdx+1}${channelStr[channelIdx]}获取分红余额提现列表失败：${result.error}`)
    }
}

async function Withdraw() {
    if(withdrawList[userIdx].length > 0) {
        console.log(`\n账号${userIdx+1}开始尝试提现：`)
        let sortList = withdrawList[userIdx].sort(function(a,b){return b['item']['money']-a['item']['money']});
        for(let i=0; i<sortList.length; i++) {
            let sortItem = sortList[i]
            if(sortItem.type == 'integral') {
                if(await WithdrawIntegral(sortItem,withdrawMethod[userIdx])) break;
            } else {
                if(await WithdrawBox(sortItem,withdrawMethod[userIdx])) break;
            }
        }
    } else {
        console.log(`\n账号${userIdx+1}余额不足，无法提现`)
    }
}

//积分红包提现
async function WithdrawBox(withItem,withMethod) {
    let caller = PrintCaller()
    let pay_type = 0
    if(withMethod.wechat == 1 && withItem.item.is_wechat == 1) {
        pay_type = 1
    } else if(withMethod.alipay == 1 && withItem.item.is_alipay == 1) {
        pay_type = 2
    } else {
        return false
    }
    let url = `https://v3.sdk.haowusong.com/api/box/withdraw/platform/apply?config_id=${withItem.item.id}&channel=${channel[withItem.channel]}&pay_type=${pay_type}`
    let urlObject = PopulateGetUrl(url)
    await HttpPost(urlObject,caller)
    let result = httpResult;
    if(!result) {
        console.log(`--账号${userIdx+1}${channelStr[withItem.channel]}提现积分红包${withItem.item.money}元失败：服务器无响应`)
        return false
    }
    
    if(result.code == 200) {
        console.log(`--账号${userIdx+1}${channelStr[withItem.channel]}提现积分红包${withItem.item.money}元成功`)
        notifyStr += `--账号${userIdx+1}${channelStr[withItem.channel]}提现积分红包${withItem.item.money}元成功\n`
        return true
    } else {
        console.log(`--账号${userIdx+1}${channelStr[withItem.channel]}提现积分红包${withItem.item.money}元失败：${result.error}`)
        if(result.error.indexOf('今日提现次数超出限制') > -1) {
            return true
        }
    }
    return false
}

//分红提现
async function WithdrawIntegral(withItem,withMethod) {
    let caller = PrintCaller()
    let pay_type = 0
    if(withMethod.wechat == 1 && withItem.item.is_wechat == 1) {
        pay_type = 1
    } else if(withMethod.alipay == 1 && withItem.item.is_alipay == 1) {
        pay_type = 2
    } else {
        return false
    }
    let url = `https://v3.sdk.haowusong.com/api/channel/integral/withdraw/apply?config_id=${withItem.item.id}&channel=${channel[withItem.channel]}&pay_type=${pay_type}`
    let urlObject = PopulateGetUrl(url)
    await HttpPost(urlObject,caller)
    let result = httpResult;
    if(!result) {
        console.log(`--账号${userIdx+1}${channelStr[withItem.channel]}提现分红${withItem.item.money}元失败：服务器无响应`)
        return false
    }
    
    if(result.code == 200) {
        console.log(`--账号${userIdx+1}${channelStr[withItem.channel]}提现分红${withItem.item.money}元成功`)
        notifyStr += `--账号${userIdx+1}${channelStr[withItem.channel]}提现分红${withItem.item.money}元成功\n`
        return true
    } else {
        console.log(`--账号${userIdx+1}${channelStr[withItem.channel]}提现分红${withItem.item.money}元失败：${result.error}`)
        if(result.error.indexOf('今日提现次数超出限制') > -1) {
            return true
        }
    }
    return false
}

////////////////////////////////////////////////////////////////////
function PopulatePostUrl(url,reqBody){
    let urlObject = {
        url: url,
        headers: {
            'Host' : 'v3.sdk.haowusong.com',
            'Origin' : 'https://v3.h5.haowusong.com',
            'Content-Type' : 'application/json',
            'Accept-Encoding' : 'gzip, deflate, br',
            'Connection' : 'keep-alive',
            'Accept' : 'application/json, text/plain, */*',
            'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
            'Referer' : 'https://v3.h5.haowusong.com/',
            'token' : dawTokenArr[userIdx],
        },
        body: reqBody,
    }
    return urlObject;
}

function PopulateGetUrl(url){
    let urlObject = {
        url: url,
        headers: {
            'Host' : 'v3.sdk.haowusong.com',
            'Origin' : 'https://v3.h5.haowusong.com',
            'Content-Type' : 'application/json',
            'Accept-Encoding' : 'gzip, deflate, br',
            'Connection' : 'keep-alive',
            'Accept' : 'application/json, text/plain, */*',
            'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
            'Referer' : 'https://v3.h5.haowusong.com/',
            'token' : dawTokenArr[userIdx],
        }
    }
    return urlObject;
}

async function HttpPost(url,caller) {
    httpResult = null
    return new Promise((resolve) => {
        $.post(url, async (err, resp, data) => {
            try {
                if (SafeGet(data,caller)) {
                    httpResult = JSON.parse(data);
                    if(logDebug) console.log(httpResult);
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

async function HttpGet(url,caller) {
    httpResult = null
    return new Promise((resolve) => {
        $.get(url, async (err, resp, data) => {
            try {
                if (SafeGet(data,caller)) {
                    httpResult = JSON.parse(data);
                    if(logDebug) console.log(httpResult);
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function SafeGet(data,caller) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        } else {
            console.log(`Function ${caller}: 未知错误`);
            console.log(data)
        }
    } catch (e) {
        console.log(e);
        console.log(data)
        console.log(`Function ${caller}: 服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
}

function PrintCaller(){
    return (new Error()).stack.split("\n")[2].trim().split(" ")[1]
}

function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "=========\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3========="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
