import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {i18n} = useDocusaurusContext();
  const isZh = i18n.currentLocale === 'zh-CN';

  return (
    <header style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#1b1b2f', color: 'white' }}>
      <Heading as="h1" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        {isZh ? '控元科技产品文档' : 'Kytech Product Documentation'}
      </Heading>
      <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem' }}>
        {isZh ? 'Jetson Orin 载板文档站' : 'Jetson Orin Carrier Board Documentation'}
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link className="button button--primary button--lg" to="/c1902">
          {isZh ? 'C1902 产品介绍' : 'C1902 Overview'}
        </Link>
        <Link className="button button--secondary button--lg" to="/c1902">
          {isZh ? '查看文档' : 'View Docs'}
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
  const {i18n} = useDocusaurusContext();
  const isZh = i18n.currentLocale === 'zh-CN';

  return (
    <Layout description="KyWiki - Jetson Orin Carrier Board Documentation">
      <HomepageHeader />
      <main>
        <section style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '3rem 2rem', flexWrap: 'wrap' }}>
          <Feature
            title={isZh ? 'C1902 载板' : 'C1902 Carrier Board'}
            description={isZh ? 'Jetson Orin Nano/NX 第三方载板，与原厂完全兼容' : 'Third-party Jetson Orin Nano/NX carrier board, fully compatible with original'}
          />
          <Feature
            title={isZh ? 'SUPER 模式刷机' : 'SUPER Mode Flashing'}
            description={isZh ? '支持命令行刷入 SUPER 固件，解锁 25W 性能模式' : 'Flash SUPER firmware via command line, unlock 25W performance mode'}
          />
          <Feature
            title={isZh ? '中英双语' : 'Bilingual'}
            description={isZh ? '支持简体中文和 English，一键切换' : 'Supports Simplified Chinese and English, one-click switch'}
          />
        </section>
      </main>
    </Layout>
  );
}
