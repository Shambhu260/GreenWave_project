import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/Service/task-service.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent implements OnInit {
  message: string = "Are you sure? you want Delete Task"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  constructor(
    @Inject(MAT_DIALOG_DATA) private taskTd: any,
    private dialogRef: MatDialogRef<DeleteTaskComponent>, public taskService: TaskService) {
      if(taskTd){
    this.message = taskTd.message || this.message;
    if (taskTd.buttonText) {
      this.confirmButtonText = taskTd.buttonText.ok || this.confirmButtonText;
      this.cancelButtonText = taskTd.buttonText.cancel || this.cancelButtonText;
    }
      }
  }
ngOnInit(): void {
  
}
  onConfirmClick(): void {
    this.taskService.deleteTask(this.taskTd).subscribe((result)=> {
      if(result){
        console.log("Delete Successfully");
      } 
    })
    this.dialogRef.close(true);
  }
}