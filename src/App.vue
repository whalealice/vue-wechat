<template>
    <div id="app">
        <v-welcome></v-welcome>
        <section class="app-content">
            <keep-alive>
                <router-view ></router-view>
            </keep-alive>
        </section>
    </div>
</template>

<script>
import vWelcome from './components/common/welcome.vue'
export default {
    name: 'app',
    components:{ vWelcome }
}
</script>

<style>
    /*将公用的样式统一在此导入*/
    
    @import "assets/css/base.css";
    @import "assets/css/common.css";
    @import "assets/css/wx-header.css";
    /*阿里 fonticon*/
    
    @import "assets/css/lib/iconfont.css";
    /*过渡效果需要的动画库*/
    
    @import "assets/css/lib/animate.css";
    /*weui 样式库 非常适合高仿微信*/
    
    @import "assets/css/lib/weui.min.css";
</style>
