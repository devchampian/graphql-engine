"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6953],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,f=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79710:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],l={description:"Hasura Cloud Query Tags",keywords:["hasura","docs","cloud","query-tags","monitoring"],sidebar_position:9},s="Query Tags",u={unversionedId:"graphql/cloud/query-tags",id:"graphql/cloud/query-tags",title:"Query Tags",description:"Hasura Cloud Query Tags",source:"@site/docs/graphql/cloud/query-tags.mdx",sourceDirName:"graphql/cloud",slug:"/graphql/cloud/query-tags",permalink:"/graphql-engine/latest/graphql/cloud/query-tags",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/cloud/query-tags.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Hasura Cloud Query Tags",keywords:["hasura","docs","cloud","query-tags","monitoring"],sidebar_position:9},sidebar:"cloudDocsSidebar",previous:{title:"Distributed tracing",permalink:"/graphql-engine/latest/graphql/cloud/tracing"},next:{title:"Preview apps",permalink:"/graphql-engine/latest/graphql/cloud/preview-apps"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Formats of Query Tags",id:"formats-of-query-tags",level:2},{value:"Standard",id:"standard",level:3},{value:"SQLCommenter",id:"sqlcommenter",level:3},{value:"Information in Query Tags",id:"information-in-query-tags",level:2},{value:"Query and Mutation",id:"query-and-mutation",level:3},{value:"Subscriptions",id:"subscriptions",level:3},{value:"Metadata Specification",id:"metadata-specification",level:2},{value:"Example Metadata Specification",id:"example-metadata-specification",level:2},{value:"Metadata API To Set Query Tags",id:"metadata-api-to-set-query-tags",level:2}],m={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"query-tags"},"Query Tags"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Query Tags are SQL comments which are made up of ",(0,o.kt)("inlineCode",{parentName:"p"},"(key=value)")," pairs that are appended to the SQL statements generated by Hasura for GraphQL operations. This enables the ability to get some application context in the database logs and also use native database monitoring tools (",(0,o.kt)("em",{parentName:"p"},"e.g. pganalyze"),") for better performance analysis."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("p",null,"When the following query is sent to Hasura"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetChild {\n  child {\n    name\n  }\n}\n")),(0,o.kt)("p",null,"Hasura attaches query tags (",(0,o.kt)("em",{parentName:"p"},"unless disabled"),") to the generated SQL statement it sends to the database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM child /* request_id=487c2ed5-08a4-429a-b0e0-4666a82e3cc6, field_name=child, operation_name=GetChild */\n")),(0,o.kt)("h2",{id:"formats-of-query-tags"},"Formats of Query Tags"),(0,o.kt)("p",null,"The format of the Query Tags describes how the ",(0,o.kt)("em",null,"(Key,Value)")," pairs are constructed. Currently we support two formats of Query Tags:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Standard (",(0,o.kt)("inlineCode",{parentName:"li"},"standard"),")"),(0,o.kt)("li",{parentName:"ol"},"SQLCommenter (",(0,o.kt)("inlineCode",{parentName:"li"},"sqlcommenter"),")")),(0,o.kt)("h3",{id:"standard"},"Standard"),(0,o.kt)("p",null,"This format makes a collection of ",(0,o.kt)("em",null,"key=value")," pairs and separates each pair by a comma ",(0,o.kt)("inlineCode",{parentName:"p"},",")," . ",(0,o.kt)("strong",{parentName:"p"},"This is the default format for Query Tags")),(0,o.kt)("p",null,"For eg:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM child /* request_id=487c2ed5-08a4-429a-b0e0-4666a82e3cc6, field_name=child, parameterized_query_hash=b2a71ce23928ca7f0021f9060e5d590e9f9bb00f, operation_name=GetChild */\n")),(0,o.kt)("h3",{id:"sqlcommenter"},"SQLCommenter"),(0,o.kt)("p",null,"The specification for this format is defined at ",(0,o.kt)("a",{parentName:"p",href:"https://google.github.io/sqlcommenter/spec/"},"https://google.github.io/sqlcommenter/spec/")),(0,o.kt)("p",null,"For eg:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM child /* field_name='child', operation_name='GetChild', parameterized_query_hash='b2a71ce23928ca7f0021f9060e5d590e9f9bb00f' ,  request_id='487c2ed5-08a4-429a-b0e0-4666a82e3cc6' */\n")),(0,o.kt)("h2",{id:"information-in-query-tags"},"Information in Query Tags"),(0,o.kt)("p",null,"The following information is present in query tags for the GraphQL operations."),(0,o.kt)("h3",{id:"query-and-mutation"},"Query and Mutation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Request ID (",(0,o.kt)("inlineCode",{parentName:"li"},"request_id"),")"),(0,o.kt)("li",{parentName:"ol"},"Operation Name (",(0,o.kt)("inlineCode",{parentName:"li"},"operation_name"),")"),(0,o.kt)("li",{parentName:"ol"},"(Root) field name (alias if provided) (",(0,o.kt)("inlineCode",{parentName:"li"},"field_name"),")"),(0,o.kt)("li",{parentName:"ol"},"Parameterized Query Hash (",(0,o.kt)("inlineCode",{parentName:"li"},"parameterized_query_hash"),")")),(0,o.kt)("h3",{id:"subscriptions"},"Subscriptions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"(Root) field name (alias if provided) (",(0,o.kt)("inlineCode",{parentName:"li"},"field_name"),")"),(0,o.kt)("li",{parentName:"ol"},"Parameterized Query Hash (",(0,o.kt)("inlineCode",{parentName:"li"},"parameterized_query_hash"),")")),(0,o.kt)("h2",{id:"metadata-specification"},"Metadata Specification"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"sources:\n  name: # Name of the source\n  configuration:\n  query_tags: # Optional Field\n    disabled: # Optional Field | Type: Bool | Values: true or false\n    format: # Optinal Field  | Values: standard or sqlcommenter\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note The default format for the Query Tags is ",(0,o.kt)("inlineCode",{parentName:"p"},"Standard")," and it is enabled by default for all sources."))),(0,o.kt)("p",null,"In the above metadata spec:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("em",null,"query_tags")," field is optional. If the ",(0,o.kt)("em",null,"query_tags")," field is not present for a source, then query tags is enabled for the source and the format used is ",(0,o.kt)("em",null,"standard"),"."),(0,o.kt)("li",{parentName:"ol"},"To disable query tags for any source, set the value of ",(0,o.kt)("em",null,"disabled")," field to ",(0,o.kt)("em",null,"true"),"."),(0,o.kt)("li",{parentName:"ol"},"To override the default format (",(0,o.kt)("em",null,"Standard"),") for query tags, use the ",(0,o.kt)("em",null,"format")," field.")),(0,o.kt)("h2",{id:"example-metadata-specification"},"Example Metadata Specification"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"sources:\n  - name: test_db\n    configuration:\n    query_tags:\n      disabled: true\n\n  - name: hasura_db_herokou\n      configuration:\n      query_tags:\n        format: sqlcommenter\n\n  - name: hasura_db_2\n      configuration:\n      query_tags:\n        format: standard\n        disabled: true\n")),(0,o.kt)("h2",{id:"metadata-api-to-set-query-tags"},"Metadata API To Set Query Tags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'type: "set_query_tags"\nargs:\n  source_name: # Name of the source | Required\n  disabled: # Optional Field | Type: Bool | Values: true or false\n  format: # Optional Field  | Values: standard or sqlcommenter\n')))}c.isMDXComponent=!0}}]);