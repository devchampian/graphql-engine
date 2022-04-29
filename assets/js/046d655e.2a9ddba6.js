"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5156],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return t?a.createElement(m,r(r({ref:n},d),{},{components:t})):a.createElement(m,r({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},22138:function(e,n,t){var a=t(67294),i=t(57932),o=t(72389),r=t(86010),s=t(71077);n.Z=function(e){var n=e.query,t=e.variables,l=e.response,p=e.viewOnly,d=void 0===p||p,u=(0,o.Z)();return a.createElement("div",{className:"graphiql "+(0,r.Z)({"with-vars":!!t,"view-only":d})},a.createElement(i.ZP,{readOnly:d,editorTheme:"dracula",schema:null,fetcher:u?(0,s.n)({url:"https://hasura.io/graphql"}):function(){return null},query:n,variables:t,response:l}))}},60907:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=t(83117),i=t(80102),o=(t(67294),t(3905)),r=t(22138),s=["components"],l={description:"Model one-to-one relationships in Hasura",keywords:["hasura","docs","schema","relationship","one-to-one","1-1"],sidebar_position:2,sidebar_label:"One-to-one relationship"},p="Modelling one-to-one table relationships",d={unversionedId:"graphql/core/guides/data-modelling/one-to-one",id:"graphql/core/guides/data-modelling/one-to-one",title:"Modelling one-to-one table relationships",description:"Model one-to-one relationships in Hasura",source:"@site/docs/graphql/core/guides/data-modelling/one-to-one.mdx",sourceDirName:"graphql/core/guides/data-modelling",slug:"/graphql/core/guides/data-modelling/one-to-one",permalink:"/docs/latest/graphql/core/guides/data-modelling/one-to-one",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/guides/data-modelling/one-to-one.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Model one-to-one relationships in Hasura",keywords:["hasura","docs","schema","relationship","one-to-one","1-1"],sidebar_position:2,sidebar_label:"One-to-one relationship"},sidebar:"docsSidebar",previous:{title:"Guides: Data modelling",permalink:"/docs/latest/graphql/core/guides/data-modelling/index"},next:{title:"One-to-many relationship",permalink:"/docs/latest/graphql/core/guides/data-modelling/one-to-many"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Step 1: Set up a table relationship in the database",id:"step-1-set-up-a-table-relationship-in-the-database",level:2},{value:"Step 2: Set up GraphQL relationships",id:"step-2-set-up-graphql-relationships",level:2},{value:"Query using one-to-one relationships",id:"query-using-one-to-one-relationships",level:2},{value:"Insert using one-to-one relationships",id:"one-to-one-insert",level:2},{value:"Caveat for nested inserts",id:"caveat-for-nested-inserts",level:3}],h={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modelling-one-to-one-table-relationships"},"Modelling one-to-one table relationships"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"one-to-one")," relationship between two tables can be established via a\n",(0,o.kt)("strong",{parentName:"p"},"unique foreign key constraint"),"."),(0,o.kt)("p",null,"Say we have the following two tables in our database schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"authors (\n  id SERIAL PRIMARY KEY,\n  name TEXT\n)\n\npassport_info (\n  id SERIAL PRIMARY KEY,\n  owner_id INT NOT NULL\n  passport_number TEXT\n  ...\n)\n")),(0,o.kt)("p",null,"These two tables are related via a ",(0,o.kt)("inlineCode",{parentName:"p"},"one-to-one")," relationship. i.e.:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("inlineCode",{parentName:"li"},"author")," can have one ",(0,o.kt)("inlineCode",{parentName:"li"},"passport_info")),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"passport_info")," has one ",(0,o.kt)("inlineCode",{parentName:"li"},"owner"))),(0,o.kt)("h2",{id:"step-1-set-up-a-table-relationship-in-the-database"},"Step 1: Set up a table relationship in the database"),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"one-to-one")," relationship can be established in the database by:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Adding a ",(0,o.kt)("strong",{parentName:"li"},"foreign key constraint")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"passport_info")," table\nto the ",(0,o.kt)("inlineCode",{parentName:"li"},"authors")," table using the ",(0,o.kt)("inlineCode",{parentName:"li"},"owner_id")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," columns of the\ntables respectively"),(0,o.kt)("li",{parentName:"ol"},"Adding a ",(0,o.kt)("strong",{parentName:"li"},"unique constraint")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"owner_id")," column for the\n",(0,o.kt)("inlineCode",{parentName:"li"},"passport_info")," table")),(0,o.kt)("p",null,"This will ensure that the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner_id")," column in\n",(0,o.kt)("inlineCode",{parentName:"p"},"passport_info")," table is present in the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," column of the ",(0,o.kt)("inlineCode",{parentName:"p"},"authors"),"\ntable and there will be only one row with a particular ",(0,o.kt)("inlineCode",{parentName:"p"},"owner_id"),"."),(0,o.kt)("h2",{id:"step-2-set-up-graphql-relationships"},"Step 2: Set up GraphQL relationships"),(0,o.kt)("p",null,"To access the nested objects via the GraphQL API,\n",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/databases/postgres/schema/table-relationships/create"},"create the following relationships"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Object relationship, ",(0,o.kt)("inlineCode",{parentName:"li"},"passport_info")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"authors")," table using\n",(0,o.kt)("inlineCode",{parentName:"li"},"id -> passport_info :: owner_id")),(0,o.kt)("li",{parentName:"ul"},"Object relationship, ",(0,o.kt)("inlineCode",{parentName:"li"},"owner")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"passport_info")," table using\n",(0,o.kt)("inlineCode",{parentName:"li"},"owner_id -> authors :: id"))),(0,o.kt)("h2",{id:"query-using-one-to-one-relationships"},"Query using one-to-one relationships"),(0,o.kt)("p",null,"We can now:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fetch a list of ",(0,o.kt)("inlineCode",{parentName:"li"},"authors")," with their ",(0,o.kt)("inlineCode",{parentName:"li"},"passport_info"),":")),(0,o.kt)(r.Z,{query:"query {\n  authors {\n    id\n    name\n    passport_info {\n      id\n      passport_number\n    }\n  }\n }",response:'{\n  "data": {\n    "authors": [\n      {\n        "id": 1,\n        "name": "Justin",\n        "passport_info": {\n          "id": 1,\n          "passport_number": "987456234"\n        }\n      },\n      {\n        "id": 2,\n        "name": "Beltran",\n        "passport_info": {\n          "id": 2,\n          "passport_number": "F0004586"\n        }\n      }\n    ]\n  }\n }',mdxType:"GraphiQLIDE"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fetch a list of ",(0,o.kt)("inlineCode",{parentName:"li"},"passport_infos")," with their ",(0,o.kt)("inlineCode",{parentName:"li"},"owner"),":")),(0,o.kt)(r.Z,{query:"query {\n  passport_info {\n    id\n    passport_number\n    owner {\n      id\n      name\n    }\n  }\n }",response:'{\n  "data": {\n    "passport_info": [\n      {\n        "id": 1,\n        "passport_number": "987456234",\n        "owner": {\n          "id": 1,\n          "name": "Justin"\n        }\n      },\n      {\n        "id": 2,\n        "passport_number": "F0004586",\n        "owner": {\n          "id": 2,\n          "name": "Beltran"\n        }\n      }\n    ]\n  }\n }',mdxType:"GraphiQLIDE"}),(0,o.kt)("h2",{id:"one-to-one-insert"},"Insert using one-to-one relationships"),(0,o.kt)("p",null,"We can now:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"insert ",(0,o.kt)("inlineCode",{parentName:"li"},"passport_info")," with their ",(0,o.kt)("inlineCode",{parentName:"li"},"owner")," where the ",(0,o.kt)("inlineCode",{parentName:"li"},"owner")," might\nalready exist (assume unique ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"owner"),"):")),(0,o.kt)(r.Z,{query:'mutation upsertPassportInfoWithOwner {\n  insert_passport_info(objects: [\n    {\n      passport_number: "X98973765",\n      owner: {\n        data: {\n          name: "Kelly"\n        },\n        on_conflict: {\n          constraint: owner_name_key,\n          update_columns: [name]\n        }\n      },\n    }\n  ]) {\n    returning {\n      passport_number\n      owner {\n        name\n      }\n    }\n  }\n }',response:'{\n  "data": {\n    "insert_passport_info": {\n      "returning": [\n        {\n          "passport_number": "X98973765",\n          "owner": {\n            "name": "Kelly"\n          }\n        }\n      ]\n    }\n  }\n }',mdxType:"GraphiQLIDE"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can avoid the ",(0,o.kt)("inlineCode",{parentName:"p"},"on_conflict")," clause if you will never have conflicts."))),(0,o.kt)("h3",{id:"caveat-for-nested-inserts"},"Caveat for nested inserts"),(0,o.kt)("p",null,"Due to the way nested inserts are typically handled (described ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/databases/postgres/mutations/insert#pg-nested-inserts"},"here"),"), the order of object insertion needs to be\nspecified using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/syntax-defs#objrelusingmanualmapping"},"insertion_order")," option\nwhile creating one-to-one relationships via the API. This is necessary\nto ensure nested inserts are possible using either side as the parent\nwhich would otherwise error out with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Not-NULL violation")," error in one\nof the cases."),(0,o.kt)("p",null,"In our example, inserting a ",(0,o.kt)("inlineCode",{parentName:"p"},"passport_info")," with their nested ",(0,o.kt)("inlineCode",{parentName:"p"},"owner"),"\nwill work seamlessly but trying to insert an ",(0,o.kt)("inlineCode",{parentName:"p"},"author")," with their nested\n",(0,o.kt)("inlineCode",{parentName:"p"},"passport_info")," will throw a constraint violation error in case the\ninsertion order is not specified for the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," object relationship."))}m.isMDXComponent=!0}}]);