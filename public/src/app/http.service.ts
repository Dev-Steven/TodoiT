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

  deleteTodo(id) {
    console.log('In service');
    return this._http.delete(`/todo/delete/${id}`);
  }

  deleteTask(todoit_id, task_id) {
    console.log('In service');
    console.log(`todoit id: ${todoit_id} and task_id ${task_id}`)
    return this._http.post(`/task/delete/${todoit_id}`, task_id);
  }

}
