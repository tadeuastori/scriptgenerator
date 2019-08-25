import { Injectable } from '@angular/core';
import { ScriptInterface } from '../ScriptInterface';
import { FormArray, FormGroup } from '@angular/forms';
import { ScriptService } from '../script.service';

@Injectable({
  providedIn: 'root'
})
export class ParameterService implements ScriptInterface {

  constructor(
    private scriptservice: ScriptService
  ) { }

  generateScript(form: FormGroup, translateList: FormArray) {
    var queryProcedure = "\t /*Parametro*/\n";
    var queryUpdate = "\t /*Revisa os registros*/\n";
    var query = "";
    var isGlobal = 'N';
    var isReviewed = 'P'
    var isCreated = "N";

    if (form.value["getbeginend"]) { query += "Begin\n\n"; }


    for (let item of translateList.controls) {

      if (item.value["parameter"] != null &&
        item.value["value"] != null &&
        item.value["observation"] != null) {

        if (item.value["globalparameter"]) { isGlobal = "S"; }
        else { isGlobal = "N"; }

        queryProcedure += "\t PR_INSERE_SIS_PARAMETRO('" + item.value["parameter"] + "', '" + item.value["value"] + "', '" + item.value["observation"] + "', '" + isGlobal + "'); \n";


        if (item.value["isreviewed"]) { isReviewed = "R"; }
        else { isReviewed = "P"; }

        queryUpdate += "\t UPDATE SIS_PARAMETRO SET TIP_REG = '" + isReviewed + "' WHERE DCR_PARAMETRO = '" + item.value["parameter"] + "';";
        queryUpdate += "\n";

        isCreated = "S";
      }

    }

    query += queryProcedure + "\n" + queryUpdate + "\n";

    if (form.value["getcommit"]) { query += "\t Commit;\n\n"; }

    if (form.value["getbeginend"]) { query += "End;"; }

    if (isCreated == "S") { this.scriptservice.setScript(query); }
  }

  cleanScript() {
    this.scriptservice.setScript("");
  }

}
