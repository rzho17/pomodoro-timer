import styles from "./ToDoList.module.css";

export default function ToDoList() {
  return (
    <div className={styles.toDoContainer}>
      <h3>To do List</h3>
      <div className="toDoItems">
        <p>Prepare ToDo</p>
        <div>
          <p>edit</p>
          <p>delete</p>
        </div>
      </div>
    </div>
  );
}
