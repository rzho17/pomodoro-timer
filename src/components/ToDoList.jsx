import styles from "./ToDoList.module.css";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
  return (
    <div className={styles.toDoContainer}>
      <h3>To do List</h3>
      <div className={styles.toDoItems}>
        <ToDoItem text={"Prepare to do list"} />
        <ToDoItem text={"Prepare to do list"} />
        <ToDoItem text={"Prepare to do list"} />
      </div>
    </div>
  );
}
