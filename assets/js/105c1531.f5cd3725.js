"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6448],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(t),p=r,g=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return t?a.createElement(g,c(c({ref:n},s),{},{components:t})):a.createElement(g,c({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<o;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71247:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),c=["components"],u={slug:"index",title:"Account management",description:"Hasura Cloud Account Management",keywords:["hasura","docs","cloud","account","email"],sidebar_label:"Account management"},i="Hasura Cloud account management",l={unversionedId:"graphql/cloud/account-management/index",id:"graphql/cloud/account-management/index",title:"Account management",description:"Hasura Cloud Account Management",source:"@site/docs/graphql/cloud/account-management/index.mdx",sourceDirName:"graphql/cloud/account-management",slug:"/graphql/cloud/account-management/index",permalink:"/docs/latest/graphql/cloud/account-management/index",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/cloud/account-management/index.mdx",tags:[],version:"current",frontMatter:{slug:"index",title:"Account management",description:"Hasura Cloud Account Management",keywords:["hasura","docs","cloud","account","email"],sidebar_label:"Account management"},sidebar:"cloudDocsSidebar",previous:{title:"Receipts",permalink:"/docs/latest/graphql/cloud/billing/receipts"},next:{title:"Change email",permalink:"/docs/latest/graphql/cloud/account-management/email-change"}},s={},d=[{value:"Introduction",id:"introduction",level:2}],m={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hasura-cloud-account-management"},"Hasura Cloud account management"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"On your Hasura Cloud ",(0,o.kt)("inlineCode",{parentName:"p"},"My Account")," page, you can manage account-related settings such as changing the email,\ncreating access tokens, and managing database session connections."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/graphql/cloud/account-management/email-change"},"Change email address on Hasura Cloud"))))}p.isMDXComponent=!0}}]);