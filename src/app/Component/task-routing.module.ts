import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './Task/task.component';
import { TastDetailsComponent } from './tast.details/tast.details.component';

const routes: Routes = [
  {path: "", component: TaskComponent},
  {path: "task-details", component: TastDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
