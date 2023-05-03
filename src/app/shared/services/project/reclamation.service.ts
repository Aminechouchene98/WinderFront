import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  baseUrl = 'http://localhost:8089/';
  constructor(private http: HttpClient) {}

  addReclamation(body: any) {
    return this.http.post(this.baseUrl + 'reclamation', body);
  }

  getAllReclamations() {
    return this.http.get(this.baseUrl + 'allReclamations');
  }
}
