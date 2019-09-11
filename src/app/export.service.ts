import { Injectable } from '@angular/core';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  private generatedScript: string;

  cleanMessage(): string {
    return '';
  }

  setMessageCopyClipBoard(): string {
    return 'Script has been copied to Clipboard';
  }

  setAlternativeMessageCopyClipBoard(): string {
    return 'Alternative script has been copied to Clipboard';
  }

  setMessageDownload(): string {
    return 'The script is ready for download';    
  }

  setAlternativeMessageDownload(): string {
    return 'The alternative script is ready for download';    
  }

  copyGeneratedScript(value: string, div: string, aba: string) {

    this.generatedScript = value;
    
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.generatedScript;

    var divAtual = document.getElementById(div);
    var divText = document.getElementById(aba);
    

    divAtual.insertBefore(selBox, divText);

    selBox.focus();
    selBox.select();
    document.execCommand('copy');

  }

  generateFileName(): string {

    var objToday  = new Date();
    var dd = String(objToday.getDate()).padStart(2, '0');
    var mm = String(objToday.getMonth() + 1).padStart(2, '0'); 
    var yyyy = objToday.getFullYear();
    var hour = String(objToday.getHours() + 1).padStart(2, '0');
    var minute = String(objToday.getMinutes() + 1).padStart(2, '0');
    var second = String(objToday.getSeconds() + 1).padStart(2, '0');
    
    var today = yyyy + mm + dd + hour + minute + second;

    return today;
  }


  fakeValidateUserData(value: string) {
    return of(value);
  }

  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }

  dynamicDownloadTxt(value: string) {
    this.fakeValidateUserData(value).subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'delta-' + this.generateFileName() + '.sql',
        text: res 
      });
    });

  }

  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    var event = new MouseEvent("click");
    element.dispatchEvent(event);
  }
}
