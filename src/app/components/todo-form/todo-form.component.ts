import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTask } from '../../state/todo.actions';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class TodoFormComponent {
  todoForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<{ todos: Task[] }>) {
    this.todoForm = this.fb.group({
      task: ['', Validators.required]
    });
  }

  addTask() {
    if (this.todoForm.valid) {
      const task: Task = { id: Date.now(), title: this.todoForm.value.task, completed: false };
      this.store.dispatch(addTask({ task }));
      this.todoForm.reset();
    }
  }
}
