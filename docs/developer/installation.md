# 安装使用

此组件库基于 `element-ui` 二次开发。使用前请查看[更新日志](../changelog)

## 安装


:::: code-group

::: code-group-item npm

```bash
npm install smore-design -S
```

:::

::: code-group-item yarn

```bash
yarn add smore-design -S
```

:::

::: code-group-item pnpm

```bash
pnpm add smore-design
```

:::

::::

## 使用

```js
import AntV from 'ant-design-vue';
import SmoreDesign from 'smore-design';
import 'ant-design-vue/lib/index.css';
import 'smore-design/lib/css/index.css';

Vue.use(AntV);
Vue.use(SmoreDesign);
```
