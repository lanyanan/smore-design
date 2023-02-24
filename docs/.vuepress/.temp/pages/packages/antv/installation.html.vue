<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<h3 id="npm-安装" tabindex="-1"><a class="header-anchor" href="#npm-安装" aria-hidden="true">#</a> npm 安装</h3>
<p>推荐使用 npm 的方式安装，它能更好地和 <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack<ExternalLinkIcon/></a> 打包工具配合使用。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i element-ui <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h3>
<p>目前可以通过 <a href="https://unpkg.com/element-ui/" target="_blank" rel="noopener noreferrer">unpkg.com/element-ui<ExternalLinkIcon/></a> 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 引入样式 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/element-ui/lib/theme-chalk/index.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 引入组件库 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/element-ui/lib/index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg.com<ExternalLinkIcon/></a>。</p>
</div>
<h3 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello world</h3>
<p>通过 CDN 的方式我们可以很容易地使用 Element 写出一个 Hello world 页面。<a href="https://codepen.io/ziyoung/pen/rRKYpd" target="_blank" rel="noopener noreferrer">在线演示<ExternalLinkIcon/></a></p>
<iframe height="265" style="width: 100%;" scrolling="no" title="Element demo" src="//codepen.io/ziyoung/embed/rRKYpd/?height=265&theme-id=light&default-tab=html" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziyoung/pen/rRKYpd/'>Element demo</a> by hetech
  (<a href='https://codepen.io/ziyoung'>@ziyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<p>如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：<a href="/#/zh-CN/component/quickstart" target="_blank" rel="noopener noreferrer">快速上手<ExternalLinkIcon/></a>。</p>
</div></template>


