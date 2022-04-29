"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5970],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(o,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56932:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],s={sidebar_label:"Tables/Views",sidebar_position:2,description:"Manage tables and views with the Hasura schema/metadata API",keywords:["hasura","docs","schema/metadata API","API reference","table","view"]},o="Schema/Metadata API Reference: Tables/Views (Deprecated)",p={unversionedId:"graphql/core/api-reference/schema-metadata-api/table-view",id:"graphql/core/api-reference/schema-metadata-api/table-view",title:"Schema/Metadata API Reference: Tables/Views (Deprecated)",description:"Manage tables and views with the Hasura schema/metadata API",source:"@site/docs/graphql/core/api-reference/schema-metadata-api/table-view.mdx",sourceDirName:"graphql/core/api-reference/schema-metadata-api",slug:"/graphql/core/api-reference/schema-metadata-api/table-view",permalink:"/graphql-engine/latest/graphql/core/api-reference/schema-metadata-api/table-view",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/api-reference/schema-metadata-api/table-view.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Tables/Views",sidebar_position:2,description:"Manage tables and views with the Hasura schema/metadata API",keywords:["hasura","docs","schema/metadata API","API reference","table","view"]},sidebar:"docsSidebar",previous:{title:"Run SQL",permalink:"/graphql-engine/latest/graphql/core/api-reference/schema-metadata-api/run-sql"},next:{title:"Custom Functions",permalink:"/graphql-engine/latest/graphql/core/api-reference/schema-metadata-api/custom-functions"}},m={},d=[{value:"Introduction",id:"introduction",level:2},{value:"track_table",id:"schema-metadata-track-table",level:2},{value:"Args syntax",id:"schema-metadata-track-table-syntax",level:3},{value:"set_table_is_enum",id:"schema-metadata-set-table-is-enum",level:2},{value:"Args syntax",id:"schema-metadata-set-table-is-enum-syntax",level:3},{value:"track_table v2",id:"schema-metadata-track-table-v2",level:2},{value:"Args syntax",id:"schema-metadata-track-table-syntax-v2",level:3},{value:"set_table_custom_fields (deprecated)",id:"schema-metadata-set-table-custom-fields",level:2},{value:"Args syntax",id:"schema-metadata-set-table-custom-fields-syntax",level:3},{value:"set_table_customization",id:"schema-metadata-set-table-customization",level:2},{value:"Args syntax",id:"schema-metadata-set-table-customization-syntax",level:3},{value:"untrack_table",id:"schema-metadata-untrack-table",level:2},{value:"Args syntax",id:"schema-metadata-untrack-table-syntax",level:3}],u={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"schemametadata-api-reference-tablesviews-deprecated"},"Schema/Metadata API Reference: Tables/Views (Deprecated)"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"In versions ",(0,l.kt)("inlineCode",{parentName:"p"},"v2.0.0")," and above, the schema/metadata API is deprecated in\nfavour of the ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/schema-api/index"},"schema API")," and the\n",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/metadata-api/index"},"metadata API"),"."),(0,l.kt)("p",{parentName:"div"},"Though for backwards compatibility, the schema/metadata APIs will\ncontinue to function."))),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Track/untrack a table/view in Hasura GraphQL engine."),(0,l.kt)("p",null,"Only tracked tables/views are available for\nquerying/mutating/subscribing data over the GraphQL API."),(0,l.kt)("h2",{id:"schema-metadata-track-table"},"track_table"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"track_table")," is used to add a table/view to the GraphQL schema."),(0,l.kt)("p",null,"Add a table/view ",(0,l.kt)("inlineCode",{parentName:"p"},"author"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "track_table",\n    "args": {\n        "schema": "public",\n        "name": "author"\n    }\n}\n')),(0,l.kt)("h3",{id:"schema-metadata-track-table-syntax"},"Args syntax"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#tablename"},"TableName")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_enum"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"When set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", creates the table as an ",(0,l.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/databases/postgres/schema/enums#pg-create-enum-table"},"enum table"),".")))),(0,l.kt)("h2",{id:"schema-metadata-set-table-is-enum"},"set_table_is_enum"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"set_table_is_enum")," sets whether an already-tracked table should be used\nas an ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/databases/postgres/schema/enums#pg-create-enum-table"},"enum table"),"."),(0,l.kt)("p",null,"Use table ",(0,l.kt)("inlineCode",{parentName:"p"},"user_role")," as an enum table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n  "type": "set_table_is_enum",\n  "args": {\n    "table": {\n      "schema": "public",\n      "name": "user_role"\n    },\n    "is_enum": true\n  }\n}\n')),(0,l.kt)("h3",{id:"schema-metadata-set-table-is-enum-syntax"},"Args syntax"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#tablename"},"TableName")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_enum"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not the table should be used as an ",(0,l.kt)("inlineCode",{parentName:"td"},"enum table <enum table>"),".")))),(0,l.kt)("h2",{id:"schema-metadata-track-table-v2"},"track_table v2"),(0,l.kt)("p",null,"Version 2 of ",(0,l.kt)("inlineCode",{parentName:"p"},"track_table")," is used to add a table/view to the GraphQL\nschema with configuration. You can customise the root field names."),(0,l.kt)("p",null,"Add a table/view ",(0,l.kt)("inlineCode",{parentName:"p"},"author"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n   "type": "track_table",\n   "version": 2,\n   "args": {\n     "table": "author",\n     "configuration": {\n        "custom_root_fields": {\n           "select": "Authors",\n           "select_by_pk": "Author",\n           "select_aggregate": "AuthorAggregate",\n           "insert": "AddAuthors",\n           "insert_one":"AddAuthor",\n           "update": "UpdateAuthors",\n           "update_by_pk": "UpdateAuthor",\n           "delete": "DeleteAuthors",\n           "delete_by_pk": "DeleteAuthor"\n        },\n        "custom_column_names": {\n           "id": "authorId"\n        }\n     }\n   }\n}\n')),(0,l.kt)("p",null,"A table can be tracked with a ",(0,l.kt)("inlineCode",{parentName:"p"},"custom name"),". This can be useful when a\ntable name is not GraphQL compliant, like ",(0,l.kt)("inlineCode",{parentName:"p"},"Users Address"),". A\n",(0,l.kt)("inlineCode",{parentName:"p"},"custom name")," like ",(0,l.kt)("inlineCode",{parentName:"p"},"users_address")," will complement the ",(0,l.kt)("inlineCode",{parentName:"p"},'"Users Address"'),"\ntable, so that it can be added to the GraphQL schema."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n   "type": "track_table",\n   "version": 2,\n   "args": {\n     "table": "Author Details",\n     "configuration": {\n        "custom_name": "author_details"\n     }\n   }\n}\n')),(0,l.kt)("p",null,"The GraphQL nodes and typenames that are generated will be according to\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"identifier"),". For example, in this case, the nodes generated will\nbe:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"users_address")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"users_address_one")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"users_address_aggregate")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insert_users_address")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insert_users_address_one")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"update_users_address")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"update_users_address_by_pk")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delete_users_address")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delete_users_address_by_pk"))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"GraphQL engine requires the constraint names (if any) of a table to be\n",(0,l.kt)("a",{parentName:"p",href:"https://spec.graphql.org/June2018/#sec-Names"},"GraphQL compliant")," in\norder to be able to track it."))),(0,l.kt)("h3",{id:"schema-metadata-track-table-syntax-v2"},"Args syntax"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#tablename"},"TableName")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"configuration"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#table-config"},"Table Config")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for the table/view")))),(0,l.kt)("h2",{id:"schema-metadata-set-table-custom-fields"},"set_table_custom_fields (deprecated)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"set_table_custom_fields")," has been deprecated. Use the\n",(0,l.kt)("a",{parentName:"p",href:"#schema-metadata-set-table-customization"},"set_table_customization")," API\nto set the custom table fields."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"set_table_custom_fields")," in version ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," sets the custom root fields and\ncustom column names of already tracked table. This will ",(0,l.kt)("strong",{parentName:"p"},"replace")," the\nalready present custom fields configuration."),(0,l.kt)("p",null,"Set custom fields for table/view ",(0,l.kt)("inlineCode",{parentName:"p"},"author"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n   "type": "set_table_custom_fields",\n   "version": 2,\n   "args": {\n     "table": "author",\n     "custom_root_fields": {\n        "select": "Authors",\n        "select_by_pk": "Author",\n        "select_aggregate": "AuthorAggregate",\n        "insert": "AddAuthors",\n        "insert_one":"AddAuthor",\n        "update": "UpdateAuthors",\n        "update_by_pk": "UpdateAuthor",\n        "delete": "DeleteAuthors",\n        "delete_by_pk": "DeleteAuthor"\n     },\n     "custom_column_names": {\n        "id": "authorId"\n     }\n   }\n}\n')),(0,l.kt)("h3",{id:"schema-metadata-set-table-custom-fields-syntax"},"Args syntax"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#tablename"},"TableName")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"custom_root_fields"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#custom-root-fields"},"Custom Root Fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Customise the root fields")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"custom_column_names"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#customcolumnnames"},"CustomColumnNames")),(0,l.kt)("td",{parentName:"tr",align:null},"Customise the column fields")))),(0,l.kt)("h2",{id:"schema-metadata-set-table-customization"},"set_table_customization"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"set_table_customization")," allows you to customize any given table with a\ncustom name, custom root fields and custom column names of an already\ntracked table. This will ",(0,l.kt)("strong",{parentName:"p"},"replace")," the already present customization."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#schema-metadata-set-table-custom-fields"},"set_table_custom_fields")," has\nbeen deprecated in favour of this API."),(0,l.kt)("p",null,"Set the configuration for a table/view called ",(0,l.kt)("inlineCode",{parentName:"p"},"author"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n   "type": "set_table_customization",\n   "args": {\n     "table": "author_details",\n     "configuration": {\n       "identifier": "author",\n       "custom_root_fields": {\n          "select": "Authors",\n          "select_by_pk": "Author",\n          "select_aggregate": "AuthorAggregate",\n          "insert": "AddAuthors",\n          "insert_one":"AddAuthor",\n          "update": "UpdateAuthors",\n          "update_by_pk": "UpdateAuthor",\n          "delete": "DeleteAuthors",\n          "delete_by_pk": "DeleteAuthor"\n       },\n       "custom_column_names": {\n          "id": "authorId"\n       }\n     }\n   }\n}\n')),(0,l.kt)("h3",{id:"schema-metadata-set-table-customization-syntax"},"Args syntax"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#tablename"},"TableName")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"configuration"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#table-config"},"TableConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for the table/view")))),(0,l.kt)("h2",{id:"schema-metadata-untrack-table"},"untrack_table"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"untrack_table")," is used to remove a table/view from the GraphQL schema."),(0,l.kt)("p",null,"Remove a table/view ",(0,l.kt)("inlineCode",{parentName:"p"},"author"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type": "untrack_table",\n    "args": {\n        "table": {\n            "schema": "public",\n            "name": "author"\n         },\n        "cascade": true\n    }\n}\n')),(0,l.kt)("h3",{id:"schema-metadata-untrack-table-syntax"},"Args syntax"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#tablename"},"TableName")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cascade"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"When set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the effect (if possible) is cascaded to any metadata dependent objects (relationships, permissions, templates)")))))}c.isMDXComponent=!0}}]);