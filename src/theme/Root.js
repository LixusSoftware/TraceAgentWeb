import React, {useEffect} from 'react';
import Root from '@theme-original/Root';
import CommandPalette from '@site/src/components/CommandPalette';
import FaviconManager from '@site/src/components/FaviconManager';
import Head from '@docusaurus/Head';
import {useLocation} from '@docusaurus/router';
import {Analytics} from '@vercel/analytics/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';

export default function RootWrapper(props) {
  const {pathname} = useLocation();
  const {i18n} = useDocusaurusContext();
  const siteUrl = 'https://traceagent.vercel.app';
  const siteDescription = translate({
    id: 'seo.software.description',
    message: 'Complete observability and tracing platform for AI agents. Capture tool calls, file operations, and decision paths with first-class LangChain and Pydantic AI support, plus OpenTelemetry ingestion.',
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "TraceAgent",
        "alternateName": "Lixus Software",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/img/logo.png`
        },
        "description": translate({id: 'seo.org.description', message: 'Open-source observability and tracing platform for AI agents.'}),
        "sameAs": [
          "https://github.com/LixusSoftware"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "TraceAgent",
        "description": translate({id: 'seo.website.description', message: 'Observability & tracing for AI agents'}),
        "inLanguage": i18n.locales,
        "publisher": {"@id": `${siteUrl}/#organization`}
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#software`,
        "name": "TraceAgent",
        "url": siteUrl,
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Linux, macOS, Windows",
        "description": siteDescription,
        "featureList": [
          "Real-time tracing of tool calls, model calls, file operations and commands",
          "LangChain callback handler",
          "Pydantic AI capability",
          "OpenTelemetry (OTLP/HTTP) GenAI trace receiver",
          "Execution timeline, graphs and decision analysis",
          "Self-hosted with SQLite or PostgreSQL"
        ],
        "image": `${siteUrl}/img/social-card.jpg`,
        "softwareRequirements": "Python 3.11+",
        "license": "https://github.com/LixusSoftware/TraceAgent/blob/main/LICENSE",
        "publisher": {"@id": `${siteUrl}/#organization`},
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  useEffect(() => {
    try {
      const suffix = ' · TraceAgent';
      const current = typeof document !== 'undefined' ? document.title || '' : '';
      if (!current) return;
      if (!current.includes('TraceAgent')) {
        document.title = `${current}${suffix}`;
      } else if (!current.endsWith('TraceAgent')) {
        // Normalize existing titles that reference TraceAgent but not the suffix
        const base = current.replace(/\s*·\s*TraceAgent$/i, '');
        document.title = `${base}${suffix}`;
      }
    } catch (e) {
      // ignore in SSR or unexpected environments
    }
  }, [pathname]);

  return (
    <>
      <Head>
        {/* Docusaurus emits <link rel="canonical"> automatically — do not duplicate it here. */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script>
          {`document.addEventListener('DOMContentLoaded', function(){ document.querySelectorAll('img').forEach(function(img){ try{ if(!img.loading) img.loading = 'lazy'; }catch(e){} }); });`}
        </script>
      </Head>
      <Root {...props} />
      <CommandPalette />
      <FaviconManager />
      <Analytics />
    </>
  );
}
