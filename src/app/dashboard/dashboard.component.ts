import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Generator } from '../generator';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private appcomponent: AppComponent,
              private generatorservice: GeneratorService
              ) 
  { }

  generatorList: Generator[];

  ngOnInit() {
    this.getGeneratorList();
    this.appcomponent.pageTitle = "Dashboard";
    this.appcomponent.showCard = false;
    this.appcomponent.cdrMethod();
  }

  getRandomColor(): string {
    var min = Math.ceil(0);
    var max = Math.floor(4);

    return 'card bg-'+ this.generatorservice.getCardColorType(Math.floor(Math.random() * (max - min + 1)) + min) +' text-white text-center p-3 linkPag';    
  }

  getGeneratorList(): void {
    this.generatorservice.getGenerators()
    .subscribe(generator => this.generatorList = generator);
  }

  getStatus(version:string): string{
    var retorno;

    if(version.match('v1.0')) {
      retorno = 'new';
    } else {
      retorno = 'update';
    }

    return retorno;
  }

  showVersion(modify: Date): boolean{
    var returnValue = true;

    var oneDay = 24*60*60*1000;
    var c = Math.round(Math.abs((modify.getTime() - new Date().getTime())/(oneDay)));

    if(c > 15)
    {returnValue = false;}

    return returnValue;
  }
}
