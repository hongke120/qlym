/*
安卓：中青看点 风险查询+今日收益详情

需要用到zqkdCookie，只测试了青龙，理论上V2P也能用
本脚本没有设置重写，请自己复制zq_cookie到青龙环境下使用，多账号用@隔开
例子： export zqkdCookie='uid=xxx&zqkey=yyy&zqkey_id=zzz@uid=aaa&zqkey=bbb&zqkey_id=ccc@uid=qqq&zqkey=sss&zqkey_id=ttt'
*/

const $ = new Env('中青看点风险查询');
const notifyFlag = 1; //0为关闭通知，1为打开通知,默认为1
const logDebug = 0

const notify = $.isNode() ? require('./sendNotify') : '';
let notifyStr = ''

let rndtime = "" //毫秒
let httpResult //global buffer

let userCookie = ($.isNode() ? process.env.zqkdCookie : $.getdata('zqkdCookie')) || '';
let userCookieArr = []

let nickname = []
///////////////////////////////////////////////////////////////////

!(async () => {

    if(typeof $request !== "undefined")
    {
        $.msg(jsname+': 此脚本不做重写，请检查重写设置')
    }
    else
    {
        if(!(await checkEnv())) {
            return
        }
        
        await initAccountInfo()
        await RunRiskInfo()
        await RunUserBalance()
        
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
        if($.isNode()){await notify.sendNotify($.name, notifyBody );}
    }
}

async function checkEnv() {
    if(userCookie) {
        if(userCookie.indexOf('@') > -1) {
            let userCookies = userCookie.split('@')
            for(let i=0; i<userCookies.length; i++) {
                userCookieArr.push(replaceCookie(userCookies[i]))
            }
        } else {
            userCookieArr.push(replaceCookie(userCookie))
        }
    } else {
        console.log('未找到userCookie')
        return false
    }
    if(userCookieArr.length == 0) {
        console.log('未找到有效的userCookie')
        return false
    }
    
    console.log(`共找到${userCookieArr.length}个用户`)
    return true
}

async function initAccountInfo() {
    for(userIdx=0; userIdx<userCookieArr.length; userIdx++) {
        await getUserInfo()
    }
}

function replaceCookie(userCookieItem) {
    let replaceItem = ''
    let zqkey = ''
    let zqkey_id = ''
    if(userCookieItem.indexOf('zqkey=') > -1) {
        zqkey = userCookieItem.match(/zqkey=([\w-]+)/)[1]
    } else if (userCookieItem.indexOf('cookie=') > -1) {
        zqkey = userCookieItem.match(/cookie=([\w-]+)/)[1]
    }
    if(userCookieItem.indexOf('zqkey_id=') > -1) {
        zqkey_id = userCookieItem.match(/zqkey_id=([\w-]+)/)[1]
    } else if (userCookieItem.indexOf('cookie_id=') > -1) {
        zqkey_id = userCookieItem.match(/cookie_id=([\w-]+)/)[1]
    }
    if(userCookieItem.indexOf('uid=') > -1) {
        uid = userCookieItem.match(/uid=([\w-]+)/)[1]
    }
    
    replaceItem = `uid=${uid}&version_code=63&zqkey=${zqkey}&zqkey_id=${zqkey_id}`
    
    return replaceItem
}

//风险信息
async function RunRiskInfo() {
    for(userIdx=0; userIdx<userCookieArr.length; userIdx++) {
        notifyStr += `\n===== 查询用户${userIdx+1} ${nickname[userIdx]} 风险信息 =====\n`
        await GetOrderList()
    }
}

async function GetOrderList() {
    let caller = printCaller()
    let rndtime = Math.floor(new Date().getTime())
    let reqCk = userCookieArr[userIdx].replace(/zqkey/g,'cookie')
    let body = 'status=all&' + reqCk
    let url = 'https://kandian.youth.cn/withdraw/getOrderList?_=' + rndtime
    let urlObject = populatePostUrl(url,body)
    urlObject.headers.Host = 'kandian.youth.cn'
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.status == 1) {
        for(let item of result.data) {
            if(item.description) {
                notifyStr += `提现风险信息：${item.add_time_str} ${item.description}\n`
            }
        }
    } else {
        console.log(`查询风险信息失败`)
    }
}

//账户信息
async function getUserInfo() {
    let caller = printCaller()
    let tmpCk = userCookieArr[userIdx]
    tmpCk = tmpCk.replace(/zqkey/g,'cookie')
    let url = 'https://kandian.wkandian.com/v17/NewTask/getSign.json?' + userCookieArr[userIdx]
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.success == true) {
        let name = result.items.user.nickname ? result.items.user.nickname : ''
        nickname.push(name)
    } else {
        console.log(`查询账户${userIdx+1}信息失败：${result.msg}`)
    }
}

//今日收益
async function RunUserBalance() {
    for(userIdx=0; userIdx<userCookieArr.length; userIdx++) {
        await getBalance()
    }
}

async function getBalance() {
    let caller = printCaller()
    let tmpCk = userCookieArr[userIdx]
    tmpCk = tmpCk.replace(/zqkey/g,'cookie')
    let url = 'https://kandian.wkandian.com/wap/user/balance?' + tmpCk
    let urlObject = populateGetUrl(url)
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.status == 0) {
        notifyStr += `\n账户${userIdx+1} ${nickname[userIdx]}: \n`
        notifyStr += `【金币总数】：${result.user.score}\n`
        notifyStr += `【历史收益】：${result.user.total_score}\n`
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
        console.log(`查询今日收益失败：${result.msg}`)
    }
}

////////////////////////////////////////////////////////////////////
function populatePostUrl(url,reqBody){
    let rndtime = Math.floor(new Date().getTime()/1000)
    let urlObject = {
        url: url,
        headers: {
            'request_time' : rndtime,
            'Host' : 'kandian.wkandian.com',
            'device-model' : 'VOG-AL10',
            'device-platform' : 'android',
            'Connection' : 'keep-alive',
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
            'Host' : 'kandian.wkandian.com',
            'device-model' : 'VOG-AL10',
            'device-platform' : 'android',
            'Connection' : 'keep-alive',
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

function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
