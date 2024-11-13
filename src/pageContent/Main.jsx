import Timer from "../components/Timer";
import ToDoList from "../components/ToDoList";
import styles from "./Main.module.css";

const Main = ({ changeBackground }) => {
  return (
    <main className={styles.main}>
      <Timer changeBackground={changeBackground} />
      <ToDoList />
    </main>
  );
};

export default Main;
