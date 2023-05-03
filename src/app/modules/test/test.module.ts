import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './components/test.component';
import { HttpClientModule } from '@angular/common/http';
import { DockModule } from 'primeng/dock';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChipModule } from 'primeng/chip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    HttpClientModule,
    DockModule,
    MultiSelectModule,
    ChipModule, 
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    ProgressSpinnerModule
  ]
})
export class TestModule { }
