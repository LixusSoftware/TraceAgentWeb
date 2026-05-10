import React, {useState, useEffect, useCallback, useRef} from 'react';
import {useHistory} from '@docusaurus/router';
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

const PAGES = [
  {label: 'Introduction', path: '/docs/getting-started/introduction', section: 'Getting Started', icon: Book},
  {label: 'Installation', path: '/docs/getting-started/installation', section: 'Getting Started', icon: Download},
  {label: 'Quick Start', path: '/docs/getting-started/quick-start', section: 'Getting Started', icon: Zap},
  {label: 'Architecture', path: '/docs/core-concepts/architecture', section: 'Core Concepts', icon: Layers},
  {label: 'SDK Reference', path: '/docs/instrumentation/sdk', section: 'Instrumentation', icon: Package},
  {label: 'LangChain Integration', path: '/docs/instrumentation/langchain', section: 'Instrumentation', icon: LinkIcon},
  {label: 'Environment Variables', path: '/docs/configuration/environment-variables', section: 'Configuration', icon: Settings},
  {label: 'Docker Deployment', path: '/docs/configuration/docker', section: 'Configuration', icon: Box},
  {label: 'Examples', path: '/docs/examples/', section: 'Examples', icon: Lightbulb},
  {label: 'Sample Agent', path: '/docs/examples/sample-agent', section: 'Examples', icon: FlaskConical},
  {label: 'LangChain Agent', path: '/docs/examples/langchain-agent', section: 'Examples', icon: LinkIcon},
  {label: 'LM Studio Agent', path: '/docs/examples/lm-studio-agent', section: 'Examples', icon: Box},
  {label: 'Planner Agent', path: '/docs/examples/planner-agent', section: 'Examples', icon: ClipboardList},
  {label: 'Debugger Demo', path: '/docs/examples/debugger-demo', section: 'Examples', icon: Bug},
  {label: 'Rich Demo', path: '/docs/examples/rich-demo', section: 'Examples', icon: Target},
  {label: 'FAQ', path: '/docs/faq', section: 'Help', icon: HelpCircle},
  {label: 'Changelog', path: '/docs/changelog', section: 'More', icon: FileText},
  {label: 'Blog', path: '/blog', section: 'More', icon: Newspaper},
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const history = useHistory();

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
    history.push(path);
  }, [close, history]);

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
    <div className="command-palette-overlay" onClick={close} role="dialog" aria-modal="true" aria-label="Command Palette">
      <div className="command-palette" onClick={e => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="command-palette-input"
          placeholder="Search docs, navigate..."
          value={query}
          onChange={e => { setQuery(e.target.value); setActiveIndex(0); }}
          onKeyDown={handleKeyDown}
          aria-label="Search input"
          role="combobox"
          aria-expanded="true"
          aria-controls="command-palette-list"
          aria-activedescendant={`cmd-item-${activeIndex}`}
        />
        <div className="command-palette-results" role="listbox" id="command-palette-list">
          {filtered.length === 0 ? (
            <div className="command-palette-empty">No results found</div>
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
          <span><kbd>↑</kbd> <kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> open</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
