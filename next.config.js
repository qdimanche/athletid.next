const withVideos = require('next-videos');
const withPlugins = require('next-compose-plugins');

module.exports = async (phase) => withPlugins([withVideos])(phase, {undefined});