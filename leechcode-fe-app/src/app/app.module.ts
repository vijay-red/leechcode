import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProblemPageComponent } from './components/problem-page/problem-page.component';
import { ProblemStatementComponent } from './components/problem-statement/problem-statement.component';
import { ExampleComponent } from './components/example/example.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';


=======
import { HomePageComponent } from './components/home-page/home-page.component';
<<<<<<< Updated upstream
import { ProblemListComponent } from './components/problem-list/problem-list.component';
=======
import { ProblemsListComponent } from './components/problems-list/problems-list.component';
>>>>>>> Stashed changes
>>>>>>> home-page

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProblemPageComponent,
    ProblemStatementComponent,
    ExampleComponent,
    
=======
    HomePageComponent,
<<<<<<< Updated upstream
    ProblemListComponent
=======
    ProblemsListComponent
>>>>>>> Stashed changes
>>>>>>> home-page
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CodemirrorModule,
    MonacoEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
