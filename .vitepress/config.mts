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
      { text: '社区介绍', link: '/docs/idea/introduce' },
      { text: 'Medium 写作指南', link: '/docs/medium/introduce', activeMatch: '/docs/medium/' },
      {
        text: '港卡外卡港美股',
        link: '/docs/finance/stock',
        activeMatch: '/docs/finance/',
      },
      { text: '海外电话卡', link: '/docs/sims/introduce', activeMatch: '/docs/sims/' },
      { text: '👬 加入社区', link: '/docs/about' },
    ],

    sidebar: {
      '/docs/': getHomeSidebar(),
      '/docs/idea/': getHomeSidebar(),
      '/docs/medium/': getMediumSidebar(),
      '/docs/finance/': getFinanceSidebar(),
      '/docs/sims/': getSimsSidebar(),
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
      text: '社区介绍',
      items: [{ text: '什么是 Build in Public', link: '/docs/idea/introduce' }],
    },
    ...getMediumSidebar(),
    ...getFinanceSidebar(),
    ...getSimsSidebar(),
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

function getFinanceSidebar() {
  return [
    {
      text: '港美股开户',
      items: [{ text: '如何开港股美股账户', link: '/docs/finance/stock' }],
    },
    {
      text: '香港卡开户',
      items: [
        { text: '开户准备事项', link: '/docs/finance/bank-prepare' },
        { text: '香港开户最佳实践', link: '/docs/finance/best-practice' },
      ],
    },
    // {
    //   text: '海外卡开户',
    //   items: [{ text: '教程概要', link: '/' }],
    // },
  ];
}

function getSimsSidebar() {
  return [
    {
      text: '海外电话卡',
      items: [{ text: '教程概要', link: '/docs/sims/introduce' }],
    },
  ];
}
