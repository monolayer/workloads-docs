import{_ as i,c as e,a2 as a,o as t}from"./chunks/framework.CW1_h_Kn.js";const d=JSON.parse('{"title":"Bucket","description":"","frontmatter":{},"headers":[],"relativePath":"guide/bucket.md","filePath":"guide/bucket.md"}'),n={name:"guide/bucket.md"};function l(o,s,h,p,r,k){return t(),e("div",null,s[0]||(s[0]=[a(`<h1 id="bucket" tabindex="-1">Bucket <a class="header-anchor" href="#bucket" aria-label="Permalink to &quot;Bucket&quot;">​</a></h1><p>Workload for AWS S3 compatible storage.</p><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>With this workload you define AWS S3 compatible storages.</p><p>A <a href="./../reference/api/main/classes/Bucket.html"><code>Bucket</code></a> workload is initialized with a valid bucket name a <a href="./../reference/api/main/interfaces/DatabaseOptions.html#properties">client constructor function</a> providing the client of your choice.</p><p>See <a href="#examples">examples</a>.</p><p>Each workload has the <code>MONO_AWS_ENDPOINT_URL</code> environment variable name associated with it to hold the endpoint url to connect to development and test environments.</p><h2 id="client" tabindex="-1">Client <a class="header-anchor" href="#client" aria-label="Permalink to &quot;Client&quot;">​</a></h2><p>You can use <strong>any</strong> AWS S3 compatible client with the workload, although the <a href="https://aws.amazon.com/sdk-for-javascript/" target="_blank" rel="noreferrer">AWS SDK for Javascript</a> is recommended.</p><p>The client is defined by passing a constructor function when initializing the workload.</p><p>You access the client with the <a href="./../reference/api/main/classes/Bucket.html#client">client</a> accessor. This accessor will call this client constructor function with the workload&#39;s environment variable name and memoize its result.</p><p>See <a href="#examples">examples</a>.</p><h2 id="development-environment" tabindex="-1">Development environment <a class="header-anchor" href="#development-environment" aria-label="Permalink to &quot;Development environment&quot;">​</a></h2><p>A docker container for the dev environment is launched with <a href="./../reference/cli/start-dev.html"><code>npx workloads start dev</code></a></p><p>You can stop it with <a href="./../reference/cli/stop-dev.html"><code>npx workloads stop dev</code></a>.</p><p>After the container is started:</p><ul><li>The <code>MONO_AWS_ENDPOINT_URL</code> environment variable with the endpoint URL to the workload&#39;s Docker container will be written to <code>.env</code>.</li><li>The bucket will be created if it does not exist.</li></ul><p>See <a href="#examples">examples</a> on how to configure a client for development.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Check your framework documentation to see it the <code>.env</code> file is loaded automatically.</p></div><h2 id="test-environment" tabindex="-1">Test environment <a class="header-anchor" href="#test-environment" aria-label="Permalink to &quot;Test environment&quot;">​</a></h2><p>A docker container for the test environment is launched with <a href="./../reference/cli/start-test.html"><code>npx workloads start test</code></a></p><p>You can stop it with <a href="./../reference/cli/stop-test.html"><code>npx workloads stop test</code></a>.</p><ul><li>The <code>MONO_AWS_ENDPOINT_URL</code> environment variable with the endpoint URL to the workload&#39;s Docker container will be written to <code>.env</code>.</li><li>The bucket will be created if it does not exist.</li></ul><p>See <a href="#examples">examples</a> on how to configure a client for test.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Check your framework documentation to see it the <code>.env.test</code> file is loaded automatically.</p></div><h2 id="production-environments" tabindex="-1">Production environments <a class="header-anchor" href="#production-environments" aria-label="Permalink to &quot;Production environments&quot;">​</a></h2><p>The workload assumes that an AWS S3 compatible storage will be avaliable.</p><h2 id="build-output" tabindex="-1">Build output <a class="header-anchor" href="#build-output" aria-label="Permalink to &quot;Build output&quot;">​</a></h2><p>The build output for the workload is located in the <code>bucket</code> of the <code>manifest.json</code> and it includes:</p><ul><li>The bucket name.</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-D9gqA" id="tab-i3_W-I_" checked><label data-title="Bucket Workload" for="tab-i3_W-I_">Bucket Workload</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;bucket&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;images&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Bucket } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/workloads&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { S3Client } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@aws-sdk/client-s3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> imagesBucket</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Bucket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;workloads-images&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> S3Client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // Configure forcePathStyle and endpoint</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // when the dev or test container is running</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MONO_AWS_ENDPOINT_URL</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           forcePathStyle: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           endpoint: process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MONO_AWS_ENDPOINT_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       :</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // Other configuration options</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,33)]))}const u=i(n,[["render",l]]);export{d as __pageData,u as default};
