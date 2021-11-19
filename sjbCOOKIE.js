module.exports = {
    "id": "sjb",
    "name": "睡觉宝",
    "keys": ["sjbheader","sjbheader2","sjbheader3","sjbheader4","sjbheader5","sjbheader6","sjbheader7","sjbheader8","sjbheader9","sjbheader10","sjbheader11","sjbheader12","sjbheader13","sjbheader14","sjbheader15","sjbheader16","sjbheader17","sjbheader18","sjbheader19","sjbheader20"],
    "author": "@tom",
    "settings": [{
      "id": "sjbSuffix",
      "name": "当前账号",
      "val": "1",
      "type": "number",
      "desc": "当前抓取ck记录的账号序号，如：1、2、3、4"
    }, {
      "id": "sjbCount",
      "name": "账号个数",
      "val": "1",
      "type": "number",
      "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
    }, {
      "id": "sjbXH",
      "name": "循环获取ck",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "sjbTXTX",
      "name": "txtx",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "sjbSC",
      "name": "sc",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "sjbnotifyttt",
      "name": "推送控制",
      "val": "1",
      "type": "number",
      "desc": "0关闭，1推送,默认12点以及23点推送"
    }, {
      "id": "sjbnotifyInterval",
      "name": "通知控制",
      "val": "2",
      "type": "number",
      "desc": "0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知"
    }, {
      "id": "sjbMinutes",
      "name": "推送-通知 分钟控制",
      "val": "10",
      "type": "number",
      "desc": "推送以及通知控制在什么分钟段，可设置0-59,默认0到10"
    }],
    "repo": "https://gitee.com/tom210120/tom/raw/master/SJB/sjb.js",
    "icons": ["https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg", "https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg"],
    "script": "https://gitee.com/tom210120/tom/raw/master/SJB/sjb.js",
    "icon": "https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg",
    "favIcon": "mdi-star-outline",
    "favIconColor": "grey",
    "datas": [{
      "key": "sjbheader",
      "val": ""
    }, {
      "key": "sjbheader2",
      "val": ""
    }, {
      "key": "sjbheader3",
      "val": ""
    }, {
      "key": "sjbheader4",
      "val": ""
    }, {
      "key": "sjbheader5",
      "val": ""
    }],
    "sessions": [],
    "isLoaded": true
  }
  