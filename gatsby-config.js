/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Open Sans`,
              subsets: [`latin`],
            },
            {
              family: `Open Sans`,
              variants: [`400`, `600`],
            },
          ],
        },
      },
    },
  ],
}
