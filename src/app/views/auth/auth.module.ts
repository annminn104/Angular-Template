import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { VerifyEmailPage } from './pages/verify-email/verify-email.page';

@NgModule({
  declarations: [LoginPage, RegisterPage, ForgotPasswordPage, VerifyEmailPage],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
