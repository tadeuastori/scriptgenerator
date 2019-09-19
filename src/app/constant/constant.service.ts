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
    var querySelect = "";
    var queryProcedure = "\t /*Insert Constant*/\n";
    var queryUpdate = "";
    var query = "";
    var isCreated = "N";
    var contConst = 1;
    var varValue = '';

    var strAux = "";

    for (let item of constantList.controls) {

      if (Boolean(item.value["constant"]) &&
        Boolean(item.value["table"]) &&
        Boolean(item.value["column"]) &&
        (Boolean(item.value["subquery"]) || Boolean(item.value["value"])) &&
        Boolean(item.value["observation"])) {

        /*########################*/
        if (Boolean(item.value["subquery"])) {

          strAux = item.value["subquery"];

          if ((strAux.includes("from") || strAux.includes("FROM")) && (strAux.includes("select") || strAux.includes("SELECT"))) {

            if (!Boolean(querySelect)) { querySelect = "\t /*Get Constant Value*/\n" }

            strAux = strAux.replace("\t", "").replace("FROM", "from"); /*IT CAN'T BE UPPERCASE*/

            querySelect += strAux.replace("from", "into V_CODIGO_" + contConst + "\nfrom");

            if (querySelect.substring(querySelect.length - 1, querySelect.length) != ";") { querySelect += ";"; }

            querySelect += "\n\n";

            declareSession += "\t V_CODIGO_" + contConst + ",";
            varValue = "V_CODIGO_" + contConst;
          }
          else {
            this.scriptservice.setScript("<< The QUERY has no SELECT/FROM statement. This script will not be generated! >> \n\n");
            return;
          }
        }
        else {
          varValue = "'" + item.value["value"] + "'";
        }


        /*########################*/
        queryProcedure += "\t PR_INSERE_SIS_CONSTANTE( ";
        queryProcedure += " P_DCR_CONSTANTE\t => '" + item.value["constant"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_NOM_TABELA\t\t => '" + item.value["table"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_NOM_COLUNA\t\t => '" + item.value["column"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_CD_REGISTRO_EGF\t => " + varValue + ", \n";
        queryProcedure += "\t\t\t\t\t\t\t DCR_OBSERVACAO\t => '" + item.value["observation"] + "');";
        queryProcedure += "\n\n";


        /*########################*/
        if (Boolean(item.value["isreviewed"])) {

          if (!Boolean(queryUpdate)) { queryUpdate = "\t /*Review the constant*/\n" }

          queryUpdate += "\t UPDATE SIS_CONSTANTE SET TIP_REG = 'R' WHERE DCR_CONSTANTE = '" + item.value["constant"] + "';";
          queryUpdate += "\n";
        }

        /*########################*/

        contConst++;
        isCreated = "S";
      }
      else {
        isCreated = "N";
      }

    }

    if (declareSession != '') { query += "Declare\n\n" + declareSession.slice(0, -1) + " number; " + "\n\n"; }

    query += "Begin\n\n" + this.returnBlockException(querySelect) + "\n" + queryProcedure + "\n" + queryUpdate + "\n";

    if (form.value["getcommit"]) { query += "\t Commit;\n\n"; } 

    query += "End;";

    if (isCreated == "S") { this.scriptservice.setScript(query); }
    else { this.cleanScript(); }
  }

  cleanScript() {
    this.scriptservice.cleanScript();
  }

  returnBlockException(script): string{

    var query = "";

    if (Boolean(script)){
      query += "\t begin\n";
      query += "\n";
  
      query += " " + script;
  
      query += "\t exception\n";
      query += "\t\t when too_many_rows then\n";
      query += "\t\t\t raise_application_error(-20001,'Too many rows from select. Check it please!');\n";
      query += "\t\t when no_data_found then\n";
      query += "\t\t\t raise_application_error(-20001,'No data found from select. Check it please!');\n";
      query += "\t\t when others then\n";
      query += "\t\t\t raise_application_error(-20001,'There is something wrong from select. Check it please!');\n";
      query += "\t end;\n";
    }    

    return query;
  }

}
