import React, { useState } from 'react';



function Todos() {
    const [currentTodo, setCurrentTodo] = useState("");
    const [todos, setTodos] = useState([
        {
            todo: "bake a cake",
            isCompleted: true
        },
        {
            todo: "go for a walk",
            isCompleted: false
        },
        {
            todo: "make todoapp",
            isCompleted: false
        }
    ]);
  return (
    <div className="Todos">
        <input
        className="todo-input"
        value = {currentTodo}
        onchange={e => {
            setCurrentTodo(e.target.value);
        } }
        onKeyPress={e => {
            if (e.key === "Enter")  {
              createNewTodo(currentTodo);
                setCurrentTodo("");
            }
        } }
        placeholder="What needs to get done?"
        /> 
   
       {todos.map((todo, index) => (
           <p>{todo.todo}</p>
       ) ) }
       {todos.length > 0 && `${todos.length} items`}
   
    </div>
  );
}
function createNewTodo(currentTodo) {
    let todosArray = [...Todos];
    todosArray.push({
      todo: currentTodo,
      isCompleted: false
    });
    //setTodos(todosArray);
  }

export default Todos;
