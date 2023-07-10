import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginForm } from './login/login.form';
import { RegisterForm } from './register/register.form';
import { VerifyEmailForm } from './verify-email/verify-email.form';

@NgModule({
  declarations: [LoginForm, RegisterForm, VerifyEmailForm],
  imports: [CommonModule],
})
export class AuthModule {}
