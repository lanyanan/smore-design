import Button from './src/index.vue';

Button.install = (app: { component: (arg0: string, arg1: any) => void; }) => {
  app.component('s-button', Button);
  return app;
};

export default Button;
