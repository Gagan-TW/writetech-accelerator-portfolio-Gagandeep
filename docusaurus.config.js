// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Gagandeep's Technical Writing Portfolio",
  tagline:
    'My portfolio for the WriteTech Accelerator Program, showcasing projects from each module and final deliverables',
  favicon: 'img/favicon.ico',

  // Future flags
  future: { v4: true },

  // Site URL (update after you deploy, e.g. to Vercel)
  url: 'http://localhost:3000',
  baseUrl: '/',

  // GitHub repo info (update to your real repo)
  organizationName: 'your-github-username',
  projectName: 'writetech-accelerator-portfolio-Gagandeep',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          path: 'docs',
          routeBasePath: 'docs',
          // IMPORTANT: use require.resolve so Docusaurus can load the file
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove editUrl for now (or point to your repo if you want Edit links)
          // editUrl: 'https://github.com/your-github-username/writetech-accelerator-portfolio-Gagandeep/edit/main/',
        },
        blog: false, // disable if you don't need the blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
plugins: [
  [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'api',               // internal ID – leave as-is
      docsPluginId: 'classic', // connects to the classic preset
      config: {
        chimoney: {
          /* ← points to your renamed spec */
          specPath: 'docs/api-documentation/chimoney-spec.yaml',

          /* ← where the plugin will write the generated .md files */
          outputDir: 'docs/api-documentation/reference',

          sidebarOptions: {
            groupPathsBy: 'tag', // Wallet, Payments, Transactions
          },
        },
      },
    },
  ],
],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Portfolio',
        logo: { alt: 'Site Logo', src: 'img/logo.svg' },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'profileSidebar', // maps to your sidebars.js
            position: 'left',
            label: 'Welcome',
          },
          {
            type: 'docSidebar',
            sidebarId: 'toolingSidebar', // maps to your sidebars.js
            position: 'left',
            label: 'Project',
          },
            {
        type:         'docSidebar',
        sidebarId:    'apiSidebar',   // ← matches sidebar we just created
        PluginId:  'api',          // ← MUST match the id in your openapi-docs plugin
        position:     'left',
        label:        'API',
      },
          {
            href: 'https://github.com/Gagan-TW/writetech-accelerator-portfolio-Gagandeep.git',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [{ label: 'Intro', to: '/docs/intro' }],
          },
          {
            title: 'Community',
            items: [
    
              { label: 'WriteTech', href: 'https://writetechhub.org/' },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/your-github-username/writetech-accelerator-portfolio-Gagandeep',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gagandeep Kaur. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

