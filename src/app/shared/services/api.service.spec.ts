import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { ApiService } from './api.service';
import { TodoListItem } from '../interfaces/todo-list-item.interface';

describe('ApiService', () => {
  let service: ApiService;
  let httpController: HttpTestingController;

  let url = 'http://localhost:3000'

  const mockTaskArray = [
    {
      "id": 1,
      "label": "Kitchen Cleanup",
      "description": "Clean my dirty kitchen",
      "category": "house",
      "done": "2022-12-15T14:49:46.727Z"
    },
    {
      "id": 2,
      "label": "Taxesss",
      "description": "Start doing my taxes and contact my accountant jhon for advice",
      "category": "bureaucracy1",
      "done": "2022-12-15T14:49:47.416Z"
    },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should return array of tasks', () => {
			
    service.get('tasks').subscribe((res) => {
      expect(res).toEqual(mockTaskArray);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/tasks`,
    });

    req.flush(mockTaskArray);
  });

  it('should call update and return the updated task from the API', () => {
    const updatedTask: TodoListItem = {
      "id": 1,
      "label": "Kitchen Cleanup",
      "description": "Clean my dirty kitchen",
      "category": "new category",
      "done": "2022-12-15T14:49:46.727Z"
    };

    service.update(`tasks/${updatedTask.id}`, updatedTask).subscribe((data) => {
      expect(data).toEqual(updatedTask);
    });

    const req = httpController.expectOne({
      method: 'PATCH',
      url: `${url}/tasks/${updatedTask.id}`,
    });

    req.flush(updatedTask);
  });

  it('should post task and return new array', () => {

    const newTask: TodoListItem = {
      "label": "Kitchen Cleanup",
      "description": "Clean my dirty kitchen",
      "category": "new category",
      "done": "2022-12-15T14:49:46.727Z"
    };

    service.post(`tasks`, newTask).subscribe((data) => {
      expect(data).toEqual({});
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: `${url}/tasks`,
    });

    req.flush({});
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
