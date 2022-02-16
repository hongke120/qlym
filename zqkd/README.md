## 使用教程

【只拉 中青看点库】

    ql repo https://github.com/Yiov/wool.git "zqkd_"



需要安装依赖crypto-js，青龙-依赖管理-Nodejs-添加依赖



## 中青新版使用说明

全新的版本v3.9.8，只需要抓取ck即可运行所有脚本

但是新版app抓不到包，要么回退旧版本抓，要么绑定手机号设置密码后获取CK

> 黑号了请注销15天后再来


### 中青旧版本

豌豆荚普通下载

https://www.wandoujia.com/apps/7702132/history

安装好后，抓取CK


### 中青脚本获取cookie（推荐）

> 我们利用账号检查脚本(zqkd_check.js)获取

打开app-我的-右上 设置-账号管理，绑定手机号及设置密码

    export zqkdAccount='手机号#密码'

运行zqkd_check.js脚本，获取ck填入环境变量，多账号用@隔开

    export zqkdCookie='uid=***&zqkey=***&zqkey_id=***'




## 2022-2-16更新

**CK通用，填一次即可**

### 账号检查 zqkd_check.js

cron 随意 1天1次即可

    //用于检测ck账号状态是否黑号

### 音频 zqkd_audio.js

cron 26 10,19 * * *

    //targetTime 要刷的目标时长
    //step 每次刷的时长
    //taskNum 领的宝箱总数



### 看看赚 zqkd_kkz.js

cron 2 2,15 * * *

    //会跑比较久，3小时以上


### 阅读 zqkd_read.js

cron 4-59/15 11-18 * * *

    //运行最多阅读16篇文章视频


### 任务奖励 zqkd_reward.js

cron 50 21 * * *

    //领取完成任务的奖励



### 风险查询及收益 zqkd_risk.js

cron 30 22 * * *

    //不想看收益的可以不跑


### 分享阅读 zqkd_shareRead.js

cron 自己定时

    //不建议跑，非常大几率黑号吗，头铁的上


### 定时宝箱 zqkd_timerBox.js

cron 1-59/15 * * * *

    //感觉15分钟太猛了，可以改成半小时或1小时



## 特别鸣谢:

* [@whyour](https://github.com/whyour/qinglong)「青龙」
* [@shaolin-kongfu](https://github.com/leafxcy/JavaScript/)「leaf」
