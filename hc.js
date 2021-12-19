/*

软件名称:惠猜

项目注册地址:http://goodjob.juliym.com/yp/hc/invite-land?product=9166&inviteCode=PLG7BGNT

一个一次性奖励的app,登录后在设置界面绑定支付宝即可(点我的,上边中间有个头像点下即可绑定,下面那个数字就是变量的ID)

必要变量:

变量名 soy_hc_data
变量值 xxx&xxx
示例:ID&刷答题数量
注释:ID点我的界面,点右上角那个图标会看见一个ID,他后面数字就是,答题数量默认500次
注:每次答题间隔为1-4秒

多个号用 # 或 @ 或 换行 隔开

cron 25 10,13 * * * hc.js

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_hc.js

*/


const $ = new Env('惠猜');

const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodh='jsjiami.com.v6',_0xodh_=['_0xodh'],_0x28f7=[_0xodh,'\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x68\x63\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x68\x63\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x67\x65\x74\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u586b\u5199\u53d8\u91cf\u683c\u5f0f\u4e0d\u89c4\u8303','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x63\x68\x69\x63\x6b\x2e\x6a\x75\x6c\x69\x79\x6d\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x67\x75\x65\x73\x73\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u5c06\u7b54\u9898\u6570\u91cf\u3011\x3a\x20\x35\x30\x30\x20\u6b21','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x77\x61\x69\x74','\x20\u5c06\u7b54\u9898\u6570\u91cf\u3011\x3a\x20','\x67\x65\x74\x5f\x74\x61\x73\x6b\x3f\x75\x73\x65\x72\x49\x64\x3d','\x26\x70\x72\x6f\x64\x75\x63\x74\x49\x64\x3d\x39\x31\x36\x36\x26\x66\x6f\x72\x63\x65\x46\x65\x74\x63\x68\x49\x74\x65\x6d\x3d\x30\x26\x61\x70\x70\x53\x74\x61\x72\x74\x75\x70\x3d\x30\x26\x76\x65\x72\x73\x69\x6f\x6e\x3d\x31','\x67\x65\x74','\x20\u83b7\u53d6\u9898\u76ee\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x74\x61\x73\x6b','\x67\x6f\x6f\x64\x73','\x74\x69\x74\x6c\x65','\x74\x61\x73\x6b\x49\x64','\x66\x70\x72\x69\x63\x65','\x72\x65\x73\x75\x6c\x74','\x63\x75\x72\x41\x63\x74\x69\x6f\x6e\x53\x74\x61\x74\x75\x73','\x67\x67\x74\x73\x63','\x74\x6f\x64\x61\x79\x42\x61\x6c\x61\x6e\x63\x65','\x20\u4eca\u65e5\u72b6\u6001\u3011\x3a\x20\x0a\u7b54\u9898\u6210\u529f\uff1a','\x0a\u7ea2\u5305\u6570\u91cf\uff1a','\x20\u83b7\u53d6\u9898\u76ee\u3011\x3a\x20','\x26\x62\x69\x64\x3d','\x26\x74\x73\x3d','\x26\x73\x69\x67\x6e\x3d','\x69\x62\x6f\x6f\x6b\x73\x74\x61\x72\x40\x67\x75\x65\x73\x73\x2e\x63\x6f\x6d','\x20\u83b7\u53d6\u9898\u76ee\u3011\x3a\x20\u672a\u77e5\u72b6\u6001\x2c','\x6d\x65\x73\x73\x61\x67\x65','\x70\x6f\x73\x74\x5f\x74\x61\x73\x6b\x3f\x75\x73\x65\x72\x49\x64\x3d','\x26\x70\x72\x6f\x64\x75\x63\x74\x49\x64\x3d\x39\x31\x36\x36\x26\x74\x61\x73\x6b\x49\x64\x3d','\x26\x76\x65\x72\x73\x69\x6f\x6e\x3d\x31','\x20\u7b54\u9898\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7b54\u9898\u3011\x3a\x20\u7b54\u9898\u6210\u529f','\x20\u7b54\u9898\u3011\x3a\x20','\x70\x6f\x73\x74\x5f\x61\x64\x64\x5f\x67\x6f\x6f\x64\x73\x3f\x75\x73\x65\x72\x49\x64\x3d','\x26\x63\x6c\x69\x63\x6b\x65\x64\x3d\x31\x26\x76\x65\x72\x73\x69\x6f\x6e\x3d\x31','\x20\u589e\u52a0\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u589e\u52a0\u5e7f\u544a\u3011\x3a\x20\u4ee5\u6ca1\u6709\u5e93\u5b58\x2c\u8bf7\u660e\u5929\x36\u70b9\u540e\u518d\u8bd5\x20','\x20\u589e\u52a0\u5e7f\u544a\u3011\x3a\x20','\x67\x65\x74\x5f\x6c\x61\x73\x74\x5f\x67\x75\x65\x73\x73\x5f\x72\x65\x73\x75\x6c\x74\x3f\x75\x73\x65\x72\x49\x64\x3d','\x20\u7b54\u9898\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x67\x75\x65\x73\x73\x52\x65\x73\x75\x6c\x74','\x20\u7b54\u9898\u5956\u52b1\u3011\x3a\x20','\x70\x6f\x73\x74\x5f\x61\x64\x3f\x75\x73\x65\x72\x49\x64\x3d','\x26\x63\x6c\x69\x63\x6b\x65\x64\x3d\x30\x26\x76\x65\x72\x73\x69\x6f\x6e\x3d\x31','\x20\u9886\u53d6\u7b54\u9898\u7ea2\u5305\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u9886\u53d6\u7b54\u9898\u7ea2\u5305\u3011\x3a\x20\u6210\u529f','\x20\u9886\u53d6\u7b54\u9898\u7ea2\u5305\u3011\x3a\x20','\x76\x69\x65\x77\x5f\x74\x61\x73\x6b\x5f\x61\x64\x5f\x72\x65\x70\x6f\x72\x74\x3f\x75\x73\x65\x72\x49\x64\x3d','\x26\x70\x72\x6f\x64\x75\x63\x74\x49\x64\x3d\x39\x31\x36\x36\x26\x74\x61\x73\x6b\x49\x64\x3d\x39\x26\x74\x73\x3d','\x20\u770b\u89c6\u9891\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u770b\u89c6\u9891\u3011\x3a\x20\u89c2\u770b\u89c6\u9891\u6210\u529f','\x20\u770b\u89c6\u9891\u3011\x3a\x20','\x63\x68\x69\x63\x6b\x2e\x6a\x75\x6c\x69\x79\x6d\x2e\x63\x6f\x6d','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72','\x72\x65\x70\x6c\x61\x63\x65','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x68\x64\x43\x56\x6a\x77\x73\x59\x48\x6a\x69\x61\x6d\x51\x69\x2e\x42\x62\x63\x54\x6f\x64\x48\x42\x6d\x7a\x68\x2e\x76\x36\x3d\x3d'];function _0x4a9d(_0x2d8f05,_0x4b81bb){_0x2d8f05=~~'0x'['concat'](_0x2d8f05['slice'](0x0));var _0x34a12b=_0x28f7[_0x2d8f05];return _0x34a12b;};(function(_0x36c6a6,_0x33748d){var _0x3e4c21=0x0;for(_0x33748d=_0x36c6a6['shift'](_0x3e4c21>>0x2);_0x33748d&&_0x33748d!==(_0x36c6a6['pop'](_0x3e4c21>>0x3)+'')['replace'](/[hdCVwYHQBbTdHBzh=]/g,'');_0x3e4c21++){_0x3e4c21=_0x3e4c21^0xc4a5a;}}(_0x28f7,_0x4a9d));let app_soy_hc_data=[],soy_hc_UA='';!(async()=>{if(typeof $request!==_0x4a9d('0')){await get_appdata();}if($[_0x4a9d('1')]()){if(!process[_0x4a9d('2')][_0x4a9d('3')]){console[_0x4a9d('4')](_0x4a9d('5'));return;}if(process[_0x4a9d('2')][_0x4a9d('3')]&&process[_0x4a9d('2')][_0x4a9d('3')][_0x4a9d('6')]('\x0a')>-0x1){app_soy_hc_data=process[_0x4a9d('2')][_0x4a9d('3')][_0x4a9d('7')]('\x0a');}else if(process[_0x4a9d('2')][_0x4a9d('3')]&&process[_0x4a9d('2')][_0x4a9d('3')][_0x4a9d('6')]('\x23')>-0x1){app_soy_hc_data=process[_0x4a9d('2')][_0x4a9d('3')][_0x4a9d('7')]('\x23');}else if(process[_0x4a9d('2')][_0x4a9d('3')]&&process[_0x4a9d('2')][_0x4a9d('3')][_0x4a9d('6')]('\x40')>-0x1){app_soy_hc_data=process[_0x4a9d('2')][_0x4a9d('3')][_0x4a9d('7')]('\x40');}else{app_soy_hc_data=process[_0x4a9d('2')][_0x4a9d('3')][_0x4a9d('7')]();};}else{if(!$[_0x4a9d('8')](_0x4a9d('3'))){console[_0x4a9d('4')](_0x4a9d('5'));return;}if($[_0x4a9d('8')](_0x4a9d('3'))&&$[_0x4a9d('8')](_0x4a9d('3'))[_0x4a9d('6')]('\x23')>-0x1){app_soy_hc_data=$[_0x4a9d('8')](_0x4a9d('3'))[_0x4a9d('7')]('\x40');}else if($[_0x4a9d('8')](_0x4a9d('3'))&&$[_0x4a9d('8')](_0x4a9d('3'))[_0x4a9d('6')]('\x0a')>-0x1){app_soy_hc_data=$[_0x4a9d('8')](_0x4a9d('3'))[_0x4a9d('7')]('\x0a');}else if($[_0x4a9d('8')](_0x4a9d('3'))&&$[_0x4a9d('8')](_0x4a9d('3'))[_0x4a9d('6')]('\x40')>-0x1){app_soy_hc_data=$[_0x4a9d('8')](_0x4a9d('3'))[_0x4a9d('7')]('\x40');}else{app_soy_hc_data=$[_0x4a9d('8')](_0x4a9d('3'))[_0x4a9d('7')]();};}console[_0x4a9d('4')](_0x4a9d('9')+new Date(new Date()[_0x4a9d('a')]()+new Date()[_0x4a9d('b')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x4a9d('c')]()+_0x4a9d('d'));console[_0x4a9d('4')](_0x4a9d('e')+app_soy_hc_data[_0x4a9d('f')]+_0x4a9d('10'));subTitle='';for(i=0x0;i<app_soy_hc_data[_0x4a9d('f')];i++){soy_hc_data=app_soy_hc_data[i][_0x4a9d('7')]('\x26');soy_hc_userId=soy_hc_data[0x0];soy_hc_answers_num=soy_hc_data[0x1];if(!soy_hc_userId){console[_0x4a9d('4')](_0x4a9d('11'));return;}if(!soy_hc_UA){soy_hc_UA=_0x4a9d('12');}$[_0x4a9d('13')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x4a9d('14')]($[_0x4a9d('15')],subTitle);}}})()[_0x4a9d('16')](_0x15284a=>$[_0x4a9d('17')](_0x15284a))[_0x4a9d('18')](()=>$[_0x4a9d('19')]());async function implement(){host=_0x4a9d('1a');console[_0x4a9d('4')](_0x4a9d('1b')+$[_0x4a9d('13')]+_0x4a9d('1c'));Topic_status=0x1;if(!soy_hc_answers_num){console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('1e'));for(let _0x3a9610=0x0;_0x3a9610<0x1f4&&Topic_status==0x1;_0x3a9610++){await soy_hc_get_task();let _0x16a5e9=Math[_0x4a9d('1f')](Math[_0x4a9d('20')]()*(0xbb8-0xbb8+0x3e8)+0x3e8);await $[_0x4a9d('21')](_0x16a5e9);}}else{console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('22')+soy_hc_answers_num+'\x20\u6b21');for(let _0x57a9fa=0x0;_0x57a9fa<soy_hc_answers_num&&Topic_status==0x1;_0x57a9fa++){await soy_hc_get_task();let _0x16a5e9=Math[_0x4a9d('1f')](Math[_0x4a9d('20')]()*(0xbb8-0x3e8+0x3e8)+0x3e8);await $[_0x4a9d('21')](_0x16a5e9);}}}function soy_hc_get_task(){let _0x553642=Get_request(_0x4a9d('23')+soy_hc_userId+_0x4a9d('24'));return new Promise((_0x789120,_0x3f50f0)=>{$[_0x4a9d('25')](_0x553642,async(_0x3adefa,_0x27dce9,_0x48a027)=>{try{if(_0x3adefa){console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('26'));subTitle+=_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('26');}else{let _0x43347b=JSON[_0x4a9d('27')](_0x48a027);if(_0x43347b[_0x4a9d('28')]==0x0){let _0x1b5f3e=_0x43347b[_0x4a9d('29')][_0x4a9d('2a')][_0x4a9d('2b')][_0x4a9d('2c')];let _0xecad2c=_0x43347b[_0x4a9d('29')][_0x4a9d('2a')][_0x4a9d('2d')];let _0x43bc3e=_0x43347b[_0x4a9d('29')][_0x4a9d('2a')][_0x4a9d('2b')][_0x4a9d('2e')];let _0x4baf09=_0x43347b[_0x4a9d('29')][_0x4a9d('2a')][_0x4a9d('2f')];let _0x589025=_0x43347b[_0x4a9d('29')][_0x4a9d('2a')][_0x4a9d('2b')][_0x4a9d('30')];let _0x598147=_0x43347b[_0x4a9d('29')][_0x4a9d('31')];let _0x357ba3=_0x43347b[_0x4a9d('29')][_0x4a9d('32')];let _0x5900d9=new Date()[_0x4a9d('a')]();if(_0x4baf09==0x0){console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('33')+_0x598147+_0x4a9d('34')+_0x357ba3);soy_hc_answers_num;console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('35')+_0x1b5f3e);await soy_hc_post_task(_0xecad2c+_0x4a9d('36')+_0x43bc3e+_0x4a9d('37')+_0x5900d9+_0x4a9d('38')+MD5_Encrypt(''+soy_hc_userId+_0xecad2c+_0x43bc3e+_0x5900d9+_0x4a9d('39')));}else if(_0x4baf09==0x1&&_0x589025==0x0){await soy_hc_post_add_goods(_0x5900d9+_0x4a9d('38')+MD5_Encrypt(''+soy_hc_userId+_0x5900d9+_0x4a9d('39')));}else if(_0x4baf09==0x1&&_0x589025==0x1){await soy_hc_get_last_guess_result();}else if(_0x4baf09==0xa&&_0x589025==0x0){await soy_hc_post_add_goods(_0x5900d9+_0x4a9d('38')+MD5_Encrypt(''+soy_hc_userId+_0x5900d9+_0x4a9d('39')));}else{console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('3a')+_0x4baf09+'\x2c'+_0x589025+'\x7d');}}else{console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('35')+_0x43347b[_0x4a9d('3b')]);}}}catch(_0x149866){console[_0x4a9d('4')](_0x149866,_0x27dce9);}finally{_0x789120();}});});}function soy_hc_post_task(_0x2bb689){let _0x5de8d1=Get_request(_0x4a9d('3c')+soy_hc_userId+_0x4a9d('3d')+_0x2bb689+_0x4a9d('3e'));return new Promise((_0x107eeb,_0x453fa4)=>{$[_0x4a9d('25')](_0x5de8d1,async(_0x40ab7a,_0x4bb28c,_0x2bb689)=>{try{if(_0x40ab7a){console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('3f'));subTitle+=_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('3f');}else{let _0x106fb5=JSON[_0x4a9d('27')](_0x2bb689);if(_0x106fb5[_0x4a9d('28')]==0x0){console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('40'));}else{console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('41')+_0x106fb5[_0x4a9d('3b')]);}}}catch(_0xa9e998){console[_0x4a9d('4')](_0xa9e998,_0x4bb28c);}finally{_0x107eeb();}});});}function soy_hc_post_add_goods(_0x20f9be){let _0x10e5fb=Get_request(_0x4a9d('42')+soy_hc_userId+_0x4a9d('37')+_0x20f9be+_0x4a9d('43'));return new Promise((_0xcb0ce3,_0xfdad3c)=>{$[_0x4a9d('25')](_0x10e5fb,async(_0x4a7649,_0x234137,_0x20f9be)=>{try{if(_0x4a7649){console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('44'));subTitle+=_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('44');}else{let _0x379023=JSON[_0x4a9d('27')](_0x20f9be);if(_0x379023[_0x4a9d('28')]==0x0){if(_0x379023[_0x4a9d('29')]==0x0){console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('45'));Topic_status=0x0;}else{console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('46')+_0x379023[_0x4a9d('29')]);Topic_status=0x1;await $[_0x4a9d('21')](Math[_0x4a9d('1f')](Math[_0x4a9d('20')]()*(0xbb8-0x3e8+0x3e8)+0x3e8));await soy_hc_get_task();}}else{console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('46')+_0x379023[_0x4a9d('3b')]);}}}catch(_0x3aeb25){console[_0x4a9d('4')](_0x3aeb25,_0x234137);}finally{_0xcb0ce3();}});});}function soy_hc_get_last_guess_result(){let _0x5cac6f=Get_request(_0x4a9d('47')+soy_hc_userId+_0x4a9d('3e'));return new Promise((_0x1c906d,_0x31c5d2)=>{$[_0x4a9d('25')](_0x5cac6f,async(_0x29299b,_0x161b7a,_0x55e303)=>{try{if(_0x29299b){console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('48'));subTitle+=_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('48');}else{let _0xfc62e3=JSON[_0x4a9d('27')](_0x55e303);if(_0xfc62e3[_0x4a9d('28')]==0x0){let _0xbf19db=_0xfc62e3[_0x4a9d('29')][_0x4a9d('49')][_0x4a9d('2d')];let _0x175fad=new Date()[_0x4a9d('a')]();await soy_hc_post_ad(_0xbf19db+_0x4a9d('37')+_0x175fad+_0x4a9d('38')+MD5_Encrypt(''+soy_hc_userId+_0xbf19db+_0x175fad+_0x4a9d('39')));}else{console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('4a')+_0xfc62e3[_0x4a9d('3b')]);}}}catch(_0x1e915e){console[_0x4a9d('4')](_0x1e915e,_0x161b7a);}finally{_0x1c906d();}});});}function soy_hc_post_ad(_0x29c1f2){let _0x1d27e8=Get_request(_0x4a9d('4b')+soy_hc_userId+_0x4a9d('3d')+_0x29c1f2+_0x4a9d('4c'));return new Promise((_0x5c6f81,_0x1d1520)=>{$[_0x4a9d('25')](_0x1d27e8,async(_0x156ca5,_0x43eced,_0x29c1f2)=>{try{if(_0x156ca5){console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('4d'));subTitle+=_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('4d');}else{let _0x56e908=JSON[_0x4a9d('27')](_0x29c1f2);if(_0x56e908[_0x4a9d('28')]==0x0){console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('4e'));}else{console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('4f')+_0x56e908[_0x4a9d('3b')]);}}}catch(_0x589a64){console[_0x4a9d('4')](_0x589a64,_0x43eced);}finally{_0x5c6f81();}});});}function soy_hc_view_task_ad_report(){let _0x520ce3=new Date()[_0x4a9d('a')]();let _0x44728f=Get_request(_0x4a9d('50')+soy_hc_userId+_0x4a9d('51')+_0x520ce3+_0x4a9d('38')+MD5_Encrypt(''+soy_hc_userId+_0x520ce3+_0x4a9d('39'))+_0x4a9d('4c'));return new Promise((_0x4f1c4d,_0x13bd9b)=>{$[_0x4a9d('25')](_0x44728f,async(_0x1ddb05,_0x111ea9,_0x3d02ba)=>{try{if(_0x1ddb05){console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('52'));subTitle+=_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('52');}else{let _0x37c3d1=JSON[_0x4a9d('27')](_0x3d02ba);if(_0x37c3d1[_0x4a9d('28')]==0x0){console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('53'));}else{console[_0x4a9d('4')](_0x4a9d('1d')+$[_0x4a9d('13')]+_0x4a9d('54')+_0x37c3d1[_0x4a9d('3b')]);}}}catch(_0x519ced){console[_0x4a9d('4')](_0x519ced,_0x111ea9);}finally{_0x4f1c4d();}});});}function Post_request(_0x645909,_0xa7f542){return{'\x75\x72\x6c':''+host+_0x645909,'\x68\x65\x61\x64\x65\x72\x73':{'User-Agent':soy_hc_UA,'Host':_0x4a9d('55')},'\x62\x6f\x64\x79':_0xa7f542};};function Get_request(_0x1122f4){return{'\x75\x72\x6c':''+host+_0x1122f4,'\x68\x65\x61\x64\x65\x72\x73':{'User-Agent':soy_hc_UA,'Host':_0x4a9d('55')}};};function MD5_Encrypt(_0x236046){function _0x25f501(_0x236046,_0x25f501){return _0x236046<<_0x25f501|_0x236046>>>0x20-_0x25f501;}function _0x183ab7(_0x236046,_0x25f501){var _0x183ab7,_0x3314cf,_0x31f061,_0x400db9,_0x422a01;return _0x31f061=0x80000000&_0x236046,_0x400db9=0x80000000&_0x25f501,_0x183ab7=0x40000000&_0x236046,_0x3314cf=0x40000000&_0x25f501,_0x422a01=(0x3fffffff&_0x236046)+(0x3fffffff&_0x25f501),_0x183ab7&_0x3314cf?0x80000000^_0x422a01^_0x31f061^_0x400db9:_0x183ab7|_0x3314cf?0x40000000&_0x422a01?0xc0000000^_0x422a01^_0x31f061^_0x400db9:0x40000000^_0x422a01^_0x31f061^_0x400db9:_0x422a01^_0x31f061^_0x400db9;}function _0x4ac3fb(_0x236046,_0x25f501,_0x183ab7){return _0x236046&_0x25f501|~_0x236046&_0x183ab7;}function _0x206f7a(_0x236046,_0x25f501,_0x183ab7){return _0x236046&_0x183ab7|_0x25f501&~_0x183ab7;}function _0x4bcd52(_0x236046,_0x25f501,_0x183ab7){return _0x236046^_0x25f501^_0x183ab7;}function _0x539817(_0x236046,_0x25f501,_0x183ab7){return _0x25f501^(_0x236046|~_0x183ab7);}function _0x4fca73(_0x236046,_0x206f7a,_0x4bcd52,_0x539817,_0x4fca73,_0xbacd3e,_0x54b59a){return _0x236046=_0x183ab7(_0x236046,_0x183ab7(_0x183ab7(_0x4ac3fb(_0x206f7a,_0x4bcd52,_0x539817),_0x4fca73),_0x54b59a)),_0x183ab7(_0x25f501(_0x236046,_0xbacd3e),_0x206f7a);}function _0x5eea97(_0x236046,_0x4ac3fb,_0x4bcd52,_0x539817,_0x4fca73,_0x5eea97,_0x53fdd4){return _0x236046=_0x183ab7(_0x236046,_0x183ab7(_0x183ab7(_0x206f7a(_0x4ac3fb,_0x4bcd52,_0x539817),_0x4fca73),_0x53fdd4)),_0x183ab7(_0x25f501(_0x236046,_0x5eea97),_0x4ac3fb);}function _0x3feaab(_0x236046,_0x4ac3fb,_0x206f7a,_0x539817,_0x4fca73,_0x5eea97,_0x3feaab){return _0x236046=_0x183ab7(_0x236046,_0x183ab7(_0x183ab7(_0x4bcd52(_0x4ac3fb,_0x206f7a,_0x539817),_0x4fca73),_0x3feaab)),_0x183ab7(_0x25f501(_0x236046,_0x5eea97),_0x4ac3fb);}function _0x5af85d(_0x236046,_0x4ac3fb,_0x206f7a,_0x4bcd52,_0x4fca73,_0x5eea97,_0x3feaab){return _0x236046=_0x183ab7(_0x236046,_0x183ab7(_0x183ab7(_0x539817(_0x4ac3fb,_0x206f7a,_0x4bcd52),_0x4fca73),_0x3feaab)),_0x183ab7(_0x25f501(_0x236046,_0x5eea97),_0x4ac3fb);}function _0x432b5f(_0x236046){for(var _0x25f501,_0x183ab7=_0x236046[_0x4a9d('f')],_0x4ac3fb=_0x183ab7+0x8,_0x206f7a=(_0x4ac3fb-_0x4ac3fb%0x40)/0x40,_0x4bcd52=0x10*(_0x206f7a+0x1),_0x539817=new Array(_0x4bcd52-0x1),_0x4fca73=0x0,_0x5eea97=0x0;_0x183ab7>_0x5eea97;)_0x25f501=(_0x5eea97-_0x5eea97%0x4)/0x4,_0x4fca73=_0x5eea97%0x4*0x8,_0x539817[_0x25f501]=_0x539817[_0x25f501]|_0x236046[_0x4a9d('56')](_0x5eea97)<<_0x4fca73,_0x5eea97++;return _0x25f501=(_0x5eea97-_0x5eea97%0x4)/0x4,_0x4fca73=_0x5eea97%0x4*0x8,_0x539817[_0x25f501]=_0x539817[_0x25f501]|0x80<<_0x4fca73,_0x539817[_0x4bcd52-0x2]=_0x183ab7<<0x3,_0x539817[_0x4bcd52-0x1]=_0x183ab7>>>0x1d,_0x539817;}function _0x1fd42b(_0x236046){var _0x25f501,_0x183ab7,_0x4ac3fb='',_0x206f7a='';for(_0x183ab7=0x0;0x3>=_0x183ab7;_0x183ab7++)_0x25f501=_0x236046>>>0x8*_0x183ab7&0xff,_0x206f7a='\x30'+_0x25f501[_0x4a9d('57')](0x10),_0x4ac3fb+=_0x206f7a[_0x4a9d('58')](_0x206f7a[_0x4a9d('f')]-0x2,0x2);return _0x4ac3fb;}function _0x337e58(_0x236046){_0x236046=_0x236046[_0x4a9d('59')](/\r\n/g,'\x0a');for(var _0x25f501='',_0x183ab7=0x0;_0x183ab7<_0x236046[_0x4a9d('f')];_0x183ab7++){var _0x4ac3fb=_0x236046[_0x4a9d('56')](_0x183ab7);0x80>_0x4ac3fb?_0x25f501+=String[_0x4a9d('5a')](_0x4ac3fb):_0x4ac3fb>0x7f&&0x800>_0x4ac3fb?(_0x25f501+=String[_0x4a9d('5a')](_0x4ac3fb>>0x6|0xc0),_0x25f501+=String[_0x4a9d('5a')](0x3f&_0x4ac3fb|0x80)):(_0x25f501+=String[_0x4a9d('5a')](_0x4ac3fb>>0xc|0xe0),_0x25f501+=String[_0x4a9d('5a')](_0x4ac3fb>>0x6&0x3f|0x80),_0x25f501+=String[_0x4a9d('5a')](0x3f&_0x4ac3fb|0x80));}return _0x25f501;}var _0x58dac3,_0x29892a,_0x189c37,_0x5ac991,_0x53621a,_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19=[],_0x3e5fa6=0x7,_0x4485fe=0xc,_0x4b590d=0x11,_0x14b76f=0x16,_0x13d9d8=0x5,_0x573e62=0x9,_0x3b643f=0xe,_0x231c85=0x14,_0x595d3d=0x4,_0x5e7083=0xb,_0x5cc5c9=0x10,_0x2a0c79=0x17,_0x30d58f=0x6,_0x182517=0xa,_0x21588c=0xf,_0x74c16c=0x15;for(_0x236046=_0x337e58(_0x236046),_0x279f19=_0x432b5f(_0x236046),_0x28c02f=0x67452301,_0x531ab9=0xefcdab89,_0x319062=0x98badcfe,_0x3c58e0=0x10325476,_0x58dac3=0x0;_0x58dac3<_0x279f19[_0x4a9d('f')];_0x58dac3+=0x10)_0x29892a=_0x28c02f,_0x189c37=_0x531ab9,_0x5ac991=_0x319062,_0x53621a=_0x3c58e0,_0x28c02f=_0x4fca73(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0x0],_0x3e5fa6,0xd76aa478),_0x3c58e0=_0x4fca73(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0x1],_0x4485fe,0xe8c7b756),_0x319062=_0x4fca73(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0x2],_0x4b590d,0x242070db),_0x531ab9=_0x4fca73(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0x3],_0x14b76f,0xc1bdceee),_0x28c02f=_0x4fca73(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0x4],_0x3e5fa6,0xf57c0faf),_0x3c58e0=_0x4fca73(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0x5],_0x4485fe,0x4787c62a),_0x319062=_0x4fca73(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0x6],_0x4b590d,0xa8304613),_0x531ab9=_0x4fca73(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0x7],_0x14b76f,0xfd469501),_0x28c02f=_0x4fca73(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0x8],_0x3e5fa6,0x698098d8),_0x3c58e0=_0x4fca73(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0x9],_0x4485fe,0x8b44f7af),_0x319062=_0x4fca73(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0xa],_0x4b590d,0xffff5bb1),_0x531ab9=_0x4fca73(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0xb],_0x14b76f,0x895cd7be),_0x28c02f=_0x4fca73(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0xc],_0x3e5fa6,0x6b901122),_0x3c58e0=_0x4fca73(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0xd],_0x4485fe,0xfd987193),_0x319062=_0x4fca73(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0xe],_0x4b590d,0xa679438e),_0x531ab9=_0x4fca73(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0xf],_0x14b76f,0x49b40821),_0x28c02f=_0x5eea97(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0x1],_0x13d9d8,0xf61e2562),_0x3c58e0=_0x5eea97(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0x6],_0x573e62,0xc040b340),_0x319062=_0x5eea97(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0xb],_0x3b643f,0x265e5a51),_0x531ab9=_0x5eea97(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0x0],_0x231c85,0xe9b6c7aa),_0x28c02f=_0x5eea97(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0x5],_0x13d9d8,0xd62f105d),_0x3c58e0=_0x5eea97(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0xa],_0x573e62,0x2441453),_0x319062=_0x5eea97(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0xf],_0x3b643f,0xd8a1e681),_0x531ab9=_0x5eea97(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0x4],_0x231c85,0xe7d3fbc8),_0x28c02f=_0x5eea97(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0x9],_0x13d9d8,0x21e1cde6),_0x3c58e0=_0x5eea97(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0xe],_0x573e62,0xc33707d6),_0x319062=_0x5eea97(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0x3],_0x3b643f,0xf4d50d87),_0x531ab9=_0x5eea97(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0x8],_0x231c85,0x455a14ed),_0x28c02f=_0x5eea97(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0xd],_0x13d9d8,0xa9e3e905),_0x3c58e0=_0x5eea97(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0x2],_0x573e62,0xfcefa3f8),_0x319062=_0x5eea97(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0x7],_0x3b643f,0x676f02d9),_0x531ab9=_0x5eea97(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0xc],_0x231c85,0x8d2a4c8a),_0x28c02f=_0x3feaab(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0x5],_0x595d3d,0xfffa3942),_0x3c58e0=_0x3feaab(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0x8],_0x5e7083,0x8771f681),_0x319062=_0x3feaab(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0xb],_0x5cc5c9,0x6d9d6122),_0x531ab9=_0x3feaab(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0xe],_0x2a0c79,0xfde5380c),_0x28c02f=_0x3feaab(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0x1],_0x595d3d,0xa4beea44),_0x3c58e0=_0x3feaab(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0x4],_0x5e7083,0x4bdecfa9),_0x319062=_0x3feaab(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0x7],_0x5cc5c9,0xf6bb4b60),_0x531ab9=_0x3feaab(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0xa],_0x2a0c79,0xbebfbc70),_0x28c02f=_0x3feaab(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0xd],_0x595d3d,0x289b7ec6),_0x3c58e0=_0x3feaab(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0x0],_0x5e7083,0xeaa127fa),_0x319062=_0x3feaab(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0x3],_0x5cc5c9,0xd4ef3085),_0x531ab9=_0x3feaab(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0x6],_0x2a0c79,0x4881d05),_0x28c02f=_0x3feaab(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0x9],_0x595d3d,0xd9d4d039),_0x3c58e0=_0x3feaab(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0xc],_0x5e7083,0xe6db99e5),_0x319062=_0x3feaab(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0xf],_0x5cc5c9,0x1fa27cf8),_0x531ab9=_0x3feaab(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0x2],_0x2a0c79,0xc4ac5665),_0x28c02f=_0x5af85d(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0x0],_0x30d58f,0xf4292244),_0x3c58e0=_0x5af85d(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0x7],_0x182517,0x432aff97),_0x319062=_0x5af85d(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0xe],_0x21588c,0xab9423a7),_0x531ab9=_0x5af85d(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0x5],_0x74c16c,0xfc93a039),_0x28c02f=_0x5af85d(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0xc],_0x30d58f,0x655b59c3),_0x3c58e0=_0x5af85d(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0x3],_0x182517,0x8f0ccc92),_0x319062=_0x5af85d(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0xa],_0x21588c,0xffeff47d),_0x531ab9=_0x5af85d(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0x1],_0x74c16c,0x85845dd1),_0x28c02f=_0x5af85d(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0x8],_0x30d58f,0x6fa87e4f),_0x3c58e0=_0x5af85d(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0xf],_0x182517,0xfe2ce6e0),_0x319062=_0x5af85d(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0x6],_0x21588c,0xa3014314),_0x531ab9=_0x5af85d(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0xd],_0x74c16c,0x4e0811a1),_0x28c02f=_0x5af85d(_0x28c02f,_0x531ab9,_0x319062,_0x3c58e0,_0x279f19[_0x58dac3+0x4],_0x30d58f,0xf7537e82),_0x3c58e0=_0x5af85d(_0x3c58e0,_0x28c02f,_0x531ab9,_0x319062,_0x279f19[_0x58dac3+0xb],_0x182517,0xbd3af235),_0x319062=_0x5af85d(_0x319062,_0x3c58e0,_0x28c02f,_0x531ab9,_0x279f19[_0x58dac3+0x2],_0x21588c,0x2ad7d2bb),_0x531ab9=_0x5af85d(_0x531ab9,_0x319062,_0x3c58e0,_0x28c02f,_0x279f19[_0x58dac3+0x9],_0x74c16c,0xeb86d391),_0x28c02f=_0x183ab7(_0x28c02f,_0x29892a),_0x531ab9=_0x183ab7(_0x531ab9,_0x189c37),_0x319062=_0x183ab7(_0x319062,_0x5ac991),_0x3c58e0=_0x183ab7(_0x3c58e0,_0x53621a);var _0x4a64f0=_0x1fd42b(_0x28c02f)+_0x1fd42b(_0x531ab9)+_0x1fd42b(_0x319062)+_0x1fd42b(_0x3c58e0);return _0x4a64f0[_0x4a9d('5b')]();};_0xodh='jsjiami.com.v6';



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