import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = 'http://localhost:8089/';

  constructor(private http: HttpClient) {}

  postProject(body: any) {
   // return this.http.post(this.baseUrl + 'addProject', body);
    return null;
  }
  getAllProjects():  Observable<any> {
    //return this.http.get(this.baseUrl + 'allProjects');
    return new Observable<any>() ;
  }
  deleteProject(id: number) {
    return this.http.delete(this.baseUrl + 'deleteProject/' + id);
  }


}
