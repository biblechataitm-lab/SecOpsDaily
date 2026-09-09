'use client';

import React from 'react';

export function Header({ siteName = 'SecOpsDaily' }: { siteName?: string }) {
  return (
    <header className="secops-navbar">
      <div className="container secops-nav-inner">
        <a href="/" className="secops-brand">
          <span className="secops-shield-glyph">🛡</span>
          <span>SecOpsDaily</span>
        </a>
        <div className="secops-nav-links">
        <a href="/">Threat Feed</a>
        <a href="/trends">CVE Intel</a>
        <a href="/category/scanning">Scanners & CVEs</a>
        <a href="/sponsor">Underwrite</a>
        </div>
        <a href="/submit" className="secops-cta-btn">Submit Tool</a>
      </div>
    </header>
  );
}
