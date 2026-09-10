'use client';

import React from 'react';

export function Header({ siteName = 'SecOpsDaily' }: { siteName?: string }) {
  return (
    <header className="secops-navbar">
      <div className="container secops-nav-inner">
        <a href="/" className="secops-brand">
          <span className="secops-shield-glyph">🛡️</span>
          <span className="secops-brand-name">{siteName}</span>
          <span className="secops-badge-chip">SYS//SEC</span>
        </a>

        <div className="secops-nav-links">
          <a href="/" className="secops-nav-item active">Threat Feed</a>
          <a href="/category/scanning" className="secops-nav-item">CVE Intel</a>
          <a href="/category/security" className="secops-nav-item">Zero-Trust</a>
          <a href="/category/devsecops" className="secops-nav-item">DevSecOps</a>
          <a href="/sponsor" className="secops-nav-item secops-nav-highlight">Underwrite</a>
        </div>

        <div className="secops-nav-actions">
          <div className="secops-status-telemetry">
            <span className="secops-radar-pulse"></span>
            <span className="secops-status-text">RADAR: LIVE</span>
          </div>
          <a href="/submit" className="secops-cta-btn">
            Submit Tool <span className="secops-cta-arrow">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

