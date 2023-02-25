import{_ as i,M as p,p as l,q as d,N as a,V as e,a1 as o,Q as n,t as s}from"./framework-e921cdd2.js";const r={},u=o('<h1 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用" aria-hidden="true">#</a> 安装使用</h1><p>此组件库基于 <code>ant-design-vue</code> 二次开发。使用前请查看<a href="../changelog">更新日志</a></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>',3),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"add"),s(" ant-design-vue "),n("span",{class:"token parameter variable"},"-S"),s(`
`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" smore-design "),n("span",{class:"token parameter variable"},"-S"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(" smore-design "),n("span",{class:"token parameter variable"},"-S"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(` smore-design
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),h=o(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> SmoreDesign <span class="token keyword">from</span> <span class="token string">&#39;smore-design&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/dist/antd.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;smore-design/style.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>SmoreDesign<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(g,f){const t=p("CodeGroupItem"),c=p("CodeGroup");return l(),d("div",null,[u,a(c,null,{default:e(()=>[a(t,{title:"npm"},{default:e(()=>[k]),_:1}),a(t,{title:"yarn"},{default:e(()=>[m]),_:1}),a(t,{title:"pnpm"},{default:e(()=>[v]),_:1})]),_:1}),h])}const y=i(r,[["render",b],["__file","installation.html.vue"]]);export{y as default};