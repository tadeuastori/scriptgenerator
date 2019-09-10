import { FormArray, FormGroup } from '@angular/forms';

export interface ScriptInterface {

    // checkField(field: any): boolean;

    generateScript(form: FormGroup, translateList: FormArray);

    cleanScript();
}
