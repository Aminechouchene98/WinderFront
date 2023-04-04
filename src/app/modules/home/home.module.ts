import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SideBarComponent } from './components/components/side-bar/side-bar.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [SideBarComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
