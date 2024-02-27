import { Injectable } from '@angular/core';
import { AsyncSubject, Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private htttpClient: HttpClient) { }
  apiUl = "http://127.0.0.1:3003/api/task/"
  public createTask(data: any): Observable<any>{
    return this.htttpClient.post(this.apiUl + "/register", data)
  }
  public getAllTask(): Observable<any>{
    return this.htttpClient.get(this.apiUl + "/getAllTask")
  }
  public getSingleData(taskId: any): Observable<any>{
    return this.htttpClient.get(this.apiUl + "getSingleData/" + taskId)
  }
  public updateTask(taskId: any, editTaskData: any): Observable<any> {
    return this.htttpClient.put(this.apiUl + "updateTask/" + taskId, editTaskData)
  }
  public deleteTask(taskId: any): Observable<any> {
    return this.htttpClient.delete(this.apiUl + "deleteTask/" + taskId)
  }
}
