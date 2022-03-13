import styled from '@emotion/styled/macro';
import useLocalState from './hooks/useLocalState';

import AddTask from './components/AddTask';
import Header from './components/Header';
import Task from './components/Task';
import { TaskList, TaskItem } from './components/lib';

function App() {
  const [tasks, setTasks] = useLocalState([], 'to-do-app-tasks');

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const toggleTaskDone = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map(task => {
        return task.id === id ? ({
          ...task,
          done: !task.done
        }) : task
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <Header taskCount={tasks.length} />
      <Main>
        <AddTask addTask={addTask} />
        <TaskList>
          {tasks.map((task) => (
            <TaskItem key={task.id}>
              <Task task={task} toggleTaskDone={toggleTaskDone} deleteTask={deleteTask} />
            </TaskItem>
          ))}
        </TaskList>
      </Main>
    </>
  );
}

const Main = styled.main``;

export default App;
