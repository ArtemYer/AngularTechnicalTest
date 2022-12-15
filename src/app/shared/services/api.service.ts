import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) { }

  getUrl(param){ 
    return `${this.baseUrl}/${param}`
  }

  get<T>(param) {
    return this.http.get<T>(this.getUrl(param));
  }

  post(param, body) {
    return this.http.post(this.getUrl(param), body);
  }

  update(param, body) {
    return this.http.patch(this.getUrl(param), body);
  }

  delete(param) {
    return this.http.delete(this.getUrl(param))
  }
}
