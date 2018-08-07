const withLess = require('@zeit/next-less')

const production = process.env.NODE_ENV === 'production';

module.exports = withLess({
	assetPrefix: '',
})
