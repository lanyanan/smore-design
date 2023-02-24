<template><div><h1 id="calendar-calendar" tabindex="-1"><a class="header-anchor" href="#calendar-calendar" aria-hidden="true">#</a> Calendar calendar</h1>
<p>显示日期</p>
<h3 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h3>
<p>:::demo 设置 <code v-pre>value</code> 来指定当前显示的月份。如果 <code v-pre>value</code> 未指定，则显示当月。<code v-pre>value</code> 支持 <code v-pre>v-model</code> 双向绑定。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-calendar</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-calendar</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="自定义内容" tabindex="-1"><a class="header-anchor" href="#自定义内容" aria-hidden="true">#</a> 自定义内容</h3>
<p>:::demo 通过设置名为 <code v-pre>dateCell</code> 的 <code v-pre>scoped-slot</code> 来自定义日历单元格中显示的内容。在 <code v-pre>scoped-slot</code> 可以获取到 date（当前单元格的日期）, data（包括 type，isSelected，day 属性）。详情解释参考下方的 API 文档。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-calendar</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span>
    <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dateCell<span class="token punctuation">"</span></span>
    <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{date, data}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data.isSelected ? 'is-selected' : ''<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-calendar</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.is-selected</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #1989FA<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="自定义范围" tabindex="-1"><a class="header-anchor" href="#自定义范围" aria-hidden="true">#</a> 自定义范围</h3>
<p>:::demo 设置 <code v-pre>range</code> 属性指定日历的显示范围。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-calendar</span> <span class="token attr-name">:range</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['2019-03-04', '2019-03-24']<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-calendar</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
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
<td>value / v-model</td>
<td>绑定值</td>
<td>Date/string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>range</td>
<td>时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。</td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>first-day-of-week</td>
<td>周起始日</td>
<td>Number</td>
<td>1 到 7</td>
<td>1</td>
</tr>
</tbody>
</table>
<h3 id="datecell-scoped-slot-参数" tabindex="-1"><a class="header-anchor" href="#datecell-scoped-slot-参数" aria-hidden="true">#</a> dateCell scoped slot 参数</h3>
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
<td>date</td>
<td>单元格代表的日期</td>
<td>Date</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>{ type, isSelected, day}，<code v-pre>type</code> 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；<code v-pre>isSelected</code> 标明该日期是否被选中；<code v-pre>day</code> 是格式化的日期，格式为 yyyy-MM-dd</td>
<td>Object</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
</div></template>


