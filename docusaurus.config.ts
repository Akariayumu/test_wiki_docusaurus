import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KyWiki',
  tagline: '控元科技产品文档',
  favicon: 'img/favicon.ico',

  url: 'https://akariayumu.github.io',
  baseUrl: '/test_wiki_docusaurus/',
  organizationName: 'Akariayumu',
  projectName: 'test_wiki_docusaurus',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
    localeConfigs: {
      'zh-CN': { label: '简体中文', direction: 'ltr', path: '/' },
      en: { label: 'English', direction: 'ltr', path: '/en' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/c1902-front.jpg',
    navbar: {
      title: 'KyWiki',
      items: [
        { to: '/', label: '首页', position: 'left' },
        {
          type: 'dropdown',
          label: 'C1902',
          position: 'left',
          items: [
            { to: '/c1902', label: '产品介绍' },
            { to: '/flashing-guide', label: '刷机教程' },
          ],
        },
        {
          type: 'dropdown',
          label: 'C1901',
          position: 'left',
          items: [
            { to: '/c1901', label: '产品介绍' },
            { to: '/c1901-flashing-guide', label: '刷机教程' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Orin系列',
          position: 'left',
          items: [
            { to: '/orin-nano-introduction', label: 'Nano说明' },
            { to: '/orin-nx-introduction', label: 'NX说明' },
            { to: '/orin-nano-guide', label: 'Nano指南' },
          ],
        },
        {
          type: 'dropdown',
          label: 'GPIO教程',
          position: 'left',
          items: [
            { to: '/gpio-jetpack6', label: 'JetPack6' },
            { to: '/gpio-jetpack5', label: 'JetPack5' },
          ],
        },
        {
          type: 'dropdown',
          label: '外设与配置',
          position: 'left',
          items: [
            { to: '/network-card-driver', label: '网卡驱动' },
            { to: '/usb-configuration', label: 'USB配置' },
            { to: '/gpio-control', label: 'GPIO控制' },
            { to: '/other-peripherals', label: '其他外设' },
          ],
        },
        { type: 'localeDropdown', position: 'right' },
        { href: 'https://github.com/Akariayumu/test_wiki', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} KyWiki. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
