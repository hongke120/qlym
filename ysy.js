/*
软件名称:萤石云视频
完成时间：2021-10-13 @YaphetS0903
感谢tom大哥连线指导

10.15更新，解决ck一天失效问题，需要重新抓取数据，
10.16更新自动提现

cron 21 15 * * * ysy.js

食用方法：

重新登录萤石云视频，抓包
需要登录的header、body和cookie三个数据
https://api.ys7.com/v3/users/login/v2

header用header转json工具转换
http://www.songluyi.com/ChangeHeaderToDict/

body查看表单即可获取

cookie获取
https://api.ys7.com/v3/integral/yd/getUserOpenBoxCd


提现body链接 抓post数据-查看表单
https://api.ys7.com/v3/integral/yd/pay

————————

环境配置(多账号@隔开)export ysyhd='抓取的header1@抓取的header2'
例：
export ysyhd='{"clientType":"1","Accept-Encoding":"gzip, deflate, br","netType":"WIFI","Co..........Content-Length":"450"}@账号2的数据'
export ysybody='account=123456&biz.......callTokenType%5C%22%3A1%7D%22%7D%5D&smsCode=@账号2的数据'
export cookie='"ASG_DisplayName=pgekc1; C_SS.............GBBehbyvORvekQPYYT87ps8gAtU; C_TYPE=1; C_VER=6.1.3.1262766"@账号2的数据'
export txbody='payCode=101005&receiverType=2&receiverId=123456789@账号2的数据'

*/
const $ = new Env('萤石云视频');
let status;

status = (status = ($.getval("ysystatus") || "1")) > 1 ? `${status}` : "";
let ysyurlArr = [], ysyhdArr = [],ysybodyArr = [], cookieArr = [],txbodyArr = [],ysycount = ''
let ysyurl = $.getdata('ysyurl')
let ysyhd = $.isNode() ? (process.env.ysyhd ? process.env.ysyhd : "") : ($.getdata('ysyhd') ? $.getdata('ysyhd') : "")
let ysybody = $.isNode() ? (process.env.ysybody  ? process.env.ysybody  : "") : ($.getdata('ysybody ') ? $.getdata('ysybody ') : "")
let cookie =$.isNode() ? (process.env.cookie  ? process.env.cookie  : "") : ($.getdata('cookie ') ? $.getdata('cookie ') : "")
let txbody = $.isNode() ? (process.env.txbody  ? process.env.txbody  : "") : ($.getdata('txbody ') ? $.getdata('txbody ') : "")
let b = Math.round(new Date().getTime() / 1000).toString();
let DD = RT(2000, 3500)
let tz = ($.getval('tz') || '1');
let tx = ($.getval('tx') || '1');
let id = '', txid = '', aid = '',  sessionId= '', featurecode= ''
$.message = ''
let ysyhds = "",ysybodys = "",cookies = "",txbodys = ""




!(async () => {
    if (typeof $request !== "undefined") {
        await ysyck()
    } else {
        if (!$.isNode()) {
            ysyurlArr.push($.getdata('ysyurl'))
            ysyhdArr.push($.getdata('ysyhd'))
            ysybodyArr.push($.getdata('ysybody'))
            cookieArr.push($.getdata('cookie'))
            txbodyArr.push($.getdata('txbody'))
            let ysycount = ($.getval('ysycount') || '1');
            for (let i = 2; i <= ysycount; i++) {
                ysyurlArr.push($.getdata(`ysyurl${i}`))
                ysyhdArr.push($.getdata(`ysyhd${i}`))
                ysybodyArr.push($.getdata(`ysybody${i}`))
                cookieArr.push($.getdata(`cookie${i}`))
                txbodyArr.push($.getdata(`txbody${i}`))
            }
            console.log(
                `\n\n=============================================== 脚本执行 - 北京时间(UTC+8)：${new Date(
                    new Date().getTime() +
                    new Date().getTimezoneOffset() * 60 * 1000 +
                    8 * 60 * 60 * 1000
                ).toLocaleString()} ===============================================\n`);
            for (let i = 0; i < ysyhdArr.length; i++) {
                if (ysyhdArr[i]) {

                    ysyurl = ysyurlArr[i];
                    ysyhd = ysyhdArr[i];
                    ysybody = ysybodyArr[i];
                    cookie = cookieArr[i];
                    txbody = txbodyArr[i];
                    $.index = i + 1;
                    console.log(`\n\n开始【萤石云${$.index}】`)
                    await ysylogin()
                  
                   
                    
                    //message()
                }
            }
        } else {
            if (process.env.ysyhd && process.env.ysyhd.indexOf('@') > -1) {
                ysyhdArr = process.env.ysyhd.split('@');
                console.log(`您选择的是用"@"隔开\n`)
            } else {
                ysyhds = [process.env.ysyhd]
            };
            Object.keys(ysyhds).forEach((item) => {
                if (ysyhds[item]) {
                    ysyhdArr.push(ysyhds[item])
                }
            })
            if (process.env.ysybody && process.env.ysybody.indexOf('@') > -1) {
                ysybodyArr = process.env.ysybody.split('@');
                console.log(`您选择的是用"@"隔开\n`)
            } else {
                ysybodys = [process.env.ysybody]
            };
            Object.keys(ysybodys).forEach((item) => {
                if (ysybodys[item]) {
                    ysybodyArr.push(ysybodys[item])
                }
            })

            if (process.env.cookie && process.env.cookie.indexOf('@') > -1) {
                cookieArr = process.env.cookie.split('@');
                console.log(`您选择的是用"@"隔开\n`)
            } else {
                cookies = [process.env.cookie]
            };
            Object.keys(cookies).forEach((item) => {
                if (cookies[item]) {
                    cookieArr.push(cookies[item])
                }
            })

            if (process.env.txbody && process.env.txbody.indexOf('@') > -1) {
                txbodyArr = process.env.txbody.split('@');
                console.log(`您选择的是用"@"隔开\n`)
            } else {
                txbodys = [process.env.txbody]
            };
            Object.keys(txbodys).forEach((item) => {
                if (txbodys[item]) {
                    txbodyArr.push(txbodys[item])
                }
            })


            console.log(`共${ysyhdArr.length}个cookie`)
            for (let k = 0; k < ysyhdArr.length; k++) {
                $.message = ""
                ysyurl = ysyurlArr[k];
                    ysyhd = ysyhdArr[k];
                    ysybody = ysybodyArr[k];
                    cookie = cookieArr[k];
                    txbody = txbodyArr[k];
                $.index = k + 1;
                console.log(`\n开始【萤石云${$.index}】`)
                    // await ysytaskList()
                    // await $.wait(1500)
                    // await ysyboxcd()
                    await ysylogin()
                //message()
            }
        }

    }
})()

    .catch((e) => $.logErr(e))
    .finally(() => $.done())





function ysyck() {
    if ($request.url.indexOf("login/v2") > -1) {
        const ysyurl = $request.url
        if (ysyurl) $.setdata(ysyurl, `ysyurl${status}`)
        $.log(ysyurl)

        const ysyhd = JSON.stringify($request.headers)
        if (ysyhd) $.setdata(ysyhd, `ysyhd${status}`)
        $.log(ysyhd)
        const ysybody = $request.body
        if (ysybody) $.setdata(ysybody, `ysybody${status}`)
        $.log(ysybody)


        $.msg($.name, "", `萤石云${status}获取登录数据成功`)

    }else if($request.url.indexOf("yd/getUserOpenBoxCd") > -1) {
        const cookie = JSON.stringify($request.headers.Cookie)
        if (cookie) $.setdata(cookie, `cookie${status}`)
        $.log(cookie)
        $.msg($.name, "", `萤石云${status}获取cookie数据成功`)
    }else if($request.url.indexOf("yd/pay") > -1) {
        const txbody = $request.body
        if (txbody) $.setdata(txbody, `txbody${status}`)
        $.log(txbody)
        $.msg($.name, "", `萤石云${status}获取提现数据成功`)
    }
}

//登录
function ysylogin(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://api.ys7.com/v3/users/login/v2`,
            headers: JSON.parse(ysyhd),
            body:ysybody,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.meta.code == 200) {
                    console.log(`【登录】：${result.meta.message}\n`)
                    sessionId =result.sessionInfo.sessionId
                    await ysytaskList()
                    await $.wait(1500)
                    await ysyboxcd()
                    await $.wait(1500)
                    await ysyydinfo()

                }else{
                    console.log(`【登录】：${result.meta.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//开宝箱冷却查询
function ysyboxcd(timeout = 0) {
    return new Promise((resolve) => {
        featurecode = ysybody.match(/featureCode=(\w+)/)[1]

        const sphd ={
            "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Length": "31",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookie,
        "Host": "api.ys7.com",
        "User-Agent": "VideoGo/1262766 CFNetwork/1220.1 Darwin/20.3.0",
        "appid": "ys",
        "clientno": "undefined",
        "clienttype": "1",
        "clientversion": "6.1.3.1262766",
        "featurecode": featurecode,
        "language": "undefined",
        "nettype": "WIFI",
        "sessionid": sessionId
        }
        let url = {
            url: `https://api.ys7.com/v3/integral/yd/getUserOpenBoxCd`,
            headers: sphd,

        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.meta.code == 200) {
                    console.log(`【开宝箱冷却查询】：${result.meta.message}\n`)
                   if(result.expireTime ==0){
                    console.log(`【开宝箱】\n`)
                    await ysybox()
                    await $.wait(3000)
                   }else{
                    console.log(`【开宝箱冷却时间未到】\n`)
                    
                    await $.wait(1500)
                   }


                } else {

                    console.log(`【开宝箱冷却查询失败】：${result.message}\n`)


                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//开宝箱
function ysybox(timeout = 0) {
    return new Promise((resolve) => {
        featurecode = ysybody.match(/featureCode=(\w+)/)[1]

        const sphd ={
            "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Length": "31",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookie,
        "Host": "api.ys7.com",
        "User-Agent": "VideoGo/1262766 CFNetwork/1220.1 Darwin/20.3.0",
        "appid": "ys",
        "clientno": "undefined",
        "clienttype": "1",
        "clientversion": "6.1.3.1262766",
        "featurecode": featurecode,
        "language": "undefined",
        "nettype": "WIFI",
        "sessionid": sessionId
        }
        let url = {
            url: `https://api.ys7.com/v3/integral/yd/openYdBox`,
            headers: sphd,

        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.meta.code == 200) {
                    console.log(`【开宝箱获得莹豆】：${result.ydValue}\n`)
                   


                } else if (result.meta.code == 10361){

                    console.log(`【开宝箱失败】：${result.meta.message}\n`)
                    console.log(`【开始看视频开宝箱】\n`)
                    await ysyspbox()
                    await $.wait(3000)
                }else if (result.meta.code == 10362){
                    console.log(`${result.meta.message}\n`)
                    console.log(`【开始看视频开宝箱】\n`)
                    await ysyspbox()
                    await $.wait(3000)
                }else{
                    console.log(`${result.meta.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}




//视频开宝箱
function ysyspbox(timeout = 0) {
    return new Promise((resolve) => {
        featurecode = ysybody.match(/featureCode=(\w+)/)[1]

        const sphd ={
            "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Length": "31",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookie,
        "Host": "api.ys7.com",
        "User-Agent": "VideoGo/1262766 CFNetwork/1220.1 Darwin/20.3.0",
        "appid": "ys",
        "clientno": "undefined",
        "clienttype": "1",
        "clientversion": "6.1.3.1262766",
        "featurecode": featurecode,
        "language": "undefined",
        "nettype": "WIFI",
        "sessionid": sessionId
        }
        let url = {
            url: `https://api.ys7.com/v3/integral/task/complete`,
            headers: sphd,
            body:`eventkey=1013&filterParam=12345`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.meta.code == 200) {
                    console.log(`【看视频开宝箱获得莹豆】：${result.taskIntegral}\n`)
                   


                }else{
                    console.log(`【看视频开宝箱获得莹豆失败】：${result.meta.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//任务列表
function ysytaskList(timeout = 0) {
    return new Promise((resolve) => {
        featurecode = ysybody.match(/featureCode=(\w+)/)[1]

        const sphd ={
            "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Length": "31",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookie,
        "Host": "api.ys7.com",
        "User-Agent": "VideoGo/1262766 CFNetwork/1220.1 Darwin/20.3.0",
        "appid": "ys",
        "clientno": "undefined",
        "clienttype": "1",
        "clientversion": "6.1.3.1262766",
        "featurecode": featurecode,
        "language": "undefined",
        "nettype": "WIFI",
        "sessionid": sessionId
        }
        let url = {
            url: `https://api.ys7.com/v3/integral/task/list`,
            headers: sphd,
            body: `pageNum=0
            &
            pageSize=20
            &
            vipId=`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)
//result.taskList[0].taskCompleteNum
                if (result.meta.code == 200) {
                    console.log(`【查询任务列表列表】：${result.meta.message}\n`)

                    if (result.taskList[0].taskCompleteNum != result.taskList[0].taskNum) {
                        console.log(`【开始签到任务】\n`)
                        await ysysign()
                        
// //签到任务
//     return new Promise((resolve) => {

//         let url = {
//             url: `https://api.ys7.com/v3/videoclips/user/check_in`,
//             headers: JSON.parse(ysyhd),
        
//         }
//         $.post(url, async (err, resp, data) => {
//             try {

//                 const result = JSON.parse(data)

//                 if (result.meta.code == 200) {


//                     console.log(`【签到】：${result.meta.message}\n`)
//                     console.log(`【获得莹豆】：${result.data.score}\n`)

//                 } else {

//                     console.log(`【签到失败】：${result.meta.message}\n`)
//                 }
//             } catch (e) {

//             } finally {

//                 resolve()
//             }
//         }, timeout)
//     })



                    } else {
                        console.log(`【今日签到任务已完成】\n`)
                    }




                    
                    if (result.taskList[1].taskCompleteNum != result.taskList[1].taskNum) {
                        await $.wait(1500)
                        console.log(`【开始上传短视频任务】\n`)
                        await ysyvideo()
                        await $.wait(3000)

 

                    } else {
                        console.log(`【今日上传短视频任务已完成】\n`)
                    }





                    if (result.taskList[2].taskCompleteNum != result.taskList[2].taskNum) {
                        console.log(`【开始评论短视频任务】\n`)
                        await ysyplvideo()
                        await $.wait(3000)
                    } else {
                        console.log(`【今日评论短视频任务已完成】\n`)
                    }

                  

                } else {

                    console.log(`【查询任务列表失败】：${result.meta.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}




//上传短视频任务
function ysyvideo(timeout = 0) {
    return new Promise((resolve) => {
        featurecode = ysybody.match(/featureCode=(\w+)/)[1]

        const sphd ={
            "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Length": "31",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookie,
        "Host": "api.ys7.com",
        "User-Agent": "VideoGo/1262766 CFNetwork/1220.1 Darwin/20.3.0",
        "appid": "ys",
        "clientno": "undefined",
        "clienttype": "1",
        "clientversion": "6.1.3.1262766",
        "featurecode": featurecode,
        "language": "undefined",
        "nettype": "WIFI",
        "sessionid": sessionId
        }
        let url = {
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1007&filterParam=video`,
            headers: sphd,
   
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.meta.code == 200) {

                    console.log(`【上传短视频任务】：${result.meta.message}\n`)
                    console.log(`【获得莹豆】：${result.taskIntegral}\n`)

                } else {

                    console.log(`【上传短视频任务失败】：${result.meta.message}\n`)


                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}




//评论短视频任务
function ysyplvideo(timeout = 0) {
    return new Promise((resolve) => {
        featurecode = ysybody.match(/featureCode=(\w+)/)[1]

        const sphd ={
            "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Length": "31",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookie,
        "Host": "api.ys7.com",
        "User-Agent": "VideoGo/1262766 CFNetwork/1220.1 Darwin/20.3.0",
        "appid": "ys",
        "clientno": "undefined",
        "clienttype": "1",
        "clientversion": "6.1.3.1262766",
        "featurecode": featurecode,
        "language": "undefined",
        "nettype": "WIFI",
        "sessionid": sessionId
        }
        let url = {
            url: `https://api.ys7.com/v3/integral/task/complete?eventkey=1008&filterParam=video`,
            headers: sphd,
        
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.meta.code == 200) {


                    console.log(`【评论短视频任务】：${result.meta.message}\n`)
                    console.log(`【获得莹豆】：${result.taskIntegral}\n`)

                } else {

                    console.log(`【评论短视频任务失败】：${result.meta.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//签到任务
function ysysign(timeout = 0) {
    return new Promise((resolve) => {
        featurecode = ysybody.match(/featureCode=(\w+)/)[1]

        const sphd ={
            "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Length": "31",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookie,
        "Host": "api.ys7.com",
        "User-Agent": "VideoGo/1262766 CFNetwork/1220.1 Darwin/20.3.0",
        "appid": "ys",
        "clientno": "undefined",
        "clienttype": "1",
        "clientversion": "6.1.3.1262766",
        "featurecode": featurecode,
        "language": "undefined",
        "nettype": "WIFI",
        "sessionid": sessionId
        }
        let url = {
            url: `https://api.ys7.com/v3/videoclips/user/check_in`,
            headers: sphd,
        
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.meta.code == 200) {


                    console.log(`【签到】：${result.meta.message}\n`)
                    console.log(`【获得莹豆】：${result.data.score}\n`)

                } else {

                    console.log(`【签到失败】：${result.meta.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//莹豆信息
function ysyydinfo(timeout = 0) {
    return new Promise((resolve) => {
        featurecode = ysybody.match(/featureCode=(\w+)/)[1]

        const sphd ={
            "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Length": "31",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookie,
        "Host": "api.ys7.com",
        "User-Agent": "VideoGo/1262766 CFNetwork/1220.1 Darwin/20.3.0",
        "appid": "ys",
        "clientno": "undefined",
        "clienttype": "1",
        "clientversion": "6.1.3.1262766",
        "featurecode": featurecode,
        "language": "undefined",
        "nettype": "WIFI",
        "sessionid": sessionId
        }
        let url = {
            url: `https://api.ys7.com/v3/integral/yd/queryMainPageInfo?`,
            headers: sphd,
        
        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.meta.code == 200) {


                    console.log(`【累计获得莹豆】：${result.ydAccumulateValue}\n`)
                    console.log(`【剩余莹豆】：${result.ydRemainValue}\n`)
                    console.log(`【今日获得莹豆】：${result.ydCurrValue}\n`)
                    console.log(`【累计提现】：${result.ydPayCashValue}\n`)
                    if(result.ydRemainValue>=3000){
                        console.log(`【当前莹豆够3000，等待提现】\n`)
                        await ysytx()
                    }else{
                        console.log(`【莹豆不足提现要求，继续加油赚莹豆】\n`)
                    }
                } else {

                    console.log(`【查询莹豆信息失败】：${result.meta.message}\n`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//莹豆提现
function ysytx(timeout = 0) {
    return new Promise((resolve) => {
        featurecode = ysybody.match(/featureCode=(\w+)/)[1]

        const sphd ={
            "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Length": "31",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookie,
        "Host": "api.ys7.com",
        "User-Agent": "VideoGo/1262766 CFNetwork/1220.1 Darwin/20.3.0",
        "appid": "ys",
        "clientno": "undefined",
        "clienttype": "1",
        "clientversion": "6.1.3.1262766",
        "featurecode": featurecode,
        "language": "undefined",
        "nettype": "WIFI",
        "sessionid": sessionId
        }
        let url = {
            url: `https://api.ys7.com/v3/integral/yd/pay`,
            headers: sphd,
            body:txbody,
        
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.meta.code == 200) {


                    console.log(`【提现】：${result.meta.message}\n`)
                    

                } else {

                    console.log(`【提现失败】：${result.meta.message}\n`)
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
