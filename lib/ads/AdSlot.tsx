'use client';

import React, { useEffect, useRef } from 'react';
import type { Ad } from './types';
import { VISITOR_COOKIE } from './types';

const VIEWABLE_RATIO = 0.5;
const VIEWABLE_DWELL_MS = 1000;
const VISITOR_COOKIE_DAYS = 180;

function ensureVisitorCookie(): void {
  if (typeof document === 'undefined') return;
  if (document.cookie.includes(`${VISITOR_COOKIE}=`)) return;

  const id =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  const maxAge = VISITOR_COOKIE_DAYS * 24 * 60 * 60;
  document.cookie = `${VISITOR_COOKIE}=${id}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function useAdTracking(ad: Ad | null) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reported = useRef(false);

  useEffect(() => {
    ensureVisitorCookie();
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!ad || !element || reported.current) return;
    if (typeof IntersectionObserver === 'undefined') return;

    let dwellTimer: ReturnType<typeof setTimeout> | null = null;

    const report = () => {
      if (reported.current) return;
      reported.current = true;

      const body = JSON.stringify({
        events: [{ token: ad.token, type: 'view', ts: Date.now() }],
      });

      try {
        if (navigator.sendBeacon) {
          navigator.sendBeacon(ad.eventsUrl, new Blob([body], { type: 'application/json' }));
          return;
        }
      } catch {
        // fallback
      }

      void fetch(ad.eventsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
      }).catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= VIEWABLE_RATIO) {
          dwellTimer ??= setTimeout(() => {
            report();
            observer.disconnect();
          }, VIEWABLE_DWELL_MS);
        } else if (dwellTimer) {
          clearTimeout(dwellTimer);
          dwellTimer = null;
        }
      },
      { threshold: [VIEWABLE_RATIO] },
    );

    observer.observe(element);

    return () => {
      if (dwellTimer) clearTimeout(dwellTimer);
      observer.disconnect();
    };
  }, [ad]);

  return ref;
}

export function AdSlot({
  ad,
  className,
  style,
}: {
  ad: Ad | null;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useAdTracking(ad);

  if (!ad) return null;

  return (
    <div ref={ref} className={`sponsor-ad-card ${className || ''}`} style={style}>
      <a
        href={ad.clickUrl}
        target="_blank"
        rel="noopener sponsored"
        style={{
          display: 'flex',
          gap: 'var(--spacing-md)',
          alignItems: 'flex-start',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        {ad.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={ad.imageUrl}
            alt=""
            width={48}
            height={48}
            style={{
              width: 48,
              height: 48,
              borderRadius: 'var(--radius-main)',
              objectFit: 'cover',
              flexShrink: 0,
              border: '1px solid var(--border-color)',
            }}
          />
        )}
        <div style={{ minWidth: 0, flex: 1 }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              fontWeight: 600,
              color: 'var(--color-primary)',
              marginBottom: '4px',
            }}
          >
            {ad.sponsoredLabel || 'Promoted'}
          </span>
          <div
            style={{
              fontWeight: 600,
              fontSize: '15px',
              fontFamily: 'var(--font-display)',
              color: 'var(--text-ink)',
              lineHeight: 1.2,
            }}
          >
            {ad.title}
          </div>
          <div
            style={{
              fontSize: '13px',
              color: 'var(--text-body)',
              marginTop: '4px',
              lineHeight: 1.4,
            }}
          >
            {ad.description}
          </div>
        </div>
      </a>
    </div>
  );
}
