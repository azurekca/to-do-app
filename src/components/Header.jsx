import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';

export default function Header({ taskCount }) {
  return (
    <HeaderWrapper>
      <Title>To Do</Title>
      <Count>{taskCount}</Count>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  taskCount: PropTypes.number.isRequired
};

const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  gap: 2rem;
`;

const Title = styled.h1``;

const Count = styled.span``;
