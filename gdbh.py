#20211020    汤师爷
#每天0.7元 ，新注册的用户好像可以零撸实物，软件出来好几年了只要号不黑基本上不会跑路
#ios与安卓加密方式不同，小弟买不起苹果，ios玩家请用模拟器获取ck
#
##软件：果冻宝盒
# 感谢TOM大佬的sign算法支持，新人第一次写毛，水平有限，日志输出还没优化，有时间在去优化一下，脚本有不足的地方望大佬指导
# 青龙使用方法，小黄鸟抓包搜索关键字coins
# 找到以下相关参数添加环境变量
# export userid=''
# export devid=''
# export gdbhtoken=''
# export UA=''
# export appid=''
#脚本地址https://raw.githubusercontent.com/wx13069/JD/master/gdbh.py
# #以上需要添加的变量都可以在header里面找到，添加完之后，添加任务每天运行一次就行
#

import requests
import time
import os
import hashlib


if "gdbhtoken" in os.environ and os.environ["gdbhtoken"]:
    gdbhtoken = os.environ["gdbhtoken"]
if "userid" in os.environ and os.environ["userid"]:
    userid = os.environ["userid"]
if "devid" in os.environ and os.environ["devid"]:
    devid = os.environ["devid"]
if "UA" in os.environ and os.environ["UA"]:
    UA = os.environ["UA"]
if "appid" in os.environ and os.environ["appid"]:
    appid = os.environ["appid"]

data = {"Host":"proxy.guodongbaohe.com","x-userid":userid,"x-appid":appid,"x-devid":devid,"x-nettype":"WIFI","x-agent":UA,"x-platform":'android',"x-devtype":"no","x-token":gdbhtoken,"accept-encoding":"gzip","user-agent":"okhttp/3.14.9"}
print(data)
##时间戳
timestamp = int(time.time())
a = timestamp
a = str(a)
##获取sign
sign = 'member_id='+userid+'&platform=android&timestamp='+a+'&faf78c39388faeaa49c305804bbc1119'
sign = hashlib.md5(sign.encode(encoding='UTF-8')).hexdigest()
##获取余额


r = requests.get(url='https://proxy.guodongbaohe.com/coins/checkin?member_id='+userid+'&platform=android&timestamp='+a+'&signature='+sign+'&',headers=data)

print(r.text,flush=True)
time.sleep(2)

i = 1
while i <= 6:
    timestamp = int(time.time())
    a = timestamp
    a = str(a)
    ##获取sign
    sign = 'member_id=' + userid + '&platform=android&timestamp=' + a + '&faf78c39388faeaa49c305804bbc1119'
    sign = hashlib.md5(sign.encode(encoding='UTF-8')).hexdigest()
    print(sign)
    r = requests.get(url='https://proxy.guodongbaohe.com/coins/award?member_id='+userid+'&platform=android&timestamp='+a+'&signature='+sign+'&',headers=data)

    print(r.text,flush=True)
    print('执行第%d次广告任务' % i, flush=True)
    print('每个视频30秒，等待93秒',flush=True)
    time.sleep(93)
    i = i+1