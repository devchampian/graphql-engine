"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4961],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(t),u=r,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93920:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(67294),r="tableOfContentsInline_ifKN",i=t(31498);function l(e){var n=e.toc,t=e.minHeadingLevel,l=e.maxHeadingLevel,o=e.filterTOC;return a.createElement("div",{className:r},a.createElement(i.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null,filterTOC:o}))}},31498:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(83117),r=t(80102),i=t(67294),l=t(89575),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?i.createElement("ul",{className:r?void 0:t},n.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(s,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}function m(e){var n=e.toc,t=e.className,m=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,p=void 0===c?"table-of-contents__link":c,d=e.linkActiveClassName,u=void 0===d?void 0:d,f=e.minHeadingLevel,g=e.maxHeadingLevel,h=(0,r.Z)(e,o),k=(0,l.LU)(),v=null!=f?f:k.tableOfContents.minHeadingLevel,N=null!=g?g:k.tableOfContents.maxHeadingLevel,y=(0,l.b9)({toc:n,minHeadingLevel:v,maxHeadingLevel:N});"function"==typeof h.filterTOC&&(y=h.filterTOC(y));var b=(0,i.useMemo)((function(){if(p&&u)return{linkClassName:p,linkActiveClassName:u,minHeadingLevel:v,maxHeadingLevel:N}}),[p,u,v,N]);return(0,l.Si)(b),i.createElement(s,(0,a.Z)({toc:y,className:m,linkClassName:p},h))}},18242:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),l=t(93920),o=["components"],s={sidebar_label:"Metadata format",sidebar_position:3,description:"Hasura Metadata file format reference",keywords:["hasura","docs","metadata","file format"]},m="Metadata format reference (config v2)",c={unversionedId:"graphql/core/migrations/config-v2/reference/metadata-format",id:"graphql/core/migrations/config-v2/reference/metadata-format",title:"Metadata format reference (config v2)",description:"Hasura Metadata file format reference",source:"@site/docs/graphql/core/migrations/config-v2/reference/metadata-format.mdx",sourceDirName:"graphql/core/migrations/config-v2/reference",slug:"/graphql/core/migrations/config-v2/reference/metadata-format",permalink:"/docs/latest/graphql/core/migrations/config-v2/reference/metadata-format",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/migrations/config-v2/reference/metadata-format.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Metadata format",sidebar_position:3,description:"Hasura Metadata file format reference",keywords:["hasura","docs","metadata","file format"]},sidebar:"docsSidebar",previous:{title:"Migration file format",permalink:"/docs/latest/graphql/core/migrations/config-v2/reference/migration-file-format"},next:{title:"Upgrading to config v2",permalink:"/docs/latest/graphql/core/migrations/config-v2/upgrade-v2"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Metadata directory format",id:"metadata-directory-format",level:2},{value:"actions.graphql",id:"actionsgraphql",level:3},{value:"actions.yaml",id:"actionsyaml",level:3},{value:"allow_list.yaml",id:"allow_listyaml",level:3},{value:"cron_triggers.yaml",id:"cron_triggersyaml",level:3},{value:"functions.yaml",id:"functionsyaml",level:3},{value:"query_collections.yaml",id:"query_collectionsyaml",level:3},{value:"remote_schemas.yaml",id:"remote_schemasyaml",level:3},{value:"tables.yaml",id:"tablesyaml",level:3},{value:"version.yaml",id:"versionyaml",level:3}],u={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metadata-format-reference-config-v2"},"Metadata format reference (config v2)"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"config v2"),", the metadata that is exported from the server by the\nCLI is a directory of multiple files."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For ",(0,i.kt)("inlineCode",{parentName:"p"},"config v1"),", see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/migrations/config-v1/reference/metadata-file-format"},"Metadata file format reference (config v1)"),"."))),(0,i.kt)("h2",{id:"metadata-directory-format"},"Metadata directory format"),(0,i.kt)("p",null,"The following files will be generated in the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata/")," directory of\nyour project:"),(0,i.kt)(l.Z,{toc:d,filterTOC:function(e){return e[1].children},mdxType:"TOCInline"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The output of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/metadata-api/manage-metadata#metadata-export-metadata"},"export_metadata")," metadata API is a JSON\nversion of the metadata files."))),(0,i.kt)("h3",{id:"actionsgraphql"},"actions.graphql"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"actions.graphql")," file contains all the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/actions/index"},"actions"),"\ndefinitions and ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/actions/types/index"},"custom type")," definitions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": A query action called ",(0,i.kt)("inlineCode",{parentName:"p"},"greet")," and two custom types called\n",(0,i.kt)("inlineCode",{parentName:"p"},"SampleInput")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SampleOutput"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  greet(arg1: SampleInput!): SampleOutput\n}\ninput SampleInput {\n  username: String!\n}\ntype SampleOutput {\n  greetings: String!\n}\n")),(0,i.kt)("h3",{id:"actionsyaml"},"actions.yaml"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"actions.yaml")," file contains metadata related to ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/actions/index"},"actions"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": An action called ",(0,i.kt)("inlineCode",{parentName:"p"},"greet")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"handler")," set to\n",(0,i.kt)("inlineCode",{parentName:"p"},"<base_url>/greet")," and two custom types called ",(0,i.kt)("inlineCode",{parentName:"p"},"SampleInput")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"SampleOutput"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'actions:\n  - name: greet\n    definition:\n      kind: ""\n      handler: <base_url>/greet\n      forward_client_headers: true\n      headers:\n        - value: application/json\n          name: Content-Type\ncustom_types:\n  enums: []\n  input_objects:\n    - name: SampleInput\n  objects:\n    - name: SampleOutput\n  scalars: []\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": Same example as above but with the base URL of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"handler")," passed as an environment variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'actions:\n  - name: greet\n    definition:\n      kind: ""\n      handler: "{{ACTION_BASE_URL}}/greet"\n      forward_client_headers: true\n      headers:\n        - value: application/json\n          name: Content-Type\ncustom_types:\n  enums: []\n  input_objects:\n    - name: SampleInput\n  objects:\n    - name: SampleOutput\n  scalars: []\n')),(0,i.kt)("h3",{id:"allow_listyaml"},"allow_list.yaml"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_list.yaml")," file contains the metadata related to ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/deployment/allow-list"},"allow lists"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": A query collection called ",(0,i.kt)("inlineCode",{parentName:"p"},"allowed-queries")," set as the\nallow-list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- collection: allowed-queries\n")),(0,i.kt)("h3",{id:"cron_triggersyaml"},"cron_triggers.yaml"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cron_triggers.yaml")," file contains metadata related to ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/scheduled-triggers/create-cron-trigger"},"cron triggers"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook")," can be an HTTP\nendpoint or an environment variable containing the HTTP endpoint."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": A cron trigger called ",(0,i.kt)("inlineCode",{parentName:"p"},"test-trigger"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: test-trigger\nwebhook: <webhook-url>\nschedule: 0 12 * * 1-5\ninclude_in_metadata: true\npayload: {}\nretry_conf:\n  num_retries: 1\n  timeout_seconds: 60\n  tolerance_seconds: 21600\n  retry_interval_seconds: 10\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The metadata about a cron trigger will not be stored if\n",(0,i.kt)("inlineCode",{parentName:"p"},"Include this trigger in Hasura Metadata")," is disabled in the advanced\noption of ",(0,i.kt)("inlineCode",{parentName:"p"},"events")," on the console or ",(0,i.kt)("inlineCode",{parentName:"p"},"include_in_metadata")," is passed as\n",(0,i.kt)("inlineCode",{parentName:"p"},"false")," via the API."))),(0,i.kt)("h3",{id:"functionsyaml"},"functions.yaml"),(0,i.kt)("p",null,"Contains the metadata related to ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/databases/postgres/schema/custom-functions"},"custom functions"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": A custom SQL function called ",(0,i.kt)("inlineCode",{parentName:"p"},"search_books"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- function:\n  schema: public\n  name: search_books\n")),(0,i.kt)("h3",{id:"query_collectionsyaml"},"query_collections.yaml"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"query_collections.yaml")," file contains metadata information about\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/metadata-api/query-collections"},"query collections"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": A query collection called ",(0,i.kt)("inlineCode",{parentName:"p"},"sample-collection")," which\ncontains two queries ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test2"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: sample-collection\n  definition:\n    queries:\n      - name: test\n        query: |-\n          query test {\n            books {\n              id\n              author_id\n              title\n            }\n          }\n      - name: test2\n        query: |-\n          query test2 {\n              authors{\n                  id\n                  author_name\n              }\n          }\n")),(0,i.kt)("h3",{id:"remote_schemasyaml"},"remote_schemas.yaml"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"remote_schemas.yaml")," file contains the metadata related to ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/remote-schemas/index"},"remote schemas"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": A remote schema called ",(0,i.kt)("inlineCode",{parentName:"p"},"my-remote-schema")," with URL\n",(0,i.kt)("inlineCode",{parentName:"p"},"<remote-schema-url>"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: my-remote-schema\n  definition:\n    url: <remote-schema-url>\n    timeout_seconds: 40\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": A remote schema called ",(0,i.kt)("inlineCode",{parentName:"p"},"my-remote-schema")," with URL passed\nas environment variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: my-remote-schema\n  definition:\n    url_from_env: REMOTE_SCHEMA\n    timeout_seconds: 40\n")),(0,i.kt)("h3",{id:"tablesyaml"},"tables.yaml"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tables.yaml")," file contains metadata related to ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/databases/postgres/schema/tables"},"tables"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": Two tables called ",(0,i.kt)("inlineCode",{parentName:"p"},"authors")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"books")," including\nrelationships and an event trigger defined on the ",(0,i.kt)("inlineCode",{parentName:"p"},"authors")," table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- table:\n    schema: public\n    name: authors\n  insert_permissions:\n    - role: user\n      permission:\n        check:\n          id:\n            _eq: X-Hasura-User-Id\n        columns:\n          - name\n        backend_only: false\n  select_permissions:\n    - role: user\n      permission:\n        columns:\n          - id\n          - name\n        filter:\n          id:\n            _eq: X-Hasura-User-Id\n  array_relationships:\n    - name: books\n      using:\n        foreign_key_constraint_on:\n          column: author_id\n          table:\n            schema: public\n            name: books\n  event_triggers:\n    - name: event_test\n      definition:\n        enable_manual: false\n        insert:\n          columns: "*"\n        delete:\n          columns: "*"\n        update:\n          columns:\n            - id\n            - author_name\n      retry_conf:\n        num_retries: 1\n        interval_sec: 10\n        timeout_sec: 60\n      webhook: <webhook_url>\n- table:\n    schema: public\n    name: books\n  insert_permissions:\n    - role: user\n      permission:\n        check:\n          id:\n            _eq: X-Hasura-User-Id\n        columns:\n          - author_id\n          - name\n        backend_only: false\n  select_permissions:\n    - role: user\n      permission:\n        columns:\n          - id\n          - name\n        filter:\n          id:\n            _eq: X-Hasura-User-Id\n  object_relationships:\n    - name: author\n      using:\n        foreign_key_constraint_on: author_id\n')),(0,i.kt)("h3",{id:"versionyaml"},"version.yaml"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"version.yaml")," file contains the metadata format version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 2\n")))}f.isMDXComponent=!0}}]);