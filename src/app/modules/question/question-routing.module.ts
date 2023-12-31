import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/components/question.component';
import { FinishScreenComponent } from '../test/finish-screen/finish-screen.component';

const routes: Routes = [{
  path: 'all',
  component: QuestionComponent
}, 
{
  path: 'finish', component: FinishScreenComponent  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
