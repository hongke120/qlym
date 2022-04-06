/**
 * 抖音果园 
 * cron 10,40 8,12,17,23 * * *  yml2213_javascript_master/dygy.js
 * 
 * 抖音果园   入口：抖音点击"我"- "抖音商城" - "果园"   有的号可能没有 ，暂时不知道原因
 * 3-29    签到任务、新手彩蛋、每日免费领水滴、三餐礼包、宝箱、盒子领取  初步完成   脚本刚写完，难免有bug，请及时反馈  ；ck有效期测试中 
 * 3-29-2  更改签到逻辑 ， 修复每天免费水滴bug
 * 3-30    修改整体逻辑，简化通知
 * 3-30-2  修复时间判断bug,增加脚本版本号（一半功能）
 * 3-31    修复选择宝箱bug，默认开启debug模式，方便排错，不需要的自觉行关闭
 * 4-1     修复几个循环bug ，关闭默认debug模式了
 * 
 * 抓包记得先打开果园，然后再打开抓包软件，就能正常抓包了   关于抖音的任务都没网络，抓不到包
 * 
 * 感谢所有测试人员
 * ========= 青龙 =========
 * 变量格式：  
 * 必填变量：export dygyCookies='账号1 ck @ 账号2 ck'  多个账号用 @分割 
 * 可选变量：export dygyUA='你的UA'
 * 
 * 抓 minigame.zijieapi.com  的包  浇一次水即可获取ck  
 * 
https://raw.githubusercontent.com/yml2213/javascript/master/dygy/dygy.js
 */
const jsname = "抖音果园";
const $ = Env(jsname);
const notify = $.isNode() ? require('./sendNotify') : '';
const Notify = 1; //0为关闭通知，1为打开通知,默认为1
const debug = 0; //0为关闭调试，1为打开调试,默认为0


let dygyCookies = ($.isNode() ? process.env.dygyCookies : $.getdata('dygyCookies')) || "";
let UA = ($.isNode() ? process.env.dygyUA : $.getdata('dygyUA')) || 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148';

let dygyCookiesArr = [];
let msg = '';
let watering_unm = 1;
let challenge_num_max = 1;
let choose_gold_num = 1;



!(async () => {

	if (!(await Envs()))  //多账号分割 判断变量是否为空  初步处理多账号
		return;
	else {

		console.log(`本地脚本4-1 , 远程脚本xxxx(等我会写了加上，哈哈哈哈，自己根据本地判断吧！)`);

		console.log(
			`\n\n=========================================    脚本执行 - 北京时间(UTC+8)：${new Date(
				new Date().getTime() +
				new Date().getTimezoneOffset() * 60 * 1000 +
				8 * 60 * 60 * 1000
			).toLocaleString()} =========================================\n`);


		await wyy();
		await $.wait(2 * 1000);


		console.log(`\n=================== 共找到 ${dygyCookiesArr.length} 个账号 ===================`)

		if (debug) {
			console.log(`【debug】 这是你的账号数组:\n ${dygyCookiesArr}`);
		}

		if (debug) {
			console.log(`\n 【debug】 这是你的UA数据:\n ${UA}\n`);
		}

		for (let index = 0; index < dygyCookiesArr.length; index++) {


			let num = index + 1
			console.log(`\n========= 开始【第 ${num} 个账号】=========\n`)
			// msg += `\n 【第 ${num} 个账号】`
			let ck = dygyCookiesArr[index]

			request_url = {
				url: 'https://minigame.zijieapi.com',
				headers: {

					"Accept": "*/*",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh-Hans;q=0.9",
					"Connection": "keep-alive",
					"Content-Type": "application/json",
					"Cookie": `${ck}`,
					"Host": "minigame.zijieapi.com",
					"Referer": "https://tmaservice.developer.toutiao.com/?appid=tte684903979bdf21a02&version=1.0.1",
					"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 BytedanceWebview/d8a21c6 Aweme/19.9.0 Mobile ToutiaoMicroApp/2.44.1.0"
				},
			}


			if (debug) {
				console.log(`\n 【debug】 这是你第 ${num} 账号信息:\n ck:${ck}\n`);
			}

			console.log('开始 【获取首页图标】');
			await polling_info(ck);
			await $.wait(2 * 1000);

			console.log('开始 【获取任务列表】');
			await tasks_list(ck);
			await $.wait(2 * 1000);


			console.log('开始 【戳鸭子】');
			await touch_Duck(ck);
			await $.wait(2 * 1000);


			console.log('开始 【浇水】');
			await watering(ck);
			await $.wait(2 * 1000);

			await SendMsg(msg);
		}
	}

})()
	.catch((e) => $.logErr(e))
	.finally(() => $.done())

//#region 固定代码
// ============================================变量检查============================================ \\
async function Envs() {
	if (dygyCookies) {
		if (dygyCookies.indexOf("@") != -1) {
			dygyCookies.split("@").forEach((item) => {
				dygyCookiesArr.push(item);
			});
		} else {
			dygyCookiesArr.push(dygyCookies);
		}
	} else {
		console.log(`\n 【${$.name}】：未填写变量 dygyCookies`)
		return;
	}

	return true;
}

// ============================================发送消息============================================ \\
async function SendMsg(message) {
	if (!message)
		return;

	if (Notify > 0) {
		if ($.isNode()) {
			var notify = require('./sendNotify');
			await notify.sendNotify($.name, message);
		} else {
			$.msg(message);
		}
	} else {
		console.log(message);
	}
}

/**
 * 随机数生成
 */
function randomString(e) {
	e = e || 32;
	var t = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
		a = t.length,
		n = "";
	for (i = 0; i < e; i++)
		n += t.charAt(Math.floor(Math.random() * a));
	return n
}

/**
 * 随机整数生成
 */
function randomInt(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

//每日网抑云
function wyy(timeout = 3 * 1000) {
	return new Promise((resolve) => {
		let url = {
			url: `https://keai.icu/apiwyy/api`
		}
		$.get(url, async (err, resp, data) => {
			try {
				data = JSON.parse(data)
				console.log(`\n 【网抑云时间】: ${data.content}  by--${data.music}`);

			} catch (e) {
				$.logErr(e, resp);
			} finally {
				resolve()
			}
		}, timeout)
	})
}

//#endregion



/**
 * 获取首页图标
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/polling_info?version=8&aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * 
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/polling_info   简化后
 */
function polling_info(ck, timeout = 3 * 1000) {
	request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/polling_info'

	return new Promise((resolve) => {
		if (debug) {
			console.log(`\n 【debug】=============== 这是 获取首页图标 请求 url ===============`);
			console.log(request_url);
		}
		$.get(request_url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 获取首页图标 返回data==============`);
					console.log(data)
					console.log(`======`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.status_code == 0) {
					if (debug) {
						console.log(`新手彩蛋`);
						console.log(result.data.show_info.show_green_gift);
						console.log(`宝箱 challenge `);
						console.log(result.data.show_info.show_challenge);
						console.log(`养分牌子`);
						console.log(result.data.show_info.show_nutrient);
						console.log(`养分签到`);
						console.log(result.data.red_points.nutrient_sign);
						console.log(`七天签到`);
						console.log(result.data.red_points.sign);

						console.log(`盒子剩余次数`);
						console.log(result.data.red_points.box.rounds);
						console.log(`盒子是否可以领取,0可以领取`);
						console.log(result.data.red_points.box.times);

						console.log(`宝箱是否可以领取,0可以领取`);
						console.log(result.data.red_points.challenge.times);

					}



					if (result.data.show_info.show_green_gift) {
						console.log(`开始 【新手彩蛋】`);
						await newcomer_egg(ck);
					}
					// if (result.data.show_info.show_challenge != true) {
					// 	console.log(`选择金宝箱【宝箱挑战】`);
					// 	await choose_gold(ck);
					// }

					if (result.data.red_points.sign) {
						console.log(`开始 七日签到`);
						await sign_in(ck);
						console.log(`选择金宝箱【宝箱挑战】`);
						await choose_gold(ck);
					}
					if (result.data.red_points.box.rounds != 0 && result.data.red_points.box.times == 0) {
						console.log(`开盒子 box `);
						await open_box(ck);
					}
					if (result.data.red_points.challenge.times == 0) {
						console.log(`开宝箱`);
						await open_challenge(ck);
					}
					if (result.data.show_info.show_nutrient) {
						console.log(`展示 养分 牌子，化肥功能已开启`);
						// await nutrient_sign(ck);
						if (result.data.red_points.nutrient_sign) {
							console.log(`开始 化肥签到`);
							await fertilizer_sign(ck);
						}
						if (result.data.fertilizer.normal != 0) {
							console.log(`使用 正常 化肥`);
							await fertilizer_nomal(ck);
						} else if (result.data.fertilizer.lite != 0) {
							console.log(`使用 小袋 化肥`);
							await fertilizer_lite(ck);
						}
					}

				} else if (result.status_code === "1001") {

					console.log(`\n 【获取首页图标】 失败 ,可能是: ${result.message}! \n `)
					// msg += `\n 【获取首页图标】 失败 ,可能是: ${result.message}! \n `
					// $.msg(`【${$.name}】 \n 【获取首页图标】 失败 ,可能是: ${result.message}! \n `)

				} else {

					console.log(`\n 【获取首页图标】 失败 ❌ 了呢,原因未知！\n `)
					// msg += `\n 【获取首页图标】 失败 ❌ 了呢,原因未知！\n `
					// $.msg(`【${$.name}】 【获取首页图标】 失败 ❌ 了呢,原因未知！\n`)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}


/**
 * 浇水
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/tree/water?version=8&aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * 
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/tree/water?aid=1128   简化
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/tree/water?aid=1128
 */
function watering(ck, timeout = 3 * 1000) {
	request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/tree/water?aid=1128'

	return new Promise((resolve) => {
		if (debug) {
			console.log(`\n 【debug】=============== 这是 浇水 请求 url ===============`);
			console.log(request_url);
		}
		$.get(request_url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 浇水 返回data==============`);
					console.log(data)
					console.log(`======`)
					console.log(JSON.parse(data))
				}
				result = JSON.parse(data);

				if (result.status_code == 0) {

					console.log(`\n第${watering_unm} 次浇水，${result.message} 🎉 `);
					await $.wait(5 * 1000);
					console.log('等待判断是否有宝箱、盒子box可以领取');
					await polling_info(ck);
					await $.wait(3 * 1000);
					watering_unm++

					if (result.data.kettle.water_num > 10) {
						await watering(ck);
						// console.log(`测试使用`);
					} else {  // 浇水完成

						console.log(`\n 【浇水】${result.message} 了🎉 \n果树等级:${result.data.status}级\n升级进度:已浇水 ${result.data.progress.current} 次，${result.data.status}级共需要浇水 ${result.data.progress.target} ,你还有 ${result.data.kettle.water_num} 水滴:\n储水瓶: 已储存 ${result.data.bottle.water_num} 滴 ,领取时间:明天 ${result.data.bottle.availiable_time} 点 \n`)

						msg += `\n 【浇水】${result.message} 了🎉 \n果树等级:${result.data.status}级\n升级进度:已浇水 ${result.data.progress.current} 次，${result.data.status}级共需要浇水 ${result.data.progress.target} ,你还有 ${result.data.kettle.water_num} 水滴:\n储水瓶: 已储存 ${result.data.bottle.water_num} 滴 ,领取时间:明天 ${result.data.bottle.availiable_time} 点 \n`


					}

				} else if (result.status_code === 1008) {

					console.log(`\n 浇水】 失败 ,可能是: ${result.message}!\n `)
					// msg += `\n 【浇水】 失败 ,可能是: ${result.message}!\n`
					// $.msg(`【${$.name}】 【浇水】: ${result.message}`)

					console.log(`等待3分钟，再次尝试浇水！`);
					await $.wait(3 * 60 * 1000);
					await watering(ck);


				} else {

					console.log(`\n 【浇水】 失败 ❌ 了呢,可能是网络被外星人抓走了!\n `)
					// msg += `\n 【浇水】 失败 ❌ 了呢,可能是网络被外星人抓走了!\n`
					// $.msg(`【${$.name}】 【浇水】: 失败 ❌ 了呢,可能是网络被外星人抓走了!`)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}




/**
 * 获取任务列表
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/tasks/list?version=8&address_book_authorized=0&aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * 
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/tasks/list    简化后
 */
function tasks_list(ck, timeout = 3 * 1000) {
	request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/tasks/list'

	return new Promise((resolve) => {

		if (debug) {
			console.log(`\n 【debug】=============== 这是 获取任务列表 请求 url ===============`);
			console.log(request_url);
		}

		$.get(request_url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 获取任务列表 返回data==============`);
					// console.log(data)
					// console.log(`======`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.status_code == 0) {

					console.log(`\n 【获取任务列表】成功了🎉  开始任务了鸭！`)
					// msg += `\n 【获取任务列表】成功了🎉  开始任务了鸭！`
					// $.msg(`\n 【获取任务列表】成功了🎉  开始任务了鸭！`)

					tasksarr = result.data.tasks
					// console.log(tasksarr);

					for (let value of tasksarr) {
						if (debug) {
							console.log(`\n\n 【debug】===============这是 遍历任务列表 的值:value ==============`);
							console.log(value);
						}

						if (value.id == 1) {
							console.log(`\n 任务状态\n 这是${value.name} 任务\n 已完成${value.round_info.current_round}/${value.round_info.total_round} 次 `)

							// console.log(`\n 任务状态\n 这是${value.name} 任务\n 已完成${value.round_info.current_round}/${value.round_info.total_round} 次`)
							// msg += `\n 任务状态\n 这是${value.name} 任务\n 已完成${value.round_info.current_round}/${value.round_info.total_round} 次 `
							// $.msg(`\n 【${$.name}】\n 任务状态\n 这是${value.name} 任务\n 已完成${value.round_info.current_round}/${value.round_info.total_round} 次`)

							if (value.round_info.current_round < value.round_info.total_round) {
								await Daily_free_water(ck);
							}
						}

						// console.log(value);
						// console.log(`${value.round_info.current_round}`);
						if (value.id == 2) {   // 三餐任务

							console.log(`\n 任务状态\n 现在是 ${value.name} 时间\n `)

							let d = new Date();
							let n = d.getHours();
							console.log(`现在时间 ${n} 时`);

							if (n >= 8 && n <= 9) {
								console.log('开始 【早餐礼包】');
								await eat_package(ck, '早餐');
								await $.wait(2 * 1000);

								console.log('开始 【收集瓶子水滴】');
								await water_bottle(ck);
								await $.wait(2 * 1000);

							} else if (n >= 12 && n <= 14) {
								console.log('开始 【午餐礼包】')
								await eat_package(ck, '午餐');
								await $.wait(2 * 1000);
							} else if (n >= 18 && n <= 21) {
								console.log('开始 【晚餐礼包】')
								await eat_package(ck, '晚餐');
								await $.wait(2 * 1000);
							} else {
								console.log(`时间段不在任务时间，跳过任务！\n`);
							}
						}
					}
				} else {
					console.log(`\n 【获取任务列表】 失败 ❌ 了呢,可能是网络被外星人抓走了!\n `)
					// msg += `\n 【获取任务列表】 失败 ❌ 了呢,可能是网络被外星人抓走了!\n`
					// $.msg(`【${$.name}】 【获取任务列表】: 失败 ❌ 了呢,可能是网络被外星人抓走了!`)
				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}



/**
 * 戳鸭子
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/scene/touch?scene_id=1&aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * 
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/scene/touch?scene_id=1
 */
function touch_Duck(ck, timeout = 3 * 1000) {
	request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/scene/touch?scene_id=1'

	return new Promise((resolve) => {

		if (debug) {
			console.log(`\n 【debug】=============== 这是 戳鸭子 请求 url ===============`);
			console.log(request_url);
		}

		$.get(request_url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 戳鸭子 返回data==============`);
					console.log(data)
					console.log(`======`)
					console.log(JSON.parse(data))

				}
				let result = JSON.parse(data);
				if (result.status_code == 0 && result.data.reward_item != null) {

					console.log(`\n 【戳鸭子】成功了🎉 获得 ${result.data.reward_item.num} 水滴，领取后后共有 ${result.data.kettle.water_num} 水滴 !`)

					touch_Duck_status = result.data.red_point[0].round_info.current_round
					touch_Duck_status_max = result.data.red_point[0].round_info.total_round
					// console.log(touch_Duck_status);
					// console.log(touch_Duck_status_max);
					if (touch_Duck_status < touch_Duck_status_max) {

						console.log(`\n 请耐心等待 10 s\n`)
						await $.wait(5 * 1000);
						//再来一次 戳鸭子
						await touch_Duck(ck);
					} else {
						console.log(`鸭子不能给你水滴了，再去别的地方看看吧！`);
					}

				} else if (result.status_code === "1001") {

					console.log(`\n 【戳鸭子】 失败 ,可能是: ${result.message}! 可能是次数被限制了，休息一会再试试吧！\n `)

					console.log(`\n 请耐心等待 1 分钟，一分钟后我们再试试\n`)
					await $.wait(60 * 1000);
					await touch_Duck(ck);

				} else {

					console.log(`\n 【戳鸭子】 失败 ❌ 了呢,可能是网络被外星人抓走了!\n `)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}



/**
 * 选择金宝箱 （默认）
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/challenge/choose?task_id=2&aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * 
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/challenge/choose?task_id=2   简化后
 */
function choose_gold(ck, timeout = 3 * 1000) {

	if (choose_gold_num < 2) {

		request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/challenge/choose?task_id=2'

		return new Promise((resolve) => {

			if (debug) {
				console.log(`\n 【debug】=============== 这是 选择金宝箱 请求 url ===============`);
				console.log(request_url);
			}

			$.get(request_url, async (error, response, data) => {
				try {
					if (debug) {
						console.log(`\n\n 【debug】===============这是 选择金宝箱 返回data==============`);
						console.log(data)
						console.log(`=== 这是转json后的 data ===`)
						console.log(JSON.parse(data))
					}
					let result = JSON.parse(data);
					if (result.status_code == 0) {

						console.log(`\n 【选择金宝箱】${result.message}了鸭 🎉 `)
						// msg += `\n 【选择金宝箱】${result.message}了鸭 🎉 `
						// $.msg(`\n 【${$.name}】【选择金宝箱】${result.message}了鸭 🎉 `)

					} else if (result.status_code === "1001") {

						console.log(`\n 【选择金宝箱】 失败 ,可能是: ${result.message}! \n `)
						// msg += `\n 【选择金宝箱】 失败 ,可能是: ${result.message}! \n `
						// $.msg(`【${$.name}】 \n 【选择金宝箱】 失败 ,可能是: ${result.message}! \n `)

					} else {

						console.log(`\n 【选择金宝箱】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!\n `)
						// msg += `\n 【选择金宝箱】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!\n`
						// $.msg(`【${$.name}】 【选择金宝箱】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!`)
					}

					choose_gold_num++


				} catch (e) {
					console.log(e)
				} finally {
					resolve();
				}
			}, timeout)
		})
	}
}



/**
 * 领取宝箱奖励
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/challenge/reward?aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * 
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/challenge/reward?aid=1128   简化后
 */
function open_challenge(ck, timeout = 3 * 1000) {

	if (challenge_num_max < 2) {
		request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/challenge/reward?aid=1128'
		return new Promise((resolve) => {

			if (debug) {
				console.log(`\n 【debug】=============== 这是 领取宝箱奖励 请求 url ===============`);
				console.log(request_url);
			}

			$.get(request_url, async (error, response, data) => {
				try {
					if (debug) {
						console.log(`\n\n 【debug】===============这是 领取宝箱奖励 返回data==============`);
						console.log(data)
						// console.log(`======`)
						// console.log(JSON.parse(data))
					}
					let result = JSON.parse(data);
					if (result.status_code == 0) {

						console.log(`\n 【领取宝箱奖励】${result.message}了鸭 🎉 , 获得 ${result.data.reward_item.num} 水滴 , 领取后有 ${result.data.kettle.water_num} 水滴 `)
						// msg += `\n 【领取宝箱奖励】${result.message}了鸭 🎉 , 获得 ${result.data.reward_item.num} 水滴 , 领取后有 ${result.data.kettle.water_num} 水滴  `
						// $.msg(`\n 【${$.name}】【领取宝箱奖励】${result.message}了鸭 🎉 , 获得 ${result.data.reward_item.num} 水滴 , 领取后有 ${result.data.kettle.water_num} 水滴 `)

					} else if (result.status_code === "1001") {

						console.log(`\n 【领取宝箱奖励】 失败 ,可能是: ${result.message}! \n `)
						// msg += `\n 【领取宝箱奖励】 失败 ,可能是: ${result.message}! \n `
						// $.msg(`【${$.name}】 \n 【领取宝箱奖励】 失败 ,可能是: ${result.message}! \n `)

					} else {

						console.log(`\n 【领取宝箱奖励】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!\n `)
						// msg += `\n 【领取宝箱奖励】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!\n`
						// $.msg(`【${$.name}】 【领取宝箱奖励】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!`)

					}

					challenge_num_max++

				} catch (e) {
					console.log(e)
				} finally {
					resolve();
				}
			}, timeout)
		})

	}



}



/**
 * 领取盒子奖励 （box）
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/box/open?aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * 
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/box/open?aid=1128   简化后
 */
function open_box(ck, timeout = 3 * 1000) {
	request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/box/open?aid=1128'

	return new Promise((resolve) => {

		if (debug) {
			console.log(`\n 【debug】=============== 这是 领取盒子奖励 请求 url ===============`);
			console.log(request_url);
		}

		$.get(request_url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 领取盒子奖励 返回data==============`);
					console.log(data)
					console.log(`=== 这是转json后的 data ===`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.status_code == 0) {

					console.log(`\n 【领取盒子奖励】${result.message}了鸭 🎉 , 获得 ${result.data.reward_item.num} 水滴 , 领取后有 ${result.data.kettle.water_num} 水滴 `)
					// msg += `\n 【领取盒子奖励】${result.message}了鸭 🎉 , 获得 ${result.data.reward_item.num} 水滴 , 领取后有 ${result.data.kettle.water_num} 水滴  `
					// $.msg(`\n 【${$.name}】【领取盒子奖励】${result.message}了鸭 🎉 , 获得 ${result.data.reward_item.num} 水滴 , 领取后有 ${result.data.kettle.water_num} 水滴 `)

				} else if (result.status_code === "1001") {

					console.log(`\n 【领取盒子奖励】 失败 ,可能是: ${result.message}! \n `)
					// msg += `\n 【领取盒子奖励】 失败 ,可能是: ${result.message}! \n `
					// $.msg(`【${$.name}】 \n 【领取盒子奖励】 失败 ,可能是: ${result.message}! \n `)

				} else {

					console.log(`\n 【领取盒子奖励】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!\n `)
					// msg += `\n 【领取盒子奖励】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!\n`
					// $.msg(`【${$.name}】 【领取盒子奖励】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!`)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}





/**
 * 使用小袋化肥
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/use/fertilizer?fertilizer_type=4&aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * 
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/use/fertilizer?fertilizer_type=4   简化后
 */
function fertilizer_lite(ck, timeout = 3 * 1000) {
	request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/use/fertilizer?fertilizer_type=4'

	return new Promise((resolve) => {

		if (debug) {
			console.log(`\n 【debug】=============== 这是 使用小袋化肥 请求 url ===============`);
			console.log(request_url);
		}

		$.get(request_url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 使用小袋化肥 返回data==============`);
					console.log(data)
					console.log(`=== 这是转json后的 data ===`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.status_code == 0) {

					console.log(`\n 【使用小袋化肥】${result.message}了鸭 🎉 , 当前肥力 ${result.data.nutrient} 养分 , 剩余正常化肥 ${result.data.fertilizer.normal} 袋、小袋化肥 ${result.data.fertilizer.lite} 袋 `)

				} else if (result.status_code === "1001") {

					console.log(`\n 【使用小袋化肥】 失败 ,可能是: ${result.message}! \n `)

				} else {
					console.log(`\n 【使用小袋化肥】 失败 ❌ 了呢,原因未知！\n `)
				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}


/**
 * 收集瓶子水滴
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/water_bottle/reward?aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * 
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/water_bottle/reward?aid=1128   简化后
 */
function water_bottle(ck, timeout = 3 * 1000) {
	request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/water_bottle/reward?aid=1128'

	return new Promise((resolve) => {

		if (debug) {
			console.log(`\n 【debug】=============== 这是 收集瓶子水滴 请求 url ===============`);
			console.log(request_url);
		}

		$.get(request_url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 收集瓶子水滴 返回data==============`);
					console.log(data)
					console.log(`=== 这是转json后的 data ===`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.status_code == 0) {

					console.log(`\n 【签到】${result.message}了鸭 🎉 , 获得 ${result.data.task.reward_item.num} 水滴 , 签到后共有 ${result.data.kettle.water_num} 水滴 `)
					// msg += `\n 【签到】${result.message}了鸭 🎉 , 获得 ${result.data.task.reward_item.num} 水滴 , 签到后共有 ${result.data.kettle.water_num} 水滴`
					// $.msg(`\n 【${$.name}】【签到】${result.message}了鸭 🎉 , 获得 ${result.data.task.reward_item.num} 水滴 , 签到后共有 ${result.data.kettle.water_num} 水滴`)

				} else if (result.status_code === "1001") {

					console.log(`\n 【签到】 失败 ,可能是: ${result.message}! \n `)
					// msg += `\n 【签到】 失败 ,可能是: ${result.message}! \n `
					// $.msg(`【${$.name}】 \n 【签到】 失败 ,可能是: ${result.message}! \n `)

				} else {

					console.log(`\n 【签到】 失败 ❌ 了呢,原因未知！\n `)
					// msg += `\n 【签到】 失败 ❌ 了呢,原因未知！\n `
					// $.msg(`【${$.name}】 【签到】 失败 ❌ 了呢,原因未知！\n`)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}


/**
 * 化肥签到
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/nutrient/sign_in?aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * 
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/nutrient/sign_in   简化后
 */
function fertilizer_sign(ck, timeout = 3 * 1000) {
	request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/nutrient/sign_in'

	return new Promise((resolve) => {

		if (debug) {
			console.log(`\n 【debug】=============== 这是 化肥签到 请求 url ===============`);
			console.log(request_url);
		}

		$.get(request_url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 化肥签到 返回data==============`);
					console.log(data)
					console.log(`=== 这是转json后的 data ===`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.status_code == 0) {

					console.log(`\n 【化肥签到】${result.message}了鸭 🎉 , 获得 ${result.sign.reward_item.name} ${result.sign.reward_item.num} 袋 `)
				} else if (result.status_code === "1001") {

					console.log(`\n 【化肥签到】 失败 ,可能是: ${result.message}! \n `)

				} else {

					console.log(`\n 【化肥签到】 失败 ❌ 了呢,原因未知！\n `)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}



/**
 * 七天签到
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/sign_in/reward?watch_ad=0&extra_ad_num=0&aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * 
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/sign_in/reward   简化后
 */
function sign_in(ck, timeout = 3 * 1000) {
	request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/sign_in/reward'

	return new Promise((resolve) => {

		if (debug) {
			console.log(`\n 【debug】=============== 这是 签到 请求 url ===============`);
			console.log(request_url);
		}

		$.get(request_url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 签到 返回data==============`);
					console.log(data)
					console.log(`=== 这是转json后的 data ===`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.status_code == 0) {

					console.log(`\n 【签到】${result.message}了鸭 🎉 , 获得 ${result.data.task.reward_item.num} 水滴 , 签到后共有 ${result.data.kettle.water_num} 水滴 `)
					// msg += `\n 【签到】${result.message}了鸭 🎉 , 获得 ${result.data.task.reward_item.num} 水滴 , 签到后共有 ${result.data.kettle.water_num} 水滴`
					// $.msg(`\n 【${$.name}】【签到】${result.message}了鸭 🎉 , 获得 ${result.data.task.reward_item.num} 水滴 , 签到后共有 ${result.data.kettle.water_num} 水滴`)

				} else if (result.status_code === "1001") {

					console.log(`\n 【签到】 失败 ,可能是: ${result.message}! \n `)
					// msg += `\n 【签到】 失败 ,可能是: ${result.message}! \n `
					// $.msg(`【${$.name}】 \n 【签到】 失败 ,可能是: ${result.message}! \n `)

				} else {

					console.log(`\n 【签到】 失败 ❌ 了呢,原因未知！\n `)
					// msg += `\n 【签到】 失败 ❌ 了呢,原因未知！\n `
					// $.msg(`【${$.name}】 【签到】 失败 ❌ 了呢,原因未知！\n`)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}


/**
 * 每日免费领水滴
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/tasks/reward?task_id=1&do_action=0&extra_ad_num=0&version=8&aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * 
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/tasks/reward?task_id=1   简化后
 */
function Daily_free_water(ck, timeout = 3 * 1000) {
	request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/tasks/reward?task_id=1'

	return new Promise((resolve) => {

		if (debug) {
			console.log(`\n 【debug】=============== 这是 每日免费领水滴 请求 url ===============`);
			console.log(request_url);
		}

		$.get(request_url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 每日免费领水滴 返回data==============`);
					console.log(data)
					console.log(`=== 这是转json后的 data ===`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.status_code == 0) {

					console.log(`\n 【每日免费领水滴】${result.message}了鸭 🎉 , 获得 ${result.data.task.reward_item.num} 水滴 , 冷却时间 ${result.data.task.reward_item.time} 秒 `)
					// msg += `\n 【每日免费领水滴】${result.message}了鸭 🎉 , 获得 ${result.data.task.reward_item.num} 水滴 , 冷却时间 ${result.data.task.reward_item.time} 秒`
					// $.msg(`\n 【${$.name}】【每日免费领水滴】${result.message}了鸭 🎉 , 获得 ${result.data.task.reward_item.num} 水滴 , 冷却时间 ${result.data.task.reward_item.time} 秒`)

					console.log(`耐心等待5分钟鸭～～～`);
					await $.wait(310 * 1000);
					await Daily_free_water(ck);


				} else if (result.status_code === 1001) {

					console.log(`\n 【每日免费领水滴】 失败 ,可能是: ${result.message}! \n `)
					// msg += `\n 【每日免费领水滴】 失败 ,可能是: ${result.message}! \n `
					// $.msg(`【${$.name}】 \n 【每日免费领水滴】 失败 ,可能是: ${result.message}! \n `)

				} else {

					console.log(`\n 【每日免费领水滴】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!\n `)
					// msg += `\n 【每日免费领水滴】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!\n`
					// $.msg(`【${$.name}】 【每日免费领水滴】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!`)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}




/**
 * 新手彩蛋
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/green_gift/reward?aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * 
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/green_gift/reward?aid=1128   简化后
 */
function newcomer_egg(ck, timeout = 3 * 1000) {
	request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/green_gift/reward?aid=1128'

	return new Promise((resolve) => {

		if (debug) {
			console.log(`\n 【debug】=============== 这是 新手彩蛋 请求 url ===============`);
			console.log(request_url);
		}

		$.get(request_url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 新手彩蛋 返回data==============`);
					console.log(data)
					console.log(`=== 这是转json后的 data ===`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.status_code == 0) {

					console.log(`\n 【新手彩蛋】砸蛋成功了鸭🎉 ，获得水滴${result.data.reward_item.num} 个 ， 领取后后共有 ${result.data.kettle.water_num} 水滴 !`)
					// msg += `\n 【新手彩蛋】砸蛋成功了鸭🎉 ，获得水滴${result.data.reward_item.num} 个 ， 领取后后共有 ${result.data.kettle.water_num} 水滴 !`
					// $.msg(`\n 【新手彩蛋】砸蛋成功了鸭🎉 ，获得水滴${result.data.reward_item.num} 个 ， 领取后后共有 ${result.data.kettle.water_num} 水滴 !`)

					console.log(`耐心等待6分钟，等下一个彩蛋孵化鸭`);

					await $.wait(6 * 60 * 1000);


				} else if (result.status_code === "1001") {

					console.log(`\n 【新手彩蛋】 失败 ,可能是: ${result.message}! 已经完成的同学自行注释新手砸蛋脚本吧，暂时没做判断！\n `)
					// msg += `\n 【新手彩蛋】 失败 ,可能是: ${result.message}! 已经完成的同学自行注释新手砸蛋脚本吧，暂时没做判断！\n `
					// $.msg(`【${$.name}】 \n 【新手彩蛋】 失败 ,可能是: ${result.message}! 已经完成的同学自行注释新手砸蛋脚本吧，暂时没做判断！\n `)

				} else {

					console.log(`\n 【新手彩蛋】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!\n `)
					// msg += `\n 【新手彩蛋】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!\n`
					// $.msg(`【${$.name}】 【新手彩蛋】 失败 ❌ 了呢,可能已经分享过了或者网络被外星人抓走了!`)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}

/**
 * 三餐礼包
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/tasks/reward?task_id=2&do_action=1&extra_ad_num=0&version=8&aid=1128&os_version=15.4&version_code=19.9.0&device_id=2067528404709896&iid=4033435092653599&app_name=aweme&device_platform=iphone&device_type=iPhone14,2&channel=App%20Store&version_name=&update_version_code=&appId=tte684903979bdf21a02&mpVersion=1.0.1&share_token=undefined
 * https://minigame.zijieapi.com/ttgame/game_orchard_ecom/tasks/reward?task_id=2   简化后
 */
function eat_package(ck, name, timeout = 3 * 1000) {
	request_url.url = 'https://minigame.zijieapi.com/ttgame/game_orchard_ecom/tasks/reward?task_id=2'

	return new Promise((resolve) => {

		if (debug) {
			console.log(`\n 【debug】=============== 这是 ${name}礼包 请求 url ===============`);
			console.log(request_url);
		}

		$.get(request_url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 ${name}礼包 返回data==============`);
					console.log(data)
					console.log(`=== 这是转json后的 data ===`)
					console.log(JSON.parse(data))
				}
				let result = JSON.parse(data);
				if (result.status_code == 0) {

					console.log(`\n 【${name}礼包】领取成功了🎉 ，获得水滴${result.data.task.reward_item.num} 个 ， 领取后后共有 ${result.data.kettle.water_num} 水滴 !`)
					// msg += `\n 【${name}礼包】领取成功了🎉 ，获得水滴${result.data.task.reward_item.num} 个 ， 领取后后共有 ${result.data.kettle.water_num} 水滴 !`
					// $.msg(`\n 【${name}礼包】领取成功了🎉 ，获得水滴${result.data.task.reward_item.num} 个 ， 领取后后共有 ${result.data.kettle.water_num} 水滴 !`)

				} else if (result.status_code === "1001") {

					console.log(`\n 【${name}礼包】 失败 ,可能是: ${result.message}!\n `)
					// msg += `\n 【${name}礼包】 失败 ,可能是: ${result.message}!\n`
					// $.msg(` 【${name}礼包】: ${result.message}`)

				} else {

					console.log(`\n 【${name}礼包】 失败 ❌ 了呢,可能是网络被外星人抓走了!\n `)
					// msg += `\n 【${name}礼包】 失败 ❌ 了呢,可能是网络被外星人抓走了!\n`
					// $.msg(` 【${name}礼包】: 失败 ❌ 了呢,可能是网络被外星人抓走了!`)

				}

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}





// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }