import { Injectable } from '@angular/core';
import { ScriptInterface } from '../ScriptInterface';
import { FormArray, FormGroup } from '@angular/forms';
import { ScriptService } from '../script.service';

@Injectable({
  providedIn: 'root'
})
export class FunctioncontrolService implements ScriptInterface {

  constructor(
    private scriptservice: ScriptService
  ) { }

  generateScript(form: FormGroup, functioncontrolList: FormArray) {
    var declareSession = "";
    var queryProcedure = "";
    var queryProcess = "";
    var query = "";
    var isCreated = "N";

    query += "Begin\n\n"

    for (let item of functioncontrolList.controls) {

      if (Boolean(item.value["name"]) &&
        Boolean(item.value["abbrev"]) &&
        Boolean(item.value["idcontrol"])) {

        /*########################*/
        if (Boolean(item.value["tipprocess"])) {

          if (!Boolean(declareSession)){ declareSession = "declare\n\t V_CD_PROCESSO number;\n"; } 
          
          queryProcess = "\t V_CD_PROCESSO := 0;\n\n";

          queryProcess += "\t /*Add get process*/\n";
          queryProcess += "\t select\t cd_processo\n";
          queryProcess += "\t into\t V_CD_PROCESSO\n";
          queryProcess += "\t from\t cfg_processo\n";
          queryProcess += "\t where\t upper(tip_processo) = upper('"+ item.value["tipprocess"] +"');\n\n";

        } else {
          queryProcess = "";
        }

        queryProcedure += queryProcess;

        /*########################*/
        queryProcedure += "\t PR_SEG_INSERIR_FUNCAO_CONTROLE(";
        queryProcedure += " P_DCR_FUNCAO\t\t => '" + item.value["name"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t\t\t P_ABREV_FUNCAO\t\t => '" + item.value["abbrev"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t\t\t P_DCR_ID_CONTROLE\t => '" + item.value["idcontrol"] + "', \n";
        
        if (Boolean(item.value["tipprocess"])) {
          queryProcedure += "\t\t\t\t\t\t\t\t\t P_CD_PROCESSO\t\t => V_CD_PROCESSO \n";
        }        

        queryProcedure += "\t\t\t\t\t\t\t\t\t);";
        queryProcedure += "\n\n";

        queryProcedure += "/*####################################################################################*/\n\n";


        isCreated = "S";
      }
      else {
        isCreated = "N";
      }

    }

    query = declareSession + query + queryProcedure;

    if (form.value["getcommit"]) { query += "\t Commit;\n\n"; }

    query += "End;";

    if (isCreated == "S") { this.scriptservice.setScript(query); }
    else { this.cleanScript(); }
  }

  cleanScript() {
    this.scriptservice.cleanScript();
  }

}
