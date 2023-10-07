import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {SignupComponent} from './signup/signup.component';
import {Page403Component} from './page403/page403.component';
import {Page404Component} from './page404/page404.component';
import {Page500Component} from './page500/page500.component';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    Page403Component,
    Page404Component,
    Page500Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule,
  ]
})
export class AuthenticationModule {
}
