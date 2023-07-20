import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroupWith, WithForm } from '@core/interfaces/components';
import { ILoginRequest } from '@interfaces/auth';
import { AuthService } from '@services/auth.service';
import { AUTH_VALID } from '@shared/mocks/validation';
import FormUtils from '@shared/utils/form';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.scss'],
})
export class LoginForm implements OnInit, WithForm<ILoginRequest> {
  formGroup!: FormGroupWith<ILoginRequest>;
  isRequesting: boolean = false;
  public isValid = AUTH_VALID;

  get form() {
    return this.formGroup.controls;
  }

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(320)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]),
      remember: new FormControl(false),
    });
  }

  setIsRequesting(val: boolean) {
    this.isRequesting = val;
  }

  onSubmit(): void | undefined {
    FormUtils.Validate(this.formGroup);
    if (this.formGroup.invalid) return;

    this.setIsRequesting(true);
    const data = this.formGroup.value as ILoginRequest;
    console.log(data);
    this._auth
      .login(data)
      .subscribe({
        next: () => this._router.navigate(['/']),
        error: (err) => console.log(err),
      })
      .add(() => this.setIsRequesting(false));
  }

  reset(): void {
    this.formGroup.reset({ username: '', password: '', remember: false });
  }
}
