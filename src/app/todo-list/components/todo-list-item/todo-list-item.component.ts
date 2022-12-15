import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoListItem } from '../../../shared/interfaces/todo-list-item.interface';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {

  @Input() item: TodoListItem;
  @Output() onDelete = new EventEmitter()
  @Output() onUpdate = new EventEmitter()
  @Output() onMark = new EventEmitter()


  constructor() { }

  deleteTask(){
    this.onDelete.emit(this.item.id)
  }

  editTask(){
    this.onUpdate.emit(this.item)
  }

  markAsDone() {
    if(!this.item.done) {
      this.item.done = new Date().toISOString()
    } else {
      this.item.done = false
    }
    this.onMark.emit(this.item);
  }
}
