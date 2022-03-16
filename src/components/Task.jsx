import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import { Button, Checkbox, VisuallyHidden } from './lib';

export default function Task({ task, toggleTaskDone, deleteTask }) {
  return (
    <TaskWrapper className={task.done && 'done'}>
      <Checkbox
        id={task.id}
        type='checkbox'
        checked={task.done}
        onChange={() => toggleTaskDone(task.id)}
      />
      <label htmlFor={task.id}>{task.label}</label>
      <DeleteButton onClick={() => deleteTask(task.id)}>
        <X />
        <VisuallyHidden>delete task</VisuallyHidden>
      </DeleteButton>
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
  background-color: hsl(var(--primary-hsl) / 0.05);
  color: hsl(var(--hue) var(--saturation) 35%);
  align-items: center;
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
`;

const DeleteButton = styled(Button)`
  color: var(--primary-color);
  background-color: transparent;
  font-size: 1.5rem;
  margin-left: auto;
  :hover {
    color: hsl(var(--primary-hue) var(--primary-saturation) 70%);
  }
`;

const X = () => <span>&#215;</span>;
