import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoItemFormComponent } from './components/todo-item-form/todo-item-form.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/pipes/filter.pipe';



@NgModule({
  declarations: [TodoListComponent, TodoItemFormComponent, TodoListItemComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [TodoListComponent]
})
export class TodoListModule { }
