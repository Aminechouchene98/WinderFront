import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService} from "../../../../shared/user.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../user";
import {EncryptionService} from "../../../../shared/encryption.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'winder-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: any;
  user!:User;
  data: any;
  test : any;
  test1:any;
  public userName: any;
  public token:any;
  public role: any;

  constructor(private router: Router,private fb: FormBuilder, private authService: UserService,private encryptionService:EncryptionService ) {

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
        data => {
          if ((data as { [key: string]: any })['jwtToken'].length != 0) {
            this.userName = (data as { [key: string]: any })["user"]['userName'];
            this.token = (data as { [key: string]: any })['jwtToken'];
            this.role = (data as { [key: string]: any })["user"]["role"][0]["roleName"];
            //localStorage.setItem('data', this.encryptionService.encrypt({ id: this.userName, token: ((data as { [key: string]: any })['jwtToken']), role: (data as { [key: string]: any })["user"]["role"][0]["roleName"] }));
            localStorage.setItem('token',this.token);

            localStorage.setItem('role',this.role);


            if(localStorage.getItem('role') == 'Admin')
            {
              this.router.navigate(["/admin"]);
            }
            else
            {
              this.router.navigate(["/project"]);
            }


          }

        },
        error => {
          console.log(error.status);
          Swal.fire(
            'erreur!',
            'Mot de passe ou username invalide!',
            'error'
          );
        }// toufa data lena
      ); // toufa subscribe lena
    } // toufa l if lena



  }// toufa login lena






}





