## 使用教程

【只拉 晶彩天气库】

    ql repo https://github.com/Yiov/wool.git "jctq_"


## 更新时间

2021-11-29


晶彩天气 已经 改名 水果天气


## 晶彩天气cookie适用

福利视频/看看赚/转盘抽奖/火山爆发/每日收益/看看赚，都是通用的，抓一次即可









## 晶彩天气日常 jctq_daily.js

领转发页定时宝箱/领福利页定时宝箱/领首页气泡红包/时段转发/刷福利视频/抽奖5次


cron：15,45 * * * *

抓get包，打开app-领现金，即可获取

https://tq.xunsl.com/v17/NewTask/getTaskListByWeather.json

    export jctqCookie="zqkey=***&zqkey_id=***&uid=***"




### 悬浮气泡

抓POST包，首页-天气，悬浮的气泡，多个用@隔开

https://tq.xunsl.com/v5/weather/giveTimeInterval.json

    export jctqBubbleBody='p=***@p=***'



### 浮窗宝箱

抓POST包，福利页悬浮宝箱，这个我填进去了，老是说没找到body

https://tq.xunsl.com/v5/Weather/giveBoxOnWeather.json

export jctqGiveBoxBody='p=***'






## 任务签到 jctq_reward.js

cron：30 22 * * *

签到，和领现金页任务奖励  

https://tq.xunsl.com/v5/CommonReward/toGetReward.json

    export jctqQdBody='p=***'

https://tq.xunsl.com/v5/CommonReward/toDouble.json

    export jctqSignDoubleBody='p=***'




    export jctqBoxbody='p=***'


提现

https://tq.xunsl.com/v5/wechat/withdraw2.json

    export jctqWithdraw='p=***'

CK同上

    export jctqCookie="zqkey=***&zqkey_id=***&uid=***"




## 阅读 jctq_read.js


cron：30 9,20 * * *

抓get包，打开app-资讯，一个新闻一个body，请挨个抓，其他用@隔开

文章：https://tq.xunsl.com/v5/article/info.json

    export jctqWzBody='p=***@p=***'

视频：https://tq.xunsl.com/v5/article/detail.json

    export jctqWzBody='p=***@p=***'

时长必须抓，不然黑号，抓post包，打开app-资讯，看完1分钟后即可获取，一个新闻一个body，请挨个抓，其他用@隔开

https://tq.xunsl.com/v5/user/stay.json

    export jctqTimeBody='p=***@p=***'




## 看看赚 jctq_kkz.js


cron：30 9,20 * * *


抓POST包，一个新闻一个body，请挨个抓，其他用@隔开

https://tq.xunsl.com/v5/nameless/adlickstart.json

    export jctqLookStartbody='p=***@p=***'













## 特别鸣谢:

* [@whyour](https://github.com/whyour/qinglong)「青龙」
* [@shaolin-kongfu](https://github.com/shaolin-kongfu/js_scripts/)「少林大佬」
