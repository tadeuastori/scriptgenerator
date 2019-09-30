import { Injectable } from '@angular/core';
import { FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ScriptService } from '../script.service';
import { ScriptInterface } from '../ScriptInterface';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService implements ScriptInterface {

  constructor(
    private scriptservice: ScriptService
  ) { }

  generateScript(form: FormGroup, translateList: FormArray) {
    
    if(translateList.controls.length == 0){
      this.cleanScript();
      return;
    }

    var query = "";
    var isForce = "S";
    var isCreated = "N";
    var countLoop = 0;

    if (form.value["getbeginend"]) { query += "Begin\n\n"; }

    for (let item of translateList.controls) {

      countLoop++;

      if (Boolean(item.value["key"])) {

        if (form.value["typeScript"]) {

          if (Boolean(item.value["portuguese"]) &&
            Boolean(item.value["english"]) &&
            Boolean(item.value["spanish"])) {

            if (item.value["force"]) { isForce = "S"; }
            else { isForce = "N"; }

            query += "\tPR_ATUALIZA_INT_MESSAGE('pt-BR', '" + item.value["key"] + "', '" + item.value["portuguese"] + "', '" + isForce + "'); \n";
            query += "\tPR_ATUALIZA_INT_MESSAGE('pt-PT', '" + item.value["key"] + "', '" + item.value["portuguese"] + "', '" + isForce + "'); \n";
            query += "\tPR_ATUALIZA_INT_MESSAGE('en-GB', '" + item.value["key"] + "', '" + item.value["english"] + "', '" + isForce + "'); \n";
            query += "\tPR_ATUALIZA_INT_MESSAGE('en-US', '" + item.value["key"] + "', '" + item.value["english"] + "', '" + isForce + "'); \n";
            query += "\tPR_ATUALIZA_INT_MESSAGE('zh-CN', '" + item.value["key"] + "', '" + item.value["english"] + "', '" + isForce + "'); \n";
            query += "\tPR_ATUALIZA_INT_MESSAGE('es-UY', '" + item.value["key"] + "', '" + item.value["spanish"] + "', '" + isForce + "'); \n";
            query += "\n";

            isCreated = "S";

          } else {
            query += "\t/** The key '" + item.value["key"] + "' has no a mandatory requirement to make the script. **/\n\n";
          }

        } else {

          if (Boolean(item.value["portuguese"])) {
            query += "\tPR_ATUALIZA_INT_MESSAGE('pt-BR', '" + item.value["key"] + "', '" + item.value["portuguese"] + "'); \n";
            query += "\tPR_ATUALIZA_INT_MESSAGE('pt-PT', '" + item.value["key"] + "', '" + item.value["portuguese"] + "'); \n";
            isCreated = "S";
          }

          if (Boolean(item.value["english"])) {
            query += "\tPR_ATUALIZA_INT_MESSAGE('en-GB', '" + item.value["key"] + "', '" + item.value["english"] + "'); \n";
            query += "\tPR_ATUALIZA_INT_MESSAGE('en-US', '" + item.value["key"] + "', '" + item.value["english"] + "'); \n";
            query += "\tPR_ATUALIZA_INT_MESSAGE('zh-CN', '" + item.value["key"] + "', '" + item.value["english"] + "'); \n";
            isCreated = "S";
          }

          if (Boolean(item.value["spanish"])) {
            query += "\tPR_ATUALIZA_INT_MESSAGE('es-UY', '" + item.value["key"] + "', '" + item.value["spanish"] + "'); \n";
            isCreated = "S";
          }

          query += "\n";

        }

      }
      else {
        query += "\t/** The translate in position [" + countLoop + "] has no KEY to make the script. **/\n\n";
      }

    }


    if (form.value["getcommit"]) { query += "\tCommit;\n\n"; }

    if (form.value["getbeginend"]) { query += "End;"; }

    this.scriptservice.setScript(query);
    // if (isCreated == "S") { this.scriptservice.setScript(query); }
    // else { this.cleanScript(); }
  }

  cleanScript() {
    this.scriptservice.cleanScript();
  }

  /*###################################################################################*/

  createTranslate(fb: FormBuilder): FormGroup {
    return fb.group({
      portuguese: [null, Validators.compose([Validators.required])],
      english: [null, Validators.compose([Validators.required])],
      spanish: [null, Validators.compose([Validators.required])]
    });
  }
}

export enum language {
  portugueseBR = 'pt-BR',
  portuguesePT = 'pt-PT',
  englishUS = 'en-US',
  englishGB = 'en-GB',
  spanish = 'es-UY',
  chinese = 'zh-CN',
}

