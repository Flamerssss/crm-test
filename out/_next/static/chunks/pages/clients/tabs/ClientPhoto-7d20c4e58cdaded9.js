(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7024],{90878:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clients/tabs/ClientPhoto",function(){return e(53647)}])},53647:function(t,n,e){"use strict";e.r(n);var i=e(85893),o=e(67294),l=e(86886),c=e(66242),r=e(78445),s=e(67720),a=e(44267),d=e(77058),h=(e(80091),e(1902));e(15063);function p(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),i.forEach((function(n){p(t,n,e[n])}))}return t}n.default=function(t){var n=t.client,e=t.setData,p=t.companyId,_=(0,d.$)().t,f=(0,o.useRef)(null),g=function(t,i){console.log("image in handleUploadImage",t),h.Z.storage().ref("".concat(p,"/crm/clients/").concat(null===n||void 0===n?void 0:n.client_surname," ").concat(null===n||void 0===n?void 0:n.client_name," ").concat(null===n||void 0===n?void 0:n.client_middlename,"/").concat(t.name)).put(t).on("state_changed",(function(t){Math.round(t.bytesTransferred/t.totalBytes*100)}),(function(t){console.log(t)}),(function(){h.Z.storage().ref("".concat(p,"/crm/clients/").concat(null===n||void 0===n?void 0:n.client_surname," ").concat(null===n||void 0===n?void 0:n.client_name," ").concat(null===n||void 0===n?void 0:n.client_middlename,"/")).child(t.name).getDownloadURL().then((function(t){!function(t,i){"passport_main"==i?e(u({},n,{client_passport_photo_main:t})):"passport_additionally"==i?e(u({},n,{client_passport_photo_additional:t})):"driver_license_passport_main"==i?e(u({},n,{client_driver_license_photo_main:t})):"driver_license_additionally"==i&&e(u({},n,{client_driver_license_photo_additional:t}))}(t,i)}))}))};return(0,i.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(l.ZP,{item:!0,xs:6,children:(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(r.Z,{title:_("client_passport_photo_main")}),(0,i.jsx)(s.Z,{}),(0,i.jsx)(a.Z,{children:(0,i.jsxs)(l.ZP,{container:!0,children:[(0,i.jsx)("div",{style:{width:"100%",height:"100%"},onClick:function(){f.current.click()},children:(0,i.jsx)("img",{alt:"",src:(null===n||void 0===n?void 0:n.client_passport_photo_main)||"https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png",style:{width:"100%",height:"100%",minHeight:150,objectFit:"cover"}})}),(0,i.jsx)("input",{type:"file",onChange:function(t){return g(t.target.files[0],"passport_main")},style:{width:.1,height:.1,opacity:0,pointerEvents:"none"},ref:f})]})})]})}),(0,i.jsx)(l.ZP,{item:!0,xs:6,children:(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(r.Z,{title:_("client_passport_photo_additional")}),(0,i.jsx)(s.Z,{}),(0,i.jsx)(a.Z,{children:(0,i.jsxs)(l.ZP,{container:!0,children:[(0,i.jsx)("div",{style:{width:"100%",height:"100%"},onClick:function(){f.current.click()},children:(0,i.jsx)("img",{alt:"",src:(null===n||void 0===n?void 0:n.client_passport_photo_additional)||"https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png",style:{width:"100%",height:"100%",minHeight:150,objectFit:"cover"}})}),(0,i.jsx)("input",{type:"file",onChange:function(t){return g(t.target.files[0],"passport_additionally")},style:{width:.1,height:.1,opacity:0,pointerEvents:"none"},ref:f})]})})]})}),(0,i.jsx)(l.ZP,{item:!0,xs:6,children:(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(r.Z,{title:_("client_driver_license_photo_main")}),(0,i.jsx)(s.Z,{}),(0,i.jsx)(a.Z,{children:(0,i.jsxs)(l.ZP,{container:!0,children:[(0,i.jsx)("div",{style:{width:"100%",height:"100%"},onClick:function(){f.current.click()},children:(0,i.jsx)("img",{alt:"",src:(null===n||void 0===n?void 0:n.client_driver_license_photo_main)||"https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png",style:{width:"100%",height:"100%",minHeight:150,objectFit:"cover"}})}),(0,i.jsx)("input",{type:"file",onChange:function(t){return g(t.target.files[0],"driver_license_passport_main")},style:{width:.1,height:.1,opacity:0,pointerEvents:"none"},ref:f})]})})]})}),(0,i.jsx)(l.ZP,{item:!0,xs:6,children:(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(r.Z,{title:_("client_driver_license_photo_additional")}),(0,i.jsx)(s.Z,{}),(0,i.jsx)(a.Z,{children:(0,i.jsxs)(l.ZP,{container:!0,children:[(0,i.jsx)("div",{style:{width:"100%",height:"100%"},onClick:function(){f.current.click()},children:(0,i.jsx)("img",{alt:"",src:(null===n||void 0===n?void 0:n.client_driver_license_photo_additional)||"https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png",style:{width:"100%",height:"100%",minHeight:150,objectFit:"cover"}})}),(0,i.jsx)("input",{type:"file",onChange:function(t){return g(t.target.files[0],"driver_license_additionally")},style:{width:.1,height:.1,opacity:0,pointerEvents:"none"},ref:f})]})})]})})]})}}},function(t){t.O(0,[5063,2183,4286,9774,2888,179],(function(){return n=90878,t(t.s=n);var n}));var n=t.O();_N_E=n}]);