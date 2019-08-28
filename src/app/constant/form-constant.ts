import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class formConstant {

  constructor() { }

  createConstantForm(fb: FormBuilder): FormGroup {
    return fb.group({
      getcommit: [true],
      getbeginend: [true],
      constant: fb.array([this.createConstantKey(fb)])
    });
  }

  createConstantKey(fb: FormBuilder): FormGroup {
    return fb.group({
      subquery: [null, Validators.compose([Validators.required])],
      constant: [null, Validators.compose([Validators.required])],
      table: [null, Validators.compose([Validators.required])],
      column: [null, Validators.compose([Validators.required])],
      value: [null, Validators.compose([Validators.required])],
      observation: [null, Validators.compose([Validators.required])],
      isreviewed: [true]
    });
  }

}