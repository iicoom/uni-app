/**
 * Created by Leo
 * Date: 2022-05-02 08:04
 * Email: asdfpeng@qq.com
 */
import modules from "./module";
import {RouterMount,createRouter} from 'uni-simple-router';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [
		...modules,
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
