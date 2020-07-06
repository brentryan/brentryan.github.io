import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Twitter</>,
    imageUrl: 'img/twitter.svg',
    link: 'https://twitter.com/tweetbrentryan',
    description: (
      <>
        Follow me on Twitter to see what I'm currently paying attention too.
      </>
    ),
  },
  {
    title: <>LinkedIn</>,
    imageUrl: 'img/linkedin.svg',
    link: 'https://www.linkedin.com/in/brentryan',
    description: (
      <>
        Check out my LinkedIn profile to see what I've done.
      </>
    ),
  },
  {
    title: <>Github</>,
    imageUrl: 'img/github.svg',
    link: 'https://github.com/brentryan',
    description: (
      <>
        Most of my code contributions have been behind corporate organizational accounts but I'll tinker here on occasion.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <a href={link}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
