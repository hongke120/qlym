module.exports = {
    "id": "ddgy",
    "name": "滴滴果园",
    "keys": ["ddgyurl","ddgyheader","ddgyurl2","ddgyheader2","ddgyurl3","ddgyheader3","ddgyurl4","ddgyheader4","ddgyurl5","ddgyheader5","ddgyurl6","ddgyheader6","ddgyurl7","ddgyheader7","ddgyurl8","ddgyheader8","ddgyurl9","ddgyheader9","ddgyurl10","ddgyheader10","ddgyurl11","ddgyheader11","ddgyurl12","ddgyheader12","ddgyurl13","ddgyheader13","ddgyurl14","ddgyheader14","ddgyurl15","ddgyheader15"],
    "author": "@tom",
    "settings": [{
      "id": "ddgySuffix",
      "name": "当前账号",
      "val": "3",
      "type": "number",
      "desc": "当前抓取ck记录的账号序号，如：1、2、3、4"
    }, {
      "id": "ddgyCount",
      "name": "账号个数",
      "val": "3",
      "type": "number",
      "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
    }, {
      "id": "ddgyXH",
      "name": "循环获取ck",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "ddgyTXTX",
      "name": "txtx",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "ddgySC",
      "name": "sc",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "ddgynotifyttt",
      "name": "推送控制",
      "val": "1",
      "type": "number",
      "desc": "0关闭，1推送,默认12点以及23点推送"
    }, {
      "id": "ddgynotifyInterval",
      "name": "通知控制",
      "val": "1",
      "type": "number",
      "desc": "0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知"
    }, {
      "id": "ddgyMinutes",
      "name": "推送-通知 分钟控制",
      "val": "10",
      "type": "number",
      "desc": "推送以及通知控制在什么分钟段，可设置0-59,默认0到10"
    }],
      "repo": "https://raw.githubusercontent.com/xl2101200/-/main/ddgy.js",
    "icons": ["https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg", "https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg"],
    "script": "https://raw.githubusercontent.com/xl2101200/-/main/ddgy.js",
    "icon": "https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg",
    "favIcon": "mdi-star-outline",
    "favIconColor": "grey",
    "datas": [{
      "key": "ddgyurl", 
      "val": ""//引号内填账号1的wsgsig=
    }, {
      "key": "ddgyheader", 
      "val": "" //引号内填账号1抓包headers里的 D-Header-T
    }, {
      "key": "ddgyurl2", 
      "val": ""//引号内填账号2的wsgsig=
    }, {
      "key": "ddgyheader2", 
      "val": ""//引号内填账号2抓包headers里的 D-Header-T
    }, {
      "key": "ddgyurl3", 
      "val": ""//引号内填账号3的wsgsig=
    }, {
      "key": "ddgyheader3", 
      "val": ""//引号内填账号3抓包headers里的 D-Header-T
    }
    //多账号自行复制以下注释内容
    //,{
     // "key": "ddgyurl",
     // "val": ""
   // }, {
    //  "key": "ddgyheader",
     // "val": ""
    //}
],
    "sessions": [],
    "isLoaded": true
  }
  
