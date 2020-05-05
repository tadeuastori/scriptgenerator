import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GeneratorService } from '../generator.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExitService } from './exit.service';

import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {
  public form: FormGroup;
  public exitList: FormArray;

  constructor(
    private appcomponent: AppComponent,
    private generatorservice: GeneratorService,
    private exitservice: ExitService,
    private fb: FormBuilder,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) { }

  generatorList = this.generatorservice.getGenerator("/exit");
  labelSwitch: string = 'Delete Current Interaction';

  ngOnInit() {
    this.appcomponent.pageTitle = this.generatorList.name;
    this.appcomponent.showCard = true;
    this.exitservice.cleanScript();

    this.form = this.fb.group({
      getcommit: [true],
      exit: this.fb.array([this.createExit()])
    });

    this.exitList = this.form.get('exit') as FormArray;

    const s = this.renderer2.createElement('script');
    s.src = './assets/script/scripts.js';
    this.renderer2.appendChild(this._document.body, s);

    this.appcomponent.cdrMethod();
  }

  //#########################################################################################

  createExit(): FormGroup {
    return this.fb.group({
      
      exitId: [null, Validators.compose([Validators.required])],
      exitDescription: [null, Validators.compose([Validators.required])],
      exitObservation: [null, Validators.compose([Validators.required])],
      
      interactionSequence: [null, Validators.compose([Validators.required])],
      interactionDescription: [null, Validators.compose([Validators.required])],
      interactionScript: [null, Validators.compose([Validators.required])],

    });
  }

  // addParameter() {
  //   this.exitList.push(this.createParameter());
  //   this.generateScript();
  // }

  removeExit(index) {
    if (confirm("Are you sure to delete this " + this.generatorList.name + "?")) {
      this.exitList.removeAt(index);
      this.generateScript();
    }
  }

  getExitFormGroup(index): FormGroup {
    const formGroup = this.exitList.controls[index] as FormGroup;
    return formGroup;
  }

  get exitFormGroup() {
    return this.form.get('exit') as FormArray;
  }

  //#########################################################################################

  generateScript() {
    console.log(this.exitList.value);
    this.exitservice.generateScript(this.form, this.exitList);
  }

  switchScript() {

    if (this.labelSwitch == 'Delete Current Interaction') {
      this.labelSwitch = 'Update Current Interaction'
    } else {
      this.labelSwitch = 'Delete Current Interaction'
    }

  }

}
