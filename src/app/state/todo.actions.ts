import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';

export const addTask = createAction('[ToDo] Add Task', props<{ task: Task }>());
export const completeTask = createAction('[ToDo] Complete Task', props<{ id: number }>());
export const deleteTask = createAction('[ToDo] Delete Task', props<{ id: number }>());