// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trinity Stake',
  tagline: 'Professional Sentinel dVPN Validation service',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://trinitystake.io',
  //url: 'https://trinitystake.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/trinity-stake-website/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'trinitystake', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/trinity-social-card.png',
      navbar: {
        title: 'Trinity Stake',
        logo: {
          alt: 'Trinity Stake Logo',
          src: 'img/trinity.svg',
        },
        items: [
          {
            to: 'https://docs.sentinel.co/get-started',
            // sidebarid: 'resourcesSidebar',
            position: 'left',
            label: 'Learn Sentinel',
          },
          {
            label: 'Guides',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                to: 'https://docs.sentinel.co/dvpn-node-setup',
                label: 'Run a dVPN Node',
              },
              {
                to: 'https://docs.sentinel.co/full-node-setup',
                label: 'Run a Full Node & Validate',
              },
              {
                to: 'https://docs.sentinel.co/node-monitoring',
                label: 'Node Monitoring',
              },
            ],
          },
          {
            label: 'Validator Status',
            to: 'https://explorer.busurnode.com/sentinel/staking/sentvaloper1mcwvu4vpvfcnxduzpelehmgga282wtc0xux7se',
            position: 'left'
          },
          {
            label: 'Find us',
            to: 'https://linktr.ee/trinitystake',
            position: 'right',
          },
          {
            label: 'Sentinel',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                href: 'https://sentinel.co',
                label: 'Website',
              },
              {
                href: 'https://docs.sentinel.co',
                label: 'Docs',
              },
              {
                href: 'https://stats.sentinel.co',
                label: 'Stats',
              },
              {
                label: 'Node Map',
                href: 'https://map.sentinel.co',
              },
            ],
          },
          {
            href: 'https://github.com/trinitystake',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
        ],
      },

      // this block enables dark mode only
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },


      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'Run a dVPN Node',
                to: 'https://docs.sentinel.co/dvpn-node-setup',
              },
              {
                label: 'Run a Full Node & Validate',
                to: 'https://docs.sentinel.co/full-node-setup',
              },
              {
                label: 'Node Monitoring',
                to: 'https://docs.sentinel.co/node-monitoring',
              },
              /*
              {
                label: 'Blog',
                to: '/blog',
              },
              */
            ],
          },
          {
            title: 'Get in Touch',
            items: [
              {
                label: 'X',
                href: 'https://x.com/trinitystake',
              },
              {
                label: 'GiHub',
                href: 'https://github.com/trinitystake',
              },
              {
                label: 'KeyBase',
                href: 'https://keybase.io/trinitystake',
              },
            ],
          },
          {
            title: 'Sentinel dVPN',
            items: [
              {
                label: 'Official Website',
                href: 'https://sentinel.co',
              },
              {
                label: 'Documentation',
                href: 'https://docs.sentinel.co',
              },
              {
                label: 'Stats',
                href: 'https://stats.sentinel.co',
              },
              {
                label: 'Node Map',
                href: 'https://map.sentinel.co',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - Trinity Stake`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'bash',
          'jsx',
          'yaml',
          'python',
          'markdown',
          'toml'
        ],
      },
    }),
};

module.exports = config;
