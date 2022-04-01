import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solution-page',
  templateUrl: './solution-page.component.html',
  styleUrls: ['./solution-page.component.css']
})
export class SolutionPageComponent implements OnInit {
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
