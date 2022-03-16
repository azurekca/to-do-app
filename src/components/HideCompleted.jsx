import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { Checkbox, Label } from './lib';

export default function HideCompleted({ hideCompleted, toggleHideCompleted }) {
  return (
    <Wrapper>
      <Checkbox
        id='hide-completed'
        type='checkbox'
        checked={hideCompleted}
        onChange={toggleHideCompleted}
      />
      <Label htmlFor='hide-completed'>Hide Completed Tasks</Label>
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
