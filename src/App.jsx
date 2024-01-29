import { useState } from "react";
import AddTaskForm from "./Components/AddTaskForm"; // Change component name
import TaskList from "./Components/TaskList"; // Change component name
import styles from "./App.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodoApp() { // Change function name
  // State for managing tasks
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Complete Task A",
      completed: false,
    },
    {
      id: "2",
      title: "Read Book",
      completed: true,
    },
    {
      id: "3",
      title: "Write Code",
      completed: true,
    },
  ]);

  // Function to add a new task
  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  // Function to toggle task completion
  function toggleTaskCompletion(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return { ...task };
        }
      })
    );
  }

  // Function to delete a task
  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  // Function to update task title
  function updateTaskTitle(id, title) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title: title };
        } else {
          return { ...task };
        }
      })
    );
  }

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={styles.App}>
        <h1 className={styles.heading}>Task Manager</h1>
        <AddTaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          updateTaskTitle={updateTaskTitle}
        />
        {tasks.length > 0 ? (
          <button
            className={styles.clearAllTasksBtn}
            onClick={() => {
              setTasks([]);
            }}
          >
            Clear All Tasks
          </button>
        ) : null}
      </div>
    </>
  );
}

export default TodoApp; // Change export name
