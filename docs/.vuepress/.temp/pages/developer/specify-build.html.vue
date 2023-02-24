<template><div><h1 id="开发规范搭建" tabindex="-1"><a class="header-anchor" href="#开发规范搭建" aria-hidden="true">#</a> 开发规范搭建</h1>
<h2 id="git-版本规范" tabindex="-1"><a class="header-anchor" href="#git-版本规范" aria-hidden="true">#</a> Git 版本规范</h2>
<p>组件库是一个多人协作的项目，Git 的提交说明精准，在后期协作以及 Bug 处理时会变得有据可查，项目的开发可以根据规范的提交说明快速生成开发日志，从而方便开发者或用户追踪项目的开发信息和功能特性。提交规范使用的是 <a href="https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines" target="_blank" rel="noopener noreferrer">Angular 团队规范<ExternalLinkIcon/></a></p>
<p><code v-pre>commit message</code> 提交符合 Angular 团队规范，需要在 comit 之前做校验，<code v-pre>husky</code> 这个工具可以定义拦截所有 <code v-pre>git</code> 钩子，对提交的文件和信息做校验和修复</p>
<h3 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> husky</h3>
<p>项目的 <code v-pre>husky</code> 版本是 <code v-pre>^7.0.4</code></p>
<p>husky 安装到开发依赖中</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> husky <span class="token parameter variable">-D</span> <span class="token comment"># 安装husky</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完后，在当前项目中创建一个 <code v-pre>.husky</code> 目录，该目录指定 git hooks 。</p>
<p>使用以下命令快速创建 👇</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#--no-install 参数表示强制npx使用项目中node_modules目录下的husky依赖包</span>
npx --no-install husky <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>新增 <code v-pre>pre-commit</code> 钩子👇</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx --no-instal husky <span class="token function">add</span> .husky/pre-commit <span class="token string">"npm run lint"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>pre-commit</code> 在 commit 之前会执行 <code v-pre>npm run lint</code> 校验代码，可以定义你的执行脚本，校验不通过不允许 <code v-pre>commit</code> 提交</p>
<h3 id="commitizen" tabindex="-1"><a class="header-anchor" href="#commitizen" aria-hidden="true">#</a> commitizen</h3>
<p><a href="https://github.com/commitizen/cz-cli" target="_blank" rel="noopener noreferrer">commitizen<ExternalLinkIcon/></a> 是一个撰写符合 Commit Message 标准的一款工具。通过它可以实现交互式撰写规范的 Commit Message。</p>
<p>项目安装 commitizen</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> commitizen <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成后，一般我们都采用符合 Angular 的 <code v-pre>Commit message</code> 格式的提交规范，运行以下命令生成符合 Angular 提交规范格式的 Commit message</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx --no-install commitizen init cz-conventional-changelog --save-dev --save-exact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行了上述命令后，它将为你项目安装 <code v-pre>cz-conventional-changelog</code> 适配器模块，把 <code v-pre>config.commitizen</code> 的密钥添加到文件的根目录添加到 <code v-pre>package.json</code> 中</p>
<p>可以在 package.json 中看到，自动的新增了以下内容 👇</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  ...
  <span class="token property">"config"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"commitizen"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"./node_modules/cz-conventional-changelog"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>package.json</code> scrips 添加 <code v-pre>&quot;commit&quot;: &quot;git-cz&quot;</code> 命令，运行 <code v-pre>yarn commit</code> 可以通过以下交互式的撰写 commit messag 然后提交</p>
<p><img src="https://image-static.segmentfault.com/147/449/1474499695-5aedd2c566fe1" alt=""></p>
<h3 id="限制-commitlint" tabindex="-1"><a class="header-anchor" href="#限制-commitlint" aria-hidden="true">#</a> 限制 commitlint</h3>
<p>由于 commitizen 并不是强制使用的，仍然可以通过 git commit 来提交，所以不管是 <code v-pre>cz</code> 还是 <code v-pre>git commit</code> 提交前，都要对 <code v-pre>commit messag</code> 进行一次校验，不符合规范的情况下是不允许进行 commit</p>
<p>首先我们需要安装 <code v-pre>commitlint</code>, <code v-pre>commitlint/config-conventional</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @commitlint/cli @commitlint/config-conventional <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用以下命令快速创建 git hooks 的 commit-msg 钩子 👇
这样每次 commit 的时候都会由 <code v-pre>commitlint</code> 对 commit message 进行一次检验</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx --no-instal husky <span class="token function">add</span> .husky/commit-msg <span class="token string">'npx --no-install commitlint --edit "$1"'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在项目根目录创建一个 <code v-pre>commitlint</code> 配置文件 <code v-pre>commitlint.config.js</code>，可以对这个文件进行配置</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">ignores</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token parameter">commit</span><span class="token punctuation">)</span> <span class="token operator">=></span> commit<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'init'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@commitlint/config-conventional'</span><span class="token punctuation">,</span> <span class="token string">'cz'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'body-leading-blank'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'always'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'footer-leading-blank'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'always'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'header-max-length'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'always'</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'subject-empty'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'never'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'type-empty'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'never'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'subject-case'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'type-enum'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token string">'always'</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>
        <span class="token string">'feat'</span><span class="token punctuation">,</span>
        <span class="token string">'fix'</span><span class="token punctuation">,</span>
        <span class="token string">'perf'</span><span class="token punctuation">,</span>
        <span class="token string">'style'</span><span class="token punctuation">,</span>
        <span class="token string">'docs'</span><span class="token punctuation">,</span>
        <span class="token string">'test'</span><span class="token punctuation">,</span>
        <span class="token string">'refactor'</span><span class="token punctuation">,</span>
        <span class="token string">'build'</span><span class="token punctuation">,</span>
        <span class="token string">'ci'</span><span class="token punctuation">,</span>
        <span class="token string">'chore'</span><span class="token punctuation">,</span>
        <span class="token string">'revert'</span><span class="token punctuation">,</span>
        <span class="token string">'wip'</span><span class="token punctuation">,</span>
        <span class="token string">'workflow'</span><span class="token punctuation">,</span>
        <span class="token string">'types'</span><span class="token punctuation">,</span>
        <span class="token string">'release'</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的提示都是英文的，如果想自定义翻译成中文，需要安装 <code v-pre>cz-customizable</code> 来实现自定义 commit message 规则，以及安装对应的 commitlint-config-cz 来配套校验</p>
<p>在项目根目录，创建一个 <code v-pre>.cz-config.js</code> 文件，并复制 <a href="https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js" target="_blank" rel="noopener noreferrer">cz-config-EXAMPLE.js<ExternalLinkIcon/></a> 中的内容到其中。然后改成你自己想要的规则即可。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">':sparkles: feat'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'✨ feat: 一项新功能'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">':bug: fix'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'🐛 fix: 修复一个Bug'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">':memo: docs'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'📝 docs: 文档变更'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">':lipstick: style'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'💄 style: 代码风格，格式修复'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">':recycle: refactor'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'♻️ refactor: 代码重构，注意和feat、fix区分开'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">':zap: perf'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'⚡️ perf: 代码优化,改善性能'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">':white_check_mark: test'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'✅ test: 测试'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">':rocket: chore'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'🚀 chore: 变更构建流程或辅助工具'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">':rewind: revert'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">':rewind: revert: 代码回退'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">':tada: init'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'🎉 init: 项目初始化'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">':construction_worker: ci'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'👷 对CI配置文件和脚本的更改'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">':package: build'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'📦️ build: 变更项目构建或外部依赖'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">':construction: WIP'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'🚧 WIP: 进行中的工作'</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'component'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'config'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'docs'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'src'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'examples'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'play'</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// allowTicketNumber: false,</span>
  <span class="token comment">// isTicketNumberRequired: false,</span>
  <span class="token comment">// ticketNumberPrefix: 'TICKET-',</span>
  <span class="token comment">// ticketNumberRegExp: '\\d{1,5}',</span>
  <span class="token comment">// it needs to match the value for field type. Eg.: 'fix'</span>
  <span class="token comment">// scopeOverrides: {</span>
  <span class="token comment">//   feat: [</span>
  <span class="token comment">//     { name: 'element' }</span>
  <span class="token comment">//   ],</span>
  <span class="token comment">//   fix: [</span>
  <span class="token comment">//     { name: 'element' },</span>
  <span class="token comment">//     { name: 'style' },</span>
  <span class="token comment">//   ]</span>
  <span class="token comment">// },</span>
  <span class="token comment">// override the messages, defaults are as follows</span>
  <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'请选择提交类型(必填):'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">'请选择一个scope (可选):'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">customScope</span><span class="token operator">:</span> <span class="token string">'请输入文件修改范围(可选):'</span><span class="token punctuation">,</span>
    <span class="token comment">// used if allowCustomScopes is true</span>
    <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">'请简要描述提交(必填):'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">'请输入详细描述，使用"|"换行(可选):\n'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">breaking</span><span class="token operator">:</span> <span class="token string">'列出任务非兼容性说明 (可选):\n'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">'请输入要关闭的issue，例如：#12, #34(可选):\n'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">confirmCommit</span><span class="token operator">:</span> <span class="token string">'确定提交此说明吗？'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">allowCustomScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">allowBreakingChanges</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'feat'</span><span class="token punctuation">,</span> <span class="token string">'fix'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 限制 subject 长度</span>
  <span class="token literal-property property">subjectLimit</span><span class="token operator">:</span> <span class="token number">72</span>
  <span class="token comment">// 跳过问题 skip any questions you want</span>
  <span class="token comment">// skipQuestions: ['body', 'footer'],</span>
  <span class="token comment">// breaklineChar: '|', // It is supported for fields body and footer.</span>
  <span class="token comment">// footerPrefix : 'ISSUES CLOSED:'</span>
  <span class="token comment">// askForBreakingChangeFirst : true, // default is false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建完 <code v-pre>.cz-config.js</code> 文件后，我们需要回到 <code v-pre>package.json</code> 文件中，将 <code v-pre>config.commitizen.path</code> 更改为 <code v-pre>node_modules/cz-customizable</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">"config"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"commitizen"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">"node_modules/cz-customizable"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于 commitlint-config-cz 更高级的用法可以查看 👉 <a href="https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js" target="_blank" rel="noopener noreferrer">commitlint-config-cz<ExternalLinkIcon/></a></p>
<p>为了提交更好看，在 commit 头部添加了表情 <a href="https://gitmoji.dev/" target="_blank" rel="noopener noreferrer">gitmoji<ExternalLinkIcon/></a>，需要安装这个插件 <a href="https://www.npmjs.com/package/commitlint-config-gitmoji" target="_blank" rel="noopener noreferrer">commitlint-config-gitmoji<ExternalLinkIcon/></a></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> commitlint-config-gitmoji <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改 <code v-pre>.commitlintrc.js</code> 内容</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .commitlintrc.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'gitmoji'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="comitmit-规范介绍" tabindex="-1"><a class="header-anchor" href="#comitmit-规范介绍" aria-hidden="true">#</a> comitmit 规范介绍</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span>
  <span class="token punctuation">></span></span>(<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span>
    <span class="token punctuation">></span></span>):
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>subject</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BLANK</span> <span class="token attr-name">LINE</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BLANK</span> <span class="token attr-name">LINE</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BLANK</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BLANK</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>subject</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>介绍一下内容规范，大致分为三个部分(使用空行分割):</p>
<ol>
<li>标题行: 必填, 描述主要修改类型和内容</li>
<li>主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等</li>
<li>页脚注释: 可以写注释，BUG 号链接</li>
</ol>
<ul>
<li>type: commit 的类型
<ul>
<li>feat: 新功能、新特性</li>
<li>fix: 修改 bug</li>
<li>perf: 更改代码，以提高性能</li>
<li>efactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）</li>
<li>docs: 文档修改</li>
<li>style: 代码格式修改, 注意不是 css 修改（例如分号修改）</li>
<li>test: 测试用例新增、修改</li>
<li>build: 影响项目构建或依赖项修改</li>
<li>revert: 恢复上一次提交</li>
<li>ci: 持续集成相关文件修改</li>
<li>chore: 其他修改（不在上述类型中的修改）</li>
<li>release: 发布新版本</li>
<li>workflow: 工作流相关文件修改</li>
<li>scope: commit 影响的范围, 比如: route, component, utils, build…</li>
<li>subject: commit 的概述</li>
<li>body: commit 具体修改内容, 可以分为多行.</li>
<li>footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.</li>
</ul>
</li>
<li>scope: commit 影响的范围, 比如: route, component, utils, build…</li>
<li>subject: commit 的概述</li>
<li>body: commit 具体修改内容, 可以分为多行.</li>
<li>footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.</li>
</ul>
<p>例如</p>
<ol>
<li>fix（修复 BUG）</li>
</ol>
<p>如果修复的这个 BUG 只影响当前修改的文件，可不加范围。如果影响的范围比较大，要加上范围描述。</p>
<p>例如这次 BUG 修复影响到全局，可以加个 global。如果影响的是某个目录或某个功能，可以加上该目录的路径，或者对应的功能名称。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// 示例1
fix(global):修复checkbox不能复选的问题
// 示例2 下面圆括号里的 common 为通用管理的名称
fix(common): 修复字体过小的BUG，将通用管理下所有页面的默认字体大小修改为 14px
// 示例3
fix: value.length -> values.length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>feat（添加新功能或新页面）</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>feat: 添加button组件

这是一个示例，假设对组件功能进行了一些描述。

这里是备注，可以是放BUG链接或者一些重要性的东西。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>chore（其他修改）</li>
</ol>
<p>chore 的中文翻译为日常事务、例行工作，顾名思义，即不在其他 commit 类型中的修改，都可以用 chore 表示。</p>
<p>其他类型的 commit 和上面三个示例差不多，就不说了。</p>
<h3 id="lint-staged" tabindex="-1"><a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a> lint-staged</h3>
<p><code v-pre>lint-staged</code> 相当于一个文件过滤器，每次提交时只检查本次提交的暂存区的文件，它不能格式化代码和校验文件，需要自己配置一下，如：<code v-pre>.eslintrc</code>、<code v-pre>.stylelintrc</code> 等，然后在 <code v-pre>package.json</code> 中引入。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code> <span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"*.js"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"eslint --fix"</span><span class="token punctuation">,</span> <span class="token string">"git add"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当文件变化，执行 <code v-pre>git commit</code>，<code v-pre>pre-commit</code> 钩子会启动，执行 <code v-pre>lint-staged</code> 命令，我们对于 <code v-pre>lint-staged</code> 如上文配置，对本次被 commited 中的所有 <code v-pre>.js</code> 文件，执行 <code v-pre>eslint --fix</code> 和 <code v-pre>git add</code> 命令，前者的的目的是格式化，后者是对格式化之后的代码重新提交。</p>
<p><strong>使用步骤</strong></p>
<ol>
<li>安装使用</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>添加脚本命令</li>
</ol>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"lint:lint-staged"</span><span class="token operator">:</span> <span class="token string">"lint-staged -c ./.husky/lint-staged.config.js"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>在 pre-commit 的钩子上添加 lint-staged 命令</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token builtin class-name">.</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">"<span class="token variable">$0</span>"</span><span class="token variable">)</span></span>/_/husky.sh"</span>
<span class="token builtin class-name">.</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">"<span class="token variable">$0</span>"</span><span class="token variable">)</span></span>/common.sh"</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$CI</span>"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token function">npm</span> run lint:lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>添加 <code v-pre>lint-staged</code> 配置文件</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .husky/lint-staged.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'*.{js,jsx,ts,tsx}'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'eslint --fix'</span><span class="token punctuation">,</span> <span class="token string">'prettier --write'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">'{!(package)*.json,*.code-snippets,.!(browserslist)*rc}'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'prettier --write--parser json'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">'package.json'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'prettier --write'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">'*.vue'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'eslint --fix'</span><span class="token punctuation">,</span> <span class="token string">'prettier --write'</span><span class="token punctuation">,</span> <span class="token string">'stylelint --fix'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">'*.{scss,less,styl,html}'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'stylelint --fix'</span><span class="token punctuation">,</span> <span class="token string">'prettier --write'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">'*.md'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'prettier --write'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="changelog-自动生成" tabindex="-1"><a class="header-anchor" href="#changelog-自动生成" aria-hidden="true">#</a> CHANGELOG 自动生成</h3>
<p>CHANGELOG 记录项目所有的 commit 信息并归类版本，可以快速跳转到该条 <code v-pre>commit</code> 记录，方便知道项目哪个版本做了哪些功能有哪些 bug 等信息。也方便排查 bug，对于提交记录一目了然，不用一个一个去翻去查</p>
<p>用 <a href="https://github.com/conventional-changelog/standard-version" target="_blank" rel="noopener noreferrer">standard-version<ExternalLinkIcon/></a> 来实现自动生成 CHANGELOG，<a href="https://github.com/conventional-changelog/conventional-changelog" target="_blank" rel="noopener noreferrer">conventional-changelog<ExternalLinkIcon/></a> 也可以生产 CHANGELOG，不过它推荐用 standard-version （这都是同一个团队的东西，基于 conventional-changelog 实现的）</p>
<p>安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> standard-version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>package.json</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"release"</span><span class="token operator">:</span> <span class="token string">"standard-version"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 <code v-pre>commit type</code> 是 <code v-pre>feat</code> 和 <code v-pre>fix</code> 的时候执行这个命令，它会自增版本号</p>
<p><code v-pre>standard-version</code> 提供自定义配置不同类型对应显示文案，在根目录新建 <code v-pre>.versionrc.js</code> 文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'feat'</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token string">'✨ Features | 新功能'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'fix'</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token string">'🐛 Bug Fixes | Bug 修复'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'init'</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token string">'🎉 Init | 初始化'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'docs'</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token string">'✏️ Documentation | 文档'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'style'</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token string">'💄 Styles | 风格'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'refactor'</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token string">'♻️ Code Refactoring | 代码重构'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'perf'</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token string">'⚡ Performance Improvements | 性能优化'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'test'</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token string">'✅ Tests | 测试'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'revert'</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token string">'⏪ Revert | 回退'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'build'</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token string">'📦‍ Build System | 打包构建'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'chore'</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token string">'🚀 Chore | 构建/工程依赖/工具'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'ci'</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token string">'👷 Continuous Integration | CI 配置'</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以下命令，就会根据你的 commit 信息自动生成 <code v-pre>CHANGELOG.md</code> 文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="lint-规范校验" tabindex="-1"><a class="header-anchor" href="#lint-规范校验" aria-hidden="true">#</a> Lint 规范校验</h2>
<h3 id="ls-lint-校验文件命名" tabindex="-1"><a class="header-anchor" href="#ls-lint-校验文件命名" aria-hidden="true">#</a> ls-lint 校验文件命名</h3>
<p><a href="https://github.com/loeffel-io/ls-lint" target="_blank" rel="noopener noreferrer">ls-lint<ExternalLinkIcon/></a> 可以校验文件命名规范，例如 <code v-pre>kebab-case</code>、<code v-pre>PascalCase</code></p>
<p>安装使用</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @ls-lint/ls-lint <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在根项目创建 <code v-pre>.ls-lint.yml</code> 文件</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">ls</span><span class="token punctuation">:</span>
  <span class="token key atrule">packages/**</span><span class="token punctuation">:</span>
    <span class="token key atrule">.js</span><span class="token punctuation">:</span> kebab<span class="token punctuation">-</span>case
    <span class="token key atrule">.ts</span><span class="token punctuation">:</span> kebab<span class="token punctuation">-</span>case
    <span class="token key atrule">.d.ts</span><span class="token punctuation">:</span> kebab<span class="token punctuation">-</span>case

<span class="token key atrule">ignore</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> .git
  <span class="token punctuation">-</span> node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 <code v-pre>package.json</code> 脚本命令 <code v-pre>&quot;lint:ls-lint&quot;: &quot;ls-lint&quot;</code>，然后加入 <code v-pre>.husky/pre-commit</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token builtin class-name">.</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">"<span class="token variable">$0</span>"</span><span class="token variable">)</span></span>/_/husky.sh"</span>
<span class="token builtin class-name">.</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">"<span class="token variable">$0</span>"</span><span class="token variable">)</span></span>/common.sh"</span>

<span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$CI</span>"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token function">npm</span> run lint:ls-lint

<span class="token comment"># Format and submit code according to lintstagedrc.js configuration</span>
<span class="token function">npm</span> run lint:lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="eslint-校验" tabindex="-1"><a class="header-anchor" href="#eslint-校验" aria-hidden="true">#</a> ESLint 校验</h3>
<p><a href="https://eslint.org/docs/latest/user-guide/getting-started" target="_blank" rel="noopener noreferrer">Eslint<ExternalLinkIcon/></a> 是针对 EScript 的一款代码检测工具，它可以检测项目中编写不规范的代码，如果写出不符合规范的代码会被警告</p>
<p>安装依赖</p>
<ul>
<li><code v-pre>eslint</code> - Eslint 本体</li>
<li><code v-pre>eslint-plugin-vue</code> - 适用于 Vue 文件的 ESLint 插件</li>
<li><code v-pre>vue-eslint-parser</code> - 使用 <code v-pre>eslint-plugin-vue</code> 时必须安装的 eslint 解析器</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>yarn add eslint eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>vue vue<span class="token operator">-</span>eslint<span class="token operator">-</span>parser <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加 ESLint 配置文件，根目录创建配置文件 <code v-pre>.eslintrc.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'eslint:recommended'</span><span class="token punctuation">,</span> <span class="token string">'plugin:vue/recommended'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">'vue-eslint-parser'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'module'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">'babel-eslint'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>.eslintignore</code> 配置不想被 <code v-pre>eslint</code> 校验的文件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>.husky/lint-staged.config.js</code> 添加脚本命令 <code v-pre>eslint --fix</code></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>添加 <code v-pre>--fix</code> 可以开启 <code v-pre>eslint</code> 的自动修复功能。
如果您使用的编辑起是 <code v-pre>vscode</code> ，请安装 <code v-pre>eslint</code> 的插件进行使用喔
有时候编辑器的问题，配置不会立马生效，需要关闭编辑器重新开启项目，让编辑器重新加载配置。</p>
</div>
<h3 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> Prettier</h3>
<p><a href="https://prettier.io/docs/en/install.html" target="_blank" rel="noopener noreferrer">Prettier<ExternalLinkIcon/></a> 对 <code v-pre>js</code> 或者 <code v-pre>css</code> 等代码进行格式化，可以保证团队的代码风格保持一致。</p>
<p>安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根目录新建 <code v-pre>prettier.config.js</code> 文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 单行代码的最大宽度</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token comment">// 指定每个缩进级别的空格数</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用制表符 (tab) 缩进</span>
  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 在语句末尾打印分号</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 多行时尽可能打印尾随逗号</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用单引号而不是双引号</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 在对象文字中打印括号之间的空格</span>
  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。</span>
  <span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// auto | lf | crlf | cr</span>
  <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">'lf'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>.husky/lint-staged.config.js</code> 配置命令格式化 <code v-pre>prettier --write</code></p>
<p><code v-pre>.prettierignore</code> 忽略格式化</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 以下文件夹不会被格式化
/dist/*
.local
.output.js
/node_modules/**
**/*.svg
**/*.sh
/public/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="eslint-配合-prettier" tabindex="-1"><a class="header-anchor" href="#eslint-配合-prettier" aria-hidden="true">#</a> ESLint 配合 Prettier</h3>
<p>安装依赖</p>
<ul>
<li><code v-pre>eslint-config-prettier</code> - 关闭所有与 eslint 冲突的规则，请注意，该插件只有关闭冲突的规则的作用</li>
<li><code v-pre>eslint-plugin-prettier</code> - 如果您禁用与代码格式相关的所有其他 ESLint 规则，并且仅启用检测潜在错误的规则，则此插件效果最佳。换句话说，就是你想单独配置某一项时，使用这个插件。值得一提的是，这个插件附带了一个 plugin:prettier/recommended 配置，可以和 eslint-config-prettier 一次性设置插件。该配置最主要的就是解决回调函数的格式化问题</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> eslint-config-prettier eslint-plugin-prettier <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>修改 <code v-pre>.eslintrc.js</code></li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'eslint:recommended'</span><span class="token punctuation">,</span>
    <span class="token string">'plugin:vue/recommended'</span><span class="token punctuation">,</span>
    <span class="token string">'plugin:prettier/recommended'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stylelint" tabindex="-1"><a class="header-anchor" href="#stylelint" aria-hidden="true">#</a> Stylelint</h3>
<p><code v-pre>Stylelint</code> 是一款强大的现代 <code v-pre>linter</code>，可帮助您避免错误并强制执行样式中的约定，帮助统一团队中书写样式代码的规则。</p>
<p>Stylelint 是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格。</p>
<p>安装依赖</p>
<ul>
<li><code v-pre>stylelint</code> - Stylelint 本体</li>
<li><code v-pre>stylelint-config-prettier</code> - 关闭 Stylelint 中与 Prettier 中会发生冲突的规则。</li>
<li><code v-pre>stylelint-config-rational-order</code> - 对 CSS 声明进行排序</li>
<li><code v-pre>stylelint-config-standard</code> - Stylelint 官方推荐规则</li>
<li><code v-pre>stylelint-order</code> 使用 stylelint-config-rational-order 时依赖的模块</li>
</ul>
<p>安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> stylelint stylelint-config-prettier stylelint-config-standard
stylelint-config-rational-order stylelint-order <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>stylelint.config.js</code> 配置文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'stylelint-order'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'stylelint-config-standard'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'selector-pseudo-class-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignorePseudoClasses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'global'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'selector-pseudo-element-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignorePseudoElements</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'v-deep'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'at-rule-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignoreAtRules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'function'</span><span class="token punctuation">,</span> <span class="token string">'if'</span><span class="token punctuation">,</span> <span class="token string">'each'</span><span class="token punctuation">,</span> <span class="token string">'include'</span><span class="token punctuation">,</span> <span class="token string">'mixin'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'no-empty-source'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">'named-grid-areas-no-invalid'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">'unicode-bom'</span><span class="token operator">:</span> <span class="token string">'never'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'no-descending-specificity'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">'font-family-no-missing-generic-family-keyword'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">'declaration-colon-space-after'</span><span class="token operator">:</span> <span class="token string">'always-single-line'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'declaration-colon-space-before'</span><span class="token operator">:</span> <span class="token string">'never'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'declaration-block-trailing-semicolon'</span><span class="token operator">:</span> <span class="token string">'always'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'rule-empty-line-before'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'always'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'after-comment'</span><span class="token punctuation">,</span> <span class="token string">'first-nested'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'unit-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">ignoreUnits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'rpx'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'order/order'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token string">'dollar-variables'</span><span class="token punctuation">,</span>
        <span class="token string">'custom-properties'</span><span class="token punctuation">,</span>
        <span class="token string">'at-rules'</span><span class="token punctuation">,</span>
        <span class="token string">'declarations'</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'at-rule'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'supports'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'at-rule'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'media'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">'rules'</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">severity</span><span class="token operator">:</span> <span class="token string">'warning'</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// Specify the alphabetical order of the attributes in the declaration block</span>
    <span class="token string-property property">'order/properties-order'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'position'</span><span class="token punctuation">,</span>
      <span class="token string">'top'</span><span class="token punctuation">,</span>
      <span class="token string">'right'</span><span class="token punctuation">,</span>
      <span class="token string">'bottom'</span><span class="token punctuation">,</span>
      <span class="token string">'left'</span><span class="token punctuation">,</span>
      <span class="token string">'z-index'</span><span class="token punctuation">,</span>
      <span class="token string">'display'</span><span class="token punctuation">,</span>
      <span class="token string">'float'</span><span class="token punctuation">,</span>
      <span class="token string">'width'</span><span class="token punctuation">,</span>
      <span class="token string">'height'</span><span class="token punctuation">,</span>
      <span class="token string">'max-width'</span><span class="token punctuation">,</span>
      <span class="token string">'max-height'</span><span class="token punctuation">,</span>
      <span class="token string">'min-width'</span><span class="token punctuation">,</span>
      <span class="token string">'min-height'</span><span class="token punctuation">,</span>
      <span class="token string">'padding'</span><span class="token punctuation">,</span>
      <span class="token string">'padding-top'</span><span class="token punctuation">,</span>
      <span class="token string">'padding-right'</span><span class="token punctuation">,</span>
      <span class="token string">'padding-bottom'</span><span class="token punctuation">,</span>
      <span class="token string">'padding-left'</span><span class="token punctuation">,</span>
      <span class="token string">'margin'</span><span class="token punctuation">,</span>
      <span class="token string">'margin-top'</span><span class="token punctuation">,</span>
      <span class="token string">'margin-right'</span><span class="token punctuation">,</span>
      <span class="token string">'margin-bottom'</span><span class="token punctuation">,</span>
      <span class="token string">'margin-left'</span><span class="token punctuation">,</span>
      <span class="token string">'margin-collapse'</span><span class="token punctuation">,</span>
      <span class="token string">'margin-top-collapse'</span><span class="token punctuation">,</span>
      <span class="token string">'margin-right-collapse'</span><span class="token punctuation">,</span>
      <span class="token string">'margin-bottom-collapse'</span><span class="token punctuation">,</span>
      <span class="token string">'margin-left-collapse'</span><span class="token punctuation">,</span>
      <span class="token string">'overflow'</span><span class="token punctuation">,</span>
      <span class="token string">'overflow-x'</span><span class="token punctuation">,</span>
      <span class="token string">'overflow-y'</span><span class="token punctuation">,</span>
      <span class="token string">'clip'</span><span class="token punctuation">,</span>
      <span class="token string">'clear'</span><span class="token punctuation">,</span>
      <span class="token string">'font'</span><span class="token punctuation">,</span>
      <span class="token string">'font-family'</span><span class="token punctuation">,</span>
      <span class="token string">'font-size'</span><span class="token punctuation">,</span>
      <span class="token string">'font-smoothing'</span><span class="token punctuation">,</span>
      <span class="token string">'osx-font-smoothing'</span><span class="token punctuation">,</span>
      <span class="token string">'font-style'</span><span class="token punctuation">,</span>
      <span class="token string">'font-weight'</span><span class="token punctuation">,</span>
      <span class="token string">'hyphens'</span><span class="token punctuation">,</span>
      <span class="token string">'src'</span><span class="token punctuation">,</span>
      <span class="token string">'line-height'</span><span class="token punctuation">,</span>
      <span class="token string">'letter-spacing'</span><span class="token punctuation">,</span>
      <span class="token string">'word-spacing'</span><span class="token punctuation">,</span>
      <span class="token string">'color'</span><span class="token punctuation">,</span>
      <span class="token string">'text-align'</span><span class="token punctuation">,</span>
      <span class="token string">'text-decoration'</span><span class="token punctuation">,</span>
      <span class="token string">'text-indent'</span><span class="token punctuation">,</span>
      <span class="token string">'text-overflow'</span><span class="token punctuation">,</span>
      <span class="token string">'text-rendering'</span><span class="token punctuation">,</span>
      <span class="token string">'text-size-adjust'</span><span class="token punctuation">,</span>
      <span class="token string">'text-shadow'</span><span class="token punctuation">,</span>
      <span class="token string">'text-transform'</span><span class="token punctuation">,</span>
      <span class="token string">'word-break'</span><span class="token punctuation">,</span>
      <span class="token string">'word-wrap'</span><span class="token punctuation">,</span>
      <span class="token string">'white-space'</span><span class="token punctuation">,</span>
      <span class="token string">'vertical-align'</span><span class="token punctuation">,</span>
      <span class="token string">'list-style'</span><span class="token punctuation">,</span>
      <span class="token string">'list-style-type'</span><span class="token punctuation">,</span>
      <span class="token string">'list-style-position'</span><span class="token punctuation">,</span>
      <span class="token string">'list-style-image'</span><span class="token punctuation">,</span>
      <span class="token string">'pointer-events'</span><span class="token punctuation">,</span>
      <span class="token string">'cursor'</span><span class="token punctuation">,</span>
      <span class="token string">'background'</span><span class="token punctuation">,</span>
      <span class="token string">'background-attachment'</span><span class="token punctuation">,</span>
      <span class="token string">'background-color'</span><span class="token punctuation">,</span>
      <span class="token string">'background-image'</span><span class="token punctuation">,</span>
      <span class="token string">'background-position'</span><span class="token punctuation">,</span>
      <span class="token string">'background-repeat'</span><span class="token punctuation">,</span>
      <span class="token string">'background-size'</span><span class="token punctuation">,</span>
      <span class="token string">'border'</span><span class="token punctuation">,</span>
      <span class="token string">'border-collapse'</span><span class="token punctuation">,</span>
      <span class="token string">'border-top'</span><span class="token punctuation">,</span>
      <span class="token string">'border-right'</span><span class="token punctuation">,</span>
      <span class="token string">'border-bottom'</span><span class="token punctuation">,</span>
      <span class="token string">'border-left'</span><span class="token punctuation">,</span>
      <span class="token string">'border-color'</span><span class="token punctuation">,</span>
      <span class="token string">'border-image'</span><span class="token punctuation">,</span>
      <span class="token string">'border-top-color'</span><span class="token punctuation">,</span>
      <span class="token string">'border-right-color'</span><span class="token punctuation">,</span>
      <span class="token string">'border-bottom-color'</span><span class="token punctuation">,</span>
      <span class="token string">'border-left-color'</span><span class="token punctuation">,</span>
      <span class="token string">'border-spacing'</span><span class="token punctuation">,</span>
      <span class="token string">'border-style'</span><span class="token punctuation">,</span>
      <span class="token string">'border-top-style'</span><span class="token punctuation">,</span>
      <span class="token string">'border-right-style'</span><span class="token punctuation">,</span>
      <span class="token string">'border-bottom-style'</span><span class="token punctuation">,</span>
      <span class="token string">'border-left-style'</span><span class="token punctuation">,</span>
      <span class="token string">'border-width'</span><span class="token punctuation">,</span>
      <span class="token string">'border-top-width'</span><span class="token punctuation">,</span>
      <span class="token string">'border-right-width'</span><span class="token punctuation">,</span>
      <span class="token string">'border-bottom-width'</span><span class="token punctuation">,</span>
      <span class="token string">'border-left-width'</span><span class="token punctuation">,</span>
      <span class="token string">'border-radius'</span><span class="token punctuation">,</span>
      <span class="token string">'border-top-right-radius'</span><span class="token punctuation">,</span>
      <span class="token string">'border-bottom-right-radius'</span><span class="token punctuation">,</span>
      <span class="token string">'border-bottom-left-radius'</span><span class="token punctuation">,</span>
      <span class="token string">'border-top-left-radius'</span><span class="token punctuation">,</span>
      <span class="token string">'border-radius-topright'</span><span class="token punctuation">,</span>
      <span class="token string">'border-radius-bottomright'</span><span class="token punctuation">,</span>
      <span class="token string">'border-radius-bottomleft'</span><span class="token punctuation">,</span>
      <span class="token string">'border-radius-topleft'</span><span class="token punctuation">,</span>
      <span class="token string">'content'</span><span class="token punctuation">,</span>
      <span class="token string">'quotes'</span><span class="token punctuation">,</span>
      <span class="token string">'outline'</span><span class="token punctuation">,</span>
      <span class="token string">'outline-offset'</span><span class="token punctuation">,</span>
      <span class="token string">'opacity'</span><span class="token punctuation">,</span>
      <span class="token string">'filter'</span><span class="token punctuation">,</span>
      <span class="token string">'visibility'</span><span class="token punctuation">,</span>
      <span class="token string">'size'</span><span class="token punctuation">,</span>
      <span class="token string">'zoom'</span><span class="token punctuation">,</span>
      <span class="token string">'transform'</span><span class="token punctuation">,</span>
      <span class="token string">'box-align'</span><span class="token punctuation">,</span>
      <span class="token string">'box-flex'</span><span class="token punctuation">,</span>
      <span class="token string">'box-orient'</span><span class="token punctuation">,</span>
      <span class="token string">'box-pack'</span><span class="token punctuation">,</span>
      <span class="token string">'box-shadow'</span><span class="token punctuation">,</span>
      <span class="token string">'box-sizing'</span><span class="token punctuation">,</span>
      <span class="token string">'table-layout'</span><span class="token punctuation">,</span>
      <span class="token string">'animation'</span><span class="token punctuation">,</span>
      <span class="token string">'animation-delay'</span><span class="token punctuation">,</span>
      <span class="token string">'animation-duration'</span><span class="token punctuation">,</span>
      <span class="token string">'animation-iteration-count'</span><span class="token punctuation">,</span>
      <span class="token string">'animation-name'</span><span class="token punctuation">,</span>
      <span class="token string">'animation-play-state'</span><span class="token punctuation">,</span>
      <span class="token string">'animation-timing-function'</span><span class="token punctuation">,</span>
      <span class="token string">'animation-fill-mode'</span><span class="token punctuation">,</span>
      <span class="token string">'transition'</span><span class="token punctuation">,</span>
      <span class="token string">'transition-delay'</span><span class="token punctuation">,</span>
      <span class="token string">'transition-duration'</span><span class="token punctuation">,</span>
      <span class="token string">'transition-property'</span><span class="token punctuation">,</span>
      <span class="token string">'transition-timing-function'</span><span class="token punctuation">,</span>
      <span class="token string">'background-clip'</span><span class="token punctuation">,</span>
      <span class="token string">'backface-visibility'</span><span class="token punctuation">,</span>
      <span class="token string">'resize'</span><span class="token punctuation">,</span>
      <span class="token string">'appearance'</span><span class="token punctuation">,</span>
      <span class="token string">'user-select'</span><span class="token punctuation">,</span>
      <span class="token string">'interpolation-mode'</span><span class="token punctuation">,</span>
      <span class="token string">'direction'</span><span class="token punctuation">,</span>
      <span class="token string">'marks'</span><span class="token punctuation">,</span>
      <span class="token string">'page'</span><span class="token punctuation">,</span>
      <span class="token string">'set-link-source'</span><span class="token punctuation">,</span>
      <span class="token string">'unicode-bidi'</span><span class="token punctuation">,</span>
      <span class="token string">'speak'</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ignoreFiles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/*.js'</span><span class="token punctuation">,</span> <span class="token string">'**/*.jsx'</span><span class="token punctuation">,</span> <span class="token string">'**/*.tsx'</span><span class="token punctuation">,</span> <span class="token string">'**/*.ts'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>.stylelintignore</code> 忽略校验目录文件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/dist/*
/public/*
public/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>.husky/lint-staged.config.js</code> 增加命令 <code v-pre>stylelint --fix</code></p>
<p><strong>与 Prettier 配合</strong></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>stylelint 会与 prettier 产生冲突，要做兼容</p>
</div>
<p>安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> stylelint-config-prettier
stylelint-scss stylelint-config-standard-scss postcss postcss-html postcss-scss <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>stylelint-config-prettier ---- 基于 prettier 代码风格的 stylelint 规则</li>
<li>stylelint-config-standard-scss ---- 针对 scss 的标准可共享配置。</li>
<li>postcss ---- 用于 postcss-html 和 postcss-scss 的支持</li>
<li>postcss-html ---- 解析 <code v-pre>&lt;style&gt;</code> 类 <code v-pre>vue、html</code> 文件标签中的样式</li>
<li>postcss-scss ---- 解析 <code v-pre>&lt;style lang=“scss”&gt;</code> 下的 <code v-pre>scss</code> 样式</li>
</ul>
<p>修改 <code v-pre>stylelint.config.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'stylelint-order'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">customSyntax</span><span class="token operator">:</span> <span class="token string">'postcss-html'</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'stylelint-config-standard'</span><span class="token punctuation">,</span> <span class="token string">'stylelint-config-standard-scss'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


