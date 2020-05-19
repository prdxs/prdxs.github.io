import React from 'react';
import { graphql } from 'gatsby';

import Post from 'components/Post';

export default ({ data }) => {
  const {
    allMdx: { edges },
  } = data;

  return edges.map(({ node }) => {
    const { excerpt, fields, frontmatter, timeToRead, headings } = node;
    const { slug } = fields;
    const { date } = frontmatter;
    const firstHeading = headings[0] && headings[0].value;

    return (
      <Post
        href={slug}
        heading={firstHeading}
        excerpt={excerpt}
        timeToRead={timeToRead}
        date={date}
      />
    );
  });
};

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
