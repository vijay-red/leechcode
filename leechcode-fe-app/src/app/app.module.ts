import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
<<<<<<< Updated upstream
import { ProblemListComponent } from './components/problem-list/problem-list.component';
=======
import { ProblemsListComponent } from './components/problems-list/problems-list.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
<<<<<<< Updated upstream
    ProblemListComponent
=======
    ProblemsListComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
