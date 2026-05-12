import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import CatIllustration from '@site/src/components/CatIllustration';
import { Package, Link as LinkIcon, Server, MonitorPlay, Star } from 'lucide-react';
import styles from './index.module.css';

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />
      </div>
      <div className="container">
        <div className={styles.heroLayout}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Open Source · MIT License
            </div>
            <Heading as="h1" className={styles.heroTitle}>
              See what your{' '}
              <span className={styles.heroGradient}>AI agents</span>{' '}
              are actually doing
            </Heading>
            <p className={styles.heroSubtitle}>
              {siteConfig.tagline}. Every tool call, file operation, terminal command, 
              and decision path — recorded and visualized in real time.
            </p>
            <div className={styles.heroButtons}>
              <Link
                className={clsx('button button--lg', styles.heroPrimary)}
                to="/docs/getting-started/quick-start">
                Get Started →
              </Link>
              <Link
                className={clsx('button button--lg', styles.heroSecondary)}
                href="https://github.com/LixusSoftware/TraceAgent">
                <Star size={18} className={styles.starIcon} /> GitHub Star
              </Link>
            </div>
          </div>
          <div className={styles.heroIllustration}>
            <CatIllustration state="investigating" size="level3" />
          </div>
        </div>
      </div>
    </header>
  );
}

function CodePreview() {
  return (
    <section className={styles.codeSection}>
      <div className="container">
        <div className={styles.codeSectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Instrument in <span className={styles.heroGradient}>minutes</span>, not days
          </Heading>
          <p className={styles.sectionSubtitle}>
            A few lines of Python. That's all it takes to get full observability.
          </p>
        </div>
        <div className={styles.codeWindow}>
          <div className={styles.codeWindowBar}>
            <span className={styles.codeWindowDot} style={{background: '#ff5f57'}} />
            <span className={styles.codeWindowDot} style={{background: '#febc2e'}} />
            <span className={styles.codeWindowDot} style={{background: '#28c840'}} />
            <span className={styles.codeWindowTitle}>my_agent.py</span>
          </div>
          <CodeBlock language="python" className={styles.codeBlock}>
            {`from trace_agent_sdk import TraceAgentClient

client = TraceAgentClient("http://localhost:8000")
run = client.start_run("my-agent", "Fix the login bug")

# Every action is automatically traced
run.record_file_write("auth.py", before_content="...", after_content="...")
run.record_command(["pytest", "tests/"], exit_code=0)

run.finish({"status": "success"})`}
          </CodeBlock>
        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  const packages = [
    {
      name: 'SDK',
      description: 'Python client for recording agent actions',
      install: 'pip install trace-agent-sdk',
      link: '/docs/instrumentation/sdk',
      icon: Package,
    },
    {
      name: 'LangChain',
      description: 'Automatic tracing for LangChain agents',
      install: 'pip install trace-agent-langchain',
      link: '/docs/instrumentation/langchain',
      icon: LinkIcon,
    },
    {
      name: 'Server',
      description: 'FastAPI backend with SQLite/PostgreSQL',
      install: 'pip install trace-agent-server',
      link: '/docs/configuration/docker',
      icon: Server,
    },
    {
      name: 'UI',
      description: 'Interactive dashboard and timeline',
      install: 'pip install trace-agent-ui',
      link: '/docs/getting-started/quick-start',
      icon: MonitorPlay,
    },
  ];

  return (
    <section className={styles.packages}>
      <div className="container">
        <div className={styles.codeSectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Modular by design
          </Heading>
          <p className={styles.sectionSubtitle}>
            Install only what you need. Each package works independently.
          </p>
        </div>
        <div className={styles.packageGrid}>
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <Link key={idx} to={pkg.link} className={styles.packageCard}>
                <span className={styles.packageIcon}><Icon size={24} /></span>
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <p className={styles.packageDesc}>{pkg.description}</p>
                <code className={styles.packageInstall}>{pkg.install}</code>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to trace your agents?
          </Heading>
          <p className={styles.ctaSubtitle}>
            Get your first trace running in under 5 minutes. Free, open source, self-hosted.
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx('button button--lg', styles.heroPrimary)}
              to="/docs/getting-started/quick-start">
              Quick Start Guide →
            </Link>
            <Link
              className={clsx('button button--lg', styles.heroStar)}
              href="https://github.com/LixusSoftware/TraceAgent">
              <Star size={18} className={styles.starIcon} /> Star
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="AI Agent Observability Platform"
      description="Complete observability and tracing platform for AI agents. Capture tool calls, file operations, and decision paths with first-class LangChain support.">
      <HomepageHero />
      <main>
        <HomepageFeatures />
        <CodePreview />
        <PackagesSection />
        <CTASection />
      </main>
    </Layout>
  );
}
