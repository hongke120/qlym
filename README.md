## 使用教程

【拉库】

    ql repo https://github.com/Yiov/wool.git "" "COOKIE"


## 更新时间

2021-12-11


## 中国联通 Chinaunicom.js

Cron：5 9,11,18 * * *

功能：签到，签到任务，多账号用 @ 分隔

    export ltphone="" #手机号

    export ltpwd="" #登录6位密码





## 都爱玩 daw.js

Cron：15 0,1,8,15,20 * * *

抓POST包，进分红币页面获取token

https://v3.sdk.haowusong.com/api/box/wallet/info

找不到这个链接的，只要有token值就行

环境变量，多账户用@隔开


    export dawToken='account1@account2@account3'





## 滴滴果园 ddgy.js

cron：随意，一天一次即可

抓get包，进app-5天种水果，即可获取数据

把 wsgsig= 和 D-Header-T= 后的值

填入ddgyCOOKIE.js里的url和header中







## 得间小说 djxs.js

Cron：0 */1 * * *

抓get包，进app-福利-看视频，获取数据

https://dj.palmestore.com/zycl/gold/receive


    export djxsCookie='Cookie1@Cookie2'

    export djxsReferer='Referer1@Referer2'




## 饿了么吃货豆 elm.js

Cron：5 12,18 * * * 

抓get包，进APP-我的-赚吃货豆，即可获取数据

https://h5.ele.me/svip/task-list

只要cookie，不要cookie2，复制出来包括分号，多账户@隔开

export elmck='SID=***'


说明：以上数据由IOS设备抓取，安卓机用Alook浏览器或者用M浏览器，UA设置为

    Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4


然后打开h5.ele.me，手机号+验证码登录后，抓的ck就可以用了。第一个参数是__wpk******，最后一个参数是x5check_ele=******






## 返利购(更名：利淘优选) flg.js

cron：0,30 8 * * *

抓POST包，进APP-我的-签到，即可获取数据

https://api.flgflg.com/htmmall/api/gold/finishedVideoNum


    export flgReferer='抓取的Referer1@抓取的Referer2'






## 返利好省 flhs.js

cron：0 8-23 * * *

抓包，进APP-现金福利，即可获取

https://api.uutequan.com/v1/welfare/page

随便哪一个Cookie应该都行


    export flhsCookie='Cookie1@Cookie2'




## 果冻宝盒 gdbhapp.js（凉了）

cron：随意，一天一次即可

不需要抓包，输入手机号即可

    export gdhbPhone='果冻宝盒手机号'





## 高佣金(更名：佣金帝) gyj.js

cron：随意，一天一次即可

抓包，进APP-签到赚钱，即可获取

https://client.atomsh.com/e00-bee-client/client/act/getGoldCount

复制token值，添加到环境变量
    
    export gyjhd='token1@token2@token3'





## 机场签到 jcCheck.js

cron：随意，一天一次即可

请第1次拉完库，自己新建一个py文件，不然每次都会覆盖！

例：
原本Yiov_wool_jcCheck.js，新建一个jcCheck.js

代码复制进去，再青龙重新task，原本的禁用





#聚看点 jkdapp.js

Cron：10 10 * * *

抓GET包，APP-我的-我的邀请码，获取数据

https://www.xiaodouzhuan.cn/jkd/weixin20/member/code.jsp?

    export jkdck='{"Cookie":"xz_jkd_appkey=d32******37a!android!765"}'

    export jkdhd='{"openid": "d32******37a"}' 





## 九章头条 jztt.js

Cron：0 1-23 * * *

抓get包，进app-任务，抓取token值

https://api.st615.com/v1/user/info

填入jzttCOOKIE.js中

说明：讲txtx的val值改成100，默认按从大到小的提现




## 快手极速版 ks_js.js

Cron：随意，一天一次

抓get包，进app-点红包进去，获取Cookie

https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo

    export kshd="Cookie1@Cookie2"






## 美团赚米粒 meituan.js

Cron：5 11 * * *

进美团官网：https://www.meituan.com

F12审查元素-登录账号-工作台选 网络，找到www.meituan.com的封包，Cookie中找到token值，复制出来

    export mtTk='这里填token值，不带分号'

可关闭神券膨胀，不想关，删除变量

    export sjpz="false"





## 琪琪的果园 qqdgy.js


Cron : */10 * * * *


只支持青龙，打开微信小程序后抓POST包

www.weiju123.com/wxqqgy/public/index.php/user/myIndex

获取Cookie和请求数据body中的aot参数


    export qqck='PHPSESSID=***'

    export qqaot='***'






## 睡觉宝 sjb.js

Cron : 0,30 6,12,13,18,21 * * *

抓POST包，打开APP即可获取ua

https://mapi.shuijiaobao.cn/login/code



填入sjbCOOKIE.js中






## 闪辆 sl.js

cron：10 0 * * *

抓取get包，进APP-来玩-打卡，即可获取数据

https://newvideo.autohome.com.cn/openapi/activity-api/checkin/query_list?_appid=ydsp&_timestamp=1635960539&deviceid=********&version=1.4.0&pm=1&_sign=********&uid=********&uticket=********

    export slurl='抓取的url1@抓取的url2'




## 腾讯自选股 txstock.js

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





## 小米刷步 xmsb.py

cron：随意，一天一次即可

请第1次拉完库，自己新建一个py文件，不然每次都会覆盖！

例：
原本Yiov_wool_xmsb.py，新建一个xmsb.py，代码复制进去，再青龙重新task，原本的禁用


### 注册好小米运动账号，绑定第三方微信

手动修改py里面的数据

账号user = "138****8888"

密码passwd = "******"

修改固定步数值，留空为随机步数

step = "23333"

修改随机范围步数值，与固定步数二选一改

step = str(random.randint(20000, 21000))



## 萤石云视频 ysy.js

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



## 晶彩看点 jckd

文件内有教程


## 晶彩天气 jctq

文件内有教程


## 中青看点 zqkd

文件内有教程







## 特别鸣谢:

* [@whyour](https://github.com/whyour/qinglong)「青龙」
* [@xl2101200](https://github.com/xl2101200/-/)「Tom」
* [@YaphetS0903](https://github.com/YaphetS0903/JStest/)「YaphetS」
* [@WindFgg](https://github.com/WindFgg/QuantumultX_Conf/)「WindFgg」
* [@gossh520](https://gitee.com/gossh520/script/)「gossh520」
* [@LubooC](https://gitee.com/xiecoll/radish-script)「萝卜」
* [@leafxcy](https://github.com/leafxcy/JavaScript/)「leaf」
* [@shaolin-kongfu](https://github.com/shaolin-kongfu/js_scripts/)「少林大佬」
* [@liuqi6968](https://github.com/liuqi6968/-/)「liuqi6968」

