<template><div><h1 id="notification-通知" tabindex="-1"><a class="header-anchor" href="#notification-通知" aria-hidden="true">#</a> Notification 通知</h1>
<p>悬浮出现在页面角落，显示全局的通知提醒消息。</p>
<h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>
<p>适用性广泛的通知栏</p>
<p>:::demo Notification 组件提供通知功能，Element 注册了<code v-pre>$notify</code>方法，接收一个<code v-pre>options</code>字面量参数，在最简单的情况下，你可以设置<code v-pre>title</code>字段和<code v-pre>message</code>字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置<code v-pre>duration</code>，可以控制关闭的时间间隔，特别的是，如果设置为<code v-pre>0</code>，则不会自动关闭。注意：<code v-pre>duration</code>接收一个<code v-pre>Number</code>，单位为毫秒，默认为<code v-pre>4500</code>。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">plain</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    可自动关闭
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">plain</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    不会自动关闭
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">open1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$createElement<span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'标题名称'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'i'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">'color: teal'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">open2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'这是一条不会自动关闭的消息'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="带有倾向性" tabindex="-1"><a class="header-anchor" href="#带有倾向性" aria-hidden="true">#</a> 带有倾向性</h3>
<p>带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息</p>
<p>:::demo Element 为 Notification 组件准备了四种通知类型：<code v-pre>success</code>, <code v-pre>warning</code>, <code v-pre>info</code>, <code v-pre>error</code>。通过<code v-pre>type</code>字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种 type 注册了方法，可以在不传入<code v-pre>type</code>字段的情况下像<code v-pre>open3</code>和<code v-pre>open4</code>那样直接调用。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">plain</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    成功
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">plain</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    警告
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">plain</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    消息
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">plain</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    错误
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">open1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'成功'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'这是一条成功的提示消息'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">open2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'警告'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'这是一条警告的提示消息'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'warning'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">open3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$notify<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'消息'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'这是一条消息的提示消息'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">open4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$notify<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'错误'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'这是一条错误的提示消息'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="自定义弹出位置" tabindex="-1"><a class="header-anchor" href="#自定义弹出位置" aria-hidden="true">#</a> 自定义弹出位置</h3>
<p>可以让 Notification 从屏幕四角中的任意一角弹出</p>
<p>:::demo 使用<code v-pre>position</code>属性定义 Notification 的弹出位置，支持四个选项：<code v-pre>top-right</code>、<code v-pre>top-left</code>、<code v-pre>bottom-right</code>、<code v-pre>bottom-left</code>，默认为<code v-pre>top-right</code>。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">plain</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    右上角
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">plain</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    右下角
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">plain</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    左下角
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">plain</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    左上角
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">open1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'自定义位置'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'右上角弹出的消息'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">open2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'自定义位置'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'右下角弹出的消息'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'bottom-right'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">open3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'自定义位置'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'左下角弹出的消息'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'bottom-left'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">open4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'自定义位置'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'左上角弹出的消息'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'top-left'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="带有偏移" tabindex="-1"><a class="header-anchor" href="#带有偏移" aria-hidden="true">#</a> 带有偏移</h3>
<p>让 Notification 偏移一些位置</p>
<p>:::demo Notification 提供设置偏移量的功能，通过设置 <code v-pre>offset</code> 字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">plain</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    偏移的消息
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'偏移'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'这是一条带有偏移的提示消息'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">100</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="使用-html-片段" tabindex="-1"><a class="header-anchor" href="#使用-html-片段" aria-hidden="true">#</a> 使用 HTML 片段</h3>
<p><code v-pre>message</code> 属性支持传入 HTML 片段</p>
<p>:::demo 将<code v-pre>dangerouslyUseHTMLString</code>属性设置为 true，<code v-pre>message</code> 就会被当作 HTML 片段处理。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">plain</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    使用 HTML 片段
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'HTML 片段'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dangerouslyUseHTMLString</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'&lt;strong>这是 &lt;i>HTML&lt;/i> 片段&lt;/strong>'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p><code v-pre>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noopener noreferrer">XSS 攻击<ExternalLinkIcon/></a>。因此在 <code v-pre>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code v-pre>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code v-pre>message</code> 属性。</p>
</div>
<h3 id="隐藏关闭按钮" tabindex="-1"><a class="header-anchor" href="#隐藏关闭按钮" aria-hidden="true">#</a> 隐藏关闭按钮</h3>
<p>可以不显示关闭按钮</p>
<p>:::demo 将<code v-pre>showClose</code>属性设置为<code v-pre>false</code>即可隐藏关闭按钮。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">plain</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    隐藏关闭按钮
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Info'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'这是一条没有关闭按钮的消息'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">showClose</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="全局方法" tabindex="-1"><a class="header-anchor" href="#全局方法" aria-hidden="true">#</a> 全局方法</h3>
<p>Element 为 <code v-pre>Vue.prototype</code> 添加了全局方法 <code v-pre>$notify</code>。因此在 vue instance 中可以采用本页面中的方式调用 Notification。</p>
<h3 id="单独引用" tabindex="-1"><a class="header-anchor" href="#单独引用" aria-hidden="true">#</a> 单独引用</h3>
<p>单独引入 Notification：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Notification <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-ui'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时调用方法为 <code v-pre>Notification(options)</code>。我们也为每个 type 定义了各自的方法，如 <code v-pre>Notification.success(options)</code>。并且可以调用 <code v-pre>Notification.closeAll()</code> 手动关闭所有实例。</p>
<h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3>
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
<td>title</td>
<td>标题</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>message</td>
<td>说明文字</td>
<td>string/Vue.VNode</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>是否将 message 属性作为 HTML 片段处理</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>主题样式，如果不在可选值内将被忽略</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>—</td>
</tr>
<tr>
<td>iconClass</td>
<td>自定义图标的类名。若设置了 <code v-pre>type</code>，则 <code v-pre>iconClass</code> 会被覆盖</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>customClass</td>
<td>自定义类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>duration</td>
<td>显示时间, 毫秒。设为 0 则不会自动关闭</td>
<td>number</td>
<td>—</td>
<td>4500</td>
</tr>
<tr>
<td>position</td>
<td>自定义弹出位置</td>
<td>string</td>
<td>top-right/top-left/bottom-right/bottom-left</td>
<td>top-right</td>
</tr>
<tr>
<td>showClose</td>
<td>是否显示关闭按钮</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>onClose</td>
<td>关闭时的回调函数</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>onClick</td>
<td>点击 Notification 时的回调函数</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>offset</td>
<td>偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
<h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3>
<p>调用 <code v-pre>Notification</code> 或 <code v-pre>this.$notify</code> 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 <code v-pre>close</code> 方法。</p>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>close</td>
<td>关闭当前的 Notification</td>
</tr>
</tbody>
</table>
</div></template>


