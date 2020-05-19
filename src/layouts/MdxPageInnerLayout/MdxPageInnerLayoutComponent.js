import React from 'react';

import Seo from 'components/Seo';

const MdxPageInnerLayoutComponent = ({ children, pageContext }) => {
  const { frontmatter } = pageContext || {};
  const { seo } = frontmatter || {};
  
  return (
    <>
      <Seo {...seo} />
      {children}
    </>
  );
};

export default MdxPageInnerLayoutComponent;
