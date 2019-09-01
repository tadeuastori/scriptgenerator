import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GeneratorService } from '../generator.service';
import { PageService } from './page.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public form: FormGroup;
  public pageList: FormArray;

  constructor(
    private appcomponent: AppComponent,
    private generatorservice: GeneratorService,
    private pageservice: PageService,
    private fb: FormBuilder,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) { }

  generatorList = this.generatorservice.getGenerator("/page");

  ngOnInit() {
    this.appcomponent.pageTitle = this.generatorList.name;
    this.appcomponent.appVersion = this.generatorList.version;
    this.appcomponent.showCard = true;

    this.form = this.fb.group({
      getcommit: [true],
      page: this.fb.array([this.createPage()])
    });

    this.pageList = this.form.get('page') as FormArray;

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

  createPage(): FormGroup {
    return this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      url: [null],
      icon: [null],
      abbrev: [null, Validators.compose([Validators.required])],
      namespace: [null, Validators.compose([Validators.required])],
      ismenu: ["S"],
      pagetype: ["T"],
      ordernum: [null],
      portuguese: [null, Validators.compose([Validators.required])],
      english: [null, Validators.compose([Validators.required])],
      spanish: [null, Validators.compose([Validators.required])],
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

  getPageFormGroup(index): FormGroup {
    const formGroup = this.pageList.controls[index] as FormGroup;
    return formGroup;
  }

  get pageFormGroup() {
    return this.form.get('page') as FormArray;
  }

  //#########################################################################################

  generateScript() {
    this.pageservice.generateScript(this.form, this.pageList);
  }

}
