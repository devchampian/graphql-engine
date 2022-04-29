"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5375],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return g}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),g=n,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||s;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},68702:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=r(83117),n=r(80102),s=(r(67294),r(3905)),i=["components"],o={description:"Use Postgres views with Hasura",keywords:["hasura","docs","postgres","views"],sidebar_position:3,sidebar_label:"Views"},l="Postgres views",p={unversionedId:"graphql/core/guides/postgres/views",id:"graphql/core/guides/postgres/views",title:"Postgres views",description:"Use Postgres views with Hasura",source:"@site/docs/graphql/core/guides/postgres/views.mdx",sourceDirName:"graphql/core/guides/postgres",slug:"/graphql/core/guides/postgres/views",permalink:"/docs/latest/graphql/core/guides/postgres/views",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/guides/postgres/views.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Use Postgres views with Hasura",keywords:["hasura","docs","postgres","views"],sidebar_position:3,sidebar_label:"Views"},sidebar:"docsSidebar",previous:{title:"Constraints",permalink:"/docs/latest/graphql/core/guides/postgres/constraints"},next:{title:"Functions",permalink:"/docs/latest/graphql/core/guides/postgres/functions"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Standard views",id:"standard-views",level:2},{value:"Examples",id:"examples",level:3},{value:"Materialized views",id:"materialized-views",level:2},{value:"Example",id:"example",level:3},{value:"Refreshing materialized views",id:"refreshing-materialized-views",level:3},{value:"Postgres views &amp; Hasura",id:"postgres-views--hasura",level:2}],c={toc:u};function g(e){var t=e.components,r=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"postgres-views"},"Postgres views"),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/sql-createview.html"},"Postgres view")," is a\nvirtual table in Postgres. It represents the result of a query to one or\nmore underlying tables in Postgres. Views are used to simplify complex\nqueries since these queries are defined once in the view, and can then\nbe directly queried via the same."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Please refer to the Postgres documentation for more details on ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/sql-createview.html"},"standard views")," and\n",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/rules-materializedviews.html"},"materialized views"),"."))),(0,s.kt)("h2",{id:"standard-views"},"Standard views"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/sql-createview.html"},"Standard views"),"\nrepresent the result of a query without actually storing data."),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"View with authors whose rating is larger than 6:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE VIEW popular_authors AS\n  SELECT name, rating\n  FROM authors\n  WHERE rating > 6;\n")),(0,s.kt)("p",null,"The created view can now be queried as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, rating from popular_authors;\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"View with authors ordered by their rating:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE VIEW authors_ordered_by_rating AS\n    SELECT name, rating\n    FROM authors\n    ORDER BY rating;\n")),(0,s.kt)("p",null,"The created view can now be queried as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, rating from authors_ordered_by_rating;\n")),(0,s.kt)("h2",{id:"materialized-views"},"Materialized views"),(0,s.kt)("p",null,"Compared to the standard view described above, ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/rules-materializedviews.html"},"materialized views"),"\n",(0,s.kt)("strong",{parentName:"p"},"do")," store data physically in the database. Materialized views are\nused if data from complex queries needs to be accessed quickly."),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("div",{id:"pg-materialized-view-example"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Materialized view with authors whose rating is larger than 6 and who\nare active, ordered by rating:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW popular_active_authors AS\n    SELECT name, rating\n    FROM authors\n    WHERE rating > 6 AND is_active = TRUE\n    ORDER BY rating;\n")),(0,s.kt)("p",null,"The created materialized view can now be queried as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, rating from popular_active_authors;\n")),(0,s.kt)("h3",{id:"refreshing-materialized-views"},"Refreshing materialized views"),(0,s.kt)("p",null,"Materialized views don't always have the most recent data. Since the\nresult of a query is stored in a materialized view like in a cache, you\nneed to make sure to refresh it periodically:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW popular_active_authors;\n")),(0,s.kt)("p",null,"Materialized views can be refreshed when their underlying source data\nchanges using ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/guides/postgres/triggers"},"Postgres triggers"),"."),(0,s.kt)("h2",{id:"postgres-views--hasura"},"Postgres views & Hasura"),(0,s.kt)("p",null,"After creating a view, you can expose it over your GraphQL API and query\nit like a normal table."),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/databases/postgres/schema/views"},"this page")," for more info on how to create and\nexpose views in Hasura."))}g.isMDXComponent=!0}}]);