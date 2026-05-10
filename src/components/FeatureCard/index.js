import React from 'react';
import styles from './styles.module.css';

export default function FeatureCard({icon, title, description, link}) {
  const Wrapper = link ? 'a' : 'div';
  const wrapperProps = link ? {href: link, className: styles.card} : {className: styles.card};

  return (
    <Wrapper {...wrapperProps}>
      <span className={styles.icon}>{icon}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </Wrapper>
  );
}
