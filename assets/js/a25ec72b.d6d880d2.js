"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2316],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,m=d["".concat(s,".").concat(c)]||d[c]||h[c]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84048:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return h}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={description:"How Hasura GraphQL engine works",keywords:["hasura","docs","graphql","graphql engine","how it works"],slug:"index"},s="How Hasura GraphQL engine works",u={unversionedId:"graphql/core/how-it-works/index",id:"graphql/core/how-it-works/index",title:"How Hasura GraphQL engine works",description:"How Hasura GraphQL engine works",source:"@site/docs/graphql/core/how-it-works/index.mdx",sourceDirName:"graphql/core/how-it-works",slug:"/graphql/core/how-it-works/index",permalink:"/graphql-engine/latest/graphql/core/how-it-works/index",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/how-it-works/index.mdx",tags:[],version:"current",frontMatter:{description:"How Hasura GraphQL engine works",keywords:["hasura","docs","graphql","graphql engine","how it works"],slug:"index"},sidebar:"docsSidebar",previous:{title:"Common syntax definitions",permalink:"/graphql-engine/latest/graphql/core/api-reference/syntax-defs"},next:{title:"Metadata catalogue",permalink:"/graphql-engine/latest/graphql/core/how-it-works/metadata-schema"}},p={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Schema generation",id:"schema-generation",level:2},{value:"Tables",id:"tables",level:3},{value:"Views",id:"views",level:3},{value:"Relationships",id:"relationships",level:3},{value:"Resolvers",id:"resolvers",level:2},{value:"Metadata",id:"metadata",level:2}],d={toc:h};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-hasura-graphql-engine-works"},"How Hasura GraphQL engine works"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Given a database, the Hasura GraphQL engine can automatically generate a GraphQL schema and process GraphQL queries, subscriptions and mutations. Here\u2019s what the Hasura GraphQL engine does under the hood."),(0,i.kt)("h2",{id:"schema-generation"},"Schema generation"),(0,i.kt)("p",null,"The Hasura GraphQL engine automatically generates GraphQL schema components when you track a table/view in Hasura and create relationships between them."),(0,i.kt)("h3",{id:"tables"},"Tables"),(0,i.kt)("p",null,"When you track a table in the Hasura GraphQL engine, it automatically generates the following for it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A GraphQL type definition for the table"),(0,i.kt)("li",{parentName:"ul"},"A query field with ",(0,i.kt)("inlineCode",{parentName:"li"},"where"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"order_by"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"limit")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"offset")," arguments"),(0,i.kt)("li",{parentName:"ul"},"A subscription field with ",(0,i.kt)("inlineCode",{parentName:"li"},"where"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"order_by"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"limit")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"offset")," arguments"),(0,i.kt)("li",{parentName:"ul"},"An insert mutation field with ",(0,i.kt)("inlineCode",{parentName:"li"},"on_conflict")," argument that supports upsert and bulk inserts"),(0,i.kt)("li",{parentName:"ul"},"An update mutation field with ",(0,i.kt)("inlineCode",{parentName:"li"},"where")," argument that supports bulk updates"),(0,i.kt)("li",{parentName:"ul"},"A delete mutation field with ",(0,i.kt)("inlineCode",{parentName:"li"},"where")," argument that supports bulk deletes")),(0,i.kt)("h3",{id:"views"},"Views"),(0,i.kt)("p",null,"When you track a view in Hasura GraphQL engine, it automatically generates the following for it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A GraphQL type definition for the view"),(0,i.kt)("li",{parentName:"ul"},"A query field with ",(0,i.kt)("inlineCode",{parentName:"li"},"where"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"order_by"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"limit")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"offset")," arguments"),(0,i.kt)("li",{parentName:"ul"},"A subscription field with ",(0,i.kt)("inlineCode",{parentName:"li"},"where"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"order_by"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"limit")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"offset")," arguments")),(0,i.kt)("p",null,"Essentially the Hasura GraphQL engine does the same thing it would do for a table, but without creating the insert, update and delete mutations."),(0,i.kt)("h3",{id:"relationships"},"Relationships"),(0,i.kt)("p",null,"When you create a relationship between a table/view with another table/view in the Hasura GraphQL engine, it does the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Augments the type of the table/view by adding a reference to the nested type to allow fetching nested objects."),(0,i.kt)("li",{parentName:"ul"},"Augments the ",(0,i.kt)("inlineCode",{parentName:"li"},"where")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"order_by")," clauses to allow filtering and sorting based on nested objects.")),(0,i.kt)("h2",{id:"resolvers"},"Resolvers"),(0,i.kt)("p",null,"The Hasura GraphQL engine does not have any resolvers. The Hasura GraphQL engine is actually a compiler that compiles your GraphQL query into an efficient SQL query."),(0,i.kt)("p",null,"Hasura's GraphQL syntax is also optimized to expose the power of the underlying SQL so that you can make powerful queries via GraphQL."),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,'All the information required for schema generation is stored by the Hasura GraphQL engine as metadata in its "catalogue" which is essentially a special Postgres schema in the metadata database.'),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/how-it-works/metadata-schema"},"metadata catalogue")," for more details."))}c.isMDXComponent=!0}}]);