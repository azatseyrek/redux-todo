import { useSelector } from "react-redux";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { selectTodos } from "./features/todoSlice";




function App() {

  const todoList = useSelector(selectTodos)

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => {
            return <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />;
          })}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
