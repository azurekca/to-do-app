import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import { MainWrapper } from './lib';

export default function Header({ taskCount }) {
  return (
    <HeaderWrapper>
      <InnerWrapper>
        <Title>To Do</Title>
        <Count>{taskCount}</Count>
      </InnerWrapper>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  taskCount: PropTypes.number.isRequired
};

const HeaderWrapper = styled.header`
  background-color: var(--primary-color);
  box-shadow: var(--shadow-elevation-high);
`;

const InnerWrapper = styled(MainWrapper)`
  align-items: center;
  display: flex;
  gap: 2rem;
`;

const Title = styled.h1`
  color: white;
`;

const Count = styled.span`
  color: white;
  font-size: 1.5rem;
`;
