import React from 'react';

import Post from 'components/Post';

const PostListLayoutComponent = ({ data }) => {
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

export default PostListLayoutComponent;
