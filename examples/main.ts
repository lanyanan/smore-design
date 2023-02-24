import { createApp } from 'vue';

import Antd from 'ant-design-vue';
import App from './src/App.vue';
import router from './router/index';

import SmoreDesign, { updateTheme } from '../src/index';

import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

// 更新主题
updateTheme({
  boderColor1: '#f0f',
  fontColor1: '#f00'
});

app.use(router);
app.use(Antd);
app.use(SmoreDesign);

app.mount('#app');
