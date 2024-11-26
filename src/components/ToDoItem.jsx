import styles from "./ToDoList.module.css";
import AddTodo from "./AddTodo";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";

export default function ToDoItem({ id, text, editTodo, cancelTask, saveTask }) {
  const [showEdit, setShowEdit] = useState(false);

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  const save = () => {
    toggleEdit();
    saveTask();
  };

  const cancel = () => {
    toggleEdit();
    cancelTask();
  };

  const newEdit = (e) => {
    editTodo(e, id);
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
        <RiDeleteBin2Line />
      </div>
    </div>
  );
}
