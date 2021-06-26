module.exports = {
  siteMetadata: {
    title: `Siddharth Vijay`,
    description: `Personal Portfolio Website for Siddharth Vijay. Software development portfolio.`,
    author: `@siddvader333`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
