import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ChartModule } from 'primeng/chart';
import { AdminComponent } from './admin.component';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MeetingsComponent } from './meetings/meetings.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const PRIME_MODULES = [ChartModule, MenuModule, TableModule, SlideMenuModule];

@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent, MeetingsComponent],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    ...PRIME_MODULES,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ]
})
export class AdminModule {}
