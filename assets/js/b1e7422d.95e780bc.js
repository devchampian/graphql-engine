"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4037],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=n.createContext({}),l=function(e){var r=n.useContext(g),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(g.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,m=p["".concat(g,".").concat(d)]||p[d]||u[d]||i;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var g in r)hasOwnProperty.call(r,g)&&(o[g]=r[g]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},22138:function(e,r,t){var n=t(67294),a=t(57932),i=t(72389),s=t(86010),o=t(71077);r.Z=function(e){var r=e.query,t=e.variables,g=e.response,l=e.viewOnly,c=void 0===l||l,u=(0,i.Z)();return n.createElement("div",{className:"graphiql "+(0,s.Z)({"with-vars":!!t,"view-only":c})},n.createElement(a.ZP,{readOnly:c,editorTheme:"dracula",schema:null,fetcher:u?(0,o.n)({url:"https://hasura.io/graphql"}):function(){return null},query:r,variables:t,response:g}))}},26731:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return g},metadata:function(){return c},toc:function(){return p}});var n=t(83117),a=t(80102),i=(t(67294),t(3905)),s=t(22138),o=["components"],g={sidebar_label:"Aggregation queries",sidebar_position:3,description:"Make aggregation queries on MS SQL Server with Hasura",keywords:["hasura","docs","ms sql server","query","aggregation query"]},l="MS SQL Server: Aggregation queries",c={unversionedId:"graphql/core/databases/ms-sql-server/queries/aggregation-queries",id:"graphql/core/databases/ms-sql-server/queries/aggregation-queries",title:"MS SQL Server: Aggregation queries",description:"Make aggregation queries on MS SQL Server with Hasura",source:"@site/docs/graphql/core/databases/ms-sql-server/queries/aggregation-queries.mdx",sourceDirName:"graphql/core/databases/ms-sql-server/queries",slug:"/graphql/core/databases/ms-sql-server/queries/aggregation-queries",permalink:"/graphql-engine/latest/graphql/core/databases/ms-sql-server/queries/aggregation-queries",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/databases/ms-sql-server/queries/aggregation-queries.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Aggregation queries",sidebar_position:3,description:"Make aggregation queries on MS SQL Server with Hasura",keywords:["hasura","docs","ms sql server","query","aggregation query"]},sidebar:"docsSidebar",previous:{title:"Nested object queries",permalink:"/graphql-engine/latest/graphql/core/databases/ms-sql-server/queries/nested-object-queries"},next:{title:"Filter query results / search queries",permalink:"/graphql-engine/latest/graphql/core/databases/ms-sql-server/queries/query-filters"}},u={},p=[{value:"<strong>Aggregate</strong> fields",id:"aggregate-fields",level:2},{value:"Fetch aggregated data of an object",id:"fetch-aggregated-data-of-an-object",level:2},{value:"Fetch aggregated data on nested objects",id:"ms-sql-server-nested-aggregate",level:2}],d={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ms-sql-server-aggregation-queries"},"MS SQL Server: Aggregation queries"),(0,i.kt)("h2",{id:"aggregate-fields"},(0,i.kt)("strong",{parentName:"h2"},"Aggregate")," fields"),(0,i.kt)("p",null,"You can fetch aggregations on columns along with nodes using an\naggregation query."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"name of the aggregate field")," is of the form\n",(0,i.kt)("inlineCode",{parentName:"p"},"<field-name> + _aggregate"),"."),(0,i.kt)("p",null,"Common aggregation functions are ",(0,i.kt)("inlineCode",{parentName:"p"},"count"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sum"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"avg"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"min"),",\netc. You can see the complete specification of the aggregate field in\nthe ",(0,i.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/graphql-api/query#aggregateobject"},"API reference"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For more advanced use cases, you can use\n",(0,i.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/databases/ms-sql-server/schema/views"},"views"),"."))),(0,i.kt)("h2",{id:"fetch-aggregated-data-of-an-object"},"Fetch aggregated data of an object"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Fetch a list of articles with aggregated data of their\nrating:"),(0,i.kt)(s.Z,{query:"query {\n  articles_aggregate {\n    aggregate {\n      count\n      sum {\n        rating\n      }\n      avg {\n        rating\n      }\n      max {\n        rating\n      }\n    }\n  }\n}",response:'{\n  "data": {\n    "articles_aggregate": {\n      "aggregate": {\n        "count": 10,\n        "sum": {\n          "rating": 26\n        },\n        "avg": {\n          "rating": 2.6\n        },\n        "max": {\n          "rating": 4\n        }\n      }\n    }\n  }\n}',mdxType:"GraphiQLIDE"}),(0,i.kt)("h2",{id:"ms-sql-server-nested-aggregate"},"Fetch aggregated data on nested objects"),(0,i.kt)("p",null,"The following is an example of a nested object query with aggregations\non the ",(0,i.kt)("strong",{parentName:"p"},"array relationship")," between an author and articles."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:"),' Fetch author with id "1" and a nested list of articles with\naggregated data of their rating:'),(0,i.kt)(s.Z,{query:"query {\n  authors (where: {id: {_eq: 1}}) {\n    id\n    name\n    articles_aggregate {\n      aggregate {\n        count\n        avg {\n          rating\n        }\n        max {\n          rating\n        }\n      }\n    }\n  }\n}",response:'{\n  "data": {\n    "authors": [\n      {\n        "id": 1,\n        "name": "Justin",\n        "articles_aggregate": {\n          "aggregate": {\n            "count": 2,\n            "avg": {\n              "rating": 2.5\n            },\n            "max": {\n              "rating": 4\n            }\n          },\n        }\n      }\n    ]\n  }\n}',mdxType:"GraphiQLIDE"}))}m.isMDXComponent=!0}}]);