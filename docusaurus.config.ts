import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KyWiki',
  tagline: '控元科技产品文档',
  favicon: 'img/favicon.ico',

  url: 'https://akariayumu.github.io',
  baseUrl: '/',
  organizationName: 'Akariayumu',
  projectName: 'test_wiki_docusaurus',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
    localeConfigs: {
      'zh-CN': {label: '简体中文', direction: 'ltr', path: '/'},
      en: {label: 'English', direction: 'ltr', path: '/en'},
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

  scripts: [
    { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', async: false },
  ],

  themeConfig: {
    image: 'img/c1902-front.jpg',
    navbar: {
      title: 'KyWiki',
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {
          type: 'dropdown',
          label: 'C1902',
          position: 'left',
          items: [
            {to: '/c1902', label: 'Overview'},
            {to: '/flashing-guide', label: 'Flashing Guide'},
          ],
        },
        {
          type: 'dropdown',
          label: 'C1901',
          position: 'left',
          items: [
            {to: '/c1901', label: 'Overview'},
            {to: '/c1901-flashing-guide', label: 'Flashing Guide'},
          ],
        },
        {
          type: 'dropdown',
          label: 'C2401',
          position: 'left',
          items: [
            {to: '/c2401-mini-kit', label: 'Mini Kit'},
            {to: '/c2401-system-flashing', label: 'System Flashing'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Orin',
          position: 'left',
          items: [
            {to: '/orin-nano-introduction', label: 'Nano Intro'},
            {to: '/orin-nx-introduction', label: 'NX Intro'},
            {to: '/orin-nano-guide', label: 'Nano Guide'},
          ],
        },
        {
          type: 'dropdown',
          label: 'GPIO',
          position: 'left',
          items: [
            {to: '/gpio-jetpack6', label: 'JetPack 6'},
            {to: '/gpio-jetpack5', label: 'JetPack 5'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Peripherals',
          position: 'left',
          items: [
            {to: '/network-card-driver', label: 'Network Driver'},
            {to: '/usb-configuration', label: 'USB Config'},
            {to: '/gpio-control', label: 'GPIO Control'},
            {to: '/other-peripherals', label: 'Others'},
          ],
        },
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://github.com/Akariayumu/test_wiki', label: 'GitHub', position: 'right'},
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
