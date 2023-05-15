import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EamilComponent} from 'src/app/eamil/eamil.component'
import {HomeComponent}  from 'src/app/home/home.component'
const routes: Routes = [
  {
    path: "email",
     component : EamilComponent ,
     pathMatch:"full"}
  ,
  {
    path:"" , 
    component : HomeComponent ,
    pathMatch: "full"
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
