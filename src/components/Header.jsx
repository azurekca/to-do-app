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
  gap: var(--fluid-padding);
`;

const Title = styled.h1`
  font-size: var(--fluid-title);
  color: white;
`;

const Count = styled.span`
  color: white;
  font-size: var(--fluid-body);
  font-variant: small-caps;
`;
