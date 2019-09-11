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
    let languages: string[] = ['pt-BR', 'pt-PT', 'en-US', 'en-GB', 'es-UY', 'zh-CN'];
    var query = "";
    var isCreated = "N";
    var queryProcedure = "";
    var queryTranducao = "";
    var queryAlternativeValue = "";

    query += "Begin\n\n"

    for (let item of pageList.controls) {

      queryProcedure += "\t /*Add page*/\n";
      queryTranducao = "\t /*Add Translater*/\n";

      if (Boolean(item.value["name"]) &&
        Boolean(item.value["abbrev"]) &&
        Boolean(item.value["portuguese"]) &&
        Boolean(item.value["english"]) &&
        Boolean(item.value["spanish"]) &&
        Boolean(item.value["namespace"])) {


        /*########################*/
        queryProcedure += "\t PR_SEG_INSERIR_FUNCAO(";
        queryProcedure += "\t P_DCR_NAMESPACE\t=> '" + item.value["namespace"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_TIP_FUNCAO\t\t=> '" + item.value["pagetype"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_FLAG_MENU\t\t=> '" + item.value["ismenu"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_DCR_FUNCAO\t\t=> '" + item.value["name"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_ABREV_FUNCAO\t\t=> '" + item.value["abbrev"] + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_NUM_ORDEM\t\t=> '" + (!Boolean(item.value["ordernum"]) ? "" : item.value["ordernum"]) + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_DCR_URL\t\t\t=> '" + (!Boolean(item.value["url"]) ? "" : item.value["url"]) + "', \n";
        queryProcedure += "\t\t\t\t\t\t\t P_DCR_PATH_ICONE\t=> '" + (!Boolean(item.value["icon"])? "" : item.value["icon"]) + "'\n";
        queryProcedure += "\t\t\t\t\t\t\t);\n";
        queryProcedure += "\n\n";


        /*########################*/
        for (var idx in languages) {
          queryTranducao += "\t PR_ATUALIZA_SEG_FUNCAO_IDIOMA(";
          queryTranducao += "\t p_dcr_url\t\t\t\t=> '" + (!Boolean(item.value["url"]) ? "" : item.value["url"]) + "', \n";
          queryTranducao += "\t\t\t\t\t\t\t\t\t p_dcr_namespace\t\t=> '" + item.value["namespace"] + "', \n";
          queryTranducao += "\t\t\t\t\t\t\t\t\t p_cd_language\t\t\t=> '" + languages[idx] + "', \n";

          switch (languages[idx].substr(0, 2)) {
            case 'pt':
              queryTranducao += "\t\t\t\t\t\t\t\t\t p_dcr_funcao\t\t\t=> '" + item.value["portuguese"] + "', \n";
              break;
            case 'en': case 'zh':
              queryTranducao += "\t\t\t\t\t\t\t\t\t p_dcr_funcao\t\t\t=> '" + item.value["english"] + "', \n";
              break;
            case 'es':
              queryTranducao += "\t\t\t\t\t\t\t\t\t p_dcr_funcao\t\t\t=> '" + item.value["spanish"] + "', \n";
              break;
            default:
              queryTranducao += "\t\t\t\t\t\t\t\t\t p_dcr_funcao\t\t\t=> '" + item.value["name"] + "', \n";
              break;
          }

          queryTranducao += "\t\t\t\t\t\t\t\t\t p_abrev_funcao\t\t\t=> '" + item.value["abbrev"] + "', \n";
          queryTranducao += "\t\t\t\t\t\t\t\t\t p_flag_forcar_atualiz\t=> '" + item.value["force"] + "' \n";
          queryTranducao += "\t\t\t\t\t\t\t\t\t);\n\n";
        }

        queryProcedure += queryTranducao + "/*####################################################################################*/";

        queryProcedure += "\n\n";

        if (Boolean(item.value["blockpage"]) && Boolean(item.value["url"])) {
          if (!Boolean(queryAlternativeValue)) { queryAlternativeValue = "\t /*Cria queries para aplicar em outros clientes*/\n" }

          queryAlternativeValue += "\t update\t seg_funcao\n";
          queryAlternativeValue += "\t set\t\t flag_bloqueio = 'S'\n";
          queryAlternativeValue += "\t where\t lower(dcr_url) = lower('" + item.value["url"] + "')\n";
          queryAlternativeValue += "\t and\t\t lower(dcr_funcao) = lower('" + item.value["name"] + "');\n\n";
        } 

        isCreated = "S";
      }
      else {
        isCreated = "N";
      }

    }

    query += queryProcedure;

    if (form.value["getcommit"]) { query += "\t Commit;\n\n"; }

    query += "End;";


    if (Boolean(queryAlternativeValue)) {

      queryAlternativeValue = "Begin \n\n" + queryAlternativeValue + "\n"
      
      if (form.value["getcommit"]) { queryAlternativeValue += "\tCommit;\n\n"; }

      queryAlternativeValue += "end;"      

    } 


    if (isCreated == "S") { 
      this.scriptservice.setScript(query); 
      this.scriptservice.setAlternativeScript(queryAlternativeValue);
    }
    else { this.cleanScript(); }
  }

  cleanScript() {
    this.scriptservice.cleanScript();
  }
}
