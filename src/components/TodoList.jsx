import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removetodo } from "../features/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  console.log(todos, "todolist");
  const dispatch = useDispatch();

  const [task, setTask] = useState("");

  const handleAdd = () => {
    dispatch(addtodo(task));
    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>

      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{" "}
          <button onClick={() => dispatch(removetodo(todo.id))}>remove</button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
