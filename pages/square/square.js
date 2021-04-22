var t = 1;

Page({
    data: {
        biaoqingCollectionList: ""
    },
    onLoad: function(e) {
        t = 1, this.setData({
            contents: ""
        }), wx.showLoading({
            title: "加载中..."
        });
        var a = this;
        wx.request({
            url: getApp().data.servsers + "/biaoqing/getBiaoQingSearchInfo?type=1&key_word=&pageNum=1&pageSize=16",
            method: "GET",
            header: {
                "content-type": "application/text"
            },
            success: function(t) {
                wx.hideLoading(), a.setData({
                    biaoqingCollectionList: t.data.data.rows
                });
            }
        });
    },
    onReady: function() {},
    btn_info_click: function(t) {
        var e = t.currentTarget.dataset.keyword.id;
        wx.navigateTo({
            url: "../image_detail/image_detail?image_id=" + e
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showLoading({
            title: "加载中..."
        }), wx.showNavigationBarLoading(), setTimeout(function() {
            wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        }, 1e3), t = 1;
        var e = this;
        wx.request({
            url: getApp().data.servsers + "/biaoqing/getBiaoQingSearchInfo?type=1&key_word=&pageNum=1&pageSize=16",
            method: "GET",
            header: {
                "content-type": "application/text"
            },
            success: function(t) {
                e.setData({
                    biaoqingCollectionList: t.data.data.rows
                }), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    onReachBottom: function() {
        var e = this;
        wx.showLoading({
            title: "玩命加载中..."
        }), t += 1, console.info("上拉刷新 onReachBottom  pages " + t), wx.request({
            url: getApp().data.servsers + "/biaoqing/getBiaoQingSearchInfo?type=1&key_word=&pageSize=16&pageNum=" + t,
            method: "GET",
            header: {
                "content-type": "application/text"
            },
            success: function(t) {
                for (var a = e.data.biaoqingCollectionList, o = t.data.data.rows, i = 0; i < o.length; i++) a.push(o[i]);
                0 != o.length && e.setData({
                    biaoqingCollectionList: a
                }), wx.hideLoading();
            }
        });
    },
    onShareAppMessage: function() {}
});