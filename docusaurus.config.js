// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || '';

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

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap',
        media: 'print',
        onload: "this.media='all'",
      },
    },
  ],


  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: true,
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        searchBarShortcutHint: true,
      },
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
          // Give the pages that matter most to new visitors a higher priority.
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.map((item) => {
              const path = new URL(item.url).pathname;
              let priority = 0.5;
              if (path === '/') priority = 1.0;
              else if (path.startsWith('/docs/getting-started/')) priority = 0.9;
              else if (path.startsWith('/docs/instrumentation/')) priority = 0.9;
              else if (path.startsWith('/docs/reference/') || path.startsWith('/docs/examples/')) priority = 0.7;
              else if (path.startsWith('/docs/')) priority = 0.6;
              return {...item, priority};
            });
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      metadata: [
        {name: 'description', content: 'Complete observability and tracing platform for AI agents. Capture tool calls, file operations, and decision paths with first-class LangChain and Pydantic AI support, plus OpenTelemetry ingestion.'},
        {name: 'keywords', content: 'AI agent tracing, observability, LangChain, Pydantic AI, OpenTelemetry, agent monitoring, tool tracing, LLM debugging, self-hosted, open source'},
        {name: 'google-site-verification', content: '4SPk9TeUsiIRBXj8RSDq_O75aIwPBpYUdvkZn_b__NI'},
        {name: 'msvalidate.01', content: 'F93562B1FE228BD19FCC2E9BCBFFF7D8'},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'TraceAgent'},
        {property: 'og:locale', content: 'en_US'},
        // og:title, og:description, og:image and the twitter:* equivalents are set per page by
        // Docusaurus (from each page's title, description and `image`), so they are not repeated here.
        {name: 'twitter:card', content: 'summary_large_image'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'og:image:alt', content: 'TraceAgent — observability & tracing for AI agents, with LangChain, Pydantic AI and OpenTelemetry'},
        {name: 'twitter:image:alt', content: 'TraceAgent — observability & tracing for AI agents, with LangChain, Pydantic AI and OpenTelemetry'},
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
        id: 'pydantic_ai_otel_notice',
        content: 'New: Pydantic AI and OpenTelemetry support. <a href="/docs/instrumentation/hooks-vs-opentelemetry">Choose your integration</a> or <a href="https://github.com/LixusSoftware/TraceAgent">star us on GitHub</a>!',
        backgroundColor: '#2b3a5c',
        textColor: '#ffffff',
        isCloseable: true,
      },
      navbar: {
        title: 'TraceAgent',
        logo: {
          alt: 'TraceAgent Logo',
          src: 'img/logo.webp',
          srcDark: 'img/logo.webp',
          width: 136,
          height: 156,
          style: { height: '62px', width: 'auto' },
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
            type: 'dropdown',
            label: 'Integrations',
            position: 'left',
            to: '/docs/instrumentation/hooks-vs-opentelemetry',
            items: [
              {label: 'LangChain', to: '/docs/instrumentation/langchain'},
              {label: 'Pydantic AI', to: '/docs/instrumentation/pydantic-ai'},
              {label: 'OpenTelemetry', to: '/docs/instrumentation/opentelemetry'},
              {label: 'Hooks or OpenTelemetry?', to: '/docs/instrumentation/hooks-vs-opentelemetry'},
            ],
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
            href: 'https://github.com/LixusSoftware/TraceAgent',
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
              {label: 'Pydantic AI', to: '/docs/instrumentation/pydantic-ai'},
              {label: 'OpenTelemetry', to: '/docs/instrumentation/opentelemetry'},
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
      'data-domain': 'traceagent.vercel.app',
    },
  ],
  */

  /*
  // Google Analytics 4: configure by setting environment variable `GA_MEASUREMENT_ID` in Vercel.
  */
  scripts: GA_MEASUREMENT_ID
    ? [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
          async: true,
        },
        {
          // Inline initialization
          content: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}');`,
        },
      ]
    : [],
};

export default config;
