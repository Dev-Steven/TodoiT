import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTaskComponent } from './new-todoit/new-task.component';



const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/todoit/new', component: NewTaskComponent },
  { path:'tasks/task/add/:id', component: AddTaskComponent },
  { path: 'tasks/edit', component: EditTaskComponent },
  { path: '', pathMatch: 'full', redirectTo: '/tasks' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
