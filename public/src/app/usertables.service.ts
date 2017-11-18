import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usertable } from './usertable'
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UsertablesService {
  usertables:Usertable[];
  usertablesObservable = new BehaviorSubject(this.usertables);
  constructor(private _http: Http) { }

  getUsertables(){
    this._http.get('/usertables').subscribe(
      (usertables)=>{
        // if call = success
        this.usertables = usertables.json();
        this.usertablesObservable.next(this.usertables);
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  addUsertable(usertable:Usertable){
    console.log('adding score to usertable', usertable);
    this._http.post('/usertables/create', usertable).subscribe(
      (usertableCreated)=>{
        this.usertables.push(usertableCreated.json());
        this.usertablesObservable.next(this.usertables);
      }
    )
  }
}
