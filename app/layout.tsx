import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSiteConfig } from '@/lib/ads';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Maintenance } from '@/components/Maintenance';
import './globals.css';

export const metadata: Metadata = {
  title: 'SecOpsDaily — Curated cybersecurity tooling, threat intelligence, and zero-trust software',
  description: 'Curated cybersecurity tooling, threat intelligence, and zero-trust software',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const config = await getSiteConfig();

  if (config?.status === 'disabled') notFound();
  if (config?.status === 'maintenance') {
    return (
      <html lang="en" suppressHydrationWarning>
        <body><Maintenance message={config.statusMessage} /></body>
      </html>
    );
  }

  const siteName = config?.name || 'SecOpsDaily';

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header siteName={siteName} />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer siteName={siteName} />
        </div>
      </body>
    </html>
  );
}
