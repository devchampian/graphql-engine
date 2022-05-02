"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3566],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return c}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=n,m=d["".concat(s,".").concat(c)]||d[c]||g[c]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49399:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return g}});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),o=["components"],l={description:"Guides, Tutorials, and Resources around using Hasura and GraphQL",keywords:["hasura","docs","guide","tutorial","resource"],slug:"index"},s="Guides / Tutorials / Resources",p={unversionedId:"graphql/core/guides/index",id:"graphql/core/guides/index",title:"Guides / Tutorials / Resources",description:"Guides, Tutorials, and Resources around using Hasura and GraphQL",source:"@site/docs/graphql/core/guides/index.mdx",sourceDirName:"graphql/core/guides",slug:"/graphql/core/guides/index",permalink:"/graphql-engine/latest/graphql/core/guides/index",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/guides/index.mdx",tags:[],version:"current",frontMatter:{description:"Guides, Tutorials, and Resources around using Hasura and GraphQL",keywords:["hasura","docs","guide","tutorial","resource"],slug:"index"},sidebar:"docsSidebar",previous:{title:"Security Vulnerability Protocol",permalink:"/graphql-engine/latest/graphql/core/security-disclosure/index"},next:{title:"Guides: Data modelling",permalink:"/graphql-engine/latest/graphql/core/guides/data-modelling/index"}},u={},g=[],d={toc:g};function c(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"guides--tutorials--resources"},"Guides / Tutorials / Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/data-modelling/index"},"Data modelling guides"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/data-modelling/one-to-one"},"One-to-one relationship")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/data-modelling/one-to-many"},"One-to-many relationship")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/data-modelling/many-to-many"},"Many-to-many relationship")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/data-modelling/soft-deletes"},"Setting up soft deletes for data")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/postgres/index"},"Postgres basics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/docker-networking"},"Docker networking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/sample-apps/index"},"Sample apps & boilerplates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/integrations/index"},"Integration/migration tutorials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/monitoring/index"},"Integrating with monitoring frameworks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/export-graphql-schema"},"Exporting the Hasura GraphQL schema")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/auditing-tables"},"Auditing tables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/telemetry"},"Telemetry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/code-editor-integrations/index"},"Code Editor Integrations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/mysql-preview"},"MySQL preview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/guides/upgrade-hasura-v2"},"Updating to Hasura v2"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are new to GraphQL you can check out some front-end and back-end\ntutorials for building applications using GraphQL at\n",(0,i.kt)("a",{parentName:"p",href:"https://hasura.io/learn/"},"hasura.io/learn"),"."))))}c.isMDXComponent=!0}}]);