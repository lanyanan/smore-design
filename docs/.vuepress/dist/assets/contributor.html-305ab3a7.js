import{_ as t,M as o,p as c,q as l,Q as s,t as n,N as e,a1 as i}from"./framework-e921cdd2.js";const p={},d=s("h1",{id:"代码贡献指南",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码贡献指南","aria-hidden":"true"},"#"),n(" 代码贡献指南")],-1),u=s("h3",{id:"目录结构介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#目录结构介绍","aria-hidden":"true"},"#"),n(" 目录结构介绍")],-1),r={href:"https://www.npmjs.com/package/mddir",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>|-- douluo-ui
    |-- .cz-config.js           # cz-customizable commit message 规范
    |-- .editorconfig           # EditorConfig 配置
    |-- .eslintignore           # eslint 忽略检测文件
    |-- .eslintrc.js            # eslint 配置文件
    |-- .gitignore              # git 忽略提交
    |-- .ls-lint.yml            # ls-lint 文件命名规范 kebab-case 校验
    |-- .stylelintignore        # stylelint 忽略检测
    |-- .versionrc.js           # standard-version 自动生成 CHANGELOG 配置
    |-- CHANGELOG.md            # standard-version 根据 commit 信息自动生成
    |-- README.md               # readme 项目介绍
    |-- babel.config.js         # babel 配置文件
    |-- commitlint.config.js    # commitlint 校验 comit message 配置
    |-- components.json         # 项目组件路径
    |-- components.d.ts         # vite ts 文件类型声明
    |-- gulpfile.js             # gulp 打包 css
    |-- index.html              # vite 入口文件 /examples/main.js
    |-- jsconfig.json           # js 配置文件
    |-- package.json
    |-- prettier.config.js      # prettier 格式配置
    |-- stylelint.config.js     # stylelint 格式配置
    |-- vite.config.js          # vite 配置
    |-- .husky                  # husky 配置
    |   |-- commit-msg          # commit 提交钩子
    |   |-- common.sh
    |   |-- lint-staged.config.js   # lint-staged 配置
    |   |-- pre-commit          # commit 之前钩子函数
    |-- .vscode                 # 配置 vscode 编辑器
    |   |-- extensions.json
    |   |-- setting.json
    |-- build                   # rollup 打包配置
    |   |-- rollup-build.js
    |   |-- rollup-creat-Config.js
    |   |-- utils.js
    |-- config                  # 项目构建配置
    |   |-- alias.js
    |   |-- rollup-config.js
    |-- docs                    # 文档目录
    |   |-- README.md
    |   |-- .vuepress
    |   |   |-- config.js       # vuepress 配置文件
    |   |   |-- enhanceApp.js   # vuepress 安装组件库
    |   |   |-- components      # vuepress 公共组件
    |   |   |-- dist            # vuepress 打包静态资源
    |   |   |-- sidebarRoutes   # 抽离的侧边栏路由文件
    |   |   |   |-- business.js # 业务组件路由路径
    |   |   |   |-- developer.js # 开发指南路由路径
    |   |   |   |-- element.js   # element 组件路由路径
    |   |   |   |-- guide.js     # 开发规范路由路径
    |   |   |-- styles           # vuepress 公共样式
    |   |       |-- index.styl
    |   |       |-- element-ui   # element-ui 文档样式
    |   |       |-- theme        # vuepress-theme-hope 主题样式
    |   |-- developer            # 开发指南文档
    |   |-- guide                # 开发规范文档
    |   |-- packages
    |       |-- business         # 业务组件文档
    |       |-- element          # element 文档
    |-- examples                 # 组件库开发项目
    |   |-- main.js              # vite 启动入口文件
    |   |-- assets
    |   |-- src
    |-- lib                      # rollup 打包组件库静态资源
    |   |-- xxx.common.js        # rollup 打包 common 规范
    |   |-- xxx.common.min.js    
    |   |-- xxx.es.js            # es 打包规范
    |   |-- xxx.es.min.js        
    |   |-- theme                # css 和 字体图标打包
    |-- packages                 # 组件库包
    |   |-- element-ui          # 基础组件包
    |   |-- business            # 业务组件包
    |-- play                    # vite 快速演示项目
    |-- scripts                 
    |   |-- docs.sh             # 文档发布脚步
    |-- src                     # 组件库项目
    |   |-- index.js            # 组件库入口文件
    |   |-- images
    |   |-- ui                  # 定义引入组件库文件
    |   |-- utils
    |       |-- themePicker.js  # 修改 element-ui 主题方法
    |       |-- use-namespace.js # 组件生成 bem 规范和前缀
    |-- styles                   # 统一存放组件库样式
        |-- src
        |   |-- iconfont.scss    # 字体样式
        |   |-- index.scss       # scss 入口文件
        |   |-- var.scss         # css 变量
        |   |-- common
        |   |   |-- var.scss     # scss 变量定义
        |   |-- element-ui      # element 组件 scss 目录
        |   |   |-- button.scss
        |   |-- fonts           # 字体图标
        |   |-- mixins
        |       |-- _var.scss   # 定义生成 css 变量方法
        |       |-- config.scss   # bem 规范符号
        |       |-- function.scss # 定义公用函数
        |       |-- mixins.scss     # bem 复用方法
        |       |-- utils.scss      # at-root 等复用mixin
        |-- theme               # gulp 打包 scss 目录，复制到 lib 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yarn-命令" tabindex="-1"><a class="header-anchor" href="#yarn-命令" aria-hidden="true">#</a> yarn 命令</h3><p>开发和维护组件库，需要了解一些 yarn 基本操作</p><p>初始化一个项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加依赖包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>@<span class="token punctuation">[</span>version<span class="token punctuation">]</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>@<span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此种添加方式默认添加到 <code>dependencies</code> 中，<code>dependencies</code> 是项目运行时所需要的依赖。由于添加到该目录中的依赖会让使用组件库的项目安装这些依赖，所以一定要分清楚依赖是否需要用户安装</p><p><strong>将依赖项添加到不同依赖项类别中</strong></p><p>分别添加到 <code>devDependencies</code>、<code>peerDependencies</code> 和 <code>optionalDependencies</code> 类别中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span> <span class="token parameter variable">--dev</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span> <span class="token parameter variable">--peer</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span> <span class="token parameter variable">--optional</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>devDependencies</code>是开发时依赖，在构建运行之后不需要的依赖，默认情况下组件开发过程中均添加到该类别</p></li><li><p><code>peerDependencies</code>是同伴依赖，是一种特殊的依赖，在发布包的时候需要。有这种依赖意味着安装包的用户也需要和包同样的依赖</p></li><li><p><code>optionalDependencies</code>是可选依赖，意味依赖是可选的。这种依赖即便安装失败，Yarn 也会认为整个依赖安装过程是成功的。这种类型适用于那些即便没有成功安装可选依赖，也有后备方案的情况（比如 Watchman）。</p></li></ul><p><strong>升级依赖包</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> upgrade <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
<span class="token function">yarn</span> upgrade <span class="token punctuation">[</span>package<span class="token punctuation">]</span>@<span class="token punctuation">[</span>version<span class="token punctuation">]</span>
<span class="token function">yarn</span> upgrade <span class="token punctuation">[</span>package<span class="token punctuation">]</span>@<span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>移除依赖包</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> remove <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>安装项目的全部依赖</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="贡献代码流程" tabindex="-1"><a class="header-anchor" href="#贡献代码流程" aria-hidden="true">#</a> 贡献代码流程</h3><h4 id="下载启动项目" tabindex="-1"><a class="header-anchor" href="#下载启动项目" aria-hidden="true">#</a> 下载启动项目</h4><p>fork 项目到自己的本地仓库，克隆项目到本地</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:【账号】/douluo-ui.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加源关联源仓库，暂且命名源为 <code>upstream</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> upstream git@github.com:JefferyXZF/douluo-ui.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装依赖，启动项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span>
<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看或编写文档，执行下面命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>命令脚步介绍</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bootstrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn || npm install&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 安装依赖（首推 yarn，yarn.lock会锁定依赖版本库）</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span> <span class="token comment">// vite 启动，默认 vite.config.js，index.html 入口文件是 examples/main.js</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span> <span class="token comment">// vuepress 启动项目</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span><span class="token punctuation">,</span> <span class="token comment">// vuepress 打包文档</span>
    <span class="token property">&quot;docs:deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash ./scripts/docs.sh&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 打包推送 gh-pages 文档</span>
    <span class="token property">&quot;gulp-build:css&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gulp build&quot;</span><span class="token punctuation">,</span> <span class="token comment">// gulp 打包 scss 和 字体图标</span>
    <span class="token property">&quot;build:lib&quot;</span><span class="token operator">:</span> &quot;cross-env NODE_ENV=production rimraf ./lib &amp;&amp; 
    node ./build/ rollup-build &amp;&amp; npm run gulp-build<span class="token operator">:</span>css&quot;<span class="token punctuation">,</span> <span class="token comment">// rollup 打包组件库</span>
    <span class="token property">&quot;commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git-cz&quot;</span><span class="token punctuation">,</span> <span class="token comment">// commit message 提交规范</span>
    <span class="token property">&quot;standard-version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;standard-version&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 生成 changelog 文件（带图标）</span>
    <span class="token property">&quot;changelog&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx conventional-changelog -p angular -i CHANGELOG.md -s -r 0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 也是生成 changelog 文件</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开发组件" tabindex="-1"><a class="header-anchor" href="#开发组件" aria-hidden="true">#</a> 开发组件</h4><p>组件按照功能划分为基于 element-ui 基础组件和业务组件</p>`,34),m=s("code",null,"props",-1),b=s("code",null,"event 事件",-1),k=s("code",null,"slot 插槽",-1),g=s("code",null,"class",-1),h=s("code",null,"style",-1),f=s("code",null,"elemnt-ui",-1),y=s("code",null,"$attrs",-1),x=s("code",null,"$listeners",-1),_={href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/element-plus/element-plus",target:"_blank",rel:"noopener noreferrer"},q=i(`<p>开发基础组件，在 <code>packages/element-ui</code> 目录下创建，参考 <code>button</code> 组件，然后在 <code>src/ui/element-ui.js</code> 和 根目录下 <code>components.json</code> 添加文件路径</p><p>开发业务组件，参考 <code>element-ui</code> 目录，在 <code>packages/business</code> 创建文件组件，然后引入路径和上面一样</p><p>注意：如果组件需要使用到 <strong>图片或第三方插件</strong> 考虑到包的大小，需要先出实现方案，讨论合适后再编码实现</p><p><strong>以 button 组件为例</strong></p><p>入口文件 <code>index.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&quot;./src/button.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createNamespace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/src/utils/use-namespace.js&quot;</span><span class="token punctuation">;</span>

Button<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token function">createNamespace</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">prefix</span><span class="token operator">:</span> options<span class="token punctuation">.</span>prefix <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Button<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Button<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此处将 <code>Button</code> 注册成一个 Vue 组件，外部引入时可以通过 <code>Vue.use()</code> 来安装该插件，该插件的功能就是全局注册 <code>Button</code> 组件</p><p><strong>button src 下的单文件组件</strong></p><p>为了兼容 <code>element-ui</code> buton 组件的功能，使用 <code>$attrs</code> 和 <code>$listeners</code> 继承它的属性和事件</p><p><code>useNamespace</code> 方法是参考 <code>element-plus</code> 实现，创建一个 <code>bem</code> 对象，调用封装的方法，可以生成符合 <code>bem</code> 规范的 <code>class</code>，避免命名容易冲突</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>el<span class="token operator">-</span>button
    v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;$attrs&quot;</span>
    v<span class="token operator">-</span>on<span class="token operator">=</span><span class="token string">&quot;$listeners&quot;</span>
    <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span>&quot;<span class="token punctuation">[</span>
      ns<span class="token punctuation">.</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>&quot;<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useNamespace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;src/utils/use-namespace.js&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Button&#39;</span><span class="token punctuation">,</span>

  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ns <span class="token operator">=</span> <span class="token function">useNamespace</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="组件样式主题" tabindex="-1"><a class="header-anchor" href="#组件样式主题" aria-hidden="true">#</a> 组件样式主题</h4><p>阅读 <code>button</code> 单文件组件，你可能会发现没有样式代码。为了考虑样式的统一性和打包优化，放在了 <code>styles</code> 目录下</p><p>组件库的样式管理由 sass 来完成，因此你需要对 sass 的一些语法要特别熟悉，如变量声明、 <code>@mixins</code> 、 <code>@function</code> 、还有一些常用的内建函数<code>maps</code>、<code>color</code>、<code>sting</code>等知识，详细学习请阅读 <a href="../sass">SCSS 开发指南</a></p><p>样式编写使用了 <code>Bem</code> 命名规范，<code>Bem</code> 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论，可以让前端代码更容易阅读和理解，方便协作和维护</p><p>BEM 命名约定的模式是：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.block</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">.block__element</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">.block--modifier</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一个块(block)名应该有一个命名空间（前缀），例如 <code>el-block</code></p><ul><li><code>block</code> 代表了更高级别的抽象或组件。</li><li><code>block__element</code> 代表 <code>.block</code> 的后代，用于形成一个完整的 <code>.block</code> 的整体。</li><li><code>block--modifier</code> 代表 <code>.block</code> 的不同状态或不同版本。</li></ul><p>使用两个连字符和下划线而不是一个，是为了让你自己的块可以用单个连字符来界定。如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.sub-block__element</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">.sub-block--modifier</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面介绍一些 <code>dou-ui</code> 中主要用到的 <code>mixin</code> 模块及 <code>bem</code> 用法</p><p>1、<code>b</code> 是 <code>bem</code> 中 <code>block</code> 的简称， 用来匹配 <code>block</code> 声明类，比如</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// mixin.scss</span>
<span class="token keyword">@mixin</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token variable">$block</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$B</span></span><span class="token punctuation">:</span> <span class="token variable">$namespace</span> <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> <span class="token variable">$block</span> !global<span class="token punctuation">;</span>

  <span class="token selector">.<span class="token variable">#{$B}</span> </span><span class="token punctuation">{</span>
    <span class="token keyword">@content</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token keyword">@include</span> <span class="token function">b</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">// 将会编译为</span>
<span class="token selector">.dl-button </span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、<code>e</code> 是 <code>bem</code> 中 <code>element</code> 的简称，用来匹配 <code>element</code> 声明类，比如</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@include</span> <span class="token function">b</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">e</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 将会编译为</span>
<span class="token selector">.qw-button__header </span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、<code>m</code> 是 <code>bem</code> 中 <code>modifier</code> 的检查， 用来匹配 <code>modifier</code> 声明类，比如</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@include</span> <span class="token function">b</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">m</span><span class="token punctuation">(</span>primary<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 将会编译为</span>
<span class="token selector">.dl-button--primary </span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>when</code> 是额外增加的状态修饰符，用来表示当前块或子元素或子元素特定类型下的状态，，比如</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@include</span> <span class="token function">b</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">when</span><span class="token punctuation">(</span>plain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 将会编译为</span>
<span class="token selector">.dl-button.is-plain </span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&amp;</code> 代表父级，<code>&amp;</code> 会编译为父级，这个类也会被置于根目录，而不是放置在父级下。</p><h3 id="git-commit-提交" tabindex="-1"><a class="header-anchor" href="#git-commit-提交" aria-hidden="true">#</a> Git Commit 提交</h3><p>本地提交代码，使用 <code>yarn commit</code> 替代 <code>git commit</code></p><p>如果不是，每次提交 commit message 都必须按照以下格式提交，且不得超过 72 个字符（避免自动换行影响美观）</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>(<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>): <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>subject</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>type</code> 用来说明 commit 的类别，例如</p><ul><li><strong>feat</strong>：新功能（feature）</li><li><strong>fix</strong>：修补bug</li><li><strong>docs</strong>：文档（documentation）</li><li><strong>style</strong>： 代码风格，格式修复</li><li><strong>refactor</strong>：重构（即不是新增功能，也不是修改bug的代码变动）</li><li><strong>perf</strong>：代码优化,改善性能</li><li><strong>test</strong>：增加测试</li><li><strong>chore</strong>：构建过程或辅助工具的变动</li><li><strong>revert</strong>：代码回退</li><li><strong>ci</strong>：对CI配置文件和脚本的更改</li><li><strong>build</strong>：变更项目构建或外部依赖</li></ul><p>如果 <code>type</code> 是 <code>feat</code> 或 <code>fix</code>，则该 commit 必须要在记录 changelog（更新日志）中</p><p><code>scope</code> 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，一般情况下可以不写，如需要可以注明</p><p><code>subject</code> 是 commit 目的的简短描述，不得超过 50 个字符</p><ul><li>尽量使用英文书写，不会的单词先翻译</li><li>以动词开头，使用第一人称现在时，比如change，而不是changed或changes</li><li>第一个字母小写</li><li>结尾不加句号（.）</li></ul><h3 id="分支检出" tabindex="-1"><a class="header-anchor" href="#分支检出" aria-hidden="true">#</a> 分支检出</h3><p>组件库的开发主分支为 <code>develop</code> 分支，组件库开发者需要贡献代码时，请按照 Git Commit 提交规范的 type 类型来命名新分支，并进行开发。</p><p>例如，需要进行 Button 组件的开发时，拉取 <code>develop</code> 分支最新代码，并生成名为 <code>feat-button</code> 的新分支进行开发。同理，进行 bug 修补时新建分支名应为 <code>fix-button</code>。</p><p>请严格按照以上命名规范进行，不合格的命名分支将会被移除。</p><p>在新建分支开发完成之后，需要进行代码审核，审核完成之后才可以合并到 <code>develop</code> 分支，同时，该新建分支名必须删除。</p><h3 id="发起-pr-合并" tabindex="-1"><a class="header-anchor" href="#发起-pr-合并" aria-hidden="true">#</a> 发起 PR 合并</h3><p>在 <code>push</code> 之前，避免合并冲突，先合并远程的 <code>develop</code> 分支在推送，然后再发起合并，审查完代码后会合并你的代码到 <code>develop</code> 分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch upstream

<span class="token function">git</span> merge upstream/develop

<span class="token function">git</span> push origin xxx-button
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本发布" tabindex="-1"><a class="header-anchor" href="#版本发布" aria-hidden="true">#</a> 版本发布</h3><p>在 <code>develop</code> 分支开发一定功能时，判断是否需要发布新版本的依据为：</p><ul><li>是否有新功能上线</li><li>是否有重大bug修复</li><li>是否有样式规范的变更</li></ul><p>通过小组评审之后，商定进行发布的版本号。</p>`,53);function w(B,E){const a=o("ExternalLinkIcon");return c(),l("div",null,[d,u,s("p",null,[n("目录结构使用 "),s("a",r,[n("mddir"),e(a)]),n(" 插件生成")]),v,s("p",null,[n("在开发前，首先要对开发的组件进行设计，要实现什么功能，考虑功能拓展性，事先定义 "),m,n("、"),b,n("、"),k,n("，为了组件样式灵活，可能要对外暴露样式接口，例如自定义 "),g,n("、"),h,n("。同时，为了兼容 "),f,n(" API，需要考虑用 "),y,n("、"),x,n(" 、组件内定义插槽，条件允许，可以先参考 "),s("a",_,[n("element-ui"),e(a)]),n(" 和 "),s("a",j,[n("element-plus"),e(a)]),n(" 源码实现")]),q])}const C=t(p,[["render",w],["__file","contributor.html.vue"]]);export{C as default};
