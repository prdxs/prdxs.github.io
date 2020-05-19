import React from 'react';
import styled from 'styled-components';

import Seo from 'components/Seo';
import Link from 'components/Link';

const Intro = styled.div`
  font-size: 1.6rem;
`;

const AboutPage = () => (
  <Intro>
    <Seo title="About" description="." />
    <p>Hi, I’m Rubén Fernández Butrón,</p>
    <p>Software Engineer at Ascend Diagnostics, Manchester, UK. I build web frontend systems using Javascript and React.</p>
    <p>Currently, I want to learn more on backend systems, data science and web design but I am also interested in philosophy, music and science in general.</p>
    <p><Link to="mailto:rub.fndz@gmail.com">Get in touch.</Link></p>
  </Intro>
);

export default AboutPage;
