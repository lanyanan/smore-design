import{_ as n,p as s,q as a,a1 as p}from"./framework-e921cdd2.js";const t={},e=p(`<h2 id="更改主题" tabindex="-1"><a class="header-anchor" href="#更改主题" aria-hidden="true">#</a> 更改主题</h2><p>:::demo</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./src/App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router/index&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> SmoreDesign<span class="token punctuation">,</span> <span class="token punctuation">{</span> updateTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/dist/antd.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 更新主题</span>
<span class="token function">updateTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">boderColor1</span><span class="token operator">:</span> <span class="token string">&#39;#f0f&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fontColor1</span><span class="token operator">:</span> <span class="token string">&#39;#f00&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>SmoreDesign<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","update-theme.html.vue"]]);export{r as default};
