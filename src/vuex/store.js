import Vue from 'vue'
import Vuex from 'vuex'
import contact from './contacts' //存放所有联系人的数据
import mutations from './mutations' 
Vue.use(Vuex)
// 统一管理接口域名 
let apiPublicDomain = '//vrapi.snail.com/'
const state = {
    currentLang: "zh", //当前使用的语言 zh：简体中文 en:英文 后期需要
    newMsgCount: 0, //新消息数量
    allContacts: contact.contacts, //所有联系人
    //OfficialAccounts: OfficialAccounts, //所有关注的公众号
    currentPageName: "微信", //用于在wx-header组件中显示当前页标题
    //backPageName: "", //用于在返回按钮出 显示前一页名字 已遗弃
    headerStatus: true, //显示（true）/隐藏（false）wx-header组件
    tipsStatus: false, //控制首页右上角菜单的显示(true)/隐藏(false)
    // 所有接口地址 后期需要
    apiUrl: {
        demo: apiPublicDomain + ""
    },
    msgList: {
        stickMsg: [], //置顶消息列表 后期需要
        baseMsg: [
            { //普通消息列表
                "mid": 1, //消息的id 唯一标识，重要
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false, //true；已读 false：未读
                "unreadnum":3, //未读条数
                "newMsgCount": 1, 
                "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
                "msg": [{
                    "text": '团子乖，娘亲要出去一下！',
                    "date": 1488117964495,
                    "name": "白浅",
                    "self":true,
                    "headerUrl": "../../static/images/baiqian.jpg"
                },{ //对话框的聊天记录 新消息 push 进
                    "text": "娘亲",
                    "date": 1488117964495,
                    "name": "阿里",
                    "self":false,
                    "headerUrl": "../../static/images/ali.jpg" 
                }, {
                    "text": '你不要阿里了吗？',
                    "date": 1488117964495,
                    "name": "阿里",
                    "self":false,
                    "headerUrl": "../../static/images/ali.jpg"
                }, {
                    "text": '娘亲?',
                    "date": 1488117964495,
                    "name": "阿里",
                    "self":false,
                    "headerUrl": "../../static/images/ali.jpg"
                }],
                "background":'../../static/images/bg1.jpg',
                "user": [contact.getUserInfo('wxid_ali')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
            },
            {
                "mid": 2,
                "type": "group",
                "group_name": "三个团子",
                "group_qrCode": "",
                "read": true,
                "unreadnum":0,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [{
                        "text": "团子，你父君呢？",
                        "date": 1488117964495,
                        "name": "白浅",
                        "self":true,
                        "headerUrl": "../../static/images/baiqian.jpg"
                    }, {
                        "text": '在天宫！',
                        "date": 1488117964495,
                        "name": "阿离",
                        "self":false,
                        "headerUrl": "../../static/images/ali.jpg"
                    },
                    {
                        "text": '浅浅，我来了！',
                        "date": 1488117964495,
                        "name": "夜华",
                        "self":false,
                        "headerUrl": "../../static/images/yehua.jpg"
                    }
                ],
                "user": [contact.getUserInfo('wxid_ali'), contact.getUserInfo('wxid_yehua'),contact.getUserInfo('wxid_baiqian')]
            },
            {
                "mid": 4,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "unreadnum":3,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": "浅浅，过来",
                    "date": 1488117964495,
                    "name": "夜华",
                    "headerUrl": "../../static/images/yehua.jpg"
                }, {
                    "text": '浅浅，过来',
                    "date": 1488117964495,
                    "name": "夜华",
                    "headerUrl": "../../static/images/yehua.jpg"
                }, {
                    "text": '浅浅，过来',
                    "date": 1488117964495,
                    "name": "夜华",
                    "headerUrl": "../../static/images/yehua.jpg"
                }],
                "user": [contact.getUserInfo('wxid_yehua')]
            },
            {
                "mid": 5,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "unreadnum":1,
                "newMsgCount": 4,
                "quiet": true,
                "msg": [{
                    "text": '白浅上神！',
                    "date": 1488117964495,
                    "name": "东华帝君",
                    "headerUrl": "../../static/images/dijun.jpg"
                }],
                "user": [contact.getUserInfo('wxid_dijun')]
            },
            {
                "mid": 6,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": true,
                "unreadnum":0,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": '姑姑，我去报恩啦！ ',
                    "date": 1488117964495,
                    "name": "白凤九",
                    "headerUrl": "../../static/images/baifengjiu.jpg"
                }],
                "user": [contact.getUserInfo('wxid_baifengjiu')]
            },
            {
                "mid": 7,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "unreadnum":1,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": '浅浅，你在哪？ ',
                    "date": 1488117964495,
                    "name": "白真",
                    "headerUrl": "../../static/images/baizhen.jpg"
                }],
                "user": [contact.getUserInfo('wxid_baizhen')]
            }
        ]
    }
}
export default new Vuex.Store({
    state,
    mutations
})