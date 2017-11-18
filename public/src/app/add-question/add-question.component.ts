import { Component, OnInit } from '@angular/core';
import { Question } from './../question';
import { QuestionsService } from './../questions.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  question: Question = new Question();
  questions: Array<Question>;
  constructor(private _questionsServices:QuestionsService) { }

  ngOnInit() {
  }
  onSubmit() {
    this._questionsServices.addQuestion(this.question);
    this.question = new Question();
  }

}
