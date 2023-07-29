module.exports = {
	plugins: [
		require('autoprefixer'),
		require('cssnano'),
		require({ 'postcss-inline-svg': { paths: ['src/assets'] } }),
	],
};
