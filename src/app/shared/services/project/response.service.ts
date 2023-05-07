import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "./ResponseData";

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  baseUrl = 'http://localhost:8089/pidev/response';
  constructor(private http: HttpClient) { }

  getAllResponses(): Observable<ResponseData[]> {
    return this.http.get<ResponseData[]>(`${this.baseUrl}/listResponses`);
  }

  addResponse(ResponseData: ResponseData, idReclamation: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-response/${idReclamation}`, ResponseData);
  }

  deleteResponse(idResponse: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteResponse/${idResponse}`);
  }

  updateResponse(ResponseData: ResponseData, idResponse: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/modifierResponse/${idResponse}`, ResponseData);
  }



}
