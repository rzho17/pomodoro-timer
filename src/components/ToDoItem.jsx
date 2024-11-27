import styles from "./ToDoList.module.css";
import AddTodo from "./AddTodo";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";

export default function ToDoItem({
  id,
  text,
  editTask,
  cancelTask,
  saveTask,
  deleteTask,
}) {
  const [showEdit, setShowEdit] = useState(false);

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  const newEdit = (e) => {
    editTask(e, id);
  };

  return (
    <div className={styles.toDoEntry}>
      <p>{text}</p>
      <div>
        <FiEdit onClick={toggleEdit} />
        {showEdit &&
          createPortal(
            <AddTodo
              close={toggleEdit}
              setTask={newEdit}
              cancelTask={cancelTask}
              saveTask={saveTask}
            />,
            document.body
          )}
        <RiDeleteBin2Line onClick={() => deleteTask(id)} />
      </div>
    </div>
  );
}
