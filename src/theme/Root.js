import React from 'react';
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
        "logo": `${siteUrl}/img/logo.png",
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

  return (
    <>
      <Head>
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <Root {...props} />
      <CommandPalette />
      <FaviconManager />
    </>
  );
}
