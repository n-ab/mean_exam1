import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { QuestionsService } from './../questions.service';
import { Question } from './../question';

import { Usertable } from './../usertable';
import { UsertablesService } from './../usertables.service';


import { UsersService } from './../users.service';
import { User } from './../user';


@Component({
  selector: 'app-letsplay',
  templateUrl: './letsplay.component.html',
  styleUrls: ['./letsplay.component.css']
})
export class LetsplayComponent implements OnInit {
  questions:Question[];

  constructor(private _questionsServices: QuestionsService) {
    // , private _usersServices: UsersService, private _usertablesServices: UsertablesService
    this._questionsServices.questionsObservable.subscribe(
      (questions)=>{
        this.questions = questions;
      }
    )
    // this._usersServices.usersObservable.subscribe(
    //   (users)=>{
    //     this.users = users;
    //   }
    // ),
    // the goal above^^^ was to be able to incorporate 'Hi {{user.name}}' on letsplay.component.html

    // this._usertablesServices.usertablesObservable.subscribe(
    //   (usertables)=>{
    //     this.usertables = usertables;
    //   }
    // )
    // the goal above^^^ was to be able to append the name/score/percentage of the game to Usertables
  }
  ngOnInit() {
    this._questionsServices.getQuestions();
  }
}
