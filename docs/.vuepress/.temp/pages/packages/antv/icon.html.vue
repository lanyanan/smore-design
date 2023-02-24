<template><div><p>提供了一套常用的图标集合。</p>
<h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3>
<p>直接通过设置类名为 <code v-pre>el-icon-iconName</code> 来使用即可。例如：</p>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-edit<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-share<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-delete<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-delete<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>搜索<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-button</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="组件库图标集合" tabindex="-1"><a class="header-anchor" href="#组件库图标集合" aria-hidden="true">#</a> 组件库图标集合</h3>
<ul class="icon-list">
  <li v-for="name in $dlIcons" :key="name">
    <span>
      <dl-icon :name="'dl-icon-' + name"/>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>
<h3 id="element-ui-图标集合" tabindex="-1"><a class="header-anchor" href="#element-ui-图标集合" aria-hidden="true">#</a> element-ui 图标集合</h3>
<ul class="icon-list">
  <li v-for="name in $elIcons" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>
</div></template>


