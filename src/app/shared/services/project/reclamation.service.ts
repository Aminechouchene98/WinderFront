import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  addReclamation(body: any) {
    return this.http.post(this.baseUrl + 'reclamation', body);
  }

  getAllReclamations() {
    return this.http.get(this.baseUrl + 'allReclamations');
  }
}
