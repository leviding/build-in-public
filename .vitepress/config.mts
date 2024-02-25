import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: 'Build in Public 增长手册',
  description: 'Build yourself in public. Build your product in public.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.png',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '港卡外卡港美股开户',
        link: '/docs/finance/introduce',
        activeMatch: '/docs/finance/',
      },
      { text: 'Medium 写作指南', link: '/docs/medium/introduce', activeMatch: '/docs/finance/' },
      { text: '👬 加入社区', link: '/docs/about' },
    ],

    sidebar: {
      '/docs/': getHomeSidebar(),
      '/docs/idea/': getHomeSidebar(),
      '/docs/finance/': getFinanceSidebar(),
      '/docs/medium/': getMediumSidebar(),
    },

    editLink: {
      pattern: 'https://github.com/leviding/build-in-public/edit/main/:path',
      text: '在 GitHub 上编辑此页面',
    },

    // footer: {
    //   message: '未经授权，禁止转载',
    //   copyright: `版权所有 © 2024-${new Date().getFullYear()} LeviDing`
    // },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    outline: {
      label: '目录',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/leviding/build-in-public' }],

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
  head: [
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-icon-180x180.png' },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/favicons/manifest.json' }],
    ['link', { rel: 'mask-icon', href: '/favicons/apple-icon.png', color: '#3a0839' }],
    ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3a0839' }],
    ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
});

function getHomeSidebar() {
  return [
    {
      text: '介绍',
      items: [{ text: '什么是 Build in Public', link: '/docs/idea/introduce' }],
    },
    ...getFinanceSidebar(),
    ...getMediumSidebar(),
  ];
}

function getFinanceSidebar() {
  return [
    {
      text: '港卡外卡港美股开户',
      items: [
        { text: '为什么要开户', link: '/docs/finance/introduce' },
        { text: '开户准备事项', link: '/docs/finance/prepare' },
      ],
    },
  ];
}

function getMediumSidebar() {
  return [
    {
      text: 'Medium 写作指南',
      items: [
        { text: '为什么要写 Medium', link: '/docs/medium/introduce' },
        {
          text: '如何写 Medium 赚美刀💰',
          link: '/docs/medium/prepare',
        },
      ],
    },
  ];
}

function getCommonSidebar() {
  return [
    {
      text: '手册导航',
      items: [
        { text: '什么是 Build in Public', link: '/docs/idea/introduce' },
        { text: '港卡外卡港美股开户', link: '/docs/finance/introduce' },
        {
          text: 'Medium 写作指南',
          link: '/docs/medium/introduce',
        },
      ],
    },
  ];
}
