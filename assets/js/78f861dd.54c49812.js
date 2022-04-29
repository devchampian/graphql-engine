"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8423],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||n;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},15948:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=r(83117),o=r(80102),n=(r(67294),r(3905)),l=["components"],s={description:"Hasura Cloud glossary",keywords:["hasura","docs","cloud","Glossary"],sidebar_position:16},i="Glossary",u={unversionedId:"graphql/cloud/glossary",id:"graphql/cloud/glossary",title:"Glossary",description:"Hasura Cloud glossary",source:"@site/docs/graphql/cloud/glossary.mdx",sourceDirName:"graphql/cloud",slug:"/graphql/cloud/glossary",permalink:"/docs/latest/graphql/cloud/glossary",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/cloud/glossary.mdx",tags:[],version:"current",sidebarPosition:16,frontMatter:{description:"Hasura Cloud glossary",keywords:["hasura","docs","cloud","Glossary"],sidebar_position:16},sidebar:"cloudDocsSidebar",previous:{title:"API Reference",permalink:"/docs/latest/graphql/cloud/api-reference"}},c={},d=[{value:"Hasura Cloud Project",id:"hasura-cloud-project",level:2},{value:"Hasura Cloud IP",id:"hasura-cloud-ip",level:2},{value:"Hasura Collaborator Token",id:"hasura-collaborator-token",level:2},{value:"Hasura Client Name",id:"hasura-client-name",level:2}],p={toc:d};function h(e){var t=e.components,r=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"glossary"},"Glossary"),(0,n.kt)("h2",{id:"hasura-cloud-project"},"Hasura Cloud Project"),(0,n.kt)("p",null,"A Project is an individual GraphQL API hosted by Hasura Cloud. You can create a Project by going to the cloud dashboard and then connecting a database from the Hasura console. You can also provision a database on cloud platforms like Heroku from the Hasura console itself."),(0,n.kt)("p",null,"Each project is allocated a unique auto-generated name and an ID. You can use this name or ID while communicating to Hasura team regarding this project. Each project is also assigned a GraphQL API endpoint of the format ",(0,n.kt)("inlineCode",{parentName:"p"},"https://<project-name>.hasura.app/v1/graphql"),"."),(0,n.kt)("p",null,"For example, a project might be called ",(0,n.kt)("inlineCode",{parentName:"p"},"usable-cobra-29")," with ID ",(0,n.kt)("inlineCode",{parentName:"p"},"bf0ea856-76a2-42c2-8a91-66ca9b9206e8"),"."),(0,n.kt)("h2",{id:"hasura-cloud-ip"},"Hasura Cloud IP"),(0,n.kt)("p",null,"A Hasura Cloud IP will be listed on the Hasura Cloud Dashboard for each project. Hasura will be connecting to your database from this IP address. If your database is not exposed to the internet, you must allow connections from this IP address on your firewall settings for Hasura Cloud Project to function properly. Otherwise, Hasura will not be able to connect to your database and the GraphQL API will not be available."),(0,n.kt)("h2",{id:"hasura-collaborator-token"},"Hasura Collaborator Token"),(0,n.kt)("p",null,"When you open the Hasura Console on a Cloud Project, you will not be asked to enter the admin secret like Hasura Core version. Instead, if you are an admin, the console will be accessible with the admin secret already set, or if you are a collaborator with limited access you will be automatically logged into the Console via an OAuth2.0 based authorization flow. You will be given the right access based on your permissions for the particular Hasura Cloud Project."),(0,n.kt)("p",null,"After the login process is complete, you'll see a new header called ",(0,n.kt)("inlineCode",{parentName:"p"},"Hasura-Collaborator-Token"),' in the "Request Headers" section of GraphiQL. This token is used instead of admin secret to authenticate and authorize all the requests made from the Console. The token is only valid for 5mins and is refreshed silently by the Console. It is to be used only from Console.'),(0,n.kt)("p",null,"For accessing the API from other clients, use the admin secret or create a Personal Access Token."),(0,n.kt)("h2",{id:"hasura-client-name"},"Hasura Client Name"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Hasura-Client-Name")," will be set to ",(0,n.kt)("inlineCode",{parentName:"p"},"hasura-console")," by default. It is used to identify the client who is making the request in Hasura Pro metrics and monitoring tools."))}h.isMDXComponent=!0}}]);