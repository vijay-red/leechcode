import { Component, OnInit } from '@angular/core';
import { ProblemsApiService } from 'src/app/models/problems-api.service';
import { Problem } from 'src/app/models/problem';
@Component({
  selector: 'app-admin-prob-list',
  templateUrl: './admin-prob-list.component.html',
  styleUrls: ['./admin-prob-list.component.css']
})
export class AdminProbListComponent implements OnInit {

  data: Object[] = []
  problems: Problem[] = []

  constructor(private pa: ProblemsApiService) { }

  ngOnInit(): void {
    this.pa.getProblems()
    .subscribe(data => {
      
    this.data =  Object.values(data)[0]
    for(var i = 0; i < this.data.length; i++){
      this.problems.push(this.problemToJSON(JSON.stringify(this.data[i])));
    }
      
    console.warn("problem object array", this.problems);
    });

    
  
  }
  
  problemToJSON(json:string){
    var obj = JSON.parse(json);
    return new Problem(obj.title,obj.titleSlug,obj.content,obj.difficulty,obj.likes,obj.dislikes,obj.exampleTestCase,obj.hints);
  }

}
