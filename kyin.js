/*

安卓软件名称:快音

项目注册地址:https://landing.kaixinyf.cn/e30aze?invite_code=2S7B4S&_timestamp=1644398479&sign=15c82c2822432391d8402109a0762609&app_name=kuaiyin&device_id=1148692d61103e7c&client_v=5.03.03&platform=Android&platform_brand=blackshark&utm_source=xiaomi&um_from_appkey=5d91d0ed570df3d8ed000cb9&share_from=weixin&share_position=wuren

邀请码:2S7B4S或22F8Q3

声明：会有黑号还是黑设备的状态(账号异常)，注册后登录上去自行提现0.3元，如果能提现到账就可以跑脚本，不能你跑了也没啥用，到最后也提现不了

==========================================
账号数据由3部分组成
device-id值&access-token值&refresh_token值
寻找方法:退出登录,开抓包,点微信登录成功后找 https://api.kaixinyf.cn/passport/UnionLogin 链接
注释: device-id值在请求头里面找,access-token值和refresh_token值在登录成功后 响应 里面找
==========================================
在脚本同级目录创建一个文件
文件名:soy_variable_data.js
soy_variable_data.js文件内容如下

//添加账号后需要在后面添加一个逗号(英文输入法的),
//最后一个账号后面是没有逗号的
//变量不能使用单引号引起
module.exports = {"code":200,
"variable_data":{
"kyin":[//这里是脚本标识,下面的 kyin 就是给快音脚本使用的标识
"123456",//这是第一个账号
"123456",//这是第二个账号
"123456"//这是第三个账号
]}
}


cron 0-59/10 6-20 * * * https://gitee.com/soy-tool/app-script/raw/master/app_kyin.js

*/


const $ = new Env('快音');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';

var _0xod1='jsjiami.com.v6',_0xod1_=['_0xod1'],_0x1597=[_0xod1,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x73\x6f\x79\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x6b\x79\x69\x6e','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u8bf7\u52ff\u4e71\u4fee\u6539\u53d8\u91cf\u6587\u4ef6\u91cc\u9762\u5185\u5bb9','\x73\x70\x6c\x69\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u586b\u5199\u53d8\u91cf\u683c\u5f0f\u4e0d\u89c4\u8303','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x73\x69\x67\x6e\x5f\x69\x6e\x5f\x61\x70\x70\x5f\x78\x5f\x76\x69\x64\x65\x6f','\x68\x6f\x6d\x65\x2f\x54\x69\x6d\x65\x32\x52\x65\x77\x61\x72\x64','\x74\x3d\x31\x36\x34\x34\x35\x37\x31\x30\x34\x31\x33\x30\x31\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x31\x45\x31\x33\x32\x44\x31\x36\x38\x35\x42\x35\x30\x37\x35\x42\x43\x36\x39\x41\x36\x38\x43\x39\x37\x41\x34\x44\x36\x37\x31\x42\x39\x41\x43\x34\x46\x31\x36\x37\x35\x46\x38\x46\x39\x33\x41\x34\x39\x45\x31\x45\x32\x43\x43\x44\x45\x39\x45\x39\x42\x37\x36\x30','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u6574\u70b9\u7ea2\u5305\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u6574\u70b9\u7ea2\u5305\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x53\x65\x6e\x64\x43\x6f\x69\x6e','\x6d\x6f\x64\x65\x3d\x6d\x75\x73\x69\x63\x26\x6c\x65\x76\x65\x6c\x3d\x38\x26\x75\x73\x65\x64\x5f\x66\x61\x73\x74\x5f\x74\x69\x6d\x65\x3d\x30\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x33\x39\x34\x36\x34\x39\x38\x31\x31\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x43\x30\x32\x38\x35\x32\x38\x33\x46\x33\x31\x38\x36\x41\x43\x42\x30\x46\x35\x30\x43\x31\x38\x46\x39\x34\x45\x34\x37\x34\x39\x32\x32\x31\x37\x42\x44\x45\x42\x38\x35\x37\x45\x38\x41\x37\x42\x30\x44\x43\x42\x36\x34\x39\x32\x36\x45\x31\x45\x44\x39\x36\x41\x39','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x63\x6f\x69\x6e','\x20\u91d1\u5e01','\x20\u5237\u65f6\u957f\u3011\x3a\x20','\x70\x61\x73\x73\x70\x6f\x72\x74\x2f\x67\x65\x74\x5f\x74\x6f\x6b\x65\x6e','\x72\x65\x66\x72\x65\x73\x68\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x34\x31\x39\x37\x35\x33\x33\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x35\x45\x34\x31\x30\x39\x45\x45\x32\x34\x43\x35\x33\x41\x31\x46\x32\x45\x33\x38\x42\x36\x42\x32\x41\x41\x45\x36\x44\x46\x34\x38\x41\x44\x32\x43\x42\x43\x35\x41\x41\x42\x46\x38\x34\x37\x35\x36\x32\x30\x43\x39\x36\x44\x44\x35\x33\x31\x39\x31\x30\x46\x43\x38','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20\u6210\u529f\x2e\x2e\x2e','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e','\x72\x65\x66\x72\x65\x73\x68\x5f\x74\x6f\x6b\x65\x6e','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x53\x69\x67\x6e\x49\x6e','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x75\x74\x6d\x2d\x73\x6f\x75\x72\x63\x65\x3d\x78\x69\x61\x6f\x6d\x69\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x38\x30\x31\x35\x39\x37\x39\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x35\x32\x43\x36\x43\x43\x42\x36\x43\x31\x41\x43\x43\x32\x41\x34\x31\x30\x34\x43\x31\x32\x44\x36\x41\x38\x33\x41\x39\x43\x43\x31\x44\x33\x31\x36\x46\x36\x36\x32\x41\x34\x33\x33\x34\x41\x30\x32\x35\x38\x42\x46\x41\x43\x46\x35\x42\x41\x42\x43\x39\x32\x31\x41','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\x72\x65\x77\x61\x72\x64\x5f\x6e\x75\x6d','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x57\x65\x6c\x66\x61\x72\x65\x50\x61\x67\x65\x49\x6e\x66\x6f','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x35\x37\x33\x34\x37\x34\x37\x31\x36\x26\x73\x3d\x6d\x61\x6e\x67\x6f\x25\x37\x43\x31\x30\x44\x41\x37\x39\x45\x42\x43\x37\x37\x35\x44\x33\x35\x46\x31\x46\x36\x44\x36\x31\x35\x39\x39\x38\x37\x45\x44\x34\x46\x30\x31\x44\x33\x30\x32\x38\x35\x45\x31\x41\x42\x36\x41\x44\x41\x38\x46\x32\x45\x31\x44\x30\x31\x46\x43\x39\x37\x46\x38\x41\x36\x34','\x20\u6211\u7684\u798f\u5229\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x73\x69\x67\x6e\x5f\x69\x6e\x66\x6f','\x63\x61\x6e\x5f\x73\x69\x67\x6e','\x74\x61\x73\x6b\x5f\x6c\x69\x73\x74','\x6e\x65\x77\x55\x73\x65\x72\x54\x61\x73\x6b','\x74\x61\x73\x6b\x5f\x74\x79\x70\x65','\x63\x6f\x6e\x74\x69\x6e\x75\x65\x5f\x6c\x6f\x67\x5f\x69\x6e\x5f\x31','\x70\x72\x6f\x67\x72\x65\x73\x73\x5f\x73\x74\x61\x74\x75\x73','\x74\x69\x74\x6c\x65','\x6f\x76\x65\x72\x42\x75\x73\x69\x6e\x65\x73\x73\x4e\x61\x6d\x65','\x77\x61\x74\x63\x68\x5f\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x31','\x77\x65\x6c\x66\x61\x72\x65\x5f\x77\x61\x74\x63\x68\x5f\x76\x69\x64\x65\x6f','\u798f\u5229\u4efb\u52a1\x5f\u89c6\u9891\u4efb\u52a1','\x66\x75\x6c\x69\x57\x61\x74\x63\x68\x41\x64\x56\x69\x64\x65\x6f\x4f\x76\x65\x72','\x64\x61\x69\x6c\x79\x54\x61\x73\x6b','\x20\u6211\u7684\u798f\u5229\u72b6\u6001\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x57\x65\x6c\x66\x61\x72\x65\x50\x61\x67\x65\x54\x61\x73\x6b','\x70\x61\x67\x65\x3d\x72\x65\x64\x5f\x70\x61\x63\x6b\x61\x67\x65\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d','\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x36\x31\x36\x39\x32\x37\x30\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x32\x34\x30\x37\x36\x33\x44\x41\x35\x33\x36\x43\x30\x44\x33\x46\x38\x38\x33\x34\x34\x41\x42\x45\x35\x32\x44\x37\x45\x43\x38\x42\x36\x37\x30\x39\x30\x34\x39\x41\x32\x33\x41\x37\x33\x36\x35\x32\x38\x44\x42\x44\x35\x44\x37\x44\x43\x36\x30\x43\x46\x42\x42\x31','\x20\x68\x35\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x63\x6f\x6e\x74\x69\x6e\x75\x65\x5f\x6c\x6f\x67\x5f\x69\x6e\x5f\x33','\x72\x65\x64\x70\x61\x63\x6b\x61\x67\x65\x4c\x6f\x67\x6f\x6e','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x6f\x6e\x65','\x66\x75\x6c\x69\x4d\x75\x73\x69\x63\x4f\x76\x65\x72','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x74\x77\x6f','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x74\x68\x72\x65\x65','\x6c\x69\x73\x74\x65\x6e\x5f\x6d\x75\x73\x69\x63\x5f\x72\x65\x77\x61\x72\x64','\x73\x70\x65\x63\x69\x61\x6c','\x73\x70\x65\x63\x69\x61\x6c\x5f\x70\x72\x6f\x67\x72\x65\x73\x73','\x73\x74\x61\x74\x75\x73','\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x62\x69\x67','\x76\x69\x64\x65\x6f\x5f\x6e\x6f\x77','\x25\x45\x35\x25\x38\x35\x25\x41\x38\x25\x45\x35\x25\x42\x31\x25\x38\x30\x25\x45\x37\x25\x42\x41\x25\x41\x32\x25\x45\x35\x25\x38\x43\x25\x38\x35\x25\x45\x34\x25\x42\x42\x25\x42\x42\x25\x45\x35\x25\x38\x41\x25\x41\x31','\x77\x65\x6c\x66\x61\x72\x65\x54\x61\x73\x6b\x41\x64\x56\x69\x64\x65\x6f\x42\x69\x67','\x76\x69\x64\x65\x6f\x5f\x62\x69\x67','\x77\x61\x74\x63\x68\x5f\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x33','\x20\x68\x35\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x41\x64\x56\x69\x64\x65\x6f\x42\x69\x67\x52\x65\x77\x61\x72\x64','\x74\x61\x73\x6b\x54\x79\x70\x65\x3d','\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x72\x65\x77\x61\x72\x64\x5f\x61\x6d\x6f\x75\x6e\x74','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x33\x26\x69\x64\x3d\x36\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x38\x36\x32\x39\x36\x31\x35\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x77\x65\x6c\x66\x61\x72\x65\x5f\x77\x61\x74\x63\x68\x5f\x76\x69\x64\x65\x6f\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x69\x64\x25\x32\x32\x25\x33\x41\x32\x30\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x45\x35\x25\x38\x35\x25\x41\x38\x25\x45\x35\x25\x42\x31\x25\x38\x30\x25\x45\x37\x25\x42\x41\x25\x41\x32\x25\x45\x35\x25\x38\x43\x25\x38\x35\x25\x45\x34\x25\x42\x42\x25\x42\x42\x25\x45\x35\x25\x38\x41\x25\x41\x31\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x35\x30\x31\x37\x32\x35\x36\x33\x36\x26\x73\x3d\x6d\x61\x6e\x67\x6f\x25\x37\x43\x34\x39\x41\x42\x30\x33\x44\x31\x32\x44\x45\x36\x41\x31\x38\x36\x37\x33\x38\x33\x36\x32\x42\x39\x36\x32\x42\x34\x34\x41\x33\x39\x37\x45\x37\x44\x33\x30\x35\x37\x34\x45\x39\x34\x36\x39\x42\x45\x45\x33\x41\x39\x36\x38\x42\x37\x35\x43\x39\x38\x45\x44\x44\x34','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x31\x26\x69\x64\x3d\x32\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x73\x69\x67\x6e\x5f\x69\x6e\x5f\x61\x70\x70\x5f\x78\x5f\x76\x69\x64\x65\x6f\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x32\x39\x35\x38\x30\x37\x36\x39\x32\x37\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x38\x35\x38\x34\x36\x34\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x73\x69\x67\x6e\x5f\x69\x6e\x5f\x61\x70\x70\x5f\x78\x5f\x76\x69\x64\x65\x6f\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x35\x37\x32\x30\x31\x32\x31\x38\x32\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x32\x30\x43\x33\x45\x42\x46\x44\x37\x34\x46\x46\x34\x42\x30\x42\x36\x43\x35\x32\x42\x44\x43\x37\x41\x44\x44\x30\x35\x41\x41\x39\x33\x31\x44\x41\x36\x43\x32\x44\x46\x31\x30\x46\x44\x30\x36\x36\x33\x33\x45\x31\x35\x46\x34\x43\x37\x45\x30\x42\x44\x45\x35\x31','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x36\x26\x69\x64\x3d\x33\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x38\x36\x32\x39\x36\x31\x35\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x35\x30\x32\x34\x33\x34\x30\x33\x38\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x33\x39\x32\x41\x37\x41\x45\x33\x32\x46\x41\x34\x38\x42\x37\x35\x36\x35\x44\x46\x46\x41\x32\x35\x44\x39\x46\x34\x32\x36\x46\x45\x44\x38\x31\x41\x36\x41\x31\x32\x33\x33\x45\x35\x44\x32\x39\x42\x33\x46\x35\x38\x37\x42\x38\x46\x39\x38\x32\x32\x45\x38\x33\x37','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x64\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x2f\x63\x61\x6c\x6c\x62\x61\x63\x6b','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\x41\x6e\x64\x72\x6f\x69\x64','\x35\x2e\x30\x33\x2e\x30\x33','\x6b\x75\x61\x69\x79\x69\x6e\x2f\x35\x2e\x30\x33\x2e\x30\x33\x20\x28\x61\x6e\x64\x72\x6f\x69\x64\x2f\x31\x31\x29\x20\x6f\x6b\x56\x65\x72\x73\x69\x6f\x6e\x2f\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20','\x69\x64\x3d','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x52\x65\x77\x61\x72\x64','\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\u5956\u52b1\u3011\x3a\x20','\x63\x6f\x6d\x6d\x6f\x6e\x2f\x67\x65\x74\x52\x65\x77\x61\x72\x64\x4d\x6f\x64\x75\x6c\x65','\x74\x79\x70\x65\x3d\x63\x75\x73\x74\x6f\x6d\x69\x7a\x65\x26\x72\x65\x77\x61\x72\x64\x54\x79\x70\x65\x3d\x63\x6f\x69\x6e\x26\x62\x75\x73\x69\x6e\x65\x73\x73\x4e\x61\x6d\x65\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x39\x37\x33\x34\x38\x31\x39\x26\x73\x3d\x6d\x61\x6e\x67\x6f\x25\x37\x43\x37\x33\x43\x43\x46\x33\x43\x44\x39\x36\x43\x36\x36\x32\x42\x30\x33\x30\x44\x39\x37\x34\x42\x37\x44\x38\x39\x33\x31\x37\x30\x33\x41\x38\x32\x42\x39\x38\x31\x30\x33\x42\x33\x43\x41\x32\x30\x45\x42\x43\x37\x32\x35\x35\x43\x41\x33\x30\x34\x38\x43\x39\x37\x30','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\x76\x69\x64\x65\x6f\x52\x65\x77\x61\x72\x64','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x69\x6e\x64\x65\x78\x4f\x66','\x72\x65\x70\x6c\x61\x63\x65','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x56\x69\x64\x65\x6f\x4d\x75\x73\x69\x63\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x70\x69\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x70\x69\x2f\x77\x65\x6c\x66\x61\x72\x65\x2f\x67\x65\x74\x4c\x69\x73\x74\x65\x6e\x4d\x75\x73\x69\x63\x52\x65\x77\x61\x72\x64','\x41\x45\x53','\x65\x6e\x63\x72\x79\x70\x74','\x65\x6e\x63','\x55\x74\x66\x38','\x6d\x6f\x64\x65','\x45\x43\x42','\x70\x61\x64','\x50\x6b\x63\x73\x37','\x6a\x55\x73\x41\x57\x6a\x69\x52\x61\x57\x6d\x69\x2e\x63\x4b\x54\x6f\x66\x6d\x2e\x4e\x66\x76\x68\x79\x36\x64\x64\x4e\x3d\x3d'];function _0x3d16(_0x1a2628,_0x528615){_0x1a2628=~~'0x'['concat'](_0x1a2628['slice'](0x0));var _0xf8c15d=_0x1597[_0x1a2628];return _0xf8c15d;};(function(_0x2730eb,_0x4b53f3){var _0x4dbda2=0x0;for(_0x4b53f3=_0x2730eb['shift'](_0x4dbda2>>0x2);_0x4b53f3&&_0x4b53f3!==(_0x2730eb['pop'](_0x4dbda2>>0x3)+'')['replace'](/[UAWRWKTfNfhyddN=]/g,'');_0x4dbda2++){_0x4dbda2=_0x4dbda2^0xd064d;}}(_0x1597,_0x3d16));const CryptoJS=require(_0x3d16('0'));const fs=require('\x66\x73');const kyin_variable=$[_0x3d16('1')]()?require(_0x3d16('2')):'';let app_soy_kyin_data=[],soy_kyin_UA='',preservation='';!(async()=>{console[_0x3d16('3')](_0x3d16('4')+new Date(new Date()[_0x3d16('5')]()+new Date()[_0x3d16('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x3d16('7')]()+_0x3d16('8'));console[_0x3d16('3')](_0x3d16('9')+kyin_variable[_0x3d16('a')][_0x3d16('b')][_0x3d16('c')]+_0x3d16('d'));if(kyin_variable[_0x3d16('e')]!=0xc8){console[_0x3d16('3')](_0x3d16('f'));return;}subTitle='';for(i=0x0;i<kyin_variable[_0x3d16('a')][_0x3d16('b')][_0x3d16('c')];i++){let _0x2ee4fc=kyin_variable[_0x3d16('a')][_0x3d16('b')][i][_0x3d16('10')]('\x26');if(_0x2ee4fc[_0x3d16('c')]!=0x3){console[_0x3d16('3')](_0x3d16('11'));return;}else{current=kyin_variable[_0x3d16('a')][_0x3d16('b')][i];device=_0x2ee4fc[0x0];access_token=_0x2ee4fc[0x1];refresh_token=_0x2ee4fc[0x2];}$[_0x3d16('12')]=i+0x1;console[_0x3d16('3')](_0x3d16('13')+$[_0x3d16('12')]+_0x3d16('14'));await implement();};if(notify){if(subTitle){await notify[_0x3d16('15')]($[_0x3d16('16')],subTitle);}}})()[_0x3d16('17')](_0x190192=>$[_0x3d16('18')](_0x190192))[_0x3d16('19')](()=>$[_0x3d16('1a')]());async function implement(){await SendCoin();await sign();await GetWelfarePageTask();await Time2Reward();await MyWelfare();}async function sign(){if(new Date()[_0x3d16('1b')]()==0x6&&new Date()[_0x3d16('1c')]()<0x1e){await callback(_0x3d16('1d'),_0x3d16('1d'),'\u7b7e\u5230','\x73');}}function Time2Reward(){if(new Date()[_0x3d16('1b')]()==0x8||new Date()[_0x3d16('1b')]()==0x9||new Date()[_0x3d16('1b')]()==0xa||new Date()[_0x3d16('1b')]()==0xb||new Date()[_0x3d16('1b')]()==0xc||new Date()[_0x3d16('1b')]()==0xd||new Date()[_0x3d16('1b')]()==0x10||new Date()[_0x3d16('1b')]()==0x12||new Date()[_0x3d16('1b')]()==0x13||new Date()[_0x3d16('1b')]()==0x14||new Date()[_0x3d16('1b')]()==0x15){let _0x2102ec=Post_request(_0x3d16('1e'),_0x3d16('1f'),0x0);return new Promise((_0x55f159,_0x378bfa)=>{$[_0x3d16('20')](_0x2102ec,async(_0xecb92,_0x13f6e5,_0x4e23fa)=>{try{if(_0xecb92){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('22'));subTitle+=_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('22');}else{let _0x346520=JSON[_0x3d16('23')](_0x4e23fa);if(_0x346520[_0x3d16('e')]==0x0){}else{console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('24')+_0x346520[_0x3d16('25')]);}}}catch(_0x92f2fd){console[_0x3d16('3')](_0x92f2fd,_0x13f6e5);}finally{_0x55f159();}});});}}function SendCoin(){let _0x370bfd=Post_request(_0x3d16('26'),_0x3d16('27'),0x1);return new Promise((_0x17367f,_0x222531)=>{$[_0x3d16('20')](_0x370bfd,async(_0x1d2f04,_0x2af2cd,_0x571865)=>{try{if(_0x1d2f04){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('28'));subTitle+=_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('28');}else{let _0x5c36f9=JSON[_0x3d16('23')](_0x571865);if(_0x5c36f9[_0x3d16('e')]==0x0){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('29')+_0x5c36f9[_0x3d16('2a')][_0x3d16('2b')]+_0x3d16('2c'));}else if(_0x5c36f9[_0x3d16('e')]==0x2715){await get_token();}else{console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('2d')+_0x5c36f9[_0x3d16('25')]);}}}catch(_0xc48db2){console[_0x3d16('3')](_0xc48db2,_0x2af2cd);}finally{_0x17367f();}});});}function get_token(){let _0x3debe7=Post_request(_0x3d16('2e'),_0x3d16('2f')+refresh_token+_0x3d16('30'),0x0);return new Promise((_0x384a0e,_0x5da8b0)=>{$[_0x3d16('20')](_0x3debe7,async(_0x314f79,_0x17b286,_0x3553b3)=>{try{if(_0x314f79){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('31'));subTitle+=_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('31');}else{let _0x21afcd=JSON[_0x3d16('23')](_0x3553b3);if(_0x21afcd[_0x3d16('e')]==0x0){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('32'));access_token=_0x21afcd[_0x3d16('2a')][_0x3d16('33')];refresh_token=_0x21afcd[_0x3d16('2a')][_0x3d16('34')];await get_variable();}else{console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('35')+_0x21afcd[_0x3d16('25')]);}}}catch(_0x2c906c){console[_0x3d16('3')](_0x2c906c,_0x17b286);}finally{_0x384a0e();}});});}function SignIn(_0x1e6da7){let _0x2bafe2=Post_request_h5(_0x3d16('36'),_0x3d16('37')+access_token+_0x3d16('38')+device+_0x3d16('39'));return new Promise((_0x594aaf,_0x2d1ff1)=>{$[_0x3d16('20')](_0x2bafe2,async(_0x47138f,_0xc49b71,_0x2ba177)=>{try{if(_0x47138f){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x1e6da7+_0x3d16('3a'));subTitle+=_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x1e6da7+_0x3d16('3a');}else{let _0x85036f=JSON[_0x3d16('23')](_0x2ba177);if(_0x85036f[_0x3d16('e')]==0x0){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x1e6da7+_0x3d16('3b')+_0x85036f[_0x3d16('2a')][_0x3d16('3c')]+_0x3d16('2c'));}else{console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x1e6da7+_0x3d16('3d')+_0x85036f[_0x3d16('25')]);}}}catch(_0x117d1b){console[_0x3d16('3')](_0x117d1b,_0xc49b71);}finally{_0x594aaf();}});});}function MyWelfare(){let _0x2e145f=Post_request_h5(_0x3d16('3e'),_0x3d16('37')+access_token+_0x3d16('38')+device+_0x3d16('3f'));return new Promise((_0x3d2ca7,_0xf85fe9)=>{$[_0x3d16('20')](_0x2e145f,async(_0x40f13d,_0x59ce33,_0x208226)=>{try{if(_0x40f13d){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('40'));subTitle+=_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('40');}else{let _0x1203b1=JSON[_0x3d16('23')](_0x208226);if(_0x1203b1[_0x3d16('e')]==0x0){if(_0x1203b1[_0x3d16('2a')][_0x3d16('41')][_0x3d16('42')]==0x1){await SignIn('\u7b7e\u5230');}for(let _0x18d3ab of _0x1203b1[_0x3d16('2a')][_0x3d16('43')][_0x3d16('44')]){if(_0x18d3ab[_0x3d16('45')]==_0x3d16('46')){if(_0x18d3ab[_0x3d16('47')]==0x1){await GetReward(_0x18d3ab[_0x3d16('45')],_0x18d3ab[_0x3d16('48')]);await getRewardModule(_0x18d3ab[_0x3d16('49')],_0x18d3ab[_0x3d16('48')]);}}if(new Date()[_0x3d16('1b')]()>0xb&&new Date()[_0x3d16('1b')]()<0xd||new Date()[_0x3d16('1b')]()>0x13&&new Date()[_0x3d16('1b')]()<0x16){if(_0x18d3ab[_0x3d16('45')]==_0x3d16('4a')){if(_0x18d3ab[_0x3d16('47')]==0x0){await callback(_0x3d16('4b'),_0x3d16('4c'),_0x18d3ab[_0x3d16('48')],'\x76');}else if(_0x18d3ab[_0x3d16('47')]==0x1){await GetReward(_0x3d16('4a'),_0x18d3ab[_0x3d16('48')]);await getRewardModule(_0x3d16('4d'),_0x18d3ab[_0x3d16('48')]);}}}}for(let _0x16bde0 of _0x1203b1[_0x3d16('2a')][_0x3d16('43')][_0x3d16('4e')]){if(_0x16bde0[_0x3d16('47')]==0x1){await GetReward(_0x16bde0[_0x3d16('45')],_0x16bde0[_0x3d16('48')]);await getRewardModule(_0x16bde0[_0x3d16('49')],_0x16bde0[_0x3d16('48')]);}}}else{console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('4f')+_0x1203b1[_0x3d16('25')]);}}}catch(_0xf95e48){console[_0x3d16('3')](_0xf95e48,_0x59ce33);}finally{_0x3d2ca7();}});});}function GetWelfarePageTask(){let _0x3f35d1=Post_request_h5(_0x3d16('50'),_0x3d16('51')+access_token+_0x3d16('52')+device+_0x3d16('53'));return new Promise((_0x1c9aa0,_0x5b9acb)=>{$[_0x3d16('20')](_0x3f35d1,async(_0x19311a,_0x4753c0,_0x2f76c7)=>{try{if(_0x19311a){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('54'));subTitle+=_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('54');}else{let _0x1c3ce5=JSON[_0x3d16('23')](_0x2f76c7);if(_0x1c3ce5[_0x3d16('e')]==0x0){for(let _0x290e63 of _0x1c3ce5[_0x3d16('2a')][_0x3d16('4e')]){if(_0x290e63[_0x3d16('45')]==_0x3d16('55')){if(_0x290e63[_0x3d16('47')]==0x1){await GetReward(_0x3d16('55'),_0x290e63[_0x3d16('48')]);await getRewardModule(_0x3d16('56'),_0x290e63[_0x3d16('48')]);}}if(_0x290e63[_0x3d16('45')]==_0x3d16('57')){if(_0x290e63[_0x3d16('47')]==0x1){await GetReward(_0x3d16('57'),_0x290e63[_0x3d16('48')]);await getRewardModule(_0x3d16('58'),_0x290e63[_0x3d16('48')]);}}if(_0x290e63[_0x3d16('45')]==_0x3d16('59')){if(_0x290e63[_0x3d16('47')]==0x1){await GetReward(_0x3d16('59'),_0x290e63[_0x3d16('48')]);await getRewardModule(_0x3d16('58'),_0x290e63[_0x3d16('48')]);}}if(_0x290e63[_0x3d16('45')]==_0x3d16('5a')){if(_0x290e63[_0x3d16('47')]==0x1){await GetReward(_0x3d16('5a'),_0x290e63[_0x3d16('48')]);await getRewardModule(_0x3d16('58'),_0x290e63[_0x3d16('48')]);}}if(_0x290e63[_0x3d16('45')]==_0x3d16('5b')){for(let _0x5515a3 of _0x290e63[_0x3d16('5c')][_0x3d16('5d')]){if(_0x5515a3[_0x3d16('5e')]==0x1){await GetReward_music(_0x5515a3['\x69\x64'],_0x290e63[_0x3d16('48')]);await getRewardModule(_0x3d16('58'),_0x290e63[_0x3d16('48')]);}}}if(_0x290e63[_0x3d16('45')]==_0x3d16('5f')){if(_0x290e63[_0x3d16('5c')][_0x3d16('60')]<0x16){await callback(_0x3d16('5f'),_0x3d16('61'),_0x290e63[_0x3d16('48')]);await getRewardModule(_0x3d16('62'),_0x290e63[_0x3d16('48')]);for(let _0x321383 of _0x290e63[_0x3d16('5c')][_0x3d16('5d')]){if(_0x321383[_0x3d16('5e')]==0x1){await GetAdVideoBigReward(_0x3d16('63'),_0x290e63[_0x3d16('48')]);await getRewardModule(_0x3d16('62'),_0x290e63[_0x3d16('48')]);}}}}if(new Date()[_0x3d16('1b')]()>0xb&&new Date()[_0x3d16('1b')]()<0xd||new Date()[_0x3d16('1b')]()>0x13&&new Date()[_0x3d16('1b')]()<0x16){if(_0x290e63[_0x3d16('45')]==_0x3d16('64')){if(_0x290e63[_0x3d16('47')]==0x0){await callback(_0x3d16('4b'),_0x3d16('61'),_0x290e63[_0x3d16('48')],'\x76');}else if(_0x290e63[_0x3d16('47')]==0x1){await GetReward(_0x3d16('64'),_0x290e63[_0x3d16('48')]);await getRewardModule(_0x3d16('4d'),_0x290e63[_0x3d16('48')]);}}}}}else{console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+_0x3d16('65')+_0x1c3ce5[_0x3d16('25')]);}}}catch(_0x27f4fc){console[_0x3d16('3')](_0x27f4fc,_0x4753c0);}finally{_0x1c9aa0();}});});}function GetAdVideoBigReward(_0x411572,_0x3cf4cc){let _0x51acc7=Post_request_h5(_0x3d16('66'),_0x3d16('67')+_0x411572+_0x3d16('68')+access_token+_0x3d16('38')+device+_0x3d16('39'));return new Promise((_0x2b75bd,_0x4ae07b)=>{$[_0x3d16('20')](_0x51acc7,async(_0x19c04c,_0x5043a6,_0x50b549)=>{try{if(_0x19c04c){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x3cf4cc+_0x3d16('3a'));subTitle+=_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x3cf4cc+_0x3d16('3a');}else{let _0x4ec41c=JSON[_0x3d16('23')](_0x50b549);if(_0x4ec41c[_0x3d16('e')]==0x0){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x3cf4cc+_0x3d16('3b')+_0x4ec41c[_0x3d16('2a')][_0x3d16('69')]+_0x3d16('2c'));}else{console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x3cf4cc+_0x3d16('3d')+_0x4ec41c[_0x3d16('25')]);}}}catch(_0x3040dc){console[_0x3d16('3')](_0x3040dc,_0x5043a6);}finally{_0x2b75bd();}});});}function callback(_0x12f046,_0x3e1436,_0x2e7608,_0x401f16){let _0x2c3714='';if(_0x401f16=='\x76'){_0x2c3714=_0x3d16('6a');}else if(_0x401f16=='\x73'){_0x2c3714=_0x3d16('6b');}else{_0x2c3714=_0x3d16('6c')+_0x12f046+_0x3d16('6d')+_0x3e1436+_0x3d16('6e');}let _0x3a5064={'\x75\x72\x6c':_0x3d16('6f'),'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x3d16('70'),'content-length':_0x2c3714[_0x3d16('c')],'accept-encoding':_0x3d16('71'),'user-agent':_0x3d16('72'),'platform':_0x3d16('73'),'client-v':_0x3d16('74'),'device-id':device,'access-token':access_token,'user-agent':_0x3d16('75')},'\x62\x6f\x64\x79':_0x2c3714};return new Promise((_0x288a78,_0x2b6848)=>{$[_0x3d16('20')](_0x3a5064,async(_0x28ac2e,_0x51ff67,_0x5a37a0)=>{try{if(_0x28ac2e){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x2e7608+_0x3d16('76'));subTitle+=_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x2e7608+_0x3d16('76');}else{let _0x60cf81=JSON[_0x3d16('23')](_0x5a37a0);if(_0x60cf81[_0x3d16('e')]==0x0){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x2e7608+_0x3d16('77')+_0x60cf81[_0x3d16('25')]);}else{console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x2e7608+_0x3d16('77')+_0x60cf81[_0x3d16('25')]);}}}catch(_0x276c19){console[_0x3d16('3')](_0x276c19,_0x51ff67);}finally{_0x288a78();}});});}function GetReward_music(_0x44c9fb,_0x5a3af1){let _0x586dc4=Post_request_m(_0x3d16('78')+_0x44c9fb+_0x3d16('68')+access_token+_0x3d16('38')+device+_0x3d16('39'));return new Promise((_0x225cdd,_0xa93126)=>{$[_0x3d16('20')](_0x586dc4,async(_0x26fe71,_0x24fa27,_0x2a7acf)=>{try{if(_0x26fe71){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x5a3af1+_0x3d16('3a'));subTitle+=_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x5a3af1+_0x3d16('3a');}else{let _0x3f7fd0=JSON[_0x3d16('23')](_0x2a7acf);if(_0x3f7fd0[_0x3d16('e')]==0x0){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x5a3af1+_0x3d16('3b')+_0x3f7fd0[_0x3d16('2a')][_0x3d16('69')]+_0x3d16('2c'));}else{console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x5a3af1+_0x3d16('3d')+_0x3f7fd0[_0x3d16('25')]);}}}catch(_0x2f2671){console[_0x3d16('3')](_0x2f2671,_0x24fa27);}finally{_0x225cdd();}});});}function GetReward(_0x4cd1b7,_0x350138){let _0x5db425=Post_request_h5(_0x3d16('79'),_0x3d16('67')+_0x4cd1b7+_0x3d16('68')+access_token+_0x3d16('38')+device+_0x3d16('39'));return new Promise((_0x24e6e6,_0x1492bd)=>{$[_0x3d16('20')](_0x5db425,async(_0x1cb3a7,_0x19cc28,_0x3161f9)=>{try{if(_0x1cb3a7){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x350138+_0x3d16('7a'));subTitle+=_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x350138+_0x3d16('7a');}else{let _0x268c61=JSON[_0x3d16('23')](_0x3161f9);if(_0x268c61[_0x3d16('e')]==0x0){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x350138+_0x3d16('7b')+_0x268c61[_0x3d16('2a')][_0x3d16('69')]+_0x3d16('2c'));}else{console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x350138+_0x3d16('7c')+_0x268c61[_0x3d16('25')]);}}}catch(_0x421722){console[_0x3d16('3')](_0x421722,_0x19cc28);}finally{_0x24e6e6();}});});}function getRewardModule(_0x19295c,_0x3322fa){let _0x432466=Post_request_h5(_0x3d16('7d'),_0x3d16('7e')+_0x19295c+_0x3d16('68')+access_token+_0x3d16('38')+device+_0x3d16('7f'));return new Promise((_0x57ef5c,_0x5d1b92)=>{$[_0x3d16('20')](_0x432466,async(_0x5b1e91,_0x3f651d,_0x58187a)=>{try{if(_0x5b1e91){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x3322fa+_0x3d16('80'));subTitle+=_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x3322fa+_0x3d16('80');}else{let _0x2eb692=JSON[_0x3d16('23')](_0x58187a);if(_0x2eb692[_0x3d16('e')]==0x0){console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x3322fa+_0x3d16('81')+_0x2eb692[_0x3d16('2a')][_0x3d16('82')]+_0x3d16('2c'));}else{console[_0x3d16('3')](_0x3d16('21')+$[_0x3d16('12')]+'\x20'+_0x3322fa+_0x3d16('83')+_0x2eb692[_0x3d16('25')]);}}}catch(_0x59e424){console[_0x3d16('3')](_0x59e424,_0x3f651d);}finally{_0x57ef5c();}});});}function get_variable(){let _0xce4395=fs[_0x3d16('84')](_0x3d16('2'))[_0x3d16('85')]();variable_left=_0xce4395[_0x3d16('86')](0x0,_0xce4395[_0x3d16('87')](current));let _0x163844=_0xce4395[_0x3d16('c')]-variable_left[_0x3d16('c')]-current[_0x3d16('c')];variable_right=_0xce4395[_0x3d16('86')](_0xce4395[_0x3d16('c')]-_0x163844,_0xce4395[_0x3d16('c')]);let _0x1fbddf=device+'\x26'+access_token+'\x26'+refresh_token;let _0x109729=_0xce4395[_0x3d16('88')](new RegExp(current,'\x67\x69'),_0x1fbddf);fs[_0x3d16('89')](_0x3d16('2'),_0x109729,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x3b603e){if(_0x3b603e){console[_0x3d16('3')](_0x3b603e);}});}function Post_request(_0x89a9f4,_0x1c1de3,_0x1d4b49){if(_0x1d4b49==0x0){host=_0x3d16('8a');}else{host=_0x3d16('8b');}return{'\x75\x72\x6c':''+host+_0x89a9f4,'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x3d16('70'),'content-length':_0x1c1de3[_0x3d16('c')],'accept-encoding':_0x3d16('71'),'user-agent':_0x3d16('72'),'platform':_0x3d16('73'),'client-v':_0x3d16('74'),'device-id':device,'access-token':access_token,'user-agent':_0x3d16('75')},'\x62\x6f\x64\x79':_0x1c1de3};};function Post_request_h5(_0x5ad3aa,_0x1b7f4a){let _0x3ea796=_0x3d16('8c')+_0x5ad3aa;return{'\x75\x72\x6c':_0x3ea796,'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x3d16('70'),'content-length':_0x1b7f4a[_0x3d16('c')],'accept-encoding':_0x3d16('71'),'user-agent':_0x3d16('72'),'platform':_0x3d16('73'),'client-v':_0x3d16('74'),'device-id':device,'access-token':access_token,'user-agent':_0x3d16('75')},'\x62\x6f\x64\x79':_0x1b7f4a};};function Post_request_m(_0x2ba960){return{'\x75\x72\x6c':_0x3d16('8d'),'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x3d16('70'),'content-length':_0x2ba960[_0x3d16('c')],'accept-encoding':_0x3d16('71'),'user-agent':_0x3d16('72'),'platform':_0x3d16('73'),'client-v':_0x3d16('74'),'device-id':device,'access-token':access_token,'user-agent':_0x3d16('75')},'\x62\x6f\x64\x79':_0x2ba960};};function AES_Encrypt(_0x2b7170,_0x397927){let _0x5a9098=AES_DE[_0x3d16('8e')][_0x3d16('8f')](AES_DE[_0x3d16('90')][_0x3d16('91')][_0x3d16('23')](_0x2b7170),AES_DE[_0x3d16('90')][_0x3d16('91')][_0x3d16('23')](_0x397927),{'\x6d\x6f\x64\x65':AES_DE[_0x3d16('92')][_0x3d16('93')],'\x70\x61\x64\x64\x69\x6e\x67':AES_DE[_0x3d16('94')][_0x3d16('95')]});return _0x5a9098[_0x3d16('85')]();};_0xod1='jsjiami.com.v6';


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