"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1304],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,o(o({ref:e},u),{},{components:n})):a.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98182:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={sidebar_label:"Custom Functions",sidebar_position:3,description:"Manage custom functions with the Hasura metadata API",keywords:["hasura","docs","metadata API","API reference","custom function"]},p="Metadata API Reference: Custom Functions",s={unversionedId:"graphql/core/api-reference/metadata-api/custom-functions",id:"graphql/core/api-reference/metadata-api/custom-functions",title:"Metadata API Reference: Custom Functions",description:"Manage custom functions with the Hasura metadata API",source:"@site/docs/graphql/core/api-reference/metadata-api/custom-functions.mdx",sourceDirName:"graphql/core/api-reference/metadata-api",slug:"/graphql/core/api-reference/metadata-api/custom-functions",permalink:"/docs/latest/graphql/core/api-reference/metadata-api/custom-functions",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/api-reference/metadata-api/custom-functions.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Custom Functions",sidebar_position:3,description:"Manage custom functions with the Hasura metadata API",keywords:["hasura","docs","metadata API","API reference","custom function"]},sidebar:"docsSidebar",previous:{title:"Tables/Views",permalink:"/docs/latest/graphql/core/api-reference/metadata-api/table-view"},next:{title:"Relationships",permalink:"/docs/latest/graphql/core/api-reference/metadata-api/relationship"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"pg_track_function",id:"metadata-pg-track-function",level:2},{value:"Args syntax",id:"metadata-pg-track-function-syntax",level:3},{value:"pg_untrack_function",id:"metadata-pg-untrack-function",level:2},{value:"Args syntax",id:"metadata-pg-untrack-function-syntax",level:3},{value:"pg_set_function_customization",id:"metadata-pg-set-function-customization",level:2},{value:"Args syntax",id:"metadata-pg-set-function-customization-syntax",level:3},{value:"pg_create_function_permission",id:"metadata-pg-create-function-permission",level:2},{value:"Args syntax",id:"metadata-pg-create-function-permission-syntax",level:3},{value:"pg_drop_function_permission",id:"metadata-pg-drop-function-permission",level:2},{value:"Args syntax",id:"metadata-pg-drop-function-permission-syntax",level:3}],d={toc:c};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metadata-api-reference-custom-functions"},"Metadata API Reference: Custom Functions"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Track/untrack a custom SQL function in the Hasura GraphQL engine."),(0,i.kt)("p",null,"Only tracked custom functions are available for\nquerying/mutating/subscribing data over the GraphQL API."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Supported from")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The metadata API is supported for versions ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0")," and above and\nreplaces the older ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/schema-metadata-api/index"},"schema/metadata API"),"."))),(0,i.kt)("h2",{id:"metadata-pg-track-function"},"pg_track_function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pg_track_function")," is used to add a custom SQL function to the GraphQL\nschema. It supports more configuration options than v1, and also\nsupports tracking functions as mutations. Also refer a note\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/syntax-defs#function-req-note"},"here"),"."),(0,i.kt)("p",null,"Track an SQL function called ",(0,i.kt)("inlineCode",{parentName:"p"},"search_articles")," with a Hasura session argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/metadata HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "pg_track_function",\n    "args": {\n        "source": "default",\n        "function": {\n            "schema": "public",\n            "name": "search_articles"\n        },\n        "configuration": {\n            "session_argument": "hasura_session"\n        },\n        "comment": "This function helps search for articles"\n    }\n}\n')),(0,i.kt)("p",null,"Track ",(0,i.kt)("inlineCode",{parentName:"p"},"VOLATILE")," SQL function ",(0,i.kt)("inlineCode",{parentName:"p"},"reset_widget")," as a mutation, so it\nappears as a top-level field under the ",(0,i.kt)("inlineCode",{parentName:"p"},"mutation")," root field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/metadata HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "pg_track_function",\n    "args": {\n        "function": {\n            "schema": "public",\n            "name": "reset_widget"\n        },\n        "configuration": {\n            "exposed_as": "mutation"\n        },\n        "source": "default"\n    }\n}\n')),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"exposed_as")," is omitted, the location in the schema to expose the\nfunction will be inferred from the function's volatility, with\n",(0,i.kt)("inlineCode",{parentName:"p"},"VOLATILE")," functions appearing under the ",(0,i.kt)("inlineCode",{parentName:"p"},"mutation")," root, and others\nending up under ",(0,i.kt)("inlineCode",{parentName:"p"},"query/subscription"),"."),(0,i.kt)("p",null,"In most cases you will want ",(0,i.kt)("inlineCode",{parentName:"p"},"VOLATILE")," functions to only be exposed as\nmutations, and only ",(0,i.kt)("inlineCode",{parentName:"p"},"STABLE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IMMUTABLE")," functions to be queries.\nWhen tracking ",(0,i.kt)("inlineCode",{parentName:"p"},"VOLATILE")," functions under the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," root, the user\nneeds to guarantee that the field is idempotent and side-effect free, in\nthe context of the resulting GraphQL API."),(0,i.kt)("p",null,"One such use case might be a function that wraps a simple query and\nperforms some logging visible only to administrators."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It's easy to accidentally give an SQL function the wrong volatility (or\nfor a function to end up with ",(0,i.kt)("inlineCode",{parentName:"p"},"VOLATILE")," mistakenly, since it's the\ndefault)."))),(0,i.kt)("h3",{id:"metadata-pg-track-function-syntax"},"Args syntax"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#functionname"},"FunctionName")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the SQL function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"configuration"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#function-configuration"},"Function Configuration")),(0,i.kt)("td",{parentName:"tr",align:null},"Configuration for the SQL function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"source"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#sourcename"},"SourceName")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the source database of the function (default: ",(0,i.kt)("inlineCode",{parentName:"td"},"default"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"comment"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Comment for the function. This comment would replace the auto-generated comment for the function field in the GraphQL schema.")))),(0,i.kt)("h2",{id:"metadata-pg-untrack-function"},"pg_untrack_function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pg_untrack_function")," is used to remove a SQL function from the GraphQL schema."),(0,i.kt)("p",null,"Remove an SQL function ",(0,i.kt)("inlineCode",{parentName:"p"},"search_articles"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/metadata HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "pg_untrack_function",\n    "args": {\n        "function": {\n           "schema": "public",\n           "name": "search_articles"\n        },\n        "source": "default"\n    }\n}\n')),(0,i.kt)("h3",{id:"metadata-pg-untrack-function-syntax"},"Args syntax"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#functionname"},"FunctionName")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the SQL function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"source"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#sourcename"},"SourceName")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the source database of the function (default: ",(0,i.kt)("inlineCode",{parentName:"td"},"default"),")")))),(0,i.kt)("h2",{id:"metadata-pg-set-function-customization"},"pg_set_function_customization"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pg_set_function_customization")," allows you to customize any given\nfunction with a custom name and custom root fields of an already tracked\nfunction. This will ",(0,i.kt)("strong",{parentName:"p"},"replace")," the already present customization."),(0,i.kt)("p",null,"Set the configuration for a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"search_articles"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/metadata HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n   "type": "pg_set_function_customization",\n   "args": {\n     "function": "search_articles",\n     "source": "default",\n     "configuration": {\n       "custom_root_fields": {\n         "function": "FindArticles",\n         "function_aggregate": "FindArticlesAgg"\n       }\n     }\n   }\n}\n')),(0,i.kt)("h3",{id:"metadata-pg-set-function-customization-syntax"},"Args syntax"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#functionname"},"FunctionName")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"configuration"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#function-configuration"},"Function Configuration")),(0,i.kt)("td",{parentName:"tr",align:null},"Configuration for the function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"source"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#sourcename"},"SourceName")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the source database of the function (default: ",(0,i.kt)("inlineCode",{parentName:"td"},"default"),")")))),(0,i.kt)("h2",{id:"metadata-pg-create-function-permission"},"pg_create_function_permission"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pg_create_function_permission")," is used to add permission to an existing\ncustom function. To add a function permission, the provided role should\nhave select permissions to the target table of the function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/metadata HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "pg_create_function_permission",\n    "args": {\n       "function": "get_articles",\n       "source": "default",\n       "role": "user"\n    }\n}\n')),(0,i.kt)("h3",{id:"metadata-pg-create-function-permission-syntax"},"Args syntax"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#functionname"},"FunctionName")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the SQL function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"role"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#rolename"},"RoleName")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the role")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"source"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Text"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the source database of the function (default: ",(0,i.kt)("inlineCode",{parentName:"td"},"default"),")")))),(0,i.kt)("h2",{id:"metadata-pg-drop-function-permission"},"pg_drop_function_permission"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pg_drop_function_permission")," is used to drop an existing function permission."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/metadata HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "pg_drop_function_permission",\n    "args": {\n       "function": "get_articles",\n       "role": "user",\n       "source": "default"\n    }\n}\n')),(0,i.kt)("h3",{id:"metadata-pg-drop-function-permission-syntax"},"Args syntax"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#functionname"},"FunctionName")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the SQL function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"role"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/latest/graphql/core/api-reference/syntax-defs#rolename"},"RoleName")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the role")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"source"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Text"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the source database of the function (default: ",(0,i.kt)("inlineCode",{parentName:"td"},"default"),")")))))}m.isMDXComponent=!0}}]);