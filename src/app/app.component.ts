import { Component, ChangeDetectorRef, OnInit  } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
  showCard: boolean = false;
  showPageName: boolean = true;
  isMobileDevice: boolean = false;

  constructor(
    private location: Location,
    private cdr: ChangeDetectorRef
  ) { }

  title = 'Script Generator';
  pageBtn = "botões git/download";
  pageTitle = 'Dashboard';
  appVersion = '';

  ngOnInit() {
    this.checkDevice();
  }

  cdrMethod(): void {
    this.checkDevice();
    this.cdr.detectChanges();
  }

  goBack(): void {
    this.checkDevice();
    this.location.back();
  }    

  checkDevice(): void{
    var ua = navigator.userAgent;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
       this.isMobileDevice = true;
    else
      this.isMobileDevice = false;
  }
  
}
