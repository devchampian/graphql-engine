"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[853],{3905:function(e,a,r){r.d(a,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function s(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){s(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,s=function(e,a){if(null==e)return{};var r,t,s={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(s[r]=e[r]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=t.createContext({}),l=function(e){var a=t.useContext(u),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},p=function(e){var a=l(e.components);return t.createElement(u.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var r=e.components,s=e.mdxType,n=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(r),m=s,d=h["".concat(u,".").concat(m)]||h[m]||c[m]||n;return r?t.createElement(d,o(o({ref:a},p),{},{components:r})):t.createElement(d,o({ref:a},p))}));function m(e,a){var r=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=h;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<n;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},12801:function(e,a,r){r.r(a),r.d(a,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var t=r(83117),s=r(80102),n=(r(67294),r(3905)),o=["components"],i={description:"Postgres requirements for Hasura GraphQL engine",keywords:["hasura","docs","deployment","postgres","postgres permissions","postgres version"],sidebar_position:4},u="Postgres requirements",l={unversionedId:"graphql/core/deployment/postgres-requirements",id:"graphql/core/deployment/postgres-requirements",title:"Postgres requirements",description:"Postgres requirements for Hasura GraphQL engine",source:"@site/docs/graphql/core/deployment/postgres-requirements.mdx",sourceDirName:"graphql/core/deployment",slug:"/graphql/core/deployment/postgres-requirements",permalink:"/docs/latest/graphql/core/deployment/postgres-requirements",editUrl:"https://github.com/hasura/graphql-engine/edit/master/docs/docs/graphql/core/deployment/postgres-requirements.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Postgres requirements for Hasura GraphQL engine",keywords:["hasura","docs","deployment","postgres","postgres permissions","postgres version"],sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Server config examples",permalink:"/docs/latest/graphql/core/deployment/graphql-engine-flags/config-examples"},next:{title:"Secure GraphQL endpoint",permalink:"/docs/latest/graphql/core/deployment/securing-graphql-endpoint"}},p={},c=[{value:"Supported Postgres versions",id:"postgres-version-support",level:2},{value:"Feature requirements",id:"feature-requirements",level:3},{value:"Postgres permissions",id:"postgres-permissions",level:2},{value:"Metadata Database Permissions:",id:"metadata-database-permissions",level:3},{value:"User Database Permissions:",id:"user-database-permissions",level:4},{value:"Different Scenarios:",id:"different-scenarios",level:2},{value:"Notes for managed databases (AWS RDS, GCP Cloud SQL, etc.)",id:"notes-for-managed-databases-aws-rds-gcp-cloud-sql-etc",level:3},{value:"<strong>pgcrypto</strong> in PG search path",id:"pgcrypto-in-pg-search-path",level:2}],h={toc:c};function m(e){var a=e.components,r=(0,s.Z)(e,o);return(0,n.kt)("wrapper",(0,t.Z)({},h,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postgres-requirements"},"Postgres requirements"),(0,n.kt)("h2",{id:"postgres-version-support"},"Supported Postgres versions"),(0,n.kt)("p",null,"Hasura GraphQL engine supports ",(0,n.kt)("strong",{parentName:"p"},"Postgres versions 9.5 and above"),"."),(0,n.kt)("h3",{id:"feature-requirements"},"Feature requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/graphql/core/actions/index"},"Hasura actions")," are supported in Postgres 10 and above.")),(0,n.kt)("h2",{id:"postgres-permissions"},"Postgres permissions"),(0,n.kt)("p",null,"If you're running in a controlled environment, you might need to\nconfigure the Hasura GraphQL engine to use a specific Postgres user that\nyour DBA gives you."),(0,n.kt)("p",null,"The Hasura GraphQL engine needs access to your Postgres database with\nthe following permissions."),(0,n.kt)("h3",{id:"metadata-database-permissions"},"Metadata Database Permissions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"(required) Read & write access on 2 schemas: ",(0,n.kt)("inlineCode",{parentName:"li"},"hdb_catalog"),"."),(0,n.kt)("li",{parentName:"ul"},"(required) Read access to the ",(0,n.kt)("inlineCode",{parentName:"li"},"information_schema")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"pg_catalog"),"\nschemas, to query for list of tables. Note that these permissions\nare usually available by default to all postgres users via\n",(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/sql-grant.html"},"PUBLIC"),"\ngrant.")),(0,n.kt)("h4",{id:"user-database-permissions"},"User Database Permissions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"(required) Read access to the schemas (public or otherwise) if you\nonly want to support queries."),(0,n.kt)("li",{parentName:"ul"},"(optional) Write access to the schemas if you want to support\nmutations as well."),(0,n.kt)("li",{parentName:"ul"},"(optional) To create tables and views via the Hasura console (the\nadmin UI) you'll need the privilege to create tables/views. This\nmight not be required when you're working with an existing database.")),(0,n.kt)("h2",{id:"different-scenarios"},"Different Scenarios:"),(0,n.kt)("p",null,"Following are sample SQL blocks that you can run on your database (as a\n",(0,n.kt)("strong",{parentName:"p"},"superuser"),") to create the right credentials for a sample Hasura user:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. Different roles to manage")," ",(0,n.kt)("inlineCode",{parentName:"p"},"user database")," ",(0,n.kt)("strong",{parentName:"p"},"and"),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"metadata database")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- We will create separate users to manage the user database \n-- and metadata database and grant permissions on hasura-specific\n-- schemas and information_schema and pg_catalog.\n-- These permissions/grants are required for Hasura to work properly.\n\n-- create a separate user for to manage metadata database\nCREATE USER hasura_metadata_user WITH PASSWORD 'hasura_metadata_user';\n\n-- create the schemas required by the hasura system\n-- NOTE: If you are starting from scratch: drop the below schemas first, if they exist.\nCREATE SCHEMA IF NOT EXISTS hdb_catalog;\n\n-- make the user an owner of system schemas\nALTER SCHEMA hdb_catalog OWNER TO hasura_metadata_user;\n\n-- grant select permissions on information_schema and pg_catalog. This is\n-- required for hasura to query the list of available tables.\n-- NOTE: these permissions are usually available by default to all users via PUBLIC grant\nGRANT SELECT ON ALL TABLES IN SCHEMA information_schema TO hasura_metadata_user;\nGRANT SELECT ON ALL TABLES IN SCHEMA pg_catalog TO hasura_metadata_user;\n\n------------------------------------------------------------------------------\n\n-- create a separate user for to manage user database\nCREATE USER hasurauser WITH PASSWORD 'hasurauser';\n\n-- create pgcrypto extension, required for UUID\nCREATE EXTENSION IF NOT EXISTS pgcrypto;\n\n-- The below permissions are optional. This is dependent on what access to your\n-- tables/schemas you want give to hasura. If you want expose the public\n-- schema for GraphQL query then give permissions on public schema to the\n-- hasura user.\n-- Be careful to use these in your production db. Consult the postgres manual or\n-- your DBA and give appropriate permissions.\n\n-- grant all privileges on all tables in the public schema. This can be customised:\n-- For example, if you only want to use GraphQL regular queries and not mutations,\n-- then you can set: GRANT SELECT ON ALL TABLES...\nGRANT USAGE ON SCHEMA public TO hasurauser;\nGRANT ALL ON ALL TABLES IN SCHEMA public TO hasurauser;\nGRANT ALL ON ALL SEQUENCES IN SCHEMA public TO hasurauser;\nGRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO hasurauser;\n\n-- Similarly add these for other schemas as well, if you have any.\n-- GRANT USAGE ON SCHEMA <schema-name> TO hasurauser;\n-- GRANT ALL ON ALL TABLES IN SCHEMA <schema-name> TO hasurauser;\n-- GRANT ALL ON ALL SEQUENCES IN SCHEMA <schema-name> TO hasurauser;\n-- GRANT ALL ON ALL FUNCTIONS IN SCHEMA <schema-name> TO hasurauser;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. A single role to manage")," ",(0,n.kt)("inlineCode",{parentName:"p"},"user database")," ",(0,n.kt)("strong",{parentName:"p"},"and"),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"metadata database")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- We will create a separate user to grant permissions on hasura-specific  \n-- schemas and information_schema and pg_catalog.\n-- These permissions/grants are required for Hasura to work properly.\n\n-- create a separate user for to manage metadata database\nCREATE USER hasurauser WITH PASSWORD 'hasurauser';\n\n-- create the schemas required by the hasura system\n-- NOTE: If you are starting from scratch: drop the below schemas first, if they exist.\nCREATE SCHEMA IF NOT EXISTS hdb_catalog;\n\n-- make the user an owner of system schemas\nALTER SCHEMA hdb_catalog OWNER TO hasurauser;\n\n-- grant select permissions on information_schema and pg_catalog. This is\n-- required for hasura to query the list of available tables.\n-- NOTE: these permissions are usually available by default to all users via PUBLIC grant\nGRANT SELECT ON ALL TABLES IN SCHEMA information_schema TO hasurauser;\nGRANT SELECT ON ALL TABLES IN SCHEMA pg_catalog TO hasurauser;\n\n-- create a separate user for to manage user database\nCREATE USER hasurauser WITH PASSWORD 'hasurauser';\n\n-- create pgcrypto extension, required for UUID\nCREATE EXTENSION IF NOT EXISTS pgcrypto;\n\n-- The below permissions are optional. This is dependent on what access to your\n-- tables/schemas you want give to hasura. If you want expose the public\n-- schema for GraphQL query then give permissions on public schema to the\n-- hasura user.\n-- Be careful to use these in your production db. Consult the postgres manual or\n-- your DBA and give appropriate permissions.\n\n-- grant all privileges on all tables in the public schema. This can be customised:\n-- For example, if you only want to use GraphQL regular queries and not mutations,\n-- then you can set: GRANT SELECT ON ALL TABLES...\nGRANT USAGE ON SCHEMA public TO hasurauser;\nGRANT ALL ON ALL TABLES IN SCHEMA public TO hasurauser;\nGRANT ALL ON ALL SEQUENCES IN SCHEMA public TO hasurauser;\nGRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO hasurauser;\n\n-- Similarly add these for other schemas as well, if you have any.\n-- GRANT USAGE ON SCHEMA <schema-name> TO hasurauser;\n-- GRANT ALL ON ALL TABLES IN SCHEMA <schema-name> TO hasurauser;\n-- GRANT ALL ON ALL SEQUENCES IN SCHEMA <schema-name> TO hasurauser;\n-- GRANT ALL ON ALL FUNCTIONS IN SCHEMA <schema-name> TO hasurauser;\n")),(0,n.kt)("h3",{id:"notes-for-managed-databases-aws-rds-gcp-cloud-sql-etc"},"Notes for managed databases (AWS RDS, GCP Cloud SQL, etc.)"),(0,n.kt)("p",null,'Hasura works out of the box with the default superuser, usually called\n"postgres", created by most managed cloud database providers.'),(0,n.kt)("p",null,"On some cloud providers, like ",(0,n.kt)("strong",{parentName:"p"},"Google Cloud SQL"),", if you are creating\na new user and giving the ",(0,n.kt)("a",{parentName:"p",href:"#postgres-permissions"},"above")," privileges,\nthen you may notice that the following commands may throw\nwarnings/errors:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'postgres=> ALTER SCHEMA hdb_catalog OWNER TO hasurauser;\nERROR:  must be member of role "hasurauser"\n')),(0,n.kt)("p",null,"This happens because the superuser created by the cloud provider\nsometimes has different permissions. To fix this, you can run the\nfollowing command first:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'-- assuming "postgres" is the superuser that you are running the commands with.\npostgres=> GRANT hasurauser to postgres;\nGRANT\npostgres=> ALTER SCHEMA hdb_catalog OWNER TO hasurauser;\n')),(0,n.kt)("p",null,"You may also notice the following commands throw warnings/errors:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'postgres=> GRANT SELECT ON ALL TABLES IN SCHEMA information_schema TO hasurauser;\nWARNING:  no privileges were granted for "sql_packages"\nWARNING:  no privileges were granted for "sql_features"\nWARNING:  no privileges were granted for "sql_implementation_info"\nERROR:  permission denied for table sql_parts\n\npostgres=> GRANT SELECT ON ALL TABLES IN SCHEMA pg_catalog TO hasurauser;\nERROR:  permission denied for table pg_statistic\n')),(0,n.kt)("p",null,"You can ",(0,n.kt)("strong",{parentName:"p"},"ignore")," these warnings/errors or skip granting these\npermission as usually all users have relevant access to\n",(0,n.kt)("inlineCode",{parentName:"p"},"information_schema")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"pg_catalog")," schemas by default (see keyword\n",(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/sql-grant.html"},"PUBLIC"),")."),(0,n.kt)("h2",{id:"pgcrypto-in-pg-search-path"},(0,n.kt)("strong",{parentName:"h2"},"pgcrypto")," in PG search path"),(0,n.kt)("p",null,"Hasura GraphQL engine needs the ",(0,n.kt)("inlineCode",{parentName:"p"},"pgcrypto")," Postgres extension to\nfunction."),(0,n.kt)("p",null,"During initialization, Hasura GraphQL engine tries to install the\n",(0,n.kt)("inlineCode",{parentName:"p"},"pgcrypto")," extension in the ",(0,n.kt)("inlineCode",{parentName:"p"},"public")," schema, if it is not already\ninstalled."),(0,n.kt)("p",null,"It needs to be ensured that ",(0,n.kt)("inlineCode",{parentName:"p"},"pgcrypto")," is installed in a schema which is\nin the Postgres ",(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/ddl-schemas.html#DDL-SCHEMAS-PATH"},"search path"),"\nfor the Postgres user/role that Hasura connects with."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"pgcrypto")," is installed in a schema that is not in the search path,\nthe schema can be added to the search path by executing one of the\nfollowing SQL commands depending on your setup:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- set search path to include schemas for the entire database\nALTER DATABASE <database_name> SET search_path TO schema1,schema2;\n\n-- OR --\n\n-- set search path to include schemas for a particular role\nALTER ROLE <hasura_role> SET search_path TO schema1,schema2;\n")))}m.isMDXComponent=!0}}]);