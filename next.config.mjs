import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export → produces an `out/` folder you can upload to any web server.
  output: "export",
  // Hosted under http://<host>/spark/ — keep in sync with BASE_PATH in lib/basePath.ts.
  basePath: "/spark",
  // Generates /about/index.html etc. — works reliably on Apache/Nginx/cPanel.
  trailingSlash: true,
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
