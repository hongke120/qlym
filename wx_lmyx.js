/*

项目名称:链萌优选

项目注册地址(微信打开):https://gitee.com/soy-tool/app-script/raw/master/picture/lmyx.jpg

看广告获得分红币,分红模式,目前微信授权即可,不需要实名(11/06)


必要变量:

变量名:soy_lmyx_data
变量值:token&版本号&支付宝名&支付宝账号&UA
注释:抓包找到有 https://www.lmyx.shop/web/index.php 链接的,链接上的access_token值就是变量需求的toekn,链接上的_version值就是变量需要的版本号,UA是请求头上的User-Agent值(选填)


多个号用 @ 或 换行 隔开

cron 31 0,9,17 * * * https://gitee.com/soy-tool/app-script/raw/master/wx_lmyx.js

*/


const $ = new Env('链萌优选');
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodd='jsjiami.com.v6',_0xodd_=['_0xodd'],_0x3c82=[_0xodd,'\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x6c\x6d\x79\x78\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x6e\x61\x6d\x65','\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x6c\x6d\x79\x78\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x67\x65\x74\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x75\x72\x6c','\x61\x70\x69\x2f\x62\x6f\x78','\x68\x65\x61\x64\x65\x72\x73','\x74\x6f\x6b\x65\x6e','\x73\x6f\x79\x5f\x6c\x6d\x79\x78\x5f\x74\x6f\x65\x6b\x6e','\x73\x65\x74\x64\x61\x74\x61','\x23\x73\x6f\x79\x5f\x6c\x6d\x79\x78\x5f\x64\x61\x74\x61','\x75\x73\x65\x72\x2d\x61\x67\x65\x6e\x74','\x73\x6f\x79\x5f\x6c\x6d\x79\x78\x5f\x55\x41','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x6c\x6d\x79\x78\x2e\x73\x68\x6f\x70\x2f\x77\x65\x62\x2f\x69\x6e\x64\x65\x78\x2e\x70\x68\x70\x3f','\x73\x74\x6f\x72\x65\x5f\x69\x64\x3d\x31\x26\x72\x3d\x61\x70\x69\x2f\x73\x68\x61\x72\x65\x68\x6f\x6c\x64\x65\x72\x2f\x69\x6e\x64\x65\x78\x2f\x62\x6f\x6e\x75\x73\x2d\x69\x6e\x64\x65\x78\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d','\x26\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x77\x78','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4efb\u52a1\u5217\u8868\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x69\x73\x5f\x73\x69\x67\x6e','\x69\x73\x5f\x62\x72\x6f\x77\x73\x65','\x6c\x6f\x6f\x6b\x5f\x76\x69\x64\x65\x6f\x5f\x61\x64','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x77\x61\x69\x74','\x20\u4efb\u52a1\u5217\u8868\u3011\x3a\x20\u8bfb\u53d6\u5931\u8d25\x2c\u53ef\u80fd\x74\x6f\x6b\x65\x6e\u5df2\u8fc7\u671f','\x73\x74\x6f\x72\x65\x5f\x69\x64\x3d\x31\x26\x72\x3d\x61\x70\x69\x2f\x73\x68\x61\x72\x65\x68\x6f\x6c\x64\x65\x72\x2f\x69\x6e\x64\x65\x78\x2f\x62\x6f\x6e\x75\x73\x2d\x70\x72\x69\x63\x65\x2d\x6c\x69\x73\x74\x26\x70\x61\x67\x65\x3d\x31\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x38\x2e\x39\x26\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x77\x78','\x20\u4e2a\u4eba\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x62\x6f\x6e\x75\x73\x5f\x70\x72\x69\x63\x65','\x20\u4e2a\u4eba\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u5f53\u524d\u4f59\u989d\uff1a','\x20\u4e2a\u4eba\u4fe1\u606f\u3011\x3a\x20','\x6d\x73\x67','\x73\x74\x6f\x72\x65\x5f\x69\x64\x3d\x31\x26\x72\x3d\x61\x70\x69\x2f\x73\x68\x61\x72\x65\x68\x6f\x6c\x64\x65\x72\x2f\x69\x6e\x64\x65\x78\x2f\x63\x61\x73\x68\x2d\x61\x70\x70\x6c\x79','\x63\x61\x73\x68\x3d','\x26\x6e\x61\x6d\x65\x3d','\x26\x6d\x6f\x62\x69\x6c\x65\x3d','\x26\x62\x61\x6e\x6b\x5f\x6e\x61\x6d\x65\x3d\x26\x70\x61\x79\x5f\x74\x79\x70\x65\x3d\x31\x26\x73\x63\x65\x6e\x65\x3d\x43\x41\x53\x48\x26\x66\x6f\x72\x6d\x5f\x69\x64\x3d\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x70\x6f\x73\x74','\x20\u63d0\u73b0\u3011\x3a\x20','\x73\x74\x6f\x72\x65\x5f\x69\x64\x3d\x31\x26\x72\x3d\x61\x70\x69\x2f\x73\x68\x61\x72\x65\x68\x6f\x6c\x64\x65\x72\x2f\x69\x6e\x64\x65\x78\x2f\x62\x72\x6f\x77\x73\x65\x2d\x62\x6f\x6e\x75\x73\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x20\u4efb\u52a1\u5217\u8868\u3011\x3a\x20','\x73\x74\x6f\x72\x65\x5f\x69\x64\x3d\x31\x26\x72\x3d\x61\x70\x69\x2f\x69\x6e\x74\x65\x67\x72\x61\x6c\x6d\x61\x6c\x6c\x2f\x69\x6e\x74\x65\x67\x72\x61\x6c\x6d\x61\x6c\x6c\x2f\x72\x65\x67\x69\x73\x74\x65\x72\x26\x74\x6f\x64\x61\x79\x3d','\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x20\u7b7e\u5230\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7b7e\u5230\u3011\x3a\x20','\x73\x74\x6f\x72\x65\x5f\x69\x64\x3d\x31\x26\x72\x3d\x61\x70\x69\x2f\x73\x68\x61\x72\x65\x68\x6f\x6c\x64\x65\x72\x2f\x69\x6e\x64\x65\x78\x2f\x6c\x6f\x6f\x6b\x2d\x76\x69\x64\x65\x6f\x2d\x61\x64\x26\x76\x69\x64\x65\x6f\x5f\x74\x79\x70\x65\x3d\x30\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20','\x73\x74\x6f\x72\x65\x5f\x69\x64\x3d\x31\x26\x72\x3d\x61\x70\x69\x2f\x73\x68\x61\x72\x65\x68\x6f\x6c\x64\x65\x72\x2f\x69\x6e\x64\x65\x78\x2f\x62\x6f\x6e\x75\x73\x2d\x71\x75\x6f\x74\x61\x2d\x65\x78\x63\x68\x61\x6e\x67\x65\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x20\u5151\u6362\u901a\u884c\u8bc1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5151\u6362\u901a\u884c\u8bc1\u3011\x3a\x20','\x73\x74\x6f\x72\x65\x5f\x69\x64\x3d\x31\x26\x72\x3d\x61\x70\x69\x2f\x73\x68\x61\x72\x65\x68\x6f\x6c\x64\x65\x72\x2f\x69\x6e\x64\x65\x78\x2f\x6c\x6f\x6f\x6b\x2d\x76\x69\x64\x65\x6f\x2d\x61\x64\x26\x76\x69\x64\x65\x6f\x5f\x74\x79\x70\x65\x3d\x31\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x20\u9886\u5206\u7ea2\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u5206\u7ea2\u3011\x3a\x20','\x77\x77\x77\x2e\x6c\x6d\x79\x78\x2e\x73\x68\x6f\x70','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x75\x74\x66\x2d\x38','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x67\x7a\x69\x70\x2c\x63\x6f\x6d\x70\x72\x65\x73\x73\x2c\x62\x72\x2c\x64\x65\x66\x6c\x61\x74\x65','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x6a\x73\x6c\x78\x6a\x69\x59\x61\x6d\x69\x55\x58\x2e\x63\x6f\x42\x71\x6d\x2e\x76\x44\x36\x7a\x70\x5a\x66\x50\x52\x53\x68\x3d\x3d'];function _0xa087(_0x45658b,_0xa6ed42){_0x45658b=~~'0x'['concat'](_0x45658b['slice'](0x0));var _0x1c3a83=_0x3c82[_0x45658b];return _0x1c3a83;};(function(_0x563495,_0x37b199){var _0x1eac82=0x0;for(_0x37b199=_0x563495['shift'](_0x1eac82>>0x2);_0x37b199&&_0x37b199!==(_0x563495['pop'](_0x1eac82>>0x3)+'')['replace'](/[lxYUXBqDzpZfPRSh=]/g,'');_0x1eac82++){_0x1eac82=_0x1eac82^0xc67d0;}}(_0x3c82,_0xa087));let app_soy_lmyx_data=[],app_soy_lmyx_UA=[];!(async()=>{if(typeof $request!==_0xa087('0')){await Get_data();}if($[_0xa087('1')]()){if(!process[_0xa087('2')][_0xa087('3')]){console[_0xa087('4')]('\x0a\u3010'+$[_0xa087('5')]+_0xa087('6'));return;}if(process[_0xa087('2')][_0xa087('3')]&&process[_0xa087('2')][_0xa087('3')][_0xa087('7')]('\x0a')>-0x1){app_soy_lmyx_data=process[_0xa087('2')][_0xa087('3')][_0xa087('8')]('\x0a');}else if(process[_0xa087('2')][_0xa087('3')]&&process[_0xa087('2')][_0xa087('3')][_0xa087('7')]('\x23')>-0x1){app_soy_lmyx_data=process[_0xa087('2')][_0xa087('3')][_0xa087('8')]('\x23');}else{app_soy_lmyx_data=process[_0xa087('2')][_0xa087('3')][_0xa087('8')]();};}else{if(!$[_0xa087('9')](_0xa087('3'))){console[_0xa087('4')]('\x0a\u3010'+$[_0xa087('5')]+_0xa087('6'));return;}if($[_0xa087('9')](_0xa087('3'))&&$[_0xa087('9')](_0xa087('3'))[_0xa087('7')]('\x0a')>-0x1){app_soy_lmyx_data=$[_0xa087('9')](_0xa087('3'))[_0xa087('8')]('\x0a');}else if($[_0xa087('9')](_0xa087('3'))&&$[_0xa087('9')](_0xa087('3'))[_0xa087('7')]('\x23')>-0x1){app_soy_lmyx_data=$[_0xa087('9')](_0xa087('3'))[_0xa087('8')]('\x23');}else{app_soy_lmyx_data=$[_0xa087('9')](_0xa087('3'))[_0xa087('8')]();};}console[_0xa087('4')](_0xa087('a')+new Date(new Date()[_0xa087('b')]()+new Date()[_0xa087('c')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0xa087('d')]()+_0xa087('e'));console[_0xa087('4')](_0xa087('f')+app_soy_lmyx_data[_0xa087('10')]+_0xa087('11'));subTitle='';for(i=0x0;i<app_soy_lmyx_data[_0xa087('10')];i++){soy_lmyx_data=app_soy_lmyx_data[i][_0xa087('8')]('\x26');soy_lmyx_token=soy_lmyx_data[0x0];soy_lmyx_version=soy_lmyx_data[0x1];soy_lmyx_zfbname=soy_lmyx_data[0x2];soy_lmyx_zfbzh=soy_lmyx_data[0x3];soy_lmyx_UA=soy_lmyx_data[0x4];if(!soy_lmyx_UA){soy_lmyx_UA=_0xa087('12');}$[_0xa087('13')]=i+0x1;console[_0xa087('4')](_0xa087('14')+$[_0xa087('13')]+_0xa087('15'));await implement();};if(notify){if(subTitle){await notify[_0xa087('16')]($[_0xa087('5')],subTitle);}}})()[_0xa087('17')](_0xbf2906=>$[_0xa087('18')](_0xbf2906))[_0xa087('19')](()=>$[_0xa087('1a')]());function Get_data(){if($request[_0xa087('1b')][_0xa087('7')](_0xa087('1c'))>-0x1){const _0xdf237d=$request[_0xa087('1d')][_0xa087('1e')];let _0x12f888=$[_0xa087('9')](_0xa087('1f'));if(!_0x12f888){if(_0xdf237d)$[_0xa087('20')](_0xdf237d,_0xa087('3'));}else{if(_0xdf237d)$[_0xa087('20')](_0xdf237d,_0x12f888+_0xa087('21'));}const _0x317da4=$request[_0xa087('1d')][_0xa087('22')];if(_0x317da4)$[_0xa087('20')](_0x317da4,_0xa087('23'));}}async function implement(){host=_0xa087('24');await soy_lmyx_tasklist();}function soy_lmyx_tasklist(){let _0x395404=Get_request(_0xa087('25')+soy_lmyx_token+_0xa087('26')+soy_lmyx_version+_0xa087('27'));return new Promise((_0x4fedac,_0x4fb5e0)=>{$[_0xa087('28')](_0x395404,async(_0x3c5ae7,_0x2c89b9,_0x4e25ff)=>{try{if(_0x3c5ae7){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('2a'));subTitle+=_0xa087('29')+$[_0xa087('13')]+_0xa087('2a');}else{let _0x4aabb9=JSON[_0xa087('2b')](_0x4e25ff);if(_0x4aabb9[_0xa087('2c')]==0x0){is_sign=_0x4aabb9[_0xa087('2d')][_0xa087('2e')];is_browse=_0x4aabb9[_0xa087('2d')][_0xa087('2f')];look_AD=_0x4aabb9[_0xa087('2d')][_0xa087('30')];if(is_sign==0x0){await soy_lmyx_sign();}if(is_browse==0x0){await soy_lmyx_browse();}for(let _0x4ee02e=0x0;_0x4ee02e<0x3;_0x4ee02e++){await soy_lmyx_video_ad();let _0x448d5c=Math[_0xa087('31')](Math[_0xa087('32')]()*(0x7530-0x61a8+0x3e8)+0x61a8);await $[_0xa087('33')](_0x448d5c);}await soy_lmyx_exchange();await soy_lmyx_shareholder();await soy_lmyx_info();}else{console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('34'));}}}catch(_0x34f65e){console[_0xa087('4')](_0x34f65e,_0x2c89b9);}finally{_0x4fedac();}});});}function soy_lmyx_info(){let _0x359ad4=Get_request(_0xa087('35')+soy_lmyx_token+_0xa087('36'));return new Promise((_0x1c0b57,_0x37a83f)=>{$[_0xa087('28')](_0x359ad4,async(_0xf85197,_0x4975f5,_0x25acb3)=>{try{if(_0xf85197){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('37'));subTitle+=_0xa087('29')+$[_0xa087('13')]+_0xa087('37');}else{let _0x3c8d7d=JSON[_0xa087('2b')](_0x25acb3);if(_0x3c8d7d[_0xa087('2c')]==0x0){let _0x150107=_0x3c8d7d[_0xa087('2d')][_0xa087('38')];console[_0xa087('4')](_0x150107);if(_0x150107>=0xa){await soy_lmyx_apply(_0x150107);}else{console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('39')+_0x150107);subTitle+=_0xa087('29')+$[_0xa087('13')]+_0xa087('39')+_0x150107;}}else{console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('3a')+_0x3c8d7d[_0xa087('3b')]);}}}catch(_0x52de31){console[_0xa087('4')](_0x52de31,_0x4975f5);}finally{_0x1c0b57();}});});}function soy_lmyx_apply(_0x5cd55f){let _0x31bee3=Post_request(_0xa087('3c'),_0xa087('3d')+_0x5cd55f+_0xa087('3e')+encodeURIComponent(soy_lmyx_zfbname)+_0xa087('3f')+encodeURIComponent(soy_lmyx_zfbzh)+_0xa087('40')+soy_lmyx_token+_0xa087('26')+soy_lmyx_version+_0xa087('27'));return new Promise((_0x17b6c5,_0x12238a)=>{$[_0xa087('41')](_0x31bee3,async(_0x446f49,_0x4f1cdd,_0xd238e9)=>{try{if(_0x446f49){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('37'));subTitle+=_0xa087('29')+$[_0xa087('13')]+_0xa087('37');}else{let _0x185a52=JSON[_0xa087('2b')](_0xd238e9);if(_0x185a52[_0xa087('2c')]==0x0){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('42')+_0x185a52[_0xa087('3b')]);subTitle+=_0xa087('29')+$[_0xa087('13')]+_0xa087('42')+_0x185a52[_0xa087('3b')];}else{console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('3a')+_0x185a52[_0xa087('3b')]);}}}catch(_0x4a3ddf){console[_0xa087('4')](_0x4a3ddf,_0x4f1cdd);}finally{_0x17b6c5();}});});}function soy_lmyx_browse(){let _0x180933=Get_request(_0xa087('43')+soy_lmyx_token+_0xa087('26')+soy_lmyx_version+_0xa087('27'));return new Promise((_0x474e99,_0x5cf4f8)=>{$[_0xa087('28')](_0x180933,async(_0xebd70c,_0x3b9fdf,_0x32b729)=>{try{if(_0xebd70c){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('2a'));subTitle+=_0xa087('29')+$[_0xa087('13')]+_0xa087('2a');}else{let _0x1eadd2=JSON[_0xa087('2b')](_0x32b729);if(_0x1eadd2[_0xa087('2c')]==0x0){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('44')+_0x1eadd2[_0xa087('3b')]);}else{console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('44')+_0x1eadd2[_0xa087('3b')]);}}}catch(_0x4a9793){console[_0xa087('4')](_0x4a9793,_0x3b9fdf);}finally{_0x474e99();}});});}function soy_lmyx_sign(){let _0x76a208=Get_request(_0xa087('45')+formatDate()+_0xa087('46')+soy_lmyx_token+_0xa087('26')+soy_lmyx_version+_0xa087('27'));return new Promise((_0x34cf4e,_0x1bd054)=>{$[_0xa087('28')](_0x76a208,async(_0x10159b,_0x22b315,_0x2f2552)=>{try{if(_0x10159b){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('47'));subTitle+=_0xa087('29')+$[_0xa087('13')]+_0xa087('47');}else{let _0x36ab7d=JSON[_0xa087('2b')](_0x2f2552);if(_0x36ab7d[_0xa087('2c')]==0x0){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('48')+_0x36ab7d[_0xa087('3b')]);}else{console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('48')+_0x36ab7d[_0xa087('3b')]);}}}catch(_0x547a7a){console[_0xa087('4')](_0x547a7a,_0x22b315);}finally{_0x34cf4e();}});});}function soy_lmyx_video_ad(){let _0x5bd44d=Get_request(_0xa087('49')+soy_lmyx_token+_0xa087('26')+soy_lmyx_version+_0xa087('27'));return new Promise((_0x3f27ce,_0x26e66e)=>{$[_0xa087('28')](_0x5bd44d,async(_0x2e3326,_0x44eec1,_0x180400)=>{try{if(_0x2e3326){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('4a'));subTitle+=_0xa087('29')+$[_0xa087('13')]+_0xa087('4a');}else{let _0x4571b6=JSON[_0xa087('2b')](_0x180400);if(_0x4571b6[_0xa087('2c')]==0x0){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('4b')+_0x4571b6[_0xa087('3b')]);}else{console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('4b')+_0x4571b6[_0xa087('3b')]);}}}catch(_0x175872){console[_0xa087('4')](_0x175872,_0x44eec1);}finally{_0x3f27ce();}});});}function soy_lmyx_exchange(){let _0x205e01=Get_request(_0xa087('4c')+soy_lmyx_token+_0xa087('26')+soy_lmyx_version+_0xa087('27'));return new Promise((_0x16932f,_0x4e7fac)=>{$[_0xa087('28')](_0x205e01,async(_0x16272d,_0x3e6338,_0x3d0cb7)=>{try{if(_0x16272d){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('4d'));subTitle+=_0xa087('29')+$[_0xa087('13')]+_0xa087('4d');}else{let _0x412f13=JSON[_0xa087('2b')](_0x3d0cb7);if(_0x412f13[_0xa087('2c')]==0x0){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('4e')+_0x412f13[_0xa087('3b')]);}else{console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('4e')+_0x412f13[_0xa087('3b')]);}}}catch(_0x4e6e7c){console[_0xa087('4')](_0x4e6e7c,_0x3e6338);}finally{_0x16932f();}});});}function soy_lmyx_shareholder(){let _0x3ebc5f=Get_request(_0xa087('4f')+soy_lmyx_token+_0xa087('26')+soy_lmyx_version+_0xa087('27'));return new Promise((_0xa1bbd9,_0x13131c)=>{$[_0xa087('28')](_0x3ebc5f,async(_0x4a560c,_0x27d7b9,_0x308896)=>{try{if(_0x4a560c){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('50'));subTitle+=_0xa087('29')+$[_0xa087('13')]+_0xa087('50');}else{let _0x402a01=JSON[_0xa087('2b')](_0x308896);if(_0x402a01[_0xa087('2c')]==0x0){console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('51')+_0x402a01[_0xa087('3b')]);}else{console[_0xa087('4')](_0xa087('29')+$[_0xa087('13')]+_0xa087('51')+_0x402a01[_0xa087('3b')]);}}}catch(_0x56b3a3){console[_0xa087('4')](_0x56b3a3,_0x27d7b9);}finally{_0xa1bbd9();}});});}function Get_request(_0x277fe7){return{'\x75\x72\x6c':''+host+_0x277fe7,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0xa087('52'),'Connection':_0xa087('53'),'charset':_0xa087('54'),'User-Agent':soy_lmyx_UA,'content-type':_0xa087('55'),'Accept-Encoding':_0xa087('56')}};};function Post_request(_0x4a30c5,_0x4a13d7){return{'\x75\x72\x6c':''+host+_0x4a30c5,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0xa087('52'),'Connection':_0xa087('53'),'charset':_0xa087('54'),'User-Agent':soy_lmyx_UA,'content-type':_0xa087('55'),'Accept-Encoding':_0xa087('56'),'Content-Length':_0x4a13d7[_0xa087('10')]},'\x62\x6f\x64\x79':_0x4a13d7};};function formatDate(){let _0x46f462=new Date();let _0x1b11c0=_0x46f462[_0xa087('57')]();let _0x3a9677=_0x46f462[_0xa087('58')]()+0x1;let _0x1ad2ed=_0x46f462[_0xa087('59')]();_0x3a9677=_0x3a9677<0xa?'\x30'+_0x3a9677:_0x3a9677;_0x1ad2ed=_0x1ad2ed<0xa?'\x30'+_0x1ad2ed:_0x1ad2ed;return _0x1b11c0+'\x2f'+_0x3a9677+'\x2f'+_0x1ad2ed;};;_0xodd='jsjiami.com.v6';



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