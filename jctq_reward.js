/*
安卓：晶彩天气(v8.3.7)

此脚本负责：
签到和翻倍，任务奖励领取，统计今日收益，自动提现

请将定时放在看看赚和阅读任务后面
如果不想自动提现的，请不要捉提现body，或者新建环境变量jctqWithdrawFlag，写成0
*/

const jsname = '晶彩天气任务签到'
const $ = Env(jsname)
const notifyFlag = 1; //0为关闭通知，1为打开通知,默认为1
const logDebug = 0

//const notify = $.isNode() ? require('./sendNotify') : '';
let notifyStr = ''

let rndtime = "" //毫秒
let httpResult //global buffer

let numBoxbody

let jctqWithdrawFlag =   ($.isNode() ? process.env.jctqWithdrawFlag   : $.getdata('jctqWithdrawFlag'))   || 1;
let jctqBoxbody =        ($.isNode() ? process.env.jctqBoxbody        : $.getdata('jctqBoxbody'))        || '';
let jctqQdBody =         ($.isNode() ? process.env.jctqQdBody         : $.getdata('jctqQdBody'))         || '';
let jctqSignDoubleBody = ($.isNode() ? process.env.jctqSignDoubleBody : $.getdata('jctqSignDoubleBody')) || '';
let jctqWithdraw =       ($.isNode() ? process.env.jctqWithdraw       : $.getdata('jctqWithdraw'))       || '';
let jctqCookie =         ($.isNode() ? process.env.jctqCookie         : $.getdata('jctqCookie'))         || '';

let jctqRewardBodyArr = []
let jctqSignDoubleBodyArr = []
let jctqWithdrawArr = []
let jctqCookieArr = []

let withdrawSuccess = 0

///////////////////////////////////////////////////////////////////

!(async () => {

    if(typeof $request !== "undefined")
    {
        $.msg(jsname+': 此脚本不做重写，请检查重写设置')
    }
    else
    {
        await checkEnv()
        
        numBoxbody = jctqRewardBodyArr.length
        console.log(`找到${numBoxbody}个签到/奖励body`)
        
        for(let i=0; i<numBoxbody; i++) {
            let rewardBody = jctqRewardBodyArr[i]
            await toGetReward(rewardBody,i)
            await $.wait(2000)
        }
        
        numBoxbody = jctqSignDoubleBodyArr.length
        console.log(`找到${numBoxbody}个签到翻倍body，观看32秒视频后开始领取下一个`)
        
        for(let i=0; i<numBoxbody; i++) {
            let rewardBody = jctqSignDoubleBodyArr[i]
            await $.wait(32000)
            await toDouble(rewardBody)
        }
        
        if(jctqWithdrawFlag > 0 && jctqWithdrawArr.length > 0) {
            numBoxbody = jctqWithdrawArr.length
            console.log(`找到${numBoxbody}个提现body`)
            
            for(let i=0; i<numBoxbody; i++) {
                let withBody = jctqWithdrawArr[i]
                await withdraw(withBody)
                await $.wait(1000)
            }
        } else if(jctqWithdrawFlag == 0) {
            console.log(`你设置了不自动提现`)
        } else if(jctqWithdrawArr.length == 0) {
            console.log(`没有找到提现body`)
        }
        
        numBoxbody = jctqCookieArr.length
        console.log(`找到${numBoxbody}个cookie`)
        
        for(let i=0; i<numBoxbody; i++) {
            notifyStr += `\n============= 账户${i+1} =============\n`
            await getBalance(jctqCookieArr[i])
            await $.wait(1000)
        }
        
        await showmsg()
        
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
        if(jctqCookie.indexOf('@') > -1) {
            let jctqCookies = jctqCookie.split('@')
            for(let i=0; i<jctqCookies.length; i++) {
                jctqCookieArr.push(replaceCookie(jctqCookies[i]))
            }
        } else {
            
            jctqCookieArr.push(replaceCookie(jctqCookie))
        }
    }
    
    if(jctqWithdraw) {
        if(jctqWithdraw.indexOf('&') > -1) {
            let jctqWithdraws = jctqWithdraw.split('&')
            for(let i=0; i<jctqWithdraws.length; i++) {
                jctqWithdrawArr.push(jctqWithdraws[i])
            }
        } else {
            jctqWithdrawArr.push(jctqWithdraw)
        }
    }
    
    if(jctqQdBody) {
        if(jctqQdBody.indexOf('&') > -1) {
            let jctqQdBodyArr = jctqQdBody.split('&')
            for(let i=0; i<jctqQdBodyArr.length; i++) {
                jctqRewardBodyArr.push(jctqQdBodyArr[i])
            }
        } else {
            jctqRewardBodyArr.push(jctqQdBody)
        }
    }
    
    if(jctqBoxbody) {
        if(jctqBoxbody.indexOf('&') > -1) {
            let jctqBoxbodyArr = jctqBoxbody.split('&')
            for(let i=0; i<jctqBoxbodyArr.length; i++) {
                jctqRewardBodyArr.push(jctqBoxbodyArr[i])
            }
        } else {
            jctqRewardBodyArr.push(jctqBoxbody)
        }
    }
    
    if(jctqSignDoubleBody) {
        if(jctqSignDoubleBody.indexOf('&') > -1) {
            let jctqSignDoubleBodys = jctqSignDoubleBody.split('&')
            for(let i=0; i<jctqSignDoubleBodys.length; i++) {
                jctqSignDoubleBodyArr.push(jctqSignDoubleBodys[i])
            }
        } else {
            jctqSignDoubleBodyArr.push(jctqSignDoubleBody)
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

//领取奖励
async function toGetReward(rewardBody,idx) {
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/v5/CommonReward/toGetReward.json'
    let urlObject = populatePostUrl(url,rewardBody)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.success == true) {
        if(result.items && result.items.score) {
            let signStr = ''
            if(result.items.title && result.items.title.indexOf('签到成功') > -1) signStr = '签到'
            console.log(`领取第${idx+1}个奖励成功，${signStr}获得${result.items.score}金币`)
        }
    } else {
        console.log(`领取第${idx+1}个奖励失败：${result.message}`)
    }
}

//签到翻倍
async function toDouble(rewardBody) {
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/v5/CommonReward/toDouble.json'
    let urlObject = populatePostUrl(url,rewardBody)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.success == true) {
        if(result.items && result.items.score) {
            console.log(`签到翻倍成功，获得${result.items.score}金币`)
        }
    } else {
        console.log(`签到翻倍失败：${result.message}`)
    }
}

//今日收益
async function getBalance(cookie) {
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/wap/user/balance?keyword_wyq=woyaoq.com&' + cookie
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.status == 0) {
        notifyStr += `【金币总数】：${result.user.score}\n`
        notifyStr += `【今日收益】：${result.user.today_score}\n`
        for(let i=0; i<result.history.length; i++) {
            let rewardItem = result.history[i]
            if(rewardItem.newdate.indexOf('今日收益') > -1) {
                for(let j=0; j<rewardItem.group.length; j++) {
                    let groupItem = rewardItem.group[j]
                    notifyStr += `----【${groupItem.name}】：${groupItem.money}\n`
                }
                break;
            }
        }
    } else {
        console.log(`查询今日收益失败：${result.message}`)
    }
}

//提现
async function withdraw(withBody) {
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/v5/wechat/withdraw2.json '
    let urlObject = populatePostUrl(url,withBody)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.success == true) {
        console.log(`=======提现成功=======`)
        notifyStr += `=======提现成功=======\n`
    } else {
        console.log(`提现失败：${result.message}`)
    }
}

////////////////////////////////////////////////////////////////////
function populatePostUrl(url,reqBody){
    let rndtime = Math.floor(new Date().getTime()/1000)
    let urlObject = {
        url: url,
        headers: {
            'request_time' : rndtime,
            'Host' : 'tq.xunsl.com',
            'device-model' : 'VOG-AL10',
            'device-platform' : 'android',
            'Connection' : 'keep-alive',
            'app-type' : 'jcweather',
        },
        body: reqBody
    }
    return urlObject;
}

function populateGetUrl(url){
    let rndtime = Math.floor(new Date().getTime()/1000)
    let urlObject = {
        url: url,
        headers: {
            'request_time' : rndtime,
            'Host' : 'tq.xunsl.com',
            'device-model' : 'VOG-AL10',
            'device-platform' : 'android',
            'Connection' : 'keep-alive',
            'app-type' : 'jcweather',
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
