"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7967],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var f=n.createContext({}),l=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(f.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,f=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),g=i,d=p["".concat(f,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},54118:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),o=["components"],c={sidebar_label:"Migration file format",sidebar_position:2,description:"Hasura Migration file format reference",keywords:["hasura","docs","migration","file format"]},f="Migration file format reference (config v2)",l={unversionedId:"graphql/core/migrations/config-v2/reference/migration-file-format",id:"graphql/core/migrations/config-v2/reference/migration-file-format",title:"Migration file format reference (config v2)",description:"Hasura Migration file format reference",source:"@site/docs/graphql/core/migrations/config-v2/reference/migration-file-format.mdx",sourceDirName:"graphql/core/migrations/config-v2/reference",slug:"/graphql/core/migrations/config-v2/reference/migration-file-format",permalink:"/docs/latest/graphql/core/migrations/config-v2/reference/migration-file-format",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/migrations/config-v2/reference/migration-file-format.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Migration file format",sidebar_position:2,description:"Hasura Migration file format reference",keywords:["hasura","docs","migration","file format"]},sidebar:"docsSidebar",previous:{title:"How Hasura migrations work (config v2)",permalink:"/docs/latest/graphql/core/migrations/config-v2/reference/how-it-works"},next:{title:"Metadata format",permalink:"/docs/latest/graphql/core/migrations/config-v2/reference/metadata-format"}},s={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Migration filename format",id:"migration-filename-format",level:2},{value:"Migration file format",id:"migration-file-format",level:2}],p={toc:m};function g(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migration-file-format-reference-config-v2"},"Migration file format reference (config v2)"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"config v2"),", the migrations files generated by the CLI are pure SQL\nfiles."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For ",(0,a.kt)("inlineCode",{parentName:"p"},"config v1"),", see ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/migrations/config-v1/reference/migration-file-format"},"Migration file format reference (config v1)")))),(0,a.kt)("h2",{id:"migration-filename-format"},"Migration filename format"),(0,a.kt)("p",null,"Each migration file has the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"<version>_<name>.{up|down}.sql\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," which is the Unix timestamp in nanoseconds when the file was\ncreated is the first part. Followed by a ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," which is either manually\nadded or auto-generated by the console. The next part indicates what\nstep this is. If it is ",(0,a.kt)("inlineCode",{parentName:"p"},"up"),", it means that this is the forward step,\ne.g. creating a table. The ",(0,a.kt)("inlineCode",{parentName:"p"},"down")," indicates that it is the corresponding\nrollback step."),(0,a.kt)("h2",{id:"migration-file-format"},"Migration file format"),(0,a.kt)("p",null,"A migration SQL file can contain SQL statements which are executed on\nthe apply step of the migration. There can be an ",(0,a.kt)("inlineCode",{parentName:"p"},"up")," migration and a\n",(0,a.kt)("inlineCode",{parentName:"p"},"down")," migration file."))}g.isMDXComponent=!0}}]);