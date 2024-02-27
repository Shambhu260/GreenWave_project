import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskService } from 'src/app/Service/task-service.service';
import { DeleteTaskComponent } from '../delete-task/delete-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public dataSource: any
  public taskForm = new FormGroup({
    taskTitle: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl('Completed'),
    dueDate: new FormControl(''),
    
  })
  constructor(private task_service: TaskService,public dialog: MatDialog, private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.task_service.getAllTask().subscribe((res)=> {
      console.log(res.data);
      this.dataSource = res.data
    })
  }
  createTask(createTaskData: any){
    this.task_service.createTask(createTaskData).subscribe((res)=> {
      if(res){
        this.ngOnInit()
        console.log("Task Created successfully");
        this.taskForm.reset()
        
      } else {
        console.log("Oops something went wrong");
        
      }
    })
  }

  public deleteTask(empId: any){
    const dialogRef = this.dialog.open(DeleteTaskComponent, {
      data:empId
    })
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
          if (confirmed) {
            console.log("ddd");
            this.ngOnInit()
          }
        });
    
  }
}
