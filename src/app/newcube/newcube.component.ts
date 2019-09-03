import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GeneratorService } from '../generator.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewcubeService } from './newcube.service';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-newcube',
  templateUrl: './newcube.component.html',
  styleUrls: ['./newcube.component.css']
})
export class NewcubeComponent implements OnInit {
  public form: FormGroup;
  public columnList: FormArray; 

  constructor(
    private appcomponent: AppComponent,
    private generatorservice: GeneratorService,
    private newcubeService: NewcubeService,
    private fb: FormBuilder,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) { }

  generatorList = this.generatorservice.getGenerator("/newcube");
  getCommit: boolean = true;

  ngOnInit() {
    this.appcomponent.pageTitle = this.generatorList.name;
    this.appcomponent.showCard = true;
    this.newcubeService.cleanScript();

    this.form = this.fb.group({
      getcommit: [true],
      viewname: [null, Validators.compose([Validators.required])],
      visionname: [null, Validators.compose([Validators.required])],
      modulename: [null, Validators.compose([Validators.required])],
      note: [null],
      setdefaultuser: [false],
      username: ['inflor01', Validators.compose([Validators.required])],
      setdefaultprofile: [true],
      profilename: ['TOTAL', Validators.compose([Validators.required])],
      column: this.fb.array([this.createColumnKey()])
    });

    this.columnList = this.form.get('column') as FormArray;

    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = './assets/script/scripts.js';
    this.renderer2.appendChild(this._document.body, s);

    this.appcomponent.cdrMethod();
  }

  //#########################################################################################

  createColumnKey(): FormGroup {
    return this.fb.group({
      columnname: [null, Validators.compose([Validators.required])],
      format: ['TX'],
      portuguese: [null, Validators.compose([Validators.required])],
      english: [null, Validators.compose([Validators.required])],
      spanish: [null, Validators.compose([Validators.required])],
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

  getColumnFormGroup(index): FormGroup {
    const formGroup = this.columnList.controls[index] as FormGroup;
    return formGroup;
  }

  get columnFormGroup() {
    return this.form.get('column') as FormArray;
  }

  //#########################################################################################

  generateScript() {
    this.newcubeService.generateScript(this.form, this.columnList);
  }

}
