import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "task", loadChildren: ()=> import("../app/Component/task.module")
  .then((m)=> m.TaskModule)},
   {path: "**", redirectTo: "task"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
