import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Problem } from './problem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemsApiService {

  constructor(private http: HttpClient) {
    
   }
   getProblems() {
     let url = "http://localhost:8080/api/v1/problems"
    return this.http.get(url);
  }
  createProblem(problem: Problem){
    let url = "http://localhost:8080/api/v1/problems"
    return this.http.post(url,problem);
  }
}