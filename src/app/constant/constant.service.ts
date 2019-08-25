import { Injectable } from '@angular/core';
import { ScriptInterface } from '../ScriptInterface';
import { FormArray, FormGroup } from '@angular/forms';
import { ScriptService } from '../script.service';

@Injectable({
  providedIn: 'root'
})
export class ConstantService implements ScriptInterface {

  constructor(
    private scriptservice: ScriptService
  ) { }

  generateScript(form: FormGroup, constantList: FormArray) {
    var declareSession = "";
    var querySelect = "\t /*Get Constant Value*/\n";
    var queryProcedure = "\t /*Insert Constant*/\n";
    var queryUpdate = "\t /*Review the constant*/\n";
    var query = "";
    var isReviewed = 'P'
    var isCreated = "N";
    var contConst = 1;

    var strAux = "";

    query += "Begin\n\n"


    for (let item of constantList.controls) {

      if (item.value["constant"] != null &&
        item.value["table"] != null &&
        item.value["column"] != null &&
        item.value["subquery"] &&
        item.value["observation"] != null) {

        /*########################*/
        if (item.value["subquery"] != null) {

          strAux = item.value["subquery"];
          strAux = strAux.replace("\t", "");
          querySelect += strAux.replace("from", "into V_CODIGO_" + contConst + "\n from");

          if (querySelect.substring(querySelect.length - 1, querySelect.length) != ";") { querySelect += ";"; }

          querySelect += "\n\n";

          declareSession += "V_CODIGO_" + contConst + ",";
        }


        /*########################*/
        queryProcedure += "\t PR_INSERE_SIS_CONSTANTE(";
        queryProcedure += " P_DCR_CONSTANTE    => '" + item.value["constant"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_NOM_TABELA       => '" + item.value["table"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_NOM_COLUNA       => '" + item.value["column"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_CD_REGISTRO_EGF  => V_CODIGO_" + contConst + ", \n";
        queryProcedure += "\t\t\t\t\t\t\t DCR_OBSERVACAO     => '" + item.value["observation"] + "');";
        queryProcedure += "\n\n";


        /*########################*/
        if (item.value["isreviewed"]) { isReviewed = "R"; }
        else { isReviewed = "P"; }

        queryUpdate += "\t UPDATE SIS_CONSTANTE SET TIP_REG = '" + isReviewed + "' WHERE DCR_CONSTANTE = '" + item.value["constant"] + "';";
        queryUpdate += "\n";


        /*########################*/

        contConst++;
        isCreated = "S";
      }

    }


    query = "Declare\n\n" + declareSession.slice(-1) + " number; " + "\n\n" + query;

    query += querySelect + "\n" + queryProcedure + "\n" + queryUpdate + "\n";

    if (form.value["getcommit"]) { query += "\t Commit;\n\n"; }

    query += "End;";

    if (isCreated == "S") { this.scriptservice.setScript(query); }
  }

  cleanScript() {
    this.scriptservice.setScript("");
  }

}
