import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import { MainWrapper } from './lib';
import HideCompleted from './HideCompleted';

export default function Header({ taskCount, ...delegated }) {
  return (
    <HeaderWrapper>
      <InnerWrapper>
        <Title>To Do</Title>
        <Count>total: {taskCount}</Count>
        <HideCompleted {...delegated} />
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
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Title = styled.h1`
  color: white;
`;

const Count = styled.span`
  color: white;
  font-size: 1.1rem;
  font-variant: small-caps;
`;
