import styled from 'styled-components';

const DefaultNavbarMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  > * {
    margin-right: 1.5rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default DefaultNavbarMenu;
