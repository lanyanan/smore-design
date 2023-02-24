<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p><a href="https://github.com/JefferyXZF/douluo-ui" target="_blank" rel="noopener noreferrer">douluo-ui 组件库<ExternalLinkIcon/></a> 是基于 element-ui 实现的，那么实现换肤分两步；一是 <code v-pre>element-ui</code> 的换肤方案；二是 <code v-pre>douluo-ui组件库</code> 的换肤方案</p>
<h2 id="element-ui-的换肤" tabindex="-1"><a class="header-anchor" href="#element-ui-的换肤" aria-hidden="true">#</a> element-ui 的换肤</h2>
<h3 id="方案一-在线生成" tabindex="-1"><a class="header-anchor" href="#方案一-在线生成" aria-hidden="true">#</a> 方案一：在线生成</h3>
<p>访问 <a href="https://elementui.github.io/theme-chalk-preview/#/zh-CN" target="_blank" rel="noopener noreferrer">Element 在线主题生成工具<ExternalLinkIcon/></a>，选择自己所需的颜色，下载主题压缩包，解压到项目系统中，按如下方式引入系统</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Element <span class="token keyword">from</span> <span class="token string">'element-ui'</span>
<span class="token keyword">import</span> <span class="token string">'../theme/index.css'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Element<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>优点：替换方便</li>
<li>缺点：只能替换一种主题样式</li>
</ul>
<h3 id="方案二-直接修改-scss-变量" tabindex="-1"><a class="header-anchor" href="#方案二-直接修改-scss-变量" aria-hidden="true">#</a> 方案二：直接修改 SCSS 变量</h3>
<p>Element 的 <code v-pre>theme-chalk</code> 使用 SCSS 编写，如果项目也使用了 SCSS，那么可以直接在项目中改变 Element 的样式变量。新建一个样式文件，例如 <code v-pre>element-variables.scss</code>，写入以下内容：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/* 改变主题色变量 */</span>
$<span class="token property">--color-primary</span><span class="token punctuation">:</span> teal<span class="token punctuation">;</span>

<span class="token comment">/* 改变 icon 字体路径变量，必需 */</span>
$<span class="token property">--font-path</span><span class="token punctuation">:</span> <span class="token string">'~element-gui/lib/theme-chalk/fonts'</span><span class="token punctuation">;</span>

<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"~element-gui/packages/theme-chalk/src/index"</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后，在项目的入口文件 <code v-pre>src/main.js</code> 中，直接引入以上样式文件即可（无需引入 Element 编译好的 CSS 文件，因为已经 import 了）：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Element <span class="token keyword">from</span> <span class="token string">'element-ui'</span>
<span class="token keyword">import</span> <span class="token string">'./element-variables.scss'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Element<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用默认颜色变量：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>$<span class="token property">--color-primary</span><span class="token punctuation">:</span> #1890FF<span class="token punctuation">;</span>
$<span class="token property">--color-success</span><span class="token punctuation">:</span> #57B21C<span class="token punctuation">;</span>
$<span class="token property">--color-warning</span><span class="token punctuation">:</span> #FC9306<span class="token punctuation">;</span>
$<span class="token property">--color-danger</span><span class="token punctuation">:</span> #E82F2F<span class="token punctuation">;</span>
$<span class="token property">--color-info</span><span class="token punctuation">:</span> #999999<span class="token punctuation">;</span>

$<span class="token property">--color-text-primary</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
$<span class="token property">--color-text-empty</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
$<span class="token property">--color-text-disabled</span><span class="token punctuation">:</span> #666666<span class="token punctuation">;</span>
$<span class="token property">--color-text-readonly</span><span class="token punctuation">:</span> #666666<span class="token punctuation">;</span>
$<span class="token property">--color-text-placeholder</span><span class="token punctuation">:</span> #999999<span class="token punctuation">;</span>

$<span class="token property">--border-color-base</span><span class="token punctuation">:</span> #D2D2D2<span class="token punctuation">;</span>
$<span class="token property">--border-color-light</span><span class="token punctuation">:</span> #999999<span class="token punctuation">;</span>

$<span class="token property">--icon-color</span><span class="token punctuation">:</span> #666666<span class="token punctuation">;</span>

$<span class="token property">--background-color-base</span><span class="token punctuation">:</span> #EFEFEF<span class="token punctuation">;</span>
$<span class="token property">--background-color-dark</span><span class="token punctuation">:</span> #E5E5E5<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：覆盖字体路径变量是必需的，而且这种方案有个问题，调试会重复加载多份样式，听说上生产环境会少点，原因可能 定义了 <code v-pre>common.scss</code> 在多个组件 <code v-pre>scss</code> 前面引入</p>
<p>方案实现</p>
<ul>
<li>优点：灵活，可以自定义替换主题和常用的颜色变量等</li>
<li>缺点：只能实现一种换肤</li>
</ul>
<h3 id="方案三-使用element的命令行主题工具" tabindex="-1"><a class="header-anchor" href="#方案三-使用element的命令行主题工具" aria-hidden="true">#</a> 方案三：使用Element的命令行主题工具</h3>
<p>由于 <code v-pre>element-ui</code> 的样式单独维护，官方将它抽象出来做成命令行工具使用，实现换肤分为5步</p>
<p><strong>1. 安装工具</strong></p>
<p>a) 首先安装<a href="https://github.com/ElementUI/element-theme" target="_blank" rel="noopener noreferrer">主题生成工具<ExternalLinkIcon/></a>，可以全局安装或者安装在当前项目下，推荐安装在项目里，方便别人 clone 项目时能直接安装依赖并启动，这里以全局安装做演示。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i element-theme <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>b) 安装白垩主题，可以从 npm 安装或者从 GitHub 拉取最新代码。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 从 npm</span>
<span class="token function">npm</span> i element-theme-chalk <span class="token parameter variable">-D</span>

<span class="token comment"># 从 GitHub</span>
<span class="token function">npm</span> i https://github.com/ElementUI/theme-chalk <span class="token parameter variable">-D</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 初始化变量文件</strong></p>
<p>主题生成工具安装成功后，全局安装可以在命令行里通过 <code v-pre>et</code> 调用工具，如果安装在当前目录下，需要通过 <code v-pre>node_modules/.bin/et</code> 访问到命令。执行 <code v-pre>-i</code> 初始化变量文件。默认输出到 <code v-pre>element-variables.scss</code> ，当然你可以传参数指定文件输出目录。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>et <span class="token parameter variable">-i</span> <span class="token punctuation">[</span>可以自定义变量文件<span class="token punctuation">]</span>

<span class="token operator">></span> ✔ Generator variables <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用默认配置，执行后当前目录会有一个 <code v-pre>element-variables.scss</code> 文件。内部包含了主题所用到的所有变量，它们使用 SCSS 的格式定义。大致结构如下：</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$--color-primary</span></span><span class="token punctuation">:</span> #409EFF <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$--color-primary-light-1</span></span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$--color-white</span><span class="token punctuation">,</span> <span class="token variable">$--color-primary</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">/* 53a8ff */</span>
<span class="token property"><span class="token variable">$--color-primary-light-2</span></span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$--color-white</span><span class="token punctuation">,</span> <span class="token variable">$--color-primary</span><span class="token punctuation">,</span> 20%<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">/* 66b1ff */</span>
<span class="token property"><span class="token variable">$--color-primary-light-3</span></span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$--color-white</span><span class="token punctuation">,</span> <span class="token variable">$--color-primary</span><span class="token punctuation">,</span> 30%<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">/* 79bbff */</span>
<span class="token property"><span class="token variable">$--color-primary-light-4</span></span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$--color-white</span><span class="token punctuation">,</span> <span class="token variable">$--color-primary</span><span class="token punctuation">,</span> 40%<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">/* 8cc5ff */</span>
<span class="token property"><span class="token variable">$--color-primary-light-5</span></span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$--color-white</span><span class="token punctuation">,</span> <span class="token variable">$--color-primary</span><span class="token punctuation">,</span> 50%<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">/* a0cfff */</span>
<span class="token property"><span class="token variable">$--color-primary-light-6</span></span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$--color-white</span><span class="token punctuation">,</span> <span class="token variable">$--color-primary</span><span class="token punctuation">,</span> 60%<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">/* b3d8ff */</span>
<span class="token property"><span class="token variable">$--color-primary-light-7</span></span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$--color-white</span><span class="token punctuation">,</span> <span class="token variable">$--color-primary</span><span class="token punctuation">,</span> 70%<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">/* c6e2ff */</span>
<span class="token property"><span class="token variable">$--color-primary-light-8</span></span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$--color-white</span><span class="token punctuation">,</span> <span class="token variable">$--color-primary</span><span class="token punctuation">,</span> 80%<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">/* d9ecff */</span>
<span class="token property"><span class="token variable">$--color-primary-light-9</span></span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$--color-white</span><span class="token punctuation">,</span> <span class="token variable">$--color-primary</span><span class="token punctuation">,</span> 90%<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">/* ecf5ff */</span>

<span class="token property"><span class="token variable">$--color-success</span></span><span class="token punctuation">:</span> #67c23a <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$--color-warning</span></span><span class="token punctuation">:</span> #e6a23c <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$--color-danger</span></span><span class="token punctuation">:</span> #f56c6c <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$--color-info</span></span><span class="token punctuation">:</span> #909399 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 修改变量</strong></p>
<p>直接编辑element-variables.scss文件，例如修改主题色为红色。</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$--color-primary</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4. 编译主题</strong></p>
<p>保存文件后，到命令行里执行et编译主题，如果你想启用 <code v-pre>watch</code> 模式，实时编译主题，增加 <code v-pre>-w</code> 参数；如果你在初始化时指定了自定义变量文件，则需要增加 <code v-pre>-c</code> 参数，并带上你的变量文件名</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>et

<span class="token operator">></span> ✔ build theme font
<span class="token operator">></span> ✔ build element theme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. 引入自定义主题</strong></p>
<p>默认情况下编译的主题目录是放在 <code v-pre>./theme</code> 下，你可以通过 <code v-pre>-o</code> 参数指定打包目录。像引入默认主题一样，在代码里直接引用<code v-pre>theme/index.css</code> 文件即可。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'../theme/index.css'</span>
<span class="token keyword">import</span> ElementUI <span class="token keyword">from</span> <span class="token string">'element-ui'</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementUI<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>element-theme 官方换肤方案<a href="https://element.eleme.io/#/zh-CN/component/custom-theme" target="_blank" rel="noopener noreferrer">参考这里<ExternalLinkIcon/></a></p>
<p>这种换肤方案缺点：只能使用一种主题，安装比较麻烦，容易踩坑安装失败，不推荐</p>
<h3 id="自定义主题色【推荐】" tabindex="-1"><a class="header-anchor" href="#自定义主题色【推荐】" aria-hidden="true">#</a> 自定义主题色【推荐】</h3>
<p>由于项目会员等级有 4 种主题（未来可能会新增），上面的实现方案有局限性，如果实现的话要提前准备 4 种主题，这样做的结果会增加维护成本，而且拓展性不好，增加一种新的主题要重新生成一份新的样式，打包体积也会变大</p>
<p>参考 <a href="https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/theme.html" target="_blank" rel="noopener noreferrer">vue-element-admin 更换主题<ExternalLinkIcon/></a>，通过自定义换肤的方案实现，这种方式比较灵活，可以自定义任意一种主题颜色，无需准备多套主题，可以自由动态换肤；缺点是自定义不够，只支持基础颜色的切换。</p>
<h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h4>
<p>element-ui 2.0 版本之后所有的样式都是基于 SCSS 编写的，所有的颜色都是基于几个基础颜色变量来设置的，所以就不难实现动态换肤了，只要找到那几个颜色变量修改它就可以了。</p>
<p>Element官方实现了一个demo：<a href="https://elementui.github.io/theme-chalk-preview/#/zh-CN" target="_blank" rel="noopener noreferrer">在线主题生成工具<ExternalLinkIcon/></a>。作者在 <a href="https://github.com/ElemeFE/element/issues/3054" target="_blank" rel="noopener noreferrer">issue<ExternalLinkIcon/></a> 中回复了他的方案：</p>
<ol>
<li>先把默认主题文件中涉及到颜色的 CSS 值替换成关键词：<a href="https://github.com/ElementUI/theme-preview/blob/master/src/app.vue#L250-L274" target="_blank" rel="noopener noreferrer">源码<ExternalLinkIcon/></a></li>
<li>根据用户选择的主题色生成一系列对应的颜色值：<a href="https://github.com/ElementUI/theme-preview/blob/master/src/utils/formula.json" target="_blank" rel="noopener noreferrer">源码<ExternalLinkIcon/></a></li>
<li>把关键词再换回刚刚生成的相应的颜色值：<a href="https://github.com/ElementUI/theme-preview/blob/master/src/utils/color.js" target="_blank" rel="noopener noreferrer">源码<ExternalLinkIcon/></a></li>
<li>直接在页面上加 style 标签，把生成的样式填进去<a href="https://github.com/ElementUI/theme-preview/blob/master/src/app.vue#L198-L211" target="_blank" rel="noopener noreferrer">源码<ExternalLinkIcon/></a></li>
</ol>
<p>根据以上方案，简单说明一下实现原理：</p>
<ul>
<li>设计对外暴露拓展配置，包括 <code v-pre>element-ui</code> 的版本号 或 <code v-pre>element-ui</code> 样式链接 、新的主题颜色、旧的主题颜色、插入 dom 的位置等</li>
<li>根据新、旧主题颜色，转化为 16 进制的红、绿、蓝颜色值，生成 <code v-pre>10%, 20%, ……, 90%</code> 混合颜色，得到两个颜色数组, 例如 <code v-pre>themeCluster</code>， <code v-pre>originalCluster</code></li>
<li>请求 <code v-pre>element-ui</code> 样式文件，保存到内存中，通过正则匹配，将 <code v-pre>themeCluster</code>， <code v-pre>originalCluster</code> 两个数组替换样式文件</li>
<li>最后将替换的新样式插入到 <code v-pre>dom</code> 上，覆盖 element-ui 原来的样式</li>
</ul>
<h4 id="实现新功能" tabindex="-1"><a class="header-anchor" href="#实现新功能" aria-hidden="true">#</a> 实现新功能</h4>
<ol>
<li>创建 <code v-pre>update-element-theme.js</code> 文件，定义替换和加载样式方法</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 样式资源包</span>
<span class="token keyword">let</span> chalk <span class="token operator">=</span> <span class="token string">''</span>
<span class="token comment">// 默认主题</span>
<span class="token keyword">let</span> defaultTheme <span class="token operator">=</span> <span class="token string">'#409EFF'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">tintColor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">color<span class="token punctuation">,</span> tint</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  color <span class="token operator">=</span> color<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'#'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> red <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> green <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> blue <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>tint <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// when primary color is in its rgb space</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>red<span class="token punctuation">,</span> green<span class="token punctuation">,</span> blue<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    red <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>tint <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">255</span> <span class="token operator">-</span> red<span class="token punctuation">)</span><span class="token punctuation">)</span>
    green <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>tint <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">255</span> <span class="token operator">-</span> green<span class="token punctuation">)</span><span class="token punctuation">)</span>
    blue <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>tint <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">255</span> <span class="token operator">-</span> blue<span class="token punctuation">)</span><span class="token punctuation">)</span>

    red <span class="token operator">=</span> red<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
    green <span class="token operator">=</span> green<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
    blue <span class="token operator">=</span> blue<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>red<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>green<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>blue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">shadeColor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">color<span class="token punctuation">,</span> shade</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> red <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> green <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> blue <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>

  red <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> shade<span class="token punctuation">)</span> <span class="token operator">*</span> red<span class="token punctuation">)</span>
  green <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> shade<span class="token punctuation">)</span> <span class="token operator">*</span> green<span class="token punctuation">)</span>
  blue <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> shade<span class="token punctuation">)</span> <span class="token operator">*</span> blue<span class="token punctuation">)</span>

  red <span class="token operator">=</span> red<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
  green <span class="token operator">=</span> green<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
  blue <span class="token operator">=</span> blue<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>red<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>green<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>blue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">getThemeCluster</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">theme</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> clusters <span class="token operator">=</span> <span class="token punctuation">[</span>theme<span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    clusters<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">tintColor</span><span class="token punctuation">(</span>theme<span class="token punctuation">,</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  clusters<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">shadeColor</span><span class="token punctuation">(</span>theme<span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> clusters
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">getCSSString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        chalk <span class="token operator">=</span> xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">@font-face{[^}]+}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'样式下载失败'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">updateStyle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">style<span class="token punctuation">,</span> oldCluster<span class="token punctuation">,</span> newCluster</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newStyle <span class="token operator">=</span> style
  oldCluster<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">color<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    newStyle <span class="token operator">=</span> newStyle<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>color<span class="token punctuation">,</span> <span class="token string">'ig'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> newCluster<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> newStyle
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">updateElementTheme</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    version <span class="token operator">=</span> <span class="token string">'2.15.8'</span><span class="token punctuation">,</span>
    oldTheme<span class="token punctuation">,</span>
    primaryColor<span class="token punctuation">,</span>
    appendDom<span class="token punctuation">,</span>
    insertBefore<span class="token punctuation">,</span>
    cssUrl<span class="token punctuation">,</span>
    chalkStyle <span class="token operator">=</span> <span class="token string">'chalk-style'</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> options
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> primaryColor <span class="token operator">!==</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

  <span class="token keyword">const</span> themeCluster <span class="token operator">=</span> <span class="token function">getThemeCluster</span><span class="token punctuation">(</span>primaryColor<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'#'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> originalCluster <span class="token operator">=</span> <span class="token function">getThemeCluster</span><span class="token punctuation">(</span><span class="token punctuation">(</span>oldTheme <span class="token operator">||</span> defaultTheme<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'#'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">chalkHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newStyle <span class="token operator">=</span> <span class="token function">updateStyle</span><span class="token punctuation">(</span>chalk<span class="token punctuation">,</span> originalCluster<span class="token punctuation">,</span> themeCluster<span class="token punctuation">)</span>
    <span class="token comment">// 覆盖原来的样式</span>
    chalk <span class="token operator">=</span> newStyle

    <span class="token keyword">let</span> styleTag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>styleTag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      styleTag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'style'</span><span class="token punctuation">)</span>
      styleTag<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>appendDom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>insertBefore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          appendDom<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>styleTag<span class="token punctuation">,</span> appendDom<span class="token punctuation">.</span>nextSibling<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          appendDom<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>styleTag<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>styleTag<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    styleTag<span class="token punctuation">.</span>innerText <span class="token operator">=</span> newStyle
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>chalk<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> cssUrl <span class="token operator">||</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://unpkg.com/element-ui@</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/lib/theme-chalk/index.css</span><span class="token template-punctuation string">`</span></span>
    <span class="token keyword">await</span> <span class="token function">getCSSString</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">chalkHandler</span><span class="token punctuation">(</span>chalkStyle<span class="token punctuation">)</span>
  defaultTheme <span class="token operator">=</span> primaryColor
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在入口文件引入组件，调用 <code v-pre>updateElementTheme</code> 方法</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> updateElementTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'douluo-ui'</span>
<span class="token function">updateElementTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  oldTheme<span class="token punctuation">,</span>
  primaryColor
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：为了避免页面出现闪烁（原因样式是异步加载，会先渲染 element 主题颜色，再渲染自定义颜色），可以在入口文件封装成方法，使用 <code v-pre>async/await</code> 初始化变量文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">import</span> DouluoUI <span class="token keyword">from</span> <span class="token string">'douluo-ui'</span>

<span class="token keyword">const</span> <span class="token function-variable function">initApp</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">await</span> DouluoUI<span class="token punctuation">.</span><span class="token function">updateElementTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    oldTheme<span class="token punctuation">,</span>
    primaryColor
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    router<span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">initApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>异常处理，如果 css 样式加载失败，会导致页面加载失败，打不开，需要捕获异常处理</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">initApp</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> DouluoUI<span class="token punctuation">.</span><span class="token function">updateElementTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      oldTheme<span class="token punctuation">,</span>
      primaryColor
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      router<span class="token punctuation">,</span>
      <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      router<span class="token punctuation">,</span>
      <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'主题更新失败'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，样式最好放在公司内部的 cdn 上，保证样式资源稳定安全，同时最好做一下降级处理方案兼容加载失败的情况</p>
<h2 id="组件库的换肤" tabindex="-1"><a class="header-anchor" href="#组件库的换肤" aria-hidden="true">#</a> 组件库的换肤</h2>
<p>组件库参考 <code v-pre>element-plus</code> 使用 <code v-pre>SCSS</code> 变量和 <code v-pre>css 自定义属性</code>，所以实现换肤比较简单，参考
<a href="https://element-plus.gitee.io/zh-CN/guide/theming.html#%E9%80%9A%E8%BF%87-css-%E5%8F%98%E9%87%8F%E8%AE%BE%E7%BD%AE" target="_blank" rel="noopener noreferrer">element-plus CSS 变量设置<ExternalLinkIcon/></a>，使用 <code v-pre>document.documentElement.style.setProperty</code> 设置样式，覆盖 <code v-pre>root</code> 的样式</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">updateUITheme</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    oldTheme <span class="token operator">=</span> <span class="token string">'#409EFF'</span><span class="token punctuation">,</span>
    primaryColor<span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> options
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>primaryColor<span class="token punctuation">)</span> <span class="token keyword">return</span>

  <span class="token keyword">await</span> <span class="token function">updateElementTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    oldTheme<span class="token punctuation">,</span>
    <span class="token literal-property property">primaryColor</span><span class="token operator">:</span> primaryColor
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">--</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cssNamespace<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-color-primary</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> primaryColor<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">tintColor</span><span class="token punctuation">(</span>primaryColor<span class="token punctuation">,</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">*</span> i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">--</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cssNamespace<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-color-primary-light-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> color<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://files.mdnice.com/user/26477/d68b4227-0f76-4c98-8828-c55a56c85c3c.png" alt=""></p>
<h3 id="兼容-button-两种主题色" tabindex="-1"><a class="header-anchor" href="#兼容-button-两种主题色" aria-hidden="true">#</a> 兼容 button 两种主题色</h3>
<p>新的 UI 规范 <code v-pre>button</code> 的主要按钮由两种颜色组成，不是默认的白色，如下</p>
<p><img src="https://files.mdnice.com/user/26477/92b0c972-d1f1-4947-abd0-5f0dbcd81b72.png" alt=""></p>
<p>为了实现这种交换，在 <a href="https://github.com/JefferyXZF/douluo-ui/blob/develop/styles/src/mixins/_button.scss#L366-L380" target="_blank" rel="noopener noreferrer">button-variant<ExternalLinkIcon/></a> 对 <code v-pre>primary</code> 类型做判断，定义一份新的数据结构，根据 button 组件的 css 自定义属性实现换肤，文件定义在 <a href="https://github.com/JefferyXZF/douluo-ui/blob/develop/src/utils/update-ui-theme.js" target="_blank" rel="noopener noreferrer">update-ui-theme.js<ExternalLinkIcon/></a></p>
<p><img src="https://files.mdnice.com/user/26477/13e620c4-5c8e-4fd8-b296-8dd02b54efbd.png" alt=""></p>
</div></template>


