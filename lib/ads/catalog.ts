import type { Product, ProductPage, GetProductsOptions, SiteConfig } from './types';
import { request, mockMode } from './client';

const MOCK_PRODUCTS: Product[] = [
  {
    "id": "sec-1",
    "title": "SentinelGuard X",
    "tagline": "Autonomous runtime eBPF security daemon with real-time zero-day mitigation",
    "description": "Kernel-level intrusion detection and container runtime enforcement designed for Kubernetes clusters.",
    "logo": "https://placehold.co/96x96/0b1120/ef4444?text=SG",
    "link": "https://example.com/sentinelguard",
    "category": "Threat Intel & SIEM",
    "tags": [
      "security",
      "ebpf",
      "kubernetes"
    ],
    "techStack": [
      "C",
      "Rust",
      "eBPF",
      "Go"
    ],
    "coverImages": [],
    "upvotes": 528,
    "launchedAt": "2026-08-19T05:12:33.188Z",
    "maker": {
      "name": "Viktor Kane",
      "username": "vkane",
      "avatar": "https://placehold.co/64x64/151e32/ef4444?text=V"
    }
  }
];

const MOCK_SITE: SiteConfig = {
  "key": "secopsdaily",
  "name": "SecOpsDaily",
  "domain": "secopsdaily.com",
  "category": "security",
  "tags": [
    "security",
    "cybersecurity",
    "infosec",
    "zero-trust",
    "devsecops"
  ],
  "status": "live",
  "statusMessage": null,
  "slots": [
    {
      "key": "sidebar-1",
      "slotType": "sidebar",
      "format": "native"
    }
  ]
};

export async function getSiteConfig(timeoutMs?: number): Promise<SiteConfig | null> {
  if (mockMode()) return MOCK_SITE;
  const data = await request<{ site: SiteConfig }>('/api/v1/site', {}, timeoutMs, 'getSiteConfig');
  return data?.site ?? null;
}

export async function getProducts(options: GetProductsOptions = {}): Promise<ProductPage> {
  const mock = mockMode();
  if (mock) {
    if (mock === 'empty') return { products: [], nextCursor: null, appliedTags: [] };
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted = options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  const data = await request<ProductPage>(
    '/api/v1/catalog/products',
    {
      tags: options.tags?.join(','),
      category: options.category,
      q: options.q,
      since: options.since,
      sort: options.sort,
      limit: options.limit ? String(options.limit) : undefined,
      cursor: options.cursor,
    },
    options.timeoutMs,
    'getProducts',
  );

  return data ?? { products: [], nextCursor: null, appliedTags: [] };
}

export async function getProduct(id: string, timeoutMs?: number): Promise<Product | null> {
  if (mockMode()) return MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];

  const data = await request<{ product: Product }>(
    `/api/v1/catalog/products/${encodeURIComponent(id)}`,
    {},
    timeoutMs,
    'getProduct',
  );
  return data?.product ?? null;
}
