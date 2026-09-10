'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section className="secops-hero">
      <div className="secops-hero-container container">
        <div className="secops-tactical-header">
          <div className="secops-alert-banner">
            <span className="secops-beacon"></span>
            <span className="secops-alert-text">DEFCON LEVEL 1 · ZERO-DAY INTEL RADAR</span>
          </div>
          <span className="secops-telemetry-tag">[SEC//NET-ACTIVE · SYS: 256-BIT]</span>
        </div>

        <h1 className="secops-title">
          Frontline Defense for <span className="secops-red">Cyber Security</span>
        </h1>
        <p className="secops-desc">
          Automated auditing and verified intelligence for vulnerability scanners, secret detection engines, zero-trust mesh infrastructure, and DevSecOps tooling.
        </p>

        <div className="secops-search">
          <span className="secops-prompt">secops@terminal:~$</span>
          <input 
            type="text" 
            placeholder="scan --cve --secrets --cloud-mesh" 
            className="secops-input" 
            aria-label="Search security tooling"
          />
          <button className="secops-btn" type="button">
            <span className="secops-btn-icon">⚡</span> Execute Audit
          </button>
        </div>

        <div className="secops-threat-hud">
          <div className="hud-item">
            <span className="hud-indicator hud-indicator-red"></span>
            <span className="hud-num">0</span> UNPATCHED CVEs
          </div>
          <div className="hud-item">
            <span className="hud-indicator hud-indicator-yellow"></span>
            <span className="hud-num">LIVE</span> AUDITED REPOSITORIES
          </div>
          <div className="hud-item">
            <span className="hud-indicator hud-indicator-green"></span>
            <span className="hud-green">100%</span> ZERO-TRUST INTEGRITY
          </div>
          <div className="hud-item hud-item-status">
            <span className="hud-pulse-ring"></span>
            <span>STATUS: ACTIVE DEFENSE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

