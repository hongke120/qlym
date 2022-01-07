## 使用教程

【拉库】

    ql repo https://github.com/Yiov/wool.git "" "COOKIE"



## 2022-1-7更新


## 中青快应用 更新

更新奖励领取，无需抓body


## ~爱微影 awy.js~

别玩了，我TM秒封，哈哈哈，牛




## 2022-1-5更新


## 中青看点 zqkdFast

新增 安卓 中青看点快应用版



## 2022-1-3更新

大家新年好，上班！开始更新

### 快手极速版 ks_js.js

修复报错bug 注意：不刷视频，只挂脚本容易黑号！

Cron：11 8 * * *（一天一次即可，仅供参考）

抓get包，进app-点红包进去，获取Cookie

https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo

    export kshd="Cookie1@Cookie2"

0为不自动提现,0.3为提现3毛，默认自动提现3元

    export kscash="3"

提现时间变量，默认20点提现和金币兑换

    export kstxtime=""

通知变量，默认开启，2为关闭通知

    export kstz=""




### 滴滴果园 dd_fruit.js

修复token错误，新增吹牛

cron：10 0,8,12,18 * * *

抓get包，进app-5天种水果，浇一次水，搜water

把请求主题中的 token 值复制出来，多账户用,号(英文)隔开

    export DD_TOKEN='token1,token2'

拉库了的记得把dd_cookie.js从运行列表中禁用



### 滴滴果园自动收水 dd_bucketWater.js

cron：*/30 * * * *


用上面的token即可



### 高佣金(更名：佣金帝) gyj.js

我的账号已经黑号，签到异常了，我先禁用了 -_-||

cron：随意，一天一次即可

抓包，进APP-签到赚钱，即可获取

https://client.atomsh.com/e00-bee-client/client/act/getGoldCount

复制token值，添加到环境变量
    
    export gyjhd='token1@token2@token3'



### ~删除 闪辆 sl.js~

~脚本过期了，app也更新了，忘记删了~





## 2021-12-28更新


### 中青看点 新增 看看赚肥皂版 zq_kkz_fz.js

教程在文件内，注意CryptoJS.js文件是依赖文件，别删了，禁用就行



## 2021-12-27更新



### ~删除 睡觉宝 sjb.js~

~作者已删库~




## 2021-12-26更新


### 链萌优选 小程序 wx_lmyx.js

新增提现变量，需要提供ZFB信息

cron：3 0,9,17 * * *

抓token和version值，打开APP即可获取，多账户@隔开

https://www.lmyx.shop/web/index.php?store_id=1&r=api/user/index&access_token=***&_version=2.8.9&_platform=wx

    export soy_lmyx_data="token值&2.8.9&支付宝名&支付宝账号&UA"

不开小号给大号送通行证，分红很少，提现基本不够，可以先只使用前2个变量跑，金额多了再加变量上去





## 2021-12-25 更新


### 中油E宝 zyEb.js

Cron：25 9,12 * * *


注册必须要填邀请码，就用脚本作者的吧，然后签到页面支付宝授权实名一下，和石油没有半毛钱的关系

打开APP即可抓到token，多账号@隔开，比如

http://hc.independentfilm.cn:5259/app/users/getUserinfo


    export soy_zyEb_data="手机号&密码&token"







## 2021-12-23更新


### ~删除 同程夺宝 tcdb.js~

~活动下线了，原入口也变成其他了~


### 晶彩天气 jctq

我已经黑号了，换号也黑了，在右上角设置-注销账号，15天后重新来过吧！15天后！不是立即生效的


没黑的，一天跑签到和满看看赚即可，0.3不香吗


顺便把定时写脚本里了







## 2021-12-22更新


### ~惠猜 hc.js（脚本提示非F请求 凉了 请禁用）~

cron：25 8,12,14,19,21 * * *

下载：http://goodjob.juliym.com/yp/hc/invite-land?product=9166

登录-我的-头像绑定ZFB，右上角齿轮获得ID，答题数量默认500

抓任意一个请求头，找到info-di的值即可

如：http://chick.juliym.com/api/guess/get_user_withdraw_info?userId=***&lotteryDraw=0&version=1

自己手动提现，秒到的，一次性活动，跑完就删

    export soy_hc_data="你的ID&答题数量&info-di的值"





## 2021-12月


### 中国联通 Chinaunicom.js

Cron：5 9,11,18 * * *

功能：签到，签到任务，多账号用 @ 分隔

    export ltphone="" #手机号

    export ltpwd="" #登录6位密码





### ~都爱玩 daw.js（凉了禁用）~

Cron：3 1,20 * * *

抓POST包，进分红币页面获取token

https://v3.sdk.haowusong.com/api/box/wallet/info

找不到这个链接的，只要有token值就行

环境变量，多账户用@隔开


    export dawToken='account1@account2@account3'











### 得间小说 djxs.js

Cron：0 6-23 * * *

抓get包，进app-福利-看视频，获取数据

https://dj.palmestore.com/zycl/gold/receive


    export djxsCookie='Cookie1@Cookie2'

    export djxsReferer='Referer1@Referer2'




### 饿了么吃货豆 elm.js

Cron：5 12,18 * * * 

抓get包，进APP-我的-赚吃货豆，即可获取数据

https://h5.ele.me/svip/task-list

只要cookie，不要cookie2，复制出来包括分号，多账户@隔开

    export elmck='SID=***'


说明：以上数据由IOS设备抓取，安卓机用Alook浏览器或者用M浏览器，UA设置为

    Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4


然后打开h5.ele.me，手机号+验证码登录后，抓的ck就可以用了。第一个参数是__wpk******，最后一个参数是x5check_ele=******






### 返利购(更名：利淘优选) flg.js

cron：0,30 8 * * *

抓POST包，进APP-我的-签到，即可获取数据

https://api.flgflg.com/htmmall/api/gold/finishedVideoNum


    export flgReferer='抓取的Referer1@抓取的Referer2'






### 返利好省 flhs.js

cron：0 8-23 * * *

抓包，进APP-现金福利，即可获取

https://api.uutequan.com/v1/welfare/page

随便哪一个Cookie应该都行


    export flhsCookie='Cookie1@Cookie2'







### 机场签到 jcCheck.js

cron：随意，一天一次即可

请第1次拉完库，复制一份到scripts目录，不然每次都会覆盖！

例：
在Yiov_wool/jcCheck.js，复制粘贴到scripts目录，青龙task jcCheck.js，原本的禁用





### 今日头条极速版 jrttjsb.js

Cron：*/15 6-23 * * *

抓get包，打开APP-任务即可获取，多账户@隔开

https://api3-normal-lq.toutiaoapi.com/luckycat/lite/v1/task/page_data/

安卓抓的host不一样，只要有Cookie就行

https://i.snssdk.com/luckycat/lite/v1/task/page_data/

    export jrttjsbHeader="gftoken=***"

安卓机就不要抓填UA了，苹果的换成自己的UA

    export jrttjsbUA=""





### 九章头条 jztt.js

Cron：0 1-23 * * *

抓get包，进app-任务，抓取token值

https://api.st615.com/v1/user/info

填入jzttCOOKIE.js中

说明：讲txtx的val值改成100，默认按从大到小的提现





### 口袋庄园 kdzy.js

Cron：35 0 * * *

注册即可，手机号和密码等会要用

http://kdzhy.mlyougame.com:82/web/page/qr.html?c=214736

APP个人中心-收款账号，绑定ZFB

    export soy_kdzy_mobile="手机号"

    export soy_kdzy_password="登录密码"

UA不想填也可以，随机，想填就抓任意包下的UA

http://test2.znvb.cn:82/home/user/

    export soy_kdzy_UA="Mozilla/5.0***"






### 快手果园 ks_fruit.js

Cron：随意，一天一次

抓get包，进app-左上角三横-快手果园，获取Cookie

https://ug-fission.kuaishou.com/rest/n/darwin/orchard/water/watering

    export KS_COOKIE='client_key=***;did=***;kuaishou.api_st=***;ud=***;ver=***;'






### 美团赚米粒 meituan.js

Cron：5 11 * * *

进美团官网：https://www.meituan.com

F12审查元素-登录账号-工作台选 网络，找到www.meituan.com的封包，Cookie中找到token值，复制出来

    export mtTk='这里填token值，不带分号'

可关闭神券膨胀，不想关，删除变量

    export sjpz="false"



### 梦想花园 mxhy.js

Cron：1-59/2 * * * *

抓GET或者POST都行，只要有accessKey值，多账户@隔开

https://bp-api.coohua.com/bubuduo-mxhy/game/account

    export mxhykey='账户1的accessKey值@账户2的accessKey值'




### NTF博物馆

Cron：45 18 * * *

下载：http://nftwatches.net

登录APP即可获取token

http://service.nftbwg.net/home/view

视频code2，需要点门票收益获取，广告一直会加载出问题，反复进，有个60几秒的广告就是了

http://mobads.baidu.com/cpro/ui/mads.php?code2=***

注意:提示视频缓存失败，抓不到code值，关掉APP重来。即便抓到了，也不一定能完成,app自身的原因

    export soy_NFT_data="token&视频code2的值"







### 腾讯自选股 txstock.js

cron：35 11,16 * * *

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






### 沃邮箱 公众号 wx_wyx.js

cron：11 10 * * *

关注公众号:联通沃邮箱-进入邮箱，不知道密码的重置

重置密码：https://user.mail.wo.cn/m/reset?mobile


抓Get包，福利中心-签到领话费，多账号@隔开

https://nyan.mail.wo.cn/cn/sign/index/index?mobile=***&userName=&openId=***

    export soy_wyx_data="手机号#密码#抓包链接https://nyan.mail.wo.cn/cn/sign/index/index?mobile=***&userName=&openId=***"
    
    export soy_wyx_UA="Mozilla/5.0***"




### 小米刷步 xmsb.py

cron：随意，一天一次即可

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



### 萤石云视频 ysy.js

cron：随意，一天一次即可

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




### 亿享云 yxyapp.js


cron：随意，一天一次即可


注册地址：https://ystzwz.com/h6/#/

就是个网页，没有APP的


    export yxyPhone='手机号#密码'





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

