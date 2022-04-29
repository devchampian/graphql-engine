"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7359],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,f=d["".concat(o,".").concat(h)]||d[h]||c[h]||l;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70197:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),s=["components"],i={sidebar_label:"hasura plugins list",sidebar_position:30,description:"List all available plugins from index, versions and installation status using the Hasura CLI",keywords:["hasura","docs","CLI","hasura plugins list"]},o="Hasura CLI: hasura plugins list",u={unversionedId:"graphql/core/hasura-cli/hasura_plugins_list",id:"graphql/core/hasura-cli/hasura_plugins_list",title:"Hasura CLI: hasura plugins list",description:"List all available plugins from index, versions and installation status using the Hasura CLI",source:"@site/docs/graphql/core/hasura-cli/hasura_plugins_list.mdx",sourceDirName:"graphql/core/hasura-cli",slug:"/graphql/core/hasura-cli/hasura_plugins_list",permalink:"/docs/latest/graphql/core/hasura-cli/hasura_plugins_list",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/hasura-cli/hasura_plugins_list.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_label:"hasura plugins list",sidebar_position:30,description:"List all available plugins from index, versions and installation status using the Hasura CLI",keywords:["hasura","docs","CLI","hasura plugins list"]},sidebar:"docsSidebar",previous:{title:"hasura plugins install",permalink:"/docs/latest/graphql/core/hasura-cli/hasura_plugins_install"},next:{title:"hasura plugins uninstall",permalink:"/docs/latest/graphql/core/hasura-cli/hasura_plugins_uninstall"}},p={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hasura-cli-hasura-plugins-list"},"Hasura CLI: hasura plugins list"),(0,l.kt)("p",null,"List all available plugins from index, versions and installation status."),(0,l.kt)("h2",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"List all available plugins from index, versions and installation status."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hasura plugins list [flags]\n")),(0,l.kt)("p",null,"Alias: ls"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# List all plugins\nhasura plugins list\n\n# The command also updates the plugin index that is cached locally\n# To avoid updating the index, use the following flag:\nhasura plugins list --dont-update-index\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    --dont-update-index   don't update the plugin index local cache, only show the list\n-h, --help                help for list\n")),(0,l.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'--envfile string      .env filename to load ENV vars from (default ".env")\n--log-level string    log level (DEBUG, INFO, WARN, ERROR, FATAL) (default "INFO")\n--no-color            do not colorize output (default: false)\n--project string      directory where commands are executed (default: current dir)\n--skip-update-check   skip automatic update check on command execution\n')),(0,l.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/hasura-cli/hasura_plugins"},"hasura plugins")," - Manage plugins for the CLI")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Auto generated by spf13/cobra")))}h.isMDXComponent=!0}}]);