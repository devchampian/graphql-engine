"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4059],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return h}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return r?t.createElement(f,o(o({ref:n},c),{},{components:r})):t.createElement(f,o({ref:n},c))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22138:function(e,n,r){var t=r(67294),a=r(57932),i=r(72389),o=r(86010),p=r(71077);n.Z=function(e){var n=e.query,r=e.variables,l=e.response,s=e.viewOnly,c=void 0===s||s,u=(0,i.Z)();return t.createElement("div",{className:"graphiql "+(0,o.Z)({"with-vars":!!r,"view-only":c})},t.createElement(a.ZP,{readOnly:c,editorTheme:"dracula",schema:null,fetcher:u?(0,p.n)({url:"https://hasura.io/graphql"}):function(){return null},query:n,variables:r,response:l}))}},69533:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var t=r(83117),a=r(80102),i=(r(67294),r(3905)),o=r(22138),p=["components"],l={description:"Hasura GraphQL API reference",keywords:["hasura","docs","GraphQL API","reference"],slug:"index"},s="GraphQL API Reference",c={unversionedId:"graphql/core/api-reference/graphql-api/index",id:"graphql/core/api-reference/graphql-api/index",title:"GraphQL API Reference",description:"Hasura GraphQL API reference",source:"@site/docs/graphql/core/api-reference/graphql-api/index.mdx",sourceDirName:"graphql/core/api-reference/graphql-api",slug:"/graphql/core/api-reference/graphql-api/index",permalink:"/graphql-engine/latest/graphql/core/api-reference/graphql-api/index",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/api-reference/graphql-api/index.mdx",tags:[],version:"current",frontMatter:{description:"Hasura GraphQL API reference",keywords:["hasura","docs","GraphQL API","reference"],slug:"index"},sidebar:"docsSidebar",previous:{title:"API Reference",permalink:"/graphql-engine/latest/graphql/core/api-reference/index"},next:{title:"Query / Subscription",permalink:"/graphql-engine/latest/graphql/core/api-reference/graphql-api/query"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Endpoint",id:"endpoint",level:2},{value:"Request types",id:"request-types",level:2},{value:"Batching requests",id:"batching-requests",level:2}],h={toc:d};function f(e){var n=e.components,r=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,t.Z)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graphql-api-reference"},"GraphQL API Reference"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"All GraphQL requests for queries, subscriptions and mutations are made\nto the GraphQL API."),(0,i.kt)("h2",{id:"endpoint"},"Endpoint"),(0,i.kt)("p",null,"All requests are ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," requests to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/graphql")," (or\n",(0,i.kt)("inlineCode",{parentName:"p"},"/v1alpha1/graphql"),") endpoint."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/graphql")," endpoint returns HTTP 200 status codes for all\nresponses. This is a ",(0,i.kt)("strong",{parentName:"p"},"breaking")," change from the ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1alpha1/graphql"),"\nbehaviour, where request errors and internal errors were responded with\n4xx and 5xx status codes."))),(0,i.kt)("h2",{id:"request-types"},"Request types"),(0,i.kt)("p",null,"The following types of requests can be made using the GraphQL API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/api-reference/graphql-api/query"},"Query / Subscription")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/api-reference/graphql-api/mutation"},"Mutation"))),(0,i.kt)("h2",{id:"batching-requests"},"Batching requests"),(0,i.kt)("p",null,"The GraphQL API provides support for batched requests (which can be a\ncombination of queries and mutations). The endpoint will accept an array\nof operations in place of a single operation, and return an array of\ncorresponding responses."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," using a client which supports batching (such as Apollo\nClient), we can send two query operations in one request:"),(0,i.kt)(o.Z,{query:"query first {\n  author(where: {id: {_eq: 1}}) {\n    id\n    name\n  }\n}\nquery second {\n  author(where: {id: {_eq: 2}}) {\n    id\n    name\n  }\n}",response:'[\n  {\n    "data": {\n      "author": [\n        {\n          "id": 1,\n          "name": "Justin"\n        }\n      ]\n    }\n  },\n  {\n    "data": {\n      "author": [\n        {\n          "id": 2,\n          "name": "Beltran"\n        }\n      ]\n    }\n  }\n]',mdxType:"GraphiQLIDE"}))}f.isMDXComponent=!0}}]);