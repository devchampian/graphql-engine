"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9942],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),g=a,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},23516:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var n=r(83117),a=r(80102),s=(r(67294),r(3905)),o=["components"],i={slug:"index",description:"Getting Started with Hasura & MS SQL Server",keywords:["hasura","docs","databases","ms sql","sql server"]},c="Getting started with MS SQL Server",l={unversionedId:"graphql/core/databases/ms-sql-server/getting-started/index",id:"graphql/core/databases/ms-sql-server/getting-started/index",title:"Getting started with MS SQL Server",description:"Getting Started with Hasura & MS SQL Server",source:"@site/docs/graphql/core/databases/ms-sql-server/getting-started/index.mdx",sourceDirName:"graphql/core/databases/ms-sql-server/getting-started",slug:"/graphql/core/databases/ms-sql-server/getting-started/index",permalink:"/docs/latest/graphql/core/databases/ms-sql-server/getting-started/index",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/databases/ms-sql-server/getting-started/index.mdx",tags:[],version:"current",frontMatter:{slug:"index",description:"Getting Started with Hasura & MS SQL Server",keywords:["hasura","docs","databases","ms sql","sql server"]},sidebar:"docsSidebar",previous:{title:"MS SQL Server",permalink:"/docs/latest/graphql/core/databases/ms-sql-server/index"},next:{title:"Hasura Cloud",permalink:"/docs/latest/graphql/core/databases/ms-sql-server/getting-started/cloud"}},u={},d=[],p={toc:d};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"getting-started-with-ms-sql-server"},"Getting started with MS SQL Server"),(0,s.kt)("p",null,"To try Hasura with SQL Server, you'll need your own new or existing SQL Server database."),(0,s.kt)("p",null,"Here are 2 ways you can get started with Hasura:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/databases/ms-sql-server/getting-started/cloud"},"Hasura Cloud")," : You'll need to be able to access your SQL Server database from Hasura Cloud."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/databases/ms-sql-server/getting-started/docker"},"Docker"),": Run Hasura with Docker and then connect your SQL Server database to Hasura.")))}g.isMDXComponent=!0}}]);