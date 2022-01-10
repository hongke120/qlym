## 使用教程

【只拉 中青看点·快应用】

    ql repo https://github.com/Yiov/wool.git "zqkdFast_"



## 快应用·说明

仅限安卓，与APP版的应用数据是各自独立，不互通的

平稳起见，有能力的可以改下脚本里的UA，改后避免拉库后被覆盖，请自己复制到Scripts文件夹，再本地task

不会改的，就用脚本默认的也没事，一样跑




## 2022-1-10更新




### 阅读 zqkdFast_read.js

更新内容：修复文章出错，脚本加密

cron 25 8-22 * * * 

入口：https://user.youth.cn/h5/fastAppWeb/invite/invite_ground.html

浏览器打开即可跳转，打不开的百度搜一下


抓get包，登录账号-领红包即可获取，多账号用@隔开

https://user.youth.cn/FastApi/NewTaskSimple/getTaskList

    export zqkdFastCookie="uid=***&token=***&token_id=***"


问题：有CK但是提示token失效

答：token字符里有斜杠/，请替换成%，实在在不行的在请求头里复制有%的那一段







### 看看赚 zqkdFast_kkz.js

说明：修复出错问题，脚本加密

cron 35 6,20 * * *（一天一次，可以自己改）

抓POST包，领红包-看看赚，点任意一个新闻后获取body，多账号用@隔开

https://user.youth.cn/v1/Nameless/adlickstart

    export zqkdFastKkzBody="access=***"



## 日常 zqkdFast_daily.js

更新内容：脚本加密

cron 5,35 8-20 * * *

同阅读的CK通用，多账号用@隔开




### 分享阅读 zqkdFast_shareRead.js

更新内容：脚本加密

cron 35 11 * * *（一天一次，可以自己改）

同阅读的CK通用，设置一下阅读次数变量即可，多账号用@隔开

建议设置5-10次，免得多了黑号

    export zqkdFastShareNum=""





## 奖励领取 zqkdFast_reward.js

更新内容：脚本加密

cron 10 22 * * *

签到奖励抓GET包，签到成功获取数据，把链接后的body复制出来

https://user.youth.cn/FastApi/Task/sign

    export zqkdFastSignBody="uid=***sign=***"

所有可领取的奖励body都抓一遍，包括时段奖励等，用@隔开

https://user.youth.cn/FastApi/CommonReward/toGetReward

    export zqkdFastRewardBody="uid=***sign=***"







## 2022-1-7更新


## 奖励领取 zqkdFast_reward_pro.js

cron 10 22 * * *

不需要抓body，可以一键领取，pro版比原版好用，另一个禁用即可















## 特别鸣谢:

* [@whyour](https://github.com/whyour/qinglong)「青龙」
* [@leafxcy](https://github.com/leafxcy/JavaScript)「leaf」
