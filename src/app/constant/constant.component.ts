import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GeneratorService } from '../generator.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantService } from './constant.service';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-constante',
  templateUrl: './constant.component.html',
  styleUrls: ['./constant.component.css']
})
export class ConstantComponent implements OnInit {
  public form: FormGroup;
  public constantList: FormArray;  
  
  constructor(
    private appcomponent: AppComponent,
    private generatorservice: GeneratorService,
    private constantservice: ConstantService,
    private fb: FormBuilder,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) { }  

  generatorList = this.generatorservice.getGenerator("/constant");
  getCommit: boolean = true;
  getBeginEnd: boolean = true;

  ngOnInit() {
    this.appcomponent.pageTitle = this.generatorList.name;
    this.appcomponent.appVersion = this.generatorList.version;
    this.appcomponent.showCard = true;
    this.constantservice.cleanScript();

    this.form = this.fb.group({
      getcommit: [true],
      getbeginend: [true],
      constant: this.fb.array([this.createConstantKey()])
    });

    this.constantList = this.form.get('constant') as FormArray;

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

  createConstantKey(): FormGroup{
    return this.fb.group({
      subquery: [null, Validators.compose([Validators.required])],
      constant: [null, Validators.compose([Validators.required])],
      table: [null, Validators.compose([Validators.required])],
      column: [null, Validators.compose([Validators.required])],
      value: [null, Validators.compose([Validators.required])],
      observation: [null, Validators.compose([Validators.required])],
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

  getConstantFormGroup(index): FormGroup {
    const formGroup = this.constantList.controls[index] as FormGroup;
    return formGroup;
  }

  get constantFormGroup() {
    return this.form.get('constant') as FormArray;
  }

    //#########################################################################################

    generateScript() {
      this.constantservice.generateScript(this.form, this.constantList);
    }
}
