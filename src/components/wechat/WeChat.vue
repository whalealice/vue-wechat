<template>
	<div id="wechat">
		<ul class="wechat-list">
	        <!--props传递消息对象 baseMsgObj -->
	        <message-item v-for="baseMsgObj in $store.state.msgList.baseMsg" :item="baseMsgObj" class="list-row line-bottom" :key="baseMsgObj.mid"></message-item>
	    </ul>
	</div>
</template>
<script>
import MessageItem from "../wechat/MessageItem.vue"
export default {
    components: { 
    	MessageItem
    },
    // mixins: [window.mixin],
    data() {
        return {
            "pageName": "微信"
        }
    }
}
</script>
<style lang="sass">
    @import "../../assets/sass/wechat.scss";
</style>