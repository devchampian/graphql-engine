"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9814],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return g}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=o(a),g=r,k=u["".concat(m,".").concat(g)]||u[g]||s[g]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3698:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],p={sidebar_label:"Supported Postgres types",sidebar_position:5,description:"Supported Postgres types in the Hasura API",keywords:["hasura","docs","postgres types"]},m="Postgres: Supported types",o={unversionedId:"graphql/core/databases/postgres/postgresql-types",id:"graphql/core/databases/postgres/postgresql-types",title:"Postgres: Supported types",description:"Supported Postgres types in the Hasura API",source:"@site/docs/graphql/core/databases/postgres/postgresql-types.mdx",sourceDirName:"graphql/core/databases/postgres",slug:"/graphql/core/databases/postgres/postgresql-types",permalink:"/graphql-engine/latest/graphql/core/databases/postgres/postgresql-types",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/databases/postgres/postgresql-types.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Supported Postgres types",sidebar_position:5,description:"Supported Postgres types in the Hasura API",keywords:["hasura","docs","postgres types"]},sidebar:"docsSidebar",previous:{title:"Sample use cases",permalink:"/graphql-engine/latest/graphql/core/databases/postgres/subscriptions/streaming/use-cases"},next:{title:"MS SQL Server",permalink:"/graphql-engine/latest/graphql/core/databases/ms-sql-server/index"}},d={},s=[{value:"Introduction",id:"types-table",level:2},{value:"Int",id:"int",level:2},{value:"Float",id:"float",level:2},{value:"Numeric",id:"numeric",level:2},{value:"Bool",id:"bool",level:2},{value:"Char",id:"char",level:2},{value:"String",id:"string",level:2},{value:"Date",id:"date",level:2},{value:"Time with time zone",id:"timetz",level:2},{value:"Timestamp with time zone",id:"timestamptz",level:2},{value:"JSON",id:"json",level:2},{value:"JSONB",id:"jsonb",level:2},{value:"Geometry",id:"geometry",level:2},{value:"Geography",id:"geography",level:2},{value:"Implicitly Supported types",id:"implicit",level:2}],u={toc:s};function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"postgres-supported-types"},"Postgres: Supported types"),(0,l.kt)("h2",{id:"types-table"},"Introduction"),(0,l.kt)("p",null,"List of PostgreSQL types supported by the Hasura GraphQL engine with\ntheir equivalent Hasura types:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Aliases"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Hasura Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bigint"),(0,l.kt)("td",{parentName:"tr",align:null},"int8"),(0,l.kt)("td",{parentName:"tr",align:null},"signed eight-byte integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bigserial"),(0,l.kt)("td",{parentName:"tr",align:null},"serial8"),(0,l.kt)("td",{parentName:"tr",align:null},"autoincrementing eight-byte integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bit ","[ (n) ]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"fixed-length bit string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bit varying ","[ (n) ]"),(0,l.kt)("td",{parentName:"tr",align:null},"varbit ","[ (n) ]"),(0,l.kt)("td",{parentName:"tr",align:null},"variable-length bit string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"logical Boolean (true/false)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#bool"},"Bool"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"box"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"rectangular box on a plane"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bytea"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"binary data (\u201cbyte array\u201d)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"character ","[ (n) ]"),(0,l.kt)("td",{parentName:"tr",align:null},"char ","[ (n) ]"),(0,l.kt)("td",{parentName:"tr",align:null},"fixed-length character string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#char"},"Char"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"character varying ","[ (n) ]"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar ","[ (n) ]"),(0,l.kt)("td",{parentName:"tr",align:null},"variable-length character string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cidr"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IPv4 or IPv6 network address"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"circle"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"circle on a plane"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"calendar date (year, month, day)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#date"},"Date"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"double precision"),(0,l.kt)("td",{parentName:"tr",align:null},"float8"),(0,l.kt)("td",{parentName:"tr",align:null},"double precision floating-point number (8 bytes)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#float"},"Float"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IPv4 or IPv6 host address"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"int, int4"),(0,l.kt)("td",{parentName:"tr",align:null},"signed four-byte integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#int"},"Int"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval ","[ fields ][ (p) ]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"time span"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"textual JSON data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#json"},"JSON"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsonb"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"binary JSON data, decomposed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#jsonb"},"JSONB"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"line"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"infinite line on a plane"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lseg"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"line segment on a plane"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ltree"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"labels of data stored in a hierarchical tree-like structure"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"geometry"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PostGIS Geometry type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#geometry"},"Geometry"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"geography"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PostGIS Geography type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#geography"},"Geography"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"macaddr"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"MAC (Media Access Control) address"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"macaddr8"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"MAC (Media Access Control) address (EUI-64 format)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"money"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"currency amount"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numeric ","[ (p, s) ]"),(0,l.kt)("td",{parentName:"tr",align:null},"decimal ","[ (p, s) ]"),(0,l.kt)("td",{parentName:"tr",align:null},"exact numeric of selectable precision"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#numeric"},"Numeric"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"geometric path on a plane"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pg_lsn"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PostgreSQL Log Sequence Number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"point"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"geometric point on a plane"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"polygon"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"closed geometric path on a plane"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"real"),(0,l.kt)("td",{parentName:"tr",align:null},"float4"),(0,l.kt)("td",{parentName:"tr",align:null},"single precision floating-point number (4 bytes)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#float"},"Float"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"smallint"),(0,l.kt)("td",{parentName:"tr",align:null},"int2"),(0,l.kt)("td",{parentName:"tr",align:null},"signed two-byte integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#int"},"Int"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"smallserial"),(0,l.kt)("td",{parentName:"tr",align:null},"serial2"),(0,l.kt)("td",{parentName:"tr",align:null},"autoincrementing two-byte integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#int"},"Int"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serial"),(0,l.kt)("td",{parentName:"tr",align:null},"serial4"),(0,l.kt)("td",{parentName:"tr",align:null},"autoincrementing four-byte integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#int"},"Int"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"variable-length character string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time ","[ (p) ][ without time zone ]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"time of day (no time zone)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time ","[ (p) ]"," with time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"timetz"),(0,l.kt)("td",{parentName:"tr",align:null},"time of day, including time zone"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#timetz"},"Timetz"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp ","[ (p) ][ without time zone ]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"date and time (no time zone)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp ","[ (p) ]"," with time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"timestamptz"),(0,l.kt)("td",{parentName:"tr",align:null},"date and time, including time zone"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#timestamptz"},"Timestamptz"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tsquery"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"text search query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tsvector"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"text search document"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"txid_snapshot"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"user-level transaction ID snapshot"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"universally unique identifier"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xml"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"XML data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#implicit"},"Implicit"))))),(0,l.kt)("h2",{id:"int"},"Int"),(0,l.kt)("p",null,"GraphQL default scalar with name ",(0,l.kt)("strong",{parentName:"p"},"Int"),"."),(0,l.kt)("p",null,"E.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"objects: [\n  {\n    int_col: 27\n  }\n]\n")),(0,l.kt)("h2",{id:"float"},"Float"),(0,l.kt)("p",null,"GraphQL custom scalar type with name ",(0,l.kt)("strong",{parentName:"p"},"float8"),"."),(0,l.kt)("p",null,"E.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"objects: [\n  {\n    float_col: 0.8\n  }\n]\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"To avoid loss of data when retrieving IEEE 754 style data from the\ndatabase, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/deployment/graphql-engine-flags/reference"},"GraphQL Engine server config reference")," for instructions\non setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"extra_float_digits")," parameter, which has a bad default\nvalue in PostgreSQL 11 and older."))),(0,l.kt)("h2",{id:"numeric"},"Numeric"),(0,l.kt)("p",null,"GraphQL custom scalar type with name ",(0,l.kt)("strong",{parentName:"p"},"numeric"),"."),(0,l.kt)("p",null,"E.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"objects: [\n  {\n    numeric_col: 0.00000008\n  }\n]\n")),(0,l.kt)("h2",{id:"bool"},"Bool"),(0,l.kt)("p",null,"GraphQL default Scalar with name ",(0,l.kt)("strong",{parentName:"p"},"Boolean"),". The ",(0,l.kt)("strong",{parentName:"p"},"Boolean")," scalar\ntype represents ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"E.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"objects: [\n  {\n    is_published: true\n  }\n]\n")),(0,l.kt)("h2",{id:"char"},"Char"),(0,l.kt)("p",null,"GraphQL custom scalar with name ",(0,l.kt)("strong",{parentName:"p"},"character"),". It is a ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," with\nsingle character."),(0,l.kt)("p",null,"E.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'objects: [\n  {\n    char_column: "a"\n  }\n]\n')),(0,l.kt)("h2",{id:"string"},"String"),(0,l.kt)("p",null,"GraphQL default scalar with name ",(0,l.kt)("strong",{parentName:"p"},"String"),". The ",(0,l.kt)("strong",{parentName:"p"},"String")," scalar type\nrepresents textual data, represented as UTF-8 character sequences. The\nString type is most often used by GraphQL to represent free-form\nhuman-readable text."),(0,l.kt)("p",null,"E.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'objects: [\n  {\n    name: "Raven"\n  }\n]\n')),(0,l.kt)("h2",{id:"date"},"Date"),(0,l.kt)("p",null,"GraphQL custom scalar with name ",(0,l.kt)("strong",{parentName:"p"},"date"),". Date (no time of day). Allowed\nvalues are yyyy-mm-dd."),(0,l.kt)("p",null,"E.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'objects: [\n  {\n    date: "1996-03-15"\n  }\n]\n')),(0,l.kt)("h2",{id:"timetz"},"Time with time zone"),(0,l.kt)("p",null,"GraphQL custom scalar type with name ",(0,l.kt)("strong",{parentName:"p"},"timetz"),". Time of day only, with\ntime zone. Allowed values should be of ISO8601 format (e.g. 17:30:15Z,\n17:30:15+05:30, 17:30:15.234890+05:30)."),(0,l.kt)("p",null,"E.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'objects: [\n  {\n    time: "17:30:15+05:30"\n  }\n]\n')),(0,l.kt)("h2",{id:"timestamptz"},"Timestamp with time zone"),(0,l.kt)("p",null,"GraphQL custom scalar type with name ",(0,l.kt)("strong",{parentName:"p"},"timestamptz"),". Both date and\ntime, with time zone. Allowed values should be of ISO8601 format (e.g.\n2016-07-20T17:30:15Z, 2016-07-20T17:30:15+05:30,\n2016-07-20T17:30:15.234890+05:30)."),(0,l.kt)("p",null,"E.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'objects: [\n  {\n    timestamptz_col: "2016-07-20T17:30:15+05:30"\n  }\n]\n')),(0,l.kt)("h2",{id:"json"},"JSON"),(0,l.kt)("p",null,"GraphQL custom scalar type with name ",(0,l.kt)("strong",{parentName:"p"},"json"),". It is a stringified json\nvalue."),(0,l.kt)("p",null,"E.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'objects: [\n  {\n    json_col: "{ \\"name\\": \\"raven\\" }"\n  }\n]\n')),(0,l.kt)("h2",{id:"jsonb"},"JSONB"),(0,l.kt)("p",null,"GraphQL custom scalar type with name ",(0,l.kt)("strong",{parentName:"p"},"jsonb"),". Value should be given\nthrough a variable of type ",(0,l.kt)("strong",{parentName:"p"},"jsonb"),"."),(0,l.kt)("p",null,"E.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation insert_test($value : jsonb) {\n  insert_test(\n    objects: [\n      {\n        jsonb_col: $value\n      }\n    ]\n  ) {\n     affected_rows\n     returning{\n       jsonb_col\n     }\n  }\n}\n")),(0,l.kt)("p",null,"variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "value": {\n    "name": "raven"\n  }\n}\n')),(0,l.kt)("h2",{id:"geometry"},"Geometry"),(0,l.kt)("p",null,"GraphQL custom scalar type ",(0,l.kt)("inlineCode",{parentName:"p"},"geometry")," is generated for a ",(0,l.kt)("inlineCode",{parentName:"p"},"GEOMETRY"),"\ncolumn on a PostGIS enabled Postgres instance. Value should be given as\nGeoJSON."),(0,l.kt)("p",null,"E.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation insertGeometry($point: geometry!) {\n  insert_test(\n    objects: [{\n      geometry_col: $point\n    }]\n  ) {\n    affected_rows\n    returning {\n      geometry_col\n    }\n  }\n}\n")),(0,l.kt)("p",null,"variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "point": {\n    "type": "Point",\n    "coordinates": [0, 0]\n  }\n}\n')),(0,l.kt)("h2",{id:"geography"},"Geography"),(0,l.kt)("p",null,"GraphQL custom scalar type ",(0,l.kt)("inlineCode",{parentName:"p"},"geography")," is generated for a ",(0,l.kt)("inlineCode",{parentName:"p"},"GEOGRAPHY"),"\ncolumn on a PostGIS enabled Postgres instance. Value should be given as\nGeoJSON."),(0,l.kt)("p",null,"E.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation insertGeography($point: geography!) {\n  insert_test(\n    objects: [{\n      geography_col: $point\n    }]\n  ) {\n    affected_rows\n    returning {\n      geography_col\n    }\n  }\n}\n")),(0,l.kt)("p",null,"variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "point": {\n    "type": "Point",\n    "coordinates": [0, 0]\n  }\n}\n')),(0,l.kt)("h2",{id:"implicit"},"Implicitly Supported types"),(0,l.kt)("p",null,"All ",(0,l.kt)("inlineCode",{parentName:"p"},"Implicit")," types in the ",(0,l.kt)("a",{parentName:"p",href:"#types-table"},"above table")," are implicitly\nsupported by the GraphQL engine. You have to provide the value as a\n",(0,l.kt)("strong",{parentName:"p"},"String"),"."),(0,l.kt)("p",null,"E.g. For time without time zone type"),(0,l.kt)("p",null,"In ISO 8601 format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'objects: [\n  {\n    time_col: "04:05:06.789"\n  }\n]\n')),(0,l.kt)("p",null,"E.g. For macaddr type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'objects: [\n  {\n    macaddr_col: "08:00:2b:01:02:03"\n  }\n]\n')),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can learn more about PostgreSQL data types ",(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/static/datatype.html"},"here"),"."))))}g.isMDXComponent=!0}}]);