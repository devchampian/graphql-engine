"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[164],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return c}});var r=t(67294);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,p=function(e,a){if(null==e)return{};var t,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var s=r.createContext({}),o=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},u=function(e){var a=o(e.components);return r.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,p=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=o(t),c=p,g=h["".concat(s,".").concat(c)]||h[c]||m[c]||i;return t?r.createElement(g,n(n({ref:a},u),{},{components:t})):r.createElement(g,n({ref:a},u))}));function c(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var i=t.length,n=new Array(i);n[0]=h;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:p,n[1]=l;for(var o=2;o<i;o++)n[o]=t[o];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},59093:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m}});var r=t(83117),p=t(80102),i=(t(67294),t(3905)),n=["components"],l={description:"Sample apps and boilerplates using Hasura",keywords:["hasura","docs","sample app","boilerplate"],sidebar_position:5,slug:"sample-apps/index"},s="Sample apps & boilerplates",o={unversionedId:"graphql/core/guides/sample-apps",id:"graphql/core/guides/sample-apps",title:"Sample apps & boilerplates",description:"Sample apps and boilerplates using Hasura",source:"@site/docs/graphql/core/guides/sample-apps.mdx",sourceDirName:"graphql/core/guides",slug:"/graphql/core/guides/sample-apps/index",permalink:"/graphql-engine/latest/graphql/core/guides/sample-apps/index",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/guides/sample-apps.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Sample apps and boilerplates using Hasura",keywords:["hasura","docs","sample app","boilerplate"],sidebar_position:5,slug:"sample-apps/index"},sidebar:"docsSidebar",previous:{title:"Docker networking",permalink:"/graphql-engine/latest/graphql/core/guides/docker-networking"},next:{title:"Guides: Integration/migration tutorials",permalink:"/graphql-engine/latest/graphql/core/guides/integrations/index"}},u={},m=[{value:"Blogposts",id:"blogposts",level:2},{value:"Repositories",id:"repositories",level:2},{value:"Working apps",id:"working-apps",level:2},{value:"Videos",id:"videos",level:2},{value:"Boilerplates",id:"boilerplates",level:2}],h={toc:m};function c(e){var a=e.components,t=(0,p.Z)(e,n);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sample-apps--boilerplates"},"Sample apps & boilerplates"),(0,i.kt)("h2",{id:"blogposts"},"Blogposts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hasura.io/blog/building-a-realtime-chat-app-with-graphql-subscriptions-d68cd33e73f"},"Build a realtime chat app with GraphQL Subscriptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hackernoon.com/building-a-react-todo-app-with-hasura-graphql-engine-511b703a7ef"},"Build a React To Do Application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.to/malgamves/building-a-real-time-game-of-thrones-voting-app-with-graphql-and-chart-js-37ma"},"Build a realtime Game of Thrones Voting App with GraphQL and Chart.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@harshsrivastav123/todo-app-with-hasura-graphql-engine-using-angular-6-aa49957fac19"},"Build a todo App with Hasura GraphQL Engine using Angular 6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codeburst.io/making-a-login-app-using-react-native-and-hasura-without-redux-bb31d102038d"},"Build a Login app using React-native and Hasura without Redux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hasura.io/blog/building-file-upload-downloads-for-your-hasura-app/"},"Build file upload and download for your Hasura app with S3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.to/mikewheaton/public-graphql-queries-with-hasura-2n06"},"Public GraphQL queries with Hasura (unauthenticated users)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.to/lineup-ninja/modelling-teams-and-user-security-with-hasura-204i"},"Modelling teams and user security with Hasura")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@sejuba/django-jwt-authentication-with-hasura-graphql-engine-e522b2c90869"},"Django JWT authentication with Hasura"))),(0,i.kt)("h2",{id:"repositories"},"Repositories"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/firebase-jwt"},"Firebase Auth + Hasura JWT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/gatsby-contentful-auth0"},"Gatsby + Contenful + Auth0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/gatsby-postgres-graphql"},"Gatsby + Postgres + GraphQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/gridsome-postgres-graphql"},"Gridsome + Postgres + GraphQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/nextjs-8-serverless"},"NextJS 8 + Serverless")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/nextjs-postgres-graphql"},"NextJS + Postgres + GraphQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/nuxtjs-postgres-graphql"},"NuxtJS + Postgres + GraphQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/quasar-framework-vue-graphql"},"Quasar framework + Vue + GraphQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/react-apollo-todo"},"Todo app with React + Apollo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/react-static-graphql"},"React-static + GraphQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/realtime-chat-vue"},"Realtime chat with Vue using GraphQL Subscriptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/realtime-chat"},"Realtime chat with React using GraphQL Subscriptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/realtime-location-tracking"},"Realtime location tracking using GraphQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/realtime-poll"},"Hasura realtime poll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/serverless-etl"},"Serverless ETL demo using Hasura GraphQL Engine Event Triggers and Algolia Search")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/serverless-push"},"Web notifications using Hasura GraphQL Engine Event Triggers and FCM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/svelte-apollo"},"Svelte + GraphQL app")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/tic-tac-toe-react"},"Multiplayer Tic Tac Toe with React")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/todo-auth0-jwt"},"Integrating Todo app with Auth0 and JWT authorization with Hasura GraphQL Engine")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/vuejs-auth0-graphql"},"VueJS + Auth0 + GraphQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/vuetify-vuex-todo-graphql"},"Todo app with Vuetify + Vuex + GraphQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/whatsapp-clone-typescript-react"},"WhatsApp clone with Typescript + React + GraphQL"))),(0,i.kt)("h2",{id:"working-apps"},"Working apps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://whatsapp-clone.demo.hasura.io/sign-in"},"WhatsApp clone")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://react-apollo-todo.demo.hasura.io/"},"Realtime todo app")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://realtime-chat.demo.hasura.io/"},"Group chat app")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://realtime-location-tracking.demo.hasura.io/"},"Location tracking app")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://realtime-poll.demo.hasura.io/"},"Realtime poll app")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://serverless-push.demo.hasura.io/"},"Web push notifications demo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://serverless-etl.demo.hasura.io/"},"Serverless ETL demo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://3factor.hasura.io/"},"3 factor app demo"))),(0,i.kt)("h2",{id:"videos"},"Videos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=xNcxdGaUGqI"},"Build a realtime chat app with GraphQL Subscriptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=HTEGGndT3zY"},"Build a realtime blog app with Hasura and Gatsby"))),(0,i.kt)("h2",{id:"boilerplates"},"Boilerplates"),(0,i.kt)("p",null,"For boilerplates, please check our community wiki on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hasura/graphql-engine/wiki/Community-Wiki#tools-boilerplates--sample-apps"},"GitHub"),"."))}c.isMDXComponent=!0}}]);