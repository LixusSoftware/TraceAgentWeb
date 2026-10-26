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
        'core-concepts/runs',
      ],
    },
    {
      type: 'category',
      label: 'Instrumentation',
      items: [
        'instrumentation/sdk',
        'instrumentation/langchain',
        'instrumentation/pydantic-ai',
        'instrumentation/opentelemetry',
        'instrumentation/hooks-vs-opentelemetry',
        'instrumentation/privacy',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/environment-variables',
        'configuration/docker',
        'configuration/production',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/api',
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
        'examples/pydantic-ai-hooks',
        'examples/pydantic-ai-otel',
        'examples/local-model-agent',
        'examples/planner-agent',
        'examples/debugger-demo',
        'examples/rich-demo',
      ],
    },
    'troubleshooting',
    'faq',
    'changelog',
  ],
};

export default sidebars;
