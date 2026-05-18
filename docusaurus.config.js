// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TraceAgent',
  tagline: 'Observability & tracing for AI agents',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://traceagent.vercel.app',
  baseUrl: '/',

  organizationName: 'LixusSoftware',
  projectName: 'TraceAgentWeb',

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: true,
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        searchBarShortcutHint: true,
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/LixusSoftware/TraceAgentWeb/tree/main/',
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/LixusSoftware/TraceAgentWeb/tree/main/',
          blogTitle: 'TraceAgent Blog',
          blogDescription: 'Updates, tutorials, and deep dives from the TraceAgent team.',
          postsPerPage: 10,
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 'ALL',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      metadata: [
        {name: 'description', content: 'Complete observability and tracing platform for AI agents. Capture tool calls, file operations, and decision paths with first-class LangChain support.'},
        {name: 'keywords', content: 'AI agent tracing, observability, LangChain, agent monitoring, tool tracing, LLM debugging, self-hosted, open source'},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'TraceAgent'},
        {property: 'og:title', content: 'TraceAgent — AI Agent Observability'},
        {property: 'og:description', content: 'Full visibility into what your autonomous agents are actually doing — every tool call, file operation, and decision path.'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'TraceAgent — AI Agent Observability'},
        {name: 'twitter:description', content: 'Full visibility into what your autonomous agents are actually doing.'},
      ],
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      announcementBar: {
        id: 'beta_notice',
        content: 'TraceAgent is in active development. <a href="/docs/getting-started/introduction">Get started</a> or <a href="https://github.com/LixusSoftware/TraceAgent">star us on GitHub</a>!',
        backgroundColor: '#2b3a5c',
        textColor: '#ffffff',
        isCloseable: true,
      },
      navbar: {
        title: 'TraceAgent',
        logo: {
          alt: 'TraceAgent Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo.png',
          style: { height: '62px' },
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/instrumentation/sdk',
            label: 'SDK',
            position: 'left',
          },
          {
            to: '/docs/examples/',
            label: 'Examples',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://github.com/LixusSoftware/TraceAgentWeb',
            'aria-label': 'GitHub repository',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Getting Started',
            items: [
              {label: 'Introduction', to: '/docs/getting-started/introduction'},
              {label: 'Installation', to: '/docs/getting-started/installation'},
              {label: 'Quick Start', to: '/docs/getting-started/quick-start'},
            ],
          },
          {
            title: 'Packages',
            items: [
              {label: 'SDK', to: '/docs/instrumentation/sdk'},
              {label: 'LangChain', to: '/docs/instrumentation/langchain'},
              {label: 'Docker', to: '/docs/configuration/docker'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Blog', to: '/blog'},
              {label: 'GitHub', href: 'https://github.com/LixusSoftware/TraceAgentWeb'},
              {label: 'Issues', href: 'https://github.com/LixusSoftware/TraceAgentWeb/issues'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'FAQ', to: '/docs/faq'},
              {label: 'Examples', to: '/docs/examples/'},
              {label: 'License (MIT)', href: 'https://github.com/LixusSoftware/TraceAgent/blob/main/LICENSE'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lixus Software. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'bash', 'json', 'yaml', 'docker', 'toml'],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
  
  // Analytics placeholder (uncomment and configure when ready)
  /*
  scripts: [
    {
      src: 'https://plausible.io/js/script.js',
      defer: true,
      'data-domain': 'traceagent.dev',
    },
  ],
  */
};

export default config;
