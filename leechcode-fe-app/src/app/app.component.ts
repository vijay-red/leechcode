import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leechcode-fe-app';
  tabs = ['Home','Solution','Problem'];
  selectedTab = 'Home';

  openTab(tab:any){
    this.selectedTab = tab;
  }
}
