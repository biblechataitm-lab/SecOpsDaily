'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldAlert, ShieldCheck, Lock, AlertTriangle, Eye, Terminal, Search, ArrowRight, ArrowUpRight, Radio, Bug, Star, Users } from 'lucide-react';

const SECURITY_VECTORS = [
  {
    id: 'cloud-posture',
    title: 'Cloud Security & IAM Posture (CSPM)',
    status: 'ACTIVE DEFENSE',
    cveFeed: 'CVE-2026-1184: Blocked privilege escalation attempt on K8s API server',
    coverage: 'AWS • GCP • Azure • Multi-Tenant',
    score: '99.8% Threat Neutralization',
  },
  {
    id: 'dast-pentest',
    title: 'Automated DAST & Exploit Scanner',
    status: 'ZERO ZERO-DAYS',
    cveFeed: 'Scanned 142 endpoints: 0 SQLi, 0 SSRF, CSP headers strictly enforced',
    coverage: 'GraphQL • REST • Webhook Handlers',
    score: '0 Critical Vulnerabilities',
  },
  {
    id: 'zero-trust-proxy',
    title: 'mTLS Identity & Zero-Trust Mesh',
    status: 'MUTUAL TLS 1.3',
    cveFeed: 'Enforcing ephemeral JWT & biometric WebAuthn per-packet verification',
    coverage: 'Global Edge Ingress • WireGuard',
    score: 'ISO 27001 & FedRAMP Ready',
  },
];

export function HeroSection() {
  const [activeVectorIndex, setActiveVectorIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const currentVector = SECURITY_VECTORS[activeVectorIndex];

  return (
    <section className="secops-hero">
      <div className="secops-ambient-glow" />

      <div className="secops-hero-grid">
        {/* Left: Tactical Security Value Prop */}
        <div className="secops-hero-content">
          <div className="secops-badge">
            <span className="secops-radar-dot" />
            <span>Zero-Trust SecOps & Threat Intelligence • 2026</span>
            <span className="secops-badge-pill">ENFORCED</span>
          </div>

          <h1 className="secops-title">
            The Zero-Trust Index for <span className="secops-gradient-text">Threat Defense</span> & Security Ops.
          </h1>

          <p className="secops-lead">
            Curated cybersecurity platforms, vulnerability scanners, automated pentesting harnesses, zero-trust access proxies, and compliance software.
          </p>

          {/* Security Search Box */}
          <form 
            action="/search" 
            method="GET" 
            className="secops-search-box"
            onSubmit={(e) => {
              if (!searchQuery.trim()) e.preventDefault();
            }}
          >
            <Search size={18} className="secops-search-icon" />
            <input
              type="text"
              name="q"
              placeholder="Search vulnerability scanners, IAM tools, SIEM engines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="secops-search-input"
            />
            <button type="submit" className="secops-search-btn">
              Scan Threat DB
            </button>
          </form>

          {/* Dual Action CTAs */}
          <div className="secops-cta-row">
            <Link href="/category/security" className="secops-primary-btn">
              Scan 1,240+ Security Stacks <ArrowRight size={15} />
            </Link>
            <Link href="/submit" className="secops-secondary-btn">
              Submit SecOps Tool
            </Link>
          </div>

          {/* Social Proof */}
          <div className="secops-social-proof">
            <div className="secops-avatar-stack">
              <span className="sec-avatar av-1">🛡️</span>
              <span className="sec-avatar av-2">🔒</span>
              <span className="sec-avatar av-3">🚨</span>
              <span className="sec-avatar av-4">⚡</span>
            </div>
            <div className="secops-proof-text">
              <div className="secops-proof-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-red-400 text-red-400" />
                ))}
                <span className="secops-rating">4.9/5.0</span>
              </div>
              <span className="secops-subtext">Hardened by 38,000+ CISOs & security researchers</span>
            </div>
          </div>

          {/* Security Domain Pills */}
          <div className="secops-tags-row">
            <span className="secops-tags-label">Domains:</span>
            <div className="secops-tags-list">
              <Link href="/category/security" className="secops-tag-pill">
                <ShieldAlert size={12} /> AppSec & DAST
              </Link>
              <Link href="/category/developer-tools" className="secops-tag-pill">
                <Lock size={12} /> Zero-Trust IAM
              </Link>
              <Link href="/category/automation" className="secops-tag-pill">
                <Bug size={12} /> Pentest Tools
              </Link>
              <Link href="/category/ai" className="secops-tag-pill">
                <Eye size={12} /> SIEM / SOC
              </Link>
            </div>
          </div>

          {/* Security Metrics Strip */}
          <div className="secops-metrics-strip">
            <div className="secops-metric-box">
              <span className="secops-metric-val">1,240+</span>
              <span className="secops-metric-desc">Security Tools</span>
            </div>
            <div className="secops-metric-divider" />
            <div className="secops-metric-box">
              <span className="secops-metric-val">24/7</span>
              <span className="secops-metric-desc">CVE Radar</span>
            </div>
            <div className="secops-metric-divider" />
            <div className="secops-metric-box">
              <span className="secops-metric-val">Zero-Trust</span>
              <span className="secops-metric-desc">Verified Specs</span>
            </div>
          </div>
        </div>

        {/* Right: Threat Defense Matrix & Radar Scanner Card */}
        <div className="secops-defense-card">
          <div className="defense-card-header">
            <div className="defense-title-group">
              <span className="defense-radar-pulse" />
              <span className="defense-header-title">Live Defense Matrix</span>
            </div>
            <span className="defense-status-pill">{currentVector.status}</span>
          </div>

          {/* Vector Switcher Tabs */}
          <div className="defense-tabs-row">
            {SECURITY_VECTORS.map((v, idx) => (
              <button
                key={v.id}
                onClick={() => setActiveVectorIndex(idx)}
                className={`defense-tab-btn ${activeVectorIndex === idx ? 'active' : ''}`}
                type="button"
              >
                {v.title.split('&')[0]}
              </button>
            ))}
          </div>

          {/* Telemetry & Coverage Box */}
          <div className="defense-telemetry-box">
            <div className="telemetry-top-row">
              <span className="telemetry-title">{currentVector.title}</span>
              <span className="telemetry-score-tag">{currentVector.score}</span>
            </div>
            <span className="telemetry-coverage">Scope: {currentVector.coverage}</span>
          </div>

          {/* Live CVE Telemetry Stream */}
          <div className="defense-cve-stream">
            <div className="cve-stream-top">
              <span className="cve-stream-title">SECURITY EVENT STREAM</span>
              <span className="cve-status-ok">ENFORCING</span>
            </div>
            <div className="cve-stream-body">
              <Terminal size={12} className="text-red-400 flex-shrink-0" />
              <code className="cve-code-text">{currentVector.cveFeed}</code>
            </div>
          </div>

          {/* Card Footer */}
          <div className="defense-card-footer">
            <div className="defense-compliance-note">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>SOC2 • ISO 27001 • HIPAA</span>
            </div>
            <Link href="/submit" className="defense-submit-link">
              Submit SecTool <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
