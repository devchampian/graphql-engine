"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4792],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18685:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],l={description:"Hasura Cloud multiple JWT Secrets",keywords:["hasura","docs","cloud","security","allow","multiple","JWT","secrets"],sidebar_position:5},s="Multiple JWT Secrets",c={unversionedId:"graphql/cloud/security/multiple-jwt-secrets",id:"graphql/cloud/security/multiple-jwt-secrets",title:"Multiple JWT Secrets",description:"Hasura Cloud multiple JWT Secrets",source:"@site/docs/graphql/cloud/security/multiple-jwt-secrets.mdx",sourceDirName:"graphql/cloud/security",slug:"/graphql/cloud/security/multiple-jwt-secrets",permalink:"/graphql-engine/latest/graphql/cloud/security/multiple-jwt-secrets",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/cloud/security/multiple-jwt-secrets.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Hasura Cloud multiple JWT Secrets",keywords:["hasura","docs","cloud","security","allow","multiple","JWT","secrets"],sidebar_position:5},sidebar:"cloudDocsSidebar",previous:{title:"Multiple Admin Secrets",permalink:"/graphql-engine/latest/graphql/cloud/security/multiple-admin-secrets"},next:{title:"Regression tests",permalink:"/graphql-engine/latest/graphql/cloud/regression-tests"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Resolution logic",id:"resolution-logic",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multiple-jwt-secrets"},"Multiple JWT Secrets"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"You can configure GraphQL Engine with a list of JWT secrets. This enables you to authenticate with different JWT issuers."),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"Multiple JWT secrets can be provided in the env var ",(0,o.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_JWT_SECRETS")," which takes a list of JWT secret objects."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "jwk_url": "https://...", "issuer": "myapp" },\n  { "type":"HS256", "key": "3EK6FD...", "issuer": "test" }\n]\n')),(0,o.kt)("p",null,"The structure of an individual JWT secret is described ",(0,o.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/auth/authentication/jwt#configuring-jwt-mode"},"here"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If both ",(0,o.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_JWT_SECRET")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_JWT_SECRETS")," are set, then ",(0,o.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_JWT_SECRETS")," will be used."))),(0,o.kt)("h2",{id:"resolution-logic"},"Resolution logic"),(0,o.kt)("p",null,"The authentication is resolved as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Bearer tokens are extracted from headers or cookie locations (as configured by each JWT secret)"),(0,o.kt)("li",{parentName:"ol"},"Tokens are filtered to ensure that the ",(0,o.kt)("strong",{parentName:"li"},"issuer")," field matches the configuration, or that the issuer is absent either from the configuration or the token."),(0,o.kt)("li",{parentName:"ol"},"If no matching tokens are found then the unauthenticated flow is performed (depends on ",(0,o.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/auth/authentication/unauthenticated-access"},"HASURA_GRAPHQL_UNAUTHORIZED_ROLE"),")."),(0,o.kt)("li",{parentName:"ol"},"If multiple matching tokens are found then an error is raised as the desired token is ambiguous."),(0,o.kt)("li",{parentName:"ol"},"If only one matching token is found then it is verified against the corresponding configured secret.")))}m.isMDXComponent=!0}}]);