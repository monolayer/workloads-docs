import{_ as i,c as a,a2 as e,o as n}from"./chunks/framework.CW1_h_Kn.js";const c=JSON.parse('{"title":"Task","description":"","frontmatter":{},"headers":[],"relativePath":"guide/task.md","filePath":"guide/task.md"}'),t={name:"guide/task.md"};function l(p,s,h,o,k,r){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="task" tabindex="-1">Task <a class="header-anchor" href="#task" aria-label="Permalink to &quot;Task&quot;">​</a></h1><p>Workload for tasks (an operation or a job) that can be executed asynchronously.</p><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>With this workload you define tasks for your application such as:</p><ul><li>Sending emails.</li><li>Dispating notifications.</li><li>Generating reports.</li></ul><p>Tasks can be either performed immediately, or enqueued (backed by <code>Redis</code> or <code>AWS SQS</code>).</p><p>A <a href="./../reference/api/main/classes/Task.html"><code>Task</code></a> is initialized with a unique name and function that to process the task and the following options:</p><ul><li><p><a href="./../reference/api/main/interfaces/TaskOptions.html#properties">onError</a>: function to handle errors.</p></li><li><p><a href="./../reference/api/main/interfaces/TaskOptions.html#properties">retry</a>: retry <a href="./../reference/api/main/interfaces/RetryOptions.html">options</a> for the task.</p></li></ul><p>You can provide a type parameter for the expected type to use when sending a task to be performed and processing it.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Task } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/workloads&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { mailer } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/mailer&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> confirmationEmail</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Task</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;{ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">email</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }&gt;(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;sendConfirmationEmail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({ taskId, data }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mailer.client.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendMail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      from: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sender@example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      to: data.email,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      subject: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Message in a bottle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I hope this message gets there!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    retry: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      times: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> confirmationEmail;</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title"><strong>Important</strong></p><p>Export only one <code>Task</code> workload per file as the <code>default</code> export.</p></div><p>Tasks can be either performed immediately with <a href="./../reference/api/main/classes/Task.html#performnow">performNow</a>, or enqueued with <a href="./../reference/api/main/classes/Task.html#performlater">performLater</a>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Perform a task immediately</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">confirmationEmail.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">performNow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ email: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text@example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Enqueue a task</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">confirmationEmail.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">performLater</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ email: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text@example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">confirmationEmail.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">performLater</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ email: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text@example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, delay: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="development-environment" tabindex="-1">Development environment <a class="header-anchor" href="#development-environment" aria-label="Permalink to &quot;Development environment&quot;">​</a></h2><p>Tasks are executed immediately.</p><h2 id="test-environment" tabindex="-1">Test environment <a class="header-anchor" href="#test-environment" aria-label="Permalink to &quot;Test environment&quot;">​</a></h2><p>Enqueued tasks with <code>performLater</code> will be collected.</p><p>You can inspect the collected tasks with the test_helper <code>enqueuedTasks</code></p><h2 id="production-environments" tabindex="-1">Production environments <a class="header-anchor" href="#production-environments" aria-label="Permalink to &quot;Production environments&quot;">​</a></h2><p>You can deploy the <code>Task</code> workload to production environments using the <a href="#build-output">build ouput</a>.</p><p>The build output provides:</p><ul><li>A bundled version of the task.</li><li>A Dockerfile to build a contanerized version of it.</li></ul><h2 id="build-output" tabindex="-1">Build output <a class="header-anchor" href="#build-output" aria-label="Permalink to &quot;Build output&quot;">​</a></h2><h3 id="compiled-code" tabindex="-1">Compiled code <a class="header-anchor" href="#compiled-code" aria-label="Permalink to &quot;Compiled code&quot;">​</a></h3><p>Each <code>Task</code> will be compiled to a single CommonJS file with bundled dependencies that can be run with the entrypoint script <code>ìndex.mjs</code>.</p><p>The exported code will be located in <code>.workloads/task/\${task-file-name}/dist</code>.</p><p>This entrypoint script expects an environment variable <code>MONO_TASK_MODE</code> to be either set to:</p><ul><li><p><code>bull</code>: for <code>Redis</code> backed queues.</p><p>You need to set the environment variable <code>MONO_TASK_REDIS_URL</code> with the connection string to the Redis server.</p></li><li><p><code>sqs</code>: for <code>AWS SQS</code> backed queues.</p><p>You need to set the environment variable <code>MONO_TASK_\${snakeCase(task.id).toUpperCase()}_SQS_QUEUE_URL</code> with the <code>SQS</code> queue URL.</p><p>Credentials for the client are picked up from the environment by the AWS SDK.</p></li></ul><div class="danger custom-block"><p class="custom-block-title">Important</p><p><code>SQS</code> backed tasks require their own queue.</p><p>In other words, you <strong>must not</strong> share the same <code>SQS</code> queue across tasks.</p></div><h4 id="compilation-notes" tabindex="-1">Compilation notes <a class="header-anchor" href="#compilation-notes" aria-label="Permalink to &quot;Compilation notes&quot;">​</a></h4><ul><li>Code is tree shaken.</li><li>Source maps are included.</li></ul><h3 id="dockerfile" tabindex="-1">Dockerfile <a class="header-anchor" href="#dockerfile" aria-label="Permalink to &quot;Dockerfile&quot;">​</a></h3><p>A Dockerfile for the <code>Task</code> workload is also provided.</p><p>Once the image is built, running the container will run the <code>Task</code> workload.</p><h3 id="manifest-json" tabindex="-1">manifest.json <a class="header-anchor" href="#manifest-json" aria-label="Permalink to &quot;manifest.json&quot;">​</a></h3><p>The <code>manifest.json</code> includes a <code>task</code> key with an array of the <code>Task</code> workloads. Each entry has:</p><ul><li>The ID.</li><li>The entryPoint file name.</li><li>The path to the build output.</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-fhNNh" id="tab-RmBfV__" checked><label data-title="Task Workload" for="tab-RmBfV__">Task Workload</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;task&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;reports&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;entryPoint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;index.mjs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tasks/reports&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div>`,38)]))}const E=i(t,[["render",l]]);export{c as __pageData,E as default};