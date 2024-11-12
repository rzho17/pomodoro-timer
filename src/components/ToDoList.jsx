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
      {/* <iframe
        // style="border-radius:12px"
        style={{ width: "100%", height: "152px", borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator"
        // width="100%"
        // height="152"
        frameBorder="0"
        // allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe> */}
    </div>
  );
}
