import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from "../../../../shared/user.service";

@Component({
  selector: 'winder-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  accountType = 'client';
  RegisterForm!: FormGroup;
  errorMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.min(8)]],
      userName: ['', [Validators.required, Validators.min(6)]],
      fileName: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    });
  }


  onUpload(event:Event)
  {

  }



  onSubmit() {
    const emailControl = this.RegisterForm.get('email');
    const email = emailControl ? emailControl.value : null;

    const passwordControl = this.RegisterForm.get('password');
    const password = passwordControl ? passwordControl.value : null;

    const genderControl = this.RegisterForm.get('gender');
    const gender = genderControl ? genderControl.value : null;

    const fileNameControl = this.RegisterForm.get('fileName');
    const fileName = fileNameControl ? fileNameControl.value : null;

    const userNameControl = this.RegisterForm.get('userName');
    const UserName = userNameControl ? userNameControl.value : null;

    const phoneNumberControl = this.RegisterForm.get('email');
    const phoneNumber = phoneNumberControl ? phoneNumberControl.value : null;

    const confirmPasswordControl = this.RegisterForm.get('email');
    const confirmPassword = confirmPasswordControl ? confirmPasswordControl.value : null;





    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.authService.signUp(this.RegisterForm.value,this.RegisterForm.get('fileName')?.value).subscribe(
      () => {
        console.log('User signed up successfully.');
        this.router.navigate(['/login']);
      },
    );
  }




}
