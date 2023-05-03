import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnScrollDirective } from './shared/directives/on-scroll.directive';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DockModule } from 'primeng/dock';
import { AnimateModule } from 'primeng/animate';
import { MegaMenuModule } from 'primeng/megamenu';
import { HttpClientModule } from '@angular/common/http';
import { QuestionAdminComponent } from './modules/question/question-admin/components/question-admin.component';
import { FinishScreenComponent } from './modules/test/finish-screen/finish-screen.component';
import { FinishScreenFailComponent } from './modules/test/finish-screen-fail/finish-screen-fail.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FilterPipe } from './shared/pipes/filter.pipe';
import {ResetPasswordComponent} from "./modules/reset-password/reset-password/reset-password.component";
import {NgProgressModule} from "ngx-progressbar";
import { ReactiveFormsModule } from '@angular/forms';
import { ResetComponent } from './modules/reset/reset/reset.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, OnScrollDirective, ResetPasswordComponent, ResetComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, DockModule, AnimateModule, MegaMenuModule,HttpClientModule, NgProgressModule,ReactiveFormsModule,FinishScreenComponent,FinishScreenFailComponent],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
