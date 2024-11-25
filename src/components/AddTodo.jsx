import styles from "./AddTodo.module.css";
import Button from "./Button";
export default function AddTodo({ close }) {
  return (
    <>
      <div className={styles.menuOverlay} onClick={close}></div>
      <div className={styles.menuContent}>
        <label htmlFor="todoItem">Enter a Todo</label>
        <textarea
          name="todoItem"
          id="todoItem"
          //   placeholder="add a task"
          placeholder="task"
        ></textarea>

        <div className={styles.buttonContainer}>
          <button className={styles.close}>cancel</button>
          <button className={styles.save}>add task</button>
        </div>
      </div>
    </>
  );
}
