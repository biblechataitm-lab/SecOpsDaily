export interface SiteConfig {
  key: string;
  name: string;
  domain: string;
  category: string;
  tags: string[];
  status: 'live' | 'maintenance' | 'disabled';
  statusMessage: string | null;
  slots: Array<{ key: string; slotType: string; format: string }>;
}

export interface ProductMaker {
  name: string;
  username: string;
  avatar: string;
}

export interface Product {
  id: string;
  title: string;
  tagline: string;
  description: string;
  logo: string;
  link: string;
  category: string;
  tags: string[];
  techStack: string[];
  coverImages: string[];
  upvotes: number;
  launchedAt: string;
  maker: ProductMaker | null;
}

export interface ProductPage {
  products: Product[];
  nextCursor: string | null;
  appliedTags: string[];
}

export interface Ad {
  title: string;
  description: string;
  imageUrl: string | null;
  clickUrl: string;
  sponsoredLabel: string;
  token: string;
  eventsUrl: string;
}

export interface GetProductsOptions {
  tags?: string[];
  category?: string;
  q?: string;
  since?: 'today' | 'week' | 'month' | 'year' | string;
  sort?: 'top' | 'new' | 'featured';
  limit?: number;
  cursor?: string;
  timeoutMs?: number;
}

export interface GetAdOptions {
  slot: string;
  visitorId?: string | null;
  url?: string;
  timeoutMs?: number;
}

export const VISITOR_COOKIE = 'plads_vid';
