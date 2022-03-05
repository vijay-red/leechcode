import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProblemPageComponent } from './components/problem-page/problem-page.component';
import { ProblemStatementComponent } from './components/problem-statement/problem-statement.component';
import { ExampleComponent } from './components/example/example.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { problemList } from './components/problem-list/problem-list.services';

import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'problem-page', component: ProblemPageComponent},
  {path: 'problem-list', component: ProblemListComponent},
  {path: 'home-page', component: HomePageComponent}
 
]


@NgModule({
  declarations: [
    AppComponent,
    ProblemPageComponent,
    ProblemStatementComponent,
    ExampleComponent,
    HomePageComponent,
    ProblemListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CodemirrorModule,
    MonacoEditorModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [problemList],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }
