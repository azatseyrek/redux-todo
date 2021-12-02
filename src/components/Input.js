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
    console.log(`Adding ${input}`);

    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="input">
      <input value={input} onChange={handleChange} type="text" />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Input;
