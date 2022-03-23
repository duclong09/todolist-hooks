import React, { useContext } from "react";
import { DataContext } from "../Data";
import ListItem from "./component/Item";

function List() {
  const [todos, setTodos] = useContext(DataContext);
  //console.log(todos);
  const switchComplete = (id) => {
    // alert(id)
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.completed = !todo.completed;
      }
    });
    setTodos(newTodos);
  };

  const handleEditTodos = (editvalue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editvalue;
      }
    });
    setTodos(newTodos)
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <ListItem
          todo={todo}
          key={index}
          id={index}
          checkComplete={switchComplete}
          handleEditTodos={handleEditTodos}
        />
      ))}
    </ul>
  );
}

export default List;
