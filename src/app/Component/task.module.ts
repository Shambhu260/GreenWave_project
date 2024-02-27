import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './Task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { TaskService } from '../Service/task-service.service';
import { MatIconModule } from '@angular/material/icon';
import { TastDetailsComponent } from './tast.details/tast.details.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import {MatDialogModule} from '@angular/material/dialog'
import {MatSnackBarModule} from '@angular/material/snack-bar'
@NgModule({
  declarations: [
    TaskComponent,
    TastDetailsComponent,
    DeleteTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
     MatDialogModule,
     MatSnackBarModule,
  ],
  providers: [TaskService]
})
export class TaskModule { }
