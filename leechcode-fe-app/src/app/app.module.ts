import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { AppRoutingModule } from './app-routing.module';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTabNav } from '@angular/material/tabs';
>>>>>>> problem-page-back-end
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

import { ProblemPageComponent } from './components/problem-page/problem-page.component';
import { ProblemStatementComponent } from './components/problem-statement/problem-statement.component';
<<<<<<< HEAD
import { ExampleComponent } from './components/example/example.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { problemList } from './components/problem-list/problem-list.services';
=======
>>>>>>> problem-page-back-end

import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';

import { ProblemListComponent } from './components/problem-list/problem-list.component';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'problem-page', component: ProblemPageComponent},
  {path: 'problem-list', component: ProblemListComponent},
  {path: 'home-page', component: HomePageComponent}
 
]
=======
import { ProblemsApiService } from './models/problems-api.service';
import { AdminPanelComponent } from './components/adminpanel/adminpanel.component';
import { AdminProbListComponent } from './components/adminpanel/admin-prob-list/admin-prob-list.component';

import { CreateProblemComponent } from './components/adminpanel/create-problem/create-problem.component';
import { UpdateProblemComponent } from './components/adminpanel/update-problem/update-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> problem-page-back-end

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SolutionPageComponent } from './components/problem-page/solution-page/solution-page.component';
import { ProblemDiscussPageComponent } from './components/problem-page/problem-discuss-page/problem-discuss-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemPageComponent,
    ProblemStatementComponent,
    HomePageComponent,
<<<<<<< HEAD
    ProblemListComponent
=======
    ProblemListComponent,
    ProblemListComponent,
    AdminPanelComponent,
    AdminProbListComponent,
    CreateProblemComponent,
    UpdateProblemComponent,
    NavbarComponent,
    SolutionPageComponent,
    ProblemDiscussPageComponent,
    
>>>>>>> problem-page-back-end
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CodemirrorModule,
    MonacoEditorModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [problemList],
=======
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule
    
  ],
  providers: [ProblemsApiService],
>>>>>>> problem-page-back-end
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }
