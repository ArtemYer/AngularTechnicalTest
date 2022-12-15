import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoListItem } from '../../../shared/interfaces/todo-list-item.interface';

@Component({
  selector: 'app-todo-item-form',
  templateUrl: './todo-item-form.component.html',
  styleUrls: ['./todo-item-form.component.scss']
})
export class TodoItemFormComponent implements OnInit, OnChanges {

  @Input() item: TodoListItem;
  @Output() onAdd = new EventEmitter()

  newItem: TodoListItem = {
    label: '',
    description:  '',
    category: '',
    done: false,
  }

  form!: FormGroup;

  constructor(
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.item.firstChange) {
      this.initForm();
    }
  }

  submit() {
    if(this.form.valid) {
      if(this.item) {
        this.form.value['id'] = this.item.id;
      }
      this.onAdd.emit(this.form.value)
    }
    this.form.reset();
  }

  initForm(){
    this.form = new FormGroup({
      label:  new FormControl(this.item?.label || '',
      Validators.required),

      description : new FormControl(this.item?.description || '',
      Validators.required),

      category : new FormControl(this.item?.category || '',
      Validators.required),

      done: new FormControl(false)
    })
  }

}
