import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/adminpanel/adminpanel.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProblemPageComponent } from './components/problem-page/problem-page.component';

const routes: Routes = [{
  path: 'home', component: HomePageComponent
}, {path: 'problem', component: ProblemPageComponent 
},{path: 'admin', component: AdminPanelComponent 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent,ProblemPageComponent]
