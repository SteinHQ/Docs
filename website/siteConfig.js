// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.

const siteConfig = {
  title: "Docs", // Title for your website.
  tagline: "Official documentation for the Stein suite",
  url: "https://docs.steinhq.com", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "stein-docs",
  organizationName: "shivensinha4",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "introduction", label: "Docs" },
    // { blog: true, label: "Blog" },
    { href: "https://github.com/steinhq/", label: "GitHub" }
  ],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: "img/Stein Docs.svg",
  footerIcon: "img/Stein.svg",
  favicon: "img/favicon.png",
  docsUrl: "",

  /* Colors for website */
  colors: {
    primaryColor: "#03857C",
    secondaryColor: "#00afa3"
  },

  /*algolia: {
    apiKey: '',
    indexName: 'my-index-name',
    algoliaOptions: {} // Optional, if provided by Algolia
  },*/

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Stein`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },

  markdownPlugins: [
    // Highlight admonitions.
    require("remarkable-admonitions")({ icon: "svg-inline" })
  ],

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "",
  twitterImage: ""

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
