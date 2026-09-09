'use client';

import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

export function CTASection() {
  return (
    <section className="sod-cta">
      <div className="sod-cta-glow" aria-hidden="true" />
      <div className="sod-cta-content">
        <h2 className="sod-cta-title">Submit Your Security Tool</h2>
        <p className="sod-cta-subtitle">Get discovered by 12K+ CISOs, security engineers, and SOC analysts.</p>
        <div className="sod-cta-buttons">
          <a href="/submit" className="sod-cta-btn-primary">
            <Rocket size={15} /> Submit Product
          </a>
          <a href="/sponsor" className="sod-cta-btn-secondary">
            Sponsor <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
