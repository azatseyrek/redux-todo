import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  //states
  const [input, setInput] = useState("");

  //functions
  const addTodo = () => {};

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  };

  return (
    <div className="input">
      <input value={input} onChange={handleChange} type="text" />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Input;
