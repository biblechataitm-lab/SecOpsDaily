import React from 'react';
import type { Metadata } from 'next';
import { getSiteConfig } from '@/lib/ads';
import { ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = { title: 'Sponsor & Advertise — SecOpsDaily' };

export default async function SponsorPage() {
  const config = await getSiteConfig();

  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-primary)' }}>Sponsorships</span>
        <h1 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>Advertise on {config?.name || 'SecOpsDaily'}</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
          Reach targeted buyers, engineers, and power users in the security niche.
        </p>
      </div>

      <div className="sidebar-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>Why Sponsor SecOpsDaily?</h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <CheckCircle size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
            <span style={{ color: 'var(--text-body)', fontSize: '14.5px' }}><strong>High Intent Readership:</strong> Visitors actively evaluating security tools.</span>
          </li>
          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <CheckCircle size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
            <span style={{ color: 'var(--text-body)', fontSize: '14.5px' }}><strong>Non-Intrusive Native Units:</strong> Seamless sidebar integrations with high organic CTR.</span>
          </li>
          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <ShieldCheck size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
            <span style={{ color: 'var(--text-body)', fontSize: '14.5px' }}><strong>Guaranteed 50% + 1s Viewability:</strong> Verified telemetry via Beacon events.</span>
          </li>
        </ul>
      </div>

      <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-main)', padding: '2.5rem 2rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Book a Placement via Rate Card</h3>
        <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', maxWidth: '480px', margin: '0 auto 1.5rem auto', fontSize: '14px' }}>
          Manage inventory centrally across the Publisher Ad Network.
        </p>
        <a href="https://peerlist.io" target="_blank" rel="noopener" className="btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
          View Rate Card & Book Slot <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
