import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Reclamation} from "./reclamation";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  baseUrl = 'http://localhost:8089/pidev';
  constructor(private http: HttpClient) {}

  addReclamation(body: any) {
    return this.http.post(this.baseUrl + 'reclamation', body);
  }

  getAllReclamations() {
    return this.http.get(this.baseUrl + 'allReclamations');
  }

  addReclamations(reclamation: Reclamation): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/reclamation/add-reclamation`, reclamation);
  }

  listReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.baseUrl}/reclamation/listReclamations`);
  }

  deleteReclamation(idReclamation: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/reclamation/deleteReclamation/${idReclamation}`);
  }

  updateReclamation(idReclamation: number, reclamation: Reclamation): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/modifierReclamation/${idReclamation}`, reclamation);
  }

  getReclamationById(idReclamation: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.baseUrl}/reclamation/getReclamation/${idReclamation}`);
  }

  listerReclamationParDate(datedate: Date): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.baseUrl}/getReclamationByDate/${datedate}`);
  }

  reclamationAujourdhui(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.baseUrl}/ReclamationAujourdhui`);
  }

  nombresReclamationAujourdhui(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/reclamation/nombresReclamationAujourdhui`);
  }

  getReclamationsByUser(userId: number): Observable<Reclamation[]> {
   // const url = `${this.apiUrl}/getreclamationparuser/${userId}`;
  //  return this.http.get<Reclamation[]>(url);
    return this.http.get<Reclamation[]>(`${this.baseUrl}/reclamation/getreclamationparuser/${userId}`);
  }
}
