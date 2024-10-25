import { Component } from '@angular/core';

export interface User{
  email:string;
  otp:string;
}

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent {
  hide:boolean=false;

  user: User={
    email:"",
    otp:""
  };

  onOtpChange(event:any){}
  
  verify(){}
}
