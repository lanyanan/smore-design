<template><div><h1 id="transfer-穿梭框" tabindex="-1"><a class="header-anchor" href="#transfer-穿梭框" aria-hidden="true">#</a> Transfer 穿梭框</h1>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>:::demo Transfer 的数据通过 <code v-pre>data</code> 属性传入。数据需要是一个对象数组，每个对象有以下属性：<code v-pre>key</code> 为数据的唯一性标识，<code v-pre>label</code> 为显示文本，<code v-pre>disabled</code> 表示该项数据是否禁止转移。目标列表中的数据项会同步到绑定至 <code v-pre>v-model</code> 的变量，值为数据项的 <code v-pre>key</code> 所组成的数组。当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 <code v-pre>v-model</code> 绑定的变量赋予一个初始值。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-transfer</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-transfer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token parameter">_</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">15</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> i<span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">备选项 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> i <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">disabled</span><span class="token operator">:</span> i <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">===</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token function">generateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="可搜索" tabindex="-1"><a class="header-anchor" href="#可搜索" aria-hidden="true">#</a> 可搜索</h3>
<p>在数据很多的情况下，可以对数据进行搜索和过滤。</p>
<p>:::demo 设置 <code v-pre>filterable</code> 为 <code v-pre>true</code> 即可开启搜索模式。默认情况下，若数据项的 <code v-pre>label</code> 属性包含搜索关键字，则会在搜索结果中显示。你也可以使用 <code v-pre>filter-method</code> 定义自己的搜索逻辑。<code v-pre>filter-method</code> 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。若方法返回 <code v-pre>true</code>，则会在搜索结果中显示对应的数据项。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-transfer</span>
    <span class="token attr-name">filterable</span>
    <span class="token attr-name">:filter-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>filterMethod<span class="token punctuation">"</span></span>
    <span class="token attr-name">filter-placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入城市拼音<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-transfer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token parameter">_</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> cities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'上海'</span><span class="token punctuation">,</span> <span class="token string">'北京'</span><span class="token punctuation">,</span> <span class="token string">'广州'</span><span class="token punctuation">,</span> <span class="token string">'深圳'</span><span class="token punctuation">,</span> <span class="token string">'南京'</span><span class="token punctuation">,</span> <span class="token string">'西安'</span><span class="token punctuation">,</span> <span class="token string">'成都'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> pinyin <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'shanghai'</span><span class="token punctuation">,</span> <span class="token string">'beijing'</span><span class="token punctuation">,</span> <span class="token string">'guangzhou'</span><span class="token punctuation">,</span> <span class="token string">'shenzhen'</span><span class="token punctuation">,</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span> <span class="token string">'xian'</span><span class="token punctuation">,</span> <span class="token string">'chengdu'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        cities<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">city<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> city<span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> index<span class="token punctuation">,</span>
            <span class="token literal-property property">pinyin</span><span class="token operator">:</span> pinyin<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token function">generateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token function">filterMethod</span><span class="token punctuation">(</span><span class="token parameter">query<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> item<span class="token punctuation">.</span>pinyin<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="可自定义" tabindex="-1"><a class="header-anchor" href="#可自定义" aria-hidden="true">#</a> 可自定义</h3>
<p>可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。</p>
<p>:::demo 可以使用 <code v-pre>titles</code>、<code v-pre>button-texts</code>、<code v-pre>render-content</code> 和 <code v-pre>format</code> 属性分别对列表标题文案、按钮文案、数据项的渲染函数和列表顶部的勾选状态文案进行自定义。数据项的渲染还可以使用 <code v-pre>scoped-slot</code> 进行自定义。对于列表底部的内容区，提供了两个具名 slot：<code v-pre>left-footer</code> 和 <code v-pre>right-footer</code>。此外，如果希望某些数据项在初始化时就被勾选，可以使用 <code v-pre>left-default-checked</code> 和 <code v-pre>right-default-checked</code> 属性。最后，本例还展示了 <code v-pre>change</code> 事件的用法。注意：由于 jsfiddle 不支持 JSX 语法，所以使用 <code v-pre>render-content</code> 自定义数据项的例子在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0 0 20px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>使用 render-content 自定义数据项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-transfer</span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span> <span class="token property">display</span><span class="token punctuation">:</span> inline-block</span><span class="token punctuation">"</span></span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>
      <span class="token attr-name">filterable</span>
      <span class="token attr-name">:left-default-checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[2, 3]<span class="token punctuation">"</span></span>
      <span class="token attr-name">:right-default-checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[1]<span class="token punctuation">"</span></span>
      <span class="token attr-name">:titles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['Source', 'Target']<span class="token punctuation">"</span></span>
      <span class="token attr-name">:button-texts</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['到左边', '到右边']<span class="token punctuation">"</span></span>
      <span class="token attr-name">:format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }<span class="token punctuation">"</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span>
      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transfer-footer<span class="token punctuation">"</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left-footer<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>操作<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transfer-footer<span class="token punctuation">"</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right-footer<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>操作<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-transfer</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 50px 0 20px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>使用 scoped-slot 自定义数据项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-transfer</span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span> <span class="token property">display</span><span class="token punctuation">:</span> inline-block</span><span class="token punctuation">"</span></span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value4<span class="token punctuation">"</span></span>
      <span class="token attr-name">filterable</span>
      <span class="token attr-name">:left-default-checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[2, 3]<span class="token punctuation">"</span></span>
      <span class="token attr-name">:right-default-checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[1]<span class="token punctuation">"</span></span>
      <span class="token attr-name">:titles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['Source', 'Target']<span class="token punctuation">"</span></span>
      <span class="token attr-name">:button-texts</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['到左边', '到右边']<span class="token punctuation">"</span></span>
      <span class="token attr-name">:format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }<span class="token punctuation">"</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span>
      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ option }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ option.key }} - {{ option.label }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transfer-footer<span class="token punctuation">"</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left-footer<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>操作<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transfer-footer<span class="token punctuation">"</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right-footer<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>操作<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-transfer</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.transfer-footer</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 5px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token parameter">_</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">15</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> i<span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">备选项 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> i <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">disabled</span><span class="token operator">:</span> i <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">===</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token function">generateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value4</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> direction<span class="token punctuation">,</span> movedKeys</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> direction<span class="token punctuation">,</span> movedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="数据项属性别名" tabindex="-1"><a class="header-anchor" href="#数据项属性别名" aria-hidden="true">#</a> 数据项属性别名</h3>
<p>默认情况下，Transfer 仅能识别数据项中的 <code v-pre>key</code>、<code v-pre>label</code> 和 <code v-pre>disabled</code> 字段。如果你的数据的字段名不同，可以使用 <code v-pre>props</code> 属性为它们设置别名。
:::demo 本例中的数据源没有 <code v-pre>key</code> 和 <code v-pre>label</code> 字段，在功能上与它们相同的字段名为 <code v-pre>value</code> 和 <code v-pre>desc</code>。因此可以使用<code v-pre>props</code> 属性为 <code v-pre>key</code> 和 <code v-pre>label</code> 设置别名。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-transfer</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>
    <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
      key: 'value',
      label: 'desc'
    }<span class="token punctuation">"</span></span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-transfer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token parameter">_</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">15</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> i<span class="token punctuation">,</span>
            <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">备选项 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> i <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">disabled</span><span class="token operator">:</span> i <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">===</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token function">generateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
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
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>Transfer 的数据源</td>
<td>array[{ key, label, disabled }]</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>filterable</td>
<td>是否可搜索</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filter-placeholder</td>
<td>搜索框占位符</td>
<td>string</td>
<td>—</td>
<td>请输入搜索内容</td>
</tr>
<tr>
<td>filter-method</td>
<td>自定义搜索方法</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>target-order</td>
<td>右侧列表元素的排序策略：若为 <code v-pre>original</code>，则保持与数据源相同的顺序；若为 <code v-pre>push</code>，则新加入的元素排在最后；若为 <code v-pre>unshift</code>，则新加入的元素排在最前</td>
<td>string</td>
<td>original / push / unshift</td>
<td>original</td>
</tr>
<tr>
<td>titles</td>
<td>自定义列表标题</td>
<td>array</td>
<td>—</td>
<td>['列表 1', '列表 2']</td>
</tr>
<tr>
<td>button-texts</td>
<td>自定义按钮文案</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>render-content</td>
<td>自定义数据项渲染函数</td>
<td>function(h, option)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>format</td>
<td>列表顶部勾选状态文案</td>
<td>object{noChecked, hasChecked}</td>
<td>—</td>
<td>{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }</td>
</tr>
<tr>
<td>props</td>
<td>数据源的字段别名</td>
<td>object{key, label, disabled}</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>left-default-checked</td>
<td>初始状态下左侧列表的已勾选项的 key 数组</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>right-default-checked</td>
<td>初始状态下右侧列表的已勾选项的 key 数组</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
</tbody>
</table>
<h3 id="slot" tabindex="-1"><a class="header-anchor" href="#slot" aria-hidden="true">#</a> Slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>left-footer</td>
<td>左侧列表底部的内容</td>
</tr>
<tr>
<td>right-footer</td>
<td>右侧列表底部的内容</td>
</tr>
</tbody>
</table>
<h3 id="scoped-slot" tabindex="-1"><a class="header-anchor" href="#scoped-slot" aria-hidden="true">#</a> Scoped Slot</h3>
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
<td>自定义数据项的内容，参数为 { option }</td>
</tr>
</tbody>
</table>
<h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3>
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
<td>clearQuery</td>
<td>清空某个面板的搜索关键词</td>
<td>'left' / 'right'，指定需要清空的面板</td>
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
<td>右侧列表元素变化时触发</td>
<td>当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组</td>
</tr>
<tr>
<td>left-check-change</td>
<td>左侧列表元素被用户选中 / 取消选中时触发</td>
<td>当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组</td>
</tr>
<tr>
<td>right-check-change</td>
<td>右侧列表元素被用户选中 / 取消选中时触发</td>
<td>当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组</td>
</tr>
</tbody>
</table>
</div></template>


