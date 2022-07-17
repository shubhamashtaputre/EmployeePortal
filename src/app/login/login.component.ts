import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  //here if i didnt include the Router class inside contructor
  //then this router object ould not be initialized and throw error.
  constructor(private router: Router) { }

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
 homePage(){
  //when this function is invoked on submit button click the 
  //first I'am fetching username and password from html element and comparing it.
  if(this.loginForm.get('userName')?.value=="shubham" && 
  this.loginForm.get('password')?.value=="ssa@123"){
    this.userNameSending(this.loginForm.get('userName')?.value);
  }
}

}
