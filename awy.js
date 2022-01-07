/*

软件名称:爱微影

项目注册地址:http://api.awy2020.com/h5/share/i/gJzQvqsAx67JW

一天多少钱好像随机的,大概一个会有0.3+
需要要授权微信提现

必要变量:(抓包找https://api.awy2020.com/api/这种连接)

变量名 soy_awy_data

变量值 xxx&xxx&xxx

注释:抓包请求头上platform值&抓包请求头上的version值&抓包请求头上的authorization值

注意:
此app对vpn和抓包等比较苛刻,真机需要根证书,v2p我测试时抓不到数据,自行测试,虚拟机,模拟器也时无网络


多个号用 # 或 换行 隔开

cron "25 10,13 * * *"

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_awy.js

*/


const $ = new Env('爱微影');
const notify = $.isNode() ? require('./sendNotify') : '';
// @grant require
const crypto = require('crypto-js')

var _js='jsjiami.com.v6',_js_=['_js'],a=[_js,'\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x61\x77\x79\x5f\x64\x61\x74\x61','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x61\x77\x79\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x67\x65\x74\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x61\x77\x79\x32\x30\x32\x30\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x70\x72\x6f\x66\x69\x6c\x65','\x67\x65\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u6b64\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u8be5\u5e73\u53f0\u670d\u52a1\u5668','\x70\x61\x72\x73\x65','\x72\x65\x73\x75\x6c\x74','\x64\x61\x74\x61','\x62\x61\x6c\x61\x6e\x63\x65\x5f\x77\x61\x6c\x6c\x65\x74','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u7528\u6237\x49\x44\uff1a','\x0a\x2d\x2d\x2d\u4f59\u989d\uff1a','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x55\x6e\x61\x75\x74\x68\x65\x6e\x74\x69\x63\x61\x74\x65\x64','\x20\u53d8\u91cf\u8fc7\u671f\u63d0\u793a\u3011\x3a\x20\u53d8\u91cf\u4e2d\x20\x61\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e\x20\u503c\u5df2\u8fc7\u671f','\x61\x64\x76\x65\x72\x74\x69\x73\x65\x6d\x65\x6e\x74\x2f\x69\x6e\x64\x65\x78','\x20\u4eca\u65e5\u4efb\u52a1\u72b6\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u6b64\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u8be5\u5e73\u53f0\u670d\u52a1\u5668','\x6d\x61\x78','\x63\x75\x72\x72\x65\x6e\x74','\x20\u4eca\u65e5\u4efb\u52a1\u72b6\u3011\x3a\x20','\x72\x65\x64\x65\x6e\x76\x65\x6c\x6f\x70\x65\x2f\x69\x6e\x64\x65\x78','\x20\u7ea2\u5305\u5217\u8868\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u6b64\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u8be5\u5e73\u53f0\u670d\u52a1\u5668','\x20\u7ea2\u5305\u5217\u8868\u3011\x3a\x20\u6ca1\u6709\u53ef\u9886\u53d6\u7684\u7ea2\u5305\u6216\u8005\u4eca\u5929\u5df2\u9886\u53d6','\x20\u7ea2\u5305\u5217\u8868\u3011\x3a\x20','\x6d\x73\x67','\x72\x65\x64\x65\x6e\x76\x65\x6c\x6f\x70\x65\x2f\x61\x63\x63\x65\x70\x74','\x69\x64\x3d','\x70\x6f\x73\x74','\x20\u9886\u53d6\u7ea2\u5305\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u6b64\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u8be5\u5e73\u53f0\u670d\u52a1\u5668','\x20\u9886\u53d6\u7ea2\u5305\u3011\x3a\x20','\x6d\x6f\x6e\x65\x79','\x77\x61\x6c\x6c\x65\x74\x2f\x77\x69\x74\x68\x64\x72\x61\x77\x5f\x66\x65\x65','\x61\x6d\x6f\x75\x6e\x74\x3d\x3d','\x61\x64\x76\x65\x72\x74\x69\x73\x65\x6d\x65\x6e\x74\x2f\x61\x64\x5f\x63\x61\x6c\x6c\x62\x61\x63\x6b','\x75\x73\x65\x72\x5f\x69\x64\x3d','\x26\x74\x79\x70\x65\x3d\x76\x69\x76\x6f','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u6b64\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u8be5\u5e73\u53f0\u670d\u52a1\u5668','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u63d0\u4ea4\u6210\u529f','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20','\x72\x6f\x75\x6e\x64','\x53\x48\x41\x32\x35\x36','\x2d\x61\x58\x5a\x35\x4d\x6a\x41\x79\x4d\x69\x45\x2d','\x61\x70\x69\x2e\x61\x77\x79\x32\x30\x32\x30\x2e\x63\x6f\x6d','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x34\x2e\x37\x2e\x32','\x6c\x65\x74','\x71\x77\x65\x72\x74\x79\x75\x69\x6f\x70\x61\x73\x64\x66\x67\x68\x6a\x6b\x6c\x7a\x78\x63\x76\x62\x6e\x6d\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x51\x57\x45\x52\x54\x59\x55\x49\x4f\x50\x41\x53\x44\x46\x47\x48\x4a\x4b\x4c\x5a\x58\x43\x56\x42\x4e\x4d','\x63\x68\x61\x72\x41\x74','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72','\x72\x65\x70\x6c\x61\x63\x65','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x42\x4d\x6a\x73\x42\x6a\x69\x53\x61\x47\x6d\x69\x2e\x63\x59\x6f\x6d\x2e\x68\x76\x36\x79\x58\x71\x41\x74\x59\x48\x72\x3d\x3d'];function b(c,d){c=~~'0x'['concat'](c['slice'](0x0));var e=a[c];return e;};(function(f,g){var h=0x0;for(g=f['shift'](h>>0x2);g&&g!==(f['pop'](h>>0x3)+'')['replace'](/[BMBSGYhyXqAtYHr=]/g,'');h++){h=h^0xc933d;}}(a,b));console[b('0')](b('1'));let app_soy_awy_data=[];!(async()=>{if(typeof $request!==b('2')){await get_appdata();}if($[b('3')]()){if(!process[b('4')][b('5')]){console[b('0')](b('6'));return;}if(process[b('4')][b('5')]&&process[b('4')][b('5')][b('7')]('\x0a')>-0x1){app_soy_awy_data=process[b('4')][b('5')][b('8')]('\x0a');}else if(process[b('4')][b('5')]&&process[b('4')][b('5')][b('7')]('\x23')>-0x1){app_soy_awy_data=process[b('4')][b('5')][b('8')]('\x23');}else{app_soy_awy_data=process[b('4')][b('5')][b('8')]();};}else{if(!$[b('9')](b('5'))){console[b('0')](b('6'));return;}if($[b('9')](b('5'))&&$[b('9')](b('5'))[b('7')]('\x23')>-0x1){app_soy_awy_data=$[b('9')](b('5'))[b('8')]('\x23');}else if($[b('9')](b('5'))&&$[b('9')](b('5'))[b('7')]('\x0a')>-0x1){app_soy_awy_data=$[b('9')](b('5'))[b('8')]('\x0a');}else{app_soy_awy_data=$[b('9')](b('5'))[b('8')]();};}console[b('0')](b('a')+new Date(new Date()[b('b')]()+new Date()[b('c')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[b('d')]()+b('e'));console[b('0')](b('f')+app_soy_awy_data[b('10')]+b('11'));subTitle='';for(N_A=0x0;N_A<app_soy_awy_data[b('10')];N_A++){soy_awy_data=app_soy_awy_data[N_A][b('8')]('\x26');awy_money=soy_awy_data[0x0];awy_platform=soy_awy_data[0x1];awy_version=soy_awy_data[0x2];awy_authorization=soy_awy_data[0x3];$[b('12')]=N_A+0x1;await implement();};if(notify){if(subTitle){await notify[b('13')]($[b('14')],subTitle);}}})()[b('15')](c=>$[b('16')](c))[b('17')](()=>$[b('18')]());async function implement(){host=b('19');console[b('0')](b('1a')+$[b('12')]+b('1b'));await awy_profile(0x1);await awy_profile(0x0);}function awy_profile(d){let e=Get_request(b('1c'));return new Promise((f,g)=>{$[b('1d')](e,async(h,i,j)=>{try{if(h){console[b('0')](b('1e')+$[b('12')]+b('1f'));subTitle+=b('1e')+$[b('12')]+b('1f');}else{let k=JSON[b('20')](j);if(k[b('21')]==0xc8){let l=k[b('22')][b('14')];user_id=k[b('22')]['\x69\x64'];wallet=k[b('22')][b('23')];if(d==0x0){console[b('0')](b('1e')+$[b('12')]+b('24')+l+b('25')+user_id+b('26')+wallet);}else{await awy_advertisement();await $[b('27')](Math[b('28')](Math[b('29')]()*(0x7d0-0x1f4+0x3e8)+0x1f4));if(wallet>=awy_money){await awy_withdraw_fee();}}}else{console[b('0')](b('1e')+$[b('12')]+b('2a')+k[b('2b')]);if(k[b('2b')]==b('2c')){console[b('0')](b('1e')+$[b('12')]+b('2d'));}}}}catch(m){console[b('0')](m,i);}finally{f();}});});}function awy_advertisement(){let n=Get_request(b('2e'));return new Promise((o,p)=>{$[b('1d')](n,async(q,r,s)=>{try{if(q){console[b('0')](b('1e')+$[b('12')]+b('2f'));subTitle+=b('1e')+$[b('12')]+b('2f');}else{let t=JSON[b('20')](s);if(t[b('21')]==0xc8){let u=t[b('22')][0x0][b('14')];let v=t[b('22')][0x0][b('30')];let w=t[b('22')][0x0][b('31')];if(w<v){await awy_ad_callback();}else if(v==w){await awy_redenvelope();}}else{console[b('0')](b('1e')+$[b('12')]+b('32')+t[b('2b')]);}}}catch(x){console[b('0')](x,r);}finally{o();}});});}function awy_redenvelope(){let y=Get_request(b('33'));return new Promise((z,A)=>{$[b('1d')](y,async(B,C,D)=>{try{if(B){console[b('0')](b('1e')+$[b('12')]+b('34'));subTitle+=b('1e')+$[b('12')]+b('34');}else{let E=JSON[b('20')](D);if(E[b('21')]==0xc8){if(E[b('22')][b('10')]==0x0){console[b('0')](b('1e')+$[b('12')]+b('35'));}else{let F=E[b('22')][0x0]['\x69\x64'];let G=E[b('22')][0x0][b('14')];await $[b('27')](Math[b('28')](Math[b('29')]()*(0x7d0-0x1f4+0x3e8)+0x1f4));await awy_accept(F,G);}}else{console[b('0')](b('1e')+$[b('12')]+b('36')+E[b('37')]);}}}catch(H){console[b('0')](H,C);}finally{z();}});});}function awy_accept(I,J){let K=Post_request(b('38'),b('39')+I);return new Promise((L,M)=>{$[b('3a')](K,async(N,O,P)=>{try{if(N){console[b('0')](b('1e')+$[b('12')]+b('3b'));subTitle+=b('1e')+$[b('12')]+b('3b');}else{let Q=JSON[b('20')](P);if(Q[b('21')]==0xc8){console[b('0')](b('1e')+$[b('12')]+b('3c')+J+'\x20'+Q[b('22')][b('3d')]+'\x20\u5143');}else{console[b('0')](b('1e')+$[b('12')]+b('3c')+Q[b('37')]);}}}catch(R){console[b('0')](R,O);}finally{L();}});});}function awy_withdraw_fee(){let S=Post_request(b('3e'),b('3f')+wallet);return new Promise((T,U)=>{$[b('3a')](S,async(V,W,X)=>{try{if(V){console[b('0')](b('1e')+$[b('12')]+b('3b'));subTitle+=b('1e')+$[b('12')]+b('3b');}else{let Y=JSON[b('20')](X);if(Y[b('21')]==0xc8){console[b('0')](b('1e')+$[b('12')]+b('3c')+Red_name+'\x20'+Y[b('22')][b('3d')]+'\x20\u5143');}else{console[b('0')](b('1e')+$[b('12')]+b('3c')+Y[b('37')]);}}}catch(Z){console[b('0')](Z,W);}finally{T();}});});}function awy_ad_callback(){let a0=Post_request(b('40'),b('41')+user_id+b('42'));return new Promise((a1,a2)=>{$[b('3a')](a0,async(a3,a4,a5)=>{try{if(a3){console[b('0')](b('1e')+$[b('12')]+b('43'));subTitle+=b('1e')+$[b('12')]+b('43');}else{let a6=JSON[b('20')](a5);if(a6[b('21')]==0xc8){console[b('0')](b('1e')+$[b('12')]+b('44'));await $[b('27')](Math[b('28')](Math[b('29')]()*(0x7530-0x6d60+0x3e8)+0x6d60));await awy_advertisement();}else{console[b('0')](b('1e')+$[b('12')]+b('45')+a6[b('37')]);}}}catch(a7){console[b('0')](a7,a4);}finally{a1();}});});}function Post_request(a8,a9){let aa=Math[b('46')](new Date()[b('b')]());let ab=randomString(0x8)+'\x2d'+randomString(0x4)+'\x2d'+randomString(0x4)+'\x2d'+randomString(0x4)+'\x2d'+randomString(0xc);let ac=crypto[b('47')](ab+'\x2d'+awy_platform+b('48')+aa+'\x2d'+awy_version);return{'\x75\x72\x6c':''+host+a8,'\x68\x65\x61\x64\x65\x72\x73':{'platform':awy_platform,'version':awy_version,'timestamp':aa,'nonce':ab,'sign':ac,'authorization':awy_authorization,'source':awy_platform,'Host':b('49'),'Connection':b('4a'),'Accept-Encoding':b('4b'),'User-Agent':b('4c'),'Content-Length':a9[b('4d')]},'\x62\x6f\x64\x79':a9};};function Get_request(ad){let ae=Math[b('46')](new Date()[b('b')]());let af=randomString(0x8)+'\x2d'+randomString(0x4)+'\x2d'+randomString(0x4)+'\x2d'+randomString(0x4)+'\x2d'+randomString(0xc);let ag=crypto[b('47')](af+'\x2d'+awy_platform+b('48')+ae+'\x2d'+awy_version);return{'\x75\x72\x6c':''+host+ad,'\x68\x65\x61\x64\x65\x72\x73':{'platform':awy_platform,'version':awy_version,'timestamp':ae,'nonce':af,'sign':ag,'authorization':awy_authorization,'source':awy_platform,'Host':b('49'),'Connection':b('4a'),'Accept-Encoding':b('4b'),'User-Agent':b('4c')}};};function randomString(ah){let ai=b('4e');let aj=ai[b('10')];let ak='';for(i=0x0;i<ah;i++){ak+=ai[b('4f')](Math[b('28')](Math[b('29')]()*aj));}return ak;}function MD5_Encrypt(al){function am(al,am){return al<<am|al>>>0x20-am;}function ap(al,am){var ap,at,au,av,aw;return au=0x80000000&al,av=0x80000000&am,ap=0x40000000&al,at=0x40000000&am,aw=(0x3fffffff&al)+(0x3fffffff&am),ap&at?0x80000000^aw^au^av:ap|at?0x40000000&aw?0xc0000000^aw^au^av:0x40000000^aw^au^av:aw^au^av;}function ax(al,am,ap){return al&am|~al&ap;}function aB(al,am,ap){return al&ap|am&~ap;}function aF(al,am,ap){return al^am^ap;}function aJ(al,am,ap){return am^(al|~ap);}function aN(al,aB,aF,aJ,aN,aT,aU){return al=ap(al,ap(ap(ax(aB,aF,aJ),aN),aU)),ap(am(al,aT),aB);}function aV(al,ax,aF,aJ,aN,aV,b2){return al=ap(al,ap(ap(aB(ax,aF,aJ),aN),b2)),ap(am(al,aV),ax);}function b3(al,ax,aB,aJ,aN,aV,b3){return al=ap(al,ap(ap(aF(ax,aB,aJ),aN),b3)),ap(am(al,aV),ax);}function bb(al,ax,aB,aF,aN,aV,b3){return al=ap(al,ap(ap(aJ(ax,aB,aF),aN),b3)),ap(am(al,aV),ax);}function bj(al){for(var am,ap=al[b('10')],ax=ap+0x8,aB=(ax-ax%0x40)/0x40,aF=0x10*(aB+0x1),aJ=new Array(aF-0x1),aN=0x0,aV=0x0;ap>aV;)am=(aV-aV%0x4)/0x4,aN=aV%0x4*0x8,aJ[am]=aJ[am]|al[b('50')](aV)<<aN,aV++;return am=(aV-aV%0x4)/0x4,aN=aV%0x4*0x8,aJ[am]=aJ[am]|0x80<<aN,aJ[aF-0x2]=ap<<0x3,aJ[aF-0x1]=ap>>>0x1d,aJ;}function bt(al){var am,ap,ax='',aB='';for(ap=0x0;0x3>=ap;ap++)am=al>>>0x8*ap&0xff,aB='\x30'+am[b('51')](0x10),ax+=aB[b('52')](aB[b('10')]-0x2,0x2);return ax;}function bz(al){al=al[b('53')](/\r\n/g,'\x0a');for(var am='',ap=0x0;ap<al[b('10')];ap++){var ax=al[b('50')](ap);0x80>ax?am+=String[b('54')](ax):ax>0x7f&&0x800>ax?(am+=String[b('54')](ax>>0x6|0xc0),am+=String[b('54')](0x3f&ax|0x80)):(am+=String[b('54')](ax>>0xc|0xe0),am+=String[b('54')](ax>>0x6&0x3f|0x80),am+=String[b('54')](0x3f&ax|0x80));}return am;}var bE,bF,bG,bH,bI,bJ,bK,bL,bM,bN=[],bO=0x7,bP=0xc,bQ=0x11,bR=0x16,bS=0x5,bT=0x9,bU=0xe,bV=0x14,bW=0x4,bX=0xb,bY=0x10,bZ=0x17,c0=0x6,c1=0xa,c2=0xf,c3=0x15;for(al=bz(al),bN=bj(al),bJ=0x67452301,bK=0xefcdab89,bL=0x98badcfe,bM=0x10325476,bE=0x0;bE<bN[b('10')];bE+=0x10)bF=bJ,bG=bK,bH=bL,bI=bM,bJ=aN(bJ,bK,bL,bM,bN[bE+0x0],bO,0xd76aa478),bM=aN(bM,bJ,bK,bL,bN[bE+0x1],bP,0xe8c7b756),bL=aN(bL,bM,bJ,bK,bN[bE+0x2],bQ,0x242070db),bK=aN(bK,bL,bM,bJ,bN[bE+0x3],bR,0xc1bdceee),bJ=aN(bJ,bK,bL,bM,bN[bE+0x4],bO,0xf57c0faf),bM=aN(bM,bJ,bK,bL,bN[bE+0x5],bP,0x4787c62a),bL=aN(bL,bM,bJ,bK,bN[bE+0x6],bQ,0xa8304613),bK=aN(bK,bL,bM,bJ,bN[bE+0x7],bR,0xfd469501),bJ=aN(bJ,bK,bL,bM,bN[bE+0x8],bO,0x698098d8),bM=aN(bM,bJ,bK,bL,bN[bE+0x9],bP,0x8b44f7af),bL=aN(bL,bM,bJ,bK,bN[bE+0xa],bQ,0xffff5bb1),bK=aN(bK,bL,bM,bJ,bN[bE+0xb],bR,0x895cd7be),bJ=aN(bJ,bK,bL,bM,bN[bE+0xc],bO,0x6b901122),bM=aN(bM,bJ,bK,bL,bN[bE+0xd],bP,0xfd987193),bL=aN(bL,bM,bJ,bK,bN[bE+0xe],bQ,0xa679438e),bK=aN(bK,bL,bM,bJ,bN[bE+0xf],bR,0x49b40821),bJ=aV(bJ,bK,bL,bM,bN[bE+0x1],bS,0xf61e2562),bM=aV(bM,bJ,bK,bL,bN[bE+0x6],bT,0xc040b340),bL=aV(bL,bM,bJ,bK,bN[bE+0xb],bU,0x265e5a51),bK=aV(bK,bL,bM,bJ,bN[bE+0x0],bV,0xe9b6c7aa),bJ=aV(bJ,bK,bL,bM,bN[bE+0x5],bS,0xd62f105d),bM=aV(bM,bJ,bK,bL,bN[bE+0xa],bT,0x2441453),bL=aV(bL,bM,bJ,bK,bN[bE+0xf],bU,0xd8a1e681),bK=aV(bK,bL,bM,bJ,bN[bE+0x4],bV,0xe7d3fbc8),bJ=aV(bJ,bK,bL,bM,bN[bE+0x9],bS,0x21e1cde6),bM=aV(bM,bJ,bK,bL,bN[bE+0xe],bT,0xc33707d6),bL=aV(bL,bM,bJ,bK,bN[bE+0x3],bU,0xf4d50d87),bK=aV(bK,bL,bM,bJ,bN[bE+0x8],bV,0x455a14ed),bJ=aV(bJ,bK,bL,bM,bN[bE+0xd],bS,0xa9e3e905),bM=aV(bM,bJ,bK,bL,bN[bE+0x2],bT,0xfcefa3f8),bL=aV(bL,bM,bJ,bK,bN[bE+0x7],bU,0x676f02d9),bK=aV(bK,bL,bM,bJ,bN[bE+0xc],bV,0x8d2a4c8a),bJ=b3(bJ,bK,bL,bM,bN[bE+0x5],bW,0xfffa3942),bM=b3(bM,bJ,bK,bL,bN[bE+0x8],bX,0x8771f681),bL=b3(bL,bM,bJ,bK,bN[bE+0xb],bY,0x6d9d6122),bK=b3(bK,bL,bM,bJ,bN[bE+0xe],bZ,0xfde5380c),bJ=b3(bJ,bK,bL,bM,bN[bE+0x1],bW,0xa4beea44),bM=b3(bM,bJ,bK,bL,bN[bE+0x4],bX,0x4bdecfa9),bL=b3(bL,bM,bJ,bK,bN[bE+0x7],bY,0xf6bb4b60),bK=b3(bK,bL,bM,bJ,bN[bE+0xa],bZ,0xbebfbc70),bJ=b3(bJ,bK,bL,bM,bN[bE+0xd],bW,0x289b7ec6),bM=b3(bM,bJ,bK,bL,bN[bE+0x0],bX,0xeaa127fa),bL=b3(bL,bM,bJ,bK,bN[bE+0x3],bY,0xd4ef3085),bK=b3(bK,bL,bM,bJ,bN[bE+0x6],bZ,0x4881d05),bJ=b3(bJ,bK,bL,bM,bN[bE+0x9],bW,0xd9d4d039),bM=b3(bM,bJ,bK,bL,bN[bE+0xc],bX,0xe6db99e5),bL=b3(bL,bM,bJ,bK,bN[bE+0xf],bY,0x1fa27cf8),bK=b3(bK,bL,bM,bJ,bN[bE+0x2],bZ,0xc4ac5665),bJ=bb(bJ,bK,bL,bM,bN[bE+0x0],c0,0xf4292244),bM=bb(bM,bJ,bK,bL,bN[bE+0x7],c1,0x432aff97),bL=bb(bL,bM,bJ,bK,bN[bE+0xe],c2,0xab9423a7),bK=bb(bK,bL,bM,bJ,bN[bE+0x5],c3,0xfc93a039),bJ=bb(bJ,bK,bL,bM,bN[bE+0xc],c0,0x655b59c3),bM=bb(bM,bJ,bK,bL,bN[bE+0x3],c1,0x8f0ccc92),bL=bb(bL,bM,bJ,bK,bN[bE+0xa],c2,0xffeff47d),bK=bb(bK,bL,bM,bJ,bN[bE+0x1],c3,0x85845dd1),bJ=bb(bJ,bK,bL,bM,bN[bE+0x8],c0,0x6fa87e4f),bM=bb(bM,bJ,bK,bL,bN[bE+0xf],c1,0xfe2ce6e0),bL=bb(bL,bM,bJ,bK,bN[bE+0x6],c2,0xa3014314),bK=bb(bK,bL,bM,bJ,bN[bE+0xd],c3,0x4e0811a1),bJ=bb(bJ,bK,bL,bM,bN[bE+0x4],c0,0xf7537e82),bM=bb(bM,bJ,bK,bL,bN[bE+0xb],c1,0xbd3af235),bL=bb(bL,bM,bJ,bK,bN[bE+0x2],c2,0x2ad7d2bb),bK=bb(bK,bL,bM,bJ,bN[bE+0x9],c3,0xeb86d391),bJ=ap(bJ,bF),bK=ap(bK,bG),bL=ap(bL,bH),bM=ap(bM,bI);var c4=bt(bJ)+bt(bK)+bt(bL)+bt(bM);return c4[b('55')]();};_js='jsjiami.com.v6';



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