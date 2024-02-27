import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/Service/task-service.service';

@Component({
  selector: 'app-tast.details',
  templateUrl: './tast.details.component.html',
  styleUrls: ['./tast.details.component.scss']
})
export class TastDetailsComponent implements OnInit {
  public taskId: any;
  public patchData: any
  public editTaskForm = new FormGroup({
    taskTitle: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
    dueDate: new FormControl(''),
    
  })
  constructor(private activatedRoute: ActivatedRoute, private taskService: TaskService){}
  ngOnInit(): void {
    this.taskId = this.activatedRoute.snapshot.queryParamMap.get('id')
    console.log(this.taskId);  
    this.taskService.getSingleData(this.taskId).subscribe((res)=> {
      if(res){
        console.log(res.data);
        this.patchData = res.data
        this.editTaskForm.controls.taskTitle.patchValue(this.patchData?.taskTitle);
        this.editTaskForm.controls.description.patchValue(this.patchData?.description);
        this.editTaskForm.controls.status.patchValue(this.patchData?.status);
        // this.editTaskForm.controls.dueDate.patchValue(this.patchData?.dueDate);
        this.editTaskForm.controls.dueDate.patchValue(this.formatDate(new Date()));
        // this.editTaskForm.patchValue({
        //   taskTitle: this.patchData.taskTitle,
        //   description: this.patchData.description,
        //   status: this.patchData.status,
        //   dueDate: this.patchData.status,
        // })
      }
    })
  }
  private formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  public editTask(editTaskFormData: any){
    console.log(editTaskFormData);
    this.taskService.updateTask(this.taskId, editTaskFormData).subscribe((res)=> {
      if(res) {
        console.log("Update Task successfully");
      } else {
        console.log("Oops something went wrong");
        
      }
    })
  }
}
