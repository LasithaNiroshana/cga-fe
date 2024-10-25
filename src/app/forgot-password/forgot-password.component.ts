import { Component } from '@angular/core';

export interface User{
  email:string;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  hide:boolean=false;

  user: User={
    email:""
  };
  
  sendCode(){}
}
