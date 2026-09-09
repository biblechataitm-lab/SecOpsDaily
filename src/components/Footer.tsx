import React from 'react';
import Link from 'next/link';
import { ExternalLink, MessageCircle, Mail } from 'lucide-react';

export function Footer({ siteName = 'SecOpsDaily' }: { siteName?: string }) {
  return (
    <footer className="sod-footer">
      <div className="sod-footer-content">
        <div className="sod-footer-top">
          <div className="sod-footer-brand-area">
            <div className="sod-footer-brand"><span>{siteName}</span></div>
            <p className="sod-footer-tagline">The cybersecurity tool directory. Discover SIEM, threat intel, pentesting, and compliance tools trusted by security teams worldwide.</p>
            <div className="sod-footer-socials">
              <a href="#" aria-label="Website"><ExternalLink size={16} /></a>
              <a href="#" aria-label="Community"><MessageCircle size={16} /></a>
              <a href="#" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
          <div className="sod-footer-links-grid">
            <div>
              <h4 className="sod-footer-heading">Explore</h4>
              <ul>
                <li><Link href="/">Today's Launches</Link></li>
                <li><Link href="/trends">Trending</Link></li>
                <li><Link href="/collections/this-week">Weekly Top</Link></li>
                <li><Link href="/collections/this-month">Monthly Top</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="sod-footer-heading">Categories</h4>
              <ul>
                <li><Link href="/category/siem">SIEM</Link></li>
                <li><Link href="/category/pentesting">Pentesting</Link></li>
                <li><Link href="/category/zero-trust">Zero Trust</Link></li>
                <li><Link href="/category/compliance">Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="sod-footer-heading">Directory</h4>
              <ul>
                <li><Link href="/submit">Submit Product</Link></li>
                <li><Link href="/sponsor">Sponsor</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sod-footer-bottom">
          <span>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</span>
          <span>Powered by the Publisher Ad Network</span>
        </div>
      </div>
    </footer>
  );
}
