//built-in modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modules
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { PlayComponent } from './play/play.component';
import { LetsplayComponent } from './letsplay/letsplay.component';
import { LoginComponent } from './login/login.component';

//services
import { QuestionsService } from './questions.service';
import { UsersService } from './users.service';
import { UsertablesService } from './usertables.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddQuestionComponent,
    PlayComponent,
    LetsplayComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [QuestionsService, UsersService, UsertablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
