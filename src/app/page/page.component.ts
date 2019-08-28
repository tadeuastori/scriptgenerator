import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GeneratorService } from '../generator.service';
import { PageService } from './page.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private fb: FormBuilder
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
      ordernum: [null]
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
