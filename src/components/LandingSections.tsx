'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldAlert, ShieldCheck, Lock, AlertTriangle, Eye, Terminal, ArrowRight, CheckCircle2, Bug, Radio, Zap } from 'lucide-react';

export function LandingSections() {
  return (
    <div className="landing-additional-sections">
      {/* 1. Feature Highlights Bento Grid */}
      <section className="landing-feature-grid-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <ShieldAlert size={12} className="text-red-400" />
            <span>Curated Zero-Trust Defense Matrix</span>
          </div>
          <h2 className="landing-section-heading">Engineered for CISOs, AppSec & SRE Teams</h2>
          <p className="landing-section-sub">
            Discover verified DAST & SAST vulnerability scanners, cloud security posture managers (CSPM), ephemeral mTLS proxies, and automated compliance frameworks.
          </p>
        </div>

        <div className="landing-bento-grid">
          {/* Bento Card 1: Continuous DAST Scanners */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box red">
                <ShieldAlert size={20} />
              </div>
              <span className="bento-badge">Real-Time Threat Detection</span>
            </div>
            <h3 className="bento-card-title">Automated DAST & Exploit Scanners</h3>
            <p className="bento-card-desc">
              Continuous endpoint scanning for SSRF, SQLi, broken object level authorization (BOLA), and misconfigured CORS headers with zero false-positives.
            </p>
            <div className="bento-metric-row">
              <div className="metric-pill">
                <span className="pill-val">1,240+</span>
                <span className="pill-lbl">SecOps Tools</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">24/7</span>
                <span className="pill-lbl">CVE Watch</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">SOC-2</span>
                <span className="pill-lbl">ISO 27001</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Zero-Trust Access */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box amber">
                <Lock size={20} />
              </div>
              <span className="bento-badge">mTLS 1.3</span>
            </div>
            <h3 className="bento-card-title">Zero-Trust Network Access (ZTNA)</h3>
            <p className="bento-card-desc">
              Replace legacy VPNs with ephemeral WebAuthn biometrics and micro-segmented service meshes.
            </p>
            <div className="bento-check-list">
              <span className="check-item"><CheckCircle2 size={13} /> Ephemeral Certificates</span>
              <span className="check-item"><CheckCircle2 size={13} /> Device Posture Checks</span>
            </div>
          </div>

          {/* Bento Card 3: Cloud CSPM */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box blue">
                <Eye size={20} />
              </div>
              <span className="bento-badge">AWS • GCP • Azure</span>
            </div>
            <h3 className="bento-card-title">Cloud Posture & IAM Drift Guard</h3>
            <p className="bento-card-desc">
              Real-time detection of over-permissioned IAM roles, public S3 buckets, and exposed secrets.
            </p>
          </div>

          {/* Bento Card 4: Automated SIEM & SOC */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box emerald">
                <Bug size={20} />
              </div>
              <span className="bento-badge">Automated SOAR</span>
            </div>
            <h3 className="bento-card-title">Next-Gen SIEM & AI Threat Correlation</h3>
            <p className="bento-card-desc">
              Correlate millions of audit logs across GitHub, Okta, Cloudflare, and Kubernetes to isolate active lateral movement in seconds.
            </p>
            <div className="bento-tag-row">
              <span className="tag-chip">eBPF Sensor</span>
              <span className="tag-chip">Okta System Log</span>
              <span className="tag-chip">GuardDuty Feed</span>
              <span className="tag-chip">Sigma Rules</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curation Process Section */}
      <section className="landing-process-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <ShieldCheck size={12} className="text-red-400" />
            <span>Cyber Defense Standard</span>
          </div>
          <h2 className="landing-section-heading">How SecOpsDaily Verifies Tools</h2>
          <p className="landing-section-sub">
            We evaluate tool performance, agent footprint, cryptographic implementations, and vendor compliance.
          </p>
        </div>

        <div className="process-steps-grid">
          <div className="process-step-card">
            <div className="step-number">01</div>
            <h4 className="step-title">Agent Footprint & Overhead Test</h4>
            <p className="step-desc">
              We benchmark CPU and memory overhead of eBPF and container sidecars under extreme load.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">02</div>
            <h4 className="step-title">Zero-Day & CVE Coverage</h4>
            <p className="step-desc">
              We verify rule detection speed and signature update frequency against active exploits.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">03</div>
            <h4 className="step-title">Featured Defense Matrix</h4>
            <p className="step-desc">
              Approved security platforms gain high-authority placement and visibility among 38,000+ CISOs.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Launch CTA Banner */}
      <section className="landing-launch-cta">
        <div className="launch-cta-content">
          <span className="launch-cta-tag">✦ LIST ON SECOPSDAILY</span>
          <h3 className="launch-cta-heading">List Your Cybersecurity Platform to 38,000+ CISOs & SecOps Engineers</h3>
          <p className="launch-cta-desc">
            Gain immediate enterprise trials, RFP inclusion, and trust from security leaders protecting critical systems.
          </p>
          <div className="launch-cta-buttons">
            <Link href="/submit" className="launch-cta-primary">
              Submit SecOps Tool <ArrowRight size={15} />
            </Link>
            <Link href="/category/security" className="launch-cta-secondary">
              Browse Threat Stacks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
