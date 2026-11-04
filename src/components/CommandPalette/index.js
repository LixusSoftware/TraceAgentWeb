import React, {useState, useEffect, useCallback, useRef} from 'react';
import {useHistory} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import { 
  Book, 
  Download, 
  Zap, 
  Layers, 
  Search, 
  Package, 
  Link as LinkIcon, 
  Settings, 
  Box, 
  Lightbulb, 
  FlaskConical, 
  ClipboardList, 
  Bug, 
  Target, 
  HelpCircle, 
  FileText, 
  Newspaper
} from 'lucide-react';

const getPages = () => [
  {label: translate({id: 'palette.page.introduction', message: 'Introduction'}), path: '/docs/getting-started/introduction', section: translate({id: 'palette.section.gettingstarted', message: 'Getting Started'}), icon: Book},
  {label: translate({id: 'palette.page.installation', message: 'Installation'}), path: '/docs/getting-started/installation', section: translate({id: 'palette.section.gettingstarted', message: 'Getting Started'}), icon: Download},
  {label: translate({id: 'palette.page.quickstart', message: 'Quick Start'}), path: '/docs/getting-started/quick-start', section: translate({id: 'palette.section.gettingstarted', message: 'Getting Started'}), icon: Zap},
  {label: translate({id: 'palette.page.architecture', message: 'Architecture'}), path: '/docs/core-concepts/architecture', section: translate({id: 'palette.section.coreconcepts', message: 'Core Concepts'}), icon: Layers},
  {label: translate({id: 'palette.page.sdkreference', message: 'SDK Reference'}), path: '/docs/instrumentation/sdk', section: translate({id: 'palette.section.instrumentation', message: 'Instrumentation'}), icon: Package},
  {label: translate({id: 'palette.page.langchainintegration', message: 'LangChain Integration'}), path: '/docs/instrumentation/langchain', section: translate({id: 'palette.section.instrumentation', message: 'Instrumentation'}), icon: LinkIcon},
  {label: translate({id: 'palette.page.pydanticaiintegration', message: 'Pydantic AI Integration'}), path: '/docs/instrumentation/pydantic-ai', section: translate({id: 'palette.section.instrumentation', message: 'Instrumentation'}), icon: Package},
  {label: translate({id: 'palette.page.opentelemetryingestion', message: 'OpenTelemetry Ingestion'}), path: '/docs/instrumentation/opentelemetry', section: translate({id: 'palette.section.instrumentation', message: 'Instrumentation'}), icon: Package},
  {label: translate({id: 'palette.page.hooksoropentelemetry', message: 'Hooks or OpenTelemetry?'}), path: '/docs/instrumentation/hooks-vs-opentelemetry', section: translate({id: 'palette.section.instrumentation', message: 'Instrumentation'}), icon: Package},
  {label: translate({id: 'palette.page.runsmetadataandsearch', message: 'Runs, Metadata and Search'}), path: '/docs/core-concepts/runs', section: translate({id: 'palette.section.coreconcepts', message: 'Core Concepts'}), icon: Layers},
  {label: translate({id: 'palette.page.privacyandredaction', message: 'Privacy and Redaction'}), path: '/docs/instrumentation/privacy', section: translate({id: 'palette.section.instrumentation', message: 'Instrumentation'}), icon: Package},
  {label: translate({id: 'palette.page.runninginproduction', message: 'Running in Production'}), path: '/docs/configuration/production', section: translate({id: 'palette.section.configuration', message: 'Configuration'}), icon: Settings},
  {label: translate({id: 'palette.page.apireference', message: 'API Reference'}), path: '/docs/reference/api', section: translate({id: 'palette.section.reference', message: 'Reference'}), icon: FileText},
  {label: translate({id: 'palette.page.environmentvariables', message: 'Environment Variables'}), path: '/docs/configuration/environment-variables', section: translate({id: 'palette.section.configuration', message: 'Configuration'}), icon: Settings},
  {label: translate({id: 'palette.page.dockerdeployment', message: 'Docker Deployment'}), path: '/docs/configuration/docker', section: translate({id: 'palette.section.configuration', message: 'Configuration'}), icon: Box},
  {label: translate({id: 'palette.page.examples', message: 'Examples'}), path: '/docs/examples/', section: translate({id: 'palette.section.examples', message: 'Examples'}), icon: Lightbulb},
  {label: translate({id: 'palette.page.sampleagent', message: 'Sample Agent'}), path: '/docs/examples/sample-agent', section: translate({id: 'palette.section.examples', message: 'Examples'}), icon: FlaskConical},
  {label: translate({id: 'palette.page.langchainagent', message: 'LangChain Agent'}), path: '/docs/examples/langchain-agent', section: translate({id: 'palette.section.examples', message: 'Examples'}), icon: LinkIcon},
  {label: translate({id: 'palette.page.pydanticaiquickstart', message: 'Pydantic AI Quickstart'}), path: '/docs/examples/pydantic-ai-hooks', section: translate({id: 'palette.section.examples', message: 'Examples'}), icon: FlaskConical},
  {label: translate({id: 'palette.page.pydanticaiviaopentelemetry', message: 'Pydantic AI via OpenTelemetry'}), path: '/docs/examples/pydantic-ai-otel', section: translate({id: 'palette.section.examples', message: 'Examples'}), icon: FlaskConical},
  {label: translate({id: 'palette.page.localmodelagent', message: 'Local Model Agent'}), path: '/docs/examples/local-model-agent', section: translate({id: 'palette.section.examples', message: 'Examples'}), icon: Box},
  {label: translate({id: 'palette.page.planneragent', message: 'Planner Agent'}), path: '/docs/examples/planner-agent', section: translate({id: 'palette.section.examples', message: 'Examples'}), icon: ClipboardList},
  {label: translate({id: 'palette.page.debuggerdemo', message: 'Debugger Demo'}), path: '/docs/examples/debugger-demo', section: translate({id: 'palette.section.examples', message: 'Examples'}), icon: Bug},
  {label: translate({id: 'palette.page.richdemo', message: 'Rich Demo'}), path: '/docs/examples/rich-demo', section: translate({id: 'palette.section.examples', message: 'Examples'}), icon: Target},
  {label: translate({id: 'palette.page.troubleshooting', message: 'Troubleshooting'}), path: '/docs/troubleshooting', section: translate({id: 'palette.section.help', message: 'Help'}), icon: Bug},
  {label: translate({id: 'palette.page.faq', message: 'FAQ'}), path: '/docs/faq', section: translate({id: 'palette.section.help', message: 'Help'}), icon: HelpCircle},
  {label: translate({id: 'palette.page.changelog', message: 'Changelog'}), path: '/docs/changelog', section: translate({id: 'palette.section.more', message: 'More'}), icon: FileText},
  {label: translate({id: 'palette.page.blog', message: 'Blog'}), path: '/blog', section: translate({id: 'palette.section.more', message: 'More'}), icon: Newspaper},
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const history = useHistory();
  const baseUrl = useBaseUrl('/');
  const PAGES = getPages();

  const filtered = query.length === 0
    ? PAGES
    : PAGES.filter(p =>
        p.label.toLowerCase().includes(query.toLowerCase()) ||
        p.section.toLowerCase().includes(query.toLowerCase())
      );

  const open = useCallback(() => {
    setIsOpen(true);
    setQuery('');
    setActiveIndex(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
  }, []);

  const navigate = useCallback((path) => {
    close();
    history.push(baseUrl.replace(/\/$/, '') + path);
  }, [close, history, baseUrl]);

  // Ctrl/Cmd + K shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? close() : open();
      }
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, open, close]);

  // Focus input on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      navigate(filtered[activeIndex].path);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="command-palette-overlay" onClick={close} role="dialog" aria-modal="true" aria-label={translate({id: 'palette.aria', message: 'Command Palette'})}>
      <div className="command-palette" onClick={e => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="command-palette-input"
          placeholder={translate({id: 'palette.placeholder', message: 'Search docs, navigate...'})}
          value={query}
          onChange={e => { setQuery(e.target.value); setActiveIndex(0); }}
          onKeyDown={handleKeyDown}
          aria-label={translate({id: 'palette.inputAria', message: 'Search input'})}
          role="combobox"
          aria-expanded="true"
          aria-controls="command-palette-list"
          aria-activedescendant={`cmd-item-${activeIndex}`}
        />
        <div className="command-palette-results" role="listbox" id="command-palette-list">
          {filtered.length === 0 ? (
            <div className="command-palette-empty">{translate({id: 'palette.empty', message: 'No results found'})}</div>
          ) : (
            filtered.map((page, idx) => (
              <div
                key={page.path}
                id={`cmd-item-${idx}`}
                role="option"
                aria-selected={idx === activeIndex}
                className={`command-palette-item ${idx === activeIndex ? 'command-palette-item--active' : ''}`}
                onClick={() => navigate(page.path)}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <span className="command-palette-item-icon">
                  <page.icon size={18} strokeWidth={2} />
                </span>
                <span className="command-palette-item-label">{page.label}</span>
                <span className="command-palette-item-section">{page.section}</span>
              </div>
            ))
          )}
        </div>
        <div className="command-palette-footer">
          <span><kbd>↑</kbd> <kbd>↓</kbd> {translate({id: 'palette.navigate', message: 'navigate'})}</span>
          <span><kbd>↵</kbd> {translate({id: 'palette.open', message: 'open'})}</span>
          <span><kbd>esc</kbd> {translate({id: 'palette.close', message: 'close'})}</span>
        </div>
      </div>
    </div>
  );
}
