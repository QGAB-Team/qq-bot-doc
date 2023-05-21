export const themeData = JSON.parse("{\"locales\":{\"/\":{\"selectLanguageName\":\"简体中文\",\"sidebar\":[{\"text\":\"快速开始\",\"children\":[\"/quickstart/\",\"/quickstart/plugins.md\",\"/quickstart/pythonins.md\",\"/quickstart/install.md\"]}]},\"/hant\":{\"selectLanguageName\":\"繁體中文\",\"sidebar\":[{\"text\":\"快速開始\",\"children\":[\"/hant/quickstart/\",\"/hant/quickstart/plugins.md\",\"/hant/quickstart/pythonins.md\",\"/hant/quickstart/install.md\"]}]},\"/us\":{\"selectLanguageName\":\"English(US)\",\"sidebar\":[{\"text\":\"Quick Start\",\"children\":[\"/us/quickstart/\",\"/us/quickstart/plugins.md\",\"/us/quickstart/pythonins.md\",\"/us/quickstart/install.md\"]}]}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
