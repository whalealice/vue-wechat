<template>
	<!--复用性非常高，涉及的动效也比较复杂-->
    <!--search-open 控制搜索框被激活时的动效、样式-->
  	<div id="search" :class="{'search-open':!$store.state.headerStatus}">
	    <div class="weui-search-bar" id="search_bar" :class="{'weui-search-bar_focusing':!$store.state.headerStatus}">
	      <form class="weui-search-bar__form">
	        <div class="weui-search-bar__box">
	          <i class="weui-icon-search"></i>
	          <input type="search" v-model="searchIpt" class="weui-search-bar__input" id="search_input" placeholder="搜索" @focus="closeHeader"/>
	          <a class="weui-icon-clear" v-on:click="searchClear"></a>
	        </div>
	        <label for="search_input" class="weui-search-bar__label" id="search_text">
	            <i class="weui-icon-search"></i>
	            <span>搜索</span>
	        </label>
	      </form>
	      <a class="weui-search-bar__cancel-btn" id="search_cancel" v-on:click="$store.commit('toggleHeaderStatus',true)">取消</a>
	    </div>
  	</div>
</template>
<script>
    export default {
        name: "search",
        data() {
            return {
                searchIpt: ""
            }
        },
        methods: {
            // wx-header 隐藏
            closeHeader() {
                if (this.$store.state.headerStatus) {
                    this.$store.commit('toggleHeaderStatus', false)
                } else {

                }
            },
            // 清除输入的内容 可以直接写 v-on:click="searchIpt=''"
            searchClear() {
                this.searchIpt = ""
            }
        }
    }
</script>
<style>
    @import "../../assets/sass/wx-search.scss";
</style>