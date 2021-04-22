function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var e, n = null;

getApp(), Page((e = {
    data: {
        bannerList: "",
        search_value: "",
        biaoqingtips: "",
        hotbiaoqing: "",
        xbbiaoqing: "",
        zrbiaoqing: "",
        qlrbiaoqing: "",
        SHOW_TOP: !1,
        SHOW_MODAL: !1
    },
    wxSearchInput: function(a) {
        this.setData({
            search_value: a.detail.value
        });
    },
    to_biaoqing: function(a) {
        n.load().then(function() {
            return n.show();
        }).catch(function(a) {
            return console.log(a.errMsg);
        });
    },
    bb_xiaobian_btn_more: function(a) {
        var t = a.currentTarget.dataset.keyword;
        console.info("==" + t), wx.navigateTo({
            url: "../seach_detail/seach_detail?search_value=" + t
        });
    },
    xiaobian_btn_more: function(a) {
        var t = wx.getStorageSync("bqb_creditsAmountSum");
        if (t > 0) {
            t -= 10, wx.setStorageSync("bqb_creditsAmountSum", t);
            var e = a.currentTarget.dataset.keyword;
            console.info("==" + e), wx.navigateTo({
                url: "../seach_detail/seach_detail?search_value=" + e
            });
        } else wx.showModal({
            title: "温馨提示",
            content: "看完广告,才能用表情包",
            success: function(a) {
                a.confirm ? (console.log("用户点击确定"), n && n.show().catch(function() {
                    n.load().then(function() {
                        return n.show();
                    }).catch(function(a) {
                        console.log("激励视频 广告显示失败");
                    });
                })) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    banner_btn: function(a) {
        var t = a.currentTarget.dataset.keyword.names;
        wx.navigateTo({
            url: "../seach_detail/seach_detail?type=&search_value=" + t
        });
    },
    wxSearchFn: function(a) {
        wx.navigateTo({
            url: "../seach_detail/seach_detail?search_value=" + this.data.search_value
        });
    },
    searchByKeyword: function(a) {
        var t = a.currentTarget.dataset.keyword.biaoqingTips;
        wx.navigateTo({
            url: "../seach_detail/seach_detail?search_value=" + t
        });
    },
    bb_image_btn_info: function(a) {
        var t = a.currentTarget.dataset.keyword.id;
        wx.navigateTo({
            url: "../image_detail/image_detail?image_id=" + t
        });
    },
    image_btn_info: function(a) {
        var t = wx.getStorageSync("bqb_creditsAmountSum");
        if (t > 0) {
            t -= 10, wx.setStorageSync("bqb_creditsAmountSum", t);
            var e = a.currentTarget.dataset.keyword.id;
            wx.navigateTo({
                url: "../image_detail/image_detail?image_id=" + e
            });
        } else wx.showModal({
            title: "温馨提示",
            content: "看完广告,才能用表情包",
            success: function(a) {
                a.confirm ? (console.log("用户点击确定"), n && n.show().catch(function() {
                    n.load().then(function() {
                        return n.show();
                    }).catch(function(a) {
                        console.log("激励视频 广告显示失败");
                    });
                })) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    huanyihuan: function(a) {
        var t = this;
        wx.request({
            url: getApp().data.servsers + "/biaoqing/getBiaoQingHomeInfo",
            method: "GET",
            data: {},
            header: {
                Accept: "application/json"
            },
            success: function(a) {
                console.log(a), t.setData({
                    bannerList: a.data.data.bannerList,
                    biaoqingtips: a.data.data.tipList,
                    hotbiaoqing: a.data.data.hotList,
                    xbbiaoqing: a.data.data.luoXiList,
                    zrbiaoqing: a.data.data.hxwList,
                    qlrbiaoqing: a.data.data.qlrList
                });
            }
        });
    },
    onShareTimeline: function() {
        return t.from, {
            title: "这里有超多聊天专用的表情包，你要吗？",
            path: "pages/index/index",
            imageUrl: "/images/kk.jpg"
        };
    },
    onShareAppMessage: function(a) {
        return a.from, {
            title: "这里有超多聊天专用的表情包，你要吗？",
            path: "pages/index/index",
            imageUrl: "/images/kk.jpg"
        };
    },
    onLoad: function(a) {
        wx.setStorageSync("creditsAmountSum", 0), wx.createRewardedVideoAd && ((n = wx.createRewardedVideoAd({
            adUnitId: "激励视频广告"
        })).onLoad(function() {}), n.onError(function(a) {}), n.onClose(function(a) {
            a && a.isEnded || void 0 === a ? (wx.setStorageSync("bqb_creditsAmountSum", 100), 
            wx.showModal({
                content: "广告看完了,可以打开表情包了！"
            })) : wx.showModal({
                content: "广告没看完,无法打开表情包！"
            });
        })), wx.login({
            success: function(a) {
                a.code ? (console.info("code === >>" + a.code), wx.request({
                    url: getApp().data.servsers + "/biaoqing/getUserInfo?type=2&code=" + a.code,
                    method: "GET",
                    data: {},
                    header: {
                        Accept: "application/json"
                    },
                    success: function(a) {
                        console.info("openid = " + a.data.data.openid), wx.setStorageSync("openid", a.data.data.openid);
                    }
                })) : console.log("登录失败！" + a.errMsg);
            }
        }), wx.showLoading({
            title: "加载中..."
        });
        var t = this;
        wx.request({
            url: getApp().data.servsers + "/biaoqing/getBiaoQingHomeInfo",
            method: "GET",
            data: {},
            header: {
                Accept: "application/json"
            },
            success: function(a) {
                t.setData({
                    bannerList: a.data.data.bannerList,
                    biaoqingtips: a.data.data.tipList,
                    hotbiaoqing: a.data.data.hotList,
                    xbbiaoqing: a.data.data.luoXiList,
                    zrbiaoqing: a.data.data.hxwList,
                    qlrbiaoqing: a.data.data.qlrList
                }), wx.hideLoading();
            }
        });
    },
    onReady: function() {
        var a = this, t = wx.getStorageSync("PLUG-ADD-MYAPP-KEY");
        if ("" == t) this.setData({
            SHOW_TOP: !0
        }), setTimeout(function() {
            a.setData({
                SHOW_TOP: !1
            });
        }, 2e4); else if (0 == t) return;
    },
    showModal: function() {
        this.setData({
            SHOW_TOP: !1,
            SHOW_MODAL: !0
        }), wx.setStorageSync("PLUG-ADD-MYAPP-KEY", 1);
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), wx.showLoading({
            title: "加载中..."
        });
        var a = this;
        wx.request({
            url: getApp().data.servsers + "/biaoqing/getBiaoQingHomeInfo",
            method: "GET",
            data: {},
            header: {
                Accept: "application/json"
            },
            success: function(t) {
                a.setData({
                    bannerList: t.data.data.bannerList,
                    biaoqingtips: t.data.data.tipList,
                    hotbiaoqing: t.data.data.hotList,
                    xbbiaoqing: t.data.data.luoXiList,
                    zrbiaoqing: t.data.data.hxwList,
                    qlrbiaoqing: t.data.data.qlrList
                }), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    onReachBottom: function() {}
}, a(e, "onShareAppMessage", function() {}), a(e, "loadingTap", function() {
    this.setData({
        loadingHidden: !1
    });
    var a = this;
    setTimeout(function() {
        a.setData({
            loadingHidden: !0
        }), a.update();
    }, 3e3);
}), e)), wx.showShareMenu({
    withShareTicket: !0,
    menus: [ "shareAppMessage", "shareTimeline" ]
});