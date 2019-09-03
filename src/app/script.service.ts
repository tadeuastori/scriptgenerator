import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  constructor() { }

  private script: string = '';
  
  GetScript(): string{
    return this.script;
  }

  setScript(value: string){
    this.script = value;
  }

  cleanScript(){
    this.script = '';
  }

}
