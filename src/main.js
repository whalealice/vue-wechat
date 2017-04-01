// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' //入口文件
import router from './router' //路由
import vuex from 'vue'
import store from './vuex/store'
import FastClick from 'fastclick' //使用 fastclick 解决移动端 300ms 点击延迟
import axios from 'axios'
import VueAxios from 'vue-axios'
import filters from './filters' //将全部过滤器放在 filters/index.js 中便于管理
//注册全局过滤器
filters(Vue)
Vue.use(VueAxios, axios, vuex)

Vue.config.productionTip = false //将此值设置为 false ,会关闭 Vue 启动时的提示信息，推荐

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
