import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  constructor() { }

  public abaFirstName: string = "Script Generated";
  public abaSecondName: string = "Alternative Script Generated";
  public fileFirstName: string = "";
  public fileSecondName: string = "";

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

    this.abaFirstName = "Script Generated";
    this.abaSecondName = "Alternative Script Generated";
    this.fileFirstName = "";
    this.fileSecondName = "";
  }
}
