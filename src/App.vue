<template>
    <div id="app">
        <wx-welcome></wx-welcome>
        <div class="outter" :class="{'hideLeft':$route.path.split('/').length>2}">
            <!--通用头部-->
            <header class="app-header" :class="{'header-hide':!$store.state.headerStatus}">
                <wx-header></wx-header>
            </header>
            <!--搜索框 只在“微信”和“通讯录”页面下显示-->
            <wx-search v-show="$route.path.indexOf('explore')===-1&&$route.path.indexOf('self')===-1"></wx-search>

            <section class="app-content">
                <keep-alive>
                    <router-view name="default"></router-view>
                </keep-alive>
            </section>

            <!--底部导航 路由 -->
            <footer class="app-footer">
                <wx-nav></wx-nav>
            </footer>
        </div>
        <!--其他店内页集合 有过渡效果-->
        <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
            <router-view name="subPage" class="sub-page"></router-view>
        </transition>
    </div>
</template>

<script>
import wxWelcome from './components/common/wxWelcome'
import wxSearch from "./components/common/wxSearch"
import wxHeader from "./components/common/wxHeader"
import wxNav from "./components/common/wxNav.vue"
export default {
    name: 'app',
    components:{ wxWelcome , wxSearch , wxHeader , wxNav},
    data() {
            return {
                "pageName": "",
                "routerAnimate": false,
                "enterAnimate": "", //页面进入动效
                "leaveAnimate": "" //页面离开动效
            }
        },
        watch: {
            // 监听 $route 为店内页设置不同的过渡效果
            "$route" (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                if (toDepth === 2) {
                    // this.$store.commit("setPageName", to.name)
                }
                //同一级页面无需设置过渡效果
                if (toDepth === fromDepth) {
                    return;
                }
                this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft"
                this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight"
                    // 从店面页进入店内页 需要对店内页重新设置离开动效 因为他们处于不同 name 的 router-view
                if (toDepth === 3) {
                    this.leaveAnimate = "animated fadeOutRight"
                }
            }
        }
}
</script>

<style>
    /*将公用的样式统一在此导入*/
    @import "assets/css/base.css";
    @import "assets/css/common.css";
    /*@import "assets/sass/wx-header.scss";*/

    /*阿里 fonticon*/
    @import "assets/css/lib/iconfont.css";

    /*过渡效果需要的动画库*/
    @import "assets/css/lib/animate.css";
    
    /*weui 样式库 非常适合高仿微信*/
    @import "assets/css/lib/weui.min.css";
</style>
