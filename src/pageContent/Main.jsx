import Timer from "../components/Timer";
import ToDoList from "../components/ToDoList";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <Timer />
      <ToDoList />
    </main>
  );
};

export default Main;
