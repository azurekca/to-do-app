import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTask from '../AddTask';

test('Can create a new task', () => {
  const newTask = 'task item';
  const addTask = jest.fn();
  render(<AddTask addTask={addTask} />);

  // create a new task by typing into the input
  const addTaskInput = screen.getByRole('textbox');
  userEvent.type(addTaskInput, newTask);
  expect(addTaskInput.value).toBe(newTask);

  // add task by pressing 'enter'
  userEvent.keyboard('{enter}');
  expect(addTask).toHaveBeenCalledTimes(1);
  expect(addTask).toHaveBeenCalledWith(expect.objectContaining({
    id: expect.any(String),
    label: newTask,
    done: false
  }))

  // check that input is empty after new task is created
  expect(addTaskInput.value).toBe('');
})
