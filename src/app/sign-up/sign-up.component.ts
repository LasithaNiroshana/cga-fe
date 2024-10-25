import { Component } from '@angular/core';

export interface User{
  email:string;
  password:string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  hide:boolean=true;
  user: User={
    email:"",
    password:""
  };
  
  signUp(){}
}
