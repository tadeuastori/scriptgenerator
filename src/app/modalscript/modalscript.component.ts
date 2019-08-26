import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ExportService } from '../export.service';
import { ScriptService } from '../script.service';
// import { Observable } from 'rxjs';
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
    interval(1000).subscribe(x => this.generatedScript = this.scriptservice.GetScript());
              }

  pageTitleModal: string = '';
  generatedScript: string = '';
  copyMessage: string = '';
  getCommit: boolean = true;
  getBeginEnd: boolean = true;
  isMobileDevice: boolean = this.appcomponent.isMobileDevice;


  ngOnInit() {
    this.pageTitleModal = this.appcomponent.pageTitle;
  }

  changeGetCommit(): void {
    // this.getCommit = !this.getCommit;
    // this.generatedScript = String(this.getCommit);
  }

  changeGetBeginEnd(): void {
    
    // if(!this.getBeginEnd)
    // { this.generatedScript = this.scriptservice.removeBeginEnd();}
    // else
    // { this.generatedScript = this.scriptservice.insertBeginEnd();}

  }

  openScript(): void {
    this.generatedScript = this.scriptservice.GetScript();   
  }

//######################

  copyGeneratedScript(): void {
    this.exportService.copyGeneratedScript(this.generatedScript);
    this.copyMessage = this.exportService.setMessageCopyClipBoard();
  }

  cleanCopyClipBoard(): void{
    this.scriptservice.setScript(this.generatedScript);
    this.copyMessage = this.exportService.cleanCopyClipBoard();
  }

  dynamicDownloadTxt(): void{
    this.exportService.dynamicDownloadTxt(this.generatedScript);
  }
  
}
