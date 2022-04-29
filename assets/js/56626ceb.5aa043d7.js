"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3469],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return g}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),u=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return a.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),g=n,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return t?a.createElement(m,s(s({ref:r},l),{},{components:t})):a.createElement(m,s({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34115:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=t(83117),n=t(80102),o=(t(67294),t(3905)),s=["components"],i={title:"Schema",description:"Manage GraphQL schema over BigQuery with Hasura",keywords:["hasura","docs","bigquery","schema"],slug:"index"},c="BigQuery: Schema",u={unversionedId:"graphql/core/databases/bigquery/schema/index",id:"graphql/core/databases/bigquery/schema/index",title:"Schema",description:"Manage GraphQL schema over BigQuery with Hasura",source:"@site/docs/graphql/core/databases/bigquery/schema/index.mdx",sourceDirName:"graphql/core/databases/bigquery/schema",slug:"/graphql/core/databases/bigquery/schema/index",permalink:"/docs/latest/graphql/core/databases/bigquery/schema/index",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/databases/bigquery/schema/index.mdx",tags:[],version:"current",frontMatter:{title:"Schema",description:"Manage GraphQL schema over BigQuery with Hasura",keywords:["hasura","docs","bigquery","schema"],slug:"index"},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/docs/latest/graphql/core/databases/bigquery/getting-started"},next:{title:"Customise auto-generated fields",permalink:"/docs/latest/graphql/core/databases/bigquery/schema/custom-field-names"}},l={},p=[],d={toc:p};function g(e){var r=e.components,t=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bigquery-schema"},"BigQuery: Schema"),(0,o.kt)("p",null,"The Hasura GraphQL engine automatically generates your GraphQL schema\nand resolvers based on your tables/views in BigQuery. ",(0,o.kt)("strong",{parentName:"p"},"You don't need\nto write a GraphQL schema or resolvers.")," See ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/how-it-works/index"},"How Hasura GraphQL engine works")," for more details."),(0,o.kt)("p",null,"The Hasura console gives you UI tools that speed up your data-modelling\nprocess, or working with your existing database."),(0,o.kt)("p",null,"The Hasura GraphQL engine lets you do anything you would usually do with\nBigQuery by giving you GraphQL over native BigQuery constructs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/databases/bigquery/schema/custom-field-names"},"Customise auto-generated fields"))))}g.isMDXComponent=!0}}]);