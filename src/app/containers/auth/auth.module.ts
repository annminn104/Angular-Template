import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginForm } from './login/login.form';
import { RegisterForm } from './register/register.form';
import { VerifyEmailForm } from './verify-email/verify-email.form';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@NgModule({
  declarations: [LoginForm, RegisterForm, VerifyEmailForm],
  imports: [CommonModule, ReactiveFormsModule, MdbFormsModule, MdbValidationModule, MdbRippleModule],
  exports: [LoginForm],
})
export class AuthContainerModule {}
