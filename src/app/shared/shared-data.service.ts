import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  loginUserName!: string;

  constructor() { }

  //here I'am passing data between login page and home page
  setUserName(data: string){
    this.loginUserName = data;
  }

  getUserName(){
    return this.loginUserName;
  }

}
