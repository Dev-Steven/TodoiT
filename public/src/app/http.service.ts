import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http: HttpClient ) { }

  getAll() {
    console.log('In service');
    return this._http.get('/tasks');
  }

  create(task) {
    console.log('In service');
    return this._http.post('/task/create', task);
  }

  addTask(id, newTask) {
    console.log('In service');
    return this._http.post(`/task/add/${id}`, newTask);
  }

}
