"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2901],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return g}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),u=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=u(r),g=n,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return r?a.createElement(m,s(s({ref:e},p),{},{components:r})):a.createElement(m,s({ref:e},p))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50993:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),s=["components"],o={sidebar_label:"Hasura - Citus compatibility",sidebar_position:2,description:"Hasura Citus Hyperscale Postgres database support",keywords:["hasura","docs","databases","citus-hyperscale-postgres","compatibility"]},l="Hasura - Citus compatibility",u={unversionedId:"graphql/core/databases/citus-hyperscale-postgres/hasura-citus-compatibility",id:"graphql/core/databases/citus-hyperscale-postgres/hasura-citus-compatibility",title:"Hasura - Citus compatibility",description:"Hasura Citus Hyperscale Postgres database support",source:"@site/docs/graphql/core/databases/citus-hyperscale-postgres/hasura-citus-compatibility.mdx",sourceDirName:"graphql/core/databases/citus-hyperscale-postgres",slug:"/graphql/core/databases/citus-hyperscale-postgres/hasura-citus-compatibility",permalink:"/graphql-engine/latest/graphql/core/databases/citus-hyperscale-postgres/hasura-citus-compatibility",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/databases/citus-hyperscale-postgres/hasura-citus-compatibility.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Hasura - Citus compatibility",sidebar_position:2,description:"Hasura Citus Hyperscale Postgres database support",keywords:["hasura","docs","databases","citus-hyperscale-postgres","compatibility"]},sidebar:"docsSidebar",previous:{title:"Docker",permalink:"/graphql-engine/latest/graphql/core/databases/citus-hyperscale-postgres/getting-started/docker"},next:{title:"BigQuery",permalink:"/graphql-engine/latest/graphql/core/databases/bigquery/index"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Tables",id:"tables",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Functions",id:"functions",level:2},{value:"Mutations",id:"mutations",level:2},{value:"Event triggers",id:"event-triggers",level:2}],d={toc:c};function g(t){var e=t.components,r=(0,n.Z)(t,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hasura---citus-compatibility"},"Hasura - Citus compatibility"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"As Citus is an extension of Postgres, the way it functions with Hasura\nis also very similar. Currently the following features are supported\nwith Citus and Hasura:"),(0,i.kt)("h2",{id:"tables"},"Tables"),(0,i.kt)("p",null,"Querying from all kinds of tables and views is currently supported. This\nincludes local, reference and distributed tables. All the tables can be\ntracked from the console."),(0,i.kt)("h2",{id:"relationships"},"Relationships"),(0,i.kt)("p",null,"The following table describes the supported relationships based on the\nsupported joins in Citus:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"To Local"),(0,i.kt)("th",{parentName:"tr",align:null},"To Reference"),(0,i.kt)("th",{parentName:"tr",align:null},"To Distributed"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"From Local")),(0,i.kt)("td",{parentName:"tr",align:null},"Object, Array"),(0,i.kt)("td",{parentName:"tr",align:null},"Object, Array"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"From Reference")),(0,i.kt)("td",{parentName:"tr",align:null},"Object, Array"),(0,i.kt)("td",{parentName:"tr",align:null},"Object, Array"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"From Distributed")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"Object, Array")))),(0,i.kt)("p",null,"The Hasura console allows you to add all the supported relationships."),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"All permissions work like on Postgres without any restrictions."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("p",null,"Citus supported ",(0,i.kt)("inlineCode",{parentName:"p"},"plpgsql")," functions are supported on Hasura with the\nfollowing restrictions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fetching relationships as part of the function\u2019s response is\ncurrently not supported")),(0,i.kt)("h2",{id:"mutations"},"Mutations"),(0,i.kt)("p",null,"Mutations are supported in GraphQL engine with the following\nrestrictions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fetching relationship data as part of ",(0,i.kt)("inlineCode",{parentName:"li"},"returning")," is not yet\nsupported")),(0,i.kt)("h2",{id:"event-triggers"},"Event triggers"),(0,i.kt)("p",null,"Citus does not yet support creating triggers (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/citusdata/citus/issues/4425"},"See issue"),") on reference\ntables. Hence this is currently not supported."))}g.isMDXComponent=!0}}]);