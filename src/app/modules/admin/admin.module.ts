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

const PRIME_MODULES = [ChartModule, MenuModule, TableModule, SlideMenuModule];

@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent],
  imports: [CommonModule, AdminRoutingModule, ...PRIME_MODULES]
})
export class AdminModule {}
