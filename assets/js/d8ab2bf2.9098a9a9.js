"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5471],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=m(n),c=r,u=h["".concat(l,".").concat(c)]||h[c]||d[c]||i;return n?a.createElement(u,s(s({ref:t},p),{},{components:n})):a.createElement(u,s({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var m=2;m<i;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},97971:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),s=["components"],o={sidebar_label:"Remote Schema Permissions",sidebar_position:6,description:"Manage remote schema permissions with the Hasura metadata API",keywords:["hasura","docs","schema/metadata API","API reference","remote schema permissions","permission"]},l="Schema/Metadata API Reference: Remote Schema Permissions (Deprecated)",m={unversionedId:"graphql/core/api-reference/schema-metadata-api/remote-schema-permissions",id:"graphql/core/api-reference/schema-metadata-api/remote-schema-permissions",title:"Schema/Metadata API Reference: Remote Schema Permissions (Deprecated)",description:"Manage remote schema permissions with the Hasura metadata API",source:"@site/docs/graphql/core/api-reference/schema-metadata-api/remote-schema-permissions.mdx",sourceDirName:"graphql/core/api-reference/schema-metadata-api",slug:"/graphql/core/api-reference/schema-metadata-api/remote-schema-permissions",permalink:"/graphql-engine/latest/graphql/core/api-reference/schema-metadata-api/remote-schema-permissions",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/api-reference/schema-metadata-api/remote-schema-permissions.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Remote Schema Permissions",sidebar_position:6,description:"Manage remote schema permissions with the Hasura metadata API",keywords:["hasura","docs","schema/metadata API","API reference","remote schema permissions","permission"]},sidebar:"docsSidebar",previous:{title:"Permissions",permalink:"/graphql-engine/latest/graphql/core/api-reference/schema-metadata-api/permission"},next:{title:"Computed Fields",permalink:"/graphql-engine/latest/graphql/core/api-reference/schema-metadata-api/computed-field"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"add_remote_schema_permissions",id:"schema-metadata-add-remote-schema-permissions",level:2},{value:"Argument Presets",id:"argument-presets",level:3},{value:"Remote Relationship Permissions",id:"remote-relationship-permissions",level:3},{value:"Cases when the remote relationship cannot be derived are:",id:"cases-when-the-remote-relationship-cannot-be-derived-are",level:4},{value:"Args syntax",id:"schema-metadata-add-remote-schema-permissions-syntax",level:3},{value:"drop_remote_schema_permissions",id:"schema-metadata-drop-remote-schema-permissions",level:2},{value:"Args syntax",id:"schema-metadata-drop-remote-schema-permissions-syntax",level:3}],h={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schemametadata-api-reference-remote-schema-permissions-deprecated"},"Schema/Metadata API Reference: Remote Schema Permissions (Deprecated)"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In versions ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0")," and above, the schema/metadata API is deprecated in\nfavour of the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/schema-api/index"},"schema API")," and the\n",(0,i.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/metadata-api/index"},"metadata API"),"."),(0,i.kt)("p",{parentName:"div"},"Though for backwards compatibility, the schema/metadata APIs will\ncontinue to function."))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Remote schema permissions can be defined to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Expose only certain parts of the remote schema to a role"),(0,i.kt)("li",{parentName:"ol"},"Preset arguments with static values or session variables for any\nfield.")),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," role has unrestricted access to the remote\nschema."),(0,i.kt)("h2",{id:"schema-metadata-add-remote-schema-permissions"},"add_remote_schema_permissions"),(0,i.kt)("p",null,"This API takes the schema ",(0,i.kt)("a",{parentName:"p",href:"http://spec.graphql.org/June2018/#sec-Type-System"},"(GraphQL IDL format)")," which should\nbe a subset of the remote schema and the role for which this restricted\nschema is exposed. The schema also accepts a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"@preset")," directive\nfor setting argument presets."),(0,i.kt)("p",null,"Suppose the following is the schema document of the remote."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  user_id: Int\n  name: String\n  phone: String\n  userMessages(whered: MessageWhereInpObj, includes: IncludeInpObj): [Message]\n}\n\ninterface Communication {\n  id: Int!\n  msg: String!\n}\n\ntype Message implements Communication {\n  id: Int!\n  name: String!\n  msg: String!\n  errorMsg: String\n}\n\ninput MessageWhereInpObj {\n  id: IntCompareObj\n  name: StringCompareObj\n}\n\ninput IntCompareObj {\n  eq : Int\n  gt : Int\n  lt : Int\n}\n\ninput StringCompareObj {\n  eq : String\n}\n\ninput IncludeInpObj {\n  id: [Int]\n  name: [String]\n}\n\ntype Query {\n  hello: String\n  messages(where: MessageWhereInpObj, includes: IncludeInpObj): [Message]\n  user(user_id: Int!): User\n  users(user_ids: [Int]!): [User]\n  message(id: Int!) : Message\n}\n\ntype mutation_root {\n  insert_user: (name: String!, phone: String!): User\n}\n\nschema {\n  query: Query\n  mutation: mutation_root\n}\n")),(0,i.kt)("p",null,"Let's say we want to impose some restrictions on the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," role:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Expose only the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_messages")," field in\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," object."),(0,i.kt)("li",{parentName:"ol"},"Add a preset value to the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_id")," argument of the ",(0,i.kt)("inlineCode",{parentName:"li"},"user")," field\ndefined in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Query")," object. We want the value of the preset to\ncome from a session variable called ",(0,i.kt)("inlineCode",{parentName:"li"},"x-hasura-user-id"),"."),(0,i.kt)("li",{parentName:"ol"},"Allow filtering of the messages only by ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"where"),"\nargument of the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_messages")," field."),(0,i.kt)("li",{parentName:"ol"},"Allow only the fields ",(0,i.kt)("inlineCode",{parentName:"li"},"hello"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"messages")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"user")," top level\nnode in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Query")," object."),(0,i.kt)("li",{parentName:"ol"},"Expose only the ",(0,i.kt)("inlineCode",{parentName:"li"},"query_root")," and not allow mutations for the role.")),(0,i.kt)("p",null,"The schema document, implementing the above restrictions will look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'type User {\n  user_id: Int\n  name: String\n  userMessages(where: MessageWhereInpObj, includes: IncludeInpObj): [Message]\n}\n\ninterface Communication {\n  id: Int!\n  msg: String!\n}\n\ntype Message implements Communication {\n  id: Int!\n  name: String!\n  msg: String!\n  errorMsg: String\n}\n\ninput MessageWhereInpObj {\n  name: StringCompareObj\n}\n\ninput IntCompareObj {\n  eq : Int\n  gt : Int\n  lt : Int\n}\n\ninput StringCompareObj {\n  eq : String\n}\n\ninput IncludeInpObj {\n  id: [Int]\n  name: [String]\n}\n\ntype Query {\n  hello: String\n  messages(where: MessageWhereInpObj, includes: IncludeInpObj): [Message]\n  user(user_id: Int! @preset(value: "x-hasura-user-id")): User\n}\n\nschema {\n  query: Query\n}\n')),(0,i.kt)("p",null,"To add the remote schema permission for the role ",(0,i.kt)("inlineCode",{parentName:"p"},"user"),", the following\nAPI should be called with the schema document."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type" : "add_remote_schema_permissions",\n    "args" : {\n        "remote_schema" : "user_messages",\n        "role" : "user",\n        "definition" : {\n            "schema" : "type User {     user_id: Int     name: String     userMessages(where: MessageWhereInpObj, includes: IncludeInpObj): [Message]   }    interface Communication {     id: Int!     msg: String!   }    type Message implements Communication {     id: Int!     name: String!     msg: String!     errorMsg: String   }    input MessageWhereInpObj {     name: StringCompareObj   }    input IntCompareObj {     eq : Int     gt : Int     lt : Int   }    input StringCompareObj {     eq : String   }    input IncludeInpObj {     id: [Int]     name: [String]   }    type Query {     hello: String     messages(where: MessageWhereInpObj, includes: IncludeInpObj): [Message]     user(user_id: Int! @preset(value: \\"x-hasura-user-id\\")): User   }    schema {     query: Query  }"\n        },\n       "comment":"remote schema permissions for role: user"\n    }\n}\n')),(0,i.kt)("h3",{id:"argument-presets"},"Argument Presets"),(0,i.kt)("p",null,"Argument presets can be used to automatically inject input values for\nfields during execution. This way the field is executed with limited\ninput values. Argument presets are of two types:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Static Value"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/auth/authorization/roles-variables#dynamic-session-variables"},"Session Variable"))),(0,i.kt)("p",null,"A preset value can be added to an input value via the ",(0,i.kt)("inlineCode",{parentName:"p"},"@preset"),"\ndirective."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  name String\n  id   Int\n}\n\ntype Query {\n  user(user_id: Int! @preset(value: 1))\n}\n")),(0,i.kt)("p",null,"When an input field has a preset defined, it will be removed from the\nexposed schema. So, following the above example, the user won't be able\nto specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_id")," argument while querying the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," field and\nwhenever the role executes the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," field, the preset value will get\nadded before querying the remote schema."),(0,i.kt)("p",null,"A preset value can also reference a session variable. When the preset\nvalue has a session variable, then its value is resolved and then added\nbefore querying the remote schema."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By default, if the input value preset contains a\n",(0,i.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/auth/authorization/roles-variables#dynamic-session-variables"},"session variable value"),", then its value\nwill be resolved when the query is executed. To treat the session\nvariable value as a literal value (avoiding resolving of the session\nvariable value) can be done by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," while\ndefining the preset."),(0,i.kt)("p",{parentName:"div"},"For example:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'type Query {\n  hello(text: String! @preset(value: "x-hasura-hello", static: true))\n}\n')),(0,i.kt)("p",{parentName:"div"},"In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},'"x-hasura-hello"')," will be the argument to the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello"),"\nfield whenever it's queried."))),(0,i.kt)("h3",{id:"remote-relationship-permissions"},"Remote Relationship Permissions"),(0,i.kt)("p",null,"Permissions for remote relationships are derived from the role's remote\nschema permissions. When permissions for a given remote relationship\ncannot be derived from the remote schema permissions of a given role,\nthat remote relationship will not be accessible to that role."),(0,i.kt)("h4",{id:"cases-when-the-remote-relationship-cannot-be-derived-are"},"Cases when the remote relationship cannot be derived are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"There are no remote schema permissions configured for the role for\nthe remote join's remote schema."),(0,i.kt)("li",{parentName:"ol"},"The remote join field is not accessible to the role."),(0,i.kt)("li",{parentName:"ol"},"Any of the type (both output and input types) used in the remote\njoin field is not accessible to the role.")),(0,i.kt)("p",null,"When a remote field's argument contains a preset and the same argument\nis used for creating a remote relationship, then the ",(0,i.kt)("strong",{parentName:"p"},"remote presets\nwill be overridden by the remote join configuration"),". For example:"),(0,i.kt)("p",null,"Let's say we have a table called ",(0,i.kt)("inlineCode",{parentName:"p"},"customer")," and we have a remote schema\ncalled ",(0,i.kt)("inlineCode",{parentName:"p"},"payments")," and we have a remote relationship\n",(0,i.kt)("inlineCode",{parentName:"p"},"customer_transactions_history")," defined which joins ",(0,i.kt)("inlineCode",{parentName:"p"},"customer")," to\n",(0,i.kt)("inlineCode",{parentName:"p"},"transactions")," field of the ",(0,i.kt)("inlineCode",{parentName:"p"},"payments")," field."),(0,i.kt)("p",null,"Suppose, the ",(0,i.kt)("inlineCode",{parentName:"p"},"payments")," remote schema is defined in the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Transaction {\n  customer_id    Int!\n  amount         Int!\n  time           String!\n  merchant       String!\n}\n\ntype Query {\n  transactions(customer_id: String!, limit: Int): [Transaction]\n}\n")),(0,i.kt)("p",null,"And, the ",(0,i.kt)("inlineCode",{parentName:"p"},"customer")," table is defined in the following manner."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE customer (\n  id SERIAL PRIMARY KEY,\n  name TEXT NOT NULL\n);\n")),(0,i.kt)("p",null,"The remote relationship is defined to join the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field from the\n",(0,i.kt)("inlineCode",{parentName:"p"},"customer")," table to the ",(0,i.kt)("inlineCode",{parentName:"p"},"customer_id")," argument of the ",(0,i.kt)("inlineCode",{parentName:"p"},"transactions"),"\nfield."),(0,i.kt)("p",null,"We only allow the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," role to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," fiels of\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"Transaction")," object, and introduce a preset for the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit"),"\nargument of the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction")," field, resulting in the following schema\nbeing presented."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Transaction {\n  amount   Int!\n  time     String!\n}\n\ntype Query {\n  transactions(customer_id: String!, limit: Int @preset(value: 10)): [Transaction]\n}\n")),(0,i.kt)("p",null,"Two changes have been made for the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," role:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"merchant")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"customer_id")," fields are not accessible in the\n",(0,i.kt)("inlineCode",{parentName:"li"},"Transaction")," object."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"limit")," argument has a preset of 10.")),(0,i.kt)("p",null,"Now, consider the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  customer {\n    name\n    customer_transactions_history {\n      amount\n      time\n    }\n  }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," role won't be able to provide the value for the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit"),"\nargument in the ",(0,i.kt)("inlineCode",{parentName:"p"},"customer_transactions_history")," field because the\n",(0,i.kt)("inlineCode",{parentName:"p"},"limit")," has a preset set and the value will be added by the GraphQL\nengine before it queries the remote schema."),(0,i.kt)("h3",{id:"schema-metadata-add-remote-schema-permissions-syntax"},"Args syntax"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"remote_schema"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#remoteschemaname"},"RemoteSchemaName")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the remote schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"role"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#rolename"},"RoleName")),(0,i.kt)("td",{parentName:"tr",align:null},"Role")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"definition"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#remoteschemapermission"},"RemoteSchemaPermission")),(0,i.kt)("td",{parentName:"tr",align:null},"The remote schema permission definition")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"comment"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"Comment")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"add_remote_schema_permissions")," will only work when the GraphQL engine\nhas enabled remote schema permissions. Remote schema permissions can be\nenabled by running the graphql-engine with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"--enable-remote-schema-permissions")," server flag or by setting the\n",(0,i.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_ENABLE_REMOTE_SCHEMA_PERMISSIONS")," environment variable."))),(0,i.kt)("h2",{id:"schema-metadata-drop-remote-schema-permissions"},"drop_remote_schema_permissions"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"drop_remote_schema_permissions")," API is used to drop an existing\ndelete permission for a role on a remote schema."),(0,i.kt)("p",null,"An example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/query HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n    "type" : "drop_remote_schema_permissions",\n    "args" : {\n        "remote_schema" : "user_messages",\n        "role" : "user"\n    }\n}\n')),(0,i.kt)("h3",{id:"schema-metadata-drop-remote-schema-permissions-syntax"},"Args syntax"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"table"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#remoteschemaname"},"RemoteSchemaName")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the remote schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"role"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs#rolename"},"RoleName")),(0,i.kt)("td",{parentName:"tr",align:null},"Role")))))}c.isMDXComponent=!0}}]);