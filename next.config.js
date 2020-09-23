const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withMdx = require('@next/mdx')()
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const production = process.env.NODE_ENV === 'production';
const localeSubpaths = {
    en: 'en',
}

const themeVariables = {
    '@font-family': `'Roboto', sans-serif`,
    '@font-size-base': '18px',
    '@text-color': 'black',
}

module.exports = withMdx(withCss(withLess({
    rewrites: async () => {
        return nextI18NextRewrites(localeSubpaths)
    },
    publicRuntimeConfig: {
        localeSubpaths,
    },
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
    },
    assetPrefix: '',
    useFileSystemPublicRoutes: false,
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx'],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    }
})))