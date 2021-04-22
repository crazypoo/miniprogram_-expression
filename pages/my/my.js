Page({
    data: {
        cahe_info: "",
        biaoqingCollectionList: ""
    },
    btn_info_cang: function(o) {
        var n = o.currentTarget.dataset.keyword.imageId;
        wx.navigateTo({
            url: "../image_detail/image_detail?image_id=" + n
        });
    },
    onLoad: function(o) {
        var n = wx.getStorageSync("openid");
        console.info("openid = " + n), wx.showLoading({
            title: "加载中..."
        });
        var i = this;
        wx.request({
            url: getApp().data.servsers + "/biaoqing/getUserBiaoQingAddCangList?openid=" + n,
            method: "GET",
            header: {
                "content-type": "application/text"
            },
            success: function(o) {
                wx.hideLoading(), i.setData({
                    biaoqingCollectionList: o.data.data
                });
            }
        });
    },
    onReady: function() {
        console.info("onReady ==== >");
    },
    onShow: function() {
        console.info("onShow");
        var o = wx.getStorageSync("biaoqinginfo");
        console.info("缓存中数据 ：" + o);
        var n = o.split("#");
        for (var i in n) console.info(i + "循环>>>>>" + n[i]);
        console.info(n), this.setData({
            cahe_info: n
        });
    },
    onHide: function() {
        console.info("onHide");
    },
    onUnload: function() {
        console.info("onUnload");
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});