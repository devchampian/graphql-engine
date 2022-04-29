"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1076],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(a),u=r,h=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3248:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],p={sidebar_label:"RESTified GraphQL Endpoints",sidebar_position:13,description:"Manage RESTified endpoints with the Hasura schema/metadata API",keywords:["hasura","docs","restified-endpoints/metadata API","API reference","RESTified endpoints"]},d="Schema/Metadata API Reference: RESTified GraphQL Endpoints (Deprecated)",l={unversionedId:"graphql/core/api-reference/schema-metadata-api/restified-endpoints",id:"graphql/core/api-reference/schema-metadata-api/restified-endpoints",title:"Schema/Metadata API Reference: RESTified GraphQL Endpoints (Deprecated)",description:"Manage RESTified endpoints with the Hasura schema/metadata API",source:"@site/docs/graphql/core/api-reference/schema-metadata-api/restified-endpoints.mdx",sourceDirName:"graphql/core/api-reference/schema-metadata-api",slug:"/graphql/core/api-reference/schema-metadata-api/restified-endpoints",permalink:"/docs/latest/graphql/core/api-reference/schema-metadata-api/restified-endpoints",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/api-reference/schema-metadata-api/restified-endpoints.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_label:"RESTified GraphQL Endpoints",sidebar_position:13,description:"Manage RESTified endpoints with the Hasura schema/metadata API",keywords:["hasura","docs","restified-endpoints/metadata API","API reference","RESTified endpoints"]},sidebar:"docsSidebar",previous:{title:"Query Collections",permalink:"/docs/latest/graphql/core/api-reference/schema-metadata-api/query-collections"},next:{title:"Custom Types",permalink:"/docs/latest/graphql/core/api-reference/schema-metadata-api/custom-types"}},s={},m=[{value:"Introduction",id:"introduction",level:2},{value:"create_rest_endpoint",id:"schema-metadata-create-rest-endpoint",level:2},{value:"Args syntax",id:"schema-metadata-create-rest-endpoint-syntax",level:3},{value:"drop_rest_endpoint",id:"schema-metadata-drop-rest-endpoint",level:2},{value:"Args syntax",id:"schema-metadata-drop-rest-endpoint-syntax",level:3}],c={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schemametadata-api-reference-restified-graphql-endpoints-deprecated"},"Schema/Metadata API Reference: RESTified GraphQL Endpoints (Deprecated)"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In versions ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0")," and above, the schema/metadata API is deprecated in\nfavour of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/schema-api/index"},"schema API")," and the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/metadata-api/index"},"metadata API"),"."),(0,i.kt)("p",{parentName:"div"},"Though for backwards compatibility, the schema/metadata APIs will\ncontinue to function."))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Add/Remove a RESTified GraphQL endpoint to Hasura GraphQL engine."),(0,i.kt)("h2",{id:"schema-metadata-create-rest-endpoint"},"create_rest_endpoint"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"create_rest_endpoint")," is used to associate a URL template with a query."),(0,i.kt)("p",null,"An example request as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "create_rest_endpoint",\n    "args": {\n        "name": "example-name",\n        "url": "example",\n        "methods": ["POST","PUT","PATCH"],\n        "definition": {\n            "query": {\n              "query_name": "example_mutation",\n              "collection_name": "test_collection"\n            }\n        },\n        "comment": "some optional comment"\n    }\n}\n')),(0,i.kt)("h3",{id:"schema-metadata-create-rest-endpoint-syntax"},"Args syntax"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Text"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique identifier for the endpoint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"url"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#endpointurl"},"EndpointUrl")),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the REST endpoint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"methods"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#endpointmethods"},"EndpointMethods")),(0,i.kt)("td",{parentName:"tr",align:null},"Non-Empty case sensitive list of supported HTTP Methods")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"definition"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#endpointdef"},"EndpointDefinition")),(0,i.kt)("td",{parentName:"tr",align:null},"Definition for the REST endpoint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"comment"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Text"),(0,i.kt)("td",{parentName:"tr",align:null},"comment")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Supported from")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RESTified endpoints are supported from versions ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0-alpha.1")," and\nabove."))),(0,i.kt)("h2",{id:"schema-metadata-drop-rest-endpoint"},"drop_rest_endpoint"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"drop_rest_endpoint")," is used to delete an existing RESTified GraphQL Endpoint."),(0,i.kt)("p",null,"An example request as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "drop_rest_endpoint",\n    "args": {\n        "name": "name_of_the_endpoint"\n    }\n}\n')),(0,i.kt)("h3",{id:"schema-metadata-drop-rest-endpoint-syntax"},"Args syntax"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Text"),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the RESTified endpoint")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Supported from")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RESTified endpoints are supported from versions ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0-alpha.1")," and above."))))}u.isMDXComponent=!0}}]);