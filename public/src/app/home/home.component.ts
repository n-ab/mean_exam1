import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { User } from './../user';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:User[];
  constructor(private _usersServices: UsersService) {
    this._usersServices.usersObservable.subscribe(
      (users)=>{
        this.users = users;
      }
    )
  }

  ngOnInit() {
    this._usersServices.getUsers();
  }

}
