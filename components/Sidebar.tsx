import React from 'react';
import Link from 'next/link';
import { getAd, AdSlot, getSiteConfig } from '@/lib/ads';
import { Compass, Calendar, ArrowRight } from 'lucide-react';

export async function Sidebar() {
  const config = await getSiteConfig();
  const slotKeys = config?.slots?.map((s) => s.key) ?? ['sidebar-1'];
  const primarySlot = slotKeys[0] || 'sidebar-1';
  const ad = await getAd({ slot: primarySlot });

  return (
    <aside>
      <div className="sidebar-card">
        <div className="sidebar-card-title">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Compass size={14} style={{ color: 'var(--color-primary)' }} /> About {config?.name || 'SecOpsDaily'}
          </span>
        </div>
        <p className="sidebar-card-body">
          {config?.name || 'SecOpsDaily'} is a curated launch directory listing premier tools, software, and platforms in the security ecosystem.
        </p>
      </div>

      <div className="sidebar-card">
        <div className="sidebar-card-title">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={14} style={{ color: 'var(--color-primary)' }} /> Featured Collections
          </span>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <Link href="/collections/this-week" className="collection-link">
            <span>This Week's Top Picks</span>
            <ArrowRight size={14} style={{ color: 'var(--text-muted)' }} />
          </Link>
          <Link href="/collections/this-month" className="collection-link">
            <span>This Month's Top Picks</span>
            <ArrowRight size={14} style={{ color: 'var(--text-muted)' }} />
          </Link>
        </div>
      </div>

      <AdSlot ad={ad} />
    </aside>
  );
}
