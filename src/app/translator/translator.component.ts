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
    if (confirm("Are you sure to delete this " + this.generatorList.name + "?")) {
      this.translateList.removeAt(index);
      this.generateScript();
    }
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
