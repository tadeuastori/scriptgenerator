import { Injectable } from '@angular/core';
import { ScriptInterface } from '../ScriptInterface';
import { FormArray, FormGroup } from '@angular/forms';
import { ScriptService } from '../script.service';

@Injectable({
  providedIn: 'root'
})
export class PageService implements ScriptInterface {

  constructor(
    private scriptservice: ScriptService
  ) { }

  generateScript(form: FormGroup, pageList: FormArray) {
    var query = "";
    var isCreated = "N";
    var queryProcedure = "\t /*Add page*/\n";

    query += "Begin\n\n"

    for (let item of pageList.controls) {

      if (item.value["name"] != null &&
        item.value["abbrev"] != null &&
        item.value["namespace"] != null) {


        /*########################*/
        queryProcedure += "\t PR_SEG_INSERIR_FUNCAO(";
        queryProcedure += "\t P_DCR_NAMESPACE\t=> '" + item.value["namespace"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_TIP_FUNCAO\t\t=> '" + item.value["pagetype"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_FLAG_MENU\t\t=> '" + item.value["ismenu"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_DCR_FUNCAO\t\t=> '" + item.value["name"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_ABREV_FUNCAO\t\t=> '" + item.value["abbrev"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_NUM_ORDEM\t\t=> '" + (item.value["ordernum"] == null ? "" : item.value["ordernum"]) + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_DCR_URL\t\t\t=> '" + (item.value["url"] == null ? "" : item.value["url"]) + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_DCR_PATH_ICONE\t=> '" + (item.value["icon"] == null ? "" : item.value["icon"]) + "');";

        queryProcedure += "\n\n";

        isCreated = "S";
      }

    }

    query += queryProcedure;

    if (form.value["getcommit"]) { query += "\t Commit;\n\n"; }

    query += "End;";

    if (isCreated == "S") { this.scriptservice.setScript(query); }
  }

  cleanScript() {
    this.scriptservice.setScript("");
  }

}
