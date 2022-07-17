import { Component, Input, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
import { SharedDataService } from '../shared/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  public userName!: String;

  constructor(private router: Router, private route: ActivatedRoute, 
    private shared: SharedDataService) { }

  ngOnInit(){
    //below I'am getting value from the shared-data.service.ts which
    //I had set inside the login.component.ts file.
    this.userName = this.shared.getUserName();
    //here the username that I got inside this homepage url id is fetched below.
    /*this.route.params.subscribe((param : Params) => {
      this.userName = param['name'];
    });*/    
  }

}
