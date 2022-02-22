## 使用教程

【拉库】

    ql repo https://github.com/Yiov/wool.git "" "COOKIE"


## 2022-2-22更新

快音更新报错、悟空浏览器更新、腾讯自选股 新版（老版可用的不要运行）



## 2022-2-18不更新说明

一直依赖使用的青龙面板开发者昨晚在群里发了通告，其母亲因为病重已经山穷水尽，希望有能力的能帮一把

这是开发者的群，大家可以去看一下，无论是不是杯水车薪，我先尽绵薄之力吧

https://t.me/jiao_long


## 2022-2-16更新

出于尊重作者劳动成果，脚本不会做改动

### 悟空浏览器 wkllq.js

cron 0-59/15 0-1,6-15,19-23 * * *

<details>
<summary>食用步骤：</summary>
<br />
打开app，即可抓取数据，没有这条的任意host里有值也可

https://api5-normal-lf.toutiaoapi.com/ugc/business_alliance/user_info/

我们需要3个值device_id、x-tt-token、sessionid

> 现在不是用export变量的了，需要添加soy_variable_data.js依赖

在wkllq.js脚本同目录新建soy_variable_data.js文件，把下面的代码粘贴进去

```
module.exports = {"code":200, 
"variable_data":{ 
"wkllq":[{ //悟空浏览器
    "device_id":"409***", //链接上找device_id值
    "x-tt-token":"00b***-1.0.1", //请求头的值
    "sessionid":"b9c***"} //请求头cookie上的值
]
}}
```
修改成自己的变量保存，就可以跑脚本了

多账号模板演示，英文逗号,后跟一个{}里面填数据

```
module.exports = {"code":200, 
"variable_data":{ 
"wkllq":[{ //悟空浏览器
    "device_id":"账号1的device_id值",
    "x-tt-token":"账号1的x-tt-token值",
    "sessionid":"账号1的sessionid值"},{
    "device_id":"账号2的device_id值",
    "x-tt-token":"账号2的x-tt-token值",
    "sessionid":"账号2的sessionid值"} 
]
}}
```

</details>

    //2022-2-16说明：看广告的任务一般都是做不了的，正常现象
    一个支付宝好像可以绑定多个账号,默认提现0.2
    脚本默认跑作者邀请码,如果不想就自行去绑定邀请码后在跑脚本



### 快音 kyin.js

cron 0-59/10 6-20 * * *

<details>
<summary>食用步骤：</summary>
<br />

退出登录-开抓包-微信登录成功后即可获取数据
https://api.kaixinyf.cn/passport/UnionLogin

> device-id值在请求头里面找

> access-token值和refresh_token值在响应的set-cookie里面找，注意只要token的value值

同样的需要同目录有soy_variable_data.js文件，代码参考如下

```
module.exports = {"code":200, 
"variable_data":{ 
"wkllq":[//这里是悟空浏览器的数据，自己别删了
],
"kyin":[//快音
"device-id值&access-token值&refresh_token值",//这是第1个账号
"",//多账号逗号换行
] 
```
</details>

    //2022-2-16说明：注册后自行提现0.3元，如果能到账就可以跑脚本，否则跑了也提现不了


### 中青看点 zqkd

全系更新脚本为v3.9.8，详细看内部教程



## 2022-2-13更新

总有些人说找不到脚本说明，我弄成折叠的吧



### ~删除 口袋庄园 kdzy.js~

Cron 35 0 * * *

<details>
<summary>食用步骤：</summary>
<br />
注册即可，手机号和密码等会要用

http://kdzhy.mlyougame.com:82/web/page/qr.html?c=214736

APP个人中心-收款账号，绑定ZFB

    export soy_kdzy_mobile="手机号"

    export soy_kdzy_password="登录密码"

UA不想填也可以，随机，想填就抓任意包下的UA

http://test2.znvb.cn:82/home/user/

    export soy_kdzy_UA="Mozilla/5.0***"

</details>

    // 2022-2-13删除说明：凉了


### ~删除 天气预报 tqyb.js~


要拉人才能提现，算球






## 2022-1-12更新


### 九章头条 jztt.js

Cron 15 0,6-23 * * *

<details>
<summary>食用步骤：</summary>
<br />
抓get包，进app-任务，抓取token值

https://api.st615.com/v2/user/info

    export jzttToken="***"

自定义阅读次数，默认每次阅读3篇文章

    export jzttReadNum="***"

提现金额，按门槛自动提现，从大到小，默认顺序5元，2元和0.3元

    export jzttWithdrawLimit="***"

</details>

    // 2022-1-12更新：修复文章、提现


### 滴滴果园 dd_fruit.js

cron 10 0,8,12,18 * * *

<details>
<summary>食用步骤：</summary>
<br />
抓get包，进app-5天种水果，浇一次水，搜water

把请求主题中的 token 值复制出来，多账户用,号(英文)隔开

    export DD_TOKEN='token1,token2'

拉库了的记得把dd_cookie.js从运行列表中禁用

</details>

    // 2022-1-12更新：新增转盘抽奖，自动使用背包道具


### 滴滴果园自动收水 dd_bucketWater.js

cron */30 * * * *

用上面的token即可




## 2022-1-8更新


### 闪辆 sl.js

cron 5 0 * * *

<details>
<summary>食用步骤：</summary>
<br />
抓get包，进app-来玩获取url即可

https://newvideo.autohome.com.cn/openapi/activity-api/switch/get_user_switch_info

    export slurl="https://newvideo.autohome.com.cn/openapi/activity-api/switch/get_user_switch_info?_appid=***"

</details>

    // 不知道是我黑号了，看视频没有加积分，手动可以






### 源火星球 yhxq.js

cron 13 0-23/2 * * *

<details>
<summary>食用步骤：</summary>
<br />
注册好后下载app并登录

地址：http://reg.yuanhuoxingqiu.com/

抓get包，登录app即可获取数据，只有Authorization值就行

http://api.yuanhuojisuban.com/user/account

这里的Authorization值，删掉Bearer和空格，只要纯数字的组合

    export soy_yhxq_Authorization="568***"

这里的UA为可选变量，可填可不填

    export soy_yhxq_UA="Mozilla/5.0***"

</details>

    // 可以先跑，金额差不多了，再绑定提现




## 2022-1-3更新



### 快手极速版 ks_js.js

Cron 11 8 * * *（一天一次即可，仅供参考）

<details>
<summary>食用步骤：</summary>
<br />
抓get包，进app-点红包进去，获取Cookie

https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo

    export kshd="Cookie1@Cookie2"

0为不自动提现,0.3为提现3毛，默认自动提现3元

    export kscash="3"

提现时间变量，默认20点提现和金币兑换

    export kstxtime=""

通知变量，默认开启，2为关闭通知

    export kstz=""

</details>

    // 2022-1-3更新：修复报错bug 注意：不刷视频，只挂脚本容易黑号！




### 高佣金(更名：佣金帝) gyj.js

cron 随意，一天一次即可

<details>
<summary>食用步骤：</summary>
<br />
抓包，进APP-签到赚钱，即可获取

https://client.atomsh.com/e00-bee-client/client/act/getGoldCount

复制token值，添加到环境变量
    
    export gyjhd='token1@token2@token3'

</details>

    // 记得金币要手动去商城兑换，然后再提现




## 2021-12-28更新


### 中青看点 新增 看看赚肥皂版 zq_kkz_fz.js

教程在文件内，注意CryptoJS.js文件是依赖文件，别删了，禁用就行






## 2021-12-26更新


### 链萌优选 小程序 wx_lmyx.js

cron 3 0,9,17 * * *

<details>
<summary>食用步骤：</summary>
<br />
抓token和version值，打开APP即可获取，多账户@隔开

https://www.lmyx.shop/web/index.php?store_id=1&r=api/user/index&access_token=***&_version=2.8.9&_platform=wx

    export soy_lmyx_data="token值&2.8.9&支付宝名&支付宝账号&UA"

不开小号给大号送通行证，分红很少，提现基本不够，可以先只使用前2个变量跑，金额多了再加变量上去

</details>

    // 202-12-26新增：提现变量，需要提供ZFB信息





## 2021-12月


### 中国联通 Chinaunicom.js

Cron 5 9,11,18 * * *

<details>
<summary>食用步骤：</summary>
<br />

功能：签到，签到任务，多账号用 @ 分隔

    export ltphone="" #手机号

    export ltpwd="" #登录6位密码

</details>

    // 跑的是app的任务，我至今未打开





### 得间小说 djxs.js

Cron 0 6-23 * * *

<details>
<summary>食用步骤：</summary>
<br />
抓get包，进app-福利-看视频，获取数据

https://dj.palmestore.com/zycl/gold/receive


    export djxsCookie='Cookie1@Cookie2'

    export djxsReferer='Referer1@Referer2'

</details>

    // 提现比较蛋疼，需要同时满足当日阅读120分钟、签到10天、看视频3次



### 饿了么吃货豆 elm.js

Cron 5 12,18 * * * 

<details>
<summary>食用步骤：</summary>
<br />
抓get包，进APP-我的-赚吃货豆，即可获取数据

https://h5.ele.me/svip/task-list

只要cookie，不要cookie2，复制出来包括分号，多账户@隔开

    export elmck='SID=***'


说明：以上数据由IOS设备抓取，安卓机用Alook浏览器或者用M浏览器，UA设置为

    Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4


然后打开h5.ele.me，手机号+验证码登录后，抓的ck就可以用了。第一个参数是__wpk******，最后一个参数是x5check_ele=******

</details>

    // 吃货豆可以换券




### 返利购(更名：利淘优选) flg.js

cron 0,30 8 * * *

<details>
<summary>食用步骤：</summary>
<br />
抓POST包，进APP-我的-签到，即可获取数据

https://api.flgflg.com/htmmall/api/gold/finishedVideoNum

    export flgReferer='抓取的Referer1@抓取的Referer2'

</details>

    // 是我玩过返利内最良心送钱的app



### 返利好省 flhs.js

cron 0 8-23 * * *

<details>
<summary>食用步骤：</summary>
<br />
抓包，进APP-现金福利，即可获取

https://api.uutequan.com/v1/welfare/page

随便哪一个Cookie应该都行


    export flhsCookie='Cookie1@Cookie2'

</details>

    // 扣就一个字





### 机场签到 jcCheck.js

cron 随意，一天一次即可

请第1次拉完库，复制一份到scripts目录，不然每次都会覆盖！

例：
在Yiov_wool/jcCheck.js，复制粘贴到scripts目录，青龙task jcCheck.js，原本的禁用






### 快手果园 ks_fruit.js

Cron 随意，一天一次

<details>
<summary>食用步骤：</summary>
<br />
抓get包，进app-左上角三横-快手果园，获取Cookie

https://ug-fission.kuaishou.com/rest/n/darwin/orchard/water/watering

    export KS_COOKIE='client_key=***;did=***;kuaishou.api_st=***;ud=***;ver=***;'

</details>

    // 默认会助力作者，介意勿玩，代码加密的




### 美团赚米粒 meituan.js

Cron 5 11 * * *

<details>
<summary>食用步骤：</summary>
<br />
进美团官网：https://www.meituan.com

F12审查元素-登录账号-工作台选 网络，找到www.meituan.com的封包，Cookie中找到token值，复制出来

    export mtTk='这里填token值，不带分号'

可关闭神券膨胀，不想关，删除变量

    export sjpz="false"

</details>

    // 米粒有啥用，我还没进app看过





### NTF博物馆

Cron 45 18 * * *

<details>
<summary>食用步骤：</summary>
<br />

下载：http://nftwatches.net

登录APP即可获取token

http://service.nftbwg.net/home/view

视频code2，需要点门票收益获取，广告一直会加载出问题，反复进，有个60几秒的广告就是了

http://mobads.baidu.com/cpro/ui/mads.php?code2=***

注意:提示视频缓存失败，抓不到code值，关掉APP重来。即便抓到了，也不一定能完成,app自身的原因

    export soy_NFT_data="token&视频code2的值"

</details>

    // token有效期好像只有半月，还是几周的，失效记得抓，攒够200万就可以提现了



### 腾讯自选股 txstock.js

cron 35 11,16 * * *

<details>
<summary>食用步骤：</summary>
<br />
注意：APP和公众号都要抓，多账号用#隔开


APP-头像-右上角金币-获取金币，抓get包

https://wzq.tenpay.com/cgi-bin/activity_task_daily.fcgi?


抓到的连接填在下方

    export TxStockAppUrl='https://wzq.ten....#https://wzq.ten....'


请求头header，转换一下格式 https://tooltt.com/header2json/

    export TxStockAppHeader='{"Host":"...","Accept":"..."}#{"Host":"...","Accept":"..."}'



自选股公众号-右下角好福利-福利中心，抓get包

https://wzq.tenpay.com/cgi-bin/activity_task_daily.fcgi?

请求头header，转换一下格式 https://tooltt.com/header2json/

    export TxStockWxHeader='{"Host":"...","Accept":"..."}#{"Host":"...","Accept":"..."}'



提现变量，0代表不提现，1代表提现1元，5代表提现5元

    export TxStockCash='1'

新手变量，0代表不做新手任务，1代表做新手任务

    export TxStockNewbie='1'

分享变量，0代表不做分享互助，1代表做分享互助

    export TxStockHelp='0'

互助变量，0代表不帮助其他用户，否则填用户，用@或者#隔开

    export TxStockHelpOrder='0'


</details>

    // 每天稳定1块，新版的抓不到包，私我下



### 沃邮箱 公众号 wx_wyx.js

cron 11 10 * * *

<details>
<summary>食用步骤：</summary>
<br />
关注公众号:联通沃邮箱-进入邮箱，不知道密码的重置

重置密码：https://user.mail.wo.cn/m/reset?mobile


抓Get包，福利中心-签到领话费，多账号@隔开

https://nyan.mail.wo.cn/cn/sign/index/index?mobile=***&userName=&openId=***

    export soy_wyx_data="手机号#密码#抓包链接https://nyan.mail.wo.cn/cn/sign/index/index?mobile=***&userName=&openId=***"
    
    export soy_wyx_UA="Mozilla/5.0***"

</details>

    // 目前公众号系统在维护，跑不动




### 小米刷步 xmsb.py

cron 随意，一天一次即可

<details>
<summary>食用步骤：</summary>
<br />
请第1次拉完库，复制一份到scripts目录，不然每次都会覆盖！

例：
在Yiov_wool/xmsb.py，复制粘贴到scripts目录，青龙task xmsb.py，原本的禁用


### 注册好小米运动账号，绑定第三方微信

手动修改py里面的数据

账号user = "138****8888"

密码passwd = "******"

修改固定步数值，留空为随机步数

step = "23333"

修改随机范围步数值，与固定步数二选一改

step = str(random.randint(20000, 21000))

</details>

    // 推送通知好像是微信企业微信，我改过其他推送但也没成功，算了


### 萤石云视频 ysy.js

cron 随意，一天一次即可

<details>
<summary>食用步骤：</summary>
<br />
抓3个数据，重新登录！重新登录才可以抓到数据

https://api.ys7.com/v3/users/login/v2

把header转成JSON：https://tooltt.com/header2json/

    export ysyhd=''

body查看表单即可获取

    export ysybody='account=188********'


CK获取

https://api.ys7.com/v3/integral/yd/getUserOpenBoxCd

    export cookie='"ASG_DisplayName=***"'


提现body 查看表单获取数据

https://api.ys7.com/v3/integral/yd/pay

    export txbody='payCode=101006&receiverType=2&receiverId=2********'

</details>

    // 要攒到1块钱是个无比漫长的过程


### 亿享云 yxyapp.js


cron 随意，一天一次即可

<details>
<summary>食用步骤：</summary>
<br />
注册地址：https://ystzwz.com/h6/#/

就是个网页，没有APP的

    export yxyPhone='手机号#密码'

</details>

    // 不知道靠不靠谱，反正一直活着


## 晶彩看点 jckd

文件内有教程



## 水果天气 jctq

文件内有教程









## 特别鸣谢:

* [@whyour](https://github.com/whyour/qinglong)「青龙」
* [@xl2101200](https://github.com/xl2101200/-/)「Tom」
* [@YaphetS0903](https://github.com/YaphetS0903/JStest)「YaphetS」
* [@WindFgg](https://github.com/WindFgg/QuantumultX_Conf/)「WindFgg」
* [@gossh520](https://gitee.com/gossh520/script/)「gossh520」
* [@LubooC](https://gitee.com/xiecoll/radish-script)「萝卜」
* [@leafxcy](https://github.com/leafxcy/JavaScript)「leaf」
* [@shaolin-kongfu](https://github.com/shaolin-kongfu/js_scripts)「少林大佬」
* [@liuqi6968](https://github.com/liuqi6968/-/)「liuqi6968」
* [@ziye888](https://github.com/ziye888/JavaScript)「ziye」
* [@soy](https://gitee.com/soy-tool/app-script)「soy」
* [@passerby-b](https://github.com/passerby-b/didi_fruit)「passerby-b」

