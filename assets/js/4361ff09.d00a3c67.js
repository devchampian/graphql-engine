"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8581],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22138:function(e,t,n){var a=n(67294),r=n(57932),i=n(72389),s=n(86010),o=n(71077);t.Z=function(e){var t=e.query,n=e.variables,l=e.response,p=e.viewOnly,d=void 0===p||p,u=(0,i.Z)();return a.createElement("div",{className:"graphiql "+(0,s.Z)({"with-vars":!!n,"view-only":d})},a.createElement(r.ZP,{readOnly:d,editorTheme:"dracula",schema:null,fetcher:u?(0,o.n)({url:"https://hasura.io/graphql"}):function(){return null},query:t,variables:n,response:l}))}},75548:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),s=n(22138),o=["components"],l={sidebar_label:"Update",sidebar_position:3,description:"Update an object in MS SQL Server using a mutation",keywords:["hasura","docs","ms sql server","mutation","update"]},p="MS SQL Server: Update mutation",d={unversionedId:"graphql/core/databases/ms-sql-server/mutations/update",id:"graphql/core/databases/ms-sql-server/mutations/update",title:"MS SQL Server: Update mutation",description:"Update an object in MS SQL Server using a mutation",source:"@site/docs/graphql/core/databases/ms-sql-server/mutations/update.mdx",sourceDirName:"graphql/core/databases/ms-sql-server/mutations",slug:"/graphql/core/databases/ms-sql-server/mutations/update",permalink:"/docs/latest/graphql/core/databases/ms-sql-server/mutations/update",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/databases/ms-sql-server/mutations/update.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Update",sidebar_position:3,description:"Update an object in MS SQL Server using a mutation",keywords:["hasura","docs","ms sql server","mutation","update"]},sidebar:"docsSidebar",previous:{title:"Upsert",permalink:"/docs/latest/graphql/core/databases/ms-sql-server/mutations/upsert"},next:{title:"Delete",permalink:"/docs/latest/graphql/core/databases/ms-sql-server/mutations/delete"}},u={},c=[{value:"Auto-generated update mutation schema",id:"auto-generated-update-mutation-schema",level:2},{value:"Update an object by its primary key",id:"update-an-object-by-its-primary-key",level:2},{value:"Update objects based on their fields",id:"update-objects-based-on-their-fields",level:2},{value:"Update objects based on nested objects&#39; fields",id:"update-objects-based-on-nested-objects-fields",level:2},{value:"Update all objects",id:"update-all-objects",level:2},{value:"Increment/Decrement <strong>int</strong> columns",id:"incrementdecrement-int-columns",level:2},{value:"Replace all nested array objects of an object",id:"replace-all-nested-array-objects-of-an-object",level:2}],m={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ms-sql-server-update-mutation"},"MS SQL Server: Update mutation"),(0,i.kt)("h2",{id:"auto-generated-update-mutation-schema"},"Auto-generated update mutation schema"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For example"),", the auto-generated schema for the update mutation field for a table ",(0,i.kt)("inlineCode",{parentName:"p"},"article")," looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'update_article (\n  _inc: article_inc_input\n  _set: article_set_input\n  where: article_bool_exp!\n): article_mutation_response\n\n# response of any mutation on the table "article"\ntype article_mutation_response {\n  # number of affected rows by the mutation\n  affected_rows: Int!\n  # data of the affected rows by the mutation\n  returning: [article!]!\n}\n\n# single object update\nupdate_article_by_pk (\n  _inc: article_inc_input\n  _set: article_set_input\n  # primary key columns arg\n  pk_columns: article_pk_columns_input!\n): article\n')),(0,i.kt)("p",null,"As you can see from the schema:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"where")," argument is compulsory to filter rows to be updated.\nSee ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/databases/ms-sql-server/queries/query-filters"},"Filter queries")," for filtering options.\nObjects can be updated based on filters on their own fields or those in their nested objects. The ",(0,i.kt)("inlineCode",{parentName:"li"},"{}")," expression can be used to update all rows."),(0,i.kt)("li",{parentName:"ul"},"You can return the number of affected rows and the affected objects (with nested objects) in the response.")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/graphql-api/mutation#update-syntax"},"update mutation API reference")," for the full specifications."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"At least any one of ",(0,i.kt)("inlineCode",{parentName:"li"},"_set"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_inc")," operators is required."),(0,i.kt)("li",{parentName:"ul"},"If a table is not in the ",(0,i.kt)("inlineCode",{parentName:"li"},"dbo")," MS SQL Server schema, the update mutation field will be of the format ",(0,i.kt)("inlineCode",{parentName:"li"},"update_<schema_name>_<table_name>"),".")))),(0,i.kt)("h2",{id:"update-an-object-by-its-primary-key"},"Update an object by its primary key"),(0,i.kt)("p",null,"You can update a single object in a table using the primary key.\nThe output type is the nullable table object. The mutation returns the updated row object or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if the row does not exist."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Update an article where ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,i.kt)(s.Z,{query:"mutation update_an_article {\n  update_article_by_pk (\n    pk_columns: {id: 1}\n    _set: { is_published: true }\n  ) {\n    id\n    is_published\n  }\n}",response:'{\n  "data": {\n    "update_article_by_pk": {\n      "id": 1,\n      "is_published": true\n    }\n  }\n}',mdxType:"GraphiQLIDE"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Update a non-existent article:"),(0,i.kt)(s.Z,{query:"mutation update_an_article {\n  update_article_by_pk (\n    pk_columns: {id: 100}\n    _set: { is_published: true }\n  ) {\n    id\n    is_published\n  }\n}",response:'{\n  "data": {\n    "update_article_by_pk": null\n  }\n}',mdxType:"GraphiQLIDE"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"update_<table>_by_pk")," will ",(0,i.kt)("strong",{parentName:"p"},"only")," be available if you have select permissions on the table, as it returns the updated row."))),(0,i.kt)("h2",{id:"update-objects-based-on-their-fields"},"Update objects based on their fields"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"rating")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"is_published")," of articles with a low ",(0,i.kt)("inlineCode",{parentName:"p"},"rating"),":"),(0,i.kt)(s.Z,{query:"mutation update_article {\n  update_article(\n    where: {rating: {_lte: 2}},\n    _set: {\n      rating: 1,\n      is_published: false\n    }\n  ) {\n    affected_rows\n    returning {\n      id\n      title\n      content\n      rating\n      is_published\n    }\n  }\n}",response:'{\n  "data": {\n    "update_article": {\n      "affected_rows": 2,\n      "returning": [\n        {\n          "id": 3,\n          "title": "article 3",\n          "content": "lorem ipsum dolor sit amet",\n          "rating": 1,\n          "is_published": false\n        },\n        {\n          "id": 6,\n          "title": "article 6",\n          "content": "lorem ipsum dolor sit amet",\n          "rating": 1,\n          "is_published": false\n        }\n      ]\n    }\n  }\n}',mdxType:"GraphiQLIDE"}),(0,i.kt)("p",null,"Using variables:"),(0,i.kt)(s.Z,{query:"mutation update_article($rating: Int, $changes: article_set_input) {\n  update_article(\n    where: {rating: {_lte: $rating}},\n    _set: $changes\n  ) {\n    affected_rows\n    returning {\n      id\n      title\n      content\n      rating\n      is_published\n    }\n  }\n}",response:'{\n  "data": {\n    "update_article": {\n      "affected_rows": 2,\n      "returning": [\n        {\n          "id": 3,\n          "title": "article 3",\n          "content": "lorem ipsum dolor sit amet",\n          "rating": 1,\n          "is_published": false\n        },\n        {\n          "id": 6,\n          "title": "article 6",\n          "content": "lorem ipsum dolor sit amet",\n          "rating": 1,\n          "is_published": false\n        }\n      ]\n    }\n  }\n}',variables:'{\n  "rating": 2,\n  "changes": {\n    "rating": 1,\n    "is_published": false\n  }\n}',mdxType:"GraphiQLIDE"}),(0,i.kt)("p",null,"OR"),(0,i.kt)(s.Z,{query:"mutation update_article($ratingLimit: Int, $rating: Int, $isPublished: Boolean) {\n  update_article(\n    where: {rating: {_lte: $ratingLimit}},\n    _set: {\n      rating: $rating,\n      is_published: $isPublished\n    }\n  ) {\n    affected_rows\n    returning {\n      id\n      title\n      content\n      rating\n      is_published\n    }\n  }\n}\n",response:'{\n  "data": {\n    "update_article": {\n      "affected_rows": 2,\n      "returning": [\n        {\n          "id": 3,\n          "title": "article 3",\n          "content": "lorem ipsum dolor sit amet",\n          "rating": 1,\n          "is_published": false\n        },\n        {\n          "id": 6,\n          "title": "article 6",\n          "content": "lorem ipsum dolor sit amet",\n          "rating": 1,\n          "is_published": false\n        }\n      ]\n    }\n  }\n}',variables:'{\n  "ratingLimit": 2,\n  "rating": 1,\n  "isPublished": false\n}',mdxType:"GraphiQLIDE"}),(0,i.kt)("h2",{id:"update-objects-based-on-nested-objects-fields"},"Update objects based on nested objects' fields"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Reset the ",(0,i.kt)("inlineCode",{parentName:"p"},"rating"),' of all articles authored by "Sidney":'),(0,i.kt)(s.Z,{query:'mutation update_ratings {\n  update_article(\n    where: {author: {name: {_eq: "Sidney"}}},\n    _set: {rating: null}\n  ) {\n    affected_rows\n  }\n}',response:'{\n  "data": {\n    "update_article": {\n      "affected_rows": 3\n    }\n  }\n}',mdxType:"GraphiQLIDE"}),(0,i.kt)("h2",{id:"update-all-objects"},"Update all objects"),(0,i.kt)("p",null,"You can update all objects in a table using the ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," expression as the ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," argument.\n",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," basically evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for all objects."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Reset rating of all articles:"),(0,i.kt)(s.Z,{query:"mutation reset_rating {\n  update_article (\n    where: {}\n    _set: { rating: null }\n  ) {\n    affected_rows\n  }\n}\n",response:'{\n  "data": {\n    "update_article": {\n      "affected_rows": 20\n    }\n  }\n}',mdxType:"GraphiQLIDE"}),(0,i.kt)("h2",{id:"incrementdecrement-int-columns"},"Increment/Decrement ",(0,i.kt)("strong",{parentName:"h2"},"int")," columns"),(0,i.kt)("p",null,"You can increment/decrement an ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," column with a given value using the ",(0,i.kt)("inlineCode",{parentName:"p"},"_inc")," operator."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Increment the ",(0,i.kt)("inlineCode",{parentName:"p"},"likes")," of an article by 2:"),(0,i.kt)(s.Z,{query:"mutation update_likes {\n  update_article(\n    where: {id: {_eq: 1}},\n    _inc: {likes: 2}  # initial value: 1\n  ) {\n    affected_rows\n    returning {\n      id\n      likes\n    }\n  }\n}\n",response:'{\n  "data": {\n    "update_article": {\n      "affected_rows": 1,\n      "returning": {\n        "id": 1,\n        "likes": 3\n      }\n    }\n  }\n}',mdxType:"GraphiQLIDE"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Decrement the ",(0,i.kt)("inlineCode",{parentName:"p"},"likes")," of an article by 2:"),(0,i.kt)(s.Z,{query:"mutation update_likes {\n  update_article(\n    where: {id: {_eq: 1}},\n    _inc: {likes: -2}  # initial value: 3\n  ) {\n    affected_rows\n    returning {\n      id\n      likes\n    }\n  }\n}\n",response:'{\n  "data": {\n    "update_article": {\n      "affected_rows": 1,\n      "returning": {\n        "id": 1,\n        "likes": 1\n      }\n    }\n  }\n}',mdxType:"GraphiQLIDE"}),(0,i.kt)("h2",{id:"replace-all-nested-array-objects-of-an-object"},"Replace all nested array objects of an object"),(0,i.kt)("p",null,"In order to replace all existing nested array objects of an object,\ncurrently it's required to use two mutations: one to delete all the\nexisting objects and one to add a list of new nested objects."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Replace all articles of an author with a new list:"),(0,i.kt)(s.Z,{query:'mutation updateAuthorArticles($author_id: Int!) {\n  delete_articles(\n    where: {author_id: {_eq: $author_id}}\n  ) {\n    affected_rows\n  }\n  insert_articles(\n    objects: [\n      {\n        author_id: $author_id,\n        title: "title",\n        content: "some content"\n      },\n      {\n        author_id: $author_id,\n        title: "another title",\n        content: "some other content"\n      }\n    ]\n  ) {\n    affected_rows\n  }\n}',response:'{\n  "data": {\n    "delete_article_tags": {\n      "affected_rows": 3\n    },\n    "insert_article_tags": {\n      "affected_rows": 2\n    }\n  }\n}',variables:'{\n  "author_id": 21\n}',mdxType:"GraphiQLIDE"}))}h.isMDXComponent=!0}}]);