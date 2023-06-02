import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    FETCH_TODOS,
  } from '../actions/types';
  
  const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case UPDATE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? action.payload : todo
          ),
        };
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      case FETCH_TODOS:
        return {
          ...state,
          todos: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;