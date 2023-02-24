<template><div><h1 id="breadcrumb-面包屑" tabindex="-1"><a class="header-anchor" href="#breadcrumb-面包屑" aria-hidden="true">#</a> Breadcrumb 面包屑</h1>
<p>显示当前页面的路径，快速返回之前的任意页面。</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>适用广泛的基础用法。</p>
<p>:::demo 在<code v-pre>el-breadcrumb</code>中使用<code v-pre>el-breadcrumb-item</code>标签表示从首页开始的每一级。Element 提供了一个<code v-pre>separator</code>属性，在<code v-pre>el-breadcrumb</code>标签中设置它来决定分隔符，它只能是字符串，默认为斜杠<code v-pre>/</code>。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb</span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ path: '/' }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>活动管理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>活动列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>活动详情<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="图标分隔符" tabindex="-1"><a class="header-anchor" href="#图标分隔符" aria-hidden="true">#</a> 图标分隔符</h3>
<p>:::demo 通过设置 <code v-pre>separator-class</code> 可使用相应的 <code v-pre>iconfont</code> 作为分隔符，注意这将使 <code v-pre>separator</code> 设置失效</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb</span> <span class="token attr-name">separator-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-arrow-right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ path: '/' }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>活动管理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>活动列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>活动详情<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="breadcrumb-attributes" tabindex="-1"><a class="header-anchor" href="#breadcrumb-attributes" aria-hidden="true">#</a> Breadcrumb Attributes</h3>
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
<td>separator</td>
<td>分隔符</td>
<td>string</td>
<td>—</td>
<td>斜杠'/'</td>
</tr>
<tr>
<td>separator-class</td>
<td>图标分隔符 class</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="breadcrumb-item-attributes" tabindex="-1"><a class="header-anchor" href="#breadcrumb-item-attributes" aria-hidden="true">#</a> Breadcrumb Item Attributes</h3>
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
<td>to</td>
<td>路由跳转对象，同 <code v-pre>vue-router</code> 的 <code v-pre>to</code></td>
<td>string/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>replace</td>
<td>在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
</div></template>


