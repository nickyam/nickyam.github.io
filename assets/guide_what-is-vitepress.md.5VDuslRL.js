import{_ as e,o as a,c as s,R as r}from"./chunks/framework.DO9dm5bS.js";const V=JSON.parse('{"title":"VitePress是什么?","description":"","frontmatter":{},"headers":[],"relativePath":"guide/what-is-vitepress.md","filePath":"guide/what-is-vitepress.md","lastUpdated":null}'),t={name:"guide/what-is-vitepress.md"},i=r('<h1 id="vitepress是什么" tabindex="-1">VitePress是什么? <a class="header-anchor" href="#vitepress是什么" aria-label="Permalink to &quot;VitePress是什么?&quot;">​</a></h1><p>VitePress 是基于 <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a> 的 <a href="https://vuepress.vuejs.org/" target="_blank" rel="noreferrer">VuePress</a> 兄弟版。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>VitePress目前处于<code>alpha</code>状态。它适合使用开箱即用的文档，但是配置和主题化API仍然可能在小版本之间发生变化。</p></div><h2 id="动机" tabindex="-1">动机 <a class="header-anchor" href="#动机" aria-label="Permalink to &quot;动机&quot;">​</a></h2><p>我们喜欢 VuePress v1，但是它是基于Webpack构建的，对于一个只有几个页面的简单文档站点来说，启动开发服务器所花费的时间让人难以忍受。即使是HMR更新也可能需要数秒才能在浏览器中反映出来。</p><p>这是因为 VuePress v1 是一个基于 Webpack 的应用。即使只有两页，它也是一个完整的正在编译的 Webpack 项目（包括所有主题源文件）。当项目有很多页面时，将会变得更慢 —— 每个页面都必须先完全编译，然后才能显示内容！</p><p>顺便说一句，Vite 很好地解决了这些问题：几乎即时启动的服务器，按需编译 —— 只编译正在运行的页面以及闪电般的 HMR。另外，随着时间的推移，我在 VuePress v1 中注意到了一些额外的设计问题，但由于需要大量的重构，所以一直没有时间修复。</p><p>现在，有了 Vite 和 Vue 3，是时候重新思考“基于 Vue 的静态站点生成器”到底能做什么了。</p><h2 id="相对与-vuepress-v1-的改进" tabindex="-1">相对与 VuePress v1 的改进 <a class="header-anchor" href="#相对与-vuepress-v1-的改进" aria-label="Permalink to &quot;相对与 VuePress v1 的改进&quot;">​</a></h2><p>这是几点相对于 VuePress v1 的改进</p><h3 id="使用-vue-3" tabindex="-1">使用 Vue 3 <a class="header-anchor" href="#使用-vue-3" aria-label="Permalink to &quot;使用 Vue 3&quot;">​</a></h3><p>利用 Vue 3 改进的模板静态分析来尽可能地对静态内容进行字符串化。静态内容作为字符串文字而不是 JavaScript 渲染函数代码 - 因此 JS 解析成本要低得多，并且hydration(HTML添加交互的过程)也变得更快。</p><blockquote><p>Hydration 一般指的是给服务器 返回的 HTML 添加交互的过程，它是在浏览器中执行的将静态 HTML 页面转为动态页面的技术</p></blockquote><p>注意，你依然可以在 Markdown 使用Vue 组件，VitePress 在应用优化的同时编译器会自动进行静态/动态分离，所以无需考虑这个问题。</p><h3 id="使用-vite" tabindex="-1">使用 Vite <a class="header-anchor" href="#使用-vite" aria-label="Permalink to &quot;使用 Vite&quot;">​</a></h3><ul><li>更快的本地服务启动</li><li>更快的热更新</li><li>更快的打包（内部使用Rollup）</li></ul><h3 id="更小的页面体积" tabindex="-1">更小的页面体积 <a class="header-anchor" href="#更小的页面体积" aria-label="Permalink to &quot;更小的页面体积&quot;">​</a></h3><p>Vue3的tree-shaking + Rollup 代码拆分</p><ul><li>每个页面的每个请求不会发送元数据。 这将页面权重与页面总数分离。仅返回当前页面的元数据。客户端导航将同时获取新页面的组件和元数据。</li></ul><ul><li>不使用 vue-router，因为 VitePress 的需求非常简单和具体 - 使用简单的自定义router（200行以下代码）代替。</li></ul><h3 id="其他不同" tabindex="-1">其他不同 <a class="header-anchor" href="#其他不同" aria-label="Permalink to &quot;其他不同&quot;">​</a></h3><p>VitePress 更少的配置：VitePress 旨在减少当前 VuePress 的复杂性，并从其极简主义根源重新开始。</p><p>VitePress 面向未来：VitePress 仅针对支持原生 ES 模块导入的浏览器。 它鼓励使用原生 JavaScript 而不进行编译，并使用 CSS 变量进行主题化。</p><h2 id="这会成为未来的下一个-vuepress-吗" tabindex="-1">这会成为未来的下一个 vuepress 吗？ <a class="header-anchor" href="#这会成为未来的下一个-vuepress-吗" aria-label="Permalink to &quot;这会成为未来的下一个 vuepress 吗？&quot;">​</a></h2><p>我们已经有了 <a href="https://github.com/vuepress/vuepress-next" target="_blank" rel="noreferrer">vuepress-next</a>，这将是 VuePress 的下一个主要版本。 它还比 VuePress v1 做了很多改进，现在也支持 Vite。</p><p>VitePress 与当前的 VuePress 生态系统（主要是主题和插件）不兼容。 总体思路是，VitePress 将拥有一个更精简的主题 API（更偏向 JavaScript API 而不是文件布局约定）并且可能没有插件（可以在主题中完成所有定制）。</p><p>关于这个话题有一个 <a href="https://github.com/vuejs/vitepress/discussions/548" target="_blank" rel="noreferrer">正在进行的讨论</a>。有兴趣的话请留下你的想法！</p>',27),l=[i];function o(p,u,h,n,c,d){return a(),s("div",null,l)}const P=e(t,[["render",o]]);export{V as __pageData,P as default};
