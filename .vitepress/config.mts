import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: 'Build in Public 增长手册',
  description: 'Build yourself in public. Build your product in public.',
  themeConfig: {
    logo: '',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '加入社区', link: '/docs/about' },
    ],
    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '什么是 Build in Public', link: '/docs/idea/introduce' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/leviding/build-in-public' }],
  },
  head: [
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-icon-180x180.png' },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/assets/favicons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/assets/favicons/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/assets/favicons/manifest.json' }],
    [
      'link',
      { rel: 'mask-icon', href: '/assets/favicons/apple-icon.png', color: '#3a0839' },
    ],
    ['link', { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3a0839' }],
    ['meta', { name: 'msapplication-config', content: '/assets/favicons/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
});
