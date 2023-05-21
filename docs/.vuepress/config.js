import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig ({
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        sidebar: [
              // SidebarItem
            {
              text: '快速开始',
              children: ['/quickstart/', '/quickstart/plugins.md','/quickstart/pythonins.md', '/quickstart/install.md'],
                },
              ],
      },
      '/hant': {
        selectLanguageName: '繁體中文',
        sidebar: [
          // SidebarItem
          {
            text: '快速開始',
            children: ['/hant/quickstart/', '/hant/quickstart/plugins.md','/hant/quickstart/pythonins.md', '/hant/quickstart/install.md'],
              },
            ],
      },
      '/us': {
        selectLanguageName: 'English(US)',
        sidebar: [
          // SidebarItem
          {
            text: 'Quick Start',
            children: ['/us/quickstart/', '/us/quickstart/plugins.md','/us/quickstart/pythonins.md', '/us/quickstart/install.md'],
              },
            ],
      },
    }
}),
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'QQ群管机器人',
      description: '基于Mirai和Graia',
    },
    '/us': {
      lang: 'en-US',
      title: 'QQ Group Admin Bot',
      description: 'Based on Mirai and Graia',
    },
    '/hant': {
      lang: 'zh-TW',
      title: 'QQ群管機器人',
      description: '基於Mirai和Graia',
    },

}
});