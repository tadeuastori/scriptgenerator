import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GeneratorService } from '../generator.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslatorService } from './translator.service';

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
    private fb: FormBuilder
  ) { }

  generatorList = this.generatorservice.getGenerator("/translator");
  getCommit: boolean = true;
  getBeginEnd: boolean = true;

  ngOnInit() {
    this.appcomponent.pageTitle = this.generatorList.name;
    this.appcomponent.appVersion = this.generatorList.version;
    this.appcomponent.showCard = true;
    this.translatorservice.cleanScript();

    this.form = this.fb.group({
      getcommit: [true],
      getbeginend: [true],
      translateKeys: this.fb.array([this.createTranslateKey()])
    });

    this.translateList = this.form.get('translateKeys') as FormArray;

    this.appcomponent.cdrMethod();

    
  }


  //#########################################################################################

  createTranslateKey(): FormGroup{
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

  addTranslatorKey(){
    this.translateList.push(this.createTranslateKey());
    this.generateScript();
  }

  removeTranslateKey(index){
    this.translateList.removeAt(index);
    this.generateScript();
  }  

  getTranslateFormGroup(index): FormGroup {
    const formGroup = this.translateList.controls[index] as FormGroup;
    return formGroup;
  }

//#########################################################################################

  generateScript(){
    this.translatorservice.generateScript(this.form, this.translateList);
  }
  
}
