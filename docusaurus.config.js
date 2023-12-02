// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trinity Validator',
  tagline: 'Professional Sentinel dVPN Validation service',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://trinityvalidator.com',
  //url: 'https://trinityprivacy.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/trinity-validator-website/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'trinityprivacy', // Usually your GitHub org/user name.
  projectName: 'trinity-validator-website', // Usually your repo name.

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
        title: 'Trinity Validator',
        logo: {
          alt: 'Trinity Validator Logo',
          src: 'img/trinity.svg',
        },
        items: [
          {
            href: '/docs/sentinelguides/resources',
            sidebarid: 'resourcesSidebar',
            position: 'left',
            label: 'Learn Sentinel',
          },
          {
            label: 'Guides',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                href: '/docs/sentinelguides/node',
                label: 'Run a Node',
              },
              {
                href: '/docs/sentinelguides/validator',
                label: 'Run a Validator',
              },
              {
                href: '/docs/sentinelguides/monitoring',
                label: 'Monitoring',
              },
            ],
          },
          {to: 'validator', label: 'Validator Stats', position: 'left'},
          {
            label: 'Find us',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                href: 'https://t.me/trinityvalidatorgroup',
                label: 'Telegram',
              },
              {
                href: 'https://github.com/trinityprivacy',
                label: 'GitHub',
              },
              {
                href: 'https://x.com/trinityvalidate',
                label: 'X',
              },
              {
                href: 'https://keybase.io/trinityvalidator',
                label: 'Keybase',
              },
            ],
          },
          {
            label: 'Sentinel Docs',
            position: 'right',
            href: 'https://docs.sentinel.co'
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
            title: 'Docs',
            items: [
              {
                label: 'Learn Sentinel',
                to: '/docs/sentinelguides/resources',
              },
              {
                label: 'Run a Node',
                to: '/docs/sentinelguides/node',
              },
              {
                label: 'Run a Validator',
                to: '/docs/sentinelguides/validator',
              },
              {
                label: 'Monitoring',
                to: '/docs/sentinelguides/monitoring',
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
                label: 'Telegram',
                href: 'https://t.me/trinityvalidatorgroup',
              },
              {
                label: 'X',
                href: 'https://x.com/trinityvalidate',
              },
              {
                label: 'GiHub',
                href: 'https://github.com/trinityprivacy',
              },
              {
                label: 'KeyBase',
                href: 'https://keybase.io/trinityvalidator',
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
        copyright: `Copyright © ${new Date().getFullYear()} Trinity Privacy.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'bash',
          'jsx',
          'yaml',
          'python',
          'markdown'
        ],
      },
    }),
};

module.exports = config;
