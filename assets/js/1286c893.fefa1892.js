"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2958],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return g}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=r.createContext({}),s=function(e){var a=r.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(m.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=n,d=u["".concat(m,".").concat(g)]||u[g]||p[g]||i;return t?r.createElement(d,o(o({ref:a},c),{},{components:t})):r.createElement(d,o({ref:a},c))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27714:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(83117),n=t(80102),i=(t(67294),t(3905)),o=["components"],l={sidebar_label:"Writing migrations manually",sidebar_position:2,description:"Write manual migrations for Hasura GraphQL engine",keywords:["hasura","docs","migration","manual"]},m="Writing migrations manually",s={unversionedId:"graphql/core/migrations/advanced/writing-migrations-manually",id:"graphql/core/migrations/advanced/writing-migrations-manually",title:"Writing migrations manually",description:"Write manual migrations for Hasura GraphQL engine",source:"@site/docs/graphql/core/migrations/advanced/writing-migrations-manually.mdx",sourceDirName:"graphql/core/migrations/advanced",slug:"/graphql/core/migrations/advanced/writing-migrations-manually",permalink:"/graphql-engine/latest/graphql/core/migrations/advanced/writing-migrations-manually",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/migrations/advanced/writing-migrations-manually.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Writing migrations manually",sidebar_position:2,description:"Write manual migrations for Hasura GraphQL engine",keywords:["hasura","docs","migration","manual"]},sidebar:"docsSidebar",previous:{title:"Auto-apply migrations/metadata when the server starts",permalink:"/graphql-engine/latest/graphql/core/migrations/advanced/auto-apply-migrations"},next:{title:"Rolling back applied migrations",permalink:"/graphql-engine/latest/graphql/core/migrations/advanced/rolling-back-migrations"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Create migration manually",id:"create-migration-manually",level:2}],u={toc:p};function g(e){var a=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-migrations-manually"},"Writing migrations manually"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"While the Hasura console can auto generate migrations for every action,\nsometimes you might want to write the migrations yourself, by hand.\nUsing the Hasura CLI, you can bootstrap these migration files and write\nthe SQL for the Postgres schema."),(0,i.kt)("h2",{id:"create-migration-manually"},"Create migration manually"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set up the migration files:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"hasura migrate create <name-of-migration> --database-name <database-name>\n")),(0,i.kt)("p",{parentName:"li"},"This command will create up and down migration SQL files in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"migrations")," directory.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the file and add your migration actions. For the file format\nand instructions on what actions can be added, refer to\n",(0,i.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/migrations/config-v2/reference/migration-file-format"},"migration file format"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The corresponding Hasura metadata changes, if any, can be made\ndirectly in the appropriate metadata file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/metadata"),"\ndirectory, refer to ",(0,i.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/migrations/config-v2/reference/metadata-format"},"metadata format"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Apply the metadata and migrations:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"hasura metadata apply\nhasura migrate apply --database-name <database-name>\nhasura metadata reload\n")))))}g.isMDXComponent=!0}}]);