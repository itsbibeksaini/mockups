import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, MockupHomeComponent } from './mockups';

const routes: Routes = [{
  path:'',
  component: MockupHomeComponent
},{
  path:'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
