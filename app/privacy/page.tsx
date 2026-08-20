import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy — SecOpsDaily' };

export default function PrivacyPage() {
  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Privacy Policy</h1>
      <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-main)', padding: '2.5rem' }} className="prose-body">
        <h2>1. Privacy First</h2>
        <p>SecOpsDaily does not deploy invasive third-party tracking beacons, cross-site identity graphs, or cookie sync pixels.</p>
        <h2>2. First-Party Visitor Identity</h2>
        <p>To prevent repetitive ad exposures, an anonymous first-party cookie (<code>plads_vid</code>) is stored locally.</p>
      </div>
    </div>
  );
}
