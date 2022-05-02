"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8437],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(t),d=o,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||n;return t?r.createElement(f,s(s({ref:a},c),{},{components:t})):r.createElement(f,s({ref:a},c))}));function d(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=h;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<n;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},23488:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(83117),o=t(80102),n=(t(67294),t(3905)),s=["components"],i={description:"Hasura FAQs",keywords:["hasura","docs","FAQs"],sidebar_position:15,sidebar_label:"FAQs",slug:"faq/index"},l="FAQs",u={unversionedId:"graphql/core/faq",id:"graphql/core/faq",title:"FAQs",description:"Hasura FAQs",source:"@site/docs/graphql/core/faq.mdx",sourceDirName:"graphql/core",slug:"/graphql/core/faq/index",permalink:"/graphql-engine/latest/graphql/core/faq/index",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/faq.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{description:"Hasura FAQs",keywords:["hasura","docs","FAQs"],sidebar_position:15,sidebar_label:"FAQs",slug:"faq/index"},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/graphql-engine/latest/graphql/core/troubleshooting/index"},next:{title:"Security Vulnerability Protocol",permalink:"/graphql-engine/latest/graphql/core/security-disclosure/index"}},c={},p=[{value:"What types of workloads and databases does Hasura support?",id:"faq-db",level:2},{value:"How does Hasura work?",id:"faq-how-hasura-works",level:2},{value:"How much time &amp; effort does Hasura save?",id:"faq-hasura-timesaving",level:2},{value:"How do I use Hasura if I already have an existing application or API?",id:"faq-hasura-existing-app-api",level:2},{value:"Where do I put business logic?",id:"faq-business-logic",level:2},{value:"Can I use REST instead of GraphQL APIs?",id:"faq-REST-api",level:2},{value:"Can Hasura integrate with my authentication system?",id:"faq-hasura-auth",level:2},{value:"Does Hasura also automatically cache queries or data to improve performance?",id:"faq-hasura-query-caching",level:2},{value:"How does Hasura handle ABAC, RBAC style authorization policies?",id:"faq-ABAC-RBAC",level:2},{value:"Does Hasura have other security features, specifically for GraphQL in production?",id:"faq-security",level:2},{value:"How does the compiler approach provide superior performance?",id:"faq-compiler-performance",level:2},{value:"How does Hasura scale vertically and horizontally?",id:"faq-scaling",level:2},{value:"How can I improve the performance of slow running API calls?",id:"faq-slow-api-perf",level:2}],h={toc:p};function d(e){var a=e.components,t=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"faqs"},"FAQs"),(0,n.kt)("h2",{id:"faq-db"},"What types of workloads and databases does Hasura support?"),(0,n.kt)("p",null,"Hasura supports the following databases:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PostgresQL (and the Postgres family of databases: Yugabyte, Timescale, Citus, Aurora)"),(0,n.kt)("li",{parentName:"ul"},"SQL Server"),(0,n.kt)("li",{parentName:"ul"},"Big Query")),(0,n.kt)("h2",{id:"faq-how-hasura-works"},"How does Hasura work?"),(0,n.kt)("p",null,"Although Hasura presents itself as a web-service, Hasura is quite a JIT compiler. Hasura takes incoming GraphQL API calls over HTTP and\nthen tries to achieve theoretically optimal performance while delegating the data fetches to downstream data sources. You can read more\nabout Hasura\u2019s design philosophy in this ",(0,n.kt)("a",{parentName:"p",href:"https://hasura.io/blog/how-hasura-works/"},"blog post")),(0,n.kt)("h2",{id:"faq-hasura-timesaving"},"How much time & effort does Hasura save?"),(0,n.kt)("p",null,"Hasura cuts down development time by 50-80%. You can find out more from our case studies ",(0,n.kt)("a",{parentName:"p",href:"https://hasura.io/user-stories/"},"here.")),(0,n.kt)("h2",{id:"faq-hasura-existing-app-api"},"How do I use Hasura if I already have an existing application or API?"),(0,n.kt)("p",null,"Hasura is designed for incremental adoption without having to rip-and-replace or entirely rebuild your stack. You can incrementally migrate\nyour application to Hasura. Use Hasura to first build any new features for your application using your existing data as well as a high\nperformance read layer for any read-heavy use-cases as this takes no time to set up. You can also use any business logic in your existing\napplications by delegating to them via Hasura Actions. This gives you the time to migrate over any legacy code or rewrite existing\nmicro-services with Hasura."),(0,n.kt)("h2",{id:"faq-business-logic"},"Where do I put business logic?"),(0,n.kt)("p",null,"Hasura exposes your domain\u2019s data and logic over a high-performance flexible API. Hasura removes the need for writing any code required\nfor external or internal authorization rules."),(0,n.kt)("p",null,"Hasura provides 4 ways for exposing existing or new business logic in your domain:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Event triggers:"),"\nWhenever there\u2019s a change in the upstream database, Hasura can capture that change as an event and deliver that to a HTTP webhook that\ncan process that data change event and react to it asynchronously. Apart from attaching specific pieces of logic to events, this is especially\nuseful if you\u2019re thinking about building end-to-end real-time and reactive applications."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read more about this architecture at ",(0,n.kt)("a",{parentName:"li",href:"https://3factor.app"},"https://3factor.app")),(0,n.kt)("li",{parentName:"ul"},"Read more about event triggers in the Hasura ",(0,n.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/event-triggers/index"},"docs.")),(0,n.kt)("li",{parentName:"ul"},"Go through a quick tutorial on how to set event triggers up at ",(0,n.kt)("a",{parentName:"li",href:"https://learn.hasura.io"},"https://learn.hasura.io"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"REST APIs:"),"\nIf you have new or existing REST APIs that serve domain data or logic, you can easily connect Hasura to them and extend the GraphQL schema\nthat Hasura exposes. This is useful not just when you have legacy APIs that contain a lot of transactional or application logic, but also\nwhen you want to build and serve custom logic with cloud-native code deployed as containers or serverless functions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read more about ",(0,n.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/actions/index"},"Hasura Actions"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"GraphQL APIs:"),"\nIf you have a new or existing GraphQL service that extends the schema, say with custom mutations that incorporate your custom logic, or if\nyou\u2019d like to extend your overall GraphQL API with a \u201csub graph\u201d that comes from a service that you may not directly own, you can use \u201cRemote Schemas\u201d\nin Hasura to bring in GraphQL services as data & logic providers to your GraphQL API."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read more about ",(0,n.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/remote-schemas/index"},"Remote Schemas"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Stored procedures / functions in the database:"),"\nStored procedures and functions are a common way to write and store high-performance business logic, or transactional logic, that's close to the\ndata. As a part of the GraphQL API that Hasura exposes over databases, Hasura allows you to expose stored procedures or functions as fields in\nthe GraphQL schema. This is a great way to bring in existing business logic that maybe in your database, or to write custom, high-performance logic\nif you\u2019re familiar with databases!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read more about ",(0,n.kt)("a",{parentName:"li",href:"/graphql-engine/latest/graphql/core/databases/postgres/schema/custom-functions"},"custom functions"))),(0,n.kt)("p",null,"Choose one or more of the methods above depending on where your existing business logic is; and where you want it to be in the future!"),(0,n.kt)("p",null,"For example, you might have existing logic in synchronous REST APIs in Java or .NET, but you might want to write new logic as reactive event triggers\ndeployed as serverless functions (or lambdas) in Javascript or Python or Go!"),(0,n.kt)("h2",{id:"faq-REST-api"},"Can I use REST instead of GraphQL APIs?"),(0,n.kt)("p",null,"Hasura 2.0 added support for REST APIs. Hasura 2.0 allows users to create idiomatic REST endpoints based on GraphQL templates.\nRead more ",(0,n.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/api-reference/restified"},"here.")),(0,n.kt)("h2",{id:"faq-hasura-auth"},"Can Hasura integrate with my authentication system?"),(0,n.kt)("p",null,"Hasura believes authentication should not be restricted to a particular provider. Therefore, we make it easier for you to bring in your authentication\nsystem. The most favored mechanism is via JWT. Hasura can accept JWT tokens from any standard JWT provider.\nFor extremely customized authentication systems, Hasura also supports auth webhook that allows you to read through cookies or tokens that might have a\ncustom format. We have guides for some of the popular authentication providers. Read more ",(0,n.kt)("a",{parentName:"p",href:"/graphql-engine/latest/graphql/core/auth/authentication/index"},"here.")),(0,n.kt)("h2",{id:"faq-hasura-query-caching"},"Does Hasura also automatically cache queries or data to improve performance?"),(0,n.kt)("p",null,"Query response caching (available on Hasura Cloud & Hasura EE) can be enabled by specifying which query to cache using the @cached directive. Read more about\ncaching ",(0,n.kt)("a",{parentName:"p",href:"https://hasura.io/learn/graphql/hasura-advanced/performance/1-caching/"},"here.")),(0,n.kt)("h2",{id:"faq-ABAC-RBAC"},"How does Hasura handle ABAC, RBAC style authorization policies?"),(0,n.kt)("p",null,"Hasura implements RBAC by automatically publishing a different GraphQL schema that represents the right queries, fields, and\nmutations that are available to that role."),(0,n.kt)("p",null,"For ABAC, session variables can be used as attributes, and permission rules can be created that can use any dynamic\nvariable that is a property of the request."),(0,n.kt)("h2",{id:"faq-security"},"Does Hasura have other security features, specifically for GraphQL in production?"),(0,n.kt)("p",null,"Hasura has multiple security features to best utilize the power of our GraphQL Engine.\nFeatures like service level security, authentication & authorization, allow lists, rate, and response limiting are present. Learn more about Hasura\nsecurity ",(0,n.kt)("a",{parentName:"p",href:"https://hasura.io/learn/graphql/hasura-advanced/security/"},"here.")),(0,n.kt)("h2",{id:"faq-compiler-performance"},"How does the compiler approach provide superior performance?"),(0,n.kt)("p",null,"Typically when you think of GraphQL servers processing a query, you think of the number of resolvers involved in fetching the data for\nthe query. This approach can lead to multiple hits to the database with obvious constraints associated with it. Batching with data loader can\nimprove the situation by reducing the number of calls."),(0,n.kt)("p",null,"Internally Hasura parses a GraphQL query gets an internal representation of the GraphQL AST. GraphQL AST is then converted to a\nSQL AST. With necessary transformations and variables the final SQL is formed."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GraphQL Parser -> GraphQL AST -> SQL AST -> SQL")),(0,n.kt)("p",null,"This compiler-based approach allows Hasura to form a single SQL query for a GraphQL query of any depth."),(0,n.kt)("h2",{id:"faq-scaling"},"How does Hasura scale vertically and horizontally?"),(0,n.kt)("p",null,"Hasura Cloud lets you scale your applications automatically without having to think about the number of instances, cores, memory, thresholds\netc. You can keep increasing your number of concurrent users and the number of API calls and Hasura Cloud will figure out the optimizations\nauto-magically. Hasura Cloud can load balance queries and subscriptions across read replicas while sending all mutations and metadata API calls to the master.\nLearn more about Horizontal scaling with Hasura, ",(0,n.kt)("a",{parentName:"p",href:"https://hasura.io/learn/graphql/hasura-advanced/performance/2-horizontal-scaling/"},"here.")),(0,n.kt)("h2",{id:"faq-slow-api-perf"},"How can I improve the performance of slow running API calls?"),(0,n.kt)("p",null,"Hasura allows analyzing queries to identify the slow running calls and use Indexes to improve the performance.\nLearn more ",(0,n.kt)("a",{parentName:"p",href:"https://hasura.io/learn/graphql/hasura-advanced/performance/3-analyze-query-plans/"},"here.")))}d.isMDXComponent=!0}}]);