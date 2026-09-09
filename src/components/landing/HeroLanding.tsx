'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section class="secops-hero">
  <div class="secops-hero-container container">
    <div class="secops-alert-banner">
      <span class="secops-beacon"></span>
      <span>DEFCON LEVEL: NOMINAL · ZERO-DAY DEFENSE NETWORK</span>
    </div>
    <h1 class="secops-title">
      Frontline Defense for <span class="secops-red">Cyber Security</span>
    </h1>
    <p class="secops-desc">
      Vetting container scanners, secret detection engines, zero-trust mesh VPNs, and offensive security tooling.
    </p>
    <div class="secops-search">
      <span class="secops-prompt">#secops&gt;</span>
      <input type="text" placeholder="scan --cve --secrets --cloud" class="secops-input" />
      <button class="secops-btn">Execute Audit</button>
    </div>
    <div class="secops-threat-hud">
      <div class="hud-item"><span class="hud-num">0</span> UNPATCHED CVEs</div>
      <div class="hud-item"><span class="hud-num">24,800+</span> REPOS SCANNED</div>
      <div class="hud-item"><span class="hud-green">100%</span> SUPPLY CHAIN INTEGRITY</div>
    </div>
  </div>
</section>
  );
}
