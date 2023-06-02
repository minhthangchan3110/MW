import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    FETCH_TODOS,
  } from './types';
  import * as todoApi from '../../api/todoApi';
  
  // Action creators
  export const addTodo = (todo) => {
    return {
      type: ADD_TODO,
      payload: todo,
    };
  };
  

  
  export const deleteTodo = (id) => {
    return {
      type: DELETE_TODO,
      payload: id,
    };
  };
  
  export const fetchTodos = () => {
    return async (dispatch) => {
      try {
        const todos = await todoApi.fetchTodos();
        dispatch({
          type: FETCH_TODOS,
          payload: todos,
        });
      } catch (error) {
        console.log(error);
      }
    };
    
  };
  export const updateTodo = (todo) => {
    return async (dispatch) => {
      try {
        const updatedTodo = await todoApi.updateTodo(todo.id, todo);
        dispatch({
          type: UPDATE_TODO,
          payload: updatedTodo,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };