import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = 'http://localhost:8089/';

  constructor(private http: HttpClient) {}

  postProject(body: any) {
    return this.http.post(this.baseUrl + 'addProject', body);
  }
  getAllProjects() {
    return this.http.get(this.baseUrl + 'allProjects');
  }
}
