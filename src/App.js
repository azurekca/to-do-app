import styled from '@emotion/styled';
import useLocalState from './hooks/useLocalState';

import AddTask from './components/AddTask';
import Header from './components/Header';
import Task from './components/Task';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useLocalState([], 'to-do-app-tasks')

  return (
    <>
      <Header />
      <Main>
        <AddTask />
        <TaskList>
          {tasks.map(task => <Task />)}
        </TaskList>
      </Main>
    </>
  );
}

const Main = styled.main``;

export default App;
