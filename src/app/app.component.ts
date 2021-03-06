import { Component, ChangeDetectorRef, OnInit  } from '@angular/core';

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
    private cdr: ChangeDetectorRef
  ) { }

  title = 'Script Generator';
  pageTitle = 'Dashboard';
  pageImg= './assets/img/imgDashboard.png';

  ngOnInit() {
    this.checkDevice();
  }

  cdrMethod(): void {
    this.checkDevice();
    this.cdr.detectChanges();
  }

  checkDevice(): void{
    var ua = navigator.userAgent;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
       this.isMobileDevice = true;
    else
      this.isMobileDevice = false;
  }
  
}
