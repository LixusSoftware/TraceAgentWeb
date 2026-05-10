import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import styles from './styles.module.css';

const STATE_IMAGES = {
  investigating: {
    light: 'img/cat_investigating.png',
    dark: 'img/cat_investigating.png',
  },
  path: {
    light: 'img/cat_following_path.png',
    dark: 'img/cat_following_path.png',
  },
  error: {
    light: 'img/cat_error.png',
    dark: 'img/cat_error.png',
  },
  inactive: {
    light: 'img/cat_inactive.png',
    dark: 'img/cat_inactive.png',
  },
};

const ALT_TEXTS = {
  investigating: 'TraceAgent: Investigating trace data',
  path: 'TraceAgent: Following execution path',
  error: 'TraceAgent: System error detected',
  inactive: 'TraceAgent: System inactive or waiting',
};

export default function CatIllustration({ state = 'investigating', size = 'level2', caption, className }) {
  const imageSources = STATE_IMAGES[state] || STATE_IMAGES.investigating;
  const altText = ALT_TEXTS[state] || 'TraceAgent Illustration';

  return (
    <figure className={clsx(styles.container, styles[size], className)}>
      <div className={styles.imageWrapper}>
        <ThemedImage
          alt={altText}
          sources={{
            light: useBaseUrl(imageSources.light),
            dark: useBaseUrl(imageSources.dark),
          }}
          className={styles.image}
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
