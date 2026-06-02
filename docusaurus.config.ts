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
        { to: '/c1902', label: 'C1902', position: 'left' },
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
