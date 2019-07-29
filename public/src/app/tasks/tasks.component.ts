import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  todoits: any = {};

  ngOnInit() {
    this.allTasks();
  }

  allTasks() {
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log('all tasks: ', data)
      this.todoits = data;
      
    })
  }

}
