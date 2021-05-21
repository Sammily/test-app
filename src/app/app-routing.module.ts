import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SecondComponent} from './second-r/second-r.component'

const routes: Routes = [{ path: 'dashboard', component: DashboardComponent },{ path: 'second-r', component: SecondComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
