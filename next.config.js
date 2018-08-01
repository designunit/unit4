const withLess = require('@zeit/next-less')

const production = process.env.NODE_ENV === 'production';
const repo = 'designunit4'

module.exports = withLess({
	assetPrefix: production
		? `/${repo}`
		: '',
})
