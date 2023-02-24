export const siteData = JSON.parse("{\"base\":\"/smore-design/\",\"lang\":\"zh-CN\",\"title\":\"Hello VuePress\",\"description\":\"Just playing around\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/logo.png\"}]],\"locales\":{\"/\":{\"selectText\":\"选择语言\",\"lang\":\"zh-CN\",\"label\":\"简体中文\",\"title\":\"Smore-Design\",\"description\":\"基于 Vue3.0 的组件库\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
