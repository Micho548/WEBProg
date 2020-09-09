import {FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
   return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName]; // controlName= algo@otro.com
      const matchingControl = formGroup.controls[matchingControlName]; // match= algo@otro.com

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
         return;
      }

      if (control.value !== matchingControl.value) {
         matchingControl.setErrors({mustMatch: true });
      } else {
         matchingControl.setErrors(null);
      }
   }

}
