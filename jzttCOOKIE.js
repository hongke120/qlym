module.exports = {
  "id": "jztt",
  "name": "九章头条",
  "keys": ["jztturl", "jztturl2", "jztturl3", "jztturl4", "jztturl5"],
  "author": "@tom",
  "settings": [{
    "id": "jzttSuffix",
    "name": "当前账号",
    "val": "1",
    "type": "number",
    "desc": "当前抓取ck记录的账号序号，如：1、2、3、4"
  }, {
    "id": "jzttCount",
    "name": "账号个数",
    "val": "1",
    "type": "number",
    "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
  }, {
    "id": "jzttXH",
    "name": "循环获取ck",
    "val": "0",
    "type": "number",
    "desc": "0关闭，1打开，默认关闭"
  }, {
    "id": "jzttTXTX",
    "name": "txtx",
    "val": "0",
    "type": "number",
    "desc": "0关闭，1打开，默认关闭"
  }, {
    "id": "jzttSC",
    "name": "sc",
    "val": "0",
    "type": "number",
    "desc": "0关闭，1打开，默认关闭"
  }, {
    "id": "jzttnotifyttt",
    "name": "推送控制",
    "val": "1",
    "type": "number",
    "desc": "0关闭，1推送,默认12点以及23点推送"
  }, {
    "id": "jzttnotifyInterval",
    "name": "通知控制",
    "val": "2",
    "type": "number",
    "desc": "0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知"
  }, {
    "id": "jzttMinutes",
    "name": "推送-通知 分钟控制",
    "val": "10",
    "type": "number",
    "desc": "推送以及通知控制在什么分钟段，可设置0-59,默认0到10"
  }],
  "repo": "https://raw.githubusercontent.com/xl2101200/-/main/jztt.js",
  "icons": ["https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg", "https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg"],
  "script": "https://raw.githubusercontent.com/xl2101200/-/main/jztt.js",
  "icon": "https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg",
  "favIcon": "mdi-star-outline",
  "favIconColor": "grey",
  "datas": [{
    "key": "jztturl",
    "val": ""
  }, {
    "key": "jztturl2",
    "val": ""
  }, {
    "key": "jztturl3",
    "val": ""
  }, {
    "key": "jztturl4",
    "val": ""
  }, {
    "key": "jztturl5",
    "val": ""
  }],
  "sessions": [],
  "isLoaded": true
}
