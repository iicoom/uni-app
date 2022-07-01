/**
 * Created by Leo
 * Date: 2022-07-01 10:09
 * Email: asdfpeng@qq.com
 */
import http from "./http";

const API = {
	GetArticleList: (data) => {
		return http.request({
			url: `blog/list`,
			method: 'GET',
			data,
			// showLoading: true,
			// loadingText: '加载中...'
		})
	}
}

export default {
	install: (Vue, options) => {
		Vue.prototype.$API = API
	}
}
