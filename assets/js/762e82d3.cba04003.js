"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5182],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98899:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],s={sidebar_label:"Run SQL",sidebar_position:1,description:"Execute SQL with the Hasura schema/metadata API",keywords:["hasura","docs","schema/metadata API","API reference","run_sql"]},o="Schema/Metadata API Reference: Run SQL (Deprecated)",p={unversionedId:"graphql/core/api-reference/schema-metadata-api/run-sql",id:"graphql/core/api-reference/schema-metadata-api/run-sql",title:"Schema/Metadata API Reference: Run SQL (Deprecated)",description:"Execute SQL with the Hasura schema/metadata API",source:"@site/docs/graphql/core/api-reference/schema-metadata-api/run-sql.mdx",sourceDirName:"graphql/core/api-reference/schema-metadata-api",slug:"/graphql/core/api-reference/schema-metadata-api/run-sql",permalink:"/graphql-engine/latest/graphql/core/api-reference/schema-metadata-api/run-sql",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/api-reference/schema-metadata-api/run-sql.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Run SQL",sidebar_position:1,description:"Execute SQL with the Hasura schema/metadata API",keywords:["hasura","docs","schema/metadata API","API reference","run_sql"]},sidebar:"docsSidebar",previous:{title:"Schema / Metadata API Reference (Deprecated)",permalink:"/graphql-engine/latest/graphql/core/api-reference/schema-metadata-api/index"},next:{title:"Tables/Views",permalink:"/graphql-engine/latest/graphql/core/api-reference/schema-metadata-api/table-view"}},c={},d=[{value:"run_sql",id:"schema-metadata-run-sql",level:2},{value:"Use cases",id:"use-cases",level:3},{value:"Args syntax",id:"schema-metadata-run-sql-syntax",level:3},{value:"Response",id:"response",level:3},{value:"Some examples",id:"some-examples",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"schemametadata-api-reference-run-sql-deprecated"},"Schema/Metadata API Reference: Run SQL (Deprecated)"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"In versions ",(0,l.kt)("inlineCode",{parentName:"p"},"v2.0.0")," and above, the schema/metadata API is deprecated in\nfavour of the ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/schema-api/index"},"schema API")," and the\n",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/metadata-api/index"},"metadata API"),"."),(0,l.kt)("p",{parentName:"div"},"Though for backwards compatibility, the schema/metadata APIs will\ncontinue to function."))),(0,l.kt)("h2",{id:"schema-metadata-run-sql"},"run_sql"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"run_sql")," can be used to run arbitrary SQL statements."),(0,l.kt)("p",null,"Multiple SQL statements can be separated by a ",(0,l.kt)("inlineCode",{parentName:"p"},";"),", however, only the\nresult of the last SQL statement will be returned."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Admin-only")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is an admin-only request, i.e. the request can only be executed\nwith ",(0,l.kt)("inlineCode",{parentName:"p"},"X-Hasura-Role: admin"),". This can be set by passing\n",(0,l.kt)("inlineCode",{parentName:"p"},"X-Hasura-Admin-Secret")," or by setting the right role in webhook/JWT\nauthorization mode."),(0,l.kt)("p",{parentName:"div"},"This is deliberate as it is hard to enforce any sort of permissions on\narbitrary SQL. If you find yourself in the need of using ",(0,l.kt)("inlineCode",{parentName:"p"},"run_sql")," to\nrun custom DML requests, consider creating a view. You can now define\npermissions on that particular view for various roles."))),(0,l.kt)("h3",{id:"use-cases"},"Use cases"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"To execute DDL operations that are not supported by the console\n(e.g. managing indexes)."),(0,l.kt)("li",{parentName:"ol"},"Run custom DML requests from backend microservices instead of\ninstalling libraries to speak to Postgres.")),(0,l.kt)("p",null,"An example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "run_sql",\n    "args": {\n        "sql": "CREATE UNIQUE INDEX ON films (title);"\n    }\n}\n')),(0,l.kt)("p",null,"While ",(0,l.kt)("inlineCode",{parentName:"p"},"run_sql")," lets you run any SQL, it tries to ensure that the Hasura\nGraphQL engine's state (relationships, permissions etc.) is consistent\ni.e. you cannot drop a column on which any metadata is dependent on (say\na permission or a relationship). The effects, however, can be cascaded."),(0,l.kt)("p",null,"Example: If we were to drop the 'bio' column from the author table\n(let's say the column is used in some permission), you would see an\nerror."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "run_sql",\n    "args": {\n        "sql": "ALTER TABLE author DROP COLUMN name"\n    }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 400 BAD REQUEST\nContent-Type: application/json\n\n{\n    "path": "$.args",\n    "error": "cannot drop due to the following dependent objects : permission author.user.select"\n}\n')),(0,l.kt)("p",null,"We can however, cascade these changes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http",metastring:"{9}","{9}":!0},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "run_sql",\n    "args": {\n        "sql": "ALTER TABLE author DROP COLUMN bio",\n        "cascade" : true\n    }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n    "result_type": "CommandOk"\n}\n')),(0,l.kt)("p",null,"With the above request, the dependent permission is also dropped."),(0,l.kt)("p",null,"Example: If we were to drop a foreign key constraint from the article\ntable (let's say the column involved in the foreign key is used to\ndefine a relationship), you would see an error."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "run_sql",\n    "args": {\n        "sql": "ALTER TABLE article DROP CONSTRAINT article_author_id_fkey"\n    }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 400 BAD REQUEST\nContent-Type: application/json\n\n{\n    "path": "$.args",\n    "error": "cannot drop due to the following dependent objects : constraint article.article_author_id_fkey"\n}\n')),(0,l.kt)("p",null,"We can however, cascade these changes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http",metastring:"{9}","{9}":!0},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "run_sql",\n    "args": {\n        "sql": "ALTER TABLE article DROP CONSTRAINT article_author_id_fkey",\n        "cascade" : true\n    }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n    "result_type": "CommandOk"\n}\n')),(0,l.kt)("p",null,"With the above request, the dependent permission is also dropped."),(0,l.kt)("p",null,"In general, the SQL operations that will affect Hasura metadata are:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Dropping columns"),(0,l.kt)("li",{parentName:"ol"},"Dropping tables"),(0,l.kt)("li",{parentName:"ol"},"Dropping foreign keys"),(0,l.kt)("li",{parentName:"ol"},"Altering types of columns"),(0,l.kt)("li",{parentName:"ol"},"Dropping SQL functions"),(0,l.kt)("li",{parentName:"ol"},"Overloading SQL functions")),(0,l.kt)("p",null,"In case of 1, 2 and 3 the dependent objects (if any) can be dropped\nusing ",(0,l.kt)("inlineCode",{parentName:"p"},"cascade"),". However, when altering type of columns, if any objects\nare affected, the change cannot be cascaded. So, those dependent objects\nhave to be manually dropped before executing the SQL statement. Dropping\nSQL functions will cascade the functions in metadata even without using\n",(0,l.kt)("inlineCode",{parentName:"p"},"cascade")," since no other objects depend on them. Overloading tracked SQL\nfunctions is not allowed."),(0,l.kt)("p",null,"Set ",(0,l.kt)("inlineCode",{parentName:"p"},"check_metadata_consistency")," field to ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," to force the server to\nnot consider metadata dependencies."),(0,l.kt)("h3",{id:"schema-metadata-run-sql-syntax"},"Args syntax"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sql"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The sql to be executed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cascade"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"When set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the effect (if possible) is cascaded to any hasuradb dependent objects (relationships, permissions, templates).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"check_metadata_consistency"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"When set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", the sql is executed without checking metadata dependencies.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"read_only"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"When set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the request will be run in ",(0,l.kt)("inlineCode",{parentName:"td"},"READ ONLY")," transaction access mode which means only ",(0,l.kt)("inlineCode",{parentName:"td"},"select")," queries will be successful. This flag ensures that the GraphQL schema is not modified and is hence highly performant.")))),(0,l.kt)("h3",{id:"response"},"Response"),(0,l.kt)("p",null,"The response is a JSON Object with the following structure."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Always present"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result_type"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'One of "CommandOk" or "TuplesOk"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[[Text]]")," (An array of rows, each row an array of columns)"),(0,l.kt)("td",{parentName:"tr",align:null},"This is present only when the ",(0,l.kt)("inlineCode",{parentName:"td"},"result_type"),' is "TuplesOk"')))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The first row in the ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," (when present) will be the names of the columns."))),(0,l.kt)("h3",{id:"some-examples"},"Some examples"),(0,l.kt)("p",null,"An SQL query returning results."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "run_sql",\n    "args": {\n        "sql": "select user_id, first_name from author limit 2;"\n    }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n    "result_type": "TuplesOk",\n    "result": [\n        [\n            "user_id",\n            "first_name"\n        ],\n        [\n            "1",\n            "andre"\n        ],\n        [\n            "2",\n            "angela"\n        ]\n    ]\n}\n')),(0,l.kt)("p",null,"An SQL query to create a table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n  "type":"run_sql",\n  "args": {\n    "sql": "create table item ( id serial,  name text,  category text,  primary key (id))",\n    "check_metadata_consistency": false\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "result_type": "CommandOk",\n  "result": null\n}\n')))}u.isMDXComponent=!0}}]);