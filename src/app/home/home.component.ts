import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  public userName!: String;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){

    //here the username that I got inside this homepage url id is fetched below.
    this.route.params.subscribe((param : Params) => {
      this.userName = param['name'];
    });
    
  }


}
