"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5051],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22138:function(e,t,n){var a=n(67294),r=n(57932),l=n(72389),i=n(86010),o=n(71077);t.Z=function(e){var t=e.query,n=e.variables,s=e.response,d=e.viewOnly,c=void 0===d||d,p=(0,l.Z)();return a.createElement("div",{className:"graphiql "+(0,i.Z)({"with-vars":!!n,"view-only":c})},a.createElement(r.ZP,{readOnly:c,editorTheme:"dracula",schema:null,fetcher:p?(0,o.n)({url:"https://hasura.io/graphql"}):function(){return null},query:t,variables:n,response:s}))}},66861:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=n(22138),o=["components"],s={sidebar_label:"Delete",sidebar_position:4,description:"Delete an object from MS SQL Server using a mutation",keywords:["hasura","docs","ms sql server","mutation","delete"]},d="MS SQL Server: Delete mutation",c={unversionedId:"graphql/core/databases/ms-sql-server/mutations/delete",id:"graphql/core/databases/ms-sql-server/mutations/delete",title:"MS SQL Server: Delete mutation",description:"Delete an object from MS SQL Server using a mutation",source:"@site/docs/graphql/core/databases/ms-sql-server/mutations/delete.mdx",sourceDirName:"graphql/core/databases/ms-sql-server/mutations",slug:"/graphql/core/databases/ms-sql-server/mutations/delete",permalink:"/graphql-engine/latest/graphql/core/databases/ms-sql-server/mutations/delete",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/databases/ms-sql-server/mutations/delete.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Delete",sidebar_position:4,description:"Delete an object from MS SQL Server using a mutation",keywords:["hasura","docs","ms sql server","mutation","delete"]},sidebar:"docsSidebar",previous:{title:"Update",permalink:"/graphql-engine/latest/graphql/core/databases/ms-sql-server/mutations/update"},next:{title:"MS SQL Server: Subscriptions",permalink:"/graphql-engine/latest/graphql/core/databases/ms-sql-server/subscriptions/index"}},p={},u=[{value:"Auto-generated delete mutation schema",id:"auto-generated-delete-mutation-schema",level:2},{value:"Delete an object by its primary key",id:"delete-an-object-by-its-primary-key",level:2},{value:"Delete objects based on their fields",id:"delete-objects-based-on-their-fields",level:2},{value:"Delete objects based on nested objects&#39; fields",id:"delete-objects-based-on-nested-objects-fields",level:2},{value:"Delete all objects",id:"delete-all-objects",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ms-sql-server-delete-mutation"},"MS SQL Server: Delete mutation"),(0,l.kt)("h2",{id:"auto-generated-delete-mutation-schema"},"Auto-generated delete mutation schema"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"For example"),", the auto-generated schema for the delete mutation field\nfor a table ",(0,l.kt)("inlineCode",{parentName:"p"},"article")," looks like the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'delete_article (\n  where: article_bool_exp!\n): article_mutation_response\n\n# response of any mutation on the table "article"\ntype article_mutation_response {\n  # number of affected rows by the mutation\n  affected_rows: Int!\n  # data of the affected rows by the mutation\n  returning: [article!]!\n}\n\n# single object delete\ndelete_article_by_pk (\n  # all primary key columns args\n  id: Int\n): article\n')),(0,l.kt)("p",null,"As you can see from the schema:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"where")," argument is compulsory to filter rows to be deleted. See\n",(0,l.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/databases/postgres/queries/query-filters"},"Filter queries")," for filtering options. Objects\ncan be deleted based on filters on their own fields or those in\ntheir nested objects. The ",(0,l.kt)("inlineCode",{parentName:"li"},"{}")," expression can be used to delete all\nrows."),(0,l.kt)("li",{parentName:"ul"},"You can return the number of affected rows and the affected objects\n(with nested objects) in the response.")),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/graphql-api/mutation#delete-syntax"},"delete mutation API reference")," for the full\nspecifications."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If a table is not in the default ",(0,l.kt)("inlineCode",{parentName:"p"},"dbo")," MS SQL Server schema, the delete\nmutation field will be of the format\n",(0,l.kt)("inlineCode",{parentName:"p"},"delete_<schema_name>_<table_name>"),"."))),(0,l.kt)("h2",{id:"delete-an-object-by-its-primary-key"},"Delete an object by its primary key"),(0,l.kt)("p",null,"You can delete a single object in a table using the primary key. The\noutput type is the nullable table object. The mutation returns the\ndeleted row object or ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if the row does not exist."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")," Delete an article where ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,l.kt)(i.Z,{query:"mutation delete_an_object {\n  delete_article_by_pk (\n    id: 1\n  ) {\n    id\n    title\n    user_id\n  }\n}",response:'{\n  "data": {\n    "delete_article_by_pk": {\n      "id": 1,\n      "title": "Article 1",\n      "user_id": 1\n    }\n  }\n}',mdxType:"GraphiQLIDE"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")," Delete a non-existent article:"),(0,l.kt)(i.Z,{query:"mutation delete_an_object {\n  delete_article_by_pk (\n    id: 100\n  ) {\n    id\n    title\n    user_id\n  }\n}",response:'{\n  "data": {\n    "delete_article_by_pk": null\n  }\n}',mdxType:"GraphiQLIDE"}),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"delete_<table>_by_pk")," will ",(0,l.kt)("strong",{parentName:"p"},"only")," be available if you have select\npermissions on the table, as it returns the deleted row."))),(0,l.kt)("h2",{id:"delete-objects-based-on-their-fields"},"Delete objects based on their fields"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")," Delete all articles rated less than 3:"),(0,l.kt)(i.Z,{query:"mutation delete_low_rated_articles {\n  delete_article(\n    where: {rating: {_lt: 3}}\n  ) {\n    affected_rows\n  }\n}",response:'{\n  "data": {\n    "delete_low_rated_articles": {\n      "affected_rows": 8\n    }\n  }\n}',mdxType:"GraphiQLIDE"}),(0,l.kt)("h2",{id:"delete-objects-based-on-nested-objects-fields"},"Delete objects based on nested objects' fields"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")," Delete all articles written by a particular author:"),(0,l.kt)(i.Z,{query:'mutation delete_authors_articles {\n  delete_article(\n    where: {author: {name: {_eq: "Corny"}}}\n  ) {\n    affected_rows\n  }\n}',response:'{\n  "data": {\n    "delete_authors_articles": {\n      "affected_rows": 2\n    }\n  }\n}',mdxType:"GraphiQLIDE"}),(0,l.kt)("h2",{id:"delete-all-objects"},"Delete all objects"),(0,l.kt)("p",null,"You can delete all objects in a table using the ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," expression as the\n",(0,l.kt)("inlineCode",{parentName:"p"},"where")," argument. ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," basically evaluates to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," for all objects."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")," Delete all articles:"),(0,l.kt)(i.Z,{query:"mutation delete_all_articles {\n  delete_article (\n    where: {}\n  ) {\n    affected_rows\n  }\n}",response:'{\n  "data": {\n    "delete_article": {\n      "affected_rows": 20\n    }\n  }\n}',mdxType:"GraphiQLIDE"}))}h.isMDXComponent=!0}}]);