import { Component } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { TodoListItem } from '../shared/interfaces/todo-list-item.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todoList: TodoListItem[] = [];
  currentTask: TodoListItem | {} = {};
  showForm = false;
  search: string = '';


  constructor(
    private readonly apiService: ApiService,
  ) { }

  ngOnInit(){
    this.updateLocalList();
  }

  changeShowAddForm(){
    if(!this.showForm) {
      this.currentTask = {};
      this.showForm = true;
    } else {
      this.showForm = false;
    }
  }
  
  updateLocalList() {
    this.apiService.get<TodoListItem[]>('tasks').subscribe(res => {
      this.todoList = res;
      this.currentTask= {};
    });
  }

  deleteTask(id: string) {
    return this.apiService.delete(`tasks/${id}`).subscribe(() => {
      this.updateLocalList()
    });
  }

  updateTask(task: TodoListItem) {
    if(task.id){
      return this.apiService.update(`tasks/${task.id}`, task).subscribe(() => {
        this.currentTask = {};
        this.updateLocalList();
      });
    }
    return this.apiService.post(`tasks`, task).subscribe(() => this.updateLocalList());
  }

  showEditForm(task: TodoListItem) {
    this.currentTask = task;
    this.showForm = true;
  }

  trackByFunction (index, item: TodoListItem) {
    return item.id;
  }
}
