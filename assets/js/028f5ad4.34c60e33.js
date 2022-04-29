"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7454],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return h}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?t.createElement(f,s(s({ref:n},u),{},{components:r})):t.createElement(f,s({ref:n},u))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92669:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var t=r(83117),a=r(80102),o=(r(67294),r(3905)),s=["components"],i={sidebar_label:"hasura console",sidebar_position:9,description:"Open the console to manage the database and try out APIs using the Hasura CLI",keywords:["hasura","docs","CLI","hasura console"]},l="Hasura CLI: hasura console",c={unversionedId:"graphql/core/hasura-cli/hasura_console",id:"graphql/core/hasura-cli/hasura_console",title:"Hasura CLI: hasura console",description:"Open the console to manage the database and try out APIs using the Hasura CLI",source:"@site/docs/graphql/core/hasura-cli/hasura_console.mdx",sourceDirName:"graphql/core/hasura-cli",slug:"/graphql/core/hasura-cli/hasura_console",permalink:"/docs/latest/graphql/core/hasura-cli/hasura_console",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/hasura-cli/hasura_console.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"hasura console",sidebar_position:9,description:"Open the console to manage the database and try out APIs using the Hasura CLI",keywords:["hasura","docs","CLI","hasura console"]},sidebar:"docsSidebar",previous:{title:"hasura completion",permalink:"/docs/latest/graphql/core/hasura-cli/hasura_completion"},next:{title:"hasura deploy",permalink:"/docs/latest/graphql/core/hasura-cli/hasura_deploy"}},u={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],d={toc:p};function h(e){var n=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hasura-cli-hasura-console"},"Hasura CLI: hasura console"),(0,o.kt)("p",null,"Open the console to manage the database and try out APIs."),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Run a web server to serve the Hasura console for the GraphQL engine to\nmanage the database and build queries."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hasura console [flags]\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Start console:\nhasura console\n\n# Start console on a different address and ports:\nhasura console --address 0.0.0.0 --console-port 8080 --api-port 8081\n\n# Start console without opening the browser automatically\nhasura console --no-browser\n\n# Use with admin secret:\nhasura console --admin-secret "<admin-secret>"\n\n# Connect to an instance specified by the flag, overrides the one mentioned in config.yaml:\nhasura console --endpoint "<endpoint>"\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    --address string                 address to serve console and migration API from (default "localhost")\n    --admin-secret string            admin secret for Hasura GraphQL engine (env "HASURA_GRAPHQL_ADMIN_SECRET")\n    --api-port string                port for serving migrate api (default "9693")\n    --browser string                 open console in a specific browser\n    --certificate-authority string   path to a cert file for the certificate authority (env "HASURA_GRAPHQL_CERTIFICATE_AUTHORITY")\n    --console-port string            port for serving console (default "9695")\n    --endpoint string                http(s) endpoint for Hasura GraphQL engine (env "HASURA_GRAPHQL_ENDPOINT")\n-h, --help                           help for console\n    --insecure-skip-tls-verify       skip TLS verification and disable cert checking (default: false) (env "HASURA_GRAPHQL_INSECURE_SKIP_TLS_VERIFY")\n    --no-browser                     do not automatically open console in browser\n    --static-dir string              directory where static assets mentioned in the console html template can be served from\n    --use-server-assets              when rendering console, use assets provided by HGE server\n')),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--envfile string      .env filename to load ENV vars from (default ".env")\n--log-level string    log level (DEBUG, INFO, WARN, ERROR, FATAL) (default "INFO")\n--no-color            do not colorize output (default: false)\n--project string      directory where commands are executed (default: current dir)\n--skip-update-check   skip automatic update check on command execution\n')),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/hasura-cli/hasura"},"hasura")," - Hasura GraphQL engine command line tool")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Auto generated by spf13/cobra")))}h.isMDXComponent=!0}}]);