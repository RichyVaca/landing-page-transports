import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data:",
  "connect-src 'self'",
  "base-uri 'self'",
  "form-action 'none'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const injectCsp = () => ({
  name: "inject-csp",
  apply: "build",
  transformIndexHtml() {
    return [
      {
        tag: "meta",
        attrs: {
          "http-equiv": "Content-Security-Policy",
          content: contentSecurityPolicy,
        },
        injectTo: "head-prepend",
      },
    ];
  },
});

export default defineConfig({
  base: "/landing-page-transports/",
  plugins: [react(), injectCsp()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});
