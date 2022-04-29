"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9141],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return u}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return t?n.createElement(g,o(o({ref:a},d),{},{components:t})):n.createElement(g,o({ref:a},d))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},99760:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=t(83117),r=t(80102),i=(t(67294),t(3905)),o=["components"],s={title:"Migrations & Metadata (CI/CD)",description:"Manage Hasura migrations and metadata in CI/CD",keywords:["hasura","docs","migration","metadata","ci","cd"],slug:"index"},l="Migrations & Metadata (CI/CD)",c={unversionedId:"graphql/core/migrations/index",id:"graphql/core/migrations/index",title:"Migrations & Metadata (CI/CD)",description:"Manage Hasura migrations and metadata in CI/CD",source:"@site/docs/graphql/core/migrations/index.mdx",sourceDirName:"graphql/core/migrations",slug:"/graphql/core/migrations/index",permalink:"/docs/latest/graphql/core/migrations/index",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/migrations/index.mdx",tags:[],version:"current",frontMatter:{title:"Migrations & Metadata (CI/CD)",description:"Manage Hasura migrations and metadata in CI/CD",keywords:["hasura","docs","migration","metadata","ci","cd"],slug:"index"},sidebar:"docsSidebar",previous:{title:"Multiple column + row permissions for the same role",permalink:"/docs/latest/graphql/core/auth/authorization/role-multiple-rules"},next:{title:"Setting up migrations",permalink:"/docs/latest/graphql/core/migrations/migrations-setup"}},d={},m=[{value:"Introduction",id:"introduction",level:2},{value:"How is Hasura state managed?",id:"how-is-hasura-state-managed",level:2},{value:"Database migration files",id:"database-migration-files",level:3},{value:"Hasura metadata files",id:"hasura-metadata-files",level:3},{value:"Setting up migrations",id:"setting-up-migrations",level:2},{value:"Advanced use cases",id:"advanced-use-cases",level:2},{value:"Reference documentation",id:"reference-documentation",level:2}],p={toc:m};function u(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrations--metadata-cicd"},"Migrations & Metadata (CI/CD)"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,'It is a typical requirement to export an existing Hasura "setup" so that\nyou can apply it on another instance to reproduce the same setup. For\nexample, to achieve a dev -> staging -> production environment promotion\nscenario.'),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This documentation is for Hasura migrations ",(0,i.kt)("inlineCode",{parentName:"p"},"config v3"),", supported from\n",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0-alpha.1"),". (See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/migrations/upgrade-v3"},"upgrade guide"),")."),(0,i.kt)("p",{parentName:"div"},"For ",(0,i.kt)("inlineCode",{parentName:"p"},"config v2"),", see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/migrations/config-v2/index"},"Migrations (config v2)"),"."))),(0,i.kt)("h2",{id:"how-is-hasura-state-managed"},"How is Hasura state managed?"),(0,i.kt)("p",null,"Hasura needs 2 pieces of information to recreate your GraphQL API, the\nunderlying PG database schema and the Hasura metadata which is used to\ndescribe the exposed GraphQL API."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/hasura-cli/index"},"Hasura CLI")," lets you manage these pieces of\ninformation as you build your project via:"),(0,i.kt)("h3",{id:"database-migration-files"},"Database migration files"),(0,i.kt)("p",null,"The state of your PG database is managed via incremental SQL migration\nfiles. These migration files can be applied one after the other to\nachieve the final DB schema."),(0,i.kt)("p",null,"DB migration files can be generated incrementally and can by applied in\nparts to reach particular checkpoints. They can be used to roll-back the\nDB schema as well."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can choose to manage database migrations using external tools like\nknex, TypeORM, Django/Rails migrations, etc. as well."))),(0,i.kt)("h3",{id:"hasura-metadata-files"},"Hasura metadata files"),(0,i.kt)("p",null,"The state of Hasura metadata is managed via snapshots of the metadata.\nThese snapshots can be applied as a whole to configure Hasura to a state\nrepresented in the snapshot."),(0,i.kt)("p",null,"Hasura metadata can be exported and imported as a whole."),(0,i.kt)("h2",{id:"setting-up-migrations"},"Setting up migrations"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/migrations/migrations-setup"},"Setting up Hasura Migrations"),"."),(0,i.kt)("h2",{id:"advanced-use-cases"},"Advanced use cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/advanced/auto-apply-migrations"},"Auto-apply migrations/metadata when the server starts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/advanced/writing-migrations-manually"},"Writing migrations manually")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/advanced/rolling-back-migrations"},"Rolling back applied migrations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/advanced/seed-data-migration"},"Creating a seed data migration"))),(0,i.kt)("h2",{id:"reference-documentation"},"Reference documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/reference/how-it-works"},"How Hasura Migrations work")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/reference/migration-file-format"},"Migration file format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/reference/metadata-format"},"Metadata format"))))}u.isMDXComponent=!0}}]);