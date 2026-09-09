'use client';

import React from 'react';

const STATS = [
  { value: '1,100+', label: 'Security Tools' },
  { value: '12K+', label: 'Security Pros' },
  { value: '200+', label: 'Threat Feeds' },
  { value: '99.2%', label: 'Accuracy Rate' },
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
