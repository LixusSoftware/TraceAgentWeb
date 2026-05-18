import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
// Use a picture/img with explicit intrinsic dimensions to avoid layout shift
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

  // Provide intrinsic dimensions per size so browser can reserve aspect ratio
  const SIZE_DIMS = {
    level1: { width: 64, height: 64 },
    level2: { width: 280, height: 210 }, // 4:3
    level3: { width: 520, height: 325 }, // 16:10 approx
  };

  const dims = SIZE_DIMS[size] || SIZE_DIMS.level2;

  return (
    <figure className={clsx(styles.container, styles[size], className)}>
      <div className={styles.imageWrapper}>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcSet={useBaseUrl(imageSources.dark)} />
          <img
            src={useBaseUrl(imageSources.light)}
            alt={altText}
            width={dims.width}
            height={dims.height}
            className={styles.image}
            loading="eager"
          />
        </picture>
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
