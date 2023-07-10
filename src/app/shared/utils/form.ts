export default class FormUtils {
  /**
   * The function validates all controls in a form by marking them as touched,
   * @param {any} form - The "form" parameter is an object that represents a form in a web application.
   * It is expected to have a "controls" property, which is an object containing the form controls.
   */
  static Validate(form: any) {
    if (form && form.controls) {
      form.markAllAsTouched();
      for (const i in form.controls) {
        if (form.controls.hasOwnProperty(i)) {
          form.controls[i].markAsDirty();
          form.controls[i].updateValueAndValidity();
        }
      }
    }
  }
}
