"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1114],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return g}});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),g=i,u=p["".concat(l,".").concat(g)]||p[g]||m[g]||r;return t?n.createElement(u,o(o({ref:a},d),{},{components:t})):n.createElement(u,o({ref:a},d))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},14712:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=t(83117),i=t(80102),r=(t(67294),t(3905)),o=["components"],s={sidebar_label:"Config v2",description:"Manage Hasura migrations and metadata",keywords:["hasura","docs","migration","metadata"],slug:"index"},l="Migrations & Metadata (config v2)",c={unversionedId:"graphql/core/migrations/config-v2/index",id:"graphql/core/migrations/config-v2/index",title:"Migrations & Metadata (config v2)",description:"Manage Hasura migrations and metadata",source:"@site/docs/graphql/core/migrations/config-v2/index.mdx",sourceDirName:"graphql/core/migrations/config-v2",slug:"/graphql/core/migrations/config-v2/index",permalink:"/docs/latest/graphql/core/migrations/config-v2/index",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/migrations/config-v2/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Config v2",description:"Manage Hasura migrations and metadata",keywords:["hasura","docs","migration","metadata"],slug:"index"},sidebar:"docsSidebar",previous:{title:"Upgrading to config v3",permalink:"/docs/latest/graphql/core/migrations/upgrade-v3"},next:{title:"Setting up migrations",permalink:"/docs/latest/graphql/core/migrations/config-v2/migrations-setup"}},d={},m=[{value:"Introduction",id:"introduction",level:2},{value:"How is Hasura state managed?",id:"how-is-hasura-state-managed",level:2},{value:"Database migration files",id:"database-migration-files",level:3},{value:"Hasura metadata files",id:"hasura-metadata-files",level:3},{value:"Setting up migrations",id:"setting-up-migrations",level:2},{value:"Advanced use cases",id:"advanced-use-cases",level:2},{value:"Reference documentation",id:"reference-documentation",level:2}],p={toc:m};function g(e){var a=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrations--metadata-config-v2"},"Migrations & Metadata (config v2)"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'It is a typical requirement to export an existing Hasura "setup" so that\nyou can apply it on another instance to reproduce the same setup. For\nexample, to achieve a dev -> staging -> production environment promotion\nscenario.'),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This documentation is for Hasura migrations ",(0,r.kt)("inlineCode",{parentName:"p"},"config v2"),".\nFor ",(0,r.kt)("inlineCode",{parentName:"p"},"config v3"),", see ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/migrations/index"},"Migrations & Metadata (CI/CD)"),"."))),(0,r.kt)("h2",{id:"how-is-hasura-state-managed"},"How is Hasura state managed?"),(0,r.kt)("p",null,"Hasura needs 2 pieces of information to recreate your GraphQL API, the\nunderlying PG database schema and the Hasura metadata which is used to\ndescribe the exposed GraphQL API."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/hasura-cli/index"},"Hasura CLI")," lets you manage these pieces of\ninformation as you build your project via:"),(0,r.kt)("h3",{id:"database-migration-files"},"Database migration files"),(0,r.kt)("p",null,"The state of your PG database is managed via incremental SQL migration\nfiles. These migration files can be applied one after the other to\nachieve the final DB schema."),(0,r.kt)("p",null,"DB migration files can be generated incrementally and can by applied in\nparts to reach particular checkpoints. They can be used to roll-back the\nDB schema as well."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can choose to manage database migrations using external tools like\nknex, TypeORM, Django/Rails migrations, etc. as well."))),(0,r.kt)("h3",{id:"hasura-metadata-files"},"Hasura metadata files"),(0,r.kt)("p",null,"The state of Hasura metadata is managed via snapshots of the metadata.\nThese snapshots can be applied as a whole to configure Hasura to a state\nrepresented in the snapshot."),(0,r.kt)("p",null,"Hasura metadata can be exported and imported as a whole."),(0,r.kt)("h2",{id:"setting-up-migrations"},"Setting up migrations"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/migrations/config-v2/migrations-setup"},"Setting up Hasura migrations (config v2)"),"."),(0,r.kt)("h2",{id:"advanced-use-cases"},"Advanced use cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/config-v2/advanced/auto-apply-migrations"},"Auto-apply migrations/metadata when the server starts (config v2)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/config-v2/advanced/writing-migrations-manually"},"Writing migrations manually (config v2)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/config-v2/advanced/rolling-back-migrations"},"Rolling back applied migrations (config v2)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/config-v2/advanced/seed-data-migration"},"Creating a seed data migration (config v2)"))),(0,r.kt)("h2",{id:"reference-documentation"},"Reference documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/config-v2/reference/how-it-works"},"How Hasura migrations work (config v2)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/config-v2/reference/migration-file-format"},"Migration file format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/migrations/config-v2/reference/metadata-format"},"Metadata format"))))}g.isMDXComponent=!0}}]);