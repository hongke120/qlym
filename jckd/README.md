## 使用教程

【只拉 晶彩看点库】

    ql repo https://github.com/Yiov/wool.git "jc_"


## 更新时间

2021-11-26



## 签到 jc_qd.js


抓POST包，打开app-任务-签到，看完即可获取

（注意看相应是否为任务奖励）

https://ant.xunsl.com/v5/CommonReward/toGetReward.json


    export qdbody='p=***'


cron：15 2 * * *


## 文章 jc_wz.js


抓get包，打开app-资讯，看完即可获取

文章：https://ant.xunsl.com/v5/article/info.json

    export wzbody='p=***'

视频：https://ant.xunsl.com/v5/article/detail.json

    export wzbody='p=***'

时长必须抓，不然黑号，抓post包，打开app-资讯，看完1分钟后即可获取

https://ant.xunsl.com/v5/user/stay.json

    export jc_timebody='p=***'

cron：30 7,12,18 * * *




## 福利视频 jc_Adv_video.js


抓get包，打开app-任务-福利视频，看完即可获取

https://ant.xunsl.com/V17/NewTask/recordNum.json?

    export jc_cookie='access=****'

cron：20 21 * * *



## 大转盘抽奖 jc_Rotary.js


抓get包，打开app-我的-抽奖赚，看完即可获取

https://ant.xunsl.com/html/rotaryTable/index.html?

    export jc_cookie='keyword_wyq=***'

cron：34 22 * * *



## 宝箱 jc_box.js


抓post包，有2个地方，首页右上角、赚钱页漂浮奖励

（注意看相应是否为任务奖励）

https://ant.xunsl.com/v5/CommonReward/toGetReward.json

    export jcboxbody='p=***'

cron：15 22 * * *



## 火山爆发 jc_share.js


抓get包，打开app-赚钱-火山爆发，看完即可获取

https://ant.xunsl.com/h5/20200612makeMoney/?

    export jc_cookie='zqkey=***&zqkey_id=***&uid=***'

cron：15 6,12,18 * * *



## 看看赚 jc_kkz.js


抓get包，打开app-任务-看看赚，即可获取

https://ant.xunsl.com/v17/NewTask/getTaskList.josn

    export jc_cookie='zqkey=***&zqkey_id=***&uid=***'

随便看一个文章，抓POST包，获取body，一个新闻一个项目ID，请挨个抓

https://ant.xunsl.com/v5/nameless/adlickstart/

    export lookStartbody='p=***'

cron：45 9 * * *




## 收益统计 jc_today_score.js


抓get包，打开app-我的-今日金币，即可获取

https://ant.xunsl.com/wap/user/balance?

    export jc_cookie='keyword_wyq=***'

cron：15 23 * * *


## 提现 jc_withdraw.js


抓POST包，打开app-我的-我的钱包，即可获取，提过的也可以，必须要有足够的金币能提，才可以抓

https://ant.xunsl.com/v5/wechat/withdraw2.json

    export jc_withdraw='p=xxx'

    export jc_cash='0.3' #自己抓的金额，自己改

cron：34 10 * * *




## 特别鸣谢:

* [@whyour](https://github.com/whyour/qinglong)「青龙」
* [@shaolin-kongfu](https://github.com/shaolin-kongfu/js_scripts/)「少林大佬」
