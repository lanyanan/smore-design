<template><div><h1 id="国际化" tabindex="-1"><a class="header-anchor" href="#国际化" aria-hidden="true">#</a> 国际化</h1>
<p>Element 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。以英文为例，在 main.js 中：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 完整引入 Element</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> ElementUI <span class="token keyword">from</span> <span class="token string">'element-ui'</span>
<span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">'element-ui/lib/locale/lang/en'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementUI<span class="token punctuation">,</span> <span class="token punctuation">{</span> locale <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 按需引入 Element</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-ui'</span>
<span class="token keyword">import</span> lang <span class="token keyword">from</span> <span class="token string">'element-ui/lib/locale/lang/en'</span>
<span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">'element-ui/lib/locale'</span>

<span class="token comment">// 设置语言</span>
locale<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span>

<span class="token comment">// 引入组件</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Button<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Button<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Select<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用其它语言，默认情况下中文语言包依旧是被引入的，可以使用 webpack 的 NormalModuleReplacementPlugin 替换默认语言包。</p>
<p><strong>webpack.config.js</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>NormalModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">'element-ui/lib/locale/lang/en'</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="兼容-vue-i18n-5-x" tabindex="-1"><a class="header-anchor" href="#兼容-vue-i18n-5-x" aria-hidden="true">#</a> 兼容 <code v-pre>vue-i18n@5.x</code></h2>
<p>Element 兼容 <a href="https://github.com/kazupon/vue-i18n" target="_blank" rel="noopener noreferrer">vue-i18n@5.x<ExternalLinkIcon/></a>，搭配使用能更方便地实现多语言切换。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> VueI18n <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>
<span class="token keyword">import</span> Element <span class="token keyword">from</span> <span class="token string">'element-ui'</span>
<span class="token keyword">import</span> enLocale <span class="token keyword">from</span> <span class="token string">'element-ui/lib/locale/lang/en'</span>
<span class="token keyword">import</span> zhLocale <span class="token keyword">from</span> <span class="token string">'element-ui/lib/locale/lang/zh-CN'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueI18n<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Element<span class="token punctuation">)</span>

Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>lang <span class="token operator">=</span> <span class="token string">'zh-cn'</span>
Vue<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'zh-cn'</span><span class="token punctuation">,</span> zhLocale<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'en'</span><span class="token punctuation">,</span> enLocale<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="兼容其他-i18n-插件" tabindex="-1"><a class="header-anchor" href="#兼容其他-i18n-插件" aria-hidden="true">#</a> 兼容其他 i18n 插件</h2>
<p>如果不使用 <code v-pre>vue-i18n@5.x</code>，而是用其他的 i18n 插件，Element 将无法兼容，但是可以自定义 Element 的 i18n 的处理方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Element <span class="token keyword">from</span> <span class="token string">'element-ui'</span>
<span class="token keyword">import</span> enLocale <span class="token keyword">from</span> <span class="token string">'element-ui/lib/locale/lang/en'</span>
<span class="token keyword">import</span> zhLocale <span class="token keyword">from</span> <span class="token string">'element-ui/lib/locale/lang/zh-CN'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Element<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">i18n</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="兼容-vue-i18n-6-x" tabindex="-1"><a class="header-anchor" href="#兼容-vue-i18n-6-x" aria-hidden="true">#</a> 兼容 <code v-pre>vue-i18n@6.x</code></h2>
<p>默认不支持 6.x 的 <code v-pre>vue-i18n</code>，你需要手动处理。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Element <span class="token keyword">from</span> <span class="token string">'element-ui'</span>
<span class="token keyword">import</span> VueI18n <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>
<span class="token keyword">import</span> enLocale <span class="token keyword">from</span> <span class="token string">'element-ui/lib/locale/lang/en'</span>
<span class="token keyword">import</span> zhLocale <span class="token keyword">from</span> <span class="token string">'element-ui/lib/locale/lang/zh-CN'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueI18n<span class="token punctuation">)</span>

<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>enLocale <span class="token comment">// 或者用 Object.assign({ message: 'hello' }, enLocale)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zh</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'你好'</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>zhLocale <span class="token comment">// 或者用 Object.assign({ message: '你好' }, zhLocale)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Create VueI18n instance with options</span>
<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueI18n</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token string">'en'</span><span class="token punctuation">,</span> <span class="token comment">// set locale</span>
  messages<span class="token punctuation">,</span> <span class="token comment">// set locale messages</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Element<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">i18n</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=></span> i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> i18n <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按需加载里定制-i18n" tabindex="-1"><a class="header-anchor" href="#按需加载里定制-i18n" aria-hidden="true">#</a> 按需加载里定制 i18n</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> DatePicker <span class="token keyword">from</span> <span class="token string">'element/lib/date-picker'</span>
<span class="token keyword">import</span> VueI18n <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>

<span class="token keyword">import</span> enLocale <span class="token keyword">from</span> <span class="token string">'element-ui/lib/locale/lang/en'</span>
<span class="token keyword">import</span> zhLocale <span class="token keyword">from</span> <span class="token string">'element-ui/lib/locale/lang/zh-CN'</span>
<span class="token keyword">import</span> ElementLocale <span class="token keyword">from</span> <span class="token string">'element-ui/lib/locale'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueI18n<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DatePicker<span class="token punctuation">)</span>

<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>enLocale
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zh</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'你好'</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>zhLocale
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Create VueI18n instance with options</span>
<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueI18n</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token string">'en'</span><span class="token punctuation">,</span> <span class="token comment">// set locale</span>
  messages<span class="token punctuation">,</span> <span class="token comment">// set locale messages</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

ElementLocale<span class="token punctuation">.</span><span class="token function">i18n</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=></span> i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过-cdn-的方式加载语言文件" tabindex="-1"><a class="header-anchor" href="#通过-cdn-的方式加载语言文件" aria-hidden="true">#</a> 通过 CDN 的方式加载语言文件</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//unpkg.com/vue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//unpkg.com/element-ui<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//unpkg.com/element-ui/lib/umd/locale/en.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token constant">ELEMENT</span><span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token constant">ELEMENT</span><span class="token punctuation">.</span>lang<span class="token punctuation">.</span>en<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搭配 <code v-pre>vue-i18n</code> 使用</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//unpkg.com/vue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//unpkg.com/vue-i18n/dist/vue-i18n.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//unpkg.com/element-ui<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//unpkg.com/element-ui/lib/umd/locale/zh-CN.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//unpkg.com/element-ui/lib/umd/locale/en.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  Vue<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'en'</span><span class="token punctuation">,</span> <span class="token constant">ELEMENT</span><span class="token punctuation">.</span>lang<span class="token punctuation">.</span>en<span class="token punctuation">)</span>
  Vue<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'zh-cn'</span><span class="token punctuation">,</span> <span class="token constant">ELEMENT</span><span class="token punctuation">.</span>lang<span class="token punctuation">.</span>zhCN<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前 Element 内置了以下语言：</p>
<ul class="language-list">
  <li>简体中文（zh-CN）</li>
  <li>英语（en）</li>
  <li>德语（de）</li>
  <li>葡萄牙语（pt）</li>
  <li>西班牙语（es）</li>
  <li>丹麦语（da）</li>
  <li>法语（fr）</li>
  <li>挪威语（nb-NO）</li>
  <li>繁体中文（zh-TW）</li>
  <li>意大利语（it）</li>
  <li>韩语（ko）</li>
  <li>日语（ja）</li>
  <li>荷兰语（nl）</li>
  <li>越南语（vi）</li>
  <li>俄语（ru-RU）</li>
  <li>土耳其语（tr-TR）</li>
  <li>巴西葡萄牙语（pt-br）</li>
  <li>波斯语（fa）</li>
  <li>泰语（th）</li>
  <li>印尼语（id）</li>
  <li>保加利亚语（bg）</li>
  <li>波兰语（pl）</li>
  <li>芬兰语（fi）</li>
  <li>瑞典语（sv-SE）</li>
  <li>希腊语（el）</li>
  <li>斯洛伐克语（sk）</li>
  <li>加泰罗尼亚语（ca）</li>
  <li>捷克语（cs-CZ）</li>
  <li>乌克兰语（ua）</li>
  <li>土库曼语（tk）</li>
  <li>泰米尔语（ta）</li>
  <li>拉脱维亚语（lv）</li>
  <li>南非荷兰语（af-ZA）</li>
  <li>爱沙尼亚语（ee）</li>
  <li>斯洛文尼亚语（sl）</li>
  <li>阿拉伯语（ar）</li>
  <li>希伯来语（he）</li>
  <li>立陶宛语（lt）</li>
  <li>蒙古语（mn）</li>
  <li>哈萨克斯坦语（kz）</li>
  <li>匈牙利语（hu）</li>
  <li>罗马尼亚语（ro）</li>
  <li>库尔德语（ku）</li>
  <li>维吾尔语（ug-CN）</li>
  <li>高棉语（km）</li>
  <li>塞尔维亚语（sr）</li>
  <li>巴斯克语（eu）</li>
  <li>吉尔吉斯语（kg）</li>
  <li>亚美尼亚语 (hy)</li>
  <li>克罗地亚 (hr)</li>
  <li>世界语 (eo)</li>
</ul>
<p>如果你需要使用其他的语言，欢迎贡献 PR：只需在 <a href="https://github.com/ElemeFE/element/tree/dev/src/locale/lang" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a> 添加一个语言配置文件即可。</p>
</div></template>


