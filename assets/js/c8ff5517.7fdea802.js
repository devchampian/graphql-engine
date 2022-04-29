"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8765],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,f=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43780:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],p={sidebar_label:"RESTified GraphQL Endpoints",sidebar_position:14,description:"Manage RESTified endpoints with the Hasura metadata API",keywords:["hasura","docs","metadata API","API reference","RESTified endpoints"]},d="Metadata API Reference: RESTified GraphQL Endpoints",l={unversionedId:"graphql/core/api-reference/metadata-api/restified-endpoints",id:"graphql/core/api-reference/metadata-api/restified-endpoints",title:"Metadata API Reference: RESTified GraphQL Endpoints",description:"Manage RESTified endpoints with the Hasura metadata API",source:"@site/docs/graphql/core/api-reference/metadata-api/restified-endpoints.mdx",sourceDirName:"graphql/core/api-reference/metadata-api",slug:"/graphql/core/api-reference/metadata-api/restified-endpoints",permalink:"/docs/latest/graphql/core/api-reference/metadata-api/restified-endpoints",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/api-reference/metadata-api/restified-endpoints.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_label:"RESTified GraphQL Endpoints",sidebar_position:14,description:"Manage RESTified endpoints with the Hasura metadata API",keywords:["hasura","docs","metadata API","API reference","RESTified endpoints"]},sidebar:"docsSidebar",previous:{title:"Query Collections",permalink:"/docs/latest/graphql/core/api-reference/metadata-api/query-collections"},next:{title:"Custom Types",permalink:"/docs/latest/graphql/core/api-reference/metadata-api/custom-types"}},s={},m=[{value:"Introduction",id:"introduction",level:2},{value:"create_rest_endpoint",id:"metadata-create-rest-endpoint",level:2},{value:"Args syntax",id:"metadata-create-rest-endpoint-syntax",level:3},{value:"drop_rest_endpoint",id:"metadata-drop-rest-endpoint",level:2},{value:"Args syntax",id:"metadata-drop-rest-endpoint-syntax",level:3}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metadata-api-reference-restified-graphql-endpoints"},"Metadata API Reference: RESTified GraphQL Endpoints"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Add/Remove a RESTified GraphQL endpoint to Hasura GraphQL engine."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Supported from")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The metadata API is supported for versions ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0")," and above and\nreplaces the older ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/schema-metadata-api/index"},"schema/metadata API"),"."))),(0,i.kt)("h2",{id:"metadata-create-rest-endpoint"},"create_rest_endpoint"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"create_rest_endpoint")," is used to associate a URL template with a query."),(0,i.kt)("p",null,"An example request as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/metadata HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "create_rest_endpoint",\n    "args": {\n        "name": "example-name",\n        "url": "example",\n        "methods": ["POST","PUT","PATCH"],\n        "definition": {\n            "query": {\n              "query_name": "example_mutation",\n              "collection_name": "test_collection"\n            }\n        },\n        "comment": "some optional comment"\n    }\n}\n')),(0,i.kt)("h3",{id:"metadata-create-rest-endpoint-syntax"},"Args syntax"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Text"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique identifier for the endpoint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"url"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#endpointurl"},"EndpointUrl")),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the REST endpoint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"methods"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#endpointmethods"},"EndpointMethods")),(0,i.kt)("td",{parentName:"tr",align:null},"Non-Empty case sensitive list of supported HTTP Methods")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"definition"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#endpointdef"},"EndpointDef")),(0,i.kt)("td",{parentName:"tr",align:null},"Definition for the REST endpoint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"comment"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Text"),(0,i.kt)("td",{parentName:"tr",align:null},"comment")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Supported from")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RESTified endpoints are supported from versions ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0-alpha.1")," and above."))),(0,i.kt)("h2",{id:"metadata-drop-rest-endpoint"},"drop_rest_endpoint"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"drop_rest_endpoint")," is used to delete an existing RESTified GraphQL Endpoint."),(0,i.kt)("p",null,"An example request as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/metadata HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "drop_rest_endpoint",\n    "args": {\n        "name": "name_of_the_endpoint"\n    }\n}\n')),(0,i.kt)("h3",{id:"metadata-drop-rest-endpoint-syntax"},"Args syntax"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Text"),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the RESTified endpoint")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Supported from")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RESTified endpoints are supported from versions ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0-alpha.1")," and above."))))}u.isMDXComponent=!0}}]);