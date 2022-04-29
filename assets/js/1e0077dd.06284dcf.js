"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7058],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19340:function(e,t,n){var a=n(84035),r=n(21720),o=n.n(r),i=n(67294);t.Z=function(e){var t=e.prerelease,n=(0,i.useState)({latest:"v2.3.0",prerelease:"v2.4.0-beta.1"}),r=n[0],s=n[1];return(0,i.useEffect)((function(){(0,a.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://releases.hasura.io/graphql-engine?agent=docs.hasura.io");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})))()}),[]),i.createElement("span",null,t?r.prerelease:r.latest)}},2113:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(19340),s=["components"],l={description:"Update Hasura GraphQL engine version",keywords:["hasura","docs","deployment","update","version"],sidebar_position:12,sidebar_label:"Updating GraphQL engine"},p="Updating Hasura GraphQL engine",d={unversionedId:"graphql/core/deployment/updating-graphql-engine",id:"graphql/core/deployment/updating-graphql-engine",title:"Updating Hasura GraphQL engine",description:"Update Hasura GraphQL engine version",source:"@site/docs/graphql/core/deployment/updating-graphql-engine.mdx",sourceDirName:"graphql/core/deployment",slug:"/graphql/core/deployment/updating-graphql-engine",permalink:"/docs/latest/graphql/core/deployment/updating-graphql-engine",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/deployment/updating-graphql-engine.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{description:"Update Hasura GraphQL engine version",keywords:["hasura","docs","deployment","update","version"],sidebar_position:12,sidebar_label:"Updating GraphQL engine"},sidebar:"docsSidebar",previous:{title:"Custom Docker images or binaries",permalink:"/docs/latest/graphql/core/deployment/custom-docker-images"},next:{title:"Downgrading GraphQL engine",permalink:"/docs/latest/graphql/core/deployment/downgrading"}},u={},c=[{value:"Update guides",id:"update-guides",level:2},{value:"Latest available versions",id:"latest-available-versions",level:2},{value:"Stable version",id:"stable-version",level:3},{value:"Pre-release version",id:"pre-release-version",level:3}],m={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updating-hasura-graphql-engine"},"Updating Hasura GraphQL engine"),(0,o.kt)("h2",{id:"update-guides"},"Update guides"),(0,o.kt)("p",null,"The Hasura GraphQL engine runs off a Docker image and updates are as\nsimple as changing the image tag."),(0,o.kt)("p",null,"Based on your deployment method, follow the appropriate guide to update\nthe GraphQL engine version you're running:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/deployment/deployment-guides/heroku#heroku-update"},"Updating on Heroku")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/deployment/deployment-guides/docker#docker-update"},"Updating on Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/deployment/deployment-guides/kubernetes#kubernetes-update"},"Updating on Kubernetes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/deployment/deployment-guides/digital-ocean-one-click#do-updating"},"Updating on Digital Ocean"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"No-touch Engine Update in Hasura Cloud")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hasura Cloud offers no-touch update paths in a managed environment. For\nmore information, read more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/cloud/index"},"Hasura Cloud"),"."))),(0,o.kt)("h2",{id:"latest-available-versions"},"Latest available versions"),(0,o.kt)("h3",{id:"stable-version"},"Stable version"),(0,o.kt)("p",null,"The current latest stable version is:"),(0,o.kt)("code",null,"hasura/graphql-engine:",(0,o.kt)(i.Z,{mdxType:"LatestRelease"})),(0,o.kt)("h3",{id:"pre-release-version"},"Pre-release version"),(0,o.kt)("p",null,"The current latest pre-release version is:"),(0,o.kt)("code",null,"hasura/graphql-engine:",(0,o.kt)(i.Z,{prerelease:!0,mdxType:"LatestRelease"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Full stability with pre-release builds is not guaranteed. They are not\nrecommended for production use."))))}g.isMDXComponent=!0}}]);