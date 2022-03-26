import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTabNav } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

import { ProblemPageComponent } from './components/problem-page/problem-page.component';
import { ProblemStatementComponent } from './components/problem-statement/problem-statement.component';


import { ExampleComponent } from './components/example/example.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemsApiService } from './models/problems-api.service';
import { AdminPanelComponent } from './components/adminpanel/adminpanel.component';
import { AdminProbListComponent } from './components/adminpanel/admin-prob-list/admin-prob-list.component';

import { CreateProblemComponent } from './components/adminpanel/create-problem/create-problem.component';
import { UpdateProblemComponent } from './components/adminpanel/update-problem/update-problem.component';
import { TestExampleComponent } from './components/problem-page/test-example/test-example.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ProblemPageComponent,
    ProblemStatementComponent,
    ExampleComponent,
    HomePageComponent,
    ProblemListComponent,
    ProblemListComponent,
    AdminPanelComponent,
    AdminProbListComponent,
    CreateProblemComponent,
    UpdateProblemComponent,
    TestExampleComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CodemirrorModule,
    MonacoEditorModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
