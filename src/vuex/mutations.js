const mutations = {
	//增加未读消息数
    addNewMsg(state) {
    	// console.log(state.newMsgCount)
    	state.newMsgCount > 99 ? state.newMsgCount = "99+" : state.newMsgCount++
    },
    //减少未读消息数
    minusNewMsg(state) {
        state.newMsgCount < 1 ? state.newMsgCount = 0 : state.newMsgCount--
    },
    //设置当前页面名字
    setPageName(state, name) {
        state.currentPageName = name
    },
}
export default mutations