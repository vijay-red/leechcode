import { Component, OnInit } from '@angular/core';
import { ProblemsApiService } from 'src/app/services/problems-api.service';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  problems: Object;

  constructor(private pa: ProblemsApiService) { }

  ngOnInit(): void {
    this.pa.getProblems()
    .subscribe(data => this.problems = data);

  console.log(this.problems);
  }

}
