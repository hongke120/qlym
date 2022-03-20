/**
 * 广汽三菱 
 * cron "0 0 7 * * ?"
 * 
 * 广汽三菱App 
 * 任务：签到、分享动态、回答问题、分享咨询、发布评论、分享活动
 * 没什么卵用 一天才50积分 一个月1500 加上签到累计奖励 随便挂着一、二个月也能兑换点东西 积分到账会有延迟
 * export slCookies='xxxxx@xxxxxx' 多个账号用 @分割 请求头Authorization的值 多账户请多开应用 退出会使Authorization失效
 * 频道：https://t.me/FengYun27
 */
const $ = new Env("广汽三菱");
const notify = $.isNode() ? require("./sendNotify") : "";
slCookies = $.isNode() ? process.env.slCookies : "";
slCookiesArr = [];
body = {
    url: 'https://mspace.gmmc.com.cn/',
    headers: {
        'Authorization': '',
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: ''
}
msg = '';

!(async () => {
    if ($.isNode()) {
        if (slCookies) {
            if (slCookies.indexOf("@") != -1) {
                slCookies.split("@").forEach((item) => {
                    slCookiesArr.push(item);
                });
            } else {
                slCookiesArr.push(slCookies);
            }
        } else {
            $.log(`\n【${$.name}】：未填写变量 slCookies`)
            return;
        }
    }
    $.log(`=================== 共找到 ${slCookiesArr.length} 个账号 ===================`)
    $.log(slCookiesArr)
    await $.wait(1 * 1000);

    for (let index = 0; index < slCookiesArr.length; index++) {
        let cookie = slCookiesArr[index]
        body.headers = {
            'Authorization': `${cookie}`,
            'Content-Type': 'application/json;charset=utf-8'
        }
        await $.wait(1 * 1000);
        var num = index + 1
        $.log(`\n========= 开始【第 ${num} 个账号】=========`)
        msg += `【第 ${num} 个账号】\n`
        $.log(cookie)
        //await Update_Info();

        await Query_UserInfo(slCookiesArr[index]);
        await Query_Balance(true);
        await $.wait(1 * 1000);

        $.log('开始 【签到】')
        await Sign_In();
        await $.wait(2 * 1000);

        $.log('开始 【分享动态】')
        await Share_4();
        await $.wait(2 * 1000);

        $.log('开始 【分享资讯】')
        await Share_5();
        await $.wait(2 * 1000);

        $.log('开始 【分享活动】')
        await Share_6();
        await $.wait(2 * 1000);

        $.log('开始 【发布评论】')
        await Add_Comment();
        await $.wait(2 * 1000);

        $.log('开始 【回答问题】')
        await Add_Answer();
        await $.wait(2 * 1000);

        $.log('开始 【发布动态】')
        await Add_Dynamic();
        await $.wait(2 * 1000);
        await Remove_Dynamic()

        await $.wait(10 * 1000);
        await Query_Balance();
    }
    await notify.sendNotify($.name, msg, 'https://t.me/FengYun27');
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())

/**
 * 签到
 */
function Sign_In () {
    body.url = 'https://mspace.gmmc.com.cn/customer-app/task-mapi/sign-in?noLoad=true'
    body.body = `{"taskTypeCode": "TASK-INTEGRAL-SIGN-IN","step": 1,"sign": "4b2d8ddcb9e2968778c58d131d7b30ff","timestamp": "","appVersion": "2.2.5","operateSystem": "iOS"}`;

    return new Promise((resolve) => {
        $.post(body, async (err, resp, data) => {
            try {
                results = JSON.parse(data);
                if (results.code == 0000) {
                    console.log(`【签到状态】:${results.data.isSignIn == true ? '签到成功' : '未签到'}`)
                } else {
                    $.log(results.msg)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        })
    })
}

/**
 * 分享动态
 */
function Share_4 () {
    body.url = `https://mspace.gmmc.com.cn/customer-app/integral-task/complete/share?noLoad=true`
    body.body = '{"taskType": 4}'

    return new Promise((resolve) => {
        $.post(body, async (err, resp, data) => {
            try {
                results = JSON.parse(data);
                if (results.code == 0000) {
                    console.log(`【分享状态】:${results.success == true ? '分享成功' : '分享失败'}`)
                } else {
                    $.log(results.msg)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        })
    })
}

/**
 * 分享资讯
 */
function Share_5 () {
    body.url = `https://mspace.gmmc.com.cn/customer-app/integral-task/complete/share?noLoad=true`
    body.body = '{"taskType": 5}'

    return new Promise((resolve) => {
        $.post(body, async (err, resp, data) => {
            try {
                results = JSON.parse(data);
                if (results.code == 0000) {
                    console.log(`【分享状态】:${results.success == true ? '分享成功' : '分享失败'}`)
                } else {
                    $.log(results.msg)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        })
    })
}

/**
 * 分享活动
 */
function Share_6 () {
    body.url = `https://mspace.gmmc.com.cn/customer-app/integral-task/complete/share?noLoad=true`
    body.body = '{"taskType": 6}'

    return new Promise((resolve) => {
        $.post(body, async (err, resp, data) => {
            try {
                results = JSON.parse(data);
                if (results.code == 0000) {
                    console.log(`【分享状态】:${results.success == true ? '分享成功' : '分享失败'}`)
                } else {
                    $.log(results.msg)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        })
    })
}

/**
 * 发表评论
 */
function Add_Comment () {
    body.url = `https://mspace.gmmc.com.cn/social-cms-app/frontend/comment/add`
    body.body = '{"commentContent": "很不错","commentType": 6,"commentTypeBusinessId": 2622012}'

    return new Promise((resolve) => {
        $.post(body, async (err, resp, data) => {
            try {
                results = JSON.parse(data);
                if (results.code == 0000) {
                    console.log(`【评论状态】:${results.success == true ? '评论成功' : '评论失败'}`)
                } else {
                    $.log(results.msg)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        })
    })
}

/**
 * 回答问题
 */
function Add_Answer () {
    body.url = `https://mspace.gmmc.com.cn/social-cms-app/frontend/qa/addAnswer`
    body.body = '{"content": "可以","pics": [],"questionId": 28176}'

    return new Promise((resolve) => {
        $.post(body, async (err, resp, data) => {
            try {
                results = JSON.parse(data);
                if (results.code == 0000) {
                    console.log(`【问题状态】:${results.success == true ? '回答成功' : '回答失败'}`)
                } else {
                    $.log(results.msg)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        })
    })
}

/**
 * 发布动态
 */
function Add_Dynamic () {
    body.url = `https://mspace.gmmc.com.cn/social-cms-app/frontend/dynamic/add`
    body.body = '{"province":"广东省","content":"hello啊","btype":0,"backgroundContent":"hello啊","area":"白云区","city":"广州市","lat":116.397128,"lng":39.916527,"dynamicFileList":[],"topicList":[]}'

    return new Promise((resolve) => {
        $.post(body, async (err, resp, data) => {
            try {
                results = JSON.parse(data);
                if (results.code == '0000') {
                    console.log(`【发布状态】:${results.success == true ? '发布成功' : '发布失败'}`)
                } else {
                    $.log(results.msg)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        })
    })
}

/**
 * 更改资料
 */
function Update_Info () {
    var int = Math.ceil(Math.random() * 9999)
    body.url = 'https://mspace.gmmc.com.cn/user-soa/user/account/update'
    body.body = `{"city":"1101","nickname":"MFans_FengYun${int}","signature":"TG频道：@FengYun27","realname":"FENGYUN${int}","thumb":"https://mspace-static.gmmc.com.cn/upload/prod/image/avatar/2022-02-18/47A9C99C-36D7-4AC2-A5FB-E40FAC0A4B18.jpg","sex":1,"dateBirth":"2022/03/19","province":"110000"}`

    return new Promise((resolve) => {
        $.post(body, async (err, resp, data) => {
            try {
            } catch (e) {
                $.log(data)
            } finally {
                resolve()
            }
        })
    })
}

/**
 * 删除动态
 */
async function Remove_Dynamic () {
    let IdArr = await Query_Dynamic();
    if (IdArr) {
        if (IdArr.length > 0) {
            $.log(`开始 【删除动态】`);
            for (i = 0; i < IdArr.length; i++) {
                body.url = 'https://mspace.gmmc.com.cn/social-cms-app/frontend/dynamic/delete'
                body.body = `{"dynamicId": ${IdArr[i]}}`
                await $.post(body, async (err, resp, data) => {
                    try {
                        if (results.code == '0000') {
                            $.log(`【动态(${IdArr[i]})】:删除成功`);
                        } else {
                            $.log(results.msg)
                        }
                    } catch (e) {
                        $.logErr(e, resp);
                    } finally {
                    }
                })
                await $.wait(1 * 1000);
            }
        }
    }
}

/**
 * 查询所有动态
 * @returns 所有动态id
 */
function Query_Dynamic () {
    body.url = 'https://mspace.gmmc.com.cn/social-cms-app/frontend/dynamic/my/queryByPage'
    body.body = '{"fansUserId": "","pageSize": 50,"queryType": 0,"pageNo": 1}'

    return new Promise((resolve) => {
        $.post(body, async (err, resp, data) => {
            try {
                results = JSON.parse(data);
                if (results.code == '0000') {
                    let IdArr = [];
                    for (i = 0; i < results.data.list.length; i++) {
                        IdArr.push(results.data.list[i].id)
                    }
                    $.log(`共有${IdArr.length}条动态`);
                    resolve(IdArr);
                } else {
                    $.log(results.msg)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        })
    })
}

/**
 * 查询用户资料
 */
function Query_UserInfo (authorization) {
    let url = {
        url: 'https://mspace.gmmc.com.cn/social-cms-app/frontend/userFollowers/userHomePage',
        headers: {
            'Authorization': authorization
        }
    }

    return new Promise((resolve) => {
        $.get(url, async (err, resp, data) => {
            try {
                results = JSON.parse(data);
                if (results.code == 0000) {
                    $.log(`
用户Id:${results.data.userId}
用户昵称:${results.data.nickname}
手机号:${results.data.mobile}`)

                    msg += `
用户昵称:${results.data.nickname}
手机号:${results.data.mobile}`
                } else {
                    $.log(results.msg)
                    msg += '账号已过期\n'
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        })
    })
}

/**
 * 查询总积分
 */
function Query_Balance (frist) {
    body.url = 'https://mspace.gmmc.com.cn/life-main-app/frontend/integral/queryBalance'

    return new Promise((resolve) => {
        $.post(body, async (err, resp, data) => {
            try {
                results = JSON.parse(data);
                if (results.code == 0000) {
                    if (frist) {
                        msg += `\n【任务前总积分】:${results.data}`
                        console.log(`【任务前总积分】:${results.data}`)
                    } else {
                        msg += `【任务后总积分】:${results.data}\n`
                        console.log(`【任务后总积分】:${results.data}\n`)
                    }
                } else {
                    $.log(results.msg)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        })
    })
}

// prettier-ignore
function Env (t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send (t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get (t) { return this.send.call(this.env, t) } post (t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode () { return "undefined" != typeof module && !!module.exports } isQuanX () { return "undefined" != typeof $task } isSurge () { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon () { return "undefined" != typeof $loon } toObj (t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr (t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson (t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson (t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript (t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript (t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata () { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata () { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get (t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set (t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata (t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata (t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval (t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval (t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv (t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get (t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post (t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time (t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg (e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log (...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr (t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait (t) { return new Promise(e => setTimeout(e, t)) } done (t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }