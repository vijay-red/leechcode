import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Problem } from 'src/app/models/problem';
import { ProblemsApiService } from 'src/app/models/problems-api.service';
@Component({
  selector: 'app-create-problem',
  templateUrl: './create-problem.component.html',
  styleUrls: ['./create-problem.component.css']
})
export class CreateProblemComponent implements OnInit {
  
  problem = new Problem("","","","",12,12,"",""); 
  constructor(private pa: ProblemsApiService, private router:Router) { }
  data: Object[] = []
  ngOnInit(): void {

  }

  createNewProblem(){
    
    this.pa.createProblem(this.problem).subscribe(data => {
      console.log(data);
      this.router.navigate(['/admin/problemslist']);
    }, error => console.log(error));
    console.log(this.problem);
  }  
}
