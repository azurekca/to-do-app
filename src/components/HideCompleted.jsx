import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { Checkbox } from './lib';

export default function HideCompleted({ hideCompleted, toggleHideCompleted }) {
  return (
    <Wrapper>
      <Checkbox
        name='hide-completed'
        type='checkbox'
        checked={hideCompleted}
        onChange={toggleHideCompleted}
      />
      <label htmlFor='hide-completed'>Hide Completed Tasks</label>
    </Wrapper>
  );
}

HideCompleted.propTypes = {
  hideCompleted: PropTypes.bool,
  toggleHideCompleted: PropTypes.func
};

const Wrapper = styled.div`
  align-items: baseline;
  color: white;
  display: flex;
  gap: 4px;
  margin-left: auto;
`;
