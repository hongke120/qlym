/*
晶彩自动提现 jc_withdraw.js，
调用jc_cookie,jc_withdraw,jc_cash

定时确保在每日首次火爆转发之后（jc_share.js），一天一次
cron 34 10 * * *
***************************************************************************
v2p食用说明：
1.添加重写如下：
https://ant.xunsl.com/v5/wechat/withdraw2.json 重写目标 https://raw.githubusercontent.com/shaolin-kongfu/js_scripts/main/jc_withdraw.js
2.打开app进入提现页面，选择对应金额，点击立即提现（不管当日是否已经提现，都能抓），到变量中查看到有jc_withdraw即可
3.注意多账号用户抓包jc_withdraw时需要与jc_cookie账号顺序一致
4.jc_cash不填默认0.3元，填的话有0.3，30两个选项（boxjs订阅中可直接修改，没有订阅的话直接新建变量即可）
5.jc_withdraw务必与jc_cash金额一致，即修改jc_withdraw时也要修改jc_cash
****************************************************************************
青龙食用说明：
1.自己抓包数据
2.export jc_withdraw="p=xxx"(多账号用@隔开)
3.export jc_cash="0.3"或者export jc_cash="30"，不填默认0.3
4.多账号用户抓包jc_withdraw时需要与jc_cookie账号顺序一致
5.jc_withdraw务必与jc_cash金额一致，即修改jc_withdraw时也要修改jc_cash
*/

const $ = new Env("晶彩看点提现");
const notify = $.isNode() ? require('./sendNotify') : '';
message = ""
let jc_withdraw= $.isNode() ? (process.env.jc_withdraw ? process.env.jc_withdraw : "") : ($.getdata('jc_withdraw') ? $.getdata('jc_withdraw') : "")
let jc_withdrawArr = []
let jc_withdraws = ""
let jc_cash = $.getdata('jc_cash') || 0.3;
let jc_cookie= $.isNode() ? (process.env.jc_cookie ? process.env.jc_cookie : "") : ($.getdata('jc_cookie') ? $.getdata('jc_cookie') : "")
let jc_cookieArr = []
let jc_cookies = ""
let nowmoney;



var time1 = Date.parse( new Date() ).toString();
    time1 = time1.substr(0,10);
if (!jc_withdraw) {
     $.msg($.name, '【提示】请先完成一次提现，明天再跑一次脚本', '不知道说啥好', {
         "open-url": "给您劈个叉吧"
     });

     $.done()
 }
 else if (jc_withdraw.indexOf("@") == -1 && jc_withdraw.indexOf("@") == -1) {
            jc_withdrawArr.push(jc_withdraw)
 }
 else if (jc_withdraw.indexOf("@") > -1) {
            jc_withdraws = jc_withdraw.split("@")
 }
 else if (process.env.jc_withdraw && process.env.jc_withdraw.indexOf('@') > -1) {
            jc_withdrawArr = process.env.jc_withdraw.split('@');
            console.log(`您选择的是用"@"隔开\n`)
 }
 else {
            jc_withdraws = [process.env.jc_withdraw]
 };
    Object.keys(jc_withdraws).forEach((item) => {
        if (jc_withdraws[item]) {
            jc_withdrawArr.push(jc_withdraws[item])
        }
    })


if (!jc_cookie) {
     $.msg($.name, '【提示】进入点击右下角"赚钱图标"，再跑一次脚本', '不知道说啥好', {
         "open-url": "给您劈个叉吧"
     });
     $.done()
 }
 else if (jc_cookie.indexOf("@") == -1 && jc_cookie.indexOf("@") == -1) {
            jc_cookieArr.push(jc_cookie)
 }
 else if (jc_cookie.indexOf("@") > -1) {
            jc_cookies = jc_cookie.split("@")
 }
 else if (process.env.jc_cookie && process.env.jc_cookie.indexOf('@') > -1) {
            jc_cookieArr = process.env.jc_cookie.split('@');
            console.log(`您选择的是用"@"隔开\n`)
 }
 else {
            jc_cookies = [process.env.jc_cookie]
 };
    Object.keys(jc_cookies).forEach((item) => {
        if (jc_cookies[item]) {
            jc_cookieArr.push(jc_cookies[item])
        }
    })

!(async () => {
     if (typeof $request !== "undefined") {
    getbody()
     $.done()
 }else {
         console.log(`共${jc_cookieArr.length}个cookie`)
         for (let k = 0; k < jc_cookieArr.length; k++) {
             $.message = ""
             bodyVal = jc_cookieArr[k].split('&uid=')[0];
             cookie = bodyVal.replace(/zqkey=/, "cookie=")
             cookie_id = cookie.replace(/zqkey_id=/, "cookie_id=")
             jc_cookie1 = cookie_id + '&' + bodyVal
             //待处理cookie
             console.log(`--------第 ${k + 1} 个账号收益查询中--------\n`)
             jc_withdraw1 = jc_withdrawArr[k]
             await today_score(jc_cookie1)


             if ($.message.length != 0) {
                 message += "账号" + (k + 1) + "：  " + $.message + " \n"
             }
             await $.wait(4000);
             console.log("\n\n")
         }


         if (message.length != 0) {
             await notify ? notify.sendNotify("晶彩看点提现", `${message}\n\n shaolin-kongfu`) :
                 $.msg($.name, "晶彩看点提现", `${message}\n\n shaolin-kongfu`);
         } else if ($.isNode()) {
             await notify.sendNotify("晶彩看点提现", `${message}\n\nshaolin-kongfu`);
         }
     }
     })()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())



function withdraw(jc_withdraw1,timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url : 'https://ant.xunsl.com/v5/wechat/withdraw2.json',
            headers : {
            'request_time': time1,
            'device-platform': 'android' ,
            'app-version': '8.1.2',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': jc_withdraw1.length.toString(),
            'Host': 'ant.xunsl.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.12.2'
            },
            body : jc_withdraw1,}
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)
            if (result.error_code == 0) {
               console.log(result)
                console.log(`【自动提现】提现${jc_cash}元成功\n`)
                $.message = `【自动提现】提现${jc_cash}元成功\n`
                //$.msg($.name,$.sub,$.desc)
            } else {
                console.log(result)
            }
            } catch (e) {
            } finally {
                resolve()
            }
            },timeout)
    })
}


function getbody() {
    if ($request.url.match(/\/ant.xunsl.com\/v5\/wechat\/withdraw2.json/)) {
          bodyVal=$request.body
            console.log(bodyVal)
        if (jc_withdraw) {
            if (jc_withdraw.indexOf(bodyVal) > -1) {
                $.log("此提现请求已存在，本次跳过")
            } else if (jc_withdraw.indexOf(bodyVal) == -1) {
                jc_withdraws = jc_withdraw + "@" + bodyVal;
                $.setdata(jc_withdraws,'jc_withdraw');
                $.log(`${$.name}获取提现: 成功, jc_withdraws: ${bodyVal}`);
                bodys = jc_withdraws.split("@")
                 $.msg($.name, "获取第" + bodys.length + "个提现请求: 成功🎉", ``)
            }
        } else {
            $.setdata($request.body,'jc_withdraw');
            $.log(`${$.name}获取提现: 成功, jc_withdraws: ${bodyVal}`);
            $.msg($.name, `获取第一个提现请求: 成功🎉`, ``)
        }
    }
}


function today_score(jc_cookie1,timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url : 'https://ant.xunsl.com/wap/user/balance?'+ jc_cookie1,
            headers : {
    'Host': 'ant.xunsl.com'
},
            }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)
                if(result.status == 0){

                    console.log('\n当前金币总数:'+result.user.score)
                    console.log('\n折合人民币总数:'+result.user.money)
                    nowmoney = result.user.money
                    if(nowmoney >= jc_cash){
                        await $.wait(3000);
                        await withdraw(jc_withdraw1)
                    }
                    $.message = `当前金币总数:${result.user.score} \n 折合人民币总数:${result.user.money}元`
                    //$.msg($.name, "", `当前金币总数:${result.user.score} \n 折合人民币总数:${result.user.money}元`);
                }else{
                     console.log(result)
                }
            } catch (e) {
            } finally {
                resolve()
            }
            },timeout)
    })
}

function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}


