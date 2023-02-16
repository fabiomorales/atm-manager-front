/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.BASE_PATH ?? '',
  i18n: {
    localeDetection: false,
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
  },
  compiler: {
    styledComponents: true,
  },
  serverRuntimeConfig: {
    NEXT_PUBLIC_ENV_VARIABLE_ATM_MANAGER: process.env.NEXT_PUBLIC_ENV_VARIABLE_ATM_MANAGER ?? '',
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_ENV_VARIABLE_ATM_MANAGER: process.env.NEXT_PUBLIC_ENV_VARIABLE_ATM_MANAGER ?? '',
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
