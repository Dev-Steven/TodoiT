import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  id: any;
  newTask: any = {};
  err: any ={};

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id']
    });
  }

  addTask() {
    let observable =this._httpService.addTask(this.id, this.newTask);
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
