---
home: true
heroImage: '/logo.svg'
# heroImage: 'https://cn.vuejs.org/images/logo.svg'
heroText: SMore Design
tagline: '基于 ant-design-vue 3.x版本 封装的 SMore Design 组件库'
actions:
  - text: 开始 💡
    link: /guide/
    type: primary

  - text: 组件文档 🛠
    link: /packages/element/layout/

features:
  - title: 更易用
    details: 开箱即用，案例丰富
  - title: 更高效
    details: 傻瓜写法，超高性能
  - title: 更专业
    details: 完备，灵活，优雅
footer: MIT Licensed | Copyright © 2022-present
---

## 🛠 安装

:::: code-group

::: code-group-item npm

```bash
npm add ant-design-vue -S
npm add smore-design -S
```

:::

::: code-group-item yarn

```bash
yarn add ant-design-vue
yarn add smore-design
```

:::

::::

## 🚀 使用

```js
import AntV from 'ant-design-vue';
import SmoreDesign from 'smore-design';
import 'ant-design-vue/lib/theme-chalk/index.css';
import 'smore-design/lib/css/index.css';

Vue.use(AntV);
Vue.use(SmoreDesign);
```


::: tip

`smore-design` 是基于 ant-design-vue 二次封装的组件库，使用前需要先安装 ant-design-vue 组件库，提供了自定义换肤、自定义组件前缀、丰富的业务组件等功能
