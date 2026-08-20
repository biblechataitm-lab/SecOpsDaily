import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms of Service — SecOpsDaily' };

export default function TermsPage() {
  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Terms of Service</h1>
      <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-main)', padding: '2.5rem' }} className="prose-body">
        <h2>1. Directory Terms</h2>
        <p>By accessing SecOpsDaily, you agree to comply with standard platform usage guidelines and respect intellectual property rights.</p>
      </div>
    </div>
  );
}
