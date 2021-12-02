import React, { useState } from "react";
import "./Input.css";

//redux
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

const Input = () => {
  //states
  const [input, setInput] = useState("");

  //redux-dispatch
  const dispatch = useDispatch();

  //functions
  const addTodo = () => {
    if (!input) {
        
    } else {
      dispatch(
        saveTodo({
          item: input,
          done: false,
          id: Date.now(),
        })
      );
      setInput("")
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <>
      <form action="#" className="input">
        <input required value={input} onChange={handleChange} type="text" />
        <button type="submit" onClick={addTodo}>
          Add
        </button>
      </form>
    </>
  );
};

export default Input;
