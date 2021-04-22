require("0E3AEEB415271CAF685C86B33BA722E6.js"), App({
    data: {
        servsers: "https://wx.biaoqingzhushou.com/emoticon-cms"
    },
    globalData: {},
    fetchApi: function(e, n) {
        wx.request({
            url: e,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(e) {
                n(null, e.data);
            },
            fail: function(e) {
                n(e);
            }
        });
    },
    onLaunch: function() {
        console.log("App Launch");
    },
    onShow: function() {
        console.log("App Show");
    },
    onHide: function() {
        console.log("App Hide");
    }
}), wx.showShareMenu({
    withShareTicket: !0,
    menus: [ "shareAppMessage", "shareTimeline" ]
});