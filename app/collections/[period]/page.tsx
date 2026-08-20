import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProducts } from '@/lib/ads';
import { CategoryChips } from '@/components/CategoryChips';
import { ProductListWithPagination } from '@/components/ProductListWithPagination';
import { Sidebar } from '@/components/Sidebar';
import { ProductListSkeleton, SidebarSkeleton } from '@/components/Skeleton';

export const revalidate = 0;

interface CollectionPageProps { params: Promise<{ period: string }>; }

const PERIOD_CONFIG: Record<string, { title: string; subtitle: string; since: string }> = {
  'this-week': { title: "This Week's Top Picks", subtitle: 'Best launches from the past 7 days', since: 'week' },
  'this-month': { title: "This Month's Top Picks", subtitle: 'Best launches from the past 30 days', since: 'month' },
};

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { period } = await params;
  const config = PERIOD_CONFIG[period];
  if (!config) return { title: 'Collection Not Found' };
  return { title: `${config.title} — SecOpsDaily` };
}

async function CollectionFeed({ since }: { since: string }) {
  const { products, nextCursor } = await getProducts({ since, sort: 'top' });
  return <ProductListWithPagination initialProducts={products} initialNextCursor={nextCursor} fetchOptions={{ since, sort: 'top' }} />;
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { period } = await params;
  const config = PERIOD_CONFIG[period];
  if (!config) notFound();

  return (
    <div className="container main-layout">
      <section>
        <CategoryChips />
        <div className="section-header">
          <div>
            <h1 className="section-title">{config.title}</h1>
            <p className="section-subtitle">{config.subtitle}</p>
          </div>
        </div>
        <Suspense fallback={<ProductListSkeleton count={4} />}>
          <CollectionFeed since={config.since} />
        </Suspense>
      </section>
      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar />
      </Suspense>
    </div>
  );
}
