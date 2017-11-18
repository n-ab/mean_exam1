import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from './question'
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class QuestionsService {
  questions:Question[];
  questionsObservable = new BehaviorSubject(this.questions);
  constructor(private _http: Http) { }

  getQuestions(){
    this._http.get('/questions').subscribe(
      (questions)=>{
        // if call = success
        this.questions = questions.json();
        this.questionsObservable.next(this.questions);
      },
      (error)=>{
        // if call != success
        console.log(error)
      }
    )
  }
  addQuestion(question:Question){
    console.log('attempting to create question', question);
    this._http.post('/questions/create', question).subscribe(
      (questionCreated)=>{
        this.questions.push(questionCreated.json());
        this.questionsObservable.next(this.questions);
      }
    )
  }
}
