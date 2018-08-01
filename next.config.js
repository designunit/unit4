const withLess = require('@zeit/next-less')

const debug = process.env.NODE_ENV !== "production";

module.exports = withLess({
	assetPrefix: !debug ? '/designunit4/' : '',
})
