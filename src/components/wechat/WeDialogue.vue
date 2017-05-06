<template>
	<div class="dialogue">
		<header id="wx-header">
            <div class="header-title">
                <router-link to="/" tag="div" class="iconfont icon-return-arrow">
                    <span>微信</span>
                </router-link>
                <span>{{pageName}}</span>
                <span class="parentheses" v-show='$route.query.group_num&&$route.query.group_num!=1'>{{$route.query.group_num}}</span>
            </div>
            <div class="header-tip" >
                <router-link :to="{path:'/wechat/dialogue/dialogue-info',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-group" v-show="$route.query.group_num&&$route.query.group_num!=1"></router-link>
                <router-link :to="{path:'/wechat/dialogue/dialogue-detail',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-friends" v-show="$route.query.group_num==1"></router-link>
            </div>
        </header>

        <section class="dialogue-section clearfix">
            <div class="isLeft" v-for="(item,index) in msgInfo.msg" v-bind:class="{ isRight: item.self == true }">
                <img :src="item.headerUrl" class="header">
                <p class="text">{{item.text}}</p>
            </div>
        </section>


	</div>
</template>
<script>
 export default {
        name:'dialogue',
        data() {
            return {
                pageName: this.$route.query.name
            }
        },
        computed: {
            msgInfo() {
                for (var i in this.$store.state.msgList.baseMsg) {
                    if (this.$store.state.msgList.baseMsg[i].mid == this.$route.query.mid) {
                        return this.$store.state.msgList.baseMsg[i]
                    }
                }
            }
        },
        methods: {
        },
        mounted(){
        }
    }
</script>
<style lang="sass">
@import "../../assets/sass/dialogue.scss";
@import "../../assets/sass/wx-header.scss";

</style>