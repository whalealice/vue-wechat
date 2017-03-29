import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//创建 router 实例，然后传 `routes` 配置
export default new Router({
	routes:[
	  	{ 
	  		path: '/',
	  		name:"微信",
	  		component: resolve => require(["../components/wechat/WeChat.vue"], resolve)
	  	}
	]
})