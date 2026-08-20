import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function Maintenance({ message }: { message?: string | null }) {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--spacing-xl)',
        backgroundColor: 'var(--bg-canvas)',
        color: 'var(--text-ink)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '480px',
          padding: 'var(--spacing-xl)',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: 'var(--radius-main)',
          border: '1px solid var(--border-color)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'var(--badge-bg)',
            color: 'var(--color-primary)',
            marginBottom: 'var(--spacing-lg)',
          }}
        >
          <AlertTriangle size={28} />
        </div>
        <h1 style={{ fontSize: '26px', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>
          Under Maintenance
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6 }}>
          {message || 'We are performing scheduled directory updates. Please check back shortly.'}
        </p>
      </div>
    </div>
  );
}
