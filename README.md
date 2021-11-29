## 使用教程

【拉库】

    ql repo https://github.com/Yiov/wool.git "" "COOKIE"


## 更新时间

2021-11-28


## 都爱玩 Leaf版 daw.js

抓POST包，进分红币页面获取token

https://v3.sdk.haowusong.com/api/box/wallet/info

找不到这个链接的，只要有token值就行

环境变量，多账户用@隔开

Cron：15 0,1,8,15,20 * * *

    export dawToken='account1@account2@account3'


## 滴滴果园 ddgy.js


抓get包，进app-5天种水果，即可获取数据

把 wsgsig= 和 D-Header-T= 后的值

填入ddgyCOOKIE.js里的url和header中

cron：随意，一天一次即可





## 得间小说 djxs.js

抓get包，进app-福利-看视频，获取数据

https://dj.palmestore.com/zycl/gold/receive

Cron：0 */1 * * *

    export djxsCookie='Cookie1@Cookie2'

    export djxsReferer='Referer1@Referer2'




## 返利购(更名：利淘优选) flg.js

抓POST包，进APP-我的-签到，即可获取数据

https://api.flgflg.com/htmmall/api/gold/finishedVideoNum

cron：0,30 8 * * *

    export flgReferer='抓取的Referer1@抓取的Referer2'






## 返利好省 flhs.js


抓包，进APP-现金福利，即可获取

https://api.uutequan.com/v1/welfare/page

随便哪一个Cookie应该都行

cron：0 8-15 * * *

    export flhsCookie='Cookie1@Cookie2'




## 果冻宝盒 gdbh.py

抓包，进APP-我的-视频赚钱，搜索关键字coins


cron：随意，一天一次即可

    export userid=''
    export devid=''
    export gdbhtoken=''
    export UA=''
    export appid=''




## 高佣金(更名：佣金帝) gyj.js

抓包，进APP-签到赚钱，即可获取

https://client.atomsh.com/e00-bee-client/client/act/getGoldCount

复制token值，添加到环境变量
    
    export gyjhd='token1@token2@token3'



## 机场签到 jcCheck.js

请第1次拉完库，自己新建一个py文件，不然每次都会覆盖！

例：
原本Yiov_wool_jcCheck.js，新建一个jcCheck.js

代码复制进去，再青龙重新task，原本的禁用





## 九章头条 jztt.js

抓get包，进app-任务，抓取token值

https://api.st615.com/v1/user/info

Cron：0 1-23 * * *

填入jzttCOOKIE.js中

说明：讲txtx的val值改成100，默认按从大到小的提现




## 琪琪的果园 qqdgy.js


只支持青龙，打开微信小程序后抓POST包

www.weiju123.com/wxqqgy/public/index.php/user/myIndex

获取Cookie和请求数据body中的aot参数

Cron : */10 * * * *

    export qqck='PHPSESSID=***'

    export qqaot='***'






## 睡觉宝 sjb.js

抓POST包，打开APP即可获取ua

https://mapi.shuijiaobao.cn/login/code

Cron : 0,30 6,12,13,18,21 * * *

填入sjbCOOKIE.js中






## 闪辆 sl.js

抓取get包，进APP-来玩-打卡，即可获取数据

https://newvideo.autohome.com.cn/openapi/activity-api/checkin/query_list?_appid=ydsp&_timestamp=1635960539&deviceid=********&version=1.4.0&pm=1&_sign=********&uid=********&uticket=********

    export slurl='抓取的url1@抓取的url2'



## 小米刷步 xmsb.py

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
* [@wx13069](https://github.com/wx13069/JD/)「wx13069」
* [@LubooC](https://github.com/LubooC/Script/)「萝卜」
* [@leafxcy](https://github.com/leafxcy/JavaScript/)「leaf」
* [@shaolin-kongfu](https://github.com/shaolin-kongfu/js_scripts/)「少林大佬」
