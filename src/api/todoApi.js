import axios from 'axios';

export const fetchTodos = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      todo
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (id, todo) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        todo
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

export const deleteTodo = async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  } catch (error) {
    console.log(error);
  }
};
