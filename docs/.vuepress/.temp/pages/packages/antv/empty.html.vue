<template><div><p>空状态时的占位提示。</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-empty</span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>描述文字<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-empty</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p>
<h3 id="自定义图片" tabindex="-1"><a class="header-anchor" href="#自定义图片" aria-hidden="true">#</a> 自定义图片</h3>
<p>通过设置 <code v-pre>image</code> 属性传入图片 URL。</p>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-empty</span> <span class="token attr-name">image</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-empty</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p>
<h3 id="图片尺寸" tabindex="-1"><a class="header-anchor" href="#图片尺寸" aria-hidden="true">#</a> 图片尺寸</h3>
<p>通过设置 <code v-pre>image-size</code> 属性来控制图片大小。</p>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-empty</span> <span class="token attr-name">:image-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-empty</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p>
<h3 id="底部内容" tabindex="-1"><a class="header-anchor" href="#底部内容" aria-hidden="true">#</a> 底部内容</h3>
<p>使用默认插槽可在底部插入内容。</p>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-empty</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-empty</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="empty-attributes" tabindex="-1"><a class="header-anchor" href="#empty-attributes" aria-hidden="true">#</a> Empty Attributes</h3>
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
<td>image</td>
<td>图片地址</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>image-size</td>
<td>图片大小（宽度）</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>description</td>
<td>文本描述</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="empty-slots" tabindex="-1"><a class="header-anchor" href="#empty-slots" aria-hidden="true">#</a> Empty Slots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>自定义底部内容</td>
</tr>
<tr>
<td>image</td>
<td>自定义图片</td>
</tr>
<tr>
<td>description</td>
<td>自定义描述文字</td>
</tr>
</tbody>
</table>
</div></template>


