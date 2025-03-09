import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { completeTask, deleteTask } from '../../state/todo.actions';
import { selectTasks } from '../../state/todo.selectors';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule]
})
export class TodoListComponent {
  tasks$: Observable<Task[]>;

  constructor(private store: Store) {
    this.tasks$ = this.store.select(selectTasks);
  }

  toggleComplete(id: number) {
    console.log('Toggling completion for Task ID:', id); // Debugging
    this.store.dispatch(completeTask({ id }));
  }
  

  removeTask(id: number) {
    console.log('Deleting task with ID:', id); // Debugging
    this.store.dispatch(deleteTask({ id }));
  }
}
