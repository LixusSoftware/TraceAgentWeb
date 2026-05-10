// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/installation',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/architecture',
      ],
    },
    {
      type: 'category',
      label: 'Instrumentation',
      items: [
        'instrumentation/sdk',
        'instrumentation/langchain',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/environment-variables',
        'configuration/docker',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      link: {
        type: 'doc',
        id: 'examples/index',
      },
      items: [
        'examples/sample-agent',
        'examples/langchain-agent',
        'examples/lm-studio-agent',
        'examples/planner-agent',
        'examples/debugger-demo',
        'examples/rich-demo',
      ],
    },
    'faq',
    'changelog',
  ],
};

export default sidebars;
