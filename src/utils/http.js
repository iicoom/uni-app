/**
 * Created by Leo
 * Date: 2021-11-11 22:52
 * Email: asdfpeng@qq.com
 */
import http from "./interface";

http.config.baseUrl = 'https://www.maoshare.xyz/api/';

// 设置响应拦截器
http.interceptor.response = (response) => {
    if (response.data.code == 0) {
        if (response.header.hasOwnProperty('x-refresh-token') && response.header['x-refresh-token']) {
            let token = response.header['x-refresh-token'];
            Vue.prototype.$store.dispatch('reset', token);
        }
        return response;
    } else if (response.data.code == 401 || response.data.code == 402) {
        // token过期 拉起重新授权登录 用户未绑定手机号后端返回401
        // if (Vue.prototype.$config.isWx &&  response.data.code == 401 && Vue.prototype.$store.state.bindPhone == 0) {
        // 	return Vue.prototype.$Router.replace({name: 'bindPhone'});
        // }
        Vue.prototype.$store.dispatch('logout');
        if (response.data.message.indexOf('检测到账户信息变更') > -1) {
            Vue.prototype.$store.dispatch('logout');
            return uni.showToast({
                title: response.data.message,
                icon: 'none',
                duration: 2000,
                success: () => {
                    setTimeout((res) => {
                        clearTimeout(res);
                        Vue.prototype.$Router.replace({name: Vue.prototype.$config.isWx ? 'homePage' : 'login'});
                    }, 500)
                }
            })
        }
        if (Vue.prototype.$config.isWx && response.data.code == 401 && Vue.prototype.$store.state.bindPhone == 1) {
            if (Vue.prototype.$Route.path) {
                let pathInfo = {
                    transferPath: Vue.prototype.$Route.path,
                    transferQuery: Vue.prototype.$Route.query
                }
                Vue.prototype.$store.dispatch('savePath', pathInfo);
            } else {
                let pathInfo = {
                    transferPath: '/pages/homePage/homePage',
                    transferQuery: ''
                }
                Vue.prototype.$store.dispatch('savePath', pathInfo);
            }
            wxLogin(
                {cb_url: window.location.href.split('#')[0] + '/#/pages/transferPage/transferPage',
                    share_id: Vue.prototype.$store.state.shareId})
                .then((res) => {
                    if (res && res.auth_url) {
                        return window.location.replace(res.auth_url);
                    }
                }).catch((error) => {
                return Vue.prototype.$u.toast('微信登录失败~');
            })
        } else {
            uni.showToast({
                title: response.data.message ? response.data.message : '登录信息失效，请重新登录',
                icon: 'none',
                duration: 2000,
                success: () => {
                    return setTimeout((res) => {
                        clearTimeout(res);
                        Vue.prototype.$Router.replace({name: 'login'});
                    }, 500)
                }
            })
        }
    } else {
        uni.showToast({
            title: response.data.message ? response.data.message : '系统繁忙 请稍后再试~',
            icon: 'none',
            duration: 2000,
            success: () => {
                myConfig.showLoading && uni.hideLoading();
            }
        })
    }
}
/* app-h5接口 begin */
export const getArticleList = (data) => {
    return http.request({
        url: `blog/list?page=1&limit=5&status=1`,
        method: 'GET',
        data,
        // showLoading: true,
        // loadingText: '加载中...'
    })
}