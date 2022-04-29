"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2479],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,b=m["".concat(i,".").concat(u)]||m[u]||p[u]||s;return a?r.createElement(b,o(o({ref:t},d),{},{components:a})):r.createElement(b,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6757:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=a(83117),n=a(80102),s=(a(67294),a(3905)),o=["components"],l={sidebar_label:"Database modelling",sidebar_position:3,description:"Relationships modelling in Hasura",keywords:["hasura","docs","schema","database modelling"]},i="Database relationship modelling guides",c={unversionedId:"graphql/core/databases/ms-sql-server/schema/table-relationships/database-modelling",id:"graphql/core/databases/ms-sql-server/schema/table-relationships/database-modelling",title:"Database relationship modelling guides",description:"Relationships modelling in Hasura",source:"@site/docs/graphql/core/databases/ms-sql-server/schema/table-relationships/database-modelling.mdx",sourceDirName:"graphql/core/databases/ms-sql-server/schema/table-relationships",slug:"/graphql/core/databases/ms-sql-server/schema/table-relationships/database-modelling",permalink:"/docs/latest/graphql/core/databases/ms-sql-server/schema/table-relationships/database-modelling",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/databases/ms-sql-server/schema/table-relationships/database-modelling.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Database modelling",sidebar_position:3,description:"Relationships modelling in Hasura",keywords:["hasura","docs","schema","database modelling"]},sidebar:"docsSidebar",previous:{title:"Renaming relationships",permalink:"/docs/latest/graphql/core/databases/ms-sql-server/schema/table-relationships/rename"},next:{title:"Extend with views",permalink:"/docs/latest/graphql/core/databases/ms-sql-server/schema/views"}},d={},p=[],m={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"database-relationship-modelling-guides"},"Database relationship modelling guides"),(0,s.kt)("p",null,"The following guides will help you model the different types of table\nrelationships in the database:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/guides/data-modelling/one-to-one"},"Modelling one-to-one table relationships")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/guides/data-modelling/one-to-many"},"Modelling one-to-many table relationships")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/guides/data-modelling/many-to-many"},"Modelling many-to-many table relationships"))))}u.isMDXComponent=!0}}]);