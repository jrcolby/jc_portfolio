/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:{
    title: "Jim Colby",
    description: "Jim Colby's Portfolio",
    url: "https://www.jimcolby.com",
    image: "/images/cucumberman.jpg",
  },
  plugins: [`gatsby-plugin-sass`,
            `gatsby-plugin-react-helmet`,
            `gatsby-plugin-sharp`,
             `gatsby-transformer-sharp`,
             {
               resolve: `gatsby-plugin-mdx`,
               options: {
                 extensions: [`.md`, `.mdx`],
                gatsbyRemarkPlugins: [
                  {
                  resolve: `gatsby-remark-images`,
                  options:{
                    maxWidth: 1200,
                  }
                  },
                ],
               }
             },
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `posts`,
                path: `${__dirname}/src/posts/`,
              }
            },
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
              }
            },
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            
            {
              family: `Space Mono`,
              variants: [`400`, `700`]
            },
            {
              family: `Rubik Mono One`,
              varitants: [`400`]
            },
          ],
        },
      },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
   ]
}
