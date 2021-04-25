const emoji = require('remark-emoji');

const gatsbyRemarkImagesPlugin = {
  resolve: 'gatsby-remark-images',
  options: {
    maxWidth: 756,
    linkImagesToOriginal: false,
    showCaptions: ['title', 'alt'],
    markdownCaptions: false,
  },
};

module.exports = {
  siteMetadata: {
    title: "prdxs' website",
    description:
      'Career and contact information, tech posts and other kinds of texts.',
    author: 'Rubén Fernández Butrón',
  },
  plugins: [
    // Webpack aliases
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          components: 'src/components',
          layouts: 'src/layouts',
          pages: 'src/pages',
          themes: 'src/themes',
          utils: 'src/utils',
        },
      },
    },

    // Edits the <head> with title, SEO elements and others in SSR time
    'gatsby-plugin-react-helmet',

    // Data filesystem sources
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },

    // Gives several image processing methods to use in GraphQL queries (usually used by other
    // plugins)
    'gatsby-plugin-sharp',
    /**
     * Creates ImageSharp nodes from image types that are supported by the Sharp image
     * processing library and provides fields in their GraphQL types for processing your images
     * in a variety of ways including resizing, cropping, and creating responsive images.
     */
    'gatsby-transformer-sharp',

    // Processes images in markdown.
    gatsbyRemarkImagesPlugin,

    // Adds web app manifest
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#263238',
        theme_color: '#000a12',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',

    // Built-in server-side rendering support for Styled Components.
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
        pure: true,
      },
    },

    'gatsby-plugin-layout',

    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/themes/defaultLightTheme/typography',
      },
    },

    // Allows use to use JSX React components within Markdown files
    // (it uses gatsby-plugin-remark under the hood)
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          pages: require.resolve('./src/layouts/MdxPageInnerLayout/index.js'),
          posts: require.resolve('./src/layouts/MdxPostInnerLayout/index.js'),
        },
        gatsbyRemarkPlugins: [
          gatsbyRemarkImagesPlugin,
          // needed for generating syntax highlighted code
          { resolve: 'gatsby-remark-prismjs' },
        ],
        remarkPlugins: [emoji],
      },
    },

    // ESLint
    'gatsby-plugin-eslint',
  ],
};
