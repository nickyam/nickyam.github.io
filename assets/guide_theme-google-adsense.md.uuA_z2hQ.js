import{_ as s,o as a,c as e,R as n}from"./chunks/framework.qZlbAeHE.js";const _=JSON.parse('{"title":"添加 Google Adsense 代码","description":"","frontmatter":{},"headers":[],"relativePath":"guide/theme-google-adsense.md","filePath":"guide/theme-google-adsense.md","lastUpdated":null}'),t={name:"guide/theme-google-adsense.md"},o=n(`<h1 id="添加-google-adsense-代码" tabindex="-1">添加 Google Adsense 代码 <a class="header-anchor" href="#添加-google-adsense-代码" aria-label="Permalink to &quot;添加 Google Adsense 代码&quot;">​</a></h1><p>本处不详细介绍如何注册 Google Adsense账号，默认已经获得该账号批准。</p><p>具体申请网址：<a href="https://adsense.google.com/start/" target="_blank" rel="noreferrer">https://adsense.google.com/start/</a></p><h2 id="添加ads-txt" tabindex="-1">添加ads.txt <a class="header-anchor" href="#添加ads-txt" aria-label="Permalink to &quot;添加ads.txt&quot;">​</a></h2><p>在 <code>/docs</code> 文件夹下新建 <code>public</code> 文件夹（如果你已经设置，可以忽略）。</p><p>把 Google Adsense 上获取的 ads.txt 放入 <code>public</code>文件夹。 这个文件夹里可放图片、文档等内容，所以也包括 <code>txt</code> 文档。</p><h2 id="添加-script" tabindex="-1">添加 script <a class="header-anchor" href="#添加-script" aria-label="Permalink to &quot;添加 script&quot;">​</a></h2><p>在 <code>.vitepress/config.mts</code> 中添加</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default defineConfig({</span></span>
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
<span class="line"><span>})</span></span></code></pre></div><p>其中：需要置换成你的个人信息的是 <code>YOURCLIENTID</code>。</p><p>在 Adsense 首页点击进入广告页面，然后点击获取代码即可获得ID。</p>`,11),p=[o];function l(d,c,i,r,g,h){return a(),e("div",null,p)}const m=s(t,[["render",l]]);export{_ as __pageData,m as default};
