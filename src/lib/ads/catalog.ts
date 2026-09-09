import type { Product, ProductPage, GetProductsOptions, SiteConfig } from './types';
import { request, mockMode } from './client';

const MOCK_PRODUCTS: Product[] = [
  {
    "id": "sec-1",
    "title": "Trivy Scanner",
    "tagline": "Comprehensive security scanner for container images, file systems, Git repos, and cloud configs",
    "link": "https://trivy.dev",
    "category": "CI/CD & DevOps",
    "upvotes": 510,
    "tags": [
      "security",
      "containers",
      "cve"
    ],
    "techStack": [
      "Go",
      "Docker",
      "Kubernetes"
    ],
    "maker": {
      "name": "Aqua Security",
      "avatar": "https://placehold.co/64x64/ef4444/ffffff?text=TV"
    }
  },
  {
    "id": "sec-2",
    "title": "Gitleaks",
    "tagline": "Fast secret detector that audits git repositories for hardcoded API keys, passwords, and private tokens",
    "link": "https://gitleaks.io",
    "category": "Developer Tools",
    "upvotes": 470,
    "tags": [
      "secrets",
      "git",
      "cli"
    ],
    "techStack": [
      "Go",
      "Regex"
    ],
    "maker": {
      "name": "Zachary Rice",
      "avatar": "https://placehold.co/64x64/f59e0b/ffffff?text=GL"
    }
  },
  {
    "id": "sec-3",
    "title": "Wiz Cloud",
    "tagline": "Agentless cloud security platform that correlates risks across compute, network, identity, and data",
    "link": "https://wiz.io",
    "category": "Automation",
    "upvotes": 420,
    "tags": [
      "cloud-security",
      "cspm",
      "enterprise"
    ],
    "techStack": [
      "Cloud",
      "Graph DB"
    ],
    "maker": {
      "name": "Assaf Rappaport",
      "avatar": "https://placehold.co/64x64/3b82f6/ffffff?text=WZ"
    }
  },
  {
    "id": "sec-4",
    "title": "Snyk Code",
    "tagline": "Developer-first static code analysis (SAST) and open source dependency vulnerability scanning",
    "link": "https://snyk.io",
    "category": "Developer Tools",
    "upvotes": 390,
    "tags": [
      "sast",
      "sca",
      "devsecops"
    ],
    "techStack": [
      "TypeScript",
      "Java",
      "AI"
    ],
    "maker": {
      "name": "Guy Podjarny",
      "avatar": "https://placehold.co/64x64/10b981/ffffff?text=SN"
    }
  },
  {
    "id": "sec-5",
    "title": "Tailscale",
    "tagline": "Zero-config mesh VPN built on WireGuard that creates secure encrypted point-to-point networks",
    "link": "https://tailscale.com",
    "category": "CI/CD & DevOps",
    "upvotes": 380,
    "tags": [
      "vpn",
      "wireguard",
      "networking"
    ],
    "techStack": [
      "Go",
      "WireGuard",
      "Rust"
    ],
    "maker": {
      "name": "Avery Pennarun",
      "avatar": "https://placehold.co/64x64/a78bfa/ffffff?text=TS"
    }
  },
  {
    "id": "sec-6",
    "title": "1Password Dev",
    "tagline": "Developer tools to manage secrets, SSH keys, biometric Git commits, and service accounts securely",
    "link": "https://developer.1password.com",
    "category": "Productivity",
    "upvotes": 350,
    "tags": [
      "secrets",
      "ssh",
      "vault"
    ],
    "techStack": [
      "Rust",
      "Swift",
      "Electron"
    ],
    "maker": {
      "name": "1Password Team",
      "avatar": "https://placehold.co/64x64/ec4899/ffffff?text=1P"
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
  return data?.site ?? MOCK_SITE;
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

  if (!data || !data.products || data.products.length === 0) {
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted =
      options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  return data;
}

export async function getProduct(id: string, timeoutMs?: number): Promise<Product | null> {
  if (mockMode()) return MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];

  const data = await request<{ product: Product }>(
    `/api/v1/catalog/products/${encodeURIComponent(id)}`,
    {},
    timeoutMs,
    'getProduct',
  );
  return data?.product ?? MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];
}
