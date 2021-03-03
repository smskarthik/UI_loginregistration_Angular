import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User();
  msg='';

  constructor(private _service : RegistrationService, private _router : Router) { }
 
  ngOnInit(): void {
  }

  RegisterUser(){
    this._service.RegisterUserFromRemote(this.user).subscribe(
      data => {
        console.log("User Registered Successfully!");
        this._router.navigate(['/'])
      },
      error =>{
        console.log("exception occured");
       this.msg="Bad credentials, please enter valid emailId and password";
      }
    )
 
 } 

 gotologin(){
  this._router.navigate(['/'])
 }



}
