import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

export class formConstant {

    form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      published: true,
      credentials: this.fb.array([]),
    });
  }

  addCreds() {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.fb.group({
      username: '',
      password: '',
    }));
  }

  removeItem() {
    const creds = this.form.controls.credentials as FormArray;
    // this.arrayItems.pop();
    creds.removeAt(creds.length - 1);
 }
}