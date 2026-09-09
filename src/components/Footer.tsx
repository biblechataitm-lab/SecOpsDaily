import React from 'react';
import Link from 'next/link';

export function Footer({ siteName = 'SecOpsDaily' }: { siteName?: string }) {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="header-brand" style={{ marginBottom: '12px' }}>
              <span>{siteName}</span>
              <span className="header-brand-dot" />
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-body)', maxWidth: '320px', lineHeight: 1.6 }}>
              Curated cybersecurity tooling, threat intelligence, and zero-trust software.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Discover</h4>
            <ul className="footer-links">
              <li><Link href="/">Today's Launches</Link></li>
              <li><Link href="/trends">Trending Tools</Link></li>
              <li><Link href="/collections/this-week">Weekly Curations</Link></li>
              <li><Link href="/collections/this-month">Monthly Roundups</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Publishing</h4>
            <ul className="footer-links">
              <li><Link href="/submit">Submit Product</Link></li>
              <li><Link href="/sponsor">Sponsor Directory</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</div>
          <div>Powered by Publisher Ad Network</div>
        </div>
      </div>
    </footer>
  );
}
