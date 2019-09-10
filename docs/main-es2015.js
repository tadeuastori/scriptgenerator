(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    &nbsp;\r\n</nav>\r\n<div *ngIf=\"showCard; else elseBlock\">\r\n    <section class=\"sectionPages\">\r\n        <article class=\"w-100\">\r\n            <div class=\"card w-100 bg-info\">\r\n                <div class=\"card-header\">\r\n                    <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"float: left;\" (click)=\"goBack()\">\r\n                        <img alt=\"Return Dashboard\" title=\"Return Dashboard\" src=\"./assets/btn/btnReturn.png\" />\r\n                        Dashboard\r\n                    </button>\r\n\r\n\r\n                    <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"float: right;\" data-toggle=\"modal\"\r\n                        data-target=\"#exampleModalScrollable\">\r\n                        <img alt=\"Open Script\" title=\"Open Script\" src=\"./assets/btn/btnSql.png\" />\r\n                        Generate Script\r\n                    </button>\r\n                </div>\r\n                <div class=\"card-body\" style=\"background-color: white;\">\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                </div>\r\n            </div>\r\n        </article>\r\n    </section>\r\n    <section class=\"sectionPopup\">\r\n        <app-modalscript></app-modalscript>\r\n    </section>\r\n</div>\r\n<ng-template #elseBlock>\r\n    <!-- PAINEL DO DASHBOARD -->\r\n    <router-outlet></router-outlet>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/constant/constant.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/constant/constant.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n\r\n    <div class=\"card\"  id=\"formHeader\">\r\n        <div class=\"card-body\">\r\n\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col\">\r\n                        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addConstant()\">\r\n                            <img alt=\"Add Parameter\" title=\"Add Constant\" src=\"./assets/btn/btnAdd.png\" />\r\n                            &nbsp; Add Constant\r\n                        </button>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm\">\r\n                        <div class=\"form-check text-right\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm\">\r\n                                    <div class=\"custom-control custom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\"\r\n                                            formControlName=\"getcommit\" (change)=\"generateScript()\">\r\n                                        <label class=\"custom-control-label\" for=\"customCheck1\">Set Commit?</label>\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <div class=\"col\" hidden>\r\n                                    <div class=\"custom-control custom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\"\r\n                                            formControlName=\"getbeginend\" (change)=\"generateScript()\">\r\n                                        <label class=\"custom-control-label\" for=\"customCheck2\">Set Begin/End?</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div formArrayName=\"constant\">\r\n        <div class=\"card\" *ngFor=\"let constantItem of constantFormGroup.controls; let i = index;\"\r\n            style=\"margin-bottom: 5px;\">\r\n\r\n            <div [formGroupName]=\"i\">\r\n                <div class=\"card-body\">\r\n\r\n                    <div class=\"row mb-1\">\r\n                        <div class=\"col-sm\">\r\n                            <div class=\"input-group\">\r\n\r\n                                <div class=\"input-group-prepend\">\r\n                                 <span class=\"input-group-text\">Sub-Query</span>\r\n                                </div>\r\n                                <textarea class=\"form-control\" aria-label=\"SubQuery\" aria-describedby=\"SubQuery\" [readonly]=\"getConstantFormGroup(i).controls['value'].value\"\r\n                                    formControlName=\"subquery\" (change)=\"generateScript()\" rows=\"5\" placeholder=\"Subquery to get the constant value from the some table.\"></textarea>\r\n                            </div>\r\n                            <small class=\"text-danger\"\r\n                            *ngIf=\"!getConstantFormGroup(i).controls['value'].value && getConstantFormGroup(i).controls['subquery'].hasError('required')\">\r\n                            SubQuery is required!</small>&nbsp;                            \r\n                            <small class=\"text-danger float-right\"><i><u>(Don't set INTO statement)</u></i> </small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mb-1\">\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"input-group mb-1\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Constant Name</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Constant\"\r\n                                    aria-describedby=\"basic-addon1\" formControlName=\"constant\"\r\n                                    (change)=\"generateScript()\">\r\n                            </div>\r\n                            <small class=\"text-danger\"\r\n                                *ngIf=\"getConstantFormGroup(i).controls['constant'].hasError('required')\">\r\n                                Constant Name is required! </small>&nbsp;\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Value</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Value\" (change)=\"generateScript()\" [readonly]=\"getConstantFormGroup(i).controls['subquery'].value\"\r\n                                    aria-describedby=\"basic-addon1\" formControlName=\"value\" placeholder=\"Constant Value\">\r\n                            </div>\r\n                            <small class=\"text-danger\"\r\n                                *ngIf=\"!getConstantFormGroup(i).controls['subquery'].value && getConstantFormGroup(i).controls['value'].hasError('required')\">\r\n                                Value is required! </small>&nbsp;\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row mb-1\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Table</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Table\" (change)=\"generateScript()\"\r\n                                    aria-describedby=\"basic-addon1\" formControlName=\"table\" placeholder=\"Table Name of the value\">\r\n                            </div>\r\n                            <small class=\"text-danger\"\r\n                                *ngIf=\"getConstantFormGroup(i).controls['table'].hasError('required')\">\r\n                                Table is required! </small>&nbsp;\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Column</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Column\" (change)=\"generateScript()\"\r\n                                    aria-describedby=\"basic-addon1\" formControlName=\"column\" placeholder=\"Column Name of the value\">\r\n                            </div>\r\n                            <small class=\"text-danger\"\r\n                                *ngIf=\"getConstantFormGroup(i).controls['column'].hasError('required')\">\r\n                                Column is required! </small>&nbsp;\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row mb-1\">\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Note</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Note\"\r\n                                    (change)=\"generateScript()\" aria-describedby=\"basic-addon1\"\r\n                                    formControlName=\"observation\" >\r\n                            </div>\r\n                            <small class=\"text-danger\"\r\n                                *ngIf=\"getConstantFormGroup(i).controls['observation'].hasError('required')\">\r\n                                Note is required! </small>&nbsp;\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\">\r\n                                        <input type=\"checkbox\" aria-label=\"Checkbox for following text input\"\r\n                                            formControlName=\"isreviewed\" (change)=\"generateScript()\">\r\n                                    </div>\r\n                                </div>\r\n                                <label class=\"form-control\" aria-label=\"label with checkbox\" readonly>Reviewed\r\n                                    Constant?</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"card-footer text-right\">\r\n                    <small class=\"text-muted\">\r\n\r\n                        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removeConstant(i)\">\r\n                            <img alt=\"Remove Constant\" title=\"Remove Constant\" src=\"./assets/btn/btnRemove.png\" />\r\n                            &nbsp; Remove Constant\r\n                        </button>\r\n\r\n                    </small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"articleDashboard\">\n    <div class=\"card-deck\">\n        <div class=\"card bg-info text-white text-center linkPag\" *ngFor=\"let gen of generatorList\"\n            [routerLink]=\"[gen.link]\" >\n            <div class=\"card-body\">\n                <strong>{{gen.name | uppercase}}</strong>\n                <br><br>\n                <img [src]=\"[gen.img]\" [alt]=\"[gen.name]\">\n                <br><br>\n            </div>\n        </div>\n    </div>\n</article>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/editcube/editcube.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/editcube/editcube.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n\n    <div class=\"card\" id=\"formHeader\">\n        <div class=\"card-body\">\n\n            <div class=\"container\">\n                <div class=\"row\">\n\n                    <div class=\"col\">\n                        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addColumn()\">\n                            <img alt=\"Add Column\" title=\"Add Column\" src=\"./assets/btn/btnAdd.png\" />\n                            &nbsp; Add Column\n                        </button>\n                    </div>\n\n                    <div class=\"col-sm\">\n                        <div class=\"form-check text-right\">\n                            <div class=\"row\">\n                                <div class=\"col-sm\">\n                                    <div class=\"custom-control custom-checkbox\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\"\n                                            formControlName=\"getcommit\" (change)=\"generateScript()\">\n                                        <label class=\"custom-control-label\" for=\"customCheck1\">Set Commit?</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n            </div>\n\n        </div>\n    </div>\n\n    <br>\n\n    <div class=\"card alert-primary\">\n        <div class=\"card-body\">\n            <div class=\"row mb-0\">\n                <div class=\"col-sm\">\n                    <div class=\"input-group mb-1\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\">View Name</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" aria-label=\"ViewName\" aria-describedby=\"basic-addon1\"\n                            formControlName=\"viewname\" (change)=\"generateScript()\">\n                    </div>\n                    <small class=\"text-danger\" *ngIf=\"form.controls['viewname'].hasError('required')\">\n                        View Name is required! </small> &nbsp;\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <br>\n\n    <div class=\"card bg-light\">\n        <h5 class=\"card-header\">\n            Columns\n        </h5>\n    </div>\n\n    <div formArrayName=\"column\">\n        <div class=\"card\" *ngFor=\"let column of columnFormGroup.controls; let i = index;\" style=\"margin-bottom: 5px;\">\n\n            <div [formGroupName]=\"i\">\n                <div class=\"card-body\">\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm-8\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Column Name</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"ColumnName\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"columnname\"\n                                    (change)=\"generateScript()\" placeholder=\"Table-column Name\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getColumnFormGroup(i).controls['columnname'].hasError('required')\">\n                                Column Name is required! </small> &nbsp;\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <label class=\"input-group-text\" for=\"inputGroupSelect01\">Column Format</label>\n                                </div>\n                                <select class=\"custom-select\" formControlName=\"format\" (change)=\"generateScript()\"\n                                    id=\"inputGroupSelect01\">\n                                    <option value=\"TX\">Text</option>\n                                    <option value=\"dd/MM/yyyy\">dd/MM/yyyy</option>\n                                    <option value=\"###\">###</option>\n                                    <option value=\"###,###\">###,###</option>\n                                    <option value=\"###,###,###.##\">###,###,###.##</option>\n                                    <option value=\"dd/MM/yyyy HH:mm:ss\">dd/MM/yyyy HH:mm:ss</option>\n                                    <option value=\"HH:mm:ss\">HH:mm:ss</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Portuguese</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Portuguese\"\n                                    (change)=\"generateScript()\" aria-describedby=\"basic-addon1\"\n                                    formControlName=\"portuguese\" placeholder=\"Column Name in portuguese\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getColumnFormGroup(i).controls['portuguese'].hasError('required')\">\n                                Portuguese translate is required! </small>&nbsp;\n                        </div>\n                        <div class=\"col-sm\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">English</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"English\" (change)=\"generateScript()\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"english\"\n                                    placeholder=\"Column Name in english\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getColumnFormGroup(i).controls['english'].hasError('required')\">\n                                English translate is required! </small>&nbsp;\n                        </div>\n                        <div class=\"col-sm\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Spanish</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Spanish\" (change)=\"generateScript()\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"spanish\"\n                                    placeholder=\"Column Name in spanish\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getColumnFormGroup(i).controls['spanish'].hasError('required')\">\n                                Spanish translate is required! </small>&nbsp;\n                        </div>\n                    </div>\n\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Previous column</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"ColumnBefore\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"columnbefore\"\n                                    (change)=\"generateScript()\" placeholder=\"Previous Table-column Name\">\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"card-footer text-right\">\n                    <small class=\"text-muted\">\n\n                        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removeColumn(i)\">\n                            <img alt=\"Remove Column\" title=\"Remove Column\" src=\"./assets/btn/btnRemove.png\" />\n                            &nbsp; Remove Column\n                        </button>\n\n                    </small>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modalscript/modalscript.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modalscript/modalscript.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade bd-example-modal-xl\" id=\"exampleModalScrollable\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"exampleModalScrollableTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-scrollable modal-xl\" role=\"document\">\n        <div class=\"modal-content bg-info\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title text-white\" id=\"exampleModalScrollableTitle\">{{pageTitleModal}}'s Script</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" id=\"divConteudo\" style=\"text-align: center; background-color: #E9ECEF;\">\n                <textarea type=\"text\" id=\"generatedScript\" [(ngModel)]=\"generatedScript\" class=\"scriptarea\" disabled\n                    (ngModelChange)=\"cleanMessage();\"></textarea>\n                <br>\n                &nbsp;&nbsp;<span class=\"badge badge-success\">{{copyMessage}}</span>&nbsp;&nbsp;\n            </div>\n            <div class=\"modal-footer\">\n\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n\n                        </div>\n                        <div class=\"col text-right popupControlBox\">\n                            <button type=\"button\" class=\"btn btn-warning\" (click)=\"copyGeneratedScript()\" [disabled]=\"enableBtn\">\n                                <img alt=\"Copy Script\" title=\"Copy Script\" src=\"./assets/btn/btnCopy.png\" />\n                                Copy\n                            </button>\n                            <button type=\"button\" class=\"btn btn-success\" (click)=\"dynamicDownloadTxt()\"  [disabled]=\"enableBtn\"\n                                *ngIf=\"!isMobileDevice\">\n                                <img alt=\"Download Script\" title=\"Download Script\"\n                                    src=\"./assets/btn/btnDownload.png\" />\n                                Download\n                            </button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/newcube/newcube.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/newcube/newcube.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n\n    <div class=\"card\" id=\"formHeader\">\n        <div class=\"card-body\">\n\n            <div class=\"container\">\n                <div class=\"row\">\n\n                    <div class=\"col\">\n                        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addColumn()\">\n                            <img alt=\"Add Column\" title=\"Add Column\" src=\"./assets/btn/btnAdd.png\" />\n                            &nbsp; Add Column\n                        </button>\n                    </div>\n\n                    <div class=\"col-sm\">\n                        <div class=\"form-check text-right\">\n                            <div class=\"row\">\n                                <div class=\"col-sm\">\n                                    <div class=\"custom-control custom-checkbox\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\"\n                                            formControlName=\"getcommit\" (change)=\"generateScript()\">\n                                        <label class=\"custom-control-label\" for=\"customCheck1\">Set Commit?</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n\n    <br>\n\n    <div class=\"card alert-primary\">\n        <div class=\"card-body\">\n            <div class=\"row mb-0\">\n                <div class=\"col-sm\">\n                    <div class=\"input-group mb-1\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\">View Name</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" aria-label=\"ViewName\" aria-describedby=\"basic-addon1\"\n                            formControlName=\"viewname\" (change)=\"generateScript()\" >\n                    </div>\n                    <small class=\"text-danger\" *ngIf=\"form.controls['viewname'].hasError('required')\">\n                        View Name is required! </small> &nbsp;\n                </div>\n                <div class=\"col-sm\">\n                    <div class=\"input-group mb-1\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\">Vision Name</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" aria-label=\"VisionName\" aria-describedby=\"basic-addon1\"\n                            formControlName=\"visionname\" (change)=\"generateScript()\">\n                    </div>\n                    <small class=\"text-danger\" *ngIf=\"form.controls['visionname'].hasError('required')\">\n                        Vision Name is required! </small> &nbsp;\n                </div>\n            </div>\n\n            <div class=\"row mb-0\">\n                <div class=\"col-sm\">\n                    <div class=\"input-group mb-1\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\">Module Name</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" aria-label=\"ModuleName\" aria-describedby=\"basic-addon1\"\n                            formControlName=\"modulename\" (change)=\"generateScript()\">\n                    </div>\n                    <small class=\"text-danger\" *ngIf=\"form.controls['modulename'].hasError('required')\">\n                        Module Name is required! </small> &nbsp;\n                </div>\n                <div class=\"col-sm\">\n                    <div class=\"input-group mb-1\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\">Note</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" aria-label=\"Note\" aria-describedby=\"basic-addon1\"\n                            formControlName=\"note\" (change)=\"generateScript()\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row mb-0\">\n                <div class=\"col-sm-6\">\n                    <div class=\"input-group mb-0\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\">Set Default User?</span>\n                            <div class=\"input-group-text\">\n                                <input type=\"checkbox\" aria-label=\"Set Default User?\" formControlName=\"setdefaultuser\"\n                                    (change)=\"generateScript()\">\n                            </div>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\"\n                            formControlName=\"username\" (change)=\"generateScript()\">\n                    </div>\n                    <small class=\"text-danger\" *ngIf=\"form.controls['setdefaultuser'].value && form.controls['username'].hasError('required')\">\n                            Username is required! </small> &nbsp;\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"input-group mb-0\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\">Set Default Profile?</span>\n                            <div class=\"input-group-text\">\n                                <input type=\"checkbox\" aria-label=\"Set Default Profile?\"\n                                    formControlName=\"setdefaultprofile\" (change)=\"generateScript()\">\n                            </div>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Profile Name\" aria-label=\"Profile Name\"\n                            formControlName=\"profilename\" (change)=\"generateScript()\">                            \n                    </div>\n                    <small class=\"text-danger\" *ngIf=\"form.controls['setdefaultprofile'].value && form.controls['profilename'].hasError('required')\">\n                            Profile Name is required! </small> &nbsp;\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <br>\n\n    <div class=\"card bg-light\">\n        <h5 class=\"card-header\">\n            Columns\n        </h5>\n    </div>\n\n    <div formArrayName=\"column\">\n        <div class=\"card\" *ngFor=\"let column of columnFormGroup.controls; let i = index;\" style=\"margin-bottom: 5px;\">\n\n            <div [formGroupName]=\"i\">\n                <div class=\"card-body\">\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm-8\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Column Name</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"ColumnName\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"columnname\"\n                                    (change)=\"generateScript()\" placeholder=\"Table-column Name\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getColumnFormGroup(i).controls['columnname'].hasError('required')\">\n                                Column Name is required! </small> &nbsp;\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <label class=\"input-group-text\" for=\"inputGroupSelect01\">Column Format</label>\n                                </div>\n                                <select class=\"custom-select\" formControlName=\"format\" (change)=\"generateScript()\"\n                                    id=\"inputGroupSelect01\">\n                                    <option value=\"TX\">Text</option>\n                                    <option value=\"dd/MM/yyyy\">dd/MM/yyyy</option>\n                                    <option value=\"###\">###</option>\n                                    <option value=\"###,###\">###,###</option>\n                                    <option value=\"###,###,###.##\">###,###,###.##</option>\n                                    <option value=\"dd/MM/yyyy HH:mm:ss\">dd/MM/yyyy HH:mm:ss</option>\n                                    <option value=\"HH:mm:ss\">HH:mm:ss</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Portuguese</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Portuguese\"\n                                    (change)=\"generateScript()\" aria-describedby=\"basic-addon1\"\n                                    formControlName=\"portuguese\" placeholder=\"Column Name in portuguese\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getColumnFormGroup(i).controls['portuguese'].hasError('required')\">\n                                Portuguese translate is required! </small>&nbsp;\n                        </div>\n                        <div class=\"col-sm\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">English</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"English\" (change)=\"generateScript()\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"english\" placeholder=\"Column Name in english\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getColumnFormGroup(i).controls['english'].hasError('required')\">\n                                English translate is required! </small>&nbsp;\n                        </div>\n                        <div class=\"col-sm\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Spanish</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Spanish\" (change)=\"generateScript()\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"spanish\" placeholder=\"Column Name in spanish\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getColumnFormGroup(i).controls['spanish'].hasError('required')\">\n                                Spanish translate is required! </small>&nbsp;\n                        </div>\n                    </div>\n\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Previous column</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"ColumnBefore\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"columnbefore\"\n                                    (change)=\"generateScript()\" placeholder=\"Previous Table-column Name\">\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"card-footer text-right\">\n                    <small class=\"text-muted\">\n\n                        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removeColumn(i)\">\n                            <img alt=\"Remove Column\" title=\"Remove Column\" src=\"./assets/btn/btnRemove.png\" />\n                            &nbsp; Remove Column\n                        </button>\n\n                    </small>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page/page.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n\n    <div class=\"card\"  id=\"formHeader\">\n        <div class=\"card-body\">\n\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addPage()\">\n                            <img alt=\"Add Parameter\" title=\"Add Parameter\" src=\"./assets/btn/btnAdd.png\" />\n                            &nbsp; Add Page\n                        </button>\n                    </div>\n                    <div class=\"col-sm\">\n                        <div class=\"form-check text-right\">\n                            <div class=\"row\">\n                                <div class=\"col-sm\">\n                                    <div class=\"custom-control custom-checkbox\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\"\n                                            formControlName=\"getcommit\" (change)=\"generateScript()\">\n                                        <label class=\"custom-control-label\" for=\"customCheck1\">Set Commit?</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <br>\n\n\n    <div formArrayName=\"page\">\n        <div class=\"card\" *ngFor=\"let pageItem of pageFormGroup.controls; let i = index;\" style=\"margin-bottom: 5px;\">\n\n            <div [formGroupName]=\"i\">\n                <div class=\"card-body\">\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm-8\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Name</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Name\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"name\" (change)=\"generateScript()\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getPageFormGroup(i).controls['name'].hasError('required')\">\n                                Name is required! </small>&nbsp;\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Abbreviation</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Abbrev\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"abbrev\"\n                                    (change)=\"generateScript()\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getPageFormGroup(i).controls['abbrev'].hasError('required')\">\n                                Abbreviation is required! </small>&nbsp;\n                        </div>\n                    </div>\n\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">URL</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"URL\" aria-describedby=\"basic-addon1\"\n                                    formControlName=\"url\" (change)=\"generateScript()\">\n                            </div>\n                            <small class=\"text-danger\" *ngIf=\"getPageFormGroup(i).controls['url'].hasError('required')\">\n                                URL is required! </small> &nbsp;\n                        </div>\n                    </div>\n\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Icon</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Icon\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"icon\" (change)=\"generateScript()\">\n                            </div>\n                            &nbsp;\n                        </div>\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <label class=\"input-group-text\" for=\"inputGroupSelect01\">Page Type</label>\n                                </div>\n                                <select class=\"custom-select\" formControlName=\"pagetype\" (change)=\"generateScript()\"\n                                    id=\"inputGroupSelect01\">\n                                    <option value=\"T\">Screen</option>\n                                    <option value=\"R\">Report</option>\n                                    <option value=\"O\">Others</option>\n                                </select>\n                            </div>\n                            &nbsp;\n                        </div>\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <label class=\"input-group-text\" for=\"inputGroupSelect02\">Is Menu?</label>\n                                </div>\n                                <select class=\"custom-select\" formControlName=\"ismenu\" (change)=\"generateScript()\"\n                                    id=\"inputGroupSelect02\">\n                                    <option value=\"S\">Yes</option>\n                                    <option value=\"N\">No</option>\n                                </select>\n                            </div>\n                            &nbsp;\n                        </div>\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Position</span>\n                                </div>\n                                <input type=\"number\" class=\"form-control\" aria-label=\"OrderNum\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"ordernum\"\n                                    (change)=\"generateScript()\">\n                            </div>\n                            &nbsp;\n                        </div>\n                    </div>\n\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Namespace</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Namespace\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"namespace\"\n                                    (change)=\"generateScript()\" placeholder=\"Path until this page\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getPageFormGroup(i).controls['namespace'].hasError('required')\">\n                                Namespace is required! </small>&nbsp;\n                        </div>\n                    </div>\n\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Portuguese</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Portuguese\"\n                                    (change)=\"generateScript()\" aria-describedby=\"basic-addon1\"\n                                    formControlName=\"portuguese\" placeholder=\"Column Name in portuguese\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getPageFormGroup(i).controls['portuguese'].hasError('required')\">\n                                Portuguese translate is required! </small>&nbsp;\n                        </div>\n                    </div>\n\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">English</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"English\" (change)=\"generateScript()\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"english\" placeholder=\"Column Name in english\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getPageFormGroup(i).controls['english'].hasError('required')\">\n                                English translate is required! </small>&nbsp;\n                        </div>\n                    </div>\n\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Spanish</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Spanish\" (change)=\"generateScript()\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"spanish\" placeholder=\"Column Name in spanish\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getPageFormGroup(i).controls['spanish'].hasError('required')\">\n                                Spanish translate is required! </small>&nbsp;\n                        </div>\n                    </div>\n\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\">\n                                        <input type=\"checkbox\" aria-label=\"Checkbox for following text input\"\n                                            formControlName=\"force\" (change)=\"generateScript()\">\n                                    </div>\n                                </div>\n                                <label class=\"form-control\" aria-label=\"label with checkbox\" readonly>Force\n                                    Update?</label>&nbsp;\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"card-footer text-right\">\n                    <small class=\"text-muted\">\n\n                        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removePage(i)\">\n                            <img alt=\"Remove Page\" title=\"Remove Page\" src=\"./assets/btn/btnRemove.png\" />\n                            &nbsp; Remove Page\n                        </button>\n\n                    </small>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/parameter/parameter.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/parameter/parameter.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n\r\n    <div class=\"card\" id=\"formHeader\">\r\n        <div class=\"card-body\">\r\n\r\n\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addParameter()\">\r\n                            <img alt=\"Add Parameter\" title=\"Add Parameter\" src=\"./assets/btn/btnAdd.png\" />\r\n                            &nbsp; Add Parameter\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <div class=\"form-check text-right\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm\">\r\n                                    <div class=\"custom-control custom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\"\r\n                                            formControlName=\"getcommit\" (change)=\"generateScript()\">\r\n                                        <label class=\"custom-control-label\" for=\"customCheck1\">Set Commit?</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n\r\n    <div formArrayName=\"parameter\">\r\n        <div class=\"card\" *ngFor=\"let parameterItem of parameterFormGroup.controls; let i = index;\"\r\n            style=\"margin-bottom: 5px;\">\r\n\r\n            <div [formGroupName]=\"i\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row mb-1\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"input-group mb-1\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Parameter</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Parameter\"\r\n                                    aria-describedby=\"basic-addon1\" formControlName=\"parameter\"\r\n                                    (change)=\"generateScript()\">\r\n                            </div>\r\n                            <small class=\"text-danger\"\r\n                                *ngIf=\"getParameterFormGroup(i).controls['parameter'].hasError('required')\">\r\n                                Parameter is required! </small> &nbsp;\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\">\r\n                                        <input type=\"checkbox\" aria-label=\"Checkbox for following text input\"\r\n                                            formControlName=\"globalparameter\" (change)=\"generateScript()\">\r\n                                    </div>\r\n                                </div>\r\n                                <label class=\"form-control\" aria-label=\"label with checkbox\" readonly>Global\r\n                                    Parameter?</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\">\r\n                                        <input type=\"checkbox\" aria-label=\"Checkbox for following text input\"\r\n                                            formControlName=\"isreviewed\" (change)=\"generateScript()\">\r\n                                    </div>\r\n                                </div>\r\n                                <label class=\"form-control\" aria-label=\"label with checkbox\" readonly>Reviewed\r\n                                    Parameter?</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row mb-1\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Value</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Value\" (change)=\"generateScript()\"\r\n                                    aria-describedby=\"basic-addon1\" formControlName=\"value\">\r\n                            </div>\r\n                            <small class=\"text-danger\"\r\n                                *ngIf=\"getParameterFormGroup(i).controls['value'].hasError('required')\">\r\n                                Parameter Value is required! </small>&nbsp;\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Note</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Note\"\r\n                                    (change)=\"generateScript()\" aria-describedby=\"basic-addon1\"\r\n                                    formControlName=\"observation\">\r\n                            </div>\r\n                            <small class=\"text-danger\"\r\n                                *ngIf=\"getParameterFormGroup(i).controls['observation'].hasError('required')\">\r\n                                Parameter Note is required! </small>&nbsp;\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"card-footer text-right\">\r\n                    <small class=\"text-muted\">\r\n\r\n                        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removeParameter(i)\">\r\n                            <img alt=\"Remove Parameter\" title=\"Remove Parameter\" src=\"./assets/btn/btnRemove.png\" />\r\n                            &nbsp; Remove Parameter\r\n                        </button>\r\n\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/translator/translator.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/translator/translator.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n\n    <div class=\"card\"  id=\"formHeader\">\n        <div class=\"card-body\">\n\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addTranslatorKey()\">\n                            <img alt=\"Add Key\" title=\"Add Key\" src=\"./assets/btn/btnAdd.png\" />\n                            &nbsp; Add Key\n                        </button>\n                    </div>\n                    <div class=\"col-sm\">\n                        <div class=\"form-check text-right\">\n                            <div class=\"row\">\n                                <div class=\"col-sm\">\n                                    <div class=\"custom-control custom-checkbox\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" formControlName=\"getcommit\" (change)=\"generateScript()\">\n                                        <label class=\"custom-control-label\" for=\"customCheck1\">Set Commit?</label>\n                                    </div>\n                                </div>\n                                <br>\n                                <div class=\"col\">\n                                    <div class=\"custom-control custom-checkbox\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\" formControlName=\"getbeginend\" (change)=\"generateScript()\">\n                                        <label class=\"custom-control-label\" for=\"customCheck2\">Set Begin/End?</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <br>\n\n    <div formArrayName=\"translateKeys\">\n        <div class=\"card\" *ngFor=\"let translate of translateFormGroup.controls; let i = index;\"\n            style=\"margin-bottom: 5px;\">\n\n            <div [formGroupName]=\"i\">\n                <div class=\"card-body\">\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm-8\">\n                            <div class=\"input-group mb-1\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Key</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Key\" aria-describedby=\"basic-addon1\"\n                                    formControlName=\"key\" (change)=\"generateScript()\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getTranslateFormGroup(i).controls['key'].hasError('required')\">\n                                Key is required! </small>&nbsp;\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\">\n                                        <input type=\"checkbox\" aria-label=\"Checkbox for following text input\"\n                                            formControlName=\"force\" (change)=\"generateScript()\">\n                                    </div>\n                                </div>\n                                <label class=\"form-control\" aria-label=\"label with checkbox\" readonly>Force\n                                    Update?</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row mb-1\">\n                        <div class=\"col-sm\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Portuguese</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Portuguese\"\n                                    (change)=\"generateScript()\" aria-describedby=\"basic-addon1\"\n                                    formControlName=\"portuguese\" placeholder=\"Key Value in portuguese\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getTranslateFormGroup(i).controls['portuguese'].hasError('required')\">\n                                Portuguese translate is required! </small>&nbsp;\n                        </div>\n                        <div class=\"col-sm\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">English</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"English\" (change)=\"generateScript()\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"english\" placeholder=\"Key Value in english\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getTranslateFormGroup(i).controls['english'].hasError('required')\">\n                                English translate is required! </small>&nbsp;\n                        </div>\n                        <div class=\"col-sm\">\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Spanish</span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Spanish\" (change)=\"generateScript()\"\n                                    aria-describedby=\"basic-addon1\" formControlName=\"spanish\" placeholder=\"Key Value in spanish\">\n                            </div>\n                            <small class=\"text-danger\"\n                                *ngIf=\"getTranslateFormGroup(i).controls['spanish'].hasError('required')\">\n                                Spanish translate is required! </small>&nbsp;\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"card-footer text-right\">\n                    <small class=\"text-muted\">\n\n                        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removeTranslateKey(i)\">\n                            <img alt=\"Remove Key\" title=\"Remove Key\" src=\"./assets/btn/btnRemove.png\" />\n                            &nbsp; Remove Key\n                        </button>\n\n                    </small>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</form>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameter/parameter.component */ "./src/app/parameter/parameter.component.ts");
/* harmony import */ var _translator_translator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translator/translator.component */ "./src/app/translator/translator.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _editcube_editcube_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editcube/editcube.component */ "./src/app/editcube/editcube.component.ts");
/* harmony import */ var _newcube_newcube_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newcube/newcube.component */ "./src/app/newcube/newcube.component.ts");










const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'constant', component: _constant_constant_component__WEBPACK_IMPORTED_MODULE_4__["ConstantComponent"] },
    { path: 'parameter', component: _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_5__["ParameterComponent"] },
    { path: 'translator', component: _translator_translator_component__WEBPACK_IMPORTED_MODULE_6__["TranslatorComponent"] },
    { path: 'page', component: _page_page_component__WEBPACK_IMPORTED_MODULE_7__["PageComponent"] },
    { path: 'editcube', component: _editcube_editcube_component__WEBPACK_IMPORTED_MODULE_8__["EditcubeComponent"] },
    { path: 'newcube', component: _newcube_newcube_component__WEBPACK_IMPORTED_MODULE_9__["NewcubeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sectionPages{\r\n    padding-top: 15px;\r\n    padding-bottom: 50px;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 999999999999;\r\n}\r\n\r\n.sectionPages article{\r\n    align-items: center;\r\n    align-self: center;\r\n    align-content: center;    \r\n}\r\n\r\nnav{\r\n    /* background-color: rgba(233, 236, 239, 0.767);  */\r\n    align-self: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    height: 30px;\r\n}\r\n\r\nnav span{\r\n    width: 200px;\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtREFBbUQ7SUFDbkQsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvblBhZ2Vze1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk5O1xyXG59XHJcblxyXG4uc2VjdGlvblBhZ2VzIGFydGljbGV7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgICBcclxufVxyXG5cclxubmF2e1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDIzNiwgMjM5LCAwLjc2Nyk7ICAqL1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxubmF2IHNwYW57XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let AppComponent = class AppComponent {
    constructor(location, cdr) {
        this.location = location;
        this.cdr = cdr;
        this.showCard = false;
        this.showPageName = true;
        this.isMobileDevice = false;
        this.title = 'Script Generator';
        this.pageTitle = 'Dashboard';
        this.pageImg = './assets/img/imgDashboard.png';
    }
    ngOnInit() {
        this.checkDevice();
    }
    cdrMethod() {
        this.checkDevice();
        this.cdr.detectChanges();
    }
    goBack() {
        this.checkDevice();
        this.location.back();
    }
    checkDevice() {
        var ua = navigator.userAgent;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
            this.isMobileDevice = true;
        else
            this.isMobileDevice = false;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parameter/parameter.component */ "./src/app/parameter/parameter.component.ts");
/* harmony import */ var _modalscript_modalscript_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modalscript/modalscript.component */ "./src/app/modalscript/modalscript.component.ts");
/* harmony import */ var _translator_translator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./translator/translator.component */ "./src/app/translator/translator.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _editcube_editcube_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editcube/editcube.component */ "./src/app/editcube/editcube.component.ts");
/* harmony import */ var _newcube_newcube_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./newcube/newcube.component */ "./src/app/newcube/newcube.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            _constant_constant_component__WEBPACK_IMPORTED_MODULE_7__["ConstantComponent"],
            _parameter_parameter_component__WEBPACK_IMPORTED_MODULE_8__["ParameterComponent"],
            _modalscript_modalscript_component__WEBPACK_IMPORTED_MODULE_9__["ModalscriptComponent"],
            _translator_translator_component__WEBPACK_IMPORTED_MODULE_10__["TranslatorComponent"],
            _page_page_component__WEBPACK_IMPORTED_MODULE_11__["PageComponent"],
            _editcube_editcube_component__WEBPACK_IMPORTED_MODULE_12__["EditcubeComponent"],
            _newcube_newcube_component__WEBPACK_IMPORTED_MODULE_13__["NewcubeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [_modalscript_modalscript_component__WEBPACK_IMPORTED_MODULE_9__["ModalscriptComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/constant/constant.component.css":
/*!*************************************************!*\
  !*** ./src/app/constant/constant.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnN0YW50L2NvbnN0YW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/constant/constant.component.ts":
/*!************************************************!*\
  !*** ./src/app/constant/constant.component.ts ***!
  \************************************************/
/*! exports provided: ConstantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantComponent", function() { return ConstantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generator.service */ "./src/app/generator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constant.service */ "./src/app/constant/constant.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let ConstantComponent = class ConstantComponent {
    constructor(appcomponent, generatorservice, constantservice, fb, renderer2, _document) {
        this.appcomponent = appcomponent;
        this.generatorservice = generatorservice;
        this.constantservice = constantservice;
        this.fb = fb;
        this.renderer2 = renderer2;
        this._document = _document;
        this.generatorList = this.generatorservice.getGenerator("/constant");
        this.getCommit = true;
        this.getBeginEnd = true;
    }
    ngOnInit() {
        this.appcomponent.pageTitle = this.generatorList.name;
        this.appcomponent.showCard = true;
        this.constantservice.cleanScript();
        this.form = this.fb.group({
            getcommit: [true],
            getbeginend: [true],
            constant: this.fb.array([this.createConstantKey()])
        });
        this.constantList = this.form.get('constant');
        const s = this.renderer2.createElement('script');
        s.type = 'text/javascript';
        s.src = './assets/script/scripts.js';
        this.renderer2.appendChild(this._document.body, s);
        this.appcomponent.cdrMethod();
    }
    //#########################################################################################
    createConstantKey() {
        return this.fb.group({
            subquery: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            constant: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            table: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            column: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            observation: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            isreviewed: [true]
        });
    }
    addConstant() {
        this.constantList.push(this.createConstantKey());
        this.generateScript();
    }
    removeConstant(index) {
        if (confirm("Are you sure to delete this " + this.generatorList.name + "?")) {
            this.constantList.removeAt(index);
            this.generateScript();
        }
    }
    getConstantFormGroup(index) {
        const formGroup = this.constantList.controls[index];
        return formGroup;
    }
    get constantFormGroup() {
        return this.form.get('constant');
    }
    //#########################################################################################
    generateScript() {
        this.constantservice.generateScript(this.form, this.constantList);
    }
};
ConstantComponent.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { type: _generator_service__WEBPACK_IMPORTED_MODULE_3__["GeneratorService"] },
    { type: _constant_service__WEBPACK_IMPORTED_MODULE_5__["ConstantService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
];
ConstantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-constante',
        template: __webpack_require__(/*! raw-loader!./constant.component.html */ "./node_modules/raw-loader/index.js!./src/app/constant/constant.component.html"),
        styles: [__webpack_require__(/*! ./constant.component.css */ "./src/app/constant/constant.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))
], ConstantComponent);



/***/ }),

/***/ "./src/app/constant/constant.service.ts":
/*!**********************************************!*\
  !*** ./src/app/constant/constant.service.ts ***!
  \**********************************************/
/*! exports provided: ConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantService", function() { return ConstantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../script.service */ "./src/app/script.service.ts");



let ConstantService = class ConstantService {
    constructor(scriptservice) {
        this.scriptservice = scriptservice;
    }
    generateScript(form, constantList) {
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
                        if (!Boolean(querySelect)) {
                            querySelect = "\t /*Get Constant Value*/\n";
                        }
                        strAux = strAux.replace("\t", "").replace("FROM", "from"); /*IT CAN'T BE UPPERCASE*/
                        querySelect += strAux.replace("from", "into V_CODIGO_" + contConst + "\nfrom");
                        if (querySelect.substring(querySelect.length - 1, querySelect.length) != ";") {
                            querySelect += ";";
                        }
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
                    if (!Boolean(queryUpdate)) {
                        queryUpdate = "\t /*Review the constant*/\n";
                    }
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
        if (declareSession != '') {
            query += "Declare\n\n" + declareSession.slice(0, -1) + " number; " + "\n\n";
        }
        query += "Begin\n\n" + querySelect + "\n" + queryProcedure + "\n" + queryUpdate + "\n";
        if (form.value["getcommit"]) {
            query += "\t Commit;\n\n";
        }
        query += "End;";
        if (isCreated == "S") {
            this.scriptservice.setScript(query);
        }
        else {
            this.cleanScript();
        }
    }
    cleanScript() {
        this.scriptservice.cleanScript();
    }
};
ConstantService.ctorParameters = () => [
    { type: _script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"] }
];
ConstantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConstantService);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".articleDashboard{\r\n    text-align: center;\r\n    padding: 30px 0px 50px 0px;\r\n    width: 100%;\r\n}\r\n\r\n.articleDashboard .card-deck {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    grid-gap: .5rem;\r\n}\r\n\r\n.articleDashboard strong{\r\n    letter-spacing: 5px; \r\n}\r\n\r\n.articleDashboard .linkPag{\r\n    cursor: pointer;\r\n    border: 3px transparent solid;\r\n}\r\n\r\n.articleDashboard .linkPag .footerCard{\r\n    float: right;    \r\n    height: 30px;\r\n}\r\n\r\n.articleDashboard .linkPag:hover{\r\n    border: 3px transparent solid;\r\n    -webkit-filter: invert(100%);\r\n            filter: invert(100%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNEJBQW9CO1lBQXBCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlRGFzaGJvYXJke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCAwcHggNTBweCAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFydGljbGVEYXNoYm9hcmQgLmNhcmQtZGVjayB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgICBncmlkLWdhcDogLjVyZW07XHJcbn1cclxuXHJcbi5hcnRpY2xlRGFzaGJvYXJkIHN0cm9uZ3tcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7IFxyXG59XHJcblxyXG4uYXJ0aWNsZURhc2hib2FyZCAubGlua1BhZ3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogM3B4IHRyYW5zcGFyZW50IHNvbGlkO1xyXG59XHJcblxyXG4uYXJ0aWNsZURhc2hib2FyZCAubGlua1BhZyAuZm9vdGVyQ2FyZHtcclxuICAgIGZsb2F0OiByaWdodDsgICAgXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5hcnRpY2xlRGFzaGJvYXJkIC5saW5rUGFnOmhvdmVye1xyXG4gICAgYm9yZGVyOiAzcHggdHJhbnNwYXJlbnQgc29saWQ7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generator.service */ "./src/app/generator.service.ts");




let DashboardComponent = class DashboardComponent {
    constructor(appcomponent, generatorservice) {
        this.appcomponent = appcomponent;
        this.generatorservice = generatorservice;
    }
    ngOnInit() {
        this.getGeneratorList();
        this.appcomponent.pageTitle = "Dashboard";
        this.appcomponent.showCard = false;
        this.appcomponent.cdrMethod();
    }
    getGeneratorList() {
        this.generatorservice.getGenerators()
            .subscribe(generator => this.generatorList = generator);
    }
    getStatus(version) {
        var retorno;
        if (version.match('v1.0')) {
            retorno = 'new';
        }
        else {
            retorno = 'update';
        }
        return retorno;
    }
    showVersion(modify) {
        var returnValue = true;
        var oneDay = 24 * 60 * 60 * 1000;
        var c = Math.round(Math.abs((modify.getTime() - new Date().getTime()) / (oneDay)));
        if (c > 15) {
            returnValue = false;
        }
        return returnValue;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { type: _generator_service__WEBPACK_IMPORTED_MODULE_3__["GeneratorService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dashboard/mock-generators.ts":
/*!**********************************************!*\
  !*** ./src/app/dashboard/mock-generators.ts ***!
  \**********************************************/
/*! exports provided: GENERATORS, TECHNOLOGIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATORS", function() { return GENERATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TECHNOLOGIES", function() { return TECHNOLOGIES; });
const pathImg = "./assets/img/";
const pathLogo = "./assets/logo/";
var countId = 0;
const GENERATORS = [
    // { id: ++countId, name: 'Dashboard', link: '/dashboard', img: pathImg + 'imgDashboard.png' },
    { id: ++countId, name: 'Parameter', link: '/parameter', img: pathImg + 'imgParameter.png' },
    { id: ++countId, name: 'Constant', link: '/constant', img: pathImg + 'imgConstant.png' },
    { id: ++countId, name: 'Translator Key', link: '/translator', img: pathImg + 'imgTranslator.png' },
    { id: ++countId, name: 'New Page', link: '/page', img: pathImg + 'imgPage.png' },
    { id: ++countId, name: 'Create Cube', link: '/newcube', img: pathImg + 'imgCubeNew.png' },
    { id: ++countId, name: 'Edit Cube', link: '/editcube', img: pathImg + 'imgCubeEdit.png' }
];
const TECHNOLOGIES = [
    { id: ++countId, name: 'HTML5', img: pathLogo + 'html5.png' },
    { id: ++countId, name: 'CSS', img: pathLogo + 'css.png' },
    { id: ++countId, name: 'GitHub', img: pathLogo + 'github.png' },
    { id: ++countId, name: 'Bootstrap', img: pathLogo + 'bootstrap.png' },
    { id: ++countId, name: 'Angular', img: pathLogo + 'angular.png' },
];


/***/ }),

/***/ "./src/app/editcube/editcube.component.css":
/*!*************************************************!*\
  !*** ./src/app/editcube/editcube.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRjdWJlL2VkaXRjdWJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/editcube/editcube.component.ts":
/*!************************************************!*\
  !*** ./src/app/editcube/editcube.component.ts ***!
  \************************************************/
/*! exports provided: EditcubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcubeComponent", function() { return EditcubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generator.service */ "./src/app/generator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _editcube_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editcube.service */ "./src/app/editcube/editcube.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let EditcubeComponent = class EditcubeComponent {
    constructor(appcomponent, generatorservice, editcubeService, fb, renderer2, _document) {
        this.appcomponent = appcomponent;
        this.generatorservice = generatorservice;
        this.editcubeService = editcubeService;
        this.fb = fb;
        this.renderer2 = renderer2;
        this._document = _document;
        this.generatorList = this.generatorservice.getGenerator("/editcube");
        this.getCommit = true;
    }
    ngOnInit() {
        this.appcomponent.pageTitle = this.generatorList.name;
        this.appcomponent.showCard = true;
        this.editcubeService.cleanScript();
        this.form = this.fb.group({
            getcommit: [true],
            viewname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            column: this.fb.array([this.createColumnKey()])
        });
        this.columnList = this.form.get('column');
        const s = this.renderer2.createElement('script');
        s.type = 'text/javascript';
        s.src = './assets/script/scripts.js';
        this.renderer2.appendChild(this._document.body, s);
        this.appcomponent.cdrMethod();
    }
    //#########################################################################################
    createColumnKey() {
        return this.fb.group({
            columnname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            format: ['TX'],
            portuguese: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            english: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            spanish: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            columnbefore: [null]
        });
    }
    addColumn() {
        this.columnList.push(this.createColumnKey());
        this.generateScript();
    }
    removeColumn(index) {
        if (confirm("Are you sure to delete this column?")) {
            this.columnList.removeAt(index);
            this.generateScript();
        }
    }
    getColumnFormGroup(index) {
        const formGroup = this.columnList.controls[index];
        return formGroup;
    }
    get columnFormGroup() {
        return this.form.get('column');
    }
    //#########################################################################################
    generateScript() {
        this.editcubeService.generateScript(this.form, this.columnList);
    }
};
EditcubeComponent.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { type: _generator_service__WEBPACK_IMPORTED_MODULE_3__["GeneratorService"] },
    { type: _editcube_service__WEBPACK_IMPORTED_MODULE_5__["EditcubeService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
];
EditcubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editcube',
        template: __webpack_require__(/*! raw-loader!./editcube.component.html */ "./node_modules/raw-loader/index.js!./src/app/editcube/editcube.component.html"),
        styles: [__webpack_require__(/*! ./editcube.component.css */ "./src/app/editcube/editcube.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))
], EditcubeComponent);



/***/ }),

/***/ "./src/app/editcube/editcube.service.ts":
/*!**********************************************!*\
  !*** ./src/app/editcube/editcube.service.ts ***!
  \**********************************************/
/*! exports provided: EditcubeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcubeService", function() { return EditcubeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../script.service */ "./src/app/script.service.ts");



let EditcubeService = class EditcubeService {
    constructor(scriptservice) {
        this.scriptservice = scriptservice;
    }
    generateScript(form, columnList) {
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
        queryDeclare += "\t type t_Coluna is varray(" + columnList.controls.length + ") of nvarchar2(100);\n";
        queryDeclare += "\t type t_Anterior is varray(" + columnList.controls.length + ") of nvarchar2(100);\n";
        queryDeclare += "\t type t_Traducao is varray(" + columnList.controls.length + ") of nvarchar2(100);\n";
        queryDeclare += "\t type t_Formato is varray(" + columnList.controls.length + ") of nvarchar2(100);\n";
        queryDeclare += "\n";
        queryDeclare += "/*Declaração da variável de formato da coluna*/\n";
        queryDeclare += "\t v_FormatoColunaCubo NVARCHAR2(50);\n";
        queryDeclare += "\n";
        queryDeclare += "/*Linguas cadastradas no sistema*/\n";
        queryDeclare += "\t Cursor c_Language is (\n";
        queryDeclare += "\t\t Select CD_LANGUAGE\n";
        queryDeclare += "\t\t from INT_LANGUAGE\n";
        queryDeclare += "\t );\n";
        queryDeclare += "\n";
        queryDeclare += "/*Nome da tabela da visão (cubo/view)*/  \n";
        queryDeclare += "\t v_NomeViewCubo nvarchar2(30) := '" + form.value["viewname"] + "';\n";
        for (let item of columnList.controls) {
            if (Boolean(form.value["viewname"]) &&
                Boolean(item.value["columnname"]) &&
                Boolean(item.value["format"]) &&
                Boolean(item.value["portuguese"]) &&
                Boolean(item.value["spanish"]) &&
                Boolean(item.value["english"])) {
                listColumnName += "'" + item.value["columnname"] + "',";
                listColumnFormat += "'" + item.value["format"] + "',";
                listColumnPort += "'" + item.value["portuguese"] + "',";
                listColumnEngl += "'" + item.value["spanish"] + "',";
                listColumnSpan += "'" + item.value["english"] + "',";
                listColumnPrevious += "'" + (!Boolean(item.value["columnbefore"]) ? "" : item.value["columnbefore"]) + "',";
                isCreated = "S";
            }
            else {
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
        queryDeclare += "\n\n";
        queryProcedure += "BEGIN";
        queryProcedure += "\n";
        queryProcedure += "/*0- Verifico se existe a Visão cadastrada*/\n";
        queryProcedure += "\t select 	count(1)\n";
        queryProcedure += "\t into 	v_ExisteVisao\n";
        queryProcedure += "\t from 	con_visao\n";
        queryProcedure += "\t where 	upper(trim(dcr_nome_fisico)) = upper(trim(v_NomeViewCubo));\n";
        queryProcedure += "\n";
        queryProcedure += "\t if (v_ExisteVisao = 0) then\n";
        queryProcedure += "\t\t raise_application_error(-20001,'View ' || v_NomeViewCubo || ' não possui visão cadastrada!!');\n";
        queryProcedure += "\t\t return;\n";
        queryProcedure += "\t end if;\n";
        queryProcedure += "/*0- Verifico se existe a Visão cadastrada*/\n";
        queryProcedure += "\n";
        queryProcedure += "/*1- Atualiza estrutura do cubo*/\n";
        queryProcedure += "\t PR_ATUALIZA_ESTRUTURA_CUBO(v_NomeViewCubo); \n";
        queryProcedure += "/*1- Atualiza estrutura do cubo*/\n";
        queryProcedure += "\n";
        queryProcedure += "/*2- Loop pelos campos novos do cubo*/\n";
        queryProcedure += "\t for i in 1..var_NovaColuna.count loop    \n";
        queryProcedure += "\n";
        queryProcedure += "/*Limpo a coluna de formato para o novo loop*/\n";
        queryProcedure += "\t\t v_FormatoColunaCubo := '';\n";
        queryProcedure += "\n";
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
        queryProcedure += "\n";
        queryProcedure += "/*4- define o formato da coluna*/\n";
        queryProcedure += "\t\t UPDATE CON_COLUNA_VISAO \n";
        queryProcedure += "\t\t SET DCR_FORMATO = v_FormatoColunaCubo \n";
        queryProcedure += "\t\t WHERE UPPER(DCR_CHAVE_TRADUCAO) = (v_NomeViewCubo || '.' || var_NovaColuna(i));        \n";
        queryProcedure += "/*4- define o formato da coluna*/\n";
        queryProcedure += "\n";
        queryProcedure += "/*5- Passa a coluna para visivel*/\n";
        queryProcedure += "\t\t UPDATE ADM_CAMPO_RELATORIO CR\n";
        queryProcedure += "\t\t SET FLAG_VISIVEL = 'S'\n";
        queryProcedure += "\t\t WHERE EXISTS (\n";
        queryProcedure += "\t\t\t\t\t\t SELECT 	1\n";
        queryProcedure += "\t\t\t\t\t\t FROM 		ADM_RELATORIO R\n";
        queryProcedure += "\t\t\t\t\t\t INNER JOIN CON_VISAO V 			ON V.CD_VISAO = R.CD_VISAO\n";
        queryProcedure += "\t\t\t\t\t\t INNER JOIN CON_COLUNA_VISAO CV 	ON V.CD_VISAO = R.CD_VISAO\n";
        queryProcedure += "\t\t\t\t\t\t WHERE 1=1\n";
        queryProcedure += "\t\t\t\t\t\t AND UPPER(CV.DCR_CHAVE_TRADUCAO) 	= (v_NomeViewCubo || '.' || var_NovaColuna(i))\n";
        queryProcedure += "\t\t\t\t\t\t AND UPPER(V.DCR_NOME_FISICO) 		= v_NomeViewCubo\n";
        queryProcedure += "\t\t\t\t\t\t AND CR.CD_RELATORIO 				= R.CD_RELATORIO \n";
        queryProcedure += "\t\t\t\t\t\t AND CR.CD_COLUNA_VISAO 				= CV.CD_COLUNA_VISAO\n";
        queryProcedure += "\t\t\t\t\t );\n";
        queryProcedure += "/*5- Passa a coluna para visivel*/\n";
        queryProcedure += "\n";
        queryProcedure += "/*6- cadastrando a sequencia da nova coluna*/\n";
        queryProcedure += "\t\t UPDATE  ADM_CAMPO_RELATORIO\n";
        queryProcedure += "\t\t SET 	NUM_SEQUENCIA =	decode(var_ColunaAnterior(i), '',\n";
        queryProcedure += "\t\t\t\t\t (\n";
        queryProcedure += "\t\t\t\t\t  SELECT\t\t max(CR.NUM_SEQUENCIA) +\n";
        1;
        queryProcedure += "\t\t\t\t\t  FROM\t\t\t ADM_RELATORIO R\n";
        queryProcedure += "\t\t\t\t\t  INNER JOIN 	CON_VISAO V 			ON V.CD_VISAO = R.CD_VISAO\n";
        queryProcedure += "\t\t\t\t\t  INNER JOIN 	CON_COLUNA_VISAO CV 	ON V.CD_VISAO = R.CD_VISAO\n";
        queryProcedure += "\t\t\t\t\t  INNER JOIN 	ADM_CAMPO_RELATORIO  CR ON (CR.CD_RELATORIO = R.CD_RELATORIO AND CR.CD_COLUNA_VISAO = CV.CD_COLUNA_VISAO)\n";
        queryProcedure += "\t\t\t\t\t  WHERE 1=1\n";
        queryProcedure += "\t\t\t\t\t  AND UPPER(V.DCR_NOME_FISICO) 		= v_NomeViewCubo\n";
        queryProcedure += "\t\t\t\t\t ),\n";
        queryProcedure += "\t\t\t\t\t (\n";
        queryProcedure += "\t\t\t\t\t  SELECT\t\t CR.NUM_SEQUENCIA + 1\n";
        queryProcedure += "\t\t\t\t\t  FROM\t\t\t ADM_RELATORIO R\n";
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
        queryProcedure += "\n";
        queryProcedure += "/*7- Loop para cadastrar as traduções*/\n";
        queryProcedure += "\t\t for f_Language in c_Language loop\n";
        queryProcedure += "\n";
        queryProcedure += "\t\t\t /*Idiomas em português*/\n";
        queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'PT' then            \n";
        queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeViewCubo || '.' || var_NovaColuna(i)), var_NovaTraducaoPt(i), 'S');        \n";
        queryProcedure += "\t\t\t end if;\n";
        queryProcedure += "\n";
        queryProcedure += "\t\t\t /*Idiomas em espanhol*/\n";
        queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'ES' then\n";
        queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeViewCubo || '.' || var_NovaColuna(i)), var_NovaTraducaoEs(i), 'S');  \n";
        queryProcedure += "\t\t\t end if;\n";
        queryProcedure += "\n";
        queryProcedure += "\t\t\t /*Idiomas em inglês*/\n";
        queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'EN' then\n";
        queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeViewCubo || '.' || var_NovaColuna(i)), var_NovaTraducaoEn(i), 'S');   \n";
        queryProcedure += "\t\t\t end if;\n";
        queryProcedure += "\n";
        queryProcedure += "\t\t\t /*Idiomas em chinês(ou inglês)*/\n";
        queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'ZH' then\n";
        queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeViewCubo || '.' || var_NovaColuna(i)), var_NovaTraducaoZh(i), 'S'); \n";
        queryProcedure += "\t\t\t end if;\n";
        queryProcedure += "\n";
        queryProcedure += "\t\t end loop;\n";
        queryProcedure += "/*7- Loop para cadastrar as traduções*/\n";
        queryProcedure += "\n";
        queryProcedure += "\t end loop;\n";
        queryProcedure += "/*2- Loop pelos campos novos do cubo*/\n";
        queryProcedure += "\n";
        query += queryDeclare + queryProcedure;
        if (form.value["getcommit"]) {
            query += "/*Salva as mudanças*/\n\t Commit;\n\n";
        }
        query += "End;";
        if (isCreated == "S") {
            this.scriptservice.setScript(query);
        }
        else {
            this.cleanScript();
        }
    }
    cleanScript() {
        this.scriptservice.cleanScript();
    }
};
EditcubeService.ctorParameters = () => [
    { type: _script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"] }
];
EditcubeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EditcubeService);



/***/ }),

/***/ "./src/app/export.service.ts":
/*!***********************************!*\
  !*** ./src/app/export.service.ts ***!
  \***********************************/
/*! exports provided: ExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportService", function() { return ExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ExportService = class ExportService {
    constructor() {
        this.setting = {
            element: {
                dynamicDownload: null
            }
        };
    }
    cleanMessage() {
        return '';
    }
    setMessageCopyClipBoard() {
        return 'Script has been copied to Clipboard';
    }
    setMessageDownload() {
        return 'The script is ready for download';
    }
    copyGeneratedScript(value) {
        this.generatedScript = value;
        let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.generatedScript;
        var divAtual = document.getElementById("divConteudo");
        var divText = document.getElementById("generatedScript");
        divAtual.insertBefore(selBox, divText);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
    }
    generateFileName() {
        var objToday = new Date();
        var dd = String(objToday.getDate()).padStart(2, '0');
        var mm = String(objToday.getMonth() + 1).padStart(2, '0');
        var yyyy = objToday.getFullYear();
        var hour = String(objToday.getHours() + 1).padStart(2, '0');
        var minute = String(objToday.getMinutes() + 1).padStart(2, '0');
        var second = String(objToday.getSeconds() + 1).padStart(2, '0');
        var today = yyyy + mm + dd + hour + minute + second;
        return today;
    }
    fakeValidateUserData(value) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value);
    }
    dynamicDownloadTxt(value) {
        this.fakeValidateUserData(value).subscribe((res) => {
            this.dyanmicDownloadByHtmlTag({
                fileName: 'delta-' + this.generateFileName() + '.sql',
                text: res
            });
        });
    }
    dyanmicDownloadByHtmlTag(arg) {
        if (!this.setting.element.dynamicDownload) {
            this.setting.element.dynamicDownload = document.createElement('a');
        }
        const element = this.setting.element.dynamicDownload;
        const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
        element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
        element.setAttribute('download', arg.fileName);
        var event = new MouseEvent("click");
        element.dispatchEvent(event);
    }
};
ExportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ExportService);



/***/ }),

/***/ "./src/app/generator.service.ts":
/*!**************************************!*\
  !*** ./src/app/generator.service.ts ***!
  \**************************************/
/*! exports provided: GeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorService", function() { return GeneratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dashboard_mock_generators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/mock-generators */ "./src/app/dashboard/mock-generators.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let GeneratorService = class GeneratorService {
    constructor() { }
    getGenerators() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_dashboard_mock_generators__WEBPACK_IMPORTED_MODULE_2__["GENERATORS"]);
    }
    // getGenerator(idx: number): Generator{
    //   return GENERATORS[idx];
    // }
    getGenerator(component) {
        for (let item of _dashboard_mock_generators__WEBPACK_IMPORTED_MODULE_2__["GENERATORS"]) {
            if (item.link == component) {
                return item;
            }
        }
        return null;
    }
};
GeneratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GeneratorService);



/***/ }),

/***/ "./src/app/modalscript/modalscript.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modalscript/modalscript.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .scriptarea{\r\n    width: 100%;\r\n    height: 500px;\r\n    resize: none;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.popupControlBox{\r\n    align-self: center;\r\n}\r\n\r\n.popupControlBox button{\r\n    margin: 0px 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzY3JpcHQvbW9kYWxzY3JpcHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztJQUNHLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQztJQUNHLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHNjcmlwdC9tb2RhbHNjcmlwdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5zY3JpcHRhcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnBvcHVwQ29udHJvbEJveHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuIC5wb3B1cENvbnRyb2xCb3ggYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modalscript/modalscript.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modalscript/modalscript.component.ts ***!
  \******************************************************/
/*! exports provided: ModalscriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalscriptComponent", function() { return ModalscriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _export_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../export.service */ "./src/app/export.service.ts");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../script.service */ "./src/app/script.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ModalscriptComponent = class ModalscriptComponent {
    constructor(appcomponent, scriptservice, exportService) {
        this.appcomponent = appcomponent;
        this.scriptservice = scriptservice;
        this.exportService = exportService;
        this.pageTitleModal = '';
        this.generatedScript = '';
        this.copyMessage = '';
        this.isMobileDevice = this.appcomponent.isMobileDevice;
        this.enableBtn = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(1000).subscribe(x => this.generatedScript = this.scriptservice.GetScript());
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(500).subscribe(y => this.enableBtn = (this.generatedScript == ''));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(7000).subscribe(y => this.checkMessage());
    }
    ngOnInit() {
        this.pageTitleModal = this.appcomponent.pageTitle;
    }
    openScript() {
        this.generatedScript = this.scriptservice.GetScript();
    }
    //######################
    copyGeneratedScript() {
        this.exportService.copyGeneratedScript(this.generatedScript);
        this.copyMessage = this.exportService.setMessageCopyClipBoard();
    }
    cleanMessage() {
        this.scriptservice.setScript(this.generatedScript);
        this.copyMessage = this.exportService.cleanMessage();
        this.enableBtn = this.generatedScript == '';
    }
    dynamicDownloadTxt() {
        this.exportService.dynamicDownloadTxt(this.generatedScript);
        this.copyMessage = this.exportService.setMessageDownload();
    }
    //######################
    checkMessage() {
        if (Boolean(this.copyMessage)) {
            this.copyMessage = this.exportService.cleanMessage();
        }
    }
};
ModalscriptComponent.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { type: _script_service__WEBPACK_IMPORTED_MODULE_4__["ScriptService"] },
    { type: _export_service__WEBPACK_IMPORTED_MODULE_3__["ExportService"] }
];
ModalscriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modalscript',
        template: __webpack_require__(/*! raw-loader!./modalscript.component.html */ "./node_modules/raw-loader/index.js!./src/app/modalscript/modalscript.component.html"),
        styles: [__webpack_require__(/*! ./modalscript.component.css */ "./src/app/modalscript/modalscript.component.css")]
    })
], ModalscriptComponent);



/***/ }),

/***/ "./src/app/newcube/newcube.component.css":
/*!***********************************************!*\
  !*** ./src/app/newcube/newcube.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld2N1YmUvbmV3Y3ViZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/newcube/newcube.component.ts":
/*!**********************************************!*\
  !*** ./src/app/newcube/newcube.component.ts ***!
  \**********************************************/
/*! exports provided: NewcubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcubeComponent", function() { return NewcubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generator.service */ "./src/app/generator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _newcube_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newcube.service */ "./src/app/newcube/newcube.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let NewcubeComponent = class NewcubeComponent {
    constructor(appcomponent, generatorservice, newcubeService, fb, renderer2, _document) {
        this.appcomponent = appcomponent;
        this.generatorservice = generatorservice;
        this.newcubeService = newcubeService;
        this.fb = fb;
        this.renderer2 = renderer2;
        this._document = _document;
        this.generatorList = this.generatorservice.getGenerator("/newcube");
        this.getCommit = true;
    }
    ngOnInit() {
        this.appcomponent.pageTitle = this.generatorList.name;
        this.appcomponent.showCard = true;
        this.newcubeService.cleanScript();
        this.form = this.fb.group({
            getcommit: [true],
            viewname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            visionname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            modulename: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            note: [null],
            setdefaultuser: [false],
            username: ['inflor01', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            setdefaultprofile: [true],
            profilename: ['TOTAL', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            column: this.fb.array([this.createColumnKey()])
        });
        this.columnList = this.form.get('column');
        const s = this.renderer2.createElement('script');
        s.type = 'text/javascript';
        s.src = './assets/script/scripts.js';
        this.renderer2.appendChild(this._document.body, s);
        this.appcomponent.cdrMethod();
    }
    //#########################################################################################
    createColumnKey() {
        return this.fb.group({
            columnname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            format: ['TX'],
            portuguese: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            english: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            spanish: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            columnbefore: [null]
        });
    }
    addColumn() {
        this.columnList.push(this.createColumnKey());
        this.generateScript();
    }
    removeColumn(index) {
        if (confirm("Are you sure to delete this column?")) {
            this.columnList.removeAt(index);
            this.generateScript();
        }
    }
    getColumnFormGroup(index) {
        const formGroup = this.columnList.controls[index];
        return formGroup;
    }
    get columnFormGroup() {
        return this.form.get('column');
    }
    //#########################################################################################
    generateScript() {
        this.newcubeService.generateScript(this.form, this.columnList);
    }
};
NewcubeComponent.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { type: _generator_service__WEBPACK_IMPORTED_MODULE_3__["GeneratorService"] },
    { type: _newcube_service__WEBPACK_IMPORTED_MODULE_5__["NewcubeService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
];
NewcubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newcube',
        template: __webpack_require__(/*! raw-loader!./newcube.component.html */ "./node_modules/raw-loader/index.js!./src/app/newcube/newcube.component.html"),
        styles: [__webpack_require__(/*! ./newcube.component.css */ "./src/app/newcube/newcube.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))
], NewcubeComponent);



/***/ }),

/***/ "./src/app/newcube/newcube.service.ts":
/*!********************************************!*\
  !*** ./src/app/newcube/newcube.service.ts ***!
  \********************************************/
/*! exports provided: NewcubeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcubeService", function() { return NewcubeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../script.service */ "./src/app/script.service.ts");



let NewcubeService = class NewcubeService {
    constructor(scriptservice) {
        this.scriptservice = scriptservice;
    }
    generateScript(form, columnList) {
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
        setDefaulProfile = (!form.value["setdefaultprofile"] || (form.value["setdefaultprofile"] && Boolean(form.value["profilename"])));
        setDefaultUser = (!form.value["setdefaultuser"] || (form.value["setdefaultuser"] && Boolean(form.value["username"])));
        for (let item of columnList.controls) {
            if (Boolean(form.value["viewname"]) &&
                Boolean(form.value["visionname"]) &&
                Boolean(form.value["modulename"]) &&
                Boolean(item.value["columnname"]) &&
                Boolean(item.value["format"]) &&
                setDefaulProfile &&
                setDefaultUser &&
                Boolean(item.value["portuguese"]) &&
                Boolean(item.value["spanish"]) &&
                Boolean(item.value["english"])) {
                listColumnName += "'" + item.value["columnname"] + "',";
                listColumnFormat += "'" + item.value["format"] + "',";
                listColumnPort += "'" + item.value["portuguese"] + "',";
                listColumnEngl += "'" + item.value["spanish"] + "',";
                listColumnSpan += "'" + item.value["english"] + "',";
                listColumnPrevious += "'" + (!Boolean(item.value["columnbefore"]) ? "" : item.value["columnbefore"]) + "',";
                isCreated = "S";
            }
            else {
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
        queryProcedure += "\n";
        queryProcedure += "/*Defini os valores das variáveis do cubo*/\n";
        queryProcedure += "\t v_NomeFisicoView := '" + form.value["viewname"] + "';\n";
        queryProcedure += "\t v_dcrVisao := '" + form.value["visionname"] + "';\n";
        queryProcedure += "\t v_dcrPrincipalModulo := '" + form.value["modulename"] + "';\n";
        queryProcedure += "\t v_dcrObservacao := '" + (!Boolean(form.value["note"]) ? "" : form.value["note"]) + "';\n";
        queryProcedure += "\t v_FlagAssociaPerfil := '" + (form.value["setdefaultprofile"] ? "S" : "N") + "';\n";
        queryProcedure += "\t v_NomePerfilAssoc := '" + form.value["profilename"] + "';\n";
        queryProcedure += "\t v_FlagAssociarUsuario := '" + (form.value["setdefaultuser"] ? "S" : "N") + "';\n";
        queryProcedure += "\t v_dcrLogin := '" + form.value["username"] + "';\n";
        queryProcedure += "\n";
        queryProcedure += "/*0- Verificar se existe a Visão cadastrada. 0=Cria a visão | 0<Atualiza a visão atual*/\n";
        queryProcedure += "\t select 	count(1)\n";
        queryProcedure += "\t into 	v_ExisteVisao\n";
        queryProcedure += "\t from 	con_visao\n";
        queryProcedure += "\t where 	upper(trim(dcr_nome_fisico)) = upper(trim(v_NomeFisicoView));\n";
        queryProcedure += "\n";
        queryProcedure += "\t if (v_ExisteVisao = 0) then\n";
        queryProcedure += "/*1- Insere a nova visão*/\n";
        queryProcedure += "\n";
        queryProcedure += "/*Cria a nova visão é o novo relatório cubo*/\n";
        queryProcedure += "\t\t PR_NOVA_VISAO_CUBO (p_dcr_nome_fisico\t\t\t=> v_NomeFisicoView,\n";
        queryProcedure += "\t\t\t\t\t\t\t p_dcr_visao\t\t\t\t=> v_dcrVisao,\n";
        queryProcedure += "\t\t\t\t\t\t\t p_dcr_principal_modulo\t\t=> v_dcrPrincipalModulo,\n";
        queryProcedure += "\t\t\t\t\t\t\t p_dcr_observacao\t\t\t=> v_dcrObservacao,\n";
        queryProcedure += "\t\t\t\t\t\t\t p_dcr_filtro_sql\t\t\t=> null,\n";
        queryProcedure += "\t\t\t\t\t\t\t p_flag_filtro_fornecedor\t\t=> 'N',\n";
        queryProcedure += "\t\t\t\t\t\t\t p_flag_filtro_unidade_gestao\t=> 'N');\n";
        queryProcedure += "\n";
        queryProcedure += "/*Define todas as colunas para serem visiveis no relatório*/\n";
        queryProcedure += "\t\t update adm_campo_relatorio\n";
        queryProcedure += "\t\t set\t flag_visivel = 'S'\n";
        queryProcedure += "\t\t where cd_relatorio = (select\t r.cd_relatorio\n";
        queryProcedure += "\t\t\t\t\t\t\t   from\t adm_relatorio r\n";
        queryProcedure += "\t\t\t\t\t\t\t   inner join con_visao v on v.cd_visao = r.cd_visao\n";
        queryProcedure += "\t\t\t\t\t\t\t   where\t v.dcr_nome_fisico = v_NomeFisicoView);\n";
        queryProcedure += "\n";
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
        queryProcedure += "\n";
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
        queryProcedure += "\n";
        queryProcedure += "/*1- Insere a nova visão*/\n";
        queryProcedure += "\t else\n";
        queryProcedure += "/*1- Atualiza estrutura do cubo*/\n\n";
        queryProcedure += "\t\t PR_ATUALIZA_ESTRUTURA_CUBO(v_NomeFisicoView); \n\n";
        queryProcedure += "/*1- Atualiza estrutura do cubo*/\n";
        queryProcedure += "\t end if;\n";
        queryProcedure += "/*0- Verificar se existe a Visão cadastrada. 0=Cria a visão | 0<Atualiza a visão atual*/\n";
        queryProcedure += "\n\n";
        queryProcedure += "/*2- Loop pelos campos novos do cubo*/\n";
        queryProcedure += "\t for i in 1..var_NovaColuna.count loop    \n";
        queryProcedure += "\n";
        queryProcedure += "/*Limpo a coluna de formato para o novo loop*/\n";
        queryProcedure += "\t\t v_FormatoColunaCubo := '';\n";
        queryProcedure += "\n";
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
        queryProcedure += "\n";
        queryProcedure += "/*4- define o formato da coluna*/\n";
        queryProcedure += "\t\t UPDATE CON_COLUNA_VISAO \n";
        queryProcedure += "\t\t SET DCR_FORMATO = v_FormatoColunaCubo \n";
        queryProcedure += "\t\t WHERE UPPER(DCR_CHAVE_TRADUCAO) = (v_NomeFisicoView || '.' || var_NovaColuna(i));        \n";
        queryProcedure += "/*4- define o formato da coluna*/\n";
        queryProcedure += "\n";
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
        queryProcedure += "\n";
        queryProcedure += "/*6- cadastrando a sequencia da nova coluna*/\n";
        queryProcedure += "\t\t UPDATE  ADM_CAMPO_RELATORIO\n";
        queryProcedure += "\t\t SET 	NUM_SEQUENCIA =	decode(var_ColunaAnterior(i), '',\n";
        queryProcedure += "\t\t\t\t\t (\n";
        queryProcedure += "\t\t\t\t\t  SELECT 	max(CR.NUM_SEQUENCIA) +\n";
        1;
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
        queryProcedure += "\n";
        queryProcedure += "/*7- Loop para cadastrar as traduções*/\n";
        queryProcedure += "\t\t for f_Language in c_Language loop\n";
        queryProcedure += "\n";
        queryProcedure += "\t\t\t /*Idiomas em português*/\n";
        queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'PT' then            \n";
        queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeFisicoView || '.' || var_NovaColuna(i)), var_NovaTraducaoPt(i), 'S');        \n";
        queryProcedure += "\t\t\t end if;\n";
        queryProcedure += "\n";
        queryProcedure += "\t\t\t /*Idiomas em espanhol*/\n";
        queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'ES' then\n";
        queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeFisicoView || '.' || var_NovaColuna(i)), var_NovaTraducaoEs(i), 'S');  \n";
        queryProcedure += "\t\t\t end if;\n";
        queryProcedure += "\n";
        queryProcedure += "\t\t\t /*Idiomas em inglês*/\n";
        queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'EN' then\n";
        queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeFisicoView || '.' || var_NovaColuna(i)), var_NovaTraducaoEn(i), 'S');   \n";
        queryProcedure += "\t\t\t end if;\n";
        queryProcedure += "\n";
        queryProcedure += "\t\t\t /*Idiomas em chinês(ou inglês)*/\n";
        queryProcedure += "\t\t\t if upper(SUBSTR(f_Language.cd_language, 1, 2)) = 'ZH' then\n";
        queryProcedure += "\t\t\t\t PR_ATUALIZA_INT_MESSAGE (f_Language.cd_language,(v_NomeFisicoView || '.' || var_NovaColuna(i)), var_NovaTraducaoZh(i), 'S'); \n";
        queryProcedure += "\t\t\t end if;\n";
        queryProcedure += "\n";
        queryProcedure += "\t\t end loop;\n";
        queryProcedure += "/*7- Loop para cadastrar as traduções*/\n";
        queryProcedure += "\n";
        queryProcedure += "\t end loop;\n";
        queryProcedure += "/*2- Loop pelos campos novos do cubo*/\n";
        queryProcedure += "\n";
        query += queryDeclare + queryProcedure;
        if (form.value["getcommit"]) {
            query += "/*Salva as mudanças*/\n\t Commit;\n\n";
        }
        query += "End;";
        if (isCreated == "S") {
            this.scriptservice.setScript(query);
        }
        else {
            this.cleanScript();
        }
    }
    cleanScript() {
        this.scriptservice.cleanScript();
    }
};
NewcubeService.ctorParameters = () => [
    { type: _script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"] }
];
NewcubeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NewcubeService);



/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generator.service */ "./src/app/generator.service.ts");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.service */ "./src/app/page/page.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let PageComponent = class PageComponent {
    constructor(appcomponent, generatorservice, pageservice, fb, renderer2, _document) {
        this.appcomponent = appcomponent;
        this.generatorservice = generatorservice;
        this.pageservice = pageservice;
        this.fb = fb;
        this.renderer2 = renderer2;
        this._document = _document;
        this.generatorList = this.generatorservice.getGenerator("/page");
    }
    ngOnInit() {
        this.appcomponent.pageTitle = this.generatorList.name;
        this.appcomponent.showCard = true;
        this.form = this.fb.group({
            getcommit: [true],
            page: this.fb.array([this.createPage()])
        });
        this.pageList = this.form.get('page');
        const s = this.renderer2.createElement('script');
        s.type = 'text/javascript';
        s.src = './assets/script/scripts.js';
        this.renderer2.appendChild(this._document.body, s);
        this.appcomponent.cdrMethod();
    }
    //#########################################################################################
    createPage() {
        return this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            url: [null],
            icon: [null],
            abbrev: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            namespace: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ismenu: ["S"],
            pagetype: ["T"],
            ordernum: [null],
            portuguese: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            english: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            spanish: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            force: ['N']
        });
    }
    addPage() {
        this.pageList.push(this.createPage());
        this.generateScript();
    }
    removePage(index) {
        if (confirm("Are you sure to delete this " + this.generatorList.name + "?")) {
            this.pageList.removeAt(index);
            this.generateScript();
        }
    }
    getPageFormGroup(index) {
        const formGroup = this.pageList.controls[index];
        return formGroup;
    }
    get pageFormGroup() {
        return this.form.get('page');
    }
    //#########################################################################################
    generateScript() {
        this.pageservice.generateScript(this.form, this.pageList);
    }
};
PageComponent.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { type: _generator_service__WEBPACK_IMPORTED_MODULE_3__["GeneratorService"] },
    { type: _page_service__WEBPACK_IMPORTED_MODULE_4__["PageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
];
PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page',
        template: __webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/index.js!./src/app/page/page.component.html"),
        styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))
], PageComponent);



/***/ }),

/***/ "./src/app/page/page.service.ts":
/*!**************************************!*\
  !*** ./src/app/page/page.service.ts ***!
  \**************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../script.service */ "./src/app/script.service.ts");



let PageService = class PageService {
    constructor(scriptservice) {
        this.scriptservice = scriptservice;
    }
    generateScript(form, pageList) {
        let languages = ['pt-BR', 'pt-PT', 'en-US', 'en-GB', 'es-UY', 'zh-CN'];
        var query = "";
        var isCreated = "N";
        var queryProcedure = "";
        var queryTranducao = "";
        query += "Begin\n\n";
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
                queryProcedure += "\t\t\t\t\t\t\t P_DCR_PATH_ICONE\t=> '" + (!Boolean(item.value["icon"]) ? "" : item.value["icon"]) + "'\n";
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
                        case 'en':
                        case 'zh':
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
                isCreated = "S";
            }
            else {
                isCreated = "N";
            }
        }
        query += queryProcedure;
        if (form.value["getcommit"]) {
            query += "\t Commit;\n\n";
        }
        query += "End;";
        if (isCreated == "S") {
            this.scriptservice.setScript(query);
        }
        else {
            this.cleanScript();
        }
    }
    cleanScript() {
        this.scriptservice.cleanScript();
    }
};
PageService.ctorParameters = () => [
    { type: _script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"] }
];
PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PageService);



/***/ }),

/***/ "./src/app/parameter/parameter.component.css":
/*!***************************************************!*\
  !*** ./src/app/parameter/parameter.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmFtZXRlci9wYXJhbWV0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/parameter/parameter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/parameter/parameter.component.ts ***!
  \**************************************************/
/*! exports provided: ParameterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return ParameterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generator.service */ "./src/app/generator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _parameter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameter.service */ "./src/app/parameter/parameter.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let ParameterComponent = class ParameterComponent {
    constructor(appcomponent, generatorservice, parameterservice, fb, renderer2, _document) {
        this.appcomponent = appcomponent;
        this.generatorservice = generatorservice;
        this.parameterservice = parameterservice;
        this.fb = fb;
        this.renderer2 = renderer2;
        this._document = _document;
        this.generatorList = this.generatorservice.getGenerator("/parameter");
    }
    ngOnInit() {
        this.appcomponent.pageTitle = this.generatorList.name;
        this.appcomponent.showCard = true;
        this.parameterservice.cleanScript();
        this.form = this.fb.group({
            getcommit: [true],
            parameter: this.fb.array([this.createParameter()])
        });
        this.parameterList = this.form.get('parameter');
        const s = this.renderer2.createElement('script');
        s.src = './assets/script/scripts.js';
        this.renderer2.appendChild(this._document.body, s);
        this.appcomponent.cdrMethod();
    }
    //#########################################################################################
    createParameter() {
        return this.fb.group({
            parameter: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            observation: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            isreviewed: [true],
            globalparameter: [false]
        });
    }
    addParameter() {
        this.parameterList.push(this.createParameter());
        this.generateScript();
    }
    removeParameter(index) {
        if (confirm("Are you sure to delete this " + this.generatorList.name + "?")) {
            this.parameterList.removeAt(index);
            this.generateScript();
        }
    }
    getParameterFormGroup(index) {
        const formGroup = this.parameterList.controls[index];
        return formGroup;
    }
    get parameterFormGroup() {
        return this.form.get('parameter');
    }
    //#########################################################################################
    generateScript() {
        this.parameterservice.generateScript(this.form, this.parameterList);
    }
};
ParameterComponent.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { type: _generator_service__WEBPACK_IMPORTED_MODULE_3__["GeneratorService"] },
    { type: _parameter_service__WEBPACK_IMPORTED_MODULE_5__["ParameterService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
];
ParameterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parameter',
        template: __webpack_require__(/*! raw-loader!./parameter.component.html */ "./node_modules/raw-loader/index.js!./src/app/parameter/parameter.component.html"),
        styles: [__webpack_require__(/*! ./parameter.component.css */ "./src/app/parameter/parameter.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))
], ParameterComponent);



/***/ }),

/***/ "./src/app/parameter/parameter.service.ts":
/*!************************************************!*\
  !*** ./src/app/parameter/parameter.service.ts ***!
  \************************************************/
/*! exports provided: ParameterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterService", function() { return ParameterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../script.service */ "./src/app/script.service.ts");



let ParameterService = class ParameterService {
    constructor(scriptservice) {
        this.scriptservice = scriptservice;
    }
    generateScript(form, translateList) {
        var queryProcedure = "\t /*Parametro*/\n";
        var queryUpdate = "\t /*Revisa os registros*/\n";
        var query = "";
        var isGlobal = 'N';
        var isReviewed = 'P';
        var isCreated = "N";
        query += "Begin\n\n";
        for (let item of translateList.controls) {
            if (item.value["parameter"] != null &&
                item.value["value"] != null &&
                item.value["observation"] != null) {
                if (item.value["globalparameter"]) {
                    isGlobal = "S";
                }
                else {
                    isGlobal = "N";
                }
                queryProcedure += "\t PR_INSERE_SIS_PARAMETRO('" + item.value["parameter"] + "', '" + item.value["value"] + "', '" + item.value["observation"] + "', '" + isGlobal + "'); \n";
                if (item.value["isreviewed"] != null && item.value["isreviewed"] == true) {
                    queryUpdate += "\t UPDATE SIS_PARAMETRO SET TIP_REG = '" + isReviewed + "' WHERE DCR_PARAMETRO = '" + item.value["parameter"] + "';";
                    queryUpdate += "\n";
                }
                isCreated = "S";
            }
            else {
                isCreated = "N";
            }
        }
        query += queryProcedure + "\n" + queryUpdate + "\n";
        if (form.value["getcommit"]) {
            query += "\t Commit;\n\n";
        }
        query += "End;";
        if (isCreated == "S") {
            this.scriptservice.setScript(query);
        }
        else {
            this.cleanScript();
        }
    }
    cleanScript() {
        this.scriptservice.cleanScript();
    }
};
ParameterService.ctorParameters = () => [
    { type: _script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"] }
];
ParameterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ParameterService);



/***/ }),

/***/ "./src/app/script.service.ts":
/*!***********************************!*\
  !*** ./src/app/script.service.ts ***!
  \***********************************/
/*! exports provided: ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScriptService = class ScriptService {
    constructor() {
        this.script = '';
    }
    GetScript() {
        return this.script;
    }
    setScript(value) {
        this.script = value;
    }
    cleanScript() {
        this.script = '';
    }
};
ScriptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScriptService);



/***/ }),

/***/ "./src/app/translator/translator.component.css":
/*!*****************************************************!*\
  !*** ./src/app/translator/translator.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zbGF0b3IvdHJhbnNsYXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/translator/translator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/translator/translator.component.ts ***!
  \****************************************************/
/*! exports provided: TranslatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatorComponent", function() { return TranslatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generator.service */ "./src/app/generator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _translator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translator.service */ "./src/app/translator/translator.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let TranslatorComponent = class TranslatorComponent {
    constructor(appcomponent, generatorservice, translatorservice, fb, renderer2, _document) {
        this.appcomponent = appcomponent;
        this.generatorservice = generatorservice;
        this.translatorservice = translatorservice;
        this.fb = fb;
        this.renderer2 = renderer2;
        this._document = _document;
        this.generatorList = this.generatorservice.getGenerator("/translator");
        this.getCommit = true;
        this.getBeginEnd = true;
    }
    ngOnInit() {
        this.appcomponent.pageTitle = this.generatorList.name;
        this.appcomponent.showCard = true;
        this.translatorservice.cleanScript();
        this.form = this.fb.group({
            getcommit: [true],
            getbeginend: [true],
            translateKeys: this.fb.array([this.createTranslateKey()])
        });
        this.translateList = this.form.get('translateKeys');
        const s = this.renderer2.createElement('script');
        s.type = 'text/javascript';
        s.src = './assets/script/scripts.js';
        this.renderer2.appendChild(this._document.body, s);
        this.appcomponent.cdrMethod();
    }
    //#########################################################################################
    createTranslateKey() {
        return this.fb.group({
            key: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            force: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            portuguese: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            english: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            spanish: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
    }
    //Pega todos os arrays
    get translateFormGroup() {
        return this.form.get('translateKeys');
    }
    addTranslatorKey() {
        this.translateList.push(this.createTranslateKey());
        this.generateScript();
    }
    removeTranslateKey(index) {
        if (confirm("Are you sure to delete this " + this.generatorList.name + "?")) {
            this.translateList.removeAt(index);
            this.generateScript();
        }
    }
    getTranslateFormGroup(index) {
        const formGroup = this.translateList.controls[index];
        return formGroup;
    }
    //#########################################################################################
    generateScript() {
        this.translatorservice.generateScript(this.form, this.translateList);
    }
};
TranslatorComponent.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { type: _generator_service__WEBPACK_IMPORTED_MODULE_3__["GeneratorService"] },
    { type: _translator_service__WEBPACK_IMPORTED_MODULE_5__["TranslatorService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
];
TranslatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-translator',
        template: __webpack_require__(/*! raw-loader!./translator.component.html */ "./node_modules/raw-loader/index.js!./src/app/translator/translator.component.html"),
        styles: [__webpack_require__(/*! ./translator.component.css */ "./src/app/translator/translator.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))
], TranslatorComponent);



/***/ }),

/***/ "./src/app/translator/translator.service.ts":
/*!**************************************************!*\
  !*** ./src/app/translator/translator.service.ts ***!
  \**************************************************/
/*! exports provided: TranslatorService, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatorService", function() { return TranslatorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../script.service */ "./src/app/script.service.ts");




let TranslatorService = class TranslatorService {
    constructor(scriptservice) {
        this.scriptservice = scriptservice;
    }
    generateScript(form, translateList) {
        var query = "";
        var isForce = "S";
        var isCreated = "N";
        if (form.value["getbeginend"]) {
            query += "Begin\n\n";
        }
        for (let item of translateList.controls) {
            if (Boolean(item.value["key"]) &&
                Boolean(item.value["portuguese"]) &&
                Boolean(item.value["english"]) &&
                Boolean(item.value["spanish"])) {
                if (item.value["force"]) {
                    isForce = "S";
                }
                else {
                    isForce = "N";
                }
                query += "\tPR_ATUALIZA_INT_MESSAGE('pt-BR', '" + item.value["key"] + "', '" + item.value["portuguese"] + "', '" + isForce + "'); \n";
                query += "\tPR_ATUALIZA_INT_MESSAGE('pt-PT', '" + item.value["key"] + "', '" + item.value["portuguese"] + "', '" + isForce + "'); \n";
                query += "\tPR_ATUALIZA_INT_MESSAGE('en-GB', '" + item.value["key"] + "', '" + item.value["english"] + "', '" + isForce + "'); \n";
                query += "\tPR_ATUALIZA_INT_MESSAGE('en-US', '" + item.value["key"] + "', '" + item.value["english"] + "', '" + isForce + "'); \n";
                query += "\tPR_ATUALIZA_INT_MESSAGE('zh-CN', '" + item.value["key"] + "', '" + item.value["english"] + "', '" + isForce + "'); \n";
                query += "\tPR_ATUALIZA_INT_MESSAGE('es-UY', '" + item.value["key"] + "', '" + item.value["spanish"] + "', '" + isForce + "'); \n";
                query += "\n";
                isCreated = "S";
            }
            else {
                isCreated = "N";
            }
        }
        if (form.value["getcommit"]) {
            query += "\tCommit;\n\n";
        }
        if (form.value["getbeginend"]) {
            query += "End;";
        }
        if (isCreated == "S") {
            this.scriptservice.setScript(query);
        }
        else {
            this.cleanScript();
        }
    }
    cleanScript() {
        this.scriptservice.cleanScript();
    }
    /*###################################################################################*/
    createTranslate(fb) {
        return fb.group({
            portuguese: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            english: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            spanish: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
};
TranslatorService.ctorParameters = () => [
    { type: _script_service__WEBPACK_IMPORTED_MODULE_3__["ScriptService"] }
];
TranslatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TranslatorService);

var language;
(function (language) {
    language["portugueseBR"] = "pt-BR";
    language["portuguesePT"] = "pt-PT";
    language["englishUS"] = "en-US";
    language["englishGB"] = "en-GB";
    language["spanish"] = "es-UY";
    language["chinese"] = "zh-CN";
})(language || (language = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projetos\ScriptGenerator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map