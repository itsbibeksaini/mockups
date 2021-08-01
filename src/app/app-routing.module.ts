import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockupHomeComponent } from './mockups';

const routes: Routes = [{
  path:'',
  component: MockupHomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
