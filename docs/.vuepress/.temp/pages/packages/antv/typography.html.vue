<template><div><h1 id="typography-字体" tabindex="-1"><a class="header-anchor" href="#typography-字体" aria-hidden="true">#</a> Typography 字体</h1>
<p>我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。</p>
<h3 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h3>
<div class="demo-term-box">
<!-- <img src="@source/assets/images/term-pingfang.png" alt="">
<img src="@source/assets/images/term-hiragino.png" alt="">
<img src="@source/assets/images/term-microsoft.png" alt="">
<img src="@source/assets/images/term-sf.png" alt="">
<img src="@source/assets/images/term-helvetica.png" alt="">
<img src="@source/assets/images/term-arial.png" alt=""> -->
</div>
<h3 id="字号" tabindex="-1"><a class="header-anchor" href="#字号" aria-hidden="true">#</a> 字号</h3>
<table class="demo-typo-size">
  <tbody>
  <tr
    >
      <td>层级</td>
      <td>字体大小</td>
      <td class="color-dark-light">举例</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_extra_small }"
    >
      <td>辅助文字</td>
      <td class="color-dark-light">{{font_size_extra_small}} Extra Small</td>
      <td>用 Element 快速搭建页面</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_small }"
    >
      <td>正文（小）</td>
      <td class="color-dark-light">{{font_size_small}} Small</td>
      <td>用 Element 快速搭建页面</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_base }"
    >
      <td>正文</td>
      <td class="color-dark-light">{{font_size_base}} Base</td>
      <td>用 Element 快速搭建页面</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_medium }"
    >
      <td>小标题</td>
      <td class="color-dark-light">{{font_size_medium}} Medium</td>
      <td>用 Element 快速搭建页面</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_large }"
    >
      <td>标题</td>
      <td class="color-dark-light">{{font_size_large}} large</td>
      <td>用 Element 快速搭建页面</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_extra_large }"
    >
      <td>主标题</td>
      <td class="color-dark-light">{{font_size_extra_large}} Extra large</td>
      <td>用 Element 快速搭建页面</td>
    </tr>
  </tbody>
</table>
<h3 id="行高" tabindex="-1"><a class="header-anchor" href="#行高" aria-hidden="true">#</a> 行高</h3>
<div>
<!-- <img class="lineH-left" src="~examples/assets/images/typography.png" /> -->
<ul class="lineH-right">
<li>line-height:1 <span>无行高</span></li>
<li>line-height:1.3 <span>紧凑</span></li>
<li>line-height:1.5 <span>常规</span></li>
<li>line-height:1.7 <span>宽松</span></li>
</ul>
</div>
<h3 id="font-family-代码" tabindex="-1"><a class="header-anchor" href="#font-family-代码" aria-hidden="true">#</a> Font-family 代码</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Helvetica Neue"</span><span class="token punctuation">,</span>Helvetica<span class="token punctuation">,</span><span class="token string">"PingFang SC"</span><span class="token punctuation">,</span><span class="token string">"Hiragino Sans GB"</span><span class="token punctuation">,</span><span class="token string">"Microsoft YaHei"</span><span class="token punctuation">,</span><span class="token string">"微软雅黑"</span><span class="token punctuation">,</span>Arial<span class="token punctuation">,</span>sans-serif<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>

<script>
  // import bus from '../../bus';
  // import { ACTION_USER_CONFIG_UPDATE } from '../../components/theme/constant.js';
  const varMap = [
    '$--font-size-extra-large',
    '$--font-size-large',
    '$--font-size-medium',
    '$--font-size-base',
    '$--font-size-small',
    '$--font-size-extra-small'
  ];
  const original = {
    'font_size_extra_large': '20px',
    'font_size_large': '18px',
    'font_size_medium': '16px',
    'font_size_base': '14px',
    'font_size_small': '13px',
    'font_size_extra_small': '12px'
  }
  export default {
    created() {
      // bus.$on(ACTION_USER_CONFIG_UPDATE, this.setGlobal);
    },
    mounted() {
      this.setGlobal();
    },
    methods: {
      tintColor(color, tint) {
        return tintColor(color, tint);
      },
      setGlobal() {
        if (window.userThemeConfig) {
          this.global = window.userThemeConfig.global;
        }
      }
    },
    data() {
      return {
        global: {},
        'font_size_extra_large': '',
        'font_size_large': '',
        'font_size_medium': '',
        'font_size_base': '',
        'font_size_small': '',
        'font_size_extra_small': ''
      }
    },
    watch: {
      global: {
        immediate: true,
        handler(value) {
          varMap.forEach((v) => {
            const key = v.replace('$--', '').replace(/-/g, '_')
            if (value[v]) {
              this[key] = value[v]
            } else {
              this[key] = original[key]
            }
          });
        }
      }
    },
  }
</script>
