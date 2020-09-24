import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import PostList from './components/PostList/PostList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'du buoi sang' },
    { id: 2, title: 'du buoi trua' },
    { id: 3, title: 'du buoi toi' },
  ]);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON, 'overhere');

        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log('Failed to fetch post list', error.message);
      }
    }

    console.log('POST LIST effect');
    fetchPostList();
  }, []);

  useEffect(() => {
    console.log('TODO list effect');
  })

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
      <PostList posts={postList} />

      {/*<TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/*  <TodoList todos={todoList} onTodoClick={handleOnTodoClick} />  */}
    </div>
  );
}

export default App;
