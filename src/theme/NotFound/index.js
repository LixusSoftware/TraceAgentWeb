import React from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import CatIllustration from '@site/src/components/CatIllustration';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function NotFound() {
  return (
    <>
      <PageMetadata title="404: Trace Not Found" />
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
                404: <span className={styles.highlight}>Trace Not Found</span>
              </Heading>
              <p className={styles.notFoundSubtitle}>
                We tracked this path carefully, but it seems to have vanished from our records.
              </p>
              <div className={styles.notFoundButtons}>
                <Link className="button button--lg button--primary" to="/">
                  Back to Dashboard
                </Link>
                <Link className="button button--lg button--outline" to="/docs/getting-started/introduction">
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
