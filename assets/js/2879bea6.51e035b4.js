"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7790],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||s;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3810:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),s=(n(67294),n(3905)),o=["components"],i={description:"Use Postgres constraints with Hasura",keywords:["hasura","docs","postgres","constraints"],sidebar_position:2,sidebar_label:"Constraints"},l="Postgres constraints",c={unversionedId:"graphql/core/guides/postgres/constraints",id:"graphql/core/guides/postgres/constraints",title:"Postgres constraints",description:"Use Postgres constraints with Hasura",source:"@site/docs/graphql/core/guides/postgres/constraints.mdx",sourceDirName:"graphql/core/guides/postgres",slug:"/graphql/core/guides/postgres/constraints",permalink:"/docs/latest/graphql/core/guides/postgres/constraints",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/guides/postgres/constraints.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Use Postgres constraints with Hasura",keywords:["hasura","docs","postgres","constraints"],sidebar_position:2,sidebar_label:"Constraints"},sidebar:"docsSidebar",previous:{title:"Postgres basics",permalink:"/docs/latest/graphql/core/guides/postgres/index"},next:{title:"Views",permalink:"/docs/latest/graphql/core/guides/postgres/views"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Postgres constraints",id:"postgres-constraints-1",level:2},{value:"Primary key constraints",id:"primary-key-constraints",level:3},{value:"Foreign key constraints",id:"foreign-key-constraints",level:3},{value:"Not-null constraints",id:"not-null-constraints",level:3},{value:"Unique constraints",id:"unique-constraints",level:3},{value:"Check constraints",id:"check-constraints",level:3},{value:"Postgres constraints &amp; Hasura",id:"postgres-constraints--hasura",level:2}],d={toc:p};function g(t){var e=t.components,n=(0,a.Z)(t,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"postgres-constraints"},"Postgres constraints"),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/ddl-constraints.html"},"Postgres constraints"),"\nare used to define rules for columns in a database table. They ensure\nthat no invalid data is entered into the database."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"For more detailed information on Postgres constraints, please refer to\nthe ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/ddl-constraints.html"},"Postgres documentation"),"."))),(0,s.kt)("h2",{id:"postgres-constraints-1"},"Postgres constraints"),(0,s.kt)("p",null,"There are different types of constraints that can be used with Postgres."),(0,s.kt)("h3",{id:"primary-key-constraints"},"Primary key constraints"),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," is used to identify each row of a table uniquely."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Identify the author's id as the primary key of the authors table:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{2}","{2}":!0},"CREATE TABLE authors(\n  id INT PRIMARY KEY,\n  name           TEXT    NOT NULL\n);\n")),(0,s.kt)("h3",{id:"foreign-key-constraints"},"Foreign key constraints"),(0,s.kt)("p",null,"A foreign key constraint specifies that the values in a column must\nmatch the values appearing in a row of another table. Foreign key\nconstraints are used to create relationships between tables."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Define the author_id in the articles table as a foreign key to the id\ncolumn in the authors table:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{11}","{11}":!0},"CREATE TABLE authors(\n  id SERIAL PRIMARY KEY,\n  name           TEXT    NOT NULL,\n  email          TEXT    UNIQUE\n);\n\nCREATE TABLE articles(\n  id SERIAL PRIMARY KEY,\n  title          TEXT    NOT NULL,\n  author_id INTEGER,\n  FOREIGN KEY (author_id) REFERENCES authors (id)\n);\n")),(0,s.kt)("h3",{id:"not-null-constraints"},"Not-null constraints"),(0,s.kt)("p",null,"A not-null constraint allows you to specify that a column's value cannot\nbe ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Validate that an author's name cannot be null:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{2,3}","{2,3}":!0},"CREATE TABLE authors(\n  id SERIAL PRIMARY KEY,\n  name           TEXT    NOT NULL\n);\n")),(0,s.kt)("h3",{id:"unique-constraints"},"Unique constraints"),(0,s.kt)("p",null,"Unique constraints prevent database entries with a duplicate value of\nthe respective column."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Validate that an author's email is unique:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{4}","{4}":!0},"CREATE TABLE authors(\n  id SERIAL PRIMARY KEY,\n  name           TEXT    NOT NULL,\n  email          TEXT    UNIQUE\n);\n")),(0,s.kt)("h3",{id:"check-constraints"},"Check constraints"),(0,s.kt)("p",null,"Check constraints allow you to specify a ",(0,s.kt)("inlineCode",{parentName:"p"},"Boolean")," expression for one or\nseveral columns. This Boolean expression must be satisfied (equal to\n",(0,s.kt)("inlineCode",{parentName:"p"},"true"),") by the column value for the object to be inserted."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Validate that an author's rating is between 1 and 10:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{4}","{4}":!0},"CREATE TABLE authors(\n  id SERIAL PRIMARY KEY,\n  name           TEXT    NOT NULL,\n  rating         INT     NOT NULL CHECK(rating > 0 AND rating <= 10)\n);\n")),(0,s.kt)("h2",{id:"postgres-constraints--hasura"},"Postgres constraints & Hasura"),(0,s.kt)("p",null,"Most Postgres constraints (primary key, foreign key, not-null and unique\nconstraints) can be added to Hasura natively when\n",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/databases/postgres/schema/tables#pg-create-tables"},"creating tables"),"."),(0,s.kt)("p",null,"Postgres check constraints can be used as a form of data validation in\nHasura and can be added\n",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/databases/postgres/schema/data-validations#pg-data-validations-check-constraints"},"as described here"),"."))}g.isMDXComponent=!0}}]);