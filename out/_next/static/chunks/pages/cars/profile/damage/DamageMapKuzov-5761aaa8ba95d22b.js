(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4643], { 99753: function (e, n, t) { (window.__NEXT_P = window.__NEXT_P || []).push(["/cars/profile/damage/DamageMapKuzov", function () { return t(84996) }]) }, 65003: function (e, n, t) { "use strict"; t.r(n), t.d(n, { default: function () { return A } }); var r = t(34051), a = t.n(r), i = t(85893), o = t(67294), c = t(1902), l = (t(96621), t(77058)), u = t(64666), s = t(33090), d = t(15861), f = t(31425), m = t(83321), h = t(6514), v = t(86886), p = t(87357), g = t(50135), y = t(72890), b = t(50480), x = t(36872), j = t(18972); function _(e, n) { (null == n || n > e.length) && (n = e.length); for (var t = 0, r = new Array(n); t < n; t++)r[t] = e[t]; return r } function w(e, n, t, r, a, i, o) { try { var c = e[i](o), l = c.value } catch (u) { return void t(u) } c.done ? n(l) : Promise.resolve(l).then(r, a) } function Z(e, n, t) { return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e } function P(e) { for (var n = 1; n < arguments.length; n++) { var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t); "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })))), r.forEach((function (n) { Z(e, n, t[n]) })) } return e } function S(e, n) { return function (e) { if (Array.isArray(e)) return e }(e) || function (e, n) { var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != t) { var r, a, i = [], o = !0, c = !1; try { for (t = t.call(e); !(o = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); o = !0); } catch (l) { c = !0, a = l } finally { try { o || null == t.return || t.return() } finally { if (c) throw a } } return i } }(e, n) || k(e, n) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } function O(e) { return function (e) { if (Array.isArray(e)) return _(e) }(e) || function (e) { if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || k(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } function k(e, n) { if (e) { if ("string" === typeof e) return _(e, n); var t = Object.prototype.toString.call(e).slice(8, -1); return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _(e, n) : void 0 } } function A(e) { var n = e.selectedArea, t = e.onClose, r = e.onSave, _ = e.damages, Z = e.car, k = e.damageWhere, A = e.companyId, C = e.userId, I = function (e) { D[R] = P({}, D[R], e), T(O(D)) }, E = (0, l.$)().t, W = (0, o.useState)(_), D = W[0], T = W[1], M = o.useRef(null), N = S(o.useState(0), 2), R = N[0], U = N[1], $ = D[R], z = [{ title: E("cars_damage_level_low"), value: "Low" }, { title: E("cars_damage_level_middle"), value: "Middle" }, { title: E("cars_damage_level_high"), value: "High" }]; (0, o.useEffect)((function () { T(_) }), [_]); var F = S(o.useState([]), 2), H = F[0], L = F[1], X = function () { var e, n = (e = a().mark((function e() { return a().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: c.Z.firestore().collection(A).doc("company").collection("clients").onSnapshot((function (e) { var n = []; e.forEach((function (e) { return n.push(e.data()) })), L(n) })); case 2: case "end": return e.stop() } }), e) })), function () { var n = this, t = arguments; return new Promise((function (r, a) { var i = e.apply(n, t); function o(e) { w(i, r, a, o, c, "next", e) } function c(e) { w(i, r, a, o, c, "throw", e) } o(void 0) })) }); return function () { return n.apply(this, arguments) } }(); (0, o.useEffect)((function () { A && X() }), [A]); var B = (0, o.useRef)(null), K = function (e) { console.log("imagePassport1 in handleUploadPassport1", e), c.Z.storage().ref("".concat(A, "/crm/damage/").concat($.damageWhere, "/").concat(e.name)).put(e).on("state_changed", (function (e) { Math.round(e.bytesTransferred / e.totalBytes * 100) }), (function (e) { console.log(e) }), (function () { c.Z.storage().ref("".concat(A, "/crm/damage/").concat($.damageWhere, "/")).child(e.name).getDownloadURL().then((function (e) { !function (e) { I(P({}, $, { damage_image: e })) }(e) })) })) }; return (0, i.jsxs)(u.Z, { open: n, onClose: t, "aria-labelledby": "max-width-dialog-title", children: [(0, i.jsx)("div", { style: { display: "flex" }, children: D.map((function (e, n) { return (0, i.jsx)("button", { onClick: function () { return U(n) }, children: n + 1 }, n) })) }), (0, i.jsxs)(s.Z, { id: "max-width-dialog-title", children: [(0, i.jsx)(d.Z, { variant: "h4", children: E("cars_damage_download_photo") }), (0, i.jsxs)(f.Z, { sx: { pr: 2.5 }, children: [(0, i.jsx)("div", { children: (0, i.jsx)(m.Z, { onClick: function () { var e = D.push({ areaId: n, car_id: Z.id, damageWhere: k, isDamage: !0, created_at: new Date, company_id: A, author_user_id: C }); T(O(D)), U(e - 1) }, variant: "contained", color: "error", children: E("cars_damage_add_new") }) }), (0, i.jsx)("div", { children: (0, i.jsx)(m.Z, { onClick: function () { r(D), t() }, variant: "contained", color: "primary", children: E("Save") }) })] })] }), (0, i.jsx)(h.Z, { children: $ && (0, i.jsxs)(v.ZP, { container: !0, children: [(0, i.jsx)(v.ZP, { item: !0, xs: 12, md: 12, children: (0, i.jsx)(p.Z, { children: (0, i.jsx)("form", { noValidate: !0, autoComplete: "off", children: (0, i.jsxs)(v.ZP, { container: !0, children: [(0, i.jsx)(v.ZP, { item: !0, xs: 12, md: 12, children: (0, i.jsx)(g.Z, { value: $.damage_type || "", onChange: function (e) { I({ damage_type: e.target.value }) }, fullWidth: !0, label: E("cars_damage_type"), variant: "outlined" }) }), (0, i.jsx)(v.ZP, { item: !0, xs: 12, md: 12, children: (0, i.jsx)(g.Z, { value: $.comment || "", onChange: function (e) { I({ comment: e.target.value }) }, fullWidth: !0, label: E("cars_damage_description"), variant: "outlined" }) }), (0, i.jsx)(v.ZP, { item: !0, xs: 12, children: (0, i.jsx)(p.Z, { title: E("cars_damage_level"), style: { marginTop: 15 }, children: (0, i.jsx)(y.Z, { ref: M, "aria-label": "ringtone", name: "ringtone", value: $.value || "-1", onChange: function (e) { I({ value: e.target.value }) }, children: z.map((function (e) { return (0, i.jsx)(b.Z, { value: e.value, control: (0, i.jsx)(x.Z, {}), label: e.title }, e.value) })) }) }) }), (0, i.jsx)(v.ZP, { item: !0, xs: 12, md: 12, children: (0, i.jsx)(g.Z, { select: !0, fullWidth: !0, label: E("cars_damage_client"), value: $.client || "", onChange: function (e) { var n = H.findIndex((function (n) { return n.client_surname + " " + n.client_name === e.target.value })); -1 !== n && I({ client: e.target.value, client_id: H[n].id }) }, variant: "outlined", children: H.map((function (e) { return (0, i.jsx)(j.Z, { value: e.client_surname + " " + e.client_name, children: e.client_surname + " " + e.client_name }, e.client_name) })) }) })] }) }) }) }), (0, i.jsx)(v.ZP, { item: !0, xs: 12, md: 12, children: (0, i.jsxs)(p.Z, { title: E("cars_damage_photo"), style: { position: "relative" }, children: [(0, i.jsx)("div", { style: { width: "100%", height: "100%" }, onClick: function () { B.current.click() }, children: (0, i.jsx)("img", { alt: "", src: (null === $ || void 0 === $ ? void 0 : $.damage_image) || "https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png", style: { width: "100%", height: "100%", minHeight: 150, objectFit: "cover" } }) }), (0, i.jsx)("input", { type: "file", onChange: function (e) { return K(e.target.files[0]) }, style: { width: .1, height: .1, opacity: 0, pointerEvents: "none" }, ref: B })] }) })] }) })] }) } }, 84996: function (e, n, t) { "use strict"; t.r(n); var r = t(34051), a = t.n(r), i = t(85893), o = t(67294), c = t(65003), l = t(5147), u = t(1902); t(96621); function s(e, n) { (null == n || n > e.length) && (n = e.length); for (var t = 0, r = new Array(n); t < n; t++)r[t] = e[t]; return r } function d(e, n, t, r, a, i, o) { try { var c = e[i](o), l = c.value } catch (u) { return void t(u) } c.done ? n(l) : Promise.resolve(l).then(r, a) } function f(e, n, t) { return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e } function m(e) { for (var n = 1; n < arguments.length; n++) { var t = null != arguments[n] ? arguments[n] : {}, r = Object.keys(t); "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })))), r.forEach((function (n) { f(e, n, t[n]) })) } return e } function h(e, n) { return function (e) { if (Array.isArray(e)) return e }(e) || function (e, n) { var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != t) { var r, a, i = [], o = !0, c = !1; try { for (t = t.call(e); !(o = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); o = !0); } catch (l) { c = !0, a = l } finally { try { o || null == t.return || t.return() } finally { if (c) throw a } } return i } }(e, n) || function (e, n) { if (!e) return; if ("string" === typeof e) return s(e, n); var t = Object.prototype.toString.call(e).slice(8, -1); "Object" === t && e.constructor && (t = e.constructor.name); if ("Map" === t || "Set" === t) return Array.from(t); if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s(e, n) }(e, n) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } n.default = function (e) { var n = e.car, t = e.companyId, r = e.damages, s = e.userId, f = h(o.useState(""), 2), v = f[0], p = f[1], g = (0, o.useRef)(); return (0, i.jsxs)("div", { style: { width: 275, height: 340 }, children: [(0, i.jsx)(l.default, { damages: r, getPngFunction: function (e) { return g.current = e }, onPathClick: function (e) { p(e.target.getAttribute("data-id")) } }), (0, i.jsx)(c.default, { damages: r.filter((function () { return r.areaId === v })), selectedArea: v, car: n, onClose: function () { p("") }, onSave: function (e) { var n = u.Z.firestore().collection(t).doc("company").collection("carDamages"); e.forEach(function () { var e, t = (e = a().mark((function e(t) { var r, i; return a().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: if (t) { e.next = 2; break } return e.abrupt("return"); case 2: if (!t.id) { e.next = 6; break } n.doc(t.id).update(t), e.next = 12; break; case 6: return e.next = 8, n.add(t); case 8: return r = e.sent, i = m({}, t, { id: r.id, damageStatus: "\u041d\u043e\u0432\u043e\u0435" }), e.next = 12, r.set(i); case 12: case "end": return e.stop() } }), e) })), function () { var n = this, t = arguments; return new Promise((function (r, a) { var i = e.apply(n, t); function o(e) { d(i, r, a, o, c, "next", e) } function c(e) { d(i, r, a, o, c, "throw", e) } o(void 0) })) }); return function (e) { return t.apply(this, arguments) } }()) }, damageWhere: "kuzov", companyId: t, userId: s })] }) } } }, function (e) { e.O(0, [9990, 5360, 6827, 3970, 5464, 6668, 2945, 8991, 7104, 8722, 6459, 3789, 5147, 9774, 2888, 179], (function () { return n = 99753, e(e.s = n); var n })); var n = e.O(); _N_E = n }]);