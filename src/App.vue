<template>
    <div id="app">
        <wx-welcome></wx-welcome>
        <wx-search></wx-search>
        <section class="app-content">
            <keep-alive>
                <router-view ></router-view>
            </keep-alive>
        </section>
    </div>
</template>

<script>
import wxWelcome from './components/common/wxWelcome'
import wxSearch from "./components/common/wxSearch"
export default {
    name: 'app',
    components:{ wxWelcome , wxSearch}
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
