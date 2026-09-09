'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Search, TrendingUp, PlusCircle, Menu, X } from 'lucide-react';

export function Header({ siteName = 'SecOpsDaily' }: { siteName?: string }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = '0';
      requestAnimationFrame(() => {
        if (headerRef.current) {
          headerRef.current.style.transition = 'opacity 0.4s ease';
          headerRef.current.style.opacity = '1';
        }
      });
    }
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <header ref={headerRef} className={`sod-nav ${scrolled ? 'sod-nav-scrolled' : ''}`}>
      <div className="sod-nav-inner">
        <a href="/" className="sod-nav-brand">
          <span className="sod-nav-brand-text">{siteName}</span>
        </a>
        <form onSubmit={handleSearchSubmit} className="sod-nav-search">
          <Search size={14} className="sod-nav-search-icon" />
          <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </form>
        <nav className="sod-nav-links">
          <a href="/trends" className={`sod-nav-link ${pathname === '/trends' ? 'active' : ''}`}>
            <TrendingUp size={13} /> Trends
          </a>
          <a href="/sponsor" className={`sod-nav-link ${pathname === '/sponsor' ? 'active' : ''}`}>Sponsor</a>
          <a href="/submit" className="sod-nav-cta"><PlusCircle size={14} /> Submit</a>
        </nav>
        <button className="sod-nav-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="sod-nav-mobile-menu">
          <a href="/trends" onClick={() => setMobileOpen(false)}>Trends</a>
          <a href="/sponsor" onClick={() => setMobileOpen(false)}>Sponsor</a>
          <a href="/submit" onClick={() => setMobileOpen(false)}>Submit</a>
          <a href="/about" onClick={() => setMobileOpen(false)}>About</a>
        </div>
      )}
    </header>
  );
}
