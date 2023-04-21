import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService} from "../../../../shared/user.service";

@Component({
  selector: 'winder-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: any;

  constructor(private fb: FormBuilder, private authService: UserService) {

  }

  ngOnInit()
  {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    const emailControl = this.loginForm.get('email');
    const email = emailControl ? emailControl.value : null;
    const passwordControl = this.loginForm.get('password');
    const password = passwordControl ? passwordControl.value : null;
    if (email && password) {
      this.authService.login(email, password).subscribe(
        () => {
          // Navigate to the home page or redirect to the previous page
        },
      );
    }
  }






}





