"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3459],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,f=d["".concat(c,".").concat(h)]||d[h]||l[h]||o;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80666:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),s=["components"],i={sidebar_label:"hasura scripts update-project-v3",sidebar_position:35,description:"Update the Hasura project from config v2 to v3 using the Hasura CLI",keywords:["hasura","docs","CLI","hasura scripts update-project-v3"]},c="Hasura CLI: hasura scripts update-project-v3",p={unversionedId:"graphql/core/hasura-cli/hasura_scripts_update-project-v3",id:"graphql/core/hasura-cli/hasura_scripts_update-project-v3",title:"Hasura CLI: hasura scripts update-project-v3",description:"Update the Hasura project from config v2 to v3 using the Hasura CLI",source:"@site/docs/graphql/core/hasura-cli/hasura_scripts_update-project-v3.mdx",sourceDirName:"graphql/core/hasura-cli",slug:"/graphql/core/hasura-cli/hasura_scripts_update-project-v3",permalink:"/docs/latest/graphql/core/hasura-cli/hasura_scripts_update-project-v3",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/hasura-cli/hasura_scripts_update-project-v3.mdx",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_label:"hasura scripts update-project-v3",sidebar_position:35,description:"Update the Hasura project from config v2 to v3 using the Hasura CLI",keywords:["hasura","docs","CLI","hasura scripts update-project-v3"]},sidebar:"docsSidebar",previous:{title:"hasura scripts update-project-v2",permalink:"/docs/latest/graphql/core/hasura-cli/hasura_scripts_update-project-v2"},next:{title:"hasura seed",permalink:"/docs/latest/graphql/core/hasura-cli/hasura_seed"}},u={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],d={toc:l};function h(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hasura-cli-hasura-scripts-update-project-v3"},"Hasura CLI: hasura scripts update-project-v3"),(0,o.kt)("p",null,"Update the Hasura project from config v2 to v3."),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Convenience script used to upgrade your CLI project to use config v3.\nNote that this process is completely independent from your Hasura\nGraphql Engine server update process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hasura scripts update-project-v3 [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    --admin-secret string            admin secret for Hasura GraphQL engine (env "HASURA_GRAPHQL_ADMIN_SECRET")\n    --certificate-authority string   path to a cert file for the certificate authority (env "HASURA_GRAPHQL_CERTIFICATE_AUTHORITY")\n    --database-name string           database name for which the current migrations / seeds belong to\n    --endpoint string                http(s) endpoint for Hasura GraphQL engine (env "HASURA_GRAPHQL_ENDPOINT")\n    --force                          do not ask for confirmation\n-h, --help                           help for update-project-v3\n    --insecure-skip-tls-verify       skip TLS verification and disable cert checking (default: false) (env "HASURA_GRAPHQL_INSECURE_SKIP_TLS_VERIFY")\n    --move-state-only                do only a state migration from old hdb_catalog.* table to catalog state and skip others\n')),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--envfile string      .env filename to load ENV vars from (default ".env")\n--log-level string    log level (DEBUG, INFO, WARN, ERROR, FATAL) (default "INFO")\n--no-color            do not colorize output (default: false)\n--project string      directory where commands are executed (default: current dir)\n--skip-update-check   skip automatic update check on command execution\n')),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/hasura-cli/hasura_scripts"},"hasura scripts")," - Execute helper scripts to manage Hasura projects")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Auto generated by spf13/cobra")))}h.isMDXComponent=!0}}]);