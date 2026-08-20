import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {usePluginData} from '@docusaurus/useGlobalData';

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../components/HomepageComponents';

const VALIDATOR_URL =
  'https://p2pscan.com/validator/sentvaloper1mcwvu4vpvfcnxduzpelehmgga282wtc0xux7se';

export default function Home() {
  const {version} = usePluginData('katacomb-release');
  const trinityIcon = useBaseUrl('img/trinity.svg');
  const sentinelIcon = useBaseUrl('img/sentinel.svg');
  const katacombIcon = useBaseUrl('img/katacomb.svg');

  return (
    <Layout
      title="Trinity Stake"
      description="Professional Sentinel validation service."
      wrapperClassName="homepage">
      <div className="pad">
        <div className="center homepage-content">
          <section className="hero-section" aria-labelledby="hero-heading">
            <div className="hero-glow" aria-hidden="true" />
            <h1 id="hero-heading" className="hero-title">
              <span className="hero-title-gradient">Trinity Stake</span>
            </h1>
            <p className="hero-subtitle">
              Professional Sentinel validation service. We run a hardened
              validator, maintain monitoring infrastructure, and contribute
              actively to the Sentinel ecosystem.
            </p>
            <div className="hero-actions">
              <Link to={VALIDATOR_URL} className="hero-cta-primary">
                Stake with us <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link to="/katacomb-vpn" className="hero-cta-secondary">
                Get Katacomb VPN
              </Link>
              <Link
                to="https://docs.sentinel.co/get-started"
                className="hero-cta-secondary">
                Learn Sentinel
              </Link>
            </div>
          </section>

          <Section title="About" accentColor="#1a90ff">
            <Card
              title="Who We Are"
              description="We run monitoring around our validator to track uptime and missed blocks, preventing jailing or tombstoning. Prometheus collects time-series data; Grafana surfaces it through dashboards we maintain ourselves."
              to="https://linktr.ee/trinitystake"
              svgFile={trinityIcon}
            />
            <Card
              badge={`v${version}`}
              title="Katacomb VPN"
              description="Our Linux desktop client for Sentinel. Pick a node anywhere in the world, pay for the session on-chain, and the tunnel comes up on any of six protocols. No accounts, no single provider."
              to="/katacomb-vpn"
              svgFile={katacombIcon}
            />
            <Card
              title="What is Sentinel"
              description="Sentinel is a decentralized VPN built on Cosmos. It routes traffic through a network of distributed nodes with strong encryption, giving users private and secure access to the internet."
              to="https://sentinel.co"
              svgFile={sentinelIcon}
            />
          </Section>

          <Section title="Guides" accentColor="#4dabff">
            <Card
              title="Run a dVPN Node"
              description="Deploy a dVPN node on Sentinel and start earning by contributing bandwidth to the network."
              to="https://docs.sentinel.co/dvpn-node-setup"
              svgFile={sentinelIcon}
            />
            <Card
              title="Run a Full Node & Validate"
              description="Spin up a full Sentinel node and join the validator set securing the chain."
              to="https://docs.sentinel.co/full-node-setup"
              svgFile={sentinelIcon}
            />
            <Card
              title="Node Monitoring"
              description="Set up Prometheus and Grafana to monitor validator uptime, missed blocks, and chain health."
              to="https://docs.sentinel.co/node-monitoring"
              svgFile={sentinelIcon}
            />
          </Section>
        </div>
      </div>
    </Layout>
  );
}
