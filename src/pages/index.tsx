import type {ReactNode} from 'react';
import { useRef, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Lottie from 'lottie-react';
import animationData from '@site/static/animation.json';
import HomepageBlogPosts from '@site/src/components/HomepageBlogPosts';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.4);
    }
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.description)}>
          Elvíra <br />
          Digitálna knižnica
        </p>
        </div>
        <Lottie lottieRef={lottieRef} animationData={animationData} loop={true} className={styles.animation} />
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageBlogPosts />
      </main>
    </Layout>
  );
}
