<template>
    <div id="app">
        <wx-welcome></wx-welcome>
        <!--通用头部-->
        <header class="app-header">
            <wx-header></wx-header>
        </header>
        <!--搜索框 只在“微信”和“通讯录”页面下显示-->
        <wx-search></wx-search>

        <section class="app-content">
            <keep-alive>
                <router-view ></router-view>
            </keep-alive>
        </section>

        <!--底部导航 路由 -->
        <footer class="app-footer">
            <wx-nav></wx-nav>
        </footer>
    </div>
</template>

<script>
import wxWelcome from './components/common/wxWelcome'
import wxSearch from "./components/common/wxSearch"
import wxHeader from "./components/common/wxHeader"
import wxNav from "./components/common/wxNav.vue"
export default {
    name: 'app',
    components:{ wxWelcome , wxSearch , wxHeader , wxNav}
}
</script>

<style>
    /*将公用的样式统一在此导入*/
    
    @import "assets/css/base.css";
    @import "assets/css/common.css";
    /*@import "assets/css/wx-header.css";*/
    /*阿里 fonticon*/
    
    @import "assets/css/lib/iconfont.css";
    /*过渡效果需要的动画库*/
    
    @import "assets/css/lib/animate.css";
    /*weui 样式库 非常适合高仿微信*/
    
    @import "assets/css/lib/weui.min.css";
</style>
