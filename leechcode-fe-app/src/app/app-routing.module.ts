import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/adminpanel/adminpanel.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProblemPageComponent } from './components/problem-page/problem-page.component';
import { AdminProbListComponent } from './components/adminpanel/admin-prob-list/admin-prob-list.component';
import { CreateProblemComponent } from './components/adminpanel/create-problem/create-problem.component';
import { UpdateProblemComponent } from './components/adminpanel/update-problem/update-problem.component';
import { SolutionPageComponent } from './components/problem-page/solution-page/solution-page.component';
import { ProblemDiscussPageComponent } from './components/problem-page/problem-discuss-page/problem-discuss-page.component';
const routes: Routes = [{
  path: 'home', component: HomePageComponent
}, {path: 'problem', component: ProblemPageComponent 
}, {path: 'problem/:titleSlug/discuss', component: ProblemDiscussPageComponent 
}, {path: 'problem/:titleSlug/description', component: ProblemPageComponent 
}, {path: 'problem/:titleSlug/solution', component: SolutionPageComponent 
},{path: 'admin', component: AdminPanelComponent 
},{path: 'admin/problemlist', component: AdminProbListComponent 
},{path: 'admin/createproblem', component: CreateProblemComponent 
},{path: 'admin/updateproblem/:titleSlug', component: UpdateProblemComponent 
},{path: '', redirectTo: '/home', pathMatch: 'full' 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent,ProblemPageComponent]
