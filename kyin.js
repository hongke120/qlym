/*

安卓软件名称:快音

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


var _0xodl='jsjiami.com.v6',_0xodl_=['_0xodl'],_0x4938=[_0xodl,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x73\x6f\x79\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x6b\x79\x69\x6e','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u8bf7\u52ff\u4e71\u4fee\u6539\u53d8\u91cf\u6587\u4ef6\u91cc\u9762\u5185\u5bb9','\x73\x70\x6c\x69\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u586b\u5199\u53d8\u91cf\u683c\u5f0f\u4e0d\u89c4\u8303','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x73\x69\x67\x6e\x5f\x69\x6e\x5f\x61\x70\x70\x5f\x78\x5f\x76\x69\x64\x65\x6f','\x68\x6f\x6d\x65\x2f\x54\x69\x6d\x65\x32\x52\x65\x77\x61\x72\x64','\x74\x3d\x31\x36\x34\x34\x35\x37\x31\x30\x34\x31\x33\x30\x31\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x31\x45\x31\x33\x32\x44\x31\x36\x38\x35\x42\x35\x30\x37\x35\x42\x43\x36\x39\x41\x36\x38\x43\x39\x37\x41\x34\x44\x36\x37\x31\x42\x39\x41\x43\x34\x46\x31\x36\x37\x35\x46\x38\x46\x39\x33\x41\x34\x39\x45\x31\x45\x32\x43\x43\x44\x45\x39\x45\x39\x42\x37\x36\x30','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u6574\u70b9\u7ea2\u5305\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u6574\u70b9\u7ea2\u5305\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x53\x65\x6e\x64\x43\x6f\x69\x6e','\x6d\x6f\x64\x65\x3d\x6d\x75\x73\x69\x63\x26\x6c\x65\x76\x65\x6c\x3d\x33\x35\x26\x75\x73\x65\x64\x5f\x66\x61\x73\x74\x5f\x74\x69\x6d\x65\x3d\x30\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x35\x34\x34\x38\x34\x33\x31\x39\x31\x32\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x33\x35\x44\x46\x38\x39\x42\x45\x31\x34\x30\x35\x43\x34\x41\x36\x36\x43\x34\x46\x41\x30\x46\x46\x44\x41\x35\x42\x38\x45\x30\x34\x39\x37\x39\x39\x35\x36\x34\x38\x31\x39\x45\x39\x33\x42\x30\x46\x43\x33\x42\x44\x36\x39\x31\x31\x38\x45\x45\x41\x32\x35\x46\x35','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x64\x61\x74\x61','\x74\x79\x70\x65','\x67\x6f\x6c\x64\x5f\x65\x67\x67','\u5408\u4e00\u91d1\u86cb','\x20\u5237\u65f6\u957f\u3011\x3a\x20\u83b7\u5f97\x20','\x63\x6f\x69\x6e','\x20\u91d1\u5e01','\x20\u5237\u65f6\u957f\u3011\x3a\x20','\x4f\x70\x65\x6e\x47\x6f\x6c\x64\x45\x67\x67','\x6d\x6f\x64\x65\x3d\x6d\x75\x73\x69\x63\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x35\x34\x34\x37\x32\x36\x32\x30\x32\x34\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x42\x43\x43\x36\x42\x36\x41\x44\x36\x46\x41\x45\x31\x32\x45\x36\x36\x37\x39\x42\x38\x45\x30\x42\x33\x30\x36\x35\x38\x30\x30\x30\x37\x35\x45\x37\x35\x34\x44\x45\x41\x39\x43\x41\x36\x42\x31\x36\x31\x31\x35\x46\x38\x43\x30\x42\x42\x37\x42\x39\x37\x33\x46\x35','\x20\u91d1\u86cb\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x72\x65\x77\x61\x72\x64\x5f\x6c\x69\x73\x74','\x74\x61\x73\x6b\x5f\x69\x64','\x20\u91d1\u86cb\u5956\u52b1\u3011\x3a\x20','\x44\x72\x61\x77\x4c\x6f\x74\x74\x65\x72\x79','\x74\x61\x73\x6b\x5f\x69\x64\x3d','\x26\x74\x79\x70\x65\x3d\x31\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x35\x34\x34\x37\x32\x36\x35\x34\x33\x33\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x32\x32\x44\x41\x42\x38\x30\x45\x45\x39\x36\x35\x36\x38\x32\x45\x35\x30\x34\x44\x33\x38\x35\x30\x35\x44\x46\x30\x42\x32\x39\x34\x32\x34\x35\x33\x31\x44\x31\x37\x42\x33\x39\x42\x34\x45\x32\x37\x42\x34\x43\x45\x42\x38\x39\x41\x38\x37\x45\x37\x42\x42\x46\x32','\x70\x61\x73\x73\x70\x6f\x72\x74\x2f\x67\x65\x74\x5f\x74\x6f\x6b\x65\x6e','\x72\x65\x66\x72\x65\x73\x68\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x34\x31\x39\x37\x35\x33\x33\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x35\x45\x34\x31\x30\x39\x45\x45\x32\x34\x43\x35\x33\x41\x31\x46\x32\x45\x33\x38\x42\x36\x42\x32\x41\x41\x45\x36\x44\x46\x34\x38\x41\x44\x32\x43\x42\x43\x35\x41\x41\x42\x46\x38\x34\x37\x35\x36\x32\x30\x43\x39\x36\x44\x44\x35\x33\x31\x39\x31\x30\x46\x43\x38','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20\u6210\u529f\x2e\x2e\x2e','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e','\x72\x65\x66\x72\x65\x73\x68\x5f\x74\x6f\x6b\x65\x6e','\x20\u66f4\u65b0\x74\x6f\x6b\x65\x6e\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x53\x69\x67\x6e\x49\x6e','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x75\x74\x6d\x2d\x73\x6f\x75\x72\x63\x65\x3d\x78\x69\x61\x6f\x6d\x69\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x38\x30\x31\x35\x39\x37\x39\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x35\x32\x43\x36\x43\x43\x42\x36\x43\x31\x41\x43\x43\x32\x41\x34\x31\x30\x34\x43\x31\x32\x44\x36\x41\x38\x33\x41\x39\x43\x43\x31\x44\x33\x31\x36\x46\x36\x36\x32\x41\x34\x33\x33\x34\x41\x30\x32\x35\x38\x42\x46\x41\x43\x46\x35\x42\x41\x42\x43\x39\x32\x31\x41','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\x72\x65\x77\x61\x72\x64\x5f\x6e\x75\x6d','\u4efb\u52a1\u5956\u52b1\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x57\x65\x6c\x66\x61\x72\x65\x50\x61\x67\x65\x49\x6e\x66\x6f','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x35\x37\x33\x34\x37\x34\x37\x31\x36\x26\x73\x3d\x6d\x61\x6e\x67\x6f\x25\x37\x43\x31\x30\x44\x41\x37\x39\x45\x42\x43\x37\x37\x35\x44\x33\x35\x46\x31\x46\x36\x44\x36\x31\x35\x39\x39\x38\x37\x45\x44\x34\x46\x30\x31\x44\x33\x30\x32\x38\x35\x45\x31\x41\x42\x36\x41\x44\x41\x38\x46\x32\x45\x31\x44\x30\x31\x46\x43\x39\x37\x46\x38\x41\x36\x34','\x20\u6211\u7684\u798f\u5229\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x73\x69\x67\x6e\x5f\x69\x6e\x66\x6f','\x63\x61\x6e\x5f\x73\x69\x67\x6e','\x74\x61\x73\x6b\x5f\x6c\x69\x73\x74\x5f\x6e\x65\x77','\x74\x61\x73\x6b\x5f\x6c\x69\x73\x74','\x74\x61\x73\x6b\x5f\x74\x79\x70\x65','\x63\x6f\x6e\x74\x69\x6e\x75\x65\x5f\x6c\x6f\x67\x5f\x69\x6e\x5f\x31','\x70\x72\x6f\x67\x72\x65\x73\x73\x5f\x73\x74\x61\x74\x75\x73','\x74\x69\x74\x6c\x65','\x6f\x76\x65\x72\x42\x75\x73\x69\x6e\x65\x73\x73\x4e\x61\x6d\x65','\x77\x61\x74\x63\x68\x5f\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x31','\x77\x65\x6c\x66\x61\x72\x65\x5f\x77\x61\x74\x63\x68\x5f\x76\x69\x64\x65\x6f','\u798f\u5229\u4efb\u52a1\x5f\u89c6\u9891\u4efb\u52a1','\x66\x75\x6c\x69\x57\x61\x74\x63\x68\x41\x64\x56\x69\x64\x65\x6f\x4f\x76\x65\x72','\x64\x61\x69\x6c\x79\x54\x61\x73\x6b','\x20\u6211\u7684\u798f\u5229\u72b6\u6001\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x57\x65\x6c\x66\x61\x72\x65\x50\x61\x67\x65\x54\x61\x73\x6b','\x70\x61\x67\x65\x3d\x72\x65\x64\x5f\x70\x61\x63\x6b\x61\x67\x65\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d','\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x36\x31\x36\x39\x32\x37\x30\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x32\x34\x30\x37\x36\x33\x44\x41\x35\x33\x36\x43\x30\x44\x33\x46\x38\x38\x33\x34\x34\x41\x42\x45\x35\x32\x44\x37\x45\x43\x38\x42\x36\x37\x30\x39\x30\x34\x39\x41\x32\x33\x41\x37\x33\x36\x35\x32\x38\x44\x42\x44\x35\x44\x37\x44\x43\x36\x30\x43\x46\x42\x42\x31','\x20\x68\x35\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x63\x6f\x6e\x74\x69\x6e\x75\x65\x5f\x6c\x6f\x67\x5f\x69\x6e\x5f\x33','\x72\x65\x64\x70\x61\x63\x6b\x61\x67\x65\x4c\x6f\x67\x6f\x6e','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x6f\x6e\x65','\x66\x75\x6c\x69\x4d\x75\x73\x69\x63\x4f\x76\x65\x72','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x74\x77\x6f','\x6c\x69\x73\x74\x65\x6e\x5f\x74\x6f\x5f\x73\x6f\x6e\x67\x73\x5f\x74\x68\x72\x65\x65','\x6c\x69\x73\x74\x65\x6e\x5f\x6d\x75\x73\x69\x63\x5f\x72\x65\x77\x61\x72\x64','\x73\x70\x65\x63\x69\x61\x6c','\x73\x70\x65\x63\x69\x61\x6c\x5f\x70\x72\x6f\x67\x72\x65\x73\x73','\x73\x74\x61\x74\x75\x73','\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x62\x69\x67','\x76\x69\x64\x65\x6f\x5f\x6e\x6f\x77','\x25\x45\x35\x25\x38\x35\x25\x41\x38\x25\x45\x35\x25\x42\x31\x25\x38\x30\x25\x45\x37\x25\x42\x41\x25\x41\x32\x25\x45\x35\x25\x38\x43\x25\x38\x35\x25\x45\x34\x25\x42\x42\x25\x42\x42\x25\x45\x35\x25\x38\x41\x25\x41\x31','\x77\x65\x6c\x66\x61\x72\x65\x54\x61\x73\x6b\x41\x64\x56\x69\x64\x65\x6f\x42\x69\x67','\x76\x69\x64\x65\x6f\x5f\x62\x69\x67','\x77\x61\x74\x63\x68\x5f\x61\x64\x5f\x76\x69\x64\x65\x6f\x5f\x33','\x20\x68\x35\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x41\x64\x56\x69\x64\x65\x6f\x42\x69\x67\x52\x65\x77\x61\x72\x64','\x74\x61\x73\x6b\x54\x79\x70\x65\x3d','\x26\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x72\x65\x77\x61\x72\x64\x5f\x61\x6d\x6f\x75\x6e\x74','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x33\x26\x69\x64\x3d\x36\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x38\x36\x32\x39\x36\x31\x35\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x77\x65\x6c\x66\x61\x72\x65\x5f\x77\x61\x74\x63\x68\x5f\x76\x69\x64\x65\x6f\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x69\x64\x25\x32\x32\x25\x33\x41\x32\x30\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x45\x35\x25\x38\x35\x25\x41\x38\x25\x45\x35\x25\x42\x31\x25\x38\x30\x25\x45\x37\x25\x42\x41\x25\x41\x32\x25\x45\x35\x25\x38\x43\x25\x38\x35\x25\x45\x34\x25\x42\x42\x25\x42\x42\x25\x45\x35\x25\x38\x41\x25\x41\x31\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x35\x30\x31\x37\x32\x35\x36\x33\x36\x26\x73\x3d\x6d\x61\x6e\x67\x6f\x25\x37\x43\x34\x39\x41\x42\x30\x33\x44\x31\x32\x44\x45\x36\x41\x31\x38\x36\x37\x33\x38\x33\x36\x32\x42\x39\x36\x32\x42\x34\x34\x41\x33\x39\x37\x45\x37\x44\x33\x30\x35\x37\x34\x45\x39\x34\x36\x39\x42\x45\x45\x33\x41\x39\x36\x38\x42\x37\x35\x43\x39\x38\x45\x44\x44\x34','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x31\x26\x69\x64\x3d\x32\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x73\x69\x67\x6e\x5f\x69\x6e\x5f\x61\x70\x70\x5f\x78\x5f\x76\x69\x64\x65\x6f\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x32\x39\x35\x38\x30\x37\x36\x39\x32\x37\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x38\x35\x38\x34\x36\x34\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x73\x69\x67\x6e\x5f\x69\x6e\x5f\x61\x70\x70\x5f\x78\x5f\x76\x69\x64\x65\x6f\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x35\x37\x32\x30\x31\x32\x31\x38\x32\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x32\x30\x43\x33\x45\x42\x46\x44\x37\x34\x46\x46\x34\x42\x30\x42\x36\x43\x35\x32\x42\x44\x43\x37\x41\x44\x44\x30\x35\x41\x41\x39\x33\x31\x44\x41\x36\x43\x32\x44\x46\x31\x30\x46\x44\x30\x36\x36\x33\x33\x45\x31\x35\x46\x34\x43\x37\x45\x30\x42\x44\x45\x35\x31','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x36\x26\x69\x64\x3d\x33\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x67\x6f\x6c\x64\x5f\x65\x67\x67\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x69\x64\x25\x32\x32\x25\x33\x41\x39\x25\x32\x43\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x36\x32\x30\x32\x35\x36\x38\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x45\x35\x25\x39\x30\x25\x38\x38\x25\x45\x34\x25\x42\x38\x25\x38\x30\x25\x45\x39\x25\x38\x37\x25\x39\x31\x25\x45\x38\x25\x39\x42\x25\x38\x42\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x35\x34\x34\x37\x33\x30\x30\x30\x36\x39\x26\x73\x3d\x67\x72\x61\x70\x65\x25\x37\x43\x35\x34\x45\x43\x38\x38\x37\x36\x45\x42\x45\x36\x38\x32\x34\x41\x44\x38\x39\x41\x37\x31\x34\x37\x32\x43\x46\x37\x30\x34\x42\x42\x43\x46\x42\x35\x35\x36\x34\x45\x39\x44\x43\x45\x41\x33\x39\x34\x37\x38\x37\x37\x35\x30\x38\x32\x37\x38\x37\x32\x31\x38\x30\x33','\x61\x70\x70\x5f\x69\x64\x3d\x31\x26\x61\x64\x5f\x67\x72\x6f\x75\x70\x5f\x69\x64\x3d\x36\x26\x69\x64\x3d\x33\x26\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x35\x2e\x30\x26\x65\x78\x74\x5f\x70\x61\x72\x61\x6d\x73\x3d\x25\x37\x42\x25\x32\x32\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x38\x36\x32\x39\x36\x31\x35\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x61\x73\x6b\x5f\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x5f\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x37\x44\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x61\x70\x70\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x74\x3d\x31\x36\x34\x34\x35\x30\x32\x34\x33\x34\x30\x33\x38\x26\x73\x3d\x61\x70\x70\x6c\x65\x25\x37\x43\x33\x39\x32\x41\x37\x41\x45\x33\x32\x46\x41\x34\x38\x42\x37\x35\x36\x35\x44\x46\x46\x41\x32\x35\x44\x39\x46\x34\x32\x36\x46\x45\x44\x38\x31\x41\x36\x41\x31\x32\x33\x33\x45\x35\x44\x32\x39\x42\x33\x46\x35\x38\x37\x42\x38\x46\x39\x38\x32\x32\x45\x38\x33\x37','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x64\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x2f\x63\x61\x6c\x6c\x62\x61\x63\x6b','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\x41\x6e\x64\x72\x6f\x69\x64','\x35\x2e\x30\x33\x2e\x30\x33','\x6b\x75\x61\x69\x79\x69\x6e\x2f\x35\x2e\x30\x33\x2e\x30\x33\x20\x28\x61\x6e\x64\x72\x6f\x69\x64\x2f\x31\x31\x29\x20\x6f\x6b\x56\x65\x72\x73\x69\x6f\x6e\x2f\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x34','\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20','\x69\x64\x3d','\x77\x65\x6c\x66\x61\x72\x65\x2f\x47\x65\x74\x52\x65\x77\x61\x72\x64','\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\u5956\u52b1\u3011\x3a\x20','\x63\x6f\x6d\x6d\x6f\x6e\x2f\x67\x65\x74\x52\x65\x77\x61\x72\x64\x4d\x6f\x64\x75\x6c\x65','\x74\x79\x70\x65\x3d\x63\x75\x73\x74\x6f\x6d\x69\x7a\x65\x26\x72\x65\x77\x61\x72\x64\x54\x79\x70\x65\x3d\x63\x6f\x69\x6e\x26\x62\x75\x73\x69\x6e\x65\x73\x73\x4e\x61\x6d\x65\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x5f\x76\x3d\x35\x2e\x30\x33\x2e\x30\x33\x26\x70\x72\x6f\x6a\x3d\x6b\x75\x61\x69\x79\x69\x6e\x5f\x68\x35\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x41\x6e\x64\x72\x6f\x69\x64\x26\x72\x65\x71\x75\x65\x73\x74\x5f\x73\x6f\x75\x72\x63\x65\x3d\x61\x70\x70\x26\x74\x3d\x31\x36\x34\x34\x34\x32\x39\x37\x33\x34\x38\x31\x39\x26\x73\x3d\x6d\x61\x6e\x67\x6f\x25\x37\x43\x37\x33\x43\x43\x46\x33\x43\x44\x39\x36\x43\x36\x36\x32\x42\x30\x33\x30\x44\x39\x37\x34\x42\x37\x44\x38\x39\x33\x31\x37\x30\x33\x41\x38\x32\x42\x39\x38\x31\x30\x33\x42\x33\x43\x41\x32\x30\x45\x42\x43\x37\x32\x35\x35\x43\x41\x33\x30\x34\x38\x43\x39\x37\x30','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20\u606d\u559c\u83b7\u5f97\x20','\x76\x69\x64\x65\x6f\x52\x65\x77\x61\x72\x64','\u7ffb\u500d\u5956\u52b1\u3011\x3a\x20','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x69\x6e\x64\x65\x78\x4f\x66','\x72\x65\x70\x6c\x61\x63\x65','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x56\x69\x64\x65\x6f\x4d\x75\x73\x69\x63\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x70\x69\x2f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x6b\x61\x69\x78\x69\x6e\x79\x66\x2e\x63\x6e\x2f\x61\x70\x69\x2f\x77\x65\x6c\x66\x61\x72\x65\x2f\x67\x65\x74\x4c\x69\x73\x74\x65\x6e\x4d\x75\x73\x69\x63\x52\x65\x77\x61\x72\x64','\x6a\x45\x4b\x7a\x73\x6a\x74\x51\x52\x68\x69\x61\x50\x6d\x54\x69\x49\x79\x44\x4f\x2e\x63\x74\x77\x6e\x52\x6f\x6d\x2e\x76\x36\x3d\x3d'];function _0x5cb1(_0x39a294,_0x12b737){_0x39a294=~~'0x'['concat'](_0x39a294['slice'](0x0));var _0x5eef8d=_0x4938[_0x39a294];return _0x5eef8d;};(function(_0x485c7b,_0x4f3297){var _0x3a3404=0x0;for(_0x4f3297=_0x485c7b['shift'](_0x3a3404>>0x2);_0x4f3297&&_0x4f3297!==(_0x485c7b['pop'](_0x3a3404>>0x3)+'')['replace'](/[EKztQRhPTIyDOtwnR=]/g,'');_0x3a3404++){_0x3a3404=_0x3a3404^0xd27bf;}}(_0x4938,_0x5cb1));const CryptoJS=require(_0x5cb1('0'));const fs=require('\x66\x73');const kyin_variable=$[_0x5cb1('1')]()?require(_0x5cb1('2')):'';let app_soy_kyin_data=[],soy_kyin_UA='',preservation='';!(async()=>{console[_0x5cb1('3')](_0x5cb1('4')+new Date(new Date()[_0x5cb1('5')]()+new Date()[_0x5cb1('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x5cb1('7')]()+_0x5cb1('8'));console[_0x5cb1('3')](_0x5cb1('9')+kyin_variable[_0x5cb1('a')][_0x5cb1('b')][_0x5cb1('c')]+_0x5cb1('d'));if(kyin_variable[_0x5cb1('e')]!=0xc8){console[_0x5cb1('3')](_0x5cb1('f'));return;}subTitle='';for(i=0x0;i<kyin_variable[_0x5cb1('a')][_0x5cb1('b')][_0x5cb1('c')];i++){let _0x7f63e2=kyin_variable[_0x5cb1('a')][_0x5cb1('b')][i][_0x5cb1('10')]('\x26');if(_0x7f63e2[_0x5cb1('c')]!=0x3){console[_0x5cb1('3')](_0x5cb1('11'));return;}else{current=kyin_variable[_0x5cb1('a')][_0x5cb1('b')][i];device=_0x7f63e2[0x0];access_token=_0x7f63e2[0x1];refresh_token=_0x7f63e2[0x2];}$[_0x5cb1('12')]=i+0x1;console[_0x5cb1('3')](_0x5cb1('13')+$[_0x5cb1('12')]+_0x5cb1('14'));await implement();};if(notify){if(subTitle){await notify[_0x5cb1('15')]($[_0x5cb1('16')],subTitle);}}})()[_0x5cb1('17')](_0x47090c=>$[_0x5cb1('18')](_0x47090c))[_0x5cb1('19')](()=>$[_0x5cb1('1a')]());async function implement(){await SendCoin();await sign();await GetWelfarePageTask();await Time2Reward();await MyWelfare();}async function sign(){if(new Date()[_0x5cb1('1b')]()==0x6&&new Date()[_0x5cb1('1c')]()<0x1e){await callback(_0x5cb1('1d'),_0x5cb1('1d'),'\u7b7e\u5230','\x73');}}function Time2Reward(){if(new Date()[_0x5cb1('1b')]()==0x8||new Date()[_0x5cb1('1b')]()==0x9||new Date()[_0x5cb1('1b')]()==0xa||new Date()[_0x5cb1('1b')]()==0xb||new Date()[_0x5cb1('1b')]()==0xc||new Date()[_0x5cb1('1b')]()==0xd||new Date()[_0x5cb1('1b')]()==0x10||new Date()[_0x5cb1('1b')]()==0x12||new Date()[_0x5cb1('1b')]()==0x13||new Date()[_0x5cb1('1b')]()==0x14||new Date()[_0x5cb1('1b')]()==0x15){let _0x476b3e=Post_request(_0x5cb1('1e'),_0x5cb1('1f'),0x0);return new Promise((_0x4a8eee,_0xfd8fa8)=>{$[_0x5cb1('20')](_0x476b3e,async(_0x3ca85f,_0x168dcf,_0x601232)=>{try{if(_0x3ca85f){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('22'));subTitle+=_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('22');}else{let _0x291e65=JSON[_0x5cb1('23')](_0x601232);if(_0x291e65[_0x5cb1('e')]==0x0){}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('24')+_0x291e65[_0x5cb1('25')]);}}}catch(_0x11aa22){console[_0x5cb1('3')](_0x11aa22,_0x168dcf);}finally{_0x4a8eee();}});});}}function SendCoin(){let _0xed1fd6=Post_request(_0x5cb1('26'),_0x5cb1('27'),0x1);return new Promise((_0x3b1c41,_0x581ff8)=>{$[_0x5cb1('20')](_0xed1fd6,async(_0x268627,_0x2b1e92,_0x49d1f8)=>{try{if(_0x268627){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('28'));subTitle+=_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('28');}else{let _0x385ba7=JSON[_0x5cb1('23')](_0x49d1f8);if(_0x385ba7[_0x5cb1('e')]==0x0){if(_0x385ba7[_0x5cb1('29')][_0x5cb1('2a')]==_0x5cb1('2b')){await OpenGoldEgg();await callback('','',_0x5cb1('2c'),'\x65');}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('2d')+_0x385ba7[_0x5cb1('29')][_0x5cb1('2e')]+_0x5cb1('2f'));}}else if(_0x385ba7[_0x5cb1('e')]==0x2715){await get_token();}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('30')+_0x385ba7[_0x5cb1('25')]);}}}catch(_0x4e7b04){console[_0x5cb1('3')](_0x4e7b04,_0x2b1e92);}finally{_0x3b1c41();}});});}function OpenGoldEgg(){let _0x4d9023=Post_request(_0x5cb1('31'),_0x5cb1('32'),0x1);return new Promise((_0x279479,_0x17b56c)=>{$[_0x5cb1('20')](_0x4d9023,async(_0x4ca15f,_0x49ce18,_0x55d5b9)=>{try{if(_0x4ca15f){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('33'));subTitle+=_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('33');}else{let _0x582113=JSON[_0x5cb1('23')](_0x55d5b9);if(_0x582113[_0x5cb1('e')]==0x0){await DrawLottery(_0x582113[_0x5cb1('29')][_0x5cb1('34')][_0x5cb1('35')]);}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('36')+_0x582113[_0x5cb1('25')]);}}}catch(_0x2d5938){console[_0x5cb1('3')](_0x2d5938,_0x49ce18);}finally{_0x279479();}});});}function DrawLottery(_0x22df3b){let _0x5056aa=Post_request(_0x5cb1('37'),_0x5cb1('38')+_0x22df3b+_0x5cb1('39'),0x1);return new Promise((_0xf86190,_0x16e132)=>{$[_0x5cb1('20')](_0x5056aa,async(_0x44a8d2,_0x589879,_0x474742)=>{try{if(_0x44a8d2){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('33'));subTitle+=_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('33');}else{let _0x4cf656=JSON[_0x5cb1('23')](_0x474742);if(_0x4cf656[_0x5cb1('e')]==0x0){_0x22df3b=_0x4cf656[_0x5cb1('29')][_0x5cb1('34')][_0x5cb1('35')];await callback('','',_0x5cb1('2c'),'\x65');}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('36')+_0x4cf656[_0x5cb1('25')]);}}}catch(_0x4d0311){console[_0x5cb1('3')](_0x4d0311,_0x589879);}finally{_0xf86190();}});});}function get_token(){let _0x3513e1=Post_request(_0x5cb1('3a'),_0x5cb1('3b')+refresh_token+_0x5cb1('3c'),0x0);return new Promise((_0xbc8ee6,_0x29e9a1)=>{$[_0x5cb1('20')](_0x3513e1,async(_0x623cc,_0x243277,_0x5d8909)=>{try{if(_0x623cc){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('3d'));subTitle+=_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('3d');}else{let _0x3b154e=JSON[_0x5cb1('23')](_0x5d8909);if(_0x3b154e[_0x5cb1('e')]==0x0){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('3e'));access_token=_0x3b154e[_0x5cb1('29')][_0x5cb1('3f')];refresh_token=_0x3b154e[_0x5cb1('29')][_0x5cb1('40')];await get_variable();}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('41')+_0x3b154e[_0x5cb1('25')]);}}}catch(_0x4ef720){console[_0x5cb1('3')](_0x4ef720,_0x243277);}finally{_0xbc8ee6();}});});}function SignIn(_0x346b6f){let _0x29f737=Post_request_h5(_0x5cb1('42'),_0x5cb1('43')+access_token+_0x5cb1('44')+device+_0x5cb1('45'));return new Promise((_0x540408,_0x374293)=>{$[_0x5cb1('20')](_0x29f737,async(_0x530f18,_0x4af43e,_0x438707)=>{try{if(_0x530f18){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x346b6f+_0x5cb1('46'));subTitle+=_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x346b6f+_0x5cb1('46');}else{let _0x1454b9=JSON[_0x5cb1('23')](_0x438707);if(_0x1454b9[_0x5cb1('e')]==0x0){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x346b6f+_0x5cb1('47')+_0x1454b9[_0x5cb1('29')][_0x5cb1('48')]+_0x5cb1('2f'));}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x346b6f+_0x5cb1('49')+_0x1454b9[_0x5cb1('25')]);}}}catch(_0x301c11){console[_0x5cb1('3')](_0x301c11,_0x4af43e);}finally{_0x540408();}});});}function MyWelfare(){let _0x25fad4=Post_request_h5(_0x5cb1('4a'),_0x5cb1('43')+access_token+_0x5cb1('44')+device+_0x5cb1('4b'));return new Promise((_0x26a7c4,_0x20d828)=>{$[_0x5cb1('20')](_0x25fad4,async(_0x43eaee,_0x15204e,_0x8183cd)=>{try{if(_0x43eaee){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('4c'));subTitle+=_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('4c');}else{let _0x4b2a8a=JSON[_0x5cb1('23')](_0x8183cd);if(_0x4b2a8a[_0x5cb1('e')]==0x0){if(_0x4b2a8a[_0x5cb1('29')][_0x5cb1('4d')][_0x5cb1('4e')]==0x1){await SignIn('\u7b7e\u5230');}for(let _0x3a6123 of _0x4b2a8a[_0x5cb1('29')][_0x5cb1('4f')][0x0][_0x5cb1('50')]){if(_0x3a6123[_0x5cb1('51')]==_0x5cb1('52')){if(_0x3a6123[_0x5cb1('53')]==0x1){await GetReward(_0x3a6123[_0x5cb1('51')],_0x3a6123[_0x5cb1('54')]);await getRewardModule(_0x3a6123[_0x5cb1('55')],_0x3a6123[_0x5cb1('54')]);}}if(new Date()[_0x5cb1('1b')]()>0xb&&new Date()[_0x5cb1('1b')]()<0xd||new Date()[_0x5cb1('1b')]()>0x13&&new Date()[_0x5cb1('1b')]()<0x16){if(_0x3a6123[_0x5cb1('51')]==_0x5cb1('56')){if(_0x3a6123[_0x5cb1('53')]==0x0){await callback(_0x5cb1('57'),_0x5cb1('58'),_0x3a6123[_0x5cb1('54')],'\x76');}else if(_0x3a6123[_0x5cb1('53')]==0x1){await GetReward(_0x5cb1('56'),_0x3a6123[_0x5cb1('54')]);await getRewardModule(_0x5cb1('59'),_0x3a6123[_0x5cb1('54')]);}}}}for(let _0x2cb568 of _0x4b2a8a[_0x5cb1('29')][_0x5cb1('50')][_0x5cb1('5a')]){if(_0x2cb568[_0x5cb1('53')]==0x1){await GetReward(_0x2cb568[_0x5cb1('51')],_0x2cb568[_0x5cb1('54')]);await getRewardModule(_0x2cb568[_0x5cb1('55')],_0x2cb568[_0x5cb1('54')]);}}}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('5b')+_0x4b2a8a[_0x5cb1('25')]);}}}catch(_0xe27346){console[_0x5cb1('3')](_0xe27346,_0x15204e);}finally{_0x26a7c4();}});});}function GetWelfarePageTask(){let _0x1e3ed5=Post_request_h5(_0x5cb1('5c'),_0x5cb1('5d')+access_token+_0x5cb1('5e')+device+_0x5cb1('5f'));return new Promise((_0x6f897b,_0x157b33)=>{$[_0x5cb1('20')](_0x1e3ed5,async(_0x4a328f,_0x16d968,_0x3ff3b9)=>{try{if(_0x4a328f){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('60'));subTitle+=_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('60');}else{let _0x73403b=JSON[_0x5cb1('23')](_0x3ff3b9);if(_0x73403b[_0x5cb1('e')]==0x0){for(let _0x1932d2 of _0x73403b[_0x5cb1('29')][_0x5cb1('5a')]){if(_0x1932d2[_0x5cb1('51')]==_0x5cb1('61')){if(_0x1932d2[_0x5cb1('53')]==0x1){await GetReward(_0x5cb1('61'),_0x1932d2[_0x5cb1('54')]);await getRewardModule(_0x5cb1('62'),_0x1932d2[_0x5cb1('54')]);}}if(_0x1932d2[_0x5cb1('51')]==_0x5cb1('63')){if(_0x1932d2[_0x5cb1('53')]==0x1){await GetReward(_0x5cb1('63'),_0x1932d2[_0x5cb1('54')]);await getRewardModule(_0x5cb1('64'),_0x1932d2[_0x5cb1('54')]);}}if(_0x1932d2[_0x5cb1('51')]==_0x5cb1('65')){if(_0x1932d2[_0x5cb1('53')]==0x1){await GetReward(_0x5cb1('65'),_0x1932d2[_0x5cb1('54')]);await getRewardModule(_0x5cb1('64'),_0x1932d2[_0x5cb1('54')]);}}if(_0x1932d2[_0x5cb1('51')]==_0x5cb1('66')){if(_0x1932d2[_0x5cb1('53')]==0x1){await GetReward(_0x5cb1('66'),_0x1932d2[_0x5cb1('54')]);await getRewardModule(_0x5cb1('64'),_0x1932d2[_0x5cb1('54')]);}}if(_0x1932d2[_0x5cb1('51')]==_0x5cb1('67')){for(let _0x5626fd of _0x1932d2[_0x5cb1('68')][_0x5cb1('69')]){if(_0x5626fd[_0x5cb1('6a')]==0x1){await GetReward_music(_0x5626fd['\x69\x64'],_0x1932d2[_0x5cb1('54')]);await getRewardModule(_0x5cb1('64'),_0x1932d2[_0x5cb1('54')]);}}}if(_0x1932d2[_0x5cb1('51')]==_0x5cb1('6b')){if(_0x1932d2[_0x5cb1('68')][_0x5cb1('6c')]<0x16){await callback(_0x5cb1('6b'),_0x5cb1('6d'),_0x1932d2[_0x5cb1('54')]);await getRewardModule(_0x5cb1('6e'),_0x1932d2[_0x5cb1('54')]);for(let _0x328f1a of _0x1932d2[_0x5cb1('68')][_0x5cb1('69')]){if(_0x328f1a[_0x5cb1('6a')]==0x1){await GetAdVideoBigReward(_0x5cb1('6f'),_0x1932d2[_0x5cb1('54')]);await getRewardModule(_0x5cb1('6e'),_0x1932d2[_0x5cb1('54')]);}}}}if(new Date()[_0x5cb1('1b')]()>0xb&&new Date()[_0x5cb1('1b')]()<0xd||new Date()[_0x5cb1('1b')]()>0x13&&new Date()[_0x5cb1('1b')]()<0x16){if(_0x1932d2[_0x5cb1('51')]==_0x5cb1('70')){if(_0x1932d2[_0x5cb1('53')]==0x0){await callback(_0x5cb1('57'),_0x5cb1('6d'),_0x1932d2[_0x5cb1('54')],'\x76');}else if(_0x1932d2[_0x5cb1('53')]==0x1){await GetReward(_0x5cb1('70'),_0x1932d2[_0x5cb1('54')]);await getRewardModule(_0x5cb1('59'),_0x1932d2[_0x5cb1('54')]);}}}}}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+_0x5cb1('71')+_0x73403b[_0x5cb1('25')]);}}}catch(_0x42e594){console[_0x5cb1('3')](_0x42e594,_0x16d968);}finally{_0x6f897b();}});});}function GetAdVideoBigReward(_0x468204,_0x1fbd28){let _0xc2670c=Post_request_h5(_0x5cb1('72'),_0x5cb1('73')+_0x468204+_0x5cb1('74')+access_token+_0x5cb1('44')+device+_0x5cb1('45'));return new Promise((_0x4212ad,_0x92e8d7)=>{$[_0x5cb1('20')](_0xc2670c,async(_0x2b11aa,_0xfa5de3,_0x1c7a03)=>{try{if(_0x2b11aa){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x1fbd28+_0x5cb1('46'));subTitle+=_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x1fbd28+_0x5cb1('46');}else{let _0x4e5eb4=JSON[_0x5cb1('23')](_0x1c7a03);if(_0x4e5eb4[_0x5cb1('e')]==0x0){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x1fbd28+_0x5cb1('47')+_0x4e5eb4[_0x5cb1('29')][_0x5cb1('75')]+_0x5cb1('2f'));}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x1fbd28+_0x5cb1('49')+_0x4e5eb4[_0x5cb1('25')]);}}}catch(_0x93f038){console[_0x5cb1('3')](_0x93f038,_0xfa5de3);}finally{_0x4212ad();}});});}function callback(_0xcb3930,_0x45378a,_0x46b4c0,_0x17dd49){let _0xd2f82d='';if(_0x17dd49=='\x76'){_0xd2f82d=_0x5cb1('76');}else if(_0x17dd49=='\x73'){_0xd2f82d=_0x5cb1('77');}else if(_0x17dd49=='\x65'){_0xd2f82d=_0x5cb1('78');}else{_0xd2f82d=_0x5cb1('79')+_0xcb3930+_0x5cb1('7a')+_0x45378a+_0x5cb1('7b');}let _0x17aa89={'\x75\x72\x6c':_0x5cb1('7c'),'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x5cb1('7d'),'content-length':_0xd2f82d[_0x5cb1('c')],'accept-encoding':_0x5cb1('7e'),'user-agent':_0x5cb1('7f'),'platform':_0x5cb1('80'),'client-v':_0x5cb1('81'),'device-id':device,'access-token':access_token,'user-agent':_0x5cb1('82')},'\x62\x6f\x64\x79':_0xd2f82d};return new Promise((_0x3cd93d,_0x526d93)=>{$[_0x5cb1('20')](_0x17aa89,async(_0x1ca167,_0x276cfd,_0x32ee1a)=>{try{if(_0x1ca167){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x46b4c0+_0x5cb1('83'));subTitle+=_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x46b4c0+_0x5cb1('83');}else{let _0x293a52=JSON[_0x5cb1('23')](_0x32ee1a);if(_0x293a52[_0x5cb1('e')]==0x0){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x46b4c0+_0x5cb1('84')+_0x293a52[_0x5cb1('25')]);}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x46b4c0+_0x5cb1('84')+_0x293a52[_0x5cb1('25')]);}}}catch(_0x163179){console[_0x5cb1('3')](_0x163179,_0x276cfd);}finally{_0x3cd93d();}});});}function GetReward_music(_0x553eb5,_0x201824){let _0x14648b=Post_request_m(_0x5cb1('85')+_0x553eb5+_0x5cb1('74')+access_token+_0x5cb1('44')+device+_0x5cb1('45'));return new Promise((_0x56349a,_0x9c8158)=>{$[_0x5cb1('20')](_0x14648b,async(_0x420173,_0x9ee76a,_0x3f1d0f)=>{try{if(_0x420173){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x201824+_0x5cb1('46'));subTitle+=_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x201824+_0x5cb1('46');}else{let _0xd1f33d=JSON[_0x5cb1('23')](_0x3f1d0f);if(_0xd1f33d[_0x5cb1('e')]==0x0){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x201824+_0x5cb1('47')+_0xd1f33d[_0x5cb1('29')][_0x5cb1('75')]+_0x5cb1('2f'));}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x201824+_0x5cb1('49')+_0xd1f33d[_0x5cb1('25')]);}}}catch(_0x32c42d){console[_0x5cb1('3')](_0x32c42d,_0x9ee76a);}finally{_0x56349a();}});});}function GetReward(_0x3d527c,_0x1333bb){let _0x4552bc=Post_request_h5(_0x5cb1('86'),_0x5cb1('73')+_0x3d527c+_0x5cb1('74')+access_token+_0x5cb1('44')+device+_0x5cb1('45'));return new Promise((_0x2587d0,_0x5e2b62)=>{$[_0x5cb1('20')](_0x4552bc,async(_0x22262f,_0x5473df,_0x3a3e63)=>{try{if(_0x22262f){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x1333bb+_0x5cb1('87'));subTitle+=_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x1333bb+_0x5cb1('87');}else{let _0x17515d=JSON[_0x5cb1('23')](_0x3a3e63);if(_0x17515d[_0x5cb1('e')]==0x0){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x1333bb+_0x5cb1('88')+_0x17515d[_0x5cb1('29')][_0x5cb1('75')]+_0x5cb1('2f'));}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x1333bb+_0x5cb1('89')+_0x17515d[_0x5cb1('25')]);}}}catch(_0x7a59e4){console[_0x5cb1('3')](_0x7a59e4,_0x5473df);}finally{_0x2587d0();}});});}function getRewardModule(_0x3c7668,_0x233fc1){let _0x30b29b=Post_request_h5(_0x5cb1('8a'),_0x5cb1('8b')+_0x3c7668+_0x5cb1('74')+access_token+_0x5cb1('44')+device+_0x5cb1('8c'));return new Promise((_0x564635,_0x1a3ec0)=>{$[_0x5cb1('20')](_0x30b29b,async(_0x53436c,_0x4e025e,_0x28c4fe)=>{try{if(_0x53436c){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x233fc1+_0x5cb1('8d'));subTitle+=_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x233fc1+_0x5cb1('8d');}else{let _0x3a5176=JSON[_0x5cb1('23')](_0x28c4fe);if(_0x3a5176[_0x5cb1('e')]==0x0){console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x233fc1+_0x5cb1('8e')+_0x3a5176[_0x5cb1('29')][_0x5cb1('8f')]+_0x5cb1('2f'));}else{console[_0x5cb1('3')](_0x5cb1('21')+$[_0x5cb1('12')]+'\x20'+_0x233fc1+_0x5cb1('90')+_0x3a5176[_0x5cb1('25')]);}}}catch(_0x5841ec){console[_0x5cb1('3')](_0x5841ec,_0x4e025e);}finally{_0x564635();}});});}function get_variable(){let _0x3f16a0=fs[_0x5cb1('91')](_0x5cb1('2'))[_0x5cb1('92')]();variable_left=_0x3f16a0[_0x5cb1('93')](0x0,_0x3f16a0[_0x5cb1('94')](current));let _0x2182ad=_0x3f16a0[_0x5cb1('c')]-variable_left[_0x5cb1('c')]-current[_0x5cb1('c')];variable_right=_0x3f16a0[_0x5cb1('93')](_0x3f16a0[_0x5cb1('c')]-_0x2182ad,_0x3f16a0[_0x5cb1('c')]);let _0x188e5f=device+'\x26'+access_token+'\x26'+refresh_token;let _0x7b0bcf=_0x3f16a0[_0x5cb1('95')](new RegExp(current,'\x67\x69'),_0x188e5f);fs[_0x5cb1('96')](_0x5cb1('2'),_0x7b0bcf,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x18a893){if(_0x18a893){console[_0x5cb1('3')](_0x18a893);}});}function Post_request(_0x47d9bc,_0x5a2561,_0x3e5747){if(_0x3e5747==0x0){host=_0x5cb1('97');}else{host=_0x5cb1('98');}return{'\x75\x72\x6c':''+host+_0x47d9bc,'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x5cb1('7d'),'content-length':_0x5a2561[_0x5cb1('c')],'accept-encoding':_0x5cb1('7e'),'user-agent':_0x5cb1('7f'),'platform':_0x5cb1('80'),'client-v':_0x5cb1('81'),'device-id':device,'access-token':access_token,'user-agent':_0x5cb1('82')},'\x62\x6f\x64\x79':_0x5a2561};};function Post_request_h5(_0x15336a,_0xae72c5){let _0x3f21a7=_0x5cb1('99')+_0x15336a;return{'\x75\x72\x6c':_0x3f21a7,'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x5cb1('7d'),'content-length':_0xae72c5[_0x5cb1('c')],'accept-encoding':_0x5cb1('7e'),'user-agent':_0x5cb1('7f'),'platform':_0x5cb1('80'),'client-v':_0x5cb1('81'),'device-id':device,'access-token':access_token,'user-agent':_0x5cb1('82')},'\x62\x6f\x64\x79':_0xae72c5};};function Post_request_m(_0x3a50fd){return{'\x75\x72\x6c':_0x5cb1('9a'),'\x68\x65\x61\x64\x65\x72\x73':{'content-type':_0x5cb1('7d'),'content-length':_0x3a50fd[_0x5cb1('c')],'accept-encoding':_0x5cb1('7e'),'user-agent':_0x5cb1('7f'),'platform':_0x5cb1('80'),'client-v':_0x5cb1('81'),'device-id':device,'access-token':access_token,'user-agent':_0x5cb1('82')},'\x62\x6f\x64\x79':_0x3a50fd};};;_0xodl='jsjiami.com.v6';


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