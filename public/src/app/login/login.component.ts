import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UsersService } from './../users.service';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private _usersServices:UsersService) { }

  ngOnInit() {
  }
  onSubmit(){
    this._usersServices.addUser(this.user)
    this.user = new User();
    // loggedIn=true;
    //^^ can't include because login.component.ts 'Cannot find name 'loggedIn'
    // shouldn't I be able to access 'loggedIn' by importing AppComponent?
  }
}
