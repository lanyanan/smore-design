<script setup lang="ts">
import buttonProps from 'ant-design-vue/lib/button/buttonTypes';
import { useTheme } from '../../../useTheme';

const props = defineProps({
  ...buttonProps()
});

const { theme } = useTheme();

const getClassName = () => {
  switch (props.type) {
    case 'primary':
      return 's-primary';
      default:
      return '';
  }
};
</script>

<template>
  <a-button v-bind="$props" :class="getClassName()">
    <slot></slot>
  </a-button>
</template>

<style lang="less" scoped>
  .s-primary {
    background: v-bind('theme.fontColor1')!important;
  }
</style>
