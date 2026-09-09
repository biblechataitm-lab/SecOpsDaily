import React from 'react';
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
                <li><a href="/">Today's Launches</a></li>
                <li><a href="/trends">Trending</a></li>
                <li><a href="/collections/this-week">Weekly Top</a></li>
                <li><a href="/collections/this-month">Monthly Top</a></li>
              </ul>
            </div>
            <div>
              <h4 className="sod-footer-heading">Categories</h4>
              <ul>
                <li><a href="/category/siem">SIEM</a></li>
                <li><a href="/category/pentesting">Pentesting</a></li>
                <li><a href="/category/zero-trust">Zero Trust</a></li>
                <li><a href="/category/compliance">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="sod-footer-heading">Directory</h4>
              <ul>
                <li><a href="/submit">Submit Product</a></li>
                <li><a href="/sponsor">Sponsor</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
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
