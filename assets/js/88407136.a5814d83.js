"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4836],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},m=Object.keys(e);for(r=0;r<m.length;r++)a=m[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(r=0;r<m.length;r++)a=m[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,m=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(a),h=n,u=d["".concat(s,".").concat(h)]||d[h]||p[h]||m;return a?r.createElement(u,o(o({ref:t},c),{},{components:a})):r.createElement(u,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var m=a.length,o=new Array(m);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<m;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},14405:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var r=a(83117),n=a(80102),m=(a(67294),a(3905)),o=["components"],l={sidebar_label:"Remote Schemas",sidebar_position:10,description:"Manage remote schemas with the Hasura schema/metadata API",keywords:["hasura","docs","schema/metadata API","API reference","remote schema"]},s="Schema/Metadata API Reference: Remote schemas (Deprecated)",i={unversionedId:"graphql/core/api-reference/schema-metadata-api/remote-schemas",id:"graphql/core/api-reference/schema-metadata-api/remote-schemas",title:"Schema/Metadata API Reference: Remote schemas (Deprecated)",description:"Manage remote schemas with the Hasura schema/metadata API",source:"@site/docs/graphql/core/api-reference/schema-metadata-api/remote-schemas.mdx",sourceDirName:"graphql/core/api-reference/schema-metadata-api",slug:"/graphql/core/api-reference/schema-metadata-api/remote-schemas",permalink:"/docs/latest/graphql/core/api-reference/schema-metadata-api/remote-schemas",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/api-reference/schema-metadata-api/remote-schemas.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Remote Schemas",sidebar_position:10,description:"Manage remote schemas with the Hasura schema/metadata API",keywords:["hasura","docs","schema/metadata API","API reference","remote schema"]},sidebar:"docsSidebar",previous:{title:"Scheduled Triggers",permalink:"/docs/latest/graphql/core/api-reference/schema-metadata-api/scheduled-triggers"},next:{title:"Remote Relationships",permalink:"/docs/latest/graphql/core/api-reference/schema-metadata-api/remote-relationships"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"add_remote_schema",id:"schema-metadata-add-remote-schema",level:2},{value:"Args syntax",id:"schema-metadata-add-remote-schema-syntax",level:3},{value:"update_remote_schema",id:"schema-metadata-update-remote-schema",level:2},{value:"Args syntax",id:"schema-metadata-update-remote-schema-syntax",level:3},{value:"remove_remote_schema",id:"schema-metadata-remove-remote-schema",level:2},{value:"Args syntax",id:"schema-metadata-remove-remote-schema-syntax",level:3},{value:"reload_remote_schema",id:"schema-metadata-reload-remote-schema",level:2},{value:"Args syntax",id:"schema-metadata-reload-remote-schema-syntax",level:3}],d={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,m.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"schemametadata-api-reference-remote-schemas-deprecated"},"Schema/Metadata API Reference: Remote schemas (Deprecated)"),(0,m.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("p",{parentName:"div"},"In versions ",(0,m.kt)("inlineCode",{parentName:"p"},"v2.0.0")," and above, the schema/metadata API is deprecated in\nfavour of the ",(0,m.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/schema-api/index"},"schema API")," and the\n",(0,m.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/metadata-api/index"},"metadata API"),"."),(0,m.kt)("p",{parentName:"div"},"Though for backwards compatibility, the schema/metadata APIs will\ncontinue to function."))),(0,m.kt)("h2",{id:"introduction"},"Introduction"),(0,m.kt)("p",null,"Add/Remove a remote GraphQL server as remote schema in Hasura GraphQL engine."),(0,m.kt)("h2",{id:"schema-metadata-add-remote-schema"},"add_remote_schema"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"add_remote_schema")," is used to add a remote GraphQL server as remote\nschema. GraphQL engine stitches it's schema with existing."),(0,m.kt)("p",null,"An example request as follows:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "add_remote_schema",\n    "args": {\n        "name": "my remote schema",\n        "definition": {\n            "url": "https://remote-server.com/graphql",\n            "headers": [{"name": "X-Server-Request-From", "value": "Hasura"}],\n            "forward_client_headers": false,\n            "timeout_seconds": 60\n        },\n        "comment": "some optional comment"\n    }\n}\n')),(0,m.kt)("h3",{id:"schema-metadata-add-remote-schema-syntax"},"Args syntax"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Key"),(0,m.kt)("th",{parentName:"tr",align:null},"Required"),(0,m.kt)("th",{parentName:"tr",align:null},"Schema"),(0,m.kt)("th",{parentName:"tr",align:null},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"name"),(0,m.kt)("td",{parentName:"tr",align:null},"true"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#remoteschemaname"},"RemoteSchemaName")),(0,m.kt)("td",{parentName:"tr",align:null},"Name of the remote schema")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"definition"),(0,m.kt)("td",{parentName:"tr",align:null},"true"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#remoteschemadef"},"RemoteSchemaDef")),(0,m.kt)("td",{parentName:"tr",align:null},"Definition for the remote schema")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"comment"),(0,m.kt)("td",{parentName:"tr",align:null},"false"),(0,m.kt)("td",{parentName:"tr",align:null},"Text"),(0,m.kt)("td",{parentName:"tr",align:null},"comment")))),(0,m.kt)("h2",{id:"schema-metadata-update-remote-schema"},"update_remote_schema"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"update_remote_schema")," is used to update the configuration of a remote\nschema. If the remote schema URL has changed then it will perform a\nintrospection as well. After introspection, if there are any\ninconsistencies detected with other metadata objects (like remote\nrelationships or remote schema permissions) they will be reported as\n",(0,m.kt)("em",{parentName:"p"},"inconsistent_metadata"),"."),(0,m.kt)("p",null,"An example request as follows:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "update_remote_schema",\n    "args": {\n        "name": "my remote schema",\n        "definition": {\n            "url": "https://remote-server.com/graphql",\n            "headers": [{"name": "X-Server-Request-From", "value": "Hasura"}],\n            "forward_client_headers": false,\n            "timeout_seconds": 60\n        },\n        "comment": "some optional comment"\n    }\n}\n')),(0,m.kt)("h3",{id:"schema-metadata-update-remote-schema-syntax"},"Args syntax"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Key"),(0,m.kt)("th",{parentName:"tr",align:null},"Required"),(0,m.kt)("th",{parentName:"tr",align:null},"Schema"),(0,m.kt)("th",{parentName:"tr",align:null},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"name"),(0,m.kt)("td",{parentName:"tr",align:null},"true"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#remoteschemaname"},"RemoteSchemaName")),(0,m.kt)("td",{parentName:"tr",align:null},"Name of the remote schema")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"definition"),(0,m.kt)("td",{parentName:"tr",align:null},"true"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#remoteschemadef"},"RemoteSchemaDef")),(0,m.kt)("td",{parentName:"tr",align:null},"Definition for the remote schema")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"comment"),(0,m.kt)("td",{parentName:"tr",align:null},"false"),(0,m.kt)("td",{parentName:"tr",align:null},"Text"),(0,m.kt)("td",{parentName:"tr",align:null},"comment")))),(0,m.kt)("h2",{id:"schema-metadata-remove-remote-schema"},"remove_remote_schema"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"remove_remote_schema")," is used to delete a remote schema. GraphQL engine\nde-stitches it's schema."),(0,m.kt)("p",null,"An example request as follows:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "remove_remote_schema",\n    "args": {\n        "name": "my remote schema"\n    }\n}\n')),(0,m.kt)("h3",{id:"schema-metadata-remove-remote-schema-syntax"},"Args syntax"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Key"),(0,m.kt)("th",{parentName:"tr",align:null},"Required"),(0,m.kt)("th",{parentName:"tr",align:null},"Schema"),(0,m.kt)("th",{parentName:"tr",align:null},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"name"),(0,m.kt)("td",{parentName:"tr",align:null},"true"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#remoteschemaname"},"RemoteSchemaName")),(0,m.kt)("td",{parentName:"tr",align:null},"Name of the remote schema")))),(0,m.kt)("h2",{id:"schema-metadata-reload-remote-schema"},"reload_remote_schema"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"reload_remote_schema")," is used to refresh schema of the remote server.\nGraphQL engine refetches schema from server and stitches."),(0,m.kt)("p",null,"An example request as follows:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "reload_remote_schema",\n    "args": {\n        "name": "my remote schema"\n    }\n}\n')),(0,m.kt)("h3",{id:"schema-metadata-reload-remote-schema-syntax"},"Args syntax"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Key"),(0,m.kt)("th",{parentName:"tr",align:null},"Required"),(0,m.kt)("th",{parentName:"tr",align:null},"Schema"),(0,m.kt)("th",{parentName:"tr",align:null},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"name"),(0,m.kt)("td",{parentName:"tr",align:null},"true"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#remoteschemaname"},"RemoteSchemaName")),(0,m.kt)("td",{parentName:"tr",align:null},"Name of the remote schema")))))}h.isMDXComponent=!0}}]);