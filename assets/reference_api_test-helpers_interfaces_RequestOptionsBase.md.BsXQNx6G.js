import{_ as t,c as o,a0 as d,o as r}from"./chunks/framework.NA_paqMA.js";const p=JSON.parse('{"title":"Interface: RequestOptionsBase<ThrowOnError>","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/test-helpers/interfaces/RequestOptionsBase.md","filePath":"reference/api/test-helpers/interfaces/RequestOptionsBase.md"}'),c={name:"reference/api/test-helpers/interfaces/RequestOptionsBase.md"};function a(s,e,n,i,l,u){return r(),o("div",null,e[0]||(e[0]=[d('<p><a href="./../../modules.html">workloads</a> / <a href="./../">test-helpers</a> / RequestOptionsBase</p><h1 id="interface-requestoptionsbase-throwonerror" tabindex="-1">Interface: RequestOptionsBase&lt;ThrowOnError&gt; <a class="header-anchor" href="#interface-requestoptionsbase-throwonerror" aria-label="Permalink to &quot;Interface: RequestOptionsBase\\&lt;ThrowOnError\\&gt;&quot;">​</a></h1><h2 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><a href="./Config.html"><code>Config</code></a>&lt;<code>ThrowOnError</code>&gt;</li></ul><h2 id="type-parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h2><table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><p><code>ThrowOnError</code> <em>extends</em> <code>boolean</code></p></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>baseUrl?</code></td><td><code>string</code></td><td>Base URL for all requests made by this client. <strong>Default</strong> <code>&#39;&#39;</code></td></tr><tr><td><code>body?</code></td><td>| <code>null</code> | <code>number</code> | <code>unknown</code>[] | <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt; | <code>BodyInit</code> | <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;[]</td><td>Any body that you want to add to your request. <a href="https://developer.mozilla.org/docs/Web/API/fetch#body" target="_blank" rel="noreferrer">https://developer.mozilla.org/docs/Web/API/fetch#body</a></td></tr><tr><td><code>bodySerializer?</code></td><td><a href="./../type-aliases/BodySerializer.html"><code>BodySerializer</code></a></td><td>A function for serializing request body parameter. By default, JSON.stringify() will be used.</td></tr><tr><td><code>cache?</code></td><td><code>RequestCache</code></td><td>A string indicating how the request will interact with the browser&#39;s cache to set request&#39;s cache.</td></tr><tr><td><code>credentials?</code></td><td><code>RequestCredentials</code></td><td>A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request&#39;s credentials.</td></tr><tr><td><code>fetch?</code></td><td>(<code>request</code>: <code>Request</code>) =&gt; <code>Promise</code>&lt;<code>Response</code>&gt;</td><td>Fetch API implementation. You can use this option to provide a custom fetch instance. <strong>Default</strong> <code>globalThis.fetch</code></td></tr><tr><td><code>headers?</code></td><td><code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt; | <code>HeadersInit</code></td><td>An object containing any HTTP headers that you want to pre-populate your <code>Headers</code> object with. <a href="https://developer.mozilla.org/docs/Web/API/Headers/Headers#init" target="_blank" rel="noreferrer">See more</a></td></tr><tr><td><code>integrity?</code></td><td><code>string</code></td><td>A cryptographic hash of the resource to be fetched by request. Sets request&#39;s integrity.</td></tr><tr><td><code>keepalive?</code></td><td><code>boolean</code></td><td>A boolean to set request&#39;s keepalive.</td></tr><tr><td><code>method?</code></td><td>| <code>&quot;CONNECT&quot;</code> | <code>&quot;DELETE&quot;</code> | <code>&quot;GET&quot;</code> | <code>&quot;HEAD&quot;</code> | <code>&quot;OPTIONS&quot;</code> | <code>&quot;PATCH&quot;</code> | <code>&quot;POST&quot;</code> | <code>&quot;PUT&quot;</code> | <code>&quot;TRACE&quot;</code></td><td>The request method. <a href="https://developer.mozilla.org/docs/Web/API/fetch#method" target="_blank" rel="noreferrer">See more</a></td></tr><tr><td><code>mode?</code></td><td><code>RequestMode</code></td><td>A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request&#39;s mode.</td></tr><tr><td><code>parseAs?</code></td><td>| <code>&quot;stream&quot;</code> | <code>&quot;auto&quot;</code> | <code>&quot;arrayBuffer&quot;</code> | <code>&quot;blob&quot;</code> | <code>&quot;formData&quot;</code> | <code>&quot;json&quot;</code> | <code>&quot;text&quot;</code></td><td>Return the response data parsed in a specified format. By default, <code>auto</code> will infer the appropriate method from the <code>Content-Type</code> response header. You can override this behavior with any of the Body methods. Select <code>stream</code> if you don&#39;t want to parse response data at all. <strong>Default</strong> <code>&#39;auto&#39;</code></td></tr><tr><td><code>path?</code></td><td><code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</td><td>-</td></tr><tr><td><code>priority?</code></td><td><code>RequestPriority</code></td><td>-</td></tr><tr><td><code>query?</code></td><td><code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</td><td>-</td></tr><tr><td><code>querySerializer?</code></td><td><a href="./../type-aliases/QuerySerializer.html"><code>QuerySerializer</code></a> | <a href="./QuerySerializerOptions.html"><code>QuerySerializerOptions</code></a></td><td>A function for serializing request query parameters. By default, arrays will be exploded in form style, objects will be exploded in deepObject style, and reserved characters are percent-encoded. <a href="https://swagger.io/docs/specification/serialization/#query" target="_blank" rel="noreferrer">View examples</a></td></tr><tr><td><code>redirect?</code></td><td><code>RequestRedirect</code></td><td>A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request&#39;s redirect.</td></tr><tr><td><code>referrer?</code></td><td><code>string</code></td><td>A string whose value is a same-origin URL, &quot;about:client&quot;, or the empty string, to set request&#39;s referrer.</td></tr><tr><td><code>referrerPolicy?</code></td><td><code>ReferrerPolicy</code></td><td>A referrer policy to set request&#39;s referrerPolicy.</td></tr><tr><td><code>responseTransformer?</code></td><td>(<code>data</code>: <code>unknown</code>) =&gt; <code>Promise</code>&lt;<code>unknown</code>&gt;</td><td>A function for transforming response data before it&#39;s returned to the caller function. This is an ideal place to post-process server data, e.g. convert date ISO strings into native Date objects.</td></tr><tr><td><code>signal?</code></td><td><code>null</code> | <code>AbortSignal</code></td><td>An AbortSignal to set request&#39;s signal.</td></tr><tr><td><code>throwOnError?</code></td><td><code>ThrowOnError</code></td><td>Throw an error instead of returning it in the response? <strong>Default</strong> <code>false</code></td></tr><tr><td><code>url</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>window?</code></td><td><code>null</code></td><td>Can only be null. Used to disassociate request from any Window.</td></tr></tbody></table>',8)]))}const f=t(c,[["render",a]]);export{p as __pageData,f as default};
