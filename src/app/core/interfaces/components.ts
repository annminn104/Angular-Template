import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

export interface WithT<T> {
  [key: string]: T;
}

export type FormGroupValue<T> = {
  value: T;
};
export type FormGroupWith<T> = Required<FormGroup<Record<keyof T, FormControl<any>>>> & AbstractControl<any>;

export type WithForm<T> = {
  formGroup: FormGroupWith<T>;
  form: Record<keyof T, AbstractControl<T>>;
  initForm(): void;
  onSubmit(): void | undefined;
  reset(): void;
};
