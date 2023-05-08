import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {AuthguardGuard} from "./shared/authguard.guard";
import {ProjectComponent} from "./modules/project/project.component";
import {ProjectListComponent} from "./modules/project/components/project-list/project-list.component";
import {ReclamationDetailsComponent} from "./modules/admin/reclamation-details/reclamation-details.component";
import {AddBadwordRecComponent} from "./modules/admin/add-badword-rec/add-badword-rec.component";
import {ListeReclamationComponent} from "./modules/project/components/liste-reclamation/liste-reclamation.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  { path: 'reclamations/:id',
    component: ReclamationDetailsComponent },
  { path: 'admin/add-badword-rec',
    component: AddBadwordRecComponent
  },
  { path: 'reclamations',
    component: ListeReclamationComponent },


  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./modules/project/project.module').then((m) => m.ProjectModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: 'tests',
    loadChildren: () => import('./modules/test/test.module').then((m) => m.TestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
