import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnScrollDirective } from './shared/directives/on-scroll.directive';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DockModule } from 'primeng/dock';
import { AnimateModule } from 'primeng/animate';
@NgModule({
  declarations: [AppComponent, LandingPageComponent, OnScrollDirective],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, DockModule, AnimateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
