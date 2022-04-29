"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7224],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),d=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=d(n),k=a,m=p["".concat(u,".").concat(k)]||p[k]||c[k]||l;return n?r.createElement(m,o(o({ref:e},s),{},{components:n})):r.createElement(m,o({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(67294);function a(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(83117),a=n(67294),l=n(72389),o=n(89575),i=n(86010),u="tabItem_LplD";function d(t){var e,n,l,d=t.lazy,s=t.block,c=t.defaultValue,p=t.values,k=t.groupId,m=t.className,g=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:g.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),b=(0,o.lx)(h,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(e=null!=c?c:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=g[0])?void 0:l.props.value;if(null!==f&&!h.some((function(t){return t.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.UB)(),v=N.tabGroupChoices,y=N.setTabGroupChoices,w=(0,a.useState)(f),C=w[0],P=w[1],I=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var A=v[k];null!=A&&A!==C&&h.some((function(t){return t.value===A}))&&P(A)}var O=function(t){var e=t.currentTarget,n=I.indexOf(e),r=h[n].value;r!==C&&(D(e),P(r),null!=k&&y(k,r))},T=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r=I.indexOf(t.currentTarget)+1;n=I[r]||I[0];break;case"ArrowLeft":var a=I.indexOf(t.currentTarget)-1;n=I[a]||I[I.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},m)},h.map((function(t){var e=t.value,n=t.label,l=t.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:function(t){return I.push(t)},onKeyDown:T,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===e})}),null!=n?n:e)}))),d?(0,a.cloneElement)(g.filter((function(t){return t.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==C})}))))}function s(t){var e=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(e)},t))}},86216:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return k}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=n(9877),i=n(58215),u=["components"],d={description:"Docker networking with Hasura",keywords:["hasura","docs","deployment","network","docker"],sidebar_position:4},s="Docker networking",c={unversionedId:"graphql/core/guides/docker-networking",id:"graphql/core/guides/docker-networking",title:"Docker networking",description:"Docker networking with Hasura",source:"@site/docs/graphql/core/guides/docker-networking.mdx",sourceDirName:"graphql/core/guides",slug:"/graphql/core/guides/docker-networking",permalink:"/graphql-engine/latest/graphql/core/guides/docker-networking",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/guides/docker-networking.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Docker networking with Hasura",keywords:["hasura","docs","deployment","network","docker"],sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Import data from CSV",permalink:"/graphql-engine/latest/graphql/core/guides/postgres/import-data-from-csv"},next:{title:"Sample apps & boilerplates",permalink:"/graphql-engine/latest/graphql/core/guides/sample-apps/index"}},p={},k=[{value:"Introduction",id:"introduction",level:2},{value:"Network config",id:"network-config",level:2},{value:"Advanced",id:"advanced",level:2}],m={toc:k};function g(t){var e=t.components,n=(0,a.Z)(t,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"docker-networking"},"Docker networking"),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Sometimes you might want to connect Hasura running in Docker with APIs\n(e.g. auth webhooks, event triggers, remote schemas) that are either\nrunning outside of Docker or in a different Docker container. Depending\non the setting, the network config is different. This section shows how\nto connect in each of these use cases."),(0,l.kt)("h2",{id:"network-config"},"Network config"),(0,l.kt)(o.Z,{className:"api-tabs",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Connection"),(0,l.kt)("th",null,"Config"),(0,l.kt)("th",null,"Comment"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Hasura to API (outside Docker)")),(0,l.kt)("td",null,(0,l.kt)("ol",{type:"1"},(0,l.kt)("li",null,"With ",(0,l.kt)("code",null,"--net=host"),", ",(0,l.kt)("code",null,"localhost:3000")),(0,l.kt)("li",null,"Otherwise, ",(0,l.kt)("code",null,"<docker-bridge-ip>:3000"),", e.g. ",(0,l.kt)("code",null,"172.17.0.1:3000")))),(0,l.kt)("td",null,(0,l.kt)("ol",{type:"1"},(0,l.kt)("li",null,"Assuming the API is running on port ",(0,l.kt)("code",null,"3000")),(0,l.kt)("li",null,"The Docker bridge IP can be found via ",(0,l.kt)("code",null,"ifconfig"))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"API (outside Docker) to Hasura")),(0,l.kt)("td",null,(0,l.kt)("code",null,"localhost:8080")),(0,l.kt)("td",null,"Hasura runs on port ",(0,l.kt)("code",null,"8080")," by default")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Hasura to API (both in docker-compose)")),(0,l.kt)("td",null,"service name, e.g.: ",(0,l.kt)("code",null,"api:3000")),(0,l.kt)("td",null,"Assuming the API is running on port ",(0,l.kt)("code",null,"3000"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"API to Hasura (both in docker-compose)")),(0,l.kt)("td",null,"service name, e.g.: ",(0,l.kt)("code",null,"hasura:8080")),(0,l.kt)("td",null,"Hasura runs on port ",(0,l.kt)("code",null,"8080")," by default")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Hasura to API (both running with separate docker run)")),(0,l.kt)("td",null,"Docker internal IP address"),(0,l.kt)("td",null,"Can be obtained with ",(0,l.kt)("code",null,"docker inspect"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"API to Hasura (both running with separate docker run)")),(0,l.kt)("td",null,"Docker internal IP address"),(0,l.kt)("td",null,"Can be obtained with ",(0,l.kt)("code",null,"docker inspect")))))),(0,l.kt)(i.Z,{value:"mac",label:"Mac",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Connection"),(0,l.kt)("th",{parentName:"tr",align:null},"Config"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Hasura to API (outside Docker)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"host.docker.internal:3000")),(0,l.kt)("td",{parentName:"tr",align:null},"Assuming the API is running on port ",(0,l.kt)("inlineCode",{parentName:"td"},"3000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"API (outside Docker) to Hasura")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"localhost:8080")),(0,l.kt)("td",{parentName:"tr",align:null},"Hasura runs on port ",(0,l.kt)("inlineCode",{parentName:"td"},"8080")," by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Hasura to API (both in docker-compose)")),(0,l.kt)("td",{parentName:"tr",align:null},"service name, e.g.: ",(0,l.kt)("inlineCode",{parentName:"td"},"api:3000")),(0,l.kt)("td",{parentName:"tr",align:null},"Assuming the API is running on port ",(0,l.kt)("inlineCode",{parentName:"td"},"3000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"API to Hasura (both in docker-compose)")),(0,l.kt)("td",{parentName:"tr",align:null},"service name, e.g.: ",(0,l.kt)("inlineCode",{parentName:"td"},"hasura:8080")),(0,l.kt)("td",{parentName:"tr",align:null},"Hasura runs on port ",(0,l.kt)("inlineCode",{parentName:"td"},"8080")," by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Hasura to API (both running with separate docker run)")),(0,l.kt)("td",{parentName:"tr",align:null},"Docker internal IP address"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be obtained with ",(0,l.kt)("inlineCode",{parentName:"td"},"docker inspect"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"API to Hasura (both running with separate docker run)")),(0,l.kt)("td",{parentName:"tr",align:null},"Docker internal IP address"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be obtained with ",(0,l.kt)("inlineCode",{parentName:"td"},"docker inspect")))))),(0,l.kt)(i.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Connection"),(0,l.kt)("th",{parentName:"tr",align:null},"Config"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Hasura to API (outside Docker)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"host.docker.internal:3000")),(0,l.kt)("td",{parentName:"tr",align:null},"Assuming the API is running on port ",(0,l.kt)("inlineCode",{parentName:"td"},"3000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"API (outside Docker) to Hasura")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"localhost:8080")),(0,l.kt)("td",{parentName:"tr",align:null},"Hasura runs on port ",(0,l.kt)("inlineCode",{parentName:"td"},"8080")," by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Hasura to API (both in docker-compose)")),(0,l.kt)("td",{parentName:"tr",align:null},"service name, e.g.: ",(0,l.kt)("inlineCode",{parentName:"td"},"api:3000")),(0,l.kt)("td",{parentName:"tr",align:null},"Assuming the API is running on port ",(0,l.kt)("inlineCode",{parentName:"td"},"3000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"API to Hasura (both in docker-compose)")),(0,l.kt)("td",{parentName:"tr",align:null},"service name, e.g.: ",(0,l.kt)("inlineCode",{parentName:"td"},"hasura:8080")),(0,l.kt)("td",{parentName:"tr",align:null},"Hasura runs on port ",(0,l.kt)("inlineCode",{parentName:"td"},"8080")," by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Hasura to API (both running with separate docker run)")),(0,l.kt)("td",{parentName:"tr",align:null},"Docker internal IP address"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be obtained with ",(0,l.kt)("inlineCode",{parentName:"td"},"docker inspect"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"API to Hasura (both running with separate docker run)")),(0,l.kt)("td",{parentName:"tr",align:null},"Docker internal IP address"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be obtained with ",(0,l.kt)("inlineCode",{parentName:"td"},"docker inspect"))))))),(0,l.kt)("h2",{id:"advanced"},"Advanced"),(0,l.kt)("p",null,"Learn more about Docker specific networking in the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/"},"Docker documentation"),"."))}g.isMDXComponent=!0}}]);