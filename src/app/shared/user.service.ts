import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {FormBuilder} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8089'; // replace with your API endpoint

  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    const body = { userName, password };
    return this.http.post(`${this.apiUrl}/authenticate`, body);

  }


  signUp(body:FormBuilder,fileName:string): Observable<any> {
    console.log(body);
    return this.http.post(`${this.apiUrl}/registerNewUser`, body);
  }







  logout(): void {
    // Remove the access token and user information from local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    // Check if the user is logged in based on the presence of the access token in local storage
    return localStorage.getItem('accessToken') !== null;
  }

  getToken() {
    // Get the access token from local storage
    return localStorage.getItem('accessToken');
  }

  getUser(): any{
    // Get the user information from local storage
    return this.http.get("http://localhost:8089"+ "/getUser/{{userName}}");
  }



}
