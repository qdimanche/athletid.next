const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;


/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://athletid.com',
    generateRobotsTxt: true, // (optional)
    // ...other options
    additionalSitemaps: [
        `${siteUrl}sitemap.xml`,
        `${siteUrl}server-sitemap.xml`,
    ],
}