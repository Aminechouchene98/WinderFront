import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from './test';
import { Question } from '../question/question';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private apiServerUrl = "http://localhost:8089/pidev";

  constructor(private http: HttpClient){}

  public getTests(): Observable<Test[]> {
    return this.http.get<Test[]>(`${this.apiServerUrl}/tests/retrieve-all-tests`);
  }

  public addTest(test: Test): Observable<Test> {
    return this.http.post<Test>(`${this.apiServerUrl}/tests/add-test`, test);
  }

  public updateTest(test: Test): Observable<Test> {
    return this.http.put<Test>(`${this.apiServerUrl}/tests/update-test`, test);
  }

  public deleteTest(test_id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/tests/remove-test/${test_id}`);
  }

  public retrieveTest(test_id: number): Observable<Test[]> {
    return this.http.get<Test[]>(`${this.apiServerUrl}/tests/retrieve-test/${test_id}`);
  }

  public getTestQuestions(test_id: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiServerUrl}/tests/${test_id}/questions`);
  }

  public updateQuestionInTest(test_id: number, question_id: number): Observable<Test>{
    return this.http.put<Test>(`${this.apiServerUrl}/tests/update-test/${test_id}/questions/${question_id}`, null);
  }
  
}