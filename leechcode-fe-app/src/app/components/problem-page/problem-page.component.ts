import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-problem-page',
  templateUrl: './problem-page.component.html',
  styleUrls: ['./problem-page.component.css']
})
export class ProblemPageComponent implements OnInit {
  tabs = ['Description','Solution','Discuss'];
  selectedTab = 'Description';
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  titleSlug = "";
  originalCode: string = "class Solution {\n\tpublic int[] " + this.titleSlug +"(int[] nums, int target) {\n\n\t}\n}";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.titleSlug = this.route.snapshot.params['titleSlug'];
    this.originalCode = "class Solution {\n\tpublic int[] " + this.titleSlug +"(int[] nums, int target) {\n\n\t}\n}";
  }
  openTab(tab:any){
    this.selectedTab = tab;
  }

}
