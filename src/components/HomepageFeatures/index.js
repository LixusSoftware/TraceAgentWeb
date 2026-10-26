import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import { Zap, Activity, Link, Server } from 'lucide-react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <Translate id="features.realtime.title">Real-time Tracing</Translate>,
    icon: Zap,
    description: (
      <Translate id="features.realtime.desc">
        Capture tool calls, file operations, shell commands, and artifacts as they happen. Monitor long-running agents with live event streaming.
      </Translate>
    ),
  },
  {
    title: <Translate id="features.timeline.title">Execution Timeline</Translate>,
    icon: Activity,
    description: (
      <Translate id="features.timeline.desc">
        Visualize agent behavior through interactive timelines and execution graphs. Click any event to see full parameters, results, and diffs.
      </Translate>
    ),
  },
  {
    title: <Translate id="features.integrations.title">Framework Integrations</Translate>,
    icon: Link,
    description: (
      <Translate id="features.integrations.desc">
        LangChain callback, Pydantic AI capability, or plain OpenTelemetry. Chains, model calls, and tools traced automatically — often with a single line.
      </Translate>
    ),
  },
  {
    title: <Translate id="features.selfhosted.title">Self-Hosted</Translate>,
    icon: Server,
    description: (
      <Translate id="features.selfhosted.desc">
        Full data ownership with FastAPI backend and SQLite/PostgreSQL support. No external telemetry, no cloud dependency. Your data stays with you.
      </Translate>
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
