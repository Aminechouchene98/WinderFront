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
@NgModule({
  declarations: [AppComponent, LandingPageComponent, OnScrollDirective, QuestionAdminComponent, FinishScreenComponent, FinishScreenFailComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, DockModule, AnimateModule, MegaMenuModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
