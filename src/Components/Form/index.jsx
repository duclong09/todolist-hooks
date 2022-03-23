import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../Data";
import "../Form/index.scss";

export default function Form() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
  const todoInput = useRef()


  //add todo:
  const addTodo = (e) =>{
    e.preventDefault()
    setTodos([...todos, {name: todoName, completed: false}])
    setTodoName('')
    todoInput.current.focus()
  }
  useEffect(()=>{
    todoInput.current.focus()
  })
  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
        type="text"
        name="todos"
        id="todos"
        ref={todoInput}
        required
        placeholder="Những điều cần note vào đây"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value.toLowerCase())}
      />
      <button type="submit">Create</button>
    </form>
  );
}
