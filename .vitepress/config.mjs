import { defineConfig } from "vitepress"
import { set_sidebar } from "../utils/auto_sidebar.js" // 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web-Note",
  base: "/vitepress-note",
  description: "前端学习笔记",
  head: [["link", { rel: "icon", href: "run.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "run.svg",
    nav: [
      {
        text: "前端",
        collapsed: false,
        items: [
          {
            text: "JavaScript",
            link: "/front-end/js/Javascript基础/Promise",
          },
          { text: "Vue", link: "/front-end/vue/vue入门" },
        ],
      },
      {
        text: "Home",
        link: "/",
      },
    ],

    sidebar: {
      "/front-end/js": [{ items: set_sidebar("/front-end/js") }],
      "/front-end/vue": [{ items: set_sidebar("/front-end/vue") }],
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLable: "搜索文档",
          },
          modal: {
            onRelutsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Evan You",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/doufu101?tab=repositories" },
    ],
  },
})
