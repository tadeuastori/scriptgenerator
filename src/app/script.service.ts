import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  constructor() { }

  private script: string = '';
  private alternativeScript: string = '';
  
  GetScript(): string{
    return this.script;
  }

  GetAlternativeScript(): string{
    return this.alternativeScript;
  }

  setScript(value: string){
    this.script = value;
  }

  setAlternativeScript(value: string){
    this.alternativeScript = value;
  }

  cleanScript(){
    this.script = '';
    this.alternativeScript = '';
  }
}
