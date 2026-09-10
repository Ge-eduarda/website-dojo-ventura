const hits = new Map<string, number[]>();

export function checkRateLimit(
  key: string,
  opts: { maxRequests?: number; windowSeconds?: number } = {}
): { allowed: boolean; resetInSeconds: number } {
  const max = opts.maxRequests ?? 5;
  const win = (opts.windowSeconds ?? 600) * 1000;
  const now = Date.now();
  const arr = (hits.get(key) ?? []).filter((t) => now - t < win);
  if (arr.length >= max) {
    const oldest = arr[0] ?? now;
    return { allowed: false, resetInSeconds: Math.ceil((oldest + win - now) / 1000) };
  }
  arr.push(now);
  hits.set(key, arr);
  return { allowed: true, resetInSeconds: 0 };
}
