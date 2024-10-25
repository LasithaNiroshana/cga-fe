import { Component } from '@angular/core';

export interface User{
  email:string;
  password:string;
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  hide = true;
  user: User={
    email:"",
    password:""
  };

  logIn(){}
}
