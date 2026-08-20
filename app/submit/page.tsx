import React from 'react';
import type { Metadata } from 'next';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = { title: 'Launch a Product — SecOpsDaily' };

export default function SubmitPage() {
  return (
    <div className="container" style={{ maxWidth: '760px', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-primary)' }}>Submit a Tool</span>
        <h1 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>Launch on SecOpsDaily</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
          Showcase your latest product or software to our active community.
        </p>
      </div>

      <div className="sidebar-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Submission Criteria</h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <span style={{ color: 'var(--text-body)', fontSize: '14px' }}>Live public URL or functional beta.</span>
          </li>
          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <span style={{ color: 'var(--text-body)', fontSize: '14px' }}>Relevant to the security ecosystem.</span>
          </li>
        </ul>
      </div>

      <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-main)', padding: '2rem' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-ink)', marginBottom: '6px' }}>Product Name</label>
            <input type="text" placeholder="e.g. Acme Software" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-main)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface-soft)', fontSize: '14px', color: 'var(--text-ink)', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-ink)', marginBottom: '6px' }}>Tagline</label>
            <input type="text" placeholder="e.g. Modern developer platform" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-main)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface-soft)', fontSize: '14px', color: 'var(--text-ink)', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-ink)', marginBottom: '6px' }}>Website URL</label>
            <input type="url" placeholder="https://example.com" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-main)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface-soft)', fontSize: '14px', color: 'var(--text-ink)', outline: 'none' }} />
          </div>
          <button type="button" className="btn-primary" style={{ width: '100%', padding: '12px 20px', fontSize: '15px', marginTop: '0.5rem' }}>
            <Sparkles size={16} /> Submit Product <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
