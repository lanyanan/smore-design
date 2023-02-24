import{_ as c,M as i,p as l,q as d,N as a,V as e,Q as n,t as s,a1 as p}from"./framework-e921cdd2.js";const r={},u=n("h2",{id:"🛠-安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🛠-安装","aria-hidden":"true"},"#"),s(" 🛠 安装")],-1),m=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"add"),s(" ant-design-vue "),n("span",{class:"token parameter variable"},"-S"),s(`
`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"add"),s(" smore-design "),n("span",{class:"token parameter variable"},"-S"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` ant-design-vue
`),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` smore-design
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=p(`<h2 id="🚀-使用" tabindex="-1"><a class="header-anchor" href="#🚀-使用" aria-hidden="true">#</a> 🚀 使用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> AntV <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> SmoreDesign <span class="token keyword">from</span> <span class="token string">&#39;smore-design&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/lib/theme-chalk/index.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;smore-design/lib/css/index.css&#39;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>AntV<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>SmoreDesign<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>smore-design</code> 是基于 ant-design-vue 二次封装的组件库，使用前需要先安装 ant-design-vue 组件库，提供了自定义换肤、自定义组件前缀、丰富的业务组件等功能</p></div>`,3);function h(g,b){const t=i("CodeGroupItem"),o=i("CodeGroup");return l(),d("div",null,[u,a(o,null,{default:e(()=>[a(t,{title:"npm"},{default:e(()=>[m]),_:1}),a(t,{title:"yarn"},{default:e(()=>[k]),_:1})]),_:1}),v])}const f=c(r,[["render",h],["__file","index.html.vue"]]);export{f as default};