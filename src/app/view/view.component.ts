import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared/shared-data.service';

@Component({
  selector: 'app-view',
  templateUrl: 'view.component.html',
  styleUrls: ['view.component.css']
})
export class ViewComponent implements OnInit {

  public viewUserName!: String;

  constructor(private shared: SharedDataService) { }

  ngOnInit(): void {
    //below I'am getting value from the shared-data.service.ts which
    //I had set inside the login.component.ts file.
    this.viewUserName = this.shared.getUserName();
  }

  //running a for loop inside html page using '*ngFor' directive.
  personDetails: any[] = [
    {
    'project':'test project',
    'id':'test id'
    },
    {
    'project':'test project - 2',
    'id':'test id - 2'
    }

];



}
