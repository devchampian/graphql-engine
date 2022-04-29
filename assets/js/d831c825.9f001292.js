"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7547],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},10231:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),o=(t(9877),t(58215),t(22138)),l=["components"],s={sidebar_position:8},u="GraphiQL IDE",c={unversionedId:"rst-vs-mdx-guide/graphiql-ide",id:"rst-vs-mdx-guide/graphiql-ide",title:"GraphiQL IDE",description:"We use graphiql editor wherever applicable for example showcase throughout docs.",source:"@site/wiki/rst-vs-mdx-guide/graphiql-ide.mdx",sourceDirName:"rst-vs-mdx-guide",slug:"/rst-vs-mdx-guide/graphiql-ide",permalink:"/docs/wiki/rst-vs-mdx-guide/graphiql-ide",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/rst-vs-mdx-guide/graphiql-ide.mdx",tags:[],version:"current",lastUpdatedBy:"Rikin Kachhia",lastUpdatedAt:1649851310,formattedLastUpdatedAt:"4/13/2022",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"wiki",previous:{title:"Tabs",permalink:"/docs/wiki/rst-vs-mdx-guide/tabs"},next:{title:"Thumbnail",permalink:"/docs/wiki/rst-vs-mdx-guide/thumbnail"}},d={},p=[{value:"Sphinx - RST",id:"sphinx---rst",level:2},{value:"Docusaurus - MDX",id:"docusaurus---mdx",level:2},{value:"Result in UI",id:"result-in-ui",level:2}],h={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graphiql-ide"},"GraphiQL IDE"),(0,i.kt)("p",null,"We use graphiql editor wherever applicable for example showcase throughout docs."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphiQLIDE")," component is already created with required custom logic. So, use ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphiQLIDE")," just like any other React component."),(0,i.kt)("h2",{id:"sphinx---rst"},"Sphinx - RST"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rest"},'// highlight-start\n.. graphiql::\n  :view_only:\n  :query:\n// highlight-end\n    query get_authors_in_pincode ($jsonFilter: jsonb){\n      authors(\n        where: {\n          address: {_contains: $jsonFilter }\n        }\n      ) {\n        id\n        name\n        address\n      }\n    }\n  // highlight-next-line\n  :response:\n    {\n      "data": {\n        "authors": [\n          {\n            "id": 1,\n            "name": "Ash",\n            "address": {\n              "street_address": "161, 19th Main Road, Koramangala 6th Block",\n              "city": "Bengaluru",\n              "state": "Karnataka",\n              "pincode": 560095,\n              "phone": "9090909090",\n            }\n          }\n        ]\n      }\n    }\n  // highlight-next-line\n  :variables:\n    {\n      "jsonFilter": {\n        "pincode": 560095\n      }\n    }\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},":view_only:")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"viewOnly")," prop and by default set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLIDE")," component."))),(0,i.kt)("h2",{id:"docusaurus---mdx"},"Docusaurus - MDX"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'\n// highlight-start\nimport GraphiQLIDE from \'@site/src/components/GraphiQLIDE\';\n\n<GraphiQLIDE\n  query={`query get_authors_in_pincode ($jsonFilter: jsonb){\n// highlight-end\n    authors(\n      where: {\n        address: {_contains: $jsonFilter }\n      }\n    ) {\n      id\n      name\n      address\n    }\n  }`}\n  // highlight-next-line\n  variables={`{\n    "jsonFilter": {\n      "pincode": 560095\n    }\n  }`}\n  // highlight-next-line\n  response={`{\n    "data": {\n      "authors": [\n        {\n          "id": 1,\n          "name": "Ash",\n          "address": {\n            "street_address": "161, 19th Main Road, Koramangala 6th Block",\n            "city": "Bengaluru",\n            "state": "Karnataka",\n            "pincode": 560095,\n            "phone": "9090909090",\n          }\n        }\n      ]\n    }\n  }`}\n/>\n')),(0,i.kt)("h2",{id:"result-in-ui"},"Result in UI"),(0,i.kt)("p",null,"Below is how it should look in UI."),(0,i.kt)(o.Z,{query:"query get_authors_in_pincode ($jsonFilter: jsonb){\n    authors(\n      where: {\n        address: {_contains: $jsonFilter }\n      }\n    ) {\n      id\n      name\n      address\n    }\n  }",variables:'{\n    "jsonFilter": {\n      "pincode": 560095\n    }\n  }',response:'{\n    "data": {\n      "authors": [\n        {\n          "id": 1,\n          "name": "Ash",\n          "address": {\n            "street_address": "161, 19th Main Road, Koramangala 6th Block",\n            "city": "Bengaluru",\n            "state": "Karnataka",\n            "pincode": 560095,\n            "phone": "9090909090",\n          }\n        }\n      ]\n    }\n  }',mdxType:"GraphiQLIDE"}))}m.isMDXComponent=!0},58215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(83117),a=t(67294),i=t(72389),o=t(89575),l=t(86010),s="tabItem_LplD";function u(e){var n,t,i,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,h=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,o.lx)(f,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=v[0])?void 0:i.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),k=y.tabGroupChoices,w=y.setTabGroupChoices,x=(0,a.useState)(b),E=x[0],N=x[1],O=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var D=k[h];null!=D&&D!==E&&f.some((function(e){return e.value===D}))&&N(D)}var T=function(e){var n=e.currentTarget,t=O.indexOf(n),r=f[t].value;r!==E&&(j(n),N(r),null!=h&&w(h,r))},q=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;t=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},m)},f.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return O.push(e)},onKeyDown:q,onFocus:T,onClick:T},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function c(e){var n=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},22138:function(e,n,t){var r=t(67294),a=t(57932),i=t(72389),o=t(86010),l=t(71077);n.Z=function(e){var n=e.query,t=e.variables,s=e.response,u=e.viewOnly,c=void 0===u||u,d=(0,i.Z)();return r.createElement("div",{className:"graphiql "+(0,o.Z)({"with-vars":!!t,"view-only":c})},r.createElement(a.ZP,{readOnly:c,editorTheme:"dracula",schema:null,fetcher:d?(0,l.n)({url:"https://hasura.io/graphql"}):function(){return null},query:n,variables:t,response:s}))}}}]);