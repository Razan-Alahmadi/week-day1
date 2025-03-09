import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { todoReducer } from './state/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ todos: todoReducer })
  ]
};
