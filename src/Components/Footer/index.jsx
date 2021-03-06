import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Data";

function Footer() {
  const [checkAll, setCheckAll] = useState(false)
  const [todos, setTodos] = useContext(DataContext)
  const [check, setCheck] = useState('')

  const handleCheckAll = ()=>{
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.completed = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }
  const newTodosCompleted = ()=>{
    return todos.filter(todo =>  {
      return todo.completed ===  false
    })
  }

  const deleteTodo = () => {
    setTodos(newTodosCompleted())
    setCheckAll(false)
  }

  useEffect(()=>{
    console.log('test-todo');

  })
  return (
    <>
      {
        todos.length === 0 ? <h2>Congratulation! note todo</h2> 
        : <div className="row">
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all" 
          onChange={handleCheckAll}
          checked={checkAll}
          />
          <input></input>
          All
        </label>
        <p>You have {newTodosCompleted().length} to do</p>
        <button id="delelte" onClick={deleteTodo}>Delete</button>
      </div>
      }
    </>
    
  );
}

export default Footer;
