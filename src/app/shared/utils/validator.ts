import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export default class ValidatorUtils {
  /**
   * Validate date range for Form control
   * @param control {AbstractControl}
   * @param {string} [startControlName=startDate]
   * @param {string} [endControlName=endDate]
   * @returns {ValidationErrors | null}
   */
  static DateRangeValidator(control: AbstractControl, startControlName?: string, endControlName?: string): ValidationErrors | null {
    const startDate = control.get(startControlName ?? 'startDate')?.value;
    const endDate = control.get(endControlName ?? 'endDate')?.value;
    if (startDate && endDate) {
      if (startDate > endDate) {
        return {
          dateRange: true,
        };
      }
    }
    return null;
  }

  /**
   * The function `ConfirmPasswordValidator`
   * @use ConfirmPasswordValidator.bind(this)
   * @param {AbstractControl} control
   * @returns a ValidationErrors object if the passwords do not match, otherwise it returns null.
   */
  static ConfirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const formGroup = (this as any).formGroup as FormGroup;
    if (formGroup) {
      if (formGroup.get('password')?.valid && formGroup.get('confirmPassword')?.value) {
        const password = formGroup.get('password')?.value;
        const confirmPassword = formGroup.get('confirmPassword')?.value;
        if (password != confirmPassword) {
          return {
            match: true,
          };
        }
      }
    }
    return null;
  }
}
