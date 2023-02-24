<template><div><h1 id="rate-评分" tabindex="-1"><a class="header-anchor" href="#rate-评分" aria-hidden="true">#</a> Rate 评分</h1>
<p>评分组件</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>:::demo 评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用<code v-pre>colors</code>属性设置，而它们对应的两个阈值则通过 <code v-pre>low-threshold</code> 和 <code v-pre>high-threshold</code> 设定。你也可以通过传入颜色对象来自定义分段，键名为分段的界限值，键值为对应的颜色。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demonstration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>默认不区分颜色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-rate</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-rate</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demonstration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>区分颜色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-rate</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value2<span class="token punctuation">"</span></span>
    <span class="token attr-name">:colors</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>colors<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-rate</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value1</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value2</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#99A9BF'</span><span class="token punctuation">,</span> <span class="token string">'#F7BA2A'</span><span class="token punctuation">,</span> <span class="token string">'#FF9900'</span><span class="token punctuation">]</span>  <span class="token comment">// 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="辅助文字" tabindex="-1"><a class="header-anchor" href="#辅助文字" aria-hidden="true">#</a> 辅助文字</h3>
<p>用辅助文字直接地表达对应分数</p>
<p>:::demo 为组件设置 <code v-pre>show-text</code> 属性会在右侧显示辅助文字。通过设置 <code v-pre>texts</code> 可以为每一个分值指定对应的辅助文字。<code v-pre>texts</code> 为一个数组，长度应等于最大值 <code v-pre>max</code>。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-rate</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>
  <span class="token attr-name">show-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-rate</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="其它-icon" tabindex="-1"><a class="header-anchor" href="#其它-icon" aria-hidden="true">#</a> 其它 icon</h3>
<p>当有多层评价时，可以用不同类型的 icon 区分评分层级</p>
<p>:::demo 设置<code v-pre>icon-classes</code>属性可以自定义不同分段的图标。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。本例还使用<code v-pre>void-icon-class</code>指定了未选中时的图标类名。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-rate</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>
  <span class="token attr-name">:icon-classes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iconClasses<span class="token punctuation">"</span></span>
  <span class="token attr-name">void-icon-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon-rate-face-off<span class="token punctuation">"</span></span>
  <span class="token attr-name">:colors</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['#99A9BF', '#F7BA2A', '#FF9900']<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-rate</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">iconClasses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'icon-rate-face-1'</span><span class="token punctuation">,</span> <span class="token string">'icon-rate-face-2'</span><span class="token punctuation">,</span> <span class="token string">'icon-rate-face-3'</span><span class="token punctuation">]</span> <span class="token comment">// 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="只读" tabindex="-1"><a class="header-anchor" href="#只读" aria-hidden="true">#</a> 只读</h3>
<p>只读的评分用来展示分数，允许出现半星</p>
<p>:::demo 为组件设置 <code v-pre>disabled</code> 属性表示组件为只读，支持小数分值。此时若设置 <code v-pre>show-score</code>，则会在右侧显示目前的分值。可以提供 <code v-pre>score-template</code> 作为显示模板，模板为一个包含了 <code v-pre>{value}</code> 的字符串，<code v-pre>{value}</code> 会被解析为分值。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-rate</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>
  <span class="token attr-name">disabled</span>
  <span class="token attr-name">show-score</span>
  <span class="token attr-name">text-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ff9900<span class="token punctuation">"</span></span>
  <span class="token attr-name">score-template</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{value}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-rate</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3.7</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
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
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>最大分值</td>
<td>number</td>
<td>—</td>
<td>5</td>
</tr>
<tr>
<td>disabled</td>
<td>是否为只读</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>allow-half</td>
<td>是否允许半选</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>low-threshold</td>
<td>低分和中等分数的界限值，值本身被划分在低分中</td>
<td>number</td>
<td>—</td>
<td>2</td>
</tr>
<tr>
<td>high-threshold</td>
<td>高分和中等分数的界限值，值本身被划分在高分中</td>
<td>number</td>
<td>—</td>
<td>4</td>
</tr>
<tr>
<td>colors</td>
<td>icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色</td>
<td>array/object</td>
<td>—</td>
<td>['#F7BA2A', '#F7BA2A', '#F7BA2A']</td>
</tr>
<tr>
<td>void-color</td>
<td>未选中 icon 的颜色</td>
<td>string</td>
<td>—</td>
<td>#C6D1DE</td>
</tr>
<tr>
<td>disabled-void-color</td>
<td>只读时未选中 icon 的颜色</td>
<td>string</td>
<td>—</td>
<td>#EFF2F7</td>
</tr>
<tr>
<td>icon-classes</td>
<td>icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名</td>
<td>array/object</td>
<td>—</td>
<td>['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']</td>
</tr>
<tr>
<td>void-icon-class</td>
<td>未选中 icon 的类名</td>
<td>string</td>
<td>—</td>
<td>el-icon-star-off</td>
</tr>
<tr>
<td>disabled-void-icon-class</td>
<td>只读时未选中 icon 的类名</td>
<td>string</td>
<td>—</td>
<td>el-icon-star-on</td>
</tr>
<tr>
<td>show-text</td>
<td>是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-score</td>
<td>是否显示当前分数，show-score 和 show-text 不能同时为真</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text-color</td>
<td>辅助文字的颜色</td>
<td>string</td>
<td>—</td>
<td>#1F2D3D</td>
</tr>
<tr>
<td>texts</td>
<td>辅助文字数组</td>
<td>array</td>
<td>—</td>
<td>['极差', '失望', '一般', '满意', '惊喜']</td>
</tr>
<tr>
<td>score-template</td>
<td>分数显示模板</td>
<td>string</td>
<td>—</td>
<td>{value}</td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
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
<td>change</td>
<td>分值改变时触发</td>
<td>改变后的分值</td>
</tr>
</tbody>
</table>
</div></template>


