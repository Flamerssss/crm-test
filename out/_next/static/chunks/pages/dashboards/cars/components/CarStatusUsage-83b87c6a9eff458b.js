(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4285],{66242:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(87462),a=n(63366),o=n(67294),i=n(86010),s=n(94780),l=n(90948),u=n(71657),c=n(55113),p=n(34867);function d(e){return(0,p.Z)("MuiCard",e)}(0,n(1588).Z)("MuiCard",["root"]);var f=n(85893);const v=["className","raised"],g=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var h=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiCard"}),{className:o,raised:l=!1}=n,c=(0,a.Z)(n,v),p=(0,r.Z)({},n,{raised:l}),h=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},d,t)})(p);return(0,f.jsx)(g,(0,r.Z)({className:(0,i.Z)(h.root,o),elevation:l?8:void 0,ref:t,ownerState:p},c))}))},55113:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(63366),a=n(87462),o=n(67294),i=n(86010),s=n(94780),l=n(41796),u=n(90948),c=n(71657),p=n(34867);function d(e){return(0,p.Z)("MuiPaper",e)}(0,n(1588).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=n(85893);const v=["className","component","elevation","square","variant"],g=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},h=(0,u.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>{var n;return(0,a.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,a.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.Fq)("#fff",g(t.elevation))}, ${(0,l.Fq)("#fff",g(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))}));var m=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiPaper"}),{className:o,component:l="div",elevation:u=1,square:p=!1,variant:g="elevation"}=n,m=(0,r.Z)(n,v),b=(0,a.Z)({},n,{component:l,elevation:u,square:p,variant:g}),y=(e=>{const{square:t,elevation:n,variant:r,classes:a}=e,o={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${n}`]};return(0,s.Z)(o,d,a)})(b);return(0,f.jsx)(h,(0,a.Z)({as:l,ownerState:b,className:(0,i.Z)(y.root,o),ref:t},m))}))},15861:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(63366),a=n(87462),o=n(67294),i=n(86010),s=n(39707),l=n(94780),u=n(90948),c=n(71657),p=n(98216),d=n(34867);function f(e){return(0,d.Z)("MuiTypography",e)}(0,n(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=n(85893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],h=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,p.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,a.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var y=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiTypography"}),o=(e=>b[e]||e)(n.color),u=(0,s.Z)((0,a.Z)({},n,{color:o})),{align:d="inherit",className:y,component:w,gutterBottom:Z=!1,noWrap:k=!1,paragraph:x=!1,variant:O="body1",variantMapping:N=m}=u,S=(0,r.Z)(u,g),C=(0,a.Z)({},u,{align:d,color:o,className:y,component:w,gutterBottom:Z,noWrap:k,paragraph:x,variant:O,variantMapping:N}),P=w||(x?"p":N[O]||m[O])||"span",j=(e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:a,variant:o,classes:i}=e,s={root:["root",o,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return(0,l.Z)(s,f,i)})(C);return(0,v.jsx)(h,(0,a.Z)({as:P,ref:t,ownerState:C,className:(0,i.Z)(j.root,y)},S))}))},30147:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboards/cars/components/CarStatusUsage",function(){return n(37337)}])},37337:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(2734),o=n(66242),i=n(15861),s=n(77058),l=n(59501);t.default=function(){var e=(0,s.$)().t,t=(0,a.Z)(),n={series:[{bg:t.colors.success.light,data:25,title:e("Available")},{bg:t.colors.error.light,data:40,title:e("Inservice")},{bg:t.colors.info.light,data:35,title:e("Booked")},{bg:t.colors.primary.light,data:85,title:e("InRent")}]},u={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},labels:n.series.map((function(e){return e.title})),plotOptions:{radialBar:{track:{background:t.colors.alpha.black[10]},offsetY:0,startAngle:0,endAngle:270,hollow:{margin:10,size:"15%"},dataLabels:{name:{show:!1},value:{show:!1}}}},states:{normal:{filter:{type:"none"}},hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},colors:n.series.map((function(e){return e.bg})),legend:{show:!0,floating:!0,fontSize:"14px",position:"left",offsetX:0,offsetY:25,labels:{useSeriesColors:!0},formatter:function(e,t){return e+":  "+t.w.globals.series[t.seriesIndex]},itemMargin:{vertical:3}},theme:{mode:t.palette.mode}},c=n.series.map((function(e){return e.data}));return(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(l.k,{height:300,options:u,series:c,type:"radialBar"}),(0,r.jsx)(i.Z,{variant:"h1",children:e("dashboard_car_loading_by_status")})]})}},59501:function(e,t,n){"use strict";n.d(t,{k:function(){return a}});var r=n(5152),a=n.n(r)()((function(){return Promise.all([n.e(5279),n.e(7229)]).then(n.bind(n,47229))}),{loadableGenerated:{webpack:function(){return[47229]}},ssr:!1})},77058:function(e,t,n){"use strict";n.d(t,{$:function(){return b}});var r=n(83878);var a=n(40181),o=n(25267);function i(e,t){return(0,r.Z)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(l){s=!0,a=l}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,t)||(0,a.Z)(e,t)||(0,o.Z)()}var s=n(4942),l=n(67294),u=n(68718);function c(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var p={};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&p[t[0]]||("string"===typeof t[0]&&(p[t[0]]=new Date),c.apply(void 0,t))}function f(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],a=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!i(r,e)||a&&!i(o,e))))}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var r=void 0!==t.options.ignoreJSONStructure;return r?t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):v(e,t,n)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,l.useContext)(u.OO)||{},a=r.i18n,o=r.defaultNS,s=n||a||(0,u.nI)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new u.zv),!s){d("You will need to pass in an i18next instance by using initReactI18next");var c=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[c,{},!1];return p.t=c,p.i18n={},p.ready=!1,p}s.options.react&&void 0!==s.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var v=m(m(m({},(0,u.JP)()),s.options.react),t),h=v.useSuspense,b=v.keyPrefix,y=e||o||s.options&&s.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(y);var w=(s.isInitialized||s.initializedStoreOnce)&&y.every((function(e){return g(e,s,v)}));function Z(){return s.getFixedT(null,"fallback"===v.nsMode?y:y[0],b)}var k=(0,l.useState)(Z),x=i(k,2),O=x[0],N=x[1],S=(0,l.useRef)(!0);(0,l.useEffect)((function(){var e=v.bindI18n,t=v.bindI18nStore;function n(){S.current&&N(Z)}return S.current=!0,w||h||f(s,y,(function(){S.current&&N(Z)})),e&&s&&s.on(e,n),t&&s&&s.store.on(t,n),function(){S.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,n)})),t&&s&&t.split(" ").forEach((function(e){return s.store.off(e,n)}))}}),[s,y.join()]);var C=(0,l.useRef)(!0);(0,l.useEffect)((function(){S.current&&!C.current&&N(Z),C.current=!1}),[s]);var P=[O,s,w];if(P.t=O,P.i18n=s,P.ready=w,w)return P;if(!w&&!h)return P;throw new Promise((function(e){f(s,y,(function(){e()}))}))}}},function(e){e.O(0,[5152,9774,2888,179],(function(){return t=30147,e(e.s=t);var t}));var t=e.O();_N_E=t}]);