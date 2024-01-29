import { useState } from "react";
import formStyles from "./AddTodoFormStyles.module.css"; // Changed styles import name
import { toast } from "react-toastify";

function TaskForm({ addTask }) { // Changed component name
  const [taskTitle, setTaskTitle] = useState(""); // Changed state variable name

  function handleSubmit(e) { // Changed function name
    e.preventDefault();
    
    // Check for empty task title
    if (taskTitle.trim().length === 0) {
      setTaskTitle("");
      toast.error("Please enter a task title"); // Changed error message
      return;
    }

    const newTask = {
      id: crypto.randomUUID(), // You might want to provide an implementation for generating unique IDs
      title: taskTitle,
      completed: false,
    };
    addTask(newTask);
    setTaskTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className={formStyles.taskForm}> {/* Changed class name */}
      <input
        type="text"
        name="task-title-input"
        id="task-title-input"
        className={formStyles.taskInput} {/* Changed class name */}
        value={taskTitle}
        onChange={(e) => {
          setTaskTitle(e.target.value);
        }}
      />
      <button type="submit" className={formStyles.taskButton}> {/* Changed class name */}
        Add
      </button>
    </form>
  );
}

export default TaskForm;
