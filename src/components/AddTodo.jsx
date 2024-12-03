import styles from "./AddTodo.module.css";

export default function AddTodo({ close, setTask, cancelTask, saveTask }) {
  const save = () => {
    close();
    saveTask();
  };
  const cancel = () => {
    close();
    cancelTask();
  };
  return (
    <>
      <div className={styles.menuOverlay} onClick={cancel}></div>
      <div className={styles.menuContent}>
        <label htmlFor="task">Enter a Todo</label>
        <textarea
          name="task"
          id="task"
          placeholder="task"
          onChange={(e) => setTask(e)}
        ></textarea>

        <div className={styles.buttonContainer}>
          <button className={styles.close} onClick={cancel}>
            cancel
          </button>
          <button className={styles.save} onClick={save}>
            add task
          </button>
        </div>
      </div>
    </>
  );
}
