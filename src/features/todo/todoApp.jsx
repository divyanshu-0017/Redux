import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./todoSlice";

const TodoApp = () => {
  const items = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleEditTodo = (index) => {
    setText(items[index]);
    setEditIndex(index);
  };

  const handleSaveTodo = () => {
    if (text.trim() !== "") {
      dispatch(
        editTodo({
          index: editIndex,
          text: text.trim(),
        }),
      );
      setText("");
      setEditIndex(null);
    }
  };

  const handleCancelEdit= ()=>{
    setText("");
    setEditIndex(null);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {editIndex === null ? (
        <button onClick={handleAddTodo}> Add </button> 
      ) : (
        <>
        <button onClick={handleSaveTodo}>Save</button>
        <button onClick={handleCancelEdit}>Cancel</button>
        </>
      )}
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => dispatch(deleteTodo(item))}>delete</button>
            <button onClick={() => handleEditTodo(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
