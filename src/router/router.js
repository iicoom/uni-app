/**
 * Created by Leo
 * Date: 2022-05-02 08:04
 * Email: asdfpeng@qq.com
 */
import {RouterMount,createRouter} from 'uni-simple-router';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [
		{
			path: '/pages/index/index',
			name: 'index',
			meta: {
				title: '首页',
			},
		},
		{
			//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
			path: '/pages/newbie/phone',
			aliasPath:'/', //对于h5端你必须在首页加上aliasPath并设置为/
			name: 'phone',
			meta: {
				title: '手机号',
			},
		},
		{
			path: '/pages/mine/mine',
			name: 'mine',
			meta: {
				title: '我的',
			},
		},
		{
			path: '/pages/newbie/gender',
			name: 'gender',
			meta: {
				title: '性别',
			},
		},
		{
			path: '/pages/newbie/birth',
			name: 'birth',
			meta: {
				title: '生日',
			},
		},
		{
			path: '/pages/newbie/location',
			name: 'location',
			meta: {
				title: '居住城市',
			},
		},
		{
			path: '/pages/404/404',
			name: 'NotFound',
			meta: {
				title: '页面丢了~',
			},
		},
		{
			path: '*',
			redirect:(to)=>{
				return {name:'NotFound'}
			}
		},
	]
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
	// console.log('跳转结束')
})

export {
	router,
	RouterMount
}
