import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProblemsApiService {

  constructor(private http: HttpClient) {
    
   }
   getProblems() {
    return this.http.get(`${environment.serverUrl}/api/v1/problems`);
  }
}
