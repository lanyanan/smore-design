import{_ as t,M as c,p as o,q as i,Q as s,t as n,N as e,a1 as p}from"./framework-e921cdd2.js";const l={},u=p('<h1 id="组件库-sass-dart-知识" tabindex="-1"><a class="header-anchor" href="#组件库-sass-dart-知识" aria-hidden="true">#</a> 组件库 Sass(Dart) 知识</h1><h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><p>Sass 有三个版本 <code>Dart Sass</code>、<code>libsass</code> 和 <code>Ruby Sass</code>：</p><ul><li><code>Dart Sass</code>：用 <code>Dart</code> 语言写的 <code>sass</code> 实现，于2016年11月1日发布 alpha 版本，版本1.23.0之后完全支持模块化机制。</li><li><code>libSass</code> 也就是俗称的 <code>node-sass</code>，用 c/c++ 实现的 <code>sass</code> 版本，使用广泛，其中 <code>node-sass</code> 是绑定了 <code>libsass</code>的 <code>nodejs</code> 库，可以极快的将 <code>.scss</code> 文件编译为 <code>.css</code> 文件，安装过程很慢，官方也不推荐再使用了。</li><li><code>Ruby Sass</code> 是最初的 <code>Sass</code> 实现，但是2019年3月26日被停止了，以后也不会再支持，使用者需要迁移到别的实现上</li></ul>',4),d={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},r=s("code",null,"Libsass",-1),k=s("code",null,"Node Sass",-1),v=s("code",null,"SassC",-1),m=s("code",null,"Dart Sass",-1),b=p('<ul><li>不再建议将 <code>LibSass</code> 用于新的 <code>Sass</code> 项目， 改为使用 <code>Dart Sass</code>。</li><li>建议现有的 <code>LibSass</code> 用户制定计划，最终迁移到 <code>Dart Sass</code>，并且所有 <code>Sass</code> 库都制定计划，最终放弃对 <code>LibSass</code> 的支持。</li><li>不再计划向 <code>LibSass</code> 添加任何新功能，包括与新 <code>CSS</code> 功能的兼容性。</li><li><code>LibSass</code> 和 <code>Node Sass</code> 将在尽力而为的基础上无限期维护，包括修复主要的错误和安全问题以及与最新的 Node 版本兼容。</li></ul><h3 id="为什么使用-dart-sass" tabindex="-1"><a class="header-anchor" href="#为什么使用-dart-sass" aria-hidden="true">#</a> 为什么使用 Dart Sass</h3>',2),g=s("code",null,"npm install sass -D",-1),h={href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,"node-sass",-1),x={href:"https://element-plus.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://sass-lang.com/documentation/values/maps",target:"_blank",rel:"noopener noreferrer"},$={href:"https://sass-lang.com/documentation/at-rules/use",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"@import",-1),S=p(`<p>所以，为了获得 <code>sass</code> 提供更多更强大的功能，强烈推荐使用 <code>dart sass</code></p><h3 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用" aria-hidden="true">#</a> 安装使用</h3><p>如果之前安装了 <code>node-sass</code>，可以先卸载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> uninstall node-sass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 dart-sass</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> sass sass-loader@^10.1.1 <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意：之前安装 <code>sass-loader</code> 版本是 <code>13.0+</code>，版本过高导致报错，提示 <code>TypeError: this.getOptions is not a function</code>，退回 <code>10.+</code> 可以运行成功</p></blockquote><p>如果项目之前用到 <code>/deep/</code> 需要替换为 <code>::v-deep</code>，全局搜索 <code>/deep/</code> , 将项目里的 <code>/deep/</code> 替换为 <code>::v-deep</code></p><h3 id="scss变量" tabindex="-1"><a class="header-anchor" href="#scss变量" aria-hidden="true">#</a> SCSS变量</h3><p><strong>scss</strong> 变量命名规则</p><ul><li>以美元符号 <code>$</code> 开头，后面跟变量名；且必须先定义，后使用</li><li>变量名不能以<strong>数字开头</strong>，可包含字母、数字、下划线、横线（连接符）</li><li>通过连接符 <code>-</code> 与下划线 <code>_</code> 定义的同名变量为<strong>同一变量</strong></li><li>写法同 <code>css</code>，即变量名和值之间用冒号 <code>:</code> 分隔</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>#F00<span class="token punctuation">;</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #F00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>SCSS</code> 变量有两种作用域：<strong>全局变量域</strong>和<strong>局部变量域</strong></p><ul><li>全局变量：声明在最外层的变量，可在任何地方使用；或在局部变量添加 <code>!global</code> 声明</li><li>局部变量：嵌套规则内定义的变量只能在嵌套规则内使用</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">$height</span></span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token property"><span class="token variable">$font-size</span></span><span class="token punctuation">:</span> 16px !global<span class="token punctuation">;</span> <span class="token comment">// 全局变量，外部可以使用</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$font-size</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$height</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.footer </span><span class="token punctuation">{</span>
    <span class="token comment">/**$font-size使用!global 申明成全局变量了*/</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$font-size</span><span class="token punctuation">;</span> 
    <span class="token comment">/**
    * Error: Undefined variable. 
    * $height是.container下的局部变量，无法在.footer下面编译
    */</span>
    <span class="token property">height</span><span class="token punctuation">:</span><span class="token variable">$height</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译 css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.footer</span> <span class="token punctuation">{</span>
     <span class="token comment">/**$font-size使用!global 申明成全局变量了*/</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>CSS 变量</strong></p>`,20),_={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"noopener noreferrer"},z=s("code",null,"element-plus",-1),C=p(`<p><code>css 变量</code> 声明一个自定义属性，属性名需要以两个减号（<code>--</code>）开始，定义变量 <code>--变量名:变量值</code> 例如： <code>--main-color: black;</code>，由 <code>var()</code> 函数来获取值，例如 <code>color: var(--main-color)</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">:root </span><span class="token punctuation">{</span>
    <span class="token property">--main-color</span><span class="token punctuation">:</span> #F00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--main-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>:root</code> 是在 HTML 文档的任何地方都可以访问到它</p><p><strong>注意：</strong> 自定义属性名是大小写敏感的，<code>--my-color</code> 和 <code>--My-color</code> 会被认为是两个不同的自定义属性</p><p>通过 <code>JavaScript</code> 获取或者修改 CSS 变量和操作普通 CSS 属性是一样</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取一个 Dom 节点上的 CSS 变量</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;--my-var&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取任意 Dom 节点上的 CSS 变量</span>
<span class="token function">getComputedStyle</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;--my-var&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 修改一个 Dom 节点上的 CSS 变量</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;--my-var&quot;</span><span class="token punctuation">,</span> jsVar <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scss-数据类型" tabindex="-1"><a class="header-anchor" href="#scss-数据类型" aria-hidden="true">#</a> SCSS 数据类型</h3><ul><li>数字：<code>1rem</code>、<code>2vh</code>、<code>13</code>、 <code>10px</code>；</li><li>字符串：分有引号字符串与无引号字符串，<code>&quot;foo&quot;</code>、 <code>&#39;bar&#39;</code>、<code>baz</code>；</li><li>颜色：<code>blue</code>, <code>#04a3f9</code>, <code>rgba(255,0,0,0.5)</code>；</li><li>布尔型：<code>true</code> 和 <code>false</code>；</li><li>空值：<code>null</code> 是其类型的唯一值。表示缺少值，通常由函数返回以表示缺少结果；</li><li>数组 <code>(list)</code>：用空格或逗号作分隔符，<code>1.5em 1em 0</code>； <code>2em,Helvetica,Arial,sans-serif</code>；</li><li><code>maps</code>：相当于 <code>JavaScript</code> 的 <code>object</code> 对象，格式括号包裹键值对，逗号隔开 (key1: value1, key2: value2)</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 数字</span>
<span class="token property"><span class="token variable">$layer-index</span></span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-width</span></span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>

<span class="token comment">// 字符串</span>
<span class="token property"><span class="token variable">$font-weight</span></span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>

<span class="token comment">// 数组</span>
<span class="token property"><span class="token variable">$font-base-family</span></span><span class="token punctuation">:</span> <span class="token string">&quot;Open Sans&quot;</span><span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> Sans-Serif<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$block-base-padding</span></span><span class="token punctuation">:</span> 6px 10px 6px 10px<span class="token punctuation">;</span>

<span class="token comment">// 颜色</span>
<span class="token property"><span class="token variable">$top-bg-color</span></span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 147<span class="token punctuation">,</span> 29<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 布尔值</span>
<span class="token property"><span class="token variable">$blank-mode</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// null</span>
<span class="token property"><span class="token variable">$var</span></span><span class="token punctuation">:</span> <span class="token null keyword">null</span><span class="token punctuation">;</span>

<span class="token comment">// maps 值</span>
<span class="token property"><span class="token variable">$fonts</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">serif</span><span class="token punctuation">:</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span>
  <span class="token property">monospace</span><span class="token punctuation">:</span> <span class="token string">&quot;Consolas&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token comment">// 内部变量</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token variable">$font-base-family</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$font-size</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">$block-base-padding</span><span class="token punctuation">;</span>

  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$blank-mode</span> </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">type-of</span><span class="token punctuation">(</span><span class="token variable">$var</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token variable">$var</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$top-bg-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 如果列表中包含空值，则生成的CSS中将忽略该空值。</span>
<span class="token selector">.wrap </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 18px <span class="token variable">$font-weight</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$fonts</span><span class="token punctuation">,</span> <span class="token string">&quot;sans&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> !default</h3><p>可以在变量的结尾添加 <code>!default</code> 来给变量设置默认值，有点类似 <code>Javascript</code> 的逻辑运算符 <code>let content=value || &quot;default value&quot;</code> 。注意，变量是 <code>null</code> 时将视为未被 <code>!default</code> 赋值</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 如果$content之前没使用 !default，没办法赋值覆盖</span>
<span class="token property"><span class="token variable">$content</span></span><span class="token punctuation">:</span> <span class="token string">&quot;First content&quot;</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$content</span></span><span class="token punctuation">:</span> <span class="token string">&quot;Second content&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token selector">#main </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$content</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;First content&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插值语句" tabindex="-1"><a class="header-anchor" href="#插值语句" aria-hidden="true">#</a> 插值语句</h3><p>通过 <code>#{}</code> 插值语句可以在选择器、属性名、注释中使用变量，使用 <code>#{}</code> 插值语句将变量包裹起来即可，和 <code>js</code> 中的 <code>模板字符串</code> 很像</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-size</span></span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$line-height</span></span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$class-name</span></span><span class="token punctuation">:</span> danger<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$attr</span></span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$author</span></span><span class="token punctuation">:</span> <span class="token string">&quot;福大命大&quot;</span><span class="token punctuation">;</span>

<span class="token selector">p </span><span class="token punctuation">{</span>
    <span class="token property">font</span><span class="token punctuation">:</span> <span class="token variable">#{$font-size}</span>/<span class="token variable">#{$line-height}</span> Arial Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
* 这是文件的说明部分
* @author: #{$author}
*/</span>

<span class="token selector">a.<span class="token variable">#{$class-name}</span> </span><span class="token punctuation">{</span>
    <span class="token property">border-<span class="token variable">#{$attr}</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">font</span><span class="token punctuation">:</span> 12px/30px Arial Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
* 这是文件的说明部分
* @author: 福大命大
*/</span>
<span class="token selector">a.danger</span> <span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件语句-if" tabindex="-1"><a class="header-anchor" href="#条件语句-if" aria-hidden="true">#</a> 条件语句 @if</h3><p><code>@if</code> 语法和 <code>js</code> 类似，基本格式是 <code>@if...</code>、<code>@else if...</code>、<code>@else</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme</span></span><span class="token punctuation">:</span>3<span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$theme</span> &gt;= 5 </span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@else</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为 css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> @for 循环</h3><p><code>for</code> 在条件范围内重复操作，这个指令包含两种格式：</p><ul><li>@for $var from <code>start</code> through <code>end</code></li><li>@for $var from <code>start</code> to <code>end</code></li></ul><p>两者区别在于 <code>through</code> 与 <code>to</code> 的含义</p><ul><li>使用 <code>through</code> 时，条件范围包含 <code>start</code> 与 <code>end</code> 的值；</li><li>使用 <code>to</code> 时条件范围只包含 <code>start</code> 的值不包含 <code>end</code> 的值；</li></ul><p><code>$var</code> 可以是任何变量，比如 <code>$i</code>，<code>start</code> 和 <code>end</code> 必须是整数值。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> <span class="token selector">1 to 3 </span><span class="token punctuation">{</span>
  #loading <span class="token property">span</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span><span class="token variable">#{$i}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 20 <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">-</span> 1<span class="token punctuation">)</span> <span class="token operator">+</span> px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为 css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#loading span:nth-child(1)</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#loading span:nth-child(2)</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果把 <code>to</code> 换成 <code>through</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#loading span:nth-child(1)</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#loading span:nth-child(2)</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#loading span:nth-child(3)</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="each-循环" tabindex="-1"><a class="header-anchor" href="#each-循环" aria-hidden="true">#</a> @each 循环</h3><p><code>@each</code> 指令的格式是 <code>@each $var in $list</code> , <code>$var</code> 可以是任何变量名，比如 <code>$length</code> 或者 <code>$name</code>，而 <code>$list</code> 是一连串的值，也就是值列表</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color-list</span></span><span class="token punctuation">:</span>red green blue turquoise darkmagenta<span class="token punctuation">;</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$color</span> in <span class="token variable">$color-list</span> </span><span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">$index</span></span><span class="token punctuation">:</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token variable">$color-list</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    .p#<span class="token punctuation">{</span><span class="token variable">$index</span> <span class="token operator">-</span> 1<span class="token punctuation">}</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为 css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.p0</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p1</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p2</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p3</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> turquoise<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p4</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> darkmagenta<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> @while 循环</h3><p><code>@while</code> 指令循环输出直到表达式返回结果为 <code>false</code>。这样可以实现比 <code>@for</code> 更复杂的循环。比如，可以借此生成栅格化布局</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$column</span></span><span class="token punctuation">:</span>12<span class="token punctuation">;</span>
<span class="token keyword">@while</span> <span class="token selector"><span class="token variable">$column</span>&gt;0 </span><span class="token punctuation">{</span>
   <span class="token selector">.col-sm-<span class="token variable">#{$column}</span> </span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$column</span> <span class="token operator">/</span> 12 <span class="token operator">*</span> 100%<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
    <span class="token property"><span class="token variable">$column</span></span><span class="token punctuation">:</span><span class="token variable">$column</span> <span class="token operator">-</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为 css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.col-sm-12</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col-sm-11</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 91.6666666667%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col-sm-10</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 83.3333333333%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col-sm-9</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 75%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col-sm-8</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 66.6666666667%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col-sm-7</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 58.3333333333%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col-sm-6</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col-sm-5</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 41.6666666667%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col-sm-4</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 33.3333333333%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col-sm-3</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col-sm-2</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 16.6666666667%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.col-sm-1</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 8.3333333333%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> @import</h3><p>scss 拓展了 <code>@import</code> 的功能，允许其导入 scss或 sass文件。被导入的文件将合并编译到同一个 css 文件中，被导入的文件中所包含的变量或者混合指令 (mixin) 都可以在导入的文件中使用。</p><p>common.scss</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>index.scss</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;common.scss&quot;</span><span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为 css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下情况下，<code>@import</code> 仅作为普通的 <code>css</code> 语句，不会导入 <code>scss</code> 文件：</p><ul><li>文件拓展名是 <code>.css</code> ；</li><li>文件名以 <code>http://</code> 开头；</li><li>文件名是 <code>url()</code> ；</li><li><code>@import</code> 包含媒体查询。</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;common.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token url">url</span><span class="token punctuation">(</span>common<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;http://xxx.com/xxx&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&#39;landscape&#39;</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span>landscape<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>scss</code> 允许同时导入多个文件，例如同时导入 <code>a.scss</code> 与 <code>b.scss</code> 两个文件，不用再单独写个 <code>import</code> 引入</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="partials" tabindex="-1"><a class="header-anchor" href="#partials" aria-hidden="true">#</a> @Partials</h3><p>如果需要导入 <code>scss</code> 或者 <code>sass</code> 文件，但又不希望将其编译为 <code>css</code>，只需要在文件名前添加下划线，这样会告诉 <code>scss</code> 不要编译这些文件。 注意：</p><ul><li>导入语句中不需要添加<strong>下划线</strong>；</li><li>不可以同时存在添加下划线与未添加下划线的同名文件，添加下划线的文件将会被忽略</li></ul><p>_common.scss</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>index.scss</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;common.scss&quot;</span><span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>_common.scss</code> 文件不会编译成 <code>_common.css</code> 文件，<code>Partials</code> 主要是用来定义公共样式的，专门用于被其他的 <code>scss</code> 文件 <code>import</code> 进行使用的</p><h3 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> @mixin</h3><p>混合指令（Mixin）用于定义<strong>可重复使用</strong>的样式。混合指令可以包含所有的css规则，绝大部分 scss 规则，甚至可以通过参数功能引入变量，输出多样化的样式；</p><p><code>@mixin</code> 和 <code>@include</code> 配合使用</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 定义一个区块基本的样式</span>
<span class="token keyword">@mixin</span> <span class="token selector">block </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 96%<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 2%<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px #f6f6f6 solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用混入 </span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token selector">.block </span><span class="token punctuation">{</span>
        <span class="token keyword">@include</span> block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为 css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container .block</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 96%<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 2%<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px #f6f6f6 solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@mixin</code> 可以定义多个参数和默认值</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 定义块元素内边距，参数指定默认值</span>
<span class="token keyword">@mixin</span> <span class="token function">block-padding</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$top</span></span><span class="token punctuation">:</span>0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$right</span></span><span class="token punctuation">:</span>0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$bottom</span></span><span class="token punctuation">:</span>0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$left</span></span><span class="token punctuation">:</span>0<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token variable">$top</span><span class="token punctuation">;</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token variable">$right</span><span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token variable">$bottom</span><span class="token punctuation">;</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token variable">$left</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 可指定参数赋值</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
    <span class="token comment">/** 不带参数 */</span>
    <span class="token keyword">@include</span> block-padding<span class="token punctuation">;</span>
    <span class="token comment">/** 按顺序指定参数值 */</span>
    <span class="token keyword">@include</span> <span class="token function">block-padding</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span>20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/** 给指定参数指定值 */</span>
    <span class="token keyword">@include</span> <span class="token function">block-padding</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$left</span></span><span class="token punctuation">:</span> 10px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$top</span></span><span class="token punctuation">:</span> 20px<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译 CSS</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token comment">/** 不带参数 */</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token comment">/** 按顺序指定参数值 */</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token comment">/** 给指定参数指定值 */</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可变参数</strong>：使用 <code>...</code> 处理参数不固定的情况，类似于js中的函数的剩余参数</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token variable">$direction</span><span class="token punctuation">,</span> <span class="token variable">$gradients</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$gradients</span><span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token variable">$direction</span><span class="token punctuation">,</span> <span class="token variable">$gradients</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.table-data </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #F00<span class="token punctuation">,</span> orange<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.table-data</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #F00<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #F00<span class="token punctuation">,</span> orange<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong></p><ul><li><code>mixin</code> 是可以重复使用的一组 <code>css</code> 声明，有助于减少重复代码，只需声明一次，就可在文件中引用；</li><li>使用参数时建议加上默认值；</li><li><code>@import</code> 导入局部模块化样式（类似功能、同一组件）；</li><li><code>@minix</code> 定义的是可重复使用的样式</li></ul><h3 id="function-函数" tabindex="-1"><a class="header-anchor" href="#function-函数" aria-hidden="true">#</a> @function 函数</h3><p><code>@function</code> 用于封装复杂的操作，可以很容易地以一种可读的方式抽象出通用公式和行为，函数提供返回值，常用来做计算方面的工作</p><p><code>@function</code> 参数默认值</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">//change-color和hue是内置方法</span>
<span class="token comment">//hue 返回$color的颜色为0到360度之间的一个数字。</span>
<span class="token comment">//change-color 用于设置颜色的属性</span>
<span class="token keyword">@function</span> <span class="token function">invert</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$amount</span></span><span class="token punctuation">:</span> 100%<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//@error hue($color); 调试 210deg</span>
    <span class="token property"><span class="token variable">$inverse</span></span><span class="token punctuation">:</span> <span class="token function">change-color</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$hue</span></span><span class="token punctuation">:</span> <span class="token function">hue</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">)</span> <span class="token operator">+</span> 180<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">@return</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$inverse</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$amount</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #036<span class="token punctuation">;</span>
<span class="token selector">.header </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">invert</span><span class="token punctuation">(</span><span class="token variable">$primary-color</span><span class="token punctuation">,</span> 80%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译 CSS</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #523314<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可变参数</strong> 看作 js function 的 <code>rest 参数</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token variable">$numbers</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">$sum</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$number</span> in <span class="token variable">$numbers</span> </span><span class="token punctuation">{</span>
        <span class="token property"><span class="token variable">$sum</span></span><span class="token punctuation">:</span> <span class="token variable">$sum</span> <span class="token operator">+</span> <span class="token variable">$number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@return</span> <span class="token variable">$sum</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token property"><span class="token variable">$widths</span></span><span class="token punctuation">:</span> 50px<span class="token punctuation">,</span> 30px<span class="token punctuation">,</span> 100px<span class="token punctuation">;</span>
<span class="token selector">.micro </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token variable">$widths</span>...<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为 CSS</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.micro</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@return</code> 只允许在 <code>@function</code> 内使用，和 <code>js</code> 一样，遇到 <code>return</code> 就会返回</p><p>总结</p><ul><li><code>@function</code> 和 <code>@mixin</code> 参数的使用方式没啥区别；</li><li><code>@function</code> 用来计算，<code>@mixin</code> 用来封装样式，<code>@import</code> 用来抽离他们为一个模块</li></ul><h3 id="extend继承" tabindex="-1"><a class="header-anchor" href="#extend继承" aria-hidden="true">#</a> @extend继承</h3><p>以 <code>elementUI</code> 的 <code>el-button</code> 组件为例，可以使用 <code>@extend</code> 继承已经存在的样式，使用逗号选择器。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// # id选择器一样的</span>
<span class="token selector">.button </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid transparent<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.42857143<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-default </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .button<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-danger </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .button<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #d9534f<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #d43f3a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.button, .btn-danger, .btn-default</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid transparent<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.42857143<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-default</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-danger</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #d9534f<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #d43f3a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>占位符选择器</strong></p><p>占位符选择器 <code>%</code>，与常用的 <code>id</code> 与 <code>class</code> 选择器写法相似，只是 <code>#</code> 或 <code>.</code> 替换成了 <code>%</code>，占位符选择器必须通过 <code>@extend</code> 指令调用</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.button <span class="token placeholder">%base</span> </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid transparent<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.42857143<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
        
<span class="token selector">.btn-default </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%base</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-danger </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%base</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #d9534f<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #d43f3a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果和上面的类选择器一样，但是，他有个有优点，<code>占位符选择器%</code> 所属的样式未使用时，不会被编译到 <code>css</code> 文件中</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.button .btn-danger, .button .btn-default</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid transparent<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.42857143<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-default</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-danger</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #d9534f<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #d43f3a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> @use</h3>`,108),j={href:"https://sass-lang.com/install",target:"_blank",rel:"noopener noreferrer"},D=p(`<p><code>css</code> 真正意义上的模块化，可以从其它 <code>scss</code> 样式表中加载 <code>mixin</code>、<code>function</code> 和变量，并将来自多个样式表的 <code>css</code> 组合在一起。<code>scss</code> 还提供了很多内置模块，我们可以通过 <code>@use</code> 使用，官方也推荐使用 <code>@use</code> 替换 <code>@import</code>，后续会废弃 <code>@import</code></p><p><strong>@import缺点</strong></p><ul><li>多处导入，存在样式重复加载。</li><li>没有命名空间，为了避免撞名，不敢使用简写的 <code>classname</code>，因此起名总是需要注意。</li><li>没有私有函数的概念，样式完全暴露在使用 <code>import</code> 的地方，这对ui库不够友好</li></ul><p><code>@use</code> 使用默认带有命名空间，也可以重命名空间</p><p>src/_corners.scss</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$radius</span></span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token keyword">@mixin</span> <span class="token selector">rounded </span><span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.scss</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;src/corners&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 默认命名空间 corners</span>
<span class="token comment">// @use &quot;src/corners&quot; as c; // 重命名空间</span>
<span class="token selector">.button </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> corners.rounded<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px <span class="token operator">+</span> corners.<span class="token variable">$radius</span><span class="token punctuation">;</span>
    <span class="token comment">// padding: 5px + c.$radius; // 重命名 c 引用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>as *</code> 让模块处于全局命名空间，不需要带上命名空间就可以直接使用</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$radius</span></span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token keyword">@mixin</span> <span class="token selector">rounded </span><span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;src/corners&quot;</span> <span class="token module-modifier keyword">as</span> *<span class="token punctuation">;</span>

<span class="token selector">.button </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> rounded<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px <span class="token operator">+</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>私有模块</strong></p><p>变量使用 <code>-</code> 开头，<code>@use</code> 不会引入这个变量</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$-radius</span></span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>

<span class="token keyword">@mixin</span> <span class="token selector">rounded </span><span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$-radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.scss</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;src/corners&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.button </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> corners.rounded<span class="token punctuation">;</span>
    <span class="token comment">// Error: Private members can&#39;t be accessed from outside their modules</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px <span class="token operator">+</span> corners.<span class="token variable">$-radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="forward" tabindex="-1"><a class="header-anchor" href="#forward" aria-hidden="true">#</a> @forward</h3><p><code>@forward</code> 可以看作是转发，在当前模块引入另一个模块的所有变量、<code>mixins</code> 和函数，直接向外暴露 API，不会在当前模块增加代码，不同于 <code>@use</code>， <code>@forward</code> 不能给变量添加命名空间</p><p>例如在 <code>bootstrap.css</code> 引入 <code>functions</code>、<code>variables</code>、<code>mixins</code> 文件，不能直接在 <code>bootstrap.scss</code> 文件中使用这些引入的模块。而是需要在另一个文件中引入 <code>@use bootstrap</code> 模块，再去使用这些方法</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* bootstrap.scss */</span>
<span class="token keyword">@forward</span><span class="token string">&quot;functions&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@forward</span><span class="token string">&quot;variables&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@forward</span><span class="token string">&quot;mixins&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@forward</code> 通过控制 <code>show</code> 和 <code>hide</code> 显示或隐藏模块中的某些变量</p><p>a.scss</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">rounded </span><span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">footer </span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b.scss</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$radius</span></span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>

c.scss
\`\`\`scss
<span class="token keyword">@forward</span> <span class="token string">&quot;a&quot;</span> <span class="token module-modifier keyword">show</span> rounded<span class="token punctuation">;</span>
<span class="token keyword">@forward</span> <span class="token string">&quot;b&quot;</span> <span class="token module-modifier keyword">hide</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.scss</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;c.scss&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.button </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> rounded<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Error: Undefined variable. padding: $radius;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="at-root" tabindex="-1"><a class="header-anchor" href="#at-root" aria-hidden="true">#</a> @at-root</h3><p><code>@at-root</code> 用来跳出嵌套，在多级嵌套时比较常用，包含 <code>without</code> 和 <code>with</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">//没有跳出</span>
<span class="token selector">.parent-1 </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>#f00<span class="token punctuation">;</span>
    <span class="token selector">.child </span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//单个选择器跳出</span>
<span class="token selector">.parent-2 </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>#f00<span class="token punctuation">;</span>
    <span class="token atrule"><span class="token rule">@at-root</span> .child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//多个选择器跳出</span>
<span class="token selector">.parent-3 </span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span>#f00<span class="token punctuation">;</span>
    <span class="token atrule"><span class="token rule">@at-root</span></span> <span class="token punctuation">{</span>
        <span class="token selector">.child1 </span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.child2 </span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent-1</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.parent-1 .child</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.parent-2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.parent-3</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child1</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.child2</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>@without和with</strong></p><p>默认 <code>@at-root</code> 只会跳出选择器嵌套，而不能跳出 <code>@media</code> 或 <code>@support</code>，如果要跳出这两种，则需使用<code>@at-root (without: media)</code>或 <code>@at-root (without: support)</code>，<code>@at-root</code> 的关键词有四个</p><ul><li><code>all</code> 表示所有；</li><li><code>rule</code> 表示常规 <code>css</code> 选择器；</li><li><code>media</code> 表示 <code>media</code>；</li><li><code>support</code> 表示 <code>support</code>（<code>@support</code>主要是用于检测浏览器是否支持css的某个属性）</li></ul><p>默认的 <code>@at-root</code> 是 <code>@at-root (without:rule)</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/*跳出父级元素嵌套*/</span>
<span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
    <span class="token selector">.parent1</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>#f00<span class="token punctuation">;</span>
        <span class="token atrule"><span class="token rule">@at-root</span> .child1</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*跳出media嵌套，父级有效*/</span>
<span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
    <span class="token selector">.parent2</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>#f00<span class="token punctuation">;</span>
        <span class="token atrule"><span class="token rule">@at-root</span> <span class="token punctuation">(</span><span class="token property">without</span><span class="token punctuation">:</span> media<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
            <span class="token selector">.child2 </span><span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*跳出media和父级*/</span>
<span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
    <span class="token selector">.parent3</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>#f00<span class="token punctuation">;</span>
        <span class="token atrule"><span class="token rule">@at-root</span> <span class="token punctuation">(</span><span class="token property">without</span><span class="token punctuation">:</span> all<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
            <span class="token selector">.child3 </span><span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*跳出父级元素嵌套*/</span>
<span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
    <span class="token selector">.parent1</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.child1</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*跳出media嵌套，父级有效*/</span>
<span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
    <span class="token selector">.parent2</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.parent2 .child2</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*跳出media和父级*/</span>
<span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
    <span class="token selector">.parent3</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.child3</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>@at-root与 &amp; 配合使用</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.child</span><span class="token punctuation">{</span>
    @<span class="token selector">at-root .parent <span class="token parent important">&amp;</span></span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>#f00<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent .child</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scss-内置拓展" tabindex="-1"><a class="header-anchor" href="#scss-内置拓展" aria-hidden="true">#</a> SCSS 内置拓展</h3><p>scss内置扩展分为 <code>color, list, map, math, meta, selector, string</code> 等，扩展也就是 <code>scss</code> 内置的一些 <code>function</code>，相当于 <code>JS</code> 内置方法</p><p>内置函数可以使用 <code>@use</code> 模块化引入，也可以直接使用他提供的全局函数名调用，以下两种方式是一样的。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&#39;sass:list&#39;</span><span class="token punctuation">;</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$list</span></span><span class="token punctuation">:</span> red blue green<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$n</span></span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// blue</span>
    <span class="token property">color</span><span class="token punctuation">:</span> list.<span class="token function">nth</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$list</span></span><span class="token punctuation">:</span> red blue green<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$n</span></span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// blue</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string-字符串函数" tabindex="-1"><a class="header-anchor" href="#string-字符串函数" aria-hidden="true">#</a> String 字符串函数</h3><p><code>scss</code> 有许多处理字符串的函数</p><ul><li><code>quote($string)</code>：向字符串添加引号</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">quote</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span> <span class="token comment">//&quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>unquote($string)</code> 移除字符串的引号</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span> <span class="token comment">//hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>str-index($string, $substring)</code> 返回 substring 子字符串第一次在 string 中出现的位置。如果没有匹配到子字符串，则返回 null。区分大小写。</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">str-index</span><span class="token punctuation">(</span>abcd<span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">// 1 </span>
<span class="token function">str-index</span><span class="token punctuation">(</span>abcd<span class="token punctuation">,</span> ab<span class="token punctuation">)</span> <span class="token comment">// 1 </span>
<span class="token function">str-index</span><span class="token punctuation">(</span>abcd<span class="token punctuation">,</span> X<span class="token punctuation">)</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>str-length($string)</code> 获取字符串长度</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">str-length</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span> <span class="token comment">//5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>string-insert($string, $insert, $index)</code> 在字符串 string 中 index 位置插入 insert</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">str-insert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello world!&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot; xiaoming&quot;</span><span class="token punctuation">,</span> 6<span class="token punctuation">)</span> <span class="token comment">//&quot;Hello xiaoming world!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>str-slice($string, $start-at, $end-at: -1)</code> 从 string 中截取子字符串，通过 start-at 和 end-at 设置始末位置，未指定结束索引值则默认截取到字符串末尾。和 js 感觉有点相似</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">str-slice</span><span class="token punctuation">(</span><span class="token string">&quot;abcd&quot;</span><span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 3<span class="token punctuation">)</span>   =&gt; <span class="token string">&quot;bc&quot;</span> 
<span class="token function">str-slice</span><span class="token punctuation">(</span><span class="token string">&quot;abcd&quot;</span><span class="token punctuation">,</span> 2<span class="token punctuation">)</span>      =&gt; <span class="token string">&quot;bcd&quot;</span> 
<span class="token function">str-slice</span><span class="token punctuation">(</span><span class="token string">&quot;abcd&quot;</span><span class="token punctuation">,</span> -3<span class="token punctuation">,</span> -2<span class="token punctuation">)</span> =&gt; <span class="token string">&quot;bc&quot;</span> 
<span class="token function">str-slice</span><span class="token punctuation">(</span><span class="token string">&quot;abcd&quot;</span><span class="token punctuation">,</span> 2<span class="token punctuation">,</span> -2<span class="token punctuation">)</span>  =&gt; <span class="token string">&quot;bc&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他</p><ul><li><code>to-lower-case(*string*)</code> 将字符串转成小写</li><li><code>to-upper-case(*string*)</code> 将字符串转成大写</li><li><code>unique-id()</code> 返回一个无引号的随机字符串作为 id</li></ul><p>事例代码</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:after </span><span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">quote</span><span class="token punctuation">(</span>这是里面的内容<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">unquote</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$string</span></span><span class="token punctuation">:</span> <span class="token string">&quot;#F00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span><span class="token function">str-length</span><span class="token punctuation">(</span><span class="token string">&quot;scss学习&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #F00<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;这是里面的内容&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-数学函数" tabindex="-1"><a class="header-anchor" href="#math-数学函数" aria-hidden="true">#</a> Math 数学函数</h3><p><code>Math</code> 数值函数处理数值计算</p><ul><li><code>abs(number)</code> 返回一个数值的绝对值</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">abs</span><span class="token punctuation">(</span>13<span class="token punctuation">)</span> <span class="token comment">// 13 </span>
<span class="token function">abs</span><span class="token punctuation">(</span>-13<span class="token punctuation">)</span> <span class="token comment">// 13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>comparable(num1, num2)</code> 返回一个布尔值，判断 <em>num1</em> 与 <em>num2</em> 是否可以进行比较 ，注意是否可以比较，不是比较的结果</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">comparable</span><span class="token punctuation">(</span>15px<span class="token punctuation">,</span> 10px<span class="token punctuation">)</span> <span class="token comment">// true </span>
<span class="token function">comparable</span><span class="token punctuation">(</span>20mm<span class="token punctuation">,</span> 1cm<span class="token punctuation">)</span> <span class="token comment">// true </span>
<span class="token function">comparable</span><span class="token punctuation">(</span>35px<span class="token punctuation">,</span> 2em<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>ceil(*number*)</code> 向上取整</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">ceil</span><span class="token punctuation">(</span>13.24<span class="token punctuation">)</span> <span class="token comment">//14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>floor(*number*)</code> 向下取整</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">floor</span><span class="token punctuation">(</span>15.84<span class="token punctuation">)</span> <span class="token comment">// 15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>max(number...</code> 返回最大值</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">max</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span> 7<span class="token punctuation">,</span> 9<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> -3<span class="token punctuation">,</span> -7<span class="token punctuation">)</span> <span class="token comment">// 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>min(number...</code> 返回最小值</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">min</span><span class="token punctuation">(</span>7<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> -2<span class="token punctuation">,</span> -7<span class="token punctuation">)</span> <span class="token comment">// -7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>percentage(number)</code>：将数字转化为百分比的表达形式</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">percentage</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span> <span class="token comment">// 120</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>random()</code>：返回 0-1 区间内的小数，</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 0.2783</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>random(number)</code>如果传入 number 参数，返回 1 至 number 之间的整数，包括 1 和 limit</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">random</span><span class="token punctuation">(</span>10<span class="token punctuation">)</span> <span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>round(number)</code>：返回最接近该数的一个整数，四舍五入</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">round</span><span class="token punctuation">(</span>15.20<span class="token punctuation">)</span> <span class="token comment">// 15 round(15.80) // 16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>div($number1, $number2)</code> //=&gt; number 返回 <code>$number2</code> 除以 <code>$number1</code> 结果</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@debug</span> math.<span class="token function">div</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.5</span>
<span class="token keyword">@debug</span> math.<span class="token function">div</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 5px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>
<span class="token keyword">@debug</span> math.<span class="token function">div</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20px</span>
<span class="token keyword">@debug</span> math.<span class="token function">div</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 5s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20px/s</span>
<span class="token keyword">@debug</span> math.<span class="token function">percentage</span><span class="token punctuation">(</span>0.2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20%</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事例代码</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">abs</span><span class="token punctuation">(</span>-15<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 15</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">ceil</span><span class="token punctuation">(</span>5.8<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//6</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">max</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span> 1<span class="token punctuation">,</span> 6<span class="token punctuation">,</span> 8<span class="token punctuation">,</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//8</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 随机 0-1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 15<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">max</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span> 1<span class="token punctuation">,</span> 6<span class="token punctuation">,</span> 8<span class="token punctuation">,</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.8636254167<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list-列表函数" tabindex="-1"><a class="header-anchor" href="#list-列表函数" aria-hidden="true">#</a> List 列表函数</h3><p><code>List</code> 特点</p><ul><li><code>List</code> 函数可以访问列表中的值，向列表添加元素，合并列表等。</li><li><code>List</code> 列表是不可变的，因此在处理列表时，返回的是一个新的列表，而不是在原有的列表上进行修改。</li><li>列表的起始索引值为 <code>1</code>，记住不是 <code>0</code></li></ul><p><strong>List 方法</strong></p><ul><li><code>append(*list*, *value*, [*separator*])</code> 将单个值 <em>value</em> 添加到列表尾部。<em>separator</em> 是分隔符，默认会自动侦测，或者指定为逗号或空格，分别用 <code>comma</code> 、<code>space</code> 表示</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span> <span class="token comment">// a b c d </span>
<span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">,</span> comma<span class="token punctuation">)</span> <span class="token comment">// a, b, c, d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>index(list, value)</code> 返回元素 <em>value</em> 在列表中的索引位置</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">index</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// 2 </span>
<span class="token function">index</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>is-bracketed(list)</code> 判断列表中是否有中括号</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">is-bracketed</span><span class="token punctuation">(</span>[a b c]<span class="token punctuation">)</span> <span class="token comment">// true </span>
<span class="token function">is-bracketed</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>list-separator(list)</code> 返回一列表的分隔符类型。可以是空格或逗号</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">list-separator</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span> <span class="token comment">// &quot;space&quot;</span>
<span class="token function">list-separator</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment">// &quot;comma&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>join(list1, list2, [separator, bracketed])</code> 合并两列表，将列表 <em>list2</em> 添加到列表 <em>list1</em> 的末尾。<em>separator</em> 是分隔符，默认会自动侦测，或者指定为逗号或空格。<em>bracketed</em> 默认会自动侦测是否有中括号，可以设置为 true 或 false</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">join</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> d e f<span class="token punctuation">)</span> <span class="token comment">// a b c d e f </span>
<span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>d e f<span class="token punctuation">)</span><span class="token punctuation">,</span> comma<span class="token punctuation">)</span> <span class="token comment">// a, b, c, d, e, f </span>
<span class="token function">join</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> d e f<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$bracketed</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// [a b c d e f]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>length($list)</code> 返回列表长度</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">length</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>set-nth(list, n, value)</code> 设置列表第 <em>n</em> 项的值为 <em>value</em>。</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">set-nth</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token comment">// a x c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>nth($list, $n)</code> 获取第 <em>n</em> 项的值</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">nth</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> 3<span class="token punctuation">)</span> <span class="token comment">// c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>zip(lists)</code> 将多个列表按照以相同索引值为一组，重新组成一个新的多维度列表，非常好用</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">zip</span><span class="token punctuation">(</span>1px 2px 3px<span class="token punctuation">,</span> solid dashed dotted<span class="token punctuation">,</span> red green blue<span class="token punctuation">)</span> 
<span class="token comment">// 1px solid red, 2px dashed green, 3px dotted blue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>事例代码</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">length</span><span class="token punctuation">(</span>12px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">length</span><span class="token punctuation">(</span>12px 5px 8px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">index</span><span class="token punctuation">(</span>a b c d<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">append</span><span class="token punctuation">(</span>10px 20px<span class="token punctuation">,</span> 30px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10px 20px 30px</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$list</span></span><span class="token punctuation">:</span> red blue green<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$n</span></span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// blue</span>
    <span class="token keyword">@debug</span> list.<span class="token function">zip</span><span class="token punctuation">(</span>10px 50px 100px<span class="token punctuation">,</span> short mid long<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10px short, 50px mid, 100px long</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {
    z-index: 1;
    z-index: 3;
    z-index: 3;
    padding: 10px 20px 30px;
    color: blue;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-映射-函数" tabindex="-1"><a class="header-anchor" href="#map-映射-函数" aria-hidden="true">#</a> Map(映射) 函数</h3>`,123),I={href:"https://sass-lang.com/documentation/modules/map",target:"_blank",rel:"noopener noreferrer"},H=p(`<p>Map(映射)对象是以一对或多对的 <code>key/value</code> 来表示</p><ul><li><code>map-get(map, key)</code> 返回 Map 中 <em>key</em> 所对应的 value(值)。如没有对应的 key，则返回 null 值</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span> 
<span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">&quot;small&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 12px</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>map-has-key(map, key)</code> 判断 <em>map</em> 是否有对应的 <em>key</em>，存在返回 true，否则返回 false</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span> 
<span class="token function">map-has-key</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">&quot;big&quot;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>map-keys(map)</code> 返回 <em>map</em> 中所有的 key 组成的队列</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span> 
<span class="token function">map-keys</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">)</span> <span class="token comment">// &quot;small&quot;, &quot;normal, &quot;large&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>map-values(map)</code> 返回 <em>map</em> 中所有的 value 并生成一个队列</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span> 
<span class="token function">map-values</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">)</span> <span class="token comment">// 12px, 18px, 24px</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>map-merge(map1, map2)</code> 合并两个 map 形成一个新的 map 类型，即将 <em>map2</em> 添加到 <em>map1</em>的尾部</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span> 
<span class="token property"><span class="token variable">$font-sizes2</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;x-large&quot;</span><span class="token punctuation">:</span> 30px<span class="token punctuation">,</span> <span class="token string">&quot;xx-large&quot;</span><span class="token punctuation">:</span> 36px<span class="token punctuation">)</span>

<span class="token function">map-merge</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token variable">$font-sizes2</span><span class="token punctuation">)</span> 
<span class="token comment">//&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px, &quot;x-large&quot;: 30px, &quot;xx-large&quot;: 36px</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>map.deep-merge($map1, $map2)</code> 将两个嵌套 <code>map</code> 深度合并</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$helvetica-light</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;weights&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;lightest&quot;</span><span class="token punctuation">:</span> 100<span class="token punctuation">,</span>
    <span class="token string">&quot;light&quot;</span><span class="token punctuation">:</span> 300
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$helvetica-heavy</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;weights&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;medium&quot;</span><span class="token punctuation">:</span> 500<span class="token punctuation">,</span>
    <span class="token string">&quot;bold&quot;</span><span class="token punctuation">:</span> 700
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> map.<span class="token function">deep-merge</span><span class="token punctuation">(</span><span class="token variable">$helvetica-light</span><span class="token punctuation">,</span> <span class="token variable">$helvetica-heavy</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (</span>
<span class="token comment">//   &quot;weights&quot;: (</span>
<span class="token comment">//     &quot;lightest&quot;: 100,</span>
<span class="token comment">//     &quot;light&quot;: 300,</span>
<span class="token comment">//     &quot;medium&quot;: 500,</span>
<span class="token comment">//     &quot;bold&quot;: 700</span>
<span class="token comment">//   )</span>
<span class="token comment">// )</span>
<span class="token keyword">@debug</span> map.<span class="token function">merge</span><span class="token punctuation">(</span><span class="token variable">$helvetica-light</span><span class="token punctuation">,</span> <span class="token variable">$helvetica-heavy</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (</span>
<span class="token comment">//   &quot;weights&quot;: (</span>
<span class="token comment">//     &quot;medium: 500,</span>
<span class="token comment">//     &quot;bold&quot;: 700</span>
<span class="token comment">//   )</span>
<span class="token comment">// )</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>map-remove(map, keys... )</code>移除 <em>map</em> 中的 keys，多个 key 使用逗号隔开</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span> 
<span class="token function">map-remove</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">&quot;small&quot;</span><span class="token punctuation">)</span> <span class="token comment">// (&quot;normal&quot;: 18px, &quot;large&quot;: 24px) </span>
<span class="token function">map-remove</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">&quot;small&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;large&quot;</span><span class="token punctuation">)</span> <span class="token comment">// (&quot;normal&quot;: 18px)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>map.deep-remove($map, $key, $keys...)</code> 多层嵌套删除，删除层级根据参数个数</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$fonts</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;Helvetica&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;weights&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&quot;regular&quot;</span><span class="token punctuation">:</span> 400<span class="token punctuation">,</span>
      <span class="token string">&quot;medium&quot;</span><span class="token punctuation">:</span> 500<span class="token punctuation">,</span>
      <span class="token string">&quot;bold&quot;</span><span class="token punctuation">:</span> 700
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> map.<span class="token function">deep-remove</span><span class="token punctuation">(</span><span class="token variable">$fonts</span><span class="token punctuation">,</span> <span class="token string">&quot;Helvetica&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;weights&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;regular&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (</span>
<span class="token comment">//   &quot;Helvetica&quot;: (</span>
<span class="token comment">//     &quot;weights: (</span>
<span class="token comment">//       &quot;medium&quot;: 500,</span>
<span class="token comment">//       &quot;bold&quot;: 700</span>
<span class="token comment">//     )</span>
<span class="token comment">//   )</span>
<span class="token comment">// )</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>map.set($map, $keys..., $value)</code> 添加 <code>key</code> 和 <code>value</code> 值，第一个是 <code>map</code>，最后一个是 <code>value</code>，中间是 <code>key</code>，嵌套传入多个 <code>key...</code></li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$fonts</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;Helvetica&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;weights&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&quot;regular&quot;</span><span class="token punctuation">:</span> 400<span class="token punctuation">,</span>
      <span class="token string">&quot;medium&quot;</span><span class="token punctuation">:</span> 500<span class="token punctuation">,</span>
      <span class="token string">&quot;bold&quot;</span><span class="token punctuation">:</span> 700
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> map.<span class="token function">set</span><span class="token punctuation">(</span><span class="token variable">$fonts</span><span class="token punctuation">,</span> <span class="token string">&quot;Helvetica&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;weights&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;regular&quot;</span><span class="token punctuation">,</span> 300<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (</span>
<span class="token comment">//   &quot;Helvetica&quot;: (</span>
<span class="token comment">//     &quot;weights&quot;: (</span>
<span class="token comment">//       &quot;regular&quot;: 300,</span>
<span class="token comment">//       &quot;medium&quot;: 500,</span>
<span class="token comment">//       &quot;bold&quot;: 700</span>
<span class="token comment">//     )</span>
<span class="token comment">//   )</span>
<span class="token comment">// )</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事例代码</p><div class="language-SCSS line-numbers-mode" data-ext="SCSS"><pre class="language-SCSS"><code>@use &#39;sass:map&#39;;

// 创建Map，类似于对象
$map: (
  key: value,
  nextkey: nextvalue
);

// 使用
.element:before {
  content: map-get($map, key);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面编译输出后的结果如下：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.element:before {
  content: value
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Map</code> 在 <code>@each</code> 应用</p><div class="language-SCSS line-numbers-mode" data-ext="SCSS"><pre class="language-SCSS"><code>/* 定义一个sass map名称为$icons */
$icons: (
  checkmark: a,
  plus: b,
  minus: c
);

/* 遍历map的所有key，创建各自的类 */
@each $name, $value in $icons {
  .icon--#{$name} {
    content: $value;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>
/* 遍历map的所有key，创建各自的类 */
.icon--checkmark {
  content: &quot;a&quot;;
}

.icon--plus {
  content: &quot;b&quot;;
}

.icon--minus {
  content: &quot;c&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@each</code> 遍历嵌套 map 多个值</p><ul><li>给 <code>map</code> 一个 <code>key</code> 赋予多个 <code>value</code>（相当于数组），多个 <code>value</code> 之间通过逗号 <code>,</code> 来分割</li><li>定义一系列 <code>buttons</code> ，每一个 <code>key</code> 的第一个 <code>value</code> 是<code>background-color</code>，第二个 <code>value</code> 是 <code>font-color</code>。</li><li>遍历 <code>$buttons</code> 赋值给 <code>$colors</code> 对象。通过 <code>nth($colors,1)</code>（第一个参数是对象的名称，第二个参数是值得位置）拿到第一个<code>key</code>。如果需要拿第二个<code>value</code>，那将第二个参数改为 2。</li></ul><div class="language-SCSS line-numbers-mode" data-ext="SCSS"><pre class="language-SCSS"><code>// _m-buttons.scss
$buttons: (
  error: (#d82d2d, #666),
  success: (#52bf4a, #fff),
  warning: (#c23435, #fff)
);

.m-button {
  display: inling-block;
  padding: .5em;
  background: #ccc;
  color: #666;

  @each $name, $colors in $buttons {
    $bgcolor: nth($colors, 1);
    $fontcolor: nth($colors, 2);

    &amp;--#{$name} {
      background-color: $bgcolor;
      color: $fontcolor;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.m-button {
  display: inline-block;
  padding: .5em;
  background: #ccc;
  color: #666;
}

.m-button--error {
  background-color: #d82d2d;
  color: #666;
}

.m-button--success {
  background-color: #52bf4a;
  color: #fff;
}

.m-button--warning {
  background-color: #c23435;
  color: #fff;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="selector-选择器函数" tabindex="-1"><a class="header-anchor" href="#selector-选择器函数" aria-hidden="true">#</a> selector 选择器函数</h3><p><code>selector</code> 相关函数可对选择 <code>css</code> 进行一些相应的操作</p><ul><li><code>is-superselector(super, sub)</code> 比较两个选择器匹配的范围，即判断 <em>super</em> 选择器是否包含了 <em>sub</em> 选择器所匹配的范围，是的话返回 <code>true</code>，否则返回 <code>false</code></li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">is-superselector</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;div.myInput&quot;</span><span class="token punctuation">)</span> <span class="token comment">// true </span>
<span class="token function">is-superselector</span><span class="token punctuation">(</span><span class="token string">&quot;div.myInput&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span> <span class="token comment">// false </span>
<span class="token function">is-superselector</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>selector-append(selectors)</code> 将第二个 (也可以有多个) 添加到第一个选择器的后面。</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">selector-append</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.myInput&quot;</span><span class="token punctuation">)</span> <span class="token comment">// div.myInput </span>
<span class="token function">selector-append</span><span class="token punctuation">(</span><span class="token string">&quot;.warning&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;__a&quot;</span><span class="token punctuation">)</span> 结果<span class="token punctuation">:</span> .warning__a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>selector-nest(selectors)</code> 回一个新的选择器，该选择器通过提供的列表选择器生成一个嵌套的列表</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">selector-nest</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span> <span class="token comment">// ul li </span>
<span class="token function">selector-nest</span><span class="token punctuation">(</span><span class="token string">&quot;.warning&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;alert&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span> <span class="token comment">// .warning div, alert div</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>selector-parse(selector)</code> 将字符串的选择符 <em>selector</em> 转换成选择器队列。</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">selector-parse</span><span class="token punctuation">(</span><span class="token string">&quot;h1 .myInput .warning&quot;</span><span class="token punctuation">)</span> <span class="token comment">// (&#39;h1&#39; &#39;.myInput&#39; &#39;.warning&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>selector-replace(selector, original, replacement)</code> 给定一个选择器，用 <code>replacement</code> 替换 <code>original</code> 后返回一个新的选择器队列</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">selector-replace</span><span class="token punctuation">(</span><span class="token string">&quot;p.warning&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span> <span class="token comment">// div.warning</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>selector-unify(selector1, selector2)</code> 将两组选择器合成一个复合选择器。如两个选择器无法合成，则返回 null 值。</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">selector-unify</span><span class="token punctuation">(</span><span class="token string">&quot;myInput&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.disabled&quot;</span><span class="token punctuation">)</span> <span class="token comment">// myInput.disabled </span>
<span class="token function">selector-unify</span><span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;h1&quot;</span><span class="token punctuation">)</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\`simple-selectors(selectors) 将合成选择器拆为单个选择器</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">simple-selectors</span><span class="token punctuation">(</span><span class="token string">&quot;div.myInput&quot;</span><span class="token punctuation">)</span> <span class="token comment">// div, .myInput </span>
<span class="token function">simple-selectors</span><span class="token punctuation">(</span><span class="token string">&quot;div.myInput:before&quot;</span><span class="token punctuation">)</span> <span class="token comment">// div, .myInput, :before</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>事例代码</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&#39;sass:selector&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> selector.<span class="token function">is-superselector</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// 可以直接使用@forward下的前缀</span>
<span class="token keyword">@debug</span> <span class="token function">selector-append</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.disabled&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a.disabled</span>
<span class="token keyword">@debug</span> <span class="token function">selector-extend</span><span class="token punctuation">(</span><span class="token string">&quot;a.disabled&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.link&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a.disabled, .link.disabled</span>

<span class="token selector">.header </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">selector-append</span><span class="token punctuation">(</span><span class="token string">&quot;.a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.c&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">selector-unify</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.disabled&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h3><p><code>meta</code> 提供一个 <code>mixin</code> 和一些原子级别的 <code>function</code></p><ul><li><code>meta.calc-args</code>获取方法的参数</li><li><code>meta.calc-name</code>获取方法名</li></ul><p><strong>meta.load-css</strong></p><p><code>meta.load-css($url，$with:())</code> 把<code>$url</code>中<code>css</code>样式全部包含进来。注意，<code>$url</code>引入的函数，变量和<code>mixin</code>在 <code>meta.load-css()</code>后的<code>scss</code>中并不能用，它只会返回编译后的<code>css</code>代码。它的第二个参数可以修改使用了<code>!default</code>的变量</p><p>src/corners</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$border-contrast</span></span><span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token selector">code </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #6b717f<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #d2e1dd<span class="token punctuation">;</span>
    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$border-contrast</span> </span><span class="token punctuation">{</span>
        <span class="token property">border-color</span><span class="token punctuation">:</span> #dadbdf<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.scss</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:meta&quot;</span><span class="token punctuation">;</span>

<span class="token selector">body.dark </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> meta.<span class="token function">load-css</span><span class="token punctuation">(</span><span class="token string">&quot;src/corners&quot;</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$with</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;border-contrast&quot;</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body.dark code</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #6b717f<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #d2e1dd<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #dadbdf<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相关 <code>function</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:meta&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> meta.<span class="token function">calc-args</span><span class="token punctuation">(</span><span class="token function">calc</span><span class="token punctuation">(</span>100px <span class="token operator">+</span> 10%<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// unquote(&quot;100px + 10%&quot;)</span>
<span class="token keyword">@debug</span> meta.<span class="token function">calc-args</span><span class="token punctuation">(</span><span class="token function">clamp</span><span class="token punctuation">(</span>50px<span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--width<span class="token punctuation">)</span><span class="token punctuation">,</span> 1000px<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 50px, unquote(&quot;var(--width)&quot;), 1000px</span>

<span class="token keyword">@debug</span> meta.<span class="token function">calc-name</span><span class="token punctuation">(</span><span class="token function">calc</span><span class="token punctuation">(</span>100px <span class="token operator">+</span> 10%<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;calc&quot;</span>
<span class="token keyword">@debug</span> meta.<span class="token function">calc-name</span><span class="token punctuation">(</span><span class="token function">clamp</span><span class="token punctuation">(</span>50px<span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--width<span class="token punctuation">)</span><span class="token punctuation">,</span> 1000px<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;clamp&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="color-颜色函数" tabindex="-1"><a class="header-anchor" href="#color-颜色函数" aria-hidden="true">#</a> color 颜色函数</h3><p>scss包含很多操作颜色的函数。</p><ul><li><code>rgb(red, green, blue)</code> 创建一个 <code>Red-Green-Blue (RGB)</code> 色。其中 <code>R</code> 是 &quot;red&quot; 表示红色，<code>G</code> 是 &quot;green&quot; 绿色，<code>B</code> 是 &quot;blue&quot; 蓝色</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>rgba(red, green, blue, alpha)</code> 根据红、绿、蓝和 <strong>透明度值</strong> 创建一个颜色</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>hsl(hue, saturation, lightness)</code> 通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 绿色 </span>
<span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 75%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 浅绿色 </span>
<span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 25%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// dark green </span>
<span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 60%<span class="token punctuation">,</span> 70%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 柔和的绿色 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>hsla(hue, saturation, lightness, alpha)</code> 通过色相（hue）、饱和度(saturation)、亮度（lightness）和 <strong>透明(alpha)</strong> 的值创建一个颜色</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 绿色带有透明度 </span>
<span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 75%<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 浅绿色带有透明度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>grayscale(color)</code> 将一个颜色变成灰色，相当于 <code>desaturate( color,100%)</code></li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">grayscale</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #c6c6c6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>complement(color)</code> 返回一个补充色，相当于 <code>adjust-hue($color,180deg)</code></li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">complement</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #ff7faa</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>invert(*color*, weight)</code> 返回一个反相色，红、绿、蓝色值倒过来，而透明度不变</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">invert</span><span class="token punctuation">(</span>white<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// black</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>red(color)</code> 从一个颜色中获取其中红色值（0-255），可用于取出某个 <code>hex</code> 颜色中的红色值</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">red</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 127 </span>
<span class="token function">red</span><span class="token punctuation">(</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 255</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>green(color)</code> 从一个颜色中获取其中绿色值（0-255）</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">green</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 255 </span>
<span class="token function">green</span><span class="token punctuation">(</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>blue(color)</code> 从一个颜色中获取其中蓝色值（0-255）</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">blue</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 212 </span>
<span class="token function">blue</span><span class="token punctuation">(</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 255</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>hue(color)</code> 返回颜色在 <code>HSL</code> 色值中的角度值 (0deg - 255deg)</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">hue</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 160deg</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>saturation(color)</code> 获取一个颜色的饱和度值(0% - 100%)</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">saturation</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>lightness(color)</code> 获取一个颜色的亮度值(0% - 100%)</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">lightness</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 74.9%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>alpha(color)</code> 返回颜色的 <code>alpha</code>，返回值为 <code>0</code> 或 <code>1</code></li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">alpha</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>opacity(color)</code> 获取颜色透明度值(0-1)</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">opacity</span><span class="token punctuation">(</span><span class="token function">rgba</span><span class="token punctuation">(</span>127<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 212<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>mix(color1, color2, weight)</code> 把两种颜色混合起来。</li></ul><p><em>weight</em> 参数必须是 0% 到 100%。默认 weight 为 50%，表明颜色各取 50% color1 和 color2 的色值相加。如果 weight 为 25%，那表明颜色为 25% color1 和 75% color2 的色值相加</p><ul><li><code>adjust-hue(color, degrees)</code> 通过改变一个颜色的色相值（-360deg - 360deg），创建一个新的颜色</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">adjust-hue</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">,</span> 80deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #8080ff</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p><code>lighten(color, amount)</code> 通过改变颜色的亮度值（0% - 100%），让颜色变亮，创建一个新的颜色</p></li><li><p><code>darken(color, amount)</code> 通过改变颜色的亮度值（0% - 100%），让颜色变暗，创建一个新的颜色</p></li><li><p><code>saturate(color, amount)</code> 提高传入颜色的色彩饱和度。等同于 <code>adjust-color( color, saturation: amount)</code></p></li><li><p><code>desaturate(color, amount)</code> 调低一个颜色的饱和度后产生一个新的色值。同样，饱和度的取值区间在 0% ~ 100%。等同于 <code>adjust-color(color, saturation: -amount)</code></p></li><li><p><code>opacify(color, amount)</code> 降低颜色的透明度，取值在 0-1 之。等价于 <code>adjust-color(color, alpha: amount)</code></p></li><li><p><code>fade-in(color, amount)</code>降低颜色的透明度，取值在 0-1 之。等价于 <code>adjust-color(color, alpha: amount)</code></p></li><li><p><code>transparentize(color, amount)</code> 提升颜色的透明度，取值在 0-1 之间。等价于 <code>adjust-color(color, alpha: -amount)</code></p></li><li><p><code>fade-out(color, amount)</code> 提升颜色的透明度，取值在 0-1 之间。等价于 <code>adjust-color(color, alpha: -amount)</code></p></li></ul><p>事例代码</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.p1 </span><span class="token punctuation">{</span>
    <span class="token comment">// 让颜色变亮</span>
    <span class="token property">color</span><span class="token punctuation">:</span><span class="token function">scale-color</span><span class="token punctuation">(</span>#5c7a29<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$lightness</span></span><span class="token punctuation">:</span> +30%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p2 </span><span class="token punctuation">{</span>
    <span class="token comment">// 让颜色变暗</span>
    <span class="token property">color</span><span class="token punctuation">:</span><span class="token function">scale-color</span><span class="token punctuation">(</span>#5c7a29<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$lightness</span></span><span class="token punctuation">:</span> -15%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p3 </span><span class="token punctuation">{</span>
    <span class="token comment">// 降低颜色透明度</span>
    <span class="token property">color</span><span class="token punctuation">:</span><span class="token function">scale-color</span><span class="token punctuation">(</span>#5c7a29<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$alpha</span></span><span class="token punctuation">:</span> -40%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.p1</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #95c249<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #4e6823<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p3</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>92<span class="token punctuation">,</span> 122<span class="token punctuation">,</span> 41<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调试相关" tabindex="-1"><a class="header-anchor" href="#调试相关" aria-hidden="true">#</a> 调试相关</h3><p><strong>@debug</strong></p><p><code>@debug</code> 打印表达式的值，方便调试。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$font-sizes: 10px + 20px;
    $style: (
        color: #bdc3c7
    );
.container {
    @debug $style;
    @debug $font-sizes;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>Debug：<span class="token punctuation">(</span><span class="token property">color</span><span class="token punctuation">:</span> #bdc3c7<span class="token punctuation">)</span>
Debug：30px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>@error</strong></p><p><code>@error</code> 显示错误信息</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">reflexive-position</span><span class="token punctuation">(</span><span class="token variable">$property</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$property</span> != left and <span class="token variable">$property</span> != right </span><span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@error</span> <span class="token string">&quot;Property #{$property} must be either left or right.&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token property"><span class="token variable">$left-value</span></span><span class="token punctuation">:</span> <span class="token function">if</span><span class="token punctuation">(</span><span class="token variable">$property</span> <span class="token operator">==</span> right<span class="token punctuation">,</span> initial<span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$right-value</span></span><span class="token punctuation">:</span> <span class="token function">if</span><span class="token punctuation">(</span><span class="token variable">$property</span> <span class="token operator">==</span> right<span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">,</span> initial<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">left</span><span class="token punctuation">:</span> <span class="token variable">$left-value</span><span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> <span class="token variable">$right-value</span><span class="token punctuation">;</span>
  [dir=rtl] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> <span class="token variable">$right-value</span><span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> <span class="token variable">$left-value</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">reflexive-position</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span> 12px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span>
  <span class="token comment">// Error: Property top must be either left or right.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property">Error</span><span class="token punctuation">:</span> <span class="token string">&quot;Property top must be either left or right.&quot;</span>
  ╷
3 │     @error <span class="token string">&quot;Property #{$property} must be either left or right.&quot;</span><span class="token punctuation">;</span>
  │     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  example.scss <span class="token property">3</span><span class="token punctuation">:</span>5   <span class="token function">reflexive-position</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  example.scss <span class="token property">19</span><span class="token punctuation">:</span>3  root stylesheet

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>@warn</strong></p><p><code>@warn</code>显示警告性建议，会显示堆栈信息。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$known-prefixes</span></span><span class="token punctuation">:</span> webkit<span class="token punctuation">,</span> moz<span class="token punctuation">,</span> ms<span class="token punctuation">,</span> o<span class="token punctuation">;</span>

<span class="token keyword">@mixin</span> <span class="token function">prefix</span><span class="token punctuation">(</span><span class="token variable">$property</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token variable">$prefixes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$prefix</span> in <span class="token variable">$prefixes</span> </span><span class="token punctuation">{</span>
    <span class="token keyword">@if</span> <span class="token operator">not</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token variable">$known-prefixes</span><span class="token punctuation">,</span> <span class="token variable">$prefix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">@warn</span> <span class="token string">&quot;Unknown prefix #{$prefix}.&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token property">-<span class="token variable">#{$prefix}</span>-<span class="token variable">#{$property}</span></span><span class="token punctuation">:</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property"><span class="token variable">#{$property}</span></span><span class="token punctuation">:</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tilt </span><span class="token punctuation">{</span>
  <span class="token comment">// Oops, we typo&#39;d &quot;webkit&quot; as &quot;wekbit&quot;!</span>
  <span class="token keyword">@include</span> <span class="token function">prefix</span><span class="token punctuation">(</span>transform<span class="token punctuation">,</span> <span class="token function">rotate</span><span class="token punctuation">(</span>15deg<span class="token punctuation">)</span><span class="token punctuation">,</span> wekbit ms<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示警告信息</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property">Warning</span><span class="token punctuation">:</span> Unknown prefix wekbit.
    example.scss <span class="token property">6</span><span class="token punctuation">:</span>7   <span class="token function">prefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    example.scss <span class="token property">16</span><span class="token punctuation">:</span>3  root stylesheet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,120);function L(M,N){const a=c("ExternalLinkIcon");return o(),i("div",null,[u,s("p",null,[s("a",d,[n("Sass"),e(a)]),n(" 官方团队在2020年10月也正式宣布 "),r,n(" 将弃用，以及基于它的 "),k,n(" 和 "),v,n("，并且建议用户使用 "),m,n("，主要有以下几点说明：")]),b,s("p",null,[n("目前 Dart Sass 已经作为 Sass 最新的版本了，当执行 "),g,n(" 默认使用的是 Dart Sass 包，"),s("a",h,[n("vue-cli"),e(a)]),n("、"),s("a",f,[n("Vite"),e(a)]),n(" 脚手架默认也是使用最新版本 Dart sass，而且不需要安装 "),y,n("【之前安装 node-sass 经常失败】")]),s("p",null,[n("另外，"),s("a",x,[n("element-plus"),e(a)]),n(" 组件库也是使用 dart dass 模块的 "),s("a",q,[n("sass:map"),e(a)]),n(" 和 "),s("a",$,[n("@use"),e(a)]),n(" 重构了所有的 SCSS 变量，解决了由 "),w,n(" 造成的重复输出问题。")]),S,s("p",null,[n("Sass 默认支持"),s("a",_,[n("css变量"),e(a)]),n("，通过 scss 变量 和 css 变量管理可以很容易实现换肤，"),z,n(" 是这样实现的")]),C,s("p",null,[n("存在兼容性问题，仅在 Dart Sass 1.23.0 以上有效，"),s("a",j,[n("官方文档有兼容性介绍"),e(a)])]),D,s("p",null,[s("a",I,[n("Sass Map"),e(a)]),n(" 是不可变的，因此在处理 Map 对象时，返回的是一个新的 Map 对象，而不是在原有的 Map 对象上进行修改。")]),H])}const F=t(l,[["render",L],["__file","sass.html.vue"]]);export{F as default};
