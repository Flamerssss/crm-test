(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4759],{99891:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tariffs/EditorBody",function(){return t(48262)}])},48262:function(n,e,t){"use strict";t.r(e);var r=t(85893),i=(t(67294),t(86886)),a=t(66242),o=t(78445),l=t(67720),c=t(44267),d=t(50135),s=t(83321),u=(t(15063),t(77058)),f=t(57193);function m(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function h(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function x(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){h(n,e,t[e])}))}return n}function j(n){return function(n){if(Array.isArray(n))return m(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return m(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.default=function(n){var e,t=n.initialData,m=n.setData,h=(0,u.$)().t,v=(t||{}).durations,p=(null===v||void 0===v?void 0:v.length)?null===(e=v[v.length-1])||void 0===e?void 0:e.tariff_do:1;return(0,r.jsx)(i.ZP,{container:!0,spacing:3,children:(0,r.jsx)(i.ZP,{item:!0,xs:12,style:{marginTop:20},children:(0,r.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(o.Z,{title:h("maintenance_description_title")}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,md:12,children:(0,r.jsx)(d.Z,{value:(null===t||void 0===t?void 0:t.tariff_name)||"",onChange:function(n){return m(x({},t,{tariff_name:n.target.value}))},fullWidth:!0,label:h("tariff_name"),variant:"outlined"})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:12,children:(0,r.jsx)(d.Z,{value:(null===t||void 0===t?void 0:t.tariff_deposit)||0,onChange:function(n){return m(x({},t,{tariff_deposit:n.target.value}))},fullWidth:!0,label:h("tariff_deposit"),variant:"outlined"})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)(d.Z,{value:(null===t||void 0===t?void 0:t.tariff_comment)||"",onChange:function(n){return m(x({},t,{tariff_comment:n.target.value}))},fullWidth:!0,label:h("tariff_comment"),variant:"outlined",multiline:!0,rows:8})})]})})]})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(o.Z,{title:h("tariff_price_title")}),(0,r.jsx)(l.Z,{}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(i.ZP,{container:!0,spacing:3,children:(0,r.jsx)(i.ZP,{item:!0,xs:12,md:12,children:null===v||void 0===v?void 0:v.map((function(n,e){var i;return(0,r.jsx)(f.default,{prevDuration:null===(i=v[e-1])||void 0===i?void 0:i.tariff_do,duration:n.tariff_do,price:n.price,durationObj:n,onChange:function(n){v[e]=n,m(x({},t,{durations:j(v)}))},editingDurationAllowed:v.length-1===e},e)}))})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:12,style:{marginTop:20,marginLeft:10},children:(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.Z,{onClick:function(){m(x({},t,{durations:v.concat({tariff_do:p+1,price:""})}))},variant:"contained",color:"primary",children:h("tariff_add_period")})}),(0,r.jsx)("div",{disabled:(null===v||void 0===v?void 0:v.length)<2,style:{marginLeft:40},children:(0,r.jsxs)(s.Z,{onClick:function(){var n=[].concat(v);n.pop(),m(x({},t,{durations:n}))},variant:"contained",color:"error",children:[" ",h("tariff_delete_period")]})})]})})]})]})})]})})})}},57193:function(n,e,t){"use strict";t.r(e);var r=t(85893),i=(t(67294),t(86886)),a=t(50135),o=t(77058);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){l(n,e,t[e])}))}return n}e.default=function(n){var e=n.prevDuration,t=n.onChange,l=n.durationObj,d=n.editingDurationAllowed,s=(0,o.$)().t;return(0,r.jsxs)(i.ZP,{container:!0,spacing:1,alignItems:"left",style:{marginTop:15},children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,md:3,children:(0,r.jsxs)(i.ZP,{container:!0,spacing:5,alignItems:"center",children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,md:3,children:s("tariff_add_from")}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:7,children:(0,r.jsx)(a.Z,{value:e+1||1,disabled:!0,fullWidth:!0,variant:"outlined"})})]})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(i.ZP,{container:!0,spacing:5,alignItems:"center",children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,md:4,children:s("tariff_add_by")}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:8,children:(0,r.jsx)(a.Z,{error:e+1>l.tariff_do,value:l.tariff_do,disabled:!d,onChange:function(n){var r=Number(n.target.value);console.log("onChange",r,e),t(c({},l,{tariff_do:r}))},fullWidth:!0,variant:"outlined"})})]})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:3,children:(0,r.jsxs)(i.ZP,{container:!0,spacing:5,alignItems:"center",children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,md:4,children:s("tariff_add_price")}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:8,children:(0,r.jsx)(a.Z,{value:l.price,onChange:function(n){t(c({},l,{price:Number(n.target.value)}))},fullWidth:!0,variant:"outlined"})})]})})]})}}},function(n){n.O(0,[9990,5360,6827,3970,5464,6668,2945,5063,373,778,9774,2888,179],(function(){return e=99891,n(n.s=e);var e}));var e=n.O();_N_E=e}]);