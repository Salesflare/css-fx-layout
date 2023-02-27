"use strict";(self.webpackChunkcss_fx_layout_docs=self.webpackChunkcss_fx_layout_docs||[]).push([[3174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_label:"Responsive API",sidebar_position:5},i="Responsive API",o={unversionedId:"responsive",id:"version-2.1/responsive",title:"Responsive API",description:"This page describes css-fx-layout's responsive API.",source:"@site/versioned_docs/version-2.1/responsive.md",sourceDirName:".",slug:"/responsive",permalink:"/css-fx-layout/docs/2.1/responsive",draft:!1,tags:[],version:"2.1",sidebarPosition:5,frontMatter:{sidebar_label:"Responsive API",sidebar_position:5},sidebar:"autoSidebar",previous:{title:"Show/Hide API",permalink:"/css-fx-layout/docs/2.1/class-selectors/show-hide"}},s={},p=[{value:"Breakpoints",id:"breakpoints",level:2},{value:"Media Queries",id:"media-queries",level:2},{value:"Mixins",id:"mixins",level:2},{value:"Usage",id:"usage",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"responsive-api"},"Responsive API"),(0,r.kt)("p",null,"This page describes ",(0,r.kt)("inlineCode",{parentName:"p"},"css-fx-layout"),"'s responsive API."),(0,r.kt)("p",null,"The responsive API allows you to create different layouts for different screen sizes using breakpoint names like ",(0,r.kt)("inlineCode",{parentName:"p"},"xs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"xl"),"."),(0,r.kt)("admonition",{title:"Migration from Angular Flex-Layout",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The responsive API breakpoints and media queries are equal to those used in Angular Flex-Layout.")),(0,r.kt)("h2",{id:"breakpoints"},"Breakpoints"),(0,r.kt)("p",null,"The fx-layout media queries use the following breakpoints:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Breakpoint"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xs"),(0,r.kt)("td",{parentName:"tr",align:null},"599px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sm"),(0,r.kt)("td",{parentName:"tr",align:null},"969px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"md"),(0,r.kt)("td",{parentName:"tr",align:null},"1279px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lg"),(0,r.kt)("td",{parentName:"tr",align:null},"1919px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xl"),(0,r.kt)("td",{parentName:"tr",align:null},"5000px")))),(0,r.kt)("h2",{id:"media-queries"},"Media Queries"),(0,r.kt)("p",null,"These breakpoints result in the following media queries:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Media Query"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screen and (max-width: 599px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screen and (min-width: 600px) and (max-width: 959px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"md"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screen and (min-width: 960px) and (max-width: 1279px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lg"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screen and (min-width: 1280px) and (max-width: 1919px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screen and (min-width: 1920px) and (max-width: 5000px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lt-sm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screen and (max-width: 599px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lt-md"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screen and (max-width: 959px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lt-lg"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screen and (max-width: 1279px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lt-xl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screen and (max-width: 1919px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gt-xs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screen and (min-width: 600px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gt-sm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screen and (min-width: 960px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gt-md"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screen and (min-width: 1280px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gt-lg"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"screen and (min-width: 1920px)"))))),(0,r.kt)("h2",{id:"mixins"},"Mixins"),(0,r.kt)("p",null,"You also get access to mixins named like the media break points, which you can use to apply your own styles based on the respective screen size:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},'@use "css-fx-layout" as fx;\n\n// This will make the div blue on xs sized screens\ndiv {\n    background-color: red;\n    @include fx.xs {\n        background-color: blue;\n    }\n}\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To learn how to use the responsive API please refer to the following pages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/css-fx-layout/docs/2.1/attribute-selectors/responsive"},"Attribute selector responsive API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/css-fx-layout/docs/2.1/class-selectors/responsive"},"Class selector responsive API"))))}u.isMDXComponent=!0}}]);