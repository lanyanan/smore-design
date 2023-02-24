import type { App } from 'vue';
import { useTheme } from '../packages/useTheme';
import { Theme } from '../packages/themeConfig/index';
import * as components from './components';

export * from './components';

const install = (app: App) => {
  Object.keys(components).forEach((key) => {
    // @ts-ignore
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
  return app;
};

const { changeTheme } = useTheme();

export const updateTheme = (config: Theme) => {
  changeTheme(config);
};

export default {
  install
};
