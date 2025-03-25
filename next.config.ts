import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // exportTrailingSlash: true,
};

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(nextConfig);
