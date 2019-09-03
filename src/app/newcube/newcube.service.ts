import { Injectable } from '@angular/core';
import { ScriptInterface } from '../ScriptInterface';
import { FormArray, FormGroup } from '@angular/forms';
import { ScriptService } from '../script.service';

@Injectable({
  providedIn: 'root'
})
export class NewcubeService implements ScriptInterface {
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
    var setDefaulProfile = false;
    var setDefaultUser = false;


    queryDeclare += "DECLARE \n\n";
    queryDeclare += "/*O index do varray é a quantidade de colunas a serem criados*/ \n";
    queryDeclare += "\t type t_Coluna is varray(" + columnList.controls.length + ") of nvarchar2(100);\n";
    queryDeclare += "\t type t_Anterior is varray(" + columnList.controls.length + ") of nvarchar2(100);\n";
    queryDeclare += "\t type t_Traducao is varray(" + columnList.controls.length + ") of nvarchar2(100);\n";
    queryDeclare += "\t type t_Formato is varray(" + columnList.controls.length + ") of nvarchar2(100);\n";
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
    queryDeclare += "\t v_cdPerfil\t\t\t seg_perfil.cd_perfil%type;\n";
    queryDeclare += "\t v_NomePerfilAssoc\t\t seg_perfil.dcr_perfil%type;\n";
    queryDeclare += "\t v_NomeFisicoView\t\t CON_VISAO.dcr_nome_fisico%type;\n";
    queryDeclare += "\t v_dcrVisao\t\t\t CON_VISAO.DCR_VISAO%TYPE;\n";
    queryDeclare += "\t v_dcrPrincipalModulo\t CON_VISAO.DCR_PRINCIPAL_MODULO%TYPE;\n";
    queryDeclare += "\t v_dcrObservacao\t\t CON_VISAO.DCR_OBSERVACAO%TYPE;\n";
    queryDeclare += "\t v_dcrLogin\t\t\t seg_usuario.dcr_login%type;  \n";
    queryDeclare += "\t v_FlagAssociaPerfil\t\t nvarchar2(1);\n";
    queryDeclare += "\t v_FlagAssociarUsuario\t nvarchar2(1);\n";
    queryDeclare += "\n";

    setDefaulProfile = (!form.value["setdefaultprofile"] || (form.value["setdefaultprofile"] && (form.value["profilename"] != '' && form.value["profilename"] != null)));
    setDefaultUser = (!form.value["setdefaultuser"] || (form.value["setdefaultuser"] && (form.value["username"] != '' && form.value["username"] != null)));

console.log(!form.value["setdefaultprofile"]);
console.log(form.value["profilename"]);
console.log(setDefaulProfile);
console.log(!form.value["setdefaultuser"]);
console.log(form.value["username"]);
console.log(setDefaultUser);


    for (let item of columnList.controls) {

      if (form.value["viewname"] != null &&
        form.value["visionname"] != null &&
        form.value["modulename"] != null &&
        item.value["columnname"] != null &&
        item.value["format"] != null &&
        setDefaulProfile &&
        setDefaultUser &&
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
      else
      {
        isCreated = "N";
      }
    }

    queryDeclare += "/*Nome(s) do(s) campo(s) novo(s)*/\n";
    queryDeclare += "\t var_NovaColuna t_Coluna := t_Coluna(" + listColumnName.slice(0, -1) + ");\n";
    queryDeclare += "/*Nome(s) da(s) colunas(s) onde a(s) nova(s) coluna(s) será(ão) adiciona(s) posteriormente*/\n";
    queryDeclare += "/*Deixar em branco caso queira adicionar ao fim do cubo*/\n";
    queryDeclare += "\t var_ColunaAnterior t_Anterior := t_Anterior(" + listColumnPrevious.slice(0, -1) + ");\n";
    queryDeclare += "/*Formato(s) do(s) campo(s) novo(s)*/\n";
    queryDeclare += "\t var_NovoFormato t_Formato := t_Formato(" + listColumnFormat.slice(0, -1) + ")\n";
    queryDeclare += "/*Tradução(ões) do(s) campo(s) novo(s)*/\n";
    queryDeclare += "\t var_NovaTraducaoPt t_Traducao := t_Traducao(" + listColumnPort.slice(0, -1) + ")\n";
    queryDeclare += "\t var_NovaTraducaoEs t_Traducao := t_Traducao(" + listColumnSpan.slice(0, -1) + ")\n";
    queryDeclare += "\t var_NovaTraducaoEn t_Traducao := t_Traducao(" + listColumnEngl.slice(0, -1) + ")\n";
    queryDeclare += "\t var_NovaTraducaoZh t_Traducao := t_Traducao(" + listColumnEngl.slice(0, -1) + ")\n";
    queryDeclare += "/*### SE PRECISAR ADICIONAR OUTRO IDIOMA QUE NÃO ESTEJA AQUI, DEVE SER CRIADO UM NOVO CURSOR E ADICIONAR ELE NO LOOP NO FINAL DO SCRIPT ###*/ \n";
    queryDeclare += "\n";
    queryDeclare += "/*Variável para controle da visão*/\n";
    queryDeclare += "\t v_ExisteVisao number := 0;\n";
    queryDeclare += "\n";

    queryProcedure += "BEGIN";
    queryProcedure += "\n"
    queryProcedure += "/*Defini os valores das variáveis do cubo*/\n";
    queryProcedure += "\t v_NomeFisicoView := '" + form.value["viewname"] + "';\n";
    queryProcedure += "\t v_dcrVisao := '" + form.value["visionname"] + "';\n";
    queryProcedure += "\t v_dcrPrincipalModulo := '" + form.value["modulename"] + "';\n";
    queryProcedure += "\t v_dcrObservacao := '" + form.value["note"] + "';\n";
    queryProcedure += "\t v_FlagAssociaPerfil := '" + (form.value["setdefaultprofile"] ? "S" : "N") + "';\n";
    queryProcedure += "\t v_NomePerfilAssoc := '" + form.value["profilename"] + "';\n";
    queryProcedure += "\t v_FlagAssociarUsuario := '" + (form.value["setdefaultuser"] ? "S" : "N") + "';\n";
    queryProcedure += "\t v_dcrLogin := '" + form.value["username"] + "';\n";
    queryProcedure += "\n"
    queryProcedure += "/*0- Verificar se existe a Visão cadastrada. 0=Cria a visão | 0<Atualiza a visão atual*/\n";
    queryProcedure += "\t select 	count(1)\n";
    queryProcedure += "\t into 	v_ExisteVisao\n";
    queryProcedure += "\t from 	con_visao\n";
    queryProcedure += "\t where 	upper(trim(dcr_nome_fisico)) = upper(trim(v_NomeFisicoView));\n";
    queryProcedure += "\n"
    queryProcedure += "\t if (v_ExisteVisao = 0) then\n";
    queryProcedure += "/*1- Insere a nova visão*/\n";
    queryProcedure += "\n"
    queryProcedure += "/*Cria a nova visão é o novo relatório cubo*/\n";
    queryProcedure += "\t\t PR_NOVA_VISAO_CUBO (p_dcr_nome_fisico\t\t\t=> v_NomeFisicoView,\n";
    queryProcedure += "\t\t\t\t\t\t\t p_dcr_visao\t\t\t\t=> v_dcrVisao,\n";
    queryProcedure += "\t\t\t\t\t\t\t p_dcr_principal_modulo\t\t=> v_dcrPrincipalModulo,\n";
    queryProcedure += "\t\t\t\t\t\t\t p_dcr_observacao\t\t\t=> v_dcrObservacao,\n";
    queryProcedure += "\t\t\t\t\t\t\t p_dcr_filtro_sql\t\t\t=> null,\n";
    queryProcedure += "\t\t\t\t\t\t\t p_flag_filtro_fornecedor\t\t=> 'N',\n";
    queryProcedure += "\t\t\t\t\t\t\t p_flag_filtro_unidade_gestao\t=> 'N');\n";
    queryProcedure += "\n"
    queryProcedure += "/*Define todas as colunas para serem visiveis no relatório*/\n";
    queryProcedure += "\t\t update adm_campo_relatorio\n";
    queryProcedure += "\t\t set\t flag_visivel = 'S'\n";
    queryProcedure += "\t\t where cd_relatorio = (select\t r.cd_relatorio\n";
    queryProcedure += "\t\t\t\t\t\t\t   from\t adm_relatorio r\n";
    queryProcedure += "\t\t\t\t\t\t\t   inner join con_visao v on v.cd_visao = r.cd_visao\n";
    queryProcedure += "\t\t\t\t\t\t\t   where\t v.dcr_nome_fisico = v_NomeFisicoView);\n";
    queryProcedure += "\n"
    queryProcedure += "/*Por padrão é inserido o inflor01, caso queira que mude, define a flag para S*/\n";
    queryProcedure += "\t\t If (v_FlagAssociarUsuario = 'S') then\n";
    queryProcedure += "\t\t\t BEGIN\n";
    queryProcedure += "\t\t\t\t update 	adm_relatorio\n";
    queryProcedure += "\t\t\t\t set 	cd_usuario = (select cd_usuario from seg_usuario where dcr_login = v_dcrLogin)\n";
    queryProcedure += "\t\t\t\t where   cd_relatorio = (select\t r.cd_relatorio\n";
    queryProcedure += "\t\t\t\t\t\t\t\t\t\t  from\t adm_relatorio r\n";
    queryProcedure += "\t\t\t\t\t\t\t\t\t\t  inner join con_visao v on v.cd_visao = r.cd_visao\n";
    queryProcedure += "\t\t\t\t\t\t\t\t\t\t  where\t v.dcr_nome_fisico = v_NomeFisicoView); \n";
    queryProcedure += "\t\t\t EXCEPTION\n";
    queryProcedure += "\t\t\t\t WHEN OTHERS THEN\n";
    queryProcedure += "\t\t\t\t\t NULL; /*Se não encontrar o usuário, não associa*/\n";
    queryProcedure += "\t\t\t END;\n";
    queryProcedure += "\t\t end if;	\n";
    queryProcedure += "\n"
    queryProcedure += "/*Se for para associar um perfil default*/\n";
    queryProcedure += "\t\t if (v_FlagAssociaPerfil = 'S') then\n";
    queryProcedure += "\t\t\t BEGIN\n";
    queryProcedure += "\t\t\t\t select CD_PERFIL \n";
    queryProcedure += "\t\t\t\t into v_cdPerfil\n";
    queryProcedure += "\t\t\t\t from seg_perfil \n";
    queryProcedure += "\t\t\t\t where UPPER(dcr_perfil) = upper(v_NomePerfilAssoc);\n";
    queryProcedure += "\n";
    queryProcedure += "\t\t\t\t INSERT INTO  ADM_PERFIL_RELATORIO\n";
    queryProcedure += "\t\t\t\t (CD_PERFIL_RELATORIO,CD_UNIDADE,CD_RELATORIO,CD_PERFIL,EST_REG,DATA_REG )\n";
    queryProcedure += "\t\t\t\t (\n";
    queryProcedure += "\t\t\t\t\t SELECT  S_ADM_PERFIL_RELATORIO.NEXTVAL, R.CD_UNIDADE, R.CD_RELATORIO, v_cdPerfil, 'A', SYSDATE\n";
    queryProcedure += "\t\t\t\t\t FROM    ADM_RELATORIO R\n";
    queryProcedure += "\t\t\t\t\t INNER JOIN CON_VISAO V\n";
    queryProcedure += "\t\t\t\t\t\tON V.CD_VISAO         = R.CD_VISAO\n";
    queryProcedure += "\t\t\t\t\t WHERE  V.DCR_NOME_FISICO = v_NomeFisicoView\n";
    queryProcedure += "\t\t\t\t );     \n";
    queryProcedure += "\n";
    queryProcedure += "\t\t\t EXCEPTION\n";
    queryProcedure += "\t\t\t\t WHEN OTHERS THEN\n";
    queryProcedure += "\t\t\t\t\t NULL; /*se não encontrar o perfil, não associa*/\n";
    queryProcedure += "\t\t\t END;\n";
    queryProcedure += "\t\t END IF; \n";
    queryProcedure += "\n"
    queryProcedure += "/*1- Insere a nova visão*/\n";
    queryProcedure += "\t else\n"
    queryProcedure += "/*1- Atualiza estrutura do cubo*/\n\n";
    queryProcedure += "\t\t PR_ATUALIZA_ESTRUTURA_CUBO(v_NomeFisicoView); \n\n";
    queryProcedure += "/*1- Atualiza estrutura do cubo*/\n";
    queryProcedure += "\t end if;\n"
    queryProcedure += "/*0- Verificar se existe a Visão cadastrada. 0=Cria a visão | 0<Atualiza a visão atual*/\n";
    queryProcedure += "\n\n"
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
    queryProcedure += "\t\t WHERE UPPER(DCR_CHAVE_TRADUCAO) = (v_NomeFisicoView || '.' || var_NovaColuna(i));        \n";
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
    queryProcedure += "\t\t\t\t\t\t AND UPPER(CV.DCR_CHAVE_TRADUCAO) 	= (v_NomeFisicoView || '.' || var_NovaColuna(i))\n";
    queryProcedure += "\t\t\t\t\t\t AND UPPER(V.DCR_NOME_FISICO) 		= v_NomeFisicoView\n";
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
    queryProcedure += "\t\t\t\t\t  AND UPPER(V.DCR_NOME_FISICO) 		= v_NomeFisicoView\n";
    queryProcedure += "\t\t\t\t\t ),\n";
    queryProcedure += "\t\t\t\t\t (\n";
    queryProcedure += "\t\t\t\t\t  SELECT 	CR.NUM_SEQUENCIA + 1\n";
    queryProcedure += "\t\t\t\t\t  FROM 		ADM_RELATORIO R\n";
    queryProcedure += "\t\t\t\t\t  INNER JOIN 	CON_VISAO V 			ON V.CD_VISAO = R.CD_VISAO\n";
    queryProcedure += "\t\t\t\t\t  INNER JOIN 	CON_COLUNA_VISAO CV 	ON V.CD_VISAO = R.CD_VISAO\n";
    queryProcedure += "\t\t\t\t\t  INNER JOIN 	ADM_CAMPO_RELATORIO  CR ON (CR.CD_RELATORIO = R.CD_RELATORIO AND CR.CD_COLUNA_VISAO = CV.CD_COLUNA_VISAO)\n";
    queryProcedure += "\t\t\t\t\t  WHERE 1=1\n";
    queryProcedure += "\t\t\t\t\t  AND UPPER(CV.DCR_CHAVE_TRADUCAO) 	= (v_NomeFisicoView || '.' || var_ColunaAnterior(i))\n";
    queryProcedure += "\t\t\t\t\t  AND UPPER(V.DCR_NOME_FISICO) 		= v_NomeFisicoView\n";
    queryProcedure += "\t\t\t\t\t )\n";
    queryProcedure += "\t\t\t\t )\n";
    queryProcedure += "\t\t WHERE 	CD_COLUNA_VISAO = (\n";
    queryProcedure += "\t\t\t\t\t SELECT 	CV.CD_COLUNA_VISAO\n";
    queryProcedure += "\t\t\t\t\t FROM 		ADM_RELATORIO R\n";
    queryProcedure += "\t\t\t\t\t INNER JOIN CON_VISAO V 			ON V.CD_VISAO = R.CD_VISAO\n";
    queryProcedure += "\t\t\t\t\t INNER JOIN CON_COLUNA_VISAO CV 	ON V.CD_VISAO = R.CD_VISAO\n";
    queryProcedure += "\t\t\t\t\t WHERE 1=1\n";
    queryProcedure += "\t\t\t\t\t AND UPPER(CV.DCR_CHAVE_TRADUCAO) 	= (v_NomeFisicoView || '.' || var_NovaColuna(i))\n";
    queryProcedure += "\t\t\t\t\t AND UPPER(V.DCR_NOME_FISICO) 		= v_NomeFisicoView\n";
    queryProcedure += "\t\t\t\t\t GROUP BY CV.CD_COLUNA_VISAO\n";
    queryProcedure += "                 );        \n";
    queryProcedure += "/*6- cadastrando a sequencia da nova coluna*/        \n";
    queryProcedure += "\n"
    queryProcedure += "/*7- Loop para cadastrar as traduções*/\n";
    queryProcedure += "\t\t for f_Language in c_Language loop\n";
    queryProcedure += "\n"
    queryProcedure += "\t\t\t /*Idiomas em português*/\n";
    queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'PT' then            \n";
    queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeFisicoView || '.' || var_NovaColuna(i)), var_NovaTraducaoPt(i), 'S');        \n";
    queryProcedure += "\t\t\t end if;\n";
    queryProcedure += "\n"
    queryProcedure += "\t\t\t /*Idiomas em espanhol*/\n";
    queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'ES' then\n";
    queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeFisicoView || '.' || var_NovaColuna(i)), var_NovaTraducaoEs(i), 'S');  \n";
    queryProcedure += "\t\t\t end if;\n";
    queryProcedure += "\n"
    queryProcedure += "\t\t\t /*Idiomas em inglês*/\n";
    queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'EN' then\n";
    queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeFisicoView || '.' || var_NovaColuna(i)), var_NovaTraducaoEn(i), 'S');   \n";
    queryProcedure += "\t\t\t end if;\n";
    queryProcedure += "\n"
    queryProcedure += "\t\t\t /*Idiomas em chinês(ou inglês)*/\n";
    queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'ZH' then\n";
    queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeFisicoView || '.' || var_NovaColuna(i)), var_NovaTraducaoZh(i), 'S'); \n";
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

    if (isCreated == "S") 
      { this.scriptservice.setScript(query); }
    else
      { this.cleanScript(); }
  }

  cleanScript() {
    this.scriptservice.cleanScript();
  }
}
