"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[377],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),g=a,f=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45800:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],s={description:"Audit actions on tables in Postgres with Hasura",keywords:["hasura","docs","guide","postgres","audit table"],sidebar_position:9,sidebar_label:"Auditing tables"},u="Auditing actions on tables in Postgres",l={unversionedId:"graphql/core/guides/auditing-tables",id:"graphql/core/guides/auditing-tables",title:"Auditing actions on tables in Postgres",description:"Audit actions on tables in Postgres with Hasura",source:"@site/docs/graphql/core/guides/auditing-tables.mdx",sourceDirName:"graphql/core/guides",slug:"/graphql/core/guides/auditing-tables",permalink:"/docs/latest/graphql/core/guides/auditing-tables",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/guides/auditing-tables.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Audit actions on tables in Postgres with Hasura",keywords:["hasura","docs","guide","postgres","audit table"],sidebar_position:9,sidebar_label:"Auditing tables"},sidebar:"docsSidebar",previous:{title:"Exporting the Hasura GraphQL schema",permalink:"/docs/latest/graphql/core/guides/export-graphql-schema"},next:{title:"Telemetry",permalink:"/docs/latest/graphql/core/guides/telemetry"}},c={},p=[],d={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"auditing-actions-on-tables-in-postgres"},"Auditing actions on tables in Postgres"),(0,i.kt)("p",null,"Typically audit logging is added to some of the tables to comply with\nvarious certifications. You may want to capture the user information\n(role and the session variables) for every change in Postgres that is\ndone through the GraphQL engine."),(0,i.kt)("p",null,"For every mutation, Hasura roughly executes the following transaction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'BEGIN;\nSET local "hasura.user" = \'{"x-hasura-role": "role", ... various session variables}\'\nSQL related to the mutation\nCOMMIT;\n')),(0,i.kt)("p",null,"This information can therefore be captured in any trigger on the\nunderlying tables by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"current_setting")," function as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"current_setting('hasura.user');\n")),(0,i.kt)("p",null,"We've set up some utility functions that'll let you quickly get started\nwith auditing in this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hasura/audit-trigger"},"repo"),"."))}g.isMDXComponent=!0}}]);