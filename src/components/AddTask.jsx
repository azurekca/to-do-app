import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styled from '@emotion/styled/macro/macro';

export default function AddTask({ addTask }) {
  // handle form submission
  const handleAdd = (event) => {
    event.preventDefault(); // prevent page from reloading

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
