import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GeneratorService } from '../generator.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunctioncontrolService } from './functioncontrol.service';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-functioncontrol',
  templateUrl: './functioncontrol.component.html',
  styleUrls: ['./functioncontrol.component.css']
})
export class FunctioncontrolComponent implements OnInit {
  public form: FormGroup;
  public functioncontrolList: FormArray;  

  constructor(
    private appcomponent: AppComponent,
    private generatorservice: GeneratorService,
    private functioncontrolservice: FunctioncontrolService,
    private fb: FormBuilder,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) { }

  generatorList = this.generatorservice.getGenerator("/functioncontrol");
  getCommit: boolean = true;
  getBeginEnd: boolean = true;

  ngOnInit() {
    this.appcomponent.pageTitle = this.generatorList.name;
    this.appcomponent.showCard = true;
    this.functioncontrolservice.cleanScript();

    this.form = this.fb.group({
      getcommit: [true],
      functioncontrol: this.fb.array([this.createFunctionControl()])
    });

    this.functioncontrolList = this.form.get('functioncontrol') as FormArray;

    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = './assets/script/scripts.js';
    this.renderer2.appendChild(this._document.body, s);

    this.appcomponent.cdrMethod();
  }

  //#########################################################################################

  createFunctionControl(): FormGroup{
    return this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      abbrev: [null, Validators.compose([Validators.required])],
      idcontrol: [null, Validators.compose([Validators.required])],
      tipprocess: [null]
    });
  }

  addFunctionControl() {
    this.functioncontrolList.push(this.createFunctionControl());
    this.generateScript();
  }

  removeFunctionControl(index) {
    if (confirm("Are you sure to delete this " + this.generatorList.name + "?")) {
      this.functioncontrolList.removeAt(index);
      this.generateScript();
    }
  }

  getFunctionControlFormGroup(index): FormGroup {
    const formGroup = this.functioncontrolList.controls[index] as FormGroup;
    return formGroup;
  }

  get functionControlFormGroup() {
    return this.form.get('functioncontrol') as FormArray;
  }

    //#########################################################################################

    generateScript() {
      this.functioncontrolservice.generateScript(this.form, this.functioncontrolList);
    }

}
