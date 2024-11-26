import{_ as s,c as a,a0 as e,o as t}from"./chunks/framework.NA_paqMA.js";const k=JSON.parse('{"title":"ElasticSearch","description":"","frontmatter":{},"headers":[],"relativePath":"guide/elastic-search.md","filePath":"guide/elastic-search.md"}'),n={name:"guide/elastic-search.md"};function l(o,i,h,r,p,c){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="elasticsearch" tabindex="-1">ElasticSearch <a class="header-anchor" href="#elasticsearch" aria-label="Permalink to &quot;ElasticSearch&quot;">​</a></h1><p>Workload for ElasticSearch search engines.</p><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>With this workload you define ElasticSearch search engines.</p><p>A <a href="./../reference/api/main/classes/ElasticSearch.html"><code>ElasticSearch</code></a> workload is initialized with a stable ID and a <a href="./../reference/api/main/interfaces/DatabaseOptions.html#properties">client constructor function</a> providing the client of your choice.</p><p>See <a href="#examples">examples</a>.</p><p>Each workload has an environment variable name associated with it to hold the connection string for the database named after the workloads&#39; <a href="./../reference/api/main/classes/Redis.html#properties"><code>id</code></a>. For example:</p><ul><li>id <code>documents</code>: <code>MONO_ELASTICSEARCH_DOCUMENTS_URL</code>.</li></ul><h2 id="client" tabindex="-1">Client <a class="header-anchor" href="#client" aria-label="Permalink to &quot;Client&quot;">​</a></h2><p>You can use <strong>any</strong> ElasticSearch client with the workload.</p><p>The client is defined by passing a constructor function when initializing the workload.</p><p>You access the client with the <a href="./../reference/api/main/classes/ElasticSearch.html#client">client</a> accessor. This accessor will call this client constructor function with the workload&#39;s environment variable name and memoize its result.</p><p>See <a href="#examples">examples</a>.</p><h2 id="development-environment" tabindex="-1">Development environment <a class="header-anchor" href="#development-environment" aria-label="Permalink to &quot;Development environment&quot;">​</a></h2><p>A docker container for the dev environment is launched with <a href="./../reference/cli/start-dev.html"><code>npx workloads start dev</code></a></p><p>You can stop it with <a href="./../reference/cli/stop-dev.html"><code>npx workloads stop dev</code></a>.</p><p>After the container is started:</p><ul><li>The environment variable with the connection string for the workload&#39;s Docker container will be written to <code>.env</code>.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Check your framework documentation to see it the <code>.env</code> file is loaded automatically.</p></div><h2 id="test-environment" tabindex="-1">Test environment <a class="header-anchor" href="#test-environment" aria-label="Permalink to &quot;Test environment&quot;">​</a></h2><p>A docker container for the test environment is launched with <a href="./../reference/cli/start-test.html"><code>npx workloads start test</code></a></p><p>You can stop it with <a href="./../reference/cli/stop-test.html"><code>npx workloads stop test</code></a>.</p><ul><li>The environment variable with the connection string for the workload&#39;s Docker container will be written to <code>.env.test</code>.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Check your framework documentation to see it the <code>.env.test</code> file is loaded automatically.</p></div><h2 id="production-environments" tabindex="-1">Production environments <a class="header-anchor" href="#production-environments" aria-label="Permalink to &quot;Production environments&quot;">​</a></h2><p>The workload assumes that an ElasticSearch server will be avaliable.</p><p>At deployment time, make sure to configure the environment variable name for the workload with the connection string for the ElasticSearch server.</p><h2 id="build-output" tabindex="-1">Build output <a class="header-anchor" href="#build-output" aria-label="Permalink to &quot;Build output&quot;">​</a></h2><p>The build output for the workload is located in the <code>elasticSearch</code> of the <code>manifest.json</code> and it includes:</p><ul><li>The ID.</li><li>The environment variable name.</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-U9jwq" id="tab-VCC3bwm" checked><label data-title="ElasticSearch Workload" for="tab-VCC3bwm">ElasticSearch Workload</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;elasticSearch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;products&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;connectionStringEnvVar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MONO_ELASTICSEARC_PRODUCTS_DATABASE_URL&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ElasticSearch } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/workloads&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Client } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@elastic/elasticsearch&#39;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> elastic</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ElasticSearch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;products&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">envVarName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // envVarName = MONO_ELASTIC_SEARCH_PRODUCTS_URL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    node: process.env[envVarName],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,33)]))}const E=s(n,[["render",l]]);export{k as __pageData,E as default};
