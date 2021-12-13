/*
IOS/安卓: 今日头条极速版
邀请码： 1173836876

老用户每天几毛，新用户可能收益高点
普通版定时： 1-59/15 6-23 * * *
激进版定时： 1-59/5 * * * *
多用户跑的时间会久一点，自己看着改定时吧

V2P重写：
[task_local]
#今日头条极速版
1-59/15 6-23 * * *  https://raw.githubusercontent.com/leafxcy/JavaScript/main/jrttjsb.js, tag=今日头条极速版, enabled=true
[rewrite_local]
luckycat\/lite\/v1\/task\/page_data url script-request-header https://raw.githubusercontent.com/leafxcy/JavaScript/main/jrttjsb.js
[MITM]
#每个人的域名不同，都放进去MITM吧，还捉不到就自行捉包填写
hostname = *.snssdk.com
hostname = *.toutiaoapi.com

青龙把极速版捉包里面的cookie放到jrttjsbHeader里，多账户用@隔开
*/

const jsname = '今日头条极速版'
const $ = Env(jsname)
const notifyFlag = 1; //0为关闭通知，1为打开通知,默认为1
const logDebug = 0

//const notify = $.isNode() ? require('./sendNotify') : '';
let notifyStr = ''

let rndtime = "" //毫秒
let httpResult //global buffer

let curTime = new Date()
let curHour = curTime.getHours()

let host = 'api3-normal-lq.toutiaoapi.com'
let hostname = 'https://' + host

let userAgent = ($.isNode() ? process.env.jrttjsbUA : $.getdata('jrttjsbUA')) || 'NewsLite 8.5.2 rv:8.5.2.21 (iPhone; iOS 15.0; zh_CN) Cronet';
let userAgentArr = []
let userHeader = ($.isNode() ? process.env.jrttjsbHeader : $.getdata('jrttjsbHeader')) || '';
let userHeaderArr = []

let userIdx = 0
let UAcount = 0
let userStatus = []
let maxReadPerRun = 10
let readList = []

let validList = []
let adIdList = [26, 181, 186, 187, 188, 189, 190, 195, 210, 214, 216, 225, 256, 257, 259, 275, 308, 324, 327, 329]
        
///////////////////////////////////////////////////////////////////

!(async () => {

    if(typeof $request !== "undefined")
    {
        await GetRewrite()
    }
    else
    {
        if(!(await checkEnv())) {
            return
        }
        
        await initAccountInfo()
        await RunMultiUser()
    }
  

})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

//通知
async function showmsg() {
    
    notifyBody = jsname + "运行通知\n\n" + notifyStr
    
    if (notifyFlag != 1) {
        console.log(notifyBody);
    }

    if (notifyFlag == 1) {
        $.msg(notifyBody);
        //if ($.isNode()){await notify.sendNotify($.name, notifyBody );}
    }
}

async function GetRewrite() {
    if($request.url.indexOf('luckycat/lite/v1/task/page_data') > -1) {
        let userCK = $request.headers.Cookie
        
        if(userHeader) {
            if(userHeader.indexOf(userCK) == -1) {
                userHeader = userHeader + '@' + userCK
                $.setdata(userHeader, 'jrttjsbHeader');
                ckList = userHeader.split('@')
                $.msg(jsname+` 获取第${ckList.length}个jrttjsbHeader成功: ${userCK}`)
            }
        } else {
            $.setdata(userCK, 'jrttjsbHeader');
            $.msg(jsname+` 获取第1个jrttjsbHeader成功: ${userCK}`)
        }
    }
}

async function checkEnv() {
    if(userHeader) {
        userHeaderArr = userHeader.split('@')
    } else {
        console.log('未找到jrttjsbHeader')
        return false
    }
    if(userHeaderArr.length == 0) {
        console.log('未找到有效的jrttjsbHeader')
        return false
    }
    
    if(userAgent) {
        userAgentArr = userAgent.split('@')
    } else {
        console.log('未找到userAgent')
        return false
    }
    UAcount = userAgentArr.length
    
    console.log(`共找到${userHeaderArr.length}个用户，${UAcount}个UA`)
    return true
}

async function initAccountInfo() {
    for(userIdx=0; userIdx<userHeaderArr.length; userIdx++) {
        userStatus.push(true)
    }
}

async function RunMultiUser() {
    for(userIdx=0; userIdx<userHeaderArr.length; userIdx++) {
        //任务页
        await QueryUserInfo(1)
        if(userStatus[userIdx]==true) {
            await GetNewTabs()
            await QuerySleepStatus()
            await QueryWalkInfo()
            await DoneEat()
            
            //农场
            await QueryFarmInfo()
            await QueryFarmLandStatus()
            await QueryFarmSignStatus()
            await QueryFarmTask()
            
            //种树
            await QueryTreeSignStatus()
            await QueryTreeChallenge()
            await QueryTreeStatus()
            
            for(let adId of adIdList) await ExcitationAd(adId)
            //console.log(validList)
            
        }
    }
    
    userIdx = 0
    await ListArts()
    await ReadArticles()
    
    for(userIdx=0; userIdx<userHeaderArr.length; userIdx++) {
        if(userStatus[userIdx]==true) await QueryUserInfo(0)
    }
}

//阅读列表
async function ListArts() {
    let caller = printCaller()
    let url = `${hostname}/api/news/feed/v64/?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.message=='success') {
        for(let item of result.data) {
            let content = JSON.parse(item.content)
            if(content.group_id) {
                readList.push(content.group_id)
            }
        }
    } else {
        console.log(`获取阅读列表失败：${result.message}`)
    }
}

//阅读文章
async function ReadArticles() {
    for(userIdx=0; userIdx<userHeaderArr.length; userIdx++) {
        if(userStatus[userIdx]==true) await ReadDouble()
    }
    let maxRead = getMin(maxReadPerRun,readList.length)
    console.log(`\n开始阅读，将会阅读${maxRead}篇文章`)
    for(let i=0; i<maxRead; i++) {
        let readFlag = 0
        for(userIdx=0; userIdx<userHeaderArr.length; userIdx++) {
            if(userStatus[userIdx]==true) {
                await ReadArtsReward(readList[i])
                readFlag = 1
            }
        }
        if(readFlag ==1 && i<maxRead-1) {
            console.log('等待15秒阅读下一篇...')
            await $.wait(15100)
        }
    }
}

//阅读奖励
async function ReadArtsReward(group_id) {
    let caller = printCaller()
    let url = `${hostname}/luckycat/lite/v1/activity/done_whole_scene_task/?aid=35&update_version_code=85221&os_version=15.0&device_platform=iphone`
    let body = `{"is_golden_egg":false,"scene_key":"article_detail","group_id":"${group_id}"}`
    let urlObject = populatePostUrl(url,body)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no==0) {
        console.log(`用户${userIdx+1}阅读文章获得${result.data.score_amount}金币，今日阅读总收入：${result.data.total_score_amount}金币`)
    } else {
        console.log(`用户${userIdx+1}阅读文章失败：${result.err_tips}`)
    }
}

//阅读翻倍
async function ReadDouble() {
    let caller = printCaller()
    let url = `${hostname}/luckycat/lite/v1/activity/double_whole_scene_task/?aid=35&update_version_code=85221&os_version=15.0&device_platform=iphone`
    let body = `{}`
    let urlObject = populatePostUrl(url,body)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no==0) {
        console.log(`用户${userIdx+1}阅读翻倍成功`)
    } else {
        console.log(`用户${userIdx+1}阅读翻倍：${result.err_tips}`)
    }
}

async function GetNewTabs() {
    let caller = printCaller()
    let url = `${hostname}/score_task/v1/user/new_tabs/?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no==0) {
        for(let item of result.data.section) {
            if(item.key == 'mine_input_code') {
                await PostInviteCode()
                break
            }
        }
    }
}

async function PostInviteCode() {
    let caller = printCaller()
    let body = `{"invitecode" : "1173836876"}`
    let url = `${hostname}/luckycat/lite/v1/invite/post_invite_code/?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populatePostUrl(url,body)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
}

//查询用户信息,任务状态
async function QueryUserInfo(doTask) {
    let caller = printCaller()
    let url = `${hostname}/luckycat/lite/v1/task/page_data/?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no == 0) {
        if(!result.data.treasure) {
            userStatus[userIdx] = false
            console.log(`用户${userIdx+1}查询状态失败，CK失效`)
            return;
        }
        if(doTask==0) {
            console.log(`\n账户信息：`)
            console.log(`金币：${result.data.user_income.score_balance}`)
            console.log(`现金：${result.data.user_income.cash_balance/100}元`)
        } else {
            if(result.data.treasure.next_treasure_time == result.data.treasure.current_time) {
                await OpenTreasureBox()
            } else {
                let cdTime = result.data.treasure.next_treasure_time - result.data.treasure.current_time
                console.log(`用户${userIdx+1}开宝箱冷却时间还有${cdTime}秒`)
            }
            if(result.data.signin_detail.today_signed == false) {
                await SignIn()
            } else {
                console.log(`用户${userIdx+1}今天已签到`)
            }
        }
    } else {
        console.log(`用户${userIdx+1}查询状态失败：${result.err_tips}`)
    }
}

//签到
async function SignIn() {
    let caller = printCaller()
    let url = `${hostname}/luckycat/lite/v1/sign_in/action?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populatePostUrl(url)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no==0) {
        console.log(`用户${userIdx+1}签到成功，获得${result.data.score_amount}金币，已连续签到${result.data.sign_times}天`)
    } else {
        console.log(`用户${userIdx+1}签到失败：${result.err_tips}`)
    }
}

//开宝箱
async function OpenTreasureBox() {
    let caller = printCaller()
    let url = `${hostname}/score_task/v1/task/open_treasure_box/?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populatePostUrl(url)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no == 0) {
        console.log(`用户${userIdx+1}开宝箱获得${result.data.score_amount}金币`)
    } else {
        console.log(`用户${userIdx+1}开宝箱失败：${result.err_tips}`)
    }
}

//宝箱视频奖励
async function ExcitationAd(task_id) {
    let caller = printCaller()
    let url = `${hostname}/luckycat/lite/v1/task/done/excitation_ad?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let body = `{"ad_alias_position":"coin","task_key":"excitation_ad", "task_id" : "${task_id}"}`
    let urlObject = populatePostUrl(url,body)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no == 0) {
        console.log(`用户${userIdx+1}看视频任务[${task_id}]获得${result.data.score_amount}金币`)
        //validList.push(task_id)
    } else {
        console.log(`用户${userIdx+1}看视频任务[${task_id}]失败：${result.err_tips}`)
        //if(result.err_tips != '网络错误') validList.push(task_id)
    }
}

//查询走路状态
async function QueryWalkInfo() {
    let caller = printCaller()
    let url = `${hostname}/luckycat/lite/v1/walk/page_data/?aid=35&update_version_code=85221&os_version=15.0&device_platform=iphone`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no == 0) {
        if(result.data.can_get_amount > 0) await GetWalkBonus()
    } else {
        console.log(`用户${userIdx+1}走路状态失败：${result.err_tips}`)
    }
}

//走路奖励
async function GetWalkBonus() {
    let caller = printCaller()
    let nowtime = Math.round(new Date().getTime()/1000)
    let url = `${hostname}/luckycat/lite/v1/walk/bonus/?aid=35&update_version_code=85221&os_version=15.0&device_platform=iphone`
    let body = `{"task_id":136,"enable_preload_exciting_video":0,"client_time":${nowtime},"rit":"","use_ecpm":0}`
    let urlObject = populatePostUrl(url,body)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no == 0) {
        console.log(`用户${userIdx+1}领取走路奖励获得${result.data.score_amount}金币`)
    } else {
        console.log(`用户${userIdx+1}领取走路奖励失败：${result.err_tips}`)
    }
}

//吃饭补贴
async function DoneEat() {
    let caller = printCaller()
    let url = `${hostname}/luckycat/lite/v1/eat/done_eat/?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populatePostUrl(url)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no == 0) {
        console.log(`用户${userIdx+1}领取吃饭补贴获得${result.data.score_amount}金币`)
    } else {
        console.log(`用户${userIdx+1}领取吃饭补贴失败：${result.err_tips}`)
    }
}

//睡觉状态
async function QuerySleepStatus() {
    let caller = printCaller()
    let url = `${hostname}/luckycat/lite/v1/sleep/status/?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no == 0) {
        let sleepHour = Math.floor(result.data.sleep_last_time/36)/100
        if(result.data.sleeping == true) {
            if(sleepHour>=12) {
                await SleepStop()
            } else if(result.data.sleep_unexchanged_score==result.data.max_coin && curHour >= 7) {
                let rnd = Math.random()
                if(rnd>0.95) {
                    await SleepStop()
                } else {
                    console.log(`用户${userIdx+1}随机醒来时间，本次不进行醒来，已经睡了${sleepHour}小时，可以获得${result.data.sleep_unexchanged_score}金币`)
                }
            } else {
                console.log(`用户${userIdx+1}睡眠中，已经睡了${sleepHour}小时，可以获得${result.data.sleep_unexchanged_score}金币，上限${result.data.max_coin}金币`)
            }
        } else {
            if(result.data.history_amount > 0) {
                await SleepDone(result.data.history_amount)
            }
            if(curHour >= 23 || curHour < 2) {
                await SleepStart()
            } else if(curHour >= 20) {
                let rnd = Math.random()
                if(rnd>0.95) {
                    await SleepStart()
                } else {
                    console.log(`用户${userIdx+1}随机睡眠时间，本次不进行睡眠`)
                }
            } else {
                console.log(`用户${userIdx+1}未到睡觉时间`)
            }
        }
    } else {
        console.log(`用户${userIdx+1}查询睡觉状态失败：${result.err_tips}`)
    }
}

//睡觉醒来
async function SleepStop() {
    let caller = printCaller()
    let url = `${hostname}/luckycat/lite/v1/sleep/stop/?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populatePostUrl(url)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no == 0) {
        let sleepHour = result.data.sleep_last_time/3600
        console.log(`用户${userIdx+1}结束睡眠，本次睡了${sleepHour}小时，可以领取${result.data.history_amount}金币`)
        await SleepDone(result.data.history_amount)
    } else {
        console.log(`用户${userIdx+1}结束睡眠失败：${result.err_tips}`)
    }
}

//睡觉收金币
async function SleepDone(amount) {
    let caller = printCaller()
    let url = `${hostname}/luckycat/lite/v1/sleep/done_task/?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let body = `{"score_amount" : ${amount}}`
    let urlObject = populatePostUrl(url,body)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no == 0) {
        console.log(`用户${userIdx+1}领取睡觉金币奖励${amount}金币成功`)
    } else {
        console.log(`用户${userIdx+1}领取睡觉金币奖励失败：${result.err_tips}`)
    }
}

//开始睡觉
async function SleepStart() {
    let caller = printCaller()
    let url = `${hostname}/luckycat/lite/v1/sleep/start/?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populatePostUrl(url)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.err_no == 0) {
        console.log(`用户${userIdx+1}开始睡觉，ZZZzzz...`)
        await SleepDone(result.data.history_amount)
    } else {
        console.log(`用户${userIdx+1}开始睡觉失败：${result.err_tips}`)
    }
}

//查询农场状态
async function QueryFarmInfo() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_farm/polling_info?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        if(result.data.info.offline_production) {
            await FarmOfflineDouble()
        }
        if(result.data.info.water>=10) {
            await FarmWater()
        }
        if(result.data.info.box_num>0) {
            await FarmOpenBox()
        }
    } else {
        console.log(`用户${userIdx+1}查询农场状态失败：${result.message}`)
    }
}

//农场-离线奖励翻倍
async function FarmOfflineDouble() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_farm/double_reward?watch_ad=1&aid=35`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        console.log(`用户${userIdx+1}农场离线产量翻倍成功`)
    } else {
        console.log(`用户${userIdx+1}农场离线产量翻倍失败：${result.message}`)
    }
}

//查询农场任务列表
async function QueryFarmTask() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_farm/daily_task/list?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        for(let item of result.data) {
            if(item.status==1) {
                await RewardFarmTask(item.task_id)
            }
        }
    } else {
        console.log(`用户${userIdx+1}查询农场任务列表失败：${result.message}`)
    }
}

//农场-领取任务奖励
async function RewardFarmTask(id) {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_farm/reward/task?task_id=${id}&aid=35`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        let typeStr = (result.data.reward_type==1) ? '水滴' : '化肥'
        console.log(`用户${userIdx+1}领取农场任务奖励[task_id=${result.data.task_id}]获得${result.data.reward_num}${typeStr}，剩余${typeStr}数量${result.data.current_num}`)
    } else {
        console.log(`用户${userIdx+1}领取农场任务奖励失败：${result.message}`)
    }
}

//农场-浇水
async function FarmWater() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_farm/land_water?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        console.log(`用户${userIdx+1}农场浇水成功，剩余水滴：${result.data.water}`)
        if(result.data.water>=10) {
            await $.wait(1500) //min time 1000
            await FarmWater()
        }
    } else {
        console.log(`用户${userIdx+1}农场浇水失败：${result.message}`)
    }
}

//农场-开宝箱
async function FarmOpenBox() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_farm/box/open?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        console.log(`用户${userIdx+1}开农场宝箱获得${result.data.incr_coin}金币`)
        if(result.data.excitation_ad_score_amount>0) await FarmOpenBoxVideo()
    } else {
        console.log(`用户${userIdx+1}开农场宝箱失败：${result.message}`)
    }
}

//农场-宝箱视频
async function FarmOpenBoxVideo() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_farm/excitation_ad/add?excitation_ad_score_amount=134&device_id=2392172203611735&aid=35&os_version=15.0&update_version_code=85221`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        console.log(`用户${userIdx+1}看农场宝箱视频获得${result.data.incr_coin}金币`)
    } else {
        console.log(`用户${userIdx+1}看农场宝箱视频失败：${result.message}`)
    }
}

//农场-签到状态
async function QueryFarmSignStatus() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_farm/sign_in/list?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        for(let item of result.data.sign) {
            if(item.status==1) {
                await FarmSign()
                break
            }
        }
    } else {
        console.log(`用户${userIdx+1}查询签到状态失败：${result.message}`)
    }
}

//农场-签到
async function FarmSign() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_farm/reward/sign_in?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        let str = (result.data.reward_type==1)?'水滴':'化肥'
        console.log(`用户${userIdx+1}签到获得${result.data.reward_num}${str}，剩余${str}数量${result.data.cur_reward_num}`)
    } else {
        console.log(`用户${userIdx+1}签到失败：${result.message}`)
    }
}

//农场-签到视频翻倍
async function FarmSignDouble() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_farm/reward/double_sign_in?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        let str = (result.data.reward_type==1)?'水滴':'化肥'
        console.log(`用户${userIdx+1}签到翻倍获得${result.data.reward_num}{str}，剩余${str}数量${result.data.cur_reward_num}`)
    } else {
        console.log(`用户${userIdx+1}签到翻倍失败：${result.message}`)
    }
}

//农场-土地状态
async function QueryFarmLandStatus() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_farm/home_info?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        for(let item of result.data.info.lands) {
            if(item.status==false && item.unlock_able==true) {
                await FarmUnlock(item.land_id)
                break
            }
        }
    } else {
        console.log(`用户${userIdx+1}查询土地状态失败：${result.message}`)
    }
}

//农场-土地解锁
async function FarmUnlock(land_id) {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_farm/land/unlock?land_id=${land_id}&aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        console.log(`用户${userIdx+1}解锁${land_id}号土地成功`)
    } else {
        console.log(`用户${userIdx+1}解锁${land_id}号土地失败：${result.message}`)
    }
}

//种树-签到状态
async function QueryTreeSignStatus() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_orchard/sign_in/list?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        if(result.data.today == false) {
            await TreeSign()
        }
    } else {
        console.log(`用户${userIdx+1}查询种树签到状态失败：${result.message}`)
    }
}

//种树-签到
async function TreeSign() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_orchard/sign_in/reward?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        console.log(`用户${userIdx+1}种树签到获得${result.data.reward_item.num}${result.data.reward_item.name}`)
    } else {
        console.log(`用户${userIdx+1}种树签到失败：${result.message}`)
    }
}

//种树-二选一-选项
async function QueryTreeChallenge() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_orchard/challenge/list?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        let bestChoice = 0
        let maxWater = 0
        for(let item of result.data.tasks) {
            if(item.state==0 && item.water_times>maxWater) {
                maxWater = item.water_times
                bestChoice = item.id
            }
        }
        if(bestChoice>0) await TreeChallengeChoose(bestChoice)
    } else {
        console.log(`用户${userIdx+1}查询挑战任务失败：${result.message}`)
    }
}

//种树-二选一-选择
async function TreeChallengeChoose(id) {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_orchard/challenge/choose?task_id=${id}&aid=35`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        console.log(`用户${userIdx+1}选择浇水${result.data.red_point.times}次挑战`)
    } else {
        console.log(`用户${userIdx+1}选择浇水挑战失败：${result.message}`)
    }
}

//种树-二选一-领奖
async function TreeChallengeReward() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_orchard/challenge/reward?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        console.log(`用户${userIdx+1}领取浇水挑战奖励获得${result.data.reward_item.num}金币`)
    } else {
        console.log(`用户${userIdx+1}领取浇水挑战奖励失败：${result.message}`)
    }
}

//种树-化肥签到
async function TreeNutrientSign() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_orchard/nutrient/sign_in?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        if(result.data.is_rewarded==true) {
            console.log(`用户${userIdx+1}种树化肥签到获得${result.data.reward_item.num}{result.data.reward_item.name}`)
        } else {
            console.log(`用户${userIdx+1}种树化肥签到成功`)
        }
    } else {
        console.log(`用户${userIdx+1}种树化肥签到失败：${result.message}`)
    }
}

//种树-水滴任务列表
async function QueryTreeWaterTask() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_orchard/tasks/list?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        for(let item of result.data.tasks_v2) {
            console.log(item)
            await TreeWaterReward(item.id)
            await $.wait(1500)
        }
    } else {
        console.log(`用户${userIdx+1}查询种树水滴任务列表失败：${result.message}`)
    }
}

//种树-水滴领奖
async function TreeWaterReward(task_id) {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_orchard/tasks/reward?task_id=${task_id}&do_action=0&aid=35`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        console.log(`用户${userIdx+1}领取水滴任务[id=${task_id}]获得${result.data.reward_item.num}${result.data.reward_item.name}`)
    } else {
        console.log(`用户${userIdx+1}领取水滴任务[id=${task_id}]失败：${result.message}`)
    }
}

//种树-浇水
async function TreeWater() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_orchard/tree/water?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        console.log(`用户${userIdx+1}种树浇水成功，剩余水滴：${result.data.kettle.water_num}`)
        if(result.data.kettle.water_num>=100) {
            await $.wait(1500) //min time 1000
            await TreeWaterTenTimes()
        } else if(result.data.kettle.water_num>=10) {
            await $.wait(1500) //min time 1000
            await TreeWater()
        }
    } else {
        console.log(`用户${userIdx+1}种树浇水失败：${result.message}`)
    }
}

//种树-浇水10次
async function TreeWaterTenTimes() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_orchard/tree/tenfold_water?times=10&aid=35`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        console.log(`用户${userIdx+1}种树浇水10次成功，剩余水滴：${result.data.kettle.water_num}`)
        if(result.data.kettle.water_num>=100) {
            await $.wait(1500) //min time 1000
            await TreeWaterTenTimes()
        } else if(result.data.kettle.water_num>=10) {
            await $.wait(1500) //min time 1000
            await TreeWater()
        }
    } else {
        console.log(`用户${userIdx+1}种树浇水失败：${result.message}`)
    }
}

//种树-信息
async function QueryTreeStatus() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_orchard/polling_info?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        if(result.data.red_points.challenge && result.data.red_points.challenge.state==4) {
            await TreeChallengeReward()
        }
        if(result.data.red_points.box && result.data.red_points.box.rounds>0 && result.data.red_points.box.state==4) {
            await TreeOpenBox()
        }
        if(result.data.kettle.water_num >= 100) {
            await TreeWaterTenTimes()
        } else if(result.data.kettle.water_num>=10) {
            await TreeWater()
        }
    } else {
        console.log(`用户${userIdx+1}查询种树信息失败：${result.message}`)
    }
}

//种树-开宝箱
async function TreeOpenBox() {
    let caller = printCaller()
    let url = `${hostname}/ttgame/game_orchard/box2/open?watch_ad=0&aid=35`
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    //console.log(result)
    if(result.status_code == 0) {
        console.log(`用户${userIdx+1}种树开宝箱获得${result.data.incr_coin}金币`)
    } else {
        console.log(`用户${userIdx+1}种树开宝箱失败：${result.message}`)
    }
}
////////////////////////////////////////////////////////////////////
function populatePostUrl(url,reqBody=''){
    let timeInMS = Math.round(new Date().getTime())
    let timeInSecond = Math.floor(timeInMS/1000)
    let urlObject = {
        url: url,
        headers: {
            'Host' : host,
            'X-SS-REQ-TICKET' : timeInMS,
            'X-Khronos': timeInSecond,
            'Connection' : 'keep-alive',
            'Accept' : 'application/json',
            'Cookie' : userHeaderArr[userIdx],
            'Content-Type' : 'application/json',
            'User-Agent' : userAgentArr[userIdx%UAcount],
            'Accept-Encoding' : 'gzip, deflate',
        },
        body: reqBody
    }
    return urlObject;
}

function populateGetUrl(url){
    let timeInMS = Math.round(new Date().getTime())
    let timeInSecond = Math.floor(timeInMS/1000)
    let urlObject = {
        url: url,
        headers: {
            'Host' : host,
            'X-SS-REQ-TICKET' : timeInMS,
            'X-Khronos': timeInSecond,
            'Connection' : 'keep-alive',
            'Accept' : 'application/json',
            'Cookie' : userHeaderArr[userIdx],
            'Content-Type' : 'application/json',
            'User-Agent' : userAgentArr[userIdx%UAcount],
            'Accept-Encoding' : 'gzip, deflate',
        }
    }
    return urlObject;
}

async function httpPost(url,caller) {
    httpResult = null
    return new Promise((resolve) => {
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(caller + ": post请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        httpResult = JSON.parse(data);
                        if(logDebug) console.log(httpResult);
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

async function httpGet(url,caller) {
    httpResult = null
    return new Promise((resolve) => {
        $.get(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(caller + ": get请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data,caller)) {
                        httpResult = JSON.parse(data);
                        if(logDebug) console.log(httpResult);
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function safeGet(data,caller) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        } else {
            console.log(`Function ${caller}: 未知错误`);
            console.log(data)
        }
    } catch (e) {
        console.log(e);
        console.log(`Function ${caller}: 服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
}

function printCaller(){
    return (new Error()).stack.split("\n")[2].trim().split(" ")[1]
}

function getMin(a,b){
    return ((a<b) ? a : b)
}

function getMax(a,b){
    return ((a<b) ? b : a)
}

function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
