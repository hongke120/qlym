/*
软件名称:睡觉宝(安卓毛，苹果已头炸，玩不了)
完成时间：2021-11-3 @Tom  @YaphetS0903
此项目由@Tom 提供解密技术、测试数据和修改  @YaphetS0903编写

运行脚本会挤掉app登录，重新登陆下就行


睡觉宝
青龙环境抓取链接
https://mapi.shuijiaobao.cn/login/code (登录授权获取，不要乱抓ua，有些链接ua不能用)
环境配置(@隔开)
export sjbua='抓取的ua1@抓取的ua2'

抓取的登录ua样式
a|7.1.2|2.0.2|ql_sleep|abcdefghigklmnopqrstu|1200|1920|0|123456|1635935974000|d1e89118a283d9e2c373c76a586f07cb

圈X配置如下，其他自行测试，运行一次即可
严格按照定时执行脚本
[task_local]
#睡觉宝
0,30 6,12,13,18,21 * * * https://raw.githubusercontent.com/YaphetS0903/JStest/main/sjb.js, tag=睡觉宝, enabled=true
[rewrite_local]
#睡觉宝
https://mapi.shuijiaobao.cn/login/code url script-request-body https://raw.githubusercontent.com/YaphetS0903/JStest/main/sjb.js
[MITM]
hostname = mapi.shuijiaobao.cn
*/

const $ = new Env('睡觉宝');
let status;

status = (status = ($.getval("sjbstatus") || "1")) > 1 ? `${status}` : "";
let sjbuaArr = [], sjbcount = ''
let sjbua = $.isNode() ? (process.env.sjbua ? process.env.sjbua : "") : ($.getdata('sjbua') ? $.getdata('sjbua') : "")
let times = ''
let tz = ($.getval('tz') || '1');
let signid = '', spid = '', id2 = '', typeid = '', signid2 = '', token = ''
$.message = ''
let sjbuas = ""

!(async () => {
    if (typeof $request !== "undefined") {
        sjbck()
    } else {
        if (!$.isNode()) {
            sjbuaArr.push($.getdata('sjbua'))
            let sjbcount = ($.getval('sjbcount') || '1');
            for (let i = 2; i <= sjbcount; i++) {
                sjbuaArr.push($.getdata(`sjbua${i}`))
            }
            console.log(
                `\n\n=============================================== 脚本执行 - 北京时间(UTC+8)：${new Date(
                    new Date().getTime() +
                    new Date().getTimezoneOffset() * 60 * 1000 +
                    8 * 60 * 60 * 1000
                ).toLocaleString()} ===============================================\n`);
            for (let i = 0; i < sjbuaArr.length; i++) {
                if (sjbuaArr[i]) {

                    sjbua = sjbuaArr[i];
                    $.index = i + 1;
                    console.log(`\n\n开始【睡觉宝${$.index}作者@YaphetS0903】`)
                    nowTimes = new Date(
                        new Date().getTime() +
                        new Date().getTimezoneOffset() * 60 * 1000 +
                        8 * 60 * 60 * 1000
                    );
                    await sjblogin()
                    //message()
                }
            }
        } else {

            if (process.env.sjbua && process.env.sjbua.indexOf('@') > -1) {
                sjbuaArr = process.env.sjbua.split('@');
                console.log(`您选择的是用"@"隔开\n`)
            } else {
                sjbuas = [process.env.sjbua]
            };
            Object.keys(sjbuas).forEach((item) => {
                if (sjbuas[item]) {
                    sjbuaArr.push(sjbuas[item])
                }
            })

            console.log(`共${sjbuaArr.length}个cookie`)
            for (let k = 0; k < sjbuaArr.length; k++) {
                $.message = ""
                sjbua = sjbuaArr[k];
                $.index = k + 1;
                console.log(`\n开始【睡觉宝${$.index}作者@YaphetS0903】`)
                nowTimes = new Date(
                    new Date().getTime() +
                    new Date().getTimezoneOffset() * 60 * 1000 +
                    8 * 60 * 60 * 1000
                );
                await sjblogin()
                //message()
            }
        }

    }
})()

    .catch((e) => $.logErr(e))
    .finally(() => $.done())

//https://mapi.shuijiaobao.cn/login/code
function sjbck() {
    if ($request.url.indexOf("login") > -1 && $request.url.indexOf("code") > -1) {
        const sjbua = JSON.stringify($request.headers.ua)
        if (sjbua) $.setdata(sjbua, `sjbua${status}`)
        $.log(sjbua)
        $.msg($.name, "", `睡觉宝${status}获取ua成功`)
    }
}

//登录
function sjblogin(timeout = 0) {
    return new Promise((resolve) => {
        spid = sjbua.split('|')[8].split('|')[0]
        times = Math.round(new Date().getTime() / 1000).toString();
        signid2 = MD5_Encrypt(`${spid}4BmeNjXs6vLWpT8A${times}`)
        id3 = sjbua.split('|')[10].split('|')[0]
        let uanow = sjbua.replace(/\d{13}/g, `${times}000`) //匹配10或13位
        let uanow1 = uanow.replace(/\w{32}/, `${signid2}`)

        let equipment = sjbua.split('|')[4].split('|')[0]

        let url = {
            url: `https://mapi.shuijiaobao.cn/login/code`,
            headers: {

                "ua": uanow1
            },
            body: `channel=&equipmentCode=${equipment}&pName=ql_sleep&userId=&versionName=2.0.2`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)
                if (result.ok == 1) {
                    console.log(`【登录成功】：${result.msg}\n`)
                    console.log(`【获取到accessToken】：${result.data.userInfo.accessToken}\n`)
                    token = result.data.userInfo.accessToken
                    if (nowTimes.getHours() === 13 || nowTimes.getHours() === 6) {
                        await sjsign()
                        await $.wait(5000)
                    }
                    await $.wait(1000)
                    if (nowTimes.getHours() === 12 || nowTimes.getHours() === 21) {
                        await sjbsleep()
                        await $.wait(8000)
                    }
                    if (nowTimes.getHours() === 13 || nowTimes.getHours() === 6) {
                        await sjbwakeup()
                        await $.wait(8000)
                    }
                    if (nowTimes.getHours() === 12 || nowTimes.getHours() === 21 || nowTimes.getHours() === 6 || nowTimes.getHours() === 18) {
                        await sjbeat()
                        await $.wait(5000)
                    }
                    await sjbtasklist()
                    await $.wait(5000)
                    await sjbtxinfo()
                } else {
                    console.log(`【登录失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}



//任务列表
function sjbtasklist(timeout = 0) {
    return new Promise((resolve) => {
        spid = sjbua.split('|')[8].split('|')[0]
        let a = sjbua.match(/(\d{10,13})/)[1];
        let sj = a.length
        if (sj == 10) {
            times = Math.round(new Date().getTime() / 1000).toString();
        }
        if (sj != 10) {
            times = new Date().getTime()
        }
        signid2 = MD5_Encrypt(`${spid}4BmeNjXs6vLWpT8A${times}`)

        let uanow = sjbua.replace(/\d{10,13}/g, `${times}`) //匹配10或13位
        let uanow1 = uanow.replace(/\w{32}/, `${signid2}`)

        let url = {
            url: `https://mapi.shuijiaobao.cn/task/newList`,
            headers: {
                "ua": `${uanow1}|${token}`
            },
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.ok == 1) {
                    console.log(`【查询任务列表】：${result.msg}\n`)
                    if (result.data.day_list[4].is_get == true) {
                        console.log(`【今日视频奖励已领取】\n`)
                    } else {
                        let typeid = 155
                        let tm = result.data.day_list[4].totalNum - result.data.day_list[4].curNum
                        for (let u = 0; u < tm; u++) {
                            console.log(`【开始看视频任务】\n`)
                            await $.wait(8000)
                            await sjbjl(typeid)
                        }
                    }
                    if (result.data.day_list[1].is_get == true) {
                        console.log(`【今日睡觉奖励已领取】\n`)
                    } else {
                        console.log(`【开始领取睡觉奖励】\n`)
                        if (nowTimes.getHours() === 21) {
                            let typeid = 152
                            await $.wait(8000)
                            await sjbjl(typeid)
                        } else {
                            console.log(`【晚上九点任务全部完成才能领取奖励哦】\n`)
                        }
                    }
                    if (result.data.day_list[2].is_get == true) {
                        console.log(`【今日吃饭打卡奖励已领取】\n`)
                    } else {
                        console.log(`【开始领取吃饭打卡奖励】\n`)
                        if (nowTimes.getHours() === 21) {
                            let typeid = 153
                            await $.wait(8000)
                            await sjbjl(typeid)
                        } else {
                            console.log(`【晚上九点任务全部完成才能领取奖励哦】\n`)
                        }
                    }
                } else {
                    console.log(`【查询任务列表失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}



//任务奖励领取
function sjbjl(typeid) {
    return new Promise((resolve) => {
        spid = sjbua.split('|')[8].split('|')[0]
        times = Math.round(new Date().getTime() / 1000).toString();
        id3 = sjbua.split('|')[10].split('|')[0]
        let uanow = sjbua.replace(/\d{13}/g, `${times}`) //匹配10或13位
        let timeid = uanow.match(/(\d{10})/)[1];
        signid2 = MD5_Encrypt(`${spid}4BmeNjXs6vLWpT8A${timeid}`)
        let uanow1 = uanow.replace(/\w{32}/, `${signid2}`)
        signid = MD5_Encrypt(`${spid}49lfdkislkcsiT8A${timeid}${token}`)
        // id3 = sjbua.split('|')[10].split('|')[0]  
        let url = {
            url: `https://mapi.shuijiaobao.cn/task/dayReward`,
            headers: {
                "ua": `${uanow1}|${token}`
            },
            body: `sign=${signid}&timeStamp=${timeid}&type=${typeid}`,
        }
        $.post(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                if (result.ok == 1) {
                    console.log(`【任务完成】：${result.msg}【增加金币】：${result.data.user_info.add_gold_coin}\n`)
                    await $.wait(8000)
                } else {
                    console.log(`【任务失败】：${result.msg}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, 0)
    })
}


//睡觉
function sjbsleep(timeout = 0) {
    return new Promise((resolve) => {
        spid = sjbua.split('|')[8].split('|')[0]
        let a = sjbua.match(/(\d{10,13})/)[1];
        let sj = a.length
        if (sj == 10) {
            times = Math.round(new Date().getTime() / 1000).toString();
        }
        if (sj != 10) {
            times = new Date().getTime()
        }
        signid2 = MD5_Encrypt(`${spid}4BmeNjXs6vLWpT8A${times}`)
        let uanow = sjbua.replace(/\d{10,13}/g, `${times}`) //匹配10或13位
        let uanow1 = uanow.replace(/\w{32}/, `${signid2}`)


        let url = {
            url: `https://mapi.shuijiaobao.cn/sleep/createOrderSleep`,
            headers: {
                "ua": `${uanow1}|${token}`
            },
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.ok == 1) {
                    console.log(`【睡觉任务】：${result.msg}\n`)
                } else {
                    console.log(`【睡觉任务失败】：${result.msg}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}




//醒来
function sjbwakeup(timeout = 0) {
    return new Promise((resolve) => {
        spid = sjbua.split('|')[8].split('|')[0]
        let a = sjbua.match(/(\d{10,13})/)[1];
        let sj = a.length
        if (sj == 10) {
            times = Math.round(new Date().getTime() / 1000).toString();
        }
        if (sj != 10) {
            times = new Date().getTime()
        }
        signid2 = MD5_Encrypt(`${spid}4BmeNjXs6vLWpT8A${times}`)
        let uanow = sjbua.replace(/\d{10,13}/g, `${times}`) //匹配10或13位
        let uanow1 = uanow.replace(/\w{32}/, `${signid2}`)
        let url = {
            url: `https://mapi.shuijiaobao.cn/sleep/createOrderSleep`,
            headers: {
                "ua": `${uanow1}|${token}`
            },
        }
        $.post(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                if (result.ok == 1) {
                    console.log(`【醒来】：${result.msg}\n`)
                    console.log(`【睡觉时长】：${result.data.time}\n`)
                    console.log(`【提醒】：${result.data.copywriting}\n`)
                    console.log(`【开始领取睡觉奖励】\n`)
                    await $.wait(8000)
                    await sjbsleepreward()
                } else {
                    console.log(`【醒来失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//领取睡觉奖励
function sjbsleepreward(timeout = 0) {
    return new Promise((resolve) => {
        spid = sjbua.split('|')[8].split('|')[0]
        let a = sjbua.match(/(\d{10,13})/)[1];
        let sj = a.length
        if (sj == 10) {
            times = Math.round(new Date().getTime() / 1000).toString();
        }
        if (sj != 10) {
            times = new Date().getTime()
        }
        signid2 = MD5_Encrypt(`${spid}4BmeNjXs6vLWpT8A${times}`)
        let uanow = sjbua.replace(/\d{10,13}/g, `${times}`) //匹配10或13位
        let uanow1 = uanow.replace(/\w{32}/, `${signid2}`)
        let url = {
            url: `https://mapi.shuijiaobao.cn/sleep/collectSleepGoldAll`,
            headers: {
                "ua": `${uanow1}|${token}`
            },
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.ok == 1) {
                    console.log(`【睡觉奖励领取】：${result.msg}【获得金币】：${result.data.number}\n`)
                } else {
                    console.log(`【睡觉奖励领取失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//吃饭打卡
function sjbeat(timeout = 0) {
    return new Promise((resolve) => {
        spid = sjbua.split('|')[8].split('|')[0]
        let a = sjbua.match(/(\d{10,13})/)[1];
        let sj = a.length
        if (sj == 10) {
            times = Math.round(new Date().getTime() / 1000).toString();
        }
        if (sj != 10) {
            times = new Date().getTime()
        }
        signid2 = MD5_Encrypt(`${spid}4BmeNjXs6vLWpT8A${times}`)
        let uanow = sjbua.replace(/\d{10,13}/g, `${times}`) //匹配10或13位
        let uanow1 = uanow.replace(/\w{32}/, `${signid2}`)
        let url = {
            url: `https://mapi.shuijiaobao.cn/sleep/dinnerCreate`,
            headers: {
                "ua": `${uanow1}|${token}`
            },
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.ok == 1) {
                    console.log(`【吃饭打卡】：${result.msg}【获得金币】：${result.data.gold_number}\n`)
                } else {
                    console.log(`【吃饭打卡失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}
//签到
function sjsign(timeout = 0) {
    return new Promise((resolve) => {
        spid = sjbua.split('|')[8].split('|')[0]
        let a = sjbua.match(/(\d{10,13})/)[1];
        let sj = a.length
        if (sj == 10) {
            times = Math.round(new Date().getTime() / 1000).toString();
        }
        if (sj != 10) {
            times = new Date().getTime()
        }
        signid2 = MD5_Encrypt(`${spid}4BmeNjXs6vLWpT8A${times}`)
        let uanow = sjbua.replace(/\d{10,13}/g, `${times}`) //匹配10或13位
        let uanow1 = uanow.replace(/\w{32}/, `${signid2}`)
        let url = {
            url: `https://mapi.shuijiaobao.cn/home/sign`,
            headers: {
                "ua": `${uanow1}|${token}`
            },
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.ok == 1) {
                    console.log(`【签到】：${result.msg}【获得金币】：${result.data.sign_info.sign_power_coin}\n`)
                    console.log(`【剩余金币】：${result.data.sign_info.gold_coin}\n`)
                } else {
                    console.log(`【签到失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//提现页面信息
function sjbtxinfo(timeout = 0) {
    return new Promise((resolve) => {
        spid = sjbua.split('|')[8].split('|')[0]
        let a = sjbua.match(/(\d{10,13})/)[1];
        let sj = a.length
        if (sj == 10) {
            times = Math.round(new Date().getTime() / 1000).toString();
        }
        if (sj != 10) {
            times = new Date().getTime()
        }
        signid2 = MD5_Encrypt(`${spid}4BmeNjXs6vLWpT8A${times}`)
        let uanow = sjbua.replace(/\d{10,13}/g, `${times}`) //匹配10或13位
        let uanow1 = uanow.replace(/\w{32}/, `${signid2}`)
        let url = {
            url: `https://mapi.shuijiaobao.cn/money/extractPage`,
            headers: {
                "ua": `${uanow1}|${token}`
            },
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.ok == 1) {
                    console.log(`【当前剩余金币】：${result.data.user_info.gold_coin}\n`)
                    if(result.data.user_info.gold_coin >=10000){
                        console.log(`【当前金币足够提现，等待开始】\n`)
                        await $.wait(10000)
                        await sjbtx()
                    }
                } else {
                    console.log(`【查询提现信息失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}
//提现
function sjbtx(typeid) {
    return new Promise((resolve) => {
        spid = sjbua.split('|')[8].split('|')[0]
        times = Math.round(new Date().getTime() / 1000).toString();
        id3 = sjbua.split('|')[10].split('|')[0]
        let uanow = sjbua.replace(/\d{13}/g, `${times}`) //匹配10或13位
        let timeid = uanow.match(/(\d{10})/)[1];
        signid2 = MD5_Encrypt(`${spid}4BmeNjXs6vLWpT8A${timeid}`)
        let uanow1 = uanow.replace(/\w{32}/, `${signid2}`)
        signid = MD5_Encrypt(`${spid}49lfdkislkcsiT8A${timeid}${token}`)
        // id3 = sjbua.split('|')[10].split('|')[0]  
        let url = {
            url: `https://mapi.shuijiaobao.cn/money/extract`,
            headers: {
                "ua": `${uanow1}|${token}`
            },
            body: `pay_type=1&sign=${signid2}&timeStamp=${timeid}&type=2`,
        }
        $.post(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                if (result.ok == 1) {
                    console.log(`【体现】：${result.msg}`)
                } else {
                    console.log(`【体现失败】：${result.msg}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, 0)
    })
}









//MD5加密
function MD5_Encrypt(a) {
    function b(a, b) {
        return a << b | a >>> 32 - b
    }

    function c(a, b) {
        var c, d, e, f, g;
        return e = 2147483648 & a,
            f = 2147483648 & b,
            c = 1073741824 & a,
            d = 1073741824 & b,
            g = (1073741823 & a) + (1073741823 & b),
            c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f :
                g ^ e ^ f
    }

    function d(a, b, c) {
        return a & b | ~a & c
    }

    function e(a, b, c) {
        return a & c | b & ~c
    }

    function f(a, b, c) {
        return a ^ b ^ c
    }

    function g(a, b, c) {
        return b ^ (a | ~c)
    }

    function h(a, e, f, g, h, i, j) {
        return a = c(a, c(c(d(e, f, g), h), j)),
            c(b(a, i), e)
    }

    function i(a, d, f, g, h, i, j) {
        return a = c(a, c(c(e(d, f, g), h), j)),
            c(b(a, i), d)
    }

    function j(a, d, e, g, h, i, j) {
        return a = c(a, c(c(f(d, e, g), h), j)),
            c(b(a, i), d)
    }

    function k(a, d, e, f, h, i, j) {
        return a = c(a, c(c(g(d, e, f), h), j)),
            c(b(a, i), d)
    }

    function l(a) {
        for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i =
            0; c > i;)
            b = (i - i % 4) / 4,
                h = i % 4 * 8,
                g[b] = g[b] | a.charCodeAt(i) << h,
                i++;
        return b = (i - i % 4) / 4,
            h = i % 4 * 8,
            g[b] = g[b] | 128 << h,
            g[f - 2] = c << 3,
            g[f - 1] = c >>> 29,
            g
    }

    function m(a) {
        var b, c, d = "",
            e = "";
        for (c = 0; 3 >= c; c++)
            b = a >>> 8 * c & 255,
                e = "0" + b.toString(16),
                d += e.substr(e.length - 2, 2);
        return d
    }

    function n(a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192),
                b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224),
                    b += String.fromCharCode(d >> 6 & 63 | 128),
                    b += String.fromCharCode(63 & d | 128))
        }
        return b
    }

    var o, p, q, r, s, t, u, v, w, x = [],
        y = 7,
        z = 12,
        A = 17,
        B = 22,
        C = 5,
        D = 9,
        E = 14,
        F = 20,
        G = 4,
        H = 11,
        I = 16,
        J = 23,
        K = 6,
        L = 10,
        M = 15,
        N = 21;
    for (a = n(a),
        x = l(a),
        t = 1732584193,
        u = 4023233417,
        v = 2562383102,
        w = 271733878,
        o = 0; o < x.length; o += 16)
        p = t,
            q = u,
            r = v,
            s = w,
            t = h(t, u, v, w, x[o + 0], y, 3614090360),
            w = h(w, t, u, v, x[o + 1], z, 3905402710),
            v = h(v, w, t, u, x[o + 2], A, 606105819),
            u = h(u, v, w, t, x[o + 3], B, 3250441966),
            t = h(t, u, v, w, x[o + 4], y, 4118548399),
            w = h(w, t, u, v, x[o + 5], z, 1200080426),
            v = h(v, w, t, u, x[o + 6], A, 2821735955),
            u = h(u, v, w, t, x[o + 7], B, 4249261313),
            t = h(t, u, v, w, x[o + 8], y, 1770035416),
            w = h(w, t, u, v, x[o + 9], z, 2336552879),
            v = h(v, w, t, u, x[o + 10], A, 4294925233),
            u = h(u, v, w, t, x[o + 11], B, 2304563134),
            t = h(t, u, v, w, x[o + 12], y, 1804603682),
            w = h(w, t, u, v, x[o + 13], z, 4254626195),
            v = h(v, w, t, u, x[o + 14], A, 2792965006),
            u = h(u, v, w, t, x[o + 15], B, 1236535329),
            t = i(t, u, v, w, x[o + 1], C, 4129170786),
            w = i(w, t, u, v, x[o + 6], D, 3225465664),
            v = i(v, w, t, u, x[o + 11], E, 643717713),
            u = i(u, v, w, t, x[o + 0], F, 3921069994),
            t = i(t, u, v, w, x[o + 5], C, 3593408605),
            w = i(w, t, u, v, x[o + 10], D, 38016083),
            v = i(v, w, t, u, x[o + 15], E, 3634488961),
            u = i(u, v, w, t, x[o + 4], F, 3889429448),
            t = i(t, u, v, w, x[o + 9], C, 568446438),
            w = i(w, t, u, v, x[o + 14], D, 3275163606),
            v = i(v, w, t, u, x[o + 3], E, 4107603335),
            u = i(u, v, w, t, x[o + 8], F, 1163531501),
            t = i(t, u, v, w, x[o + 13], C, 2850285829),
            w = i(w, t, u, v, x[o + 2], D, 4243563512),
            v = i(v, w, t, u, x[o + 7], E, 1735328473),
            u = i(u, v, w, t, x[o + 12], F, 2368359562),
            t = j(t, u, v, w, x[o + 5], G, 4294588738),
            w = j(w, t, u, v, x[o + 8], H, 2272392833),
            v = j(v, w, t, u, x[o + 11], I, 1839030562),
            u = j(u, v, w, t, x[o + 14], J, 4259657740),
            t = j(t, u, v, w, x[o + 1], G, 2763975236),
            w = j(w, t, u, v, x[o + 4], H, 1272893353),
            v = j(v, w, t, u, x[o + 7], I, 4139469664),
            u = j(u, v, w, t, x[o + 10], J, 3200236656),
            t = j(t, u, v, w, x[o + 13], G, 681279174),
            w = j(w, t, u, v, x[o + 0], H, 3936430074),
            v = j(v, w, t, u, x[o + 3], I, 3572445317),
            u = j(u, v, w, t, x[o + 6], J, 76029189),
            t = j(t, u, v, w, x[o + 9], G, 3654602809),
            w = j(w, t, u, v, x[o + 12], H, 3873151461),
            v = j(v, w, t, u, x[o + 15], I, 530742520),
            u = j(u, v, w, t, x[o + 2], J, 3299628645),
            t = k(t, u, v, w, x[o + 0], K, 4096336452),
            w = k(w, t, u, v, x[o + 7], L, 1126891415),
            v = k(v, w, t, u, x[o + 14], M, 2878612391),
            u = k(u, v, w, t, x[o + 5], N, 4237533241),
            t = k(t, u, v, w, x[o + 12], K, 1700485571),
            w = k(w, t, u, v, x[o + 3], L, 2399980690),
            v = k(v, w, t, u, x[o + 10], M, 4293915773),
            u = k(u, v, w, t, x[o + 1], N, 2240044497),
            t = k(t, u, v, w, x[o + 8], K, 1873313359),
            w = k(w, t, u, v, x[o + 15], L, 4264355552),
            v = k(v, w, t, u, x[o + 6], M, 2734768916),
            u = k(u, v, w, t, x[o + 13], N, 1309151649),
            t = k(t, u, v, w, x[o + 4], K, 4149444226),
            w = k(w, t, u, v, x[o + 11], L, 3174756917),
            v = k(v, w, t, u, x[o + 2], M, 718787259),
            u = k(u, v, w, t, x[o + 9], N, 3951481745),
            t = c(t, p),
            u = c(u, q),
            v = c(v, r),
            w = c(w, s);
    var O = m(t) + m(u) + m(v) + m(w);
    return O.toLowerCase()
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
