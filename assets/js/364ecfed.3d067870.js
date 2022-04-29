"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3727],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=s,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return t?n.createElement(b,i(i({ref:r},u),{},{components:t})):n.createElement(b,i({ref:r},u))}));function d(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22138:function(e,r,t){var n=t(67294),s=t(57932),a=t(72389),i=t(86010),o=t(71077);r.Z=function(e){var r=e.query,t=e.variables,l=e.response,c=e.viewOnly,u=void 0===c||c,p=(0,a.Z)();return n.createElement("div",{className:"graphiql "+(0,i.Z)({"with-vars":!!t,"view-only":u})},n.createElement(s.ZP,{readOnly:u,editorTheme:"dracula",schema:null,fetcher:p?(0,o.n)({url:"https://hasura.io/graphql"}):function(){return null},query:r,variables:t,response:l}))}},13242:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=t(83117),s=t(80102),a=(t(67294),t(3905)),i=t(22138),o=["components"],l={sidebar_label:"Simple object queries",sidebar_position:1,description:"Make simple object queries on MS SQL Server in Hasura",keywords:["hasura","docs","ms sql server","object query"]},c="MS SQL Server: Simple object queries",u={unversionedId:"graphql/core/databases/ms-sql-server/queries/simple-object-queries",id:"graphql/core/databases/ms-sql-server/queries/simple-object-queries",title:"MS SQL Server: Simple object queries",description:"Make simple object queries on MS SQL Server in Hasura",source:"@site/docs/graphql/core/databases/ms-sql-server/queries/simple-object-queries.mdx",sourceDirName:"graphql/core/databases/ms-sql-server/queries",slug:"/graphql/core/databases/ms-sql-server/queries/simple-object-queries",permalink:"/graphql-engine/latest/graphql/core/databases/ms-sql-server/queries/simple-object-queries",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/databases/ms-sql-server/queries/simple-object-queries.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Simple object queries",sidebar_position:1,description:"Make simple object queries on MS SQL Server in Hasura",keywords:["hasura","docs","ms sql server","object query"]},sidebar:"docsSidebar",previous:{title:"MS SQL Server: Queries",permalink:"/graphql-engine/latest/graphql/core/databases/ms-sql-server/queries/index"},next:{title:"Nested object queries",permalink:"/graphql-engine/latest/graphql/core/databases/ms-sql-server/queries/nested-object-queries"}},p={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Fetch list of objects",id:"fetch-list-of-objects",level:2}],d={toc:m};function b(e){var r=e.components,t=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ms-sql-server-simple-object-queries"},"MS SQL Server: Simple object queries"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"You can fetch a single node or multiple nodes of the same type using a\nsimple object query."),(0,a.kt)("h2",{id:"fetch-list-of-objects"},"Fetch list of objects"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," Fetch a list of authors:"),(0,a.kt)(i.Z,{query:"query {\n  authors {\n    id\n    name\n  }\n}",response:'{\n  "data": {\n    "authors": [\n      {\n        "id": 1,\n        "name": "Justin"\n      },\n      {\n        "id": 2,\n        "name": "Beltran"\n      },\n      {\n        "id": 3,\n        "name": "Sidney"\n      },\n      {\n        "id": 4,\n        "name": "Anjela"\n      }\n    ]\n  }\n}',mdxType:"GraphiQLIDE"}),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/graphql-api/query#simpleobject"},"API reference")," for more details."))}b.isMDXComponent=!0}}]);