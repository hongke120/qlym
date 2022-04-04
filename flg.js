/*
软件名称:返利购
完成时间：2021-10-29 @YaphetS0903

10.30更新，只需要抓一个referer, 删掉抓cookie，解决"&"出错问题，感谢@Tom大佬建议和群友提供的任务包，增加浏览任务和每日首单任务
10.31更新，加入报名打卡，早起打卡任务，使用app5分钟任务，兑换金币成现金，请务必在早上7-9点之间运行脚本

返利购 POST包
青龙环境抓取链接https://api.flgflg.com/htmmall/api/gold/finishedVideoNum

环境配置(@隔开)
export flgReferer='抓取的Referer1@抓取的Referer2'
请务必在早上7-9点之间运行脚本

圈X配置如下，其他自行测试，运行一次即可

[task_local]
#返利购
0,30 8 * * * https://raw.githubusercontent.com/YaphetS0903/JStest/main/flg.js, tag=返利购, enabled=true
[rewrite_local]
#返利购
https://api.flgflg.com/htmmall/api/gold/finishedVideoNum url script-request-body https://raw.githubusercontent.com/YaphetS0903/JStest/main/flg.js
[MITM]
hostname = api.flgflg.com
*/

const $ = new Env('返利购');
let status;

status = (status = ($.getval("flgstatus") || "1")) > 1 ? `${status}` : "";
let flgRefererArr = [], flgcount = ''
let flgReferer = $.isNode() ? (process.env.flgReferer ? process.env.flgReferer : "") : ($.getdata('flgReferer') ? $.getdata('flgReferer') : "")
// //13位时间戳
// let times = new Date().getTime()
let DD = RT(2000, 3500)
let tz = ($.getval('tz') || '1');
let tx = ($.getval('tx') || '1');
let id = '', rwid = '', flgtoken = '', flgchannel = ''
$.message = ''
let flgReferers = ""




!(async () => {
    if (typeof $request !== "undefined") {
        await flgck()
    } else {
        if (!$.isNode()) {
            flgRefererArr.push($.getdata('flgReferer'))



            let flgcount = ($.getval('flgcount') || '1');
            for (let i = 2; i <= flgcount; i++) {
                flgRefererArr.push($.getdata(`flgReferer${i}`))



            }
            console.log(
                `\n\n=============================================== 脚本执行 - 北京时间(UTC+8)：${new Date(
                    new Date().getTime() +
                    new Date().getTimezoneOffset() * 60 * 1000 +
                    8 * 60 * 60 * 1000
                ).toLocaleString()} ===============================================\n`);
            for (let i = 0; i < flgRefererArr.length; i++) {
                if (flgRefererArr[i]) {

                    flgReferer = flgRefererArr[i];



                    $.index = i + 1;
                    console.log(`\n\n开始【返利购${$.index}作者@YaphetS0903】`)
                    await flgvideoinfo()
                    await $.wait(2000)
                    await flgsigninfo()
                    message()
                }
            }
        } else {

            if (process.env.flgReferer && process.env.flgReferer.indexOf('@') > -1) {
                flgRefererArr = process.env.flgReferer.split('@');
                console.log(`您选择的是用"@"隔开\n`)
            } else {
                flgReferers = [process.env.flgReferer]
            };
            Object.keys(flgReferers).forEach((item) => {
                if (flgReferers[item]) {
                    flgRefererArr.push(flgReferers[item])
                }
            })

            console.log(`共${flgRefererArr.length}个cookie`)
            for (let k = 0; k < flgRefererArr.length; k++) {
                $.message = ""


                flgReferer = flgRefererArr[k];

                $.index = k + 1;
                console.log(`\n开始【返利购${$.index}作者@YaphetS0903】`)

                await flgvideoinfo()
                await $.wait(2000)
                await flgsigninfo()
                message()
            }
        }

    }
})()

    .catch((e) => $.logErr(e))
    .finally(() => $.done())


//https://api.flgflg.com/htmmall/api/gold/finishedVideoNum 
function flgck() {
    if ($request.url.indexOf("gold") > -1 && $request.url.indexOf("finishedVideoNum") > -1) {
        const flgReferer = $request.headers.Referer
        if (flgReferer) $.setdata(flgReferer, `flgReferer${status}`)
        $.log(flgReferer)

        $.msg($.name, "", `返利购${status}获取数据成功`)

    }
}





//查询激励视频次数
function flgvideoinfo(timeout = 0) {
    return new Promise((resolve) => {
        flgchannel = flgReferer.match(/channel=(\w+)/)[1]
        flgtoken = flgReferer.match(/token=(\w.{35})/)[1]
        let times = new Date().getTime()   //放在这里是实时时间  放在上面是固定的时间  脚本开始的时间
        let url = {
            url: `https://api.flgflg.com/htmmall/api/gold/finishedVideoNum`,
            headers: {
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-cn",
                "Connection": "keep-alive",
                "Content-Length": "116",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Host": "api.flgflg.com",
                "Origin": "https://api.flgflg.com",
                "Referer": `https://api.flgflg.com/htmmall//page/user/sign_n1.html?agrtver=8.2&ts=${times}&netType=1&ct=1&channel=${flgchannel}&token=${flgtoken}&ver=2.0.4`,
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
                "X-Requested-With": "XMLHttpRequest"
            },
            body: `agrtver=8.2&netType=1&channel=${flgchannel}&ver=2.0.4&ct=1&ts=${times}&token=${flgtoken}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 0) {
                    console.log(`【查询激励视频次数】：${result.msg}【已看次数次数】：${result.data}\n`)
                    if (result.data >= 5) {
                        console.log(`【今日激励视频已看完】\n`)
                        console.log(`【开始搜索商品任务】\n`)
                        await $.wait(8000)
                        await flgsearch()
                        let bb = ['2', '3', '19']   
                        for (let i = 0; i < bb.length; i++) {
                            rwid = bb[i]
                            if (rwid == 2) {
                                
                                for (let u = 0; u < 5; u++) {
                                    console.log(`【开始浏览商品任务】\n`)
                                    await $.wait(8000)
                                    await flgtask(rwid)
                                }
                            }
                            if(rwid == 3){
                                console.log(`【开始每日首单任务】\n`)
                                await $.wait(8000)
                                await flgtask(rwid)
                            }
                            if(rwid == 19){
                                console.log(`【开始分享商品任务】\n`)
                                await $.wait(8000)
                                await flgtask(rwid)
                            }
                        }
                        console.log(`【开始使用5分钟app任务】\n`)
                        await $.wait(8000)
                        await flgfive()
                        console.log(`【开始早起打卡任务】\n`)
                        await $.wait(8000)
                        await flgdktask()

                    } else {
                        await $.wait(2000)
                        await flgvideo()
                    }


                } else {
                    console.log(`【查询激励视频次数失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}



//看激励视频
function flgvideo(timeout = 0) {
    return new Promise((resolve) => {
        let times = new Date().getTime()
        let url = {
            url: `https://api.flgflg.com/htmmall/api/gold/client/report?agrtver=8.2&channel=${flgchannel}&ct=1&key=123456&taskId=12&token=${flgtoken}&ts=${times}&ver=2.0.4`,
            headers: {
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-Hans-CN;q=1",
                "Connection": "keep-alive",
                "Host": "api.flgflg.com",
                "User-Agent": "Litaoyouxuan/2.0.4 (iPhone; iOS 14.4.1; Scale/3.00)"
            },

        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 0) {
                    console.log(`【看激励视频成功】：${result.msg}\n`)
                    await $.wait(10000)
                    await flgvideoinfo()
                } else {
                    console.log(`【看激励视频失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

pllist = ["罗技（G）PRO WIRELESS 无线游戏鼠标 吃鸡鼠标 绝地求生 gpw狗屁王一代/二代鼠标","步步升南京板鸭8090后怀旧膨化办公室小时候的零食品儿时麻辣小零食网红小包装休闲食品","小米路由器 AX6000 5G双频WIFI6 6000M速率 无线穿墙千兆家用智能电竞路由512MB","乱劈才方便米饭热水冲泡速食自热米饭食品户外快餐饭自热料理整箱1人份   川味卤肉1盒","康师傅方便面 泡面袋面劲爽拉面红烧牛肉味家庭装休闲零食 【24袋整箱】红烧8袋+香辣8袋"]
//搜索商品任务  
function flgsearch(timeout = 0) {
    return new Promise((resolve) => {
        let times = new Date().getTime()
        contentes = pllist[RT(0, pllist.length - 1)]
        let url = {
            url: `https://api.flgflg.com/htmmall/api/gs/item/byKw`,
            headers: {
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-Hans-CN;q=1",
                "Connection": "keep-alive",
                "Content-Length": "510",
                "Content-Type": "application/x-www-form-urlencoded",
                "Host": "api.flgflg.com",
                "User-Agent": "Litaoyouxuan/2.0.4 (iPhone; iOS 14.4.1; Scale/3.00)"
            },
            body: `agrtver=8.2&channel=${flgchannel}&ct=1&jdOwner=false&keyword=${pllist}&maxPrice=&minPrice=&pageNo=1&pageSize=20&sortType=1&source=3&token=${flgtoken}&ts=${times}&typeS=11&ver=2.0.4&volumeLimitVal=0&withCoupon=false`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 0) {
                    console.log(`【搜索商品任务完成】：${result.msg}\n`)


                } else {
                    console.log(`【搜索商品任务完成失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


function flgtask(rwid) {
    return new Promise((resolve) => {
        let times = new Date().getTime()
        let url = {
            url: `http://api.flgflg.com/htmmall/api/gold/client/report`,
            headers: {
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Encoding": "gzip, deflate",
                "Accept-Language": "zh-cn",
                "Connection": "close",
                "Content-Length": "144",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Host": "api.flgflg.com",
                "Origin": "http://api.flgflg.com",
                "Referer": `http://api.flgflg.com/htmmall/page/adv/share-commission.html?itemId=616612945566&source=1&goodsSign=undefined?agrtver=8.2&ts=${times}&netType=1&ct=1&channel=${flgchannel}&token=${flgtoken}`,
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
                "X-Requested-With": "XMLHttpRequest"
            },
            body: `taskId=${rwid}&key=1635435725356&agrtver=8.2&netType=1&channel=${flgchannel}&ver=2.0.4&ct=1&ts=${times}&token=${flgtoken}`,
        }
        $.post(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                if (result.code == 0) {
                    console.log(`【任务完成】：${result.msg}\n`)


                } else {
                    console.log(`【任务完成失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, 0)
    })
}

//签到任务
function flgsigninfo(timeout = 0) {
    return new Promise((resolve) => {
        let times = new Date().getTime()

        let url = {
            url: `https://api.flgflg.com/htmmall/api/act/sign/info?agrtver=8.2&netType=1&channel=${flgchannel}&ver=2.0.4&ct=1&ts=${times}&token=${flgtoken}`,
            headers: {
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-cn", "Connection": "keep-alive",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Host": "api.flgflg.com",
                "Referer": `https://api.flgflg.com/htmmall//page/user/sign_n1.html?agrtver=8.2&ts=${times}&netType=1&ct=1&channel=${flgchannel}&token=${flgtoken}&ver=2.0.4`,
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
                "X-Requested-With": "XMLHttpRequest"
            },

        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 0) {
                    if (result.data.needSign == false) {
                        console.log(`【签到已完成】：${result.msg}\n`)
                        console.log(`【剩余金币】：${result.data.asset.remainIncomeGold}\n`)
                        console.log(`【剩余现金】：${result.data.asset.remainIncomeString}\n`)
                        console.log(`【总金币收入】：${result.data.asset.totalIncomeGold}\n`)
                        console.log(`【总现金收入】：${result.data.asset.totalIncomeString}\n`)
                        console.log(`【开始判断是否能兑换现金】\n`)
                        if(result.data.asset.remainIncomeGold >=1000){
                        await $.wait(5000)
                        await flgcoin()
                        }else{
                            console.log(`【金币不足，继续努力】\n`)
                        }
                        $.message += `【签到已完成】：${result.msg}\n`
                        $.message += `【剩余金币】：${result.data.asset.remainIncomeGold}\n`
                        $.message += `【剩余现金】：${result.data.asset.remainIncomeString}\n`
                        $.message += `【总金币收入】：${result.data.asset.totalIncomeGold}\n`
                        $.message += `【总现金收入】：${result.data.asset.totalIncomeString}\n`

                    } else {
                        console.log(`【开始签到】\n`)
                        await $.wait(2000)
                        await flgsign()
                    }



                } else {
                    console.log(`【签到任务失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}




//签到
function flgsign(timeout = 0) {
    return new Promise((resolve) => {

        let times = new Date().getTime()

        let url = {
            url: `https://api.flgflg.com/htmmall/api/sign/add`,
            headers: {
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-cn",
                "Connection": "keep-alive",
                "Content-Length": "132",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Host": "api.flgflg.com",
                "Origin": "https://api.flgflg.com",
                "Referer": `https://api.flgflg.com/htmmall//page/user/sign_n1.html?agrtver=8.2&ts=${times}&netType=1&ct=1&channel=${flgchannel}&token=${flgtoken}&ver=2.0.4`,
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
                "X-Requested-With": "XMLHttpRequest"
            },
            body: `needReSign=true&agrtver=8.2&netType=1&channel=${flgchannel}&ver=2.0.4&ct=1&ts=${times}&token=${flgtoken}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 0) {
                    console.log(`【签到任务】：${result.data}\n`)


                } else {
                    console.log(`【签到任务失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//使用5分钟app
function flgfive(timeout = 0) {
    return new Promise((resolve) => {

        let times = new Date().getTime()

        let url = {
            url: `https://api.flgflg.com/htmmall/api/gold/client/report?agrtver=8.2&channel=${flgchannel}&ct=1&key=1635617326273_1635617326273&taskId=21&token=${flgtoken}&ts=${times}&ver=2.0.4`,
            headers: {"Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-Hans-CN;q=1",
            "Connection": "keep-alive",
            "Host": "api.flgflg.com",
            "User-Agent": "Litaoyouxuan/2.0.4 (iPhone; iOS 14.4.1; Scale/3.00)"},
        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 0) {
                    console.log(`【使用5分钟app成功】：${result.msg}\n`)


                } else {
                    console.log(`【使用5分钟app失败，可能已领取】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//早起打卡信息获取
function flgdktask(timeout = 0) {
    return new Promise((resolve) => {

        let times = new Date().getTime()

        let url = {
            url: `https://api.flgflg.com/htmmall/api/act/getActMorningStatus`,
            headers:{"Accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-cn","Connection": "keep-alive",
            "Content-Length": "116","Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.flgflg.com",
            "Origin": "https://api.flgflg.com",
            "Referer": `https://api.flgflg.com/htmmall//page/act/earlyChallenge/index.html?agrtver=8.2&ts=${times}&netType=1&ct=1&channel=${flgchannel}&token=${flgtoken}&ver=2.0.4`,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148","X-Requested-With": "XMLHttpRequest"
        },
            body: `agrtver=8.2&netType=1&channel=${flgchannel}&ver=2.0.4&ct=1&ts=${times}&token=${flgtoken}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 0) {
                    console.log(`【查询打卡信息】：${result.msg}\n`)
                    if(result.data.canDoActMorning == true){
                        console.log(`【已到打卡时间（早上7-9点之间执行），准备开始打卡】\n`)
                        if (nowTimes.getHours() === 7 || nowTimes.getHours() === 8 ) {
                        await $.wait(5000)
                        await flgDoActMorning()
                        }else{
                            console.log(`【打卡时间未到，请在7-9点之间运行】\n`)
                        }
                    }else{
                        console.log(`【打卡时间未到，或已打卡】\n`)
                    }
                    if(result.data.hasJoinToday == false){
                        console.log(`【查询到未报名今日打卡，开始报名打卡】\n`)
                        await $.wait(5000)
                        await flgJoinToday()
                    }else{
                        console.log(`【今日已报名打卡，请明早7-9点准时打卡哦】\n`)
                    }



                } else {
                    console.log(`【查询打卡信息失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}



//报名打卡
function flgJoinToday(timeout = 0) {
    return new Promise((resolve) => {

        let times = new Date().getTime()

        let url = {
            url: `https://api.flgflg.com/htmmall/api/act/joinActMorning?amount=100&agrtver=8.2&netType=1&channel=${flgchannel}&ver=2.0.4&ct=1&ts=${times}&token=${flgtoken}`,
            headers: {"Accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-cn",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.flgflg.com",
            "Referer": `https://api.flgflg.com/htmmall//page/act/earlyChallenge/index.html?agrtver=8.2&ts=${times}&netType=1&ct=1&channel=${flgchannel}&token=${flgtoken}&ver=2.0.4`,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
            "X-Requested-With": "XMLHttpRequest"},
        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 0) {
                    console.log(`【报名打卡成功】：${result.msg}\n`)


                } else {
                    console.log(`【报名打卡失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//打卡
function flgDoActMorning(timeout = 0) {
    return new Promise((resolve) => {

        let times = new Date().getTime()

        let url = {
            url: `https://api.flgflg.com/htmmall/api/act/doActMorning`,
            headers: {"Accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-cn",
            "Connection": "keep-alive",
            "Content-Length": "116",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.flgflg.com",
            "Origin": "https://api.flgflg.com",
            "Referer": `https://api.flgflg.com/htmmall//page/act/earlyChallenge/index.html?agrtver=8.2&ts=${times}&netType=1&ct=1&channel=${flgchannel}&token=${flgtoken}&ver=2.0.4`,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148","X-Requested-With": "XMLHttpRequest"},
            body: `agrtver=8.2&netType=1&channel=${flgchannel}&ver=2.0.4&ct=1&ts=${times}&token=${flgtoken}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 0) {
                    console.log(`【打卡成功】：${result.data}\n`)


                } else {
                    console.log(`【打卡失败】：${result.msg}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}





//兑换现金
function flgcoin(timeout = 0) {
    return new Promise((resolve) => {

        let times = new Date().getTime()

        let url = {
            url: `https://api.flgflg.com/htmmall/api/gold/exchangeGold`,
            headers: {
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-cn",
                "Connection": "keep-alive",
                "Content-Length": "132",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Host": "api.flgflg.com","Origin": "https://api.flgflg.com",
                "Referer": `https://api.flgflg.com/htmmall/page/assets/goldExchange.html?agrtver=8.2&ts=${times}&netType=1&ct=1&channel=${flgchannel}&token=${flgtoken}&ver=2.0.4`,
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148","X-Requested-With": "XMLHttpRequest"},
            body: `type=0&amount=1&agrtver=8.2&netType=1&channel=${flgchannel}&ver=2.0.4&ct=1&ts=${times}&token=${flgtoken}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 0) {
                    console.log(`【兑换现金】：${result.msg}\n`)
                    $.message += `【兑换现金】：${result.msg}\n`

                } else {
                    console.log(`【兑换现金失败】：${result.msg}\n`)

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






function Env(name, opts) {
    class Http {
        constructor(env) {
            this.env = env
        }
        send(opts, method = 'GET') {
            opts = typeof opts === 'string' ? {
                url: opts
            } : opts
            let sender = this.get
            if (method === 'POST') {
                sender = this.post
            }
            return new Promise((resolve, reject) => {
                sender.call(this, opts, (err, resp, body) => {
                    if (err) reject(err)
                    else resolve(resp)
                })
            })
        }
        get(opts) {
            return this.send.call(this.env, opts)
        }
        post(opts) {
            return this.send.call(this.env, opts, 'POST')
        }
    }
    return new (class {
        constructor(name, opts) {
            this.name = name
            this.http = new Http(this)
            this.data = null
            this.dataFile = 'box.dat'
            this.logs = []
            this.isMute = false
            this.isNeedRewrite = false
            this.logSeparator = '\n'
            this.startTime = new Date().getTime()
            Object.assign(this, opts)
            this.log('', `🔔${this.name
                }, 开始!`)
        }
        isNode() {
            return 'undefined' !== typeof module && !!module.exports
        }
        isQuanX() {
            return 'undefined' !== typeof $task
        }
        isSurge() {
            return 'undefined' !== typeof $httpClient && 'undefined' === typeof $loon
        }
        isLoon() {
            return 'undefined' !== typeof $loon
        }
        isShadowrocket() {
            return 'undefined' !== typeof $rocket
        }
        toObj(str, defaultValue = null) {
            try {
                return JSON.parse(str)
            } catch {
                return defaultValue
            }
        }
        toStr(obj, defaultValue = null) {
            try {
                return JSON.stringify(obj)
            } catch {
                return defaultValue
            }
        }
        getjson(key, defaultValue) {
            let json = defaultValue
            const val = this.getdata(key)
            if (val) {
                try {
                    json = JSON.parse(this.getdata(key))
                } catch { }
            }
            return json
        }
        setjson(val, key) {
            try {
                return this.setdata(JSON.stringify(val), key)
            } catch {
                return false
            }
        }
        getScript(url) {
            return new Promise((resolve) => {
                this.get({
                    url
                }, (err, resp, body) => resolve(body))
            })
        }
        runScript(script, runOpts) {
            return new Promise((resolve) => {
                let httpapi = this.getdata('@chavy_boxjs_userCfgs.httpapi')
                httpapi = httpapi ? httpapi.replace(/\n/g, '').trim() : httpapi
                let httpapi_timeout = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
                httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20
                httpapi_timeout = runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout
                const [key, addr] = httpapi.split('@')
                const opts = {
                    url: `http: //${addr}/v1/scripting/evaluate`,
                    body: {
                        script_text: script,
                        mock_type: 'cron',
                        timeout: httpapi_timeout
                    },
                    headers: {
                        'X-Key': key,
                        'Accept': '*/*'
                    }
                }
                this.post(opts, (err, resp, body) => resolve(body))
            }).catch((e) => this.logErr(e))
        }
        loaddata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                if (isCurDirDataFile || isRootDirDataFile) {
                    const datPath = isCurDirDataFile ? curDirDataFilePath : rootDirDataFilePath
                    try {
                        return JSON.parse(this.fs.readFileSync(datPath))
                    } catch (e) {
                        return {}
                    }
                } else return {}
            } else return {}
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                const jsondata = JSON.stringify(this.data)
                if (isCurDirDataFile) {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                } else if (isRootDirDataFile) {
                    this.fs.writeFileSync(rootDirDataFilePath, jsondata)
                } else {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                }
            }
        }
        lodash_get(source, path, defaultValue = undefined) {
            const paths = path.replace(/[(d+)]/g, '.$1').split('.')
            let result = source
            for (const p of paths) {
                result = Object(result)[p]
                if (result === undefined) {
                    return defaultValue
                }
            }
            return result
        }
        lodash_set(obj, path, value) {
            if (Object(obj) !== obj) return obj
            if (!Array.isArray(path)) path = path.toString().match(/[^.[]]+/g) || []
            path
                .slice(0, -1)
                .reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {})), obj)[
                path[path.length - 1]
            ] = value
            return obj
        }
        getdata(key) {
            let val = this.getval(key)
            // 如果以 @
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?).(.*?)$/.exec(key)
                const objval = objkey ? this.getval(objkey) : ''
                if (objval) {
                    try {
                        const objedval = JSON.parse(objval)
                        val = objedval ? this.lodash_get(objedval, paths, '') : val
                    } catch (e) {
                        val = ''
                    }
                }
            }
            return val
        }
        setdata(val, key) {
            let issuc = false
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?).(.*?)$/.exec(key)
                const objdat = this.getval(objkey)
                const objval = objkey ? (objdat === 'null' ? null : objdat || '{}') : '{}'
                try {
                    const objedval = JSON.parse(objval)
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                } catch (e) {
                    const objedval = {}
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                }
            } else {
                issuc = this.setval(val, key)
            }
            return issuc
        }
        getval(key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.read(key)
            } else if (this.isQuanX()) {
                return $prefs.valueForKey(key)
            } else if (this.isNode()) {
                this.data = this.loaddata()
                return this.data[key]
            } else {
                return (this.data && this.data[key]) || null
            }
        }
        setval(val, key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.write(val, key)
            } else if (this.isQuanX()) {
                return $prefs.setValueForKey(val, key)
            } else if (this.isNode()) {
                this.data = this.loaddata()
                this.data[key] = val
                this.writedata()
                return true
            } else {
                return (this.data && this.data[key]) || null
            }
        }
        initGotEnv(opts) {
            this.got = this.got ? this.got : require('got')
            this.cktough = this.cktough ? this.cktough : require('tough-cookie')
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()
            if (opts) {
                opts.headers = opts.headers ? opts.headers : {}
                if (undefined === opts.headers.Cookie && undefined === opts.cookieJar) {
                    opts.cookieJar = this.ckjar
                }
            }
        }
        get(opts, callback = () => { }) {
            if (opts.headers) {
                delete opts.headers['Content-Type']
                delete opts.headers['Content-Length']
            }
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    opts.headers = opts.headers || {}
                    Object.assign(opts.headers, {
                        'X-Surge-Skip-Scripting': false
                    })
                }
                $httpClient.get(opts, (err, resp, body) => {
                    if (!err && resp) {
                        resp.body = body
                        resp.statusCode = resp.status
                    }
                    callback(err, resp, body)
                })
            } else if (this.isQuanX()) {
                if (this.isNeedRewrite) {
                    opts.opts = opts.opts || {}
                    Object.assign(opts.opts, {
                        hints: false
                    })
                }
                $task.fetch(opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => callback(err)
                )
            } else if (this.isNode()) {
                this.initGotEnv(opts)
                this.got(opts)
                    .on('redirect', (resp, nextOpts) => {
                        try {
                            if (resp.headers['set-cookie']) {
                                const ck = resp.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
                                if (ck) {
                                    this.ckjar.setCookieSync(ck, null)
                                }
                                nextOpts.cookieJar = this.ckjar
                            }
                        } catch (e) {
                            this.logErr(e)
                        }
                        // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
                    })
                    .then(
                        (resp) => {
                            const {
                                statusCode: status,
                                statusCode,
                                headers,
                                body
                            } = resp
                            callback(null, {
                                status,
                                statusCode,
                                headers,
                                body
                            }, body)
                        },
                        (err) => {
                            const {
                                message: error,
                                response: resp
                            } = err
                            callback(error, resp, resp && resp.body)
                        }
                    )
            }
        }
        post(opts, callback = () => { }) {
            const method = opts.method ? opts.method.toLocaleLowerCase() : 'post'
            // 如果指定了请求体, 但没指定`Content-Type`, 则自动生成
            if (opts.body && opts.headers && !opts.headers['Content-Type']) {
                opts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
            }
            if (opts.headers) delete opts.headers['Content-Length']
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    opts.headers = opts.headers || {}
                    Object.assign(opts.headers, {
                        'X-Surge-Skip-Scripting': false
                    })
                }
                $httpClient[method](opts, (err, resp, body) => {
                    if (!err && resp) {
                        resp.body = body
                        resp.statusCode = resp.status
                    }
                    callback(err, resp, body)
                })
            } else if (this.isQuanX()) {
                opts.method = method
                if (this.isNeedRewrite) {
                    opts.opts = opts.opts || {}
                    Object.assign(opts.opts, {
                        hints: false
                    })
                }
                $task.fetch(opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => callback(err)
                )
            } else if (this.isNode()) {
                this.initGotEnv(opts)
                const {
                    url,
                    ..._opts
                } = opts
                this.got[method](url, _opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => {
                        const {
                            message: error,
                            response: resp
                        } = err
                        callback(error, resp, resp && resp.body)
                    }
                )
            }
        }
        /**
         *
         * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
         *    :$.time('yyyyMMddHHmmssS')
         *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
         *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
         * @param {string} fmt 格式化参数
         * @param {number} 可选: 根据指定时间戳返回格式化日期
         *
         */
        time(fmt, ts = null) {
            const date = ts ? new Date(ts) : new Date()
            let o = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'H+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds(),
                'q+': Math.floor((date.getMonth() + 3) / 3),
                'S': date.getMilliseconds()
            }
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
            for (let k in o)
                if (new RegExp('(' + k + ')').test(fmt))
                    fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
            return fmt
        }
        /**
         * 系统通知
         *
         * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
         *
         * 示例:
         * $.msg(title, subt, desc, 'twitter://')
         * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         *
         * @param {*} title 标题
         * @param {*} subt 副标题
         * @param {*} desc 通知详情
         * @param {*} opts 通知参数
         *
         */
        msg(title = name, subt = '', desc = '', opts) {
            const toEnvOpts = (rawopts) => {
                if (!rawopts) return rawopts
                if (typeof rawopts === 'string') {
                    if (this.isLoon()) return rawopts
                    else if (this.isQuanX()) return {
                        'open-url': rawopts
                    }
                    else if (this.isSurge()) return {
                        url: rawopts
                    }
                    else return undefined
                } else if (typeof rawopts === 'object') {
                    if (this.isLoon()) {
                        let openUrl = rawopts.openUrl || rawopts.url || rawopts['open-url']
                        let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
                        return {
                            openUrl,
                            mediaUrl
                        }
                    } else if (this.isQuanX()) {
                        let openUrl = rawopts['open-url'] || rawopts.url || rawopts.openUrl
                        let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
                        return {
                            'open-url': openUrl,
                            'media-url': mediaUrl
                        }
                    } else if (this.isSurge()) {
                        let openUrl = rawopts.url || rawopts.openUrl || rawopts['open-url']
                        return {
                            url: openUrl
                        }
                    }
                } else {
                    return undefined
                }
            }
            if (!this.isMute) {
                if (this.isSurge() || this.isLoon()) {
                    $notification.post(title, subt, desc, toEnvOpts(opts))
                } else if (this.isQuanX()) {
                    $notify(title, subt, desc, toEnvOpts(opts))
                }
            }
            if (!this.isMuteLog) {
                let logs = ['', '==============📣系统通知📣==============']
                logs.push(title)
                subt ? logs.push(subt) : ''
                desc ? logs.push(desc) : ''
                console.log(logs.join('\n'))
                this.logs = this.logs.concat(logs)
            }
        }
        log(...logs) {
            if (logs.length > 0) {
                this.logs = [...this.logs, ...logs]
            }
            console.log(logs.join(this.logSeparator))
        }
        logErr(err, msg) {
            const isPrintSack = !this.isSurge() && !this.isQuanX() && !this.isLoon()
            if (!isPrintSack) {
                this.log('', `❗️${this.name
                    }, 错误!`, err)
            } else {
                this.log('', `❗️${this.name
                    }, 错误!`, err.stack)
            }
        }
        wait(time) {
            return new Promise((resolve) => setTimeout(resolve, time))
        }
        done(val = {}) {
            const endTime = new Date().getTime()
            const costTime = (endTime - this.startTime) / 1000
            this.log('', `🔔${this.name
                }, 结束!🕛${costTime}秒`)
            this.log()
            if (this.isSurge() || this.isQuanX() || this.isLoon()) {
                $done(val)
            }
        }
    })(name, opts)
}


