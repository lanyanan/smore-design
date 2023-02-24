<template><div><h1 id="vue-cli-打包组件库迁移到-rollup-打包" tabindex="-1"><a class="header-anchor" href="#vue-cli-打包组件库迁移到-rollup-打包" aria-hidden="true">#</a> vue-cli 打包组件库迁移到 rollup 打包</h1>
<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3>
<p>vue-cli 打包是基于 webpack 打包的，缺点是：一 打包时间长，二是打包的体积大，这对组件库来说不是很好，而 rollup 打包库更合适，它的缺点是打包一些静态资源比如 图片、图标需要安装很多插件支持，所以尽量避免在组件库中增加静态资源，可以设计组件扩展插槽或接口</p>
<h3 id="安装-rollup" tabindex="-1"><a class="header-anchor" href="#安装-rollup" aria-hidden="true">#</a> 安装 rollup</h3>
<p>rollup 打包完整的 vue 项目需要用到大量的插件，做个分类</p>
<p><strong>基本的工程化插件</strong></p>
<ul>
<li>
<p>rollup 打包库</p>
</li>
<li>
<p>rollup-plugin-alias 路径别名</p>
</li>
<li>
<p>rollup-plugin-babel babel插件 将es6+转为es5</p>
</li>
<li>
<p>rollup-plugin-node-resolve  帮助 rollup 识别外部模块</p>
</li>
<li>
<p>rollup-plugin-commonjs 将commonjs模块转为es模块</p>
</li>
<li>
<p>rollup-plugin-terser 压缩代码</p>
</li>
<li>
<p>rollup-plugin-postcss css 打包插件，plugins 属性支持 css 预编译器 sass、less</p>
</li>
<li>
<p>rollup-plugin-copy 直接复制静态文件</p>
</li>
<li>
<p>rollup-plugin-filesize</p>
</li>
<li>
<p>rollup-plugin-img</p>
</li>
<li>
<p>rollup-plugin-json</p>
</li>
<li>
<p>rollup-plugin-replace</p>
</li>
</ul>
<p>其他依赖</p>
<ul>
<li>cross-env：跨 Mac、Window、Linux 平台运行 node 命令</li>
<li>rimraf：删除目录文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>script: <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  <span class="token string">"rollup:lib"</span><span class="token builtin class-name">:</span> <span class="token string">"cross-env NODE_ENV=production rimraf ./lib &amp;&amp; node ./build/rollup.build"</span>,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code v-pre>npm run rollup:lib</code>, 将 <code v-pre>process.env.NODE_ENV</code> 赋值 <code v-pre>production</code> 生产环境标识打包，删除 <code v-pre>lib</code> 目录，执行 <code v-pre>build/rollup.build.js</code> 打包文件</p>
<h3 id="rollup-plugin-vue-打包-vue-文件" tabindex="-1"><a class="header-anchor" href="#rollup-plugin-vue-打包-vue-文件" aria-hidden="true">#</a> rollup-plugin-vue 打包 vue 文件</h3>
<p><code v-pre>rollup-plugin-vue</code> 用于处理 <code v-pre>.vue</code> 文件。<code v-pre>vue2</code> 和 <code v-pre>vue3</code> 项目所用的 <code v-pre>rollup-plugin-vue</code> 版本不一样，vue的编译器也不一样</p>
<ul>
<li>vue2：<code v-pre>rollup-plugin-vue^5.1.9</code> + <code v-pre>vue-template-compiler</code></li>
<li>vue3：<code v-pre>rollup-plugin-vue^6.0.0</code> + <code v-pre>@vue/compiler-sfc</code></li>
</ul>
<p>Vue2 项目安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yan <span class="token function">add</span> rollup-plugin-vue@5.1.9 vue-template-compiler <span class="token parameter variable">--D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改 <code v-pre>rollup.config.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'rollup-plugin-vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rollup-命令行" tabindex="-1"><a class="header-anchor" href="#rollup-命令行" aria-hidden="true">#</a> rollup 命令行</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>-i, --input &lt;filename>      要打包的文件（必须）
-o, --file &lt;output>         输出的文件 (如果没有这个参数，则直接输出到控制台)
-f, --format &lt;format>       输出的文件类型 (amd, cjs, esm, iife, umd)
-e, --external &lt;ids>        将模块ID的逗号分隔列表排除
-g, --globals &lt;pairs>       以`module ID:Global` 键值对的形式，用逗号分隔开
                              任何定义在这里模块ID定义添加到外部依赖
-n, --name &lt;name>           生成UMD模块的名字
-h, --help                  输出 help 信息
-m, --sourcemap             生成 sourcemap (`-m inline` for inline map)
--amd.id                    AMD模块的ID，默认是个匿名函数
--amd.define                使用Function来代替`define`
--no-strict                 在生成的包中省略`"use strict";`
--no-conflict               对于UMD模块来说，给全局变量生成一个无冲突的方法
--intro                     在打包好的文件的块的内部(wrapper内部)的最顶部插入一段内容
--outro                     在打包好的文件的块的内部(wrapper内部)的最底部插入一段内容
--banner                    在打包好的文件的块的外部(wrapper外部)的最顶部插入一段内容
--footer                    在打包好的文件的块的外部(wrapper外部)的最底部插入一段内容
--interop                   包含公共的模块（这个选项是默认添加的）
--silent                    不要将警告打印到控制台
-w, --watch                  监听源文件是否有改动，如果有改动，重新打包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="postcss-插件打包样式" tabindex="-1"><a class="header-anchor" href="#postcss-插件打包样式" aria-hidden="true">#</a> PostCSS 插件打包样式</h3>
<p>安装 <code v-pre>rollup-plugin-postcss</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev rollup-plugin-postcss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改 <code v-pre>rollup.config.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token function">postcss</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'.css'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>postcss</code> 好处是它支持插件化，可以使用你需要的那些特性，去掉不想用的特性，介绍项目中用到的几个插件</p>
<ul>
<li><code v-pre>postcss-simple-vars</code> —— 这个插件允许你试用 <code v-pre>Sass</code> 式的变量，比如说：可以声明<code v-pre>$myColor:#fff</code> ，并在代码中像 <code v-pre>color:$myColor</code> 这样使用</li>
<li><code v-pre>postcss-css-variables</code></li>
<li><code v-pre>postcss-nested</code> —— 这个插件允许使用嵌套的语法</li>
<li><code v-pre>postcss-cssnext</code> —— 这个插件可以让你使用更为现代甚至是面向未来的CSS语法</li>
<li><code v-pre>cssnano</code> —— 这个插件可以将输出的CSS压缩和简化</li>
</ul>
<p>在 <code v-pre>postcss</code> 的配置对象中增加一个 <code v-pre>plugins</code> 属性</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token function">postcss</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">simplevars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
      <span class="token function">nested</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
      <span class="token function">cssnext</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">warnForDuplicates</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
      <span class="token function">cssnano</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'.css'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code v-pre>cssnext()</code> 传入 <code v-pre>{ warnForDuplicates:false }</code>，因为 <code v-pre>cssnext()</code> 和 <code v-pre>cssnano()</code> 都会使用到 <code v-pre>Autoprefixer</code>，这会触发一个警告。<code v-pre>Autoprefixer</code> 会执行两次并且不会报出警告，放弃使用</p>
</div>
<p><strong>支持 scss 打包</strong></p>
<p>安装 <code v-pre>sass</code>，<code v-pre>node-sass</code>, <code v-pre>sass-loader</code></p>
<h3 id="为rollup增加一个监听插件" tabindex="-1"><a class="header-anchor" href="#为rollup增加一个监听插件" aria-hidden="true">#</a> 为Rollup增加一个监听插件</h3>
</div></template>


