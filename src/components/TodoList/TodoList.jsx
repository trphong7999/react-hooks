import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}

export default function TodoList(props) {
    const { todos, onTodoClick } = props;

    function handleClick(todos) {
        if (onTodoClick) {
            onTodoClick(todos);
        }
    }

    return (
        <ul className="TodoList">
            { todos.map(todo =>
                (<li
                    key={todo.id}
                    onClick={() => handleClick(todo)}
                >
                    {todo.title}
                </li>
                ))}

        </ul>
    );
}

