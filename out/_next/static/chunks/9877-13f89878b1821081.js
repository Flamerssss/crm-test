(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9877,4153],{95318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},64938:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(58372)},87952:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(63366),o=r(87462),i=r(67294),a=r(86010),l=r(94780),s=r(90948),c=r(71657),u=r(82066),d=r(85893),f=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=r(54801);const p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((({theme:e,ownerState:t})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:e.shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&{color:e.palette.background.default,backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),h=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),m=(0,s.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});var b=i.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:s,children:u,className:f,component:b="div",imgProps:Z,sizes:w,src:y,srcSet:x,variant:S="circular"}=r,R=(0,n.Z)(r,p);let C=null;const k=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){const[o,a]=i.useState(!1);return i.useEffect((()=>{if(!r&&!n)return;a(!1);let o=!0;const i=new Image;return i.onload=()=>{o&&a("loaded")},i.onerror=()=>{o&&a("error")},i.crossOrigin=e,i.referrerPolicy=t,i.src=r,n&&(i.srcset=n),()=>{o=!1}}),[e,t,r,n]),o}((0,o.Z)({},Z,{src:y,srcSet:x})),I=y||x,N=I&&"error"!==k,P=(0,o.Z)({},r,{colorDefault:!N,component:b,variant:S}),z=(e=>{const{classes:t,variant:r,colorDefault:n}=e,o={root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(o,v.$,t)})(P);return C=N?(0,d.jsx)(h,(0,o.Z)({alt:s,src:y,srcSet:x,sizes:w,ownerState:P,className:z.img},Z)):null!=u?u:I&&s?s[0]:(0,d.jsx)(m,{className:z.fallback}),(0,d.jsx)(g,(0,o.Z)({as:b,ownerState:P,className:(0,a.Z)(z.root,f),ref:t},R,{children:C}))}))},54801:function(e,t,r){"use strict";r.d(t,{$:function(){return o}});var n=r(34867);function o(e){return(0,n.Z)("MuiAvatar",e)}const i=(0,r(1588).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);t.Z=i},66242:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(87462),o=r(63366),i=r(67294),a=r(86010),l=r(94780),s=r(90948),c=r(71657),u=r(55113),d=r(34867);function f(e){return(0,d.Z)("MuiCard",e)}(0,r(1588).Z)("MuiCard",["root"]);var v=r(85893);const p=["className","raised"],g=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var h=i.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=r,u=(0,o.Z)(r,p),d=(0,n.Z)({},r,{raised:s}),h=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},f,t)})(d);return(0,v.jsx)(g,(0,n.Z)({className:(0,a.Z)(h.root,i),elevation:s?8:void 0,ref:t,ownerState:d},u))}))},67720:function(e,t,r){"use strict";var n=r(63366),o=r(87462),i=r(67294),a=r(86010),l=r(94780),s=r(41796),c=r(90948),u=r(71657),d=r(35097),f=r(85893);const v=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,o.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),g=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),h=i.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:s,className:c,component:h=(s?"div":"hr"),flexItem:m=!1,light:b=!1,orientation:Z="horizontal",role:w=("hr"!==h?"separator":void 0),textAlign:y="center",variant:x="fullWidth"}=r,S=(0,n.Z)(r,v),R=(0,o.Z)({},r,{absolute:i,component:h,flexItem:m,light:b,orientation:Z,role:w,textAlign:y,variant:x}),C=(e=>{const{absolute:t,children:r,classes:n,flexItem:o,light:i,orientation:a,textAlign:s,variant:c}=e,u={root:["root",t&&"absolute",c,i&&"light","vertical"===a&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===a&&"withChildrenVertical","right"===s&&"vertical"!==a&&"textAlignRight","left"===s&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(u,d.V,n)})(R);return(0,f.jsx)(p,(0,o.Z)({as:h,className:(0,a.Z)(C.root,c),role:w,ref:t,ownerState:R},S,{children:s?(0,f.jsx)(g,{className:C.wrapper,ownerState:R,children:s}):null}))}));t.Z=h},35097:function(e,t,r){"use strict";r.d(t,{V:function(){return o}});var n=r(34867);function o(e){return(0,n.Z)("MuiDivider",e)}const i=(0,r(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=i},93946:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var n=r(63366),o=r(87462),i=r(67294),a=r(86010),l=r(94780),s=r(41796),c=r(90948),u=r(71657),d=r(49990),f=r(98216),v=r(34867);function p(e){return(0,v.Z)("MuiIconButton",e)}var g=(0,r(1588).Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),h=r(85893);const m=["edge","children","className","color","disabled","disableFocusRipple","size"],b=(0,c.ZP)(d.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,f.Z)(r.color)}`],r.edge&&t[`edge${(0,f.Z)(r.edge)}`],t[`size${(0,f.Z)(r.size)}`]]}})((({theme:e,ownerState:t})=>(0,o.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.active} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>(0,o.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,o.Z)({color:(e.vars||e).palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${g.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})));var Z=i.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiIconButton"}),{edge:i=!1,children:s,className:c,color:d="default",disabled:v=!1,disableFocusRipple:g=!1,size:Z="medium"}=r,w=(0,n.Z)(r,m),y=(0,o.Z)({},r,{edge:i,color:d,disabled:v,disableFocusRipple:g,size:Z}),x=(e=>{const{classes:t,disabled:r,color:n,edge:o,size:i}=e,a={root:["root",r&&"disabled","default"!==n&&`color${(0,f.Z)(n)}`,o&&`edge${(0,f.Z)(o)}`,`size${(0,f.Z)(i)}`]};return(0,l.Z)(a,p,t)})(y);return(0,h.jsx)(b,(0,o.Z)({className:(0,a.Z)(x.root,c),centerRipple:!0,focusRipple:!g,disabled:v,ref:t,ownerState:y},w,{children:s}))}))},55113:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(63366),o=r(87462),i=r(67294),a=r(86010),l=r(94780),s=r(41796),c=r(90948),u=r(71657),d=r(34867);function f(e){return(0,d.Z)("MuiPaper",e)}(0,r(1588).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var v=r(85893);const p=["className","component","elevation","square","variant"],g=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},h=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t[`elevation${r.elevation}`]]}})((({theme:e,ownerState:t})=>{var r;return(0,o.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,o.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",g(t.elevation))}, ${(0,s.Fq)("#fff",g(t.elevation))})`},e.vars&&{backgroundImage:null==(r=e.vars.overlays)?void 0:r[t.elevation]}))}));var m=i.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiPaper"}),{className:i,component:s="div",elevation:c=1,square:d=!1,variant:g="elevation"}=r,m=(0,n.Z)(r,p),b=(0,o.Z)({},r,{component:s,elevation:c,square:d,variant:g}),Z=(e=>{const{square:t,elevation:r,variant:n,classes:o}=e,i={root:["root",n,!t&&"rounded","elevation"===n&&`elevation${r}`]};return(0,l.Z)(i,f,o)})(b);return(0,v.jsx)(h,(0,o.Z)({as:s,ownerState:b,className:(0,a.Z)(Z.root,i),ref:t},m))}))},35893:function(e,t,r){"use strict";var n=r(49064);t.Z=n.Z},82066:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(87462),o=r(67294),i=r(53219),a=r(85893);function l(e,t){const r=(r,o)=>(0,a.jsx)(i.Z,(0,n.Z)({"data-testid":`${t}Icon`,ref:o},r,{children:e}));return r.muiName=i.Z.muiName,o.memo(o.forwardRef(r))}},58372:function(e,t,r){"use strict";r.r(t),r.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return a.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return c.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return v},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return g.Z},unsupportedProp:function(){return h},useControlled:function(){return m.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return Z.Z},useIsFocusVisible:function(){return w.Z}});var n=r(37078),o=r(98216),i=r(35893),a=r(82066),l=r(57144);var s=function(e,t){return()=>null},c=r(71579),u=r(8038),d=r(5340);r(87462);var f=function(e,t){return()=>null},v=r(7960).Z,p=r(58974),g=r(27909);var h=function(e,t,r,n,o){return null},m=r(49299),b=r(2068),Z=r(51705),w=r(79674);const y={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),n.Z.configure(e)}}},71579:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(67294);var o=function(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},8038:function(e,t,r){"use strict";var n=r(57094);t.Z=n.Z},49299:function(e,t,r){"use strict";var n=r(8925);t.Z=n.Z},58974:function(e,t,r){"use strict";var n=r(16600);t.Z=n.Z},27909:function(e,t,r){"use strict";var n=r(57579);t.Z=n.Z},49064:function(e,t,r){"use strict";function n(...e){return e.reduce(((e,t)=>null==t?e:function(...r){e.apply(this,r),t.apply(this,r)}),(()=>{}))}r.d(t,{Z:function(){return n}})},8925:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(67294);function o({controlled:e,default:t,name:r,state:o="value"}){const{current:i}=n.useRef(void 0!==e),[a,l]=n.useState(t);return[i?e:a,n.useCallback((e=>{i||l(e)}),[])]}},57579:function(e,t,r){"use strict";var n;r.d(t,{Z:function(){return l}});var o=r(67294);let i=0;const a=(n||(n=r.t(o,2))).useId;function l(e){if(void 0!==a){const t=a();return null!=e?e:t}return function(e){const[t,r]=o.useState(e),n=e||t;return o.useEffect((()=>{null==t&&(i+=1,r(`mui-${i}`))}),[t]),n}(e)}},77058:function(e,t,r){"use strict";r.d(t,{$:function(){return b}});var n=r(83878);var o=r(40181),i=r(25267);function a(e,t){return(0,n.Z)(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||(0,o.Z)(e,t)||(0,i.Z)()}var l=r(4942),s=r(67294),c=r(68718);function u(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var d={};function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&d[t[0]]||("string"===typeof t[0]&&(d[t[0]]=new Date),u.apply(void 0,t))}function v(e,t,r){e.loadNamespaces(t,(function(){if(e.isInitialized)r();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),r()}))}}))}function p(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var a=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||(!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!a(n,e)||o&&!a(i,e))))}function g(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return f("i18n.languages were undefined or empty",t.languages),!0;var n=void 0!==t.options.ignoreJSONStructure;return n?t.hasLoadedNamespace(e,{precheck:function(t,n){if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!n(t.isLanguageChangingTo,e))return!1}}):p(e,t,r)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.i18n,n=(0,s.useContext)(c.OO)||{},o=n.i18n,i=n.defaultNS,l=r||o||(0,c.nI)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new c.zv),!l){f("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}l.options.react&&void 0!==l.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=m(m(m({},(0,c.JP)()),l.options.react),t),h=p.useSuspense,b=p.keyPrefix,Z=e||i||l.options&&l.options.defaultNS;Z="string"===typeof Z?[Z]:Z||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(Z);var w=(l.isInitialized||l.initializedStoreOnce)&&Z.every((function(e){return g(e,l,p)}));function y(){return l.getFixedT(null,"fallback"===p.nsMode?Z:Z[0],b)}var x=(0,s.useState)(y),S=a(x,2),R=S[0],C=S[1],k=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=p.bindI18n,t=p.bindI18nStore;function r(){k.current&&C(y)}return k.current=!0,w||h||v(l,Z,(function(){k.current&&C(y)})),e&&l&&l.on(e,r),t&&l&&l.store.on(t,r),function(){k.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,r)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,r)}))}}),[l,Z.join()]);var I=(0,s.useRef)(!0);(0,s.useEffect)((function(){k.current&&!I.current&&C(y),I.current=!1}),[l]);var N=[R,l,w];if(N.t=R,N.i18n=l,N.ready=w,w)return N;if(!w&&!h)return N;throw new Promise((function(e){v(l,Z,(function(){e()}))}))}}}]);