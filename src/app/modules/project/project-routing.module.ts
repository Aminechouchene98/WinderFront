import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { PostProjectComponent } from './components/post-project/post-project.component';
import { ReclamationUserComponent } from './components/reclamation-user/reclamation-user.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  },
  {
    path: 'post-project',
    component: PostProjectComponent
  },
  {
    path: 'reclamation',
    component: ReclamationUserComponent
  },
  {
    path: 'user-projects',
    component: UserProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
