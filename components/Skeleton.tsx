import React from 'react';

export function ProductCardSkeleton() {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--spacing-md)',
        padding: 'var(--spacing-lg)',
        backgroundColor: 'var(--bg-surface)',
        borderRadius: 'var(--radius-main)',
        border: '1px solid var(--border-color)',
        marginBottom: 'var(--spacing-md)',
      }}
    >
      <div style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-main)', backgroundColor: 'var(--bg-surface-soft)', flexShrink: 0 }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '180px', height: '20px', backgroundColor: 'var(--bg-surface-soft)', borderRadius: '4px' }} />
          <div style={{ width: '50px', height: '20px', backgroundColor: 'var(--bg-surface-soft)', borderRadius: '4px' }} />
        </div>
        <div style={{ width: '90%', height: '14px', backgroundColor: 'var(--bg-surface-soft)', borderRadius: '4px' }} />
        <div style={{ width: '60%', height: '12px', backgroundColor: 'var(--bg-surface-soft)', borderRadius: '4px', marginTop: '4px' }} />
      </div>
    </div>
  );
}

export function ProductListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div>
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function SidebarSkeleton() {
  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
      <div
        style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: 'var(--radius-main)',
          border: '1px solid var(--border-color)',
        }}
      >
        <div style={{ width: '120px', height: '16px', backgroundColor: 'var(--bg-surface-soft)', marginBottom: '12px' }} />
        <div style={{ width: '100%', height: '14px', backgroundColor: 'var(--bg-surface-soft)', marginBottom: '8px' }} />
        <div style={{ width: '85%', height: '14px', backgroundColor: 'var(--bg-surface-soft)' }} />
      </div>
    </aside>
  );
}
