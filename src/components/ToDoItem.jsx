import styles from "./ToDoList.module.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";

export default function ToDoItem({ text }) {
  return (
    <div className={styles.toDoEntry}>
      <p>{text}</p>
      <div>
        <FiEdit />
        <RiDeleteBin2Line />
      </div>
    </div>
  );
}
