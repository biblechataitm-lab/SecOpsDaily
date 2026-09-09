'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section class="secops-matrix container">
  <div class="secops-heading">
    <span class="secops-red-tag">// THREAT VECTORS</span>
    <h2>Full-Spectrum Cyber Defense Matrix</h2>
  </div>
  <div class="secops-grid-3">
    <div class="secops-card">
      <span class="secops-tag">SECRETS AUDIT</span>
      <h3>Pre-Commit Key Detection</h3>
      <p>Prevent high-entropy AWS tokens, OpenAI keys, and private SSH certificates from escaping into public Git history.</p>
    </div>
    <div class="secops-card">
      <span class="secops-tag">CONTAINER POSTURE</span>
      <h3>Immutable Base Images</h3>
      <p>Scan Docker layers for known CVEs and outdated glibc libraries before artifacts hit production registries.</p>
    </div>
    <div class="secops-card">
      <span class="secops-tag">ZERO TRUST</span>
      <h3>Identity-Gated Bastions</h3>
      <p>Replace legacy SSH port forwards with mutual WireGuard tunnels bound to multi-factor biometric identity.</p>
    </div>
  </div>
</section>
  );
}
