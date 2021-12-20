/*

安卓软件名称:惠猜

项目注册地址:http://goodjob.juliym.com/yp/hc/invite-land?product=9166&inviteCode=PLG7BGNT

一个一次性奖励的app,登录后在设置界面绑定支付宝即可(点我的,上边中间有个头像点下即可绑定,下面那个数字就是变量的ID)

必要变量:

变量名 soy_hc_data
变量值 xxx&xxx&xxx
实例:ID&刷答题数量&info-di的值
注释:ID点我的界面,点右上角那个图标会看见一个ID,他后面数字就是,答题数量默认500次,info-di在请求头上
注:每次答题间隔为1-4秒

多个号用 # 或 @ 或 换行 隔开

cron "25 8,12,14,19,21 * * *" hc.js

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_hc.js

*/


const $ = new Env('鑫生活');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodK='jsjiami.com.v6',_0xodK_=['_0xodK'],_0x13d0=[_0xodK,'\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x68\x63\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x68\x63\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x67\x65\x74\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u586b\u5199\u53d8\u91cf\u683c\u5f0f\u4e0d\u89c4\u8303','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x63\x68\x69\x63\x6b\x2e\x6a\x75\x6c\x69\x79\x6d\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x67\x75\x65\x73\x73\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u5c06\u7b54\u9898\u6570\u91cf\u3011\x3a\x20\x32\x30\x30\x20\u6b21','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x77\x61\x69\x74','\x20\u5c06\u7b54\u9898\u6570\u91cf\u3011\x3a\x20','\x20\u672c\u8f6e\u7b54\u9898\u6570\u91cf\u3011\x3a\x20\u6210\u529f\u7b54\u9898\x20','\x67\x65\x74\x5f\x74\x61\x73\x6b\x3f\x75\x73\x65\x72\x49\x64\x3d','\x26\x70\x72\x6f\x64\x75\x63\x74\x49\x64\x3d\x39\x31\x36\x36\x26\x66\x6f\x72\x63\x65\x46\x65\x74\x63\x68\x49\x74\x65\x6d\x3d\x30\x26\x61\x70\x70\x53\x74\x61\x72\x74\x75\x70\x3d\x30\x26\x76\x65\x72\x73\x69\x6f\x6e\x3d\x31','\x67\x65\x74','\x20\u83b7\u53d6\u9898\u76ee\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x74\x61\x73\x6b','\x67\x6f\x6f\x64\x73','\x74\x69\x74\x6c\x65','\x74\x61\x73\x6b\x49\x64','\x66\x70\x72\x69\x63\x65','\x72\x65\x73\x75\x6c\x74','\x63\x75\x72\x41\x63\x74\x69\x6f\x6e\x53\x74\x61\x74\x75\x73','\x67\x67\x74\x73\x63','\x74\x6f\x64\x61\x79\x42\x61\x6c\x61\x6e\x63\x65','\x20\u4eca\u65e5\u72b6\u6001\u3011\x3a\x20\x0a\u7b54\u9898\u6210\u529f\uff1a','\x0a\u7ea2\u5305\u6570\u91cf\uff1a','\x20\u83b7\u53d6\u9898\u76ee\u3011\x3a\x20','\x26\x62\x69\x64\x3d','\x26\x74\x73\x3d','\x26\x73\x69\x67\x6e\x3d','\x69\x62\x6f\x6f\x6b\x73\x74\x61\x72\x40\x67\x75\x65\x73\x73\x2e\x63\x6f\x6d','\x20\u83b7\u53d6\u9898\u76ee\u3011\x3a\x20\u672a\u77e5\u72b6\u6001\x2c','\x6d\x65\x73\x73\x61\x67\x65','\x70\x6f\x73\x74\x5f\x74\x61\x73\x6b\x3f\x75\x73\x65\x72\x49\x64\x3d','\x26\x70\x72\x6f\x64\x75\x63\x74\x49\x64\x3d\x39\x31\x36\x36\x26\x74\x61\x73\x6b\x49\x64\x3d','\x26\x76\x65\x72\x73\x69\x6f\x6e\x3d\x31','\x20\u7b54\u9898\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7b54\u9898\u3011\x3a\x20\u7b54\u9898\u6210\u529f','\x20\u7b54\u9898\u3011\x3a\x20','\x70\x6f\x73\x74\x5f\x61\x64\x64\x5f\x67\x6f\x6f\x64\x73\x3f\x75\x73\x65\x72\x49\x64\x3d','\x26\x63\x6c\x69\x63\x6b\x65\x64\x3d\x31\x26\x76\x65\x72\x73\x69\x6f\x6e\x3d\x31','\x20\u589e\u52a0\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u589e\u52a0\u5e7f\u544a\u3011\x3a\x20\u4ee5\u6ca1\u6709\u5e93\u5b58\x2c\u8bf7\u660e\u5929\x36\u70b9\u540e\u518d\u8bd5\x20','\x20\u589e\u52a0\u5e7f\u544a\u3011\x3a\x20','\x6f\x70\x65\x6e\x5f\x6c\x6f\x74\x74\x65\x72\x79\x5f\x64\x72\x61\x77\x5f\x69\x74\x65\x6d\x73\x3f\x75\x73\x65\x72\x49\x64\x3d','\x26\x70\x72\x6f\x64\x75\x63\x74\x49\x64\x3d\x39\x31\x36\x36\x26\x6c\x6f\x74\x74\x65\x72\x79\x44\x72\x61\x77\x52\x65\x61\x73\x6f\x6e\x3d\x31\x26\x76\x65\x72\x73\x69\x6f\x6e\x3d\x31','\x20\u62bd\u5956\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u62bd\u5956\u3011\x3a\x20','\x62\x61\x6c\x61\x6e\x63\x65\x54\x6f\x43\x61\x73\x68\x42\x79\x4c\x6f\x74\x74\x65\x72\x79\x44\x72\x61\x77\x3f\x75\x73\x65\x72\x49\x64\x3d','\x26\x70\x72\x6f\x64\x75\x63\x74\x49\x64\x3d\x39\x31\x36\x36\x26\x63\x61\x73\x68\x4e\x61\x6d\x65\x3d\x25\x45\x36\x25\x38\x46\x25\x39\x30\x25\x45\x37\x25\x38\x45\x25\x42\x30\x25\x45\x35\x25\x41\x35\x25\x39\x36\x25\x45\x35\x25\x38\x41\x25\x42\x31\x26\x76\x65\x72\x73\x69\x6f\x6e\x3d\x31','\x20\u62bd\u5956\u63d0\u73b0\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u62bd\u5956\u63d0\u73b0\u3011\x3a\x20','\x67\x65\x74\x5f\x6c\x61\x73\x74\x5f\x67\x75\x65\x73\x73\x5f\x72\x65\x73\x75\x6c\x74\x3f\x75\x73\x65\x72\x49\x64\x3d','\x20\u7b54\u9898\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x67\x75\x65\x73\x73\x52\x65\x73\x75\x6c\x74','\x20\u7b54\u9898\u5956\u52b1\u3011\x3a\x20','\x70\x6f\x73\x74\x5f\x61\x64\x3f\x75\x73\x65\x72\x49\x64\x3d','\x26\x63\x6c\x69\x63\x6b\x65\x64\x3d\x30\x26\x76\x65\x72\x73\x69\x6f\x6e\x3d\x31','\x20\u9886\u53d6\u7b54\u9898\u7ea2\u5305\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u7b54\u9898\u7ea2\u5305\u3011\x3a\x20\u6210\u529f','\x20\u9886\u53d6\u7b54\u9898\u7ea2\u5305\u3011\x3a\x20','\x76\x69\x65\x77\x5f\x74\x61\x73\x6b\x5f\x61\x64\x5f\x72\x65\x70\x6f\x72\x74\x3f\x75\x73\x65\x72\x49\x64\x3d','\x26\x70\x72\x6f\x64\x75\x63\x74\x49\x64\x3d\x39\x31\x36\x36\x26\x74\x61\x73\x6b\x49\x64\x3d\x39\x26\x74\x73\x3d','\x20\u770b\u89c6\u9891\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u770b\u89c6\u9891\u3011\x3a\x20\u89c2\u770b\u89c6\u9891\u6210\u529f','\x20\u770b\u89c6\u9891\u3011\x3a\x20','\x63\x68\x69\x63\x6b\x2e\x6a\x75\x6c\x69\x79\x6d\x2e\x63\x6f\x6d','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72','\x72\x65\x70\x6c\x61\x63\x65','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x6a\x73\x6a\x72\x69\x61\x4d\x6d\x69\x74\x2e\x78\x66\x55\x63\x70\x6f\x6d\x70\x6b\x66\x4e\x43\x2e\x72\x74\x76\x4d\x36\x3d\x3d'];function _0x4013(_0x23a04f,_0x48d846){_0x23a04f=~~'0x'['concat'](_0x23a04f['slice'](0x0));var _0x3eed4f=_0x13d0[_0x23a04f];return _0x3eed4f;};(function(_0x235d41,_0xf79f2d){var _0x5791ed=0x0;for(_0xf79f2d=_0x235d41['shift'](_0x5791ed>>0x2);_0xf79f2d&&_0xf79f2d!==(_0x235d41['pop'](_0x5791ed>>0x3)+'')['replace'](/[rMtxfUppkfNCrtM=]/g,'');_0x5791ed++){_0x5791ed=_0x5791ed^0xc5176;}}(_0x13d0,_0x4013));let app_soy_hc_data=[],soy_hc_UA='';!(async()=>{if(typeof $request!==_0x4013('0')){await get_appdata();}if($[_0x4013('1')]()){if(!process[_0x4013('2')][_0x4013('3')]){console[_0x4013('4')](_0x4013('5'));return;}if(process[_0x4013('2')][_0x4013('3')]&&process[_0x4013('2')][_0x4013('3')][_0x4013('6')]('\x0a')>-0x1){app_soy_hc_data=process[_0x4013('2')][_0x4013('3')][_0x4013('7')]('\x0a');}else if(process[_0x4013('2')][_0x4013('3')]&&process[_0x4013('2')][_0x4013('3')][_0x4013('6')]('\x23')>-0x1){app_soy_hc_data=process[_0x4013('2')][_0x4013('3')][_0x4013('7')]('\x23');}else if(process[_0x4013('2')][_0x4013('3')]&&process[_0x4013('2')][_0x4013('3')][_0x4013('6')]('\x40')>-0x1){app_soy_hc_data=process[_0x4013('2')][_0x4013('3')][_0x4013('7')]('\x40');}else{app_soy_hc_data=process[_0x4013('2')][_0x4013('3')][_0x4013('7')]();};}else{if(!$[_0x4013('8')](_0x4013('3'))){console[_0x4013('4')](_0x4013('5'));return;}if($[_0x4013('8')](_0x4013('3'))&&$[_0x4013('8')](_0x4013('3'))[_0x4013('6')]('\x23')>-0x1){app_soy_hc_data=$[_0x4013('8')](_0x4013('3'))[_0x4013('7')]('\x40');}else if($[_0x4013('8')](_0x4013('3'))&&$[_0x4013('8')](_0x4013('3'))[_0x4013('6')]('\x0a')>-0x1){app_soy_hc_data=$[_0x4013('8')](_0x4013('3'))[_0x4013('7')]('\x0a');}else if($[_0x4013('8')](_0x4013('3'))&&$[_0x4013('8')](_0x4013('3'))[_0x4013('6')]('\x40')>-0x1){app_soy_hc_data=$[_0x4013('8')](_0x4013('3'))[_0x4013('7')]('\x40');}else{app_soy_hc_data=$[_0x4013('8')](_0x4013('3'))[_0x4013('7')]();};}console[_0x4013('4')](_0x4013('9')+new Date(new Date()[_0x4013('a')]()+new Date()[_0x4013('b')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x4013('c')]()+_0x4013('d'));console[_0x4013('4')](_0x4013('e')+app_soy_hc_data[_0x4013('f')]+_0x4013('10'));subTitle='';for(i=0x0;i<app_soy_hc_data[_0x4013('f')];i++){soy_hc_data=app_soy_hc_data[i][_0x4013('7')]('\x26');soy_hc_userId=soy_hc_data[0x0];soy_hc_answers_num=soy_hc_data[0x1];soy_hc_info=soy_hc_data[0x2];if(!soy_hc_userId||!soy_hc_info){console[_0x4013('4')](_0x4013('11'));return;}if(!soy_hc_UA){soy_hc_UA=_0x4013('12');}$[_0x4013('13')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x4013('14')]($[_0x4013('15')],subTitle);}}})()[_0x4013('16')](_0x3fd728=>$[_0x4013('17')](_0x3fd728))[_0x4013('18')](()=>$[_0x4013('19')]());async function implement(){host=_0x4013('1a');console[_0x4013('4')](_0x4013('1b')+$[_0x4013('13')]+_0x4013('1c'));Topic_status=0x1;success=0x0;if(!soy_hc_answers_num){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('1e'));for(let _0x27e07a=0x0;_0x27e07a<0xc8&&Topic_status==0x1;_0x27e07a++){await soy_hc_get_task();let _0x31a85e=Math[_0x4013('1f')](Math[_0x4013('20')]()*(0xbb8-0xbb8+0x3e8)+0x3e8);await $[_0x4013('21')](_0x31a85e);}}else{console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('22')+soy_hc_answers_num+'\x20\u6b21');for(let _0x72f120=0x0;_0x72f120<soy_hc_answers_num&&Topic_status==0x1;_0x72f120++){await soy_hc_get_task();let _0x31a85e=Math[_0x4013('1f')](Math[_0x4013('20')]()*(0xbb8-0x3e8+0x3e8)+0x3e8);await $[_0x4013('21')](_0x31a85e);}}console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('23')+success+'\x20\u6b21');}function soy_hc_get_task(){let _0x5b9ec8=Get_request(_0x4013('24')+soy_hc_userId+_0x4013('25'));return new Promise((_0x15fdbd,_0x338f7e)=>{$[_0x4013('26')](_0x5b9ec8,async(_0x6e8d1b,_0x460fd2,_0x177959)=>{try{if(_0x6e8d1b){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('27'));subTitle+=_0x4013('1d')+$[_0x4013('13')]+_0x4013('27');}else{let _0x541c0d=JSON[_0x4013('28')](_0x177959);if(_0x541c0d[_0x4013('29')]==0x0){let _0x1dbf1c=_0x541c0d[_0x4013('2a')][_0x4013('2b')][_0x4013('2c')][_0x4013('2d')];let _0x26bb31=_0x541c0d[_0x4013('2a')][_0x4013('2b')][_0x4013('2e')];let _0x39a654=_0x541c0d[_0x4013('2a')][_0x4013('2b')][_0x4013('2c')][_0x4013('2f')];let _0x58e7a2=_0x541c0d[_0x4013('2a')][_0x4013('2b')][_0x4013('30')];let _0xe174f=_0x541c0d[_0x4013('2a')][_0x4013('2b')][_0x4013('2c')][_0x4013('31')];let _0x5eaf82=_0x541c0d[_0x4013('2a')][_0x4013('32')];let _0x51b895=_0x541c0d[_0x4013('2a')][_0x4013('33')];let _0x593292=new Date()[_0x4013('a')]();if(_0x58e7a2==0x0){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('34')+_0x5eaf82+_0x4013('35')+_0x51b895);soy_hc_answers_num;console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('36')+_0x1dbf1c);await soy_hc_post_task(_0x26bb31+_0x4013('37')+_0x39a654+_0x4013('38')+_0x593292+_0x4013('39')+MD5_Encrypt(''+soy_hc_userId+_0x26bb31+_0x39a654+_0x593292+_0x4013('3a')));}else if(_0x58e7a2==0x1&&_0xe174f==0x0){await soy_hc_post_add_goods(_0x593292+_0x4013('39')+MD5_Encrypt(''+soy_hc_userId+_0x593292+_0x4013('3a')));}else if(_0x58e7a2==0x1&&_0xe174f==0x1){await soy_hc_get_last_guess_result();}else if(_0x58e7a2==0xa&&_0xe174f==0x0){await soy_hc_post_add_goods(_0x593292+_0x4013('39')+MD5_Encrypt(''+soy_hc_userId+_0x593292+_0x4013('3a')));}else{console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('3b')+_0x58e7a2+'\x2c'+_0xe174f+'\x7d');}}else{console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('36')+_0x541c0d[_0x4013('3c')]);}}}catch(_0x1452b6){console[_0x4013('4')](_0x1452b6,_0x460fd2);}finally{_0x15fdbd();}});});}function soy_hc_post_task(_0x125bac){let _0x4c8dae=Get_request(_0x4013('3d')+soy_hc_userId+_0x4013('3e')+_0x125bac+_0x4013('3f'));return new Promise((_0x16d557,_0xc9e0ee)=>{$[_0x4013('26')](_0x4c8dae,async(_0x176fec,_0xa0972e,_0x125bac)=>{try{if(_0x176fec){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('40'));subTitle+=_0x4013('1d')+$[_0x4013('13')]+_0x4013('40');}else{let _0x18517f=JSON[_0x4013('28')](_0x125bac);if(_0x18517f[_0x4013('29')]==0x0){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('41'));success+=0x1;}else{console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('42')+_0x18517f[_0x4013('3c')]);}}}catch(_0x3600c9){console[_0x4013('4')](_0x3600c9,_0xa0972e);}finally{_0x16d557();}});});}function soy_hc_post_add_goods(_0x3b67de){let _0x2eb054=Get_request(_0x4013('43')+soy_hc_userId+_0x4013('38')+_0x3b67de+_0x4013('44'));return new Promise((_0x2f3b17,_0x41a401)=>{$[_0x4013('26')](_0x2eb054,async(_0x3fb59a,_0x4f898f,_0x3b67de)=>{try{if(_0x3fb59a){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('45'));subTitle+=_0x4013('1d')+$[_0x4013('13')]+_0x4013('45');}else{let _0x20e36f=JSON[_0x4013('28')](_0x3b67de);if(_0x20e36f[_0x4013('29')]==0x0){if(_0x20e36f[_0x4013('2a')]==0x0){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('46'));Topic_status=0x0;await soy_hc_lottery();}else{console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('47')+_0x20e36f[_0x4013('2a')]);Topic_status=0x1;await $[_0x4013('21')](Math[_0x4013('1f')](Math[_0x4013('20')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await soy_hc_get_task();}}else{console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('47')+_0x20e36f[_0x4013('3c')]);}}}catch(_0x215ca0){console[_0x4013('4')](_0x215ca0,_0x4f898f);}finally{_0x2f3b17();}});});}function soy_hc_lottery(){let _0x48a152=Get_request(_0x4013('48')+soy_hc_userId+_0x4013('49'));return new Promise((_0x4dffda,_0x1b9cbe)=>{$[_0x4013('26')](_0x48a152,async(_0x2417be,_0x316d07,_0x2c02ec)=>{try{if(_0x2417be){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('4a'));subTitle+=_0x4013('1d')+$[_0x4013('13')]+_0x4013('4a');}else{let _0x46d554=JSON[_0x4013('28')](_0x2c02ec);if(_0x46d554[_0x4013('29')]==0x0){if(_0x46d554[_0x4013('2a')][_0x4013('2d')]=='\u63d0\u73b0'){}else{console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('4b')+_0x46d554[_0x4013('3c')]);}}else{console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('4b')+_0x46d554[_0x4013('3c')]);}}}catch(_0x2f0445){console[_0x4013('4')](_0x2f0445,_0x316d07);}finally{_0x4dffda();}});});}function soy_hc_LotteryDraw(){let _0x21e931=Get_request(_0x4013('4c')+soy_hc_userId+_0x4013('4d'));return new Promise((_0x20d89c,_0x6b5b00)=>{$[_0x4013('26')](_0x21e931,async(_0x2d4f4c,_0x561b67,_0x5319ae)=>{try{if(_0x2d4f4c){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('4e'));subTitle+=_0x4013('1d')+$[_0x4013('13')]+_0x4013('4e');}else{let _0x3401ad=JSON[_0x4013('28')](_0x5319ae);if(_0x3401ad[_0x4013('29')]==0x0){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('4f')+_0x3401ad[_0x4013('3c')]);}else{console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('4f')+_0x3401ad[_0x4013('3c')]);}}}catch(_0x29d6a4){console[_0x4013('4')](_0x29d6a4,_0x561b67);}finally{_0x20d89c();}});});}function soy_hc_get_last_guess_result(){let _0x5505cf=Get_request(_0x4013('50')+soy_hc_userId+_0x4013('3f'));return new Promise((_0x29a678,_0x1c2963)=>{$[_0x4013('26')](_0x5505cf,async(_0x33cf24,_0x10fca3,_0x1523bf)=>{try{if(_0x33cf24){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('51'));subTitle+=_0x4013('1d')+$[_0x4013('13')]+_0x4013('51');}else{let _0x7bc0cc=JSON[_0x4013('28')](_0x1523bf);if(_0x7bc0cc[_0x4013('29')]==0x0){let _0x1c6f68=_0x7bc0cc[_0x4013('2a')][_0x4013('52')][_0x4013('2e')];let _0x5ac893=new Date()[_0x4013('a')]();await soy_hc_post_ad(_0x1c6f68+_0x4013('38')+_0x5ac893+_0x4013('39')+MD5_Encrypt(''+soy_hc_userId+_0x1c6f68+_0x5ac893+_0x4013('3a')));}else{console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('53')+_0x7bc0cc[_0x4013('3c')]);}}}catch(_0xddfde0){console[_0x4013('4')](_0xddfde0,_0x10fca3);}finally{_0x29a678();}});});}function soy_hc_post_ad(_0x190a48){let _0x37a61f=Get_request(_0x4013('54')+soy_hc_userId+_0x4013('3e')+_0x190a48+_0x4013('55'));return new Promise((_0xfd87f0,_0x3cc965)=>{$[_0x4013('26')](_0x37a61f,async(_0x2f95c1,_0xa4197d,_0x190a48)=>{try{if(_0x2f95c1){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('56'));subTitle+=_0x4013('1d')+$[_0x4013('13')]+_0x4013('56');}else{let _0x2d8822=JSON[_0x4013('28')](_0x190a48);if(_0x2d8822[_0x4013('29')]==0x0){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('57'));}else{console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('58')+_0x2d8822[_0x4013('3c')]);}}}catch(_0x539969){console[_0x4013('4')](_0x539969,_0xa4197d);}finally{_0xfd87f0();}});});}function soy_hc_view_task_ad_report(){let _0x3c4fce=new Date()[_0x4013('a')]();let _0x556162=Get_request(_0x4013('59')+soy_hc_userId+_0x4013('5a')+_0x3c4fce+_0x4013('39')+MD5_Encrypt(''+soy_hc_userId+_0x3c4fce+_0x4013('3a'))+_0x4013('55'));return new Promise((_0x9ace0d,_0x33937c)=>{$[_0x4013('26')](_0x556162,async(_0x87acf4,_0x1ecdfd,_0x8d9b81)=>{try{if(_0x87acf4){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('5b'));subTitle+=_0x4013('1d')+$[_0x4013('13')]+_0x4013('5b');}else{let _0x4ea4a0=JSON[_0x4013('28')](_0x8d9b81);if(_0x4ea4a0[_0x4013('29')]==0x0){console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('5c'));}else{console[_0x4013('4')](_0x4013('1d')+$[_0x4013('13')]+_0x4013('5d')+_0x4ea4a0[_0x4013('3c')]);}}}catch(_0x1858b4){console[_0x4013('4')](_0x1858b4,_0x1ecdfd);}finally{_0x9ace0d();}});});}function Post_request(_0x3f5802,_0x56e2d){return{'\x75\x72\x6c':''+host+_0x3f5802,'\x68\x65\x61\x64\x65\x72\x73':{'User-Agent':soy_hc_UA,'Host':_0x4013('5e')},'\x62\x6f\x64\x79':_0x56e2d};};function Get_request(_0x2787b1){return{'\x75\x72\x6c':''+host+_0x2787b1,'\x68\x65\x61\x64\x65\x72\x73':{'User-Agent':soy_hc_UA,'Host':_0x4013('5e'),'info-di':soy_hc_info}};};function MD5_Encrypt(_0x20243e){function _0x59b19c(_0x20243e,_0x59b19c){return _0x20243e<<_0x59b19c|_0x20243e>>>0x20-_0x59b19c;}function _0x663bd7(_0x20243e,_0x59b19c){var _0x663bd7,_0x194c5d,_0x509694,_0x18d5f6,_0x5b863b;return _0x509694=0x80000000&_0x20243e,_0x18d5f6=0x80000000&_0x59b19c,_0x663bd7=0x40000000&_0x20243e,_0x194c5d=0x40000000&_0x59b19c,_0x5b863b=(0x3fffffff&_0x20243e)+(0x3fffffff&_0x59b19c),_0x663bd7&_0x194c5d?0x80000000^_0x5b863b^_0x509694^_0x18d5f6:_0x663bd7|_0x194c5d?0x40000000&_0x5b863b?0xc0000000^_0x5b863b^_0x509694^_0x18d5f6:0x40000000^_0x5b863b^_0x509694^_0x18d5f6:_0x5b863b^_0x509694^_0x18d5f6;}function _0x54f197(_0x20243e,_0x59b19c,_0x663bd7){return _0x20243e&_0x59b19c|~_0x20243e&_0x663bd7;}function _0x6e99cc(_0x20243e,_0x59b19c,_0x663bd7){return _0x20243e&_0x663bd7|_0x59b19c&~_0x663bd7;}function _0x1df5b9(_0x20243e,_0x59b19c,_0x663bd7){return _0x20243e^_0x59b19c^_0x663bd7;}function _0x2a11c0(_0x20243e,_0x59b19c,_0x663bd7){return _0x59b19c^(_0x20243e|~_0x663bd7);}function _0x10fbe7(_0x20243e,_0x6e99cc,_0x1df5b9,_0x2a11c0,_0x10fbe7,_0x1aafca,_0x252295){return _0x20243e=_0x663bd7(_0x20243e,_0x663bd7(_0x663bd7(_0x54f197(_0x6e99cc,_0x1df5b9,_0x2a11c0),_0x10fbe7),_0x252295)),_0x663bd7(_0x59b19c(_0x20243e,_0x1aafca),_0x6e99cc);}function _0x560498(_0x20243e,_0x54f197,_0x1df5b9,_0x2a11c0,_0x10fbe7,_0x560498,_0x17d978){return _0x20243e=_0x663bd7(_0x20243e,_0x663bd7(_0x663bd7(_0x6e99cc(_0x54f197,_0x1df5b9,_0x2a11c0),_0x10fbe7),_0x17d978)),_0x663bd7(_0x59b19c(_0x20243e,_0x560498),_0x54f197);}function _0x222f2b(_0x20243e,_0x54f197,_0x6e99cc,_0x2a11c0,_0x10fbe7,_0x560498,_0x222f2b){return _0x20243e=_0x663bd7(_0x20243e,_0x663bd7(_0x663bd7(_0x1df5b9(_0x54f197,_0x6e99cc,_0x2a11c0),_0x10fbe7),_0x222f2b)),_0x663bd7(_0x59b19c(_0x20243e,_0x560498),_0x54f197);}function _0x6713be(_0x20243e,_0x54f197,_0x6e99cc,_0x1df5b9,_0x10fbe7,_0x560498,_0x222f2b){return _0x20243e=_0x663bd7(_0x20243e,_0x663bd7(_0x663bd7(_0x2a11c0(_0x54f197,_0x6e99cc,_0x1df5b9),_0x10fbe7),_0x222f2b)),_0x663bd7(_0x59b19c(_0x20243e,_0x560498),_0x54f197);}function _0x2eacb4(_0x20243e){for(var _0x59b19c,_0x663bd7=_0x20243e[_0x4013('f')],_0x54f197=_0x663bd7+0x8,_0x6e99cc=(_0x54f197-_0x54f197%0x40)/0x40,_0x1df5b9=0x10*(_0x6e99cc+0x1),_0x2a11c0=new Array(_0x1df5b9-0x1),_0x10fbe7=0x0,_0x560498=0x0;_0x663bd7>_0x560498;)_0x59b19c=(_0x560498-_0x560498%0x4)/0x4,_0x10fbe7=_0x560498%0x4*0x8,_0x2a11c0[_0x59b19c]=_0x2a11c0[_0x59b19c]|_0x20243e[_0x4013('5f')](_0x560498)<<_0x10fbe7,_0x560498++;return _0x59b19c=(_0x560498-_0x560498%0x4)/0x4,_0x10fbe7=_0x560498%0x4*0x8,_0x2a11c0[_0x59b19c]=_0x2a11c0[_0x59b19c]|0x80<<_0x10fbe7,_0x2a11c0[_0x1df5b9-0x2]=_0x663bd7<<0x3,_0x2a11c0[_0x1df5b9-0x1]=_0x663bd7>>>0x1d,_0x2a11c0;}function _0x3e2cc8(_0x20243e){var _0x59b19c,_0x663bd7,_0x54f197='',_0x6e99cc='';for(_0x663bd7=0x0;0x3>=_0x663bd7;_0x663bd7++)_0x59b19c=_0x20243e>>>0x8*_0x663bd7&0xff,_0x6e99cc='\x30'+_0x59b19c[_0x4013('60')](0x10),_0x54f197+=_0x6e99cc[_0x4013('61')](_0x6e99cc[_0x4013('f')]-0x2,0x2);return _0x54f197;}function _0x2aaecb(_0x20243e){_0x20243e=_0x20243e[_0x4013('62')](/\r\n/g,'\x0a');for(var _0x59b19c='',_0x663bd7=0x0;_0x663bd7<_0x20243e[_0x4013('f')];_0x663bd7++){var _0x54f197=_0x20243e[_0x4013('5f')](_0x663bd7);0x80>_0x54f197?_0x59b19c+=String[_0x4013('63')](_0x54f197):_0x54f197>0x7f&&0x800>_0x54f197?(_0x59b19c+=String[_0x4013('63')](_0x54f197>>0x6|0xc0),_0x59b19c+=String[_0x4013('63')](0x3f&_0x54f197|0x80)):(_0x59b19c+=String[_0x4013('63')](_0x54f197>>0xc|0xe0),_0x59b19c+=String[_0x4013('63')](_0x54f197>>0x6&0x3f|0x80),_0x59b19c+=String[_0x4013('63')](0x3f&_0x54f197|0x80));}return _0x59b19c;}var _0xee740b,_0x4773c8,_0x2f76c8,_0x453b57,_0x98a12f,_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77=[],_0x595f8f=0x7,_0x530142=0xc,_0x5adbd8=0x11,_0x9165a0=0x16,_0x459fbf=0x5,_0x5968fb=0x9,_0x184333=0xe,_0x22bd7c=0x14,_0x2010cd=0x4,_0xbf075f=0xb,_0x71a8e0=0x10,_0x29dad4=0x17,_0x19967c=0x6,_0x508023=0xa,_0xdc9b36=0xf,_0x4e7bbc=0x15;for(_0x20243e=_0x2aaecb(_0x20243e),_0x6aff77=_0x2eacb4(_0x20243e),_0x5997fe=0x67452301,_0x39cf34=0xefcdab89,_0x496702=0x98badcfe,_0x5f262a=0x10325476,_0xee740b=0x0;_0xee740b<_0x6aff77[_0x4013('f')];_0xee740b+=0x10)_0x4773c8=_0x5997fe,_0x2f76c8=_0x39cf34,_0x453b57=_0x496702,_0x98a12f=_0x5f262a,_0x5997fe=_0x10fbe7(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0x0],_0x595f8f,0xd76aa478),_0x5f262a=_0x10fbe7(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0x1],_0x530142,0xe8c7b756),_0x496702=_0x10fbe7(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0x2],_0x5adbd8,0x242070db),_0x39cf34=_0x10fbe7(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0x3],_0x9165a0,0xc1bdceee),_0x5997fe=_0x10fbe7(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0x4],_0x595f8f,0xf57c0faf),_0x5f262a=_0x10fbe7(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0x5],_0x530142,0x4787c62a),_0x496702=_0x10fbe7(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0x6],_0x5adbd8,0xa8304613),_0x39cf34=_0x10fbe7(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0x7],_0x9165a0,0xfd469501),_0x5997fe=_0x10fbe7(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0x8],_0x595f8f,0x698098d8),_0x5f262a=_0x10fbe7(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0x9],_0x530142,0x8b44f7af),_0x496702=_0x10fbe7(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0xa],_0x5adbd8,0xffff5bb1),_0x39cf34=_0x10fbe7(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0xb],_0x9165a0,0x895cd7be),_0x5997fe=_0x10fbe7(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0xc],_0x595f8f,0x6b901122),_0x5f262a=_0x10fbe7(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0xd],_0x530142,0xfd987193),_0x496702=_0x10fbe7(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0xe],_0x5adbd8,0xa679438e),_0x39cf34=_0x10fbe7(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0xf],_0x9165a0,0x49b40821),_0x5997fe=_0x560498(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0x1],_0x459fbf,0xf61e2562),_0x5f262a=_0x560498(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0x6],_0x5968fb,0xc040b340),_0x496702=_0x560498(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0xb],_0x184333,0x265e5a51),_0x39cf34=_0x560498(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0x0],_0x22bd7c,0xe9b6c7aa),_0x5997fe=_0x560498(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0x5],_0x459fbf,0xd62f105d),_0x5f262a=_0x560498(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0xa],_0x5968fb,0x2441453),_0x496702=_0x560498(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0xf],_0x184333,0xd8a1e681),_0x39cf34=_0x560498(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0x4],_0x22bd7c,0xe7d3fbc8),_0x5997fe=_0x560498(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0x9],_0x459fbf,0x21e1cde6),_0x5f262a=_0x560498(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0xe],_0x5968fb,0xc33707d6),_0x496702=_0x560498(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0x3],_0x184333,0xf4d50d87),_0x39cf34=_0x560498(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0x8],_0x22bd7c,0x455a14ed),_0x5997fe=_0x560498(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0xd],_0x459fbf,0xa9e3e905),_0x5f262a=_0x560498(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0x2],_0x5968fb,0xfcefa3f8),_0x496702=_0x560498(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0x7],_0x184333,0x676f02d9),_0x39cf34=_0x560498(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0xc],_0x22bd7c,0x8d2a4c8a),_0x5997fe=_0x222f2b(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0x5],_0x2010cd,0xfffa3942),_0x5f262a=_0x222f2b(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0x8],_0xbf075f,0x8771f681),_0x496702=_0x222f2b(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0xb],_0x71a8e0,0x6d9d6122),_0x39cf34=_0x222f2b(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0xe],_0x29dad4,0xfde5380c),_0x5997fe=_0x222f2b(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0x1],_0x2010cd,0xa4beea44),_0x5f262a=_0x222f2b(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0x4],_0xbf075f,0x4bdecfa9),_0x496702=_0x222f2b(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0x7],_0x71a8e0,0xf6bb4b60),_0x39cf34=_0x222f2b(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0xa],_0x29dad4,0xbebfbc70),_0x5997fe=_0x222f2b(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0xd],_0x2010cd,0x289b7ec6),_0x5f262a=_0x222f2b(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0x0],_0xbf075f,0xeaa127fa),_0x496702=_0x222f2b(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0x3],_0x71a8e0,0xd4ef3085),_0x39cf34=_0x222f2b(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0x6],_0x29dad4,0x4881d05),_0x5997fe=_0x222f2b(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0x9],_0x2010cd,0xd9d4d039),_0x5f262a=_0x222f2b(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0xc],_0xbf075f,0xe6db99e5),_0x496702=_0x222f2b(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0xf],_0x71a8e0,0x1fa27cf8),_0x39cf34=_0x222f2b(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0x2],_0x29dad4,0xc4ac5665),_0x5997fe=_0x6713be(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0x0],_0x19967c,0xf4292244),_0x5f262a=_0x6713be(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0x7],_0x508023,0x432aff97),_0x496702=_0x6713be(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0xe],_0xdc9b36,0xab9423a7),_0x39cf34=_0x6713be(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0x5],_0x4e7bbc,0xfc93a039),_0x5997fe=_0x6713be(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0xc],_0x19967c,0x655b59c3),_0x5f262a=_0x6713be(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0x3],_0x508023,0x8f0ccc92),_0x496702=_0x6713be(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0xa],_0xdc9b36,0xffeff47d),_0x39cf34=_0x6713be(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0x1],_0x4e7bbc,0x85845dd1),_0x5997fe=_0x6713be(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0x8],_0x19967c,0x6fa87e4f),_0x5f262a=_0x6713be(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0xf],_0x508023,0xfe2ce6e0),_0x496702=_0x6713be(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0x6],_0xdc9b36,0xa3014314),_0x39cf34=_0x6713be(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0xd],_0x4e7bbc,0x4e0811a1),_0x5997fe=_0x6713be(_0x5997fe,_0x39cf34,_0x496702,_0x5f262a,_0x6aff77[_0xee740b+0x4],_0x19967c,0xf7537e82),_0x5f262a=_0x6713be(_0x5f262a,_0x5997fe,_0x39cf34,_0x496702,_0x6aff77[_0xee740b+0xb],_0x508023,0xbd3af235),_0x496702=_0x6713be(_0x496702,_0x5f262a,_0x5997fe,_0x39cf34,_0x6aff77[_0xee740b+0x2],_0xdc9b36,0x2ad7d2bb),_0x39cf34=_0x6713be(_0x39cf34,_0x496702,_0x5f262a,_0x5997fe,_0x6aff77[_0xee740b+0x9],_0x4e7bbc,0xeb86d391),_0x5997fe=_0x663bd7(_0x5997fe,_0x4773c8),_0x39cf34=_0x663bd7(_0x39cf34,_0x2f76c8),_0x496702=_0x663bd7(_0x496702,_0x453b57),_0x5f262a=_0x663bd7(_0x5f262a,_0x98a12f);var _0x1a7731=_0x3e2cc8(_0x5997fe)+_0x3e2cc8(_0x39cf34)+_0x3e2cc8(_0x496702)+_0x3e2cc8(_0x5f262a);return _0x1a7731[_0x4013('64')]();};_0xodK='jsjiami.com.v6';



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