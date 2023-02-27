"use strict";(self.webpackChunkcss_fx_layout_docs=self.webpackChunkcss_fx_layout_docs||[]).push([[5664],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Responsive API",sidebar_position:4},i="Responsive Attribute API",s={unversionedId:"attribute-selectors/responsive",id:"version-3.0/attribute-selectors/responsive",title:"Responsive Attribute API",description:"This page describes how to use the responsive API with attribute selectors. To generally read about the responsive API see this documentation page.",source:"@site/versioned_docs/version-3.0/attribute-selectors/responsive.md",sourceDirName:"attribute-selectors",slug:"/attribute-selectors/responsive",permalink:"/css-fx-layout/docs/attribute-selectors/responsive",draft:!1,tags:[],version:"3.0",sidebarPosition:4,frontMatter:{sidebar_label:"Responsive API",sidebar_position:4},sidebar:"autoSidebar",previous:{title:"Flex API",permalink:"/css-fx-layout/docs/attribute-selectors/flex"},next:{title:"Show/Hide API",permalink:"/css-fx-layout/docs/attribute-selectors/show-hide"}},l={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"responsive-attribute-api"},"Responsive Attribute API"),(0,a.kt)("p",null,"This page describes how to use the responsive API with attribute selectors. To generally read about the responsive API see ",(0,a.kt)("a",{parentName:"p",href:"../responsive"},"this documentation page"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The responsive API is opt-in, so you need to actually pass ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," as the parameter to all mixins which generate your selectors."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"@include fx.attribute-selectors(true);\n")),(0,a.kt)("p",null,"If you include other selectors (e.g. gap) you need to take care of passing the argument to these, too."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"If you use attribute selectors you can just add the media query name to every attribute in order to make it apply only when the specific media query is active."),(0,a.kt)("p",null,"The naming scheme is the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data-layout-[mediaQueryName]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data-layout-align-[mediaQueryName]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data-layout-gap-[mediaQueryName]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data-flex-[mediaQueryName]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data-flex-fill-[mediaQueryName]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data-flex-align-[mediaQueryName]"))),(0,a.kt)("p",null,"With the media query name being for example ",(0,a.kt)("inlineCode",{parentName:"p"},"xs")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"lt-md"),". See  ",(0,a.kt)("a",{parentName:"p",href:"../responsive"},"this page")," for a full list."),(0,a.kt)("p",null,"For example if you want to create a layout, which is a row per default but a column on small screens:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div data-layout="row"\n\x3c!-- highlight-next-line --\x3e\n     data-layout-lt-md="column">\n    <span>One</span>\n    <span>Two</span>\n    <span>Three</span>\n</div>\n')))}d.isMDXComponent=!0}}]);