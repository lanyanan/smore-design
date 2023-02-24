<template><div><h1 id="自定义主题" tabindex="-1"><a class="header-anchor" href="#自定义主题" aria-hidden="true">#</a> 自定义主题</h1>
<p>Element 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。我们提供了四种方法，可以进行不同程度的样式自定义。</p>
<h3 id="主题编辑器" tabindex="-1"><a class="header-anchor" href="#主题编辑器" aria-hidden="true">#</a> 主题编辑器</h3>
<p>使用<RouterLink to="/packages/antv/#/zh-CN/theme">在线主题编辑器</RouterLink>，可以修改定制 Element 所有全局和组件的 Design Tokens，并可以方便地实时预览样式改变后的视觉。同时它还可以基于新的定制样式生成完整的样式文件包，供直接下载使用（关于如何使用下载的主题包，请参考本节「引入自定义主题」部分）。</p>
<p>也可以使用<a href="https://chrome.google.com/webstore/detail/element-theme-roller/lifkjlojflekabbmlddfccdkphlelmim" target="_blank" rel="noopener noreferrer">主题编辑器 Chrome 插件<ExternalLinkIcon/></a>，在任何使用 Element 开发的网站上配置并实时预览主题。</p>
<img src="https://shadow.elemecdn.com/app/sns-client/element-theme-editor2.e16c6a01-806d-11e9-bc23-21435c54c509.png" style="width: 100%;margin: 30px auto 0;display: block;">
<h3 id="仅替换主题色" tabindex="-1"><a class="header-anchor" href="#仅替换主题色" aria-hidden="true">#</a> 仅替换主题色</h3>
<p>如果仅希望更换 Element 的主题色，推荐使用<a href="https://elementui.github.io/theme-chalk-preview" target="_blank" rel="noopener noreferrer">在线主题生成工具<ExternalLinkIcon/></a>。Element 默认的主题色是鲜艳、友好的蓝色。通过替换主题色，能够让 Element 的视觉更加符合具体项目的定位。</p>
<p>使用上述工具，可以很方便地实时预览主题色改变之后的视觉，同时它还可以基于新的主题色生成完整的样式文件包，供直接下载使用（关于如何使用下载的主题包，请参考本节「引入自定义主题」和「搭配插件按需引入组件主题」部分）。</p>
<h3 id="在项目中改变-scss-变量" tabindex="-1"><a class="header-anchor" href="#在项目中改变-scss-变量" aria-hidden="true">#</a> 在项目中改变 SCSS 变量</h3>
<p>Element 的 theme-chalk 使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 Element 的样式变量。新建一个样式文件，例如 <code v-pre>element-variables.scss</code>，写入以下内容：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>/* 改变主题色变量 */
$--color-primary: teal;

/* 改变 icon 字体路径变量，必需 */
$--font-path: '~element-ui/lib/theme-chalk/fonts';

@import "~element-ui/packages/theme-chalk/src/index";
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 Element 编译好的 CSS 文件）：</p>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>import Vue from 'vue'
import Element from 'element-ui'
import './element-variables.scss'

Vue.use(Element)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>需要注意的是，覆盖字体路径变量是必需的，将其赋值为 Element 中 icon 图标所在的相对路径即可。</p>
</div>
<h3 id="命令行主题工具" tabindex="-1"><a class="header-anchor" href="#命令行主题工具" aria-hidden="true">#</a> 命令行主题工具</h3>
<p>如果你的项目没有使用 SCSS，那么可以使用命令行主题工具进行深层次的主题定制：</p>
<h4 id="安装工具" tabindex="-1"><a class="header-anchor" href="#安装工具" aria-hidden="true">#</a> <strong>安装工具</strong></h4>
<p>首先安装「主题生成工具」，可以全局安装或者安装在当前项目下，推荐安装在项目里，方便别人 clone 项目时能直接安装依赖并启动，这里以全局安装做演示。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i element-theme <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装白垩主题，可以从 npm 安装或者从 GitHub 拉取最新代码。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 从 npm</span>
<span class="token function">npm</span> i element-theme-chalk <span class="token parameter variable">-D</span>

<span class="token comment"># 从 GitHub</span>
<span class="token function">npm</span> i https://github.com/ElementUI/theme-chalk <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="初始化变量文件" tabindex="-1"><a class="header-anchor" href="#初始化变量文件" aria-hidden="true">#</a> <strong>初始化变量文件</strong></h4>
<p>主题生成工具安装成功后，如果全局安装可以在命令行里通过 <code v-pre>et</code> 调用工具，如果安装在当前目录下，需要通过 <code v-pre>node_modules/.bin/et</code> 访问到命令。执行 <code v-pre>-i</code> 初始化变量文件。默认输出到 <code v-pre>element-variables.scss</code>，当然你可以传参数指定文件输出目录。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>et <span class="token parameter variable">-i</span> <span class="token punctuation">[</span>可以自定义变量文件<span class="token punctuation">]</span>

<span class="token operator">></span> ✔ Generator variables <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用默认配置，执行后当前目录会有一个 <code v-pre>element-variables.scss</code> 文件。内部包含了主题所用到的所有变量，它们使用 SCSS 的格式定义。大致结构如下：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>$<span class="token property">--color-primary</span><span class="token punctuation">:</span> #409EFF !default<span class="token punctuation">;</span>
$<span class="token property">--color-primary-light-1</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 10%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* 53a8ff */</span>
$<span class="token property">--color-primary-light-2</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 20%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* 66b1ff */</span>
$<span class="token property">--color-primary-light-3</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 30%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* 79bbff */</span>
$<span class="token property">--color-primary-light-4</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 40%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* 8cc5ff */</span>
$<span class="token property">--color-primary-light-5</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* a0cfff */</span>
$<span class="token property">--color-primary-light-6</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 60%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* b3d8ff */</span>
$<span class="token property">--color-primary-light-7</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 70%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* c6e2ff */</span>
$<span class="token property">--color-primary-light-8</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 80%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* d9ecff */</span>
$<span class="token property">--color-primary-light-9</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 90%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* ecf5ff */</span>

$<span class="token property">--color-success</span><span class="token punctuation">:</span> #67c23a !default<span class="token punctuation">;</span>
$<span class="token property">--color-warning</span><span class="token punctuation">:</span> #e6a23c !default<span class="token punctuation">;</span>
$<span class="token property">--color-danger</span><span class="token punctuation">:</span> #f56c6c !default<span class="token punctuation">;</span>
$<span class="token property">--color-info</span><span class="token punctuation">:</span> #909399 !default<span class="token punctuation">;</span>

...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改变量" tabindex="-1"><a class="header-anchor" href="#修改变量" aria-hidden="true">#</a> <strong>修改变量</strong></h4>
<p>直接编辑 <code v-pre>element-variables.scss</code> 文件，例如修改主题色为红色。</p>
<div class="language-CSS line-numbers-mode" data-ext="CSS"><pre v-pre class="language-CSS"><code>$--color-primary: red;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="编译主题" tabindex="-1"><a class="header-anchor" href="#编译主题" aria-hidden="true">#</a> <strong>编译主题</strong></h4>
<p>保存文件后，到命令行里执行 <code v-pre>et</code> 编译主题，如果你想启用 <code v-pre>watch</code> 模式，实时编译主题，增加 <code v-pre>-w</code> 参数；如果你在初始化时指定了自定义变量文件，则需要增加 <code v-pre>-c</code> 参数，并带上你的变量文件名。默认情况下编译的主题目录是放在 <code v-pre>./theme</code> 下，你可以通过 <code v-pre>-o</code> 参数指定打包目录。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>et

<span class="token operator">></span> ✔ build theme font
<span class="token operator">></span> ✔ build element theme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用自定义主题" tabindex="-1"><a class="header-anchor" href="#使用自定义主题" aria-hidden="true">#</a> 使用自定义主题</h3>
<h4 id="引入自定义主题" tabindex="-1"><a class="header-anchor" href="#引入自定义主题" aria-hidden="true">#</a> <strong>引入自定义主题</strong></h4>
<p>和引入默认主题一样，在代码里直接引用「在线主题编辑器」或「命令行工具」生成的主题的 <code v-pre>theme/index.css</code> 文件即可。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'../theme/index.css'</span>
<span class="token keyword">import</span> ElementUI <span class="token keyword">from</span> <span class="token string">'element-ui'</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementUI<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="搭配插件按需引入组件主题" tabindex="-1"><a class="header-anchor" href="#搭配插件按需引入组件主题" aria-hidden="true">#</a> <strong>搭配插件按需引入组件主题</strong></h4>
<p>如果是搭配 <code v-pre>babel-plugin-component</code> 一起使用，只需要修改 <code v-pre>.babelrc</code> 的配置，指定 <code v-pre>styleLibraryName</code> 路径为自定义主题相对于 <code v-pre>.babelrc</code> 的路径，注意要加 <code v-pre>~</code>。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">"component"</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"element-ui"</span><span class="token punctuation">,</span>
        <span class="token property">"styleLibraryName"</span><span class="token operator">:</span> <span class="token string">"~theme"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不清楚 <code v-pre>babel-plugin-component</code> 是什么，请阅读 <a href="./#/zh-CN/component/quickstart">快速上手</a> 一节。更多 <code v-pre>element-theme</code> 用法请参考<a href="https://github.com/ElementUI/element-theme" target="_blank" rel="noopener noreferrer">项目仓库<ExternalLinkIcon/></a>。</p>
</div></template>


