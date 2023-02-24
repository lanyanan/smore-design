<template><div><h1 id="cascader-级联选择器" tabindex="-1"><a class="header-anchor" href="#cascader-级联选择器" aria-hidden="true">#</a> Cascader 级联选择器</h1>
<p>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>有两种触发子菜单的方式</p>
<p>:::demo 只需为 Cascader 的<code v-pre>options</code>属性指定选项数组即可渲染出一个级联选择器。通过<code v-pre>props.expandTrigger</code>可以定义展开子级菜单的触发方式。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demonstration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>默认 click 触发子菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span>
    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demonstration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hover 触发子菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span>
    <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ expandTrigger: 'hover' }<span class="token punctuation">"</span></span>
    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhinan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'指南'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'shejiyuanze'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'设计原则'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'yizhi'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'一致'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'fankui'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'反馈'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xiaolv'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'效率'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'kekong'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'可控'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'daohang'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'导航'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cexiangdaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'侧向导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dingbudaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'顶部导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zujian'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'layout'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Layout 布局'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'color'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Color 色彩'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'typography'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Typography 字体'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Icon 图标'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Button 按钮'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'radio'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Radio 单选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'checkbox'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Checkbox 多选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Input 输入框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input-number'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'InputNumber 计数器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Select 选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cascader'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Cascader 级联选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'switch'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Switch 开关'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'slider'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Slider 滑块'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'time-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'TimePicker 时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'date-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DatePicker 日期选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'datetime-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DateTimePicker 日期时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'upload'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Upload 上传'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'rate'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Rate 评分'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form 表单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'table'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Table 表格'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tag 标签'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'progress'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Progress 进度条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tree'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tree 树形控件'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'pagination'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Pagination 分页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'badge'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Badge 标记'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'alert'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Alert 警告'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Loading 加载'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Message 消息提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message-box'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'MessageBox 弹框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notification'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notification 通知'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'menu'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'NavMenu 导航菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tabs'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tabs 标签页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'breadcrumb'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Breadcrumb 面包屑'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dropdown'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dropdown 下拉菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'steps'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Steps 步骤条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dialog'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dialog 对话框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tooltip'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tooltip 文字提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'popover'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Popover 弹出框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'card'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Card 卡片'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'carousel'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Carousel 走马灯'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'collapse'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Collapse 折叠面板'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'ziyuan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'资源'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'axure'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Axure Components'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'sketch'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sketch Templates'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiaohu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件交互文档'</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="禁用选项" tabindex="-1"><a class="header-anchor" href="#禁用选项" aria-hidden="true">#</a> 禁用选项</h3>
<p>通过在数据源中设置 <code v-pre>disabled</code> 字段来声明该选项是禁用的</p>
<p>:::demo 本例中，<code v-pre>options</code>指定的数组中的第一个元素含有<code v-pre>disabled: true</code>键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的<code v-pre>disabled</code>字段是否为<code v-pre>true</code>，如果你的数据中表示禁用含义的字段名不为<code v-pre>disabled</code>，可以通过<code v-pre>props.disabled</code>属性来指定（详见下方 API 表格）。当然，<code v-pre>value</code>、<code v-pre>label</code>和<code v-pre>children</code>这三个字段名也可以通过同样的方式指定。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhinan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'指南'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'shejiyuanze'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'设计原则'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'yizhi'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'一致'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'fankui'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'反馈'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xiaolv'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'效率'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'kekong'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'可控'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'daohang'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'导航'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cexiangdaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'侧向导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dingbudaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'顶部导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zujian'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'layout'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Layout 布局'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'color'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Color 色彩'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'typography'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Typography 字体'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Icon 图标'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Button 按钮'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'radio'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Radio 单选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'checkbox'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Checkbox 多选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Input 输入框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input-number'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'InputNumber 计数器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Select 选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cascader'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Cascader 级联选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'switch'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Switch 开关'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'slider'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Slider 滑块'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'time-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'TimePicker 时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'date-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DatePicker 日期选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'datetime-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DateTimePicker 日期时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'upload'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Upload 上传'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'rate'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Rate 评分'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form 表单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'table'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Table 表格'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tag 标签'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'progress'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Progress 进度条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tree'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tree 树形控件'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'pagination'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Pagination 分页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'badge'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Badge 标记'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'alert'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Alert 警告'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Loading 加载'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Message 消息提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message-box'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'MessageBox 弹框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notification'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notification 通知'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'menu'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'NavMenu 导航菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tabs'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tabs 标签页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'breadcrumb'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Breadcrumb 面包屑'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dropdown'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dropdown 下拉菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'steps'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Steps 步骤条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dialog'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dialog 对话框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tooltip'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tooltip 文字提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'popover'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Popover 弹出框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'card'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Card 卡片'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'carousel'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Carousel 走马灯'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'collapse'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Collapse 折叠面板'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'ziyuan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'资源'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'axure'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Axure Components'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'sketch'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sketch Templates'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiaohu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件交互文档'</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="可清空" tabindex="-1"><a class="header-anchor" href="#可清空" aria-hidden="true">#</a> 可清空</h3>
<p>通过 <code v-pre>clearable</code> 设置输入框可清空</p>
<p>:::demo</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhinan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'指南'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'shejiyuanze'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'设计原则'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'yizhi'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'一致'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'fankui'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'反馈'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xiaolv'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'效率'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'kekong'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'可控'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'daohang'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'导航'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cexiangdaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'侧向导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dingbudaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'顶部导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zujian'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'layout'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Layout 布局'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'color'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Color 色彩'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'typography'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Typography 字体'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Icon 图标'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Button 按钮'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'radio'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Radio 单选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'checkbox'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Checkbox 多选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Input 输入框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input-number'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'InputNumber 计数器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Select 选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cascader'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Cascader 级联选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'switch'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Switch 开关'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'slider'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Slider 滑块'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'time-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'TimePicker 时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'date-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DatePicker 日期选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'datetime-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DateTimePicker 日期时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'upload'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Upload 上传'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'rate'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Rate 评分'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form 表单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'table'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Table 表格'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tag 标签'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'progress'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Progress 进度条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tree'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tree 树形控件'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'pagination'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Pagination 分页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'badge'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Badge 标记'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'alert'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Alert 警告'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Loading 加载'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Message 消息提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message-box'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'MessageBox 弹框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notification'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notification 通知'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'menu'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'NavMenu 导航菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tabs'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tabs 标签页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'breadcrumb'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Breadcrumb 面包屑'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dropdown'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dropdown 下拉菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'steps'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Steps 步骤条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dialog'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dialog 对话框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tooltip'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tooltip 文字提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'popover'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Popover 弹出框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'card'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Card 卡片'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'carousel'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Carousel 走马灯'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'collapse'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Collapse 折叠面板'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'ziyuan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'资源'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'axure'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Axure Components'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'sketch'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sketch Templates'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiaohu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件交互文档'</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="仅显示最后一级" tabindex="-1"><a class="header-anchor" href="#仅显示最后一级" aria-hidden="true">#</a> 仅显示最后一级</h3>
<p>可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。</p>
<p>:::demo 属性<code v-pre>show-all-levels</code>定义了是否显示完整的路径，将其赋值为<code v-pre>false</code>则仅显示最后一级</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">:show-all-levels</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhinan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'指南'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'shejiyuanze'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'设计原则'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'yizhi'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'一致'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'fankui'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'反馈'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xiaolv'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'效率'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'kekong'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'可控'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'daohang'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'导航'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cexiangdaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'侧向导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dingbudaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'顶部导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zujian'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'layout'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Layout 布局'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'color'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Color 色彩'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'typography'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Typography 字体'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Icon 图标'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Button 按钮'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'radio'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Radio 单选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'checkbox'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Checkbox 多选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Input 输入框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input-number'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'InputNumber 计数器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Select 选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cascader'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Cascader 级联选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'switch'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Switch 开关'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'slider'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Slider 滑块'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'time-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'TimePicker 时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'date-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DatePicker 日期选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'datetime-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DateTimePicker 日期时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'upload'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Upload 上传'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'rate'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Rate 评分'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form 表单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'table'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Table 表格'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tag 标签'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'progress'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Progress 进度条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tree'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tree 树形控件'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'pagination'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Pagination 分页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'badge'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Badge 标记'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'alert'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Alert 警告'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Loading 加载'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Message 消息提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message-box'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'MessageBox 弹框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notification'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notification 通知'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'menu'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'NavMenu 导航菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tabs'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tabs 标签页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'breadcrumb'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Breadcrumb 面包屑'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dropdown'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dropdown 下拉菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'steps'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Steps 步骤条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dialog'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dialog 对话框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tooltip'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tooltip 文字提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'popover'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Popover 弹出框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'card'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Card 卡片'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'carousel'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Carousel 走马灯'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'collapse'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Collapse 折叠面板'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'ziyuan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'资源'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'axure'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Axure Components'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'sketch'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sketch Templates'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiaohu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件交互文档'</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="多选" tabindex="-1"><a class="header-anchor" href="#多选" aria-hidden="true">#</a> 多选</h3>
<p>可通过 <code v-pre>props.multiple = true</code> 来开启多选模式</p>
<p>:::demo 在开启多选模式后，默认情况下会展示所有已选中的选项的Tag，你可以使用<code v-pre>collapse-tags</code>来折叠Tag</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demonstration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>默认显示所有Tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader</span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span>
    <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>props<span class="token punctuation">"</span></span>
    <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demonstration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>折叠展示Tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader</span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span>
    <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>props<span class="token punctuation">"</span></span>
    <span class="token attr-name">collapse-tags</span>
    <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">multiple</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'东南'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'普陀'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'黄埔'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'徐汇'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'江苏'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'南京'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'苏州'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'无锡'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'浙江'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'杭州'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'宁波'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'嘉兴'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'西北'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'陕西'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'西安'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'延安'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'新疆维吾尔族自治区'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'乌鲁木齐'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'克拉玛依'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="选择任意一级选项" tabindex="-1"><a class="header-anchor" href="#选择任意一级选项" aria-hidden="true">#</a> 选择任意一级选项</h3>
<p>在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项。</p>
<p>:::demo 可通过 <code v-pre>props.checkStrictly = true</code> 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demonstration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>单选选择任意一级选项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader</span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span>
    <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ checkStrictly: true }<span class="token punctuation">"</span></span>
    <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demonstration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>多选选择任意一级选项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader</span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span>
    <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ multiple: true, checkStrictly: true }<span class="token punctuation">"</span></span>
    <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhinan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'指南'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'shejiyuanze'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'设计原则'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'yizhi'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'一致'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'fankui'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'反馈'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xiaolv'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'效率'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'kekong'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'可控'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'daohang'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'导航'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cexiangdaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'侧向导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dingbudaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'顶部导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zujian'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'layout'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Layout 布局'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'color'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Color 色彩'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'typography'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Typography 字体'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Icon 图标'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Button 按钮'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'radio'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Radio 单选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'checkbox'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Checkbox 多选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Input 输入框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input-number'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'InputNumber 计数器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Select 选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cascader'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Cascader 级联选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'switch'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Switch 开关'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'slider'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Slider 滑块'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'time-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'TimePicker 时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'date-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DatePicker 日期选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'datetime-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DateTimePicker 日期时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'upload'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Upload 上传'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'rate'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Rate 评分'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form 表单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'table'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Table 表格'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tag 标签'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'progress'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Progress 进度条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tree'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tree 树形控件'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'pagination'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Pagination 分页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'badge'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Badge 标记'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'alert'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Alert 警告'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Loading 加载'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Message 消息提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message-box'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'MessageBox 弹框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notification'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notification 通知'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'menu'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'NavMenu 导航菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tabs'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tabs 标签页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'breadcrumb'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Breadcrumb 面包屑'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dropdown'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dropdown 下拉菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'steps'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Steps 步骤条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dialog'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dialog 对话框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tooltip'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tooltip 文字提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'popover'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Popover 弹出框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'card'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Card 卡片'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'carousel'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Carousel 走马灯'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'collapse'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Collapse 折叠面板'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'ziyuan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'资源'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'axure'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Axure Components'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'sketch'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sketch Templates'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiaohu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件交互文档'</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="动态加载" tabindex="-1"><a class="header-anchor" href="#动态加载" aria-hidden="true">#</a> 动态加载</h3>
<p>当选中某一级时，动态加载该级下的选项。</p>
<p>:::demo 通过<code v-pre>lazy</code>开启动态加载，并通过<code v-pre>lazyload</code>来设置加载数据源的方法。<code v-pre>lazyload</code>方法有两个参数，第一个参数<code v-pre>node</code>为当前点击的节点，第二个<code v-pre>resolve</code>为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为<code v-pre>leaf</code>，可通过<code v-pre>props.leaf</code>修改)，否则会简单的以有无子节点来判断是否为叶子节点。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader</span> <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>props<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function">lazyLoad</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> level <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> nodes <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> level <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
                  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token operator">++</span>id<span class="token punctuation">,</span>
                  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">选项</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
                  <span class="token literal-property property">leaf</span><span class="token operator">:</span> level <span class="token operator">>=</span> <span class="token number">2</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token comment">// 通过调用resolve将子节点数据返回，通知组件数据加载完成</span>
              <span class="token function">resolve</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="可搜索" tabindex="-1"><a class="header-anchor" href="#可搜索" aria-hidden="true">#</a> 可搜索</h3>
<p>可以快捷地搜索选项并选择。</p>
<p>:::demo 将<code v-pre>filterable</code>赋值为<code v-pre>true</code>即可打开搜索功能，默认会匹配节点的<code v-pre>label</code>或所有父节点的<code v-pre>label</code>(由<code v-pre>show-all-levels</code>决定)中包含输入值的选项。你也可以用<code v-pre>filter-method</code>自定义搜索逻辑，接受一个函数，第一个参数是节点<code v-pre>node</code>，第二个参数是搜索关键词<code v-pre>keyword</code>，通过返回布尔值表示是否命中。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demonstration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>单选可搜索<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>试试搜索：指南<span class="token punctuation">"</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span>
    <span class="token attr-name">filterable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demonstration<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>多选可搜索<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>试试搜索：指南<span class="token punctuation">"</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span>
    <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ multiple: true }<span class="token punctuation">"</span></span>
    <span class="token attr-name">filterable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhinan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'指南'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'shejiyuanze'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'设计原则'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'yizhi'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'一致'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'fankui'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'反馈'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xiaolv'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'效率'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'kekong'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'可控'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'daohang'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'导航'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cexiangdaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'侧向导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dingbudaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'顶部导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zujian'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'layout'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Layout 布局'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'color'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Color 色彩'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'typography'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Typography 字体'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Icon 图标'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Button 按钮'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'radio'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Radio 单选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'checkbox'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Checkbox 多选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Input 输入框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input-number'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'InputNumber 计数器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Select 选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cascader'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Cascader 级联选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'switch'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Switch 开关'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'slider'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Slider 滑块'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'time-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'TimePicker 时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'date-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DatePicker 日期选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'datetime-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DateTimePicker 日期时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'upload'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Upload 上传'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'rate'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Rate 评分'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form 表单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'table'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Table 表格'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tag 标签'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'progress'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Progress 进度条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tree'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tree 树形控件'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'pagination'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Pagination 分页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'badge'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Badge 标记'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'alert'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Alert 警告'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Loading 加载'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Message 消息提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message-box'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'MessageBox 弹框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notification'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notification 通知'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'menu'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'NavMenu 导航菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tabs'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tabs 标签页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'breadcrumb'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Breadcrumb 面包屑'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dropdown'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dropdown 下拉菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'steps'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Steps 步骤条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dialog'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dialog 对话框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tooltip'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tooltip 文字提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'popover'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Popover 弹出框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'card'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Card 卡片'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'carousel'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Carousel 走马灯'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'collapse'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Collapse 折叠面板'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'ziyuan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'资源'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'axure'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Axure Components'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'sketch'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sketch Templates'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiaohu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件交互文档'</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="自定义节点内容" tabindex="-1"><a class="header-anchor" href="#自定义节点内容" aria-hidden="true">#</a> 自定义节点内容</h3>
<p>可以自定义备选项的节点内容</p>
<p>:::demo 可以通过<code v-pre>scoped slot</code>对级联选择器的备选项的节点内容进行自定义，scoped slot会传入两个字段 <code v-pre>node</code> 和 <code v-pre>data</code>，分别表示当前节点的 Node 对象和数据。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ node, data }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ data.label }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!node.isLeaf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ({{ data.children.length }}) <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhinan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'指南'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'shejiyuanze'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'设计原则'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'yizhi'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'一致'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'fankui'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'反馈'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xiaolv'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'效率'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'kekong'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'可控'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'daohang'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'导航'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cexiangdaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'侧向导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dingbudaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'顶部导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zujian'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'layout'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Layout 布局'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'color'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Color 色彩'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'typography'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Typography 字体'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Icon 图标'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Button 按钮'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'radio'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Radio 单选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'checkbox'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Checkbox 多选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Input 输入框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input-number'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'InputNumber 计数器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Select 选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cascader'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Cascader 级联选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'switch'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Switch 开关'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'slider'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Slider 滑块'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'time-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'TimePicker 时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'date-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DatePicker 日期选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'datetime-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DateTimePicker 日期时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'upload'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Upload 上传'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'rate'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Rate 评分'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form 表单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'table'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Table 表格'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tag 标签'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'progress'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Progress 进度条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tree'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tree 树形控件'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'pagination'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Pagination 分页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'badge'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Badge 标记'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'alert'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Alert 警告'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Loading 加载'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Message 消息提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message-box'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'MessageBox 弹框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notification'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notification 通知'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'menu'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'NavMenu 导航菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tabs'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tabs 标签页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'breadcrumb'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Breadcrumb 面包屑'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dropdown'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dropdown 下拉菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'steps'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Steps 步骤条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dialog'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dialog 对话框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tooltip'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tooltip 文字提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'popover'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Popover 弹出框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'card'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Card 卡片'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'carousel'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Carousel 走马灯'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'collapse'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Collapse 折叠面板'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'ziyuan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'资源'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'axure'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Axure Components'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'sketch'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sketch Templates'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiaohu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件交互文档'</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="级联面板" tabindex="-1"><a class="header-anchor" href="#级联面板" aria-hidden="true">#</a> 级联面板</h3>
<p>级联面板是级联选择器的核心组件，与级联选择器一样，有单选、多选、动态加载等多种功能。</p>
<p>:::demo 和级联选择器一样，通过<code v-pre>options</code>来指定选项，也可通过<code v-pre>props</code>来设置多选、动态加载等功能，具体详情见下方API表格。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader-panel</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-cascader-panel</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhinan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'指南'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'shejiyuanze'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'设计原则'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'yizhi'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'一致'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'fankui'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'反馈'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xiaolv'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'效率'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'kekong'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'可控'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'daohang'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'导航'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cexiangdaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'侧向导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dingbudaohang'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'顶部导航'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zujian'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Basic'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'layout'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Layout 布局'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'color'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Color 色彩'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'typography'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Typography 字体'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Icon 图标'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Button 按钮'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'radio'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Radio 单选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'checkbox'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Checkbox 多选框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Input 输入框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'input-number'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'InputNumber 计数器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Select 选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cascader'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Cascader 级联选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'switch'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Switch 开关'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'slider'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Slider 滑块'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'time-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'TimePicker 时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'date-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DatePicker 日期选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'datetime-picker'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'DateTimePicker 日期时间选择器'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'upload'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Upload 上传'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'rate'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Rate 评分'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'form'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Form 表单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Data'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'table'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Table 表格'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tag 标签'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'progress'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Progress 进度条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tree'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tree 树形控件'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'pagination'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Pagination 分页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'badge'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Badge 标记'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notice'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'alert'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Alert 警告'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Loading 加载'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Message 消息提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'message-box'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'MessageBox 弹框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'notification'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Notification 通知'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'menu'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'NavMenu 导航菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tabs'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tabs 标签页'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'breadcrumb'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Breadcrumb 面包屑'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dropdown'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dropdown 下拉菜单'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'steps'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Steps 步骤条'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Others'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dialog'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Dialog 对话框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tooltip'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tooltip 文字提示'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'popover'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Popover 弹出框'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'card'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Card 卡片'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'carousel'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Carousel 走马灯'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'collapse'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Collapse 折叠面板'</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'ziyuan'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'资源'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'axure'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Axure Components'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'sketch'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sketch Templates'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiaohu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'组件交互文档'</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="cascader-attributes" tabindex="-1"><a class="header-anchor" href="#cascader-attributes" aria-hidden="true">#</a> Cascader Attributes</h3>
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
<td>选中项绑定值</td>
<td>-</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>options</td>
<td>可选项数据源，键名可通过 <code v-pre>Props</code> 属性配置</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>props</td>
<td>配置选项，具体见下表</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>尺寸</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框占位文本</td>
<td>string</td>
<td>—</td>
<td>请选择</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>clearable</td>
<td>是否支持清空选项</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-all-levels</td>
<td>输入框中是否显示选中值的完整路径</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>collapse-tags</td>
<td>多选模式下是否折叠Tag</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>separator</td>
<td>选项分隔符</td>
<td>string</td>
<td>—</td>
<td>斜杠' / '</td>
</tr>
<tr>
<td>filterable</td>
<td>是否可搜索选项</td>
<td>boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filter-method</td>
<td>自定义搜索逻辑，第一个参数是节点<code v-pre>node</code>，第二个参数是搜索关键词<code v-pre>keyword</code>，通过返回布尔值表示是否命中</td>
<td>function(node, keyword)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>debounce</td>
<td>搜索关键词输入的去抖延迟，毫秒</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>before-filter</td>
<td>筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选</td>
<td>function(value)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>popper-class</td>
<td>自定义浮层类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="cascader-events" tabindex="-1"><a class="header-anchor" href="#cascader-events" aria-hidden="true">#</a> Cascader Events</h3>
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
<td>当选中节点变化时触发</td>
<td>选中节点的值</td>
</tr>
<tr>
<td>expand-change</td>
<td>当展开节点发生变化时触发</td>
<td>各父级选项值组成的数组</td>
</tr>
<tr>
<td>blur</td>
<td>当失去焦点时触发</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>当获得焦点时触发</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>visible-change</td>
<td>下拉框出现/隐藏时触发</td>
<td>出现则为 true，隐藏则为 false</td>
</tr>
<tr>
<td>remove-tag</td>
<td>在多选模式下，移除Tag时触发</td>
<td>移除的Tag对应的节点的值</td>
</tr>
</tbody>
</table>
<h3 id="cascader-methods" tabindex="-1"><a class="header-anchor" href="#cascader-methods" aria-hidden="true">#</a> Cascader Methods</h3>
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
<td>getCheckedNodes</td>
<td>获取选中的节点</td>
<td>(leafOnly) 是否只是叶子节点，默认值为 <code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h3 id="cascader-slots" tabindex="-1"><a class="header-anchor" href="#cascader-slots" aria-hidden="true">#</a> Cascader Slots</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据</td>
</tr>
<tr>
<td>empty</td>
<td>无匹配选项时的内容</td>
</tr>
</tbody>
</table>
<h3 id="cascaderpanel-attributes" tabindex="-1"><a class="header-anchor" href="#cascaderpanel-attributes" aria-hidden="true">#</a> CascaderPanel Attributes</h3>
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
<td>选中项绑定值</td>
<td>-</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>options</td>
<td>可选项数据源，键名可通过 <code v-pre>Props</code> 属性配置</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>props</td>
<td>配置选项，具体见下表</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="cascaderpanel-events" tabindex="-1"><a class="header-anchor" href="#cascaderpanel-events" aria-hidden="true">#</a> CascaderPanel Events</h3>
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
<td>当选中节点变化时触发</td>
<td>选中节点的值</td>
</tr>
<tr>
<td>expand-change</td>
<td>当展开节点发生变化时触发</td>
<td>各父级选项值组成的数组</td>
</tr>
</tbody>
</table>
<h3 id="cascaderpanel-methods" tabindex="-1"><a class="header-anchor" href="#cascaderpanel-methods" aria-hidden="true">#</a> CascaderPanel Methods</h3>
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
<td>getCheckedNodes</td>
<td>获取选中的节点数组</td>
<td>(leafOnly) 是否只是叶子节点，默认值为 <code v-pre>false</code></td>
</tr>
<tr>
<td>clearCheckedNodes</td>
<td>清空选中的节点</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="cascaderpanel-slots" tabindex="-1"><a class="header-anchor" href="#cascaderpanel-slots" aria-hidden="true">#</a> CascaderPanel Slots</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据</td>
</tr>
</tbody>
</table>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
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
<td>expandTrigger</td>
<td>次级菜单的展开方式</td>
<td>string</td>
<td>click / hover</td>
<td>'click'</td>
</tr>
<tr>
<td>multiple</td>
<td>是否多选</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>checkStrictly</td>
<td>是否严格的遵守父子节点不互相关联</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>emitPath</td>
<td>在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>lazy</td>
<td>是否动态加载子节点，需与 lazyLoad 方法结合使用</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>lazyLoad</td>
<td>加载动态数据的方法，仅在 lazy 为 true 时有效</td>
<td>function(node, resolve)，<code v-pre>node</code>为当前点击的节点，<code v-pre>resolve</code>为数据加载完成的回调(必须调用)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>指定选项的值为选项对象的某个属性值</td>
<td>string</td>
<td>—</td>
<td>'value'</td>
</tr>
<tr>
<td>label</td>
<td>指定选项标签为选项对象的某个属性值</td>
<td>string</td>
<td>—</td>
<td>'label'</td>
</tr>
<tr>
<td>children</td>
<td>指定选项的子选项为选项对象的某个属性值</td>
<td>string</td>
<td>—</td>
<td>'children'</td>
</tr>
<tr>
<td>disabled</td>
<td>指定选项的禁用为选项对象的某个属性值</td>
<td>string</td>
<td>—</td>
<td>'disabled'</td>
</tr>
<tr>
<td>leaf</td>
<td>指定选项的叶子节点的标志位为选项对象的某个属性值</td>
<td>string</td>
<td>—</td>
<td>'leaf'</td>
</tr>
</tbody>
</table>
</div></template>


