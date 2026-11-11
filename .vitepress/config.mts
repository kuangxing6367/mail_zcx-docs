import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ZC Mail Service',
  description: 'ZC Mail Service 文档。默认同步发信，可选队列。原生 PHP，零运行时依赖。',
  lang: 'zh-CN',

  // 仓库根的 README / LICENSE 不是站点页面
  srcExclude: ['README.md', 'LICENSE'],

  // 自定义域名 mail.zgric.top 挂在根路径；
  // 若改用 GitHub Pages 默认地址（/mail_zcx-docs/），把这里改成 '/mail_zcx-docs/'
  base: '/',

  // 根目录的 API.md 对外路由为 /api
  rewrites: {
    'API.md': 'api.md',
  },

  // 文档里大量出现 {{变量}} 示例，需关闭 Vue 在代码块中的插值
  markdown: {
    config(md) {
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = (...args) =>
        fence(...args).replace('<pre>', '<pre v-pre>')

      const codeInline = md.renderer.rules.code_inline!
      md.renderer.rules.code_inline = (...args) =>
        codeInline(...args).replace('<code', '<code v-pre')
    },
  },

  themeConfig: {
    nav: [
      { text: '快速开始', link: '/guide' },
      { text: '宝塔', link: '/deploy-baota' },
      { text: '虚拟主机', link: '/deploy-shared-hosting' },
      { text: 'SMTP 入站', link: '/smtp-in' },
      { text: 'API', link: '/api' },
      { text: '插件', link: '/plugins' },
      { text: '协议', link: '/contract' },
      { text: '设计', link: '/architecture' },
      { text: 'GitHub', link: 'https://github.com/kuangxing6367/mail_zcx' },
    ],

    sidebar: [
      {
        text: '部署',
        items: [
          { text: '快速开始', link: '/guide' },
          { text: '宝塔面板部署', link: '/deploy-baota' },
          { text: '虚拟主机部署（无 SSH）', link: '/deploy-shared-hosting' },
          { text: 'SMTP 入站（25 端口）', link: '/smtp-in' },
        ],
      },
      {
        text: '扩展',
        items: [
          { text: '插件开发', link: '/plugins' },
        ],
      },
      {
        text: '参考',
        items: [
          { text: 'API 手册', link: '/api' },
          { text: '协议与约定', link: '/contract' },
          { text: '设计说明', link: '/architecture' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kuangxing6367/mail_zcx' },
    ],

    // 源站是本仓库，不是主仓库的 docs/ 快照
    editLink: {
      pattern: 'https://github.com/kuangxing6367/mail_zcx-docs/edit/main/:path',
      text: '改这一页',
    },

    footer: {
      message: '只写代码中已实现的行为。文档与实现冲突时，以实现为准。',
      copyright: 'WTFPL v2 © zc team',
    },

    outline: { level: [2, 3], label: '目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '主题',
    returnToTopLabel: '回到顶部',
    lastUpdated: { text: '最后更新' },
  },
})
