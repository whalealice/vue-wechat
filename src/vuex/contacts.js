/**
 * wxid-微信id
 * initial-姓名首字母
 * headerUrl-头像地址
 * nickname-昵称
 * sex-性别 男1女0
 * remark-备注
 * signature-个性签名
 * telphone-电话号码
 * album-相册
 * area-地区
 * from-来源
 * desc-描述
 */
const contacts = [{
        "wxid": "wxid_baiqian",
        "initial": 'b',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg",
        "nickname": "白浅",
        "sex": 0,
        "remark": "",
        "signature": "青丘帝姬",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }],
        "area": ["青丘", "狐狸洞"],
        "from": "通过扫一扫",
        "tag": "女帝",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },{
        "wxid": "wxid_ali",
        "initial": 'b',
        "headerUrl": "../../static/images/ali.jpg",
        "nickname": "阿离",
        "sex": 0,
        "remark": "",
        "signature": "天族小殿下",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }],
        "area": ["青丘", "狐狸洞"],
        "from": "通过扫一扫",
        "tag": "女帝",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    }, { //昵称备注都有的朋友
        "wxid": "wxid_yehua",
        "initial": 'y',
        "headerUrl": "../../static/images/yehua.jpg",
        "nickname": "夜华",
        "sex": 1,
        "remark": "夜华",
        "signature": "浅浅，过来",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }],
        "area": ["九重天", "洗梧宫"],
        "from": "通过扫一扫",
        "tag": "太子",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_dijun",
        "initial": 'd',
        "headerUrl": "../../static/images/dijun.jpg",
        "nickname": "帝君",
        "sex": 1,
        "remark": "东华帝君",
        "signature": "三生石上没有我的名字，我们注定没有缘分！",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",
            date: 182625262
        }],
        "area": ["九重天", "太晨宫"],
        "from": "通过扫一扫",
        "tag": "天地共主",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_lijing",
        "initial": 'l',
        "headerUrl": "../../static/images/lijing.jpg",
        "nickname": "离境",
        "sex": 1,
        "remark": "离境",
        "signature": "异界魔君",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",
            date: 182625262
        }],
        "area": ["异界","大紫明宫"],
        "from": "通过扫一扫",
        "tag": "异君",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_baifengjiu",
        "initial": 'b',
        "headerUrl": "../../static/images/baifengjiu.jpg",
        "nickname": "白凤九",
        "sex": 1,
        "remark": "凤九",
        "signature": "我要找帝君报恩！",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",
            date: 182625262
        }],
        "area": ["青丘", "狐狸洞"],
        "from": "通过扫一扫",
        "tag": "小帝姬",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_zheyan",
        "initial": 'z',
        "headerUrl": "../../static/images/zheyan.jpg",
        "nickname": "折颜",
        "sex": 0,
        "remark": "折颜",
        "signature": "真真，我们走！",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }],
        "area": ["青丘", "十里桃林"],
        "from": "通过手机号码添加",
        "tag": "上神",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_baizhen",
        "initial": 'b',
        "headerUrl": "../../static/images/baizhen.jpg",
        "nickname": "白真",
        "sex": 0,
        "remark": "白真",
        "signature": "浅浅",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }],
        "area": ["青丘", "十里桃林"],
        "from": "通过手机号码添加",
        "tag": "上神",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    }
]

const contact = {
    contacts
}
contact.getUserInfo = function(wxid) {
    if (!wxid) {
        return;
    } else {
        for (var index in contacts) {
            if (contacts[index].wxid === wxid) {
                return contacts[index]
            }
        }
    }
}

export default contact