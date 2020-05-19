import { graphql } from 'gatsby';

export { default } from './PostListLayoutComponent';

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { type: { eq: "POST" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "DD MMM YYYY")
            title
          }
          fields {
            slug
          }
          timeToRead
          headings(depth: h1) {
            value
          }
        }
      }
    }
  }
`;
