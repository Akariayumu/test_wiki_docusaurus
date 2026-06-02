import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'C1902 载板',
      items: ['c1902', 'flashing-guide'],
    },
    {
      type: 'category',
      label: 'C1901 载板',
      items: ['c1901', 'c1901-flashing-guide'],
    },
    {
      type: 'category',
      label: 'C2401 迷你套件',
      items: ['c2401-mini-kit', 'c2401-system-flashing'],
    },
    {
      type: 'category',
      label: 'Orin系列',
      items: ['orin-nano-introduction', 'orin-nx-introduction', 'orin-nano-guide'],
    },
    {
      type: 'category',
      label: 'GPIO教程',
      items: ['gpio-jetpack6', 'gpio-jetpack5'],
    },
    {
      type: 'category',
      label: '外设与配置',
      items: ['network-card-driver', 'usb-configuration', 'gpio-control', 'other-peripherals'],
    },
  ],
};

export default sidebars;
