import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//创建 router 实例，然后传 `routes` 配置
const routes = [{
        path: '/',
        name: "微信",
        component: resolve => require(["../components/wechat/WeChat.vue"], resolve)
    }, {
        path: '/wechat/dialogue',
        name: "",
        components: {
            "default": resolve => require(["../components/wechat/WeChat.vue"], resolve),
            "subPage": resolve => require(["../components/wechat/WeDialogue.vue"], resolve)
        }
    },
    {
        path: '/wechat/dialogue/dialogue-info',
        name: "",
        components: {
            "subPage": resolve => require(["../components/wechat/DialogueInfo.vue"], resolve)
        }
    },
    {
        path: '/wechat/dialogue/dialogue-detail',
        name: "",
        components: {
            "subPage": resolve => require(["../components/wechat/DialogueDetail.vue"], resolve)
        }
    },

]
export default new Router({
    base: "/",
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return { x: 0, y: 0 }
    //     }
    // }

})