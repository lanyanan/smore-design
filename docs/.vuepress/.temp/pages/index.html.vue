<template><div><h2 id="🛠-安装" tabindex="-1"><a class="header-anchor" href="#🛠-安装" aria-hidden="true">#</a> 🛠 安装</h2>
<CodeGroup>
<CodeGroupItem title="npm">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">add</span> ant-design-vue <span class="token parameter variable">-S</span>
<span class="token function">npm</span> <span class="token function">add</span> smore-design <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="yarn">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> ant-design-vue
<span class="token function">yarn</span> <span class="token function">add</span> smore-design
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="🚀-使用" tabindex="-1"><a class="header-anchor" href="#🚀-使用" aria-hidden="true">#</a> 🚀 使用</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> AntV <span class="token keyword">from</span> <span class="token string">'ant-design-vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> SmoreDesign <span class="token keyword">from</span> <span class="token string">'smore-design'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'ant-design-vue/lib/theme-chalk/index.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'smore-design/lib/css/index.css'</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>AntV<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>SmoreDesign<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code v-pre>smore-design</code> 是基于 ant-design-vue 二次封装的组件库，使用前需要先安装 ant-design-vue 组件库，提供了自定义换肤、自定义组件前缀、丰富的业务组件等功能</p>
</div>
</div></template>


