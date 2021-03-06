import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangkyRoutingModule, RoutingComponent } from './dangky-routing.module';

// import { DangkyComponent } from './dangky.component';
// import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { AccountComponent } from '../account/account.component';


@NgModule({
  declarations: [
    RoutingComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    DangkyRoutingModule
  ]
})
export class DangkyModule { }
