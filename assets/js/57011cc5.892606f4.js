"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8482],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,l(l({ref:e},d),{},{components:a})):n.createElement(h,l({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94898:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),l=["components"],i={sidebar_label:"Network Options",sidebar_position:19,description:"Manage network options with the Hasura metadata API",keywords:["hasura","docs","metadata API","API reference","network options","TLS","allowlis"]},s="Metadata API Reference: Network Options (v2.0 and above)",p={unversionedId:"graphql/core/api-reference/metadata-api/network",id:"graphql/core/api-reference/metadata-api/network",title:"Metadata API Reference: Network Options (v2.0 and above)",description:"Manage network options with the Hasura metadata API",source:"@site/docs/graphql/core/api-reference/metadata-api/network.mdx",sourceDirName:"graphql/core/api-reference/metadata-api",slug:"/graphql/core/api-reference/metadata-api/network",permalink:"/docs/latest/graphql/core/api-reference/metadata-api/network",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/api-reference/metadata-api/network.mdx",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_label:"Network Options",sidebar_position:19,description:"Manage network options with the Hasura metadata API",keywords:["hasura","docs","metadata API","API reference","network options","TLS","allowlis"]},sidebar:"docsSidebar",previous:{title:"Introspection options",permalink:"/docs/latest/graphql/core/api-reference/metadata-api/introspection"},next:{title:"Schema / Metadata API Reference (Deprecated)",permalink:"/docs/latest/graphql/core/api-reference/schema-metadata-api/index"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"TLS Allowlist",id:"tls-allowlist",level:2},{value:"add_host_to_tls_allowlist",id:"metadata-add-host-to-tls-allowlist",level:2},{value:"Args syntax",id:"add-host-to-tls-allowlist-syntax",level:3},{value:"drop_host_from_tls_allowlist",id:"metadata-drop-host-from-tls-allowlist",level:2},{value:"Args syntax",id:"drop-host-from-tls-allowlist-syntax",level:3}],u={toc:c};function m(t){var e=t.components,a=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metadata-api-reference-network-options-v20-and-above"},"Metadata API Reference: Network Options (v2.0 and above)"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Here's the API to modify any ",(0,o.kt)("inlineCode",{parentName:"p"},"Network")," metadata. One of the options is\nto manage a ",(0,o.kt)("inlineCode",{parentName:"p"},"TLS allowlist"),"."),(0,o.kt)("h2",{id:"tls-allowlist"},"TLS Allowlist"),(0,o.kt)("p",null,"The TLS Allowlist represents a set of services that are permitted to use\nself-signed certificates - primarily intended for use in development and\nstaging environments, services can be whitelisted by a ",(0,o.kt)("inlineCode",{parentName:"p"},"host"),", and\noptionally (service id) ",(0,o.kt)("inlineCode",{parentName:"p"},"port"),"."),(0,o.kt)("h2",{id:"metadata-add-host-to-tls-allowlist"},"add_host_to_tls_allowlist"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"add_host_to_tls_allowlist")," is used to add any string"),(0,o.kt)("p",null,"This API could be supplied with just the hostname in the ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," field of\nthe request instead of the complete object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/metadata HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "add_host_to_tls_allowlist",\n    "args": {\n        "host": "graphql.hasura.io",\n        "suffix": "core.graphql",\n        "permissions": ["self-signed"]\n    }\n}\n')),(0,o.kt)("h3",{id:"add-host-to-tls-allowlist-syntax"},"Args syntax"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Schema"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"host"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"String")),(0,o.kt)("td",{parentName:"tr",align:null},"the hostname/domain of the endpoint")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"suffix"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"String")),(0,o.kt)("td",{parentName:"tr",align:null},"suffix for the service (this is usually reserved for the service port number)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"permissions"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[String]")),(0,o.kt)("td",{parentName:"tr",align:null},"Can be only ",(0,o.kt)("inlineCode",{parentName:"td"},'["self-signed"]'),' until more permissions are supported. "self-signed" allows self-signed, name mismatches, and non-X509.V3 certificates.')))),(0,o.kt)("h2",{id:"metadata-drop-host-from-tls-allowlist"},"drop_host_from_tls_allowlist"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"drop_host_from_tls_allowlist")," is used to drop an endpoint from the TLS allowlist."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/metadata HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "drop_host_from_tls_allowlist",\n    "args": {\n        "host": "graphql.hasura.io"\n    }\n}\n')),(0,o.kt)("h3",{id:"drop-host-from-tls-allowlist-syntax"},"Args syntax"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Schema"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"host"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"String")),(0,o.kt)("td",{parentName:"tr",align:null},"The hostname/domain of the endpoint that was previously added to the allowlist")))))}m.isMDXComponent=!0}}]);