import { shallowRef } from 'vue';
import { Theme, ThemeConfig } from './themeConfig';

const theme = shallowRef<Theme>(ThemeConfig);

export const useTheme = () => {
  const changeTheme = (config: Theme) => {
    theme.value = config;
  };

  return {
    theme,
    changeTheme
  };
};
