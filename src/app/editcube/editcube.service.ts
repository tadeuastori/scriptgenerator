import { Injectable } from '@angular/core';
import { ScriptInterface } from '../ScriptInterface';
import { FormArray, FormGroup } from '@angular/forms';
import { ScriptService } from '../script.service';

@Injectable({
  providedIn: 'root'
})
export class EditcubeService implements ScriptInterface {
  constructor(
    private scriptservice: ScriptService
  ) { }

  generateScript(form: FormGroup, columnList: FormArray) {
    var query = "";
    var isCreated = "N";
    var queryProcedure = "";
    var queryDeclare = "";
    var listColumnName = "";
    var listColumnFormat = "";
    var listColumnPort = "";
    var listColumnEngl = "";
    var listColumnSpan = "";
    var listColumnPrevious = "";


    queryDeclare += "DECLARE \n\n";
    queryDeclare += "/*O index do varray é a quantidade de colunas a serem criados*/ \n";
    queryDeclare += "\t type t_Coluna is varray("+ columnList.controls.length +") of nvarchar2(100);\n";
    queryDeclare += "\t type t_Anterior is varray("+ columnList.controls.length +") of nvarchar2(100);\n";
    queryDeclare += "\t type t_Traducao is varray("+ columnList.controls.length +") of nvarchar2(100);\n";
    queryDeclare += "\t type t_Formato is varray("+ columnList.controls.length +") of nvarchar2(100);\n";
    queryDeclare += "\n";
    queryDeclare += "/*Declaração da variável de formato da coluna*/\n";
    queryDeclare += "\t v_FormatoColunaCubo NVARCHAR2(50) := '';\n";
    queryDeclare += "\n";
    queryDeclare += "/*Linguas cadastradas no sistema*/\n";
    queryDeclare += "\t Cursor c_Language is (\n";
    queryDeclare += "\t\t Select CD_LANGUAGE\n";
    queryDeclare += "\t\t from INT_LANGUAGE\n";
    queryDeclare += "\t );\n";
    queryDeclare += "\n";
    queryDeclare += "/*Nome da tabela da visão (cubo/view)*/  \n";
    queryDeclare += "\t v_NomeViewCubo nvarchar2(30) := '"+form.value["viewname"]+"';\n";

    for (let item of columnList.controls) {

      if (form.value["viewname"] != null &&
        item.value["columnname"] != null &&
        item.value["format"] != null &&
        item.value["portuguese"] != null &&
        item.value["spanish"] != null &&
        item.value["english"] != null) {
       
          listColumnName += "'" + item.value["columnname"] + "',";
          listColumnFormat += "'" + item.value["format"] + "',";
          listColumnPort += "'" + item.value["portuguese"] + "',";
          listColumnEngl += "'" + item.value["spanish"] + "',";
          listColumnSpan += "'" + item.value["english"] + "',";
          listColumnPrevious += "'" + (item.value["columnbefore"] == null ? "" : item.value["columnbefore"]) + "',";

        isCreated = "S";
      }

    }

    queryDeclare += "/*Nome(s) do(s) campo(s) novo(s)*/\n";
    queryDeclare += "\t var_NovaColuna t_Coluna := t_Coluna("+listColumnName.slice(0, -1)+");\n";
    queryDeclare += "/*Nome(s) da(s) colunas(s) onde a(s) nova(s) coluna(s) será(ão) adiciona(s) posteriormente*/\n";
    queryDeclare += "/*Deixar em branco caso queira adicoinar ao vim do cubo*/\n";
    queryDeclare += "\t var_ColunaAnterior t_Anterior := t_Anterior("+listColumnPrevious.slice(0, -1)+");\n";
    queryDeclare += "/*Formato(s) do(s) campo(s) novo(s)*/\n";
    queryDeclare += "\t var_NovoFormato t_Formato := t_Formato("+listColumnFormat.slice(0, -1)+")\n";
    queryDeclare += "/*Tradução(ões) do(s) campo(s) novo(s)*/\n";
    queryDeclare += "\t var_NovaTraducaoPt t_Traducao := t_Traducao("+listColumnPort.slice(0, -1)+")\n";
    queryDeclare += "\t var_NovaTraducaoEs t_Traducao := t_Traducao("+listColumnSpan.slice(0, -1)+")\n";
    queryDeclare += "\t var_NovaTraducaoEn t_Traducao := t_Traducao("+listColumnEngl.slice(0, -1)+")\n";
    queryDeclare += "\t var_NovaTraducaoZh t_Traducao := t_Traducao("+listColumnEngl.slice(0, -1)+")\n";
    queryDeclare += "/*### SE PRECISAR ADICIONAR OUTRO IDIOMA QUE NÃO ESTEJA AQUI, DEVE SER CRIADO UM NOVO CURSOR E ADICIONAR ELE NO LOOP NO FINAL DO SCRIPT ###*/ \n";
    

    queryDeclare += "/*Variável para controle da visão*/\n";
    queryDeclare += "\t v_ExisteVisao number := 0;\n";

    queryDeclare += "\n\n";

    queryProcedure += "BEGIN";
    queryProcedure += "\n"
    queryProcedure += "/*0- Verifico se existe a Visão cadastrada*/\n";
    queryProcedure += "\t select 	count(1)\n";
    queryProcedure += "\t into 	v_ExisteVisao\n";
    queryProcedure += "\t from 	con_visao\n";
    queryProcedure += "\t where 	upper(trim(dcr_nome_fisico)) = upper(trim(v_NomeViewCubo));\n";
    queryProcedure += "\n"
    queryProcedure += "\t if (v_ExisteVisao = 0) then\n";
    queryProcedure += "\t\t raise_application_error(-20001,'View ' || v_NomeViewCubo || ' não possui visão cadastrada!!');\n";
    queryProcedure += "\t\t return;\n";
    queryProcedure += "\t end if;\n";
    queryProcedure += "/*0- Verifico se existe a Visão cadastrada*/\n";
    queryProcedure += "\n"
    queryProcedure += "/*1- Atualiza estrutura do cubo*/\n";
    queryProcedure += "\t PR_ATUALIZA_ESTRUTURA_CUBO(v_NomeViewCubo); \n";
    queryProcedure += "/*1- Atualiza estrutura do cubo*/\n";
    queryProcedure += "\n"
    queryProcedure += "/*2- Loop pelos campos novos do cubo*/\n";
    queryProcedure += "\t for i in 1..var_NovaColuna.count loop    \n";
    queryProcedure += "\n"
    queryProcedure += "/*Limpo a coluna de formato para o novo loop*/\n";
    queryProcedure += "\t\t v_FormatoColunaCubo := '';\n";
    queryProcedure += "\n"
    queryProcedure += "/*3- Seleciona qual o formato da coluna*/    \n";
    queryProcedure += "\t\t select \n";
    queryProcedure += "\t\t\t case UPPER(TO_CHAR(var_NovoFormato(i)))\n";
    queryProcedure += "\t\t\t\t when 'DA' then 'dd/MM/yyyy' /*Apenas Data*/\n";
    queryProcedure += "\t\t\t\t when 'NU' then '###' /*Número simples*/\n";
    queryProcedure += "\t\t\t\t when 'DE' then '###,###' /*Número com casas decimais*/\n";
    queryProcedure += "\t\t\t\t when 'MO' then '###,###,###.##' /*monetário*/\n";
    queryProcedure += "\t\t\t\t when 'DH' then 'dd/MM/yyyy HH:mm:ss' /*Data e Hora*/\n";
    queryProcedure += "\t\t\t\t when 'HO' then 'HH:mm:ss' /*Apenas Hora*/   \n";
    queryProcedure += "\t\t\t\t WHEN 'TX' THEN NULL /*Texto padrão*/\n";
    queryProcedure += "\t\t\t else\n";
    queryProcedure += "\t\t\t\t null /*Texto padrão*/\n";
    queryProcedure += "\t\t\t end \n";
    queryProcedure += "\t\t into v_FormatoColunaCubo\n";
    queryProcedure += "\t\t from dual;    \n";
    queryProcedure += "/*3- Seleciona qual o formato da coluna*/    \n";
    queryProcedure += "\n"
    queryProcedure += "/*4- define o formato da coluna*/\n";
    queryProcedure += "\t\t UPDATE CON_COLUNA_VISAO \n";
    queryProcedure += "\t\t SET DCR_FORMATO = v_FormatoColunaCubo \n";
    queryProcedure += "\t\t WHERE UPPER(DCR_CHAVE_TRADUCAO) = (v_NomeViewCubo || '.' || var_NovaColuna(i));        \n";
    queryProcedure += "/*4- define o formato da coluna*/\n";
    queryProcedure += "\n"
    queryProcedure += "/*5- Passa a coluna para visivel*/\n";
    queryProcedure += "\t\t UPDATE ADM_CAMPO_RELATORIO CR\n";
    queryProcedure += "\t\t SET FLAG_VISIVEL = 'S'\n";
    queryProcedure += "\t\t WHERE EXISTS (\n";
    queryProcedure += "\t\t\t\t\t\t SELECT 	1\n";
    queryProcedure += "\t\t\t\t\t\t FROM 		ADM_RELATORIO R\n";
    queryProcedure += "\t\t\t\t\t\t INNER JOIN 	CON_VISAO V 			ON V.CD_VISAO = R.CD_VISAO\n";
    queryProcedure += "\t\t\t\t\t\t INNER JOIN 	CON_COLUNA_VISAO CV 	ON V.CD_VISAO = R.CD_VISAO\n";
    queryProcedure += "\t\t\t\t\t\t WHERE 1=1\n";
    queryProcedure += "\t\t\t\t\t\t AND UPPER(CV.DCR_CHAVE_TRADUCAO) 	= (v_NomeViewCubo || '.' || var_NovaColuna(i))\n";
    queryProcedure += "\t\t\t\t\t\t AND UPPER(V.DCR_NOME_FISICO) 		= v_NomeViewCubo\n";
    queryProcedure += "\t\t\t\t\t\t AND CR.CD_RELATORIO 				= R.CD_RELATORIO \n";
    queryProcedure += "\t\t\t\t\t\t AND CR.CD_COLUNA_VISAO 				= CV.CD_COLUNA_VISAO\n";
    queryProcedure += "\t\t\t\t\t );\n";
    queryProcedure += "/*5- Passa a coluna para visivel*/\n";
    queryProcedure += "\n"
    queryProcedure += "/*6- cadastrando a sequencia da nova coluna*/\n";
    queryProcedure += "\t\t UPDATE  ADM_CAMPO_RELATORIO\n";
    queryProcedure += "\t\t SET 	NUM_SEQUENCIA =	decode(var_ColunaAnterior(i), '',\n";
    queryProcedure += "\t\t\t\t\t (\n";
    queryProcedure += "\t\t\t\t\t  SELECT 	max(CR.NUM_SEQUENCIA) +\n"; 1
    queryProcedure += "\t\t\t\t\t  FROM 		ADM_RELATORIO R\n";
    queryProcedure += "\t\t\t\t\t  INNER JOIN 	CON_VISAO V 			ON V.CD_VISAO = R.CD_VISAO\n";
    queryProcedure += "\t\t\t\t\t  INNER JOIN 	CON_COLUNA_VISAO CV 	ON V.CD_VISAO = R.CD_VISAO\n";
    queryProcedure += "\t\t\t\t\t  INNER JOIN 	ADM_CAMPO_RELATORIO  CR ON (CR.CD_RELATORIO = R.CD_RELATORIO AND CR.CD_COLUNA_VISAO = CV.CD_COLUNA_VISAO)\n";
    queryProcedure += "\t\t\t\t\t  WHERE 1=1\n";
    queryProcedure += "\t\t\t\t\t  AND UPPER(V.DCR_NOME_FISICO) 		= v_NomeViewCubo\n";
    queryProcedure += "\t\t\t\t\t ),\n";
    queryProcedure += "\t\t\t\t\t (\n";
    queryProcedure += "\t\t\t\t\t  SELECT 	CR.NUM_SEQUENCIA + 1\n";
    queryProcedure += "\t\t\t\t\t  FROM 		ADM_RELATORIO R\n";
    queryProcedure += "\t\t\t\t\t  INNER JOIN 	CON_VISAO V 			ON V.CD_VISAO = R.CD_VISAO\n";
    queryProcedure += "\t\t\t\t\t  INNER JOIN 	CON_COLUNA_VISAO CV 	ON V.CD_VISAO = R.CD_VISAO\n";
    queryProcedure += "\t\t\t\t\t  INNER JOIN 	ADM_CAMPO_RELATORIO  CR ON (CR.CD_RELATORIO = R.CD_RELATORIO AND CR.CD_COLUNA_VISAO = CV.CD_COLUNA_VISAO)\n";
    queryProcedure += "\t\t\t\t\t  WHERE 1=1\n";
    queryProcedure += "\t\t\t\t\t  AND UPPER(CV.DCR_CHAVE_TRADUCAO) 	= (v_NomeViewCubo || '.' || var_ColunaAnterior(i))\n";
    queryProcedure += "\t\t\t\t\t  AND UPPER(V.DCR_NOME_FISICO) 		= v_NomeViewCubo\n";
    queryProcedure += "\t\t\t\t\t )\n";
    queryProcedure += "\t\t\t\t )\n";
    queryProcedure += "\t\t WHERE 	CD_COLUNA_VISAO = (\n";
    queryProcedure += "\t\t\t\t\t SELECT 	CV.CD_COLUNA_VISAO\n";
    queryProcedure += "\t\t\t\t\t FROM 		ADM_RELATORIO R\n";
    queryProcedure += "\t\t\t\t\t INNER JOIN CON_VISAO V 			ON V.CD_VISAO = R.CD_VISAO\n";
    queryProcedure += "\t\t\t\t\t INNER JOIN CON_COLUNA_VISAO CV 	ON V.CD_VISAO = R.CD_VISAO\n";
    queryProcedure += "\t\t\t\t\t WHERE 1=1\n";
    queryProcedure += "\t\t\t\t\t AND UPPER(CV.DCR_CHAVE_TRADUCAO) 	= (v_NomeViewCubo || '.' || var_NovaColuna(i))\n";
    queryProcedure += "\t\t\t\t\t AND UPPER(V.DCR_NOME_FISICO) 		= v_NomeViewCubo\n";
    queryProcedure += "\t\t\t\t\t GROUP BY CV.CD_COLUNA_VISAO\n";
    queryProcedure += "                 );        \n";
    queryProcedure += "/*6- cadastrando a sequencia da nova coluna*/        \n";
    queryProcedure += "\n"
    queryProcedure += "/*7- Loop para cadastrar as traduções*/\n";
    queryProcedure += "\t\t for f_Language in c_Language loop\n";
    queryProcedure += "\n"
    queryProcedure += "\t\t\t /*Idiomas em português*/\n";
    queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'PT' then            \n";
    queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeViewCubo || '.' || var_NovaColuna(i)), var_NovaTraducaoPt(i), 'S');        \n";
    queryProcedure += "\t\t\t end if;\n";
    queryProcedure += "\n"
    queryProcedure += "\t\t\t /*Idiomas em espanhol*/\n";
    queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'ES' then\n";
    queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeViewCubo || '.' || var_NovaColuna(i)), var_NovaTraducaoEs(i), 'S');  \n";
    queryProcedure += "\t\t\t end if;\n";
    queryProcedure += "\n"
    queryProcedure += "\t\t\t /*Idiomas em inglês*/\n";
    queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'EN' then\n";
    queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeViewCubo || '.' || var_NovaColuna(i)), var_NovaTraducaoEn(i), 'S');   \n";
    queryProcedure += "\t\t\t end if;\n";
    queryProcedure += "\n"
    queryProcedure += "\t\t\t /*Idiomas em chinês(ou inglês)*/\n";
    queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'ZH' then\n";
    queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeViewCubo || '.' || var_NovaColuna(i)), var_NovaTraducaoZh(i), 'S'); \n";
    queryProcedure += "\t\t\t end if;\n";
    queryProcedure += "\n"
    queryProcedure += "\t\t end loop;\n";
    queryProcedure += "/*7- Loop para cadastrar as traduções*/\n";
    queryProcedure += "\n"
    queryProcedure += "\t end loop;\n";
    queryProcedure += "/*2- Loop pelos campos novos do cubo*/\n";
    queryProcedure += "\n"

    query += queryDeclare + queryProcedure;

    if (form.value["getcommit"]) { query += "/*Salva as mudanças*/\n\t Commit;\n\n"; }

    query += "End;";

    if (isCreated == "S") { this.scriptservice.setScript(query); }
  }
  cleanScript() {
    this.scriptservice.setScript("");
  }
}
