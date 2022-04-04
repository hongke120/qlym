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


var _0xodL='jsjiami.com.v6',_0xodL_=['_0xodL'],_0x1029=[_0xodL,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x77\x79\x74\x6b\x5f\x64\x61\x74\x61','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x77\x79\x74\x6b\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x77\x79\x74\x6b\x31\x36\x38\x38\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x76\x31\x2f\x69\x6e\x76\x65\x73\x74\x6f\x72\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x69\x67\x6e\x2f\x69\x6e\x64\x65\x78','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x73\x63\x6f\x72\x65','\x74\x6f\x64\x61\x79\x5f\x63\x6f\x75\x6e\x74','\x74\x6f\x64\x61\x79\x5f\x66\x61\x6e\x73\x5f\x63\x6f\x69\x6e','\x6c\x6f\x67\x69\x6e\x5f\x73\x74\x61\x74\x75\x73','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20\u4eca\u65e5\u7b7e\u5230\u5df2\u4e0a\u9650','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20\x74\x6f\x6b\x65\x6e\u5df2\u8fc7\u671f','\x20\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20','\x6d\x73\x67','\x73\x69\x67\x6e\x2f\x75\x73\x65\x72\x53\x69\x67\x6e\x49\x6e','\x20\u7b7e\u5230\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u7b7e\u5230\u3011\x3a\x20','\x75\x73\x65\x72\x2f\x75\x73\x65\x72\x49\x6e\x66\x6f','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u7528\u6237\u6635\u79f0\uff1a','\x6e\x69\x63\x6b\x6e\x61\x6d\x65','\x0a\x2d\x2d\x2d\u7528\u6237\x49\x44\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u79ef\u5206\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u4f59\u989d\uff1a','\x6d\x6f\x6e\x65\x79','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20','\x75\x73\x65\x72\x2f\x77\x69\x74\x68\x50\x6f\x73\x74','\x61\x6d\x6f\x75\x6e\x74\x3d\x31','\x20\u63d0\u73b0\u3011\x3a\x20\u63d0\u73b0\x20\x31\x20\u5143\u6210\u529f','\x20\u63d0\u73b0\u3011\x3a\x20','\x41\x45\x53','\x65\x6e\x63\x72\x79\x70\x74','\x65\x6e\x63','\x55\x74\x66\x38','\x6d\x6f\x64\x65','\x43\x42\x43','\x70\x61\x64','\x50\x6b\x63\x73\x37','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x6d\x2e\x77\x79\x2e\x72\x75\x6e\x2f\x61\x70\x69\x2f','\x6c\x6d\x2e\x77\x79\x2e\x72\x75\x6e','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x75\x74\x66\x2d\x38','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x67\x7a\x69\x70\x2c\x63\x6f\x6d\x70\x72\x65\x73\x73\x2c\x62\x72\x2c\x64\x65\x66\x6c\x61\x74\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x65\x72\x76\x69\x63\x65\x77\x65\x63\x68\x61\x74\x2e\x63\x6f\x6d\x2f\x77\x78\x30\x37\x31\x36\x34\x38\x62\x63\x35\x62\x36\x63\x39\x33\x36\x39\x2f\x33\x2f\x70\x61\x67\x65\x2d\x66\x72\x61\x6d\x65\x2e\x68\x74\x6d\x6c','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x44\x61\x79','\x20\u661f\u671f','\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d','\x63\x68\x61\x72\x41\x74','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x6a\x73\x41\x59\x6c\x42\x6a\x64\x4a\x69\x55\x61\x48\x6d\x69\x2e\x63\x62\x5a\x6f\x47\x6d\x2e\x76\x36\x48\x48\x3d\x3d'];function _0x2d70(_0x542221,_0x12c206){_0x542221=~~'0x'['concat'](_0x542221['slice'](0x0));var _0x3d233d=_0x1029[_0x542221];return _0x3d233d;};(function(_0x2c344b,_0x4972d2){var _0x29b062=0x0;for(_0x4972d2=_0x2c344b['shift'](_0x29b062>>0x2);_0x4972d2&&_0x4972d2!==(_0x2c344b['pop'](_0x29b062>>0x3)+'')['replace'](/[AYlBdJUHbZGHH=]/g,'');_0x29b062++){_0x29b062=_0x29b062^0xd370a;}}(_0x1029,_0x2d70));const crypto=require(_0x2d70('0'));let app_soy_wytk_data=[],soy_wytk_UA='';console[_0x2d70('1')](_0x2d70('2'));!(async()=>{if($[_0x2d70('3')]()){if(!process[_0x2d70('4')][_0x2d70('5')]){console[_0x2d70('1')](_0x2d70('6'));return;}if(process[_0x2d70('4')][_0x2d70('5')]&&process[_0x2d70('4')][_0x2d70('5')][_0x2d70('7')]('\x0a')>-0x1){app_soy_wytk_data=process[_0x2d70('4')][_0x2d70('5')][_0x2d70('8')]('\x0a');}else if(process[_0x2d70('4')][_0x2d70('5')]&&process[_0x2d70('4')][_0x2d70('5')][_0x2d70('7')]('\x23')>-0x1){app_soy_wytk_data=process[_0x2d70('4')][_0x2d70('5')][_0x2d70('8')]('\x23');}else if(process[_0x2d70('4')][_0x2d70('5')]&&process[_0x2d70('4')][_0x2d70('5')][_0x2d70('7')]('\x40')>-0x1){app_soy_wytk_data=process[_0x2d70('4')][_0x2d70('5')][_0x2d70('8')]('\x40');}else{app_soy_wytk_data=process[_0x2d70('4')][_0x2d70('5')][_0x2d70('8')]();};}console[_0x2d70('1')](_0x2d70('9')+new Date(new Date()[_0x2d70('a')]()+new Date()[_0x2d70('b')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x2d70('c')]()+_0x2d70('d'));console[_0x2d70('1')](_0x2d70('e')+app_soy_wytk_data[_0x2d70('f')]+_0x2d70('10'));subTitle='';for(i=0x0;i<app_soy_wytk_data[_0x2d70('f')];i++){let _0x2e8143=app_soy_wytk_data[i][_0x2d70('8')]('\x26');token=_0x2e8143[0x0];soy_wytk_UA=_0x2e8143[0x1];if(!soy_wytk_UA){soy_wytk_UA=_0x2d70('11');}$[_0x2d70('12')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x2d70('13')]($[_0x2d70('14')],subTitle);}}})()[_0x2d70('15')](_0x47ed56=>$[_0x2d70('16')](_0x47ed56))[_0x2d70('17')](()=>$[_0x2d70('18')]());async function implement(){host=_0x2d70('19');console[_0x2d70('1')](_0x2d70('1a')+$[_0x2d70('12')]+_0x2d70('1b'));await sign_state();await userInfo();}function sign_state(){let _0x52c982=Post_request(_0x2d70('1c'),'');return new Promise((_0x29a97e,_0x331d89)=>{$[_0x2d70('1d')](_0x52c982,async(_0x406056,_0x352e36,_0x171fdc)=>{try{if(_0x406056){console[_0x2d70('1')](_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('1f'));subTitle+=_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('1f');}else{let _0x1cff2f=JSON[_0x2d70('20')](_0x171fdc);if(_0x1cff2f[_0x2d70('21')]==0x1){let _0x1b4182=_0x1cff2f[_0x2d70('22')][_0x2d70('22')][_0x2d70('23')];let _0x5c2fd9=_0x1cff2f[_0x2d70('22')][_0x2d70('22')][_0x2d70('24')];let _0x59674a=_0x1cff2f[_0x2d70('22')][_0x2d70('22')][_0x2d70('25')];let _0x338e46=_0x1cff2f[_0x2d70('22')][_0x2d70('26')];if(_0x338e46){if(_0x5c2fd9<=0x9){await userSignIn();}else{console[_0x2d70('1')](_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('27'));}}else{console[_0x2d70('1')](_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('28'));}}else{console[_0x2d70('1')](_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('29')+_0x1cff2f[_0x2d70('2a')]);}}}catch(_0x9f31f4){console[_0x2d70('1')](_0x9f31f4,_0x352e36);}finally{_0x29a97e();}});});}function userSignIn(){let _0x445a2b=Post_request(_0x2d70('2b'),'');return new Promise((_0xbbf838,_0x6729ce)=>{$[_0x2d70('1d')](_0x445a2b,async(_0xae8525,_0x5f3dc9,_0x16ef58)=>{try{if(_0xae8525){console[_0x2d70('1')](_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('2c'));subTitle+=_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('2c');}else{let _0x4e423c=JSON[_0x2d70('20')](_0x16ef58);if(_0x4e423c[_0x2d70('21')]==0x1){console[_0x2d70('1')](_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('2d')+_0x4e423c[_0x2d70('2a')]);}else{console[_0x2d70('1')](_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('2d')+_0x4e423c[_0x2d70('2a')]);}}}catch(_0x35b571){console[_0x2d70('1')](_0x35b571,_0x5f3dc9);}finally{_0xbbf838();}});});}function userInfo(){let _0x521fe4=Post_request(_0x2d70('2e'),'');return new Promise((_0x1c6e06,_0x297afc)=>{$[_0x2d70('1d')](_0x521fe4,async(_0x2c5b6c,_0x1f6e28,_0x406e61)=>{try{if(_0x2c5b6c){console[_0x2d70('1')](_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('2f'));subTitle+=_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('2f');console[_0x2d70('1')](_0x2c5b6c+'\x0a');}else{let _0x520d6=JSON[_0x2d70('20')](_0x406e61);if(_0x520d6[_0x2d70('21')]==0x1){console[_0x2d70('1')](_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('30')+_0x520d6[_0x2d70('22')][_0x2d70('31')]+_0x2d70('32')+_0x520d6[_0x2d70('22')]['\x69\x64']+_0x2d70('33')+_0x520d6[_0x2d70('22')][_0x2d70('23')]+_0x2d70('34')+_0x520d6[_0x2d70('22')][_0x2d70('35')]);if(_0x520d6[_0x2d70('22')][_0x2d70('35')]>=0x1){await withPost();}}else{console[_0x2d70('1')](_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('36')+_0x520d6[_0x2d70('2a')]);}}}catch(_0x1b05a2){console[_0x2d70('1')](_0x1b05a2,_0x1f6e28);}finally{_0x1c6e06();}});});}function withPost(){let _0x4dbd75=Post_request(_0x2d70('37'),_0x2d70('38'));return new Promise((_0x405bbb,_0x3a4231)=>{$[_0x2d70('1d')](_0x4dbd75,async(_0x26f64e,_0x3b6582,_0x3f5be8)=>{try{if(_0x26f64e){console[_0x2d70('1')](_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('2f'));subTitle+=_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('2f');console[_0x2d70('1')](_0x26f64e+'\x0a');}else{let _0xe643c7=JSON[_0x2d70('20')](_0x3f5be8);if(_0xe643c7[_0x2d70('21')]==0x1){console[_0x2d70('1')](_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('39'));}else{console[_0x2d70('1')](_0x2d70('1e')+$[_0x2d70('12')]+_0x2d70('3a')+_0xe643c7[_0x2d70('2a')]);}}}catch(_0x175d3e){console[_0x2d70('1')](_0x175d3e,_0x3b6582);}finally{_0x405bbb();}});});}function AES_Encrypt(_0x16be44,_0x5466c5,_0x1680eb){let _0x2cfffa=crypto[_0x2d70('3b')][_0x2d70('3c')](crypto[_0x2d70('3d')][_0x2d70('3e')][_0x2d70('20')](_0x16be44),crypto[_0x2d70('3d')][_0x2d70('3e')][_0x2d70('20')](_0x5466c5),{'\x69\x76':crypto[_0x2d70('3d')][_0x2d70('3e')][_0x2d70('20')](_0x1680eb),'\x6d\x6f\x64\x65':crypto[_0x2d70('3f')][_0x2d70('40')],'\x70\x61\x64\x64\x69\x6e\x67':crypto[_0x2d70('41')][_0x2d70('42')]});return _0x2cfffa[_0x2d70('43')](crypto[_0x2d70('3e')]);}function Post_request(_0x1081ac,_0x3b29c3){return{'\x75\x72\x6c':_0x2d70('44')+_0x1081ac,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x2d70('45'),'Connection':_0x2d70('46'),'Content-Length':_0x3b29c3[_0x2d70('f')],'charset':_0x2d70('47'),'User-Agent':soy_wytk_UA,'Content-Type':_0x2d70('48'),'Accept-Encoding':_0x2d70('49'),'token':token,'Referer':_0x2d70('4a')},'\x62\x6f\x64\x79':_0x3b29c3};};function Get_request(_0x49bae1){return{'\x75\x72\x6c':_0x2d70('44')+_0x49bae1,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x2d70('45'),'Connection':_0x2d70('46'),'Content-Length':0x0,'charset':_0x2d70('47'),'User-Agent':soy_wytk_UA,'content-type':_0x2d70('48'),'Accept-Encoding':_0x2d70('49'),'token':token,'Referer':_0x2d70('4a')}};};function getCurrentTime(){let _0x1ddd08=new Date();let _0x5d42c8=_0x1ddd08[_0x2d70('4b')]();let _0x4e867c=_0x1ddd08[_0x2d70('4c')]()+0x1;let _0x5151d8=_0x1ddd08[_0x2d70('4d')]();let _0x8ca254=_0x1ddd08[_0x2d70('4e')]();let _0xf88941=_0x2d70('4f')+_0x2d70('50')[_0x2d70('51')](_0x1ddd08[_0x2d70('4e')]());let _0x45e921=_0x1ddd08[_0x2d70('52')]();let _0x281afe=_0x1ddd08[_0x2d70('53')]();let _0x4f5985=_0x1ddd08[_0x2d70('54')]();let _0x3ba06c=_0x1ddd08[_0x2d70('55')]();if(_0x4e867c<0xa){_0x4e867c='\x30'+_0x4e867c;}if(_0x5151d8<0xa){_0x5151d8='\x30'+_0x5151d8;}if(_0x45e921<0xa){_0x45e921='\x30'+_0x45e921;}if(_0x281afe<0xa){_0x281afe='\x30'+_0x281afe;}if(_0x4f5985<0xa){_0x4f5985='\x30'+_0x4f5985;}if(_0x3ba06c<0xa){_0x3ba06c='\x30\x30'+_0x3ba06c;}else if(_0x3ba06c<0x64){_0x3ba06c='\x30'+_0x3ba06c;}return _0x5d42c8+'\x2d'+_0x4e867c+'\x2d'+_0x5151d8+'\x20'+_0x45e921+'\x3a'+_0x281afe+'\x3a'+_0x4f5985;};_0xodL='jsjiami.com.v6';



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