(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2189], { 83184: function (e, i, n) { (window.__NEXT_P = window.__NEXT_P || []).push(["/clients/tabs/ClientInfo", function () { return n(53572) }]) }, 53572: function (e, i, n) { "use strict"; n.r(i); var l = n(85893), t = n(67294), a = n(86886), s = n(66242), r = n(78445), d = n(67720), c = n(44267), u = n(50135), o = n(15861), _ = n(18972), v = n(77058), h = n(71806), x = n(46747), m = (n(80091), n(45297)), j = n(50720), f = n(50480), g = n(45843), Z = n(30381), p = n.n(Z); function b(e, i, n) { return i in e ? Object.defineProperty(e, i, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[i] = n, e } function P(e) { for (var i = 1; i < arguments.length; i++) { var n = null != arguments[i] ? arguments[i] : {}, l = Object.keys(n); "function" === typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter((function (e) { return Object.getOwnPropertyDescriptor(n, e).enumerable })))), l.forEach((function (i) { b(e, i, n[i]) })) } return e } var y = { ru: h.Z }; i.default = function (e) { var i = e.client, n = e.setData, h = e.clientStatus, Z = e.clientCategory, b = (0, t.useState)("ru")[0], C = (0, v.$)().t, W = (0, t.useState)("false"), w = W[0], T = W[1], k = (0, t.useState)(null), O = k[0], D = k[1]; return (0, t.useEffect)((function () { "true" === w ? function (e) { var i = new Date(e.client_driver_license_issue_date).getTime(), n = (new Date).getTime(), l = p()(i), t = p()(n).diff(l, "years"); D(t) }(i) : n(P({}, i, { client_driver_license_experience: null === i || void 0 === i ? void 0 : i.client_driver_license_experience, client_driver_license_issue_date: null === i || void 0 === i ? void 0 : i.client_driver_license_issue_date })) }), [null === i || void 0 === i ? void 0 : i.client_driver_license_issue_date]), (0, l.jsxs)(a.ZP, { container: !0, spacing: 3, children: [(0, l.jsxs)(a.ZP, { item: !0, xs: 12, md: 6, children: [(0, l.jsxs)(s.Z, { children: [(0, l.jsx)(r.Z, { title: C("main_info_title") }), (0, l.jsx)(d.Z, {}), (0, l.jsx)(c.Z, { children: (0, l.jsxs)(a.ZP, { container: !0, spacing: 3, children: [(0, l.jsx)(a.ZP, { item: !0, xs: 4, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_surname) || "", onChange: function (e) { n(P({}, i, { client_surname: e.target.value })) }, fullWidth: !0, label: C("client_surname"), variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 4, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_name) || "", onChange: function (e) { n(P({}, i, { client_name: e.target.value })) }, fullWidth: !0, label: C("client_name"), variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 4, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_middlename) || "", onChange: function (e) { n(P({}, i, { client_middlename: e.target.value })) }, fullWidth: !0, label: C("client_middlename"), variant: "outlined" }) }), (0, l.jsxs)(a.ZP, { item: !0, xs: 3, children: [(0, l.jsxs)(o.Z, { variant: "h5", children: [C("registration_address"), ":"] }), (0, l.jsx)(a.ZP, { item: !0, xs: 12, style: { marginTop: 15 }, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_country) || "", onChange: function (e) { n(P({}, i, { client_country: e.target.value })) }, fullWidth: !0, label: C("client_country"), variant: "outlined" }) })] }), (0, l.jsx)(a.ZP, { item: !0, xs: 9, style: { marginTop: 33 }, children: (0, l.jsx)(a.ZP, { item: !0, xs: 12, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_registration_address_all) || "", onChange: function (e) { n(P({}, i, { client_registration_address_all: e.target.value })) }, fullWidth: !0, label: C("client_registration_address_all"), variant: "outlined" }) }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 12, md: 3, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_birthDay) || "", onChange: function (e) { n(P({}, i, { client_birthDay: e.target.value })) }, fullWidth: !0, label: C("client_birthDay"), variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 12, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_phone) || "", onChange: function (e) { n(P({}, i, { client_phone: e.target.value })) }, fullWidth: !0, label: C("client_phone"), variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 12, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_phone_additional) || "", onChange: function (e) { n(P({}, i, { client_phone_additional: e.target.value })) }, fullWidth: !0, label: C("client_phone_additional"), variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 12, md: 3, children: (0, l.jsx)(u.Z, { select: !0, fullWidth: !0, label: C("client_status"), value: (null === i || void 0 === i ? void 0 : i.client_status) || "", onChange: function (e) { n(P({}, i, { client_status: e.target.value })) }, variant: "outlined", children: null === h || void 0 === h ? void 0 : h.map((function (e) { return (0, l.jsx)(_.Z, { value: e.name, children: e.name }, e.name) })) }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 12, md: 3, children: (0, l.jsx)(u.Z, { select: !0, fullWidth: !0, label: C("client_category"), value: (null === i || void 0 === i ? void 0 : i.client_category) || "", onChange: function (e) { n(P({}, i, { client_category: e.target.value })) }, variant: "outlined", children: null === Z || void 0 === Z ? void 0 : Z.map((function (e) { return (0, l.jsx)(_.Z, { value: e.name, children: e.name }, e.name) })) }) })] }) })] }), (0, l.jsxs)(s.Z, { style: { marginTop: 15 }, children: [(0, l.jsx)(r.Z, { title: C("contact_information_jobs") }), (0, l.jsx)(d.Z, {}), (0, l.jsx)(c.Z, { children: (0, l.jsxs)(a.ZP, { container: !0, spacing: 3, children: [(0, l.jsx)(a.ZP, { item: !0, xs: 4, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_work) || "", onChange: function (e) { n(P({}, i, { client_work: e.target.value })) }, fullWidth: !0, label: C("client_work"), variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 4, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_position) || "", onChange: function (e) { n(P({}, i, { client_position: e.target.value })) }, fullWidth: !0, label: C("client_position"), variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 12, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_email) || "", onChange: function (e) { n(P({}, i, { client_email: e.target.value })) }, fullWidth: !0, label: C("client_email"), variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 12, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_instagram) || "", onChange: function (e) { n(P({}, i, { client_instagram: e.target.value })) }, fullWidth: !0, label: C("client_instagram"), variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 12, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_telegram) || "", onChange: function (e) { n(P({}, i, { client_telegram: e.target.value })) }, fullWidth: !0, label: C("client_telegram"), variant: "outlined" }) })] }) })] })] }), (0, l.jsxs)(a.ZP, { item: !0, xs: 12, md: 6, children: [(0, l.jsxs)(s.Z, { children: [(0, l.jsx)(r.Z, { title: C("passport") }), (0, l.jsx)(d.Z, {}), (0, l.jsx)(c.Z, { children: (0, l.jsxs)(a.ZP, { container: !0, spacing: 3, children: [(0, l.jsx)(a.ZP, { item: !0, xs: 4, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_passport_series) || "", onChange: function (e) { n(P({}, i, { client_passport_series: e.target.value })) }, fullWidth: !0, label: C("client_passport_series"), variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 4, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_passport_number) || "", onChange: function (e) { n(P({}, i, { client_passport_number: e.target.value })) }, fullWidth: !0, label: C("client_passport_number"), variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 12, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_passport_issue_date) || "", onChange: function (e) { n(P({}, i, { client_passport_issue_date: e.target.value })) }, fullWidth: !0, label: C("client_passport_issue_date"), variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 12, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_passport_issued_by) || "", onChange: function (e) { n(P({}, i, { client_passport_issued_by: e.target.value })) }, fullWidth: !0, label: C("client_passport_issued_by"), variant: "outlined" }) })] }) })] }), (0, l.jsxs)(s.Z, { style: { marginTop: 15 }, children: [(0, l.jsx)(r.Z, { title: C("driver_license") }), (0, l.jsx)(d.Z, {}), (0, l.jsx)(c.Z, { children: (0, l.jsxs)(a.ZP, { container: !0, spacing: 3, children: [(0, l.jsx)(a.ZP, { item: !0, xs: 4, md: 4, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_driver_license_series_number) || "", onChange: function (e) { n(P({}, i, { client_driver_license_series_number: e.target.value })) }, fullWidth: !0, label: C("client_driver_license_series_number"), variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 12, md: 4, children: (0, l.jsx)(j._, { dateAdapter: m.Z, locale: y[b], children: (0, l.jsx)(x.M, { renderInput: function (e) { return (0, l.jsx)(u.Z, P({ fullWidth: !0 }, e, { helperText: "" })) }, label: C("client_driver_license_issue_date"), value: (null === i || void 0 === i ? void 0 : i.client_driver_license_issue_date) || null, onChange: function (e) { n(P({}, i, { client_driver_license_issue_date: e })), T("true") } }) }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 4, md: 4, children: (0, l.jsx)(u.Z, { value: O || (null === i || void 0 === i ? void 0 : i.client_driver_license_experience) || "", fullWidth: !0, label: "Test", variant: "outlined" }) }), (0, l.jsx)(a.ZP, { item: !0, xs: 12, children: (0, l.jsx)(u.Z, { value: (null === i || void 0 === i ? void 0 : i.client_driver_license_issued_by) || "", onChange: function (e) { n(P({}, i, { client_driver_license_issued_by: e.target.value })) }, fullWidth: !0, label: C("client_driver_license_issued_by"), variant: "outlined" }) })] }) })] }), (0, l.jsxs)(a.ZP, { item: !0, xs: 4, md: 12, style: { marginTop: 35 }, children: [(0, l.jsx)(f.Z, { control: (0, l.jsx)(g.Z, { checked: null === i || void 0 === i ? void 0 : i.client_isCompany, onChange: function (e) { n(P({}, i, { client_isCompany: e.target.checked })) } }), label: "" }), C("client_isCompany")] })] })] }) } } }, function (e) { e.O(0, [4885, 9990, 5360, 6827, 3970, 5464, 6668, 2945, 1849, 8991, 7104, 2183, 5350, 6747, 1806, 3709, 9774, 2888, 179], (function () { return i = 83184, e(e.s = i); var i })); var i = e.O(); _N_E = i }]);