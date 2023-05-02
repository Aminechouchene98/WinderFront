import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test.component';
import { FinishScreenComponent } from './finish-screen/finish-screen.component';
import { FinishScreenFailComponent } from './finish-screen-fail/finish-screen-fail.component';

const routes: Routes = [{
  path: ':test_id/questions',
  component: TestComponent
}, 
{
  path: 'finishFail', component: FinishScreenFailComponent
},
{
  path: 'finishSuccess', component: FinishScreenComponent
},
{
  path: 'update-test', component: TestComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
