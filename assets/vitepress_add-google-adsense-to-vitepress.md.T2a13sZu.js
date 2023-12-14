import{_ as s,o as e,c as a,R as n}from"./chunks/framework.DO9dm5bS.js";const _=JSON.parse('{"title":"如何为 vitepress 网站添加 google adsense 代码","description":"","frontmatter":{"title":"如何为 vitepress 网站添加 google adsense 代码","date":"2023-12-12 12:12:00 (UTC +08:00)","lang":"zh-cn","outline":"deep"},"headers":[],"relativePath":"vitepress/add-google-adsense-to-vitepress.md","filePath":"vitepress/add-google-adsense-to-vitepress.md","lastUpdated":null}'),p={name:"vitepress/add-google-adsense-to-vitepress.md"},t=n(`<h1 id="如何为-vitepress-网站添加-google-adsense-代码" tabindex="-1">如何为 vitepress 网站添加 google adsense 代码 <a class="header-anchor" href="#如何为-vitepress-网站添加-google-adsense-代码" aria-label="Permalink to &quot;如何为 vitepress 网站添加 google adsense 代码&quot;">​</a></h1><p>本文默认你已注册 Google Adsense账号，并获得批准。</p><h2 id="添加ads-txt" tabindex="-1">添加ads.txt <a class="header-anchor" href="#添加ads-txt" aria-label="Permalink to &quot;添加ads.txt&quot;">​</a></h2><p>在 <code>/docs</code> 文件夹下新建 <code>public</code> 文件夹（如果你已经设置，可以忽略）。</p><p>把 Google Adsense 上获取的 ads.txt 放入 <code>public</code>文件夹。 这个文件夹里可放图片、文档等内容，所以也包括 <code>txt</code> 文档。</p><h2 id="添加-script" tabindex="-1">添加 script <a class="header-anchor" href="#添加-script" aria-label="Permalink to &quot;添加 script&quot;">​</a></h2><p>在 <code>.vitepress/config.mts</code> 中添加</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  head: [</span></span>
<span class="line"><span>    //Google AdSense</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>      &quot;script&quot;,</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;data-ad-client&quot;: &quot;YOURCLIENTID like ca-pub-3798***&quot;, </span></span>
<span class="line"><span>        async: &#39;&#39;,</span></span>
<span class="line"><span>        src: &quot;https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js&quot;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>其中：需要置换成你的个人信息的是 <code>YOURCLIENTID</code>。</p><p>在 Adsense 首页点击进入广告页面，然后点击获取代码即可获得ID。</p>`,10),o=[t];function d(l,i,c,r,g,h){return e(),a("div",null,o)}const v=s(p,[["render",d]]);export{_ as __pageData,v as default};
