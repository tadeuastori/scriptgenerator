import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GeneratorService } from '../generator.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParameterService } from './parameter.service';

import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {
  public form: FormGroup;
  public parameterList: FormArray;

  constructor(
    private appcomponent: AppComponent,
    private generatorservice: GeneratorService,
    private parameterservice: ParameterService,
    private fb: FormBuilder,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) { }

  generatorList = this.generatorservice.getGenerator("/parameter");

  ngOnInit() {
    this.appcomponent.pageTitle = this.generatorList.name;
    this.appcomponent.appVersion = this.generatorList.version;
    this.appcomponent.showCard = true;
    this.parameterservice.cleanScript();

    this.form = this.fb.group({
      getcommit: [true],
      getbeginend: [true],
      parameter: this.fb.array([this.createParameter()])
    });

    this.parameterList = this.form.get('parameter') as FormArray;

    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    //  s.src = 'https://path/to/your/script';
    s.text = 'window.onscroll = function () { myFunction() }; \n'
    s.text += 'var header = document.getElementById("formHeader"); \n'
    s.text += 'var sticky = header.offsetTop+48; \n'
    s.text += 'function myFunction() { \n'
    s.text += '    if (window.pageYOffset > sticky) {\n'
    s.text += '        header.classList.add("sticky"); \n'
    s.text += '    } else { \n' 
    s.text += '        header.classList.remove("sticky"); \n'
    s.text += '    } \n'
    s.text += '} \n';
    this.renderer2.appendChild(this._document.body, s);

    this.appcomponent.cdrMethod();
  }

  //#########################################################################################

  createParameter(): FormGroup {
    return this.fb.group({
      parameter: [null, Validators.compose([Validators.required])],
      value: [null, Validators.compose([Validators.required])],
      observation: [null, Validators.compose([Validators.required])],
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

  getParameterFormGroup(index): FormGroup {
    const formGroup = this.parameterList.controls[index] as FormGroup;
    return formGroup;
  }

  get parameterFormGroup() {
    return this.form.get('parameter') as FormArray;
  }

  //#########################################################################################

  generateScript() {
    this.parameterservice.generateScript(this.form, this.parameterList);
  }

}
