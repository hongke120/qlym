## 使用教程

【只拉 水果天气库】

    ql repo https://github.com/weizuer/qlym.git "jctq_"

晶彩天气 已经 改名 水果天气


## 更新时间

2021-12-23

我黑号了，我哭哭，在设置里注销后15天后再来过吧

问我我也解答不了了，只怪自己太贪心




## 水果天气cookie适用

福利视频/看看赚/转盘抽奖/每日收益/看看赚，都是通用的，抓一次即可









## 水果天气日常 jctq_daily.js

领转发页定时宝箱/时段转发/刷激励视频/抽奖5次


cron：15 6,12,18 * * *

抓get包，打开app-领现金，即可获取

https://tq.xunsl.com/v17/NewTask/getTaskListByWeather.json

    export jctqCookie="zqkey=***&zqkey_id=***&uid=***"




### 收金币

抓POST包，领现金，抓3个悬浮气泡

https://tq.xunsl.com/v5/Weather/giveReceiveGoldCoin.json

    export jctqGoldBody='p=***'



### 资讯页视频

抓POST包，资讯-右上角 视频（第一次点是签到，第二次才是视频）

https://tq.xunsl.com/v17/Rvideo/videoCallback.json

    export jctqVideoBody=''







## 任务签到 jctq_reward.js

cron：30 22 * * *

领奖励/签到/福利视频/资讯页右上角

https://tq.xunsl.com/v5/CommonReward/toGetReward.json

    export jctqQdBody='p=***'

https://tq.xunsl.com/v5/CommonReward/toDouble.json

    export jctqSignDoubleBody='p=***'



提现

https://tq.xunsl.com/v5/wechat/withdraw2.json

    export jctqWithdraw='p=***'



## 阅读 jctq_read.js


cron：20 9 * * *

抓get包，打开app-资讯，一个新闻一个body，请挨个抓，其他用@隔开

文章：https://tq.xunsl.com/v5/article/info.json

    export jctqWzBody='p=***@p=***'


时长必抓，不然黑号，抓post包，打开app-资讯，看完1分钟后即可获取，一个新闻一个body，请挨个抓，其他用@隔开

https://tq.xunsl.com/v5/user/stay.json

    export jctqTimeBody='p=***@p=***'




## 看看赚 jctq_kkz.js


cron：30 10 * * *


抓POST包，一个新闻一个body，请挨个抓，其他用@隔开

https://tq.xunsl.com/v5/nameless/adlickstart.json

    export jctqLookStartbody='p=***@p=***'



