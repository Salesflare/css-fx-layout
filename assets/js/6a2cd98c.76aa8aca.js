"use strict";(self.webpackChunkcss_fx_layout_docs=self.webpackChunkcss_fx_layout_docs||[]).push([[9272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=d(n),m=l,u=f["".concat(s,".").concat(m)]||f[m]||c[m]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[f]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_label:"Flex API",sidebar_position:3},i="Flex API",o={unversionedId:"class-selectors/flex",id:"version-3.0/class-selectors/flex",title:"Flex API",description:"This page describes how to use the class based flex APIs and supports three",source:"@site/versioned_docs/version-3.0/class-selectors/flex.mdx",sourceDirName:"class-selectors",slug:"/class-selectors/flex",permalink:"/css-fx-layout/docs/class-selectors/flex",draft:!1,tags:[],version:"3.0",sidebarPosition:3,frontMatter:{sidebar_label:"Flex API",sidebar_position:3},sidebar:"autoSidebar",previous:{title:"Gap API",permalink:"/css-fx-layout/docs/class-selectors/gap"},next:{title:"Responsive API",permalink:"/css-fx-layout/docs/class-selectors/responsive"}},s={},d=[{value:"<code>fx-flex</code> classes",id:"fx-flex-classes",level:2},{value:"Support for flex sizes",id:"support-for-flex-sizes",level:3},{value:"<code>fx-flex-fill</code> class",id:"fx-flex-fill-class",level:2},{value:"<code>fx-flex-align</code> selectors",id:"fx-flex-align-selectors",level:2}],p={toc:d},f="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flex-api"},"Flex API"),(0,l.kt)("p",null,"This page describes how to use the class based flex APIs and supports three\ntypes of class-selectors: ",(0,l.kt)("inlineCode",{parentName:"p"},"fx-flex"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"fx-flex-fill")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"fx-flex-align"),"."),(0,l.kt)("h2",{id:"fx-flex-classes"},(0,l.kt)("inlineCode",{parentName:"h2"},"fx-flex")," classes"),(0,l.kt)("p",null,"The flex API consists of classes with the following names and their resulting CSS:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Selector"),(0,l.kt)("th",{parentName:"tr",align:null},"CSS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex: 1 1 0;"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex-auto")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex-basis: 100%;"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex-grow")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex: 1 1 100%;"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex-initial")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex: 0 1 auto;"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex-none")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex: 0 0 auto;"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex-nogrow")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex: 0 1 auto;"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex-noshrink")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex: 1 0 auto;"))))),(0,l.kt)("h3",{id:"support-for-flex-sizes"},"Support for flex sizes"),(0,l.kt)("p",null,"Additionally, you can generate flex size selectors using the mixins as shown in the following example. They will extend the ",(0,l.kt)("inlineCode",{parentName:"p"},"fx-flex")," classes\nwith the following schema"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Selector"),(0,l.kt)("th",{parentName:"tr",align:null},"CSS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex--<number>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex: 1 1 <number>%;"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex--30")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex: 1 1 30%;"))))),(0,l.kt)("p",null,"This can be used to give elements a width with the percentage of the numerical value in relation to their flex container."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"@include fx.flex-size-class-selectors;\n@include fx.flex-size-class-selectors-from-list(33 66);\n")),(0,l.kt)("p",null,"The mixins can be configured with parameters to generate only the selectors you need. The first mixin can generate a range of selectors with a configurable\nstart and end and a given increment."),(0,l.kt)("p",null,"The second mixin will generate only selectors for the numbers passed as the first argument."),(0,l.kt)("p",null,"Both mixins can generate selectors for the responsive API (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"fx-flex--50--gt-sm"),")"),(0,l.kt)("h2",{id:"fx-flex-fill-class"},(0,l.kt)("inlineCode",{parentName:"h2"},"fx-flex-fill")," class"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"fx-flex-fill")," class can be used to make a child of a flex-container fill the entire container.\nIt takes no arguments and adds the following properties to the element:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"margin: 0;\nwidth: 100%;\nheight: 100%;\nmin-width: 100%;\nmin-height: 100%;\n")),(0,l.kt)("h2",{id:"fx-flex-align-selectors"},(0,l.kt)("inlineCode",{parentName:"h2"},"fx-flex-align")," selectors"),(0,l.kt)("p",null,"We offer the following flex align classes with their resulting CSS:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"CSS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex-align--start")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"align-self: flex-start;"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex-align--center")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"align-self: center;"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex-align--end")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"align-self: flex-end;"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex-align--baseline")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"align-self: baseline;"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fx-flex-align--stretch")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"align-self: stretch;"))))))}c.isMDXComponent=!0}}]);