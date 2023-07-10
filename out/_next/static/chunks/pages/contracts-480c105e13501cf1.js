(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3348, 1341], { 98169: function (n, t, r) { (window.__NEXT_P = window.__NEXT_P || []).push(["/contracts", function () { return r(99174) }]) }, 78561: function (n, t, r) { "use strict"; r.r(t); var e = r(85893), c = r(67294), o = r(90948), a = r(37023), i = r(87357), u = r(40044), s = r(66242), l = r(50135), p = r(87109), f = r(67720), d = r(15861), h = r(72882), m = r(7906), x = r(53184), v = r(53816), y = r(53252), Z = r(295), w = r(21023), j = r(93946), g = r(47171), b = r(68586), _ = r(77058), k = r(99586), P = r(42701), C = r(97029); function O(n, t, r) { return t in n ? Object.defineProperty(n, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = r, n } var S = (0, o.ZP)(a.Z)((function (n) { var t = n.theme; return "\n    @media (max-width: ".concat(t.breakpoints.values.md, "px) {\n      .MuiTabs-scrollableX {\n        overflow-x: auto !important;\n      }\n\n      .MuiTabs-indicator {\n          box-shadow: none;\n      }\n    }\n    ") })); t.default = function (n) { var t = n.initialData, r = (0, c.useState)([]), o = r[0], a = r[1], D = (0, _.$)().t, E = (0, c.useState)(0), I = E[0], T = E[1], F = (0, c.useState)(10), L = F[0], N = F[1], B = (0, c.useState)(""), z = B[0], R = B[1], q = (0, c.useState)({ id: null }), A = q[0], M = q[1], W = [{ value: "all", label: D("All") }], X = function (n, t, r) { return null === n || void 0 === n ? void 0 : n.filter((function (n) { var e = !0; if (t) { var c = !1;["client_status", "name", "username"].forEach((function (r) { n[r].toLowerCase().includes(t.toLowerCase()) && (c = !0) })), r.client_status && n.client_status !== r.client_status && (e = !1), c || (e = !1) } return Object.keys(r).forEach((function (t) { var c = r[t]; c && n[t] !== c && (e = !1) })), e })) }(t, z, A), $ = function (n, t, r) { return null === n || void 0 === n ? void 0 : n.slice(t * r, t * r + r) }(X, I, L), G = o.length > 0; return (0, e.jsxs)(e.Fragment, { children: [(0, e.jsx)(i.Z, { display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", sm: "space-between" }, pb: 3, children: (0, e.jsx)(S, { onChange: function (n, t) { var r = null; "all" !== t && (r = t), M((function (n) { return function (n) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}, e = Object.keys(r); "function" === typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter((function (n) { return Object.getOwnPropertyDescriptor(r, n).enumerable })))), e.forEach((function (t) { O(n, t, r[t]) })) } return n }({}, n, { role: r }) })), a([]) }, scrollButtons: "auto", textColor: "secondary", value: (null === A || void 0 === A ? void 0 : A.client_status) || "all", variant: "scrollable", children: null === W || void 0 === W ? void 0 : W.map((function (n) { return (0, e.jsx)(u.Z, { value: n.value, label: n.label }, n.value) })) }) }), (0, e.jsxs)(s.Z, { children: [(0, e.jsxs)(i.Z, { p: 2, children: [!G && (0, e.jsx)(l.Z, { sx: { m: 0 }, InputProps: { startAdornment: (0, e.jsx)(p.Z, { position: "start", children: (0, e.jsx)(P.Z, {}) }) }, onChange: function (n) { n.persist(), R(n.target.value) }, placeholder: D("placeholderSearch"), value: z, size: "small", fullWidth: !0, margin: "normal", variant: "outlined" }), G] }), (0, e.jsx)(f.Z, {}), 0 === (null === $ || void 0 === $ ? void 0 : $.length) ? (0, e.jsx)(e.Fragment, { children: (0, e.jsx)(d.Z, { sx: { py: 10 }, variant: "h3", fontWeight: "normal", color: "text.secondary", align: "center", children: D("placeholderSearchNotFound") }) }) : (0, e.jsxs)(e.Fragment, { children: [(0, e.jsx)(h.Z, { children: (0, e.jsxs)(m.Z, { children: [(0, e.jsx)(x.Z, { children: (0, e.jsxs)(v.Z, { children: [(0, e.jsx)(y.Z, { children: D("contract_number") }), (0, e.jsx)(y.Z, { children: D("contract_start_date") }), (0, e.jsx)(y.Z, { children: D("contract_end_date") }), (0, e.jsx)(y.Z, { children: D("contract_car") }), (0, e.jsx)(y.Z, { children: D("contract_client") }), (0, e.jsx)(y.Z, { children: D("contract_client_phone") }), (0, e.jsx)(y.Z, { children: D("contract_term") }), (0, e.jsx)(y.Z, { children: D("contract_balance") }), (0, e.jsx)(y.Z, { align: "center", children: D("Actions") })] }) }), (0, e.jsx)(Z.Z, { children: null === $ || void 0 === $ ? void 0 : $.map((function (n) { var t = o.includes(null === n || void 0 === n ? void 0 : n.id); return (0, e.jsxs)(v.Z, { hover: !0, selected: t, children: [(0, e.jsx)(y.Z, { children: (0, e.jsx)(b.C, { variant: "h5", href: "/contracts/details/" + (null === n || void 0 === n ? void 0 : n.id), children: (0, e.jsx)(d.Z, { children: null === n || void 0 === n ? void 0 : n.contract_number }) }) }), (0, e.jsx)(y.Z, { children: (0, e.jsx)(d.Z, { children: new Intl.DateTimeFormat({ day: "2-digit", month: "2-digit", year: "numeric" }).format(n.contract_start_date) }) }), (0, e.jsx)(y.Z, { children: (0, e.jsx)(d.Z, { children: new Intl.DateTimeFormat({ day: "2-digit", month: "2-digit", year: "numeric" }).format(n.contract_end_date) }) }), (0, e.jsx)(y.Z, { children: (0, e.jsx)(d.Z, { children: null === n || void 0 === n ? void 0 : n.contract_car }) }), (0, e.jsx)(y.Z, { children: (0, e.jsx)(d.Z, { children: null === n || void 0 === n ? void 0 : n.contract_client }) }), (0, e.jsx)(y.Z, { children: (0, e.jsx)(d.Z, { children: null === n || void 0 === n ? void 0 : n.contract_client_phone }) }), (0, e.jsx)(y.Z, { children: (0, e.jsx)(d.Z, { children: null === n || void 0 === n ? void 0 : n.contract_term }) }), (0, e.jsx)(y.Z, { children: (0, e.jsx)(d.Z, { children: null === n || void 0 === n ? void 0 : n.contract_balance }) }), (0, e.jsx)(y.Z, { align: "center", children: (0, e.jsxs)(d.Z, { noWrap: !0, children: [(0, e.jsx)(w.Z, { title: D("View"), arrow: !0, children: (0, e.jsx)(j.Z, { color: "primary", children: (0, e.jsx)(b.C, { href: "/contracts/details/" + (null === n || void 0 === n ? void 0 : n.id), children: (0, e.jsx)(k.Z, { fontSize: "small" }) }) }) }), (0, e.jsx)(w.Z, { title: D("Delete"), arrow: !0, children: (0, e.jsx)(C.Z, { collection: "cars", document: null === n || void 0 === n ? void 0 : n.id }) })] }) })] }, null === n || void 0 === n ? void 0 : n.id) })) })] }) }), (0, e.jsx)(i.Z, { p: 2, children: (0, e.jsx)(g.Z, { component: "div", count: null === X || void 0 === X ? void 0 : X.length, onPageChange: function (n, t) { T(t) }, onRowsPerPageChange: function (n) { N(parseInt(n.target.value)) }, page: I, rowsPerPage: L, labelRowsPerPage: D("RowsPerPage"), rowsPerPageOptions: [5, 10, 20, 50] }) })] })] })] }) } }, 99174: function (n, t, r) { "use strict"; r.r(t); var e = r(85893), c = r(67294), o = r(9008), a = r.n(o), i = r(30985), u = r(50542), s = r(77058), l = r(68586), p = r(86886), f = r(15861), d = r(83321), h = r(47017), m = r(75920), x = r(78273), v = r(78561), y = r(71341); function Z() { var n = (0, s.$)().t, t = (0, m.a)().user, r = (0, c.useState)(null), o = r[0], i = r[1]; return (0, c.useEffect)((function () { (null === t || void 0 === t ? void 0 : t.company_id) && (0, y.nD)(null === t || void 0 === t ? void 0 : t.company_id).then(i) }), [t]), (0, e.jsxs)(e.Fragment, { children: [(0, e.jsx)(a(), { children: (0, e.jsx)("title", { children: n("contracts_title") }) }), (0, e.jsx)(x.Z, { children: (0, e.jsxs)(p.ZP, { container: !0, justifyContent: "space-between", alignItems: "center", children: [(0, e.jsx)(p.ZP, { item: !0, children: (0, e.jsx)(f.Z, { variant: "h3", component: "h3", gutterBottom: !0, children: n("contracts_title") }) }), (0, e.jsx)(p.ZP, { item: !0, children: (0, e.jsx)(d.Z, { sx: { mt: { xs: 2, sm: 0 } }, component: l.C, href: "/contracts/create", variant: "contained", startIcon: (0, e.jsx)(h.Z, { fontSize: "small" }), children: n("Add") }) })] }) }), (0, e.jsx)(p.ZP, { sx: { px: 4 }, container: !0, direction: "row", justifyContent: "center", alignItems: "stretch", spacing: 3, children: (0, e.jsx)(p.ZP, { item: !0, xs: 12, children: (0, e.jsx)(v.default, { initialData: o }) }) })] }) } Z.getLayout = function (n) { return (0, e.jsx)(u._, { children: (0, e.jsx)(i.Z, { children: n }) }) }, t.default = Z }, 78273: function (n, t, r) { "use strict"; var e = r(85893), c = r(45697), o = r.n(c), a = r(90948), i = r(87357), u = (0, a.ZP)(i.Z)((function (n) { var t = n.theme; return "\n        padding: ".concat(t.spacing(4), ";\n") })), s = function (n) { var t = n.children; return (0, e.jsx)(e.Fragment, { children: (0, e.jsx)(u, { className: "MuiPageTitle-wrapper", children: t }) }) }; s.propTypes = { children: o().node.isRequired }, t.Z = s }, 71341: function (n, t, r) { "use strict"; r.d(t, { Ac: function () { return q }, Cq: function () { return N }, Dh: function () { return cn }, Fo: function () { return Q }, HL: function () { return rn }, KN: function () { return z }, LB: function () { return y }, LI: function () { return X }, Lo: function () { return I }, Mx: function () { return J }, Pb: function () { return D }, Tf: function () { return G }, Ux: function () { return M }, ew: function () { return g }, gq: function () { return F }, iS: function () { return _ }, km: function () { return P }, lM: function () { return an }, nD: function () { return f }, qJ: function () { return x }, qt: function () { return nn }, sN: function () { return U }, t: function () { return l }, xF: function () { return w }, xg: function () { return h }, yG: function () { return O } }); var e = r(34051), c = r.n(e), o = r(1902); r(96621); function a(n, t, r, e, c, o, a) { try { var i = n[o](a), u = i.value } catch (s) { return void r(s) } i.done ? t(u) : Promise.resolve(u).then(e, c) } function i(n) { return function () { var t = this, r = arguments; return new Promise((function (e, c) { var o = n.apply(t, r); function i(n) { a(o, e, c, i, u, "next", n) } function u(n) { a(o, e, c, i, u, "throw", n) } i(void 0) })) } } function u(n, t, r) { return t in n ? Object.defineProperty(n, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = r, n } function s(n) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}, e = Object.keys(r); "function" === typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter((function (n) { return Object.getOwnPropertyDescriptor(r, n).enumerable })))), e.forEach((function (t) { u(n, t, r[t]) })) } return n } function l(n, t, r, e) { return p.apply(this, arguments) } function p() { return (p = i(c().mark((function n(t, r, e, a) { var i, u; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(r).doc("company").collection(t).where(e, "==", a).get(); case 2: return i = n.sent, u = i.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", u); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function f(n) { return d.apply(this, arguments) } function d() { return (d = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("contracts").orderBy("contract_number", "desc").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function h(n) { return m.apply(this, arguments) } function m() { return (m = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("cars").where("car_status", "==", "Available").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function x(n) { return v.apply(this, arguments) } function v() { return (v = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("contracts").where("contract_status", "==", "InRent").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function y(n) { return Z.apply(this, arguments) } function Z() { return (Z = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("contracts").where("contract_status", "==", "Booked").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function w(n) { return j.apply(this, arguments) } function j() { return (j = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("cars").orderBy("car_code", "asc").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function g(n) { return b.apply(this, arguments) } function b() { return (b = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("cars").where("car_status", "==", "Inservice").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function _(n) { return k.apply(this, arguments) } function k() { return (k = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("staff").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function P(n) { return C.apply(this, arguments) } function C() { return (C = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("tasks").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function O(n) { return S.apply(this, arguments) } function S() { return (S = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("fleets").orderBy("created_at", "asc").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function D(n) { return E.apply(this, arguments) } function E() { return (E = i(c().mark((function n(t) { var r; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return r = o.Z.firestore().collection(t).doc("company").collection("tariff"), n.abrupt("return", r.get().then((function (n) { var t = []; return n.forEach((function (n) { t.push(s({}, n.data())) })), Promise.all(t).then((function (n) { return n.map((function (n) { return { id: n.id, tariff_name: n.tariff_name } })) })) }))); case 2: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function I(n) { return T.apply(this, arguments) } function T() { return (T = i(c().mark((function n(t) { var r; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return r = o.Z.firestore().collection(t).doc("company").collection("carsCategory"), n.abrupt("return", r.get().then((function (n) { var t = []; return n.forEach((function (n) { t.push(s({}, n.data())) })), Promise.all(t).then((function (n) { return n.map((function (n) { return { id: n.id, name: n.name, created_at: n.created_at } })) })) }))); case 2: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function F(n) { return L.apply(this, arguments) } function L() { return (L = i(c().mark((function n(t) { var r; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return r = o.Z.firestore().collection(t).doc("company").collection("carStatus"), n.abrupt("return", r.get().then((function (n) { var t = []; return n.forEach((function (n) { t.push(s({}, n.data())) })), Promise.all(t).then((function (n) { return n.map((function (n) { return { id: n.id, name: n.name } })) })) }))); case 2: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function N(n) { return B.apply(this, arguments) } function B() { return (B = i(c().mark((function n(t) { var r; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return r = o.Z.firestore().collection(t).doc("company").collection("owners"), n.abrupt("return", r.get().then((function (n) { var t = []; return n.forEach((function (n) { t.push(s({}, n.data())) })), Promise.all(t).then((function (n) { return n.map((function (n) { return { id: n.id, owner_fullname: n.owner_fullname } })) })) }))); case 2: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function z() { return R.apply(this, arguments) } function R() { return (R = i(c().mark((function n() { var t, r; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(" car_brand").get(); case 2: return t = n.sent, r = t.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", r); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function q(n) { return A.apply(this, arguments) } function A() { return (A = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("clients").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function M(n) { return W.apply(this, arguments) } function W() { return (W = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("ClientsStatusList").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function X(n) { return $.apply(this, arguments) } function $() { return ($ = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("ClientsCatList").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function G(n) { return H.apply(this, arguments) } function H() { return (H = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("fines").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function J(n) { return K.apply(this, arguments) } function K() { return (K = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("photoRew").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function U(n) { return V.apply(this, arguments) } function V() { return (V = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("maintenance").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function Q(n) { return Y.apply(this, arguments) } function Y() { return (Y = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("counterparties").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function nn(n) { return tn.apply(this, arguments) } function tn() { return (tn = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("nomenclature").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function rn(n) { return en.apply(this, arguments) } function en() { return (en = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("tariffs").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function cn(n) { return on.apply(this, arguments) } function on() { return (on = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("staff").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } function an(n) { return un.apply(this, arguments) } function un() { return (un = i(c().mark((function n(t) { var r, e; return c().wrap((function (n) { for (; ;)switch (n.prev = n.next) { case 0: return n.next = 2, o.Z.firestore().collection(t).doc("company").collection("owners").get(); case 2: return r = n.sent, e = r.docs.map((function (n) { return s({}, n.data()) })), n.abrupt("return", e); case 5: case "end": return n.stop() } }), n) })))).apply(this, arguments) } }, 97029: function (n, t, r) { "use strict"; r.d(t, { Z: function () { return j } }); var e = r(85893), c = r(67294), o = r(90948), a = r(87952), i = r(83321), u = r(6585), s = r(93946), l = r(64666), p = r(87357), f = r(15861), d = r(52521), h = r(50594), m = r(77058), x = r(75920), v = r(73400), y = r(1902), Z = (r(96621), (0, o.ZP)(a.Z)((function (n) { var t = n.theme; return "\n      background-color: ".concat(t.colors.error.lighter, ";\n      color: ").concat(t.colors.error.main, ";\n      width: ").concat(t.spacing(12), ";\n      height: ").concat(t.spacing(12), ";\n\n      .MuiSvgIcon-root {\n        font-size: ").concat(t.typography.pxToRem(45), ";\n      }\n") }))), w = (0, o.ZP)(i.Z)((function (n) { var t = n.theme; return "\n     background: ".concat(t.colors.error.main, ";\n     color: ").concat(t.palette.error.contrastText, ";\n\n     &:hover {\n        background: ").concat(t.colors.error.dark, ";\n     }\n    ") })); function j(n) { var t = n.collection, r = n.document, o = (0, m.$)().t, a = (0, c.useState)(!1), j = a[0], g = a[1], b = (0, v.Ds)().enqueueSnackbar, _ = (0, x.a)().user, k = function () { g(!1) }; return (0, e.jsxs)(e.Fragment, { children: [(0, e.jsx)(s.Z, { onClick: function () { g(!0) }, color: "error", children: (0, e.jsx)(d.Z, {}) }), (0, e.jsx)(l.Z, { open: j, onClose: k, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", sx: { p: 3 }, children: (0, e.jsxs)(p.Z, { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", p: 5, children: [(0, e.jsx)(Z, { children: (0, e.jsx)(h.Z, {}) }), (0, e.jsxs)(f.Z, { align: "center", sx: { py: 4, px: 6 }, variant: "h3", children: [o("ConfirmDelete_title"), o("ConfirmDelete_body")] }), (0, e.jsxs)(p.Z, { children: [(0, e.jsx)(i.Z, { variant: "text", size: "large", sx: { mx: 1 }, onClick: k, children: o("Back") }), (0, e.jsx)(w, { onClick: function () { var n; n = r, y.Z.firestore().collection(null === _ || void 0 === _ ? void 0 : _.company_id).doc("company").collection(t).doc(null === n || void 0 === n ? void 0 : n.id).delete(), b(o("Deleted"), { variant: "error", anchorOrigin: { vertical: "top", horizontal: "right" }, TransitionComponent: u.Z }), k() }, size: "large", sx: { mx: 1, px: 3 }, variant: "contained", children: o("Delete") })] })] }) })] }) } } }, function (n) { n.O(0, [5006, 9990, 5360, 6827, 3970, 5464, 6668, 2945, 1849, 8991, 8630, 990, 3274, 889, 5974, 8922, 2453, 2628, 6541, 8251, 7171, 1870, 9355, 8035, 9774, 2888, 179], (function () { return t = 98169, n(n.s = t); var t })); var t = n.O(); _N_E = t }]);