const withVideos = require('next-videos');
const withPlugins = require('next-compose-plugins');


const nextConfig = {
	i18n: {
		locales: ['fr', 'en'], defaultLocale: 'fr',
	},
};

module.exports = async (phase) => withPlugins([withVideos], nextConfig)(phase, {undefined});