import React, { useState } from "react";

function ListItem({ todo, id, checkComplete,handleEditTodos }) {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name)
  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (id)=>{
    setOnEdit(false)
    if(editValue){
      handleEditTodos(editValue,id)
    }else{
      setEditValue(todo.name)
    }
  }
  if (onEdit) {
    return (
      <li>
        <input
          type="text"
          id="editValue"
          value={editValue}
          name="editValue"
          onChange={e => setEditValue(e.target.value.toLowerCase())}
        />
        <button onClick={() => handleSave(id)}>
          Save
        </button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id} className={todo.completed ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.completed}
            onChange={() => checkComplete(id)}
          />
          {todo.name}
        </label>
        <button disabled={todo.completed} onClick={handleOnEdit}>
          Edit
        </button>
      </li>
    );
  }
}

export default ListItem;