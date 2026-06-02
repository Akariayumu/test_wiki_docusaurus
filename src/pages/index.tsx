import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

function HomepageHeader() {
  return (
    <header style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#1b1b2f', color: 'white' }}>
      <Heading as="h1" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        <Translate>控元科技产品文档</Translate>
      </Heading>
      <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem' }}>
        <Translate>Jetson Orin 载板文档站</Translate>
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link className="button button--primary button--lg" to="/c1902">
          <Translate>C1902 产品介绍</Translate>
        </Link>
        <Link className="button button--secondary button--lg" to="/c1902">
          <Translate>查看文档</Translate>
        </Link>
      </div>
    </header>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ padding: '1.5rem', textAlign: 'center' }}>
      <Heading as="h3" style={{ marginBottom: '0.5rem' }}>{title}</Heading>
      <p style={{ opacity: 0.7 }}>{description}</p>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout description="KyWiki - Jetson Orin 载板文档">
      <HomepageHeader />
      <main>
        <section style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '3rem 2rem', flexWrap: 'wrap' }}>
          <Feature
            title="C1902 载板"
            description="Jetson Orin Nano/NX 第三方载板，与原厂完全兼容"
          />
          <Feature
            title="SUPER 模式刷机"
            description="支持命令行刷入 SUPER 固件，解锁 25W 性能模式"
          />
          <Feature
            title="中英双语"
            description="支持简体中文和 English，一键切换"
          />
        </section>
      </main>
    </Layout>
  );
}
