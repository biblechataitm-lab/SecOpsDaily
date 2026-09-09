'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, TrendingUp } from 'lucide-react';

export function HeroLanding() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const children = hero.querySelectorAll('.sod-animate');
    children.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(24px)';
      setTimeout(() => {
        htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 100 + i * 100);
    });
  }, []);

  return (
    <section ref={heroRef} className="sod-hero">
      <div className="sod-hero-bg" aria-hidden="true" />
      <div className="sod-hero-container">
        <div className="sod-hero-content">
          <div className="sod-animate sod-hero-badge">
            <span>Security Operations Intelligence</span>
          </div>
          <h1 className="sod-animate sod-hero-title">
            Secure Your Stack with{' '}
            <span className="sod-accent-text">Trusted Security Tools</span>
          </h1>
          <p className="sod-animate sod-hero-subtitle">
            Discover 1,100+ cybersecurity tools — from SIEM platforms and threat intel to pentesting frameworks, zero-trust solutions, and compliance automation.
          </p>
          <form
            className="sod-animate sod-hero-search"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input');
              if (input?.value.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(input.value.trim())}`;
              }
            }}
          >
            <Search size={16} className="sod-hero-search-icon" />
            <input type="text" placeholder="Search security tools, SIEM..." />
            <button type="submit">Explore <ArrowRight size={14} /></button>
          </form>
          <div className="sod-animate sod-hero-tags">
            <Link href="/category/ai" className="sod-tag">AI Security</Link>
            <Link href="/category/developer-tools" className="sod-tag">DevSecOps</Link>
            <Link href="/category/productivity" className="sod-tag">Compliance</Link>
            <Link href="/trends" className="sod-tag sod-tag-hot">
              <TrendingUp size={12} /> Trending
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
