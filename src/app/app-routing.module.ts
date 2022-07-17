import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  /*
  here login page will be displayed first while routing when the 
  angular application gets started as I had included the url path as ""
  here if I included "login" instead of "" and in module change the bootstrap 
  component to LoginComponent instead of AppComponent then always ther will be overlapping
  of webpages in my application.
  */
  {path:"",component:LoginComponent},
  //here I'am including name string along home url string
  {path:"home/:name",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"view",component:ViewComponent},
  {path:"update",component:UpdateComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
