<template><div><p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>
<h3 id="基础表格" tabindex="-1"><a class="header-anchor" href="#基础表格" aria-hidden="true">#</a> 基础表格</h3>
<p>基础的表格展示用法。</p>
<p>:::demo 当<code v-pre>dl-table</code>元素中注入<code v-pre>data</code>对象数组后，在<code v-pre>dl-table-column</code>中用<code v-pre>prop</code>属性来对应对象中的键名即可填入数据，用<code v-pre>label</code>属性来定义表格的列名。可以使用<code v-pre>width</code>属性来定义列宽。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎1'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎2'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎3'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="对齐表格" tabindex="-1"><a class="header-anchor" href="#对齐表格" aria-hidden="true">#</a> 对齐表格</h3>
<p>::: demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token attr-name">border</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column2<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token attr-name">border</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span>
      <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column3<span class="token punctuation">"</span></span>
      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span>
      <span class="token attr-name">border</span>
      <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span>
      <span class="token attr-name">header-align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">column2</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">'right'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">'left'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">column3</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">'left'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">'left'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">headerAlign</span><span class="token operator">:</span> <span class="token string">'left'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="空表格" tabindex="-1"><a class="header-anchor" href="#空表格" aria-hidden="true">#</a> 空表格</h3>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="带斑马纹表格" tabindex="-1"><a class="header-anchor" href="#带斑马纹表格" aria-hidden="true">#</a> 带斑马纹表格</h3>
<p>使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
<p>:::demo <code v-pre>stripe</code>属性可以创建带斑马纹的表格。它接受一个<code v-pre>Boolean</code>，默认为<code v-pre>false</code>，设置为<code v-pre>true</code>即为启用。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">stripe</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="带边框表格" tabindex="-1"><a class="header-anchor" href="#带边框表格" aria-hidden="true">#</a> 带边框表格</h3>
<p>:::demo 默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用<code v-pre>border</code>属性，它接受一个<code v-pre>Boolean</code>，设置为<code v-pre>true</code>即可启用。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">border</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="表格分页" tabindex="-1"><a class="header-anchor" href="#表格分页" aria-hidden="true">#</a> 表格分页</h3>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span>
    <span class="token attr-name">v-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span>
    <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span>
    <span class="token attr-name">pagination</span>
    <span class="token attr-name">background</span>
    <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>total, sizes, prev, pager, next, jumper<span class="token punctuation">"</span></span>
    <span class="token attr-name">:page-sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[5, 10, 20, 30]<span class="token punctuation">"</span></span>
    <span class="token attr-name">:pager-count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span>
    <span class="token attr-name">:current-page.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentPage<span class="token punctuation">"</span></span>
    <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>
    <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageSize<span class="token punctuation">"</span></span>
    <span class="token attr-name">@size-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSizeChange<span class="token punctuation">"</span></span>
    <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleCurrentChange<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">currentPage</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createData</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pageSize<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">createData</span><span class="token punctuation">(</span><span class="token parameter">length</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">王小虎-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentPage<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">上海市普陀区金沙江路 -</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentPage<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 弄</span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">.</span>data <span class="token operator">=</span> data
        <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleSizeChange</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentPage <span class="token operator">=</span> <span class="token number">1</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>pageSize <span class="token operator">=</span> val
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createData</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pageSize<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleCurrentChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createData</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pageSize<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="带状态表格" tabindex="-1"><a class="header-anchor" href="#带状态表格" aria-hidden="true">#</a> 带状态表格</h3>
<p>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</p>
<p>:::demo 可以通过指定 Table 组件的 <code v-pre>row-class-name</code> 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token attr-name">:row-class-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableRowClassName<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎4'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">tableRowClassName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> row<span class="token punctuation">,</span> rowIndex <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rowIndex <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'warning-row'</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>rowIndex <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'success-row'</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.el-table .warning-row</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> oldlace<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.el-table .success-row</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f0f9eb<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="固定表头" tabindex="-1"><a class="header-anchor" href="#固定表头" aria-hidden="true">#</a> 固定表头</h3>
<p>纵向内容过多时，可选择固定表头。</p>
<p>:::demo 只要在<code v-pre>dl-table</code>元素中定义了<code v-pre>height</code>属性，即可实现固定表头的表格，而不需要额外的代码。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span> <span class="token attr-name">border</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">2016-05-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">王小虎</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">上海市普陀区金沙江路 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 弄</span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="固定列" tabindex="-1"><a class="header-anchor" href="#固定列" aria-hidden="true">#</a> 固定列</h3>
<p>横向内容过多时，可选择固定列。</p>
<p>:::demo 固定列需要使用<code v-pre>fixed</code>属性，它接受 Boolean 值或者<code v-pre>left</code> <code v-pre>right</code>，表示左边固定还是右边固定。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'150'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'province'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'省份'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'city'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'市区'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'300'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'zip'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'邮编'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token string">'right'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'普陀区'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">zip</span><span class="token operator">:</span> <span class="token number">200333</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-04'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'普陀区'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1517 弄'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">zip</span><span class="token operator">:</span> <span class="token number">200333</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'普陀区'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1519 弄'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">zip</span><span class="token operator">:</span> <span class="token number">200333</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.el-table .warning-row</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> oldlace<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.el-table .success-row</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f0f9eb<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="固定列和表头" tabindex="-1"><a class="header-anchor" href="#固定列和表头" aria-hidden="true">#</a> 固定列和表头</h3>
<p>横纵内容过多时，可选择固定列和表头。</p>
<p>:::demo 固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">"</span></span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table-column</span>
      <span class="token attr-name">fixed</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>日期<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table-column</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table-column</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>姓名<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table-column</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table-column</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>province<span class="token punctuation">"</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>省份<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table-column</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table-column</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>city<span class="token punctuation">"</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>市区<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table-column</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table-column</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address<span class="token punctuation">"</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>地址<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table-column</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table-column</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zip<span class="token punctuation">"</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>邮编<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table-column</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-03'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'普陀区'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">zip</span><span class="token operator">:</span> <span class="token number">200333</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'普陀区'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">zip</span><span class="token operator">:</span> <span class="token number">200333</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-04'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'普陀区'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">zip</span><span class="token operator">:</span> <span class="token number">200333</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'普陀区'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">zip</span><span class="token operator">:</span> <span class="token number">200333</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-08'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'普陀区'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">zip</span><span class="token operator">:</span> <span class="token number">200333</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-06'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'普陀区'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">zip</span><span class="token operator">:</span> <span class="token number">200333</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-07'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'普陀区'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">zip</span><span class="token operator">:</span> <span class="token number">200333</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="流体高度" tabindex="-1"><a class="header-anchor" href="#流体高度" aria-hidden="true">#</a> 流体高度</h3>
<p>当数据量动态变化时，可以为 Table 设置一个最大高度。</p>
<p>:::demo 通过设置<code v-pre>max-height</code>属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token attr-name">max-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'150'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'province'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'省份'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'city'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'市区'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'300'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'zip'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'邮编'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token string">'right'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">2016-05-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">王小虎</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'普陀区'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">上海市普陀区金沙江路 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 弄</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">zip</span><span class="token operator">:</span> <span class="token number">200333</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="多级表头" tabindex="-1"><a class="header-anchor" href="#多级表头" aria-hidden="true">#</a> 多级表头</h3>
<p>数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。</p>
<p>:::demo 只需要在 dl-table-column 里面嵌套 dl-table-column，就可以实现多级表头。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>450<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">renderHeader</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>span<span class="token operator">></span>
                  <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"el-icon-time"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
                  <span class="token punctuation">{</span>scope<span class="token punctuation">.</span>column<span class="token punctuation">.</span>label<span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'配送信息'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'120'</span><span class="token punctuation">,</span>
                <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> <span class="token operator">&lt;</span>el<span class="token operator">-</span>tag<span class="token operator">></span><span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">[</span>scope<span class="token punctuation">.</span>column<span class="token punctuation">.</span>property<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>tag<span class="token operator">></span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'province'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'省份'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'city'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'市区'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span><span class="token punctuation">,</span>
                    <span class="token function-variable function">renderHeader</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                      <span class="token keyword">return</span> <span class="token punctuation">(</span>
                        <span class="token operator">&lt;</span>span<span class="token operator">></span>
                          <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"el-icon-location-outline"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
                          <span class="token punctuation">{</span>scope<span class="token punctuation">.</span>column<span class="token punctuation">.</span>label<span class="token punctuation">}</span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                      <span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">2016-05-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">王小虎</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">province</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'普陀区'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">上海市普陀区金沙江路 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 弄</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">zip</span><span class="token operator">:</span> <span class="token number">200333</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="单选" tabindex="-1"><a class="header-anchor" href="#单选" aria-hidden="true">#</a> 单选</h3>
<p>选择单行数据时使用色块表示。</p>
<p>:::demo Table 组件提供了单选的支持，只需要配置<code v-pre>highlight-current-row</code>属性即可实现单选。之后由<code v-pre>current-change</code>事件来管理选中时触发的事件，它会传入<code v-pre>currentRow</code>，<code v-pre>oldCurrentRow</code>。如果需要显示索引，可以增加一列<code v-pre>dl-table-column</code>，设置<code v-pre>type</code>属性为<code v-pre>index</code>即可显示从 1 开始的索引号。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span>
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>singleTable<span class="token punctuation">"</span></span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData<span class="token punctuation">"</span></span>
    <span class="token attr-name">highlight-current-row</span>
    <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleCurrentChange<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table-column</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table-column</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table-column</span>
      <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>日期<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table-column</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table-column</span>
      <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>姓名<span class="token punctuation">"</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table-column</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table-column</span>
      <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address<span class="token punctuation">"</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>地址<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table-column</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>setCurrent(tableData[1])<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>选中第二行<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>setCurrent()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>取消选择<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-04'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1517 弄'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1519 弄'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-03'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1516 弄'</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">currentRow</span><span class="token operator">:</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">setCurrent</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>singleTable<span class="token punctuation">.</span><span class="token function">setCurrentRow</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">handleCurrentChange</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>currentRow <span class="token operator">=</span> val<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="多选" tabindex="-1"><a class="header-anchor" href="#多选" aria-hidden="true">#</a> 多选</h3>
<p>选择多行数据时使用 Checkbox。</p>
<p>:::demo 实现多选非常简单: 手动添加一个<code v-pre>dl-table-column</code>，设<code v-pre>type</code>属性为<code v-pre>selection</code>即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用<code v-pre>show-overflow-tooltip</code>属性，它接受一个<code v-pre>Boolean</code>，为<code v-pre>true</code>时多余的内容会在 hover 时以 tooltip 的形式显示出来。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multipleTable<span class="token punctuation">"</span></span>
      <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span>
      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span>
      <span class="token attr-name">@selection-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSelectionChange<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggleSelection([tableData.data[1], tableData.data[2]])<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>切换第二、第三行的选中状态<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggleSelection()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>取消选择<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'selection'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">multipleSelection</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">toggleSelection</span><span class="token punctuation">(</span><span class="token parameter">rows</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rows<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rows<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>multipleTable<span class="token punctuation">.</span><span class="token function">toggleRowSelection</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>multipleTable<span class="token punctuation">.</span><span class="token function">clearSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleSelectionChange</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>multipleSelection <span class="token operator">=</span> val
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h3>
<p>对表格进行排序，可快速查找或对比数据。</p>
<p>:::demo 在列中设置<code v-pre>sortable</code>属性即可实现以该列为基准的排序，接受一个<code v-pre>Boolean</code>，默认为<code v-pre>false</code>。可以通过 Table 的<code v-pre>default-sort</code>属性设置默认的排序列和排序顺序。可以使用<code v-pre>sort-method</code>或者<code v-pre>sort-by</code>使用自定义的排序规则。如果需要后端排序，需将<code v-pre>sortable</code>设置为<code v-pre>custom</code>，同时在 Table 上监听<code v-pre>sort-change</code>事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了<code v-pre>formatter</code>属性，它用于格式化指定列的值，接受一个<code v-pre>Function</code>，会传入两个参数：<code v-pre>row</code>和<code v-pre>column</code>，可以根据自己的需求进行处理。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span>
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multipleTable<span class="token punctuation">"</span></span>
    <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span>
    <span class="token attr-name">:default-sort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ prop: 'date', order: 'descending' }<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formatter
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1511 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1512 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-03'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1513 弄'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">multipleSelection</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">formatter</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>row<span class="token punctuation">.</span>address<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-formatter</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="筛选" tabindex="-1"><a class="header-anchor" href="#筛选" aria-hidden="true">#</a> 筛选</h3>
<p>对表格进行筛选，可快速查找到自己想看的数据。</p>
<p>:::demo 在列中设置<code v-pre>filters</code> <code v-pre>filter-method</code>属性即可开启该列的筛选，filters 是一个数组，<code v-pre>filter-method</code>是一个方法，它用于决定某些数据是否显示，会传入三个参数：<code v-pre>value</code>, <code v-pre>row</code> 和 <code v-pre>column</code>。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>resetDateFilter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>清除日期过滤器<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clearFilter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>清除所有过滤器<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>filterTable<span class="token punctuation">"</span></span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">columnKey</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'2016-05-03'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2016-05-03'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'2016-05-04'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2016-05-04'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filterMethod</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>filterHandler
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'标签'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'家'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'家'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'公司'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'公司'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filterMethod</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>filterTag<span class="token punctuation">,</span>
            <span class="token literal-property property">filterPlacement</span><span class="token operator">:</span> <span class="token string">'bottom-end'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token operator">&lt;</span>el<span class="token operator">-</span>tag type<span class="token operator">=</span><span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">'家'</span> <span class="token operator">?</span> <span class="token string">'primary'</span> <span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">.</span>tag<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>tag<span class="token operator">></span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'家'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-04'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1517 弄'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'公司'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1519 弄'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'家'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-03'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1516 弄'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'公司'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">resetDateFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>filterTable<span class="token punctuation">.</span><span class="token function">clearFilter</span><span class="token punctuation">(</span><span class="token string">'date'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">clearFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>filterTable<span class="token punctuation">.</span><span class="token function">clearFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">formatter</span><span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> column</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> row<span class="token punctuation">.</span>address
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">filterTag</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> row<span class="token punctuation">.</span>tag <span class="token operator">===</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">filterHandler</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> row<span class="token punctuation">,</span> column</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> property <span class="token operator">=</span> column<span class="token punctuation">[</span><span class="token string">'property'</span><span class="token punctuation">]</span>
      <span class="token keyword">return</span> row<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">===</span> value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="自定义列模板" tabindex="-1"><a class="header-anchor" href="#自定义列模板" aria-hidden="true">#</a> 自定义列模板</h3>
<p>自定义列的显示内容，可组合其他组件使用。
:::demo 通过 <code v-pre>Scoped slot</code> 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">border</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>
                  <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"el-icon-time"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
                  <span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token string">"margin-left: 10px"</span><span class="token operator">></span><span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">.</span>date<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>el<span class="token operator">-</span>popover trigger<span class="token operator">=</span><span class="token string">"hover"</span> placement<span class="token operator">=</span><span class="token string">"top"</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>p<span class="token operator">></span>姓名<span class="token operator">:</span> <span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                  <span class="token operator">&lt;</span>p<span class="token operator">></span>住址<span class="token operator">:</span> <span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">.</span>address<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                  <span class="token operator">&lt;</span>div slot<span class="token operator">=</span><span class="token string">"reference"</span> style<span class="token operator">=</span><span class="token string">"display: inline-block"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>el<span class="token operator">-</span>tag size<span class="token operator">=</span><span class="token string">"medium"</span><span class="token operator">></span><span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>tag<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>popover<span class="token operator">></span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'操作'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>
                  <span class="token operator">&lt;</span>el<span class="token operator">-</span>button
                    size<span class="token operator">=</span><span class="token string">"mini"</span>
                    onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleEdit</span><span class="token punctuation">(</span>scope<span class="token punctuation">.</span>$index<span class="token punctuation">,</span> scope<span class="token punctuation">.</span>row<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token punctuation">}</span>
                  <span class="token operator">></span>
                    编辑
                  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
                  <span class="token operator">&lt;</span>el<span class="token operator">-</span>button
                    size<span class="token operator">=</span><span class="token string">"mini"</span>
                    type<span class="token operator">=</span><span class="token string">"danger"</span>
                    onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleDelete</span><span class="token punctuation">(</span>scope<span class="token punctuation">.</span>$index<span class="token punctuation">,</span> scope<span class="token punctuation">.</span>row<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token punctuation">}</span>
                  <span class="token operator">></span>
                    删除
                  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1519 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1520 弄'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleEdit</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> row<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">点击的了编辑，索引：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleDelete</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> row<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">点击的了删除，索引：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="展开行" tabindex="-1"><a class="header-anchor" href="#展开行" aria-hidden="true">#</a> 展开行</h3>
<p>当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。
:::demo 通过设置 type=&quot;expand&quot; 和 <code v-pre>Scoped slot</code> 可以开启展开行功能，<code v-pre>dl-table-column</code> 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 <code v-pre>Scoped slot</code> 相同。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'expand'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>el<span class="token operator">-</span>form label<span class="token operator">-</span>position<span class="token operator">=</span><span class="token string">"left"</span> inline <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"demo-table-expand"</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item label<span class="token operator">=</span><span class="token string">"商品名称"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>row<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">></span>
                  <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item label<span class="token operator">=</span><span class="token string">"所属店铺"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>row<span class="token punctuation">.</span>shop<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">></span>
                  <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item label<span class="token operator">=</span><span class="token string">"商品 ID"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>row<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">></span>
                  <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item label<span class="token operator">=</span><span class="token string">"店铺 ID"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>row<span class="token punctuation">.</span>shopId<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">></span>
                  <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item label<span class="token operator">=</span><span class="token string">"商品分类"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>row<span class="token punctuation">.</span>category<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">></span>
                  <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item label<span class="token operator">=</span><span class="token string">"店铺地址"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>row<span class="token punctuation">.</span>address<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">></span>
                  <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item label<span class="token operator">=</span><span class="token string">"商品描述"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>row<span class="token punctuation">.</span>desc<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">></span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'id'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'ID'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'商品名称'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'desc'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'描述'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987122'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'好滋好味鸡蛋仔'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'江浙小吃、小吃零食'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">'荷兰优质淡奶，奶香浓而不腻'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区真北路'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shop</span><span class="token operator">:</span> <span class="token string">'王小虎夫妻店'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shopId</span><span class="token operator">:</span> <span class="token string">'10333'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987123'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'好滋好味鸡蛋仔'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'江浙小吃、小吃零食'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">'荷兰优质淡奶，奶香浓而不腻'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区真北路'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shop</span><span class="token operator">:</span> <span class="token string">'王小虎夫妻店'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shopId</span><span class="token operator">:</span> <span class="token string">'10333'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987125'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'好滋好味鸡蛋仔'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'江浙小吃、小吃零食'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">'荷兰优质淡奶，奶香浓而不腻'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区真北路'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shop</span><span class="token operator">:</span> <span class="token string">'王小虎夫妻店'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shopId</span><span class="token operator">:</span> <span class="token string">'10333'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987126'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'好滋好味鸡蛋仔'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'江浙小吃、小吃零食'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">'荷兰优质淡奶，奶香浓而不腻'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区真北路'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shop</span><span class="token operator">:</span> <span class="token string">'王小虎夫妻店'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shopId</span><span class="token operator">:</span> <span class="token string">'10333'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.demo-table-expand</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.demo-table-expand label</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 90px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #99a9bf<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.demo-table-expand .el-form-item</span> <span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="树形数据与懒加载" tabindex="-1"><a class="header-anchor" href="#树形数据与懒加载" aria-hidden="true">#</a> 树形数据与懒加载</h3>
<p>:::demo 支持树类型的数据的显示。当 row 中包含 <code v-pre>children</code> 字段时，被视为树形数据。渲染树形数据时，必须要指定 <code v-pre>row-key</code>。支持子节点数据异步加载。设置 Table 的 <code v-pre>lazy</code> 属性为 true 与加载函数 <code v-pre>load</code> 。通过指定 row 中的 <code v-pre>hasChildren</code> 字段来指定哪些行是包含子节点。<code v-pre>children</code> 与 <code v-pre>hasChildren</code> 都可以通过 <code v-pre>tree-props</code> 配置。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span>
      <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData1.column<span class="token punctuation">"</span></span>
      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData1.data<span class="token punctuation">"</span></span>
      <span class="token attr-name">border</span>
      <span class="token attr-name">row-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>
      <span class="token attr-name">border</span>
      <span class="token attr-name">default-expand-all</span>
      <span class="token attr-name">:tree-props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ children: 'children', hasChildren: 'hasChildren' }<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span>
      <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData1.column<span class="token punctuation">"</span></span>
      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData2.data<span class="token punctuation">"</span></span>
      <span class="token attr-name">row-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>
      <span class="token attr-name">border</span>
      <span class="token attr-name">lazy</span>
      <span class="token attr-name">:load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>load<span class="token punctuation">"</span></span>
      <span class="token attr-name">:tree-props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ children: 'children', hasChildren: 'hasChildren' }<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-04'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1517 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1519 弄'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>
                <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1519 弄'</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
                <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1519 弄'</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-03'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1516 弄'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tableData2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-04'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1517 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1519 弄'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">hasChildren</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-03'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1516 弄'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter">tree<span class="token punctuation">,</span> treeNode<span class="token punctuation">,</span> resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1519 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1519 弄'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="自定义表头" tabindex="-1"><a class="header-anchor" href="#自定义表头" aria-hidden="true">#</a> 自定义表头</h3>
<p>表头支持自定义。</p>
<p>:::demo 通过设置 <a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD" target="_blank" rel="noopener noreferrer">Scoped slot<ExternalLinkIcon/></a> 来自定义表头。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table-column</span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Date<span class="token punctuation">"</span></span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table-column</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table-column</span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table-column</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table-column</span>
      <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span>
          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>输入关键字搜索<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span>
          <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEdit(scope.$index, scope.row)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Edit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span>
          <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleDelete(scope.$index, scope.row)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Delete<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table-column</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl-table</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-04'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1517 弄'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-01'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1519 弄'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-03'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1516 弄'</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">''</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handleEdit</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> row<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">handleDelete</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> row<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="表尾合计行" tabindex="-1"><a class="header-anchor" href="#表尾合计行" aria-hidden="true">#</a> 表尾合计行</h3>
<p>若表格展示的是各类数字，可以在表尾显示各列的合计。
:::demo 将<code v-pre>show-summary</code>设置为<code v-pre>true</code>就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过<code v-pre>sum-text</code>配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用<code v-pre>summary-method</code>并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token attr-name">border</span> <span class="token attr-name">show-summary</span> <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span>
      <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span>
      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span>
      <span class="token attr-name">:summary-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getSummaries<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span>
      <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span>
      <span class="token attr-name">border</span>
      <span class="token attr-name">show-summary</span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'id'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'ID'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'amount1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'数值1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'amount2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'数值2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'amount3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'数值3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987122'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount1</span><span class="token operator">:</span> <span class="token string">'234'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount2</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount3</span><span class="token operator">:</span> <span class="token number">10</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987123'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount1</span><span class="token operator">:</span> <span class="token string">'165'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount2</span><span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount3</span><span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987124'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount1</span><span class="token operator">:</span> <span class="token string">'324'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount2</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount3</span><span class="token operator">:</span> <span class="token number">9</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987125'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount1</span><span class="token operator">:</span> <span class="token string">'621'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount2</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount3</span><span class="token operator">:</span> <span class="token number">17</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987126'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount1</span><span class="token operator">:</span> <span class="token string">'539'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount2</span><span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount3</span><span class="token operator">:</span> <span class="token number">15</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getSummaries</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> columns<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> param
      <span class="token keyword">const</span> sums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      columns<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">column<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          sums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'总价'</span>
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> values <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Number</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>column<span class="token punctuation">.</span>property<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>values<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">isNaN</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          sums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> values<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> curr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>curr<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> prev <span class="token operator">+</span> curr
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> prev
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
          sums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token string">' 元'</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          sums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'N/A'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> sums
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="合并行或列" tabindex="-1"><a class="header-anchor" href="#合并行或列" aria-hidden="true">#</a> 合并行或列</h3>
<p>多行或多列共用一个数据时，可以合并行或列。
:::demo 通过给<code v-pre>table</code>传入<code v-pre>span-method</code>方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行<code v-pre>row</code>、当前列<code v-pre>column</code>、当前行号<code v-pre>rowIndex</code>、当前列号<code v-pre>columnIndex</code>四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表<code v-pre>rowspan</code>，第二个元素代表<code v-pre>colspan</code>。 也可以返回一个键名为<code v-pre>rowspan</code>和<code v-pre>colspan</code>的对象。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token attr-name">:span-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arraySpanMethod<span class="token punctuation">"</span></span> <span class="token attr-name">border</span> <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span>
      <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span>
      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span>
      <span class="token attr-name">:span-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>objectSpanMethod<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span>
      <span class="token attr-name">border</span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'id'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'ID'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'amount1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'数值1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'amount2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'数值2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'amount3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'数值3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987122'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount1</span><span class="token operator">:</span> <span class="token string">'234'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount2</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount3</span><span class="token operator">:</span> <span class="token number">10</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987123'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount1</span><span class="token operator">:</span> <span class="token string">'165'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount2</span><span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount3</span><span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987124'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount1</span><span class="token operator">:</span> <span class="token string">'324'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount2</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount3</span><span class="token operator">:</span> <span class="token number">9</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987125'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount1</span><span class="token operator">:</span> <span class="token string">'621'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount2</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount3</span><span class="token operator">:</span> <span class="token number">17</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12987126'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount1</span><span class="token operator">:</span> <span class="token string">'539'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount2</span><span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">amount3</span><span class="token operator">:</span> <span class="token number">15</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">arraySpanMethod</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> row<span class="token punctuation">,</span> column<span class="token punctuation">,</span> rowIndex<span class="token punctuation">,</span> columnIndex <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rowIndex <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>columnIndex <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>columnIndex <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">objectSpanMethod</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> row<span class="token punctuation">,</span> column<span class="token punctuation">,</span> rowIndex<span class="token punctuation">,</span> columnIndex <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>columnIndex <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rowIndex <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">rowspan</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">colspan</span><span class="token operator">:</span> <span class="token number">1</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">rowspan</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">colspan</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="自定义索引" tabindex="-1"><a class="header-anchor" href="#自定义索引" aria-hidden="true">#</a> 自定义索引</h3>
<p>自定义 <code v-pre>type=index</code> 列的行号。
:::demo 通过给 <code v-pre>type=index</code> 的列传入 <code v-pre>index</code> 属性，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 <code v-pre>0</code> 开始）作为参数，返回值将作为索引展示。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>indexMethod
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">indexMethod</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> index <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="编辑表格" tabindex="-1"><a class="header-anchor" href="#编辑表格" aria-hidden="true">#</a> 编辑表格</h3>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'150'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>
                  <span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">.</span>_edit <span class="token operator">?</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>el<span class="token operator">-</span>date<span class="token operator">-</span>picker
                      value<span class="token operator">=</span><span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">[</span>scope<span class="token punctuation">.</span>column<span class="token punctuation">.</span>property<span class="token punctuation">]</span><span class="token punctuation">}</span>
                      type<span class="token operator">=</span><span class="token string">"date"</span>
                      value<span class="token operator">-</span>format<span class="token operator">=</span><span class="token string">"yyyy-MM-dd"</span>
                      placeholder<span class="token operator">=</span><span class="token string">"选择日期"</span>
                      style<span class="token operator">=</span><span class="token string">"width: 140px"</span>
                      onInput<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                        scope<span class="token punctuation">.</span>row<span class="token punctuation">[</span>scope<span class="token punctuation">.</span>column<span class="token punctuation">.</span>property<span class="token punctuation">]</span> <span class="token operator">=</span> val
                      <span class="token punctuation">}</span><span class="token punctuation">}</span>
                    <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>date<span class="token operator">-</span>picker<span class="token operator">></span>
                  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">[</span>scope<span class="token punctuation">.</span>column<span class="token punctuation">.</span>property<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                  <span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>
                  <span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">.</span>_edit <span class="token operator">?</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>el<span class="token operator">-</span>input
                      value<span class="token operator">=</span><span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">[</span>scope<span class="token punctuation">.</span>column<span class="token punctuation">.</span>property<span class="token punctuation">]</span><span class="token punctuation">}</span>
                      onInput<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                        scope<span class="token punctuation">.</span>row<span class="token punctuation">[</span>scope<span class="token punctuation">.</span>column<span class="token punctuation">.</span>property<span class="token punctuation">]</span> <span class="token operator">=</span> val
                      <span class="token punctuation">}</span><span class="token punctuation">}</span>
                    <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>input<span class="token operator">></span>
                  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">[</span>scope<span class="token punctuation">.</span>column<span class="token punctuation">.</span>property<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                  <span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'标签'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>
                  <span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">.</span>_edit <span class="token operator">?</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>el<span class="token operator">-</span>select
                      value<span class="token operator">=</span><span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">[</span>scope<span class="token punctuation">.</span>column<span class="token punctuation">.</span>property<span class="token punctuation">]</span><span class="token punctuation">}</span>
                      style<span class="token operator">=</span><span class="token string">"width: 80px"</span>
                      onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                        scope<span class="token punctuation">.</span>row<span class="token punctuation">[</span>scope<span class="token punctuation">.</span>column<span class="token punctuation">.</span>property<span class="token punctuation">]</span> <span class="token operator">=</span> val
                      <span class="token punctuation">}</span><span class="token punctuation">}</span>
                    <span class="token operator">></span>
                      <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>tagOptions<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token operator">&lt;</span>el<span class="token operator">-</span>option label<span class="token operator">=</span><span class="token punctuation">{</span>option<span class="token punctuation">.</span>label<span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>option<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>option<span class="token operator">></span>
                      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>select<span class="token operator">></span>
                  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>el<span class="token operator">-</span>tag type<span class="token operator">=</span><span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">'家'</span> <span class="token operator">?</span> <span class="token string">'primary'</span> <span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">}</span><span class="token operator">></span>
                      <span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">[</span>scope<span class="token punctuation">.</span>column<span class="token punctuation">.</span>property<span class="token punctuation">]</span><span class="token punctuation">}</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>tag<span class="token operator">></span>
                  <span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'操作'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>
                  <span class="token punctuation">{</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">.</span>_edit <span class="token operator">?</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>div<span class="token operator">></span>
                      <span class="token operator">&lt;</span>el<span class="token operator">-</span>button
                        type<span class="token operator">=</span><span class="token string">"primary"</span>
                        onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleSave</span><span class="token punctuation">(</span>scope<span class="token punctuation">)</span>
                        <span class="token punctuation">}</span><span class="token punctuation">}</span>
                      <span class="token operator">></span>
                        保存
                      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
                      <span class="token operator">&lt;</span>el<span class="token operator">-</span>button
                        onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleCancle</span><span class="token punctuation">(</span>scope<span class="token punctuation">)</span>
                        <span class="token punctuation">}</span><span class="token punctuation">}</span>
                      <span class="token operator">></span>
                        取消
                      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button
                      type<span class="token operator">=</span><span class="token string">"primary"</span>
                      onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleEdit</span><span class="token punctuation">(</span>scope<span class="token punctuation">)</span>
                      <span class="token punctuation">}</span><span class="token punctuation">}</span>
                    <span class="token operator">></span>
                      编辑
                    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
                  <span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'家'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'公司'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">'公司'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">defaultData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tagOptions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'家'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'家'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'公司'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'公司'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">.</span>defaultData <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleEdit</span><span class="token punctuation">(</span><span class="token parameter">scope</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">,</span> <span class="token string">'_edit'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleSave</span><span class="token punctuation">(</span><span class="token parameter">scope</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">,</span> <span class="token string">'_edit'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">.</span>defaultData<span class="token punctuation">,</span> scope<span class="token punctuation">.</span>$index<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleCancle</span><span class="token punctuation">(</span><span class="token parameter">scope</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">.</span>data<span class="token punctuation">,</span> scope<span class="token punctuation">.</span>$index<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">.</span>defaultData<span class="token punctuation">[</span>scope<span class="token punctuation">.</span>$index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="表格编辑弹窗" tabindex="-1"><a class="header-anchor" href="#表格编辑弹窗" aria-hidden="true">#</a> 表格编辑弹窗</h3>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl-table</span> <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.column<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData.data<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dialog</span> <span class="token attr-name">:visible.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialogVisible<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>编辑<span class="token punctuation">"</span></span> <span class="token attr-name">append-to-body</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentEdit<span class="token punctuation">"</span></span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>日期<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-date-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentEdit.date<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span> <span class="token attr-name">value-format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yyyy-MM-dd<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择日期<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>姓名<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentEdit.name<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入姓名<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>地址<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentEdit.address<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入地址<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialogVisible = false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>取 消<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>confirm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>确 定<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dialog</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'日期'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地址'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'操作'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>el<span class="token operator">-</span>button
                  type<span class="token operator">=</span><span class="token string">"primary"</span>
                  onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">openDialog</span><span class="token punctuation">(</span>scope<span class="token punctuation">)</span>
                  <span class="token punctuation">}</span><span class="token punctuation">}</span>
                <span class="token operator">></span>
                  编辑
                <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">'2016-05-02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王小虎3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'上海市普陀区金沙江路 1518 弄'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">currentEdit</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">currentIndex</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dialogVisible</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token parameter">scope</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentEdit <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>scope<span class="token punctuation">.</span>row<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentIndex <span class="token operator">=</span> scope<span class="token punctuation">.</span>$index
      <span class="token keyword">this</span><span class="token punctuation">.</span>dialogVisible <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>dialogVisible <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">.</span>data<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentIndex<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentEdit<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="table-attributes" tabindex="-1"><a class="header-anchor" href="#table-attributes" aria-hidden="true">#</a> Table Attributes</h3>
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
<td>data</td>
<td>显示的数据</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>height</td>
<td>Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max-height</td>
<td>Table 的最大高度。合法的值为数字或者单位为 px 的高度。</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>stripe</td>
<td>是否为斑马纹 table</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>是否带有纵向边框</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Table 的尺寸</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>fit</td>
<td>列的宽度是否自撑开</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-header</td>
<td>是否显示表头</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>highlight-current-row</td>
<td>是否要高亮当前行</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>current-row-key</td>
<td>当前行的 key，只写属性</td>
<td>String,Number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-class-name</td>
<td>行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。</td>
<td>Function({row, rowIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-style</td>
<td>行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。</td>
<td>Function({row, rowIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cell-class-name</td>
<td>单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。</td>
<td>Function({row, column, rowIndex, columnIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cell-style</td>
<td>单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。</td>
<td>Function({row, column, rowIndex, columnIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-row-class-name</td>
<td>表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。</td>
<td>Function({row, rowIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-row-style</td>
<td>表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。</td>
<td>Function({row, rowIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-cell-class-name</td>
<td>表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。</td>
<td>Function({row, column, rowIndex, columnIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-cell-style</td>
<td>表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。</td>
<td>Function({row, column, rowIndex, columnIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-key</td>
<td>行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：<code v-pre>user.info.id</code>，但不支持 <code v-pre>user.info[0].id</code>，此种情况请使用 <code v-pre>Function</code>。</td>
<td>Function(row)/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>empty-text</td>
<td>空数据时显示的文本内容，也可以通过 <code v-pre>slot=&quot;empty&quot;</code> 设置</td>
<td>String</td>
<td>—</td>
<td>暂无数据</td>
</tr>
<tr>
<td>default-expand-all</td>
<td>是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>expand-row-keys</td>
<td>可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。</td>
<td>Array</td>
<td>—</td>
<td></td>
</tr>
<tr>
<td>default-sort</td>
<td>默认的排序列的 prop 和顺序。它的<code v-pre>prop</code>属性指定默认的排序的列，<code v-pre>order</code>指定默认排序的顺序</td>
<td>Object</td>
<td><code v-pre>order</code>: ascending, descending</td>
<td>如果只指定了<code v-pre>prop</code>, 没有指定<code v-pre>order</code>, 则默认顺序是ascending</td>
</tr>
<tr>
<td>tooltip-effect</td>
<td>tooltip <code v-pre>effect</code> 属性</td>
<td>String</td>
<td>dark/light</td>
<td></td>
</tr>
<tr>
<td>show-summary</td>
<td>是否在表尾显示合计行</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>sum-text</td>
<td>合计行第一列的文本</td>
<td>String</td>
<td>—</td>
<td>合计</td>
</tr>
<tr>
<td>summary-method</td>
<td>自定义的合计计算方法</td>
<td>Function({ columns, data })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>span-method</td>
<td>合并行或列的计算方法</td>
<td>Function({ row, column, rowIndex, columnIndex })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>select-on-indeterminate</td>
<td>在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>indent</td>
<td>展示树形数据时，树节点的缩进</td>
<td>Number</td>
<td>—</td>
<td>16</td>
</tr>
<tr>
<td>lazy</td>
<td>是否懒加载子节点数据</td>
<td>Boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>load</td>
<td>加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息</td>
<td>Function(row, treeNode, resolve)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tree-props</td>
<td>渲染嵌套数据的配置选项</td>
<td>Object</td>
<td>—</td>
<td>{ hasChildren: 'hasChildren', children: 'children' }</td>
</tr>
</tbody>
</table>
<h3 id="table-events" tabindex="-1"><a class="header-anchor" href="#table-events" aria-hidden="true">#</a> Table Events</h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>select</td>
<td>当用户手动勾选数据行的 Checkbox 时触发的事件</td>
<td>selection, row</td>
</tr>
<tr>
<td>select-all</td>
<td>当用户手动勾选全选 Checkbox 时触发的事件</td>
<td>selection</td>
</tr>
<tr>
<td>selection-change</td>
<td>当选择项发生变化时会触发该事件</td>
<td>selection</td>
</tr>
<tr>
<td>cell-mouse-enter</td>
<td>当单元格 hover 进入时会触发该事件</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-mouse-leave</td>
<td>当单元格 hover 退出时会触发该事件</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-click</td>
<td>当某个单元格被点击时会触发该事件</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-dblclick</td>
<td>当某个单元格被双击击时会触发该事件</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>row-click</td>
<td>当某一行被点击时会触发该事件</td>
<td>row, column, event</td>
</tr>
<tr>
<td>row-contextmenu</td>
<td>当某一行被鼠标右键点击时会触发该事件</td>
<td>row, column, event</td>
</tr>
<tr>
<td>row-dblclick</td>
<td>当某一行被双击时会触发该事件</td>
<td>row, column, event</td>
</tr>
<tr>
<td>header-click</td>
<td>当某一列的表头被点击时会触发该事件</td>
<td>column, event</td>
</tr>
<tr>
<td>header-contextmenu</td>
<td>当某一列的表头被鼠标右键点击时触发该事件</td>
<td>column, event</td>
</tr>
<tr>
<td>sort-change</td>
<td>当表格的排序条件发生变化的时候会触发该事件</td>
<td>{ column, prop, order }</td>
</tr>
<tr>
<td>filter-change</td>
<td>当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。</td>
<td>filters</td>
</tr>
<tr>
<td>current-change</td>
<td>当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性</td>
<td>currentRow, oldCurrentRow</td>
</tr>
<tr>
<td>header-dragend</td>
<td>当拖动表头改变了列的宽度的时候会触发该事件</td>
<td>newWidth, oldWidth, column, event</td>
</tr>
<tr>
<td>expand-change</td>
<td>当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）</td>
<td>row, (expandedRows | expanded)</td>
</tr>
</tbody>
</table>
<h3 id="table-methods" tabindex="-1"><a class="header-anchor" href="#table-methods" aria-hidden="true">#</a> Table Methods</h3>
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
<td>clearSelection</td>
<td>用于多选表格，清空用户的选择</td>
<td>—</td>
</tr>
<tr>
<td>toggleRowSelection</td>
<td>用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）</td>
<td>row, selected</td>
</tr>
<tr>
<td>toggleAllSelection</td>
<td>用于多选表格，切换所有行的选中状态</td>
<td>-</td>
</tr>
<tr>
<td>toggleRowExpansion</td>
<td>用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）</td>
<td>row, expanded</td>
</tr>
<tr>
<td>setCurrentRow</td>
<td>用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。</td>
<td>row</td>
</tr>
<tr>
<td>clearSort</td>
<td>用于清空排序条件，数据会恢复成未排序的状态</td>
<td>—</td>
</tr>
<tr>
<td>clearFilter</td>
<td>不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件</td>
<td>columnKey</td>
</tr>
<tr>
<td>doLayout</td>
<td>对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法</td>
<td>—</td>
</tr>
<tr>
<td>sort</td>
<td>手动对 Table 进行排序。参数<code v-pre>prop</code>属性指定排序列，<code v-pre>order</code>指定排序顺序。</td>
<td>prop: string, order: string</td>
</tr>
</tbody>
</table>
<h3 id="table-slot" tabindex="-1"><a class="header-anchor" href="#table-slot" aria-hidden="true">#</a> Table Slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>append</td>
<td>插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。</td>
</tr>
</tbody>
</table>
<h3 id="table-column-attributes" tabindex="-1"><a class="header-anchor" href="#table-column-attributes" aria-hidden="true">#</a> Table-column Attributes</h3>
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
<td>对应列的类型。如果设置了 <code v-pre>selection</code> 则显示多选框；如果设置了 <code v-pre>index</code> 则显示该行的索引（从 1 开始计算）；如果设置了 <code v-pre>expand</code> 则显示为一个可展开的按钮</td>
<td>string</td>
<td>selection/index/expand</td>
<td>—</td>
</tr>
<tr>
<td>index</td>
<td>如果设置了 <code v-pre>type=index</code>，可以通过传递 <code v-pre>index</code> 属性来自定义索引</td>
<td>number, Function(index)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>column-key</td>
<td>column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>显示的标题</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prop</td>
<td>对应列内容的字段名，也可以使用 property 属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>对应列的宽度</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>min-width</td>
<td>对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>fixed</td>
<td>列是否固定在左侧或者右侧，true 表示固定在左侧</td>
<td>string, boolean</td>
<td>true, left, right</td>
<td>—</td>
</tr>
<tr>
<td>render-header</td>
<td>列标题 Label 区域渲染使用的 Function</td>
<td>Function(h, { column, $index })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sortable</td>
<td>对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件</td>
<td>boolean, string</td>
<td>true, false, 'custom'</td>
<td>false</td>
</tr>
<tr>
<td>sort-method</td>
<td>对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致</td>
<td>Function(a, b)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sort-by</td>
<td>指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推</td>
<td>String/Array/Function(row, index)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sort-orders</td>
<td>数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序</td>
<td>array</td>
<td>数组中的元素需为以下三者之一：<code v-pre>ascending</code> 表示升序，<code v-pre>descending</code> 表示降序，<code v-pre>null</code> 表示还原为原始顺序</td>
<td>['ascending', 'descending', null]</td>
</tr>
<tr>
<td>resizable</td>
<td>对应列是否可以通过拖动改变宽度（需要在 dl-table 上设置 border 属性为真）</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>formatter</td>
<td>用来格式化内容</td>
<td>Function(row, column, cellValue, index)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-overflow-tooltip</td>
<td>当内容过长被隐藏时显示 tooltip</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>align</td>
<td>对齐方式</td>
<td>String</td>
<td>left/center/right</td>
<td>left</td>
</tr>
<tr>
<td>header-align</td>
<td>表头对齐方式，若不设置该项，则使用表格的对齐方式</td>
<td>String</td>
<td>left/center/right</td>
<td>—</td>
</tr>
<tr>
<td>class-name</td>
<td>列的 className</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label-class-name</td>
<td>当前列标题的自定义类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>selectable</td>
<td>仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选</td>
<td>Function(row, index)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>reserve-selection</td>
<td>仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 <code v-pre>row-key</code>）</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filters</td>
<td>数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。</td>
<td>Array[{ text, value }]</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filter-placement</td>
<td>过滤弹出框的定位</td>
<td>String</td>
<td>与 Tooltip 的 <code v-pre>placement</code> 属性相同</td>
<td>—</td>
</tr>
<tr>
<td>filter-multiple</td>
<td>数据过滤的选项是否多选</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>filter-method</td>
<td>数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。</td>
<td>Function(value, row, column)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filtered-value</td>
<td>选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。</td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="table-column-scoped-slot" tabindex="-1"><a class="header-anchor" href="#table-column-scoped-slot" aria-hidden="true">#</a> Table-column Scoped Slot</h3>
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
<td>自定义列的内容，参数为 { row, column, $index }</td>
</tr>
<tr>
<td>header</td>
<td>自定义表头的内容. 参数为 { column, $index }</td>
</tr>
</tbody>
</table>
</div></template>


