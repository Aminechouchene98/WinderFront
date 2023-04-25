import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService} from "../../../../shared/user.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../user";

@Component({
  selector: 'winder-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: any;
  router!:Router;
  user!:User;


  constructor(private fb: FormBuilder, private authService: UserService) {

  }

  ngOnInit()
  {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }







 login() {
    const userNameControl = this.loginForm.get('userName');
    const userName = userNameControl ? userNameControl.value : null;
    const passwordControl = this.loginForm.get('password');
    const password = passwordControl ? passwordControl.value : null;
    if (userName && password) {
      this.authService.login(userName, password).subscribe(
        () => {
          console.log("ya welcome ya welcome b si yahya ");
        },
      );
    }
  }






}





