/**
 * 通用uni-app网络请求
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 */
export default {
	config: {
		baseUrl: "",
		header: {
			'Content-Type':'application/json;charset=UTF-8',
			//'Content-Type':'application/x-www-form-urlencoded'
		},
		data: {},
		method: "GET",
		dataType: "json",  /* 如设为json，会对返回的数据做一次 JSON.parse */
		responseType: "json",
		success() {},
		fail() {},
		complete() {}
	},
	interceptor: {
		request: null,
		response: null
	},
	toast: function(tips) {
		uni.showToast({
			title: tips || "请稍后再试~",
			icon: 'none',
			duration: 2000
		})
	},
	request(options) {
		if (!options) {
			options = {}
		}
		options.baseUrl = options.baseUrl || this.config.baseUrl
		options.dataType = options.dataType || this.config.dataType
		options.url = options.baseUrl + options.url
		options.data = Object.assign({}, options.data, {'from': 'H5'}) || {'from': 'H5'}
		options.method = options.method || this.config.method
		options.showLoading = options.showLoading || false
		options.loadingText = options.loadingText || '请稍后...'
		try {
			const _token = {'token': uni.getStorageSync('token') || options.data.token};
			if (_token.token) {
				options.header = Object.assign({}, options.header, _token)
				// options.header = Object.assign({}, options.header, {'Access-Control-Expose-Headers' : 'x-refresh-token'})
			}
		} catch (e) {
			console.log(e)
		}
	    if (options.showLoading) {
			uni.showLoading({
				mask: true,
				title: options.loadingText
			})
	    }
		return new Promise((resolve, reject) => {
			let _config = null
			options.success = options.success || function (response) {
				resolve(response.data.data)
			},
			options.fail = (response) => {
				// if (options.url.indexOf('ws/ws-url') == -1) {
				// 	this.toast('网络不可用~请稍后再试')
				// }
				this.toast('网络不可用~请稍后再试')
				reject(response)
			}
			options.complete = options.complete || ((response)=> {
				options.showLoading && uni.hideLoading()
				if (!response.data) {
					return false
				}
				response.config = _config
				if (this.interceptor.response) {
					let newResponse = this.interceptor.response(response)
					if (newResponse) {
						response = newResponse
					}
				}
			})
			_config = Object.assign({},this.config, options)
			_config.requestId = new Date().getTime()
			if (this.interceptor.request) {
				this.interceptor.request(_config)
			}
			uni.request(_config);
		});
	},
	get(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	post(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	put(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	},
	delete(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}
}
