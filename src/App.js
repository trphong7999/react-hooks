import React, { useEffect, useState } from 'react';
import querySing from 'query-string';

import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import PostList from './components/PostList/PostList';
import Pagination from './components/Pagination/Pagination';
import PostFilterForm from './components/PostFilterForm/PostFilterForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'du buoi sang' },
    { id: 2, title: 'du buoi trua' },
    { id: 3, title: 'du buoi toi' },
  ]);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = querySing.stringify(filters)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON, 'overhere');

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list', error.message);
      }
    }

    console.log('POST LIST effect');
    fetchPostList();
  }, [filters]);



  function handlePageChange(newPage) {
    console.log('New page: ', newPage)
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

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

  function handleFilterChange(newFilters) {
    console.log('New filters: ', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  return (
    <div className="App">
      <h1>Hook react</h1>

      <PostFilterForm
        onSubmit={handleFilterChange}
      />
      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />

      {/*<TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/*  <TodoList todos={todoList} onTodoClick={handleOnTodoClick} />  */}
    </div>
  );
}

export default App;
