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

  // need to figure out why the save task in edit
  // reverts back to the previous task that was inside of it
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

  // create edit to do
  // compares ids, if an id is found update the task with the new values
  // else just return the item
  const editTask = (e, todoId) => {
    const { name, value } = e.target;

    setTodoList((prev) => {
      return prev.map((item) => {
        if (item.id === todoId) {
          return { ...item, [name]: value };
        }
        return item;
      });
    });
  };

  // create function to delete the task

  const deleteTask = (todoId) => {
    setTodoList((prev) => {
      return prev.filter((item) => {
        return item.id !== todoId;
      });
    });
  };

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
              editTask={editTask}
              cancelTask={cancelTask}
              saveTask={saveTask}
              deleteTask={deleteTask}
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
