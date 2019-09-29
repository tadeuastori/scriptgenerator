import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GeneratorService } from '../generator.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslatorService } from './translator.service';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {
  public form: FormGroup;
  public translateList: FormArray;

  constructor(
    private appcomponent: AppComponent,
    private generatorservice: GeneratorService,
    private translatorservice: TranslatorService,
    private fb: FormBuilder,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) { }

  generatorList = this.generatorservice.getGenerator("/translator");
  getCommit: boolean = true;
  getBeginEnd: boolean = true;
  pasteKeyScript: string = '';
  labelSwitch: string = 'Standard Script';

  ngOnInit() {
    this.appcomponent.pageTitle = this.generatorList.name;
    this.appcomponent.showCard = true;
    this.translatorservice.cleanScript();

    this.form = this.fb.group({
      getcommit: [true],
      getbeginend: [true],
      typeScript: [true],
      translateKeys: this.fb.array([this.createTranslateKey()])
    });

    this.translateList = this.form.get('translateKeys') as FormArray;

    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = './assets/script/scripts.js';
    this.renderer2.appendChild(this._document.body, s);

    this.appcomponent.cdrMethod();
  }


  //#########################################################################################

  createTranslateKey(): FormGroup {
    return this.fb.group({
      key: [null, Validators.compose([Validators.required])],
      force: [true, Validators.compose([Validators.required])],
      portuguese: [null, Validators.compose([Validators.required])],
      english: [null, Validators.compose([Validators.required])],
      spanish: [null, Validators.compose([Validators.required])]
    });
  }

  //Pega todos os arrays
  get translateFormGroup() {
    return this.form.get('translateKeys') as FormArray;
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

  getTranslateFormGroup(index): FormGroup {
    const formGroup = this.translateList.controls[index] as FormGroup;
    return formGroup;
  }


  addMultiKeys() {

    var countLoop = 0;

    for (let item of this.translateList.controls){

      if (!Boolean(item.value["key"])){

        if (confirm("The position ["+countLoop+"] has no KEY. Are you sure to delete this " + this.generatorList.name + "?")) {
          this.translateList.removeAt(countLoop);
          this.generateScript();
        }

      }
      
      countLoop++;
    }

    var key;
    var arrayKey: Array<string> = this.pasteKeyScript.split("\n");

    for (var index in arrayKey) {

      var arrayField: Array<string> = arrayKey[index].split(";");

      if (Boolean(arrayKey[index])) {

        key = this.fb.group({
          key: [(Boolean(arrayField[0]) ? arrayField[0] : null), Validators.compose([Validators.required])],
          force: [true, Validators.compose([Validators.required])],
          portuguese: [(Boolean(arrayField[1]) ? arrayField[1] : null), Validators.compose([Validators.required])],
          english: [(Boolean(arrayField[2]) ? arrayField[2] : null), Validators.compose([Validators.required])],
          spanish: [(Boolean(arrayField[3]) ? arrayField[3] : null), Validators.compose([Validators.required])]
        });

        this.translateList.push(key);
      }

    }

    this.generateScript();
    this.pasteKeyScript = "";
  }



  //#########################################################################################

  generateScript() {
    this.translatorservice.generateScript(this.form, this.translateList);
  }

  switchScript() {

    if (this.labelSwitch == 'Standard Script') {
      this.labelSwitch = 'Enterprise Script'
    } else {
      this.labelSwitch = 'Standard Script'
    }

  }

  checkTypeScript(index): boolean {

    var vlrReturn = this.form.controls['typeScript'].value;

    if(!vlrReturn){

      vlrReturn = !(Boolean(this.getTranslateFormGroup(index).controls['portuguese'].value) ||
                   Boolean(this.getTranslateFormGroup(index).controls['english'].value) ||
                   Boolean(this.getTranslateFormGroup(index).controls['spanish'].value));


    }

    return vlrReturn;
  }


}
