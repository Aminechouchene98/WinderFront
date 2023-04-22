import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuestionRoutingModule } from './question-routing.module';
import { DockModule } from 'primeng/dock';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    HttpClientModule,
    DockModule
  ]
})
export class QuestionModule { }
