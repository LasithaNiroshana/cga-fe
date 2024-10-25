import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UsersComponent } from './users/users.component';

//Defining routes
const routes: Routes = [
  {path:'',component:LogInComponent},
  {path:'login',component:LogInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'confirmemail',component:ConfirmEmailComponent},
  {path:'home',component:HomePageComponent,
    children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'bookings',component:BookingsComponent},
    {path:'users',component:UsersComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//exporting routes to app module
export const routingComponents=[
  SignUpComponent,
  LogInComponent,
  ForgotPasswordComponent,
  ConfirmEmailComponent,
  HomePageComponent,
  DashboardComponent,
  BookingsComponent,
  UsersComponent,
]
