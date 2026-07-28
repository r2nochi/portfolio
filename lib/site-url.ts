const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

export const siteUrl = new URL(configuredUrl);
