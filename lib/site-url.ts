/**
 * Absolute production URL — used for canonical links, the sitemap, robots, and
 * Open Graph image URLs (which must be absolute).
 *
 * TODO(client): confirm the final domain. At deploy, set NEXT_PUBLIC_SITE_URL
 * in Vercel → Project → Settings → Environment Variables to override this.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kgeemediworld.com";
