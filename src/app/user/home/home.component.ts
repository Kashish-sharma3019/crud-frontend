import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {AppService} from './../../app.service'
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
   allUser=[];
  
  
  
  
  constructor(  public router:Router,public appService:AppService) { }

  ngOnInit() {
  


 
this.allUser=this.appService.getAllUsers().subscribe(

data=>{
  this.allUser=data

  console.log(this.allUser,"hjkhbv")
},
error=>
{
 console.log("some error occured");
}

)}
   deleteUsers(userId:Number) {
     console.log("kaksksksksdk")

  this.appService.deleteUsers(userId).subscribe(data=> {
     
     
    console.log('Deleted');

  });

}
editUsers(userId,firstName,lastName,email) {
  console.log("kaksksksksdk")

this.appService.editUsers(userId,firstName,lastName,email).subscribe(res => {

   console.log(firstName)
 console.log('Edited');

});

}



}



   
  


    


