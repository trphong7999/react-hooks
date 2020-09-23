import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'du buoi sang' },
    { id: 2, title: 'du buoi trua' },
    { id: 3, title: 'du buoi toi' },
  ]);

  function handleOnTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log(formValues);

    const newTodoList = [...todoList];
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    };

    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>Hook react</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleOnTodoClick} />
    </div>
  );
}

export default App;
