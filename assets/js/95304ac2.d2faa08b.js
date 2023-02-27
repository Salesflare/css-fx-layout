"use strict";(self.webpackChunkcss_fx_layout_docs=self.webpackChunkcss_fx_layout_docs||[]).push([[7665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_label:"Show/Hide API",sidebar_position:5},i="Show/Hide Class API",a={unversionedId:"class-selectors/show-hide",id:"version-3.0/class-selectors/show-hide",title:"Show/Hide Class API",description:"The show/hide API allows you to control the visibility of elements depending on the size of the screen.",source:"@site/versioned_docs/version-3.0/class-selectors/show-hide.md",sourceDirName:"class-selectors",slug:"/class-selectors/show-hide",permalink:"/css-fx-layout/docs/class-selectors/show-hide",draft:!1,tags:[],version:"3.0",sidebarPosition:5,frontMatter:{sidebar_label:"Show/Hide API",sidebar_position:5},sidebar:"autoSidebar",previous:{title:"Responsive API",permalink:"/css-fx-layout/docs/class-selectors/responsive"},next:{title:"Responsive API",permalink:"/css-fx-layout/docs/responsive"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"showhide-class-api"},"Show/Hide Class API"),(0,o.kt)("p",null,"The show/hide API allows you to control the visibility of elements depending on the size of the screen.\nThis page describes how to use the show/hide API with class selectors. "),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The classes have the following naming scheme:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"show-[mediaQueryName]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hide-[mediaQueryName]"))),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"mediaQueryName")," being the name of one of the ",(0,o.kt)("a",{parentName:"p",href:"../responsive#media-queries"},"available media queries"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="show-gt-sm">I will only be visible on screens wider than 969px.</div>\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"While the responsive API generally is opt-in, the show/hide selectors are always available, even if you choose to not use the responsive API.")))}d.isMDXComponent=!0}}]);