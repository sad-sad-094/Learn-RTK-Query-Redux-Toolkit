/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React, { useState } from 'react';

import { useGetTodoByIdQuery, useGetTodosQuery } from '../../state/APIs/ToDoAPIs';

function ToDoApp() {

  const [toDoId, setToDoId] = useState(1);
  const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo } = useGetTodoByIdQuery(toDoId);

  const nextToDo = () => {
    setToDoId(toDoId + 1);
  }

  const prevToDo = () => {
    setToDoId(toDoId - 1);
  }

  return (

    <>
      <h1>ToDos - RTK Query</h1>
      <br />
      <h4>Is Loading: {isLoading ? 'True' : 'False'} </h4>

      <pre> {JSON.stringify(todo)} </pre>

      <button onClick={() => prevToDo()}>Previous ToDo</button>
      <button onClick={() => nextToDo()}>Next ToDo</button>

      <ul>
        {todos.map((todo, i, todos) => {
          return (
            <li key={todo.id}>
              <strong>{todo.completed ? 'Done' : 'Pending'}  -  </strong>
              {todo.title}
            </li>)
        })}
      </ul>


    </>

  )

}

export default ToDoApp;

