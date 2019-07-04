const withLess = require('@zeit/next-less')
const withMdx = require('@next/mdx')()

const production = process.env.NODE_ENV === 'production';

module.exports = withMdx(withLess({
    assetPrefix: '',
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}))
