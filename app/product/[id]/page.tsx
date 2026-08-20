import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { marked } from 'marked';
import { getProduct, getAd, AdSlot, getSiteConfig } from '@/lib/ads';
import { ExternalLink, ChevronUp, ArrowLeft } from 'lucide-react';
import { SidebarSkeleton } from '@/components/Skeleton';
import { SafeImage } from '@/components/SafeImage';

export const revalidate = 0;

interface ProductPageProps { params: Promise<{ id: string }>; }

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) return { title: 'Product Not Found — SecOpsDaily' };

  return {
    title: `${product.title} — ${product.tagline} | SecOpsDaily`,
    description: product.description || product.tagline,
    openGraph: {
      title: product.title,
      description: product.tagline,
      images: product.coverImages.length > 0 ? product.coverImages : [product.logo],
    },
  };
}

async function ProductSidebar() {
  const config = await getSiteConfig();
  const slotKey = config?.slots?.[0]?.key || 'sidebar-1';
  const ad = await getAd({ slot: slotKey });

  return (
    <aside>
      <div className="sidebar-card">
        <div className="sidebar-card-title">Directory Info</div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-body)' }}>
          <div style={{ marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontWeight: 600 }}>Directory:</span>{' '}
            <strong style={{ color: 'var(--text-ink)' }}>{config?.name || 'SecOpsDaily'}</strong>
          </div>
          <div>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontWeight: 600 }}>Niche:</span>{' '}
            <span style={{ color: 'var(--text-body)' }}>{config?.tags?.join(', ') || 'security'}</span>
          </div>
        </div>
      </div>
      <AdSlot ad={ad} />
    </aside>
  );
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();

  const formattedDate = product.launchedAt
    ? new Date(product.launchedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null;

  const richHtmlDescription = await marked.parse(product.description || product.tagline);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.title,
    description: product.tagline,
    applicationCategory: product.category || 'DeveloperApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', ratingCount: product.upvotes || 1 },
    author: product.maker ? { '@type': 'Person', name: product.maker.name } : undefined,
    url: product.link,
  };

  return (
    <div className="container main-layout">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section>
        <Link href="/" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '1.5rem' }}>
          <ArrowLeft size={14} /> Back to Directory
        </Link>

        <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-main)', padding: '2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <SafeImage
              src={product.logo || ''}
              alt={product.title}
              fallbackText={product.title.slice(0, 2).toUpperCase()}
              style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-main)', objectFit: 'cover', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface-soft)' }}
            />
            <div style={{ flex: 1, minWidth: '240px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                <h1 style={{ fontSize: '2rem' }}>{product.title}</h1>
                {product.category && <span className="category-badge">{product.category}</span>}
              </div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: 1.45, marginBottom: '1.25rem' }}>{product.tagline}</p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <a href={product.link} target="_blank" rel="noopener" className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                  Visit Website <ExternalLink size={16} />
                </a>
                <div className="upvote-badge" style={{ padding: '0.65rem 1.25rem', gap: '6px' }}>
                  <ChevronUp size={16} style={{ color: 'var(--color-primary)' }} />
                  <span>{product.upvotes ?? 0} Upvotes</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.75rem', marginTop: '1.75rem' }}>
            <h3 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '1rem' }}>About {product.title}</h3>
            <div className="prose-body" dangerouslySetInnerHTML={{ __html: richHtmlDescription }} />
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {product.maker && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ width: '100px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontWeight: 600 }}>Maker:</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SafeImage src={product.maker.avatar} alt={product.maker.name} fallbackText={product.maker.name.charAt(0)} className="maker-avatar" style={{ width: '24px', height: '24px' }} />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-ink)' }}>{product.maker.name} (@{product.maker.username})</span>
                </div>
              </div>
            )}
            {formattedDate && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ width: '100px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontWeight: 600 }}>Launched:</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>{formattedDate}</span>
              </div>
            )}
            {product.tags && product.tags.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ width: '100px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontWeight: 600 }}>Tags:</span>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {product.tags.map((tag) => <span key={tag} className="chip">#{tag}</span>)}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Suspense fallback={<SidebarSkeleton />}>
        <ProductSidebar />
      </Suspense>
    </div>
  );
}
