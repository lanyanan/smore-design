import{_ as t,M as p,p as o,q as i,Q as n,t as s,N as l,a1 as a}from"./framework-e921cdd2.js";const c={},r=a(`<h1 id="代码贡献指南" tabindex="-1"><a class="header-anchor" href="#代码贡献指南" aria-hidden="true">#</a> 代码贡献指南</h1><h3 id="目录结构介绍" tabindex="-1"><a class="header-anchor" href="#目录结构介绍" aria-hidden="true">#</a> 目录结构介绍</h3><p>目录结构</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>|-- smore-design
    |-- .editorconfig           # EditorConfig 配置
    |-- .eslintignore           # eslint 忽略检测文件
    |-- .eslintrc.cjs           # eslint 配置文件
    |-- .gitignore              # git 忽略提交
    |-- README.md               # readme 项目介绍
    |-- commitlint.config.js    # commitlint 校验 comit message 配置
    |-- index.html              # vite 入口文件 /examples/main.js
    |-- package.json
    |-- prettier.config.js      # prettier 格式配置
    |-- vite.config.js          # vite 配置
    |-- vite.publish.config.js  # 发布文件配置
    |-- .husky                  # husky 配置
    |   |-- pre-commit          # commit 之前钩子函数
    |-- .vscode                 # 配置 vscode 编辑器
    |   |-- extensions.json
    |   |-- setting.json
    |-- config                  # 项目构建配置
    |   |-- alias.js
    |-- docs                    # 文档目录
    |   |-- README.md           # 文档首页
    |   |-- .vuepress
    |   |   |-- config.js       # vuepress 配置文件
    |   |   |-- dist            # vuepress 打包静态资源
    |   |   |-- public          # vuepress 公共资源
    |   |   |-- sidebarRoutes   # 抽离的侧边栏路由文件
    |   |   |   |-- business.js # 业务组件路由路径
    |   |   |   |-- developer.js# 开发指南路由路径
    |   |   |   |-- antv.js     # 基于antv组件路由路径
    |   |   |   |-- guide.js    # 开发规范路由路径
    |   |-- developer           # 开发指南文档
    |   |-- guide               # 开发规范文档
    |   |-- packages
    |       |-- business        # 业务组件文档
    |       |-- antv            # 基于antv封装的smore-design组件文档
    |-- examples                # 组件库开发例子项目用于测试开发的组件
    |   |-- main.ts             # vite 启动入口文件
    |   |-- router
    |   |-- src
    |-- packages                # 组件库包
    |   |-- smoreDesign         # 基础组件包
    |   |-- themeConfig         # 主题配置
    |   |-- business            # 业务组件包
    |-- src                     # 组件库项目
    |   |-- index.ts            # 组件库入口文件
    |   |-- components          # 暴露所有组件的入口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="贡献代码流程" tabindex="-1"><a class="header-anchor" href="#贡献代码流程" aria-hidden="true">#</a> 贡献代码流程</h3><h4 id="下载启动项目" tabindex="-1"><a class="header-anchor" href="#下载启动项目" aria-hidden="true">#</a> 下载启动项目</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://e.coding.smoa.cloud/devops/smore-design/smore-design.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加源关联源仓库，暂且命名源为 <code>origin</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://e.coding.smoa.cloud/devops/smore-design/smore-design.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装依赖，启动项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span>
<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看或编写文档，执行下面命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>命令脚步介绍</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span> <span class="token comment">// vite 启动，默认 vite.config.js，index.html 入口文件是 examples/main.js</span>
    <span class="token property">&quot;publish&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build --config vite.publish.config.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span> <span class="token comment">// vuepress 启动项目</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span><span class="token punctuation">,</span> <span class="token comment">// vuepress 打包文档</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开发组件" tabindex="-1"><a class="header-anchor" href="#开发组件" aria-hidden="true">#</a> 开发组件</h4><p>组件按照功能划分为基于 ant-design-vue 基础组件和业务组件</p>`,17),d=n("code",null,"props",-1),u=n("code",null,"event 事件",-1),k=n("code",null,"slot 插槽",-1),v=n("code",null,"class",-1),m=n("code",null,"style",-1),b=n("code",null,"ant-design-vue",-1),g=n("code",null,"$props",-1),h={href:"https://www.antdv.com/docs/vue/introduce-cn",target:"_blank",rel:"noopener noreferrer"},y=a(`<p>开发基础组件，在 <code>packages/smoreDesign</code> 目录下创建，参考 <code>button</code> 组件，然后在 <code>src/components.ts</code> 添加文件路径</p><p>开发业务组件，在 <code>packages/business</code> 创建文件组件，然后引入路径和上面一样</p><p><strong>以 button 组件为例</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> buttonProps <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/lib/button/buttonTypes&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../themeConfig/useTheme&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">buttonProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> theme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">getClassName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;primary&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;s-primary&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>a<span class="token operator">-</span>button v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;$props&quot;</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;getClassName()&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">-</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;less&quot;</span> scoped<span class="token operator">&gt;</span>
  <span class="token punctuation">.</span>s<span class="token operator">-</span>primary <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> v<span class="token operator">-</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&#39;theme.fontColor1&#39;</span><span class="token punctuation">)</span><span class="token operator">!</span>important<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>button暴露出去代码 <code>index.ts</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&#39;./src/index.vue&#39;</span><span class="token punctuation">;</span>

Button<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arg0</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">arg1</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;s-button&#39;</span><span class="token punctuation">,</span> Button<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> app<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Button<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主入口文件 <code>src/index.ts</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../packages/themeConfig/useTheme&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Theme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../packages/themeConfig/index&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> components <span class="token keyword">from</span> <span class="token string">&#39;./components&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./components&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">app</span><span class="token operator">:</span> App</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>components<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// @ts-ignore</span>
    <span class="token keyword">const</span> component <span class="token operator">=</span> components<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>component<span class="token punctuation">.</span>install<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> app<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> changeTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">updateTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">config</span><span class="token operator">:</span> Theme</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">changeTheme</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  install
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="怎么本地引用开发的组件" tabindex="-1"><a class="header-anchor" href="#怎么本地引用开发的组件" aria-hidden="true">#</a> 怎么本地引用开发的组件</h4><h5 id="启动examples" tabindex="-1"><a class="header-anchor" href="#启动examples" aria-hidden="true">#</a> 启动examples</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn dev
本地会有一个服务跑起来 访问这个地址
<span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8000</span><span class="token operator">/</span>examples<span class="token operator">/</span>button
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="编写代码" tabindex="-1"><a class="header-anchor" href="#编写代码" aria-hidden="true">#</a> 编写代码</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>按钮的基础用法<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>a<span class="token operator">-</span>space<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>s<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;777&quot;</span><span class="token operator">&gt;</span>主按钮<span class="token operator">&lt;</span><span class="token operator">/</span>s<span class="token operator">-</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>s<span class="token operator">-</span>button<span class="token operator">&gt;</span>次按钮<span class="token operator">&lt;</span><span class="token operator">/</span>s<span class="token operator">-</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>s<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;dashed&quot;</span><span class="token operator">&gt;</span>虚线按钮<span class="token operator">&lt;</span><span class="token operator">/</span>s<span class="token operator">-</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>s<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span><span class="token operator">&gt;</span>文本按钮<span class="token operator">&lt;</span><span class="token operator">/</span>s<span class="token operator">-</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>s<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;link&quot;</span><span class="token operator">&gt;</span>链接按钮<span class="token operator">&lt;</span><span class="token operator">/</span>s<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">-</span>space<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;less&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-commit-提交" tabindex="-1"><a class="header-anchor" href="#git-commit-提交" aria-hidden="true">#</a> Git Commit 提交</h3><p>本地提交代码，使用 <code>yarn commit</code> 替代 <code>git commit</code></p><p>如果不是，每次提交 commit message 都必须按照以下格式提交，且不得超过 72 个字符（避免自动换行影响美观）</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>(<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>): <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>subject</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>type</code> 用来说明 commit 的类别，例如</p><ul><li><strong>feat</strong>：新功能（feature）</li><li><strong>fix</strong>：修补bug</li><li><strong>docs</strong>：文档（documentation）</li><li><strong>style</strong>： 代码风格，格式修复</li><li><strong>refactor</strong>：重构（即不是新增功能，也不是修改bug的代码变动）</li><li><strong>perf</strong>：代码优化,改善性能</li><li><strong>test</strong>：增加测试</li><li><strong>chore</strong>：构建过程或辅助工具的变动</li><li><strong>revert</strong>：代码回退</li><li><strong>ci</strong>：对CI配置文件和脚本的更改</li><li><strong>build</strong>：变更项目构建或外部依赖</li></ul><p>如果 <code>type</code> 是 <code>feat</code> 或 <code>fix</code>，则该 commit 必须要在记录 changelog（更新日志）中</p><p><code>scope</code> 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，一般情况下可以不写，如需要可以注明</p><p><code>subject</code> 是 commit 目的的简短描述，不得超过 50 个字符</p><ul><li>尽量使用英文书写，不会的单词先翻译</li><li>以动词开头，使用第一人称现在时，比如change，而不是changed或changes</li><li>第一个字母小写</li><li>结尾不加句号（.）</li></ul><h3 id="分支检出" tabindex="-1"><a class="header-anchor" href="#分支检出" aria-hidden="true">#</a> 分支检出</h3><p>待定</p><h3 id="版本发布" tabindex="-1"><a class="header-anchor" href="#版本发布" aria-hidden="true">#</a> 版本发布</h3><p>在 <code>develop</code> 分支开发一定功能时，判断是否需要发布新版本的依据为：</p><ul><li>是否有新功能上线</li><li>是否有重大bug修复</li><li>是否有样式规范的变更</li></ul><p>商定进行发布的版本号，发布版本。</p>`,29);function f(x,w){const e=p("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[s("在开发前，首先要对开发的组件进行设计，要实现什么功能，考虑功能拓展性，事先定义 "),d,s("、"),u,s("、"),k,s("，为了组件样式灵活，可能要对外暴露样式接口，例如自定义 "),v,s("、"),m,s("。同时，为了兼容 "),b,s(" API，需要考虑用 "),g,s("、组件内定义插槽，条件允许，可以先参考 "),n("a",h,[s("ant-design-vue"),l(e)])]),y])}const j=t(c,[["render",f],["__file","contributor.html.vue"]]);export{j as default};
