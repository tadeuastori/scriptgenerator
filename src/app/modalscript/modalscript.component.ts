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
    interval(1000).subscribe(x => this.generatedScript = this.scriptservice.GetScript());
    interval(500).subscribe(y => this.enableBtn = (this.generatedScript == ''));
  }

  pageTitleModal: string = '';
  generatedScript: string = '';
  copyMessage: string = '';
  isMobileDevice: boolean = this.appcomponent.isMobileDevice;
  enableBtn: boolean = true;

  ngOnInit() {
    this.pageTitleModal = this.appcomponent.pageTitle;
  }

  openScript(): void {
    this.generatedScript = this.scriptservice.GetScript();
  }

  //######################

  copyGeneratedScript(): void {
    this.exportService.copyGeneratedScript(this.generatedScript);
    this.copyMessage = this.exportService.setMessageCopyClipBoard();
  }

  cleanMessage(): void {
    this.scriptservice.setScript(this.generatedScript);
    this.copyMessage = this.exportService.cleanMessage();
    this.wasGenerated();
  }

  dynamicDownloadTxt(): void {
    this.exportService.dynamicDownloadTxt(this.generatedScript);
    this.copyMessage = this.exportService.setMessageDownload();
  }

  //######################

  wasGenerated() {
    this.enableBtn = this.generatedScript == '';
  }

}
