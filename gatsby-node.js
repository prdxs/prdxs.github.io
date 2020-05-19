/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  const isMdxNode = node.internal.type === 'Mdx';
  const isPostNode = node.fileAbsolutePath && node.fileAbsolutePath.includes('/posts/');
  if (isMdxNode && isPostNode) {
    const value = createFilePath({ node, getNode });
    const parts = value.split('/').filter(part => part !== "");
    const lastPart = parts.pop();
    const slug = `/${lastPart}/`

    console.log("node creation", value);

    createNodeField({
      // Individual MDX node
      node,
      // Name of the field you are adding
      name: 'slug',
      // Generated value based on filepath with "post" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/post${slug}`,
    });

    createNodeField({
      node,
      name: 'type',
      value: 'POST',
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fields: { type: { eq: "POST" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create post pages:
  const posts = result.data.allMdx.edges;
  const mdxPostInnerLayout = path.resolve(
    './src/layouts/MdxPostInnerLayout/index.js'
  );

  posts.forEach(({ node }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: mdxPostInnerLayout,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });

  // Create posts list page:
  const postsPerPage = 20;
  const numPages = Math.ceil(posts.length / postsPerPage);
  const postListLayout = path.resolve('./src/layouts/PostListLayout/index.js')

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/posts' : `/posts/${i + 1}`,
      component: postListLayout,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
