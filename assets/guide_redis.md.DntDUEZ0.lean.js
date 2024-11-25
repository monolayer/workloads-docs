import{_ as e,c as s,a0 as a,o as t}from"./chunks/framework.NA_paqMA.js";const k=JSON.parse('{"title":"Redis","description":"","frontmatter":{},"headers":[],"relativePath":"guide/redis.md","filePath":"guide/redis.md"}'),n={name:"guide/redis.md"};function l(o,i,h,r,p,d){return t(),s("div",null,i[0]||(i[0]=[a(`<h1 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-label="Permalink to &quot;Redis&quot;">​</a></h1><p>Workload for Redis API compatible key-value stores.</p><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>With this workload you define Redis key-value stores.</p><p>A <a href="./../reference/api/main/classes/Redis.html"><code>Redis</code></a> workload is initialized with a stable ID and a <a href="./../reference/api/main/interfaces/DatabaseOptions.html#properties">client constructor function</a> providing the client of your choice.</p><p>See <a href="#examples">examples</a>.</p><p>Each workload has an environment variable name associated with it to hold the connection string for the database named after the workloads&#39; <a href="./../reference/api/main/classes/Redis.html#properties"><code>id</code></a>. For example:</p><ul><li>id <code>documents</code>: <code>MONO_REDIS_DOCUMENTS_URL</code>.</li></ul><h2 id="client" tabindex="-1">Client <a class="header-anchor" href="#client" aria-label="Permalink to &quot;Client&quot;">​</a></h2><p>You can use <strong>any</strong> Redis client with the workload.</p><p>The client is defined by passing a constructor function when initializing the workload.</p><p>You access the client with the <a href="./../reference/api/main/classes/Redis.html#client">client</a> accessor. This accessor will call this client constructor function with the workload&#39;s environment variable name and memoize its result.</p><p>See <a href="#examples">examples</a>.</p><h2 id="development-environment" tabindex="-1">Development environment <a class="header-anchor" href="#development-environment" aria-label="Permalink to &quot;Development environment&quot;">​</a></h2><p>A docker container for the dev environment is launched with <a href="./../reference/cli/start-dev.html"><code>npx workloads start dev</code></a></p><p>You can stop it with <a href="./../reference/cli/stop-dev.html"><code>npx workloads stop dev</code></a>.</p><p>After the container is started:</p><ul><li>The environment variable with the connection string for the workload&#39;s Docker container will be written to <code>.env</code>.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Check your framework documentation to see it the <code>.env</code> file is loaded automatically.</p></div><h2 id="test-environment" tabindex="-1">Test environment <a class="header-anchor" href="#test-environment" aria-label="Permalink to &quot;Test environment&quot;">​</a></h2><p>A docker container for the test environment is launched with <a href="./../reference/cli/start-test.html"><code>npx workloads start test</code></a></p><p>You can stop it with <a href="./../reference/cli/stop-test.html"><code>npx workloads stop test</code></a>.</p><ul><li>The environment variable with the connection string for the workload&#39;s Docker container will be written to <code>.env.test</code>.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Check your framework documentation to see it the <code>.env.test</code> file is loaded automatically.</p></div><h2 id="production-environments" tabindex="-1">Production environments <a class="header-anchor" href="#production-environments" aria-label="Permalink to &quot;Production environments&quot;">​</a></h2><p>The workload assumes that a server compatible with the Redis API will be avaliable.</p><p>At deployment time, make sure to configure the environment variable name for the workload with the connection string for the Redis server.</p><h2 id="build-output" tabindex="-1">Build output <a class="header-anchor" href="#build-output" aria-label="Permalink to &quot;Build output&quot;">​</a></h2><p>The build output for the workload is located in the <code>redis</code> of the <code>manifest.json</code> and it includes:</p><ul><li>The ID.</li><li>The environment variable name.</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-S6vT7" id="tab-pYAt3Nc" checked><label data-title="Redis Workload" for="tab-pYAt3Nc">Redis Workload</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;redis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;products&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;connectionStringEnvVar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MONO_REDIS_PRODUCTS_DATABASE_URL&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Redis } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/workloads&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Redis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IORedis } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ioredis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cache</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Redis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cache&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">envVarName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IORedis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.env[envVarName]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,33)]))}const u=e(n,[["render",l]]);export{k as __pageData,u as default};
