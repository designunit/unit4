const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withMdx = require('@next/mdx')()

const production = process.env.NODE_ENV === 'production';

const themeVariables = {
    '@font-family': `'Roboto', sans-serif`,
    '@font-size-base': '18px',
    '@text-color': 'black',
}

module.exports = withMdx(withCss(withLess({
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