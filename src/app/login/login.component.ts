import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedDataService } from '../shared/shared-data.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  //here if i didnt include the Router class inside contructor
  //then this router object ould not be initialized and throw error.
  constructor(private router: Router, private shared: SharedDataService) { }

  ngOnInit(): void {
  }

  //here I'am including all the form elements inside one group
  loginForm = new FormGroup({
  userName: new FormControl(''),
  password: new FormControl('')
 });

 //here along with the home page url i'am sending user name in url string.
 userNameSending(name: String){
  //the below method will navigate login page to homepage
  this.router.navigate(['home',name]);
}

//when the user clicks on submit button inside the login page then
//this login page will be moved to home page.
 homePage():boolean{
  /*
  here 'this.loginForm.get('userName')?.value' the value that I'am fetching using html form to 
  component is known as one-way data binding.
  */
  /*
  when this function is invoked on submit button click the 
  first I'am fetching username and password from html element and comparing it.
  */
  if(this.loginForm.get('userName')?.value=="shubham" && 
  this.loginForm.get('password')?.value=="ssa@123"){
  /*
  this.userNameSending(this.loginForm.get('userName')?.value);
  below I'am setting value inside the shared-data.service.ts
  */
  this.shared.setUserName(this.loginForm.get('userName')?.value);
  //now I'am navigating to the home page.
  this.router.navigate(['home']);
  }
  /*if(this.loginForm.get('userName')?.value!="shubham"){
    return false;
  }
  if(this.loginForm.get('password')?.value==null){
    return false;
  }*/
  return true;

}

}
