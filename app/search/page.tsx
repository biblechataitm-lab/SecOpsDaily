import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { getProducts } from '@/lib/ads';
import { CategoryChips } from '@/components/CategoryChips';
import { ProductListWithPagination } from '@/components/ProductListWithPagination';
import { Sidebar } from '@/components/Sidebar';
import { ProductListSkeleton, SidebarSkeleton } from '@/components/Skeleton';

export const revalidate = 0;

interface SearchPageProps { searchParams: Promise<{ q?: string }>; }

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  return { title: q ? `Search results for "${q}" — SecOpsDaily` : 'Search — SecOpsDaily' };
}

async function SearchFeed({ q }: { q?: string }) {
  const { products, nextCursor } = await getProducts({ q });
  return <ProductListWithPagination initialProducts={products} initialNextCursor={nextCursor} fetchOptions={{ q }} emptyTitle={`No results for "${q || ''}"`} />;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  return (
    <div className="container main-layout">
      <section>
        <CategoryChips />
        <div className="section-header">
          <div>
            <h1 className="section-title">{q ? `Search: "${q}"` : 'Search Directory'}</h1>
            <p className="section-subtitle">Browsing results for security</p>
          </div>
        </div>
        <Suspense fallback={<ProductListSkeleton count={4} />}>
          <SearchFeed q={q} />
        </Suspense>
      </section>
      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar />
      </Suspense>
    </div>
  );
}
