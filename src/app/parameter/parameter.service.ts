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
    var queryUpdate = "";
    var query = "";
    var isGlobal = 'N';
    var isCreated = "N";

    query += "Begin\n\n";


    for (let item of translateList.controls) {

      if (Boolean(item.value["parameter"]) &&
        Boolean(item.value["value"]) &&
        Boolean(item.value["observation"])) {

        if (item.value["globalparameter"]) { isGlobal = "S"; }
        else { isGlobal = "N"; }

        queryProcedure += "\t PR_INSERE_SIS_PARAMETRO('" + item.value["parameter"] + "', '" + item.value["value"] + "', '" + item.value["observation"] + "', '" + isGlobal + "'); \n";


        if (Boolean(item.value["isreviewed"]) && item.value["isreviewed"] == true) {

          if (!Boolean(queryUpdate)) { queryUpdate = "\t /*Revisa os registros*/\n" }

          queryUpdate += "\t UPDATE SIS_PARAMETRO SET TIP_REG = 'R' WHERE DCR_PARAMETRO = '" + item.value["parameter"] + "';";
          queryUpdate += "\n";
        }


        isCreated = "S";
      }
      else {
        isCreated = "N";
      }

    }

    query += queryProcedure + "\n" + queryUpdate + "\n";

    if (form.value["getcommit"]) { query += "\t Commit;\n\n"; }

    query += "End;";

    if (isCreated == "S") { this.scriptservice.setScript(query); }
    else { this.cleanScript(); }
  }

  cleanScript() {
    this.scriptservice.cleanScript();
  }
}
