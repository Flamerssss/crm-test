(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6340],{50034:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboards/banking/components/BankAccounts",function(){return r(77174)}])},77174:function(n,e,r){"use strict";r.r(e);var a=r(85893),t=r(67294),c=r(90948),i=r(66242),o=r(98619),s=r(93946),l=r(87357),h=r(87952),p=r(2734),d=r(78445),u=r(15861),x=r(21023),g=r(45843),m=r(78462),b=r(18987),y=r(59334),j=r(77058),Z=r(27397),f=r(28942),_=r(5196),v=r(30127),W=r(25069),w=r(98352),k=r(71911);r(21082),r(21669),r(36797);function P(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var M=(0,c.ZP)(i.Z)((function(n){var e=n.theme;return"\n    background: ".concat(e.colors.gradients.blue3,";\n    color: ").concat(e.colors.alpha.trueWhite[100],";\n    \n    .MuiIconButton-root {\n      background: ").concat(e.colors.alpha.trueWhite[10],";\n      color: ").concat(e.colors.alpha.trueWhite[70],";\n      \n      &:hover {\n        background: ").concat(e.colors.alpha.trueWhite[10],";\n        color: ").concat(e.colors.alpha.trueWhite[100],";\n      }\n    }\n    \n    .MuiAvatarGroup-avatar {\n      background: ").concat(e.colors.alpha.trueWhite[10],";\n      color: ").concat(e.colors.alpha.trueWhite[70]," !important;\n    }\n    \n    .MuiList-root {\n      margin-bottom: ").concat(e.spacing(2),";\n\n      .MuiButtonBase-root {\n        color: ").concat(e.colors.alpha.trueWhite[70],";\n      \n        &:hover, &:active, .active {\n            background: ").concat(e.colors.alpha.trueWhite[10],";\n            color: ").concat(e.colors.alpha.trueWhite[100],";\n        }\n      }\n      \n      .MuiListItemAvatar-root {\n            background: ").concat(e.colors.alpha.trueWhite[100],";\n            border-radius: 100px;\n            margin-right: ").concat(e.spacing(1.5),";\n            width: ").concat(e.spacing(5),";\n            height: ").concat(e.spacing(5),";\n            display: flex;\n            align-items: center;\n            justify-content: center;\n      }\n    }\n")})),S=(0,c.ZP)(i.Z)((function(n){var e=n.theme;return"\n    background: ".concat(e.colors.gradients.blue1,";\n    color:  ").concat(e.colors.alpha.trueWhite[100],";;\n    border-radius: ").concat(e.general.borderRadiusXl,";\n    padding: ").concat(e.spacing(1),";\n    box-shadow: none;\n\n    .MuiCardHeader-root {\n      .MuiCardHeader-title {\n          color: ").concat(e.colors.alpha.trueWhite[100],";;\n          font-weight: normal;\n          padding-bottom: ").concat(e.spacing(.5),";\n      }\n    }\n    \n    .MuiCardHeader-subheader {\n        color:  ").concat(e.colors.alpha.trueWhite[100],";;\n    }\n    \n    .MuiSwitch-colorPrimary .MuiSwitch-thumb {\n      background: ").concat(e.colors.alpha.trueWhite[50],";\n      border-color: ").concat(e.colors.alpha.trueWhite[30],";\n    }\n\n    .MuiSwitch-colorPrimary.Mui-checked .MuiSwitch-thumb {\n      background: ").concat(e.colors.alpha.trueWhite[100],";\n      border-color: ").concat(e.colors.alpha.trueWhite[100],";\n    }\n    \n    .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {\n        background: ").concat(e.colors.alpha.trueWhite[100],";\n    }\n")})),I=(0,c.ZP)(o.Z)((function(){return"\n    border-radius: 0;\n"})),T=(0,c.ZP)(s.Z)((function(n){var e=n.theme;return"\n    @media (max-width: ".concat(e.breakpoints.values.sm,"px) {\n        display: none;\n    }\n    transition: ").concat(e.transitions.create(["background","color"]),";\n    color: ").concat(e.colors.alpha.trueWhite[50],";\n    position: absolute;\n    width: ").concat(e.spacing(5),";\n    height: ").concat(e.spacing(5),";\n    top: 50%;\n    margin-top: ").concat(e.spacing(-1.5),";\n    border-radius: 100px;\n\n    &:hover {\n      color: ").concat(e.colors.alpha.trueWhite[100],";\n      background: ").concat(e.colors.alpha.trueWhite[10],";\n    }\n\n    &.MuiSwipe-left {\n      left: ").concat(e.spacing(1.5),";\n    }\n    \n    &.MuiSwipe-right {\n      right: ").concat(e.spacing(1.5),";\n    }\n")})),C=(0,c.ZP)(l.Z)((function(n){var e=n.theme;return"\n    .swiper-pagination {\n      .swiper-pagination-bullet {\n        background: ".concat(e.colors.alpha.trueWhite[30],";\n        opacity: 1;\n\n        &.swiper-pagination-bullet-active {\n          background: ").concat(e.colors.alpha.trueWhite[100],";\n          width: 16px;\n          border-radius: 6px;\n        }\n      }\n    }\n")})),O=(0,c.ZP)(h.Z)((function(n){var e=n.theme;return"\n      background-color: ".concat(e.colors.error.lighter,";\n      color:  ").concat(e.colors.error.main,";\n")})),B=(0,c.ZP)(h.Z)((function(n){var e=n.theme;return"\n      background-color: ".concat(e.colors.success.lighter,";\n      color:  ").concat(e.colors.success.main,";\n")}));e.default=function(){var n=(0,j.$)().t,e=(0,p.Z)(),r=(0,t.useState)({interest:!0}),c=r[0],i=r[1],o=function(n){i(function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),a.forEach((function(e){P(n,e,r[e])}))}return n}({},c,P({},n.target.name,n.target.checked)))};return(0,a.jsxs)(M,{sx:{height:"100%"},children:[(0,a.jsx)(d.Z,{title:n("dashboard_finance_my_bank_title"),action:(0,a.jsx)(s.Z,{size:"small",children:(0,a.jsx)(_.Z,{})})}),(0,a.jsxs)(C,{sx:{mx:"auto",maxWidth:500,position:"relative",py:2,px:{xs:2,sm:8}},children:[(0,a.jsxs)(w.tq,{spaceBetween:30,slidesPerView:1,loop:!0,navigation:{nextEl:".MuiSwipe-right",prevEl:".MuiSwipe-left"},modules:[k.W_,k.tl],pagination:{clickable:!0,dynamicBullets:!0},children:[(0,a.jsx)(w.o5,{children:(0,a.jsxs)(S,{sx:{height:"100%",background:e.colors.gradients.green2,display:"flex",flexDirection:"column"},children:[(0,a.jsx)(d.Z,{sx:{alignItems:"flex-start",pt:3},action:(0,a.jsx)(u.Z,{variant:"h4",children:n("dashboard_finance_my_bank_name_example1")}),title:n("Balance"),subheader:"548 547 ".concat(n("currency")),subheaderTypographyProps:{variant:"h2"}}),(0,a.jsx)(l.Z,{sx:{pl:2,py:2},display:"flex",alignItems:"center",justifyContent:"space-between",children:(0,a.jsx)(u.Z,{variant:"h4",children:"**** 4856"})})]})}),(0,a.jsx)(w.o5,{children:(0,a.jsxs)(S,{sx:{height:"100%",background:e.colors.gradients.blue1,display:"flex",flexDirection:"column"},children:[(0,a.jsx)(d.Z,{sx:{alignItems:"flex-start",pt:3},action:(0,a.jsx)(u.Z,{variant:"h4",children:n("dashboard_finance_my_bank_name_example2")}),title:n("Balance"),subheader:"15 547 ".concat(n("currency")),subheaderTypographyProps:{variant:"h2"}}),(0,a.jsxs)(l.Z,{sx:{pl:2,py:2},display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,a.jsx)(u.Z,{variant:"h4",children:"**** 3466"}),(0,a.jsx)(x.Z,{arrow:!0,title:n("Disable Account"),children:(0,a.jsx)(g.Z,{checked:c.interest,onChange:o,color:"primary",name:"interest"})})]})]})}),(0,a.jsx)(w.o5,{children:(0,a.jsxs)(S,{sx:{height:"100%",background:e.colors.gradients.orange1,display:"flex",flexDirection:"column"},children:[(0,a.jsx)(d.Z,{sx:{alignItems:"flex-start",pt:3},action:(0,a.jsx)(u.Z,{variant:"h4",children:n("dashboard_finance_my_bank_name_example3")}),title:n("Balance"),subheader:"487 547 ".concat(n("currency")),subheaderTypographyProps:{variant:"h2"}}),(0,a.jsxs)(l.Z,{sx:{pl:2,py:2},display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,a.jsx)(u.Z,{variant:"h4",children:"**** 6545"}),(0,a.jsx)(x.Z,{arrow:!0,title:n("Disable Account"),children:(0,a.jsx)(g.Z,{checked:c.interest,onChange:o,color:"primary",name:"interest"})})]})]})})]}),(0,a.jsx)(T,{className:"MuiSwipe-root MuiSwipe-left",children:(0,a.jsx)(f.Z,{})}),(0,a.jsx)(T,{className:"MuiSwipe-root MuiSwipe-right",children:(0,a.jsx)(Z.Z,{})})]}),(0,a.jsx)(d.Z,{title:n("dashboard_finance_lastet_expenses_title")}),(0,a.jsxs)(m.Z,{disablePadding:!0,children:[(0,a.jsxs)(I,{children:[(0,a.jsx)(b.Z,{sx:{minWidth:"36px",display:"flex",alignItems:"center"},children:(0,a.jsx)(B,{children:(0,a.jsx)(v.Z,{})})}),(0,a.jsx)(y.Z,{primary:n("dashboard_finance_lastet_expenses_example1"),primaryTypographyProps:{variant:"h5",noWrap:!0}}),(0,a.jsx)(u.Z,{align:"right",variant:"body1",noWrap:!0,sx:{mr:2},children:"52 123 ".concat(n("currency"))}),(0,a.jsx)(Z.Z,{})]}),(0,a.jsxs)(I,{children:[(0,a.jsx)(b.Z,{sx:{minWidth:"36px",display:"flex",alignItems:"center"},children:(0,a.jsx)(O,{children:(0,a.jsx)(W.Z,{})})}),(0,a.jsx)(y.Z,{primary:n("dashboard_finance_lastet_expenses_example2"),primaryTypographyProps:{variant:"h5",noWrap:!0}}),(0,a.jsxs)(u.Z,{align:"right",variant:"body1",noWrap:!0,sx:{mr:2},children:["-","1 892 ".concat(n("currency"))]}),(0,a.jsx)(Z.Z,{})]}),(0,a.jsxs)(I,{children:[(0,a.jsx)(b.Z,{sx:{minWidth:"36px",display:"flex",alignItems:"center"},children:(0,a.jsx)(B,{children:(0,a.jsx)(v.Z,{})})}),(0,a.jsx)(y.Z,{primary:n("dashboard_finance_lastet_expenses_example3"),primaryTypographyProps:{variant:"h5",noWrap:!0}}),(0,a.jsx)(u.Z,{align:"right",variant:"body1",noWrap:!0,sx:{mr:2},children:"22 484 ".concat(n("currency"))}),(0,a.jsx)(Z.Z,{})]}),(0,a.jsxs)(I,{children:[(0,a.jsx)(b.Z,{sx:{minWidth:"36px",display:"flex",alignItems:"center"},children:(0,a.jsx)(O,{children:(0,a.jsx)(W.Z,{})})}),(0,a.jsx)(y.Z,{primary:n("dashboard_finance_lastet_expenses_example4"),primaryTypographyProps:{variant:"h5",noWrap:!0}}),(0,a.jsxs)(u.Z,{align:"right",variant:"body1",noWrap:!0,sx:{mr:2},children:["-","1 000 ".concat(n("currency"))]}),(0,a.jsx)(Z.Z,{})]}),(0,a.jsxs)(I,{children:[(0,a.jsx)(b.Z,{sx:{minWidth:"36px",display:"flex",alignItems:"center"},children:(0,a.jsx)(B,{children:(0,a.jsx)(v.Z,{})})}),(0,a.jsx)(y.Z,{primary:n("dashboard_finance_lastet_expenses_example5"),primaryTypographyProps:{variant:"h5",noWrap:!0}}),(0,a.jsx)(u.Z,{align:"right",variant:"body1",noWrap:!0,sx:{mr:2},children:"2 500 ".concat(n("currency"))}),(0,a.jsx)(Z.Z,{})]}),(0,a.jsxs)(I,{children:[(0,a.jsx)(b.Z,{sx:{minWidth:"36px",display:"flex",alignItems:"center"},children:(0,a.jsx)(O,{children:(0,a.jsx)(W.Z,{})})}),(0,a.jsx)(y.Z,{primary:n("dashboard_finance_lastet_expenses_example6"),primaryTypographyProps:{variant:"h5",noWrap:!0}}),(0,a.jsxs)(u.Z,{align:"right",variant:"body1",noWrap:!0,sx:{mr:2},children:["-","42 647 ".concat(n("currency"))]}),(0,a.jsx)(Z.Z,{})]})]})]})}}},function(n){n.O(0,[9990,5360,1849,8630,6153,4127,5210,9774,2888,179],(function(){return e=50034,n(n.s=e);var e}));var e=n.O();_N_E=e}]);