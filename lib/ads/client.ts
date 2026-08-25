export const DEFAULT_TIMEOUT_MS = 8000;

export class BrowserCallError extends Error {}

export function readEnv(caller: string): { base: string; key: string } | null {
  if (typeof window !== 'undefined') {
    throw new BrowserCallError(`[ads] ${caller}() is server-only — it reads a secret API key.`);
  }

  const base = process.env.PEERLIST_ADS_URL?.replace(/\/$/, '');
  const key = process.env.PEERLIST_ADS_KEY;

  if (!base || !key) {
    console.warn(`[ads] PEERLIST_ADS_URL or PEERLIST_ADS_KEY is not set; ${caller}() returned nothing.`);
    return null;
  }

  return { base, key };
}

export function mockMode(): '1' | 'empty' | null {
  const mock = process.env.PEERLIST_ADS_MOCK;
  if (!mock || mock === '0') return null;
  return mock === 'empty' ? 'empty' : '1';
}

export async function request<T>(
  path: string,
  params: Record<string, string | undefined>,
  timeoutMs = DEFAULT_TIMEOUT_MS,
  caller = 'request',
): Promise<T | null> {
  const env = readEnv(caller);
  if (!env) return null;

  const search = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== '') search.set(k, v);
  }
  const query = search.toString();

  try {
    const res = await fetch(`${env.base}${path}${query ? `?${query}` : ''}`, {
      headers: { Authorization: `Bearer ${env.key}` },
      cache: 'no-store',
      signal: AbortSignal.timeout(timeoutMs),
    });

    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}
