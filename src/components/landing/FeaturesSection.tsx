'use client';

import React from 'react';
import { Shield, Lock, Zap, Eye, Layers, TrendingUp } from 'lucide-react';

const FEATURES = [
  { icon: Shield, title: 'Threat Detection', desc: 'Real-time threat intelligence feeds and MITRE ATT&CK mapping.' },
  { icon: Lock, title: 'Zero Trust', desc: 'Zero-trust architecture tools and identity management solutions.' },
  { icon: Zap, title: 'Incident Response', desc: 'Automated IR playbooks, SOAR platforms, and forensic toolkits.' },
  { icon: Eye, title: 'Vulnerability Intel', desc: 'CVE tracking, patch management, and supply chain risk analysis.' },
  { icon: Layers, title: 'Compliance Engine', desc: 'SOC2, ISO 27001, HIPAA, and GDPR compliance automation tools.' },
  { icon: TrendingUp, title: 'Threat Trends', desc: 'Emerging attack vectors, ransomware intel, and security advisories.' },
];

export function FeaturesSection() {
  return (
    <section className="sod-features">
      <div className="sod-features-header">
        <h2 className="sod-section-title">
          Why <span className="sod-accent-text">SecOpsDaily</span>
        </h2>
        <p className="sod-section-subtitle">More than a directory — a curated ecosystem built for your workflow.</p>
      </div>
      <div className="sod-features-grid">
        {FEATURES.map((f) => (
          <div key={f.title} className="sod-feature-card">
            <div className="sod-feature-icon"><f.icon size={22} /></div>
            <h3 className="sod-feature-title">{f.title}</h3>
            <p className="sod-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
