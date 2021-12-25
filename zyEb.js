/*

安卓软件名称:中油E宝

项目注册地址:http://hc.independentfilm.cn/?pid=87680

分红模式玩法,就是靠签到后得积分累计进行分红,,可以去收购或者多号积分转一个号薅

-------------------

必要变量:

变量名 soy_zyEb_data
变量值 xxx&xxx&xxx
示例:13800138000&123456&6cdxxx9bf

注释:注册的手机号&登录密码&抓包时请求头的token(选填)
注:登录密码不能包含&、@、#字符,默认优先使用token,没有或失败就会登录

多个号用 # 或 @ 或 换行 隔开

-------------------

cron 25 9,12 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_zyEb.js

*/


const $ = new Env('中油E宝');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodL='jsjiami.com.v6',_0xodL_=['_0xodL'],_0x589c=[_0xodL,'\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x7a\x79\x45\x62\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x7a\x79\x45\x62\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x6c\x65\x6e\x67\x74\x68','\x67\x65\x74\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u586b\u5199\u53d8\u91cf\u683c\u5f0f\u4e0d\u89c4\u8303','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x68\x63\x2e\x69\x6e\x64\x65\x70\x65\x6e\x64\x65\x6e\x74\x66\x69\x6c\x6d\x2e\x63\x6e\x3a\x35\x32\x35\x39\x2f\x61\x70\x70\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x75\x73\x65\x72\x73\x2f\x6c\x6f\x67\x69\x6e\x3f\x6d\x6f\x62\x69\x6c\x65\x3d','\x26\x70\x61\x73\x73\x77\x6f\x72\x64\x3d','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u767b\u5f55\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x20\u767b\u5f55\u3011\x3a\x20','\x6d\x73\x67','\x64\x61\x74\x61','\x74\x6f\x6b\x65\x6e','\x61\x63\x74\x69\x76\x69\x74\x79\x2f\x69\x73\x73\x69\x67\x6e\x69\x6e','\x67\x65\x74','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x6e\x6f\x6c\x6f\x67\x69\x6e','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20\u5df2\u7b7e\u5230\u8fc7','\x61\x63\x74\x69\x76\x69\x74\x79\x2f\x73\x69\x67\x6e\x69\x6e','\x20\u7b7e\u5230\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7b7e\u5230\u3011\x3a\x20\u83b7\u5f97\x20','\x73\x63\x6f\x72\x65','\x20\u79ef\u5206','\x20\u7b7e\u5230\u3011\x3a\x20\u5df2\u7b7e\u5230\u8fc7','\x75\x73\x65\x72\x73\x2f\x67\x65\x74\x55\x73\x65\x72\x69\x6e\x66\x6f','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u7528\u6237\u624b\u673a\u53f7\uff1a','\x75\x73\x65\x72\x6e\x61\x6d\x65','\x0a\x2d\x2d\x2d\u5f53\u524d\u79ef\u5206\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u5206\u7ea2\uff1a','\x73\x74\x6f\x63\x6b','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\u5df2\u7b7e\u5230\u8fc7','\x44\x61\x72\x74\x2f\x32\x2e\x31\x34\x20\x28\x64\x61\x72\x74\x3a\x69\x6f\x29','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x31\x2e\x32\x2e\x39','\x67\x7a\x69\x70','\x68\x63\x2e\x69\x6e\x64\x65\x70\x65\x6e\x64\x65\x6e\x74\x66\x69\x6c\x6d\x2e\x63\x6e\x3a\x35\x32\x35\x39','\x74\x6a\x77\x73\x6a\x54\x4b\x70\x69\x48\x51\x62\x4b\x61\x6d\x69\x2e\x55\x79\x63\x68\x6f\x6d\x2e\x43\x76\x36\x3d\x3d'];function _0x1007(_0x44e1d2,_0x12bf9f){_0x44e1d2=~~'0x'['concat'](_0x44e1d2['slice'](0x0));var _0x53ad69=_0x589c[_0x44e1d2];return _0x53ad69;};(function(_0x210316,_0x1f49e5){var _0x5ad1b6=0x0;for(_0x1f49e5=_0x210316['shift'](_0x5ad1b6>>0x2);_0x1f49e5&&_0x1f49e5!==(_0x210316['pop'](_0x5ad1b6>>0x3)+'')['replace'](/[twTKpHQbKUyhC=]/g,'');_0x5ad1b6++){_0x5ad1b6=_0x5ad1b6^0xc6491;}}(_0x589c,_0x1007));const fs=$[_0x1007('0')]()?require('\x66\x73'):'';let app_soy_zyEb_data=[],soy_zyEb_UA='',soy_token='',soy_Number=0x0,zyEb_data_status=0x0,config_zyEb_data_status=0x0,soy_zyEb_json='';!(async()=>{if($[_0x1007('0')]()){if(!process[_0x1007('1')][_0x1007('2')]){console[_0x1007('3')](_0x1007('4'));return;}if(process[_0x1007('1')][_0x1007('2')]&&process[_0x1007('1')][_0x1007('2')][_0x1007('5')]('\x0a')>-0x1){app_soy_zyEb_data=process[_0x1007('1')][_0x1007('2')][_0x1007('6')]('\x0a');}else if(process[_0x1007('1')][_0x1007('2')]&&process[_0x1007('1')][_0x1007('2')][_0x1007('5')]('\x23')>-0x1){app_soy_zyEb_data=process[_0x1007('1')][_0x1007('2')][_0x1007('6')]('\x23');}else if(process[_0x1007('1')][_0x1007('2')]&&process[_0x1007('1')][_0x1007('2')][_0x1007('5')]('\x40')>-0x1){app_soy_zyEb_data=process[_0x1007('1')][_0x1007('2')][_0x1007('6')]('\x40');}else{app_soy_zyEb_data=process[_0x1007('1')][_0x1007('2')][_0x1007('6')]();};soy_Number=app_soy_zyEb_data[_0x1007('7')];}else{if(!$[_0x1007('8')](_0x1007('2'))){console[_0x1007('3')](_0x1007('4'));return;}if($[_0x1007('8')](_0x1007('2'))&&$[_0x1007('8')](_0x1007('2'))[_0x1007('5')]('\x23')>-0x1){app_soy_zyEb_data=$[_0x1007('8')](_0x1007('2'))[_0x1007('6')]('\x40');}else if($[_0x1007('8')](_0x1007('2'))&&$[_0x1007('8')](_0x1007('2'))[_0x1007('5')]('\x0a')>-0x1){app_soy_zyEb_data=$[_0x1007('8')](_0x1007('2'))[_0x1007('6')]('\x0a');}else if($[_0x1007('8')](_0x1007('2'))&&$[_0x1007('8')](_0x1007('2'))[_0x1007('5')]('\x40')>-0x1){app_soy_zyEb_data=$[_0x1007('8')](_0x1007('2'))[_0x1007('6')]('\x40');}else if($[_0x1007('8')](_0x1007('2'))&&$[_0x1007('8')](_0x1007('2'))[_0x1007('5')]('\x23')>-0x1){app_soy_zyEb_data=$[_0x1007('8')](_0x1007('2'))[_0x1007('6')]('\x23');}else{app_soy_zyEb_data=$[_0x1007('8')](_0x1007('2'))[_0x1007('6')]();};soy_Number=app_soy_zyEb_data[_0x1007('7')];}console[_0x1007('3')](_0x1007('9')+new Date(new Date()[_0x1007('a')]()+new Date()[_0x1007('b')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x1007('c')]()+_0x1007('d'));console[_0x1007('3')](_0x1007('e')+soy_Number+_0x1007('f'));subTitle='';for(i=0x0;i<soy_Number;i++){soy_zyEb_data=app_soy_zyEb_data[i][_0x1007('6')]('\x26');soy_zyEb_mobile=soy_zyEb_data[0x0];soy_zyEb_password=soy_zyEb_data[0x1];soy_zyEb_token=soy_zyEb_data[0x2];if(!soy_zyEb_mobile||!soy_zyEb_password){console[_0x1007('3')](_0x1007('10'));return;}$[_0x1007('11')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x1007('12')]($[_0x1007('13')],subTitle);}}})()[_0x1007('14')](_0x18405d=>$[_0x1007('15')](_0x18405d))[_0x1007('16')](()=>$[_0x1007('17')]());async function implement(){host=_0x1007('18');console[_0x1007('3')](_0x1007('19')+$[_0x1007('11')]+_0x1007('1a'));if(!soy_zyEb_token){await soy_login();}else{await soy_issignin();await soy_Userinfo();}}function soy_login(){let _0x4a6240=Post_request(_0x1007('1b')+soy_zyEb_mobile+_0x1007('1c')+soy_zyEb_password,'');return new Promise((_0x4ba76d,_0xb05d4e)=>{$[_0x1007('1d')](_0x4a6240,async(_0x56c98e,_0x2d6a57,_0xe97566)=>{try{if(_0x56c98e){console[_0x1007('3')](_0x1007('1e')+$[_0x1007('11')]+_0x1007('1f'));subTitle+=_0x1007('1e')+$[_0x1007('11')]+_0x1007('1f');}else{let _0x41df38=JSON[_0x1007('20')](_0xe97566);if(_0x41df38[_0x1007('21')]==0xc8){console[_0x1007('3')](_0x1007('1e')+$[_0x1007('11')]+_0x1007('22')+_0x41df38[_0x1007('23')]);soy_zyEb_token=_0x41df38[_0x1007('24')][_0x1007('25')];await soy_issignin();await soy_Userinfo();}else{console[_0x1007('3')](_0x1007('1e')+$[_0x1007('11')]+_0x1007('22')+_0x41df38[_0x1007('23')]);}}}catch(_0x2a4661){console[_0x1007('3')](_0x2a4661,_0x2d6a57);}finally{_0x4ba76d();}});});}function soy_issignin(){let _0x4850b1=Get_request(_0x1007('26'));return new Promise((_0x566e2c,_0x4ae05a)=>{$[_0x1007('27')](_0x4850b1,async(_0x32d4bb,_0xdf64,_0x337919)=>{try{if(_0x32d4bb){console[_0x1007('3')](_0x1007('1e')+$[_0x1007('11')]+_0x1007('28'));subTitle+=_0x1007('1e')+$[_0x1007('11')]+_0x1007('28');}else{let _0x560f93=JSON[_0x1007('20')](_0x337919);if(_0x560f93[_0x1007('21')]==0xc8){await soy_signin();}else{if(_0x560f93[_0x1007('24')]==_0x1007('29')){await soy_login();}else{console[_0x1007('3')](_0x1007('1e')+$[_0x1007('11')]+_0x1007('2a'));}}}}catch(_0xafde3f){console[_0x1007('3')](_0xafde3f,_0xdf64);}finally{_0x566e2c();}});});}function soy_signin(){let _0x453662=Get_request(_0x1007('2b'));return new Promise((_0x4c83ab,_0x2b2cce)=>{$[_0x1007('27')](_0x453662,async(_0x269450,_0x580822,_0x845fb8)=>{try{if(_0x269450){console[_0x1007('3')](_0x1007('1e')+$[_0x1007('11')]+_0x1007('2c'));subTitle+=_0x1007('1e')+$[_0x1007('11')]+_0x1007('2c');}else{let _0x58e0a8=JSON[_0x1007('20')](_0x845fb8);if(_0x58e0a8[_0x1007('21')]==0xc8){console[_0x1007('3')](_0x1007('1e')+$[_0x1007('11')]+_0x1007('2d')+_0x58e0a8[_0x1007('24')][_0x1007('2e')]+_0x1007('2f'));}else{console[_0x1007('3')](_0x1007('1e')+$[_0x1007('11')]+_0x1007('30'));}}}catch(_0x566a5f){console[_0x1007('3')](_0x566a5f,_0x580822);}finally{_0x4c83ab();}});});}function soy_Userinfo(){let _0x25b340=Get_request(_0x1007('31'));return new Promise((_0x1b6b98,_0x357a6d)=>{$[_0x1007('27')](_0x25b340,async(_0x131544,_0x1ff8b2,_0x3bc454)=>{try{if(_0x131544){console[_0x1007('3')](_0x1007('1e')+$[_0x1007('11')]+_0x1007('32'));subTitle+=_0x1007('1e')+$[_0x1007('11')]+_0x1007('32');}else{let _0x3df1dd=JSON[_0x1007('20')](_0x3bc454);if(_0x3df1dd[_0x1007('21')]==0xc8){console[_0x1007('3')](_0x1007('1e')+$[_0x1007('11')]+_0x1007('33')+_0x3df1dd[_0x1007('24')][_0x1007('34')]+_0x1007('35')+_0x3df1dd[_0x1007('24')][_0x1007('2e')]+_0x1007('36')+_0x3df1dd[_0x1007('24')][_0x1007('37')]);subTitle+=_0x1007('1e')+$[_0x1007('11')]+_0x1007('33')+_0x3df1dd[_0x1007('24')][_0x1007('34')]+_0x1007('35')+_0x3df1dd[_0x1007('24')][_0x1007('2e')]+_0x1007('36')+_0x3df1dd[_0x1007('24')][_0x1007('37')];}else{console[_0x1007('3')](_0x1007('1e')+$[_0x1007('11')]+_0x1007('38'));}}}catch(_0x19946e){console[_0x1007('3')](_0x19946e,_0x1ff8b2);}finally{_0x1b6b98();}});});}function Post_request(_0x1b8a3e,_0x54053a){return{'\x75\x72\x6c':''+host+_0x1b8a3e,'\x68\x65\x61\x64\x65\x72\x73':{'user-agent':_0x1007('39'),'content-type':_0x1007('3a'),'version':_0x1007('3b'),'accept-encoding':_0x1007('3c'),'content-length':0x0,'host':_0x1007('3d'),'token':soy_zyEb_token},'\x62\x6f\x64\x79':_0x54053a};};function Get_request(_0x1fbc0f){return{'\x75\x72\x6c':''+host+_0x1fbc0f,'\x68\x65\x61\x64\x65\x72\x73':{'user-agent':_0x1007('39'),'content-type':_0x1007('3a'),'version':_0x1007('3b'),'accept-encoding':_0x1007('3c'),'content-length':0x0,'host':_0x1007('3d'),'token':soy_zyEb_token}};};;_0xodL='jsjiami.com.v6';




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