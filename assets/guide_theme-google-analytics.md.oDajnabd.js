import{_ as a,o as s,c as n,R as e}from"./chunks/framework.qZlbAeHE.js";const m=JSON.parse('{"title":"添加 Google Analytics 统计代码","description":"","frontmatter":{},"headers":[],"relativePath":"guide/theme-google-analytics.md","filePath":"guide/theme-google-analytics.md","lastUpdated":null}'),p={name:"guide/theme-google-analytics.md"},t=e(`<h1 id="添加-google-analytics-统计代码" tabindex="-1">添加 Google Analytics 统计代码 <a class="header-anchor" href="#添加-google-analytics-统计代码" aria-label="Permalink to &quot;添加 Google Analytics 统计代码&quot;">​</a></h1><p>本处默认你已注册 Google Analytics账号。</p><p>注册网址：<a href="https://analytics.google.com/" target="_blank" rel="noreferrer">https://analytics.google.com/</a></p><h2 id="添加-script" tabindex="-1">添加 script <a class="header-anchor" href="#添加-script" aria-label="Permalink to &quot;添加 script&quot;">​</a></h2><p>在 <code>.vitepress/config.mts</code> 中添加</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  head: [</span></span>
<span class="line"><span>    //Google Analytics</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>      &#39;script&#39;,</span></span>
<span class="line"><span>      { async: &#39;&#39;, src: &#39;https://www.googletagmanager.com/gtag/js?id=YOURID&#39; } </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>      &#39;script&#39;,</span></span>
<span class="line"><span>      {},</span></span>
<span class="line"><span>      \`window.dataLayer = window.dataLayer || [];</span></span>
<span class="line"><span>      function gtag(){dataLayer.push(arguments);}</span></span>
<span class="line"><span>      gtag(&#39;js&#39;, new Date());</span></span>
<span class="line"><span>      gtag(&#39;config&#39;, &#39;YOURID&#39;);\` </span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>其中：需要置换成你的个人信息的是 <code>YOURID</code>。</p>`,7),l=[t];function o(i,c,r,g,d,h){return s(),n("div",null,l)}const u=a(p,[["render",o]]);export{m as __pageData,u as default};
