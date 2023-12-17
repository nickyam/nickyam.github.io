import{_ as s,o as a,c as n,R as e}from"./chunks/framework.DO9dm5bS.js";const u=JSON.parse('{"title":"如何为 vitepress 网站添加 google analytics 代码","description":"","frontmatter":{"title":"如何为 vitepress 网站添加 google analytics 代码","date":"2023-12-12 12:13:00 (UTC +08:00)","lastUpdated":"最近更新时间","lang":"zh-cn","outline":"deep"},"headers":[],"relativePath":"vitepress/add-google-Analytics-to-vitepress.md","filePath":"vitepress/add-google-Analytics-to-vitepress.md","lastUpdated":null}'),p={name:"vitepress/add-google-Analytics-to-vitepress.md"},t=e(`<h1 id="如何为-vitepress-网站添加-google-analytics-代码" tabindex="-1">如何为 vitepress 网站添加 google analytics 代码 <a class="header-anchor" href="#如何为-vitepress-网站添加-google-analytics-代码" aria-label="Permalink to &quot;如何为 vitepress 网站添加 google analytics 代码&quot;">​</a></h1><hr><p>本文默认你已注册 Google Analytics账号。</p><h2 id="添加-script" tabindex="-1">添加 script <a class="header-anchor" href="#添加-script" aria-label="Permalink to &quot;添加 script&quot;">​</a></h2><p>在 <code>.vitepress/config.mts</code> 中添加</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default defineConfig({</span></span>
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
<span class="line"><span>})</span></span></code></pre></div><p>其中：需要置换成你的个人信息的是 <code>YOURID</code>。</p>`,7),l=[t];function i(o,c,r,d,g,h){return a(),n("div",null,l)}const v=s(p,[["render",i]]);export{u as __pageData,v as default};
