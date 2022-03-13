import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import { VisuallyHidden } from './lib';

export default function Task({ task, toggleTaskDone, deleteTask }) {
  return (
    <TaskWrapper>
      <input
        id={task.id}
        type='checkbox'
        value={task.done}
        onChange={() => toggleTaskDone(task.id)}
      />
      <label htmlFor={task.id}>{task.label}</label>
      <Button onClick={() => deleteTask(task.id)}>
        <X />
        <VisuallyHidden>delete task</VisuallyHidden>
      </Button>
    </TaskWrapper>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  })
};

const TaskWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: white;
  font-size: 2rem;
  line-height: 0;
  margin-left: auto;
  padding: 0;
  width: 32px;
  height: 32px;
`;

const X = () => <span>&#215;</span>;
