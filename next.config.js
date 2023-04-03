const withVideos = require('next-videos');
const withPlugins = require('next-compose-plugins');


const nextConfig = {
};

module.exports = async (phase) => withPlugins([withVideos], nextConfig)(phase, {undefined});