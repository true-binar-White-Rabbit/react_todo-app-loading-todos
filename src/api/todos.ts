import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 500;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const addTodo = (title: string) => {
  const newTodo = {
    title,
    completed: false,
    userId: USER_ID,
  };
  return client.post<Todo>('/todos', newTodo);
};

export const updateTodo = (todo: Todo) => {
  const { title, id } = todo;
  console.log(id)

  return client.patch<Todo>(`/todos/${id}`, { title });
};

export const deleteTodo = (id: number) => {
  return client.delete(`/todos/${id}`);
}