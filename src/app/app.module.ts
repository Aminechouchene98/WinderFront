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
import { FilterPipe } from './shared/pipes/filter.pipe';
import {ResetPasswordComponent} from "./modules/reset-password/reset-password/reset-password.component";
import {NgProgressModule} from "ngx-progressbar";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResetComponent } from './modules/reset/reset/reset.component';
import { DisplayUsersComponent } from './modules/display-users/display-users.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, LandingPageComponent, OnScrollDirective, ResetPasswordComponent, ResetComponent, DisplayUsersComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, DockModule, AnimateModule, MegaMenuModule, HttpClientModule, NgProgressModule, ReactiveFormsModule, FormsModule, SharedModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
