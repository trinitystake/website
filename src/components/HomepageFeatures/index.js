import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Who We Are',
    Svg: require('@site/static/img/trinity.svg').default,
    description: (
      <>
        We are maintaining solutions to monitor the uptime of our validator, keeping track of any missing blocks, in order to prevent it from being jailed or tombstoned. We use Prometheus as a time-series database to collect and store data on our validators. Grafana is used to visualize the metrics collected and stored in Prometheus in a visually appealing manner. We have our own set of dashboards to provide a quick overview of everything we need to know.
      </>
    ),
  },
  {
    title: 'What is Sentinel dVPN',
    Svg: require('@site/static/img/sentinel.svg').default,
    description: (
      <>
        Sentinel is a decentralized virtual private network (dVPN) built on top of the Cosmos blockchain. It allows users to connect to the internet privately and securely by routing their traffic through a network of distributed nodes. Sentinel uses advanced encryption techniques to protect user data and preserve anonymity, making it an ideal solution for anyone who values online privacy..
      </>
    ),
  },
  {
    title: 'Stake With Us',
    Svg: require('@site/static/img/cosmos.svg').default,
    description: (
      <>
        We are one of the most active validators in the Sentinel ecosystem and also provide daily support to new community members. We constantly engage with the Sentinel Foundation and leading whitelabels like MathNodes to make the internet safer and free.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
