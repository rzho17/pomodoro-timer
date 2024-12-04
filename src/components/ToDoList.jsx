import styles from "./ToDoList.module.css";
import ToDoItem from "./ToDoItem";
import AddTodo from "./AddTodo";
import { useEffect, useState, useTransition } from "react";
import { nanoid } from "nanoid";
import { createPortal } from "react-dom";
import { IoAddCircleOutline } from "react-icons/io5";

export default function ToDoList() {
  const [showTodo, setShowTodo] = useState(false);

  const toggleTodo = () => {
    setShowTodo(!showTodo);
  };

  // creates and sets local storage state for todo items
  // const storeList = JSON.parse(localStorage.getItem("todoList"));
  const storeList = JSON.parse(localStorage.getItem("todoList")) || [];

  const [todoList, setTodoList] = useState(storeList);

  const [oldTodoList, setOldTodoList] = useState(todoList);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

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
  };

  const saveTask = () => {
    setOldTodoList(todoList);
  };

  // cancels and removes the current added task
  const cancelTask = () => {
    setTodoList(oldTodoList);
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

  // filters item out of list
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
      </div>
    </div>
  );
}
