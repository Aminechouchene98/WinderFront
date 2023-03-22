import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TableModule } from 'primeng/table';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TableModule,
    ChipsModule,
    ButtonModule,
    ChipModule,
    InputMaskModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
