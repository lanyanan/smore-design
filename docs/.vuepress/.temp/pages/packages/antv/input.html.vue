<template><div><p>通过鼠标或键盘输入字符</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Input 为受控组件，它<strong>总会显示 Vue 绑定值</strong>。</p>
<p>通常情况下，应当处理 <code v-pre>input</code> 事件，并更新组件的绑定值（或使用<code v-pre>v-model</code>）。否则，输入框内显示的值将不会改变。</p>
<p>不支持 <code v-pre>v-model</code> 修饰符。</p>
</div>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h3>
<p>:::demo 通过 <code v-pre>disabled</code> 属性指定是否禁用 input 组件</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span>
  <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="可清空" tabindex="-1"><a class="header-anchor" href="#可清空" aria-hidden="true">#</a> 可清空</h3>
<p>:::demo 使用<code v-pre>clearable</code>属性即可得到一个可清空的输入框</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span>
  <span class="token attr-name">clearable</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">''</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="密码框" tabindex="-1"><a class="header-anchor" href="#密码框" aria-hidden="true">#</a> 密码框</h3>
<p>:::demo 使用<code v-pre>show-password</code>属性即可得到一个可切换显示隐藏的密码框</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入密码<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span> <span class="token attr-name">show-password</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">''</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="带-icon-的输入框" tabindex="-1"><a class="header-anchor" href="#带-icon-的输入框" aria-hidden="true">#</a> 带 icon 的输入框</h3>
<p>带有图标标记输入类型</p>
<p>:::demo 可以通过 <code v-pre>prefix-icon</code> 和 <code v-pre>suffix-icon</code> 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-input-suffix<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  属性方式：
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
    <span class="token attr-name">suffix-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-date<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">prefix-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-search<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-input-suffix<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  slot 方式：
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择日期<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>suffix<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dl-input__icon el-icon-date<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prefix<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dl-input__icon el-icon-search<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input2</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input3</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input4</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="文本域" tabindex="-1"><a class="header-anchor" href="#文本域" aria-hidden="true">#</a> 文本域</h3>
<p>用于输入多行文本信息，通过将 <code v-pre>type</code> 属性的值指定为 textarea。</p>
<p>:::demo 文本域高度可通过 <code v-pre>rows</code> 属性控制</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">textarea</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="可自适应文本高度的文本域" tabindex="-1"><a class="header-anchor" href="#可自适应文本高度的文本域" aria-hidden="true">#</a> 可自适应文本高度的文本域</h3>
<p>通过设置 <code v-pre>autosize</code> 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 <code v-pre>autosize</code> 还可以设定为一个对象，指定最小行数和最大行数。</p>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span>
  <span class="token attr-name">autosize</span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span>
  <span class="token attr-name">:autosize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ minRows: 2, maxRows: 4}<span class="token punctuation">"</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">textarea1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">textarea2</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="复合型输入框" tabindex="-1"><a class="header-anchor" href="#复合型输入框" aria-hidden="true">#</a> 复合型输入框</h3>
<p>可前置或后置元素，一般为标签或按钮</p>
<p>:::demo 可通过 slot 来指定在 input 中前置或者后置内容。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prepend<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Http://<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>append<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input3<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-with-select<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select<span class="token punctuation">"</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prepend<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>餐厅名<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-option</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>订单号<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-option</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户电话<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-option</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-select</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>append<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-search<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.el-select .dl-input</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 130px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.input-with-select .dl-input-group__prepend</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input2</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input3</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">select</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="尺寸" tabindex="-1"><a class="header-anchor" href="#尺寸" aria-hidden="true">#</a> 尺寸</h3>
<p>:::demo 可通过 <code v-pre>size</code> 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-input-size<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">suffix-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-date<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">suffix-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-date<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">suffix-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-date<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">suffix-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-date<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input2</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input3</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input4</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="带输入建议" tabindex="-1"><a class="header-anchor" href="#带输入建议" aria-hidden="true">#</a> 带输入建议</h3>
<p>根据输入内容提供对应的输入建议</p>
<p>:::demo autocomplete 是一个可带输入建议的输入框组件，<code v-pre>fetch-suggestions</code> 是一个返回输入建议的方法属性，如 querySearch(queryString, cb)，在该方法中你可以在你的输入建议数据准备好时通过 cb(data) 返回到 autocomplete 组件中。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-autocomplete<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>激活即列出输入建议<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-autocomplete</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline-input<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>state1<span class="token punctuation">"</span></span>
      <span class="token attr-name">:fetch-suggestions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>querySearch<span class="token punctuation">"</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
      <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSelect<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-autocomplete</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>输入后匹配输入建议<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-autocomplete</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline-input<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>state2<span class="token punctuation">"</span></span>
      <span class="token attr-name">:fetch-suggestions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>querySearch<span class="token punctuation">"</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
      <span class="token attr-name">:trigger-on-focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
      <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSelect<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-autocomplete</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">restaurants</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">state1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">state2</span><span class="token operator">:</span> <span class="token string">''</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">querySearch</span><span class="token punctuation">(</span><span class="token parameter">queryString<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> restaurants <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>restaurants<span class="token punctuation">;</span>
        <span class="token keyword">var</span> results <span class="token operator">=</span> queryString <span class="token operator">?</span> restaurants<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createFilter</span><span class="token punctuation">(</span>queryString<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> restaurants<span class="token punctuation">;</span>
        <span class="token comment">// 调用 callback 返回建议列表的数据</span>
        <span class="token function">cb</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">createFilter</span><span class="token punctuation">(</span><span class="token parameter">queryString</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">restaurant</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>restaurant<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>queryString<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">loadAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"三全鲜食（北新泾店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区新渔路144号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"Hot honey 首尔炸鸡（仙霞路）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区淞虹路661号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"新旺角茶餐厅"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区真北路988号创邑金沙谷6号楼113"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"泷千家(天山西路店)"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"天山西路438号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"胖仙女纸杯蛋糕（上海凌空店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路968号1幢18号楼一层商铺18-101"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"贡茶"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路633号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"豪大大香鸡排超级奶爸"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市嘉定区曹安公路曹安路1685号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"茶芝兰（奶茶，手抓饼）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区同普路1435号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"十二泷町"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市北翟路1444弄81号B幢-107"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"星移浓缩咖啡"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市嘉定区新郁路817号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"阿姨奶茶/豪大大"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"嘉定区曹安路1611号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"新麦甜四季甜品炸鸡"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"嘉定区曹安公路2383弄55号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"Monica摩托主题咖啡店"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"浮生若茶（凌空soho店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海长宁区金钟路968号9号楼地下一层"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"NONO JUICE  鲜榨果汁"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路119号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"CoCo都可(北新泾店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区仙霞西路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"快乐柠檬（神州智慧店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路567号1层R117号店铺"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"Merci Paul cafe"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区光复西路丹巴路28弄6号楼819"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"猫山王（西郊百联店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区仙霞西路88号第一层G05-F01-1-306"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"枪会山"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区棕榈路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"纵食"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"元丰天山花园(东门) 双流路267号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"钱记"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"壹杯加"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区通协路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"唦哇嘀咖"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"爱茜茜里(西郊百联)"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区仙霞西路88号1305室"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"爱茜茜里(近铁广场)"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"鲜果榨汁（金沙江路和美广店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"普陀区金沙江路2239号金沙和美广场B1-10-6"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"开心丽果（缤谷店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区威宁路天山路341号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"超级鸡车（丰庄路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市嘉定区丰庄路240号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"妙生活果园（北新泾店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区新渔路144号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"香宜度麻辣香锅"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区淞虹路148号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"凡仔汉堡（老真北路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区老真北路160号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"港式小铺"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路968号15楼15-105室"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"蜀香源麻辣香锅（剑河路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"剑河路443-1"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"北京饺子馆"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区北新泾街道天山西路490-1号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"饭典*新简餐（凌空SOHO店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路968号9号楼地下一层9-83室"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"焦耳·川式快餐（金钟路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市金钟路633号地下一层甲部"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"动力鸡车"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区仙霞西路299弄3号101B"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"浏阳蒸菜"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"天山西路430号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"四海游龙（天山西路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"樱花食堂（凌空店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路968号15楼15-105室"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"壹分米客家传统调制米粉(天山店)"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"天山西路428号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"福荣祥烧腊（平溪路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区协和路福泉路255弄57-73号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"速记黄焖鸡米饭"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区北新泾街道金钟路180号1层01号摊位"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"红辣椒麻辣烫"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路492号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"(小杨生煎)西郊百联餐厅"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区仙霞西路88号百联2楼"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"阳阳麻辣烫"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"天山西路389号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"南拳妈妈龙虾盖浇饭"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"普陀区金沙江路1699号鑫乐惠美食广场A13"</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">handleSelect</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>restaurants <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="自定义模板" tabindex="-1"><a class="header-anchor" href="#自定义模板" aria-hidden="true">#</a> 自定义模板</h3>
<p>可自定义输入建议的显示</p>
<p>:::demo 使用<code v-pre>scoped slot</code>自定义输入建议的模板。该 scope 的参数为<code v-pre>item</code>，表示当前输入建议对象。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-autocomplete</span>
  <span class="token attr-name">popper-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-autocomplete<span class="token punctuation">"</span></span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>state<span class="token punctuation">"</span></span>
  <span class="token attr-name">:fetch-suggestions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>querySearch<span class="token punctuation">"</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
  <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSelect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-edit dl-input__icon<span class="token punctuation">"</span></span>
    <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>suffix<span class="token punctuation">"</span></span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleIconClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ item }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.value }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.address }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-autocomplete</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.my-autocomplete</span> <span class="token punctuation">{</span>
  <span class="token selector">li</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 7px<span class="token punctuation">;</span>

    <span class="token selector">.name</span> <span class="token punctuation">{</span>
      <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.addr</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #b4b4b4<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.highlighted .addr</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">restaurants</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">''</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">querySearch</span><span class="token punctuation">(</span><span class="token parameter">queryString<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> restaurants <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>restaurants<span class="token punctuation">;</span>
        <span class="token keyword">var</span> results <span class="token operator">=</span> queryString <span class="token operator">?</span> restaurants<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createFilter</span><span class="token punctuation">(</span>queryString<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> restaurants<span class="token punctuation">;</span>
        <span class="token comment">// 调用 callback 返回建议列表的数据</span>
        <span class="token function">cb</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">createFilter</span><span class="token punctuation">(</span><span class="token parameter">queryString</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">restaurant</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>restaurant<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>queryString<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">loadAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"三全鲜食（北新泾店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区新渔路144号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"Hot honey 首尔炸鸡（仙霞路）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区淞虹路661号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"新旺角茶餐厅"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区真北路988号创邑金沙谷6号楼113"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"泷千家(天山西路店)"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"天山西路438号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"胖仙女纸杯蛋糕（上海凌空店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路968号1幢18号楼一层商铺18-101"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"贡茶"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路633号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"豪大大香鸡排超级奶爸"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市嘉定区曹安公路曹安路1685号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"茶芝兰（奶茶，手抓饼）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区同普路1435号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"十二泷町"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市北翟路1444弄81号B幢-107"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"星移浓缩咖啡"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市嘉定区新郁路817号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"阿姨奶茶/豪大大"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"嘉定区曹安路1611号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"新麦甜四季甜品炸鸡"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"嘉定区曹安公路2383弄55号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"Monica摩托主题咖啡店"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"浮生若茶（凌空soho店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海长宁区金钟路968号9号楼地下一层"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"NONO JUICE  鲜榨果汁"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路119号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"CoCo都可(北新泾店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区仙霞西路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"快乐柠檬（神州智慧店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路567号1层R117号店铺"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"Merci Paul cafe"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区光复西路丹巴路28弄6号楼819"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"猫山王（西郊百联店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区仙霞西路88号第一层G05-F01-1-306"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"枪会山"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区棕榈路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"纵食"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"元丰天山花园(东门) 双流路267号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"钱记"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"壹杯加"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区通协路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"唦哇嘀咖"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"爱茜茜里(西郊百联)"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区仙霞西路88号1305室"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"爱茜茜里(近铁广场)"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"鲜果榨汁（金沙江路和美广店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"普陀区金沙江路2239号金沙和美广场B1-10-6"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"开心丽果（缤谷店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区威宁路天山路341号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"超级鸡车（丰庄路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市嘉定区丰庄路240号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"妙生活果园（北新泾店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区新渔路144号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"香宜度麻辣香锅"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区淞虹路148号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"凡仔汉堡（老真北路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区老真北路160号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"港式小铺"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路968号15楼15-105室"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"蜀香源麻辣香锅（剑河路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"剑河路443-1"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"北京饺子馆"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区北新泾街道天山西路490-1号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"饭典*新简餐（凌空SOHO店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路968号9号楼地下一层9-83室"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"焦耳·川式快餐（金钟路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市金钟路633号地下一层甲部"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"动力鸡车"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区仙霞西路299弄3号101B"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"浏阳蒸菜"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"天山西路430号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"四海游龙（天山西路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"樱花食堂（凌空店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路968号15楼15-105室"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"壹分米客家传统调制米粉(天山店)"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"天山西路428号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"福荣祥烧腊（平溪路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区协和路福泉路255弄57-73号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"速记黄焖鸡米饭"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区北新泾街道金钟路180号1层01号摊位"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"红辣椒麻辣烫"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路492号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"(小杨生煎)西郊百联餐厅"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区仙霞西路88号百联2楼"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"阳阳麻辣烫"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"天山西路389号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"南拳妈妈龙虾盖浇饭"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"普陀区金沙江路1699号鑫乐惠美食广场A13"</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">handleSelect</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">handleIconClick</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ev<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>restaurants <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="远程搜索" tabindex="-1"><a class="header-anchor" href="#远程搜索" aria-hidden="true">#</a> 远程搜索</h3>
<p>从服务端搜索数据</p>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-autocomplete</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>state<span class="token punctuation">"</span></span>
  <span class="token attr-name">:fetch-suggestions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>querySearchAsync<span class="token punctuation">"</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
  <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSelect<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-autocomplete</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">restaurants</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">timeout</span><span class="token operator">:</span>  <span class="token keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">loadAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"三全鲜食（北新泾店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区新渔路144号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"Hot honey 首尔炸鸡（仙霞路）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区淞虹路661号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"新旺角茶餐厅"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区真北路988号创邑金沙谷6号楼113"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"泷千家(天山西路店)"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"天山西路438号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"胖仙女纸杯蛋糕（上海凌空店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路968号1幢18号楼一层商铺18-101"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"贡茶"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路633号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"豪大大香鸡排超级奶爸"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市嘉定区曹安公路曹安路1685号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"茶芝兰（奶茶，手抓饼）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区同普路1435号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"十二泷町"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市北翟路1444弄81号B幢-107"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"星移浓缩咖啡"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市嘉定区新郁路817号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"阿姨奶茶/豪大大"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"嘉定区曹安路1611号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"新麦甜四季甜品炸鸡"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"嘉定区曹安公路2383弄55号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"Monica摩托主题咖啡店"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"浮生若茶（凌空soho店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海长宁区金钟路968号9号楼地下一层"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"NONO JUICE  鲜榨果汁"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路119号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"CoCo都可(北新泾店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区仙霞西路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"快乐柠檬（神州智慧店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路567号1层R117号店铺"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"Merci Paul cafe"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区光复西路丹巴路28弄6号楼819"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"猫山王（西郊百联店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区仙霞西路88号第一层G05-F01-1-306"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"枪会山"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区棕榈路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"纵食"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"元丰天山花园(东门) 双流路267号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"钱记"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"壹杯加"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区通协路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"唦哇嘀咖"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"爱茜茜里(西郊百联)"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区仙霞西路88号1305室"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"爱茜茜里(近铁广场)"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"鲜果榨汁（金沙江路和美广店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"普陀区金沙江路2239号金沙和美广场B1-10-6"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"开心丽果（缤谷店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区威宁路天山路341号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"超级鸡车（丰庄路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市嘉定区丰庄路240号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"妙生活果园（北新泾店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区新渔路144号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"香宜度麻辣香锅"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区淞虹路148号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"凡仔汉堡（老真北路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市普陀区老真北路160号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"港式小铺"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路968号15楼15-105室"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"蜀香源麻辣香锅（剑河路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"剑河路443-1"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"北京饺子馆"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区北新泾街道天山西路490-1号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"饭典*新简餐（凌空SOHO店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路968号9号楼地下一层9-83室"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"焦耳·川式快餐（金钟路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市金钟路633号地下一层甲部"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"动力鸡车"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区仙霞西路299弄3号101B"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"浏阳蒸菜"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"天山西路430号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"四海游龙（天山西路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"樱花食堂（凌空店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区金钟路968号15楼15-105室"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"壹分米客家传统调制米粉(天山店)"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"天山西路428号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"福荣祥烧腊（平溪路店）"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区协和路福泉路255弄57-73号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"速记黄焖鸡米饭"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区北新泾街道金钟路180号1层01号摊位"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"红辣椒麻辣烫"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"上海市长宁区天山西路492号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"(小杨生煎)西郊百联餐厅"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"长宁区仙霞西路88号百联2楼"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"阳阳麻辣烫"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"天山西路389号"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"南拳妈妈龙虾盖浇饭"</span><span class="token punctuation">,</span> <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token string">"普陀区金沙江路1699号鑫乐惠美食广场A13"</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">querySearchAsync</span><span class="token punctuation">(</span><span class="token parameter">queryString<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> restaurants <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>restaurants<span class="token punctuation">;</span>
        <span class="token keyword">var</span> results <span class="token operator">=</span> queryString <span class="token operator">?</span> restaurants<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createStateFilter</span><span class="token punctuation">(</span>queryString<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> restaurants<span class="token punctuation">;</span>

        <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">cb</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">createStateFilter</span><span class="token punctuation">(</span><span class="token parameter">queryString</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>queryString<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">handleSelect</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>restaurants <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="输入长度限制" tabindex="-1"><a class="header-anchor" href="#输入长度限制" aria-hidden="true">#</a> 输入长度限制</h3>
<p>:::demo  <code v-pre>maxlength</code> 和 <code v-pre>minlength</code> 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 <code v-pre>text</code> 或 <code v-pre>textarea</code> 的输入框，在使用 <code v-pre>maxlength</code> 属性限制最大输入长度的同时，可通过设置 <code v-pre>show-word-limit</code> 属性来展示字数统计。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
  <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span>
  <span class="token attr-name">show-word-limit</span>
<span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-input</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容<span class="token punctuation">"</span></span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span>
  <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30<span class="token punctuation">"</span></span>
  <span class="token attr-name">show-word-limit</span>
<span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-input</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">textarea</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="input-attributes" tabindex="-1"><a class="header-anchor" href="#input-attributes" aria-hidden="true">#</a> Input Attributes</h3>
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
<td>类型</td>
<td>string</td>
<td>text，textarea 和其他 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types" target="_blank" rel="noopener noreferrer">原生 input 的 type 值<ExternalLinkIcon/></a></td>
<td>text</td>
</tr>
<tr>
<td>value / v-model</td>
<td>绑定值</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>maxlength</td>
<td>原生属性，最大输入长度</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>minlength</td>
<td>原生属性，最小输入长度</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-word-limit</td>
<td>是否显示输入字数统计，只在 <code v-pre>type = &quot;text&quot;</code> 或 <code v-pre>type = &quot;textarea&quot;</code> 时有效</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框占位文本</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>clearable</td>
<td>是否可清空</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-password</td>
<td>是否显示切换密码图标</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>输入框尺寸，只在 <code v-pre>type!=&quot;textarea&quot;</code> 时有效</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>输入框头部图标</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>suffix-icon</td>
<td>输入框尾部图标</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>rows</td>
<td>输入框行数，只对 <code v-pre>type=&quot;textarea&quot;</code> 有效</td>
<td>number</td>
<td>—</td>
<td>2</td>
</tr>
<tr>
<td>autosize</td>
<td>自适应内容高度，只对 <code v-pre>type=&quot;textarea&quot;</code> 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }</td>
<td>boolean / object</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>autocomplete</td>
<td>原生属性，自动补全</td>
<td>string</td>
<td>on, off</td>
<td>off</td>
</tr>
<tr>
<td>auto-complete</td>
<td>下个主版本弃用</td>
<td>string</td>
<td>on, off</td>
<td>off</td>
</tr>
<tr>
<td>name</td>
<td>原生属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>readonly</td>
<td>原生属性，是否只读</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>max</td>
<td>原生属性，设置最大值</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>min</td>
<td>原生属性，设置最小值</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>step</td>
<td>原生属性，设置输入字段的合法数字间隔</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>resize</td>
<td>控制是否能被用户缩放</td>
<td>string</td>
<td>none, both, horizontal, vertical</td>
<td>—</td>
</tr>
<tr>
<td>autofocus</td>
<td>原生属性，自动获取焦点</td>
<td>boolean</td>
<td>true, false</td>
<td>false</td>
</tr>
<tr>
<td>form</td>
<td>原生属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>输入框关联的label文字</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tabindex</td>
<td>输入框的tabindex</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>validate-event</td>
<td>输入时是否触发表单的校验</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="input-slots" tabindex="-1"><a class="header-anchor" href="#input-slots" aria-hidden="true">#</a> Input Slots</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>prefix</td>
<td>输入框头部内容，只对 <code v-pre>type=&quot;text&quot;</code> 有效</td>
</tr>
<tr>
<td>suffix</td>
<td>输入框尾部内容，只对 <code v-pre>type=&quot;text&quot;</code> 有效</td>
</tr>
<tr>
<td>prepend</td>
<td>输入框前置内容，只对 <code v-pre>type=&quot;text&quot;</code> 有效</td>
</tr>
<tr>
<td>append</td>
<td>输入框后置内容，只对 <code v-pre>type=&quot;text&quot;</code> 有效</td>
</tr>
</tbody>
</table>
<h3 id="input-events" tabindex="-1"><a class="header-anchor" href="#input-events" aria-hidden="true">#</a> Input Events</h3>
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
<td>blur</td>
<td>在 Input 失去焦点时触发</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>在 Input 获得焦点时触发</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>change</td>
<td>仅在输入框失去焦点或用户按下回车时触发</td>
<td>(value: string | number)</td>
</tr>
<tr>
<td>input</td>
<td>在 Input 值改变时触发</td>
<td>(value: string | number)</td>
</tr>
<tr>
<td>clear</td>
<td>在点击由 <code v-pre>clearable</code> 属性生成的清空按钮时触发</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="input-methods" tabindex="-1"><a class="header-anchor" href="#input-methods" aria-hidden="true">#</a> Input Methods</h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>使 input 获取焦点</td>
<td>—</td>
</tr>
<tr>
<td>blur</td>
<td>使 input 失去焦点</td>
<td>—</td>
</tr>
<tr>
<td>select</td>
<td>选中 input 中的文字</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-attributes" tabindex="-1"><a class="header-anchor" href="#autocomplete-attributes" aria-hidden="true">#</a> Autocomplete Attributes</h3>
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
<td>placeholder</td>
<td>输入框占位文本</td>
<td>string</td>
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
<td>value-key</td>
<td>输入建议对象中用于显示的键名</td>
<td>string</td>
<td>—</td>
<td>value</td>
</tr>
<tr>
<td>value</td>
<td>必填值，输入绑定值</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>debounce</td>
<td>获取输入建议的去抖延时</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>placement</td>
<td>菜单弹出位置</td>
<td>string</td>
<td>top / top-start / top-end / bottom / bottom-start / bottom-end</td>
<td>bottom-start</td>
</tr>
<tr>
<td>fetch-suggestions</td>
<td>返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它</td>
<td>Function(queryString, callback)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>popper-class</td>
<td>Autocomplete 下拉列表的类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>trigger-on-focus</td>
<td>是否在输入框 focus 时显示建议列表</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>name</td>
<td>原生属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>select-when-unmatched</td>
<td>在输入没有任何匹配建议的情况下，按下回车是否触发 <code v-pre>select</code> 事件</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>label</td>
<td>输入框关联的label文字</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>输入框头部图标</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>suffix-icon</td>
<td>输入框尾部图标</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>hide-loading</td>
<td>是否隐藏远程加载时的加载图标</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>popper-append-to-body</td>
<td>是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>highlight-first-item</td>
<td>是否默认突出显示远程搜索建议中的第一项</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-slots" tabindex="-1"><a class="header-anchor" href="#autocomplete-slots" aria-hidden="true">#</a> Autocomplete Slots</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>prefix</td>
<td>输入框头部内容</td>
</tr>
<tr>
<td>suffix</td>
<td>输入框尾部内容</td>
</tr>
<tr>
<td>prepend</td>
<td>输入框前置内容</td>
</tr>
<tr>
<td>append</td>
<td>输入框后置内容</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-scoped-slot" tabindex="-1"><a class="header-anchor" href="#autocomplete-scoped-slot" aria-hidden="true">#</a> Autocomplete Scoped Slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>自定义输入建议，参数为 { item }</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-events" tabindex="-1"><a class="header-anchor" href="#autocomplete-events" aria-hidden="true">#</a> Autocomplete Events</h3>
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
<td>select</td>
<td>点击选中建议项时触发</td>
<td>选中建议项</td>
</tr>
<tr>
<td>change</td>
<td>在 Input 值改变时触发</td>
<td>(value: string | number)</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-methods" tabindex="-1"><a class="header-anchor" href="#autocomplete-methods" aria-hidden="true">#</a> Autocomplete Methods</h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>使 input 获取焦点</td>
<td>-</td>
</tr>
</tbody>
</table>
</div></template>


