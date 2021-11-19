/*
安卓：晶彩天气(v8.3.7)

此脚本负责：
领转发页定时宝箱，领福利页定时宝箱，领首页气泡红包，时段转发，刷福利视频，抽奖5次
*/

const jsname = '晶彩天气日常'
const $ = Env(jsname)
const notifyFlag = 1; //0为关闭通知，1为打开通知,默认为1
const logDebug = 0

//const notify = $.isNode() ? require('./sendNotify') : '';
let notifyStr = ''

let rndtime = "" //毫秒
let httpResult //global buffer

let userCookie = ''

let jctqCookie = ($.isNode() ? process.env.jctqCookie : $.getdata('jctqCookie')) || '';
let jctqBubbleBody = ($.isNode() ? process.env.jctqBubbleBody : $.getdata('jctqBubbleBody')) || '';
let jctqGiveBoxBody = ($.isNode() ? process.env.jctqGiveBoxBody : $.getdata('jctqGiveBoxBody')) || '';

let jctqCookieArr = []
let jctqBubbleBodyArr = []
let jctqGiveBoxBodyArr = []

let refHotShare = 'http://tq.xunsl.com/h5/hotShare/?'
let refRotory = 'https://tq.xunsl.com/html/rotaryTable/index.html?keyword_wyq=woyaoq.com&'


///////////////////////////////////////////////////////////////////

!(async () => {

    if(typeof $request !== "undefined")
    {
        $.msg(jsname+': 此脚本不做重写，请检查重写设置')
    }
    else
    {
        await checkEnv()
        
        numBoxbody = jctqCookieArr.length
        console.log(`找到${numBoxbody}个cookie`)
        
        for(let i=0; i<numBoxbody; i++) {
            console.log(`============= 账户${i+1} =============`)
            userCookie = jctqCookieArr[i]
            
            await queryShareStatus()
            await $.wait(1000)
            
            await queryGiveBoxStatus()
            await $.wait(1000)
            
            await queryBubbleStatus()
            await $.wait(1000)
            
            await getTaskListByWeather()
            await $.wait(1000)
            
            await queryRotaryTable()
            await $.wait(1000)
        }
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

async function checkEnv() {
    
    if(jctqCookie) {
        if(jctqCookie.indexOf('&') > -1) {
            let jctqCookies = jctqCookie.split('@')
            for(let i=0; i<jctqCookies.length; i++) {
                jctqCookieArr.push(replaceCookie(jctqCookies[i]))
            }
        } else {
            
            jctqCookieArr.push(replaceCookie(jctqCookie))
        }
    }
    
    if(jctqBubbleBody) {
        if(jctqBubbleBody.indexOf('&') > -1) {
            let jctqBubbleBodyArrs = jctqBubbleBody.split('&')
            for(let i=0; i<jctqBubbleBodyArrs.length; i++) {
                jctqBubbleBodyArr.push(jctqBubbleBodyArrs[i])
            }
        } else {
            jctqBubbleBodyArr.push(jctqBubbleBody)
        }
    }
    
    if(jctqGiveBoxBody) {
        if(jctqGiveBoxBody.indexOf('&') > -1) {
            let jctqGiveBoxBodyArrs = jctqGiveBoxBody.split('&')
            for(let i=0; i<jctqGiveBoxBodyArrs.length; i++) {
                jctqGiveBoxBodyArr.push(jctqGiveBoxBodyArrs[i])
            }
        } else {
            jctqGiveBoxBodyArr.push(jctqGiveBoxBody)
        }
    }
}

function replaceCookie(jctqCookieItem) {
    if(jctqCookieItem.indexOf('cookie=') == -1 && jctqCookieItem.indexOf('zqkey=') > -1) {
        jctqCookieItem = jctqCookieItem.replace(/zqkey=/, "cookie=")
    }
    if(jctqCookieItem.indexOf('cookie_id=') == -1 && jctqCookieItem.indexOf('zqkey_id=') > -1) {
        jctqCookieItem = jctqCookieItem.replace(/zqkey_id=/, "cookie_id=")
    }
    if(jctqCookieItem.indexOf('app_version=') == -1) {
        jctqCookieItem = 'app_version=8.3.7&' + jctqCookieItem
    }
    return jctqCookieItem
}

///////////////////////////////////////////////////////////////////

//时段转发以及转发页面红包冷却查询 -- 30分钟一次
async function queryShareStatus() {
    let caller = printCaller()
    let url = 'http://tq.xunsl.com/WebApi/ShareNew/bereadExtraList'
    let urlObject = populatePostUrl(url,refHotShare,userCookie)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    let curTime = new Date()
    let currentHour = curTime.getHours()
    let action = ''
    if(currentHour>=5 && currentHour<10) {
        action = 'beread_extra_reward_one'
    } else if(currentHour>=11 && currentHour<16) {
        action = 'beread_extra_reward_two'
    } else if(currentHour>=17 && currentHour<22) {
        action = 'beread_extra_reward_three'
    }
    
    if(result.code == 200) {
        if(result.data && result.data.taskList && Array.isArray(result.data.taskList)) {
            let taskList = result.data.taskList
            for(let i=0; i<taskList.length; i++) {
                let taskItem = taskList[i]
                if(taskItem.action.indexOf('time_packet_reward') > -1) {
                    if(taskItem.status == 1) {
                        console.log(`\n转发页面定时宝箱可领取`)
                        await $.wait(1000)
                        await getRewardShareBox()
                    } else {
                        let cdTime = taskItem.total_time - taskItem.countdown
                        console.log(`\n转发页面定时宝箱冷却时间：${cdTime}秒`)
                        if(cdTime < 90) {
                            let waitTime = cdTime+1
                            console.log(`\n等待${waitTime}秒后尝试领取`)
                            await $.wait(waitTime*1000)
                            await queryShareStatus()
                        }
                    }
                }
                if(action && taskItem.action.indexOf(action) > -1) {
                    if(taskItem.status == 0) {
                        console.log(`\n开始做${taskItem.name}转发任务`)
                        await $.wait(1000)
                        await listsNewTag()
                        await $.wait(1000)
                        await execExtractTask(taskItem.action,taskItem.name)
                    } else {
                        console.log(`\n${taskItem.name}转发已完成`)
                    }
                }
            }
        }
    } else {
        console.log(`\n转发页面查询失败：${result.msg}`)
    }
}

//转发页面红包领取 -- 30分钟一次
async function getRewardShareBox() {
    let caller = printCaller()
    let url = 'http://tq.xunsl.com/WebApi/TimePacket/getReward'
    let urlObject = populatePostUrl(url,refHotShare,userCookie)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 1) {
        console.log(`领取转发页面定时宝箱成功：获得${result.data.score}金币`)
    } else {
        console.log(`领取转发页面定时宝箱失败：${result.msg}`)
    }
}

//转发页面列表
async function listsNewTag() {
    let caller = printCaller()
    let url = 'http://tq.xunsl.com/WebApi/ArticleTop/listsNewTag'
    let urlObject = populatePostUrl(url,refHotShare,userCookie)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.status == 1) {
        if(result.data && result.data.items && Array.isArray(result.data.items)) {
            let shareIdx = Math.floor(Math.random()*result.data.items.length)
            let newsItem = result.data.items[shareIdx]
            await $.wait(1000)
            await getShareArticleReward(newsItem.id)
        }
    } else {
        console.log(`查询转发页面列表失败：${result.msg}`)
    }
}

//转发文章
async function getShareArticleReward(articleId) {
    let caller = printCaller()
    let url = 'http://tq.xunsl.com/WebApi/ShareNew/getShareArticleReward'
    let reqBody = userCookie + '&article_id=' + articleId
    let urlObject = populatePostUrl(url,refHotShare,reqBody)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.status == 1) {
        if(result.data.share == 1) {
            console.log(`转发文章成功`)
        }
    } else {
        console.log(`转发文章失败：${result.msg}`)
    }
}

//转发时段奖励
async function execExtractTask(action,name) {
    let caller = printCaller()
    let url = 'http://tq.xunsl.com/WebApi/ShareNew/execExtractTask'
    let reqBody = userCookie + '&action=' + action
    let urlObject = populatePostUrl(url,refHotShare,reqBody)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.code == 200) {
        console.log(`领取${name}转发奖励成功`)
    } else {
        console.log(`领取${name}转发奖励失败：${result.msg}`)
    }
}

//首页气泡红包查询
async function queryBubbleStatus() {
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/v17/weather/index.json?' + userCookie
    let urlObject = populateGetUrl(url,refHotShare)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.success == true) {
        let numBody = jctqBubbleBodyArr.length
        if(numBody > 0) {
            if(result.items && result.items.bubble && Array.isArray(result.items.bubble)) {
                let bubbleList = result.items.bubble
                let numBubble = bubbleList.length
                console.log(`\n共有${numBubble}个气泡红包可以领取，找到${numBody}个气泡和翻倍body，开始尝试领取`)
                for(let i=0; i<numBody; i++) {
                    let bubbleBodyItem = jctqBubbleBodyArr[i]
                    await $.wait(500)
                    await getRewardBubble(bubbleBodyItem)
                    if(i != numBody-1) {
                        let randomTime = Math.floor(Math.random()*2000)+32000
                        console.log(`\n随机延迟${randomTime}ms后尝试领取下一个`)
                        await $.wait(randomTime)
                    }
                }
            } else {
                console.log(`\n没有可领取的首页气泡红包`)
            }
        } else {
            console.log(`\n没有找到首页气泡红包和翻倍body，如果需要请手动领取和观看翻倍视频获取body`)
        }
    } else {
        console.log(`\n首页气泡红包查询失败：${result.msg}`)
    }
}

//首页气泡红包领取/翻倍
async function getRewardBubble(bubbleBodyItem) {
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/v5/weather/giveTimeInterval.json'
    let urlObject = populatePostUrl(url,refHotShare,bubbleBodyItem)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.status == 1) {
        console.log(`领取首页气泡红包/翻倍成功：获得${result.items.score}金币`)
    } else {
        console.log(`领取首页气泡红包/翻倍失败：${result.message}`)
    }
}

//福利页面定时宝箱查询
async function queryGiveBoxStatus() {
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/v17/Weather/getBoxByweather.json?' + userCookie
    let urlObject = populateGetUrl(url,refHotShare)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.success == true) {
        let numBody = jctqGiveBoxBodyArr.length
        if(numBody > 1) {
            if(result.items.status == 1) {
                console.log(`\n福利页面定时宝箱可领取，找到${numBody}个宝箱body，开始尝试领取`)
                for(let i=0; i<numBody; i++) {
                    let giveBoxBodyItem = jctqGiveBoxBodyArr[i]
                    await $.wait(500)
                    await getRewardGiveBox(giveBoxBodyItem)
                    if(i != numBody-1) {
                        let randomTime = Math.floor(Math.random()*2000)+32000
                        console.log(`\n随机延迟${randomTime}ms后尝试领取下一个`)
                        await $.wait(randomTime)
                    }
                }
            } else {
                let cdTime = result.items.count_down
                console.log(`\n福利页面定时宝箱冷却时间：${cdTime}秒`)
                if(cdTime < 90) {
                    let waitTime = cdTime+1
                    console.log(`\n等待${waitTime}秒后尝试领取`)
                    await $.wait(waitTime*1000)
                    await queryGiveBoxStatus()
                }
            }
        } else {
            console.log(`\n没找到福利页面宝箱body，如果需要请手动领取和观看翻倍视频获取body`)
        }
    } else {
        console.log(`\n福利页面定时宝箱查询失败：${result.msg}`)
    }
}

//福利页面定时宝箱领取
async function getRewardGiveBox(giveBoxBodyItem) {
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/v5/Weather/giveBoxOnWeather.json'
    let urlObject = populatePostUrl(url,refHotShare,giveBoxBodyItem)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.status == 1) {
        console.log(`领取福利页面定时宝箱成功：获得${result.items.score}金币`)
    } else {
        console.log(`领取福利页面定时宝箱失败：${result.message}`)
    }
}

//抽奖状态查询
async function queryRotaryTable() {
    rndtime = Math.floor(new Date().getTime())
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/WebApi/RotaryTable/getData?_='+rndtime
    let urlObject = populatePostUrl(url,refRotory,userCookie)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.status == 1) {
        console.log(`\n准备抽奖，当前已抽奖：${result.data.opened}次，剩余抽奖次数：${result.data.remainTurn}次`)
        numTurn = result.data.remainTurn > 5 ? 5 : result.data.remainTurn
        if(numTurn > 0) {
            for(let i=0; i<numTurn; i++) {
                await $.wait(Math.floor(Math.random()*1000)+1000)
                await turnRotary()
            }
        }
        numOpen = result.data.opened + numTurn
        if(Array.isArray(result.data.chestOpen)) {
            let chestOpen = result.data.chestOpen
            for(let i=0; i<chestOpen.length; i++) {
                boxItem = chestOpen[i]
                if(boxItem.received == 0 && numOpen >= boxItem.times) {
                    randomTime = Math.floor(Math.random()*5000)+30000
                    console.log(`随机延迟 ${randomTime}ms 看视频开抽奖宝箱`)
                    await $.wait(randomTime)
                    await chestReward(i+1)
                }
            }
        }
    } else {
        console.log(`抽奖次数查询失败：${result.msg}`)
    }
}

//抽奖宝箱
async function chestReward(idx) {
    rndtime = Math.floor(new Date().getTime())
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/WebApi/RotaryTable/chestReward?_='+rndtime
    let reqBody = userCookie + '&num=' + idx
    let urlObject = populatePostUrl(url,refRotory,reqBody)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.status == 1) {
        console.log(`开抽奖第${idx}个宝箱获得${result.data.score}金币`)
    } else {
        console.log(`开抽奖宝箱失败：${result.msg}`)
    }
}

//抽奖
async function turnRotary() {
    rndtime = Math.floor(new Date().getTime())
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/WebApi/RotaryTable/turnRotary?_='+rndtime
    let urlObject = populatePostUrl(url,refRotory,userCookie)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.status == 1) {
        console.log(`抽奖获得${result.data.score}金币，剩余抽奖次数${result.data.remainTurn}`)
    } else {
        console.log(`抽奖失败：${result.msg}`)
    }
}

//查询日常任务进度
async function getTaskListByWeather() {
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/v17/NewTask/getTaskListByWeather.json?' + userCookie
    let urlObject = populateGetUrl(url,refHotShare)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.success == true) {
        if(Array.isArray(result.items.daily)) {
            for(let i=0; i<result.items.daily.length; i++) {
                let dailyItem = result.items.daily[i]
                if(dailyItem.id == 10) {
                    if(dailyItem.title_num < dailyItem.title_total) {
                        randomTime = Math.floor(Math.random()*5000)+30000
                        console.log(`\n去刷福利视频，已完成${dailyItem.title_num}次，随机延迟 ${randomTime}ms 看视频`)
                        await $.wait(randomTime)
                        await recordVideoNum()
                    }
                }
            }
        }
    } else {
        console.log(`\n任务列表查询错误：${result.message}`)
    }
}

//刷福利视频
async function recordVideoNum() {
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/V17/NewTask/recordNum.json?' + userCookie
    let urlObject = populateGetUrl(url,refHotShare)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.success == true) {
        console.log(`刷福利视频成功`)
    } else {
        console.log(`刷福利视频失败`)
    }
}
////////////////////////////////////////////////////////////////////
function populatePostUrl(url,referer,reqBody){
    let rndtime = Math.floor(new Date().getTime()/1000)
    let urlObject = {
        url: url,
        headers: {
            'request_time' : rndtime,
            'Host' : 'tq.xunsl.com',
            'device-platform' : 'android',
            'Connection' : 'keep-alive',
            'app-type' : 'jcweather',
            'Referer' : referer + userCookie,
        },
        body: reqBody
    }
    return urlObject;
}

function populateGetUrl(url,referer){
    let rndtime = Math.floor(new Date().getTime()/1000)
    let urlObject = {
        url: url,
        headers: {
            'request_time' : rndtime,
            'Host' : 'tq.xunsl.com',
            'device-platform' : 'android',
            'Connection' : 'keep-alive',
            'app-type' : 'jcweather',
            'Referer' : referer + userCookie,
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
                        httpResult = JSON.parse(data,caller);
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

function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
