import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

export class formTranslator {

    constructor(
        private fb: FormBuilder
    ) { }

    formArrayList: string = "translateKeys";

    getFormGroup(): FormGroup {
        return this.fb.group({
            getcommit: [true],
            getbeginend: [true],
            translateKeys: this.fb.array([this.createTranslateKey()])
        });
    }

    createTranslateKey(): FormGroup {
        return this.fb.group({
            key: [null, Validators.compose([Validators.required])],
            force: [true, Validators.compose([Validators.required])],
            portuguese: [null, Validators.compose([Validators.required])],
            english: [null, Validators.compose([Validators.required])],
            spanish: [null, Validators.compose([Validators.required])]
        });
    }

    addTranslatorKey(formList: FormArray) {
        formList.push(this.createTranslateKey());
    }

    removeTranslateKey(formList: FormArray, index) {
        formList.removeAt(index);
    }

    // //Pega todos os arrays
    // get translateFormGroup() {
    //     return this.form.get('translateKeys') as FormArray;
    // }

    getTranslateFormGroup(formList: FormArray, index): FormGroup {
        const formGroup = formList.controls[index] as FormGroup;
        return formGroup;
    }
}