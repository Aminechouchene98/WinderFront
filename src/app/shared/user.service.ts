import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import {EncryptionService} from "./encryption.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public data: any;
  private apiUrl = 'http://localhost:8090'; // replace with your API endpoint
  constructor(private encryptionService: EncryptionService,private http: HttpClient, private router: Router) { }

  login(userName: string, password: string) {
    const body = { userName, password };
   return  this.http.post(`${this.apiUrl}/authenticate`, body);
  }


  signUp(body:FormBuilder): Observable<any> {
    return this.http.post(`${this.apiUrl}/registerNewUser`,body);
  }


  getToken() {
    console.log(localStorage.getItem('data')!);
    if (localStorage.getItem('data') != null) {
      this.data = this.encryptionService.decrypt(localStorage.getItem('data')!);
      console.log(this.data);
      return this.data["token"];

    }
    return null;
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login'])
  }



  IsLoggedIn()
  {
    return !!localStorage.getItem('token');
  }











}
