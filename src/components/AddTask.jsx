import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Input, VisuallyHidden } from './lib';

export default function AddTask({ addTask }) {
  // handle form submission
  const handleAdd = (event) => {
    // prevent page from reloading
    event.preventDefault();

    addTask({
      id: nanoid(),
      label: event.target.newTask.value,
      done: false
    });

    // reset form input
    event.target.newTask.value = '';
  };

  return (
    <form onSubmit={handleAdd}>
      <label htmlFor='newTask'>
        <VisuallyHidden>Add task</VisuallyHidden>
      </label>
      <Input name='newTask' type='text' placeholder='Type to add new tasks' />
    </form>
  );
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired
};

const Input = styled.input`
  height: 2rem;
  width: 100%;
`;
