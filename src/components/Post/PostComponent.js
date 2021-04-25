import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'components/Link';

const Post = styled.article`
  margin-bottom: 3rem;
`;

const PostHeading = styled.h1`
  margin-bottom: 0;
`;

const PostMeta = styled.p`
  margin-bottom: 0.75rem;
`;

const PostDate = styled.time``;

const TimeToRead = styled.span.attrs(({ children }) => {
  const icon = <FontAwesomeIcon icon="stopwatch" />;
  const unit = children > 1 ? 'minutes' : 'minute';

  return {
    children: <>
      {' '}
      {icon}
      {` ${children} ${unit} read`}
    </>,
  };
})``;

const PostComponent = ({ href, heading, excerpt, date, timeToRead }) => (
  <Post>
    <header>
      <PostHeading>
        <Link href={href}>{heading}</Link>
      </PostHeading>
      <PostMeta>
        <small>
          <em>
            <PostDate dateTime={date}>
              {date}
            </PostDate>
            {' • '}
            <TimeToRead>{timeToRead}</TimeToRead>
          </em>
        </small>
      </PostMeta>
    </header>
    <p>{excerpt}</p>
  </Post>
);

export default PostComponent;
