'use client';

import React, { useState } from 'react';
import type { Product, GetProductsOptions } from '@/lib/ads';
import { ProductCard } from '@/components/ProductCard';
import { fetchMoreProductsAction } from '@/app/actions';
import { Loader2 } from 'lucide-react';

interface ProductListWithPaginationProps {
  initialProducts: Product[];
  initialNextCursor: string | null;
  fetchOptions?: GetProductsOptions;
  emptyTitle?: string;
  emptyDescription?: string;
}

export function ProductListWithPagination({
  initialProducts,
  initialNextCursor,
  fetchOptions = {},
  emptyTitle = 'No Products Found',
  emptyDescription = 'No products matching this criteria yet.',
}: ProductListWithPaginationProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [nextCursor, setNextCursor] = useState<string | null>(initialNextCursor);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    if (!nextCursor || loading) return;
    setLoading(true);
    try {
      const res = await fetchMoreProductsAction({ ...fetchOptions, cursor: nextCursor });
      setProducts((prev) => [...prev, ...res.products]);
      setNextCursor(res.nextCursor);
    } catch (err) {
      console.error('Failed to load more products:', err);
    } finally {
      setLoading(false);
    }
  };

  if (products.length === 0) {
    return (
      <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-main)', border: '1px solid var(--border-color)' }}>
        <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>{emptyTitle}</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{emptyDescription}</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {nextCursor && (
        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
          <button onClick={handleLoadMore} disabled={loading} className="btn-outline" style={{ width: '100%', maxWidth: '240px' }}>
            {loading ? <><Loader2 size={16} className="animate-spin" /> Loading...</> : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}
