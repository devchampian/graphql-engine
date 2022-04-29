"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9153],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var s=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=s.createContext({}),p=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return s.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return t?s.createElement(m,i(i({ref:n},u),{},{components:t})):s.createElement(m,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var p=2;p<o;p++)i[p]=t[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22138:function(e,n,t){var s=t(67294),a=t(57932),o=t(72389),i=t(86010),r=t(71077);n.Z=function(e){var n=e.query,t=e.variables,l=e.response,p=e.viewOnly,u=void 0===p||p,c=(0,o.Z)();return s.createElement("div",{className:"graphiql "+(0,i.Z)({"with-vars":!!t,"view-only":u})},s.createElement(a.ZP,{readOnly:u,editorTheme:"dracula",schema:null,fetcher:c?(0,r.n)({url:"https://hasura.io/graphql"}):function(){return null},query:n,variables:t,response:l}))}},48629:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var s=t(83117),a=t(80102),o=(t(67294),t(3905)),i=t(22138),r=["components"],l={sidebar_label:"Sample use cases",sidebar_position:1,description:"Use cases for Hasura subscriptions",keywords:["hasura","docs","subscription","use case"]},p="Subscriptions sample use cases",u={unversionedId:"graphql/core/databases/postgres/subscriptions/use-cases",id:"graphql/core/databases/postgres/subscriptions/use-cases",title:"Subscriptions sample use cases",description:"Use cases for Hasura subscriptions",source:"@site/docs/graphql/core/databases/postgres/subscriptions/use-cases.mdx",sourceDirName:"graphql/core/databases/postgres/subscriptions",slug:"/graphql/core/databases/postgres/subscriptions/use-cases",permalink:"/docs/latest/graphql/core/databases/postgres/subscriptions/use-cases",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/databases/postgres/subscriptions/use-cases.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Sample use cases",sidebar_position:1,description:"Use cases for Hasura subscriptions",keywords:["hasura","docs","subscription","use case"]},sidebar:"docsSidebar",previous:{title:"Postgres: Subscriptions",permalink:"/docs/latest/graphql/core/databases/postgres/subscriptions/index"},next:{title:"Execution and performance",permalink:"/docs/latest/graphql/core/databases/postgres/subscriptions/execution-and-performance"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Subscribe to the latest value of a particular field",id:"pg-subscribe-field",level:2},{value:"Example: Live location tracking",id:"example-live-location-tracking",level:3},{value:"Subscribe to changes to a table&#39;s entries",id:"pg-subscribe-table",level:2},{value:"Example: Chat app",id:"example-chat-app",level:3},{value:"Subscribe to the latest value of some derived data",id:"pg-subscribe-derived",level:2},{value:"Example: A poll dashboard",id:"example-a-poll-dashboard",level:3}],h={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,s.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"subscriptions-sample-use-cases"},"Subscriptions sample use cases"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The following are a few use cases for using subscriptions:"),(0,o.kt)("h2",{id:"pg-subscribe-field"},"Subscribe to the latest value of a particular field"),(0,o.kt)("p",null,"In case you are interested only in the latest value of a particular\nfield, you can use subscriptions to fetch the field and get updated with\nits latest value whenever it changes."),(0,o.kt)("h3",{id:"example-live-location-tracking"},"Example: Live location tracking"),(0,o.kt)("p",null,"Use subscriptions to show the current location of a vehicle on a map."),(0,o.kt)("p",null,"Let's say we have the following database schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"vehicle (\n  id INT PRIMARY KEY,\n  vehicle_number TEXT\n)\n\nvehicle_location (\n  id INT PRIMARY KEY,\n  location TEXT,\n  time_stamp TIMESTAMP with time zone DEFAULT now(),\n  /* used to create relationship 'locations' for vehicle */\n  vehicle_id INT FOREIGN KEY REFERENCES vehicle(id)\n)\n")),(0,o.kt)("p",null,"Now we can use the following subscription to fetch the latest location\nof a vehicle to display it on a map:"),(0,o.kt)(i.Z,{query:"# $vehicleId = 3\nsubscription getLocation($vehicleId: Int!) {\n  vehicle(where: {id: {_eq: $vehicleId}}) {\n    id\n    vehicle_number\n    locations(order_by: {time_stamp: desc}, limit: 1) {\n      location\n      time_stamp\n    }\n  }\n}",variables:'{\n  "vehicleId": 3\n}',response:'{\n"data": {\n  "vehicle": [\n    {\n      "id": 3,\n      "vehicle_number": "KA04AD4583",\n      "locations": [\n        {\n          "location": "(12.93623,77.61701)",\n          "time_stamp": "2018-09-05T06:52:44.383588+00:00"\n        }\n      ]\n    }\n  ]\n}\n}',mdxType:"GraphiQLIDE"}),(0,o.kt)("h2",{id:"pg-subscribe-table"},"Subscribe to changes to a table's entries"),(0,o.kt)("p",null,"In case you are interested in all the additions/changes to a table's\nentries, you can use subscriptions to fetch the table rows and get\nupdates whenever there are any additions/changes to the table."),(0,o.kt)("h3",{id:"example-chat-app"},"Example: Chat app"),(0,o.kt)("p",null,"Use subscriptions to show new messages in a chatroom."),(0,o.kt)("p",null,"Let's say we have the following database schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"user (\n  id INT PRIMARY KEY,\n  username TEXT UNIQUE\n)\n\nmessage (\n  id INT PRIMARY KEY,\n  texts TEXT,\n  time_stamp TIMESTAMP default now(),\n  /* used to create relationship 'author' with the 'user' table */\n  user_id INT FOREIGN KEY REFERENCES user(id)\n)\n")),(0,o.kt)("p",null,"Now we can use the following subscription to display the latest messages\nin a chatroom:"),(0,o.kt)(i.Z,{query:"subscription getMessages {\n  message(order_by: {time_stamp: desc}) {\n    texts\n    time_stamp\n    author {\n      username\n    }\n  }\n}",response:'{\n    "data": {\n      "message": [\n        {\n          "texts": "I am fine, and you?",\n          "time_stamp": "2021-11-29T07:42:56.689135",\n          "author": {\n            "username": "Jane"\n          }\n        },\n        {\n          "texts": "Hi! How are you?",\n          "time_stamp": "2021-11-29T07:42:19.506049",\n          "author": {\n            "username": "Musk"\n          },\n        },\n        {\n          "texts": "Hi!",\n          "time_stamp": "2021-11-29T07:38:52.347136",\n          "author": {\n            "username": "Jane"\n          }\n        }\n      ]\n    }\n  }',mdxType:"GraphiQLIDE"}),(0,o.kt)("h2",{id:"pg-subscribe-derived"},"Subscribe to the latest value of some derived data"),(0,o.kt)("p",null,"In case you are interested in the latest value of some derived data, you\ncan ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/databases/postgres/schema/views"},"create a view to query the derived data")," and then use subscriptions to fetch the derived\nvalue and get its latest value whenever it updates."),(0,o.kt)("h3",{id:"example-a-poll-dashboard"},"Example: A poll dashboard"),(0,o.kt)("p",null,"Use subscriptions to show the result of a poll."),(0,o.kt)("p",null,"Let's say we have the following database schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"poll (\n  id INT PRIMARY KEY,\n  question TEXT\n)\n\noption (\n  id INT PRIMARY KEY\n  poll_id INT FOREIGN KEY REFERENCES poll(id)\n  texts TEXT\n)\n\nuser (\n  id INT PRIMARY KEY\n  name TEXT\n)\n\nvote (\n  id INT PRIMARY KEY,\n  option_id INT FOREIGN KEY REFERENCES option(id),\n  user_id INT FOREIGN KEY REFERENCES user(id),\n  time_stamp TIMESTAMP\n)\n")),(0,o.kt)("p",null,"First, create a view ",(0,o.kt)("inlineCode",{parentName:"p"},"poll_results")," to give the result of the poll:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE OR REPLACE VIEW public."poll_results" AS\n  SELECT poll.id AS poll_id,\n         o.option_id,\n         count(*) AS votes\n    FROM (\n      (\n        SELECT vote.option_id,\n               option.poll_id,\n               option.texts\n          FROM (\n            vote\n              LEFT JOIN option ON ((option.id = vote.option_id))\n          )\n        ) o\n            LEFT JOIN poll ON ((poll.id = o.poll_id))\n      )\n  GROUP BY poll.question, o.option_id, poll.id;\n')),(0,o.kt)("p",null,"This view will have the following fields: ",(0,o.kt)("inlineCode",{parentName:"p"},"poll_id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"option_id")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"votes"),", i.e. it gives the number of votes received by each option for a\npoll."),(0,o.kt)("p",null,"Next, ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/databases/postgres/schema/table-relationships/index"},"set up relationships")," ",(0,o.kt)("inlineCode",{parentName:"p"},"poll")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"option")," between the ",(0,o.kt)("inlineCode",{parentName:"p"},"poll_results")," view and the ",(0,o.kt)("inlineCode",{parentName:"p"},"poll")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"option"),"\ntables using the ",(0,o.kt)("inlineCode",{parentName:"p"},"poll_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"option_id")," fields respectively."),(0,o.kt)("p",null,"Now we can use the following subscription to display the latest poll\nresult:"),(0,o.kt)(i.Z,{query:"# $pollId = 1\nsubscription getResult($pollId: Int!) {\n  poll_results (\n    where: { poll_id: {_eq: $pollId} }\n  ) {\n    poll_id\n    poll {\n      question    \n    }\n    option {\n      texts\n    }\n    votes\n  }\n}",variables:'{\n  "pollId": 1\n}',response:'{\n  "data": {\n    "poll_results": [\n      {\n        "poll_id": 1,\n        "poll":{\n          "question": "What\'s your favourite food?"\n        },\n        "option": {\n          "texts": "Pizza"\n        },\n        "votes": 1\n      },\n      {\n        "poll_id": 1,\n        "poll":{\n          "question": "What\'s your favourite food?"\n        },\n        "option": {\n          "texts": "Salad"\n        },\n        "votes": 1\n      },\n      {\n        "poll_id": 1,\n        "poll":{\n          "question": "What\'s your favourite food?"\n        },\n        "option": {\n          "texts": "Sandwich"\n        },\n        "votes": 2\n      },\n      {\n        "poll_id": 1,\n        "poll":{\n          "question": "What\'s your favourite food?"\n        },\n        "option": {\n          "texts": "Burger"\n        },           \n        "votes": 3\n      },\n      {\n        "poll_id": 1,\n        "poll":{\n          "question": "What\'s your favourite food?"\n        },\n        "option": {\n          "texts": "Lasagna"\n        },\n        "votes": 1\n      }\n    ]\n  }\n}',mdxType:"GraphiQLIDE"}))}m.isMDXComponent=!0}}]);