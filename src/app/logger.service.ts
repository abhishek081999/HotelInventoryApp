import { Injectable } from '@angular/core';

@Injectable(
//   {
//    providedIn: 'root' //for optionalif there is no providein
// }
)
export class LoggerService {

  constructor() { }
  log(msg:string){
    console.log(msg);
  }
}
