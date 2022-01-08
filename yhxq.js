/*

项目名称:源火星球

每天收益不知道
100火源=1元

项目注册地址:http://reg.yuanhuoxingqiu.com/#/?code=W6ESZO

记得走下邀请码哦,谢谢大佬们

必要变量:

soy_yhxq_Authorization
#抓包请求头里面的Authorization,注意不要 Bearer 和空格
#抓包请求头里面的Authorization,注意不要 Bearer 和空格
#抓包请求头里面的Authorization,注意不要 Bearer 和空格

选填变量
soy_yhxq_UA
#属于网页UA..
#通过抓包获取,不提交默认分配一个

多个号用 @ 或 # 或 换行 隔开

支持v2p手动添加变量,不支持v2p重写

cron 13 0-23/2 * * * yhxq.js

脚本地址：https://gitee.com/soy-tool/app-script/raw/master/app_yhxq.js

*/


const $ = new Env('源火星球');
const notify = $.isNode() ? require('./sendNotify') : '';


var _js='jsjiami.com.v6',_js_=['_js'],a=[_js,'\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x79\x68\x78\x71\x5f\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x6c\x6f\x67','\x6e\x61\x6d\x65','\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x79\x68\x78\x71\x5f\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x73\x6f\x79\x5f\x79\x68\x78\x71\x5f\x55\x41','\x6b\x65\x79\x73','\x66\x6f\x72\x45\x61\x63\x68','\x70\x75\x73\x68','\x67\x65\x74\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x7d\u63d0\u793a\u3011\uff1a\u672a\u63d0\u4f9b\u53d8\u91cf\x20\x73\x6f\x79\x5f\x79\x68\x78\x71\x5f\x55\x41\x20\x2c\u5c06\u9ed8\u8ba4\u5206\u914d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x73\x69\x67\x6e\x2f\x69\x6e\x64\x65\x78','\x67\x65\x74','\x2d\x2d\x2d\u7b7e\u5230\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x74\x6f\x64\x61\x79\x53\x69\x67\x6e\x49\x6e','\x2d\x2d\x2d\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20','\x6d\x73\x67','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x73\x69\x67\x6e','\x2d\x2d\x2d\u7b7e\u5230\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x67\x65\x74\x2f\x70\x65\x74\x41\x6c\x6c','\x67\x65\x74\x54\x79\x70\x65\x3d\x32\x32\x39\x37\x35\x35\x43\x46\x33\x35\x38\x35\x36\x34\x41\x31\x26\x6e\x75\x6d\x43\x6f\x75\x6e\x74\x3d\x41\x33\x42\x41\x42\x45\x42\x30\x34\x38\x38\x32\x42\x38\x38\x42','\x70\x6f\x73\x74','\x2d\x2d\x2d\u9886\u53d6\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x66\x69\x72\x65\x47\x6f\x6c\x64\x53\x75\x6d\x47\x65\x74','\x2d\x2d\x2d\u9886\u53d6\u3011\x3a\x20\u83b7\u5f97\u706b\u6e90','\uff0c\u517d\u5e01','\x70\x65\x74\x47\x6f\x6c\x64\x53\x75\x6d\x47\x65\x74','\x2d\x2d\x2d\u9886\u53d6\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x72\x65\x70\x6c\x65\x6e\x69\x73\x68\x2f\x65\x6e\x65\x72\x67\x79\x2f\x61\x64\x76','\x6e\x75\x6d\x43\x6f\x75\x6e\x74\x3d\x39\x36\x32\x43\x36\x36\x38\x34\x33\x30\x33\x30\x46\x42\x36\x35\x26\x61\x64\x76\x4c\x65\x6e\x67\x74\x68\x3d\x39\x36\x32\x43\x36\x36\x38\x34\x33\x30\x33\x30\x46\x42\x36\x35','\x2d\x2d\x2d\u5e7f\u544a\u8865\u544a\u80fd\u91cf\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u5e7f\u544a\u8865\u544a\u80fd\u91cf\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x6a\x69\x73\x75\x62\x61\x6e\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x76\x69\x64\x65\x6f\x2f\x70\x65\x74\x2f\x67\x6f\x6c\x64','\x2d\x2d\x2d\u770b\u5e7f\u544a\u5f97\u517d\u5e01\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u770b\u5e7f\u544a\u5f97\u517d\u5e01\u3011\x3a\x20\u83b7\u5f97\x20','\x70\x65\x74\x47\x6f\x6c\x64','\x20\u517d\u5e01','\x72\x65\x73\x69\x64\x75\x65\x43\x6f\x75\x6e\x74','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x2d\x2d\x2d\u770b\u5e7f\u544a\u5f97\u517d\u5e01\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x73\x74\x65\x61\x6c','\x2d\x2d\x2d\u5077\u53d6\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u5077\u53d6\u3011\x3a\x20\u83b7\u5f97\u706b\u6e90','\x73\x74\x65\x61\x6c\x46\x69\x72\x65\x47\x6f\x6c\x64','\x73\x74\x65\x61\x6c\x50\x65\x74\x47\x6f\x6c\x64','\x2d\x2d\x2d\u5077\u53d6\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x70\x65\x74\x2f\x66\x65\x65\x64\x2f\x69\x6e\x64\x65\x78','\x2d\x2d\x2d\u5582\u517b\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x73\x75\x72\x70\x6c\x75\x73\x43\x6f\x75\x6e\x74','\x2d\x2d\x2d\u5582\u517b\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x70\x65\x74\x2f\x66\x65\x65\x64','\x61\x64\x76\x4c\x65\x6e\x67\x74\x68\x3d\x44\x30\x36\x34\x43\x35\x36\x42\x30\x30\x30\x35\x38\x46\x32\x30\x26\x6e\x75\x6d\x43\x6f\x75\x6e\x74\x3d\x44\x30\x36\x34\x43\x35\x36\x42\x30\x30\x30\x35\x38\x46\x32\x30','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x2f\x70\x65\x74','\x2d\x2d\x2d\u63a2\u7d22\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u63a2\u7d22\u72b6\u6001\u3011\x3a\x20\x0a\x2d\x2d\x2d\u63a2\u7d22\u65f6\u957f\uff1a','\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x54\x69\x6d\x65','\x0a\x2d\x2d\x2d\u63a2\u7d22\u6536\u83b7\u6e90\u5e01\uff1a','\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x50\x65\x74\x47\x6f\x6c\x64','\x0a\x2d\x2d\x2d\u63a2\u7d22\u6536\u83b7\u517d\u5e01\uff1a','\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x46\x69\x72\x65\x47\x6f\x6c\x64','\x0a\x2d\x2d\x2d\u63a2\u7d22\u6536\u83b7\u706b\u6e90\uff1a','\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x47\x6f\x6c\x64\x53\x75\x6d','\x0a\x2d\x2d\x2d\u63a2\u7d22\u6536\u83b7\u788e\u7247\uff1a','\x70\x65\x74\x44\x65\x62\x72\x69\x73','\x2d\x2d\x2d\u63a2\u7d22\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x2f\x61\x64\x64\x2f\x74\x69\x6d\x65','\x74\x69\x6d\x65\x41\x64\x76\x3d\x31','\x2d\x2d\x2d\u589e\u52a0\u63a2\u7d22\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u589e\u52a0\u63a2\u7d22\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x2f\x67\x65\x74','\x2d\x2d\x2d\u9886\u53d6\u63a2\u7d22\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u9886\u53d6\u63a2\u7d22\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x70\x72\x6f\x70\x2f\x75\x73\x65\x2f\x70\x6f\x77\x65\x72','\x70\x72\x6f\x70\x54\x79\x70\x65\x3d\x31\x26\x70\x72\x6f\x70\x43\x6f\x75\x6e\x74\x3d\x31','\x2d\x2d\x2d\u8865\u5145\u80fd\u91cf\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u8865\u5145\u80fd\u91cf\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x77\x69\x74\x68\x64\x72\x61\x77\x61\x6c','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x38','\x38\x31\x35\x42\x35\x46\x32\x32\x32\x35\x38\x44\x31\x37\x45\x41\x37\x38\x36\x33\x37\x43\x36\x39\x36\x36\x43\x36\x44\x36\x44\x45','\x42\x65\x61\x72\x65\x72\x20','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x77\x69\x74\x68\x64\x72\x61\x77\x61\x6c\x4d\x6f\x6e\x65\x79\x3d','\x26\x77\x69\x74\x68\x64\x72\x61\x77\x61\x6c\x54\x79\x70\x65\x3d\x31','\x2d\x2d\x2d\u63d0\u73b0\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u63d0\u73b0\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x69\x6e\x64\x65\x78\x49\x6e\x66\x6f','\x2d\x2d\x2d\u7528\u6237\u4fe1\u606f\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x6e\x69\x6b\x65\x4e\x61\x6d\x65','\x63\x75\x72\x50\x65\x74\x47\x6f\x6c\x64','\x63\x75\x72\x46\x69\x72\x65\x47\x6f\x6c\x64','\x2d\x2d\x2d\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u706b\u6e90\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u517d\u5e01\uff1a','\x72\x6f\x75\x6e\x64','\x2d\x2d\x2d\u7528\u6237\u4fe1\u606f\u3011\x3a\x20','\x35\x43\x39\x43\x33\x39\x33\x42\x30\x32\x45\x42\x34\x33\x38\x30\x41\x35\x44\x33\x43\x45\x34\x35\x34\x43\x38\x36\x45\x44\x35\x43','\x4a\x46\x6a\x73\x77\x47\x6a\x4b\x69\x42\x61\x6d\x68\x58\x69\x2e\x48\x47\x79\x63\x6f\x6d\x44\x2e\x76\x43\x4e\x36\x3d\x3d'];function b(c,d){c=~~'0x'['concat'](c['slice'](0x0));var e=a[c];return e;};(function(f,g){var h=0x0;for(g=f['shift'](h>>0x2);g&&g!==(f['pop'](h>>0x3)+'')['replace'](/[JFwGKBhXHGyDCN=]/g,'');h++){h=h^0xc96a5;}}(a,b));let app_soy_yhxq_Authorization=[],app_soy_yhxq_UA=[],subTitle='',withdrawal=![];!(async()=>{if($[b('0')]()){if(!process[b('1')][b('2')]){console[b('3')]('\x0a\u3010'+$[b('4')]+b('5'));return;}if(process[b('1')][b('2')]&&process[b('1')][b('2')][b('6')]('\x40')>-0x1){soy_yhxq_Authorization=process[b('1')][b('2')][b('7')]('\x40');}else if(process[b('1')][b('2')]&&process[b('1')][b('2')][b('6')]('\x0a')>-0x1){soy_yhxq_Authorization=process[b('1')][b('2')][b('7')]('\x0a');}else if(process[b('1')][b('2')]&&process[b('1')][b('2')][b('6')]('\x23')>-0x1){soy_yhxq_Authorization=process[b('1')][b('2')][b('7')]('\x23');}else{soy_yhxq_Authorization=process[b('1')][b('2')][b('7')]();};if(!process[b('1')][b('8')]){}else{if(process[b('1')][b('8')]&&process[b('1')][b('8')][b('6')]('\x40')>-0x1){soy_yhxq_UA=process[b('1')][b('8')][b('7')]('\x40');}else if(process[b('1')][b('8')]&&process[b('1')][b('8')][b('6')]('\x0a')>-0x1){soy_yhxq_UA=process[b('1')][b('8')][b('7')]('\x0a');}else if(process[b('1')][b('8')]&&process[b('1')][b('8')][b('6')]('\x23')>-0x1){soy_yhxq_UA=process[b('1')][b('8')][b('7')]('\x23');}else{soy_yhxq_UA=process[b('1')][b('8')][b('7')]();};Object[b('9')](soy_yhxq_UA)[b('a')](c=>{if(soy_yhxq_UA[c]){app_soy_yhxq_UA[b('b')](soy_yhxq_UA[c]);};});}Object[b('9')](soy_yhxq_Authorization)[b('a')](d=>{if(soy_yhxq_Authorization[d]){app_soy_yhxq_Authorization[b('b')](soy_yhxq_Authorization[d]);};});}else{if(!$[b('c')](b('2'))){console[b('3')]('\x0a\u3010'+$[b('4')]+b('5'));return;}if($[b('c')](b('2'))&&$[b('c')](b('2'))[b('6')]('\x40')>-0x1){app_soy_yhxq_Authorization=$[b('c')](b('2'))[b('7')]('\x40');}else if($[b('c')](b('2'))&&$[b('c')](b('2'))[b('6')]('\x0a')>-0x1){app_soy_yhxq_Authorization=$[b('c')](b('2'))[b('7')]('\x0a');}else if($[b('c')](b('2'))&&$[b('c')](b('2'))[b('6')]('\x23')>-0x1){app_soy_yhxq_Authorization=$[b('c')](b('2'))[b('7')]('\x23');}else{app_soy_yhxq_Authorization=$[b('c')](b('2'))[b('7')]();};if(!process[b('1')][b('8')]){}else{if($[b('c')](b('8'))&&$[b('c')](b('8'))[b('6')]('\x40')>-0x1){app_soy_yhxq_UA=$[b('c')](b('8'))[b('7')]('\x40');}else if($[b('c')](b('8'))&&$[b('c')](b('8'))[b('6')]('\x0a')>-0x1){app_soy_yhxq_UA=$[b('c')](b('8'))[b('7')]('\x0a');}else if($[b('c')](b('8'))&&$[b('c')](b('8'))[b('6')]('\x23')>-0x1){app_soy_yhxq_UA=$[b('c')](b('8'))[b('7')]('\x23');}else{app_soy_yhxq_UA=$[b('c')](b('8'))[b('7')]();};Object[b('9')](soy_yhxq_UA)[b('a')](e=>{if(soy_yhxq_UA[e]){app_soy_yhxq_UA[b('b')](soy_yhxq_UA[e]);};});}}console[b('3')](b('d')+new Date(new Date()[b('e')]()+new Date()[b('f')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[b('10')]()+b('11'));console[b('3')](b('12')+app_soy_yhxq_Authorization[b('13')]+b('14'));for(i=0x0;i<app_soy_yhxq_Authorization[b('13')];i++){soy_yhxq_Authorization=app_soy_yhxq_Authorization[i];soy_yhxq_UA=app_soy_yhxq_UA[i];$[b('15')]=i+0x1;console[b('3')](b('16')+$[b('15')]+b('17'));if(!soy_yhxq_UA){console[b('3')]('\x0a\u3010'+$[b('4')]+b('18'));soy_yhxq_UA=b('19');}await yhxq_account(0x1);await yhxq_sign_state();await yhxq_petAll();await yhxq_steal();await yhxq_feed_state();await yhxq_expedition();await yhxq_power();await yhxq_adv();await yhxq_gold();await yhxq_account(0x0);};})()[b('1a')](f=>$[b('1b')](f))[b('1c')](()=>$[b('1d')]());function yhxq_sign_state(){return new Promise(g=>{let h=get_request(b('1e'));$[b('1f')](h,async(i,j,k)=>{try{if(i){console[b('3')]('\x0a\u3010'+$[b('4')]+b('20'));console[b('3')](JSON[b('21')](i));}else{let l=JSON[b('22')](k);if(l[b('23')]==0xc8){if(l[b('24')][b('25')]==0x1){await yhxq_sign();}}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('26')+l[b('27')]);}}}catch(m){$[b('1b')](m,j);}finally{g();}});});}function yhxq_sign(){return new Promise(n=>{let o=get_request(b('28'));$[b('1f')](o,async(p,q,r)=>{try{if(p){console[b('3')]('\x0a\u3010'+$[b('4')]+b('20'));console[b('3')](JSON[b('21')](p));}else{let s=JSON[b('22')](r);if(s[b('23')]==0xc8){console[b('3')]('\x0a\u3010'+$[b('4')]+b('29')+s[b('27')]);}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('29')+s[b('27')]);}}}catch(t){$[b('1b')](t,q);}finally{n();}});});}function yhxq_petAll(){return new Promise(u=>{let v=get_request(b('2a'),b('2b'));$[b('2c')](v,async(w,x,y)=>{try{if(w){console[b('3')]('\x0a\u3010'+$[b('4')]+b('2d'));console[b('3')](JSON[b('21')](w));}else{let z=JSON[b('22')](y);if(z[b('23')]==0xc8){if(z[b('24')][b('2e')]==0x0){}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('2f')+z[b('24')][b('2e')]+b('30')+z[b('24')][b('31')]);}}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('32')+z[b('27')]);}}}catch(A){$[b('1b')](A,x);}finally{u();}});});}function yhxq_adv(){return new Promise(B=>{let C=get_request(b('33'),b('34'));$[b('2c')](C,async(D,E,F)=>{try{if(D){console[b('3')]('\x0a\u3010'+$[b('4')]+b('35'));console[b('3')](JSON[b('21')](D));}else{let G=JSON[b('22')](F);if(G[b('23')]==0xc8){console[b('3')]('\x0a\u3010'+$[b('4')]+b('36')+G[b('27')]);}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('36')+G[b('27')]);}}}catch(H){$[b('1b')](H,E);}finally{B();}});});}function yhxq_gold(){return new Promise(I=>{let J=get_request(b('37'));$[b('1f')](J,async(K,L,M)=>{try{if(K){console[b('3')]('\x0a\u3010'+$[b('4')]+b('38'));console[b('3')](JSON[b('21')](K));}else{let N=JSON[b('22')](M);if(N[b('23')]==0xc8){console[b('3')]('\x0a\u3010'+$[b('4')]+b('39')+N[b('24')][b('3a')]+b('3b'));let O=N[b('24')][b('3c')];if(O>0x0){await $[b('3d')](Math[b('3e')](Math[b('3f')]()*(0x7d00-0x6d60+0x3e8)+0x6d60));await yhxq_gold();}}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('40')+N[b('27')]);}}}catch(P){$[b('1b')](P,L);}finally{I();}});});}function yhxq_steal(){return new Promise(Q=>{let R=get_request(b('41'));$[b('1f')](R,async(S,T,U)=>{try{if(S){console[b('3')]('\x0a\u3010'+$[b('4')]+b('42'));console[b('3')](JSON[b('21')](S));}else{let V=JSON[b('22')](U);if(V[b('23')]==0xc8){console[b('3')]('\x0a\u3010'+$[b('4')]+b('43')+V[b('24')][b('44')]+b('30')+V[b('24')][b('45')]);await yhxq_steal();}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('46')+V[b('27')]);}}}catch(W){$[b('1b')](W,T);}finally{Q();}});});}function yhxq_feed_state(){return new Promise(X=>{let Y=get_request(b('47'));$[b('1f')](Y,async(Z,a0,a1)=>{try{if(Z){console[b('3')]('\x0a\u3010'+$[b('4')]+b('48'));console[b('3')](JSON[b('21')](Z));}else{let a2=JSON[b('22')](a1);if(a2[b('23')]==0xc8){if(a2[b('24')][b('49')]>0x0){await yhxq_feed();}}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('4a')+a2[b('27')]);}}}catch(a3){$[b('1b')](a3,a0);}finally{X();}});});}function yhxq_feed(){return new Promise(a4=>{let a5=get_request(b('4b'),b('4c'));$[b('2c')](a5,async(a6,a7,a8)=>{try{if(a6){console[b('3')]('\x0a\u3010'+$[b('4')]+b('48'));console[b('3')](JSON[b('21')](a6));}else{let a9=JSON[b('22')](a8);if(a9[b('23')]==0xc8){console[b('3')]('\x0a\u3010'+$[b('4')]+b('4a')+a9[b('27')]);await $[b('3d')](Math[b('3e')](Math[b('3f')]()*(0x7d00-0x6d60+0x3e8)+0x6d60));await yhxq_feed_state();}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('4a')+a9[b('27')]);}}}catch(aa){$[b('1b')](aa,a7);}finally{a4();}});});}function yhxq_expedition(){return new Promise(ab=>{let ac=get_request(b('4d'));$[b('1f')](ac,async(ad,ae,af)=>{try{if(ad){console[b('3')]('\x0a\u3010'+$[b('4')]+b('4e'));console[b('3')](JSON[b('21')](ad));}else{let ag=JSON[b('22')](af);if(ag[b('23')]==0xc8){console[b('3')]('\x0a\u3010'+$[b('4')]+b('4f')+ag[b('24')][b('50')]+b('51')+ag[b('24')][b('52')]+b('53')+ag[b('24')][b('54')]+b('55')+ag[b('24')][b('56')]+b('57')+ag[b('24')][b('58')]);if(Math[b('3e')](ag[b('24')][b('50')]/0x3c)==0x0){await yhxq_expedition_time();}if(ag[b('24')][b('52')]>0x0||ag[b('24')][b('54')]>0x0||ag[b('24')][b('56')]>0x0||ag[b('24')][b('58')]>0x0){await yhxq_expedition_get();}}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('59')+ag[b('27')]);}}}catch(ah){$[b('1b')](ah,ae);}finally{ab();}});});}function yhxq_expedition_time(){return new Promise(ai=>{let aj=get_request(b('5a'),b('5b'));$[b('2c')](aj,async(ak,al,am)=>{try{if(ak){console[b('3')]('\x0a\u3010'+$[b('4')]+b('5c'));console[b('3')](JSON[b('21')](ak));}else{let an=JSON[b('22')](am);if(an[b('23')]==0xc8){console[b('3')]('\x0a\u3010'+$[b('4')]+b('5d')+an[b('27')]);}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('5d')+an[b('27')]);}}}catch(ao){$[b('1b')](ao,al);}finally{ai();}});});}function yhxq_expedition_get(){return new Promise(ap=>{let aq=get_request(b('5e'));$[b('1f')](aq,async(ar,as,at)=>{try{if(ar){console[b('3')]('\x0a\u3010'+$[b('4')]+b('5f'));console[b('3')](JSON[b('21')](ar));}else{let au=JSON[b('22')](at);if(au[b('23')]==0xc8){console[b('3')]('\x0a\u3010'+$[b('4')]+b('60')+au[b('27')]);}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('60')+au[b('27')]);}}}catch(av){$[b('1b')](av,as);}finally{ap();}});});}function yhxq_power(){return new Promise(aw=>{let ax=get_request(b('61'),b('62'));$[b('2c')](ax,async(ay,az,aA)=>{try{if(ay){console[b('3')]('\x0a\u3010'+$[b('4')]+b('63'));console[b('3')](JSON[b('21')](ay));}else{let aB=JSON[b('22')](aA);if(aB[b('23')]==0xc8){console[b('3')]('\x0a\u3010'+$[b('4')]+b('64')+aB[b('27')]);}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('64')+aB[b('27')]);}}}catch(aC){$[b('1b')](aC,az);}finally{aw();}});});}function yhxq_withdrawal(aD){return new Promise(aE=>{let aF={'\x75\x72\x6c':b('65'),'\x68\x65\x61\x64\x65\x72\x73':{'Accept-Language':b('66'),'YhxqSecurity':b('67'),'User-Agent':''+soy_yhxq_UA,'Authorization':b('68')+soy_yhxq_Authorization,'Content-Type':b('69'),'Host':b('6a'),'Connection':b('6b'),'Accept-Encoding':b('6c'),'Cache-Control':b('6d')},'\x62\x6f\x64\x79':b('6e')+aD+b('6f')};$[b('2c')](aF,async(aG,aH,aI)=>{try{if(aG){console[b('3')]('\x0a\u3010'+$[b('4')]+b('70'));console[b('3')](JSON[b('21')](aG));}else{let aJ=JSON[b('22')](aI);if(aJ[b('23')]==0xc8){console[b('3')]('\x0a\u3010'+$[b('4')]+b('71')+aJ[b('27')]);await yhxq_account();}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('71')+aJ[b('27')]);}}}catch(aK){$[b('1b')](aK,aH);}finally{aE();}});});}function yhxq_account(aL){return new Promise(aM=>{let aN=get_request(b('72'));$[b('1f')](aN,async(aO,aP,aQ)=>{try{if(aO){console[b('3')]('\x0a\u3010'+$[b('4')]+b('73'));console[b('3')](JSON[b('21')](aO));}else{let aR=JSON[b('22')](aQ);if(aR[b('23')]==0xc8){let aS=aR[b('24')][b('74')];let aT=aR[b('24')][b('75')];let aU=aR[b('24')][b('76')];if(aL==0x0){console[b('3')]('\x0a\u3010'+$[b('4')]+b('77')+aS+b('78')+aU+b('79')+aT);}if(Math[b('7a')](aU)>=0x32){await yhxq_withdrawal(aU);}else{}}else{console[b('3')]('\x0a\u3010'+$[b('4')]+b('7b')+aR[b('27')]);}}}catch(aV){$[b('1b')](aV,aP);}finally{aM();}});});}function get_request(aW,aX){return{'\x75\x72\x6c':''+aW,'\x68\x65\x61\x64\x65\x72\x73':{'Accept-Language':b('66'),'YhxqSecurity':b('7c'),'User-Agent':''+soy_yhxq_UA,'Authorization':b('68')+soy_yhxq_Authorization,'Host':b('6a'),'Connection':b('6b'),'Accept-Encoding':b('6c'),'Cache-Control':b('6d')},'\x62\x6f\x64\x79':aX};};_js='jsjiami.com.v6';


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