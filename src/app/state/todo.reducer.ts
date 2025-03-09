import { createReducer, on } from '@ngrx/store';
import { addTask, completeTask, deleteTask } from './todo.actions';
import { Task } from '../models/task.model';

export interface TodoState {
  todos: Task[];
}

const initialState: TodoState = {
  todos: []
};

export const todoReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => ({
    ...state,
    todos: [...state.todos, task]
  })),
  on(completeTask, (state, { id }) => ({
    ...state,
    todos: state.todos.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  })),
  on(deleteTask, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(task => task.id !== id)
  }))
);
