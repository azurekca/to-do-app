import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

beforeEach(() => {
  localStorage.clear();
});

function addTask(label) {
  const addTaskInput = screen.getByRole('textbox');
  userEvent.type(addTaskInput, label);
  userEvent.keyboard('{enter}');

  return label;
}

test('renders To Do App with no initial tasks', () => {
  render(<App />);

  // check for app title
  expect(screen.getByRole('heading', { name: /to do/i })).toBeInTheDocument();

  // check that there are no tasks and task count is 0
  expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  expect(screen.getByRole('banner')).toHaveTextContent('0');
});

test('Can add tasks', () => {
  render(<App />);

  // add a task
  const newTask1 = addTask('task item 1');

  expect(screen.getAllByRole('listitem')).toHaveLength(1);
  expect(screen.getByLabelText(newTask1)).toBeInTheDocument();

  // add 2 more tasks
  const newTask2 = addTask('task item 2');
  const newTask3 = addTask('task item 3');

  expect(screen.getAllByRole('listitem')).toHaveLength(3);
  expect(screen.getByLabelText(newTask2)).toBeInTheDocument();
  expect(screen.getByLabelText(newTask3)).toBeInTheDocument();
});

test('Cannot add an empty task', () => {
  render(<App />);

  const addTaskInput = screen.getByRole('textbox');
  userEvent.type(addTaskInput, '{enter}');

  expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  expect(screen.getByRole('banner')).toHaveTextContent('0');

  addTask(' ');
  expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  expect(screen.getByRole('banner')).toHaveTextContent('0');
});

test('Can mark a task as done and not done', () => {
  render(<App />);

  const newTask = addTask('task item');

  const task = screen.getByLabelText(newTask);
  expect(task).not.toBeChecked();

  // mark as done
  userEvent.click(task);
  expect(task).toBeChecked();

  // mark as not done
  userEvent.click(task);
  expect(task).not.toBeChecked();
});

test('Can delete tasks', () => {
  render(<App />);

  // add 2 tasks
  const newTask1 = addTask('delete me 1');
  const newTask2 = addTask('delete me 2');

  expect(screen.getAllByRole('listitem')).toHaveLength(2);
  expect(screen.getByRole('banner')).toHaveTextContent('2');

  // delete task item 1
  const firstTask = screen
    .getAllByRole('listitem')
    .find((listitem) => within(listitem).getByText(newTask1));
  userEvent.click(within(firstTask).getByRole('button'));

  expect(firstTask).not.toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(1);
  expect(screen.getByRole('banner')).toHaveTextContent('1');

  // delete task item 2
  const tasks = screen.getAllByRole('listitem');
  const secondTask = tasks.find((listitem) =>
    within(listitem).getByText(newTask2)
  );
  userEvent.click(within(secondTask).getByRole('button'));

  expect(secondTask).not.toBeInTheDocument();
  expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  expect(screen.getByRole('banner')).toHaveTextContent('0');
});

test('Tasks persist when app remounts', () => {
  /* cannot refresh the page with jest, but can approximate reload by mounting
  the app; adding some tasks; unmounting the app; remounting the app; then checking for those tasks */
  const { unmount } = render(<App />);
  expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  expect(screen.getByRole('banner')).toHaveTextContent('0');

  const newTask1 = addTask('sticky task 1');
  const newTask2 = addTask('sticky task 2');

  expect(screen.getAllByRole('listitem')).toHaveLength(2);
  expect(screen.getByRole('banner')).toHaveTextContent('2');

  unmount();
  expect(
    screen.queryByRole('heading', { name: /to do/i })
  ).not.toBeInTheDocument();

  render(<App />);
  expect(screen.getByRole('heading', { name: /to do/i })).toBeInTheDocument();

  expect(screen.getAllByRole('listitem')).toHaveLength(2);
  expect(screen.getByRole('banner')).toHaveTextContent('2');
  expect(screen.getByText(newTask1)).toBeInTheDocument();
  expect(screen.getByText(newTask2)).toBeInTheDocument();
});

test('Toggling hide-completed hides completed tasks', () => {
  render(<App />);

  // add tasks
  const newTask1 = addTask('task item 1');
  const newTask2 = addTask('task item 2');
  const newTask3 = addTask('task item 3');

  // mark task 2 as done
  const secondTask = screen.getByLabelText(newTask2);
  userEvent.click(secondTask)

  // should still have 3 tasks showing
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
  expect(screen.getByRole('banner')).toHaveTextContent('3');

  // hide tasks should start as unchecked
  const hideTasks = screen.getByLabelText(/hide/i);
  expect(hideTasks).not.toBeChecked();
  // toggle hide tasks
  userEvent.click(hideTasks);

  // should now have 2 tasks showing
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
  expect(screen.getByRole('banner')).toHaveTextContent('2');
  expect(screen.getByLabelText(newTask1)).toBeInTheDocument();
  expect(screen.queryByLabelText(newTask2)).not.toBeInTheDocument();
  expect(screen.getByLabelText(newTask3)).toBeInTheDocument();
})
