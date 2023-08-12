import { Injectable } from '@angular/core';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
isloggedIn:boolean=false;
isAdmin:boolean=false;
  constructor() { }

  login(email:string,password:string){
    if(email==="admin@gmail.com" &&
    password ==="admin"){
      this.isloggedIn=true;
      this.isAdmin=true;
    }
    else if(email==="user@gmail.com" &&
    password ==="user"){
      this.isloggedIn=true;
      this.isAdmin=false;
    }
    return this.isloggedIn;
  }

}
