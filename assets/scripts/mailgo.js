window.mailgo = (function (e) {
    var t = {};
    function a(o) {
        if (t[o]) return t[o].exports;
        var n = (t[o] = { i: o, l: !1, exports: {} });
        return e[o].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
    }
    return (
        (a.m = e),
        (a.c = t),
        (a.d = function (e, t, o) {
            a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
        }),
        (a.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (a.t = function (e, t) {
            if ((1 & t && (e = a(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if ((a.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var n in e)
                    a.d(
                        o,
                        n,
                        function (t) {
                            return e[t];
                        }.bind(null, n)
                    );
            return o;
        }),
        (a.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return a.d(t, "a", t), t;
        }),
        (a.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (a.p = ""),
        a((a.s = 4))
    );
})([
    function (e) {
        e.exports = JSON.parse(
            '{"languages":["en","it","es","de","fr","pt","nl","ru"],"translations":{"en":{"open_in_":"open in ","cc_":"cc ","bcc_":"bcc ","subject_":"subject ","body_":"body ","gmail":"Gmail","outlook":"Outlook","telegram":"Telegram","whatsapp":"WhatsApp","skype":"Skype","call":"call","open":"open","_default":" default","_as_default":" as default","copy":"copy"},"it":{"open_in_":"apri con ","bcc_":"ccn ","subject_":"oggetto ","body_":"testo ","call":"chiama","open":"apri","_default":" ","_as_default":" ","copy":"copia"},"es":{"open_in_":"abrir con ","bcc_":"cco ","subject_":"asunto ","body_":"cuerpo ","call":"llamar","open":"abrir","_default":" predefinido","_as_default":" por defecto","copy":"copiar"},"de":{"open_in_":"Öffnen in ","subject_":"Betreff ","body_":"Nachricht ","call":"Anrufen","open":"Öffnen","_default":" mit Standard","_as_default":" mit Standard","copy":"kopieren"},"pt":{"open_in_":"abrir com ","bcc_":"cco ","subject_":"assunto ","body_":"corpo ","call":"ligar","open":"abrir","_default":" padrão","_as_default":" por padrão","copy":"copiar"},"fr":{"open_in_":"Ouvrir dans ","bcc_":"cci ","subject_":"sujet ","body_":"contenu ","call":"Appeler","open":"Ouvrir","_default":" par défaut","_as_default":" par défaut","copy":"Copier"},"nl":{"subject_":"onderwerp ","body_":"bericht ","call":"bellen","open":"openen","_default":" standaard","_as_default":" als standaard","copy":"kopiëren"},"ru":{"open_in_":"открыть в ","subject_":"тема ","body_":"тело ","call":"позвонить","open":"открыть","_default":" по умолчанию","_as_default":" по умолчанию","copy":"скопировать"}}}'
        );
    },
    function (e, t, a) {
        var o = a(2);
        e.exports = "string" == typeof o ? o : o.toString();
    },
    function (e, t, a) {
        var o = a(3)(!1);
        o.push([
            e.i,
            '.m-modal{position:fixed;top:0;right:0;bottom:0;left:0;justify-content:center;align-items:center;flex-direction:column;overflow:hidden;font-size:16.5px;z-index:10000}.m-modal p,.m-modal span,.m-modal strong,.m-modal a{margin:0;padding:0;font-size:100%;line-height:1;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";text-rendering:optimizeLegibility}.m-modal strong{font-weight:700}.m-modal .m-modal-back{position:absolute;z-index:10001;top:0;right:0;bottom:0;left:0;background-color:#20232a;opacity:0.8}.m-modal .m-modal-content{position:relative;z-index:10002;box-sizing:content-box;text-align:center;min-width:200px;max-width:240px;background-color:#fff;opacity:0.95;border-radius:20px;box-shadow:0 3px 20px rgba(32,35,42,0.5);color:#4a4a4a;display:flex;flex-direction:column;overflow:auto;padding:24px;transition:0.5s box-shadow}.m-modal .m-modal-content:hover,.m-modal .m-modal-content:focus,.m-modal .m-modal-content:active{opacity:1}.m-modal .m-modal-content .m-title{margin-bottom:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:1.2em}.m-modal .m-modal-content .m-details{margin-bottom:10px}.m-modal .m-modal-content .m-details p{font-size:12px;margin-top:3px;margin-bottom:3px}.m-modal .m-modal-content a{cursor:pointer;padding:10px;color:#4a4a4a;border-radius:20px;text-decoration:none}.m-modal .m-modal-content a.m-gmail{color:#d44638}.m-modal .m-modal-content a.m-gmail:hover,.m-modal .m-modal-content a.m-gmail:focus,.m-modal .m-modal-content a.m-gmail:active{background-color:rgba(212,70,56,0.08);color:#d44638}.m-modal .m-modal-content a.m-outlook{color:#0072c6}.m-modal .m-modal-content a.m-outlook:hover,.m-modal .m-modal-content a.m-outlook:focus,.m-modal .m-modal-content a.m-outlook:active{background-color:rgba(0,114,198,0.08);color:#0072c6}.m-modal .m-modal-content a.m-tg{color:#08c}.m-modal .m-modal-content a.m-tg:hover,.m-modal .m-modal-content a.m-tg:focus,.m-modal .m-modal-content a.m-tg:active{background-color:rgba(0,136,204,0.08);color:#08c}.m-modal .m-modal-content a.m-wa{color:#00bfa5}.m-modal .m-modal-content a.m-wa:hover,.m-modal .m-modal-content a.m-wa:focus,.m-modal .m-modal-content a.m-wa:active{background-color:rgba(0,191,165,0.08);color:#00bfa5}.m-modal .m-modal-content a.m-skype{color:#00aff0}.m-modal .m-modal-content a.m-skype:hover,.m-modal .m-modal-content a.m-skype:focus,.m-modal .m-modal-content a.m-skype:active{background-color:rgba(0,175,240,0.08);color:#00aff0}.m-modal .m-modal-content a.m-copy{padding:16px 10px;font-size:16px}.m-modal .m-modal-content a.m-default:hover,.m-modal .m-modal-content a.m-default:focus,.m-modal .m-modal-content a.m-default:active,.m-modal .m-modal-content a.m-copy:hover,.m-modal .m-modal-content a.m-copy:focus,.m-modal .m-modal-content a.m-copy:active{background-color:rgba(0,0,0,0.08);color:#4a4a4a}.m-modal .m-modal-content a.m-by{font-size:12px;margin-top:0.8rem;padding:5px;color:#4a4a4a}.m-modal .m-modal-content a.m-by:hover,.m-modal .m-modal-content a.m-by:focus,.m-modal .m-modal-content a.m-by:active{color:#3d3d3d}.m-modal .m-modal-content .w-500{font-weight:500}.m-modal.m-dark .m-modal-content{background-color:#20232a}.m-modal.m-dark .m-modal-content,.m-modal.m-dark .m-modal-content p,.m-modal.m-dark .m-modal-content p span,.m-modal.m-dark .m-modal-content strong{color:#fff}.m-modal.m-dark .m-modal-content a{color:#eaeaea}.m-modal.m-dark .m-modal-content a:not(.m-by):hover,.m-modal.m-dark .m-modal-content a:not(.m-by):focus,.m-modal.m-dark .m-modal-content a:not(.m-by):active{background-color:rgba(134,134,134,0.08);color:#eaeaea}.m-modal.m-dark .m-modal-content a.m-gmail{color:#e07d73}.m-modal.m-dark .m-modal-content a.m-gmail:hover,.m-modal.m-dark .m-modal-content a.m-gmail:focus,.m-modal.m-dark .m-modal-content a.m-gmail:active{background-color:rgba(212,70,56,0.08);color:#e07d73}.m-modal.m-dark .m-modal-content a.m-outlook{color:#4c9cd7}.m-modal.m-dark .m-modal-content a.m-outlook:hover,.m-modal.m-dark .m-modal-content a.m-outlook:focus,.m-modal.m-dark .m-modal-content a.m-outlook:active{background-color:rgba(0,114,198,0.08);color:#4c9cd7}.m-modal.m-dark .m-modal-content a.m-tg{color:#4cabdb}.m-modal.m-dark .m-modal-content a.m-tg:hover,.m-modal.m-dark .m-modal-content a.m-tg:focus,.m-modal.m-dark .m-modal-content a.m-tg:active{background-color:rgba(0,136,204,0.08);color:#4cabdb}.m-modal.m-dark .m-modal-content a.m-wa{color:#4cd2c0}.m-modal.m-dark .m-modal-content a.m-wa:hover,.m-modal.m-dark .m-modal-content a.m-wa:focus,.m-modal.m-dark .m-modal-content a.m-wa:active{background-color:rgba(0,191,165,0.08);color:#4cd2c0}.m-modal.m-dark .m-modal-content a.m-skype{color:#4cc7f4}.m-modal.m-dark .m-modal-content a.m-skype:hover,.m-modal.m-dark .m-modal-content a.m-skype:focus,.m-modal.m-dark .m-modal-content a.m-skype:active{background-color:rgba(0,175,240,0.08);color:#4cc7f4}.m-modal.m-dark .m-modal-content a.m-by:hover,.m-modal.m-dark .m-modal-content a.m-by:focus,.m-modal.m-dark .m-modal-content a.m-by:active{color:#fff}\n',
            "",
        ]),
            (e.exports = o);
    },
    function (e, t, a) {
        "use strict";
        e.exports = function (e) {
            var t = [];
            return (
                (t.toString = function () {
                    return this.map(function (t) {
                        var a = (function (e, t) {
                            var a = e[1] || "",
                                o = e[3];
                            if (!o) return a;
                            if (t && "function" == typeof btoa) {
                                var n = ((l = o), (i = btoa(unescape(encodeURIComponent(JSON.stringify(l))))), (m = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i)), "/*# ".concat(m, " */")),
                                    d = o.sources.map(function (e) {
                                        return "/*# sourceURL=".concat(o.sourceRoot || "").concat(e, " */");
                                    });
                                return [a].concat(d).concat([n]).join("\n");
                            }
                            var l, i, m;
                            return [a].join("\n");
                        })(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(a, "}") : a;
                    }).join("");
                }),
                (t.i = function (e, a, o) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var n = {};
                    if (o)
                        for (var d = 0; d < this.length; d++) {
                            var l = this[d][0];
                            null != l && (n[l] = !0);
                        }
                    for (var i = 0; i < e.length; i++) {
                        var m = [].concat(e[i]);
                        (o && n[m[0]]) || (a && (m[2] ? (m[2] = "".concat(a, " and ").concat(m[2])) : (m[2] = a)), t.push(m));
                    }
                }),
                t
            );
        };
    },
    function (e, t, a) {
        "use strict";
        function o(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t &&
                    (o = o.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    a.push.apply(a, o);
            }
            return a;
        }
        function n(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? o(Object(a), !0).forEach(function (t) {
                          d(e, t, a[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                    : o(Object(a)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                      });
            }
            return e;
        }
        function d(e, t, a) {
            return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
        }
        a.r(t);
        var l,
            i,
            m,
            c,
            r,
            s,
            p,
            u,
            f,
            b,
            v,
            g,
            h,
            y,
            k,
            _,
            w,
            C,
            L,
            x,
            j,
            A,
            E,
            O = a(0),
            S = a(1).toString(),
            N = "mailto:",
            R = "tel:",
            P = "callto:",
            U = "javascript:void(0);",
            I = "en",
            M = "",
            T = "",
            z = "",
            D = "",
            W = "",
            H = "",
            F = "",
            q = "",
            B = "",
            J = function () {
                var e,
                    t,
                    a = O.translations;
                if (((null === (e = l) || void 0 === e ? void 0 : e.lang) && -1 !== O.languages.indexOf(l.lang) && (I = l.lang), !(null === (t = l) || void 0 === t ? void 0 : t.forceLang))) {
                    var o = document.documentElement.lang;
                    -1 !== O.languages.indexOf(o) && (I = document.documentElement.lang);
                }
                var n,
                    d,
                    y,
                    S = a.en,
                    N = a[I];
                ((i = me()).style.display = "none"),
                    (i.id = "mailgo"),
                    i.classList.add("m-modal"),
                    i.setAttribute("role", "dialog"),
                    i.setAttribute("tabindex", "-1"),
                    i.setAttribute("aria-labelledby", "m-title"),
                    (null === (n = l) || void 0 === n ? void 0 : n.dark) ? he("mail") : ye("mail");
                var R = me();
                (R.className = "m-modal-back"), i.appendChild(R);
                var P = me();
                (P.className = "m-modal-content"), i.appendChild(P), ((c = me("strong")).id = "m-title"), (c.className = "m-title"), P.appendChild(c);
                var M = me();
                (M.id = "m-details"), (M.className = "m-details"), ((s = me("p")).id = "m-cc");
                var T = me("span");
                (T.className = "w-500"), T.appendChild(ce(N.cc_ || S.cc_)), ((b = me("span")).id = "m-cc-value"), s.appendChild(T), s.appendChild(b), M.appendChild(s), ((p = me("p")).id = "m-bcc");
                var z = me("span");
                (z.className = "w-500"), z.appendChild(ce(N.bcc_ || S.bcc_)), ((v = me("span")).id = "m-bcc-value"), p.appendChild(z), p.appendChild(v), M.appendChild(p), ((u = me("p")).id = "m-subject");
                var D = me("span");
                (D.className = "w-500"), D.appendChild(ce(N.subject_ || S.subject_)), ((g = me("span")).id = "m-subject-value"), u.appendChild(D), u.appendChild(g), M.appendChild(u), ((f = me("p")).id = "m-body");
                var W = me("span");
                (W.className = "w-500"),
                    W.appendChild(ce(N.body_ || S.body_)),
                    ((h = me("span")).id = "m-body-value"),
                    f.appendChild(W),
                    f.appendChild(h),
                    M.appendChild(f),
                    P.appendChild(M),
                    ((k = me("a")).id = "m-gmail"),
                    (k.href = U),
                    k.classList.add("m-open"),
                    k.classList.add("m-gmail"),
                    k.appendChild(ce(N.open_in_ || S.open_in_));
                var H = me("span");
                (H.className = "w-500"),
                    H.appendChild(ce(N.gmail || S.gmail)),
                    k.appendChild(H),
                    P.appendChild(k),
                    ((_ = me("a")).id = "m-outlook"),
                    (_.href = U),
                    _.classList.add("m-open"),
                    _.classList.add("m-outlook"),
                    _.appendChild(ce(N.open_in_ || S.open_in_));
                var F = me("span");
                (F.className = "w-500"), F.appendChild(ce(N.outlook || S.outlook)), _.appendChild(F), P.appendChild(_), ((w = me("a")).id = "m-open"), (w.href = U), w.classList.add("m-open"), w.classList.add("m-default");
                var q,
                    B,
                    J,
                    K = me("span");
                (K.className = "w-500"),
                    K.appendChild(ce(N.open || S.open)),
                    w.appendChild(K),
                    w.appendChild(ce(N._default || S._default)),
                    P.appendChild(w),
                    ((A = me("a")).id = "m-copy"),
                    (A.href = U),
                    A.classList.add("m-copy"),
                    A.classList.add("w-500"),
                    A.appendChild(ce(N.copy || S.copy)),
                    P.appendChild(A),
                    (void 0 !== (null === (d = l) || void 0 === d ? void 0 : d.showFooter) && !1 === (null === (y = l) || void 0 === y ? void 0 : y.showFooter)) || P.appendChild(ie()),
                    document.body.appendChild(i),
                    R.addEventListener("click", de),
                    ((m = me()).style.display = "none"),
                    (m.id = "mailgo-tel"),
                    m.classList.add("m-modal"),
                    m.setAttribute("role", "dialog"),
                    m.setAttribute("tabindex", "-1"),
                    m.setAttribute("aria-labelledby", "m-tel-title"),
                    (null === (q = l) || void 0 === q ? void 0 : q.dark) ? he("tel") : ye("tel");
                var Z = me();
                (Z.className = "m-modal-back"), m.appendChild(Z);
                var $ = me();
                ($.className = "m-modal-content"),
                    m.appendChild($),
                    ((r = me("strong")).id = "m-tel-title"),
                    (r.className = "m-title"),
                    $.appendChild(r),
                    ((C = me("a")).id = "m-tg"),
                    (C.href = U),
                    C.classList.add("m-open"),
                    C.classList.add("m-tg"),
                    (C.style.display = "none"),
                    C.appendChild(ce(N.open_in_ || S.open_in_));
                var G = me("span");
                (G.className = "w-500"),
                    G.appendChild(ce(N.telegram || S.telegram)),
                    C.appendChild(G),
                    $.appendChild(C),
                    ((L = me("a")).id = "m-wa"),
                    (L.href = U),
                    L.classList.add("m-open"),
                    L.classList.add("m-wa"),
                    L.appendChild(ce(N.open_in_ || S.open_in_));
                var Q = me("span");
                (Q.className = "w-500"),
                    Q.appendChild(ce(N.whatsapp || S.whatsapp)),
                    L.appendChild(Q),
                    $.appendChild(L),
                    ((x = me("a")).id = "m-skype"),
                    (x.href = U),
                    x.classList.add("m-open"),
                    x.classList.add("m-skype"),
                    x.appendChild(ce(N.open_in_ || S.open_in_));
                var V = me("span");
                (V.className = "w-500"), V.appendChild(ce(N.skype || S.skype)), x.appendChild(V), $.appendChild(x), ((j = me("a")).id = "m-call"), (j.href = U), j.classList.add("m-open"), j.classList.add("m-default");
                var X = me("span");
                (X.className = "w-500"),
                    X.appendChild(ce(N.call || S.call)),
                    j.appendChild(X),
                    j.appendChild(ce(N._as_default || S._as_default)),
                    $.appendChild(j),
                    ((E = me("a")).id = "m-tel-copy"),
                    (E.href = U),
                    E.classList.add("m-copy"),
                    E.classList.add("w-500"),
                    E.appendChild(ce(N.copy || S.copy)),
                    $.appendChild(E),
                    (void 0 !== (null === (B = l) || void 0 === B ? void 0 : B.showFooter) && !1 === (null === (J = l) || void 0 === J ? void 0 : J.showFooter)) || $.appendChild(ie()),
                    document.body.appendChild(m),
                    Z.addEventListener("click", de),
                    document.addEventListener("click", ae);
            };
        function K() {
            var e,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mail",
                a = arguments.length > 1 ? arguments[1] : void 0;
            if ("mail" === t) {
                var o, n;
                if (a.href && a.href.toLowerCase().startsWith(N)) {
                    M = decodeURIComponent(a.href.split("?")[0].split(N)[1].trim());
                    var d = new URL(a.href).searchParams;
                    (z = d.get("cc")), (D = d.get("bcc")), (W = d.get("subject")), (H = d.get("body"));
                } else
                    (M = a.getAttribute("data-address") + "@" + a.getAttribute("data-domain")),
                        new URL(N + encodeURIComponent(M)),
                        (z = a.getAttribute("data-cc-address") + "@" + a.getAttribute("data-cc-domain")),
                        (D = a.getAttribute("data-bcc-address") + "@" + a.getAttribute("data-bcc-domain")),
                        (W = a.getAttribute("data-subject")),
                        (H = a.getAttribute("data-body"));
                if (void 0 === (null === (o = l) || void 0 === o ? void 0 : o.validateEmail) || !0 === (null === (n = l) || void 0 === n ? void 0 : n.validateEmail)) {
                    if (!we(M.split(","))) return;
                    z && !we(z.split(",")) && (z = ""), D && !we(D.split(",")) && (D = "");
                }
                (c.innerHTML = M.split(",").join("<br/>")),
                    z ? ((s.style.display = "block"), (b.innerHTML = z.split(",").join("<br/>"))) : (s.style.display = "none"),
                    D ? ((p.style.display = "block"), (v.innerHTML = D.split(",").join("<br/>"))) : (p.style.display = "none"),
                    W ? ((u.style.display = "block"), (g.textContent = W)) : (u.style.display = "none"),
                    H ? ((f.style.display = "block"), (h.textContent = H)) : (f.style.display = "none"),
                    k.addEventListener("click", Z),
                    _.addEventListener("click", $),
                    (T = se(M)),
                    w.addEventListener("click", G),
                    A.addEventListener("click", function () {
                        return ee(M);
                    });
            } else if ("tel" === t) {
                if (
                    (a.href && a.href.toLowerCase().startsWith(R)
                        ? (F = decodeURIComponent(a.href.split("?")[0].split(R)[1].trim()))
                        : a.href && a.href.toLowerCase().startsWith(P)
                        ? (F = decodeURIComponent(a.href.split("?")[0].split(P)[1].trim()))
                        : a.hasAttribute("data-tel") && ((F = a.getAttribute("data-tel")), a.getAttribute("data-msg")),
                    !Ce(F))
                )
                    return;
                (q = a.hasAttribute("data-telegram") ? a.getAttribute("data-telegram") : null),
                    a.hasAttribute("data-skype") && (B = a.getAttribute("data-skype")),
                    (r.innerHTML = F),
                    L.addEventListener("click", X),
                    q ? ((document.getElementById("m-tg").style.display = "block"), C.addEventListener("click", Q)) : (document.getElementById("m-tg").style.display = "none"),
                    x.addEventListener("click", V),
                    j.addEventListener("click", Y),
                    E.addEventListener("click", function () {
                        return ee(F);
                    });
            }
            (null === (e = l) || void 0 === e ? void 0 : e.dark) || (a.classList.contains("dark") ? he(t) : ye(t)), ne(t), document.addEventListener("keydown", oe);
        }
        var Z = function () {
                var e = "https://mail.google.com/mail/u/0/?view=cm&source=mailto&to=" + encodeURIComponent(M);
                z && (e = e.concat("&cc=" + encodeURIComponent(z))), D && (e = e.concat("&bcc=" + encodeURIComponent(D))), W && (e = e.concat("&subject=" + W)), H && (e = e.concat("&body=" + H)), window.open(e, "_blank"), de();
            },
            $ = function () {
                var e = "https://outlook.live.com/owa/?path=/mail/action/compose&to=" + encodeURIComponent(M);
                W && (e = e.concat("&subject=" + W)), H && (e = e.concat("&body=" + H)), window.open(e, "_blank"), de();
            },
            G = function () {
                re(T), de();
            },
            Q = function () {
                var e = "https://t.me/" + q;
                window.open(e, "_blank"), de();
            },
            V = function () {
                var e = "skype:" + ("" !== B ? B : F);
                window.open(e, "_blank"), de();
            },
            X = function () {
                var e = "https://wa.me/" + F;
                window.open(e, "_blank"), de();
            },
            Y = function () {
                var e = "tel:" + F;
                window.open(e), de();
            },
            ee = function (e) {
                var t;
                Le(e),
                    ((t = le("mail") ? A : E).textContent = "copied"),
                    setTimeout(function () {
                        (t.textContent = "copy"), de();
                    }, 999);
            };
        function te(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mail",
                a = e.href;
            return "mail" === t
                ? (a && a.toLowerCase().startsWith(N) && !e.classList.contains("no-mailgo")) ||
                      (e.hasAttribute("data-address") && ((a && "#mailgo" === e.getAttribute("href").toLowerCase()) || (e.classList && e.classList.contains("mailgo"))))
                : "tel" === t &&
                      ((a && (a.toLowerCase().startsWith(R) || a.toLowerCase().startsWith(P)) && !e.classList.contains("no-mailgo")) ||
                          (e.hasAttribute("data-tel") && a && "#mailgo" === e.getAttribute("href").toLowerCase()) ||
                          (e.classList && e.classList.contains("mailgo")));
        }
        function ae(e) {
            if (!document.contains(i) || !document.contains(m)) return !1;
            if (le("mail") || le("tel")) return !1;
            var t = (e.composedPath && e.composedPath()) || ke(e.target);
            return (
                t &&
                    t.forEach(function (t) {
                        return !(t instanceof HTMLDocument || t instanceof Window) && (te(t, "mail") ? (e.preventDefault(), K("mail", t), !0) : te(t, "tel") ? (e.preventDefault(), K("tel", t), !0) : void 0);
                    }),
                !1
            );
        }
        var oe = function (e) {
                if (le("mail"))
                    switch (e.keyCode) {
                        case 27:
                            de();
                            break;
                        case 71:
                            Z();
                            break;
                        case 79:
                            $();
                            break;
                        case 32:
                        case 13:
                            G();
                            break;
                        case 67:
                            ee(M);
                            break;
                        default:
                            return;
                    }
                else if (le("tel"))
                    switch (e.keyCode) {
                        case 27:
                            de();
                            break;
                        case 84:
                            Q();
                            break;
                        case 87:
                            X();
                            break;
                        case 32:
                        case 13:
                            Y();
                            break;
                        case 67:
                            ee(F);
                            break;
                        default:
                            return;
                    }
            },
            ne = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mail";
                fe(e, "flex");
            },
            de = function () {
                fe("mail", "none"), fe("tel", "none"), document.removeEventListener("keydown", oe);
            },
            le = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mail";
                return "flex" === ue(e);
            },
            ie = function () {
                var e = me("a");
                return (e.href = "https://mailgo.dev?ref=mailgo-modal"), (e.className = "m-by"), (e.target = "_blank"), (e.rel = "noopener noreferrer"), e.appendChild(ce("mailgo.dev")), e;
            },
            me = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div";
                return document.createElement(e);
            },
            ce = function (e) {
                return document.createTextNode(e);
            },
            re = function (e) {
                return (window.location.href = N + atob(e));
            },
            se = function (e) {
                return btoa(e);
            },
            pe = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mail";
                return "tel" === e ? m : i;
            },
            ue = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mail";
                return pe(e).style.display;
            },
            fe = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mail",
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    a = pe(e);
                (a.style.display = t),
                    "flex" === t
                        ? ((y = document.activeElement), a.setAttribute("aria-hidden", "false"), a.setAttribute("tabindex", "0"), a.focus(), be(a))
                        : (a.setAttribute("aria-hidden", "true"), a.setAttribute("tabindex", "-1"), y.focus());
            },
            be = function (e) {
                var t = e;
                t.querySelector(".m-modal-content a:last-of-type").addEventListener("keydown", ve), t.querySelector(".m-modal-content a:first-of-type").addEventListener("keydown", ge);
            },
            ve = function (e) {
                "Tab" === e.code && !1 === e.shiftKey && (e.preventDefault(), e.target.closest("div").querySelector("a:first-of-type").focus());
            },
            ge = function (e) {
                "Tab" === e.code && !0 === e.shiftKey && (e.preventDefault(), e.target.closest("div").querySelector("a:last-of-type").focus());
            },
            he = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mail";
                return pe(e).classList.add("m-dark");
            },
            ye = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mail";
                return pe(e).classList.remove("m-dark");
            },
            ke = function (e) {
                for (var t = []; e; ) {
                    if ((t.push(e), "HTML" === e.tagName)) return t.push(document), t.push(window), t;
                    e = e.parentElement;
                }
            },
            _e = function (e) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e);
            },
            we = function (e) {
                return e.every(_e);
            },
            Ce = function (e) {
                return /^[+]{0,1}[\s0-9]{0,}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(e);
            },
            Le = function (e) {
                var t = me("textarea");
                (t.value = e), t.setAttribute("readonly", ""), (t.style.position = "absolute"), (t.style.left = "-9999px"), document.body.appendChild(t);
                var a = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
                return t.select(), document.execCommand("copy"), document.body.removeChild(t), !!a && (document.getSelection().removeAllRanges(), document.getSelection().addRange(a), !0);
            };
        var xe = function (e) {
            var t, a, o, d;
            (l = n(n({}, e), (null === (t = window) || void 0 === t ? void 0 : t.mailgoConfig) || null)),
                window &&
                    "undefined" != typeof window &&
                    (((d = me("style")).id = "mailgo-style"),
                    (d.type = "text/css"),
                    d.appendChild(ce(S)),
                    document.head.appendChild(d),
                    (null === (a = l) || void 0 === a ? void 0 : a.initEvent)
                        ? (null === (o = l) || void 0 === o ? void 0 : o.listenerOptions)
                            ? document.addEventListener(
                                  l.initEvent,
                                  function () {
                                      J();
                                  },
                                  l.listenerOptions
                              )
                            : document.addEventListener(l.initEvent, function () {
                                  J();
                              })
                        : J());
        };
        xe({ initEvent: "DOMContentLoaded", dark: !0 });
    },
]);
//# sourceMappingURL=mailgo.dark.min.js.map
