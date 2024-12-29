import{_ as i,c as a,a2 as n,o as e}from"./chunks/framework.CW1_h_Kn.js";const c=JSON.parse('{"title":"Cron","description":"","frontmatter":{},"headers":[],"relativePath":"guide/cron.md","filePath":"guide/cron.md"}'),t={name:"guide/cron.md"};function l(o,s,p,h,r,k){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="cron" tabindex="-1">Cron <a class="header-anchor" href="#cron" aria-label="Permalink to &quot;Cron&quot;">​</a></h1><p>Workload for recurring tasks.</p><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>With this workload you recurring tasks for your application.</p><p>A <a href="./../reference/api/main/classes/Cron.html"><code>Cron</code></a> workload is initialized with a unique id and the following options:</p><ul><li><p><a href="./../reference/api/main/interfaces/CronOptions.html#properties">schedule</a> in <a href="https://man7.org/linux/man-pages/man5/crontab.5.html" target="_blank" rel="noreferrer">unix-cron</a> format to specify it should run.</p></li><li><p><a href="./../reference/api/main/interfaces/CronOptions.html#properties">run</a> function with the code that will be executed.</p></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Cron } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/workloads&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> reports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Cron</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;reports&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  schedule: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;* * * * *&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  work</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reports;</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title"><strong>Important</strong></p><p>Export only one <code>Cron</code> workload per file as the <code>default</code> export.</p></div><h2 id="development-environment" tabindex="-1">Development environment <a class="header-anchor" href="#development-environment" aria-label="Permalink to &quot;Development environment&quot;">​</a></h2><p>You can trigger a <code>Cron</code> workload on demand with the <a href="./../reference/cli/trigger-cron.html">trigger cron</a> CLI command.</p><h2 id="test-environment" tabindex="-1">Test environment <a class="header-anchor" href="#test-environment" aria-label="Permalink to &quot;Test environment&quot;">​</a></h2><p>This workload does not have a test environment.</p><p>However, you can test the work function of a <code>Cron</code> in your test suite.</p><h2 id="production-environments" tabindex="-1">Production environments <a class="header-anchor" href="#production-environments" aria-label="Permalink to &quot;Production environments&quot;">​</a></h2><p>You can deploy the <code>Cron</code> workload to production environments using the <a href="#build-output">build ouput</a></p><h2 id="build-output" tabindex="-1">Build output <a class="header-anchor" href="#build-output" aria-label="Permalink to &quot;Build output&quot;">​</a></h2><h3 id="compiled-code" tabindex="-1">Compiled code <a class="header-anchor" href="#compiled-code" aria-label="Permalink to &quot;Compiled code&quot;">​</a></h3><p>Each <code>Cron</code> will be compiled to a single CommonJS file with bundled dependencies which can be run through a generated runner script.</p><p>The exported code will be located in <code>.workloads/cron/\${cron-file-name}</code>.</p><h4 id="compilation-notes" tabindex="-1">Compilation notes <a class="header-anchor" href="#compilation-notes" aria-label="Permalink to &quot;Compilation notes&quot;">​</a></h4><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>To provide portability across hosting providers, the output code does not include any scheduler.</p><p>Also, the compiler doesn&#39;t perform any type checking.</p></div><ul><li>Code is tree shaken.</li><li>A source map is included.</li></ul><h3 id="dockerfile" tabindex="-1">Dockerfile <a class="header-anchor" href="#dockerfile" aria-label="Permalink to &quot;Dockerfile&quot;">​</a></h3><p>A Dockerfile for the <code>Cron</code> workload is also provided.</p><p>Once the image is built, running the container will run the <code>Cron</code> workload.</p><h3 id="manifest-json" tabindex="-1">manifest.json <a class="header-anchor" href="#manifest-json" aria-label="Permalink to &quot;manifest.json&quot;">​</a></h3><p>The <code>manifest.json</code> includes a <code>crons</code> key with an array of the <code>Cron</code> workloads. Each entry has:</p><ul><li>The ID.</li><li>The entryPoint file name.</li><li>The path to the compiled code.</li><li>The schedule.</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group--aP5J" id="tab-XNHvEjD" checked><label data-title="Cron Workload" for="tab-XNHvEjD">Cron Workload</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;crons&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;reports&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;entryPoint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;index.mjs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;crons/reports&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;schedule&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;* * * * *&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Cron } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/workloads&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> reports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Cron</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;reports&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  schedule: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;* * * * *&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  work</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reports;</span></span></code></pre></div>`,31)]))}const E=i(t,[["render",l]]);export{c as __pageData,E as default};
