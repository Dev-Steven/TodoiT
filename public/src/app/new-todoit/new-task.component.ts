import { HttpService } from '../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  newTask: any= {};
  err: any;

  ngOnInit() {
  }

  addTask() {
    console.log('In component');
    console.log('new task: ', this.newTask);
    let observable = this._httpService.create(this.newTask);
    observable.subscribe(data => {
      if(data['error']) {
        console.log('Data: ', data);
        this.err = data['error']['errors'];
      }
      else {
        console.log('Task added: ', data);
        this._router.navigate(['/tasks']);
      }
    })
  }

}
