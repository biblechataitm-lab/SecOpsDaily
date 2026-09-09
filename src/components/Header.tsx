'use client';

import React from 'react';

export function Header({ siteName = 'SecOpsDaily' }: { siteName?: string }) {
  return (
    <header class="secops-navbar">
  <div class="container secops-nav-inner">
    <a href="/" class="secops-brand">
      <span class="secops-shield-glyph">🛡</span>
      <span>SecOpsDaily</span>
    </a>
    <div class="secops-nav-links">
      <a href="/">Threat Feed</a>
      <a href="/trends">CVE Intel</a>
      <a href="/category/developer-tools">Scanners</a>
      <a href="/sponsor">Underwrite</a>
    </div>
    <a href="/submit" class="secops-cta-btn">Submit Tool</a>
  </div>
</header>
  );
}
