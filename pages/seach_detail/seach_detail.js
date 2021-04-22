var a = null, t = 1;

Page({
    data: {
        search_value: "",
        biaoqingbaoList: null,
        loadingHidden: !0,
        types: "",
        datatotal: 0,
        main_type: ""
    },
    btn_info_cang: function(a) {
        var t = a.currentTarget.dataset.keyword.id;
        wx.navigateTo({
            url: "../image_detail/image_detail?image_id=" + t
        });
    },
    btn_to_main: function(a) {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onLoad: function(t) {
        wx.createInterstitialAd && ((a = wx.createInterstitialAd({
            adUnitId: "adunit-6067f36ddc12e7ac"
        })).onLoad(function() {}), a.onError(function(a) {}), a.onClose(function() {})), 
        a && a.show().catch(function(a) {
            console.error(a);
        }), this.setData({
            search_value: t.search_value
        });
        var e = t.search_value, i = this;
        wx.request({
            url: getApp().data.servsers + "/biaoqing/getBiaoQingSearchInfo?type=&pageSize=28&pageNum=1&key_word=" + e,
            method: "GET",
            data: {},
            header: {
                Accept: "application/json"
            },
            success: function(a) {
                var t = a.data.data.rows, e = a.data.data;
                console.info("total === >" + e.total);
                var o = e.total;
                i.setData({
                    datatotal: o,
                    biaoqingbaoList: t
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showLoading({
            title: "加载中..."
        }), wx.showNavigationBarLoading(), setTimeout(function() {
            wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        }, 1e3), t = 1;
        var a = this;
        wx.request({
            url: getApp().data.servsers + "/biaoqing/getBiaoQingSearchInfo?type=&pageSize=16&pageNum=1&key_word=" + this.data.search_value,
            method: "GET",
            header: {
                "content-type": "application/text"
            },
            success: function(t) {
                a.setData({
                    biaoqingbaoList: t.data.data.rows
                }), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    onReachBottom: function() {
        var a = this;
        wx.showLoading({
            title: "玩命加载中..."
        }), t += 1, console.info("上拉刷新 onReachBottom  pages " + t), wx.request({
            url: getApp().data.servsers + "/biaoqing/getBiaoQingSearchInfo?type=&pageSize=16&pageNum=" + t + "&key_word=" + this.data.search_value,
            method: "GET",
            header: {
                "content-type": "application/text"
            },
            success: function(t) {
                for (var e = a.data.biaoqingbaoList, i = t.data.data.rows, o = 0; o < i.length; o++) e.push(i[o]);
                0 != i.length && a.setData({
                    biaoqingbaoList: e
                }), wx.hideLoading();
            }
        });
    },
    loadingTap: function() {
        this.setData({
            loadingHidden: !1
        });
        var a = this;
        setTimeout(function() {
            a.setData({
                loadingHidden: !0
            }), a.update();
        }, 3e3);
    }
}), wx.showShareMenu({
    withShareTicket: !0,
    menus: [ "shareAppMessage", "shareTimeline" ]
});