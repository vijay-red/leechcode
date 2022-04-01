import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-problem-discuss-page',
  templateUrl: './problem-discuss-page.component.html',
  styleUrls: ['./problem-discuss-page.component.css']
})
export class ProblemDiscussPageComponent implements OnInit {

  descriptionUrl: String[];
  solutionUrl: String[];
  discussUrl:String[];
  titleSlug = "";
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.titleSlug = this.route.snapshot.params['titleSlug'];
    this.descriptionUrl = ["/problem/"+ this.titleSlug +"/description"];
    this.solutionUrl = ["/problem/" + this.titleSlug+ "/solution"];
    this.discussUrl = ["/problem/"+ this.titleSlug +"/discuss"];
  }

}
