import { FormArray, FormGroup } from '@angular/forms';

export interface ScriptInterface {

    generateScript(form: FormGroup, translateList: FormArray);

    cleanScript();
}
