import React from 'react';
import Head from '@docusaurus/Head';

/**
 * Emits FAQPage structured data. Each item must match a question and answer
 * that is visible on the page (plain text, no Markdown).
 */
export default function FaqSchema({items}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({question, answer}) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {'@type': 'Answer', text: answer},
    })),
  };
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
