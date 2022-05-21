var parent=window;
window.mainwinssp = parent;
var ADMSTORAGE =  {
    image: "cdnstoremedia.com",
    js: "static.contineljs.com",
    logging: "trunkpkg.com"
} ;
"undefined" != typeof parent.ADMStorageFileCDN && (ADMSTORAGE.image = parent.ADMStorageFileCDN.adi,
ADMSTORAGE.js = parent.ADMStorageFileCDN.js,
ADMSTORAGE.logging = parent.ADMStorageFileCDN.logging);
(function() {
    window.sspcallback = function(a) {
        "undefined" != typeof mainwinssp.sspHidelogo && "undefined" != typeof a.sspid && "undefined" != typeof mainwinssp.sspHidelogo[a.sspid] && ("undefined" != typeof a.ext && null != a.ext && "" != a.ext ? a.ext.logo = 1 : a.ext = {
            logo: 1
        });
        if (mainwinssp.document.getElementById("sspbid_" + a.sspid)) {
            var k = mainwinssp.document.getElementById("sspbid_" + a.sspid);
            if ("beta.dantri.com.vn" == parent.document.domain && k.closest(".dt-news__content")) {
                var h = k.cloneNode(!0)
                  , t = k.closest(".dt-news__content");
                k.id = "sspbid_" + a.sspid + "_" + 1E6 * Math.random();
                k.style.display = "none";
                t.insertBefore(h, t.children[t.childElementCount / 2])
            }
            (new sspcallbacknew).ssp(a)
        } else
            k = document.createElement("div"),
            k.id = "sspbid_" + a.sspid,
            document.getElementsByTagName("body")[0].appendChild(k),
            null == mainwinssp.document.getElementById("sspbid_" + a.sspid) && (mainwinssp = window),
            k = document.createElement("script"),
            k.setAttribute("src", "https://" + ADMSTORAGE.js + "/core/admcoregg.js"),
            document.head.appendChild(k),
            k.onload = function() {
                (new sspcallbacknew).ssp(a)
            }
    }
}
)();
function sspcallbacknew() {
    this.ssp = function(a) {
        var k = ""
          , h = "";
        try {
            var t = window.__admloadPageIdc || "";
            "" == t && (t = localStorage.__uidac || "");
            h += "&dg=" + t
        } catch (r) {}
        try {
            "undefined" != typeof a.sspid && mainwinssp.admsspExtralog && mainwinssp.admsspExtralog[a.sspid] && mainwinssp.admsspExtralog[a.sspid].extralog && (k = mainwinssp.admsspExtralog[a.sspid].extralog)
        } catch (r) {}
        try {
            "undefined" != typeof a.sspid && mainwinssp.admsspExtralog && mainwinssp.admsspExtralog[a.sspid] && mainwinssp.admsspExtralog[a.sspid].extralog && (h += mainwinssp.admsspExtralog[a.sspid].extralog)
        } catch (r) {}
        try {
            "undefined" != typeof a.sspid && (h = h + "&sspz=" + encodeURIComponent(a.sspid + "")),
            "undefined" != typeof a.sspr && (h = h + "&sspr=" + encodeURIComponent(a.sspr + "")),
            "undefined" != typeof a.ctr && (h = h + "&ctr=" + encodeURIComponent(a.ctr + "")),
            "undefined" != typeof a.sspb && (h = h + "&sspb=" + encodeURIComponent(a.sspb + ""))
        } catch (r) {}
        a.extlog = k;
        a.extralog = h;
        var l = mainwinssp.document.getElementById("sspbid_" + a.sspid)
          , q = l.getAttribute("data-admssprqid")
          , p = "undefined" != typeof __ADMLocation ? __ADMLocation : l.getAttribute("data-location") || "";
        l.setAttribute("data-ssp", "sspbid_" + a.sspid);
        l.removeAttribute("style");
        var m = a.type;
        "0" == a.zoneid && (a.zoneid = "0_" + Math.floor(1E4 * Math.random()));
        var b = a.zoneid;
        t = a.zoneid;
        if ("cpd" == m)
            t = window.frameElement,
            t.width = a.data[0].width,
            t.height = a.data[0].height,
            document.write(a.data[0].html);
        else if ("cpdnew" == m) {
            var n = a.ext ? a.ext : {
                logo: 1
            };
            n.logo = 1;
            "undefined" != typeof a.data && "undefined" != typeof a.data[0] && "undefined" != typeof a.data[0].r && (a.data[0].r = 1E4);
            l.id = "adnzone_" + b;
            mainwinssp.window["adnzone" + b] = new mainwinssp.cpmzone(b);
            mainwinssp.window["adnzone" + b].format = a.format;
            n = {
                type: "7k",
                sspid: "undefined" != typeof a.sspid ? a.sspid : "",
                size: a.size,
                cpd: !0,
                adn: !0,
                is_db: 0,
                ext: n,
                extlog: k,
                extralog: h,
                df: [],
                admt: "admatic" == m ? !0 : !1,
                tradedeskid: "tradedesk" == m ? a.data[0].tradedeskid : 0,
                tradedesk: "tradedesk" == m ? !0 : !1,
                lst: a.data,
                rid: q,
                location: p
            };
            mainwinssp.window["adnzone" + b].show(n)
        } else if ("cpc" == m) {
            l.id = "ssvzone_" + b;
            var d = "https://" + ADMSTORAGE.js + "/core/cpc/" + a.formatname + ".js";
            mainwinssp._admloadJs(d, function() {
                try {
                    var r = new mainwinssp.AdmZones;
                    r.InitScript();
                    window.setTimeout(function() {
                        var f = {
                            DATA: {
                                104: a.data
                            },
                            ZONEID: b,
                            ext: a.ext || null,
                            extralog: h,
                            extlog: k,
                            location: p
                        };
                        if ("undefined" != typeof f.ZONEID && void 0 != window["__dmtb" + f.ZONEID] && null != window["__dmtb" + f.ZONEID] && "object" == typeof window["__dmtb" + f.ZONEID] && "object" == typeof window["__dmtb" + f.ZONEID][0] && "object" == typeof f) {
                            arrData104 = {};
                            var c = window["__dmtb" + f.ZONEID]
                              , u = 1
                              , y = [];
                            window["__dmtb" + f.ZONEID] = [0, 1];
                            for (var z = "undefined" == typeof window.__arCPCBL ? [] : __arCPCBL, g = 0, w = c.length; g < w; g++) {
                                var A = c[g].bid + "_" + ("undefined" == typeof c[g].eid ? 0 : c[g].eid);
                                "object" != typeof c[g] || ADS_CHECKER.in_array(A, z) || (c[g].r = "5",
                                c[g].l = "",
                                c[g].s = "",
                                c[g].la = "",
                                c[g].g = "",
                                c[g].ag = "",
                                delete c[g].url,
                                delete c[g].rank,
                                arrData104[u] = c[g],
                                y.push(c[g].bid),
                                u++)
                            }
                            c = "1";
                            "object" == typeof f.DATA && "object" == typeof f.DATA["104"] && (c = "104");
                            w = 6;
                            "" != ADS_CHECKER.getQuery("i") && (w = 18);
                            if ("object" == typeof f.DATA && "object" == typeof f.DATA[c] && u <= w)
                                for (g in f.DATA[c])
                                    if (ADS_CHECKER.in_array(f.DATA[c][g].bid, z) || ADS_CHECKER.in_array(f.DATA[c][g].bid, y) || (arrData104[u] = f.DATA[c][g],
                                    u++),
                                    u > w)
                                        break;
                            f.DATA = {};
                            f.DATA["104"] = arrData104
                        }
                        r.OnLoaded(f)
                    }, 1E3)
                } catch (f) {
                    0 == r.campaignAvaiLen && (document.getElementById("ssvzone_" + b).style.display = "none")
                }
            })
        } else if ("tvc_adx" == m) {
            l.id = "iplayzone_" + b + "_" + a.sspid;
            var e = {
                NORMAL: a.data,
                ZONEID: b,
                SSPID: a.sspid,
                rid: q,
                format: a.format,
                location: p,
                extlog: k,
                extralog: h
            };
            "undefined" == typeof a.format || 5 != a.format && 12 != a.format ? (d = "https://" + ADMSTORAGE.js + "/core/iplay-ssp_adx.js",
            mainwinssp._admloadJs(d, function() {
                mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"] = new mainwinssp.IPLAYZones;
                mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"].OnLoaded(e)
            })) : (d = "https://" + ADMSTORAGE.js + "/core/iplay-mutex-ssp.js",
            "undefined" == typeof mainwinssp.IPLAYMutexZones && mainwinssp._admloadJs(d, function() {
                mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"] = new mainwinssp.IPLAYMutexZones;
                mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"].OnLoaded(e)
            }))
        } else if ("tvc_adx_new" == m)
            l.id = "iplayzone_" + b + "_" + a.sspid,
            e = {
                NORMAL: a.data,
                ZONEID: b,
                SSPID: a.sspid,
                rid: q,
                format: a.format,
                location: p,
                extlog: k,
                extralog: h
            },
            "undefined" == typeof a.format || 5 != a.format && 12 != a.format ? (d = "https://" + ADMSTORAGE.js + "/core/iplay-ssp_adx.js",
            mainwinssp._admloadJs(d, function() {
                mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"] = new mainwinssp.IPLAYZones;
                mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"].OnLoaded(e)
            })) : (d = "https://" + ADMSTORAGE.js + "/core/iplay-mutex-ssp.js",
            mainwinssp._admloadJs(d, function() {
                mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"] = new mainwinssp.IPLAYMutexZones;
                mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"].OnLoaded(e)
            }));
        else if ("tvc_iplay" == m)
            l.id = "iplayzone_" + b + "_" + a.sspid,
            n = a.ext ? a.ext : {
                logo: 0
            },
            e = {
                NORMAL: a.data,
                ZONEID: b,
                SSPID: a.sspid,
                rid: q,
                format: a.format,
                ext: n,
                location: p,
                extlog: k,
                extralog: h
            },
            "undefined" == typeof a.format || 5 != a.format && 12 != a.format ? (d = "https://" + ADMSTORAGE.js + "/core/iplay-ssp.js",
            "undefined" == typeof mainwinssp.IPLAYZones ? mainwinssp._admloadJs(d, function() {
                mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"] = new mainwinssp.IPLAYZones;
                mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"].OnLoaded(e)
            }) : (mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"] = new mainwinssp.IPLAYZones,
            mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"].OnLoaded(e))) : (d = "https://" + ADMSTORAGE.js + "/core/iplay-mutex-ssp.js",
            "undefined" == typeof mainwinssp.IPLAYMutexZones ? mainwinssp._admloadJs(d, function() {
                mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"] = new mainwinssp.IPLAYMutexZones;
                mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"].OnLoaded(e)
            }) : (mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"] = new mainwinssp.IPLAYMutexZones,
            mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"].OnLoaded(e)));
        else if ("brandpage" == m) {
            l.id = "brandzone_" + b + "_" + a.sspid;
            n = a.ext ? a.ext : {
                logo: 0
            };
            var E = {
                NORMAL: a.data,
                ZONEID: b,
                SSPID: a.sspid,
                format: a.format,
                rid: q,
                ext: n,
                location: p,
                extlog: k,
                extralog: h
            };
            d = "https://" + ADMSTORAGE.js + "/core/boxapp/sponsor/brand-page.js";
            mainwinssp._admloadJs(d, function() {
                mainwinssp.window["brandzone_" + b + "_" + a.sspid + "format"] = new mainwinssp.BrandPageZone;
                mainwinssp.window["brandzone_" + b + "_" + a.sspid + "format"].OnLoaded(E)
            })
        } else if ("tvc_sticky" == m)
            l.id = "tvcvzone",
            n = a.ext ? a.ext : {
                logo: 0
            },
            e = {
                NORMAL: a.data,
                ZONEID: b,
                SSPID: a.sspid,
                rid: q,
                ext: n,
                location: p,
                extlog: k,
                extralog: h
            },
            d = "https://" + ADMSTORAGE.js + "/core/tvcsticky_ssp.js",
            mainwinssp._admloadJs(d, function() {
                mainwinssp.window["tvcvzone_" + b + "format"] = new mainwinssp.TVCVZones;
                mainwinssp.window["tvcvzone_" + b + "format"].OnLoaded(e)
            });
        else if ("hookeye_kingsize" == m)
            n = a.ext ? a.ext : {
                logo: 0
            },
            e = {
                NORMAL: a.data,
                ZONEID: b,
                SSPID: a.sspid,
                rid: q,
                ext: n,
                location: p,
                extlog: k,
                extralog: h
            },
            "undefined" != typeof a.format && 4 == a.format ? parent.window["cpmhezone_" + b] || (l.id = "cpmhezone_" + b,
            d = "https://" + ADMSTORAGE.js + "/core/cpm_hookeye_hot_ssp.js",
            mainwinssp._admloadJs(d, function() {
                mainwinssp.window["cpmhezone_" + b + "format"] = new mainwinssp.CPMHeHot;
                mainwinssp.window["cpmhezone_" + b + "format"].OnLoaded(e)
            })) : "undefined" != typeof a.format && 5 == a.format ? (l.id = "cpmhezone_" + b + "_" + a.sspid,
            d = "https://" + ADMSTORAGE.js + "/core/cpm_hookeye_stick_ssp.js",
            mainwinssp._admloadJs(d, function() {
                mainwinssp.window["cpmhezone_" + b + "format"] = new mainwinssp.CPMHeStick;
                mainwinssp.window["cpmhezone_" + b + "format"].OnLoaded(e)
            })) : "undefined" == typeof mainwinssp.InImageZones ? (l.id = "cpmhezone_" + b,
            d = "https://" + ADMSTORAGE.js + "/core/in-image.js",
            mainwinssp._admloadJs(d, function() {
                mainwinssp.window["nativezone_" + b + "_" + a.sspid + "format"] = new mainwinssp.InImageZones;
                mainwinssp.window["nativezone_" + b + "_" + a.sspid + "format"].OnLoaded(e)
            })) : "function" == typeof mainwinssp.nativeAd && (mainwinssp.window["nativezone_" + b + "_" + a.sspid + "format"] = new mainwinssp.InImageZones,
            mainwinssp.window["nativezone_" + b + "_" + a.sspid + "format"].OnLoaded(e));
        else if ("balloon_titanium" == m)
            if (l.id = "cpmzone_" + b + "_" + a.sspid,
            n = a.ext ? a.ext : {
                logo: 1
            },
            e = {
                NORMAL: a.data,
                ZONEID: b,
                SSPID: a.sspid,
                rid: q,
                ext: n,
                location: p,
                extlog: k,
                extralog: h
            },
            "undefined" == typeof a.format || 5 != a.format && 50 != a.format) {
                if ("undefined" == typeof a.format || 4 != a.format && 40 != a.format)
                    return !1;
                d = "https://" + ADMSTORAGE.js + "/core/banner-rick-topsync-ssp.js";
                "undefined" == typeof mainwinssp.TVCPZonesTopSync ? mainwinssp._admloadJs(d, function() {
                    mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"] = new mainwinssp.TVCPZonesTopSync;
                    mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"].OnLoaded(e)
                }) : (mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"] = new mainwinssp.TVCPZonesTopSync,
                mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"].OnLoaded(e))
            } else
                d = "https://" + ADMSTORAGE.js + "/core/banner-rick-hotsync-ssp.js",
                "undefined" == typeof mainwinssp.TVCPZonesHotSync ? mainwinssp._admloadJs(d, function() {
                    mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"] = new mainwinssp.TVCPZonesHotSync;
                    mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"].OnLoaded(e)
                }) : (mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"] = new mainwinssp.TVCPZonesHotSync,
                mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"].OnLoaded(e));
        else if ("balloon" == m) {
            try {
                if ("undefined" != typeof mainwinssp.balloon_cpd && !0 === mainwinssp.balloon_cpd)
                    return !0
            } catch (r) {}
            n = a.ext ? a.ext : {
                logo: 0
            };
            l.id = "tvcpzone";
            e = {
                NORMAL: a.data,
                ZONEID: b,
                TYPE: a.format,
                SSPID: a.sspid,
                rid: q,
                ext: n,
                location: p,
                extlog: k,
                extralog: h
            };
            "undefined" == typeof TVCPZones ? mainwinssp._admloadJs("https://" + ADMSTORAGE.js + "/core/balloon-ssp.js", function() {
                mainwinssp.window["bazone_" + b + "format"] = new mainwinssp.TVCPZones;
                mainwinssp.window["bazone_" + b + "format"].OnLoaded(e)
            }) : (mainwinssp.window["bazone_" + b + "format"] = new mainwinssp.TVCPZones,
            mainwinssp.window["bazone_" + b + "format"].OnLoaded(e))
        } else if ("nativeads" == m) {
            var v = a.data;
            try {
                48 == v[0].formatid || 49 == v[0].formatid ? (l.id = "boxnativezone_" + b + "_" + a.sspid,
                "undefined" == typeof mainwinssp.boxNative || "function" != typeof mainwinssp.boxNative ? mainwinssp._admloadJs("https://" + ADMSTORAGE.js + "/core/boxapp/boxnative/boxNative.js", function() {
                    mainwinssp.window["boxnativezone" + b] = new mainwinssp.boxNative(a)
                }) : mainwinssp.window["boxnativezone" + b] = new mainwinssp.boxNative(a)) : (l.id = "nativezone_" + b + "_" + a.sspid,
                n = a.ext ? a.ext : {
                    logo: 0
                },
                e = {
                    NORMAL: a.data,
                    ZONEID: b,
                    SSPID: a.sspid,
                    rid: q,
                    ext: n,
                    location: p,
                    extlog: k,
                    extralog: h
                },
                "undefined" == typeof mainwinssp.nativeAd ? (d = "https://" + ADMSTORAGE.js + "/core/native-ad.js",
                mainwinssp._admloadJs(d, function() {
                    mainwinssp.window["nativezone_" + b + "_" + a.sspid + "format"] = new mainwinssp.nativeAd;
                    mainwinssp.window["nativezone_" + b + "_" + a.sspid + "format"].OnLoaded(e)
                })) : "function" == typeof mainwinssp.nativeAd && (mainwinssp.window["nativezone_" + b + "_" + a.sspid + "format"] = new mainwinssp.nativeAd,
                mainwinssp.window["nativezone_" + b + "_" + a.sspid + "format"].OnLoaded(e)))
            } catch (r) {
                console.log(r.message)
            }
        } else if ("viewplus" == m)
            l.id = "sponsorzone_" + b,
            d = "https://" + ADMSTORAGE.js + "/core/viewplus/" + a.formatname + ".js",
            mainwinssp._admloadJs(d, function() {
                try {
                    var r = new mainwinssp.AdmZones_sponsorzone;
                    r.InitScript();
                    window.setTimeout(function() {
                        var f = {
                            DATA: {
                                1: a.data
                            },
                            ZONEID: b,
                            SSPID: a.sspid,
                            rid: q,
                            location: p,
                            extlog: k,
                            extralog: h
                        };
                        if ("undefined" != typeof f.ZONEID && void 0 != window["__dmtb" + f.ZONEID] && null != window["__dmtb" + f.ZONEID] && "object" == typeof window["__dmtb" + f.ZONEID] && "object" == typeof window["__dmtb" + f.ZONEID][0] && "object" == typeof f) {
                            arrData1 = {};
                            var c = window["__dmtb" + f.ZONEID]
                              , u = 1
                              , y = [];
                            window["__dmtb" + f.ZONEID] = [0, 1];
                            for (var z = "undefined" == typeof window.__arCPCBL ? [] : __arCPCBL, g = 0, w = c.length; g < w; g++) {
                                var A = c[g].bid + "_" + ("undefined" == typeof c[g].eid ? 0 : c[g].eid);
                                "object" != typeof c[g] || ADS_CHECKER.in_array(A, z) || (c[g].r = "5",
                                c[g].l = "",
                                c[g].s = "",
                                c[g].la = "",
                                c[g].g = "",
                                c[g].ag = "",
                                delete c[g].url,
                                delete c[g].rank,
                                arrData1[u] = c[g],
                                y.push(c[g].bid),
                                u++)
                            }
                            c = "1";
                            "object" == typeof f.DATA && "object" == typeof f.DATA["1"] && (c = "1");
                            w = 6;
                            "" != ADS_CHECKER.getQuery("i") && (w = 18);
                            if ("object" == typeof f.DATA && "object" == typeof f.DATA[c] && u <= w)
                                for (g in f.DATA[c])
                                    if (ADS_CHECKER.in_array(f.DATA[c][g].bid, z) || ADS_CHECKER.in_array(f.DATA[c][g].bid, y) || (arrData1[u] = f.DATA[c][g],
                                    u++),
                                    u > w)
                                        break;
                            f.DATA = {};
                            f.DATA["1"] = arrData1
                        }
                        r.OnLoaded(f)
                    }, 1E3)
                } catch (f) {
                    0 == r.campaignAvaiLen && (document.getElementById("sponsorzone_" + b).style.display = "none")
                }
            });
        else if ("adx" == m || "admatic" == m || "tradedesk" == m) {
            n = a.ext ? a.ext : null;
            if ("admatic" == m) {
                v = a.data;
                try {
                    if ("undefined" != typeof v[0].type && "sponsor_admatic" == v[0].type) {
                        var x = "sps_" + b + "_" + a.sspid;
                        l.id = x;
                        a.el = x;
                        a.extralog = h;
                        a.location = p;
                        "function" == typeof sponsorAd ? mainwinssp.window["sps_" + b] = new mainwinssp.sponsorAd(a) : mainwinssp._admloadJs("https://" + ADMSTORAGE.js + "/core/boxapp/sponsor/sponsorAd.js", function() {
                            mainwinssp.window["sps_" + b] = new mainwinssp.sponsorAd(a)
                        });
                        return !1
                    }
                    if ("undefined" != typeof v[0].type && "balloon" == v[0].type) {
                        try {
                            if ("undefined" != typeof mainwinssp.balloon_cpd && !0 === mainwinssp.balloon_cpd)
                                return !0
                        } catch (r) {}
                        l.id = "tvcpzone";
                        e = {
                            NORMAL: a.data,
                            ZONEID: b,
                            TYPE: a.format,
                            SSPID: a.sspid,
                            rid: q,
                            ext: n,
                            location: p,
                            extlog: k,
                            extralog: h
                        };
                        "undefined" == typeof TVCPZones ? mainwinssp._admloadJs("https://" + ADMSTORAGE.js + "/core/balloon-ssp.js", function() {
                            mainwinssp.window["bazone_" + b + "format"] = new mainwinssp.TVCPZones;
                            mainwinssp.window["bazone_" + b + "format"].OnLoaded(e)
                        }) : (mainwinssp.window["bazone_" + b + "format"] = new mainwinssp.TVCPZones,
                        mainwinssp.window["bazone_" + b + "format"].OnLoaded(e));
                        return !1
                    }
                    if ("undefined" != typeof v[0].type && "itvc_admatic" == v[0].type)
                        return l.id = "iplayzone_" + b + "_" + a.sspid,
                        e = {
                            NORMAL: a.data,
                            ZONEID: b,
                            SSPID: a.sspid,
                            rid: q,
                            format: a.format,
                            ext: n,
                            location: p,
                            extlog: k,
                            extralog: h
                        },
                        "undefined" == typeof a.format || 5 != a.format && 12 != a.format ? (d = "https://" + ADMSTORAGE.js + "/core/iplay-ssp.js",
                        mainwinssp._admloadJs(d, function() {
                            mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"] = new mainwinssp.IPLAYZones;
                            mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"].OnLoaded(e)
                        })) : (d = "https://" + ADMSTORAGE.js + "/core/iplay-mutex-ssp.js",
                        mainwinssp._admloadJs(d, function() {
                            mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"] = new mainwinssp.IPLAYMutexZones;
                            mainwinssp.window["iplayzone_" + b + "_" + a.sspid + "format"].OnLoaded(e)
                        })),
                        !1;
                    if ("undefined" != typeof v[0].type && "admatic_nativeads" == v[0].type)
                        return l.id = "nativezone_" + b + "_" + a.sspid,
                        e = {
                            NORMAL: a.data,
                            ZONEID: b,
                            SSPID: a.sspid,
                            rid: q,
                            ext: n,
                            location: p,
                            extlog: k,
                            extralog: h
                        },
                        "undefined" == typeof mainwinssp.nativeAd ? (d = "https://" + ADMSTORAGE.js + "/core/native-ad.js",
                        mainwinssp._admloadJs(d, function() {
                            mainwinssp.window["nativezone_" + b + "_" + a.sspid + "format"] = new mainwinssp.nativeAd;
                            mainwinssp.window["nativezone_" + b + "_" + a.sspid + "format"].OnLoaded(e)
                        })) : "function" == typeof mainwinssp.nativeAd && (mainwinssp.window["nativezone_" + b + "_" + a.sspid + "format"] = new mainwinssp.nativeAd,
                        mainwinssp.window["nativezone_" + b + "_" + a.sspid + "format"].OnLoaded(e)),
                        !1;
                    if ("undefined" != typeof v[0].type && "fullpage_admatic" == v[0].type)
                        return l.id = "cpmzone_" + b + "_" + a.sspid,
                        e = {
                            NORMAL: a.data,
                            ZONEID: b,
                            SSPID: a.sspid,
                            rid: q,
                            ext: n,
                            location: p,
                            extlog: k,
                            extralog: h
                        },
                        "undefined" != typeof a.format && 5 == a.format ? (d = "https://" + ADMSTORAGE.js + "/core/banner-rick-hotsync-ssp.js",
                        "undefined" == typeof mainwinssp.TVCPZonesHotSync ? mainwinssp._admloadJs(d, function() {
                            mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"] = new mainwinssp.TVCPZonesHotSync;
                            mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"].OnLoaded(e)
                        }) : (mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"] = new mainwinssp.TVCPZonesHotSync,
                        mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"].OnLoaded(e))) : "undefined" != typeof a.format && 4 == a.format && (d = "https://" + ADMSTORAGE.js + "/core/banner-rick-topsync-ssp.js",
                        "undefined" == typeof mainwinssp.TVCPZonesTopSync ? mainwinssp._admloadJs(d, function() {
                            mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"] = new mainwinssp.TVCPZonesTopSync;
                            mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"].OnLoaded(e)
                        }) : (mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"] = new mainwinssp.TVCPZonesTopSync,
                        mainwinssp.window["titanium_" + b + "_" + a.sspid + "format"].OnLoaded(e))),
                        !1
                } catch (r) {}
            }
            try {
                var B = document.domain + "";
                if (-1 != B.indexOf("laodong.vn") || -1 != B.indexOf("demo.admicro.vn"))
                    b = Math.floor(1E8 * Math.random())
            } catch (r) {}
            "undefined" != typeof a.data && "undefined" != typeof a.data[0] && "undefined" != typeof a.data[0].r && (a.data[0].r = 1E4);
            l.id = "adnzone_" + b;
            mainwinssp.window["adnzone" + b] = new mainwinssp.cpmzone(b);
            mainwinssp.window["adnzone" + b].format = a.format;
            n = {
                type: "7k",
                zidlog: t,
                sspid: "undefined" != typeof a.sspid ? a.sspid : "",
                size: a.size,
                format: a.format,
                adn: !0,
                is_db: 0,
                ext: n,
                extlog: k,
                extralog: h,
                df: [],
                admt: "admatic" == m ? !0 : !1,
                tradedeskid: "tradedesk" == m ? a.data[0].tradedeskid : 0,
                tradedesk: "tradedesk" == m ? !0 : !1,
                lst: a.data,
                SSPID: a.sspid,
                rid: q,
                location: p
            };
            mainwinssp.window["adnzone" + b].zidlog = t;
            mainwinssp.window["adnzone" + b].show(n)
        } else if ("boxapp" == m) {
            var C = "appzone_" + b + "_" + a.sspid;
            l.id = C;
            "300x600" == a.size && mainwinssp._admloadJs("https://" + ADMSTORAGE.js + "/core/boxapp/300x600/AdmBoxapp300x600.js", function() {
                a.NORMAL = {};
                a.ZONEID = b;
                a.location = p;
                mainwinssp.window["boxappzone" + b] = new mainwinssp.AdmBoxapp300x600(a,C)
            })
        } else if ("boxapp_microcontent_pc" == m) {
            var D = "appzone_" + b + "_" + a.sspid;
            l.id = D;
            mainwinssp._admloadJs("https://" + ADMSTORAGE.js + "/core/boxapp/microcontent/AdmMicroContent.js", function() {
                a.NORMAL = {};
                a.ZONEID = b;
                mainwinssp.window["boxappzone" + b] = new mainwinssp.AdmMicroContent(a,D)
            })
        } else
            "ecomx" == m ? (l.id = "adxzone_" + b,
            d = "https://demo.admicro.vn/buildboxtuthuoc/testFormat300new.js",
            mainwinssp._admloadJs(d, function() {
                mainwinssp.window[a.formatname + "_" + b] = new mainwinssp.AdmZones_adxzone;
                mainwinssp.window[a.formatname + "_" + b].OnLoaded({
                    formatName: a.formatname,
                    ZONEID: b,
                    sspid: "undefined" != typeof a.sspid ? a.sspid : "",
                    type: "adx",
                    size: a.size,
                    extralog: h,
                    extlog: k,
                    adn: !0,
                    is_db: 0,
                    ext: a.ext ? a.ext : null,
                    df: a.data,
                    SSPID: a.sspid,
                    rid: q,
                    data: a,
                    location: p
                })
            })) : "kingsize" == m ? (n = a.ext ? a.ext : null,
            l.id = "cpmzone_" + b,
            mainwinssp.window["cpmzone" + b] = new mainwinssp.cpmzone(b),
            n = {
                type: "7k",
                sspid: "undefined" != typeof a.sspid ? a.sspid : "",
                size: a.size,
                is_db: 0,
                ext: n,
                extralog: h,
                extlog: k,
                df: [],
                admt: "admatic" == m ? !0 : !1,
                lst: a.data,
                SSPID: a.sspid,
                rid: q,
                location: p
            },
            mainwinssp.window["cpmzone" + b].show(n)) : "sponsor_booking" == m ? (x = "sps_" + b + "_" + a.sspid,
            l.id = x,
            a.el = x,
            a.extralog = h,
            a.location = p,
            "function" == typeof sponsorAd ? mainwinssp.window["sps_" + b] = new mainwinssp.sponsorAd(a) : mainwinssp._admloadJs("https://" + ADMSTORAGE.js + "/core/boxapp/sponsor/sponsorAd.js", function() {
                mainwinssp.window["sps_" + b] = new mainwinssp.sponsorAd(a)
            })) : "lotus_nativead" == m ? (x = "lotus_nativead_" + b,
            l.id = x,
            a.el = x,
            a.extralog = h,
            a.location = p,
            "function" == typeof lotus_nativead ? mainwinssp.window["lotus_nativead" + b] = new mainwinssp.lotus_nativead(a) : mainwinssp._admloadJs("https://" + ADMSTORAGE.js + "/core/lotus_nativead.js", function() {
                mainwinssp.window["lotus_nativead" + b] = new mainwinssp.lotus_nativead(a)
            })) : "lotus_shopchat" == m && (x = "lotus_shopchat_" + b,
            l.id = x,
            a.el = x,
            a.extralog = h,
            a.location = p,
            "function" == typeof lotus_shopchat ? mainwinssp.window["lotus_shopchat" + b] = new mainwinssp.lotus_nativead(a) : mainwinssp._admloadJs("https://" + ADMSTORAGE.js + "/core/lotus_shopchat.js", function() {
                mainwinssp.window["lotus_shopchat" + b] = new mainwinssp.lotus_shopchat(a)
            }))
    }
}
;