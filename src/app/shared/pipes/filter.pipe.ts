import { Pipe, PipeTransform } from '@angular/core';
import { TodoListItem } from '../interfaces/todo-list-item.interface';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(tasks: TodoListItem[], search: string = ''): TodoListItem[] {
    if(!search.trim()){
      return tasks  
    } 
    return tasks.filter(task => {
      return task.label.includes(search) ||  task.description.includes(search) || task.category.includes(search)
    })
  }

}