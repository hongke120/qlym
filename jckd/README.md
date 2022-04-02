## 使用教程

【只拉 晶彩看点库】

    ql repo https://github.com/weizuer/qlym.git "jc_"


## 更新时间

2021-12-2


## 晶彩cookie适用

福利视频/看看赚/转盘抽奖/火山爆发/每日收益/看看赚，都是通用的，抓一次即可



## 福利视频 jc_Adv_video.js


cron：20 2 * * *

抓get包，打开app-任务-福利视频，看完即可获取

https://ant.xunsl.com/V17/NewTask/recordNum.json?

    export jc_cookie='zqkey=***&zqkey_id=***&uid=***'





## 宝箱 jc_box.js


cron：0 * * * *

抓post包，我只知道首页右上角，其他用@隔开

（注意看相应是否为任务奖励）

https://ant.xunsl.com/v5/CommonReward/toGetReward.json


    export jcboxbody='p=***@p=***'




## 看看赚 jc_kkz.js


cron：45 9 * * *

抓get包，打开app-任务-看看赚，即可获取

https://ant.xunsl.com/v17/NewTask/getTaskList.josn

    export jc_cookie='zqkey=***&zqkey_id=***&uid=***'

抓POST包，一个新闻一个body，请挨个抓，其他用@隔开

https://ant.xunsl.com/v5/nameless/adlickstart/

    export lookStartbody='p=***@p=***'




## 签到 jc_qd.js


cron：15 2 * * *

抓POST包，打开app-任务-签到，看完即可获取

（注意看相应是否为任务奖励）

https://ant.xunsl.com/v5/CommonReward/toGetReward.json


    export qdbody='p=***'





## 大转盘抽奖 jc_Rotary.js


cron：34 22 * * *

抓get包，打开app-我的-抽奖赚，看完即可获取

https://ant.xunsl.com/html/rotaryTable/index.html?

    export jc_cookie='zqkey=***&zqkey_id=***&uid=***'





## 收益统计 jc_today_score.js


cron：15 23 * * *

抓get包，打开app-我的-今日金币，即可获取

https://ant.xunsl.com/wap/user/balance?

    export jc_cookie='zqkey=***&zqkey_id=***&uid=***'





## 提现 jc_withdraw.js


cron：34 10 * * *

抓POST包，打开app-我的-我的钱包，即可获取，提过的也可以，必须要有足够的金币能提，才可以抓

https://ant.xunsl.com/v5/wechat/withdraw2.json

    export jc_withdraw='p=xxx'

    export jc_cash='0.3' #自己抓的金额，自己改





## 文章 jc_wz.js


cron：30 7 * * *

抓get包，打开app-资讯，一个新闻一个body，请挨个抓，其他用@隔开

文章：https://ant.xunsl.com/v5/article/info.json

    export wzbody='p=***@p=***'

视频：https://ant.xunsl.com/v5/article/detail.json

    export wzbody='p=***@p=***'

时长必须抓，不然黑号，抓post包，打开app-资讯，看完1分钟后即可获取，一个新闻一个body，请挨个抓，其他用@隔开

https://ant.xunsl.com/v5/user/stay.json

    export jc_timebody='p=***@p=***'



