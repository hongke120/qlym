/*
安卓：中青看点极速版 （快应用，非IOS极速版，跟普通版青豆数据独立，普通版黑了也可以用）
邀请链接：https://user.youth.cn/h5/fastAppWeb/invite/invite_ground.html?share_uid=1037637302&channel=c8000&nickname=%E5%B0%8F%E8%84%91%E6%96%A7%E8%9B%8B%E8%9B%8B&avatar=http%3A%2F%2Fres.youth.cn%2Favatar_202201_04_04q_61d41c92e21131037637302n.jpg&v=1641312406

支持快应用的安卓手机才能玩

本脚本负责看看赚，目前有bug，只需要捉一个看看赚就可以刷满收益
所以定时暂时一天一次就可
cron 35 10 * * * zqkdFast_kkz.js

青龙：
捉包找adlickstart的url，把body填到zqkdFastKkzBody里，多账号用@隔开

V2P 重写：
[rewrite_local]
https://user.youth.cn/v1/Nameless/adlickstart  https://raw.githubusercontent.com/leafxcy/JavaScript/main/zqkdFast/zqkdFast_kkz.js
[MITM]
user.youth.cn
*/

const jsname = '中青极速版看看赚'
const $ = Env(jsname)
const logDebug = 0

const updateStr = '2022.01.04 22:00 中青安卓极速版 看看赚 初版'

let rndtime = "" //毫秒
let httpResult //global buffer

let userBody = ($.isNode() ? process.env.zqkdFastKkzBody : $.getdata('zqkdFastKkzBody')) || '';
let userBodyArr = []

let userIdx = 0
let userCount = 0
let stopFlag = 0

///////////////////////////////////////////////////////////////////

!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite()
    }else {
        console.log(updateStr)
        
        if(!(await checkEnv())) return
        
        for(userIdx=0; userIdx < userCount; userIdx++) {
            console.log('======================')
            await adlickstart(userIdx)
            await $.wait(500)
            for(let i=0; i<6; i++) {
                await bannerstatus(userIdx)
                await $.wait(500)
            }
            stopFlag = 0
            while(stopFlag==0) {
                await adlickend(userIdx)
                await $.wait(2000)
            }
        }
    }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

///////////////////////////////////////////////////////////////////
async function checkEnv() {
    if(userBody) {
        userBodyArr = userBody.split('@')
        userCount = userBodyArr.length
    } else {
        console.log('未找到zqkdFastKkzBody')
        return false
    }
    
    console.log(`共找到${userCount}个看看赚账户`)
    return true
}

async function GetRewrite() {
    if($request.url.indexOf('Nameless') > -1 && $request.url.indexOf('adlickstart') > -1) {
        let body = $request.body
        let uid = body.match(/uid=(\w+)/)[1]
        let uidStr = 'uid='+uid
        
        if(userBody) {
            if(userBody.indexOf(uidStr) == -1) {
                userBody = userBody + '@' + body
                $.setdata(userBody, 'zqkdFastKkzBody');
                ckList = userBody.split('@')
                $.msg(jsname+` 获取第${ckList.length}个zqkdFastKkzBody成功: ${body}`)
            } else {
                userBodyArr = userBody.split('@')
                for(let i=0; i<userBodyArr.length; i++) {
                    if(userBodyArr[i].indexOf(uidStr) > -1) {
                        userBodyArr[i] = body
                        break;
                    }
                }
                userBody = userBodyArr.join('@')
                $.setdata(userBody, 'zqkdFastKkzBody');
                $.msg(jsname+` 找到重复的用户body: ${body}，将替换旧body`)
            }
        } else {
            $.setdata(body, 'zqkdFastKkzBody');
            $.msg(jsname+` 获取第1个zqkdFastKkzBody成功: ${body}`)
        }
    }
}
///////////////////////////////////////////////////////////////////
async function adlickstart(idx) {
    let caller = printCaller()
    let body = userBodyArr[userIdx]
    let uid = body.match(/uid=(\w+)/)[1]
    let url = 'https://user.youth.cn/v1/Nameless/adlickstart.json'
    let urlObject = populatePostUrl(url,body)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.error_code == 0) {
        console.log(`用户${idx+1}[${uid}]开始看看赚任务[${result.items.banner_id}]`)
    } else {
        console.log(`用户${idx+1}[${uid}]开始看看赚任务失败：${result.message}`)
    }
}

async function bannerstatus(idx) {
    let caller = printCaller()
    let body = userBodyArr[userIdx]
    let uid = body.match(/uid=(\w+)/)[1]
    let url = 'https://user.youth.cn/v1/Nameless/bannerstatus.json'
    let urlObject = populatePostUrl(url,body)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.error_code == 0) {
        console.log(`用户${idx+1}[${uid}]阅读看看赚文章中[${result.items.banner_id}]`)
    } else {
        console.log(`用户${idx+1}[${uid}]阅读看看赚文章失败：${result.message}`)
    }
}

async function adlickend(idx) {
    let caller = printCaller()
    let body = userBodyArr[userIdx]
    let uid = body.match(/uid=(\w+)/)[1]
    let url = 'https://user.youth.cn/v1/Nameless/adlickend.json'
    let urlObject = populatePostUrl(url,body)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.error_code == 0) {
        console.log(`用户${idx+1}[${uid}]获得${result.items.score}青豆`)
        if(result.items.score==0) {
            stopFlag = 1
        }
    } else {
        console.log(`用户${idx+1}[${uid}]完成看看赚任务失败：${result.message}`)
        stopFlag = 1
    }
}

////////////////////////////////////////////////////////////////////
function populatePostUrl(url,reqBody){
    let urlObject = {
        url: url,
        headers: {
            'User-Agent' : 'Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 hap/1.0.8.1/oppo com.nearme.instant.platform/4.2.1 com.youth.kandianquickapp/2.5.5 ({"packageName":"com.oppo.launcher","type":"shortcut","extra":{"original":{"packageName":"com.oppo.market","type":"sdk","extra":{}},"scene":"api"}})',
            'Accept-Language' : 'zh-CN,zh;q=0.9,en;q=0.8',
            'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
            'Host' : 'user.youth.cn',
            'Connection' : 'Keep-Alive',
            'Accept-Encoding' : 'gzip',
        },
        body: reqBody
    }
    return urlObject;
}

function populateGetUrl(url){
    let urlObject = {
        url: url,
        headers: {
            'User-Agent' : 'Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 hap/1.0.8.1/oppo com.nearme.instant.platform/4.2.1 com.youth.kandianquickapp/2.5.5 ({"packageName":"com.oppo.launcher","type":"shortcut","extra":{"original":{"packageName":"com.oppo.market","type":"sdk","extra":{}},"scene":"api"}})',
            'Accept-Language' : 'zh-CN,zh;q=0.9,en;q=0.8',
            'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
            'Host' : 'user.youth.cn',
            'Connection' : 'Keep-Alive',
            'Accept-Encoding' : 'gzip',
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

function randomString(len=12) {
    let chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let maxLen = chars.length;
    let str = '';
    for (i = 0; i < len; i++) {
        str += chars.charAt(Math.floor(Math.random()*maxLen));
    }
    return str;
}

function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}


