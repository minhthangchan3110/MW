import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo, updateTodo } from '../redux/actions/todoActions';

const TodoList = ({ todos, fetchTodos, deleteTodo, updateTodo }) => {
  const [editId, setEditId] = useState('');
  const [editTitle, setEditTitle] = useState('');

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleEdit = (id, title) => {
    setEditId(id);
    setEditTitle(title);
  };

  const handleUpdate = () => {
    if (editTitle.trim() !== '') {
      const updatedTodo = {
        id: editId,
        title: editTitle,
        completed: false,
      };
      updateTodo(updatedTodo);
      setEditId('');
      setEditTitle('');
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <button onClick={handleUpdate}>Update</button>
            </>
          ) : (
            <>
              <p>{todo.title}</p>
              <button onClick={() => handleEdit(todo.id, todo.title)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo, updateTodo })(TodoList);