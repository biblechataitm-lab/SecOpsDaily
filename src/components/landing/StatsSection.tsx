'use client';

import React from 'react';

const STATS = [
  { value: '100%', label: 'Direct Maker Submissions' },
  { value: 'Realtime', label: 'Verified Catalog Releases' },
  { value: 'Community', label: 'Upvote & Feedback Engine' },
  { value: 'Zero Tracking', label: 'Privacy First Directory' },
];

export function StatsSection() {
  return (
    <section className="sod-stats">
      <div className="sod-stats-grid">
        {STATS.map((s) => (
          <div key={s.label} className="sod-stat-card">
            <div className="sod-stat-value">{s.value}</div>
            <div className="sod-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
