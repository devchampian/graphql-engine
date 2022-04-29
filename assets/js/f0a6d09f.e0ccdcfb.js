"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9059],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(f,s(s({ref:a},c),{},{components:t})):n.createElement(f,s({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,a,t){t.d(a,{Z:function(){return r}});var n=t(67294);function r(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},9877:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(83117),r=t(67294),o=t(72389),s=t(89575),l=t(86010),i="tabItem_LplD";function u(e){var a,t,o,u=e.lazy,c=e.block,m=e.defaultValue,p=e.values,d=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:h.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),v=(0,s.lx)(b,(function(e,a){return e.value===a.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(a=null!=m?m:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,r.useState)(g),q=w[0],T=w[1],x=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=y[d];null!=C&&C!==q&&b.some((function(e){return e.value===C}))&&T(C)}var I=function(e){var a=e.currentTarget,t=x.indexOf(a),n=b[t].value;n!==q&&(_(a),T(n),null!=d&&N(d,n))},P=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var a=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:q===a?0:-1,"aria-selected":q===a,key:a,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":q===a})}),null!=t?t:a)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===q}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==q})}))))}function c(e){var a=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(a)},e))}},18098:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var n=t(83117),r=t(80102),o=(t(67294),t(3905)),s=t(9877),l=t(58215),i=["components"],u={sidebar_label:"Customise auto-generated fields",sidebar_position:5,description:"Use custom field names for MS SQL Server in Hasura",keywords:["hasura","docs","ms sql server","schema","custom field name","rename"]},c="MS SQL Server: Customise auto-generated field names",m={unversionedId:"graphql/core/databases/ms-sql-server/schema/custom-field-names",id:"graphql/core/databases/ms-sql-server/schema/custom-field-names",title:"MS SQL Server: Customise auto-generated field names",description:"Use custom field names for MS SQL Server in Hasura",source:"@site/docs/graphql/core/databases/ms-sql-server/schema/custom-field-names.mdx",sourceDirName:"graphql/core/databases/ms-sql-server/schema",slug:"/graphql/core/databases/ms-sql-server/schema/custom-field-names",permalink:"/docs/latest/graphql/core/databases/ms-sql-server/schema/custom-field-names",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/databases/ms-sql-server/schema/custom-field-names.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Customise auto-generated fields",sidebar_position:5,description:"Use custom field names for MS SQL Server in Hasura",keywords:["hasura","docs","ms sql server","schema","custom field name","rename"]},sidebar:"docsSidebar",previous:{title:"Role based column presets",permalink:"/docs/latest/graphql/core/databases/ms-sql-server/schema/default-values/mssql-column-presets"},next:{title:"Using an existing database",permalink:"/docs/latest/graphql/core/databases/ms-sql-server/schema/using-existing-database"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Expose columns with a different name in the GraphQL API",id:"expose-columns-with-a-different-name-in-the-graphql-api",level:2},{value:"Expose table root fields with a different name in the GraphQL API",id:"expose-table-root-fields-with-a-different-name-in-the-graphql-api",level:2}],f={toc:d};function h(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ms-sql-server-customise-auto-generated-field-names"},"MS SQL Server: Customise auto-generated field names"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Hasura auto-generates GraphQL field names based on your database table\nand column names. If you'd like to change the defaults, it is possible\nto override and rename the auto-generated table and column field names\nexposed over the GraphQL API."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Supported from")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This feature is supported in versions ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.0.0-beta.8")," and later."))),(0,o.kt)("h2",{id:"expose-columns-with-a-different-name-in-the-graphql-api"},"Expose columns with a different name in the GraphQL API"),(0,o.kt)(s.Z,{className:"api-tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,o.kt)("p",null,"Console support coming soon")),(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("p",null,"You can customize auto-generated field names in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tables.yaml")," file\ninside the ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{4-6}","{4-6}":!0},"- table:\n    schema: dbo\n    name: author\n  configuration:\n    column_config:\n      addr:\n        custom_name: address\n")),(0,o.kt)("p",null,"Apply the metadata by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hasura metadata apply\n"))),(0,o.kt)(l.Z,{value:"api",label:"API",mdxType:"TabItem"},(0,o.kt)("p",null,"A custom field name can be set for a column via the following 2 methods:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Passing a ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/syntax-defs#table-config"},"Table config")," with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/syntax-defs#columnconfig"},"ColumnConfig")," to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/metadata-api/table-view#mssql-set-table-customization"},"mssql_set_table_customization")," API while tracking a table:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/metadata HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n  "type": "mssql_set_table_customization",\n  "args": {\n    "source": "<db_name>",\n    "table": "authors",\n    "configuration": {\n      "column_config": {\n        "id": {\n          "custom_name": "AuthorId"\n        }\n      }\n    }\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Customization can be done at the time of creation using\n",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/metadata-api/table-view#mssql-track-table"},"mssql_track_table")," API also."))))),(0,o.kt)("h2",{id:"expose-table-root-fields-with-a-different-name-in-the-graphql-api"},"Expose table root fields with a different name in the GraphQL API"),(0,o.kt)(s.Z,{className:"api-tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,o.kt)("p",null,"Console support coming soon")),(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("p",null,"You can expose table root fields with a different name in the GraphQL\nAPI in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tables.yaml")," file inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{4-6}","{4-6}":!0},"- table:\n    schema: dbo\n    name: authors\n  configuration:\n    custom_root_fields:\n      select: authors_aggregate\n")),(0,o.kt)("p",null,"After that, apply the metadata by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hasura metadata apply\n"))),(0,o.kt)(l.Z,{value:"api",label:"API",mdxType:"TabItem"},(0,o.kt)("p",null,"A custom field name can be set for a table root field via the following\n2 methods:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Passing a ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/syntax-defs#table-config"},"Table config")," with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/syntax-defs#custom-root-fields"},"Custom Root Fields")," to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/metadata-api/table-view#mssql-set-table-customization"},"mssql_set_table_customization")," API while tracking a table:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1/metadata HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n\n{\n  "type": "mssql_set_table_customization",\n  "args": {\n    "source": "<db_name>",\n    "table": "authors",\n    "configuration": {\n      "column_config": {\n        "id": {\n          "custom_name": "AuthorId"\n        }\n      },\n      "custom_root_fields": {\n        "select": "authors",\n        "select_aggregate": "authors_aggregate"\n      }\n    }\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Customization can be done at the time of creation using\n",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/api-reference/metadata-api/table-view#mssql-track-table"},"mssql_track_table")," API also."))))))}h.isMDXComponent=!0}}]);