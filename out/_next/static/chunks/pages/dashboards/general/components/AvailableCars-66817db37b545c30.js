(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9799],{43552:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboards/general/components/AvailableCars",function(){return r(57334)}])},57334:function(e,n,r){"use strict";r.r(n);var o=r(85893),l=r(67294),t=r(90948),c=r(37023),a=r(15861),i=r(87357),s=r(40044),u=r(66242),d=r(50135),f=r(87109),h=r(67720),p=r(72882),v=r(7906),x=r(53184),g=r(53816),j=r(53252),b=r(295),m=r(87952),y=r(21023),Z=r(93946),w=r(47171),O=r(68586),_=r(77058),P=r(99586),k=r(80100),S=r(42701);function N(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function C(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(n){N(e,n,r[n])}))}return e}var E=(0,t.ZP)(c.Z)((function(e){var n=e.theme;return"\n    @media (max-width: ".concat(n.breakpoints.values.md,"px) {\n      .MuiTabs-scrollableX {\n        overflow-x: auto !important;\n      }\n\n      .MuiTabs-indicator {\n          box-shadow: none;\n      }\n    }\n    ")})),A=function(e,n,r,l,t){var c={Available:{text:n,color:"success"},Inservice:{text:r,color:"error"},Booked:{text:l,color:"info"},InRent:{text:t,color:"warning"}}[e],a=c.text,i=c.color;return(0,o.jsx)(k.Z,{color:i,children:a})};n.default=function(e){var n=e.cars,r=e.fleets,t=e.title,c=(0,l.useState)([]),k=c[0],N=c[1],I=(0,_.$)().t,R=(0,l.useState)(0),L=R[0],T=R[1],D=(0,l.useState)(5),F=D[0],M=D[1],W=(0,l.useState)(""),z=W[0],B=W[1],X=(0,l.useState)({id:null}),H=X[0],V=X[1];(0,l.useEffect)((function(){r&&V((function(e){var n;return C({},e,{id:null===(n=r[0])||void 0===n?void 0:n.id})}))}),[r]);var $=function(e,n,r){return null===e||void 0===e?void 0:e.filter((function(e){var o=!0;if(n){var l=!1;["car_model_full","car_\u0441ategory","car_owner","car_vin","car_status"].forEach((function(r){var o;(null===(o=e[r])||void 0===o?void 0:o.toLowerCase().includes(n.toLowerCase()))&&(l=!0)})),e.car_fleet_id!==r.id&&(o=!1),l||(o=!1)}return Object.keys(r).forEach((function(n){r[n]!==e.car_fleet_id&&(o=!1)})),o}))}(n,z,H),q=function(e,n,r){return null===e||void 0===e?void 0:e.slice(n*r,n*r+r)}($,L,F);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{variant:"h3",children:I(t)}),(0,o.jsx)(i.Z,{display:"flex",alignItems:"center",flexDirection:{xs:"column",sm:"row"},justifyContent:{xs:"center",sm:"space-between"},pb:3,pt:2,children:(0,o.jsx)(E,{onChange:function(e,n){var r;r=n,V((function(e){return C({},e,{id:r})})),N([])},scrollButtons:"auto",textColor:"secondary",value:H.id,variant:"scrollable",children:null===r||void 0===r?void 0:r.map((function(e){return(0,o.jsx)(s.Z,{value:e.id,label:e.fleet_title},e.id)}))})}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(i.Z,{children:(0,o.jsx)(d.Z,{sx:{m:0},InputProps:{startAdornment:(0,o.jsx)(f.Z,{position:"start",children:(0,o.jsx)(S.Z,{})})},onChange:function(e){e.persist(),B(e.target.value)},placeholder:I("placeholderSearch"),value:z,size:"small",fullWidth:!0,margin:"normal",variant:"outlined"})}),(0,o.jsx)(h.Z,{}),0===(null===q||void 0===q?void 0:q.length)?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Z,{sx:{py:10},variant:"h3",fontWeight:"normal",color:"text.secondary",align:"center",children:I("placeholderSearchNotFound")})}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z,{children:(0,o.jsxs)(v.Z,{children:[(0,o.jsx)(x.Z,{children:(0,o.jsxs)(g.Z,{children:[(0,o.jsxs)(j.Z,{children:[I("car_model_full")," / ",I("car_license_plate")]}),(0,o.jsx)(j.Z,{children:I("car_class")}),(0,o.jsx)(j.Z,{align:"center",children:I("car_\u0441ategory")}),(0,o.jsx)(j.Z,{children:I("car_year_issue")}),(0,o.jsx)(j.Z,{children:I("car_vin")}),(0,o.jsx)(j.Z,{children:I("car_status")}),(0,o.jsx)(j.Z,{align:"center",children:I("Actions")})]})}),(0,o.jsx)(b.Z,{children:null===q||void 0===q?void 0:q.map((function(e){var n=k.includes(null===e||void 0===e?void 0:e.id);return(0,o.jsxs)(g.Z,{hover:!0,selected:n,children:[(0,o.jsx)(j.Z,{children:(0,o.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,o.jsx)(m.Z,{sx:{mr:1},src:null===e||void 0===e?void 0:e.car_image}),(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(O.C,{variant:"h5",href:"/cars/profile/"+(null===e||void 0===e?void 0:e.id),children:null===e||void 0===e?void 0:e.car_model_full}),(0,o.jsx)(a.Z,{noWrap:!0,variant:"subtitle2",children:null===e||void 0===e?void 0:e.car_license_plate})]})]})}),(0,o.jsx)(j.Z,{children:(0,o.jsx)(a.Z,{children:null===e||void 0===e?void 0:e.car_class})}),(0,o.jsx)(j.Z,{children:(0,o.jsx)(a.Z,{children:null===e||void 0===e?void 0:e.car_\u0441ategory})}),(0,o.jsx)(j.Z,{align:"center",children:(0,o.jsx)(a.Z,{children:null===e||void 0===e?void 0:e.car_year_issue})}),(0,o.jsx)(j.Z,{children:(0,o.jsx)(a.Z,{children:null===e||void 0===e?void 0:e.car_vin})}),(0,o.jsx)(j.Z,{children:A(null===e||void 0===e?void 0:e.car_status,I("Available"),I("Inservice"),I("Booked"),I("InRent"))}),(0,o.jsx)(j.Z,{align:"center",children:(0,o.jsx)(a.Z,{noWrap:!0,children:(0,o.jsx)(y.Z,{title:I("View"),arrow:!0,children:(0,o.jsx)(Z.Z,{color:"primary",children:(0,o.jsx)(O.C,{href:"/cars/profile/"+(null===e||void 0===e?void 0:e.id),children:(0,o.jsx)(P.Z,{fontSize:"small"})})})})})})]},null===e||void 0===e?void 0:e.id)}))})]})}),(0,o.jsx)(i.Z,{p:2,children:(0,o.jsx)(w.Z,{component:"div",count:null===$||void 0===$?void 0:$.length,onPageChange:function(e,n){T(n)},onRowsPerPageChange:function(e){M(parseInt(e.target.value))},page:L,rowsPerPage:F,labelRowsPerPage:I("RowsPerPage"),rowsPerPageOptions:[5,10,20,50]})})]})]})]})}},80100:function(e,n,r){"use strict";var o=r(85893),l=r(45697),t=r.n(l);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){if(null==e)return{};var r,o,l=function(e,n){if(null==e)return{};var r,o,l={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=(0,r(90948).ZP)("span")((function(e){var n=e.theme;return"\n      background-color: ".concat(n.colors.alpha.black[5],";\n      padding: ").concat(n.spacing(.5,1),";\n      font-size: ").concat(n.typography.pxToRem(13),";\n      border-radius: ").concat(n.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(n.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(n.colors.primary.lighter,";\n          color: ").concat(n.palette.primary.main,"\n        }\n\n        &-black {\n          background-color: ").concat(n.colors.alpha.black[100],";\n          color: ").concat(n.colors.alpha.white[100],";\n        }\n        \n        &-secondary {\n          background-color: ").concat(n.colors.secondary.lighter,";\n          color: ").concat(n.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(n.colors.success.lighter,";\n          color: ").concat(n.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(n.colors.warning.lighter,";\n          color: ").concat(n.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(n.colors.error.lighter,";\n          color: ").concat(n.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(n.colors.info.lighter,";\n          color: ").concat(n.palette.info.main,"\n        }\n      }\n")})),s=function(e){e.className;var n=e.color,r=void 0===n?"secondary":n,l=e.children,t=a(e,["className","color","children"]);return(0,o.jsx)(i,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(n){c(e,n,r[n])}))}return e}({className:"MuiLabel-"+r},t,{children:l}))};s.propTypes={children:t().node,className:t().string,color:t().oneOf(["primary","black","secondary","error","warning","success","info"])},n.Z=s},68586:function(e,n,r){"use strict";var o=r(85893),l=r(67294),t=r(86010),c=r(11163),a=r(41664),i=r.n(a),s=r(50122);function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(n){u(e,n,r[n])}))}return e}function f(e,n){if(null==e)return{};var r,o,l=function(e,n){if(null==e)return{};var r,o,l={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var h=(0,r(90948).ZP)("a")({}),p=l.forwardRef((function(e,n){var r=e.to,l=e.linkAs,t=e.replace,c=e.scroll,a=e.shallow,s=e.prefetch,u=e.locale,p=f(e,["to","linkAs","replace","scroll","shallow","prefetch","locale"]);return(0,o.jsx)(i(),{href:r,prefetch:s,as:l,replace:t,scroll:c,shallow:a,passHref:!0,locale:u,children:(0,o.jsx)(h,d({ref:n},p))})})),v=l.forwardRef((function(e,n){var r=e.activeClassName,l=void 0===r?"active":r,a=e.as,i=e.className,v=e.href,x=e.linkAs,g=e.locale,j=e.noLinkStyle,b=e.prefetch,m=e.replace,y=(e.role,e.scroll),Z=e.shallow,w=f(e,["activeClassName","as","className","href","linkAs","locale","noLinkStyle","prefetch","replace","role","scroll","shallow"]),O=(0,c.useRouter)(),_="string"===typeof v?v:v.pathname,P=(0,t.Z)(i,u({},l,O.pathname===_&&l));if("string"===typeof v&&(0===v.indexOf("http")||0===v.indexOf("mailto:")))return j?(0,o.jsx)(h,d({className:P,href:v,ref:n},w)):(0,o.jsx)(s.Z,d({className:P,href:v,ref:n},w));var k={to:v,linkAs:x||a,replace:m,scroll:y,shallow:Z,prefetch:b,locale:g};return j?(0,o.jsx)(p,d({className:P,ref:n},k,w)):(0,o.jsx)(s.Z,d({component:p,className:P,ref:n},k,w))}));n.C=v}},function(e){e.O(0,[9990,5360,6827,3970,5464,6668,2945,1849,8630,990,3274,2453,7171,6098,9774,2888,179],(function(){return n=43552,e(e.s=n);var n}));var n=e.O();_N_E=n}]);