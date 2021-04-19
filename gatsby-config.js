require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Nick Worrall | Modern Web Developer`,
    description: `I create beautiful and functional websites using React, JavaScript, Gatsby,js, Next.js with the CMS of your choice.`,
    author: `@xylophonehero`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ny1gz60bo252`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1a202c`,
        theme_color: `#1a202c`,
        display: `minimal-ui`,
        icon: `src/images/logo-site.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
  ],
}
