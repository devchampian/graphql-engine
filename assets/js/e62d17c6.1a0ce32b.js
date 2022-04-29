"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2692],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(r),g=n,y=d["".concat(c,".").concat(g)]||d[g]||p[g]||s;return r?a.createElement(y,i(i({ref:t},l),{},{components:r})):a.createElement(y,i({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72393:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=r(83117),n=r(80102),s=(r(67294),r(3905)),i=["components"],o={description:"Getting Started with Hasura &amp; Citus - Hyperscale",keywords:["hasura","docs","databases","citus"],slug:"index"},c="Getting started with Citus - Hyperscale",u={unversionedId:"graphql/core/databases/citus-hyperscale-postgres/getting-started/index",id:"graphql/core/databases/citus-hyperscale-postgres/getting-started/index",title:"Getting started with Citus - Hyperscale",description:"Getting Started with Hasura &amp; Citus - Hyperscale",source:"@site/docs/graphql/core/databases/citus-hyperscale-postgres/getting-started/index.mdx",sourceDirName:"graphql/core/databases/citus-hyperscale-postgres/getting-started",slug:"/graphql/core/databases/citus-hyperscale-postgres/getting-started/index",permalink:"/graphql-engine/latest/graphql/core/databases/citus-hyperscale-postgres/getting-started/index",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/databases/citus-hyperscale-postgres/getting-started/index.mdx",tags:[],version:"current",frontMatter:{description:"Getting Started with Hasura &amp; Citus - Hyperscale",keywords:["hasura","docs","databases","citus"],slug:"index"},sidebar:"docsSidebar",previous:{title:"Citus / Hyperscale",permalink:"/graphql-engine/latest/graphql/core/databases/citus-hyperscale-postgres/index"},next:{title:"Hasura Cloud",permalink:"/graphql-engine/latest/graphql/core/databases/citus-hyperscale-postgres/getting-started/cloud"}},l={},p=[],d={toc:p};function g(e){var t=e.components,r=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"getting-started-with-citus---hyperscale"},"Getting started with Citus - Hyperscale"),(0,s.kt)("p",null,"To try Hasura with Citus, you'll need your own new or existing Citus database."),(0,s.kt)("p",null,"Here are 2 ways you can get started with Hasura:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/databases/citus-hyperscale-postgres/getting-started/cloud"},"Hasura Cloud"),": You'll need to be\nable to access your Citus database from Hasura Cloud."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/databases/citus-hyperscale-postgres/getting-started/docker"},"Docker"),": Run Hasura with Docker\nand then connect your Citus database to Hasura.")))}g.isMDXComponent=!0}}]);