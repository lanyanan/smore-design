# SMore Safe 智慧安全平台

生产安全、消防、安防、应急一体化管理平台

## 框架基础功能点
- 1.vue模板语法
- 2.代码规范：airbnb基础规范+vue模板语法的规范
- 3.提交规范
- 4.主题切换使用vue3特有的属性v-bind
- 5.路由是使用可配置路由
- 6.语言切换

### 文件目录说明
目录层级比较多只对比较重要的目录做说明

```
public                                       公共资源
src                                          项目源代码
├── __test__                                 测试文件
├── assets                                   项目资源目录
├── globalStores                             全局数据存储
├── hooks                                    hooks存放
├── layout                                   全局的layout
├── locales                                  项目国际化
├── router                                   项目路由
├── theme                                    项目主题
├── utils                                    项目全局的工具方法
├── components                               项目全局的组件
├── views                                    项目文件
│  ├── __test__                              项目测试文件
│  │  ├── slice                              模块的store和type文件存放
│  │  ├── .....                              模块页面文件
├── utils                                    项目全局的工具方法
├── globalConstants                          项目全局常量
├── main.ts                                  项目的主入口文件
└── App.vue                                  项目APP文件

```

### 框架使用的工具

- [vue3](https://www.javascriptc.com/vue3js/)
- [vite](https://www.vitejs.net/)
- [antv](https://www.antdv.com/components/overview)
- [pinia](https://pinia.web3doc.top/)
- [TypeScript](https://www.tslang.cn/)

## 上手指南

### 安装依赖

```sh
npm install
```

### 启动项目

```sh
npm run dev
```

### 项目打包

```sh
npm run build
```

### 启动测试

```sh
npm run test:unit
```

### 项目构建

```sh
npm run build
```

### 代码风格检查

```sh
npm run lint
```



