import { Component, OnInit } from '@angular/core';
import { Problem} from "../../../models/problem";

@Component({
  selector: 'app-admin-prob-list',
  templateUrl: './admin-prob-list.component.html',
  styleUrls: ['./admin-prob-list.component.css']
})
export class AdminProbListComponent implements OnInit {

  problems: Problem[];
  constructor() { }

  ngOnInit(): void {
  }

}
