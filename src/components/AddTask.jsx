import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Input, VisuallyHidden } from './lib';

export default function AddTask({ addTask }) {
  // handle form submission
  const handleAdd = (event) => {
    // prevent page from reloading
    event.preventDefault();

    let newTask = event.target.elements.newTask.value;
    newTask = newTask.trim();
    // don't add an empty task
    if (!newTask) return;

    addTask({
      id: nanoid(),
      label: newTask,
      done: false
    });

    // reset form input
    event.target.elements.newTask.value = '';
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
