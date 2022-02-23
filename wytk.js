/*

软件名称:微娱推客

项目注册地址(微信识别):https://gitee.com/soy-tool/app-script/raw/master/picture/wytk.jpg


必要变量:

变量名 soy_wytk_data
变量值 token&UA
注释:抓包 https://lm.wy.run/api/sign/index 在的链接 请求头找token和user-agent(即UA)


多个号用 # 或 @ 或 换行 隔开

cron 26/5 10,13 * * * https://gitee.com/soy-tool/app-script/raw/master/app_wytk.js

*/


const $ = new Env('微娱推客');
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodE='jsjiami.com.v6',_0xodE_=['_0xodE'],_0x2949=[_0xodE,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x77\x79\x74\x6b\x5f\x64\x61\x74\x61','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x77\x79\x74\x6b\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x77\x79\x74\x6b\x31\x36\x38\x38\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x76\x31\x2f\x69\x6e\x76\x65\x73\x74\x6f\x72\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x69\x67\x6e\x2f\x69\x6e\x64\x65\x78','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x73\x63\x6f\x72\x65','\x74\x6f\x64\x61\x79\x5f\x63\x6f\x75\x6e\x74','\x74\x6f\x64\x61\x79\x5f\x66\x61\x6e\x73\x5f\x63\x6f\x69\x6e','\x6c\x6f\x67\x69\x6e\x5f\x73\x74\x61\x74\x75\x73','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20\u4eca\u65e5\u7b7e\u5230\u5df2\u4e0a\u9650','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20\x74\x6f\x6b\x65\x6e\u5df2\u8fc7\u671f','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20','\x6d\x73\x67','\x73\x69\x67\x6e\x2f\x75\x73\x65\x72\x53\x69\x67\x6e\x49\x6e','\x20\u7b7e\u5230\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u7b7e\u5230\u3011\x3a\x20','\x41\x45\x53','\x65\x6e\x63\x72\x79\x70\x74','\x65\x6e\x63','\x55\x74\x66\x38','\x6d\x6f\x64\x65','\x43\x42\x43','\x70\x61\x64','\x50\x6b\x63\x73\x37','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x6d\x2e\x77\x79\x2e\x72\x75\x6e\x2f\x61\x70\x69\x2f','\x6c\x6d\x2e\x77\x79\x2e\x72\x75\x6e','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x75\x74\x66\x2d\x38','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x67\x7a\x69\x70\x2c\x63\x6f\x6d\x70\x72\x65\x73\x73\x2c\x62\x72\x2c\x64\x65\x66\x6c\x61\x74\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x65\x72\x76\x69\x63\x65\x77\x65\x63\x68\x61\x74\x2e\x63\x6f\x6d\x2f\x77\x78\x30\x37\x31\x36\x34\x38\x62\x63\x35\x62\x36\x63\x39\x33\x36\x39\x2f\x33\x2f\x70\x61\x67\x65\x2d\x66\x72\x61\x6d\x65\x2e\x68\x74\x6d\x6c','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x44\x61\x79','\x20\u661f\u671f','\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d','\x63\x68\x61\x72\x41\x74','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x43\x64\x79\x53\x59\x77\x75\x4b\x64\x70\x41\x6a\x73\x68\x55\x6a\x78\x69\x65\x61\x6d\x69\x2e\x63\x6f\x6d\x2e\x76\x36\x3d\x3d'];function _0x1492(_0x16b519,_0x26c343){_0x16b519=~~'0x'['concat'](_0x16b519['slice'](0x0));var _0x17dfd4=_0x2949[_0x16b519];return _0x17dfd4;};(function(_0x560816,_0x572a25){var _0x310e4f=0x0;for(_0x572a25=_0x560816['shift'](_0x310e4f>>0x2);_0x572a25&&_0x572a25!==(_0x560816['pop'](_0x310e4f>>0x3)+'')['replace'](/[CdySYwuKdpAhUxe=]/g,'');_0x310e4f++){_0x310e4f=_0x310e4f^0xd297a;}}(_0x2949,_0x1492));const crypto=require(_0x1492('0'));let app_soy_wytk_data=[],soy_wytk_UA='';console[_0x1492('1')](_0x1492('2'));!(async()=>{if($[_0x1492('3')]()){if(!process[_0x1492('4')][_0x1492('5')]){console[_0x1492('1')](_0x1492('6'));return;}if(process[_0x1492('4')][_0x1492('5')]&&process[_0x1492('4')][_0x1492('5')][_0x1492('7')]('\x0a')>-0x1){app_soy_wytk_data=process[_0x1492('4')][_0x1492('5')][_0x1492('8')]('\x0a');}else if(process[_0x1492('4')][_0x1492('5')]&&process[_0x1492('4')][_0x1492('5')][_0x1492('7')]('\x23')>-0x1){app_soy_wytk_data=process[_0x1492('4')][_0x1492('5')][_0x1492('8')]('\x23');}else if(process[_0x1492('4')][_0x1492('5')]&&process[_0x1492('4')][_0x1492('5')][_0x1492('7')]('\x40')>-0x1){app_soy_wytk_data=process[_0x1492('4')][_0x1492('5')][_0x1492('8')]('\x40');}else{app_soy_wytk_data=process[_0x1492('4')][_0x1492('5')][_0x1492('8')]();};}console[_0x1492('1')](_0x1492('9')+new Date(new Date()[_0x1492('a')]()+new Date()[_0x1492('b')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x1492('c')]()+_0x1492('d'));console[_0x1492('1')](_0x1492('e')+app_soy_wytk_data[_0x1492('f')]+_0x1492('10'));subTitle='';for(i=0x0;i<app_soy_wytk_data[_0x1492('f')];i++){let _0x564134=app_soy_wytk_data[i][_0x1492('8')]('\x26');token=_0x564134[0x0];soy_wytk_UA=_0x564134[0x1];if(!soy_wytk_UA){soy_wytk_UA=_0x1492('11');}$[_0x1492('12')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x1492('13')]($[_0x1492('14')],subTitle);}}})()[_0x1492('15')](_0x37ead8=>$[_0x1492('16')](_0x37ead8))[_0x1492('17')](()=>$[_0x1492('18')]());async function implement(){host=_0x1492('19');console[_0x1492('1')](_0x1492('1a')+$[_0x1492('12')]+_0x1492('1b'));await sign_state();}function sign_state(){let _0x4f47f2=Post_request(_0x1492('1c'),'');return new Promise((_0x4a837,_0xa9500e)=>{$[_0x1492('1d')](_0x4f47f2,async(_0x38ca47,_0x376fb5,_0x12371c)=>{try{if(_0x38ca47){console[_0x1492('1')](_0x1492('1e')+$[_0x1492('12')]+_0x1492('1f'));subTitle+=_0x1492('1e')+$[_0x1492('12')]+_0x1492('1f');}else{let _0x216ebf=JSON[_0x1492('20')](_0x12371c);if(_0x216ebf[_0x1492('21')]==0x1){let _0xef2734=_0x216ebf[_0x1492('22')][_0x1492('22')][_0x1492('23')];let _0x2e85a1=_0x216ebf[_0x1492('22')][_0x1492('22')][_0x1492('24')];let _0x2589a8=_0x216ebf[_0x1492('22')][_0x1492('22')][_0x1492('25')];let _0x412c47=_0x216ebf[_0x1492('22')][_0x1492('26')];if(_0x412c47){if(_0x2e85a1<=0x9){await userSignIn();}else{console[_0x1492('1')](_0x1492('1e')+$[_0x1492('12')]+_0x1492('27'));}}else{console[_0x1492('1')](_0x1492('1e')+$[_0x1492('12')]+_0x1492('28'));}}else{console[_0x1492('1')](_0x1492('1e')+$[_0x1492('12')]+_0x1492('29')+_0x216ebf[_0x1492('2a')]);}}}catch(_0xd97cd3){console[_0x1492('1')](_0xd97cd3,_0x376fb5);}finally{_0x4a837();}});});}function userSignIn(){let _0x27c585=Post_request(_0x1492('2b'),'');return new Promise((_0x194c4e,_0x59c595)=>{$[_0x1492('1d')](_0x27c585,async(_0x1806f2,_0x40dca6,_0x5beffe)=>{try{if(_0x1806f2){console[_0x1492('1')](_0x1492('1e')+$[_0x1492('12')]+_0x1492('2c'));subTitle+=_0x1492('1e')+$[_0x1492('12')]+_0x1492('2c');}else{let _0x31acd3=JSON[_0x1492('20')](_0x5beffe);if(_0x31acd3[_0x1492('21')]==0x1){console[_0x1492('1')](_0x1492('1e')+$[_0x1492('12')]+_0x1492('2d')+_0x31acd3[_0x1492('2a')]);}else{console[_0x1492('1')](_0x1492('1e')+$[_0x1492('12')]+_0x1492('2d')+_0x31acd3[_0x1492('2a')]);}}}catch(_0x54814c){console[_0x1492('1')](_0x54814c,_0x40dca6);}finally{_0x194c4e();}});});}function AES_Encrypt(_0x1b813b,_0xffa67,_0x3b2811){let _0x818f90=crypto[_0x1492('2e')][_0x1492('2f')](crypto[_0x1492('30')][_0x1492('31')][_0x1492('20')](_0x1b813b),crypto[_0x1492('30')][_0x1492('31')][_0x1492('20')](_0xffa67),{'\x69\x76':crypto[_0x1492('30')][_0x1492('31')][_0x1492('20')](_0x3b2811),'\x6d\x6f\x64\x65':crypto[_0x1492('32')][_0x1492('33')],'\x70\x61\x64\x64\x69\x6e\x67':crypto[_0x1492('34')][_0x1492('35')]});return _0x818f90[_0x1492('36')](crypto[_0x1492('31')]);}function Post_request(_0x557509,_0x46f0b7){return{'\x75\x72\x6c':_0x1492('37')+_0x557509,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x1492('38'),'Connection':_0x1492('39'),'Content-Length':_0x46f0b7[_0x1492('f')],'charset':_0x1492('3a'),'User-Agent':soy_wytk_UA,'content-type':_0x1492('3b'),'Accept-Encoding':_0x1492('3c'),'token':token,'Referer':_0x1492('3d')},'\x62\x6f\x64\x79':_0x46f0b7};};function Get_request(_0x44e63c){return{'\x75\x72\x6c':_0x1492('37')+_0x44e63c,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x1492('38'),'Connection':_0x1492('39'),'Content-Length':0x0,'charset':_0x1492('3a'),'User-Agent':soy_wytk_UA,'content-type':_0x1492('3b'),'Accept-Encoding':_0x1492('3c'),'token':token,'Referer':_0x1492('3d')}};};function getCurrentTime(){let _0x1e022f=new Date();let _0x34f4f4=_0x1e022f[_0x1492('3e')]();let _0x574d7f=_0x1e022f[_0x1492('3f')]()+0x1;let _0x3e3df6=_0x1e022f[_0x1492('40')]();let _0x92d0=_0x1e022f[_0x1492('41')]();let _0x494b18=_0x1492('42')+_0x1492('43')[_0x1492('44')](_0x1e022f[_0x1492('41')]());let _0x4b3107=_0x1e022f[_0x1492('45')]();let _0x2a5e4e=_0x1e022f[_0x1492('46')]();let _0x24a8ca=_0x1e022f[_0x1492('47')]();let _0x2d7e80=_0x1e022f[_0x1492('48')]();if(_0x574d7f<0xa){_0x574d7f='\x30'+_0x574d7f;}if(_0x3e3df6<0xa){_0x3e3df6='\x30'+_0x3e3df6;}if(_0x4b3107<0xa){_0x4b3107='\x30'+_0x4b3107;}if(_0x2a5e4e<0xa){_0x2a5e4e='\x30'+_0x2a5e4e;}if(_0x24a8ca<0xa){_0x24a8ca='\x30'+_0x24a8ca;}if(_0x2d7e80<0xa){_0x2d7e80='\x30\x30'+_0x2d7e80;}else if(_0x2d7e80<0x64){_0x2d7e80='\x30'+_0x2d7e80;}return _0x34f4f4+'\x2d'+_0x574d7f+'\x2d'+_0x3e3df6+'\x20'+_0x4b3107+'\x3a'+_0x2a5e4e+'\x3a'+_0x24a8ca;};_0xodE='jsjiami.com.v6';



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