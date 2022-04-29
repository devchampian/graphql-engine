"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6988],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,v=d["".concat(l,".").concat(g)]||d[g]||p[g]||s;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7313:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),s=(n(67294),n(3905)),o=["components"],i={sidebar_label:"Using serverless functions",sidebar_position:5,description:"Use serverless functions with Hasura event triggers",keywords:["hasura","docs","event trigger","serverless function"]},l="Using serverless functions",c={unversionedId:"graphql/core/event-triggers/serverless",id:"graphql/core/event-triggers/serverless",title:"Using serverless functions",description:"Use serverless functions with Hasura event triggers",source:"@site/docs/graphql/core/event-triggers/serverless.mdx",sourceDirName:"graphql/core/event-triggers",slug:"/graphql/core/event-triggers/serverless",permalink:"/docs/latest/graphql/core/event-triggers/serverless",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/event-triggers/serverless.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Using serverless functions",sidebar_position:5,description:"Use serverless functions with Hasura event triggers",keywords:["hasura","docs","event trigger","serverless function"]},sidebar:"docsSidebar",previous:{title:"Invoke trigger manually",permalink:"/docs/latest/graphql/core/event-triggers/invoke-trigger-manually"},next:{title:"Event trigger samples",permalink:"/docs/latest/graphql/core/event-triggers/samples"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Why use serverless functions?",id:"why-use-serverless-functions",level:2},{value:"Examples",id:"examples",level:2},{value:"For example: update related data on a database event",id:"for-example-update-related-data-on-a-database-event",level:3}],d={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"using-serverless-functions"},"Using serverless functions"),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"You can use serverless functions along with event triggers to design an\nasync business workflow without having to manage any dedicated\ninfrastructure."),(0,s.kt)("p",null,"As Hasura event triggers can deliver database events to any webhook,\nserverless functions can be perfect candidates for their handlers."),(0,s.kt)("h2",{id:"why-use-serverless-functions"},"Why use serverless functions?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Cost effectiveness."),(0,s.kt)("li",{parentName:"ol"},"No infra management."),(0,s.kt)("li",{parentName:"ol"},"Async business logic.")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"You can find a bunch of examples for various serverless cloud providers\nin this repo:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/hasura/graphql-engine/tree/master/community/boilerplates/event-triggers"},"https://github.com/hasura/graphql-engine/tree/master/community/boilerplates/event-triggers"),"."),(0,s.kt)("h3",{id:"for-example-update-related-data-on-a-database-event"},"For example: update related data on a database event"),(0,s.kt)("p",null,"In this example we make a note taking app. Whenever a user updates their\nnote, we want to store a revision of that note in a separate table."),(0,s.kt)("p",null,"You can find the complete example at:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/hasura/graphql-engine/tree/master/community/boilerplates/event-triggers/aws-lambda/nodejs6/mutation"},"https://github.com/hasura/graphql-engine/tree/master/community/boilerplates/event-triggers/aws-lambda/nodejs6/mutation"),"."),(0,s.kt)("p",null,"Let's consider the following simplified schema for the above:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"notes (\n  id INT PRIMARY KEY,\n  note TEXT\n)\n\nnote_revision (\n  id INT PRIMARY KEY,\n  note TEXT,\n  note_id INT FOREIGN KEY REFERENCES notes(id),\n  update_at TIMESTAMP DEFAULT now()\n)\n")),(0,s.kt)("p",null,"Whenever an update happens to the ",(0,s.kt)("inlineCode",{parentName:"p"},"notes")," table, we want to insert a row\ninto the ",(0,s.kt)("inlineCode",{parentName:"p"},"note_revision")," table."),(0,s.kt)("p",null,"For this we ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/event-triggers/create-trigger"},"setup an event trigger")," on ",(0,s.kt)("inlineCode",{parentName:"p"},"UPDATE")," to the\n",(0,s.kt)("inlineCode",{parentName:"p"},"notes")," table which calls an AWS Lambda function. The AWS Lambda\nfunction itself uses a GraphQL mutation to insert a new row into the\n",(0,s.kt)("inlineCode",{parentName:"p"},"note_revision")," table. As the ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/graphql/core/event-triggers/payload"},"event trigger payload")," in case of updates gives us both the old and the new data, we can store\nthe old note data in our revision table."),(0,s.kt)("p",null,"Our AWS Lambda code looks like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// Lambda which gets triggered on insert, and in turns performs a mutation\n\nconst fetch = require('node-fetch');\n\nconst adminSecret = process.env.ADMIN_SECRET;\nconst hgeEndpoint = process.env.HGE_ENDPOINT;\n\nconst query = `\n  mutation updateNoteRevision ($noteId: Int!, $data: String!) {\n    insert_note_revision (objects: [\n      {\n        note_id: $noteId,\n        note: $data\n      }\n    ]) {\n      affected_rows\n    }\n  }\n`;\n\nexports.handler = (event, context, callback) => {\n    let request;\n    try {\n        request = JSON.parse(event.body);\n    } catch (e) {\n        return callback(null, {statusCode: 400, body: \"cannot parse hasura event\"});\n    }\n\n    const response = {\n        statusCode: 200,\n        body: \"success\"\n    };\n    const qv = {noteId: request.event.data.old.id, data: request.event.data.old.note};\n    fetch(hgeEndpoint + '/v1/graphql', {\n        method: 'POST',\n        body: JSON.stringify({query: query, variables: qv}),\n        headers: {'Content-Type': 'application/json', 'x-hasura-admin-secret': adminSecret},\n    })\n        .then(res => res.json())\n        .then(json => {\n            console.log(json);\n            callback(null, response);\n        });\n};\n")))}g.isMDXComponent=!0}}]);