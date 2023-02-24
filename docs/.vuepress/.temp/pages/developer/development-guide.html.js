export const data = JSON.parse("{\"key\":\"v-7f5d93e6\",\"path\":\"/developer/development-guide.html\",\"title\":\"开发指南\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1677207542000,\"contributors\":[{\"name\":\"lanyanan\",\"email\":\"yanan.lan@smartmore.com\",\"commits\":1}]},\"filePathRelative\":\"developer/development-guide.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
