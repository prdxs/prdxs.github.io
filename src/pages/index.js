import React from 'react';
import styled from 'styled-components';

import Seo from 'components/Seo';
import Link from 'components/Link';

const Intro = styled.div`
  font-size: 1.6rem;
`;

const AboutPage = () => (
  <Intro>
    <Seo title="About" description="Hi, Software Engineer" />
    <p>Hi, I’m Rubén Fernández-Butrón.</p>
    <p>
      I'm building web frontend apps using Typescript and React and APIs using Typescript Node, Express
      and AWS services at <Link href="https://www.missguided.co.uk/">Missguided</Link>.
    </p>
    <p>
      Currently, I want to learn more on backend systems, data science and web design but I am also
      interested in music and science.
    </p>
    <p><Link href="mailto:rub.fndz@gmail.com">Get in touch.</Link></p>
  </Intro>
);

export default AboutPage;
