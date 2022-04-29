"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9765],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),o=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=o(e.components);return n.createElement(d.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(t),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return t?n.createElement(h,i(i({ref:a},s),{},{components:t})):n.createElement(h,i({ref:a},s))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},11289:function(e,a,t){t.r(a),t.d(a,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var n=t(83117),r=t(80102),l=(t(67294),t(3905)),i=["components"],p={description:"Hasura API reference",keywords:["hasura","docs","API","API reference"],slug:"index"},d="API Reference",o={unversionedId:"graphql/core/api-reference/index",id:"graphql/core/api-reference/index",title:"API Reference",description:"Hasura API reference",source:"@site/docs/graphql/core/api-reference/index.mdx",sourceDirName:"graphql/core/api-reference",slug:"/graphql/core/api-reference/index",permalink:"/graphql-engine/latest/graphql/core/api-reference/index",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/api-reference/index.mdx",tags:[],version:"current",frontMatter:{description:"Hasura API reference",keywords:["hasura","docs","API","API reference"],slug:"index"},sidebar:"docsSidebar",previous:{title:"Uninstalling the Hasura CLI",permalink:"/graphql-engine/latest/graphql/core/hasura-cli/uninstall-hasura-cli"},next:{title:"GraphQL API Reference",permalink:"/graphql-engine/latest/graphql/core/api-reference/graphql-api/index"}},s={},c=[{value:"Available APIs",id:"available-apis",level:2},{value:"GraphQL API",id:"graphql-api",level:3},{value:"Relay API",id:"relay-api",level:3},{value:"Schema API",id:"schema-api",level:3},{value:"Metadata API",id:"metadata-api",level:3},{value:"Schema / metadata API (Deprecated)",id:"schema-metadata-api",level:3},{value:"RESTified GraphQL API",id:"restified-graphql-api",level:3},{value:"Version API",id:"version-api",level:3},{value:"Health check API",id:"health-check-api",level:3},{value:"pg_dump API",id:"pg-dump-api",level:3},{value:"Config API",id:"config-api",level:3},{value:"Explain API",id:"explain-api",level:3}],u={toc:c};function m(e){var a=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api-reference"},"API Reference"),(0,l.kt)("h2",{id:"available-apis"},"Available APIs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"Access"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#graphql-api"},"/v1/graphql")),(0,l.kt)("td",{parentName:"tr",align:null},"Permission rules")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Relay"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#relay-api"},"/v1beta1/relay")),(0,l.kt)("td",{parentName:"tr",align:null},"Permission rules")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Legacy GraphQL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#graphql-api"},"/v1alpha1/graphql")),(0,l.kt)("td",{parentName:"tr",align:null},"Permission rules")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Schema ",(0,l.kt)("em",{parentName:"td"},"(> v2.0)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#schema-api"},"/v2/query")),(0,l.kt)("td",{parentName:"tr",align:null},"Admin only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Metadata ",(0,l.kt)("em",{parentName:"td"},"(> v2.0)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#metadata-api"},"/v1/metadata")),(0,l.kt)("td",{parentName:"tr",align:null},"Admin only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Schema/Metadata ",(0,l.kt)("em",{parentName:"td"},"(deprecated)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#schema-metadata-api"},"/v1/query")),(0,l.kt)("td",{parentName:"tr",align:null},"Admin only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Restified GQL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#restified-graphql-api"},"/api/rest")),(0,l.kt)("td",{parentName:"tr",align:null},"GQL REST Routes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#version-api"},"/v1/version")),(0,l.kt)("td",{parentName:"tr",align:null},"Public")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Health"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#health-check-api"},"/healthz")),(0,l.kt)("td",{parentName:"tr",align:null},"Public")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PG Dump"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#pg-dump-api"},"/v1alpha1/pg_dump")),(0,l.kt)("td",{parentName:"tr",align:null},"Admin only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Config"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#config-api"},"/v1alpha1/config")),(0,l.kt)("td",{parentName:"tr",align:null},"Admin only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Explain"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#explain-api"},"/v1/graphql/explain")),(0,l.kt)("td",{parentName:"tr",align:null},"Admin only")))),(0,l.kt)("h3",{id:"graphql-api"},"GraphQL API"),(0,l.kt)("p",null,"All GraphQL requests for queries, subscriptions and mutations are made to the GraphQL API."),(0,l.kt)("p",null,"See details at ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/graphql-api/index"},"GraphQL API Reference"),"."),(0,l.kt)("h3",{id:"relay-api"},"Relay API"),(0,l.kt)("p",null,"Hasura exposes a Relay schema for GraphQL requests for queries, subscriptions and mutations."),(0,l.kt)("p",null,"See docs at ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/databases/postgres/schema/relay-schema"},"Postgres: Relay schema"),"."),(0,l.kt)("p",null,"See details at ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/relay-graphql-api/index"},"Relay GraphQL API Reference"),"."),(0,l.kt)("h3",{id:"schema-api"},"Schema API"),(0,l.kt)("p",null,"Hasura exposes a schema API for directly executing SQL on the underlying Postgres."),(0,l.kt)("p",null,"This is primarily intended to be used as an ",(0,l.kt)("inlineCode",{parentName:"p"},"admin")," API to manage the Hasura schema."),(0,l.kt)("p",null,"See details at ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/schema-api/index"},"Schema API Reference"),"."),(0,l.kt)("h3",{id:"metadata-api"},"Metadata API"),(0,l.kt)("p",null,"Hasura exposes a metadata API for managing metadata."),(0,l.kt)("p",null,"This is primarily intended to be used as an ",(0,l.kt)("inlineCode",{parentName:"p"},"admin")," API to manage the Hasura metadata."),(0,l.kt)("p",null,"See details at ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/metadata-api/index"},"Metadata API Reference"),"."),(0,l.kt)("h3",{id:"schema-metadata-api"},"Schema / metadata API (Deprecated)"),(0,l.kt)("p",null,"Hasura exposes a schema / metadata API for managing metadata for\npermissions/relationships or for directly executing SQL on the underlying Postgres."),(0,l.kt)("p",null,"This is primarily intended to be used as an ",(0,l.kt)("inlineCode",{parentName:"p"},"admin")," API to manage the\nHasura schema and metadata."),(0,l.kt)("p",null,"See details at ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/schema-metadata-api/index"},"Schema / Metadata API Reference (Deprecated)"),"."),(0,l.kt)("h3",{id:"restified-graphql-api"},"RESTified GraphQL API"),(0,l.kt)("p",null,"Hasura allows saved GraphQL queries and mutations to be accesed through a REST interface."),(0,l.kt)("p",null,"See details at ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/restified"},"RESTified GraphQL Endpoints API Reference"),"."),(0,l.kt)("h3",{id:"version-api"},"Version API"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"/v1/version")," is a public endpoint that responds with the current\nserver version in JSON format."),(0,l.kt)("p",null,"See details at ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/version"},"Version API Reference"),"."),(0,l.kt)("h3",{id:"health-check-api"},"Health check API"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"/healthz")," is a public endpoint that returns the server health\nstatus. There's also ",(0,l.kt)("inlineCode",{parentName:"p"},"/hasura/healthz")," available as an alternative,\nwhich mirrors ",(0,l.kt)("inlineCode",{parentName:"p"},"/healthz")," completely."),(0,l.kt)("p",null,"See details at ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/health"},"Health check API Reference"),"."),(0,l.kt)("h3",{id:"pg-dump-api"},"pg_dump API"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"/v1alpha1/pg_dump")," is an admin-only endpoint that can be used to\nexecute ",(0,l.kt)("inlineCode",{parentName:"p"},"pg_dump")," on the Postgres instance connected to Hasura. The\n",(0,l.kt)("inlineCode",{parentName:"p"},"pg_dump")," CLI tool's argument can be passed as a POST request body to\nthe API and the response is sent back to the client."),(0,l.kt)("p",null,"See details at ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/pgdump"},"PG Dump API Reference"),"."),(0,l.kt)("h3",{id:"config-api"},"Config API"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1alpha1/config")," is an admin-only endpoint to get the current server configuration."),(0,l.kt)("p",null,"See details at ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/config"},"Config API Reference"),"."),(0,l.kt)("h3",{id:"explain-api"},"Explain API"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v1/graphql/explain")," returns the Postgres plan for a query or\nsubscription based on the defined permissions."),(0,l.kt)("p",null,"See details at ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/explain"},"Explain API Reference"),"."))}m.isMDXComponent=!0}}]);