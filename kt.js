/*

软件名称:可推

项目注册地址:http://sh09.mykshow.cn/s/n7UmrerezAVY3BFi7yQ3BjM2FEUIzAzu

邀请码:94867530

收益其他的不清楚,大佬叫写的脚本

必要变量:

变量名 soy_kt_data
变量值 抓包找带有 https://api.ketui.cn/ 链接的请求头上的 Authorization 值

多个号用 # 或 @ 或 换行 隔开

一天最少跑8小时,间隔是1小时
cron 25 6-15 * * * https://gitee.com/soy-tool/app-script/raw/master/app_kt.js

*/

const $ = new Env('可推版本22/03/23_0');
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodF='jsjiami.com.v6',_0xodF_=['‮_0xodF'],_0x49cf=[_0xodF,'wqx5w4c=','YuOAl8Kff8Kv6IWX5p6E5oyj56Sjwr3Dq8OC6Lef5Y6Qw5c=','w6VDwpDDrsOU','ceWIvuS5ieaXuuebheOAglYU576n57qs6Kyd5rCi5aer6LaU','wpjDhMKkf8Ko','QcOYw77DmSrCr8KU','w6HDqlnDjgU=','ZMOxAsKDOw==','w7nCuMOqw6LCqQ==','EuOAgVLCs8O06IW95p+55o+Z56ekw7rCisK06LeW5Y2JKA==','w4Dli6XkubTmlbrnm4rjg6tAwpY=','ZF0sa8OD','NcOEw68=','GuODs1jDqMKu6ISW5p+Z5o6J56amwqsmw7HotYbljYHDhA==','eOWLn+S7ieaUpuebruOAj3Rw','w4/jgJAgw4vCjOiEgeacu+aMp+eklsK7azzotJTljZo7','V+WVjeWRoeWKguijo+ODpMKDXw==','wpgoMmzCrw==','wqzDssORw7zClQ==','w43ClTh/LQ==','wrtnVg==','w4jlh6Dnl6PjgJ3Dtzk=','wpjDpw3DrMOq','wpVcWsORwq8EAMOhBBY8SC19wpA=','w6bCmjp5AA==','ZcOqw77ChHw=','A8OZw4bDrsKO','wrpFVsKBw5g=','w6NIQQ==','w6XjgbowU8KB6IeW5p6n5o+J56Srw41Qw6LotYnljqPDvA==','woJCw4XCoiQ=','w5bDnSnDmsKt','w6XCr8OBw4dI','CcOlw6XDksKQ','McKQFmV5','AWnCiHXCrg==','w7fop47poqDlpobliI3jgIEPw6/nvLHnuqTor4/msJzlpr3ot6k=','wobjg4fDisOkaOiFqeacluaMquemhcOZwrgC6Laq5YyPwp4=','WVosZcOK','OOinl+misOWmiuWIvOOBtsOvKee+j+e4i+itkOazm+Wngei2mw==','w7PogZrphbvnpIPljZXjgq1Tw67nvZjnuaTorrLmsovlp5not5U=','w7/jgqPDicO9wpXohKnmnb3mjJ3npo01wonDsui1lOWNgsKz','w73DgSLDr8O5','Mn7CscKtRw==','w4vDuWLDij8=','YMOtOsKZGULDuw==','wqfogajphr/npY3lj5/jg6VbduaIm+WIguiPi+W/icKy6ICF6Ya6','asOHw50=','Kz7Cs8OINA==','w6Xog73phpznppjlj7DjgIotw5c=','XFsv','wrrDicOQWig=','woXjgLdVworCneiFpeacneaPu+emmsOdwpDDuui3m+WMlyY=','wq/nrZnliJbniZPmg6Xjga4LC+e/see4rOitiuayleWnjOi3hQ==','P+OBssKqwr8v6Iaz5pyZ5oyc56e9AMO8Gei3huWPrcOr','UDYZLcK/','w6/lirfku7Dmlp3nmbHjg51pwoI=','wrJ6Q8Kdw493','RsOXAsKiNw==','w7PCtClrIA==','wqfDicOgw5TCoA==','E3F1HcO8','VsOFw7nDtCE=','C8KUwpYJw4U=','SUdgwrjDgg==','wr9aQ8OuwpI=','wpNEIsOdwq0=','woropJ/po6jlpZrli6LjgbjCh2LnvK/nur/orobmsrHlpYDot6U=','w6kIZiXDmg==','AMOzw4zCnAsrJA==','wql4w4TCrgg=','Juilrumgq+Wmo+WKueOApcK7woXmiLjliL7ojpnlvJnDveiCjumEtg==','WeOBpMKka17ohpXmnYnmjrDnpI/CqxTDhOi1oOWMkEY=','woropJ/po6jlpZrli6LjgbjCh2I=','wpRaUw==','FcOWw4vCkxE=','wprjg4bDvcOowqjohZjmn63mjIjnp6rCg8K7wpbot6rljohU','B8KzwoYJw6U=','w6rDmScjwpY=','w4jCo8OSw7JC','ccKgdxTCgw==','ZRB0BwU=','GMK5wpg/w5g=','SsOsw5fCsQ0hJl4tSXvCi8KpPxktwrUzHsOuwqB9HQ==','wqHlh47nlYrjgozDhljnvJrnuZvorZHmsr/lprTotq8=','QOWHtueUlOOCg8OrOOe/gee6pOismOazlOWlkui1rg==','wqHopY3po67lp4vliY3jgalxwqc=','w6LDpwI8wqnCkw==','RQPCq8KjMw==','w4DDrgzDkcO4','AsO7w5fCvD0=','wrR4N8OMwpY=','acOwLw==','OsK8E3lD','JeWHmueVveODi0wG5oqO5Yqb5YaL55Sf','JMOFw4zChRU=','b8OGw57CkHA=','C8KvwpAhw67Cpg==','dcK5aw==','Rg3CoMKPPcOdasKowqZZwrA=','dsOvJMKzAg==','IhfCknZQ','wpLDusO1wpA0','cX9FwrnDtQ==','GeWJnuS7luaVvueYjeOBscKkQA==','JyLCpcOgPyE=','FnvDicK7w6DCkMONCnpXU8KM','wobDisO7b8KsegJX','DTfDlHPDoXzCnsKQLMO0wqPCjsKdX8OCw50=','S8KCw4vCi8KoXAHCrUQ9wpXDrmfCtMKXJ8K9YMKwwrpww7FPw5wzw4HCicOhKDnCmG/Cq8O7w4V9w7zChkB/w7zCmMKQYcOuNV/CiMKBw4UBHWUfQiBIC8KpwrvClVV5w4VWw49kEcOhWWwlTMKUwrLDshRJwoDDihzCi33DmAnComDCh8OVR8OAw4PDugNGwpHDnFcvOFQvwrJuwoBQwpl6IsKZwqjClcKCwpzCgkfCgTXDn8OUwrPCncKGwq7CscOnHgnCqxTDpC8JwrvDuBMmwrNqdm0xw6xFwo9cw4rCiMOBWAzChcK3KhvCrGYmw6bDmcOCX8OCw5PCucKOLMO9FsORw53CmB1zBsK+esKSw6lfwqY=','wrLDicOQTT/DlQ0=','OFZtCsK8w7TCv8OPOA==','w6/DoQQBwqnDm043e8OtUjXDpcKMABNEcljCssO8T8Kowp/Cgg==','w4rDtSbDrcKkX8KpwprDtnx4wpE=','wqVnRMK+w5g=','wp9QQMOswqgOSg==','O8KmA2xIw6rCv1NiNcOoXDDDtFvDmMONcXINwqzDqsKnMSUTw6PDkisQSMKfw43CpQ==','wpVkI8OXwo8=','A8K2B29B','XcO5BsKMOw==','dsOEw4fDvS4=','QkRZwovDnQ==','TMOew7jDqjbDpMOew6YTw50ZTmrDgcOeCjgiFw==','ICXCk8OMOg==','wodsO8OQwqI=','wqPDh8O/w7rCvA==','HBrCr8KMFw==','w4bDvxjDkcOn','wonDlcK/IsKmfB5HwpLDi8OWUw==','w4bDqirDrcKlWsKgwpXDrHg=','eMOoaSrDh189DMOuwpYuTnvCu23DrsK2woUgwrHDisKPw63CusKoYcOiU8O+RcKr','XcKMUcOuwrtgwpR2wqnCqDvDvEjDusKNwqs+w6UNQCLCv8Osw5McHMOEw7gVwrXCtcO2w7fCjsOZbhNMwqkOw7fCvsKcIUPDuVHDhsKxw4kawrvCmcOFwr3CnhHCgRLClMOHYcO7JgdAw7ZsIcKOwoR1cMOQw7HDlMOywoM9c8KkU8KbwqXDjsOAwpzDj8KZQMOdX8OFEVJGw70rZ20Qw4wWRn0yw6LCqikiw75sWBEOV2LDmR3CuRUnCApkIjXDsQnCtsOfw5Frw4wEC8K8w5dRUMKawqrDvXfDjgXCgTZ7Xyd+wqjDr8OAcGfClz3DnnVsUXjChMOLwqvCv2Mtwq/Cj8OJw7sXAybDqMOqw5cB','w61DwpDDucODwopI','ehkyQcKiwq/DpMKOdA==','E8OSTMO3w7xrw7kMwoo=','w69CwobDuA==','wpDDnsOKw6bClQ==','OwDCo3RUwqBKAUXDthfCgiPCkxN9w7hzBsOew63DojTDoGQ=','wpUCbn/CtsOgw7FxKsKRQMO/QW3DsHR5QsOtwpU8CcO9TzvCrUvCgsOtwp5LWCHCmjE=','OVh1AcO1','DcO1w4rCrxd1bl4tXXbDtcKtLQgqw6NtEsO3w6p5SWbDrsOrwpnCk8OIwo0Yw6MCfw==','w4fDmg7DvMOy','bx9VDCg=','w7nCpMOVw7hf','eRHCjcK5GQ==','wrjDsMONeSA=','ZMKwciPCqw==','woLDicKUSsKX','bsKFw7jChsKm','wpLDicOTw6LDgFc0wqvDm3nDkMK6','CQTChsOsJw==','C3XClWDCoiLChcKZag==','LuOCusO/w7U86IeR5p+d5pSA5LqV5Yeg6LSU5aOV5piB44Kk776xaTtsVOiEmeacpuaXguS4u+WNiueVkeS6pOWGjei2r+S5gua1q8O7w5zDvE7ohajmn7rmlbHkuaPku5bkvJ3ku7DkupjlvqTnlafku6rllqbku6rkuqLlj63pnqvmsYPnlbfpg5YxN2Vm6Iay5p2j5pSV5Luz5Lme6L+W6K6c55eY5ZGywqR45bOU5pSW5YSp6IaL6KG65YiS6ZuUw7LCnmbDrOWahuS/uOeUruiHruafsuaXk+S4o+mBt+aLiOS/meeXnuiAqOS7veWOmuS4h+S+jee+p+eqg+W7ruWNlueYq+S4pOWIu+aOluWnlueYtueUhuS+oeeUtuiBsOaKhuaIjyTDlMKFwq/ohKDmnK7mlZjku6zlpY3mnJPkuKXmh5/oo6Dno6HopI7miavkvYbmlr3nmp3mn5/noYfopaPmiK3kvpnmlpvogJDmiafmip8yKWPDnuWmqOS4heaMi+WPtOatm+adveatouitveerjuWPjOWJmOmYieiFkuafruaVh+S6og==','wrBxZsOswqQ=','MBXCvm9J','w4DDnnjDoihU','AMOvw4g=','w7LDpAbDgsKXDBTDo8OHwonDpA==','w6TDjnnDgCI=','w5nDjETDvik=','w7PCijBAOQ==','w7rDrnTDvw4AwoY=','w5njgrfDh1Ap6Iam5p2F5oye56SzwpVow6Tot47ljIfCsg==','McK3BnVc','wo3lionku6TmlqvnmYLjgKrDtsOc','w6BCwpM=','M+OBiA4nwr7ohbrmnrLmjrDnp5LCscOhEui0iuWPm8O0','ecK5eT/Clw==','w5jliLPkup/mlo7nmIvjgbIVwqY=','wo7DpMOPwp4KOQ==','P8K9EA==','W+OAqMKRwqN26ISJ5p2A5o+k56eM44Gh77+w5p2K5aKx5YSo55ir5buH5Y6C6YWXTMO6TznCiBnDjsK8woEzw4VQ','PMOFw74=','wrzDniLDtMOQwrgMw4Ykw7/CpQ==','BcOdVw==','ecKNT8Oiwq9DwpM=','woXCjcKp','ASXCusKDAQ==','w4zDg0A=','wpvDisKvU8KmbTVWwprCkcOU','woLDnR7DgMOM','FzvCoA==','V8OFw7XDhS7Cv8Kuw6MCw5lW','wqRnSMKPw5dkasKrAQxZ','wo7DuMOL','HcKywpszw7bCtXDDiDjCuQA=','wpjDucOEwowSKsKJw4fCkiEZ','wqrDny0=','KsOEw7HDv8KKw4BXAsOUworDtw==','KsObw6TDicKV','NMK2BQ==','w7/CgDxNGw==','w7jDhUjDhQs=','KMKkwpEIw4o=','OgDCtmBQ','UmjDq8OXfw==','CcOuw5k=','bsOvSuOAjOWFisOw','w6DCssOXw6xlGw==','wqfDhhLDssO4','wo13NsObWg==','wo7CgsKyKQ==','wowLN1/CkA==','w7UGcxPDjTc=','wrNnMMODcTBY','w6XDpBHDuA==','w4pgTcK1wpY=','YcOVwq7Dt18=','TsOoTDfDqg==','wosYIks=','wqFvw4XCnQM=','N8KrBkZK','woDDkcKifMK+I0UdwprClcOcE8O1SivDtsOhwrPDg8Orw4pdwpVow5URwrl8asKobUDCphPDnhYiw7Ivw7PDkMO6BhDDjizDmyZxDsKJPsK8w68VIsKyQMKWcRoGwrVrwoYHYsKvw4ojMsOPw4bDrMOHw4LCh3nDpxjCgMK2wpRWDcOuwo/DrcKufsONwrfDtBrDvVbDuXbDqUI9wrhXd8KUw6MpSMOOw77Cs8KIw4DCrcOSBGJPwpfDpcO+w6vDjyXCimRkBsKPGG3DsMKD','ZMOvIcO0HUPDqnHCpwRDwqM=','BcK4woccwrDCoEPDhS/CqA==','PzrCrMKDGcOJwqQKW8KOw4kuNQdWwoIKw4Y8wpIIbsK4wpzCrDlSw6Uhw4ZDwofCiRFaKTB2McKEw4vCgzA4QzjDqgrCisOFZgLDuMOdK8KFIMKYV3JwGsKcwrB+ZMOLwpUvwq3CtcKXMRRBwrnCklEww6DCgsKofmwvwozCk0rCq3fDnSvCucOOVsO2RMKWcMKpYsOVw5Z6woTCqMOIw5/DgMOZwpgPw5XCjgBLwr3CgsKAw6DChcKSHhnCmSsJPMKow79zwojCukdewrYMVgp0w7jCuxrDm8K5wrLDuBY7UcO9w54Bw49QwokyPMKuPCvDicKBGXnCrm43TjhBDcKKw7tDZ28YEMKfYQ==','X8Ozw5BCwq7DqR3CmXA=','USwJOMK0T8KxAcKYw6zDolRJWMKhwqhLwqzCpw==','Y8KCRsOiw7p/wpwtw7k=','wqdhK8OMeQ==','w6vDnjYAwpM=','w7sDVj3Dhw==','T8KLw5XCmsKi','f8OmK8K7Lw==','w6nDp8KBw6ghQAvCmcKKwpDDsE7DqMOAwo5f','wpYDLVvCgcKjw6V+c8KBEg==','wrRgOsOQcjVF','w491wr/DhcO0','wqPDo8OyWQk=','FMObw5vCuxU=','WAtsCRI=','ez0TG8Kr','w4DDhBTDtcKp','wrrDp8Oqwp0b','w5gIViLDjQ==','wrRPw67CjBw=','VMKxecOwwrk=','wqXDl8Otw5/Cnw==','w451bMKLwpE=','J2/Dt8OYw7g=','w5zCsAtdOw==','CQXCnMOYIg==','IlDCg8K+ag==','wqvDqcORWDk=','w5DDozDDnMKe','TsK8w4vCo8Ki','H1xwOsOa','b8K9w7vCm8Kp','D0VkHMOn','wqdqEsOJwqQ=','E8KMKWVK','w6hGwpbDj8Ol','w4rDqjs=','w5fCsyhaJg==','DMOcRg==','GeespuWJjeeLvuaDhuOBscKkQOe+uee5gOisu+axveWknei0iQ==','b+OCkcONwrAd6IWV5p2t5o6h56W2ADLDtui3oOWOv1w=','wonCjcK7KXg=','wpfCoMKJFUE=','IxbCj1Ri','KMK4EGNB','w6LDpwIywrXCkAQ=','wqR3w5TCqg==','w5nDjETDrCFnwpDCnMK+w6A=','wq1/w47Coh5uV8K/FnXCr8OP','B0/CpXXCmA==','w6nDvDYpwr4=','woTDisKx','UuODiRF/XeiEhOadouaOgOensTAuw6botKjljqXCnw==','wpRfZ8ONwo8=','w6LCs8O5w6bCoybCj8Ktwr0=','wrtHWMOQwqQ=','wqvDrcOxSyI=','fMO5woo=','f2RTwozDvg==','w5vDpivDuMOn','woHDtcKDfMK0','TXZPwrXDiA==','woZeG8OSbw==','K8OOw7/DgcKTw5BGE8OY','JFrDtcOiw4U=','ASTConVB','w5/DqjjDvMO6X8KCwonDtw==','GGZVGMOf','VTca','w6rjg7PCrCN56Ieg5p2W5o2m56WqCcKxQ+i1quWMk34=','wr5mVcK1w4Q=','w6Dog6vpha/np7fljbXjgJguw7DnvKnnu4/orLHms6rlpqTotZ8=','W+OAqMKRwqN26ISJ5p2A5o+k56eMXcOHTei3vOWNhsOz','EOiDiemGh+ekvOWOt+OBkz5M57yJ57q26K6X5rOb5aaj6Leh','fcKffxLCoQ==','woPDgMKUesKO','CsKcwoscw5g=','w7PDs2E=','cStwNSA=','w5jCvA5tIQ3DszcT','w67CgxdnMQ==','UMOzey/Dqg==','wr/DkCnDmMOe','BlHCjsK4aA==','OOetr+WIkeODjcK3Rw==','LkVyIsOiw6A=','TuiNquW9tUw=','V+iDtumFrw==','wpFbUMOdwrk=','MOeuqeWIreOBi8OVOw==','PMOZw7rDrcKSw5M=','w6jDmRjDt8OQ','wrnnrJfliKTni6Dmgr7jgZQ0w5c=','w4XjgqEow4TDguiHluadv+aNsuelv8Kmw6nCjei1mOWNtcKh','woLDuMOZwrYB','woMFJA==','wpXjgox1w5MY6IW+5p+P5oyO56Skw67DnRjot5nljJd1','DMOvw5rCuhw=','QOevjeWIkeOCg8OrOA==','wqVtRsKxw450ZcKgFx1K','JzvCuMOrOg==','woVSfsKxw7c=','a8ORw7LCvGo=','w6lTZcKCwpw=','wpdkBMOHdA==','STkPO8Ki','wpDDgcOIw5HCg1c0','w4HDoCg=','LuOCusO/w7U86IeR5p+d5o2X56WZwoAaCOi0qeWNgsKL','w4TDoSvDuMOw','w6Dog6vpha/np7fljbXjgJguw7DmiajliozojbHlvL/Cp+iCh+mFng==','G2TDhw==','w6jDpRvDuMKE','w4jogZjphJnnpLDlj4jjgIhQEg==','w6PDlCo8wq4=','wqbCrsKpFm4=','WRPCqcK4AQ==','bGFGwo/DvQ==','HjrCsQ==','wqPjgr1Fw6I16ISr5p+d5oyg56exwqjCkwLot7blj6ht','w6XCucOdw65p','w63CjBlIEA==','wqHnr7XliY/niKvmg73jgalxwqfnv7fnuKHorbLms4jlprDotpw=','w7fCkhFEHA==','w54reg/DjQ==','w6DCnSN+Kg==','wrB3w5LCuBU=','OsKpNF99','UBDCq8KTOcONUA==','w43DjELDrA==','B8O0w5zCvQgqDBA8','wqJpNcOQ','JT/CgsKmBA==','wpHDksOOw7M=','J8K9A31XwoDDvwtmNw==','w6bDuhvDlsO5','dhNINho=','wofDucOa','wovjgpsMw7LCheiFouadp+aNl+emnMOQwqjCp+i2p+WNjnw=','ecO4wonDl0Y=','JuWWq+WRsOWLteiirOOAoVrCoue8oOe7j+itkuayjOWlvui3nQ==','WeODggRzQuiHiuaevOaOrOekuWjCrF/otb3ljaYP','wqxuN8OBwo0=','wqzllpHlkbjlipzoobnjgaIAw5rnv67nuKjoraLmsa3lpr3ot50=','ZOODjcKRA8Ok6Ieb5pyD5o2856Wjw6BMNOi0qOWPlwc=','wpzDncOew7fClA==','FyfCpMKnBsOC','asKCw5Y=','E+OCiGopw5fohKbmnbDmjqjnpr3DlG1M6LS35Yy/Ig==','BRLCucO0Pg==','EAHCmsKkDQ==','esKkf8OhwqM=','SOOBgMKkw4I16IWc5pyx5o2O56e4ZGs16LSY5Y6Pw68=','IllkCsOp','VAh4GBM=','eeevleWKuOeIluaDoOOCpTJG57+k57ii6K2h5rOg5aSO6Leb','w5jDqmTDvQc=','Un86QcOm','JxDCg8KGAw==','NMOCw6bDicKPw5NbD8OSwpDCuQ==','OsOhw63DsMKq','wp7DvcOXwoY8','wqzCqMKJJ2w=','ADTCucOUAA==','wqlvNA==','woHDi8KyacK1','MOevqOWLneOCowTDlee+kOe6sOivtOayguWnmui0qQ==','wqbDnz/DjsOD','w6Xnrb7liaPjgrXDjzvnvYbnuKvor5vms5TlpbfotLQ=','w6TDsi/DscKE','w4rCjjVBOA==','WgFuBAE=','w6DCt8O8w7TCtA==','Hi3Ch8KABw==','woXCkcKtD2/Cnh8=','feOAm8OTw7rDsuiHr+aeleaOr+ekqVQdw4/otIHljZTDmg==','w4PCtx1pKw==','wonnr5PliIbjgpx2EQ==','YcO+PMK7','Sz0KKcK1BMOOD8Kfw7nCvg==','IcKJwqQLw68=','UQl7','fMKMTA==','c+eurOWJh+OAjQHDsA==','fsOAVyDDiA==','FSzCkcKZAg==','dcO3fg==','PsOOw73DmMKX','wqXDuQ/DvsO+','NTHCr09O','wp5gZMOswos=','wq/DqsOQw5TCmw==','w4PDpy3DnsOL','wo3CisKxJW7CnS7DlyNPwrMJKcKQGUBCwo4af8Oca8Okw6wXw5HDjcKOKg3Dn2DDsUwVSEXCrMKORgnDug==','IhjChUpD','SHk4dcO6','woXCrsKqOk8=','wqFZW8KUw4o=','a8Kaw5TCsMKp','w5jDvXHDjwQ=','w6XDuXXDjDk=','AsOkw4o=','DknCmVHCnA==','aDNMPi0=','XVtnwp3DvA==','NFbClA==','w5nCqRVlJw==','dsKtXsOGwp0=','fCduKyc=','CnZyOcOd','w6LjgrXCpWPCtOiEg+adhuaPouengcOIwpgQ6La45Y+Yfw==','w4DDg1LDqDQ=','PxvCsA==','w7HDqg3DrsKZ','woVMPcOFTw==','GG9xFcOZ','IVnCkMK/ag==','JwDCp8KcJA==','dcKlbxnCgH/Dqw==','WQ3Cvg==','w4jopaPpoYflpZrlibzjgIhQEuaLq+WJuuiMguW+qsKm6IOS6YaQ','w6HjgobDjsK8AOiFhOafuuaNs+eniXhVwozotbTljL9P','AMOzw4zCkhco','QeOAp3MAw6johp3mn7rmjavnpafChsKZw7zotozlj70z','w4/po6zml7Pmibfnp4Tlj4njgpojMeiNl+W/qsOv','wprDgMKhbcK/fSRHwpY=','wrDphIfluo8=','J1hn','GuOChsKew51H6Iev5p+t5o6856S5w63DhiHotYvljpsb','w7bDsmLDmRk=','FemjpOaVqeaKm+elquWOrOOApMO2w6c=','HcKiGk1O','AcKWwpYNw60=','GuODh241wpbohIHmnqLmj6rnpLzjgZHvvYHmn5Dlo43lhpTnm63lurPljLLphZPCm8O1woU6w4HDpwXDlMKow74ywpg=','w4bCth4=','wr4fEnrCug==','TlRowpDDtA==','w4LDiFPDvWFQwp3CmcK9w6A=','fsKMBsOkwrZvwp08','VQRwY8KFczIPbQ4Fw7jDtsO8HTI=','YMOxdyHDl1MyH8Olwpgv','w5rCuMKPw71KdsOkwpbDmg==','IT/CusKDLydzw7nCuiApdllWwqTCrw==','PMOGw7jDlMKY','w4BEUsK3wq0=','csOAbjHDhg==','wq7DgTLChcOQwqknw5cswqXCp8OO','wogYKE7ClA==','w4XCl8O8w4XCgQ==','Gh3Cg8OOFg==','w5PCiCV6IA==','CMOHVcOiwqI3wr8Zwp/Dpk0gw53CgMOuwogwcsK1','EMOFw7HDi8Kj','XgluDg==','eX9Fwq7Dog7CsQ==','w7fCgxBIRVXDt8Kfw58=','UsKGw77Co8KK','wrnDl8Olwr0X','ag40JcKt','bcOOw67Dvw0=','w4fDuVXDtTU=','HMKkB3Zv','AltSHsOo','wrfDngnDpcOz','w5l7wq7Dp8Ob','JR7Cj8KnHA==','w6DDsAQ=','HMOHw6rCqSg=','w67ClBZiBA==','w7gZZDrDliZvwoPDrcKow6DDo8OrScOzeBEzw6/ChzUADlh1fTfDhMOlwqTDkg==','OmTDmsO8w6fCmcOYUCZXAMOCD8OvwpPClcOHwp/CgEhvwpo/wpXCqsKswpwCwrbDtsKYBx7CiTTCu1LCm8KawpXCqMOwwq01b1tRwrkWw5DDrMOmMsO3w5VTM8Ktw5pJX8K9wr7DsHBBFcKIaMOjw5nDkMO9w4LDi8KYw6rDsj7Doz4hwo0bw6heWsKGw7PDkQbDvMKtw5RGN07CpMOTeG/CoMKkwpnCmsOyw6QeNcKmwqXCnnB3JsKMZAwPwotDwrsCG0vDoMOaw6dkEMKWw6BeKmrDusKQw5FFwrPDjxZCw7g2UMObKS4mw7zDoRMIYXYfFklUw6/Ck2zDjTxoTcK5dWXCky8Xw7/CuMKxwqHCpcKYwonCsg==','w65vwpPDrMOp','w7RZwpPDosOc','PDfCuMKwLQ==','w5rDpWnDvi0=','wp5xUsKGw7s=','w5pHwr3DvsO8','HsOCw4bDssK7','wpnCs8KXJ0U=','w6VuV8K0wr0=','MMOFw6zDhcKZ','a+etieWIsOOBvsKrwqfnvofnuaforqrms6nlpoXot7Q=','w7LjgKVHw5fCuOiFueacg+aNluelm09BCui1vOWPr8OC','eOeup+WJkuOAgR4+57yf57qM6Ky85rGf5aSy6Leu','w7zCucOp','eOWWn+WSo+WIh+ihjOOAj3Rw576a57uB6K+05rKJ5aS/6LW3','YMKBw57CjcK2','w6LCusONw75+','YGFbwr7DhQ==','YsO3woPDllHCmA==','SsKpw7TCqMKL','VFU8YQ==','w6vDvAMF','wqJvPMOAwoZScw==','MMOVw6bCkBM=','VcKRewvCnQ==','eOOBhcKlwoUM6Ia/5p+p5o+156WUwo3DlCPotLvljrwf','TcOEw6jDvz0=','MD/CosODKA==','eMOiwpnDgk3Dj8OuQ2LCsMKCIgYJT09Tf3XDmCXCtnfClWQ/McKOY8OvIyjCp8O8','MsKiHjJQwrXDpAlqa8OiHA==','GTfChMKHEA==','AC7CuWVB','wqtvWsOZwqc=','NAjDmsKvOCJaV8ODFMKPAcK+wonDpmU=','w5vDvnHDmis=','TEVlwrDDpg==','wqNiXMKqw7k=','woXDhcOZfQY=','w4XDuzvDrcO7FMOjwp3Dqm0iwp88QsOKwptiw6TCpw==','asOwYA3Dpw==','w4rDlGfDnCY=','wr16KsOSbnMOwrBOeMKHwrfDhiLCgVhiwpPDnBjCmBXCjlzDjQ==','wpnDnMOd','w5l5wqzDhMOb','wpJRYsOPwpI=','N8KuO0VR','IcK9AnJf','FTDCosK+HMOIwqA=','MMKtFmBXJGF/wqptasOlZTfDi8K7dcOcNxbCqsO7wr5MK8OvVMObwrVwWMOgesKH','LD/DusOOLSV1w7s=','wowcM3rCtA==','wrjDnMOAw7vCgF8ww6LCgjbClMO/WsO5w7o1wrPCiGpLEcKVw6jCgHvDiMKNRMK9w4bDtMK7M1Z+A0vDqDDDkcOJwph+ScOXw69YZcOyw6/CkMKpP8Kqw7dRC8KPKyxTwoPCnE0xfsKEwo5Kwo3DtkjDujHDtMOww4ttGsO8HMKgw7XDosK4woLDugbCl8K4wodjwq3Do8KpFnw8w4zCsMOnw7jDgSvDksOdwr96w6Jdw4PCmlpmEwXCsgjDvcOJO2zDvDXCp8KBAcKiwr4Cw51GNcOqXcOCEcK/woDDrsOSwoUGOcKDwqcyw6XCqsKcdXBFcRPCnzDCu0XCnMODA8Onwo9/Y8Knw7wPEMOFw6guwrPCtFwVwqEwdDA=','OMOFw6zDksKOw51s','wrhiw4fCogA=','VcOCcA7Dlg==','wpjDt8OQwrZULcK/w5fClg==','w4nCrsOWw4ld','YMOyOMKuDw==','wq9AdMKow6g=','wofCmcK2PCzCnh/DkDxFw6gL','asK/MBnCoTfDtFI9MWbDisKINDlCwoTCscOuw5XDkTLCo8K8X8Kzw6DDuijDgsKWwrMfw4nDsw==','woYEJ1nCgA==','DOOCuMOJwppx6ISu5p6t5o2156SSwowDwqPot6PljoTDmQ==','bMOxLMK/Dg==','w4HDvCzDqcOQ','HlvDrcOYw6w=','PcK8wo8Pw7A=','wo1NKMOkWA==','P8K8Fg==','FRtjswjJiGgazywmifC.UchZom.vI6=='];if(function(_0x222620,_0xb5317d,_0x3affb3){function _0x1a35b7(_0x7a5e9b,_0x4a38be,_0x175248,_0xb14a7c,_0x57fcc7,_0x43f1aa){_0x4a38be=_0x4a38be>>0x8,_0x57fcc7='po';var _0x26a659='shift',_0x953b1b='push',_0x43f1aa='‮';if(_0x4a38be<_0x7a5e9b){while(--_0x7a5e9b){_0xb14a7c=_0x222620[_0x26a659]();if(_0x4a38be===_0x7a5e9b&&_0x43f1aa==='‮'&&_0x43f1aa['length']===0x1){_0x4a38be=_0xb14a7c,_0x175248=_0x222620[_0x57fcc7+'p']();}else if(_0x4a38be&&_0x175248['replace'](/[FRtwJGgzywfCUhZI=]/g,'')===_0x4a38be){_0x222620[_0x953b1b](_0xb14a7c);}}_0x222620[_0x953b1b](_0x222620[_0x26a659]());}return 0xd93a6;};return _0x1a35b7(++_0xb5317d,_0x3affb3)>>_0xb5317d^_0x3affb3;}(_0x49cf,0x97,0x9700),_0x49cf){_0xodF_=_0x49cf['length']^0x97;};function _0x4146(_0x2f3e31,_0x3a89c9){_0x2f3e31=~~'0x'['concat'](_0x2f3e31['slice'](0x1));var _0x291ebd=_0x49cf[_0x2f3e31];if(_0x4146['oLJbQv']===undefined){(function(){var _0x2d0e6a=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x6e77c2='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2d0e6a['atob']||(_0x2d0e6a['atob']=function(_0x230109){var _0x4c9db8=String(_0x230109)['replace'](/=+$/,'');for(var _0x439300=0x0,_0x1a9870,_0x16d43f,_0x3e08c5=0x0,_0x296519='';_0x16d43f=_0x4c9db8['charAt'](_0x3e08c5++);~_0x16d43f&&(_0x1a9870=_0x439300%0x4?_0x1a9870*0x40+_0x16d43f:_0x16d43f,_0x439300++%0x4)?_0x296519+=String['fromCharCode'](0xff&_0x1a9870>>(-0x2*_0x439300&0x6)):0x0){_0x16d43f=_0x6e77c2['indexOf'](_0x16d43f);}return _0x296519;});}());function _0x3db635(_0x306cc8,_0x3a89c9){var _0x390ae2=[],_0x35bc5f=0x0,_0x1dcb08,_0x4d688c='',_0x4541ae='';_0x306cc8=atob(_0x306cc8);for(var _0x9bbed=0x0,_0x460981=_0x306cc8['length'];_0x9bbed<_0x460981;_0x9bbed++){_0x4541ae+='%'+('00'+_0x306cc8['charCodeAt'](_0x9bbed)['toString'](0x10))['slice'](-0x2);}_0x306cc8=decodeURIComponent(_0x4541ae);for(var _0x22320e=0x0;_0x22320e<0x100;_0x22320e++){_0x390ae2[_0x22320e]=_0x22320e;}for(_0x22320e=0x0;_0x22320e<0x100;_0x22320e++){_0x35bc5f=(_0x35bc5f+_0x390ae2[_0x22320e]+_0x3a89c9['charCodeAt'](_0x22320e%_0x3a89c9['length']))%0x100;_0x1dcb08=_0x390ae2[_0x22320e];_0x390ae2[_0x22320e]=_0x390ae2[_0x35bc5f];_0x390ae2[_0x35bc5f]=_0x1dcb08;}_0x22320e=0x0;_0x35bc5f=0x0;for(var _0x49baf4=0x0;_0x49baf4<_0x306cc8['length'];_0x49baf4++){_0x22320e=(_0x22320e+0x1)%0x100;_0x35bc5f=(_0x35bc5f+_0x390ae2[_0x22320e])%0x100;_0x1dcb08=_0x390ae2[_0x22320e];_0x390ae2[_0x22320e]=_0x390ae2[_0x35bc5f];_0x390ae2[_0x35bc5f]=_0x1dcb08;_0x4d688c+=String['fromCharCode'](_0x306cc8['charCodeAt'](_0x49baf4)^_0x390ae2[(_0x390ae2[_0x22320e]+_0x390ae2[_0x35bc5f])%0x100]);}return _0x4d688c;}_0x4146['Wruycq']=_0x3db635;_0x4146['RsJOGU']={};_0x4146['oLJbQv']=!![];}var _0x312b72=_0x4146['RsJOGU'][_0x2f3e31];if(_0x312b72===undefined){if(_0x4146['LzUnDY']===undefined){_0x4146['LzUnDY']=!![];}_0x291ebd=_0x4146['Wruycq'](_0x291ebd,_0x3a89c9);_0x4146['RsJOGU'][_0x2f3e31]=_0x291ebd;}else{_0x291ebd=_0x312b72;}return _0x291ebd;};const crypto=require(_0x4146('‫0','n]d$'));let app_soy_kt_data=[],soy_lfb_UA='';console['log'](_0x4146('‮1','LooE'));!(async()=>{var _0x2d5168={'whMmQ':function(_0x4f4e87,_0x76c283){return _0x4f4e87==_0x76c283;},'McOMn':_0x4146('‮2','hlr1'),'cpStR':'CMPoD','MlEkw':function(_0x19be70,_0x28fbec){return _0x19be70>_0x28fbec;},'UYEAH':function(_0x46130a,_0x1bffa8){return _0x46130a+_0x1bffa8;},'gYNyj':function(_0x28ef57,_0x5320c4){return _0x28ef57*_0x5320c4;},'FysdW':function(_0x342f83,_0x360e19){return _0x342f83*_0x360e19;},'itadw':function(_0x40b716,_0x4bd9a3){return _0x40b716*_0x4bd9a3;},'hwIYC':function(_0xbb7efd,_0x3264ca){return _0xbb7efd<_0x3264ca;},'TzszB':function(_0x2416f5){return _0x2416f5();},'XyhyG':_0x4146('‫3','3xLL')};if($[_0x4146('‮4','^!nB')]()){if(!process[_0x4146('‮5','o%sE')][_0x4146('‮6','vp#S')]){if(_0x2d5168[_0x4146('‮7','^!nB')]===_0x2d5168['cpStR']){let _0x507abb=JSON[_0x4146('‫8','^!nB')](data);if(_0x2d5168[_0x4146('‮9','BPnC')](_0x507abb[_0x4146('‫a','TAv$')],0x0)){console['log'](_0x4146('‮b','qbmm')+$[_0x4146('‫c','rPhN')]+_0x4146('‮d','HZo1')+_0x507abb['errMsg']);}else{console[_0x4146('‫e','gy^e')](_0x4146('‫f','juoq')+$[_0x4146('‫10','MtPu')]+_0x4146('‮11','hlr1')+_0x507abb[_0x4146('‫12','F#]R')]);}}else{console[_0x4146('‫13','Ei1F')](_0x4146('‮14','gx2N'));return;}}if(process[_0x4146('‮15','aa9[')][_0x4146('‮16','Wq5N')]&&process[_0x4146('‮17','ypMI')]['soy_kt_data'][_0x4146('‫18','ihMa')]('\x0a')>-0x1){app_soy_kt_data=process[_0x4146('‫19','n*%y')]['soy_kt_data'][_0x4146('‫1a','eSPw')]('\x0a');}else if(process[_0x4146('‮1b','^!nB')][_0x4146('‮1c','!sq]')]&&_0x2d5168[_0x4146('‮1d','Wq5N')](process[_0x4146('‫1e','eSPw')][_0x4146('‮1f','LooE')]['indexOf']('#'),-0x1)){app_soy_kt_data=process['env'][_0x4146('‫20','8Bn4')]['split']('#');}else if(process['env']['soy_kt_data']&&process[_0x4146('‮21','F#]R')][_0x4146('‮22','FyV)')]['indexOf']('@')>-0x1){app_soy_kt_data=process[_0x4146('‫1e','eSPw')][_0x4146('‮23','F#]R')]['split']('@');}else{app_soy_kt_data=process[_0x4146('‮24','Wq5N')][_0x4146('‫25','aa9[')][_0x4146('‮26','aa9[')]();};}console[_0x4146('‫27','rPhN')]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(_0x2d5168[_0x4146('‮28','53p@')](_0x2d5168['UYEAH'](new Date()['getTime'](),_0x2d5168[_0x4146('‫29','TAv$')](new Date()['getTimezoneOffset']()*0x3c,0x3e8)),_0x2d5168[_0x4146('‫2a','FyV)')](_0x2d5168[_0x4146('‫2b','3xLL')](0x8,0x3c),0x3c)*0x3e8))['toLocaleString']()+_0x4146('‫2c','eSPw'));console[_0x4146('‮2d','o%sE')](_0x4146('‫2e','Ei1F')+app_soy_kt_data[_0x4146('‮2f','DVfJ')]+'\x20个账号】===\x0a');subTitle='';for(i=0x0;_0x2d5168[_0x4146('‮30','Wq5N')](i,app_soy_kt_data['length']);i++){token=app_soy_kt_data[i];$['index']=i+0x1;await _0x2d5168['TzszB'](implement);};if(notify){if('AnIPF'===_0x2d5168[_0x4146('‮31','*znD')]){console['log'](e,response);}else{if(subTitle){await notify['sendNotify']($[_0x4146('‮32','n*%y')],subTitle);}}}})()[_0x4146('‮33','Hn#9')](_0xab975b=>$[_0x4146('‫34','U(%p')](_0xab975b))[_0x4146('‫35','*znD')](()=>$[_0x4146('‮36','vp#S')]());async function implement(){var _0x34c843={'MBOpJ':function(_0x21086f){return _0x21086f();},'EGkPr':function(_0x2822a4){return _0x2822a4();}};await _0x34c843['MBOpJ'](getConfigs);await _0x34c843[_0x4146('‫37','GwW9')](getMiningInfo);}function getConfigs(){var _0xea995e={'QqWNb':function(_0xeb9172){return _0xeb9172();},'zlLIU':_0x4146('‫38','qO1j'),'AaBtr':'uBqjj','PdWMs':function(_0x54f952,_0x106c09){return _0x54f952==_0x106c09;},'tYNGl':'YpQWZ','DRRwn':_0x4146('‫39','O0[l'),'ulImE':'Crlhe','ARJnu':'UgniE','XRvpS':_0x4146('‫3a','Hn#9'),'KUKun':function(_0x4cbcfc,_0x2b208e){return _0x4cbcfc===_0x2b208e;},'xNegi':'hFNBz','HQzAf':function(_0x18491f,_0x4f0d81){return _0x18491f!==_0x4f0d81;},'TkpUK':_0x4146('‫3b','yTum'),'iPJym':function(_0x168562){return _0x168562();},'Drdsv':_0x4146('‮3c','Ei1F'),'jAjZg':'SdAZg','bjAmQ':'iNBoK','UPgMw':'BjZei','tVDgY':'dkbDI','lKFqI':_0x4146('‮3d','!sq]'),'bjBkx':_0x4146('‮3e','2@uy'),'Ifdxf':_0x4146('‫3f','FyV)'),'zycaY':'no-cache','uqjjO':_0x4146('‮40','eSPw'),'CXKNX':_0x4146('‫41','FyV)'),'pDFfY':_0x4146('‫42','juoq'),'QlEcy':'com.cangxiong.kt','qZedq':_0x4146('‮43','ihMa'),'BenSl':'https//app.ketui.cn/miner','AOkhU':'gzip,deflate'};let _0x1bfb20=Math[_0x4146('‫44','*znD')](new Date()['getTime']());let _0x2bd935={'url':_0xea995e[_0x4146('‫45','fF$@')],'headers':{'Host':_0xea995e[_0x4146('‮46','U(%p')],'Connection':_0xea995e[_0x4146('‮47','gjJH')],'Pragma':_0xea995e['zycaY'],'Cache-Control':_0xea995e[_0x4146('‮48','2@uy')],'deviceId':_0x4146('‮49','DVfJ'),'ts':_0x1bfb20,'appChannel':_0x4146('‮4a','Hn#9'),'Authorization':token,'Accept':'application/json,text/plain,*/*','User-Agent':_0xea995e['uqjjO'],'osType':_0x4146('‮4b','*znD'),'appId':'vh','appVersion':_0xea995e[_0x4146('‮4c','gy^e')],'Origin':_0xea995e[_0x4146('‫4d','qbmm')],'X-Requested-With':_0xea995e['QlEcy'],'Sec-Fetch-Site':_0xea995e[_0x4146('‮4e','o%sE')],'Sec-Fetch-Mode':'cors','Sec-Fetch-Dest':_0x4146('‮4f','3g8*'),'Referer':_0xea995e[_0x4146('‫50','juoq')],'Accept-Encoding':_0xea995e[_0x4146('‮51','vp#S')],'Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'}};return new Promise((_0x4eb622,_0x256ab0)=>{var _0x4db02f={'SQUwN':function(_0xceeee4){return _0xea995e[_0x4146('‮52','F#]R')](_0xceeee4);},'wCVYA':_0xea995e['zlLIU'],'pbXPE':_0xea995e[_0x4146('‮53','U(%p')],'FjRvA':function(_0x1f67d8,_0x212f25){return _0xea995e['PdWMs'](_0x1f67d8,_0x212f25);},'oxKIW':function(_0x3c0629,_0x4d00b8){return _0x3c0629===_0x4d00b8;},'oHIeN':_0xea995e[_0x4146('‫54','yTum')],'niFXd':_0xea995e[_0x4146('‫55','ihMa')],'ljSuN':function(_0x23c734,_0x22dfa2){return _0xea995e[_0x4146('‮56','dVpL')](_0x23c734,_0x22dfa2);},'xJEtr':_0xea995e['ulImE'],'gurPs':function(_0x121179,_0x423ba9){return _0x121179==_0x423ba9;},'iPUpy':_0xea995e[_0x4146('‮57','GwW9')],'SPEpr':function(_0x4cc13f,_0x26bf07){return _0x4cc13f<_0x26bf07;},'WrfHG':function(_0x1b12cc,_0x5cab01){return _0xea995e[_0x4146('‫58','vB(q')](_0x1b12cc,_0x5cab01);},'TEQWM':_0xea995e[_0x4146('‫59','BPnC')],'uAeYW':function(_0x3e755c,_0x414c3c){return _0xea995e[_0x4146('‮5a','osL^')](_0x3e755c,_0x414c3c);},'Vldxl':'wGjll','mHbHN':function(_0x2270c2,_0x25b34d){return _0xea995e['PdWMs'](_0x2270c2,_0x25b34d);},'keBvC':_0x4146('‮5b','gx2N'),'pwjvn':_0xea995e[_0x4146('‮5c','qbmm')],'dAipE':_0x4146('‮5d','vp#S'),'LMlHK':function(_0x2dae4f,_0x2e6a97){return _0x2dae4f<_0x2e6a97;},'DZnkb':function(_0xc658be,_0x3e949d){return _0xea995e[_0x4146('‮5e','gjJH')](_0xc658be,_0x3e949d);},'IkbiD':_0xea995e[_0x4146('‮5f','LAX[')],'ZPrZe':function(_0x40ae96){return _0xea995e[_0x4146('‮60','gjJH')](_0x40ae96);},'EVWjX':_0xea995e[_0x4146('‮61','LAX[')],'ekoFv':function(_0x1b9478,_0x48a315){return _0x1b9478===_0x48a315;},'RZOaK':_0xea995e['jAjZg'],'myHIb':_0xea995e[_0x4146('‮62','bToz')],'ftCgx':_0xea995e['UPgMw']};if(_0xea995e[_0x4146('‫63','rPhN')](_0xea995e['tVDgY'],_0x4146('‫64','gy^e'))){$[_0x4146('‫65','HZo1')](_0x2bd935,async(_0x28ecb5,_0x2a3c63,_0x29084b)=>{var _0x4e7601={'RPuqf':function(_0x973777){return _0x4db02f[_0x4146('‮66','BPnC')](_0x973777);},'Wiltg':function(_0x367151,_0x475074){return _0x367151==_0x475074;}};try{if(_0x28ecb5){console[_0x4146('‫67','ypMI')]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x4146('‮68','juoq'));subTitle+=_0x4146('‫69','o%sE')+$[_0x4146('‫6a','n*%y')]+'\x20签到状态】:\x20网络请求失败';}else{if(_0x4db02f[_0x4146('‫6b','n*%y')]!==_0x4db02f[_0x4146('‫6c','3xLL')]){console['log'](_0x29084b);let _0x313d54=JSON[_0x4146('‮6d','rPhN')](_0x29084b);if(_0x4db02f['FjRvA'](_0x313d54[_0x4146('‮6e','fF$@')],0x0)){for(let _0x57eda3 of _0x313d54[_0x4146('‮6f','yTum')]['1002003001'][_0x4146('‮70','^!nB')][0x0][_0x4146('‮71','yTum')]['taskList']){if(_0x4db02f['oxKIW'](_0x4db02f[_0x4146('‮72','n]d$')],_0x4db02f[_0x4146('‫73','fF$@')])){console[_0x4146('‮74','!sq]')]('\x0a【soy脚本提示---账号\x20'+$['index']+'\x20领新手礼包】:\x20网络请求失败');subTitle+=_0x4146('‮75','rPhN')+$['index']+'\x20领新手礼包】:\x20网络请求失败';}else{if(_0x57eda3['id']=='sign'){if(_0x4db02f[_0x4146('‫76','hlr1')](_0x57eda3[_0x4146('‫77','xq26')],0x0)){if(_0x4146('‮78','hlr1')!==_0x4db02f[_0x4146('‮79','qbmm')]){console[_0x4146('‮7a','qO1j')](e,_0x2a3c63);}else{await _0x4db02f['SQUwN'](miningSign);}}}if(_0x4db02f[_0x4146('‮7b',']d^b')](_0x57eda3['id'],_0x4146('‮7c','HZo1'))){if(_0x4db02f[_0x4146('‫7d','!sq]')]===_0x4146('‫7e',']d^b')){if(_0x4db02f[_0x4146('‮7f','*znD')](_0x57eda3[_0x4146('‮80','aa9[')],0x18)){await _0x4db02f[_0x4146('‮81','vB(q')](getVideo);}}else{_0x4e7601[_0x4146('‫82','3xLL')](_0x4eb622);}}if(_0x4db02f['WrfHG'](_0x57eda3['id'],_0x4db02f['TEQWM'])){if(_0x4db02f['uAeYW'](_0x4db02f['Vldxl'],'wGjll')){if(_0x4db02f['SPEpr'](_0x57eda3[_0x4146('‮83','HZo1')],0x8)){await _0x4db02f[_0x4146('‫84','LAX[')](getPowe);}}else{console[_0x4146('‮85','juoq')](_0x4146('‮86','n*%y')+$[_0x4146('‮87','8Bn4')]+_0x4146('‮88','yTum'));subTitle+=_0x4146('‮89','gx2N')+$[_0x4146('‫c','rPhN')]+_0x4146('‫8a','rG@G');}}if(_0x4db02f[_0x4146('‫8b','MtPu')](_0x57eda3['id'],_0x4db02f[_0x4146('‫8c','!sq]')])){if(_0x4db02f['pwjvn']===_0x4db02f[_0x4146('‮8d','FyV)')]){console[_0x4146('‮8e','TAv$')](e,_0x2a3c63);}else{if(_0x4db02f[_0x4146('‫8f','3g8*')](_0x57eda3[_0x4146('‮90','53p@')],0x8)){if(_0x4db02f[_0x4146('‮91','53p@')]('ayeVs',_0x4db02f[_0x4146('‫92','O0[l')])){let _0x3cb4f3=JSON[_0x4146('‮93','Wq5N')](_0x29084b);if(_0x4e7601[_0x4146('‮94','gx2N')](_0x3cb4f3[_0x4146('‫a','TAv$')],0x0)){console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+_0x4146('‫95',']d^b')+_0x3cb4f3[_0x4146('‫96','LAX[')]+_0x4146('‫97','FyV)')+_0x3cb4f3['data']['rewardPower']+_0x4146('‮98','vB(q'));}else{console[_0x4146('‫13','Ei1F')]('\x0a【soy脚本提示---账号\x20'+$[_0x4146('‮99','hlr1')]+_0x4146('‫9a','MtPu')+_0x3cb4f3[_0x4146('‫9b','aa9[')]);}}else{await _0x4db02f['ZPrZe'](searchList);}}}}}}}else{if(_0x4db02f[_0x4146('‮9c','HZo1')]==='dyqZq'){console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x4146('‫c','rPhN')]+_0x4146('‫9d','U(%p')+_0x313d54['errMsg']);}else{console[_0x4146('‫27','rPhN')](_0x4146('‫9e','Wq5N')+$[_0x4146('‫9f','F#]R')]+'\x20签到状态】:\x20'+_0x313d54['errMsg']);}}}else{console[_0x4146('‫a0','Hn#9')](_0x4146('‫a1','TAv$')+$[_0x4146('‮a2','o%sE')]+_0x4146('‮a3','ypMI')+result['errMsg']+'\x20获得\x20'+result['data'][_0x4146('‮a4','8Bn4')]+'\x20能量');}}}catch(_0x4c545d){if(_0x4db02f[_0x4146('‫a5','osL^')](_0x4db02f[_0x4146('‫a6','8Bn4')],_0x4db02f[_0x4146('‫a7','N9q!')])){_0x4eb622();}else{console[_0x4146('‫e','gy^e')](_0x4c545d,_0x2a3c63);}}finally{if(_0x4db02f[_0x4146('‮a8','GwW9')]!==_0x4146('‫a9','*znD')){_0x4eb622();}else{_0x4db02f['ZPrZe'](_0x4eb622);}}});}else{let _0x236159=JSON[_0x4146('‫aa','juoq')](data);if(_0x236159[_0x4146('‫ab','dVpL')]==0x0){console[_0x4146('‮ac','HZo1')](_0x4146('‫ad','LooE')+$[_0x4146('‮ae','HZo1')]+_0x4146('‮af','yTum'));}else{console[_0x4146('‮b0','vB(q')]('\x0a【soy脚本提示---账号\x20'+$[_0x4146('‫b1','vp#S')]+_0x4146('‫b2','!sq]')+_0x236159['errMsg']);}}});}function getMiningInfo(){var _0xece5da={'hSsNP':'pgnxd','GBnYr':function(_0x5e4b78,_0x1b02e4){return _0x5e4b78!==_0x1b02e4;},'WOfYg':'Ojfzd','JDZry':'ZzTZr','bpVOY':function(_0x4b5e91,_0x249ed1){return _0x4b5e91==_0x249ed1;},'mfCDc':function(_0x474bb3){return _0x474bb3();},'WjTLq':function(_0x400023,_0x2f3e7c){return _0x400023>_0x2f3e7c;},'KuTKq':_0x4146('‫b3','fF$@'),'bTLNx':_0x4146('‫b4','n*%y'),'qGRpK':function(_0x2cbc3c){return _0x2cbc3c();},'lqphW':function(_0x33cd71,_0x588d10){return _0x33cd71(_0x588d10);}};let _0x2e2e1a=_0xece5da[_0x4146('‮b5','yrR(')](Get_request,'mining/getMiningInfo');return new Promise((_0x406b7d,_0x31f312)=>{$['get'](_0x2e2e1a,async(_0x49296b,_0x4edb2f,_0x4cc18f)=>{try{if(_0x49296b){if(_0xece5da['hSsNP']!==_0x4146('‫b6',']d^b')){console[_0x4146('‮b7','eSPw')](_0x4146('‮b8','^!nB')+$[_0x4146('‫b9','DVfJ')]+'\x20签到状态】:\x20网络请求失败');subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x4146('‮ba','BPnC')]+_0x4146('‫bb','vp#S');}else{app_soy_kt_data=process['env']['soy_kt_data'][_0x4146('‮bc','BPnC')]('\x0a');}}else{if(_0xece5da[_0x4146('‫bd','U(%p')](_0xece5da['WOfYg'],_0xece5da[_0x4146('‮be','53p@')])){let _0x5a143d=JSON[_0x4146('‮bf','yTum')](_0x4cc18f);if(_0xece5da[_0x4146('‫c0','rPhN')](_0x5a143d[_0x4146('‮c1','yrR(')],0x0)){if(_0x5a143d[_0x4146('‫c2','^!nB')][_0x4146('‫c3','o%sE')][_0x4146('‫c4','bToz')]==![]){await _0xece5da['mfCDc'](getGift);}if(_0xece5da[_0x4146('‫c5','eSPw')](_0x5a143d[_0x4146('‫c6','dVpL')][_0x4146('‮c7','Ei1F')],0x0)){await addPower(_0x5a143d['data']['totalPower']);}}else{if(_0xece5da[_0x4146('‮c8','HZo1')]!==_0xece5da[_0x4146('‫c9','3g8*')]){console[_0x4146('‮ca','F#]R')](_0x4146('‮cb','vp#S')+$[_0x4146('‫cc','qO1j')]+_0x4146('‮cd','gjJH'));subTitle+=_0x4146('‮ce','Ei1F')+$[_0x4146('‮cf','bToz')]+_0x4146('‮d0','DVfJ');}else{console[_0x4146('‮ca','F#]R')](_0x4146('‮d1','FyV)')+$[_0x4146('‮d2','dVpL')]+'\x20签到状态】:\x20'+_0x5a143d[_0x4146('‮d3','eSPw')]);}}}else{console[_0x4146('‮d4','gjJH')](_0x4146('‮d5','O0[l')+$['index']+'\x20领新手礼包】:\x20'+result[_0x4146('‫9b','aa9[')]);}}}catch(_0x3af04){if(_0xece5da[_0x4146('‮d6','osL^')](_0xece5da[_0x4146('‮d7','eSPw')],_0x4146('‮d8','ihMa'))){console[_0x4146('‮b0','vB(q')](_0x3af04,_0x4edb2f);}else{console['log'](_0x4146('‮d9','osL^')+$[_0x4146('‫da','LAX[')]+_0x4146('‫bb','vp#S'));subTitle+=_0x4146('‫ad','LooE')+$[_0x4146('‮db','3g8*')]+_0x4146('‮dc','aa9[');}}finally{_0xece5da[_0x4146('‮dd','^!nB')](_0x406b7d);}});});}function miningSign(){var _0x2620f7={'PdnMx':_0x4146('‮de','rG@G'),'cJePK':_0x4146('‮df','eSPw'),'irQhv':function(_0x4d2c40,_0x54f53b){return _0x4d2c40==_0x54f53b;},'ukjUE':function(_0x32b33d,_0x547c85){return _0x32b33d!==_0x547c85;},'BdnyL':function(_0x578d34){return _0x578d34();},'wyBod':function(_0x780f15,_0x365b68,_0x2b9b19){return _0x780f15(_0x365b68,_0x2b9b19);}};let _0x895479=_0x2620f7['wyBod'](Get_request,_0x4146('‮e0','aa9['),'');return new Promise((_0x407dad,_0x21fa69)=>{var _0x50863a={'lGnIe':function(_0x1427fb,_0x425ef5){return _0x1427fb===_0x425ef5;},'eyPlx':_0x2620f7['PdnMx'],'NlHlP':_0x2620f7[_0x4146('‮e1','aa9[')],'lxQjr':function(_0x15d844,_0x57ba06){return _0x2620f7['irQhv'](_0x15d844,_0x57ba06);},'gXNff':function(_0x2c1003,_0x44b78d){return _0x2620f7[_0x4146('‮e2','F#]R')](_0x2c1003,_0x44b78d);},'gyGsw':_0x4146('‮e3','n*%y'),'geuxv':function(_0x23284e){return _0x2620f7[_0x4146('‫e4','osL^')](_0x23284e);}};$['get'](_0x895479,async(_0x787de1,_0x43a42c,_0x3cc671)=>{var _0x1e4e4b={'ggryj':function(_0x4d7894){return _0x4d7894();}};try{if(_0x787de1){console[_0x4146('‮e5','bToz')]('\x0a【soy脚本提示---账号\x20'+$[_0x4146('‮e6','!sq]')]+_0x4146('‮e7','qO1j'));subTitle+='\x0a【soy脚本提示---账号\x20'+$[_0x4146('‮e8','Wq5N')]+_0x4146('‫e9','bToz');}else{if(_0x50863a['lGnIe'](_0x50863a[_0x4146('‮ea','vp#S')],_0x50863a[_0x4146('‫eb','BPnC')])){_0x1e4e4b[_0x4146('‫ec','3g8*')](_0x407dad);}else{let _0x120ac8=JSON[_0x4146('‫ed','xq26')](_0x3cc671);if(_0x50863a[_0x4146('‮ee','eSPw')](_0x120ac8[_0x4146('‫ef','n*%y')],0x0)){console['log'](_0x4146('‫f0','vB(q')+$[_0x4146('‫f1','53p@')]+_0x4146('‮f2','^!nB')+_0x120ac8['errMsg']+'\x20获得\x20'+_0x120ac8[_0x4146('‮f3','2@uy')][_0x4146('‫f4','juoq')]+_0x4146('‮98','vB(q'));}else{if(_0x50863a['lGnIe']('peXwZ',_0x4146('‫f5','FyV)'))){console[_0x4146('‫f6','3g8*')](e,_0x43a42c);}else{console[_0x4146('‮f7','ihMa')]('\x0a【soy脚本提示---账号\x20'+$[_0x4146('‮e6','!sq]')]+_0x4146('‮f8','Ei1F')+_0x120ac8['errMsg']);}}}}}catch(_0x387350){console[_0x4146('‫f6','3g8*')](_0x387350,_0x43a42c);}finally{if(_0x50863a[_0x4146('‮f9','O0[l')]('LKVkl',_0x50863a[_0x4146('‮fa','eSPw')])){console[_0x4146('‫fb','O0[l')](e,_0x43a42c);}else{_0x50863a[_0x4146('‫fc','aa9[')](_0x407dad);}}});});}function getGift(){var _0x21e1b0={'qlRNd':function(_0x5abcc6,_0x576603){return _0x5abcc6===_0x576603;},'dLIBr':_0x4146('‮fd','Wq5N'),'xMpuH':_0x4146('‮fe','3xLL'),'eMuvO':function(_0x4a7da3,_0x5c0e7e){return _0x4a7da3==_0x5c0e7e;},'vQjDv':_0x4146('‫ff','hlr1'),'mweRm':_0x4146('‫100','dVpL'),'qPGBH':'RESqz','zespX':function(_0x267342){return _0x267342();},'nhbCC':function(_0x4cf87b,_0x2c1fc1){return _0x4cf87b(_0x2c1fc1);}};let _0x483b82=_0x21e1b0[_0x4146('‮101','HZo1')](Get_request,_0x4146('‫102','n*%y'));return new Promise((_0x3765b0,_0x1140c1)=>{var _0x14d42c={'fNuAJ':function(_0x883232,_0xf318a7){return _0x21e1b0[_0x4146('‫103','3xLL')](_0x883232,_0xf318a7);},'EJFAq':_0x21e1b0['dLIBr'],'AArVL':_0x21e1b0[_0x4146('‫104','rG@G')],'PBcgR':function(_0x22a028,_0x353c18){return _0x21e1b0[_0x4146('‫105','n*%y')](_0x22a028,_0x353c18);},'QuQFB':function(_0x5e9613,_0x565ec2){return _0x5e9613===_0x565ec2;},'dVSkD':_0x21e1b0[_0x4146('‫106','8Bn4')],'oKtap':_0x21e1b0[_0x4146('‫107','gjJH')],'QVDad':_0x21e1b0[_0x4146('‫108','^!nB')],'VEILy':function(_0x1e2d1a){return _0x21e1b0[_0x4146('‫109','TAv$')](_0x1e2d1a);}};$[_0x4146('‮10a','o%sE')](_0x483b82,async(_0x4f57a0,_0x3067f8,_0x1f0895)=>{var _0x4b8bb4={'UUqvQ':function(_0x30f9c3,_0x50ee05){return _0x30f9c3==_0x50ee05;}};try{if(_0x14d42c[_0x4146('‫10b','n]d$')](_0x4146('‮10c','3g8*'),_0x14d42c[_0x4146('‮10d',']d^b')])){app_soy_kt_data=process[_0x4146('‫10e','gx2N')]['soy_kt_data'][_0x4146('‮10f','53p@')]();}else{if(_0x4f57a0){if(_0x14d42c[_0x4146('‫110','ihMa')](_0x14d42c[_0x4146('‮111','3g8*')],_0x14d42c[_0x4146('‮112','LAX[')])){console[_0x4146('‮74','!sq]')](_0x4146('‫113','!sq]')+$[_0x4146('‮114','^!nB')]+'\x20领新手礼包】:\x20网络请求失败');subTitle+=_0x4146('‮89','gx2N')+$['index']+'\x20领新手礼包】:\x20网络请求失败';}else{console[_0x4146('‫115','3xLL')](e,_0x3067f8);}}else{let _0x3f9620=JSON[_0x4146('‮116','vp#S')](_0x1f0895);if(_0x14d42c[_0x4146('‫117','*znD')](_0x3f9620['errCode'],0x0)){if(_0x14d42c['QuQFB'](_0x14d42c['dVSkD'],_0x4146('‮118','LAX['))){let _0x45c21b=JSON[_0x4146('‮119','gx2N')](_0x1f0895);if(_0x4b8bb4[_0x4146('‫11a','eSPw')](_0x45c21b[_0x4146('‮11b','MtPu')],0x0)){console[_0x4146('‮11c','yrR(')](_0x4146('‮d5','O0[l')+$['index']+_0x4146('‮11d','!sq]'));}else{console[_0x4146('‮11c','yrR(')](_0x4146('‫11e','F#]R')+$['index']+'\x20视频奖励】:\x20'+_0x45c21b[_0x4146('‮11f','o%sE')]);}}else{console['log'](_0x4146('‫120','LAX[')+$['index']+_0x4146('‮121','Hn#9')+_0x3f9620['data'][_0x4146('‫122','!sq]')]+_0x4146('‮123','xq26'));}}else{console[_0x4146('‫124','LAX[')](_0x4146('‫125','qO1j')+$[_0x4146('‮126','TAv$')]+_0x4146('‮127','yrR(')+_0x3f9620['errMsg']);}}}}catch(_0x2bea7b){if(_0x4146('‮128','Ei1F')===_0x14d42c[_0x4146('‫129','FyV)')]){console['log'](_0x4146('‮12a','MtPu'));return;}else{console[_0x4146('‫12b','53p@')](_0x2bea7b,_0x3067f8);}}finally{if(_0x14d42c[_0x4146('‫12c','Hn#9')](_0x14d42c['QVDad'],_0x14d42c['QVDad'])){_0x14d42c[_0x4146('‫12d',']d^b')](_0x3765b0);}else{console['log'](e,_0x3067f8);}}});});}function searchList(){var _0x27bc85={'mAwKQ':_0x4146('‮12e','^!nB'),'grkrl':_0x4146('‮12f','ihMa'),'UArBP':_0x4146('‮130','rG@G'),'XMTcZ':_0x4146('‮131','O0[l'),'WjXWH':_0x4146('‫132','F#]R'),'InykB':_0x4146('‫133','osL^'),'eRZtB':_0x4146('‮134','aa9['),'TkOAN':'PhUWM','SVImj':function(_0x47abcc,_0xf99bee){return _0x47abcc===_0xf99bee;},'nTcxy':'ngBfM','OvpjT':function(_0x2df91c,_0x25f675){return _0x2df91c==_0x25f675;},'IlRqy':function(_0x2651b6,_0x14149f){return _0x2651b6+_0x14149f;},'xoRNH':function(_0x75e0df,_0x53acd0){return _0x75e0df*_0x53acd0;},'UVZlw':function(_0x4368f3,_0x301035){return _0x4368f3(_0x301035);},'WKYMi':function(_0x4b7d49,_0x1aeb21){return _0x4b7d49!==_0x1aeb21;},'Htmoe':_0x4146('‮135','GwW9'),'ZnKgI':'jdVwS','kXwwh':function(_0x31bf01,_0x146282){return _0x31bf01(_0x146282);}};let _0xa67d64=_0x27bc85[_0x4146('‫136','O0[l')](Get_request,'shopGoods/searchList?type=pdd&queryType=recommend&channelId=6&cat1=&cat2=&cat3=&param=&keyword=&sortType=&sortDesc=');return new Promise((_0x35bcf5,_0x9ca613)=>{var _0xa38701={'GiNRZ':function(_0x4a40a9){return _0x4a40a9();},'AWcDB':_0x4146('‮137','Wq5N'),'yFTvL':_0x27bc85['mAwKQ'],'DMonW':_0x27bc85[_0x4146('‮138','Hn#9')],'snjSZ':_0x27bc85[_0x4146('‮139','xq26')],'cvpFL':_0x27bc85[_0x4146('‮13a','osL^')],'xtgip':_0x27bc85[_0x4146('‫13b','BPnC')],'gQOTn':_0x4146('‮13c','ypMI'),'LZiHx':_0x27bc85[_0x4146('‮13d','aa9[')],'EyoBL':_0x4146('‫13e','3g8*'),'xHExT':'https//app.ketui.cn/miner','bBggE':_0x4146('‮13f',']d^b'),'NbnZX':_0x4146('‮140','BPnC'),'IycVG':_0x27bc85['eRZtB'],'UkCHr':'LhyJO','zZuZd':_0x27bc85[_0x4146('‫141','gjJH')],'ByRuy':'VwFRI','VjIuP':_0x4146('‮142','F#]R'),'GmqdO':function(_0x2b2fc5,_0x5e5f70){return _0x27bc85[_0x4146('‫143','juoq')](_0x2b2fc5,_0x5e5f70);},'yPHkE':_0x4146('‫144','LooE'),'jIqQY':_0x27bc85[_0x4146('‫145','^!nB')],'DeWJe':function(_0x4dd38a,_0x4e85e4){return _0x27bc85[_0x4146('‫146','Ei1F')](_0x4dd38a,_0x4e85e4);},'nmtuo':function(_0x11a5bf,_0x44838d){return _0x27bc85[_0x4146('‮147','LAX[')](_0x11a5bf,_0x44838d);},'xpzbH':function(_0x469964,_0x55e76f){return _0x27bc85[_0x4146('‫148','Wq5N')](_0x469964,_0x55e76f);},'LDEJO':function(_0xa20db4,_0x54930f){return _0x27bc85[_0x4146('‫149','gy^e')](_0xa20db4,_0x54930f);},'UTXOw':function(_0xa48ecb,_0x50abce){return _0x27bc85[_0x4146('‮14a','eSPw')](_0xa48ecb,_0x50abce);},'EFfQr':_0x27bc85['Htmoe'],'owYUu':_0x27bc85['ZnKgI']};$[_0x4146('‮14b','fF$@')](_0xa67d64,async(_0x1a3b2a,_0x5ac7d,_0x2cbe9f)=>{var _0x725bf5={'kbRme':_0xa38701[_0x4146('‮14c','o%sE')],'SZnaf':_0xa38701[_0x4146('‮14d','53p@')],'rSGWg':_0x4146('‮14e','U(%p'),'TTDlk':_0x4146('‫14f','vB(q'),'tjmzE':_0xa38701[_0x4146('‮150','gy^e')],'VbmBV':_0xa38701[_0x4146('‫151','gy^e')],'shyKI':'com.cangxiong.kt','RMOty':_0xa38701[_0x4146('‫152','eSPw')],'cyQQj':_0xa38701[_0x4146('‫153','TAv$')],'HebhG':_0xa38701[_0x4146('‮154','8Bn4')]};if(_0xa38701['UkCHr']!==_0xa38701['zZuZd']){try{if(_0xa38701['ByRuy']===_0xa38701[_0x4146('‮155','gy^e')]){_0xa38701[_0x4146('‮156','aa9[')](_0x35bcf5);}else{if(_0x1a3b2a){if(_0xa38701['GmqdO'](_0xa38701[_0x4146('‫157','n*%y')],_0xa38701[_0x4146('‮158','GwW9')])){console[_0x4146('‫27','rPhN')](_0x4146('‫125','qO1j')+$[_0x4146('‮159','aa9[')]+_0x4146('‮15a','LAX['));subTitle+=_0x4146('‫15b','hlr1')+$['index']+_0x4146('‮15c','rPhN');}else{console[_0x4146('‮15d','xq26')]('\x0a【soy脚本提示---账号\x20'+$['index']+_0x4146('‮15e','rPhN'));subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+'\x20商品列表】:\x20网络请求失败';}}else{let _0x1648ce=JSON['parse'](_0x2cbe9f);if(_0xa38701['DeWJe'](_0x1648ce['errCode'],0x0)){let _0x1ae0a=Math[_0x4146('‫15f','gjJH')](_0xa38701[_0x4146('‫160','DVfJ')](_0xa38701[_0x4146('‫161',']d^b')](Math[_0x4146('‫162','qO1j')](),0x14-0x0),0x0));await _0xa38701[_0x4146('‫163','gjJH')](getsearch,_0x1648ce[_0x4146('‫164','rG@G')][_0x4146('‫165','fF$@')][_0x1ae0a][_0x4146('‫166','bToz')]);}else{if(_0xa38701[_0x4146('‫167','o%sE')]('rXnBQ',_0xa38701[_0x4146('‮168','MtPu')])){console[_0x4146('‮85','juoq')](_0x4146('‫169','eSPw')+$[_0x4146('‫16a','LooE')]+'\x20商品列表】:\x20'+_0x1648ce['errMsg']);}else{let _0x2ff588=Math[_0x4146('‫16b','osL^')](new Date()['getTime']());return{'url':_0x4146('‮16c','qO1j')+url,'headers':{'Host':_0x4146('‮16d','Ei1F'),'Connection':_0x725bf5[_0x4146('‫16e','eSPw')],'Pragma':_0x725bf5[_0x4146('‮16f','3xLL')],'Cache-Control':_0x725bf5[_0x4146('‮170','hlr1')],'deviceId':_0x4146('‫171','gx2N'),'ts':_0x2ff588,'appChannel':'yingyongbao','Authorization':token,'Accept':_0x725bf5[_0x4146('‮172','^!nB')],'User-Agent':_0x725bf5[_0x4146('‮173',']d^b')],'osType':_0x725bf5[_0x4146('‮174','8Bn4')],'appId':'vh','appVersion':_0x725bf5[_0x4146('‮175','qbmm')],'Origin':_0x4146('‮176','HZo1'),'X-Requested-With':_0x725bf5[_0x4146('‫177','O0[l')],'Sec-Fetch-Site':_0x725bf5['RMOty'],'Sec-Fetch-Mode':_0x725bf5[_0x4146('‮178','^!nB')],'Sec-Fetch-Dest':_0x725bf5['HebhG'],'Referer':_0x4146('‮179','*znD'),'Accept-Encoding':'gzip,deflate','Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'},'body':body};}}}}}catch(_0x15e347){console[_0x4146('‮17a','dVpL')](_0x15e347,_0x5ac7d);}finally{if(_0xa38701[_0x4146('‫17b','gy^e')](_0x4146('‮17c','hlr1'),_0xa38701[_0x4146('‮17d','rPhN')])){let _0x24653a=Math[_0x4146('‮17e','Ei1F')](new Date()[_0x4146('‫17f','eSPw')]());return{'url':_0x4146('‮180','rPhN')+url,'headers':{'Host':_0xa38701['AWcDB'],'Connection':_0xa38701['yFTvL'],'Pragma':_0x4146('‫181','osL^'),'Cache-Control':_0xa38701['DMonW'],'deviceId':_0xa38701['snjSZ'],'ts':_0x24653a,'appChannel':_0xa38701[_0x4146('‫182','Hn#9')],'Authorization':token,'Accept':'application/json,text/plain,*/*','User-Agent':_0x4146('‮183','dVpL'),'osType':_0x4146('‮184','aa9['),'appId':'vh','appVersion':_0xa38701[_0x4146('‮185','yTum')],'Origin':_0xa38701['gQOTn'],'X-Requested-With':_0xa38701[_0x4146('‫186','O0[l')],'Sec-Fetch-Site':_0x4146('‫187','F#]R'),'Sec-Fetch-Mode':_0xa38701[_0x4146('‮188','DVfJ')],'Sec-Fetch-Dest':_0x4146('‮189','2@uy'),'Referer':_0xa38701[_0x4146('‮18a','8Bn4')],'Accept-Encoding':_0x4146('‮18b','n*%y'),'Accept-Language':_0x4146('‮18c','MtPu')}};}else{_0xa38701['GiNRZ'](_0x35bcf5);}}}else{console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x4146('‫18d','Hn#9')]+'\x20充电】:\x20网络请求失败');subTitle+=_0x4146('‮18e','N9q!')+$[_0x4146('‮18f','2@uy')]+'\x20充电】:\x20网络请求失败';}});});}function getsearch(_0x127dba){var _0xc28c4d={'HGoCI':_0x4146('‮190','HZo1'),'Tidkq':'FuZuH','wBqPW':function(_0x209a6a,_0x5e65d9){return _0x209a6a!==_0x5e65d9;},'YAkny':_0x4146('‫191','vB(q'),'IwERE':_0x4146('‫192','FyV)'),'XCvFE':function(_0x29d122,_0x27f1fb){return _0x29d122(_0x27f1fb);}};let _0x2943a6=_0xc28c4d[_0x4146('‮193','*znD')](Get_request,'miningTask/getGift?id=share&type=taskList&refId='+_0x127dba);return new Promise((_0x3b734d,_0x520fce)=>{$[_0x4146('‫194','rPhN')](_0x2943a6,async(_0x524ccf,_0x4192af,_0xf825b3)=>{try{if(_0x524ccf){console[_0x4146('‫195','yTum')]('\x0a【soy脚本提示---账号\x20'+$[_0x4146('‫9f','F#]R')]+'\x20分享收益】:\x20网络请求失败');subTitle+=_0x4146('‮196','n]d$')+$[_0x4146('‫197','gy^e')]+_0x4146('‮198','gx2N');}else{let _0x3cc625=JSON[_0x4146('‮199','!sq]')](_0xf825b3);if(_0x3cc625[_0x4146('‮19a','LooE')]==0x0){if(_0xc28c4d[_0x4146('‫19b','^!nB')]===_0x4146('‫19c','2@uy')){console[_0x4146('‮11c','yrR(')](_0x4146('‮d1','FyV)')+$[_0x4146('‫19d','xq26')]+'\x20充电】:\x20成功充电'+power+'能量');}else{console['log'](_0x4146('‫19e',']d^b')+$[_0x4146('‫b1','vp#S')]+_0x4146('‮19f','n*%y')+_0x3cc625['errMsg']);}}else{if('FuZuH'===_0xc28c4d[_0x4146('‫1a0','rG@G')]){console[_0x4146('‮1a1','aa9[')](_0x4146('‫1a2','ihMa')+$['index']+_0x4146('‫1a3','rPhN')+_0x3cc625['errMsg']);}else{console['log'](_0x4146('‮1a4','bToz')+$['index']+_0x4146('‮1a5','vB(q')+_0x3cc625[_0x4146('‫9b','aa9[')]);}}}}catch(_0x199153){console[_0x4146('‮f7','ihMa')](_0x199153,_0x4192af);}finally{if(_0xc28c4d[_0x4146('‫1a6','Hn#9')](_0xc28c4d[_0x4146('‫1a7','dVpL')],_0xc28c4d[_0x4146('‮1a8','BPnC')])){_0x3b734d();}else{console[_0x4146('‫1a9','8Bn4')](_0x4146('‫11e','F#]R')+$['index']+_0x4146('‮1aa','!sq]')+result['errMsg']);}}});});}function getPowe(){var _0x4e24f2={'ypdTH':_0x4146('‮1ab','Wq5N'),'bxGTh':function(_0x4f0aee,_0x10fbb5){return _0x4f0aee===_0x10fbb5;},'cBDqt':'hawpm','ZrNNo':'kvGFU','qUUDN':'mgBwM','mMgQd':function(_0x4181ee){return _0x4181ee();}};let _0x4236d6=Get_request(_0x4146('‫1ac','hlr1'));return new Promise((_0x373ed5,_0x3d337c)=>{var _0x2da8da={'BTeiT':function(_0x22614a,_0x31539f){return _0x22614a===_0x31539f;},'ixxLY':_0x4e24f2['ypdTH'],'PNmrq':function(_0x239b23,_0x3ff1a1){return _0x4e24f2[_0x4146('‮1ad','BPnC')](_0x239b23,_0x3ff1a1);},'kVAkp':_0x4e24f2[_0x4146('‮1ae','N9q!')],'bBayB':_0x4e24f2[_0x4146('‫1af','aa9[')],'cFSaH':_0x4e24f2['qUUDN'],'bTTGs':function(_0x18a9ee,_0x4f1a10){return _0x18a9ee==_0x4f1a10;},'CHJxA':function(_0x1712e3){return _0x4e24f2[_0x4146('‮1b0','8Bn4')](_0x1712e3);}};if('CzWAi'==='auwlU'){console[_0x4146('‮1b1','GwW9')](_0x4146('‮1b2','Hn#9')+$['index']+'\x20视频奖励】:\x20成功获得8能量');}else{$['get'](_0x4236d6,async(_0x4901ef,_0x4f2890,_0x31c50f)=>{try{if(_0x2da8da[_0x4146('‫1b3','yTum')](_0x4146('‫1b4','vp#S'),_0x2da8da[_0x4146('‫1b5','DVfJ')])){if(_0x4901ef){if(_0x2da8da[_0x4146('‫1b6','aa9[')](_0x2da8da['kVAkp'],_0x2da8da[_0x4146('‫1b7','Ei1F')])){console['log'](_0x4146('‫f0','vB(q')+$[_0x4146('‮1b8','n]d$')]+_0x4146('‫1b9','8Bn4'));subTitle+=_0x4146('‮1ba','DVfJ')+$[_0x4146('‫1bb','rG@G')]+_0x4146('‮1bc',']d^b');}else{console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x4146('‫b9','DVfJ')]+_0x4146('‫1bd','qbmm'));subTitle+=_0x4146('‮1be','dVpL')+$[_0x4146('‫197','gy^e')]+_0x4146('‮88','yTum');}}else{if(_0x2da8da[_0x4146('‫1bf','HZo1')](_0x2da8da['cFSaH'],_0x2da8da[_0x4146('‮1c0','gx2N')])){let _0x4f1d08=JSON['parse'](_0x31c50f);if(_0x2da8da[_0x4146('‫1c1','^!nB')](_0x4f1d08[_0x4146('‮1c2','2@uy')],0x0)){console[_0x4146('‫67','ypMI')]('\x0a【soy脚本提示---账号\x20'+$[_0x4146('‫10','MtPu')]+_0x4146('‮1c3','fF$@'));}else{console[_0x4146('‫1c4','N9q!')](_0x4146('‮86','n*%y')+$[_0x4146('‮1c5','osL^')]+_0x4146('‫1c6','bToz')+_0x4f1d08[_0x4146('‫12','F#]R')]);}}else{console[_0x4146('‫1c7','rG@G')](_0x4146('‫9e','Wq5N')+$[_0x4146('‫1c8','qbmm')]+'\x20签到状态】:\x20网络请求失败');subTitle+=_0x4146('‮1c9','GwW9')+$['index']+_0x4146('‮1ca','GwW9');}}}else{console[_0x4146('‫13','Ei1F')](_0x4146('‫1cb','yrR(')+$[_0x4146('‫1cc','juoq')]+_0x4146('‮1cd','Wq5N')+result[_0x4146('‫1ce','8Bn4')]);}}catch(_0x773d13){console['log'](_0x773d13,_0x4f2890);}finally{_0x2da8da[_0x4146('‮1cf','2@uy')](_0x373ed5);}});}});}function getVideo(){var _0x19cee8={'eIteX':_0x4146('‮1d0','53p@'),'QVAdO':_0x4146('‫1d1','dVpL'),'GowVS':function(_0x5da428,_0x43ecf5){return _0x5da428==_0x43ecf5;},'XFurm':function(_0x296d1e,_0x3bf1f3){return _0x296d1e+_0x3bf1f3;}};let _0x367d1f=crypto['MD5'](_0x19cee8[_0x4146('‮1d2','LAX[')](token,Math[_0x4146('‮1d3','LooE')](new Date()['getTime']())))['toString']();let _0x10e591=Get_request('miningTask/getGift?id=video&type=taskList&refId='+_0x367d1f);return new Promise((_0x56ef60,_0x34fc90)=>{var _0x506410={'VDqyX':_0x19cee8[_0x4146('‫1d4','FyV)')],'VCozv':_0x19cee8[_0x4146('‫1d5',']d^b')],'kHwUZ':function(_0x52ab9c,_0x5da3bc){return _0x19cee8[_0x4146('‮1d6','hlr1')](_0x52ab9c,_0x5da3bc);},'pWuLu':function(_0x409969){return _0x409969();}};$['get'](_0x10e591,async(_0x6ecf40,_0x22cf55,_0x436f19)=>{if(_0x506410[_0x4146('‮1d7','bToz')]!==_0x506410['VCozv']){try{if(_0x6ecf40){console['log'](_0x4146('‮1a4','bToz')+$[_0x4146('‮18f','2@uy')]+_0x4146('‫1d8','53p@'));subTitle+=_0x4146('‮d9','osL^')+$[_0x4146('‮a2','o%sE')]+'\x20视频奖励】:\x20网络请求失败';}else{let _0x4092df=JSON[_0x4146('‮1d9','U(%p')](_0x436f19);if(_0x506410['kHwUZ'](_0x4092df[_0x4146('‫1da','o%sE')],0x0)){console['log'](_0x4146('‮d9','osL^')+$[_0x4146('‮1db','yTum')]+_0x4146('‫1dc','N9q!'));}else{console[_0x4146('‮f7','ihMa')](_0x4146('‫1dd','3xLL')+$['index']+_0x4146('‮1de','53p@')+_0x4092df['errMsg']);}}}catch(_0x1f79f7){console[_0x4146('‮1df','hlr1')](_0x1f79f7,_0x22cf55);}finally{_0x506410[_0x4146('‫1e0','o%sE')](_0x56ef60);}}else{console['log'](_0x4146('‫1e1','xq26')+$[_0x4146('‮1e2','FyV)')]+'\x20领新手礼包】:\x20获得\x20'+result[_0x4146('‮6f','yTum')]['rewardNum']+'\x20金币');}});});}function addPower(_0x16fbd5){var _0x46e713={'zBRSt':function(_0x1dd8d2,_0x16b598){return _0x1dd8d2===_0x16b598;},'bAEzG':_0x4146('‫1e3','fF$@'),'maCLp':function(_0x4a7af3,_0x391c72){return _0x4a7af3==_0x391c72;},'gzicY':_0x4146('‮1e4','DVfJ'),'qxdhc':_0x4146('‮1e5','MtPu'),'vKKqO':_0x4146('‮1e6','3g8*'),'DLLwM':'vDOBo','qcErw':function(_0x52339a,_0x4e1651){return _0x52339a!==_0x4e1651;},'ylHCM':_0x4146('‮1e7','FyV)'),'ftZHS':function(_0x37145c,_0x3290b7){return _0x37145c(_0x3290b7);}};let _0x43c82d=_0x46e713['ftZHS'](Get_request,_0x4146('‮1e8','o%sE')+_0x16fbd5);return new Promise((_0x40d514,_0x4f3df8)=>{$['get'](_0x43c82d,async(_0x55daa5,_0x1745a0,_0x9cfadd)=>{var _0x48b017={'ADrZq':function(_0x48b52a){return _0x48b52a();}};try{if(_0x55daa5){console[_0x4146('‮2d','o%sE')](_0x4146('‫19e',']d^b')+$[_0x4146('‫da','LAX[')]+_0x4146('‮1e9','vp#S'));subTitle+=_0x4146('‮d1','FyV)')+$[_0x4146('‫da','LAX[')]+_0x4146('‫1ea','ypMI');}else{if(_0x46e713['zBRSt']('zFEbS',_0x46e713['bAEzG'])){console[_0x4146('‮ca','F#]R')]('\x0a【soy脚本提示---账号\x20'+$[_0x4146('‫9f','F#]R')]+_0x4146('‮1eb','vp#S')+result[_0x4146('‫1ec','fF$@')]);}else{let _0x5006a2=JSON[_0x4146('‮1ed','yrR(')](_0x9cfadd);if(_0x46e713[_0x4146('‫1ee','HZo1')](_0x5006a2['errCode'],0x0)){if(_0x46e713[_0x4146('‫1ef','o%sE')]!==_0x46e713[_0x4146('‫1f0','bToz')]){console[_0x4146('‫1f1','2@uy')]('\x0a【soy脚本提示---账号\x20'+$[_0x4146('‫1f2','Ei1F')]+_0x4146('‫1f3','2@uy')+_0x16fbd5+'能量');}else{_0x48b017[_0x4146('‫1f4','o%sE')](_0x40d514);}}else{console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x4146('‮1f5','N9q!')]+'\x20充电】:\x20'+_0x5006a2[_0x4146('‫1f6','FyV)')]);}}}}catch(_0x376788){if(_0x46e713['vKKqO']===_0x46e713['DLLwM']){app_soy_kt_data=process[_0x4146('‮1f7','MtPu')][_0x4146('‮1f8','yrR(')][_0x4146('‫1f9','2@uy')]('@');}else{console[_0x4146('‫27','rPhN')](_0x376788,_0x1745a0);}}finally{if(_0x46e713[_0x4146('‮1fa','3xLL')](_0x46e713[_0x4146('‫1fb','F#]R')],_0x46e713['ylHCM'])){console[_0x4146('‮1a1','aa9[')]('\x0a【soy脚本提示---账号\x20'+$[_0x4146('‫1fc',']d^b')]+_0x4146('‫1fd','juoq')+result[_0x4146('‫1fe','osL^')]);}else{_0x40d514();}}});});}function Post_request(_0x46cc80,_0x13d3fb){var _0x58e9a8={'YbKgd':_0x4146('‮1ff','vB(q'),'Pdpsz':_0x4146('‫200','!sq]'),'XfNVM':_0x4146('‫201','n]d$'),'LqhOn':'application/json,text/plain,*/*','RnKgk':_0x4146('‮202','gjJH'),'ZUxWP':_0x4146('‮203','qbmm'),'kFyqO':_0x4146('‫132','F#]R'),'buDav':_0x4146('‫133','osL^'),'VTNbr':_0x4146('‫204','LAX['),'BlhtW':'cors','VtEhP':'empty','nOyfb':_0x4146('‫205','fF$@'),'RShYO':_0x4146('‫206','HZo1'),'kpWLo':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'};let _0x5722eb=Math[_0x4146('‮207','8Bn4')](new Date()[_0x4146('‫208','hlr1')]());return{'url':_0x4146('‮209','Ei1F')+_0x46cc80,'headers':{'Host':_0x58e9a8['YbKgd'],'Connection':'keep-alive','Pragma':_0x58e9a8[_0x4146('‫20a','bToz')],'Cache-Control':_0x58e9a8[_0x4146('‮20b','Ei1F')],'deviceId':_0x58e9a8[_0x4146('‫20c','2@uy')],'ts':_0x5722eb,'appChannel':'yingyongbao','Authorization':token,'Accept':_0x58e9a8['LqhOn'],'User-Agent':_0x58e9a8[_0x4146('‫20d','LooE')],'osType':_0x58e9a8[_0x4146('‮20e',']d^b')],'appId':'vh','appVersion':_0x58e9a8['kFyqO'],'Origin':_0x4146('‮20f','LooE'),'X-Requested-With':_0x58e9a8[_0x4146('‮210','osL^')],'Sec-Fetch-Site':_0x58e9a8['VTNbr'],'Sec-Fetch-Mode':_0x58e9a8[_0x4146('‮211','bToz')],'Sec-Fetch-Dest':_0x58e9a8[_0x4146('‮212','dVpL')],'Referer':_0x58e9a8[_0x4146('‫213','eSPw')],'Accept-Encoding':_0x58e9a8['RShYO'],'Accept-Language':_0x58e9a8[_0x4146('‮214','HZo1')]},'body':_0x13d3fb};};function Get_request(_0x17c4ec){var _0x536bbb={'jUAaz':_0x4146('‫215','!sq]'),'RyIqC':_0x4146('‮216','HZo1'),'Kffit':'e08c716c5dead856','tZlaA':_0x4146('‫217','O0[l'),'uslsN':_0x4146('‮218','ihMa'),'LsTiO':_0x4146('‮219','gy^e'),'kWyFp':_0x4146('‫21a','LAX['),'tgoyD':'https//app.ketui.cn','zyCuL':'com.cangxiong.kt','svXPI':_0x4146('‫21b','ypMI'),'TChPU':_0x4146('‫21c','gy^e'),'jlBFZ':_0x4146('‫21d','dVpL'),'hhIdb':_0x4146('‮21e','3xLL'),'KTQAk':_0x4146('‮21f','Hn#9')};let _0x1ee8d3=Math[_0x4146('‮220','LAX[')](new Date()['getTime']());return{'url':_0x4146('‮221','o%sE')+_0x17c4ec,'headers':{'Host':_0x536bbb[_0x4146('‫222','HZo1')],'Connection':_0x536bbb[_0x4146('‮223','3g8*')],'Pragma':'no-cache','Cache-Control':'no-cache','deviceId':_0x536bbb['Kffit'],'ts':_0x1ee8d3,'appChannel':'yingyongbao','Authorization':token,'Accept':_0x536bbb['tZlaA'],'User-Agent':_0x536bbb[_0x4146('‮224','DVfJ')],'osType':_0x536bbb[_0x4146('‫225','yrR(')],'appId':'vh','appVersion':_0x536bbb[_0x4146('‮226','qbmm')],'Origin':_0x536bbb[_0x4146('‫227','MtPu')],'X-Requested-With':_0x536bbb['zyCuL'],'Sec-Fetch-Site':_0x536bbb['svXPI'],'Sec-Fetch-Mode':_0x536bbb['TChPU'],'Sec-Fetch-Dest':_0x536bbb[_0x4146('‫228','!sq]')],'Referer':_0x536bbb[_0x4146('‫229','gjJH')],'Accept-Encoding':_0x4146('‮22a','dVpL'),'Accept-Language':_0x536bbb[_0x4146('‫22b','osL^')]}};};_0xodF='jsjiami.com.v6';



function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}