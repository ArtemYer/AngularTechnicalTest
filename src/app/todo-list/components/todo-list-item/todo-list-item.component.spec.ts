import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListItem } from '../../../shared/interfaces/todo-list-item.interface';

import { TodoListItemComponent } from './todo-list-item.component';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('raises the selected task when clicked mark', () => {
    const comp = new TodoListItemComponent();
    const item: TodoListItem = {
      "id": 1,
      "label": "Kitchen Cleanup",
      "description": "Clean my dirty kitchen",
      "category": "new category",
      "done": "2022-12-15T14:49:46.727Z"
    };
    comp.item = item;
  
    comp.onMark.subscribe((selectedItem: TodoListItem) => expect(selectedItem).toBe(item));
    comp.markAsDone();
  });

  it('raises the selected task when clicked delete', () => {
    const comp = new TodoListItemComponent();
    const item: TodoListItem = {
      "id": 1,
      "label": "Kitchen Cleanup",
      "description": "Clean my dirty kitchen",
      "category": "new category",
      "done": "2022-12-15T14:49:46.727Z"
    };
    comp.item = item;
  
    comp.onDelete.subscribe((id: number) => expect(id).toBe(item.id));
    comp.deleteTask();
  });

  it('raises the selected task when clicked mark as done', () => {
    const comp = new TodoListItemComponent();
    const item: TodoListItem = {
      "id": 1,
      "label": "Kitchen Cleanup",
      "description": "Clean my dirty kitchen",
      "category": "new category",
      "done": "2022-12-15T14:49:46.727Z"
    };
    comp.item = item;
  
    comp.onUpdate.subscribe((selectedItem: TodoListItem) => expect(selectedItem).toBe(item));
    comp.editTask();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
