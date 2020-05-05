import { Injectable } from '@angular/core';
import { ScriptInterface } from '../ScriptInterface';
import { FormArray, FormGroup } from '@angular/forms';
import { ScriptService } from '../script.service';

@Injectable({
  providedIn: 'root'
})
export class ExitService {

  constructor(
    private scriptservice: ScriptService
  ) { }

  generateScript(form: FormGroup, exitList: FormArray) {
    var isCreated = "N";
    var pathExit = "/*### Arquivo deve ser salvo na pasta /CFG_EXIT/ ###*/";
    var pathInteraction = "/*### Arquivo deve ser salvo na pasta /CFG_ROTEIRO_EXIT/{NomeExitScript}/[NomeCliente]/ ###*/";
    var queryExit = "";
    var queryInteraction = "";

    queryExit = pathExit + "\n\nBEGIN\n";
    queryInteraction = pathInteraction + "\n\nDECLARE\n";
    
    queryInteraction += "\t V_CD_EXIT CFG_EXIT.CD_EXIT%TYPE;\n";
    queryInteraction += "\t V_CD_ROT_EXIT CFG_ROTEIRO_EXIT.CD_ROTEIRO_EXIT%TYPE;\n";
    queryInteraction += "\t V_TXT_ROT_EXIT CFG_ROTEIRO_EXIT.TXT_SCRIPT%TYPE;\n";
    queryInteraction += "\t V_CONT NUMBER;\n";    
    queryInteraction += "BEGIN\n";

    for (let item of exitList.controls) {

      this.scriptservice.fileFirstName = item.value["exitId"];

      ///exit script
      queryExit += "\tINSERT INTO CFG_EXIT (CD_EXIT, ID_EXIT, DCR_EXIT, TXT_OBS, DATA_REG, EST_REG) \n";
      queryExit += "\t\tVALUES (S_CFG_EXIT.NEXTVAL,\n";
      queryExit += "\t\t'" + item.value["exitId"] + "',\n";
      queryExit += "\t\t'" + item.value["exitDescription"] + "',\n";
      queryExit += "\t\t'" + item.value["exitObservation"] + "',\n";
      queryExit += "\t\t'A');\n";

      queryExit += "\n";
      ///exit script


      ///interaction script
      queryInteraction += "\n";
      queryInteraction += "\tV_TXT_ROT_EXIT := \n\t\t'" + item.value["interactionScript"] + "';\n";
      queryInteraction += "\n";
      queryInteraction += "\tSELECT  \tCD_EXIT\n";
      queryInteraction += "\tINTO    \tV_CD_EXIT\n";
      queryInteraction += "\tFROM    \tCFG_EXIT\n"; 
      queryInteraction += "\tWHERE   \tID_EXIT = '" + item.value["exitId"] + "';\n";
      queryInteraction += "\n";
      queryInteraction += "\tSELECT  \tCOUNT(1)\n"; 
      queryInteraction += "\tINTO    \tV_CONT\n"; 
      queryInteraction += "\tFROM    \tCFG_ROTEIRO_EXIT\n"; 
      queryInteraction += "\tWHERE   \tCD_EXIT = V_CD_EXIT\n"; 
      queryInteraction += "\tAND     \tNUM_SEQUENCIA = " + item.value["interactionSequence"] + ";\n"; 
      queryInteraction += "\n";

      queryInteraction += "\tIF V_CONT > 0 THEN \n";
      queryInteraction += "\n";
      ///update
      queryInteraction += "\t\tUPDATE \tCFG_ROTEIRO_EXIT\n"; 
			queryInteraction += "\t\tSET    \tTXT_SCRIPT = V_TXT_ROT_EXIT\n"; 
			queryInteraction += "\t\tWHERE  \tCD_EXIT = V_CD_EXIT\n"; 
			queryInteraction += "\t\tAND    \tNUM_SEQUENCIA = " + item.value["interactionSequence"] + ";\n"; 
      ///update
      queryInteraction += "\n";
      queryInteraction += "\tELSE \n";
      queryInteraction += "\n";
      ///insert
      queryInteraction += "\t\tINSERT INTO CFG_ROTEIRO_EXIT(CD_ROTEIRO_EXIT, CD_EXIT, NUM_SEQUENCIA, DCR_ROTEIRO_EXIT, TXT_SCRIPT, DATA_REG, EST_REG)\n"
      queryInteraction += "\t\tVALUES (S_CFG_ROTEIRO_EXIT.NEXTVAL,\n"
      queryInteraction += "\t\t\t\tV_CD_EXIT,\n"
      queryInteraction += "\t\t\t\t" + item.value["interactionSequence"] + ",\n"
      queryInteraction += "\t\t\t\t'" + item.value["interactionDescription"] + "',\n"
      queryInteraction += "\t\t\t\tV_TXT_ROT_EXIT,\n"
      queryInteraction += "\t\t\t\tsysdate,\n"
      queryInteraction += "\t\t\t\t'A');\n"
      ///insert
      queryInteraction += "\n";
      queryInteraction += "\tEND IF; \n";

      ///interaction script

      isCreated = "S";
    }

    if (form.value["getcommit"]) { 
      queryExit += "\n\tCommit;\n\n"; 
      queryInteraction += "\n\tCommit;\n\n"; 
    }

    queryExit += "end;\n";
    queryInteraction += "end;\n";


    if (isCreated == "S") {       

      queryInteraction = queryInteraction.replace("{NomeExitScript}",this.scriptservice.fileFirstName);

      this.scriptservice.abaFirstName = "Exit";
      this.scriptservice.abaSecondName = "Interaction";

      this.scriptservice.setScript(queryExit); 
      this.scriptservice.setAlternativeScript(queryInteraction);
    }
    else { this.cleanScript(); }

  }

  cleanScript() {
    this.scriptservice.cleanScript();
  }
  
}
