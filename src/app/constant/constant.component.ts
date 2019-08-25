import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GeneratorService } from '../generator.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantService } from './constant.service';


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
    private fb: FormBuilder
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
    this.constantList.removeAt(index);
    this.generateScript();
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
