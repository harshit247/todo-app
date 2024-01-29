import { useState } from "react";
import todoStyles from "./TodoStyles.module.css"; // Changed styles import name
import { ImCross } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import EditTask from "./EditTask"; // Changed component name

function TaskItem({ task, removeTask, toggleCompletion, updateTaskTitle }) { // Changed function name
  const [isEditing, setIsEditing] = useState(false); // Changed state variable name

  function handleTaskRemoval() { // Changed function name
    removeTask(task.id);
  }

  function handleTaskToggle() { // Changed function name
    console.log("Inside handle task toggle");
    toggleCompletion(task.id);
  }

  if (isEditing) { // Changed condition
    return (
      <EditTask
        id={task.id}
        updateTitle={updateTaskTitle}
        setIsEditing={setIsEditing} // Changed state variable name
        title={task.title}
      />
    );
  }

  return (
    <div className={todoStyles.todoItem}> {/* Changed class name */}
      <h3 className={task.completed ? todoStyles.completed : ""}>{task.title}</h3>

      <div className={todoStyles.buttonContainer}> {/* Changed class name */}
        <span onClick={() => setIsEditing(true)} className={todoStyles.editBtn}> {/* Changed class name */}
          <MdEdit />
        </span>
        <input
          type="checkbox"
          name="task-checkbox"
          id="task-checkbox"
          checked={task.completed}
          onChange={handleTaskToggle}
          className={todoStyles.taskCheckbox} {/* Changed class name */}
        />
        <span onClick={handleTaskRemoval} className={todoStyles.deleteBtn}> {/* Changed class name */}
          <ImCross />
        </span>
      </div>
    </div>
  );
}

export default TaskItem;
