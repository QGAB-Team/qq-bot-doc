export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"QQ群管机器人\",\"description\":\"基于Mirai和Graia\"},\"/us\":{\"lang\":\"en-US\",\"title\":\"QQ Group Admin Bot\",\"description\":\"Based on Mirai and Graia\"},\"/hant\":{\"lang\":\"zh-TW\",\"title\":\"QQ群管機器人\",\"description\":\"基於Mirai和Graia\"}}}")

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
