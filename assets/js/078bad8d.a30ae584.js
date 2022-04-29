"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1224],{3905:function(e,a,r){r.d(a,{Zo:function(){return c},kt:function(){return m}});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),u=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},c=function(e){var a=u(e.components);return t.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(r),m=n,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return r?t.createElement(d,o(o({ref:a},c),{},{components:r})):t.createElement(d,o({ref:a},c))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},587:function(e,a,r){r.r(a),r.d(a,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var t=r(83117),n=r(80102),i=(r(67294),r(3905)),o=["components"],s={sidebar_label:"hasura migrate",sidebar_position:22,description:"Manage migrations on the database using the Hasura CLI",keywords:["hasura","docs","CLI","hasura migrate"]},l="Hasura CLI: hasura migrate",u={unversionedId:"graphql/core/hasura-cli/hasura_migrate",id:"graphql/core/hasura-cli/hasura_migrate",title:"Hasura CLI: hasura migrate",description:"Manage migrations on the database using the Hasura CLI",source:"@site/docs/graphql/core/hasura-cli/hasura_migrate.mdx",sourceDirName:"graphql/core/hasura-cli",slug:"/graphql/core/hasura-cli/hasura_migrate",permalink:"/docs/latest/graphql/core/hasura-cli/hasura_migrate",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/hasura-cli/hasura_migrate.mdx",tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_label:"hasura migrate",sidebar_position:22,description:"Manage migrations on the database using the Hasura CLI",keywords:["hasura","docs","CLI","hasura migrate"]},sidebar:"docsSidebar",previous:{title:"hasura metadata reload",permalink:"/docs/latest/graphql/core/hasura-cli/hasura_metadata_reload"},next:{title:"hasura migrate apply",permalink:"/docs/latest/graphql/core/hasura-cli/hasura_migrate_apply"}},c={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],h={toc:p};function m(e){var a=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},h,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hasura-cli-hasura-migrate"},"Hasura CLI: hasura migrate"),(0,i.kt)("p",null,"Manage migrations on the database."),(0,i.kt)("h2",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Manage migrations on the database."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    --admin-secret string            admin secret for Hasura GraphQL engine (env "HASURA_GRAPHQL_ADMIN_SECRET")\n    --certificate-authority string   path to a cert file for the certificate authority (env "HASURA_GRAPHQL_CERTIFICATE_AUTHORITY")\n    --database-name string           database on which operation should be applied\n    --disable-interactive            disables interactive prompts (default: false) (env "HASURA_GRAPHQL_DISABLE_INTERACTIVE")\n    --endpoint string                http(s) endpoint for Hasura GraphQL engine (env "HASURA_GRAPHQL_ENDPOINT")\n-h, --help                           help for migrate\n    --insecure-skip-tls-verify       skip TLS verification and disable cert checking (default: false) (env "HASURA_GRAPHQL_INSECURE_SKIP_TLS_VERIFY")\n')),(0,i.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'--envfile string      .env filename to load ENV vars from (default ".env")\n--log-level string    log level (DEBUG, INFO, WARN, ERROR, FATAL) (default "INFO")\n--no-color            do not colorize output (default: false)\n--project string      directory where commands are executed (default: current dir)\n--skip-update-check   skip automatic update check on command execution\n')),(0,i.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/hasura-cli/hasura"},"hasura")," - Hasura GraphQL engine command line tool"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/hasura-cli/hasura_migrate_apply"},"hasura migrate apply")," - Apply migrations on the database"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/hasura-cli/hasura_migrate_create"},"hasura migrate create")," - Create files required for a migration"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/hasura-cli/hasura_migrate_delete"},"hasura migrate delete")," - (PREVIEW) clear migrations from local project and server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/hasura-cli/hasura_migrate_squash"},"hasura migrate squash")," - (PREVIEW) Squash multiple migrations into a single one"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/hasura-cli/hasura_migrate_status"},"hasura migrate status")," - Display current status of migrations on a database")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Auto generated by spf13/cobra")))}m.isMDXComponent=!0}}]);