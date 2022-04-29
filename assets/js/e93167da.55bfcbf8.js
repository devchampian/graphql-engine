"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6228],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(t),g=a,h=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54848:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=t(83117),a=t(80102),l=(t(67294),t(3905)),i=["components"],o={description:"Secure the Hasura GraphQL endpoint",keywords:["hasura","docs","deployment","logs","server logs"],sidebar_position:6,sidebar_label:"Server logs"},s="Hasura GraphQL engine logs",p={unversionedId:"graphql/core/deployment/logging",id:"graphql/core/deployment/logging",title:"Hasura GraphQL engine logs",description:"Secure the Hasura GraphQL endpoint",source:"@site/docs/graphql/core/deployment/logging.mdx",sourceDirName:"graphql/core/deployment",slug:"/graphql/core/deployment/logging",permalink:"/graphql-engine/latest/graphql/core/deployment/logging",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/deployment/logging.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Secure the Hasura GraphQL endpoint",keywords:["hasura","docs","deployment","logs","server logs"],sidebar_position:6,sidebar_label:"Server logs"},sidebar:"docsSidebar",previous:{title:"Secure GraphQL endpoint",permalink:"/graphql-engine/latest/graphql/core/deployment/securing-graphql-endpoint"},next:{title:"Enable HTTPS",permalink:"/graphql-engine/latest/graphql/core/deployment/enable-https"}},d={},u=[{value:"Accessing logs",id:"accessing-logs",level:2},{value:"Different log-types",id:"log-types",level:2},{value:"Logging levels",id:"logging-levels",level:2},{value:"Log structure and metrics",id:"log-structure-and-metrics",level:2},{value:"<strong>query-log</strong> structure",id:"query-log-structure",level:3},{value:"<strong>http-log</strong> structure",id:"http-log-structure",level:3},{value:"<strong>websocket-log</strong> structure",id:"websocket-log-structure",level:3},{value:"Monitoring frameworks",id:"monitoring-frameworks",level:2}],m={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hasura-graphql-engine-logs"},"Hasura GraphQL engine logs"),(0,l.kt)("h2",{id:"accessing-logs"},"Accessing logs"),(0,l.kt)("p",null,"Based on your deployment method, the Hasura GraphQL engine logs can be\naccessed as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/deployment/deployment-guides/heroku#heroku-logs"},"On Heroku")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/deployment/deployment-guides/docker#docker-logs"},"On Docker")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/deployment/deployment-guides/kubernetes#kubernetes-logs"},"On Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/deployment/deployment-guides/digital-ocean-one-click#do-logs"},"On Digital Ocean")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/deployment/deployment-guides/azure-container-instances-postgres#azure-logs"},"On Azure")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/deployment/deployment-guides/google-kubernetes-engine-cloud-sql#gc-kubernetes-logs"},"On Google Cloud & Kubernetes"))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Detailed Logging in Hasura Cloud")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you\u2019re looking for more in-depth logging information, along with a\nconsole for browsing logs, please see\n",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/cloud/metrics/index"},"Metrics with Hasura Cloud"),"."))),(0,l.kt)("h2",{id:"log-types"},"Different log-types"),(0,l.kt)("p",null,"The Hasura GraphQL engine has different kind of log-types depending on\nthe sub-system or the layer. A log-type is simply the ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," field in a\nlog line, which indicates which sub-system the log comes from."),(0,l.kt)("p",null,"For example, the HTTP webserver logs incoming requests as an access log\nand is called ",(0,l.kt)("inlineCode",{parentName:"p"},"http-log"),". Similarly logs from the websocket layer are\ncalled ",(0,l.kt)("inlineCode",{parentName:"p"},"websocket-log"),", logs from the event trigger system are called\n",(0,l.kt)("inlineCode",{parentName:"p"},"event-trigger")," etc."),(0,l.kt)("p",null,"You can configure the GraphQL engine to enable/disable certain log-types\nusing the the ",(0,l.kt)("inlineCode",{parentName:"p"},"--enabled-log-types")," flag or the\n",(0,l.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_ENABLED_LOG_TYPES")," env var. See ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/deployment/graphql-engine-flags/reference"},"GraphQL Engine server config reference")),(0,l.kt)("p",null,"Default enabled log-types are:\n",(0,l.kt)("inlineCode",{parentName:"p"},"startup, http-log, webhook-log, websocket-log")),(0,l.kt)("p",null,"All the log-types that can be enabled/disabled are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Log type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Log Level"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"startup")),(0,l.kt)("td",{parentName:"tr",align:null},"Information that is logged during startup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"query-log")),(0,l.kt)("td",{parentName:"tr",align:null},"Logs: the entire GraphQL query with variables, generated SQL statements (only for database queries, not for mutations/subscriptions or remote schema and action queries), the operation name (if provided in the GraphQL request)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http-log")),(0,l.kt)("td",{parentName:"tr",align:null},"Http access and error logs at the webserver layer (handling GraphQL and metadata requests)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"websocket-log")),(0,l.kt)("td",{parentName:"tr",align:null},"Websocket events and error logs at the websocket server layer (handling GraphQL requests)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webhook-log")),(0,l.kt)("td",{parentName:"tr",align:null},"Logs responses and errors from the authorization webhook (if setup)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"error"))))),(0,l.kt)("p",null,"Configurable log-types"),(0,l.kt)("p",null,"Apart from the above, there are other internal log-types which cannot be\nconfigured:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Log type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Log Level"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pg-client")),(0,l.kt)("td",{parentName:"tr",align:null},"Logs from the postgres client library"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"warn"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"metadata")),(0,l.kt)("td",{parentName:"tr",align:null},"Logs inconsistent metadata items"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"warn"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"jwk-refresh-log")),(0,l.kt)("td",{parentName:"tr",align:null},"Logs information and errors about periodic refreshing of JWK"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"telemetry-log")),(0,l.kt)("td",{parentName:"tr",align:null},"Logs error (if any) while sending out telemetry data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"event-trigger")),(0,l.kt)("td",{parentName:"tr",align:null},"Logs HTTP responses from the webhook, HTTP exceptions and internal errors"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ws-server")),(0,l.kt)("td",{parentName:"tr",align:null},"Debug logs from the websocket server, mostly used internally for debugging"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"debug"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema-sync-thread")),(0,l.kt)("td",{parentName:"tr",align:null},"Logs internal events, when it detects schema has changed on Postgres and when it reloads the schema"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"error"))))),(0,l.kt)("p",null,"Internal log-types"),(0,l.kt)("h2",{id:"logging-levels"},"Logging levels"),(0,l.kt)("p",null,"You can set the desired logging level on the server using the\n",(0,l.kt)("inlineCode",{parentName:"p"},"log-level")," flag or the ",(0,l.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_LOG_LEVEL")," env var. See\n",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/deployment/graphql-engine-flags/reference"},"GraphQL Engine server config reference"),"."),(0,l.kt)("p",null,"The default log-level is ",(0,l.kt)("inlineCode",{parentName:"p"},"info"),"."),(0,l.kt)("p",null,"Setting a log-level will print all logs of priority greater than the set\nlevel. The log-level hierarchy is: ",(0,l.kt)("inlineCode",{parentName:"p"},"debug > info > warn > error")),(0,l.kt)("p",null,"For example, setting ",(0,l.kt)("inlineCode",{parentName:"p"},"--log-level=warn"),", will enable all warn and error\nlevel logs only. So even if you have enabled ",(0,l.kt)("inlineCode",{parentName:"p"},"query-log")," it won't be\nprinted as the level of ",(0,l.kt)("inlineCode",{parentName:"p"},"query-log")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"info"),"."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#log-types"},"log-types")," for more details on log-level of each\nlog-type."),(0,l.kt)("h2",{id:"log-structure-and-metrics"},"Log structure and metrics"),(0,l.kt)("p",null,"All requests are identified by a request id. If the client sends a\n",(0,l.kt)("inlineCode",{parentName:"p"},"x-request-id")," header then that is used, otherwise a request id is\ngenerated for each request. This is also sent back to the client as a\nresponse header (",(0,l.kt)("inlineCode",{parentName:"p"},"x-request-id"),"). This is useful to correlate logs from\nthe server and the client."),(0,l.kt)("h3",{id:"query-log-structure"},(0,l.kt)("strong",{parentName:"h3"},"query-log")," structure"),(0,l.kt)("p",null,"On enabling verbose logging, i.e. enabling ",(0,l.kt)("inlineCode",{parentName:"p"},"query-log"),", GraphQL engine\nwill log the full GraphQL query object on each request."),(0,l.kt)("p",null,"It will also log the generated SQL for GraphQL queries (but not\nmutations and subscriptions)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2019-06-03T13:25:10.915+0530",\n  "level": "info",\n  "type": "query-log",\n  "detail": {\n    "kind": "database",\n    "request_id": "840f952d-c489-4d21-a87a-cc23ad17926a",\n    "query": {\n      "variables": {\n        "limit": 10\n      },\n      "operationName": "getProfile",\n      "query": "query getProfile($limit: Int!) {\\n  profile(limit: $limit, where: {username: {_like: \\"%a%\\"}}) {\\n    username\\n  }\\n  myusername: profile (where: {username: {_eq: \\"foobar\\"}}) {\\n    username\\n  }\\n}\\n"\n    },\n    "generated_sql": {\n      "profile": {\n        "prepared_arguments": ["{\\"x-hasura-role\\":\\"admin\\"}", "%a%"],\n        "query": "SELECT  coalesce(json_agg(\\"root\\" ), \'[]\' ) AS \\"root\\" FROM  (SELECT  row_to_json((SELECT  \\"_1_e\\"  FROM  (SELECT  \\"_0_root.base\\".\\"username\\" AS \\"username\\"       ) AS \\"_1_e\\"      ) ) AS \\"root\\" FROM  (SELECT  *  FROM \\"public\\".\\"profile\\"  WHERE ((\\"public\\".\\"profile\\".\\"username\\") LIKE ($2))     ) AS \\"_0_root.base\\"     LIMIT 10 ) AS \\"_2_root\\"      "\n      },\n      "myusername": {\n        "prepared_arguments": ["{\\"x-hasura-role\\":\\"admin\\"}", "foobar"],\n        "query": "SELECT  coalesce(json_agg(\\"root\\" ), \'[]\' ) AS \\"root\\" FROM  (SELECT  row_to_json((SELECT  \\"_1_e\\"  FROM  (SELECT  \\"_0_root.base\\".\\"username\\" AS \\"username\\"       ) AS \\"_1_e\\"      ) ) AS \\"root\\" FROM  (SELECT  *  FROM \\"public\\".\\"profile\\"  WHERE ((\\"public\\".\\"profile\\".\\"username\\") = ($2))     ) AS \\"_0_root.base\\"      ) AS \\"_2_root\\"      "\n      }\n    }\n  }\n}\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," of in the log with be ",(0,l.kt)("inlineCode",{parentName:"p"},"query-log"),". All the details are nested\nunder the ",(0,l.kt)("inlineCode",{parentName:"p"},"detail")," key."),(0,l.kt)("p",null,"This log contains 3 important fields:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kind"),": indicates the type or kind of operation. ",(0,l.kt)("inlineCode",{parentName:"li"},"kind")," can be\n",(0,l.kt)("inlineCode",{parentName:"li"},"database"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"action"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"remote-schema"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"cached")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"introspection")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"request_id"),": A unique ID for each request. If the client sends a\n",(0,l.kt)("inlineCode",{parentName:"li"},"x-request-id")," header then that is respected, otherwise a UUID is\ngenerated for each request. This is useful to correlate between\n",(0,l.kt)("inlineCode",{parentName:"li"},"http-log")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"query-log"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"query"),": Contains the full GraphQL request including the variables\nand operation name."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"generated_sql"),": this contains the generated SQL for GraphQL\nqueries. For mutations and subscriptions this field will be ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,l.kt)("h3",{id:"http-log-structure"},(0,l.kt)("strong",{parentName:"h3"},"http-log")," structure"),(0,l.kt)("p",null,"This is how the HTTP access logs look like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On success response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2019-05-30T23:40:24.654+0530",\n  "level": "info",\n  "type": "http-log",\n  "detail": {\n    "request_id": "072b3617-6653-4fd5-b5ee-580e9d098c3d",\n    "operation": {\n      "query_execution_time": 0.009240042,\n      "user_vars": {\n        "x-hasura-role": "user"\n      },\n      "error": null,\n      "request_id": "072b3617-6653-4fd5-b5ee-580e9d098c3d",\n      "parameterized_query_hash": "7116865cef017c3b09e5c9271b0e182a6dcf4c01",\n      "response_size": 105,\n      "query": null\n    },\n    "http_info": {\n      "status": 200,\n      "http_version": "HTTP/1.1",\n      "url": "/v1/graphql",\n      "ip": "127.0.0.1",\n      "method": "POST"\n    }\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On error response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2019-05-29T15:22:37.834+0530",\n  "level": "error",\n  "type": "http-log",\n  "detail": {\n    "operation": {\n      "query_execution_time": 0.000656144,\n      "user_vars": {\n        "x-hasura-role": "user",\n        "x-hasura-user-id": "1"\n      },\n      "error": {\n        "path": "$.selectionSet.profile.selectionSet.usernamex",\n        "error": "field \\"usernamex\\" not found in type: \'profile\'",\n        "code": "validation-failed"\n      },\n      "request_id": "072b3617-6653-4fd5-b5ee-580e9d098c3d",\n      "response_size": 142,\n      "query": {\n        "variables": {\n          "limit": 10\n        },\n        "operationName": "getProfile",\n        "query": "query getProfile($limit: Int!) { profile(limit: $limit, where:{username: {_like: \\"%a%\\"}}) { usernamex} }"\n      }\n    },\n    "http_info": {\n      "status": 200,\n      "http_version": "HTTP/1.1",\n      "url": "/v1/graphql",\n      "ip": "127.0.0.1",\n      "method": "POST"\n    }\n}\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," in the log will be ",(0,l.kt)("inlineCode",{parentName:"p"},"http-log")," for HTTP access/error log. This\nlog contains basic information about the HTTP request and the GraphQL\noperation."),(0,l.kt)("p",null,'It has two important "keys" under the ',(0,l.kt)("inlineCode",{parentName:"p"},"detail")," section - ",(0,l.kt)("inlineCode",{parentName:"p"},"operation")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"http_info"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"http_info")," lists various information regarding the HTTP request, e.g.\nIP address, URL path, HTTP status code etc."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"operation")," lists various information regarding the GraphQL\nquery/operation."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"query_execution_time"),": the time taken to parse the GraphQL query\n(from JSON request), compile it to SQL with permissions and user\nsession variables, and then executing it and fetching the results\nback from Postgres. The unit is in seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"user_vars"),": contains the user session variables. Or the\n",(0,l.kt)("inlineCode",{parentName:"li"},"x-hasura-*")," session variables inferred from the authorization mode."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"request_id"),": A unique ID for each request. If the client sends a\n",(0,l.kt)("inlineCode",{parentName:"li"},"x-request-id")," header then that is respected, otherwise a UUID is\ngenerated for each request."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"response_size"),": Size of the response in bytes."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"error"),": ",(0,l.kt)("em",{parentName:"li"},"optional"),". Will contain the error object when there is an\nerror, otherwise this will be ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),". This key can be used to detect\nif there is an error in the request. The status code for error\nrequests will be ",(0,l.kt)("inlineCode",{parentName:"li"},"200")," on the ",(0,l.kt)("inlineCode",{parentName:"li"},"v1/graphql")," endpoint."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"query"),": ",(0,l.kt)("em",{parentName:"li"},"optional"),". This will contain the GraphQL query object only\nwhen there is an error. On successful response this will be ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"parametrized_query_hash")," (","*","): Hash of the incoming GraphQL query\nafter resolving variables with all the leaf nodes (i.e. scalar\nvalues) discarded. This value will only be logged when the request\nis successful. For example, all the queries mentioned in the below\nsnippet will compute the same parametrized query hash.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'# sample query\nquery {\n  authors (where: {id: {_eq: 2}}) {\n    id\n    name\n  }\n}\n\n# query with a different leaf value to that of the sample query\nquery {\n  authors (where: {id: {_eq: 203943}}) {\n    id\n    name\n  }\n}\n\n# query with use of a variable, the value of\n# the variable `id` can be anything\nquery {\n  authors (where: {id: {_eq: $id}}) {\n    id\n    name\n  }\n}\n\n# query with use of a boolean expression variable,\n# the value when the `whereBoolExp` is in the form of\n#\n#  {\n#     "id": {\n#       "_eq": <id>\n#     }\n#  }\n\nquery {\n  authors (where: $whereBoolExp) {\n    id\n    name\n  }\n}\n')),(0,l.kt)("p",null,"(*) - Supported only in Cloud and Enterprise editions only"),(0,l.kt)("h3",{id:"websocket-log-structure"},(0,l.kt)("strong",{parentName:"h3"},"websocket-log")," structure"),(0,l.kt)("p",null,"This is how the Websocket logs look like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On successful operation start:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2019-06-10T10:52:54.247+0530",\n  "level": "info",\n  "type": "websocket-log",\n  "detail": {\n    "event": {\n      "type": "operation",\n      "detail": {\n        "request_id": "d2ede87d-5cb7-44b6-8736-1d898117722a",\n        "operation_id": "1",\n        "query": {\n          "variables": {},\n          "query": "subscription {\\n  author {\\n    name\\n  }\\n}\\n"\n        },\n        "operation_type": {\n          "type": "started"\n        },\n        "operation_name": null\n      }\n    },\n    "connection_info": {\n      "websocket_id": "f590dd18-75db-4602-8693-8150239df7f7",\n      "jwt_expiry": null,\n      "msg": null\n    },\n    "user_vars": {\n      "x-hasura-role": "admin"\n    }\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On operation stop:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2019-06-10T11:01:40.939+0530",\n  "level": "info",\n  "type": "websocket-log",\n  "detail": {\n    "event": {\n      "type": "operation",\n      "detail": {\n        "request_id": null,\n        "operation_id": "1",\n        "query": null,\n        "operation_type": {\n          "type": "stopped"\n        },\n        "operation_name": null\n      }\n    },\n    "connection_info": {\n      "websocket_id": "7f782190-fd58-4305-a83f-8e17177b204e",\n      "jwt_expiry": null,\n      "msg": null\n    },\n    "user_vars": {\n      "x-hasura-role": "admin"\n    }\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On error:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2019-06-10T10:55:20.650+0530",\n  "level": "error",\n  "type": "websocket-log",\n  "detail": {\n    "event": {\n      "type": "operation",\n      "detail": {\n        "request_id": "150e3e6a-e1a7-46ba-a9d4-da6b192a4005",\n        "operation_id": "1",\n        "query": {\n          "variables": {},\n          "query": "subscription {\\n  author {\\n    namex\\n  }\\n}\\n"\n        },\n        "operation_type": {\n          "type": "query_err",\n          "detail": {\n            "path": "$.selectionSet.author.selectionSet.namex",\n            "error": "field \\"namex\\" not found in type: \'author\'",\n            "code": "validation-failed"\n          }\n        },\n        "operation_name": null\n      }\n    },\n    "connection_info": {\n      "websocket_id": "49932ddf-e54d-42c6-bffb-8a57a1c6dcbe",\n      "jwt_expiry": null,\n      "msg": null\n    },\n    "user_vars": {\n      "x-hasura-role": "admin"\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"monitoring-frameworks"},"Monitoring frameworks"),(0,l.kt)("p",null,"You can integrate the logs emitted by Hasura GraphQL with external\nmonitoring tools for better visibility as per your convenience."),(0,l.kt)("p",null,"For some examples, see ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/guides/monitoring/index"},"Guides: Integrating with monitoring frameworks")))}g.isMDXComponent=!0}}]);