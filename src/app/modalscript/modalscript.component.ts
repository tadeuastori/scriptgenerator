import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ExportService } from '../export.service';
import { ScriptService } from '../script.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-modalscript',
  templateUrl: './modalscript.component.html',
  styleUrls: ['./modalscript.component.css']
})
export class ModalscriptComponent implements OnInit {

  constructor(private appcomponent: AppComponent,
    private scriptservice: ScriptService,
    private exportService: ExportService) {
    interval(500).subscribe(x => {this.openScript(), this.checkAba(), this.enableBtn = !Boolean(this.generatedScript)});
    interval(7000).subscribe(y => {this.checkMessage()});
  }

  pageTitleModal: string = '';
  generatedScript: string = '';
  alternativeGeneratedScript: string = '';
  copyMessage: string = '';
  isMobileDevice: boolean = this.appcomponent.isMobileDevice;
  enableBtn: boolean = true;
  navActive: string = "1";
  enableAba: boolean = false;

  ngOnInit() {
    this.pageTitleModal = this.appcomponent.pageTitle;
  }

  openScript(): void {
    this.generatedScript = this.scriptservice.GetScript();
    this.alternativeGeneratedScript = this.scriptservice.GetAlternativeScript();
  }

  //######################

  copyGeneratedScript(): void {
    if(this.navActive == "1"){
      this.exportService.copyGeneratedScript(this.generatedScript, "divConteudo", "generatedScript");
      this.copyMessage = this.exportService.setMessageCopyClipBoard();
    } else {
      this.exportService.copyGeneratedScript(this.alternativeGeneratedScript, "divConteudoAlternativo", "alternativeGeneratedScript");
      this.copyMessage = this.exportService.setAlternativeMessageCopyClipBoard();
    }    
  }

  cleanMessage(): void {
    this.scriptservice.setScript(this.generatedScript);
    this.copyMessage = this.exportService.cleanMessage();
    this.enableBtn = this.generatedScript == '';
  }

  dynamicDownloadTxt(): void {
    if(this.navActive == "1"){
      this.exportService.dynamicDownloadTxt(this.generatedScript);
      this.copyMessage = this.exportService.setMessageCopyClipBoard();
    } else {
      this.exportService.dynamicDownloadTxt(this.alternativeGeneratedScript);
      this.copyMessage = this.exportService.setAlternativeMessageDownload();
    }  
  }

  changeNavs(value){
    this.copyMessage = this.exportService.cleanMessage();
    this.navActive = value;
  }

  //######################

  checkMessage() {    
    if(Boolean(this.copyMessage)){
      this.copyMessage = this.exportService.cleanMessage();
    }
  } 

  checkAba() {    
    this.enableAba = Boolean(this.alternativeGeneratedScript);
  } 

}
