"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9009],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,h=g["".concat(l,".").concat(m)]||g[m]||c[m]||s;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},96413:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=r(83117),a=r(80102),s=(r(67294),r(3905)),i=["components"],o={sidebar_label:"Event trigger samples",sidebar_position:6,description:"Examples for event triggers with Hasura",keywords:["hasura","docs","event trigger","example"]},l="Event trigger samples",p={unversionedId:"graphql/core/event-triggers/samples",id:"graphql/core/event-triggers/samples",title:"Event trigger samples",description:"Examples for event triggers with Hasura",source:"@site/docs/graphql/core/event-triggers/samples.mdx",sourceDirName:"graphql/core/event-triggers",slug:"/graphql/core/event-triggers/samples",permalink:"/graphql-engine/latest/graphql/core/event-triggers/samples",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/event-triggers/samples.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Event trigger samples",sidebar_position:6,description:"Examples for event triggers with Hasura",keywords:["hasura","docs","event trigger","example"]},sidebar:"docsSidebar",previous:{title:"Using serverless functions",permalink:"/graphql-engine/latest/graphql/core/event-triggers/serverless"},next:{title:"Cleaning up event data",permalink:"/graphql-engine/latest/graphql/core/event-triggers/clean-up"}},u={},c=[{value:"Boilerplates",id:"boilerplates",level:2},{value:"Push Notifications",id:"push-notifications",level:2},{value:"Data Transformations (ETL)",id:"data-transformations-etl",level:2}],g={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"event-trigger-samples"},"Event trigger samples"),(0,s.kt)("h2",{id:"boilerplates"},"Boilerplates"),(0,s.kt)("p",null,"Here are a few boilerplates you can use to build and deploy event\ntriggers on different cloud providers:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Source code:\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/boilerplates/event-triggers"},"https://github.com/hasura/graphql-engine/tree/master/community/boilerplates/event-triggers"))),(0,s.kt)("p",null,"There are 2 types of boilerplates:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Echo")," Returns the event payload with some augmented data. It helps\nyou in understanding the event payload and parsing it."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Mutation")," Makes a mutation based on the event payload. It helps in\nunderstanding database access inside an event trigger."),(0,s.kt)("h2",{id:"push-notifications"},"Push Notifications"),(0,s.kt)("p",null,"Here's a ",(0,s.kt)("a",{parentName:"p",href:"https://serverless-push.demo.hasura.io/"},"notification demo app")," showcasing sending web\nnotifications using Hasura event triggers and FCM."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Video:\n",(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=nuSHkzE2-zo&feature=youtu.be"},"https://www.youtube.com/watch?v=nuSHkzE2-zo&feature=youtu.be")),(0,s.kt)("li",{parentName:"ul"},"Source code:\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/serverless-push"},"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/serverless-push"))),(0,s.kt)("h2",{id:"data-transformations-etl"},"Data Transformations (ETL)"),(0,s.kt)("p",null,"Here's a ",(0,s.kt)("a",{parentName:"p",href:"https://serverless-etl.demo.hasura.io/"},"serverless ETL demo app")," built using Hasura event\ntriggers and Algolia search."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Video: ",(0,s.kt)("a",{parentName:"li",href:"https://youtu.be/kWVEBWdEVAA"},"https://youtu.be/kWVEBWdEVAA")),(0,s.kt)("li",{parentName:"ul"},"Source code:\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/serverless-etl"},"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/serverless-etl"))))}m.isMDXComponent=!0}}]);