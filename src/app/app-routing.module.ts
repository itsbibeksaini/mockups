import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, MockupHomeComponent } from './mockups';
import { TaskboardsDashboardComponent } from './mockups/taskboards-dashboard/taskboards-dashboard.component';

const routes: Routes = [{
  path:'',
  component: MockupHomeComponent
},{
  path:'login',
  component: LoginComponent
},{
  path:'taskboards-dashboard',
  component: TaskboardsDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
