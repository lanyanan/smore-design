<template><div><h1 id="dropdown-下拉菜单" tabindex="-1"><a class="header-anchor" href="#dropdown-下拉菜单" aria-hidden="true">#</a> Dropdown 下拉菜单</h1>
<p>将动作或菜单折叠到下拉菜单中。</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>移动到下拉菜单上，展开更多操作。</p>
<p>:::demo 通过组件<code v-pre>slot</code>来设置下拉触发的元素以及需要通过具名<code v-pre>slot</code>为<code v-pre>dropdown</code> 来设置下拉菜单。默认情况下，下拉按钮只要<code v-pre>hover</code>即可，无需点击也会显示下拉菜单。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-dropdown-link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    下拉菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-arrow-down el-icon--right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>黄金糕<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>狮子头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>螺蛳粉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>双皮奶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">divided</span><span class="token punctuation">></span></span>蚵仔煎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.el-dropdown-link</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #409EFF<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.el-icon-arrow-down</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="触发对象" tabindex="-1"><a class="header-anchor" href="#触发对象" aria-hidden="true">#</a> 触发对象</h3>
<p>可使用按钮触发下拉菜单。</p>
<p>:::demo 设置<code v-pre>split-button</code>属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为<code v-pre>true</code>即可。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    更多菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-arrow-down el-icon--right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>黄金糕<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>狮子头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>螺蛳粉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>双皮奶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>蚵仔煎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span> <span class="token attr-name">split-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  更多菜单
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>黄金糕<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>狮子头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>螺蛳粉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>双皮奶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>蚵仔煎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.el-dropdown</span> <span class="token punctuation">{</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.el-dropdown + .el-dropdown</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.el-icon-arrow-down</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'button click'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="触发方式" tabindex="-1"><a class="header-anchor" href="#触发方式" aria-hidden="true">#</a> 触发方式</h3>
<p>可以配置 click 激活或者 hover 激活。</p>
<p>:::demo 在<code v-pre>trigger</code>属性设置为<code v-pre>click</code>即可。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block-col-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demonstration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hover 激活<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-dropdown-link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        下拉菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-arrow-down el-icon--right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-plus<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>黄金糕<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-circle-plus<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>狮子头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-circle-plus-outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>螺蛳粉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-check<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>双皮奶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-circle-check<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>蚵仔煎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demonstration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>click 激活<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span> <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>click<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-dropdown-link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        下拉菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-arrow-down el-icon--right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-plus<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>黄金糕<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-circle-plus<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>狮子头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-circle-plus-outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>螺蛳粉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-check<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>双皮奶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-circle-check<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>蚵仔煎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.el-dropdown-link</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #409EFF<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.el-icon-arrow-down</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.demonstration</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #8492a6<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="菜单隐藏方式" tabindex="-1"><a class="header-anchor" href="#菜单隐藏方式" aria-hidden="true">#</a> 菜单隐藏方式</h3>
<p>可以<code v-pre>hide-on-click</code>属性来配置。</p>
<p>:::demo 下拉菜单默认在点击菜单项后会被隐藏，将<code v-pre>hide-on-click</code>属性默认为<code v-pre>false</code>可以关闭此功能。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span> <span class="token attr-name">:hide-on-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-dropdown-link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    下拉菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-arrow-down el-icon--right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>黄金糕<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>狮子头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>螺蛳粉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>双皮奶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">divided</span><span class="token punctuation">></span></span>蚵仔煎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.el-dropdown-link</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #409EFF<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.el-icon-arrow-down</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="指令事件" tabindex="-1"><a class="header-anchor" href="#指令事件" aria-hidden="true">#</a> 指令事件</h3>
<p>点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作</p>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span> <span class="token attr-name">@command</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleCommand<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-dropdown-link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    下拉菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-arrow-down el-icon--right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">command</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>黄金糕<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">command</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>狮子头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">command</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>螺蛳粉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">command</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>双皮奶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span> <span class="token attr-name">command</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span> <span class="token attr-name">divided</span><span class="token punctuation">></span></span>蚵仔煎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.el-dropdown-link</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #409EFF<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.el-icon-arrow-down</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handleCommand</span><span class="token punctuation">(</span><span class="token parameter">command</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token string">'click on item '</span> <span class="token operator">+</span> command<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="不同尺寸" tabindex="-1"><a class="header-anchor" href="#不同尺寸" aria-hidden="true">#</a> 不同尺寸</h3>
<p>Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。</p>
<p>:::demo 额外的尺寸：<code v-pre>medium</code>、<code v-pre>small</code>、<code v-pre>mini</code>，通过设置<code v-pre>size</code>属性来配置它们。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span> <span class="token attr-name">split-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  默认尺寸
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>黄金糕<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>狮子头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>螺蛳粉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>双皮奶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>蚵仔煎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span> <span class="token attr-name">split-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  中等尺寸
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>黄金糕<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>狮子头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>螺蛳粉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>双皮奶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>蚵仔煎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">split-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  小型尺寸
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>黄金糕<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>狮子头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>螺蛳粉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>双皮奶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>蚵仔煎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">split-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  超小尺寸
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>黄金糕<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>狮子头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>螺蛳粉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>双皮奶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-item</span><span class="token punctuation">></span></span>蚵仔煎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="dropdown-attributes" tabindex="-1"><a class="header-anchor" href="#dropdown-attributes" aria-hidden="true">#</a> Dropdown Attributes</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>菜单按钮类型，同 Button 组件(只在<code v-pre>split-button</code>为 true 的情况下有效)</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>菜单尺寸，在<code v-pre>split-button</code>为 true 的情况下也对触发按钮生效</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>split-button</td>
<td>下拉触发元素呈现为按钮组</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placement</td>
<td>菜单弹出位置</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end</td>
<td>bottom-end</td>
</tr>
<tr>
<td>trigger</td>
<td>触发下拉的行为</td>
<td>string</td>
<td>hover, click</td>
<td>hover</td>
</tr>
<tr>
<td>hide-on-click</td>
<td>是否在点击菜单项后隐藏菜单</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-timeout</td>
<td>展开下拉菜单的延时（仅在 trigger 为 hover 时有效）</td>
<td>number</td>
<td>—</td>
<td>250</td>
</tr>
<tr>
<td>hide-timeout</td>
<td>收起下拉菜单的延时（仅在 trigger 为 hover 时有效）</td>
<td>number</td>
<td>—</td>
<td>150</td>
</tr>
<tr>
<td>tabindex</td>
<td>Dropdown 组件的 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex" target="_blank" rel="noopener noreferrer">tabindex<ExternalLinkIcon/></a></td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="dropdown-slots" tabindex="-1"><a class="header-anchor" href="#dropdown-slots" aria-hidden="true">#</a> Dropdown Slots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件</td>
</tr>
<tr>
<td>dropdown</td>
<td>下拉列表，通常是 <code v-pre>&lt;el-dropdown-menu&gt;</code> 组件</td>
</tr>
</tbody>
</table>
<h3 id="dropdown-events" tabindex="-1"><a class="header-anchor" href="#dropdown-events" aria-hidden="true">#</a> Dropdown Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td><code v-pre>split-button</code> 为 true 时，点击左侧按钮的回调</td>
<td>—</td>
</tr>
<tr>
<td>command</td>
<td>点击菜单项触发的事件回调</td>
<td>dropdown-item 的指令</td>
</tr>
<tr>
<td>visible-change</td>
<td>下拉框出现/隐藏时触发</td>
<td>出现则为 true，隐藏则为 false</td>
</tr>
</tbody>
</table>
<h3 id="dropdown-menu-item-attributes" tabindex="-1"><a class="header-anchor" href="#dropdown-menu-item-attributes" aria-hidden="true">#</a> Dropdown Menu Item Attributes</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>command</td>
<td>指令</td>
<td>string/number/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>divided</td>
<td>显示分割线</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>图标类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
</div></template>


