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

cron 13 0-23/2 * * * https://gitee.com/soy-tool/app-script/raw/master/app_yhxq.js

*/


const $ = new Env('源火星球');
const notify = $.isNode() ? require('./sendNotify') : '';

var _0xody='jsjiami.com.v6',_0xody_=['_0xody'],_0x9afe=[_0xody,'\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x79\x68\x78\x71\x5f\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x6c\x6f\x67','\x6e\x61\x6d\x65','\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x79\x68\x78\x71\x5f\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x73\x6f\x79\x5f\x79\x68\x78\x71\x5f\x55\x41','\x6b\x65\x79\x73','\x66\x6f\x72\x45\x61\x63\x68','\x70\x75\x73\x68','\x67\x65\x74\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x7d\u63d0\u793a\u3011\uff1a\u672a\u63d0\u4f9b\u53d8\u91cf\x20\x73\x6f\x79\x5f\x79\x68\x78\x71\x5f\x55\x41\x20\x2c\u5c06\u9ed8\u8ba4\u5206\u914d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x73\x69\x67\x6e\x2f\x69\x6e\x64\x65\x78','\x67\x65\x74','\x2d\x2d\x2d\u7b7e\u5230\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x74\x6f\x64\x61\x79\x53\x69\x67\x6e\x49\x6e','\x2d\x2d\x2d\u7b7e\u5230\u72b6\u6001\u3011\x3a\x20','\x6d\x73\x67','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x73\x69\x67\x6e','\x2d\x2d\x2d\u7b7e\u5230\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x67\x65\x74\x2f\x70\x65\x74\x41\x6c\x6c','\x67\x65\x74\x54\x79\x70\x65\x3d\x32\x32\x39\x37\x35\x35\x43\x46\x33\x35\x38\x35\x36\x34\x41\x31\x26\x6e\x75\x6d\x43\x6f\x75\x6e\x74\x3d\x41\x33\x42\x41\x42\x45\x42\x30\x34\x38\x38\x32\x42\x38\x38\x42','\x70\x6f\x73\x74','\x2d\x2d\x2d\u9886\u53d6\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x66\x69\x72\x65\x47\x6f\x6c\x64\x53\x75\x6d\x47\x65\x74','\x2d\x2d\x2d\u9886\u53d6\u3011\x3a\x20\u83b7\u5f97\u706b\u6e90','\uff0c\u517d\u5e01','\x70\x65\x74\x47\x6f\x6c\x64\x53\x75\x6d\x47\x65\x74','\x2d\x2d\x2d\u9886\u53d6\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x72\x65\x70\x6c\x65\x6e\x69\x73\x68\x2f\x65\x6e\x65\x72\x67\x79\x2f\x61\x64\x76','\x6e\x75\x6d\x43\x6f\x75\x6e\x74\x3d\x39\x36\x32\x43\x36\x36\x38\x34\x33\x30\x33\x30\x46\x42\x36\x35\x26\x61\x64\x76\x4c\x65\x6e\x67\x74\x68\x3d\x39\x36\x32\x43\x36\x36\x38\x34\x33\x30\x33\x30\x46\x42\x36\x35','\x2d\x2d\x2d\u5e7f\u544a\u8865\u544a\u80fd\u91cf\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u5e7f\u544a\u8865\u544a\u80fd\u91cf\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x6a\x69\x73\x75\x62\x61\x6e\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x76\x69\x64\x65\x6f\x2f\x70\x65\x74\x2f\x67\x6f\x6c\x64','\x2d\x2d\x2d\u770b\u5e7f\u544a\u5f97\u517d\u5e01\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u770b\u5e7f\u544a\u5f97\u517d\u5e01\u3011\x3a\x20\u83b7\u5f97\x20','\x70\x65\x74\x47\x6f\x6c\x64','\x20\u517d\u5e01','\x72\x65\x73\x69\x64\x75\x65\x43\x6f\x75\x6e\x74','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x2d\x2d\x2d\u770b\u5e7f\u544a\u5f97\u517d\u5e01\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x73\x74\x65\x61\x6c','\x2d\x2d\x2d\u5077\u53d6\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u5077\u53d6\u3011\x3a\x20\u83b7\u5f97\u706b\u6e90','\x73\x74\x65\x61\x6c\x46\x69\x72\x65\x47\x6f\x6c\x64','\x73\x74\x65\x61\x6c\x50\x65\x74\x47\x6f\x6c\x64','\x2d\x2d\x2d\u5077\u53d6\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x70\x65\x74\x2f\x66\x65\x65\x64\x2f\x69\x6e\x64\x65\x78','\x2d\x2d\x2d\u5582\u517b\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x73\x75\x72\x70\x6c\x75\x73\x43\x6f\x75\x6e\x74','\x2d\x2d\x2d\u5582\u517b\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x70\x65\x74\x2f\x66\x65\x65\x64','\x61\x64\x76\x4c\x65\x6e\x67\x74\x68\x3d\x44\x30\x36\x34\x43\x35\x36\x42\x30\x30\x30\x35\x38\x46\x32\x30\x26\x6e\x75\x6d\x43\x6f\x75\x6e\x74\x3d\x44\x30\x36\x34\x43\x35\x36\x42\x30\x30\x30\x35\x38\x46\x32\x30','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x2f\x70\x65\x74','\x2d\x2d\x2d\u63a2\u7d22\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u63a2\u7d22\u72b6\u6001\u3011\x3a\x20\x0a\x2d\x2d\x2d\u63a2\u7d22\u65f6\u957f\uff1a','\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x54\x69\x6d\x65','\x0a\x2d\x2d\x2d\u63a2\u7d22\u6536\u83b7\u6e90\u5e01\uff1a','\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x50\x65\x74\x47\x6f\x6c\x64','\x0a\x2d\x2d\x2d\u63a2\u7d22\u6536\u83b7\u517d\u5e01\uff1a','\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x46\x69\x72\x65\x47\x6f\x6c\x64','\x0a\x2d\x2d\x2d\u63a2\u7d22\u6536\u83b7\u706b\u6e90\uff1a','\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x47\x6f\x6c\x64\x53\x75\x6d','\x0a\x2d\x2d\x2d\u63a2\u7d22\u6536\u83b7\u788e\u7247\uff1a','\x70\x65\x74\x44\x65\x62\x72\x69\x73','\x2d\x2d\x2d\u63a2\u7d22\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x2f\x61\x64\x64\x2f\x74\x69\x6d\x65','\x74\x69\x6d\x65\x41\x64\x76\x3d\x31','\x2d\x2d\x2d\u589e\u52a0\u63a2\u7d22\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u589e\u52a0\u63a2\u7d22\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x65\x78\x70\x65\x64\x69\x74\x69\x6f\x6e\x2f\x67\x65\x74','\x2d\x2d\x2d\u9886\u53d6\u63a2\u7d22\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u9886\u53d6\u63a2\u7d22\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x70\x72\x6f\x70\x2f\x75\x73\x65\x2f\x70\x6f\x77\x65\x72','\x70\x72\x6f\x70\x54\x79\x70\x65\x3d\x31\x26\x70\x72\x6f\x70\x43\x6f\x75\x6e\x74\x3d\x31','\x2d\x2d\x2d\u8865\u5145\u80fd\u91cf\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u8865\u5145\u80fd\u91cf\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x69\x6e\x64\x65\x78\x49\x6e\x66\x6f','\x2d\x2d\x2d\u7528\u6237\u4fe1\u606f\u63d0\u793a\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x6e\x69\x6b\x65\x4e\x61\x6d\x65','\x63\x75\x72\x50\x65\x74\x47\x6f\x6c\x64','\x63\x75\x72\x46\x69\x72\x65\x47\x6f\x6c\x64','\x2d\x2d\x2d\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u706b\u6e90\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u517d\u5e01\uff1a','\x67\x65\x74\x48\x6f\x75\x72\x73','\x72\x6f\x75\x6e\x64','\x2d\x2d\x2d\u7528\u6237\u4fe1\u606f\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x6a\x69\x73\x75\x62\x61\x6e\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x77\x78\x2f\x71\x75\x65\x72\x79\x2f\x62\x61\x6c\x61\x6e\x63\x65','\x2d\x2d\x2d\u63d0\u73b0\u72b6\u6001\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x73\x74\x61\x74\x65','\x2d\x2d\x2d\u63d0\u73b0\u72b6\u6001\u3011\x3a\x20\u4eca\u65e5\u5df2\u63d0\u73b0','\x2d\x2d\x2d\u63d0\u73b0\u72b6\u6001\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x6a\x69\x73\x75\x62\x61\x6e\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x77\x78\x2f\x62\x61\x6c\x61\x6e\x63\x65','\x2d\x2d\x2d\u63d0\u73b0\u3011\x3a\x20\x41\x50\x49\u67e5\u8be2\u8bf7\u6c42\u5931\u8d25','\x2d\x2d\x2d\u63d0\u73b0\u3011\x3a\x20','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x38','\x35\x43\x39\x43\x33\x39\x33\x42\x30\x32\x45\x42\x34\x33\x38\x30\x41\x35\x44\x33\x43\x45\x34\x35\x34\x43\x38\x36\x45\x44\x35\x43','\x42\x65\x61\x72\x65\x72\x20','\x61\x70\x69\x2e\x79\x75\x61\x6e\x68\x75\x6f\x78\x69\x6e\x67\x71\x69\x75\x2e\x63\x6f\x6d','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x6a\x64\x5a\x6e\x73\x6a\x5a\x69\x77\x61\x6d\x69\x48\x2e\x50\x63\x67\x6f\x48\x6d\x48\x2e\x5a\x76\x4c\x51\x36\x55\x3d\x3d'];function _0x5b17(_0x355f86,_0x3f0380){_0x355f86=~~'0x'['concat'](_0x355f86['slice'](0x0));var _0x2cfc36=_0x9afe[_0x355f86];return _0x2cfc36;};(function(_0x462301,_0x76776c){var _0x71f695=0x0;for(_0x76776c=_0x462301['shift'](_0x71f695>>0x2);_0x76776c&&_0x76776c!==(_0x462301['pop'](_0x71f695>>0x3)+'')['replace'](/[dZnZwHPgHHZLQU=]/g,'');_0x71f695++){_0x71f695=_0x71f695^0xd2903;}}(_0x9afe,_0x5b17));let app_soy_yhxq_Authorization=[],app_soy_yhxq_UA=[],subTitle='',withdrawal=![];!(async()=>{if($[_0x5b17('0')]()){if(!process[_0x5b17('1')][_0x5b17('2')]){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('5'));return;}if(process[_0x5b17('1')][_0x5b17('2')]&&process[_0x5b17('1')][_0x5b17('2')][_0x5b17('6')]('\x40')>-0x1){soy_yhxq_Authorization=process[_0x5b17('1')][_0x5b17('2')][_0x5b17('7')]('\x40');}else if(process[_0x5b17('1')][_0x5b17('2')]&&process[_0x5b17('1')][_0x5b17('2')][_0x5b17('6')]('\x0a')>-0x1){soy_yhxq_Authorization=process[_0x5b17('1')][_0x5b17('2')][_0x5b17('7')]('\x0a');}else if(process[_0x5b17('1')][_0x5b17('2')]&&process[_0x5b17('1')][_0x5b17('2')][_0x5b17('6')]('\x23')>-0x1){soy_yhxq_Authorization=process[_0x5b17('1')][_0x5b17('2')][_0x5b17('7')]('\x23');}else{soy_yhxq_Authorization=process[_0x5b17('1')][_0x5b17('2')][_0x5b17('7')]();};if(!process[_0x5b17('1')][_0x5b17('8')]){}else{if(process[_0x5b17('1')][_0x5b17('8')]&&process[_0x5b17('1')][_0x5b17('8')][_0x5b17('6')]('\x40')>-0x1){soy_yhxq_UA=process[_0x5b17('1')][_0x5b17('8')][_0x5b17('7')]('\x40');}else if(process[_0x5b17('1')][_0x5b17('8')]&&process[_0x5b17('1')][_0x5b17('8')][_0x5b17('6')]('\x0a')>-0x1){soy_yhxq_UA=process[_0x5b17('1')][_0x5b17('8')][_0x5b17('7')]('\x0a');}else if(process[_0x5b17('1')][_0x5b17('8')]&&process[_0x5b17('1')][_0x5b17('8')][_0x5b17('6')]('\x23')>-0x1){soy_yhxq_UA=process[_0x5b17('1')][_0x5b17('8')][_0x5b17('7')]('\x23');}else{soy_yhxq_UA=process[_0x5b17('1')][_0x5b17('8')][_0x5b17('7')]();};Object[_0x5b17('9')](soy_yhxq_UA)[_0x5b17('a')](_0x5e1407=>{if(soy_yhxq_UA[_0x5e1407]){app_soy_yhxq_UA[_0x5b17('b')](soy_yhxq_UA[_0x5e1407]);};});}Object[_0x5b17('9')](soy_yhxq_Authorization)[_0x5b17('a')](_0x4c7cb0=>{if(soy_yhxq_Authorization[_0x4c7cb0]){app_soy_yhxq_Authorization[_0x5b17('b')](soy_yhxq_Authorization[_0x4c7cb0]);};});}else{if(!$[_0x5b17('c')](_0x5b17('2'))){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('5'));return;}if($[_0x5b17('c')](_0x5b17('2'))&&$[_0x5b17('c')](_0x5b17('2'))[_0x5b17('6')]('\x40')>-0x1){app_soy_yhxq_Authorization=$[_0x5b17('c')](_0x5b17('2'))[_0x5b17('7')]('\x40');}else if($[_0x5b17('c')](_0x5b17('2'))&&$[_0x5b17('c')](_0x5b17('2'))[_0x5b17('6')]('\x0a')>-0x1){app_soy_yhxq_Authorization=$[_0x5b17('c')](_0x5b17('2'))[_0x5b17('7')]('\x0a');}else if($[_0x5b17('c')](_0x5b17('2'))&&$[_0x5b17('c')](_0x5b17('2'))[_0x5b17('6')]('\x23')>-0x1){app_soy_yhxq_Authorization=$[_0x5b17('c')](_0x5b17('2'))[_0x5b17('7')]('\x23');}else{app_soy_yhxq_Authorization=$[_0x5b17('c')](_0x5b17('2'))[_0x5b17('7')]();};if(!process[_0x5b17('1')][_0x5b17('8')]){}else{if($[_0x5b17('c')](_0x5b17('8'))&&$[_0x5b17('c')](_0x5b17('8'))[_0x5b17('6')]('\x40')>-0x1){app_soy_yhxq_UA=$[_0x5b17('c')](_0x5b17('8'))[_0x5b17('7')]('\x40');}else if($[_0x5b17('c')](_0x5b17('8'))&&$[_0x5b17('c')](_0x5b17('8'))[_0x5b17('6')]('\x0a')>-0x1){app_soy_yhxq_UA=$[_0x5b17('c')](_0x5b17('8'))[_0x5b17('7')]('\x0a');}else if($[_0x5b17('c')](_0x5b17('8'))&&$[_0x5b17('c')](_0x5b17('8'))[_0x5b17('6')]('\x23')>-0x1){app_soy_yhxq_UA=$[_0x5b17('c')](_0x5b17('8'))[_0x5b17('7')]('\x23');}else{app_soy_yhxq_UA=$[_0x5b17('c')](_0x5b17('8'))[_0x5b17('7')]();};Object[_0x5b17('9')](soy_yhxq_UA)[_0x5b17('a')](_0x48336a=>{if(soy_yhxq_UA[_0x48336a]){app_soy_yhxq_UA[_0x5b17('b')](soy_yhxq_UA[_0x48336a]);};});}}console[_0x5b17('3')](_0x5b17('d')+new Date(new Date()[_0x5b17('e')]()+new Date()[_0x5b17('f')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x5b17('10')]()+_0x5b17('11'));console[_0x5b17('3')](_0x5b17('12')+app_soy_yhxq_Authorization[_0x5b17('13')]+_0x5b17('14'));for(i=0x0;i<app_soy_yhxq_Authorization[_0x5b17('13')];i++){soy_yhxq_Authorization=app_soy_yhxq_Authorization[i];soy_yhxq_UA=app_soy_yhxq_UA[i];$[_0x5b17('15')]=i+0x1;console[_0x5b17('3')](_0x5b17('16')+$[_0x5b17('15')]+_0x5b17('17'));if(!soy_yhxq_UA){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('18'));soy_yhxq_UA=_0x5b17('19');}await yhxq_account(0x1);await yhxq_sign_state();await yhxq_petAll();await yhxq_steal();await yhxq_feed_state();await yhxq_expedition();await yhxq_power();await yhxq_adv();await yhxq_gold();await yhxq_account(0x0);};})()[_0x5b17('1a')](_0x38dfae=>$[_0x5b17('1b')](_0x38dfae))[_0x5b17('1c')](()=>$[_0x5b17('1d')]());function yhxq_sign_state(){return new Promise(_0x3d8929=>{let _0x167ace=get_request(_0x5b17('1e'));$[_0x5b17('1f')](_0x167ace,async(_0xa4744a,_0x382347,_0x5557e7)=>{try{if(_0xa4744a){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('20'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0xa4744a));}else{let _0x3149d4=JSON[_0x5b17('22')](_0x5557e7);if(_0x3149d4[_0x5b17('23')]==0xc8){if(_0x3149d4[_0x5b17('24')][_0x5b17('25')]==0x1){await yhxq_sign();}}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('26')+_0x3149d4[_0x5b17('27')]);}}}catch(_0x2abcf0){$[_0x5b17('1b')](_0x2abcf0,_0x382347);}finally{_0x3d8929();}});});}function yhxq_sign(){return new Promise(_0x30f422=>{let _0x553707=get_request(_0x5b17('28'));$[_0x5b17('1f')](_0x553707,async(_0x463593,_0x2ba727,_0x2fa03c)=>{try{if(_0x463593){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('20'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0x463593));}else{let _0x440bd4=JSON[_0x5b17('22')](_0x2fa03c);if(_0x440bd4[_0x5b17('23')]==0xc8){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('29')+_0x440bd4[_0x5b17('27')]);}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('29')+_0x440bd4[_0x5b17('27')]);}}}catch(_0x2cc0fa){$[_0x5b17('1b')](_0x2cc0fa,_0x2ba727);}finally{_0x30f422();}});});}function yhxq_petAll(){return new Promise(_0x1feacd=>{let _0x528c63=get_request(_0x5b17('2a'),_0x5b17('2b'));$[_0x5b17('2c')](_0x528c63,async(_0x37e124,_0x597c29,_0x617a10)=>{try{if(_0x37e124){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('2d'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0x37e124));}else{let _0x526ddd=JSON[_0x5b17('22')](_0x617a10);if(_0x526ddd[_0x5b17('23')]==0xc8){if(_0x526ddd[_0x5b17('24')][_0x5b17('2e')]==0x0){}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('2f')+_0x526ddd[_0x5b17('24')][_0x5b17('2e')]+_0x5b17('30')+_0x526ddd[_0x5b17('24')][_0x5b17('31')]);}}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('32')+_0x526ddd[_0x5b17('27')]);}}}catch(_0x54a03f){$[_0x5b17('1b')](_0x54a03f,_0x597c29);}finally{_0x1feacd();}});});}function yhxq_adv(){return new Promise(_0x306812=>{let _0x3ed327=get_request(_0x5b17('33'),_0x5b17('34'));$[_0x5b17('2c')](_0x3ed327,async(_0x1c2da6,_0x3ed5c7,_0x574675)=>{try{if(_0x1c2da6){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('35'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0x1c2da6));}else{let _0x326a41=JSON[_0x5b17('22')](_0x574675);if(_0x326a41[_0x5b17('23')]==0xc8){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('36')+_0x326a41[_0x5b17('27')]);}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('36')+_0x326a41[_0x5b17('27')]);}}}catch(_0x365220){$[_0x5b17('1b')](_0x365220,_0x3ed5c7);}finally{_0x306812();}});});}function yhxq_gold(){return new Promise(_0x859bc3=>{let _0x38cd50=get_request(_0x5b17('37'));$[_0x5b17('1f')](_0x38cd50,async(_0x2c75ad,_0x2103c5,_0x2f9c58)=>{try{if(_0x2c75ad){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('38'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0x2c75ad));}else{let _0xfe11db=JSON[_0x5b17('22')](_0x2f9c58);if(_0xfe11db[_0x5b17('23')]==0xc8){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('39')+_0xfe11db[_0x5b17('24')][_0x5b17('3a')]+_0x5b17('3b'));let _0x564761=_0xfe11db[_0x5b17('24')][_0x5b17('3c')];if(_0x564761>0x0){await $[_0x5b17('3d')](Math[_0x5b17('3e')](Math[_0x5b17('3f')]()*(0x7d00-0x6d60+0x3e8)+0x6d60));await yhxq_gold();}}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('40')+_0xfe11db[_0x5b17('27')]);}}}catch(_0x366482){$[_0x5b17('1b')](_0x366482,_0x2103c5);}finally{_0x859bc3();}});});}function yhxq_steal(){return new Promise(_0x477fa0=>{let _0x3369d6=get_request(_0x5b17('41'));$[_0x5b17('1f')](_0x3369d6,async(_0x3195d8,_0x3be651,_0x47fa67)=>{try{if(_0x3195d8){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('42'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0x3195d8));}else{let _0x49da01=JSON[_0x5b17('22')](_0x47fa67);if(_0x49da01[_0x5b17('23')]==0xc8){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('43')+_0x49da01[_0x5b17('24')][_0x5b17('44')]+_0x5b17('30')+_0x49da01[_0x5b17('24')][_0x5b17('45')]);await yhxq_steal();}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('46')+_0x49da01[_0x5b17('27')]);}}}catch(_0x2763f5){$[_0x5b17('1b')](_0x2763f5,_0x3be651);}finally{_0x477fa0();}});});}function yhxq_feed_state(){return new Promise(_0xad21c=>{let _0x204549=get_request(_0x5b17('47'));$[_0x5b17('1f')](_0x204549,async(_0x49b143,_0x562b0b,_0xd3029)=>{try{if(_0x49b143){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('48'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0x49b143));}else{let _0x1a0d58=JSON[_0x5b17('22')](_0xd3029);if(_0x1a0d58[_0x5b17('23')]==0xc8){if(_0x1a0d58[_0x5b17('24')][_0x5b17('49')]>0x0){await yhxq_feed();}}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('4a')+_0x1a0d58[_0x5b17('27')]);}}}catch(_0x35b09f){$[_0x5b17('1b')](_0x35b09f,_0x562b0b);}finally{_0xad21c();}});});}function yhxq_feed(){return new Promise(_0x46d460=>{let _0x812983=get_request(_0x5b17('4b'),_0x5b17('4c'));$[_0x5b17('2c')](_0x812983,async(_0x39bea7,_0x3f7842,_0x3e5918)=>{try{if(_0x39bea7){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('48'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0x39bea7));}else{let _0x26d19a=JSON[_0x5b17('22')](_0x3e5918);if(_0x26d19a[_0x5b17('23')]==0xc8){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('4a')+_0x26d19a[_0x5b17('27')]);await $[_0x5b17('3d')](Math[_0x5b17('3e')](Math[_0x5b17('3f')]()*(0x7d00-0x6d60+0x3e8)+0x6d60));await yhxq_feed_state();}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('4a')+_0x26d19a[_0x5b17('27')]);}}}catch(_0x3e291b){$[_0x5b17('1b')](_0x3e291b,_0x3f7842);}finally{_0x46d460();}});});}function yhxq_expedition(){return new Promise(_0x7da90=>{let _0x33ee2e=get_request(_0x5b17('4d'));$[_0x5b17('1f')](_0x33ee2e,async(_0xe3494,_0x230ce9,_0x430e41)=>{try{if(_0xe3494){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('4e'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0xe3494));}else{let _0x5264ce=JSON[_0x5b17('22')](_0x430e41);if(_0x5264ce[_0x5b17('23')]==0xc8){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('4f')+_0x5264ce[_0x5b17('24')][_0x5b17('50')]+_0x5b17('51')+_0x5264ce[_0x5b17('24')][_0x5b17('52')]+_0x5b17('53')+_0x5264ce[_0x5b17('24')][_0x5b17('54')]+_0x5b17('55')+_0x5264ce[_0x5b17('24')][_0x5b17('56')]+_0x5b17('57')+_0x5264ce[_0x5b17('24')][_0x5b17('58')]);if(Math[_0x5b17('3e')](_0x5264ce[_0x5b17('24')][_0x5b17('50')]/0x3c)==0x0){await yhxq_expedition_time();}if(_0x5264ce[_0x5b17('24')][_0x5b17('52')]>0x0||_0x5264ce[_0x5b17('24')][_0x5b17('54')]>0x0||_0x5264ce[_0x5b17('24')][_0x5b17('56')]>0x0||_0x5264ce[_0x5b17('24')][_0x5b17('58')]>0x0){await yhxq_expedition_get();}}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('59')+_0x5264ce[_0x5b17('27')]);}}}catch(_0x631135){$[_0x5b17('1b')](_0x631135,_0x230ce9);}finally{_0x7da90();}});});}function yhxq_expedition_time(){return new Promise(_0x4d28bc=>{let _0x398899=get_request(_0x5b17('5a'),_0x5b17('5b'));$[_0x5b17('2c')](_0x398899,async(_0x5c6da2,_0x2d4d1f,_0x520958)=>{try{if(_0x5c6da2){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('5c'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0x5c6da2));}else{let _0x442efc=JSON[_0x5b17('22')](_0x520958);if(_0x442efc[_0x5b17('23')]==0xc8){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('5d')+_0x442efc[_0x5b17('27')]);}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('5d')+_0x442efc[_0x5b17('27')]);}}}catch(_0x348ee9){$[_0x5b17('1b')](_0x348ee9,_0x2d4d1f);}finally{_0x4d28bc();}});});}function yhxq_expedition_get(){return new Promise(_0x16898c=>{let _0x1f386c=get_request(_0x5b17('5e'));$[_0x5b17('1f')](_0x1f386c,async(_0x45b459,_0x1fa119,_0x2127c4)=>{try{if(_0x45b459){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('5f'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0x45b459));}else{let _0x336fe9=JSON[_0x5b17('22')](_0x2127c4);if(_0x336fe9[_0x5b17('23')]==0xc8){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('60')+_0x336fe9[_0x5b17('27')]);}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('60')+_0x336fe9[_0x5b17('27')]);}}}catch(_0x387b01){$[_0x5b17('1b')](_0x387b01,_0x1fa119);}finally{_0x16898c();}});});}function yhxq_power(){return new Promise(_0x29a0e6=>{let _0x12a9fe=get_request(_0x5b17('61'),_0x5b17('62'));$[_0x5b17('2c')](_0x12a9fe,async(_0x39a8b1,_0x121bc8,_0x22646b)=>{try{if(_0x39a8b1){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('63'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0x39a8b1));}else{let _0x50d9f8=JSON[_0x5b17('22')](_0x22646b);if(_0x50d9f8[_0x5b17('23')]==0xc8){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('64')+_0x50d9f8[_0x5b17('27')]);}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('64')+_0x50d9f8[_0x5b17('27')]);}}}catch(_0x2da84c){$[_0x5b17('1b')](_0x2da84c,_0x121bc8);}finally{_0x29a0e6();}});});}function yhxq_account(_0x46171a){return new Promise(_0xeabaf1=>{let _0xd1ea76=get_request(_0x5b17('65'));$[_0x5b17('1f')](_0xd1ea76,async(_0x4ae404,_0x3e49cc,_0x12d923)=>{try{if(_0x4ae404){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('66'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0x4ae404));}else{let _0x57510a=JSON[_0x5b17('22')](_0x12d923);if(_0x57510a[_0x5b17('23')]==0xc8){let _0x716f13=_0x57510a[_0x5b17('24')][_0x5b17('67')];let _0xa4f90a=_0x57510a[_0x5b17('24')][_0x5b17('68')];let _0x14f9c5=_0x57510a[_0x5b17('24')][_0x5b17('69')];if(_0x46171a==0x0){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('6a')+_0x716f13+_0x5b17('6b')+_0x14f9c5+_0x5b17('6c')+_0xa4f90a);}if(new Date()[_0x5b17('6d')]()>=0x12){if(Math[_0x5b17('6e')](_0x14f9c5)>=0x1e){await query_balance();}}}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('6f')+_0x57510a[_0x5b17('27')]);}}}catch(_0x1466b7){$[_0x5b17('1b')](_0x1466b7,_0x3e49cc);}finally{_0xeabaf1();}});});}function query_balance(_0x2ea593){return new Promise(_0x59f5a4=>{let _0x3474c5=get_request(_0x5b17('70'));$[_0x5b17('1f')](_0x3474c5,async(_0x47e519,_0x211274,_0x4a955d)=>{try{if(_0x47e519){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('71'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0x47e519));}else{let _0x109df9=JSON[_0x5b17('22')](_0x4a955d);if(_0x109df9[_0x5b17('23')]==0xc8){if(_0x109df9[_0x5b17('24')][_0x5b17('72')]==0x0){await balance();}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('73'));}}else{console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('74')+_0x109df9[_0x5b17('27')]);}}}catch(_0x5cebf6){$[_0x5b17('1b')](_0x5cebf6,_0x211274);}finally{_0x59f5a4();}});});}function balance(){return new Promise(_0x2f1711=>{let _0x550ace=get_request(_0x5b17('75'));$[_0x5b17('1f')](_0x550ace,async(_0x319ece,_0x1ffeb0,_0x3cdae8)=>{try{if(_0x319ece){console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('76'));console[_0x5b17('3')](JSON[_0x5b17('21')](_0x319ece));}else{let _0x15de44=JSON[_0x5b17('22')](_0x3cdae8);console[_0x5b17('3')]('\x0a\u3010'+$[_0x5b17('4')]+_0x5b17('77')+_0x15de44[_0x5b17('27')]);}}catch(_0x20846b){$[_0x5b17('1b')](_0x20846b,_0x1ffeb0);}finally{_0x2f1711();}});});}function get_request(_0x48d439,_0x22c18f){return{'\x75\x72\x6c':''+_0x48d439,'\x68\x65\x61\x64\x65\x72\x73':{'Accept-Language':_0x5b17('78'),'YhxqSecurity':_0x5b17('79'),'User-Agent':''+soy_yhxq_UA,'Authorization':_0x5b17('7a')+soy_yhxq_Authorization,'Host':_0x5b17('7b'),'Connection':_0x5b17('7c'),'Accept-Encoding':_0x5b17('7d'),'Cache-Control':_0x5b17('7e')},'\x62\x6f\x64\x79':_0x22c18f};};_0xody='jsjiami.com.v6';


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