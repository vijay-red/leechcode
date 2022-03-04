import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemPageComponent } from './components/problem-page/problem-page.component';
import { ProblemStatementComponent } from './components/problem-statement/problem-statement.component';
import { ExampleComponent } from './components/example/example.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';


import { HomePageComponent } from './components/home-page/home-page.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemsApiService } from './models/problems-api.service';
import { AdminPanelComponent } from './components/adminpanel/adminpanel.component';
import { AdminProbListComponent } from './components/adminpanel/admin-prob-list/admin-prob-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProblemComponent } from './components/adminpanel/create-problem/create-problem.component';


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
    CreateProblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CodemirrorModule,
    MonacoEditorModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [ProblemsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
