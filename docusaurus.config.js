module.exports = {
  title: 'Brent Ryan',
  tagline: 'The most interesting content you\'ll ever find on the web',
  url: 'https://brentryan.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'brentryan', // Usually your GitHub org/user name.
  projectName: 'brentryan.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'BrentRyan.com Logo',
        src: 'img/logo.png',
      },
      links: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/brentryan/brentryan.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/tweetbrentryan',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/brentryan',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/brentryan',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} brentryan.com, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/brentryan/brentryan.github.io/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {},
      },
    ],
  ],
};
