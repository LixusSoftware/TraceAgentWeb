import React from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import CatIllustration from '@site/src/components/CatIllustration';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function NotFound() {
  return (
    <>
      <PageMetadata title={translate({id: 'notFound.metaTitle', message: '404: Trace Not Found'})} />
      <Layout>
        <main className={styles.notFoundContainer}>
          <div className={styles.notFoundContent}>
            <CatIllustration 
              state="error" 
              size="level3" 
              className={styles.notFoundImage}
            />
            <div className={styles.notFoundText}>
              <Heading as="h1" className={styles.notFoundTitle}>
                404: <span className={styles.highlight}><Translate id="notFound.title">Trace Not Found</Translate></span>
              </Heading>
              <p className={styles.notFoundSubtitle}>
                <Translate id="notFound.subtitle">We tracked this path carefully, but it seems to have vanished from our records.</Translate>
              </p>
              <div className={styles.notFoundButtons}>
                <Link className="button button--lg button--primary" to="/">
                  <Translate id="notFound.home">Back to Dashboard</Translate>
                </Link>
                <Link className="button button--lg button--outline" to="/docs/getting-started/introduction">
                  <Translate id="notFound.docs">View Documentation</Translate>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
