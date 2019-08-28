import { Injectable } from '@angular/core';
import { GENERATORS } from './dashboard/mock-generators';
import { Generator } from './generator';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  getGenerators(): Observable<Generator[]>{
    return of(GENERATORS);
  }

  // getGenerator(idx: number): Generator{
  //   return GENERATORS[idx];
  // }

  getGenerator(component: string): Generator{

    for (let item of GENERATORS){

      if(item.link == component){
        return item;
      }

    }

    return null;    
  }

}
