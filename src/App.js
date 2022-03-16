import { useMemo } from 'react';
import useLocalState from './hooks/useLocalState';

import AddTask from './components/AddTask';
import Header from './components/Header';
import Task from './components/Task';
import { TaskList, TaskItem, MainWrapper } from './components/lib';

export default function App() {
  const [tasks, setTasks] = useLocalState([], 'to-do-app-tasks');
  const [hideCompleted, setHideCompleted] = useLocalState(
    false,
    'to-do-app-hide-completed'
  );

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const toggleTaskDone = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        return task.id === id
          ? {
            ...task,
            done: !task.done
          }
          : task;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleHideCompleted = () => {
    setHideCompleted((prev) => !prev);
  };

  // derive task list to show based on if hideCompleted is true
  const taskList = useMemo(() => {
    if (hideCompleted) return tasks.filter((task) => !task.done);
    return tasks;
  }, [hideCompleted, tasks]);

  return (
    <>
      <Header
        taskCount={taskList.length}
        hideCompleted={hideCompleted}
        toggleHideCompleted={toggleHideCompleted}
      />
      <MainWrapper as='main'>
        <AddTask addTask={addTask} />
        <TaskList>
          {taskList.map((task) => (
            <TaskItem key={task.id}>
              <Task
                task={task}
                toggleTaskDone={toggleTaskDone}
                deleteTask={deleteTask}
              />
            </TaskItem>
          ))}
        </TaskList>
      </MainWrapper>
    </>
  );
}
