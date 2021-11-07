/*
软件名称:多福盒子
更新时间：2021-10-11 @YaphetS0903
官网下载：http://www.duofuhezi.com/
每日0.3和10元提现要抢，数量很少，每天8点开抢，0.3数量每天88个，脚本自动抢。
提醒：抢提现金额要绑定手机号和地址（地址乱填），不然抢不到


多福盒子
获取数据： 进入软件，随便完成一个元宝视频任务，或者完成绑定微信任务，获取数据
POST包
域名：api.duofu.xqustar.com

青龙环境抓取链接http://api.duofu.xqustar.com/api/task/finshTask
环境配置(@隔开，json格式)
export dfhzhd='抓取的header1@抓取的header2'

黄鸟抓的在请求RAW里面，只要有冒号的那一段，复制
吧head转换成JSONhttp://www.songluyi.com/ChangeHeaderToDict/

注意：转换后有冒号：和分号；的地方有空格，要删掉，结尾的UA引号加上，小数点删除

圈X配置如下，其他自行测试，加了判断，运行时间随意，早上8点刷新0.3，九点要运行一次自动抢
[task_local]
#多福盒子
0 0 8-18 * * * https://raw.githubusercontent.com/YaphetS0903/JStest/main/dfhz.js, tag=多福盒子, enabled=true
[rewrite_local]
#多福盒子
http://api.duofu.xqustar.com/api/task/finshTask url script-request-body https://raw.githubusercontent.com/YaphetS0903/JStest/main/dfhz.js
[MITM]
hostname = api.duofu.xqustar.com
*/
const $ = new Env('多福盒子');
let status;

status = (status = ($.getval("dfhzstatus") || "1")) > 1 ? `${status}` : "";
let dfhzurlArr = [], dfhzhdArr = [], dfhzcount = ''
let dfhzurl = $.getdata('dfhzurl')
let dfhzhd = $.isNode() ? (process.env.dfhzhd ? process.env.dfhzhd : "") : ($.getdata('dfhzhd') ? $.getdata('dfhzhd') : "")

let b = Math.round(new Date().getTime() / 1000).toString();
let DD = RT(15000, 20000)
let tz = ($.getval('tz') || '1');
let tx = ($.getval('tx') || '1');
let id = '', txid = '', aid = '', pid = ''
$.message = ''
let dfhzhds = ""




!(async () => {
    if (typeof $request !== "undefined") {
        await dfhzck()
    } else {
        if (!$.isNode()) {
            dfhzurlArr.push($.getdata('dfhzurl'))
            dfhzhdArr.push($.getdata('dfhzhd'))

            let dfhzcount = ($.getval('dfhzcount') || '1');
            for (let i = 2; i <= dfhzcount; i++) {
                dfhzurlArr.push($.getdata(`dfhzurl${i}`))
                dfhzhdArr.push($.getdata(`dfhzhd${i}`))

            }
            console.log(
                `\n\n=============================================== 脚本执行 - 北京时间(UTC+8)：${new Date(
                    new Date().getTime() +
                    new Date().getTimezoneOffset() * 60 * 1000 +
                    8 * 60 * 60 * 1000
                ).toLocaleString()} ===============================================\n`);
            for (let i = 0; i < dfhzhdArr.length; i++) {
                if (dfhzhdArr[i]) {

                    dfhzurl = dfhzurlArr[i];
                    dfhzhd = dfhzhdArr[i];


                    $.index = i + 1;
                    console.log(`\n\n开始【多福盒子${$.index}】`)
                    await dfhzaddress()
                    await $.wait(15000)
                    await dfhztasklist()
                    await $.wait(15000)
                    
                    //message()
                }
            }
        } else {
            if (process.env.dfhzhd && process.env.dfhzhd.indexOf('@') > -1) {
                dfhzhdArr = process.env.dfhzhd.split('@');
                console.log(`您选择的是用"@"隔开\n`)
            } else {
                dfhzhds = [process.env.dfhzhd]
            };
            Object.keys(dfhzhds).forEach((item) => {
                if (dfhzhds[item]) {
                    dfhzhdArr.push(dfhzhds[item])
                }
            })
            console.log(`共${dfhzhdArr.length}个cookie`)
            for (let k = 0; k < dfhzhdArr.length; k++) {
                $.message = ""
                dfhzhd = dfhzhdArr[k]
                $.index = k + 1;
                console.log(`\n开始【多福盒子${$.index}】`)
                    await dfhzaddress()
                    await $.wait(15000)
                    await dfhztasklist()
                    await $.wait(15000)
                //message()
            }
        }

    }
})()

    .catch((e) => $.logErr(e))
    .finally(() => $.done())





function dfhzck() {
    if ($request.url.indexOf("task/finshTask") > -1) {
        const dfhzurl = $request.url
        if (dfhzurl) $.setdata(dfhzurl, `dfhzurl${status}`)
        $.log(dfhzurl)

        const dfhzhd = JSON.stringify($request.headers)
        if (dfhzhd) $.setdata(dfhzhd, `dfhzhd${status}`)
        $.log(dfhzhd)



        $.msg($.name, "", `多福盒子${status}获取headers成功`)

    }
}




//刷视频
function dfhzsp(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/video/immediatelyaward?type=clockvideo`,
            headers: JSON.parse(dfhzhd),

        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {
                    console.log(`【看视频赚元宝】：${result.message}\n`)
                    console.log(`【获得元宝】：${result.data.award}\n`)


                } else {

                    console.log(`【看视频赚元宝失败】：${result.message}\n`)


                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}




//任务列表
function dfhztasklist(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/task/list`,
            headers: JSON.parse(dfhzhd),

        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {
                    console.log(`【查询任务列表列表】：${result.message}\n`)

                    if (result.data[1].list[0].finishtimes >= 1) {
                        console.log(`【今日刷视频任务已完成】\n`)
                    } 
//                     else {
//                         console.log(`【开始刷视频任务】\n`)
//                         for (let m = 0; m < 10; m++) {
//                             await dfhzsp()
//                             await $.wait(DD)
//                         }
                        //await dfhzvideo()
//                         await $.wait(2000)
//                     }

                    if (result.data[1].list[2].finishtimes >= 1) {
                        console.log(`【今日分享祝福任务已完成】\n`)
                    } else {
                        console.log(`【开始分享祝福任务】\n`)
                        await $.wait(20000)
                        await dfhzshare()
                       
                    }
                    if (result.data[1].list[3].finishtimes >= 10) {
                        console.log(`【今日元宝奖励视频任务已完成】\n`)
                    } else {
                        console.log(`【开始元宝奖励视频任务】\n`)
                        await $.wait(20000)
                        await dfhzybjlsp()
                       
                    }
                    if (result.data[1].list[4].finishtimes >= 10) {
                        console.log(`【今日元宝福利视频任务已完成】\n`)
                    } else {
                        console.log(`【开始元宝福利视频任务】\n`)
                        await $.wait(20000)
                        await dfhzybflsp()
                       
                    }
                    if (result.data[1].list[5].finishtimes >= 10) {
                        console.log(`【今日超级元宝视频任务已完成】\n`)
                    } else {
                        console.log(`【开始超级元宝视频任务】\n`)
                        await $.wait(20000)
                        await dfhzcjybsp()
                        
                        console.log(`【开始刷视频任务】\n`)
                        for (let m = 0; m < 5; m++) {
                            await dfhzsp()
                            await $.wait(30000)
                        }
                    }

                } else {

                    console.log(`【查询任务列表】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}




//刷短视频任务
function dfhzvideo(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/task/finshTask`,
            headers: JSON.parse(dfhzhd),
            body: `{
  "taskcode": "clockvideo",
  "achieve": true
}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【短视频任务】：${result.message}\n`)
                    await dfhzvideoreward()
                    await $.wait(15000)

                } else {

                    console.log(`【短视频任务失败】：${result.message}\n`)


                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}




//领取刷短视频奖励
function dfhzvideoreward(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/task/receiveDiamond`,
            headers: JSON.parse(dfhzhd),
            body: `{
  "double": "true",
  "taskcode": "clockvideo"
}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {



                    console.log(`【短视频任务领取奖励】：${result.message}\n`)

                } else {

                    console.log(`【短视频任务领取奖励失败】：${result.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//分享任务
function dfhzshare(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/task/finshTask`,
            headers: JSON.parse(dfhzhd),
            body: `{
  "taskcode": "share",
  "achieve": true
}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【分享任务】：${result.message}\n`)
                    await dfhzsharereward()
                    await $.wait(15000)

                } else {

                    console.log(`【分享任务失败】：${result.message}\n`)


                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}




//领取分享奖励
function dfhzsharereward(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/task/receiveDiamond`,
            headers: JSON.parse(dfhzhd),
            body: `{
  "double": "false",
  "taskcode": "share"
}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {



                    console.log(`【分享任务领取奖励】：${result.message}\n`)

                } else {

                    console.log(`【分享任务领取奖励失败】：${result.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//元宝奖励视频
function dfhzybjlsp(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/task/finshTask`,
            headers: JSON.parse(dfhzhd),
            body: `{
  "taskcode": "csjjlios",
  "achieve": true
}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【元宝奖励视频任务】：${result.message}\n`)
                    await dfhzybjlspreward()
                   await $.wait(15000)


                } else {

                    console.log(`【元宝奖励视频任务失败】：${result.message}\n`)


                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}




//元宝奖励视频领取奖励
function dfhzybjlspreward(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/task/receiveDiamond`,
            headers: JSON.parse(dfhzhd),
            body: `{
  "double": "false",
  "taskcode": "csjjlios"
}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {



                    console.log(`【元宝奖励视频领取奖励】：${result.message}\n`)

                } else {

                    console.log(`【元宝奖励视频领取奖励失败】：${result.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}




//元宝福利视频
function dfhzybflsp(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/task/finshTask`,
            headers: JSON.parse(dfhzhd),
            body: `{
  "taskcode": "gdtjlios",
  "achieve": true
}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【元宝福利视频任务】：${result.message}\n`)

                    await dfhzybjlspreward()
                    await $.wait(15000)


                } else {

                    console.log(`【元宝福利视频任务失败】：${result.message}\n`)


                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}




//元宝福利视频领取奖励
function dfhzybjlspreward(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/task/receiveDiamond`,
            headers: JSON.parse(dfhzhd),
            body: `{
  "double": "false",
  "taskcode": "gdtjlios"
}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {



                    console.log(`【元宝福利视频领取奖励】：${result.message}\n`)

                } else {

                    console.log(`【元宝福利视频领取奖励失败】：${result.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//超级元宝视频
function dfhzcjybsp(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/task/finshTask`,
            headers: JSON.parse(dfhzhd),
            body: `{
  "taskcode": "ksjlios",
  "achieve": true
}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【超级元宝视频任务】：${result.message}\n`)

                    await dfhzcjybspreward()
                  await $.wait(15000)

                } else {

                    console.log(`【超级元宝视频任务失败】：${result.message}\n`)


                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}




//超级元宝视频领取奖励
function dfhzcjybspreward(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/task/receiveDiamond`,
            headers: JSON.parse(dfhzhd),
            body: `{
  "double": "false",
  "taskcode": "ksjlios"
}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {



                    console.log(`【超级元宝视频领取奖励】：${result.message}\n`)

                } else {

                    console.log(`【超级元宝视频领取奖励失败】：${result.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//获取地址信息
function dfhzaddress(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/userAddress/list`,
            headers: JSON.parse(dfhzhd),
    
        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {
                    if(nowTimes.getHours() === 8){
                    console.log(`【开始准备提现0.3】\n`)
                    console.log(`【获得地址信息】：${result.data[0].id}\n`)
                    await dfhzgoodlist()
                    aid =result.data[0].id
                    }else{console.log(`【未到8点，不能提现】\n`)}
                } else {

                    console.log(`【获得地址信息失败】：${result.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//查询兑换商品信息
function dfhzgoodlist(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/goods/list?pn=1&ps=10&time=1633879473619&type=all`,
            headers: JSON.parse(dfhzhd),
       
        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {
                    console.log(`【查询兑换0.3兑换id】：${result.message}\n`)
                    pid =result.data.list[0].id
                    await $.wait(5000)
                    await dfhztx()
                } else {

                    console.log(`【查询兑换0.3兑换id失败】：${result.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//抢0.3
function dfhztx(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `http://api.duofu.xqustar.com/api/goods/exchange`,
            headers: JSON.parse(dfhzhd),
            body: `{
                "sum": 1,
                "addressID": "${aid}",
                "productId": "${pid}"
              }
              `,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {



                    console.log(`【兑换0.3】：${result.message}\n`)

                } else {

                    console.log(`【兑换失败，太慢了】：${result.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}



function message() {
    if (tz == 1) { $.msg($.name, "", $.message) }
}
//时间
nowTimes = new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
);

function RT(X, Y) {
    do rt = Math.floor(Math.random() * Y);
    while (rt < X)
    return rt;
}


//console.log('\n'+getCurrentDate());
function getCurrentDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;


}












function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
