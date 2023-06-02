import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      const newTodo = {
        title,
        completed: false,
      };
      addTodo(newTodo);
      setTitle('');
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);