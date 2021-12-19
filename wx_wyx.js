/*

软件名称:微信_沃邮箱

项目注册地址:微信搜索并关注公众号:联通沃邮箱

先去微信搜索并关注公众号:联通沃邮箱
授权手机号登录或者开通沃邮箱
然后密码重置:https://user.mail.wo.cn/m/reset?mobile

必要变量:

soy_wyx_data 手机号#密码#抓包连接

变量数据包含说明 手机号#密码#抓包连接
如:13800138000#123456#https://nyan.mail.wo.cn/cn/sign/index/index?mobile=xxxxxx&userName=&openId=xxxxxx

注:密码中不能包含@和#字符

抓包说明:打开抓包或者代理,进公众号,点福利中心,签到领话费,授权完或登录完界面后
回抓包软件找连接中带有 mobile= 的连接,把整个连接复制即可

选填变量

soy_wyx_UA
#属于网页UA..
#通过抓包获取,不提交默认分配一个

多个号用 @  或 换行 隔开

cron 11 10 * * * wx_wyx.js

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/wx_wyx.js

脚本不支持v2p重写

*/


const $ = new Env('微信_沃邮箱');
const notify = $.isNode() ? require('./sendNotify') : '';
let app_soy_wyx_data=[],app_soy_wyx_UA=[],subTitle='';

!(async () => {

if ($.isNode()) {

    if(!process.env.soy_wyx_data){
        console.log(`\n【${$.name}】：未填写相应变量 soy_wyxdata`);
        return;
    };


    if (process.env.soy_wyx_data && process.env.soy_wyx_data.indexOf('@') > -1) {
        soy_wyx_data = process.env.soy_wyx_data.split('@');
    } else if (process.env.soy_wyx_data && process.env.soy_wyx_data.indexOf('\n') > -1) {
        soy_wyx_data = process.env.soy_wyx_data.split('\n');
    } else{
        soy_wyx_data = process.env.soy_wyx_data.split();
    };
    Object.keys(soy_wyx_data).forEach((item) => {
        if (soy_wyx_data[item]) {
            app_soy_wyx_data.push(soy_wyx_data[item]);
        };
    });

	if(!process.env.soy_wyx_UA){
		console.log(`\n【${$.name}】：未填写相应变量 soy_wyx_UA ,将默认分配`);
	}else{
	if (process.env.soy_wyx_UA && process.env.soy_wyx_UA.indexOf('@') > -1) {
        soy_wyx_UA = process.env.soy_wyx_UA.split('@');
    } else if (process.env.soy_wyx_UA && process.env.soy_wyx_UA.indexOf('\n') > -1) {
        soy_wyx_UA = process.env.soy_wyx_UA.split('\n');
    } else{
        soy_wyx_UA = process.env.soy_wyx_UA.split();
    };
    Object.keys(soy_wyx_UA).forEach((item) => {
        if (soy_wyx_UA[item]) {
            app_soy_wyx_UA.push(soy_wyx_UA[item]);
        };
    }); 
    
	};
    
}else{
    
    
    if(!$.getdata('soy_wyx_data')){
        console.log(`\n【${$.name}】：未填写相应变量 soy_wyx_data`);
        return;
    };
    
    if ($.getdata('soy_wyx_data') && $.getdata('soy_wyx_data').indexOf('@') > -1) {
        app_soy_wyx_data = $.getdata('soy_wyx_data').split('@');
    } else if ($.getdata('soy_wyx_data') && $.getdata('soy_wyx_data').indexOf('\n') > -1) {
        app_soy_wyx_data = $.getdata('soy_wyx_data').split('\n');
    } else {
        app_soy_wyx_data = $.getdata('soy_wyx_data').split();
    };
    
    if(!$.getdata('soy_wyx_UA')){
        console.log(`\n【${$.name}】：未填写相应变量 soy_wyx_UA ,将默认分配`);
    }else{
       if ($.getdata('soy_wyx_UA') && $.getdata('soy_wyx_UA').indexOf('@') > -1) {
        app_soy_wyx_UA = $.getdata('soy_wyx_UA').split('@');
    } else if ($.getdata('soy_wyx_UA') && $.getdata('soy_wyx_UA').indexOf('\n') > -1) {
        app_soy_wyx_UA = $.getdata('soy_wyx_UA').split('\n');
    } else{
        app_soy_wyx_UA = $.getdata('soy_wyx_UA').split();
    }; 
    };
    
    
};


    console.log(
        `\n=== 脚本执行 - 北京时间：${new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
      ).toLocaleString()} ===\n`
    );
    console.log(`===【共 ${app_soy_wyx_data.length} 个账号】===\n`);
for (i = 0; i < app_soy_wyx_data.length; i++) {
    //user_data=app_soy_wyx_data[i].split('#')
    soy_wyx_phone=app_soy_wyx_data[i].split('#')[0];
    soy_wyx_password=app_soy_wyx_data[i].split('#')[1];
    soy_wyx_url=app_soy_wyx_data[i].split('#')[2];
    soy_wyx_UA=app_soy_wyx_UA[i];
	if(!soy_wyx_UA){
	    //console.log(`\n【${$.name}】：开始默认分配 soy_wyx_UA`);
		soy_wyx_UA='Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Safari/537.36 Core/1.70.3868.400 QQBrowser/10.8.4394.400';
	};
    
    $.index = i + 1;
    
    console.log(`\n开始【第 ${$.index} 个账号任务】`);
    subTitle=''
    await soy_wyx_yx_login();
    await $.wait(Math.floor(Math.random() * (2000 - 1000 + 1000) + 1000));
    await soy_wyx_login();
    
};

if(notify){
   await notify.sendNotify($.name, subTitle);
};


})()
.catch((e) => $.logErr(e))
.finally(() => $.done());

//登录活动
function soy_wyx_login(){
    return new Promise((resolve, reject) => {
        $.get({
            url : soy_wyx_url,
            headers : {"User-Agent":soy_wyx_UA,"Host":"nyan.mail.wo.cn","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,image/wxpic,image/sharpp,image/apng,image/tpg,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"},
            followRedirect:false,
        }, async(error, response, data) => {
           try {
               if (error) {
        console.log(`\n【${$.name}---登录】: API查询请求失败`);
          console.log(JSON.stringify(error));
        } else {
            let run_headers=JSON.parse(JSON.stringify(response.headers));
            let Session=run_headers['set-cookie'];
            Session=JSON.stringify(run_headers['set-cookie']);
            Session = "YZKF_SESSION="+Session.match(/YZKF_SESSION=(\S*);/)[1];
            //console.log(Session);
            await Get_usertask(Session);
            await soy_wyx_userinfo(Session);
            
        };
           }catch(e){
               console.log(e);
           } finally {
               resolve();
           };
        });
    });

};

//用户信息
function soy_wyx_userinfo(SESSION){
     //console.log(YZKF_SESSION)
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://nyan.mail.wo.cn/cn/sign/index/userinfo.do?rand=0.9121951196050664`,
            headers : {"User-Agent":"User-Agent: Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Safari/537.36 Core/1.70.3868.400 QQBrowser/10.8.4394.400","Host":"nyan.mail.wo.cn","Cookie": SESSION,},
            //body : ``,
        }, async(error, response, data) => {
           try {
               if (error) {
                   console.log(`\n【${$.name}---用户信息】: API查询请求失败`);
                   console.log(JSON.stringify(error));
        } else {
            //console.log(data);
            let result = JSON.parse(data);
            //console.log(result.result);
            if(result.result==null){
               console.log(`\n【${$.name}---用户信息】: 获取失败`) ;
            }else{
                if(result.result.totalSign!=1){
                    await user_sign(SESSION);
                    
                }else{
                   console.log(`\n【${$.name}---用户信息】: \n---用户昵称：${result.result.wxName}\n---活动积分：${result.result.totalScore}\n---总积分：${result.result.clubScore}\n---签到天数：${result.result.keepSign}`);
                   subTitle+=`\n【${$.name}---用户信息】: \n---用户昵称：${result.result.wxName}\n---活动积分：${result.result.totalScore}\n---总积分：${result.result.clubScore}\n---签到天数：${result.result.keepSign}`;
                };
                
            };
            
            
        };
           }catch(e){
               console.log(e);
           } finally {
               resolve();
           };
        });
    });

};

//任务配置
async function Get_usertask(SESSION){
    let Task_group = [`每日首次登录手机邮箱#taskName=loginmail`,`去用户俱乐部逛一逛#taskName=club`,`暖心初冬送好礼#taskName=clubactivity`,`下载沃邮箱#taskName=download`];
    
    for(let bs=0;bs<Task_group.length;bs++){
        let task_bs=Task_group[bs].split('#');
        let title=task_bs[0];
        let body=task_bs[1];
        await doTask(SESSION,body,title);
        await $.wait(Math.floor(Math.random() * (3000 - 1000 + 1000) + 1000));
        
    };
    
    
};

//做任务
function doTask(cookies,body,title) {
  return new Promise((resolve) => {
      let request ={
          url: `https://nyan.mail.wo.cn/cn/sign/user/doTask.do?rand=0.9121951196050664`,
          headers: {"User-Agent": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Safari/537.36 Core/1.70.3868.400 QQBrowser/10.8.4394.400","Cookie": cookies},
          body : body,
          };
      
    $.post(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---做任务提示】: API查询请求失败`);
          console.log(JSON.stringify(err));
        } else {
            //console.log(data);
            let result = JSON.parse(data);
            if(result.success){
                if(result.result==1){
                    console.log(`【${$.name}---${title}】: 做任务成功`); 
                }else if(result.result==-1){
                    console.log(`【${$.name}---${title}】: 任务已做过`); 
                }else if(result.result==-2){
                    console.log(`【${$.name}---${title}】: 登录状态已失效`);
                }else{
                    console.log(`【${$.name}---${title}】: 未知错误`);
                };
            }else{
                console.log(`【${$.name}---${title}】: ${result.msg}`);
            };

          
        };
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      };
    });
  });

};

//登录沃邮箱
function soy_wyx_yx_login(){
    return new Promise((resolve, reject) => {
        $.post({
            url : `https://mail.wo.cn/coremail/s/json?func=user:login`,
            headers : {"User-Agent": "okhttp/3.0.19"},
            body : `{"uid": "${soy_wyx_phone}", "password": "${soy_wyx_password}"}`,
        }, async(error, response, data) => {
           try {
              if (error) {
        console.log(`\n【${$.name}---邮箱登录】: API查询请求失败`);
          console.log(JSON.stringify(err));
        } else { 
            let result = JSON.parse(data);
            if(result.code=='S_OK'){
                sid=result.var.sid;
                console.log(`\n【${$.name}---沃邮箱】: 登录成功`);
               run_headers=JSON.parse(JSON.stringify(response.headers));
               Coremail=run_headers['set-cookie'];
               Coremail=JSON.stringify(run_headers['set-cookie']);
               Coremail = "Coremail="+Coremail.match(/Coremail=(\S*);/)[1];
               cookie = Coremail + ";Coremail.sid=" + sid + ";";
               app_cookie=cookie+'domain=mail.wo.cn;';
               wy_cookie=cookie+'CoremailReferer=https%3A%2F%2Fmail.wo.cn%2Fcoremail%2Fhxphone%2F;';
               pc_cookie=cookie+'domain=;CoremailReferer=https%3A%2F%2Fmail.wo.cn%2Fcoremail%2Findex.jsp%3Fcus%3D1;';
              
              await Get_task('app');
              await Get_task('wy');
              await Get_task('pc');
              
                
            }else{
                console.log(`\n【${$.name}---沃邮箱】: 登录失败`);
                console.log(data);
            };
        };
           }catch(e){
               //$.logErr(e, response);
               console.log(e, response);
           } finally {
               resolve();
           };
        });
    });

};

async function Get_task(identification){
    let Task_group = ["每日登录:login","发送邮件:sendMail","查看邮件:listMail","登录百度网盘:baiduCloud","新建日程:createCal","上传文件到中转站:uploadFile"];
    let Integral="integral";
    let Growth='growth';
    if(identification=='app'){
        let headers={"User-Agent": soy_wyx_UA,"Cookie": app_cookie,"Accept": "text/x-json","Content-Type": "text/x-json","X-CM-SERVICE": "PHONE","Origin": "https://mail.wo.cn","X-Requested-With": "com.asiainfo.android","Sec-Fetch-Site": "same-origin","Sec-Fetch-Mode": "cors","Sec-Fetch-Dest": "empty"};
        let title='app端';
        for(let bs=0;bs<5;bs++){
        let task_bs=Task_group[bs].split(':');
        let key=task_bs[0];
        let value=task_bs[1];
        await addClubInfo_integral(key,value,headers,Integral,title);
        await addClubInfo_growth(key,value,headers,Integral,title);
        await $.wait(Math.floor(Math.random() * (3000 - 1000 + 1000) + 1000));
            
        };
    };
    
    if(identification=='wy'){
        let headers={"User-Agent": soy_wyx_UA,"Cookie": wy_cookie,"Accept": "text/x-json","Content-Type": "text/x-json","Origin": "https://mail.wo.cn","X-Requested-With": "com.tencent.mm","Sec-Fetch-Site": "same-origin","Sec-Fetch-Mode": "cors","Sec-Fetch-Dest":"empty",};
        let title='网页端';
        for(let bs=0;bs<6;bs++){
        let task_bs=Task_group[bs].split(':');
        let key=task_bs[0];
        let value=task_bs[1];
        await addClubInfo_integral(key,value,headers,Integral,title);
        await addClubInfo_growth(key,value,headers,Integral,title);
    };
    };
    if(identification=='pc'){
        let headers={"User-Agent": soy_wyx_UA,"Cookie": pc_cookie,"Accept": "text/x-json","Content-Type": "text/x-json","Origin": "https://mail.wo.cn","X-Requested-With": "XMLHttpRequest","Sec-Fetch-Site": "same-origin","Sec-Fetch-Mode": "cors","Sec-Fetch-Dest": "empty",
            };
        let title='电脑端';
        for(let bs=0;bs<6;bs++){
        let task_bs=Task_group[bs].split(':');
        let key=task_bs[0];
        let value=task_bs[1];
        await addClubInfo_integral(key,value,headers,Integral,title);
        await addClubInfo_growth(key,value,headers,Integral,title);
    };
    };
    
};

//加积分
function addClubInfo_integral(key,value,headers,type,title) {
    console.log(`\n【${$.name}---做任务】: ${title}`);
  return new Promise((resolve) => {
      let request ={
          url: `https://mail.wo.cn/coremail/s/?func=club:addClubInfo&sid=${sid}`,
          headers: headers,
          body : `{"uid": "${soy_wyx_phone}","userAction": "${value}","userType": "${type}",}`,};
      
    $.post(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---增加积分提示】: API查询请求失败`);
          console.log(JSON.stringify(err));
        } else {
            //$.log(data);
            let result = JSON.parse(data);
            if(result.code=="S_OK"){
                
              console.log(`【${$.name}---${key}增加积分】: 成功`);
            }else{
              
                console.log(`【${$.name}---${key}增加积分】: 失败`);
            };

          
        };
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      };
    });
  });
};

//加成长值
function addClubInfo_growth(key,value,headers,type,title) {
    //console.log(`\n【${$.name}---做任务】: ${title}`) 
  return new Promise((resolve) => {
      let request ={
          url: `https://mail.wo.cn/coremail/s/?func=club:addClubInfo&sid=${sid}`,
          headers: headers,
          body : `{"uid": "${soy_wyx_phone}","userAction": "${value}","userType": "${type}",}`,};
      
    $.post(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---增加成长值提示】: API查询请求失败`);
          console.log(JSON.stringify(err));
        } else {
            //$.log(data)
            let result = JSON.parse(data);
            if(result.code=="S_OK"){
              console.log(`【${$.name}---${key}增加成长值】: 成功`);
            }else{
                console.log(`【${$.name}---${key}增加成长值】: 失败`);
            };

          
        };
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      };
    });
  });
};

//签到
function user_sign(SESSION) {
  return new Promise((resolve) => {
      let request ={
          url: `https://nyan.mail.wo.cn/cn/sign/user/checkin.do?rand=0.9121951196050664`,
          headers: {"User-Agent": soy_wyx_UA,"Cookie": SESSION,"Referer": "https://club.mail.wo.cn/clubwebservice/club-user/user-info/mine-task"},
          body : ``,
      };
      
    $.post(request, async (err, resp, data) => {
      try {
        if (err) {
        console.log(`\n【${$.name}---增加积分提示】: API查询请求失败`);
          console.log(JSON.stringify(err));
        } else {
            //console.log(data)
            let result = JSON.parse(data);
            if(result.result==-2){
              console.log(`\n【${$.name}---签到】: 每日已签到`);  
            }else{
                console.log(`\n【${$.name}---签到】: 签到成功~`);
            };
          
        };
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
};


function qzj(string,left,right){
    return string.substring(string.indexOf(left) + left.length,string.indexOf("right")+string.indexOf(left).length);
};

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}