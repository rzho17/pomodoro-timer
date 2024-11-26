import styles from "./ToDoList.module.css";
import ToDoItem from "./ToDoItem";
import AddTodo from "./AddTodo";
import { useState, useTransition } from "react";
import { nanoid } from "nanoid";
import { createPortal } from "react-dom";
import { IoAddCircleOutline } from "react-icons/io5";

export default function ToDoList() {
  const [showTodo, setshowTodo] = useState(false);

  const toggleTodo = () => {
    setshowTodo(!showTodo);
  };

  // create to do list array
  const [todoList, setTodoList] = useState([
    {
      id: nanoid(),
      task: "Create something new",
    },
    {
      id: nanoid(),
      task: "Study for exam",
    },
  ]);
  const [oldTodoList, setOldTodoList] = useState(todoList);

  // create state to edit based on change

  // create add to do
  // adds a new todo item
  const makeTodo = () => {
    const task = {
      id: nanoid(),
      task: "",
    };
    setTodoList((prev) => {
      return [...prev, task];
    });
  };

  const addTodo = () => {
    toggleTodo();
    makeTodo();
  };

  // sets and edits the state of the create todo
  // something is making the array change
  // instead of the last index being updated, it creteas a new to do item instead
  const setTask = (e) => {
    const currentIdx = todoList.length - 1;
    setTodoList((prev) => {
      const newTodoList = [...prev];

      newTodoList[currentIdx] = {
        ...newTodoList[currentIdx],
        [e.target.name]: e.target.value,
      };

      return newTodoList;
    });

    console.log(todoList);
  };

  const saveTask = () => {
    setOldTodoList(todoList);
  };

  // cancels and removes the current added task
  const cancelTask = () => {
    setTodoList(oldTodoList);

    console.log(todoList);
    console.log(oldTodoList);
    // setTodoList((prev) => {
    //   const lastIdx = prev.length - 1;
    //   const oldList = [...prev];
    //   return oldList.splice(0, lastIdx);
    // });
  };

  const editTodo = (e, todo) => {
    const { name, value } = e.target;

    console.log(todo);
    // setTodoList((prev) => {
    //   return prev.map((item) => {
    //     if (item.id === todo.id) {
    //       return { ...item, [name]: value };
    //     }
    //     return item;
    //   });
    // });
  };

  // create edit to do
  // selects current index and changes content state of it

  return (
    <div className={styles.toDoContainer}>
      <div className={styles.toDoHeading}>
        <h3>To do List</h3>
        <IoAddCircleOutline onClick={addTodo} />
        {showTodo &&
          createPortal(
            <AddTodo
              close={toggleTodo}
              setTask={setTask}
              cancelTask={cancelTask}
              saveTask={saveTask}
            />,
            document.body
          )}
      </div>
      <div className={styles.toDoItems}>
        {todoList.map((todo) => {
          return (
            <ToDoItem
              key={todo.id}
              id={todo.id}
              text={todo.task}
              editTodo={editTodo}
              cancelTask={cancelTask}
              saveTask={saveTask}
            />
          );
        })}
        {/* <ToDoItem text={"Prepare to do list"} />
        <ToDoItem text={"Prepare to do list"} />
        <ToDoItem text={"Prepare to do list"} /> */}
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
