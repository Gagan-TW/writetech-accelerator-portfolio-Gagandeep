// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Gagandeep's Technical Writing Portfolio",
  tagline: 'WriteTech Accelerator projects & final deliverables',
  favicon: 'img/favicon.ico',
  future: { v4: true },

  url: 'http://localhost:3000',
  baseUrl: '/',

  organizationName: 'your-github-username',
  projectName: 'writetech-accelerator-portfolio-Gagandeep',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },
  themes: ['docusaurus-theme-openapi-docs'],

  /* ─── 1) classic preset ─── */
  presets: [
    [
     "classic",
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          docItemComponent: "@theme/ApiItem",
        },
    
        theme: { customCss: "./src/css/custom.css", },
         
      } 
    ],
  ],

  /* ─── 2) OpenAPI plugin ─── */
 plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'chimoney',
        docsPluginId: 'classic',
        config: {
          chimoney: {
            // 👇 point to your spec (already correct)
            specPath: 'docs/api-documentation/reference/chimoney/chimoney-spec.yaml',
            // 👇 generate into the chimoney folder
            outputDir: 'docs/api-documentation/reference/chimoney',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],
  ],


  /* ─── 3) theme & navbar ─── */
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Portfolio',
        logo: { alt: 'Site Logo', src: 'img/logo.svg' },
        items: [
          { type: 'docSidebar', sidebarId: 'profileSidebar', position: 'left', label: 'Welcome' },
          { type: 'docSidebar', sidebarId: 'toolingSidebar', position: 'left', label: 'Doc Tooling' },
          { type: 'docSidebar', sidebarId: 'apiSidebar',      position: 'left', label: 'Chimoney API' },
          { href: 'https://github.com/Gagan-TW/writetech-accelerator-portfolio-Gagandeep.git', label: 'GitHub', position: 'right' },
        ],
      },
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};

export default config;
