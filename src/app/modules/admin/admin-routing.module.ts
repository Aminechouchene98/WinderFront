import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'meetings',
        component: MeetingsComponent
      },
      {
        path: 'projects-list',
        component: ProjectListComponent
      },
      {
        path: 'users-list',
        component: UsersListComponent
      },
      {
        path: 'users-pie',
        component: PieChartComponent
      },
      {
        path: 'reclamation',
        component: ReclamationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
