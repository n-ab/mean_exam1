import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { PlayComponent } from './play/play.component';
import { LetsplayComponent } from './letsplay/letsplay.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:HomeComponent,
    children:[]
  },
  {
    path:'addQuestion',
    pathMatch:'full',
    component:AddQuestionComponent,
    children:[]
  },
  {
    path:'letsplay',
    pathMatch:'full',
    component:LetsplayComponent,
    children:[]
  },
  {
    path:'login',
    pathMatch:'full',
    component:LoginComponent,
    children:[]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
