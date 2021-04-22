Page({
    data: {
        showModal: !1,
        cells: [ [ {
            title: "我的收藏",
            text: "",
            access: !0,
            fn: "viewCang"
        } ], [ {
            title: "清除缓存",
            text: "",
            access: !1,
            fn: "clearStorage"
        }, {
            title: "免责声明",
            text: "",
            access: !1,
            fn: "mzsm_btn"
        } ], [ {
            title: "关于",
            text: "",
            access: !0,
            fn: "viewAbount"
        } ] ]
    },
    onShareAppMessage: function(n) {
        return {
            title: "嗨，你的朋友给你分享了一个表情包小程序",
            path: "/pages/index/index",
            imageUrl: "https://wx.biaoqingzhushou.com/emoticon-cms/profile/upload/b.jpg",
            success: function(n) {
                console.info("转发成功");
            },
            fail: function(n) {
                console.info("转发失败");
            }
        };
    },
    viewCang: function() {
        wx.navigateTo({
            url: "../my/my"
        });
    },
    onGotUserInfo: function(n) {
        console.log("nickname=" + n.detail.userInfo);
    },
    viewAbount: function() {
        wx.showModal({
            title: "关于",
            content: "搜罗各种搞笑热门好玩的表情包，随时搜索下载分享给好友，找最流行最热表情包认准精品表情包！",
            confirmText: "确定",
            cancelText: "取消",
            success: function(n) {}
        });
    },
    mzsm_btn: function() {
        wx.showModal({
            title: "提示",
            content: "本小程序表情包及图片来自于互联网，版权归原作者所有。如有侵犯您权利的资源，请联系我加微信468092550处理。",
            confirmText: "复制",
            cancelText: "取消",
            success: function(n) {
                n.confirm && wx.setClipboardData({
                    data: "468092550",
                    success: function(n) {
                        wx.getClipboardData({
                            success: function(n) {
                                wx.showToast({
                                    title: "复制成功"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    clearStorage: function() {
        wx.showModal({
            title: "确认要清除",
            content: "清除缓存会删除浏览历史和收藏及个人资料",
            success: function(n) {
                n.confirm && wx.showToast({
                    title: "清除成功",
                    icon: "success",
                    duration: 1500
                });
            }
        });
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});