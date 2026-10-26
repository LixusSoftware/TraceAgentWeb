import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Metadata from '@theme-original/DocItem/Metadata';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

/**
 * Docs pages are articles: mark them as such for social previews and add
 * TechArticle structured data with the real title, description and last update.
 */
export default function MetadataWrapper(props) {
  const {siteConfig, i18n} = useDocusaurusContext();
  const {metadata, frontMatter} = useDoc();
  const siteUrl = siteConfig.url;
  const url = `${siteUrl}${metadata.permalink}`;
  const image = `${siteUrl}/${(frontMatter.image || 'img/social-card.jpg').replace(/^\//, '')}`;

  const article = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${url}#article`,
    headline: metadata.title,
    description: metadata.description,
    url,
    mainEntityOfPage: url,
    image,
    inLanguage: i18n.currentLocale,
    isPartOf: {'@id': `${siteUrl}/#website`},
    about: {'@id': `${siteUrl}/#software`},
    author: {'@id': `${siteUrl}/#organization`},
    publisher: {'@id': `${siteUrl}/#organization`},
  };
  if (metadata.lastUpdatedAt) {
    article.dateModified = new Date(metadata.lastUpdatedAt).toISOString();
  }

  return (
    <>
      <Metadata {...props} />
      <Head>
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(article)}</script>
      </Head>
    </>
  );
}
