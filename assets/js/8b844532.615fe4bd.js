"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[308],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),g=n,m=d["".concat(u,".").concat(g)]||d[g]||c[g]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83283:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),o=["components"],s={title:"BigQuery",description:"Hasura BigQuery database support",keywords:["hasura","docs","databases","bigquery"],slug:"index"},u="BigQuery",l={unversionedId:"graphql/core/databases/bigquery/index",id:"graphql/core/databases/bigquery/index",title:"BigQuery",description:"Hasura BigQuery database support",source:"@site/docs/graphql/core/databases/bigquery/index.mdx",sourceDirName:"graphql/core/databases/bigquery",slug:"/graphql/core/databases/bigquery/index",permalink:"/docs/latest/graphql/core/databases/bigquery/index",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/databases/bigquery/index.mdx",tags:[],version:"current",frontMatter:{title:"BigQuery",description:"Hasura BigQuery database support",keywords:["hasura","docs","databases","bigquery"],slug:"index"},sidebar:"docsSidebar",previous:{title:"Hasura - Citus compatibility",permalink:"/docs/latest/graphql/core/databases/citus-hyperscale-postgres/hasura-citus-compatibility"},next:{title:"Getting started",permalink:"/docs/latest/graphql/core/databases/bigquery/getting-started"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Supported features",id:"supported-features",level:2},{value:"Keep up to date",id:"keep-up-to-date",level:2},{value:"Know more",id:"know-more",level:2}],d={toc:c};function g(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bigquery"},"BigQuery"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Hasura allows connecting to a\n",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery"},"BigQuery")," database and building a\nGraphQL API based on the database schema."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Supported versions:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Hasura GraphQL engine ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0-alpha.1")," onwards"))),(0,i.kt)("h2",{id:"get-started"},"Get Started"),(0,i.kt)("p",null,"To try Hasura with BigQuery, you'll need your own new or existing\nBigQuery database."),(0,i.kt)("p",null,"Here is how you can get started with Hasura and BigQuery:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/databases/bigquery/getting-started"},"Getting Started with BigQuery")),(0,i.kt)("h2",{id:"supported-features"},"Supported features"),(0,i.kt)("p",null,"Hasura currently only supports queries on BigQuery."),(0,i.kt)("h2",{id:"keep-up-to-date"},"Keep up to date"),(0,i.kt)("p",null,"If you'd like to stay informed about the status of BigQuery support,\nsubscribe to our newsletter and join our discord!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hasura.io/newsletter/"},"https://hasura.io/newsletter/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.com/invite/hasura"},"https://discord.com/invite/hasura"))),(0,i.kt)("h2",{id:"know-more"},"Know more"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/databases/bigquery/getting-started"},"Getting Started")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/databases/bigquery/schema/index"},"Schema"))))}g.isMDXComponent=!0}}]);