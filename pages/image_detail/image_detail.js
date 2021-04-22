var t = null, a = null;

Page({
    data: {
        image_value: "",
        loadimageText: "",
        image_id: 0,
        imagePath: "",
        imageData: "",
        biaoqingbaoList: "",
        creditsAmountSum: 0
    },
    images_btn_info: function(t) {
        var a = t.currentTarget.dataset.keyword.id;
        console.info(a), wx.navigateTo({
            url: "../image_detail/image_detail?image_id=" + a
        });
    },
    image_btn_info: function(t) {
        var a = t.currentTarget.dataset.keyword.thrid_image_path;
        wx.navigateTo({
            url: "../image_detail/image_detail?image_info=" + a
        });
    },
    btn_share_image: function(t) {
        var a = [ this.data.image_value ];
        wx.previewImage({
            current: this.data.image_value,
            urls: a
        });
    },
    btn_to_main: function(t) {
        console.info("tiaozhuan"), wx.switchTab({
            url: "../index/index"
        });
    },
    btn_dianzan: function(t) {
        wx.showToast({
            title: "点赞成功",
            icon: "success",
            duration: 2e3
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "这里有超多聊天专用的表情包，你要吗？",
            path: "pages/index/index",
            imageUrl: "/images/kk.jpg",
            success: function(t) {
                console.info("转发成功");
            },
            fail: function(t) {
                console.info("转发失败");
            }
        };
    },
    down_load_image: function(t) {
        if (wx.getStorageSync("bqb_creditsAmountSum") > 0) {
            wx.showLoading({
                title: "正在下载..."
            });
            var e = this.data.imagePath, o = e.substring(0, 5);
            console.info(" == " + o), "https" != o && (e = "https" + e.substring(4, e.length)), 
            wx.downloadFile({
                url: e,
                success: function(t) {
                    console.log(t), wx.saveImageToPhotosAlbum({
                        filePath: t.tempFilePath,
                        success: function(t) {
                            wx.hideLoading(), wx.showToast({
                                title: "保存成功",
                                icon: "success",
                                duration: 2e3
                            });
                            var a = wx.getStorageSync("bqb_creditsAmountSum");
                            a -= 10, wx.setStorageSync("bqb_creditsAmountSum", a);
                        },
                        fail: function(t) {
                            console.log(t), "saveImageToPhotosAlbum:fail:auth denied" === t.errMsg && (console.log("当初用户拒绝，再次发起授权"), 
                            wx.openSetting({
                                success: function(t) {
                                    console.log(t), t.authSetting["scope.writePhotosAlbum"] ? console.log("获取权限成功，给出再次点击图片保存到相册的提示。") : console.log("获取权限失败，给出不给权限就无法正常使用的提示");
                                }
                            }));
                        },
                        complete: function(t) {
                            console.log(t);
                        }
                    });
                }
            });
        } else wx.showModal({
            title: "温馨提示",
            content: "看后广告，才能下载",
            success: function(t) {
                t.confirm ? (console.log("用户点击确定"), a && a.show().catch(function() {
                    a.load().then(function() {
                        return a.show();
                    }).catch(function(t) {
                        console.log("激励视频 广告显示失败");
                    });
                })) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    show_image: function(t) {
        var a = [ this.data.imagePath ];
        wx.previewImage({
            current: this.data.imagePath,
            urls: a
        });
    },
    btn_ollection: function(t) {
        console.info(" 图片ID ：" + this.data.imageData.id);
        var a = this.data.imageData.id, e = wx.getStorageSync("openid");
        wx.request({
            url: getApp().data.servsers + "/biaoqing/userBiaoQingAddCang?openid=" + e + "&imageid=" + a,
            method: "GET",
            data: {},
            header: {
                Accept: "application/json"
            },
            success: function(t) {
                wx.hideLoading();
                var a = t.data.data.code;
                0 == a ? wx.showToast({
                    title: "收藏成功",
                    icon: "success",
                    duration: 2e3
                }) : 1 == a && wx.showToast({
                    title: "您已经收藏过",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    onLoad: function(e) {
        wx.createInterstitialAd && ((t = wx.createInterstitialAd({
            adUnitId: "插屏广告"
        })).onLoad(function() {}), t.onError(function(t) {}), t.onClose(function() {})), 
        t && t.show().catch(function(t) {
            console.error(t);
        }), wx.createRewardedVideoAd && ((a = wx.createRewardedVideoAd({
            adUnitId: "激励视频广告"
        })).onLoad(function() {}), a.onError(function(t) {}), a.onClose(function(t) {
            t && t.isEnded || void 0 === t ? (wx.setStorageSync("bqb_creditsAmountSum", 100), 
            wx.showModal({
                content: "广告已播放完成,可以下载表情包了！"
            })) : wx.showModal({
                content: "广告未播放完成,无法下载表情包"
            });
        }));
        var o = this;
        wx.request({
            url: getApp().data.servsers + "/biaoqing/getBiaoQingById?bid=" + e.image_id,
            method: "GET",
            data: {},
            header: {
                Accept: "application/json"
            },
            success: function(t) {
                o.setData({
                    imagePath: t.data.data.imagePath,
                    imageData: t.data.data
                });
            }
        });
        var n = this;
        wx.request({
            url: getApp().data.servsers + "/biaoqing/getBiaoQingSearchInfo?type=3&pageSize=20&pageNum=1&key_word=",
            method: "GET",
            data: {},
            header: {
                Accept: "application/json"
            },
            success: function(t) {
                var a = t.data.data.rows, e = t.data.data;
                console.info("total === >" + e.total);
                var o = e.total;
                n.setData({
                    datatotal: o,
                    biaoqingbaoList: a
                });
            }
        });
    },
    goxcx: function() {
        wx.navigateToMiniProgram({
            appId: "wx3e971a14238dc8d3"
        });
    },
    goxcx2: function() {
        wx.navigateToMiniProgram({
            appId: "wx2543189951584897"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    loadingTap: function() {
        this.setData({
            loadingHidden: !1
        });
        var t = this;
        setTimeout(function() {
            t.setData({
                loadingHidden: !0
            }), t.update();
        }, 3e3);
    }
}), wx.showShareMenu({
    withShareTicket: !0,
    menus: [ "shareAppMessage", "shareTimeline" ]
});