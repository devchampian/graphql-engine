"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4936],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36247:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),p=["components"],o={sidebar_label:"PG Dump API",sidebar_position:9,description:"Hasura PG dump API reference",keywords:["hasura","docs","PG dump API","API reference"]},l="PG Dump API Reference",s={unversionedId:"graphql/core/api-reference/pgdump",id:"graphql/core/api-reference/pgdump",title:"PG Dump API Reference",description:"Hasura PG dump API reference",source:"@site/docs/graphql/core/api-reference/pgdump.mdx",sourceDirName:"graphql/core/api-reference",slug:"/graphql/core/api-reference/pgdump",permalink:"/docs/latest/graphql/core/api-reference/pgdump",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/api-reference/pgdump.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"PG Dump API",sidebar_position:9,description:"Hasura PG dump API reference",keywords:["hasura","docs","PG dump API","API reference"]},sidebar:"docsSidebar",previous:{title:"Health check API",permalink:"/docs/latest/graphql/core/api-reference/health"},next:{title:"Config API",permalink:"/docs/latest/graphql/core/api-reference/config"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Endpoint",id:"endpoint",level:2},{value:"API Spec",id:"api-spec",level:2},{value:"Request",id:"request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Disabling PG Dump API",id:"disabling-pg-dump-api",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pg-dump-api-reference"},"PG Dump API Reference"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The PG Dump API is an admin-only endpoint that can be used to execute\n",(0,i.kt)("inlineCode",{parentName:"p"},"pg_dump")," on the Postgres instance that Hasura is configured with."),(0,i.kt)("p",null,"The primary motive of this API is to provide convenience methods to\ninitialise migrations from an existing Hasura instance. But the\nfunctionality can be later expanded to do other things such as taking a\ndata dump etc."),(0,i.kt)("h2",{id:"endpoint"},"Endpoint"),(0,i.kt)("p",null,"All requests are ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," requests to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1alpha1/pg_dump")," endpoint."),(0,i.kt)("h2",{id:"api-spec"},"API Spec"),(0,i.kt)("h3",{id:"request"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1alpha1/pg_dump HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n  "opts": ["-O", "-x", "--schema-only", "--schema", "public"],\n  "clean_output": true,\n  "source": "<database-source-name>"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"opts"),": Arguments to be passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pg_dump")," tool. Represented as\narray of strings. The underlying command that is executed is:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pg_dump $DATABASE_URL $OPTS -f $FILENAME\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"clean_output"),": When this optional argument is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the\noutput SQL from the command is cleaned to remove the following:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"SQL front matter, like SET statements."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CREATE SCHEMA public"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COMMENT ON SCHEMA public is 'standard public schema'"),";"),(0,i.kt)("li",{parentName:"ul"},"Comments (",(0,i.kt)("inlineCode",{parentName:"li"},"--"),") and empty newlines."),(0,i.kt)("li",{parentName:"ul"},"Postgres triggers created by Hasura for event triggers."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"source"),": the name of the connected database on which to run\n",(0,i.kt)("inlineCode",{parentName:"p"},"pg_dump")," on. If skipped, it is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"default")))),(0,i.kt)("h3",{id:"sample-response"},"Sample response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"HTTP/1.1 200 OK\nContent-Type: application/sql\n\nSET check_function_bodies = false;\nCREATE TABLE public.author (\n    id integer NOT NULL,\n    name text NOT NULL\n);\nCREATE SEQUENCE public.author_id_seq\n    AS integer\n    START WITH 1\n    INCREMENT BY 1\n    NO MINVALUE\n    NO MAXVALUE\n    CACHE 1;\nALTER SEQUENCE public.author_id_seq OWNED BY public.author.id;\nALTER TABLE ONLY public.author ALTER COLUMN id SET DEFAULT nextval('public.author_id_seq'::regclass);\n")),(0,i.kt)("h2",{id:"disabling-pg-dump-api"},"Disabling PG Dump API"),(0,i.kt)("p",null,"Since this API can be used to dump all the Postgres data and schema, it\ncan be disabled, especially in production deployments."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled-apis")," flag or the ",(0,i.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_ENABLED_APIS")," env var can\nbe used to enable/disable this API. By default, The PG DumpAPI is\nenabled. To disable it, you need to explicitly state that this API is\nnot enabled. i.e. remove it from the list of enabled APIs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# enable only graphql & metadata apis, disable pgdump\n--enabled-apis="graphql,metadata"\nHASURA_GRAPHQL_ENABLED_APIS="graphql,metadata"\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/deployment/graphql-engine-flags/reference"},"GraphQL Engine server config reference")," for info on setting the above flag/env var."))}m.isMDXComponent=!0}}]);