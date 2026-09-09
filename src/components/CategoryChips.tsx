'use client';

import React from 'react';

const CATEGORIES = [
  {
    "label": "All",
    "path": "/"
  },
  {
    "label": "CVE Scanners",
    "path": "/category/scanning"
  },
  {
    "label": "Threat Intel",
    "path": "/category/threat-intel"
  },
  {
    "label": "Identity & IAM",
    "path": "/category/iam"
  },
  {
    "label": "DevSecOps",
    "path": "/category/devsecops"
  },
  {
    "label": "Zero Trust & VPN",
    "path": "/category/security"
  },
  {
    "label": "Defense Tools",
    "path": "/category/developer-tools"
  }
];

export function CategoryChips({ activeCategory }: { activeCategory?: string }) {
  return (
    <div className="category-chips-wrapper">
      <div className="category-chips-scroll">
        {CATEGORIES.map((cat) => {
          const isAll = cat.path === '/';
          const isActive = isAll ? !activeCategory : activeCategory === cat.path.replace('/category/', '');
          return (
            <a
              key={cat.path}
              href={cat.path}
              className={`chip ${isActive ? 'chip-active' : ''}`}
            >
              {cat.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
