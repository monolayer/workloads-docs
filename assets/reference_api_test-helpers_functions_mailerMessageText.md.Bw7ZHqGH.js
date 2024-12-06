import{_ as t,c as a,a2 as s,o as i}from"./chunks/framework.CW1_h_Kn.js";const k=JSON.parse('{"title":"Function: mailerMessageText()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/test-helpers/functions/mailerMessageText.md","filePath":"reference/api/test-helpers/functions/mailerMessageText.md"}'),r={name:"reference/api/test-helpers/functions/mailerMessageText.md"};function h(l,e,n,o,d,p){return i(),a("div",null,e[0]||(e[0]=[s('<p><a href="./../../modules.html">workloads</a> / <a href="./../">test-helpers</a> / mailerMessageText</p><h1 id="function-mailermessagetext" tabindex="-1">Function: mailerMessageText() <a class="header-anchor" href="#function-mailermessagetext" aria-label="Permalink to &quot;Function: mailerMessageText()&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mailerMessageText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ThrowOnError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mailer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RequestResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ThrowOnError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;</span></span></code></pre></div><p>Render message text part from a <a href="./../../main/classes/Mailer.html">Mailer</a> workload.</p><p>Renders just the message&#39;s text part which can be used for UI integration testing.</p><p>The ID can be set to <code>latest</code> to return the latest message.</p><h2 id="type-parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h2><table><thead><tr><th>Type Parameter</th><th>Default type</th></tr></thead><tbody><tr><td><p><code>C</code></p></td><td><p>‐</p></td></tr><tr><td><p><code>ThrowOnError</code> <em>extends</em> <code>boolean</code></p></td><td><p><code>false</code></p></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><p><code>mailer</code></p></td><td><p><a href="./../../main/classes/Mailer.html"><code>Mailer</code></a>&lt;<code>C</code>&gt;</p></td></tr><tr><td><p><code>options</code></p></td><td><p><code>Omit</code>&lt;<a href="./../interfaces/RequestOptionsBase.html"><code>RequestOptionsBase</code></a>&lt;<code>ThrowOnError</code>&gt;, <code>&quot;url&quot;</code>&gt; &amp; <code>object</code> &amp; <a href="./../type-aliases/GetMessageTextParamsData.html"><code>GetMessageTextParamsData</code></a></p></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Promise</code>&lt;<a href="./../type-aliases/RequestResult.html"><code>RequestResult</code></a>&lt;<code>string</code>, <code>string</code>, <code>ThrowOnError</code>&gt;&gt;</p>',12)]))}const m=t(r,[["render",h]]);export{k as __pageData,m as default};
