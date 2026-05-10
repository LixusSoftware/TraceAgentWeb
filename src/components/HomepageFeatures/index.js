import clsx from 'clsx';
import Heading from '@theme/Heading';
import { Zap, Activity, Link, Server } from 'lucide-react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Real-time Tracing',
    icon: Zap,
    description: (
      <>
        Capture tool calls, file operations, shell commands, and artifacts
        as they happen. Monitor long-running agents with live event streaming.
      </>
    ),
  },
  {
    title: 'Execution Timeline',
    icon: Activity,
    description: (
      <>
        Visualize agent behavior through interactive timelines and execution graphs.
        Click any event to see full parameters, results, and diffs.
      </>
    ),
  },
  {
    title: 'LangChain Native',
    icon: Link,
    description: (
      <>
        Drop-in callback handler for LangChain agents. Chain steps, LLM calls,
        tool usage, and retriever activity traced automatically — zero boilerplate.
      </>
    ),
  },
  {
    title: 'Self-Hosted',
    icon: Server,
    description: (
      <>
        Full data ownership with FastAPI backend and SQLite/PostgreSQL support.
        No external telemetry, no cloud dependency. Your data stays with you.
      </>
    ),
  },
];

function Feature({icon: Icon, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <Icon size={32} />
        </div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
