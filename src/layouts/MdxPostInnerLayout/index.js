import { graphql } from 'gatsby';

import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Link from 'components/Link';
import Seo from 'components/Seo';

const components = { a: Link };

const MdxInnerLayout = ({ data }) => {
  const { mdx } = data || {};
  const { body, frontmatter } = mdx || {};
  const { date, seo } = frontmatter || {};
  
  return (
    <>
      <Seo {...seo} />
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </>
  );
};

MdxInnerLayout.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MdxInnerLayout;

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date(formatString: "DD MMM YYYY")
        seo {
          title
          description
        }
      }
    }
  }
`;