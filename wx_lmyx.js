/*

软件名称:链萌优选

微信都小程序

看广告获得分红币,分红模式,目前微信授权即可,不需要实名(11/06)


必要变量:

soy_lmyx_data
#抓包时的请求头上的token


选填变量
soy_lmyx_UA
#属于网页UA..
#通过抓包获取,不提交默认分配一个

多个号用 @ 或 换行 隔开

v2p重写配置如下(不一定行,不能一定不行):

REWRITE 中的 匹配链接（正则表达式）
https://v3.sdk.haowusong.com/api/box/wallet/info 

REWRITE 中的 重写方式
app_lmyx.js

MITM 中的 解析域名
v3.sdk.haowusong.com

cron 3 0,9,17 * * * wx_lmyx.js

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/wx_lmyx.js

*/


const $ = new Env('链萌优选');
const notify = $.isNode() ? require('./sendNotify') : '';


function _0x37a1(_0x7c75bd,_0x1a5399){const _0x411309=_0x4113();return _0x37a1=function(_0x1e89a7,_0x226ebf){_0x1e89a7=_0x1e89a7-0x189;let _0x37fa56=_0x411309[_0x1e89a7];if(_0x37a1['cMDGSl']===undefined){var _0x399073=function(_0x37a1ef){const _0x2adc87='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xe6f76b='',_0x2966fc='';for(let _0x5ab84d=0x0,_0xe0facc,_0x48c6ea,_0x53edad=0x0;_0x48c6ea=_0x37a1ef['charAt'](_0x53edad++);~_0x48c6ea&&(_0xe0facc=_0x5ab84d%0x4?_0xe0facc*0x40+_0x48c6ea:_0x48c6ea,_0x5ab84d++%0x4)?_0xe6f76b+=String['fromCharCode'](0xff&_0xe0facc>>(-0x2*_0x5ab84d&0x6)):0x0){_0x48c6ea=_0x2adc87['indexOf'](_0x48c6ea);}for(let _0xa0eb5c=0x0,_0xacd517=_0xe6f76b['length'];_0xa0eb5c<_0xacd517;_0xa0eb5c++){_0x2966fc+='%'+('00'+_0xe6f76b['charCodeAt'](_0xa0eb5c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2966fc);};_0x37a1['FZDOlF']=_0x399073,_0x7c75bd=arguments,_0x37a1['cMDGSl']=!![];}const _0x449a2b=_0x411309[0x0],_0x25d88a=_0x1e89a7+_0x449a2b,_0x11412d=_0x7c75bd[_0x25d88a];return!_0x11412d?(_0x37fa56=_0x37a1['FZDOlF'](_0x37fa56),_0x7c75bd[_0x25d88a]=_0x37fa56):_0x37fa56=_0x11412d,_0x37fa56;},_0x37a1(_0x7c75bd,_0x1a5399);}function _0x4113(){const _0x21982=['jL92zxjZAw9Upq','W4VKUO7LI43LI7lOOy3JGlxcV8k2','Aw5KzxG','W6yeWPBcKa','store_id=1&r=api/shareholder/index/bonus-index&access_token=','gCkxnmoSAvxcKmoce0OgWQtdNSkizaeljc7dP8k+WO84BvhcOCktumkdzCoaW4ZcSCktW5FdHCkljSkhW53dG8kIm0BdImoAW4i1WQ43uCo1WQZdL8oiW5zFe8kas25Dyt3dSmk0WQRdIrv+F1NdJ8oyiW','W7XSWRe','D2fPDa','W6elWP/cKmoa','f8k4dIZcOCkgxq','\x20兑换通行证】:\x20网络请求失败','WPHMgSo9bshdJ0DmW79fn8kY','CSoBwciTCZK','indexOf','code','lgSKW57dK31XW53cGdzQW5/dPW','9IdEDbQ','F8k0jIWd','bmkfDSk3getdPq','WR9WWRy7W7JcNCkHyutcTxNcLmkWccqmW7RdQx8NW5SBWQpdVG','ee7cVCk2WRPOAxldOGTTtvm','jmkjhxb1nwRdNSkXW5nOj8kMga','z2v0zgf0yq','zSooqc84','WOJcTSkNW4lcNG','W4/dVxFdUG','WPVKURlLIQ3LIQpOOjVJGjZcNqtNVk7NUBJORj7MSlVLP5/OTOm','env','W75Gpq','W5dcI3TQEa','&_version=','W5OUWPqWjSkhW5NdL8kAWPTJywhcSCoLWOpcGmk1W4NdKSk9W7yOfmktW5BdSX7dPc9XW5xdUSkPA8oOd0BdSCo6yCk8WOxdUHhdNbijo8kRaSoWDb/cMSoCsSo+ANHTW4qrWPJdRXtcPaH0','yEETVowiOoobHCk9zq','BgvUz3rO','44oj77Yq5P+15AcG5ywn55Ig5BMA5y+u6yE7W6DVWOJcUNSQe8kVW7vfjCowdSk2','split','WP0wFmoyeNNdGuSnW4NdLa7cLG','#soy_lmyx_data','WPBPOQ7LI4tNUiVJGBxdLbRNVQRNUPJORQpMSRFLPlhOT5S','v+ESMUwiU+obP3uq576P57I/6kYg5RgY5AEk6lEJ','\x20观看广告】:\x20','setdata','ioINGUECI+w5V+wrIUoaKtOG','44cr77YA5PYQ5AgR5yAz55U45BQu5y+y6yEpihnVEv9SBxL4x2rHDge','CMfUzg9T','W4RcLxnMDa','iowfKEAnOUMaMUIHJoIVGEoaKtOG','get','api/box','ioETVUwiSooaKtOG572r57UC6k+35Rgc5AsX6lsL','&_platform=wx','msg','W41dCSkRW7RcNSosEZZcKmowW4ddGW','DxjS','WQzFl8oyW5TRzmkAsCoF','name','C3rVCMvFAwq9mszYpwfWAs9ZAgfYzwHVBgrLCI9PBMrLEc9SB29RlxzPzgvVlwfKjNzPzgvVx3r5Cgu9mszHy2nLC3nFDg9Rzw49','taBcHHubWPZcIq','BxnN','W4VdT2FdIWKUW5TrtCkDW6ZdGCkLWQnAgmkn','y29Kzq','mty4ote0n2r1B3f2BG','catch','A8oQW5lcKaldV8or','mtG5mti1ne9Pv2XXrW','mtCXmJu0nK9btMXVCa','w0PGt8kDW6hdGa','\x20任务列表】:\x20网络请求失败','tSoQW78','W4vhWRVdTGJcG0pcGXSGWPPLWPux','C295x2XTExHFzgf0yq','WOVdS8kkWOnQ','WOiBcmkaxwVdOW','parse','sendNotify','jL9WBgf0zM9YBt13Ea','4901332SGkXem','WQDmWPRcOKe','W4SWWQNcUmoGW57dMSo7wSkhW5zksCoP','sCkuhG3cHmkqBq','mtbQAw5bCNG','Dw5KzwzPBMvK','a8kTfIhcTa','W6arWO/cHColAbpcPdPrmLhdMSo0jY8fWPldIXFdIg/cPIrbW4mWEg0LWR5iW6lcNSoehq','ccDJ','AxnFC2LNBG','EUodJqKNWRNOH6JMNjdMJiVNP5xdMSoitoI3GUwpLay','CvmCBSkPlCoP','C295x2XTExHFvue','W57JGkZcHCkKtoIhMEAEN+AmN+EKGwu1aEI2KUwpHsG','\x20领分红】:\x20网络请求失败','lUILSEEEMUw7S+wqTUodKCkenEE8IUE4N+ITJUAWMEwKHoI3Lq','8338911vLGNpZ','WO8AaSka','WODMba','utf-8','W5iNAmorcW','mM1Pc8oRkeKfWQhdUSonWPhdSq','WQjNWORdLCkQW6TismkqW5i5WRtdJG','\x20兑换通行证】:\x20','Dg9mB2nHBgvtDhjPBMC','1891254OiWlqG','Aw5KzxHpzG','EmkmW6i','WQnRWO3dL8kHW6GVDSkqW5ajWQe','ios4QUI0PUwpT+s7U+wkOEoaKq','Bg9NrxjY','eaf/eI5eWPK','Bg9N','soy_lmyx_data','data','rYCAumk2fmkxeSk4WRrHuG','zw52','W6JJGO3cNCkjA+IhLUADS+AnGoEMH2OjWPlOTPlLJkZdNG','\x20===\x0a','Dg9Rzw4','CgfYC2u','getdata','\x0a【soy脚本提示---账号\x20','d8knlq','AgvHzgvYCW','t+MJHowiKEE5O+odRSkXaa','WQdKU7VLI7JLIQROO4hJGiK3W5u','WQTLWQyuWRJcK8k3DgVcO33cK8kI','ios7U+wkOEwiL+IHQooaKtOG6k+75y+w5AsX6lsLlowpR+IdVxrVA2vU5BEY6l+h5PYF','z2v0vgLTzq','application/x-www-form-urlencoded','\x20签到】:\x20','index','cUoaKhnVEEIeMUACRoApKoEKUI0TlEI0PUwpTYa','WOJdLxvMBSkWvmoO','log','z2v0rNvSBfLLyxi','ffBcS8ohWRPOAxlcKXXKvKi','WQpKUjxLI5hLI73OOixJGQ1LhUE8NEE7SoISKUAXVEwLVEI0JG','W7uXW57cGq','WRhKUPdLI6lLIOJOORtJG4qVW4hNVlFNUkJORB/MSiVLPOtOTlK','zMLUywXSEq','wbpcNHGu','z2v0','mtCXnJKYmJrOy1HTsu4','W5O1WOiDl8k1W4NdI8o4W44KzZ0'];_0x4113=function(){return _0x21982;};return _0x4113();}const _0x2e1879=_0x53ed,_0x27ae87=_0x37a1,_0x10c744=_0x1e89;(function(_0x40e9b8,_0x145c3e){const _0x39cb6f=_0x1e89,_0x44a082=_0x37a1,_0x5090d9=_0x53ed,_0x51ef2b=_0x40e9b8();while(!![]){try{const _0x3df33f=parseInt(_0x5090d9('0x1e1','Limd'))/0x1+-parseInt(_0x44a082(0x1b3))/0x2+-parseInt(_0x5090d9('0x1a6','t(Vp'))/0x3+parseInt(_0x39cb6f(0x1be))/0x4+-parseInt(_0x5090d9(0x1f4,'D!rf'))/0x5*(parseInt(_0x44a082('0x1b2'))/0x6)+-parseInt(_0x39cb6f(0x1ce))/0x7+parseInt(_0x44a082(0x1fe))/0x8*(parseInt(_0x5090d9('0x1c1','v@xO'))/0x9);if(_0x3df33f===_0x145c3e)break;else _0x51ef2b['push'](_0x51ef2b['shift']());}catch(_0x7d8d35){_0x51ef2b['push'](_0x51ef2b['shift']());}}}(_0x4113,0xa7eed));let app_soy_lmyx_data=[],app_soy_lmyx_UA=[];!(async()=>{const _0x44fc8e=_0x1e89,_0x34ec9a=_0x53ed,_0x561d8c=_0x37a1;typeof $request!==_0x561d8c('0x1c3')&&await Get_data();if($['isNode']()){if(!process['env']['soy_lmyx_data']){console[_0x561d8c('0x1de')]('\x0a【'+$[_0x34ec9a('0x203','n!Gf')]+_0x34ec9a('0x194','F)S['));return;}if(process['env']['soy_lmyx_data']&&process[_0x44fc8e(0x18d)][_0x561d8c('0x1b8')][_0x561d8c('0x1d8')]('@')>-0x1)app_soy_lmyx_data=process[_0x34ec9a(0x1e9,'G05G')]['soy_lmyx_data'][_0x34ec9a('0x19f','D!rf')]('@');else{if(process['env'][_0x561d8c('0x1b8')]&&process[_0x44fc8e('0x18d')][_0x561d8c('0x1b8')][_0x34ec9a('0x1ba','1B2b')]('\x0a')>-0x1)app_soy_lmyx_data=process[_0x561d8c(0x1e2)][_0x34ec9a('0x1d3','B8[)')][_0x44fc8e(0x195)]('\x0a');else process[_0x561d8c('0x1e2')][_0x561d8c(0x1b8)]&&process['env']['soy_lmyx_data'][_0x34ec9a('0x1c9','YnTX')]('#')>-0x1?app_soy_lmyx_data=process[_0x34ec9a('0x1b6','HDV5')][_0x561d8c(0x1b8)][_0x44fc8e('0x195')]('#'):app_soy_lmyx_data=process[_0x44fc8e('0x18d')][_0x561d8c('0x1b8')][_0x34ec9a('0x1bf','2bnC')]();};}else{if(!$[_0x34ec9a(0x209,'v@xO')](_0x561d8c('0x1b8'))){console['log']('\x0a【'+$[_0x44fc8e(0x1a9)]+_0x561d8c(0x19d));return;}if($[_0x44fc8e(0x1e7)](_0x44fc8e('0x1df'))&&$[_0x44fc8e('0x1e7')](_0x34ec9a(0x214,'uCfz'))[_0x561d8c(0x1d8)]('@')>-0x1)app_soy_lmyx_data=$[_0x34ec9a(0x212,'ed&3')](_0x44fc8e(0x1df))['split']('@');else{if($[_0x34ec9a(0x1b1,'SlnW')](_0x34ec9a('0x20f','7vMJ'))&&$[_0x34ec9a(0x1dd,']Lir')](_0x34ec9a(0x1ff,'Qkc!'))[_0x44fc8e('0x20d')]('\x0a')>-0x1)app_soy_lmyx_data=$[_0x34ec9a(0x20c,'kmSE')](_0x44fc8e('0x1df'))[_0x34ec9a('0x1fc','6hXg')]('\x0a');else $[_0x44fc8e(0x1e7)]('soy_lmyx_data')&&$[_0x34ec9a('0x1dd',']Lir')](_0x34ec9a('0x1ed','F)S['))['indexOf']('#')>-0x1?app_soy_lmyx_data=$['getdata'](_0x44fc8e(0x1df))[_0x34ec9a(0x1c4,'v@xO')]('#'):app_soy_lmyx_data=$[_0x34ec9a(0x1ab,'6hXg')](_0x44fc8e(0x1df))[_0x34ec9a('0x189','kmSE')]();};}console['log']('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(new Date()[_0x561d8c('0x1ef')]()+new Date()[_0x34ec9a('0x1ad','gqba')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x561d8c(0x1d6)]()+_0x44fc8e('0x1e4')),console[_0x44fc8e(0x1f5)]('===【共\x20'+app_soy_lmyx_data[_0x561d8c(0x193)]+'\x20个账号】===\x0a'),subTitle='';for(i=0x0;i<app_soy_lmyx_data['length'];i++){soy_lmyx_data=app_soy_lmyx_data[i][_0x44fc8e(0x195)]('&'),soy_lmyx_token=soy_lmyx_data[0x0],soy_lmyx_version=soy_lmyx_data[0x1],soy_lmyx_UA=soy_lmyx_data[0x2],!soy_lmyx_UA&&(soy_lmyx_UA='Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'),$['index']=i+0x1,console['log']('\x0a开始【第\x20'+$[_0x561d8c(0x202)]+_0x561d8c('0x1db')),await implement();};notify&&(subTitle&&await notify[_0x44fc8e(0x1bc)]($['name'],subTitle));})()[_0x10c744('0x1b0')](_0x11e892=>$[_0x27ae87('0x1dc')](_0x11e892))[_0x27ae87('0x1fb')](()=>$[_0x2e1879('0x1cf','1B2b')]());function Get_data(){const _0x418b08=_0x2e1879,_0x45742f=_0x10c744,_0x1e2b68=_0x27ae87;if($request[_0x1e2b68(0x1a7)][_0x45742f(0x20d)](_0x45742f('0x1a2'))>-0x1){const _0x45f1f2=$request[_0x1e2b68('0x1ea')][_0x1e2b68(0x1e5)];let _0x18a044=$[_0x1e2b68(0x216)](_0x418b08('0x1b7','8!vR'));if(!_0x18a044){if(_0x45f1f2)$['setdata'](_0x45f1f2,_0x418b08(0x20b,'$J8f'));}else{if(_0x45f1f2)$['setdata'](_0x45f1f2,_0x18a044+_0x45742f('0x197'));}const _0x15da17=$request[_0x418b08(0x1b4,'m0*e')]['user-agent'];if(_0x15da17)$[_0x45742f(0x19b)](_0x15da17,_0x1e2b68('0x1ca'));}}async function implement(){const _0x2d9ef4=_0x2e1879;host=_0x2d9ef4('0x1c5','n!Gf'),await soy_lmyx_tasklist();}function _0x1e89(_0x7c75bd,_0x1a5399){const _0x411309=_0x4113();return _0x1e89=function(_0x1e89a7,_0x226ebf){_0x1e89a7=_0x1e89a7-0x189;let _0x37fa56=_0x411309[_0x1e89a7];return _0x37fa56;},_0x1e89(_0x7c75bd,_0x1a5399);}function soy_lmyx_tasklist(){const _0x3c6dfb=_0x10c744;let _0x5aaa3c=Get_request(_0x3c6dfb('0x204')+soy_lmyx_token+_0x3c6dfb(0x190)+soy_lmyx_version+'&_platform=wx');return new Promise((_0x347c28,_0x55d7fc)=>{const _0x2cda51=_0x53ed;$[_0x2cda51(0x1c6,'*S8p')](_0x5aaa3c,async(_0x34fd4f,_0x5462bf,_0x4e0557)=>{const _0x12fb81=_0x1e89,_0x546d85=_0x37a1,_0x302f55=_0x2cda51;try{if(_0x34fd4f)console['log'](_0x302f55('0x1c8','v@xO')+$[_0x546d85(0x202)]+_0x302f55('0x1fa','rWo4')),subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x302f55('0x208','n!Gf')]+_0x302f55('0x1f8','sG5k');else{let _0x2dd2af=JSON['parse'](_0x4e0557);if(_0x2dd2af[_0x302f55(0x1f9,'pywz')]==0x0){is_sign=_0x2dd2af['data'][_0x546d85('0x1c7')],is_browse=_0x2dd2af['data']['is_browse'],look_AD=_0x2dd2af[_0x12fb81(0x1e0)]['look_video_ad'];is_sign==0x0&&await soy_lmyx_sign();is_browse==0x0&&await soy_lmyx_browse();for(let _0x4ced29=0x0;_0x4ced29<0x5;_0x4ced29++){await soy_lmyx_video_ad();let _0x6b9244=Math['floor'](Math[_0x546d85(0x19e)]()*(0x7530-0x61a8+0x3e8)+0x61a8);await $[_0x546d85(0x207)](_0x6b9244);}await soy_lmyx_exchange(),await soy_lmyx_shareholder();}else console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x546d85(0x202)]+_0x546d85(0x1ee));}}catch(_0x465fe1){console[_0x546d85(0x1de)](_0x465fe1,_0x5462bf);}finally{_0x347c28();}});});}function _0x53ed(_0x7c75bd,_0x1a5399){const _0x411309=_0x4113();return _0x53ed=function(_0x1e89a7,_0x226ebf){_0x1e89a7=_0x1e89a7-0x189;let _0x37fa56=_0x411309[_0x1e89a7];if(_0x53ed['cCnkPF']===undefined){var _0x399073=function(_0x2adc87){const _0xe6f76b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2966fc='',_0x5ab84d='';for(let _0xe0facc=0x0,_0x48c6ea,_0x53edad,_0xa0eb5c=0x0;_0x53edad=_0x2adc87['charAt'](_0xa0eb5c++);~_0x53edad&&(_0x48c6ea=_0xe0facc%0x4?_0x48c6ea*0x40+_0x53edad:_0x53edad,_0xe0facc++%0x4)?_0x2966fc+=String['fromCharCode'](0xff&_0x48c6ea>>(-0x2*_0xe0facc&0x6)):0x0){_0x53edad=_0xe6f76b['indexOf'](_0x53edad);}for(let _0xacd517=0x0,_0x553a37=_0x2966fc['length'];_0xacd517<_0x553a37;_0xacd517++){_0x5ab84d+='%'+('00'+_0x2966fc['charCodeAt'](_0xacd517)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5ab84d);};const _0x37a1ef=function(_0x383f7a,_0x2ac100){let _0x1310cb=[],_0x11e892=0x0,_0x45f1f2,_0x18a044='';_0x383f7a=_0x399073(_0x383f7a);let _0x15da17;for(_0x15da17=0x0;_0x15da17<0x100;_0x15da17++){_0x1310cb[_0x15da17]=_0x15da17;}for(_0x15da17=0x0;_0x15da17<0x100;_0x15da17++){_0x11e892=(_0x11e892+_0x1310cb[_0x15da17]+_0x2ac100['charCodeAt'](_0x15da17%_0x2ac100['length']))%0x100,_0x45f1f2=_0x1310cb[_0x15da17],_0x1310cb[_0x15da17]=_0x1310cb[_0x11e892],_0x1310cb[_0x11e892]=_0x45f1f2;}_0x15da17=0x0,_0x11e892=0x0;for(let _0x5aaa3c=0x0;_0x5aaa3c<_0x383f7a['length'];_0x5aaa3c++){_0x15da17=(_0x15da17+0x1)%0x100,_0x11e892=(_0x11e892+_0x1310cb[_0x15da17])%0x100,_0x45f1f2=_0x1310cb[_0x15da17],_0x1310cb[_0x15da17]=_0x1310cb[_0x11e892],_0x1310cb[_0x11e892]=_0x45f1f2,_0x18a044+=String['fromCharCode'](_0x383f7a['charCodeAt'](_0x5aaa3c)^_0x1310cb[(_0x1310cb[_0x15da17]+_0x1310cb[_0x11e892])%0x100]);}return _0x18a044;};_0x53ed['IPXieb']=_0x37a1ef,_0x7c75bd=arguments,_0x53ed['cCnkPF']=!![];}const _0x449a2b=_0x411309[0x0],_0x25d88a=_0x1e89a7+_0x449a2b,_0x11412d=_0x7c75bd[_0x25d88a];return!_0x11412d?(_0x53ed['SlztAy']===undefined&&(_0x53ed['SlztAy']=!![]),_0x37fa56=_0x53ed['IPXieb'](_0x37fa56,_0x226ebf),_0x7c75bd[_0x25d88a]=_0x37fa56):_0x37fa56=_0x11412d,_0x37fa56;},_0x53ed(_0x7c75bd,_0x1a5399);}function soy_lmyx_browse(){const _0x14c4ab=_0x27ae87,_0x12c388=_0x2e1879;let _0x62e40d=Get_request('store_id=1&r=api/shareholder/index/browse-bonus&access_token='+soy_lmyx_token+_0x12c388('0x1a8','Pbkt')+soy_lmyx_version+_0x14c4ab(0x1bd));return new Promise((_0x4dcdd6,_0x2d1966)=>{const _0x8fb7e8=_0x14c4ab;$[_0x8fb7e8('0x1fd')](_0x62e40d,async(_0x3df33e,_0x13f7f1,_0x21ecb0)=>{const _0x4004e8=_0x1e89,_0x14d95a=_0x53ed,_0x11ad57=_0x8fb7e8;try{if(_0x3df33e)console['log'](_0x11ad57('0x1f3')+$[_0x11ad57('0x202')]+_0x14d95a('0x18c','mc6Y')),subTitle+=_0x11ad57(0x1f3)+$[_0x11ad57(0x202)]+_0x4004e8('0x1b5');else{let _0x10272f=JSON['parse'](_0x21ecb0);_0x10272f[_0x14d95a(0x18b,'gqba')]==0x0?console['log'](_0x4004e8('0x1e8')+$[_0x14d95a('0x18a','R]go')]+_0x14d95a(0x201,'1B2b')+_0x10272f[_0x4004e8('0x1a5')]):console[_0x4004e8(0x1f5)](_0x11ad57(0x1f3)+$[_0x14d95a(0x1d2,'mc6Y')]+_0x14d95a('0x1ec','Pbkt')+_0x10272f['msg']);}}catch(_0x26388d){console[_0x14d95a(0x1d9,'r)cU')](_0x26388d,_0x13f7f1);}finally{_0x4dcdd6();}});});}function soy_lmyx_sign(){const _0x4437e0=_0x27ae87,_0x5c79cb=_0x2e1879;let _0x2c3eff=Get_request('store_id=1&r=api/integralmall/integralmall/register&today='+formatDate()+_0x5c79cb('0x1c0','cm^L')+soy_lmyx_token+_0x4437e0(0x200)+soy_lmyx_version+'&_platform=wx');return new Promise((_0xdca71b,_0x32cfea)=>{const _0x12af2e=_0x4437e0;$[_0x12af2e('0x1fd')](_0x2c3eff,async(_0x51c75d,_0x20c08b,_0x506c67)=>{const _0x3943ba=_0x53ed,_0x5132a5=_0x12af2e,_0x47c3c5=_0x1e89;try{if(_0x51c75d)console[_0x47c3c5(0x1f5)]('\x0a【soy脚本提示---账号\x20'+$[_0x47c3c5(0x1f2)]+_0x5132a5(0x1a3)),subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x3943ba('0x18a','R]go')]+_0x3943ba(0x199,']Lir');else{let _0x509a56=JSON[_0x47c3c5(0x1bb)](_0x506c67);_0x509a56[_0x5132a5(0x1ae)]==0x0?console[_0x5132a5(0x1de)]('\x0a【soy脚本提示---账号\x20'+$[_0x47c3c5(0x1f2)]+_0x3943ba(0x192,'B8[)')+_0x509a56['msg']):console['log'](_0x47c3c5(0x1e8)+$[_0x3943ba('0x1b9','vVxd')]+_0x47c3c5(0x1f1)+_0x509a56[_0x5132a5(0x1ac)]);}}catch(_0x190b54){console[_0x5132a5(0x1de)](_0x190b54,_0x20c08b);}finally{_0xdca71b();}});});}function soy_lmyx_video_ad(){const _0x471e0b=_0x27ae87,_0xfde813=_0x2e1879;let _0x565abb=Get_request(_0xfde813(0x205,'G05G')+soy_lmyx_token+_0x471e0b('0x200')+soy_lmyx_version+_0xfde813('0x196','mc6Y'));return new Promise((_0x9fcb5f,_0x2eb829)=>{$['get'](_0x565abb,async(_0x1e44d0,_0x4a731c,_0x349693)=>{const _0xcc0e85=_0x37a1,_0xebf5e=_0x53ed,_0x129ee3=_0x1e89;try{if(_0x1e44d0)console[_0x129ee3('0x1f5')](_0x129ee3('0x1e8')+$[_0x129ee3(0x1f2)]+'\x20观看广告】:\x20网络请求失败'),subTitle+=_0xebf5e('0x1e3','vVxd')+$[_0xcc0e85(0x202)]+_0xebf5e('0x1cd','RGw^');else{let _0x5b5608=JSON[_0x129ee3('0x1bb')](_0x349693);_0x5b5608[_0x129ee3('0x20e')]==0x0?console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+_0x129ee3(0x19a)+_0x5b5608[_0xebf5e('0x206','%iNZ')]):console[_0xebf5e(0x1d0,'$J8f')](_0xcc0e85('0x1f3')+$[_0xcc0e85(0x202)]+_0xcc0e85(0x19c)+_0x5b5608['msg']);}}catch(_0x19dfde){console[_0xcc0e85('0x1de')](_0x19dfde,_0x4a731c);}finally{_0x9fcb5f();}});});}function soy_lmyx_exchange(){const _0x399362=_0x10c744,_0x536782=_0x2e1879;let _0x3a729b=Get_request(_0x536782('0x191','Qkc!')+soy_lmyx_token+_0x399362(0x190)+soy_lmyx_version+'&_platform=wx');return new Promise((_0x2dfbf8,_0x59cea4)=>{const _0x56b68b=_0x37a1;$[_0x56b68b(0x1fd)](_0x3a729b,async(_0x22235f,_0x4c8f05,_0x466d04)=>{const _0x56c586=_0x53ed,_0x438116=_0x1e89,_0x346fcb=_0x56b68b;try{if(_0x22235f)console[_0x346fcb('0x1de')]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x438116(0x20a)),subTitle+=_0x56c586('0x1cb','2bnC')+$[_0x56c586(0x1d2,'mc6Y')]+'\x20兑换通行证】:\x20网络请求失败';else{let _0x2a4ad4=JSON[_0x346fcb(0x1e6)](_0x466d04);_0x2a4ad4[_0x346fcb('0x1ae')]==0x0?console[_0x346fcb('0x1de')](_0x438116(0x1e8)+$[_0x346fcb(0x202)]+_0x346fcb(0x1a0)+_0x2a4ad4['msg']):console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+_0x438116(0x1d5)+_0x2a4ad4[_0x346fcb(0x1ac)]);}}catch(_0x4156cf){console[_0x346fcb('0x1de')](_0x4156cf,_0x4c8f05);}finally{_0x2dfbf8();}});});}function soy_lmyx_shareholder(){const _0x515495=_0x10c744,_0x474893=_0x27ae87;let _0x149f90=Get_request(_0x474893(0x1aa)+soy_lmyx_token+_0x474893(0x200)+soy_lmyx_version+_0x515495(0x1a4));return new Promise((_0x45a3b0,_0x257ba2)=>{const _0x2c00ea=_0x515495;$[_0x2c00ea('0x1a1')](_0x149f90,async(_0x24c6cb,_0x1dd64e,_0x45ead7)=>{const _0x5bf6ba=_0x53ed,_0x4ad7f9=_0x37a1,_0x4b96cd=_0x2c00ea;try{if(_0x24c6cb)console[_0x4b96cd('0x1f5')](_0x4ad7f9(0x1f3)+$['index']+_0x4b96cd('0x1cc')),subTitle+=_0x4b96cd(0x1e8)+$[_0x5bf6ba(0x18f,'D!rf')]+_0x5bf6ba(0x198,'8!vR');else{let _0x49bb27=JSON[_0x4b96cd('0x1bb')](_0x45ead7);_0x49bb27[_0x4ad7f9(0x1ae)]==0x0?console[_0x5bf6ba(0x18e,'g7##')](_0x4ad7f9('0x1f3')+$[_0x5bf6ba('0x211','AH%m')]+'\x20领分红】:\x20'+_0x49bb27[_0x4ad7f9('0x1ac')]):console[_0x4ad7f9(0x1de)](_0x4b96cd(0x1e8)+$[_0x4ad7f9(0x202)]+_0x5bf6ba(0x1eb,'*S8p')+_0x49bb27[_0x4ad7f9('0x1ac')]);}}catch(_0x51a502){console[_0x5bf6ba(0x1d9,'r)cU')](_0x51a502,_0x1dd64e);}finally{_0x45a3b0();}});});}function Get_request(_0x268429){const _0x1e8640=_0x10c744,_0xf78a81=_0x2e1879;return{'url':''+host+_0x268429,'headers':{'Host':_0xf78a81(0x1f7,'uCfz'),'Connection':'keep-alive','charset':_0x1e8640('0x1d1'),'User-Agent':soy_lmyx_UA,'content-type':_0x1e8640('0x1f0'),'Accept-Encoding':_0xf78a81(0x213,'F)S[')}};};function formatDate(){const _0x104c2b=_0x27ae87;let _0x61a935=new Date(),_0x26e8b2=_0x61a935[_0x104c2b(0x1f6)](),_0x3c54e1=_0x61a935['getMonth']()+0x1,_0x191d2c=_0x61a935['getDate']();return _0x3c54e1=_0x3c54e1<0xa?'0'+_0x3c54e1:_0x3c54e1,_0x191d2c=_0x191d2c<0xa?'0'+_0x191d2c:_0x191d2c,_0x26e8b2+'/'+_0x3c54e1+'/'+_0x191d2c;};


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