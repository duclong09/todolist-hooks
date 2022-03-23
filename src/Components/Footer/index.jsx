import React, { useContext, useState } from "react";
import { DataContext } from "../Data";

function Footer() {
  const [checkAll, setCheckAll] = useState(false)
  const [todos, setTodos] = useContext(DataContext)

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
    const newTodos = todos.filter(todo => {
      return todo.completed === false
    })
    setTodos(newTodosCompleted())
    setCheckAll(false)
  }
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
