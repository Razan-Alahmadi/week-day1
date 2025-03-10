import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectTasks = createSelector(
  selectTodoState,
  (state) => state.todos
);
