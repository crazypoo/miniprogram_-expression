var n, t = require("2B6F04A015271CAF4D096CA7DC6722E6.js")(require("EEA240A115271CAF88C428A66F7722E6.js"));

n = function() {
    function n(n) {
        this.app = n;
    }
    function o(t) {
        q = t, this.aldstat = new n(this), v("app", "launch");
    }
    function e(n) {
        q = n, O = n.query.ald_share_src, E = n.query.aldsrc || "", n.query.ald_share_src, 
        Date.now(), b = Date.now(), Q || (M = "" + Date.now() + Math.floor(1e7 * Math.random())), 
        Q = !1, 0 !== R && Date.now() - R > 3e5 && (P = "" + Date.now() + Math.floor(1e7 * Math.random()), 
        b = Date.now()), n.query.ald_share_src && "1044" == n.scene && n.shareTicket ? wx.getShareInfo({
            shareTicket: n.shareTicket,
            success: function(n) {
                B = n, S("event", "ald_share_click", JSON.stringify(n));
            }
        }) : n.query.ald_share_src && S("event", "ald_share_click", 1), "" === C && wx.getSetting({
            withCredentials: !0,
            success: function(n) {
                n.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !0,
                    success: function(n) {
                        var t = p();
                        C = n, t.ufo = w(n), A = g(n.userInfo.avatarUrl.split("/")), d(t);
                    }
                });
            }
        }), v("app", "show");
    }
    function a() {
        R = Date.now(), "" === C && wx.getSetting({
            success: function(n) {
                n.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !0,
                    success: function(n) {
                        C = n, A = g(n.userInfo.avatarUrl.split("/"));
                        var t = p();
                        t.ufo = w(n), d(t);
                    }
                });
            }
        }), v("app", "hide");
    }
    function r(n) {
        N++, S("event", "ald_error_message", n);
    }
    function i(n) {
        K = n;
    }
    function s() {
        J = this.route, V = Date.now(), z = 0, W = 0;
    }
    function c() {
        y("page", "hide"), G = this.route;
    }
    function u() {
        y("page", "unload"), G = this.route;
    }
    function l() {
        z++;
    }
    function f() {
        W++;
    }
    function h(n) {
        var t = function(n) {
            if (-1 == n.indexOf("?")) return "";
            var t = {};
            return n.split("?")[1].split("&").forEach(function(n) {
                var o = n.split("=")[1];
                t[n.split("=")[0]] = o;
            }), t;
        }(n.path), o = q.query, e = "";
        if (e = -1 == n.path.indexOf("?") ? n.path + "?" : n.path.substr(0, n.path.indexOf("?")) + "?", 
        "" !== t) for (var a in t) o[a] = t[a];
        for (var r in o.ald_share_src ? -1 == o.ald_share_src.indexOf(k) && o.ald_share_src.length < 200 && (o.ald_share_src = o.ald_share_src + "," + k) : o.ald_share_src = k, 
        o) -1 == r.indexOf("ald") && (e += r + "=" + o[r] + "&");
        return n.path = e + "ald_share_src=" + o.ald_share_src, S("event", "ald_share_status", n), 
        n;
    }
    function d(n) {
        var t = n, o = 0, e = 0;
        !function a(r) {
            e++, r ? ((n = {}).et = Date.now(), n.at = M, n.uu = k, n.v = x, n.ak = t.ak, n.life = t.life, 
            n.ev = t.ev, n.err = "err", n.status = o) : (U++, n.at = M, n.et = Date.now(), n.uu = k, 
            n.v = x, n.ak = m.app_key, n.wsr = q, n.oifo = L, n.rq_c = U), wx.request({
                url: "https://" + D + ".aldwx.com/d.html",
                data: n,
                header: {
                    AldStat: "MiniApp-Stat",
                    waid: m.appid || "",
                    wst: m.appsecret || "",
                    se: I || "",
                    op: T || "",
                    img: A
                },
                method: "GET",
                success: function(n) {
                    o = n.statusCode, 200 != n.statusCode && e <= 3 && a("errorsend");
                },
                fail: function() {
                    e <= 3 && a("errorsend");
                }
            });
        }();
    }
    function p() {
        var n = {};
        for (var t in F) n[t] = F[t];
        return n;
    }
    function g(n) {
        for (var t = "", o = 0; o < n.length; o++) n[o].length > t.length && (t = n[o]);
        return t;
    }
    function w(n) {
        var t = {};
        for (var o in n) "rawData" != o && "errMsg" != o && (t[o] = n[o]);
        return t;
    }
    function v(n, t) {
        var o = p();
        if (o.ev = n, o.life = t, o.ec = N, o.st = H, E && (o.qr = E, o.sr = E), O && (o.usr = O), 
        "launch" !== t && (o.ahs = P), "hide" === t) if (o.hdr = Date.now() - b, Boolean(wx.getStorageSync("ald_ifo"))) {
            try {
                wx.setStorageSync("ald_ifo", !1);
            } catch (n) {}
            o.ifo = !0;
        } else o.ifo = !1;
        d(o);
    }
    function y(n, t) {
        var o = p();
        o.ev = n, o.st = Date.now(), o.life = t, o.pp = J, o.pc = G, o.dr = Date.now() - H, 
        o.ndr = Date.now() - V, o.rc = z, o.bc = W, o.ahs = P, K && "{}" != JSON.stringify(K) && (o.ag = K), 
        E && (o.qr = E, o.sr = E), O && (o.usr = O), j || (j = !0, o.ifp = j, o.fp = J), 
        d(o);
    }
    function S(n, t, o) {
        var e = p();
        e.ev = n, e.tp = t, e.st = H, o && (e.ct = o), d(e);
    }
    function _(n, t, o) {
        if (n[t]) {
            var e = n[t];
            n[t] = function(n) {
                o.call(this, n, t), e.call(this, n);
            };
        } else n[t] = function(n) {
            o.call(this, n, t);
        };
    }
    var m = require("3457A9F315271CAF5231C1F4D89722E6.js"), x = "7.0.0", D = "log", M = "" + Date.now() + Math.floor(1e7 * Math.random()), P = "" + Date.now() + Math.floor(1e7 * Math.random()), b = "", R = 0, I = "", T = "", A = "", U = 0, q = "", L = "", k = function() {
        var n = "";
        try {
            n = wx.getStorageSync("aldstat_uuid");
        } catch (t) {
            n = "uuid_getstoragesync";
        }
        if (n) L = !1; else {
            n = function() {
                function n() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                }
                return n() + n() + n() + n() + n() + n() + n() + n();
            }(), L = !0;
            try {
                wx.setStorageSync("aldstat_uuid", n), wx.setStorageSync("ald_ifo", !0);
            } catch (n) {
                wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
            }
        }
        return n;
    }(), H = Date.now(), O = "", E = "", N = 0, B = "", C = "", F = {}, j = !1, J = "", G = "", K = "", V = "", W = 0, z = 0, Q = !0;
    wx.request({
        url: "https://" + D + ".aldwx.com/config/app.json",
        header: {
            AldStat: "MiniApp-Stat"
        },
        method: "GET",
        success: function(n) {
            200 === n.statusCode && (n.version != x && console.warn("您的SDK不是最新版本，请尽快升级！"), n.data.warn && console.warn(n.data.warn), 
            n.data.error && console.error(n.data.error));
        }
    });
    try {
        var X = wx.getSystemInfoSync();
        F.br = X.brand, F.pm = X.model, F.pr = X.pixelRatio, F.ww = X.windowWidth, F.wh = X.windowHeight, 
        F.lang = X.language, F.wv = X.version, F.wvv = X.platform, F.wsdk = X.SDKVersion, 
        F.sv = X.system;
    } catch (n) {}
    return wx.getNetworkType({
        success: function(n) {
            F.nt = n.networkType;
        }
    }), wx.getSetting({
        success: function(n) {
            n.authSetting["scope.userLocation"] ? wx.getLocation({
                type: "wgs84",
                success: function(n) {
                    F.lat = n.latitude, F.lng = n.longitude, F.spd = n.speed;
                }
            }) : m.getLocation && wx.getLocation({
                type: "wgs84",
                success: function(n) {
                    F.lat = n.latitude, F.lng = n.longitude, F.spd = n.speed;
                }
            });
        }
    }), n.prototype.debug = function(n) {
        S("debug", "0", n);
    }, n.prototype.warn = function(n) {
        S("warn", "1", n);
    }, n.prototype.sendEvent = function(n, o) {
        if ("" !== n && "string" == typeof n && n.length <= 255) if ("string" == typeof o && o.length <= 255) S("event", n, o); else if ("object" == (0, 
        t.default)(o)) {
            if (JSON.stringify(o).length >= 255) return void console.error("自定义事件参数不能超过255个字符");
            S("event", n, JSON.stringify(o));
        } else void 0 === o ? S("event", n, !1) : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符"); else console.error("事件名称必须为String类型且不能超过255个字符");
    }, n.prototype.sendSession = function(n) {
        if ("" !== n && n) if ("" !== m.appid && "" !== m.appsecret) {
            I = n;
            var t = p();
            t.st = Date.now(), t.tp = "session", t.ct = "session", t.ev = "event", "" === C ? wx.getSetting({
                success: function(n) {
                    n.authSetting["scope.userInfo"] ? wx.getUserInfo({
                        success: function(n) {
                            t.ufo = w(n), A = g(n.userInfo.avatarUrl.split("/")), "" !== B && (t.gid = B), d(t);
                        }
                    }) : "" !== B ? (t.gid = B, d(t)) : console.warn("用户未授权");
                }
            }) : (t.ufo = C, "" !== B && (t.gid = B), d(t));
        } else console.error("请在配置文件中填写小程序的appid和appsecret！"); else console.error("请传入从后台获取的session_key");
    }, n.prototype.sendOpenid = function(n) {
        if ("" !== n && n) {
            T = n;
            var t = p();
            t.st = Date.now(), t.tp = "openid", t.ev = "event", t.ct = "openid", d(t);
        } else console.error("openID不能为空");
    }, m.plugin ? {
        App: function(n) {
            function t(t) {
                return n.apply(this, arguments);
            }
            return t.toString = function() {
                return n.toString();
            }, t;
        }(function(n) {
            var t = {};
            for (var i in n) "onLaunch" !== i && "onShow" !== i && "onHide" !== i && "onError" !== i && "onPageNotFound" !== i && "onUnlaunch" !== i && (t[i] = n[i]);
            t.onLaunch = function(t) {
                o.call(this, t), "function" == typeof n.onLaunch && n.onLaunch.call(this, t);
            }, t.onShow = function(t) {
                e.call(this, t), n.onShow && "function" == typeof n.onShow && n.onShow.call(this, t);
            }, t.onHide = function() {
                a.call(this), n.onHide && "function" == typeof n.onHide && n.onHide.call(this);
            }, t.onError = function(t) {
                r.call(this, t), n.onError && "function" == typeof n.onError && n.onError.call(this, t);
            }, t.onUnlaunch = function() {
                n.onUnlaunch && "function" == typeof n.onUnlaunch && n.onUnlaunch.call(this);
            }, t.onPageNotFound = function(t) {
                n.onPageNotFound && "function" == typeof n.onPageNotFound && n.onPageNotFound.call(this, t);
            }, App(t);
        }),
        Page: function(n) {
            function t(t) {
                return n.apply(this, arguments);
            }
            return t.toString = function() {
                return n.toString();
            }, t;
        }(function(n) {
            var t = {};
            for (var o in n) "onLoad" !== o && "onReady" !== o && "onShow" !== o && "onHide" !== o && "onUnload" !== o && "onPullDownRefresh" !== o && "onReachBottom" !== o && "onShareAppMessage" !== o && "onPageScroll" !== o && "onTabItemTap" !== o && (t[o] = n[o]);
            t.onLoad = function(t) {
                i.call(this, t), "function" == typeof n.onLoad && n.onLoad.call(this, t);
            }, t.onShow = function(t) {
                s.call(this), "function" == typeof n.onShow && n.onShow.call(this, t);
            }, t.onHide = function(t) {
                c.call(this), "function" == typeof n.onHide && n.onHide.call(this, t);
            }, t.onUnload = function(t) {
                u.call(this), "function" == typeof n.onUnload && n.onUnload.call(this, t);
            }, t.onReady = function(t) {
                n.onReady && "function" == typeof n.onReady && n.onReady.call(this, t);
            }, t.onReachBottom = function(t) {
                f(), n.onReachBottom && "function" == typeof n.onReachBottom && n.onReachBottom.call(this, t);
            }, t.onPullDownRefresh = function(t) {
                l(), n.onPullDownRefresh && "function" == typeof n.onPullDownRefresh && n.onPullDownRefresh.call(this, t);
            }, t.onPageScroll = function(t) {
                n.onPageScroll && "function" == typeof n.onPageScroll && n.onPageScroll.call(this, t);
            }, t.onTabItemTap = function(t) {
                n.onTabItemTap && "function" == typeof n.onTabItemTap && n.onTabItemTap.call(this, t);
            }, n.onShareAppMessage && "function" == typeof n.onShareAppMessage && (t.onShareAppMessage = function(t) {
                var o = n.onShareAppMessage.call(this, t);
                return void 0 === o ? (o = {}).path = this.route : void 0 === o.path && (o.path = this.route), 
                h.call(this, o);
            }), Page(t);
        })
    } : void function() {
        var n = App, t = Page;
        App = function(t) {
            _(t, "onLaunch", o), _(t, "onShow", e), _(t, "onHide", a), _(t, "onError", r), n(t);
        }, Page = function(n) {
            var o = n.onShareAppMessage;
            _(n, "onLoad", i), _(n, "onUnload", u), _(n, "onShow", s), _(n, "onHide", c), _(n, "onReachBottom", f), 
            _(n, "onPullDownRefresh", l), void 0 !== o && (n.onShareAppMessage = function(n) {
                if (void 0 !== o) {
                    var t = o.call(this, n);
                    return void 0 === t && ((t = {}).path = this.route), h(t);
                }
            }), t(n);
        };
    }();
}, "object" == ("undefined" == typeof exports ? "undefined" : (0, t.default)(exports)) && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (void 0).Ald = n();