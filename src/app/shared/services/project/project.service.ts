import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = 'http://localhost:8090/';

  constructor(private http: HttpClient) {}

  postProject(body: any) {
    return this.http.post(this.baseUrl + 'addProject', body);
  }
  getAllProjects(): Observable<any> {
    return this.http.get(this.baseUrl + 'allProjects');
  }
  deleteProject(id: number) {
    return this.http.delete(this.baseUrl + 'deleteProject/' + id);
  }
}
