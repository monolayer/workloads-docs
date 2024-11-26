import{_ as s,c as a,a0 as e,o as t}from"./chunks/framework.NA_paqMA.js";const c=JSON.parse('{"title":"Mailer","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mailer.md","filePath":"guide/mailer.md"}'),n={name:"guide/mailer.md"};function l(o,i,r,h,p,d){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="mailer" tabindex="-1">Mailer <a class="header-anchor" href="#mailer" aria-label="Permalink to &quot;Mailer&quot;">​</a></h1><p>Workload for SMTP mailers.</p><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>With this workload you define SMPT mailers.</p><p>A <a href="./../reference/api/main/classes/Mailer.html"><code>Mailer</code></a> workload is initialized with a stable ID a <a href="./../reference/api/main/interfaces/DatabaseOptions.html#properties">client constructor function</a> providing the client of your choice.</p><p>See <a href="#examples">examples</a>.</p><p>Each workload has an environment variable name associated with it to hold the connection string for the SMTP server named after the workloads&#39; <a href="./../reference/api/main/classes/Mailer.html#properties"><code>id</code></a>. For example:</p><ul><li>id <code>transactional</code>: <code>MONO_MAILER_TRANSACTIONAL_URL</code>.</li></ul><h2 id="client" tabindex="-1">Client <a class="header-anchor" href="#client" aria-label="Permalink to &quot;Client&quot;">​</a></h2><p>You can use <strong>any</strong> SMTP client with the workload, although <a href="https://nodemailer.com" target="_blank" rel="noreferrer">Nodemailer</a> is recommended.</p><p>The client is defined by passing a constructor function when initializing the workload.</p><p>You access the client with the <a href="./../reference/api/main/classes/Mailer.html#client">client</a> accessor. This accessor will call this client constructor function with the workload&#39;s environment variable name and memoize its result.</p><p>See <a href="#examples">examples</a>.</p><h2 id="development-environment" tabindex="-1">Development environment <a class="header-anchor" href="#development-environment" aria-label="Permalink to &quot;Development environment&quot;">​</a></h2><p>A docker container for the dev environment is launched with <a href="./../reference/cli/start-dev.html"><code>npx workloads start dev</code></a></p><p>You can stop it with <a href="./../reference/cli/stop-dev.html"><code>npx workloads stop dev</code></a>.</p><p>After the container is started:</p><ul><li>The environment variable with the connection string for the workload&#39;s Docker container will be written to <code>.env</code>.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Check your framework documentation to see it the <code>.env</code> file is loaded automatically.</p></div><h2 id="test-environment" tabindex="-1">Test environment <a class="header-anchor" href="#test-environment" aria-label="Permalink to &quot;Test environment&quot;">​</a></h2><p>A docker container for the test environment is launched with <a href="./../reference/cli/start-test.html"><code>npx workloads start test</code></a></p><p>You can stop it with <a href="./../reference/cli/stop-test.html"><code>npx workloads stop test</code></a>.</p><ul><li>The environment variable with the connection string for the workload&#39;s Docker container will be written to <code>.env.test</code>.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Check your framework documentation to see it the <code>.env.test</code> file is loaded automatically.</p></div><h2 id="production-environments" tabindex="-1">Production environments <a class="header-anchor" href="#production-environments" aria-label="Permalink to &quot;Production environments&quot;">​</a></h2><p>The workload assumes that a SMTP server will be avaliable.</p><p>At deployment time, make sure to configure the environment variable name for the workload with the connection string for the SMPT server.</p><h2 id="build-output" tabindex="-1">Build output <a class="header-anchor" href="#build-output" aria-label="Permalink to &quot;Build output&quot;">​</a></h2><p>The build output for the workload is located in the <code>mailer</code> of the <code>manifest.json</code> and it includes:</p><ul><li>The mailer ID.</li><li>The environment variable name.</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-kJPyj" id="tab-wdZ2nn7" checked><label data-title="Mailer Workload" for="tab-wdZ2nn7">Mailer Workload</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;mailer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;transactional&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;connectionStringEnvVar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MONO_MAILER_TRANSACTIONAL_DATABASE_URL&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Mailer } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/workloads&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nodemailer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;nodemailer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mailer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Mailer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;transactional&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">envVarName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  nodemailer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createTransport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.env[envVarName]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Sending an email</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mailer.client.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendMail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  from: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sender@example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  to: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;recipient@example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subject: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Message in a bottle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I hope this message gets there!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,33)]))}const E=s(n,[["render",l]]);export{c as __pageData,E as default};
