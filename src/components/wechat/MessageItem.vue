<template>
	<li :class="{'item-hide':deleteMsg}">
		<router-link :to="{ path: '/wechat/dialogue', query: { mid: item.mid,name:item.group_name||(item.user[0].remark||item.user[0].nickname),group_num:item.user.length}}" tag="div" class="list-info" 
            v-on:click.native="toggleMsgRead($event,'enter')">
			<div class="header-box">
				<!--未读并且未屏蔽 才显示新信息数量-->
                <i class="new-msg-count" v-show="!read&&!item.quiet">{{item.unreadnum}}</i>
                <!--未读并且屏蔽 只显示小红点-->
                <i class="new-msg-dot" v-show="!read&&item.quiet"></i>
                <!--如果是私聊，只显示一个头像； 如果是群聊，则显示多个头像，flex 控制样式-->
                <div class="header" :class="[item.type=='group'?'multi-header':'']">
                    <img v-for="userInfo in item.user" :src="userInfo.headerUrl">
                </div>
			</div>
			<div class="desc-box">
                <!--使用过滤器 fmtDate 格式化时间-->
                <div class="desc-time">{{item.msg[item.msg.length-1].date | fmtDate("hh:ss")}}</div>
                <div class="desc-author" v-if="item.type=='group'">{{item.group_name}}</div>   
                <!--如果没有备注好友，则显示微信昵称-->
                <div class="desc-author" v-else>{{item.user[0].remark||item.user[0].nickname}}</div> 
                <!-- 最后一条信息   -->
                <div class="desc-msg">
                    <div class="desc-mute iconfont icon-mute" v-show="item.quiet">
                    </div>
                    <span v-show="item.type=='group'">{{item.msg[item.msg.length-1].name}}:</span>
                    <span>{{item.msg[item.msg.length-1].text}}</span>
                </div>   
            </div>
		</router-link>
	</li>
</template>
<script>
    export default {
        props: ["item"],
        data() {
            return {
                read:this.item.read,
                deleteMsg:false
            }
        },
        methods: {
            toggleMsgRead(event,status){
                if (status === 'enter') {
                    // if (this.read) {
                    //     return ''
                    // }
                    this.read = true
                } else {
                    this.read = !this.read
                }
                if (!this.item.quiet) {
                    if (this.read) {
                        this.$store.commit('minusNewMsg')
                    } else {
                        this.$store.commit('addNewMsg')
                    }
                }
            }
        }
    }
</script>