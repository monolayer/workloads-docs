import{_ as d,c as e,a2 as o,o as r}from"./chunks/framework.CW1_h_Kn.js";const b=JSON.parse('{"title":"Variable: manifestJsonSchema","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/introspection/variables/manifestJsonSchema.md","filePath":"reference/api/introspection/variables/manifestJsonSchema.md"}'),c={name:"reference/api/introspection/variables/manifestJsonSchema.md"};function s(a,t,i,n,p,f){return r(),e("div",null,t[0]||(t[0]=[o('<p><a href="./../../modules.html">workloads</a> / <a href="./../">introspection</a> / manifestJsonSchema</p><h1 id="variable-manifestjsonschema" tabindex="-1">Variable: manifestJsonSchema <a class="header-anchor" href="#variable-manifestjsonschema" aria-label="Permalink to &quot;Variable: manifestJsonSchema&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> manifestJsonSchema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Default value</th></tr></thead><tbody><tr><td><code>$defs</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.BucketInfo</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.BucketInfo.properties</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.BucketInfo.properties.name</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.BucketInfo.properties.name.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.BucketInfo.required</code></td><td><code>string</code>[]</td><td>-</td></tr><tr><td><code>$defs.BucketInfo.type</code></td><td><code>string</code></td><td>&quot;object&quot;</td></tr><tr><td><code>$defs.CronInfo</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.CronInfo.properties</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.CronInfo.properties.entryPoint</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.CronInfo.properties.entryPoint.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.CronInfo.properties.id</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.CronInfo.properties.id.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.CronInfo.properties.path</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.CronInfo.properties.path.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.CronInfo.properties.schedule</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.CronInfo.properties.schedule.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.CronInfo.required</code></td><td><code>string</code>[]</td><td>-</td></tr><tr><td><code>$defs.CronInfo.type</code></td><td><code>string</code></td><td>&quot;object&quot;</td></tr><tr><td><code>$defs.Database</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.Database.properties</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.Database.properties.connectionStringEnvVar</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.Database.properties.connectionStringEnvVar.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.Database.properties.name</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.Database.properties.name.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.Database.properties.serverId</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.Database.properties.serverId.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.Database.required</code></td><td><code>string</code>[]</td><td>-</td></tr><tr><td><code>$defs.Database.type</code></td><td><code>string</code></td><td>&quot;object&quot;</td></tr><tr><td><code>$defs.DatabaseWorkloadInfo</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.DatabaseWorkloadInfo.properties</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.DatabaseWorkloadInfo.properties.databases</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.DatabaseWorkloadInfo.properties.databases.items</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.DatabaseWorkloadInfo.properties.databases.items.$ref</code></td><td><code>string</code></td><td>&quot;#/$defs/Database&quot;</td></tr><tr><td><code>$defs.DatabaseWorkloadInfo.properties.databases.type</code></td><td><code>string</code></td><td>&quot;array&quot;</td></tr><tr><td><code>$defs.DatabaseWorkloadInfo.properties.id</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.DatabaseWorkloadInfo.properties.id.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.DatabaseWorkloadInfo.required</code></td><td><code>string</code>[]</td><td>-</td></tr><tr><td><code>$defs.DatabaseWorkloadInfo.type</code></td><td><code>string</code></td><td>&quot;object&quot;</td></tr><tr><td><code>$defs.TaskInfo</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.TaskInfo.properties</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.TaskInfo.properties.entryPoint</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.TaskInfo.properties.entryPoint.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.TaskInfo.properties.id</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.TaskInfo.properties.id.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.TaskInfo.properties.path</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.TaskInfo.properties.path.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.TaskInfo.required</code></td><td><code>string</code>[]</td><td>-</td></tr><tr><td><code>$defs.TaskInfo.type</code></td><td><code>string</code></td><td>&quot;object&quot;</td></tr><tr><td><code>$defs.WorkloadInfo</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.WorkloadInfo.properties</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.WorkloadInfo.properties.connectionStringEnvVar</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.WorkloadInfo.properties.connectionStringEnvVar.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.WorkloadInfo.properties.id</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>$defs.WorkloadInfo.properties.id.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>$defs.WorkloadInfo.required</code></td><td><code>string</code>[]</td><td>-</td></tr><tr><td><code>$defs.WorkloadInfo.type</code></td><td><code>string</code></td><td>&quot;object&quot;</td></tr><tr><td><code>$id</code></td><td><code>string</code></td><td>&quot;workloads-build-manifest-schema-v1&quot;</td></tr><tr><td><code>$schema</code></td><td><code>string</code></td><td>&quot;<a href="https://json-schema.org/draft/2020-12/schema" target="_blank" rel="noreferrer">https://json-schema.org/draft/2020-12/schema</a>&quot;</td></tr><tr><td><code>optional</code></td><td><code>string</code>[]</td><td>-</td></tr><tr><td><code>properties</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.bucket</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.bucket.items</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.bucket.items.$ref</code></td><td><code>string</code></td><td>&quot;#/$defs/BucketInfo&quot;</td></tr><tr><td><code>properties.bucket.items.description</code></td><td><code>string</code></td><td>&quot;Array of Bucket&quot;</td></tr><tr><td><code>properties.bucket.type</code></td><td><code>string</code></td><td>&quot;array&quot;</td></tr><tr><td><code>properties.cron</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.cron.items</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.cron.items.$ref</code></td><td><code>string</code></td><td>&quot;#/$defs/CronInfo&quot;</td></tr><tr><td><code>properties.cron.items.description</code></td><td><code>string</code></td><td>&quot;Array of Cron&quot;</td></tr><tr><td><code>properties.cron.type</code></td><td><code>string</code></td><td>&quot;array&quot;</td></tr><tr><td><code>properties.elasticSearch</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.elasticSearch.items</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.elasticSearch.items.$ref</code></td><td><code>string</code></td><td>&quot;#/$defs/WorkloadInfo&quot;</td></tr><tr><td><code>properties.elasticSearch.type</code></td><td><code>string</code></td><td>&quot;array&quot;</td></tr><tr><td><code>properties.framework</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.framework.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>properties.mailer</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.mailer.items</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.mailer.items.$ref</code></td><td><code>string</code></td><td>&quot;#/$defs/WorkloadInfo&quot;</td></tr><tr><td><code>properties.mailer.items.description</code></td><td><code>string</code></td><td>&quot;Array of Mailer&quot;</td></tr><tr><td><code>properties.mailer.type</code></td><td><code>string</code></td><td>&quot;array&quot;</td></tr><tr><td><code>properties.mongoDb</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.mongoDb.items</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.mongoDb.items.$ref</code></td><td><code>string</code></td><td>&quot;#/$defs/DatabaseWorkloadInfo&quot;</td></tr><tr><td><code>properties.mongoDb.type</code></td><td><code>string</code></td><td>&quot;array&quot;</td></tr><tr><td><code>properties.mySqlDatabase</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.mySqlDatabase.items</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.mySqlDatabase.items.$ref</code></td><td><code>string</code></td><td>&quot;#/$defs/DatabaseWorkloadInfo&quot;</td></tr><tr><td><code>properties.mySqlDatabase.type</code></td><td><code>string</code></td><td>&quot;array&quot;</td></tr><tr><td><code>properties.postgresDatabase</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.postgresDatabase.items</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.postgresDatabase.items.$ref</code></td><td><code>string</code></td><td>&quot;#/$defs/DatabaseWorkloadInfo&quot;</td></tr><tr><td><code>properties.postgresDatabase.type</code></td><td><code>string</code></td><td>&quot;array&quot;</td></tr><tr><td><code>properties.redis</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.redis.items</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.redis.items.$ref</code></td><td><code>string</code></td><td>&quot;#/$defs/WorkloadInfo&quot;</td></tr><tr><td><code>properties.redis.type</code></td><td><code>string</code></td><td>&quot;array&quot;</td></tr><tr><td><code>properties.task</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.task.items</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.task.items.$ref</code></td><td><code>string</code></td><td>&quot;#/$defs/TaskInfo&quot;</td></tr><tr><td><code>properties.task.items.description</code></td><td><code>string</code></td><td>&quot;Array of Task&quot;</td></tr><tr><td><code>properties.task.type</code></td><td><code>string</code></td><td>&quot;array&quot;</td></tr><tr><td><code>properties.version</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>properties.version.description</code></td><td><code>string</code></td><td>&quot;The version of the schema. This must be &#39;1&#39; for version 1 of the schema.&quot;</td></tr><tr><td><code>properties.version.enum</code></td><td><code>string</code>[]</td><td>-</td></tr><tr><td><code>properties.version.type</code></td><td><code>string</code></td><td>&quot;string&quot;</td></tr><tr><td><code>required</code></td><td><code>string</code>[]</td><td>-</td></tr><tr><td><code>title</code></td><td><code>string</code></td><td>&quot;WorkloadsBuildManifest&quot;</td></tr><tr><td><code>type</code></td><td><code>string</code></td><td>&quot;object&quot;</td></tr></tbody></table>',5)]))}const q=d(c,[["render",s]]);export{b as __pageData,q as default};