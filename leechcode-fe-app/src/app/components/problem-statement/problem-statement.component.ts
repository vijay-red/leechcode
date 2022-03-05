import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { Problem } from 'src/app/models/problem';
import { ProblemsApiService } from 'src/app/models/problems-api.service';
import { Example } from '../../models/example';

@Component({
  selector: 'app-problem-statement',
  templateUrl: './problem-statement.component.html',
  styleUrls: ['./problem-statement.component.css']
})
export class ProblemStatementComponent implements OnInit {
  examples:Example[];
  problem = new Problem("","","","",12,12,"",""); 
  data: Object[] = []
  title: string;
  difficulty:string;
  description: string;
  titleSlug: string = "";
  originalCode: string = "class Solution {\n\tpublic int[] "+ this.titleSlug  +"(int[] nums, int target) {\n]t}\m}";
  constructor(private pa: ProblemsApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.titleSlug = this.route.snapshot.params['titleSlug'];
    this.pa.getProblemBySlug(this.titleSlug).subscribe(data => {
      this.data =  Object.values(data)[0]
      this.problem = this.problemToJSON(JSON.stringify(this.data));
      this.title = this.problem.title;
      this.description = this.problem.content;
      this.difficulty = this.problem.difficulty;
      console.log(this.problem);
    })
    this.examples = [{
      index: 0,
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
    }, 
    {
      index:1,
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
      explanation: "null"
    }]

  }

  problemToJSON(json:string){
    var obj = JSON.parse(json);
    return new Problem(obj.title,obj.titleSlug,obj.content,obj.difficulty,obj.likes,obj.dislikes,obj.exampleTestCase,obj.hints);
  }

}
