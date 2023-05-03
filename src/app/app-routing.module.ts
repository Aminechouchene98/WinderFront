import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {AuthguardGuard} from "./shared/authguard.guard";
import {ProjectComponent} from "./modules/project/project.component";
import {ProjectListComponent} from "./modules/project/components/project-list/project-list.component";
import {ResetPasswordComponent} from "./modules/reset-password/reset-password/reset-password.component";
import {ResetComponent} from "./modules/reset/reset/reset.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path : 'reset',
    component : ResetComponent
  },
  {
    path : 'reset-password',
    component : ResetPasswordComponent
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
