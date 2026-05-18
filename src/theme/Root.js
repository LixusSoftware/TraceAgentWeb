import React, {useEffect} from 'react';
import Root from '@theme-original/Root';
import CommandPalette from '@site/src/components/CommandPalette';
import FaviconManager from '@site/src/components/FaviconManager';
import Head from '@docusaurus/Head';
import {useLocation} from '@docusaurus/router';

export default function RootWrapper(props) {
  const {pathname} = useLocation();
  const siteUrl = 'https://traceagent.vercel.app';
  const canonical = `${siteUrl}${pathname}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "TraceAgent",
        "url": siteUrl,
        "logo": `${siteUrl}/img/logo.png`,
        "sameAs": [
          "https://github.com/LixusSoftware"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "TraceAgent",
        "publisher": {"@id": `${siteUrl}/#organization`}
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        "url": canonical,
        "inLanguage": "en",
        "name": "TraceAgent",
        "isPartOf": {"@id": `${siteUrl}/#website`}
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
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script>
          {`document.addEventListener('DOMContentLoaded', function(){ document.querySelectorAll('img').forEach(function(img){ try{ if(!img.loading) img.loading = 'lazy'; }catch(e){} }); });`}
        </script>
      </Head>
      <Root {...props} />
      <CommandPalette />
      <FaviconManager />
    </>
  );
}
