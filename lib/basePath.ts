// The sub-path this site is deployed under. MUST match `basePath` in next.config.mjs.
// Next.js auto-prefixes framework assets (_next, fonts), next/link and next/image with
// basePath — but it does NOT rewrite plain <img src="/..."> strings, so we prefix those
// ourselves via asset().
export const BASE_PATH = "/spark";

/** Prefix an absolute (root-relative) asset path with the deployment base path. */
export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
