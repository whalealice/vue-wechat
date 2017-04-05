const mutations = {
	//增加未读消息数
    addNewMsg(state) {
    	// console.log(state.newMsgCount)
    	state.newMsgCount > 99 ? state.newMsgCount = "99+" : state.newMsgCount++
    }
}
export default mutations