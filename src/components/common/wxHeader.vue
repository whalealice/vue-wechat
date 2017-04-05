<template>
	<div id="wx-header">
		<!--右上角图标-->
	    <div class="header-tip">
	      	<!--只在“微信”页显示 更多图标-->
	      	<span class="iconfont icon-tips-jia" v-show="$route.path==='/'" ></span>
	      	<!--只在“通讯录”页显示 显示添加好友图标-->
	      	<router-link tag="span" to="/contact/add-friend" class="iconfont icon-tips-add-friend" v-show="$route.path==='/contact'"></router-link>
	      	<!--只在“添加朋友”页显示 -->
	      	<span v-show="$route.path==='/contact/new-friends'">添加朋友</span>
	      	<!--下面这个好像有些多余 sad -->
	      	<span class="iconfont icon-chat-friends" v-show="$route.path==='/wechat/dialogue'"></span>
	    </div>
	    <div class="header-title">
	      	<!--显示当前页的名字-->
	      	<span>{{$store.state.currentPageName}}</span>
	      	<!--微信群 显示群名以及成员人数 好像和 dialogue 组件 写重了 sad -->
	      	<!-- <span class="parentheses" v-show='$route.query.group_num&&$route.query.group_num!=1'>{{$route.query.group_num}}</span> -->
	    </div>
	</div>
</template>
<style lang="sass">
	@import "../../assets/sass/wx-header.scss"
</style>