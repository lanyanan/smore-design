<template><div><h1 id="backtop-回到顶部" tabindex="-1"><a class="header-anchor" href="#backtop-回到顶部" aria-hidden="true">#</a> Backtop 回到顶部</h1>
<p>返回页面顶部的操作按钮</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>滑动页面即可看到右下方的按钮。
:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  Scroll down to see the bottom-right button.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-backtop</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.page-component__scroll .el-scrollbar__wrap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-backtop</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="自定义显示内容" tabindex="-1"><a class="header-anchor" href="#自定义显示内容" aria-hidden="true">#</a> 自定义显示内容</h3>
<p>显示区域被固定为 40px * 40px 的区域, 其中的内容可支持自定义。
:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  Scroll down to see the bottom-right button.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-backtop</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.page-component__scroll .el-scrollbar__wrap<span class="token punctuation">"</span></span> <span class="token attr-name">:bottom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #f2f5f6<span class="token punctuation">;</span>
        <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span> .12<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #1989fa<span class="token punctuation">;</span>
      <span class="token punctuation">}</span></span><span class="token punctuation">"</span></span></span>
    <span class="token punctuation">></span></span>
      UP
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-backtop</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3>
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
<td>target</td>
<td>触发滚动的对象</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>visibility-height</td>
<td>滚动高度达到此参数值才出现</td>
<td>number</td>
<td></td>
<td>200</td>
</tr>
<tr>
<td>right</td>
<td>控制其显示位置, 距离页面右边距</td>
<td>number</td>
<td></td>
<td>40</td>
</tr>
<tr>
<td>bottom</td>
<td>控制其显示位置, 距离页面底部距离</td>
<td>number</td>
<td></td>
<td>40</td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>点击按钮触发的事件</td>
<td>点击事件</td>
</tr>
</tbody>
</table>
</div></template>


