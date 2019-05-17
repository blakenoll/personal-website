module.exports = {
  siteMetadata: {
    title: 'Blake Noll',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Blake Noll - Software Engineer',
        short_name: 'blakenoll',
        start_url: '/',
        background_color: '#383c4b',
        theme_color: '#60B0EF',
        display: 'standalone',
        icon: 'src/images/bLogo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
  ],
}
